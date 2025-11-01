const express = require('express');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const multer = require('multer');
require('dotenv').config(); // .env dosyasından şifreyi alıyoruz amk

const app = express();
const PORT = process.env.PORT || 3000; // Railway otomatik PORT veriyor
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin'; // şifre buradan geliyor, değiştir işte

app.use(express.json());
app.use(express.static('.')); // static dosyaları falan serve ediyor

// images klasörünü oluştur (yoksa)
const imagesDir = path.join(__dirname, 'images', 'uploads');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// multer konfigürasyonu - dosya yükleme için
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, imagesDir);
  },
  filename: function (req, file, cb) {
    // dosya adını timestamp + orijinal isim yap
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, 'product-' + uniqueSuffix + ext);
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // max 5MB
  fileFilter: function (req, file, cb) {
    // sadece resim dosyaları
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Sadece resim dosyaları yüklenebilir!'));
    }
  }
});

// frontend şifreyi kontrol etmek için buraya geliyor
app.post('/api/admin/check-password', (req, res) => {
  const { password } = req.body;
  
  if (password === ADMIN_PASSWORD) {
    return res.json({ success: true });
  } else {
    return res.status(401).json({ success: false, error: 'Yanlış şifre!' });
  }
});

// API istekleri için şifre kontrolü - kimse sızmaya çalışmasın diye
function checkAdminAuth(req, res, next) {
  const providedPassword = req.headers['x-admin-password'] || req.body.password;
  
  if (!providedPassword || providedPassword !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Yetkisiz erişim! Şifre gerekli.' });
  }
  
  next();
}
// ürünleri kaydet ve kategori sayfalarını oluştur - asıl iş burada yapılıyor
app.post('/api/products/save', checkAdminAuth, (req, res) => {
  try {
    const { products, mainCategories } = req.body;

    if (!products || !Array.isArray(products)) {
      return res.status(400).json({ error: 'Ürünler array olmalı!' });
    }

    if (!mainCategories || !Array.isArray(mainCategories)) {
      return res.status(400).json({ error: 'Ana kategoriler array olmalı!' });
    }

    // data-products.js dosyasını okuyup içeriğini değiştiriyoruz
    const dataProductsPath = path.join(__dirname, 'js', 'data-products.js');
    let fileContent = fs.readFileSync(dataProductsPath, 'utf8');

    // productsData array'ini bul ve değiştir
    const productsDataMatch = fileContent.match(/var productsData = (\[[\s\S]*?\]);/);
    if (!productsDataMatch) {
      return res.status(500).json({ error: 'productsData array bulunamadı!' });
    }

    // JSON'u güzel formatla
    const productsJson = JSON.stringify(products, null, 2)
      .replace(/\n/g, '\n  ')
      .replace(/^  /, '');

    fileContent = fileContent.replace(
      /var productsData = \[[\s\S]*?\];/,
      `var productsData = ${productsJson};`
    );

    // mainCategories'ı da güncelle veya ekle
    const mainCategoriesMatch = fileContent.match(/var mainCategories = (\[[\s\S]*?\]);/);
    if (mainCategoriesMatch) {
      const mainCategoriesJson = JSON.stringify(mainCategories, null, 2)
        .replace(/\n/g, '\n  ')
        .replace(/^  /, '');

      fileContent = fileContent.replace(
        /var mainCategories = \[[\s\S]*?\];/,
        `var mainCategories = ${mainCategoriesJson};`
      );
    } else {
      // yoksa ekle bakalım
      const mainCategoriesJson = JSON.stringify(mainCategories, null, 2)
        .replace(/\n/g, '\n  ')
        .replace(/^  /, '');

      fileContent += `\n\nvar mainCategories = ${mainCategoriesJson};\n`;
    }

    fs.writeFileSync(dataProductsPath, fileContent, 'utf8');

    // kategori sayfalarını oluştur - script çalıştırıyoruz
    exec('npm run generate-categories', { cwd: __dirname }, (error, stdout, stderr) => {
      if (error) {
        console.error('Kategori sayfaları oluşturulurken hata:', error);
        return res.status(500).json({ 
          error: 'Kategori sayfaları oluşturulamadı!', 
          details: error.message,
          stdout,
          stderr
        });
      }

      console.log('Kategori sayfaları başarıyla oluşturuldu!');
      console.log(stdout);

      res.json({ 
        success: true, 
        message: 'Ürünler kaydedildi ve kategori sayfaları oluşturuldu!',
        productsCount: products.length,
        categoriesCount: mainCategories.length
      });
    });

  } catch (error) {
    console.error('Hata:', error);
    res.status(500).json({ error: error.message });
  }
});

