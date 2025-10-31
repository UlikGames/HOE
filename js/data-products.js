// ============================================
// ürün datası - yeni ürün eklemek süper kolay
// buraya ürün ekleyip çıkarabiliyorsun html'e dokunmuyorsun
// ============================================
// 
// nasıl yeni ürün eklersin:
// 1. aşağıdaki objelerden birini kopyala (şu { } içindeki şeyler)
// 2. değerleri değiştir:
//    - image: ürün resminin yolu (örn: 'images/urunum.jpg')
//    - title: ürün adı
//    - price: fiyat (örn: '$999' ya da 'fiyat için iletişime geç')
//    - description: ürün açıklaması
//    - specs: ürün özellikleri (| ya da virgülle ayır)
//    - sku: ürün kodu
//    - rating: 1-5 arası değerlendirme (örn: 4.5)
//    - shipping: kargo bilgisi
// 3. önceki itemdan sonra virgül koy
// 4. kaydet ve sayfayı yenile! işte bu kadar basit
//
// örnek (çift dil desteği):
// {
//   image: 'images/yeni-urunum.jpg',
//   title: {
//     tr: 'Süper Ürünüm',
//     en: 'Super Product'
//   },
//   price: '$1,299',
//   description: {
//     tr: 'Bu ürün harika şeyler yapıyor işte',
//     en: 'This product does amazing things'
//   },
//   specs: {
//     tr: 'Özellik 1 | Özellik 2 | Özellik 3',
//     en: 'Feature 1 | Feature 2 | Feature 3'
//   },
//   sku: 'PROD-001',
//   rating: 4.5,
//   shipping: {
//     tr: '2-4 iş gününde kargo. Ücretsiz kargo!',
//     en: 'Ships in 2-4 business days. Free shipping!'
//   }
// }

