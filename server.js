const express = require('express');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
require('dotenv').config(); // .env dosyasından şifreyi alıyoruz amk

const app = express();
const PORT = 3000;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin'; // şifre buradan geliyor, değiştir işte

app.use(express.json());
app.use(express.static('.')); // static dosyaları falan serve ediyor

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

// server'ı başlat - işte burada başlıyor her şey
app.listen(PORT, () => {
  console.log(`🚀 Admin panel backend çalışıyor: http://localhost:${PORT}`);
  console.log(`📁 Admin panel: http://localhost:${PORT}/admin.html`);
});

