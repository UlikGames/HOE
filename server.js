const express = require('express');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const multer = require('multer');
const nodemailer = require('nodemailer');
const session = require('express-session');
require('dotenv').config(); // .env dosyasından şifreyi alıyoruz amk

const app = express();
const PORT = process.env.PORT || 3000; // Railway otomatik PORT veriyor
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin'; // şifre buradan geliyor, değiştir işte

// Session yönetimi - backend'de tutulacak
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key-change-this-in-production',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // HTTPS için true yap
    httpOnly: true,
    maxAge: 2 * 60 * 60 * 1000, // 2 saat
    path: '/', // Tüm sayfalarda geçerli
    sameSite: 'lax' // Cross-site isteklerde cookie gönder
  }
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // form data için
// NOT: express.static en sona taşındı - API route'ları önce çalışsın diye

// Multer konfigürasyonu - dosya sistemi için
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(__dirname, 'images', 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const fileName = 'product-' + Date.now() + '-' + Math.round(Math.random() * 1E9) + 
                     path.extname(file.originalname);
    cb(null, fileName);
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // max 5MB
  fileFilter: function (req, file, cb) {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Sadece resim dosyaları yüklenebilir!'));
    }
  }
});

// frontend şifreyi kontrol etmek için buraya geliyor - BACKEND SESSION KULLANIYOR
app.post('/api/admin/check-password', (req, res) => {
  const { password } = req.body;
  
  if (password === ADMIN_PASSWORD) {
    // Başarılı giriş - session oluştur
    req.session.isAdmin = true;
    req.session.loginTime = Date.now();
    return res.json({ success: true });
  } else {
    return res.status(401).json({ success: false, error: 'Yanlış şifre!' });
  }
});

// Session kontrolü - her sayfa yüklendiğinde çağrılacak
app.get('/api/admin/check-session', (req, res) => {
  if (req.session.isAdmin) {
    const loginTime = req.session.loginTime || Date.now();
    const now = Date.now();
    const elapsed = now - loginTime;
    const SESSION_TIMEOUT = 2 * 60 * 60 * 1000; // 2 saat
    
    if (elapsed > SESSION_TIMEOUT) {
      // Session süresi dolmuş
      req.session.destroy();
      return res.json({ authenticated: false, expired: true });
    }
    
    return res.json({ authenticated: true, loginTime: loginTime });
  } else {
    return res.json({ authenticated: false });
  }
});

// Çıkış yap
app.post('/api/admin/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ success: false, error: 'Çıkış yapılamadı' });
    }
    return res.json({ success: true });
  });
});