var productsData = [
  {
    image: 'images/product-1.jpg',
    title: {
      tr: 'Hauteville Beton Sallanan Koltuk',
      en: 'Hauteville Concrete Rocking Chair'
    },
    price: '$350',
    description: {
      tr: 'Meşe ayaklı el döküm beton oturma yeri. Minimal, sağlam ve rahat.',
      en: 'Hand-cast concrete seat with oak runners. Minimal, sturdy, and comfy.'
    },
    specs: {
      tr: 'Beton kabuk | Meşe ayaklar | El döküm | İç mekan kullanımı',
      en: 'Concrete shell | Oak runners | Hand-cast | Indoor use'
    },
    sku: 'HV-RC-001',
    rating: 4,
    shipping: {
      tr: '2–4 iş gününde kargo. 30 gün ücretsiz iade.',
      en: 'Ships in 2–4 business days. Free 30-day returns.'
    }
  },
  {
    image: 'images/product-2.jpg',
    title: {
      tr: 'Pavilion Hoparlör',
      en: 'Pavilion Speaker'
    },
    price: '$600',
    description: {
      tr: '360° ses ile premium kablosuz hoparlör. Zarif tasarım, güçlü ses performansı.',
      en: 'Premium wireless speaker with 360° sound. Elegant design meets powerful audio performance.'
    },
    specs: {
      tr: '360° ses | Kablosuz bağlantı | 12 saat pil | Premium sürücüler',
      en: '360° sound | Wireless connectivity | 12-hour battery | Premium drivers'
    },
    sku: 'PV-SP-002',
    rating: 4.5,
    shipping: {
      tr: '1–3 iş gününde kargo. $500 üzeri siparişlerde ücretsiz kargo.',
      en: 'Ships in 1–3 business days. Free shipping on orders over $500.'
    }
  },
  {
    image: 'images/product-3.jpg',
    title: {
      tr: 'Ligomancer',
      en: 'Ligomancer'
    },
    price: '$780',
    description: {
      tr: 'Ayarlanabilir kollu heykelsi aydınlatma armatürü. Fonksiyonel sanat olarak da kullanılabilen modern tasarım.',
      en: 'Sculptural lighting fixture with adjustable arms. Modern design that doubles as functional art.'
    },
    specs: {
      tr: 'Ayarlanabilir kollar | LED ampul dahil | Pirinç kaplama | Duvar veya tavan montajı',
      en: 'Adjustable arms | LED bulbs included | Brass finish | Wall or ceiling mount'
    },
    sku: 'LG-LT-003',
    rating: 5,
    shipping: {
      tr: '3–5 iş gününde kargo. Profesyonel montaj önerilir.',
      en: 'Ships in 3–5 business days. Professional installation recommended.'
    }
  },
  {
    image: 'images/product-4.jpg',
    title: {
      tr: 'Alato Dolap',
      en: 'Alato Cabinet'
    },
    price: '$800',
    description: {
      tr: 'Ceviz kaplamalı orta yüzyıl modern depolama dolabı. Ayarlanabilir raflı geniş iç mekan.',
      en: 'Mid-century modern storage cabinet with walnut veneer. Spacious interior with adjustable shelving.'
    },
    specs: {
      tr: 'Ceviz kaplama | Ayarlanabilir raflar | Yumuşak kapanış kapıları | Masif ahşap ayaklar',
      en: 'Walnut veneer | Adjustable shelves | Soft-close doors | Solid wood legs'
    },
    sku: 'AL-CB-004',
    rating: 4.5,
    shipping: {
      tr: '2–4 iş gününde kargo. Profesyonel teslimat mevcut.',
      en: 'Ships in 2–4 business days. White glove delivery available.'
    }
  },
  {
    image: 'images/product-5.jpg',
    title: {
      tr: 'Earing Kablosuz',
      en: 'Earing Wireless'
    },
    price: '$100',
    description: {
      tr: 'Aktif gürültü önleme özellikli gerçek kablosuz kulaklık. Kompakt tasarımda kristal netliğinde ses.',
      en: 'True wireless earbuds with active noise cancellation. Crystal clear audio in a compact design.'
    },
    specs: {
      tr: 'Aktif gürültü önleme | 6 saat pil | USB-C şarj | IPX4 suya dayanıklı',
      en: 'Active noise cancellation | 6-hour battery | USB-C charging | IPX4 water resistant'
    },
    sku: 'ER-WL-005',
    rating: 4,
    shipping: {
      tr: '1–2 iş gününde kargo. 30 gün içinde ücretsiz iade.',
      en: 'Ships in 1–2 business days. Free returns within 30 days.'
    }
  },
  {
    image: 'images/product-6.jpg',
    title: {
      tr: 'Heykelsi Kahve Masası',
      en: 'Sculptural Coffee Table'
    },
    price: '$960',
    description: {
      tr: 'Mermer üstlü organik formlu kahve masası. Her yaşam alanını bağlayan öne çıkan parça.',
      en: 'Organic form coffee table with marble top. Statement piece that anchors any living space.'
    },
    specs: {
      tr: 'Carrara mermer üst | Masif meşe taban | El yapımı | Hava koşullarına dayanıklı kaplama',
      en: 'Carrara marble top | Solid oak base | Handcrafted | Weather-sealed finish'
    },
    sku: 'SC-CT-006',
    rating: 5,
    shipping: {
      tr: '4–6 iş gününde kargo. Profesyonel montaj dahil.',
      en: 'Ships in 4–6 business days. Professional assembly included.'
    }
  },
  {
    image: 'images/product-7.jpg',
    title: {
      tr: 'WW Koltuğu',
      en: 'The WW Chair'
    },
    price: '$540',
    description: {
      tr: 'Halat koltuklu klasik Hans Wegner ilhamlı sandalye. Zamansız İskandinav tasarımı ile rahatlığın buluşması.',
      en: 'Classic Hans Wegner-inspired chair with rope seat. Timeless Scandinavian design meets comfort.'
    },
    specs: {
      tr: 'Halat dokulu koltuk | Masif meşe iskelet | Danimarka tasarımı | Doğal yağ kaplama',
      en: 'Rope woven seat | Solid oak frame | Danish design | Natural oil finish'
    },
    sku: 'WW-CH-007',
    rating: 4.5,
    shipping: {
      tr: '2–3 iş gününde kargo. 30 gün ücretsiz iade.',
      en: 'Ships in 2–3 business days. Free 30-day returns.'
    }
  },
  {
    image: 'images/product-8.jpg',
    title: {
      tr: 'Himitsu Para Kutusu',
      en: 'Himitsu Money Box'
    },
    price: '$55',
    description: {
      tr: 'Gizli açıklıklı minimalist seramik para kutusu. Bilinçli tasarruf için Japon ilhamlı tasarım.',
      en: 'Minimalist ceramic money box with hidden opening. Japanese-inspired design for mindful saving.'
    },
    specs: {
      tr: 'Seramik yapı | Mat kaplama | Gizli madeni para yuvası | Kırma ile açılma tasarımı',
      en: 'Ceramic construction | Matte finish | Hidden coin slot | Break to open design'
    },
    sku: 'HM-MB-008',
    rating: 4,
    shipping: {
      tr: '1–2 iş gününde kargo. Ücretsiz standart kargo.',
      en: 'Ships in 1–2 business days. Free standard shipping.'
    }
  },
  {
    image: 'images/product-9.jpg',
    title: {
      tr: 'Ariane Prin',
      en: 'Ariane Prin'
    },
    price: '$99',
    description: {
      tr: 'Pirinç aksanlı zarif cam asılı lamba. Her alana sıcaklık ve sofistike bir görünüm katar.',
      en: 'Delicate glass pendant lamp with brass accents. Adds warmth and sophistication to any space.'
    },
    specs: {
      tr: 'El yapımı cam | Pirinç donanım | E26 ampul yuvası | 8 fit kablo uzunluğu',
      en: 'Hand-blown glass | Brass hardware | E26 bulb socket | 8ft cord length'
    },
    sku: 'AP-PL-009',
    rating: 4.5,
    shipping: {
      tr: '1–3 iş gününde kargo. Ampul dahil değildir.',
      en: 'Ships in 1–3 business days. Bulb not included.'
    }
  }
  // buradan sonra yeni ürünler ekle - yukarıdaki formatı kopyala yapıştır işte
];

