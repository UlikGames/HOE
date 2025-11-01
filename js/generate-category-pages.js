// ============================================
// KATEGORİ SAYFALARINI OTOMATİK OLUŞTURAN SCRIPT
// Admin panelinden otomatik çalıştırılıyor - manuel çalıştırma gerekmez
// ============================================

var fs = require('fs');
var path = require('path');

// temizlik-urunleri.html dosyasını template olarak oku (root dizinde)
var templatePath = path.join(__dirname, '..', 'temizlik-urunleri.html');
var template = fs.readFileSync(templatePath, 'utf8');

// data-products.js dosyasını oku (aynı klasörde - js/)
var dataProductsPath = path.join(__dirname, 'data-products.js');
var dataProductsContent = fs.readFileSync(dataProductsPath, 'utf8');

// mainCategories array'ini extract et (basit regex ile)
// Bu biraz hacky ama çalışıyor
var mainCategoriesMatch = dataProductsContent.match(/var mainCategories = (\[[\s\S]*?\]);/);
if (!mainCategoriesMatch) {
  console.error('❌ mainCategories array bulunamadı!');
  process.exit(1);
}

// JavaScript'i eval ederek array'i al (sadece trusted code için)
// Daha güvenli bir yol istersen JSON formatına geçebiliriz
try {
  var mainCategories = eval(mainCategoriesMatch[1]);
  
  console.log('✅ ' + mainCategories.length + ' kategori bulundu\n');
  
  // Her kategori için HTML dosyası oluştur (root dizine)
  mainCategories.forEach(function(cat) {
    var slug = cat.slug;
    var htmlPath = path.join(__dirname, '..', slug + '.html');
    
    // Template'i kopyala (zaten dinamik, sadece dosya adını değiştir)
    var categoryHTML = template;
    
    // Title tag'ını güncelle (SEO için)
    var titleTag = '<title>' + cat.title.tr + ' - Shop</title>';
    var titleRegex = /<title>.*?<\/title>/;
    if (titleRegex.test(categoryHTML)) {
      categoryHTML = categoryHTML.replace(titleRegex, titleTag);
    }
    
    // Dosyayı yaz
    fs.writeFileSync(htmlPath, categoryHTML, 'utf8');
    console.log('✅ ' + slug + '.html oluşturuldu');
  });
  
  console.log('\n🎉 Tüm kategori sayfaları oluşturuldu!');
  
} catch (error) {
  console.error('❌ Hata:', error.message);
  process.exit(1);
}