// API istekleri için session kontrolü - BACKEND SESSION KULLANIYOR
function checkAdminAuth(req, res, next) {
  // Önce session kontrolü yap
  if (req.session.isAdmin) {
    const loginTime = req.session.loginTime || Date.now();
    const now = Date.now();
    const elapsed = now - loginTime;
    const SESSION_TIMEOUT = 2 * 60 * 60 * 1000; // 2 saat
    
    if (elapsed > SESSION_TIMEOUT) {
      req.session.destroy();
      return res.status(401).json({ error: 'Oturum süresi doldu. Lütfen tekrar giriş yapın.' });
    }
    
    return next();
  }
  
  // Session yoksa, eski yöntemle şifre kontrolü (geriye dönük uyumluluk için)
  const providedPassword = req.headers['x-admin-password'] || req.body.password;
  
  if (!providedPassword || providedPassword !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Yetkisiz erişim! Şifre gerekli.' });
  }
  
  // Şifre doğruysa session oluştur
  req.session.isAdmin = true;
  req.session.loginTime = Date.now();
  
  next();
}
// Helper fonksiyon: data-products.js dosyasını oku
function readDataProducts() {
  const dataProductsPath = path.join(__dirname, 'js', 'data-products.js');
  if (!fs.existsSync(dataProductsPath)) {
    return { products: [], mainCategories: [] };
  }
  
  const content = fs.readFileSync(dataProductsPath, 'utf8');
  
  // productsData array'ini extract et - daha güvenilir regex
  // İlk 'var productsData = [' ile başlayıp, sonraki '];' ile biten kısmı bul
  const productsStart = content.indexOf('var productsData = [');
  const mainCategoriesStart = content.indexOf('var mainCategories = [');
  
  let products = [];
  let mainCategories = [];
  
  if (productsStart !== -1) {
    try {
      // 'var productsData = [' sonrasından başla
      let productsContent = content.substring(productsStart + 'var productsData = '.length);
      
      // İlk '];' bul (mainCategories'dan önce)
      let productsEnd = productsContent.indexOf('];');
      if (productsEnd === -1) {
        // Eğer '];' bulunamazsa, mainCategories başlangıcına kadar al
        if (mainCategoriesStart !== -1) {
          productsEnd = content.substring(productsStart).indexOf('var mainCategories');
        }
      }
      
      if (productsEnd !== -1) {
        productsContent = productsContent.substring(0, productsEnd + 2); // '];' dahil
        products = eval(productsContent);
      } else {
        // Fallback: eski regex yöntemi
        const productsMatch = content.match(/var productsData = (\[[\s\S]*?\]);/);
        if (productsMatch) {
          products = eval(productsMatch[1]);
        }
      }
      
      // Stok bilgisini kontrol et ve varsayılan değer ekle
      products.forEach(product => {
        if (product.stock === undefined || product.stock === null) {
          product.stock = 0;
        } else {
          product.stock = parseInt(product.stock) || 0;
        }
      });
    } catch (e) {
      console.error('Products parse error:', e);
    }
  }
  
  if (mainCategoriesStart !== -1) {
    try {
      // 'var mainCategories = [' sonrasından başla
      let categoriesContent = content.substring(mainCategoriesStart + 'var mainCategories = '.length);
      
      // İlk '];' bul
      let categoriesEnd = categoriesContent.indexOf('];');
      if (categoriesEnd !== -1) {
        categoriesContent = categoriesContent.substring(0, categoriesEnd + 2); // '];' dahil
        mainCategories = eval(categoriesContent);
      } else {
        // Fallback: eski regex yöntemi
        const mainCategoriesMatch = content.match(/var mainCategories = (\[[\s\S]*?\]);/);
        if (mainCategoriesMatch) {
          mainCategories = eval(mainCategoriesMatch[1]);
        }
      }
    } catch (e) {
      console.error('Categories parse error:', e);
    }
  }
  
  return { products, mainCategories };
}

// Helper fonksiyon: data-products.js dosyasına yaz
function writeDataProducts(products, mainCategories) {
  const dataProductsPath = path.join(__dirname, 'js', 'data-products.js');
  
  // Mevcut dosyayı oku (fonksiyonları korumak için)
  let content = '';
  if (fs.existsSync(dataProductsPath)) {
    content = fs.readFileSync(dataProductsPath, 'utf8');
  }
  
  // Stok bilgisini kontrol et ve varsayılan değer ekle (ekstra güvenlik)
  products.forEach(product => {
    if (product.stock === undefined || product.stock === null) {
      product.stock = 0;
    } else {
      product.stock = parseInt(product.stock) || 0;
    }
  });
  
  // Header'ı oluştur
  let newContent = '// ============================================\n';
  newContent += '// ürün datası - admin panelinden otomatik güncelleniyor\n';
  newContent += '// manuel düzenleme yapma, admin.html kullan!\n';
  newContent += '// ============================================\n\n';
  newContent += 'var productsData = ' + JSON.stringify(products, null, 4) + ';\n\n';
  newContent += '// ============================================\n';
  newContent += '// ANA KATEGORİLER - admin panelinden otomatik güncelleniyor\n';
  newContent += '// ============================================\n';
  newContent += 'var mainCategories = ' + JSON.stringify(mainCategories, null, 4) + ';\n\n';
  
  // Global scope'a da ata
  newContent += '// Global scope\'a da ata (scope sorunlarını önlemek için)\n';
  newContent += 'if (typeof window !== \'undefined\') {\n';
  newContent += '  window.mainCategories = mainCategories;\n';
  newContent += '}\n\n';
  
  // Fonksiyonları ekle (mevcut dosyadan kopyala - getCategorySlugFromURL'den sonrasını al)
  const functionsMatch = content.match(/\/\/ ============================================\s*\n\/\/ URL'den kategori slug'ını alan fonksiyon[\s\S]*$/);
  if (functionsMatch) {
    newContent += functionsMatch[0];
  } else {
    // Minimal fonksiyonlar (fallback)
    newContent += '// ============================================\n';
    newContent += '// URL\'den kategori slug\'ını alan fonksiyon\n';
    newContent += '// ============================================\n';
    newContent += 'function getCategorySlugFromURL() {\n';
    newContent += '  var path = window.location.pathname;\n';
    newContent += '  var filename = path.split(\'/\').pop() || path.split(\'\\\\\').pop();\n';
    newContent += '  var slug = filename.replace(\'.html\', \'\');\n';
    newContent += '  return slug;\n';
    newContent += '}\n';
  }
  
  // Dosyayı yaz
  try {
    fs.writeFileSync(dataProductsPath, newContent, 'utf8');
    console.log('✅ Products saved to file. Total products:', products.length);
  } catch (error) {
    console.error('❌ Error writing products file:', error);
    throw error;
  }
}