// ============================================
// ürünleri html'e çeviren fonksiyon
// ============================================
function generateProductsHTML() {
  var $productsContainer = $('#products-container');
  
  if (!$productsContainer.length) {
    return; // container yoksa çık
  }
  
  // mevcut dili al - i18n varsa onu kullan yoksa 'tr' varsayılan
  var currentLang = (typeof i18n !== 'undefined' && i18n.currentLang) ? i18n.currentLang : 'tr';
  
  // eski ürünleri temizle
  $productsContainer.empty();
  
  var html = '';
  
  productsData.forEach(function(product) {
    // çift dil desteği - eğer title bir obje ise (çift dil) değilse string (eski format)
    var title = (typeof product.title === 'object') ? product.title[currentLang] || product.title.tr || product.title.en : product.title;
    var description = (typeof product.description === 'object') ? product.description[currentLang] || product.description.tr || product.description.en : product.description;
    var specs = (typeof product.specs === 'object') ? product.specs[currentLang] || product.specs.tr || product.specs.en : product.specs;
    var shipping = (typeof product.shipping === 'object') ? product.shipping[currentLang] || product.shipping.tr || product.shipping.en : product.shipping;
    
    html += '<div class="col-md-4 text-center animate-box">';
    html += '<div class="product"';
    html += ' data-title="' + escapeHtml(title) + '"';
    html += ' data-price="' + escapeHtml(product.price) + '"';
    html += ' data-desc="' + escapeHtml(description) + '"';
    html += ' data-specs="' + escapeHtml(specs) + '"';
    html += ' data-sku="' + escapeHtml(product.sku) + '"';
    html += ' data-rating="' + product.rating + '"';
    html += ' data-ship="' + escapeHtml(shipping) + '"';
    html += ' data-images="' + escapeHtml(product.image) + '">';
    
    html += '<div class="product-grid" style="background-image:url(' + product.image + ');">';
    html += '<div class="inner">';
    html += '<p><a href="#" class="icon"><i class="icon-eye"></i></a></p>';
    html += '</div>';
    html += '</div>';
    
    html += '<div class="desc">';
    html += '<h3><a href="#">' + escapeHtml(title) + '</a></h3>';
    html += '<span class="price">' + escapeHtml(product.price) + '</span>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
  });
  
  $productsContainer.html(html);
  
  // Ürünleri hemen göster - görünür olanları animasyonlu yap
  setTimeout(function() {
    $productsContainer.find('.animate-box').each(function(index) {
      var $el = $(this);
      
      // Ekran sınırlarını al
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();
      
      // Element pozisyonunu al
      var elementTop = $el.offset().top;
      var elementHeight = $el.outerHeight() || 300; // Fallback boyut
      var elementBottom = elementTop + elementHeight;
      
      // Element görünür mü kontrol et (bol buffer ile)
      var isVisible = (elementBottom > viewportTop - 300) && (elementTop < viewportBottom + 300);
      
      if (isVisible) {
        // Görünüyorsa hemen göster - küçük gecikme ile stagger efekti
        setTimeout(function() {
          var effect = $el.data('animate-effect') || 'fadeInUp';
          
          // Reflow tetikle (animasyonun çalışması için)
          $el[0].offsetHeight;
          
          // Animasyon classlarını ekle
          if (effect === 'fadeIn') {
            $el.addClass('fadeIn animated-fast');
          } else if (effect === 'fadeInLeft') {
            $el.addClass('fadeInLeft animated-fast');
          } else if (effect === 'fadeInRight') {
            $el.addClass('fadeInRight animated-fast');
          } else {
            $el.addClass('fadeInUp animated-fast');
          }
        }, index * 50); // Görünür itemler için küçük stagger
      }
    });
    
    // Scroll animasyonları için waypoint'leri tekrar başlat
    setTimeout(function() {
      if (typeof contentWayPoint === 'function') {
        contentWayPoint();
      }
    }, 200);
  }, 50);
}

// html escape fonksiyonu (xss saldırılarına karşı koruma için)
function escapeHtml(text) {
  // eğer text undefined ya da null ise boş string döndür
  if (text == null) return '';
  // String'e çevir (obje gelirse stringify etme, sadece toString)
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

