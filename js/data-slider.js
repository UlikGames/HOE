// ============================================
// slider datası - yeni slide eklemek süper kolay
// ana sayfadaki hero slider'ın item'ları burada
// ekle çıkar html'e dokunma
// ============================================
// 
// nasıl yeni slide eklersin:
// 1. aşağıdaki objelerden birini kopyala (şu { } içindekiler)
// 2. değerleri değiştir:
//    - image: resim yolu (örn: 'images/urunum.jpg')
//    - price: fiyat (örn: '$999' ya da 'iletişime geç')
//    - title: ürün adı
//    - description: açıklama
//    - hasOverlay: true ya da false (resme koyu overlay ekler)
// 3. önceki itemdan sonra virgül koy
// 4. kaydet ve yenile! tamam işte
//
// örnek (çift dil desteği):
// {
//   image: 'images/yeni-slide.jpg',
//   price: '$1,299',
//   title: {
//     tr: 'Harika Ürünüm',
//     en: 'Amazing Product'
//   },
//   description: {
//     tr: 'Bu ürün çok iyi işte öyle',
//     en: 'This product is really good'
//   },
//   hasOverlay: false
// }

var sliderData = [
  {
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80',
    price: '₺49.90',
    title: {
      tr: 'Premium Çamaşır Suyu Koleksiyonu',
      en: 'Premium Bleach Collection'
    },
    description: {
      tr: 'Güçlü ve etkili temizlik için profesyonel kalitede çamaşır suyu. Evinizin her köşesinde hijyen garantisi.',
      en: 'Professional quality bleach for powerful and effective cleaning. Hygiene guaranteed in every corner of your home.'
    },
    hasOverlay: true
  },
  {
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=1920&q=80',
    price: '₺89.90',
    title: {
      tr: 'Ultra Deterjan Serisi',
      en: 'Ultra Detergent Series'
    },
    description: {
      tr: 'Çamaşırlarınızı tertemiz yapan, leke çıkarma gücü yüksek deterjan serisi. Hassas ciltler için de uygun.',
      en: 'High-performance detergent series that leaves your clothes spotless. Suitable for sensitive skin too.'
    },
    hasOverlay: false
  },
  {
    image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=1920&q=80',
    price: '₺34.90',
    title: {
      tr: 'Bulaşık Deterjanı Seti',
      en: 'Dishwashing Detergent Set'
    },
    description: {
      tr: 'Yağlı bulaşıkları anında temizleyen, el dostu formül. Bulaşıklarınız parlak ve hijyenik kalacak.',
      en: 'Hand-friendly formula that instantly cleans greasy dishes. Your dishes will stay shiny and hygienic.'
    },
    hasOverlay: false
  },
  {
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=1920&q=80',
    price: '₺59.90',
    title: {
      tr: 'Çok Amaçlı Temizlik Ürünleri',
      en: 'Multi-Purpose Cleaning Products'
    },
    description: {
      tr: 'Mutfaktan banyoya, her yüzey için güvenli ve etkili temizlik. Profesyonel temizlik sonuçları evinizde.',
      en: 'Safe and effective cleaning for every surface, from kitchen to bathroom. Professional cleaning results at home.'
    },
    hasOverlay: false
  }
  // buradan sonra yeni slide'lar ekle - yukarıdaki formatı kopyala işte
];

// ============================================
// slider html'ini oluşturan fonksiyon
// ============================================
function generateSliderHTML() {
  var $slidesContainer = $('.hero-carousel');
  if (!$slidesContainer.length) return; // container yoksa çık boşuna çalışma
  
  // mevcut dili al - i18n varsa onu kullan yoksa 'tr' varsayılan
  var currentLang = (typeof i18n !== 'undefined' && i18n.currentLang) ? i18n.currentLang : 'tr';
  
  var html = '';
  
  // her slider item'ı için html string'i oluştur
  sliderData.forEach(function(item) {
    // çift dil desteği - eğer title bir obje ise (çift dil) değilse string (eski format)
    var title = (typeof item.title === 'object') ? item.title[currentLang] || item.title.tr || item.title.en : item.title;
    var description = (typeof item.description === 'object') ? item.description[currentLang] || item.description.tr || item.description.en : item.description;
    
    var overlayClass = item.hasOverlay ? '<div class="overlay-gradient"></div>' : '';
    
    html += '<div class="item" style="background-image: url(' + item.image + ');">';
    html += overlayClass;
    html += '<div class="container">';
    html += '<div class="col-md-6 col-md-offset-0 js-fullheight slider-text">';
    html += '<div class="slider-text-inner">';
    html += '<div class="desc">';
    html += '<span class="price">' + escapeHtml(item.price) + '</span>';
    html += '<h2>' + escapeHtml(title) + '</h2>';
    html += '<p>' + escapeHtml(description) + '</p>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '<div class="hero-contact-info">';
    html += '<div class="hero-contact-box">';
    html += '<i class="icon-phone"></i><span class="contact-text">+90 XXX XXX XX XX</span>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
  });
  
  $slidesContainer.html(html);
  
  // slide'lar hazır - owl carousel başlatıldığında kendi yönetecek
}

// html escape fonksiyonu (xss saldırılarına karşı koruma için)
function escapeHtml(text) {
  // eğer text undefined ya da null ise boş string döndür
  if (text == null) return '';
  // string'e çevir
  text = String(text);
  var map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