// ürünleri kaydet ve kategori sayfalarını oluştur - asıl iş burada yapılıyor
app.post('/api/products/save', checkAdminAuth, async (req, res) => {
  try {
    const { products, mainCategories, carousel } = req.body;

    if (!products || !Array.isArray(products)) {
      return res.status(400).json({ error: 'Ürünler array olmalı!' });
    }

    if (!mainCategories || !Array.isArray(mainCategories)) {
      return res.status(400).json({ error: 'Ana kategoriler array olmalı!' });
    }

    // Stok bilgisini kontrol et ve varsayılan değer ekle
    products.forEach(product => {
      if (product.stock === undefined || product.stock === null) {
        product.stock = 0;
      } else {
        product.stock = parseInt(product.stock) || 0;
      }
    });

    // Dosyaya kaydet
    writeDataProducts(products, mainCategories);
    
    // Carousel'i data-slider.js'e kaydet (eğer varsa)
    if (carousel) {
      const slides = Array.isArray(carousel) ? carousel : (carousel.slides || []);
      const excluded = carousel.excludedAutoCategories || [];
      const slideOrder = carousel.slideOrder || [];
      
      const sliderPath = path.join(__dirname, 'js', 'data-slider.js');
      let sliderContent = 'var sliderData = ' + JSON.stringify({
        slides: slides,
        excludedAutoCategories: excluded,
        slideOrder: slideOrder
      }, null, 2) + ';';
      
      fs.writeFileSync(sliderPath, sliderContent, 'utf8');
    }

    // Kategori sayfalarını oluştur (generate-categories script'i)
    exec('npm run generate-categories', { cwd: __dirname }, (error, stdout, stderr) => {
      if (error) {
        return res.status(500).json({ 
          error: 'Kategori sayfaları oluşturulamadı!', 
          details: error.message,
          stdout,
          stderr
        });
      }

      res.json({ 
        success: true, 
        message: 'Ürünler dosyaya kaydedildi ve kategori sayfaları oluşturuldu!',
        productsCount: products.length,
        categoriesCount: mainCategories.length
      });
    });

  } catch (error) {
    console.error('Products save error:', error);
    res.status(500).json({ error: error.message });
  }
});