// mevcut ürünleri getir - admin panelde gösterilsin diye
app.get('/api/products', (req, res) => {
  try {
    const dataProductsPath = path.join(__dirname, 'js', 'data-products.js');
    const fileContent = fs.readFileSync(dataProductsPath, 'utf8');

    // productsData'yı çıkar - eval kullanıyoruz çünkü lazy
    const productsMatch = fileContent.match(/var productsData = (\[[\s\S]*?\]);/);
    let products = [];
    if (productsMatch) {
      try {
        products = eval(productsMatch[1]);
      } catch (e) {
        console.error('productsData parse hatası:', e);
      }
    }

    // mainCategories'ı da çıkar
    const categoriesMatch = fileContent.match(/var mainCategories = (\[[\s\S]*?\]);/);
    let mainCategories = [];
    if (categoriesMatch) {
      try {
        mainCategories = eval(categoriesMatch[1]);
      } catch (e) {
        console.error('mainCategories parse hatası:', e);
      }
    }

    res.json({ products, mainCategories });
  } catch (error) {
    console.error('Hata:', error);
    res.status(500).json({ error: error.message });
  }
});

// resim yükleme endpoint'i - bilgisayardan resim yüklemek için
app.post('/api/upload-image', checkAdminAuth, upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'Resim dosyası yüklenmedi!' });
    }

    // yüklenen dosyanın URL'ini döndür
    const imageUrl = '/images/uploads/' + req.file.filename;
    
    res.json({ 
      success: true, 
      url: imageUrl,
      filename: req.file.filename
    });
  } catch (error) {
    console.error('Resim yükleme hatası:', error);
    res.status(500).json({ error: error.message });
  }
});

// kategori HTML sayfasını sil - kategori silindiğinde çağrılır
app.delete('/api/categories/:slug', checkAdminAuth, (req, res) => {
  try {
    const slug = req.params.slug;
    
    if (!slug) {
      return res.status(400).json({ error: 'Slug gerekli!' });
    }
    
    // kategori HTML dosyasının yolunu bul
    const htmlFilePath = path.join(__dirname, slug + '.html');
    
    // dosya var mı kontrol et
    if (fs.existsSync(htmlFilePath)) {
      // dosyayı sil
      fs.unlinkSync(htmlFilePath);
      console.log('✅ Kategori HTML sayfası silindi: ' + slug + '.html');
      return res.json({ 
        success: true, 
        message: 'Kategori HTML sayfası silindi: ' + slug + '.html' 
      });
    } else {
      // dosya yoksa hata verme, sadece bilgi ver
      console.log('ℹ️ Kategori HTML sayfası bulunamadı: ' + slug + '.html (zaten silinmiş olabilir)');
      return res.json({ 
        success: true, 
        message: 'Kategori HTML sayfası bulunamadı (zaten silinmiş olabilir)' 
      });
    }
  } catch (error) {
    console.error('Kategori HTML sayfası silinirken hata:', error);
    return res.status(500).json({ error: error.message });
  }
});

// server'ı başlat - işte burada başlıyor her şey
// Railway için 0.0.0.0 dinlemek gerekiyor, yoksa sadece localhost'tan erişilebilir
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Admin panel backend çalışıyor: http://0.0.0.0:${PORT}`);
  console.log(`📁 Admin panel: http://0.0.0.0:${PORT}/admin.html`);
});

