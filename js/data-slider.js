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
    image: 'images/img_bg_1.jpg',
    price: '$800',
    title: {
      tr: 'Alato Dolap',
      en: 'Alato Cabinet'
    },
    description: {
      tr: 'Uzak ülkelerde, kelime dağlarının ardında, Vokalia ve Consonantia ülkelerinden çok uzakta, kör metinler yaşıyor. Ayrılmış olarak Bookmarksgrove\'da yaşıyorlar.',
      en: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.'
    },
    hasOverlay: true
  },
  {
    image: 'images/img_bg_2.jpg',
    price: '$530',
    title: {
      tr: 'The Haluz Sallanan Koltuk',
      en: 'The Haluz Rocking Chair'
    },
    description: {
      tr: 'Uzak ülkelerde, kelime dağlarının ardında, Vokalia ve Consonantia ülkelerinden çok uzakta, kör metinler yaşıyor. Ayrılmış olarak Bookmarksgrove\'da yaşıyorlar.',
      en: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.'
    },
    hasOverlay: false
  },
  {
    image: 'images/img_bg_3.jpg',
    price: '$750',
    title: {
      tr: 'Alato Dolap',
      en: 'Alato Cabinet'
    },
    description: {
      tr: 'Uzak ülkelerde, kelime dağlarının ardında, Vokalia ve Consonantia ülkelerinden çok uzakta, kör metinler yaşıyor. Ayrılmış olarak Bookmarksgrove\'da yaşıyorlar.',
      en: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.'
    },
    hasOverlay: false
  },
  {
    image: 'images/img_bg_4.jpg',
    price: '$620',
    title: {
      tr: 'WW Koltuğu',
      en: 'The WW Chair'
    },
    description: {
      tr: 'Uzak ülkelerde, kelime dağlarının ardında, Vokalia ve Consonantia ülkelerinden çok uzakta, kör metinler yaşıyor. Ayrılmış olarak Bookmarksgrove\'da yaşıyorlar.',
      en: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.'
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