// mevcut ürünleri getir - admin panelde gösterilsin diye
app.get('/api/products', async (req, res) => {
  try {
    // Dosyadan getir
    const { products, mainCategories } = readDataProducts();
    
    // Carousel'i data-slider.js'den oku
    let carouselSlides = [];
    let excludedAutoCategories = [];
    let slideOrder = [];
    const sliderPath = path.join(__dirname, 'js', 'data-slider.js');
    if (fs.existsSync(sliderPath)) {
      try {
        const sliderContent = fs.readFileSync(sliderPath, 'utf8');
        // Regex'i düzelt - çoklu satırları yakalamak için [\s\S]* kullan, non-greedy
        // Son noktalı virgüle kadar olan tüm içeriği yakala
        // Önce basit pattern dene
        let sliderMatch = sliderContent.match(/var\s+sliderData\s*=\s*({[\s\S]*?});/);
        
        // Eğer eşleşmezse, alternatif pattern dene (satır sonları olabilir)
        if (!sliderMatch) {
          sliderMatch = sliderContent.match(/var\s+sliderData\s*=\s*(\{[\s\S]*?\});/);
        }
        
        // Eğer hala eşleşmezse, tüm dosyayı parse et
        if (!sliderMatch) {
          // Dosyanın sonundaki noktalı virgülü bul
          const lastSemicolon = sliderContent.lastIndexOf(';');
          if (lastSemicolon > 0) {
            const startMatch = sliderContent.match(/var\s+sliderData\s*=\s*\{/);
            if (startMatch) {
              const startPos = startMatch.index + startMatch[0].length - 1; // '{' karakterinin pozisyonu
              const objContent = sliderContent.substring(startPos, lastSemicolon);
              sliderMatch = [null, objContent];
            }
          }
        }
        
        if (sliderMatch && sliderMatch[1]) {
          try {
            // eval kullan çünkü JavaScript object literal formatında
            const sliderData = eval('(' + sliderMatch[1] + ')');
            carouselSlides = sliderData.slides || [];
            excludedAutoCategories = sliderData.excludedAutoCategories || [];
            slideOrder = sliderData.slideOrder || [];
            console.log('✅ Carousel verisi okundu:', {
              slidesCount: carouselSlides.length,
              slideOrderCount: slideOrder.length,
              excludedCount: excludedAutoCategories.length,
              slideOrder: slideOrder
            });
          } catch (parseError) {
            console.error('❌ sliderData parse hatası:', parseError.message);
            console.error('Dosya içeriği (ilk 500 karakter):', sliderContent.substring(0, 500));
            // Fallback: JSON.parse dene
            try {
              const jsonMatch = sliderContent.match(/var\s+sliderData\s*=\s*({[\s\S]*?});/);
              if (jsonMatch && jsonMatch[1]) {
                const sliderData = JSON.parse(jsonMatch[1]);
                carouselSlides = sliderData.slides || [];
                excludedAutoCategories = sliderData.excludedAutoCategories || [];
                slideOrder = sliderData.slideOrder || [];
                console.log('✅ Carousel verisi JSON.parse ile okundu');
              }
            } catch (jsonError) {
              console.error('❌ JSON.parse de başarısız:', jsonError.message);
            }
          }
        } else {
          console.warn('⚠️ sliderData pattern eşleşmedi');
          console.warn('Dosya içeriği (ilk 500 karakter):', sliderContent.substring(0, 500));
        }
      } catch (e) {
        console.error('❌ Carousel okuma hatası:', e.message, e.stack);
      }
    } else {
      console.warn('⚠️ data-slider.js dosyası bulunamadı:', sliderPath);
    }
    
    // Debug: carousel verisini kontrol et
    console.log('📤 /api/products response hazırlanıyor:', {
      carouselSlidesCount: carouselSlides.length,
      slideOrderCount: slideOrder.length,
      excludedCount: excludedAutoCategories.length
    });
    
    const carouselObj = {
      slides: carouselSlides,
      excludedAutoCategories: excludedAutoCategories,
      slideOrder: slideOrder
    };
    
    console.log('📤 Carousel objesi:', JSON.stringify(carouselObj, null, 2).substring(0, 500));
    
    res.json({ 
      products: products, 
      mainCategories: mainCategories, 
      excludedAutoCategories, 
      carousel: carouselObj
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Partners API endpoints
app.get('/api/partners', async (req, res) => {
  console.log('📋 /api/partners endpoint çağrıldı');
  try {
    const partnersPath = path.join(__dirname, 'data', 'partners.json');
    let partners = [];
    
    if (fs.existsSync(partnersPath)) {
      const content = fs.readFileSync(partnersPath, 'utf8');
      partners = JSON.parse(content);
    }
    
    res.json({ partners: partners });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/partners/save', checkAdminAuth, async (req, res) => {
  try {
    const { partners } = req.body;
    
    if (!partners || !Array.isArray(partners)) {
      return res.status(400).json({ error: 'Partners array olmalı!' });
    }
    
    const partnersPath = path.join(__dirname, 'data', 'partners.json');
    const dataDir = path.join(__dirname, 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    fs.writeFileSync(partnersPath, JSON.stringify(partners, null, 2), 'utf8');
    res.json({ success: true, message: 'İş ortakları dosyaya kaydedildi!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// resim yükleme endpoint'i - dosya sistemine yükler
app.post('/api/upload-image', checkAdminAuth, upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'Resim dosyası yüklenmedi!' });
    }

    // Dosya zaten multer tarafından kaydedildi
    const relativePath = '/images/uploads/' + req.file.filename;
    const fullUrl = req.protocol + '://' + req.get('host') + relativePath;
    
    res.json({ 
      success: true, 
      url: relativePath, // Frontend için relative path
      filename: req.file.filename,
      path: relativePath
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// İletişim formu - email gönderme endpoint'i
app.post('/api/contact/send', async (req, res) => {
  try {
    const { fullname, phone, email, subject, message, kvkk } = req.body;
    
    // Validasyon
    if (!fullname || !phone || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'Tüm alanlar doldurulmalıdır!' 
      });
    }
    
    if (!kvkk) {
      return res.status(400).json({ 
        success: false, 
        error: 'KVKK şartlarını kabul etmelisiniz!' 
      });
    }
    
    // Email format kontrolü
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        error: 'Geçerli bir email adresi giriniz!' 
      });
    }
    
    // Nodemailer kullan
    const smtpPort = parseInt(process.env.SMTP_PORT) || 587;
    const isSecurePort = smtpPort === 465;
    
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: smtpPort,
      secure: isSecurePort,
      auth: {
        user: process.env.SMTP_USER || '',
        pass: process.env.SMTP_PASS || ''
      },
      tls: {
        rejectUnauthorized: false
      }
    });
    
    const senderEmail = email;
    const senderName = fullname;
    const siteEmail = process.env.SMTP_USER || 'noreply@shop.com';
    
    const mailOptions = {
      from: `"Shop İletişim Formu" <${siteEmail}>`,
      to: process.env.CONTACT_EMAIL || siteEmail,
      replyTo: `${senderName} <${senderEmail}>`,
      subject: `İletişim Formu: ${subject}`,
      html: `
        <h2>Yeni İletişim Formu Mesajı</h2>
        <p><strong>Ad Soyad:</strong> ${fullname}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Konu:</strong> ${subject}</p>
        <hr>
        <h3>Mesaj:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Bu mesaj iletişim formundan gönderilmiştir.</small></p>
        <p><small>Gönderim Zamanı: ${new Date().toLocaleString('tr-TR')}</small></p>
        <p><small style="color: #666;"><strong>Not:</strong> Bu mesaja cevap vermek için "Reply" (Yanıtla) butonuna basın. Mesaj doğrudan ${senderName} (${senderEmail}) adresine gönderilecektir.</small></p>
      `,
      text: `
Yeni İletişim Formu Mesajı

Ad Soyad: ${fullname}
Telefon: ${phone}
Email: ${email}
Konu: ${subject}

Mesaj:
${message}

---
Bu mesaj iletişim formundan gönderilmiştir.
Gönderim Zamanı: ${new Date().toLocaleString('tr-TR')}
      `
    };
    
    // Email gönder
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ 
          success: false, 
          error: 'Email gönderilemedi. Lütfen daha sonra tekrar deneyin.' 
        });
      }
      res.json({ 
        success: true, 
        message: 'Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.' 
      });
    });
    
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin.' 
    });
  }
});

// Araç stoğunu getir
app.get('/api/vehicle-stock', checkAdminAuth, async (req, res) => {
  try {
    const vehicleStockPath = path.join(__dirname, 'data', 'vehicle-stock.json');
    let vehicleStock = [];
    
    if (fs.existsSync(vehicleStockPath)) {
      const content = fs.readFileSync(vehicleStockPath, 'utf8');
      vehicleStock = JSON.parse(content);
    }
    
    res.json({ success: true, vehicleStock });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Araç stoğuna ürün ekle
app.post('/api/vehicle-stock', checkAdminAuth, async (req, res) => {
  try {
    let items = req.body.items; // Yeni format: [{ identifier, quantity }, ...]
    const identifiers = req.body.identifiers; // Eski format: [identifier, ...]
    
    // Eski format desteği (backward compatibility)
    if (identifiers && Array.isArray(identifiers) && (!items || !Array.isArray(items))) {
      // Eski formatı yeni formata dönüştür (quantity = 0 olarak)
      items = identifiers.map(identifier => ({ identifier, quantity: 0 }));
    }
    
    if (!items || !Array.isArray(items)) {
      return res.status(400).json({ error: 'items array olmalı! Format: [{ identifier, quantity }, ...] veya identifiers array (eski format)' });
    }
    
    const vehicleStockPath = path.join(__dirname, 'data', 'vehicle-stock.json');
    const dataDir = path.join(__dirname, 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    // Ana stok verilerini oku
    const { products } = readDataProducts();
    
    // Vehicle stock'u oku
    let vehicleStock = [];
    if (fs.existsSync(vehicleStockPath)) {
      const content = fs.readFileSync(vehicleStockPath, 'utf8');
      vehicleStock = JSON.parse(content);
    }
    
    // Eski formatı yeni formata dönüştür (backward compatibility)
    vehicleStock = vehicleStock.map(item => {
      if (!item.quantity) {
        return { 
          identifier: item.identifier, 
          quantity: 0, 
          originalQuantity: 0,
          addedAt: item.addedAt || Date.now() 
        };
      }
      return item;
    });
    
    const existingIds = new Set(vehicleStock.map(item => item.identifier));
    let added = 0;
    let errors = [];
    
    // Her ürün için işlem yap
    for (const item of items) {
      const { identifier, quantity } = item;
      
      if (!identifier || quantity === undefined || quantity <= 0) {
        errors.push(`Geçersiz veri: ${identifier || 'N/A'}`);
        continue;
      }
      
      // Ana stokta ürünü bul
      const product = products.find(p => {
        const pSku = p.sku || '';
        const pTitle = typeof p.title === 'object' ? p.title.tr : p.title;
        return pSku === identifier || pTitle === identifier;
      });
      
      if (!product) {
        errors.push(`Ürün bulunamadı: ${identifier}`);
        continue;
      }
      
      const currentStock = parseInt(product.stock) || 0;
      
      if (currentStock < quantity) {
        errors.push(`${identifier}: Yetersiz stok (Mevcut: ${currentStock}, İstenen: ${quantity})`);
        continue;
      }
      
      // Ana stoktan düş
      product.stock = currentStock - quantity;
      
      // Vehicle stock'a ekle veya güncelle
      if (existingIds.has(identifier)) {
        // Zaten varsa miktarı artır
        const existingItem = vehicleStock.find(v => v.identifier === identifier);
        if (existingItem) {
          existingItem.quantity = (existingItem.quantity || 0) + quantity;
          existingItem.originalQuantity = (existingItem.originalQuantity || 0) + quantity;
        }
      } else {
        // Yeni ekle
        vehicleStock.push({ 
          identifier, 
          quantity: quantity,
          originalQuantity: quantity,
          addedAt: Date.now() 
        });
        existingIds.add(identifier);
        added++;
      }
    }
    
    // Ana stoku kaydet
    writeDataProducts(products, readDataProducts().mainCategories);
    
    // Vehicle stock'u kaydet
    fs.writeFileSync(vehicleStockPath, JSON.stringify(vehicleStock, null, 2), 'utf8');
    
    res.json({ 
      success: true, 
      message: added + ' ürün araç stoğuna eklendi',
      added,
      total: vehicleStock.length,
      vehicleStock,
      errors: errors.length > 0 ? errors : undefined
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Araç stoğunu güncelle (quantity değişiklikleri için)
app.put('/api/vehicle-stock', checkAdminAuth, async (req, res) => {
  try {
    const { vehicleStock } = req.body; // [{ identifier, quantity, originalQuantity, addedAt }, ...] formatında
    
    if (!vehicleStock || !Array.isArray(vehicleStock)) {
      return res.status(400).json({ error: 'vehicleStock array olmalı!' });
    }
    
    const vehicleStockPath = path.join(__dirname, 'data', 'vehicle-stock.json');
    const dataDir = path.join(__dirname, 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    // Vehicle stock'u kaydet
    fs.writeFileSync(vehicleStockPath, JSON.stringify(vehicleStock, null, 2), 'utf8');
    
    res.json({ 
      success: true, 
      message: 'Araç stoğu güncellendi',
      vehicleStock
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Araç stoğunu temizle
app.delete('/api/vehicle-stock', checkAdminAuth, async (req, res) => {
  try {
    const vehicleStockPath = path.join(__dirname, 'data', 'vehicle-stock.json');
    
    // Vehicle stock'u oku
    let vehicleStock = [];
    if (fs.existsSync(vehicleStockPath)) {
      const content = fs.readFileSync(vehicleStockPath, 'utf8');
      vehicleStock = JSON.parse(content);
    }
    
    // Eski formatı yeni formata dönüştür (backward compatibility)
    vehicleStock = vehicleStock.map(item => {
      if (!item.quantity) {
        return { 
          identifier: item.identifier, 
          quantity: 0, 
          originalQuantity: 0,
          addedAt: item.addedAt || Date.now() 
        };
      }
      return item;
    });
    
    // Ana stok verilerini oku
    const { products } = readDataProducts();
    let returnedCount = 0;
    let returnedItems = [];
    
    // Her vehicle stock item'ı için kalan miktarı ana stoka geri ekle
    for (const item of vehicleStock) {
      const { identifier, quantity } = item;
      const remainingQuantity = parseInt(quantity) || 0;
      
      if (remainingQuantity <= 0) continue;
      
      // Ana stokta ürünü bul
      const product = products.find(p => {
        const pSku = p.sku || '';
        const pTitle = typeof p.title === 'object' ? p.title.tr : p.title;
        return pSku === identifier || pTitle === identifier;
      });
      
      if (product) {
        const currentStock = parseInt(product.stock) || 0;
        product.stock = currentStock + remainingQuantity;
        returnedCount++;
        returnedItems.push({ identifier, quantity: remainingQuantity });
      }
    }
    
    // Ana stoku kaydet
    if (returnedCount > 0) {
      writeDataProducts(products, readDataProducts().mainCategories);
    }
    
    // Vehicle stock'u temizle
    fs.writeFileSync(vehicleStockPath, JSON.stringify([], null, 2), 'utf8');
    
    res.json({ 
      success: true, 
      message: 'Araç stoğu temizlendi' + (returnedCount > 0 ? ` ve ${returnedCount} ürünün kalan miktarı ana stoka geri döndürüldü` : ''),
      returnedCount,
      returnedItems
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ==================== GPS TAKİP API ENDPOINTS ====================
// GPS özellikleri kaldırıldı - Supabase bağımlılığı nedeniyle

// GPS: Driver sayfası
app.get('/gps-driver', (req, res) => {
  res.sendFile(path.join(__dirname, 'gps-driver.html'));
});
app.get('/gps-driver.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'gps-driver.html'));
});

// GPS: Panel sayfası (admin.html içinden erişilir)
app.get('/gps-panel', (req, res) => {
  res.sendFile(path.join(__dirname, 'gps-panel.html'));
});
app.get('/gps-panel.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'gps-panel.html'));
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
      return res.json({ 
        success: true, 
        message: 'Kategori HTML sayfası silindi: ' + slug + '.html' 
      });
    } else {
      // dosya yoksa hata verme, sadece bilgi ver
      return res.json({ 
        success: true, 
        message: 'Kategori HTML sayfası bulunamadı (zaten silinmiş olabilir)' 
      });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Static dosya servisini EN SONA koyuyoruz - API route'ları önce çalışsın
app.use(express.static('.')); // static dosyaları falan serve ediyor

// server'ı başlat - işte burada başlıyor her şey
async function startServer() {
  try {
    app.listen(PORT, () => {
      console.log(`🚀 Admin panel backend çalışıyor: http://localhost:${PORT}`);
      console.log(`📁 Admin panel: http://localhost:${PORT}/admin.html`);
    });
    
    // Process hatalarını yakala
    process.on('uncaughtException', (error) => {
      console.error('❌ Uncaught Exception:', error);
      // Server'ı kapatma, sadece log at
    });
    
    process.on('unhandledRejection', (reason, promise) => {
      console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
      // Server'ı kapatma, sadece log at
    });
    
  } catch (error) {
    console.error('❌ Sunucu başlatılamadı:', error);
    console.error('Stack:', error.stack);
    // Hata olsa bile process'i sonlandırma (Railway otomatik restart eder)
    // process.exit(1);
  }
}

startServer();

