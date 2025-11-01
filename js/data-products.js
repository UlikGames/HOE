// ============================================
// ürün datası - admin panelinden otomatik güncelleniyor
// manuel düzenleme yapma, admin.html kullan!
// ============================================

var productsData = [
    {
      "image": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80",
      "mainCategory": {
        "tr": "Temizlik Ürünleri",
        "en": "Cleaning Products"
      },
      "category": {
        "tr": "Çamaşır Suyu",
        "en": "Bleach"
      },
      "title": {
        "tr": "Domestos Ultra Çamaşır Suyu 5L",
        "en": "Domestos Ultra Bleach 5L"
      },
      "price": "₺49.90",
      "description": {
        "tr": "Güçlü ve etkili çamaşır suyu. %99.9 bakteri ve virüslere karşı etkili. Evinizin her köşesinde hijyen garantisi.",
        "en": "Powerful and effective bleach. 99.9% effective against bacteria and viruses. Hygiene guaranteed in every corner of your home."
      },
      "specs": {
        "tr": "5 Litre | %99.9 bakteri öldürücü | Konsantre formül | Tüm yüzeyler için uygun",
        "en": "5 Liters | 99.9% bacteria killer | Concentrated formula | Suitable for all surfaces"
      },
      "sku": "DOM-ULTRA-001",
      "shipping": {
        "tr": "1-2 iş gününde kargo. ₺150 üzeri ücretsiz kargo.",
        "en": "Ships in 1-2 business days. Free shipping on orders over ₺150."
      }
    },
    {
      "image": "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=800&q=80",
      "mainCategory": {
        "tr": "Temizlik Ürünleri",
        "en": "Cleaning Products"
      },
      "category": {
        "tr": "Deterjan",
        "en": "Detergent"
      },
      "title": {
        "tr": "Ariel Ultra Konsantre Deterjan 4kg",
        "en": "Ariel Ultra Concentrated Detergent 4kg"
      },
      "price": "₺89.90",
      "description": {
        "tr": "Leke çıkarma gücü yüksek, konsantre formül. Çamaşırlarınızı tertemiz yapar, renkleri korur. Hassas ciltler için uygun.",
        "en": "High stain removal power, concentrated formula. Makes your clothes spotless, preserves colors. Suitable for sensitive skin."
      },
      "specs": {
        "tr": "4 kg | 30 yıkamaya kadar | Leke çıkarıcı enzimler | Renk koruyucu",
        "en": "4 kg | Up to 30 washes | Stain-removing enzymes | Color protectant"
      },
      "sku": "ARI-ULTRA-002",
      "shipping": {
        "tr": "1-2 iş gününde kargo. Ücretsiz kargo.",
        "en": "Ships in 1-2 business days. Free shipping."
      }
    },
    {
      "image": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80",
      "mainCategory": {
        "tr": "Temizlik Ürünleri",
        "en": "Cleaning Products"
      },
      "category": {
        "tr": "Bulaşık Deterjanı",
        "en": "Dish Soap"
      },
      "title": {
        "tr": "Fairy Bulaşık Deterjanı 750ml x 3",
        "en": "Fairy Dish Soap 750ml x 3"
      },
      "price": "₺34.90",
      "description": {
        "tr": "Yağlı bulaşıkları anında temizleyen, el dostu formül. Bulaşıklarınız parlak ve hijyenik kalacak. 3'lü paket.",
        "en": "Hand-friendly formula that instantly cleans greasy dishes. Your dishes will stay shiny and hygienic. 3-pack."
      },
      "specs": {
        "tr": "750ml x 3 adet | Yağ çözücü formül | El dostu | Bakteri öldürücü",
        "en": "750ml x 3 units | Grease-cutting formula | Hand-friendly | Antibacterial"
      },
      "sku": "FAI-750-003",
      "shipping": {
        "tr": "1-2 iş gününde kargo. Ücretsiz kargo.",
        "en": "Ships in 1-2 business days. Free shipping."
      }
    },
    {
      "image": "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&q=80",
      "mainCategory": {
        "tr": "Temizlik Ürünleri",
        "en": "Cleaning Products"
      },
      "category": {
        "tr": "Çok Amaçlı Temizleyici",
        "en": "Multi-Purpose Cleaner"
      },
      "title": {
        "tr": "Cif Çok Amaçlı Temizleyici 1L",
        "en": "Cif Multi-Purpose Cleaner 1L"
      },
      "price": "₺59.90",
      "description": {
        "tr": "Mutfaktan banyoya, her yüzey için güvenli ve etkili temizlik. Profesyonel temizlik sonuçları evinizde.",
        "en": "Safe and effective cleaning for every surface, from kitchen to bathroom. Professional cleaning results at home."
      },
      "specs": {
        "tr": "1 Litre | Çok amaçlı | Yüzey koruyucu | Leke çıkarıcı",
        "en": "1 Liter | Multi-purpose | Surface protector | Stain remover"
      },
      "sku": "CIF-MULTI-004",
      "shipping": {
        "tr": "1-2 iş gününde kargo. Ücretsiz kargo.",
        "en": "Ships in 1-2 business days. Free shipping."
      }
    },
    {
      "image": "https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=800&q=80",
      "mainCategory": {
        "tr": "Temizlik Ürünleri",
        "en": "Cleaning Products"
      },
      "category": {
        "tr": "Çamaşır Suyu",
        "en": "Bleach"
      },
      "title": {
        "tr": "Domestos Toz Çamaşır Suyu 1kg",
        "en": "Domestos Powder Bleach 1kg"
      },
      "price": "₺24.90",
      "description": {
        "tr": "Toz formda pratik çamaşır suyu. Daha kolay kullanım ve saklama. Güçlü dezenfektan etkisi.",
        "en": "Practical bleach in powder form. Easier to use and store. Strong disinfectant effect."
      },
      "specs": {
        "tr": "1 kg | Toz form | Uzun raf ömrü | Güçlü dezenfektan",
        "en": "1 kg | Powder form | Long shelf life | Strong disinfectant"
      },
      "sku": "DOM-POW-005",
      "shipping": {
        "tr": "1-2 iş gününde kargo. Ücretsiz kargo.",
        "en": "Ships in 1-2 business days. Free shipping."
      }
    },
    {
      "image": "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&q=80",
      "mainCategory": {
        "tr": "Temizlik Ürünleri",
        "en": "Cleaning Products"
      },
      "category": {
        "tr": "Yüzey Temizleyici",
        "en": "Surface Cleaner"
      },
      "title": {
        "tr": "Pine Sol Yüzey Temizleyici 946ml",
        "en": "Pine Sol Surface Cleaner 946ml"
      },
      "price": "₺42.90",
      "description": {
        "tr": "Çam kokulu güçlü yüzey temizleyici. Mutfak, banyo ve zeminlerde etkili. Hoş koku bırakır.",
        "en": "Pine-scented powerful surface cleaner. Effective on kitchen, bathroom and floors. Leaves pleasant scent."
      },
      "specs": {
        "tr": "946ml | Çam kokulu | Dezenfektan | Çok amaçlı",
        "en": "946ml | Pine-scented | Disinfectant | Multi-purpose"
      },
      "sku": "PIN-946-006",
      "shipping": {
        "tr": "1-2 iş gününde kargo. Ücretsiz kargo.",
        "en": "Ships in 1-2 business days. Free shipping."
      }
    },
    {
      "image": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80",
      "mainCategory": {
        "tr": "Temizlik Ürünleri",
        "en": "Cleaning Products"
      },
      "category": {
        "tr": "Bulaşık Deterjanı",
        "en": "Dish Soap"
      },
      "title": {
        "tr": "Dawn Ultra Bulaşık Deterjanı 709ml",
        "en": "Dawn Ultra Dish Soap 709ml"
      },
      "price": "₺28.90",
      "description": {
        "tr": "Ultra konsantre formül. Az miktarla çok bulaşık yıkar. Yağları anında çözer.",
        "en": "Ultra concentrated formula. Washes many dishes with small amount. Instantly dissolves grease."
      },
      "specs": {
        "tr": "709ml | Ultra konsantre | Yağ çözücü | El dostu",
        "en": "709ml | Ultra concentrated | Grease-cutting | Hand-friendly"
      },
      "sku": "DAW-709-007",
      "shipping": {
        "tr": "1-2 iş gününde kargo. Ücretsiz kargo.",
        "en": "Ships in 1-2 business days. Free shipping."
      }
    },
    {
      "image": "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=800&q=80",
      "mainCategory": {
        "tr": "Temizlik Ürünleri",
        "en": "Cleaning Products"
      },
      "category": {
        "tr": "Çamaşır Yumuşatıcısı",
        "en": "Fabric Softener"
      },
      "title": {
        "tr": "Comfort Çamaşır Yumuşatıcısı 2.4L",
        "en": "Comfort Fabric Softener 2.4L"
      },
      "price": "₺69.90",
      "description": {
        "tr": "Çamaşırlarınızı yumuşacık yapan, uzun süreli hoş koku veren yumuşatıcı. Tüm çamaşır türleri için uygundur.",
        "en": "Fabric softener that makes your clothes soft and gives long-lasting pleasant scent. Suitable for all fabric types."
      },
      "specs": {
        "tr": "2.4 Litre | Uzun süreli koku | Yumuşak dokunuş | Tüm çamaşır türleri",
        "en": "2.4 Liters | Long-lasting scent | Soft touch | All fabric types"
      },
      "sku": "COM-FAB-008",
      "shipping": {
        "tr": "1-2 iş gününde kargo. Ücretsiz kargo.",
        "en": "Ships in 1-2 business days. Free shipping."
      }
    },
    {
      "image": "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=800&q=80",
      "mainCategory": {
        "tr": "Temizlik Ürünleri",
        "en": "Cleaning Products"
      },
      "category": {
        "tr": "Cam Temizleyici",
        "en": "Glass Cleaner"
      },
      "title": {
        "tr": "Mr. Muscle Cam Temizleyici 750ml",
        "en": "Mr. Muscle Glass Cleaner 750ml"
      },
      "price": "₺32.90",
      "description": {
        "tr": "Camları ve aynaları lekesiz, parlak yapan profesyonel formül. İz bırakmaz, hızlı kurur.",
        "en": "Professional formula that makes windows and mirrors spotless and shiny. Leaves no streaks, dries quickly."
      },
      "specs": {
        "tr": "750ml | İz bırakmaz | Hızlı kurur | Cam ve ayna için",
        "en": "750ml | Streak-free | Quick-drying | For glass and mirrors"
      },
      "sku": "MRM-GLASS-009",
      "shipping": {
        "tr": "1-2 iş gününde kargo. Ücretsiz kargo.",
        "en": "Ships in 1-2 business days. Free shipping."
      }
    }
  ];

// ============================================
// ANA KATEGORİLER - admin panelinden otomatik güncelleniyor
// ============================================
var mainCategories = [
  {
    "slug": "temizlik-urunleri",
    "headerImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1920&q=80", // temizlik ürünleri için generic görsel
      "title": {
        "tr": "Temizlik Ürünleri",
        "en": "Cleaning Products"
      },
      "description": {
        "tr": "Güçlü ve etkili çamaşır suyu. %99.9 bakteri ve virüslere karşı etkili. Evinizin her köşesinde hijyen garantisi.",
        "en": "Powerful and effective bleach. 99.9% effective against bacteria and viruses. Hygiene guaranteed in every corner of your home."
      },
      "image": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80"
    }
  ];

// ============================================
// URL'den kategori slug'ını alan fonksiyon
// peynir.html -> "peynir", mobilya.html -> "mobilya"
// ============================================
function getCategorySlugFromURL() {
  var path = window.location.pathname;
  var filename = path.split('/').pop() || path.split('\\').pop();
  var slug = filename.replace('.html', '');
  return slug;
}

// ============================================
// slug'dan kategori bilgisini bulan fonksiyon
// ============================================
function getCategoryBySlug(slug) {
  if (!slug || typeof mainCategories === 'undefined') return null;
  
  for (var i = 0; i < mainCategories.length; i++) {
    if (mainCategories[i].slug === slug) {
      return mainCategories[i];
    }
  }
  return null;
}

// ============================================
// kategori sayfası header'ını dinamik dolduran fonksiyon
// ============================================
function fillCategoryPageHeader() {
  var slug = getCategorySlugFromURL();
  if (!slug) return;
  
  var category = getCategoryBySlug(slug);
  if (!category) return;
  
  var currentLang = (typeof i18n !== 'undefined' && i18n.currentLang) ? i18n.currentLang : 'tr';
  var title = category.title[currentLang] || category.title.tr || category.title.en;
  var description = category.description[currentLang] || category.description.tr || category.description.en;
  
  // header image - önce headerImage var mı kontrol et, yoksa generic görsel kullan
  // ürün resmi çok detaylı olduğu için header için uygun değil, generic görsel daha iyi
  var headerImage = category.headerImage || 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1920&q=80';
  
  // header background image
  var $header = $('#fh5co-header');
  if ($header.length) {
    $header.css('background-image', 'url(' + headerImage + ')');
    
    // header içindeki title ve description'ı güncelle
    var $h1 = $header.find('h1');
    var $h2 = $header.find('h2 span, h2');
    
    if ($h1.length) $h1.text(title);
    if ($h2.length) {
      if ($h2.find('span').length) {
        $h2.find('span').text(description);
      } else {
        $h2.text(description);
      }
    }
  }
  
  // products section başlığı
  var $productSection = $('#fh5co-product');
  if ($productSection.length) {
    var $heading = $productSection.find('.fh5co-heading');
    if ($heading.length) {
      var $span = $heading.find('span');
      var $h2 = $heading.find('h2');
      var $p = $heading.find('p');
      
      if ($span.length) $span.text(title);
      if ($h2.length) {
        // "Mobilya Koleksiyonu" yerine sadece kategori adı veya "Koleksiyonu" ekle
        var collectionText = (currentLang === 'tr') ? ' Koleksiyonu' : ' Collection';
        $h2.text(title + collectionText);
      }
      if ($p.length) $p.text(description);
    }
  }
}

// ============================================
// kategori sayfasını otomatik yükleyen fonksiyon
// URL'den slug'ı okuyup o kategoriye ait ürünleri yükler
// ============================================
function loadCategoryPage() {
  var slug = getCategorySlugFromURL();
  if (!slug) return;
  
  var category = getCategoryBySlug(slug);
  if (!category) return;
  
  var currentLang = (typeof i18n !== 'undefined' && i18n.currentLang) ? i18n.currentLang : 'tr';
  var mainCategory = category.title[currentLang] || category.title.tr || category.title.en;
  
  // header'ı doldur
  fillCategoryPageHeader();
  
  // ürünleri yükle
  if (typeof generateProductsHTML === 'function' && $('#products-container').length) {
    generateProductsHTML(mainCategory);
  }
}

// ============================================
// ana kategori kartlarını oluşturan fonksiyon (products.html için)
// dinamik olarak mainCategories array'inden okuyor
// ============================================
function generateMainCategoryCards() {
  var $container = $('#main-categories');
  if (!$container.length) return;
  
  var currentLang = (typeof i18n !== 'undefined' && i18n.currentLang) ? i18n.currentLang : 'tr';
  
  var html = '';
  
  // her kategori için kart oluştur
  mainCategories.forEach(function(cat, index) {
    var title = cat.title[currentLang] || cat.title.tr || cat.title.en;
    var description = cat.description[currentLang] || cat.description.tr || cat.description.en;
    var slug = cat.slug;
    
    // kart görseli olarak headerImage kullan - kategori sayfası header'ıyla aynı olsun
    // eğer headerImage yoksa, fallback olarak image kullan
    var image = cat.headerImage || cat.image || 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1920&q=80';
    
    // col-md-6 yerine dinamik genişlik hesapla
    // 1 kategori varsa tam genişlik, 2 kategori varsa yarım genişlik, 3+ varsa grid
    var colClass;
    if (mainCategories.length === 1) {
      colClass = 'col-md-12';
    } else if (mainCategories.length === 2) {
      colClass = 'col-md-6 col-sm-6';
    } else {
      colClass = 'col-md-4 col-sm-6';
    }
    
    html += '<div class="' + colClass + ' animate-box">';
    html += '<a href="' + slug + '.html" class="main-category-card">';
    html += '<div class="main-category-image" style="background-image: url(' + image + ');"></div>';
    html += '<div class="main-category-overlay"></div>';
    html += '<div class="main-category-content">';
    html += '<h2>' + escapeHtml(title) + '</h2>';
    html += '<p>' + escapeHtml(description) + '</p>';
    html += '<span class="main-category-arrow">→</span>';
    html += '</div>';
    html += '</a>';
    html += '</div>';
  });
  
  $container.html(html);
  
  // product.html header'ı sabit kalacak, sadece kategori kartları (child) görselleri değişiyor
  // header güncellemesi yapmıyoruz - bu sadece kategori kartları için
  
  // animasyonları başlat
  setTimeout(function() {
    $container.find('.animate-box').each(function(index) {
      var $el = $(this);
      setTimeout(function() {
        $el[0].offsetHeight;
        $el.addClass('fadeInUp animated-fast');
      }, index * 100);
    });
  }, 50);
}

// ============================================
// menü dropdown'ını dinamik oluşturan fonksiyon
// mainCategories array'inden okuyor
// ============================================
function generateMenuDropdown() {
  var $dropdowns = $('.has-dropdown .dropdown');
  if (!$dropdowns.length) return;
  
  // mainCategories tanımlı mı kontrol et
  if (typeof mainCategories === 'undefined' || !mainCategories || mainCategories.length === 0) {
    console.warn('⚠️ mainCategories array tanımlı değil veya boş!');
    return;
  }
  
  var currentLang = (typeof i18n !== 'undefined' && i18n.currentLang) ? i18n.currentLang : 'tr';
  
  // her dropdown için (desktop ve mobile menü)
  $dropdowns.each(function() {
    var $dropdown = $(this);
    var html = '';
    
    // "Tümü" linki
    var allText = (currentLang === 'tr') ? 'Tümü' : 'All';
    html += '<li><a href="product.html" data-i18n="nav.allProducts">' + escapeHtml(allText) + '</a></li>';
    
    // her kategori için link oluştur
    mainCategories.forEach(function(cat) {
      var title = cat.title[currentLang] || cat.title.tr || cat.title.en;
      var slug = cat.slug;
      
      html += '<li><a href="' + slug + '.html">' + escapeHtml(title) + '</a></li>';
    });
    
    $dropdown.html(html);
    
    // debug için - dropdown içeriği dolu mu kontrol et
    if ($dropdown.children().length === 0) {
      console.warn('⚠️ Dropdown içeriği boş!', $dropdown);
    }
  });
}

// ============================================
// kategori filtrelerini oluşturan fonksiyon (alt kategoriler için)
// ============================================
function generateCategoryFilters(mainCategoryFilter) {
  var $filtersContainer = $('#category-filters');
  if (!$filtersContainer.length) return;
  
  // mevcut dili al
  var currentLang = (typeof i18n !== 'undefined' && i18n.currentLang) ? i18n.currentLang : 'tr';
  
  // tüm kategorileri topla (tekrar edenleri kaldır) - sadece mainCategoryFilter'a ait olanları
  var categories = [];
  var categoryMap = {};
  
  productsData.forEach(function(product) {
    // mainCategory filtresi varsa kontrol et
    if (mainCategoryFilter) {
      var productMainCategory = (typeof product.mainCategory === 'object') 
        ? product.mainCategory[currentLang] || product.mainCategory.tr || product.mainCategory.en 
        : (product.mainCategory || '');
      
      if (productMainCategory !== mainCategoryFilter) {
        return; // bu ürün bu ana kategoriye ait değil, atla
      }
    }
    
    var category = (typeof product.category === 'object') 
      ? product.category[currentLang] || product.category.tr || product.category.en 
      : (product.category || '');
    
    if (category && !categoryMap[category]) {
      categoryMap[category] = true;
      categories.push(category);
    }
  });
  
  // kategorileri alfabetik sırala
  categories.sort();
  
  // filtre butonlarını oluştur
  var html = '<button class="category-filter-btn active" data-category="all">';
  var allText = (currentLang === 'tr') ? 'Tümü' : 'All';
  html += escapeHtml(allText);
  html += '</button>';
  
  categories.forEach(function(cat) {
    html += '<button class="category-filter-btn" data-category="' + escapeHtml(cat) + '">';
    html += escapeHtml(cat);
    html += '</button>';
  });
  
  $filtersContainer.html(html);
  
  // filtre butonlarına click event ekle - önceki event'leri temizle
  $filtersContainer.off('click', '.category-filter-btn').on('click', '.category-filter-btn', function() {
    var $btn = $(this);
    var category = $btn.data('category');
    
    // aktif class'ı güncelle
    $filtersContainer.find('.category-filter-btn').removeClass('active');
    $btn.addClass('active');
    
    // ürünleri filtrele - mainCategoryFilter'ı da geç
    filterProductsByCategory(category, mainCategoryFilter);
  });
}

// ============================================
// ürünleri kategoriye göre filtreleyen fonksiyon - GRID UYUMLU
// ============================================
function filterProductsByCategory(category, mainCategoryFilter) {
  var $products = $('#products-container .product-item');
  
  $products.each(function() {
    var $item = $(this);
    var $product = $item.find('.product');
    var productCategory = $product.data('category') || '';
    var productMainCategory = $product.data('main-category') || '';
    
    var shouldShow = false;
    
    // kategori kontrolü
    if (category === 'all') {
      shouldShow = true;
    } else {
      shouldShow = (productCategory === category);
    }
    
    // mainCategory filtresi kontrolü
    if (mainCategoryFilter && productMainCategory !== mainCategoryFilter) {
      shouldShow = false;
    }
    
    // görünürlüğü ayarla - Flexbox grid
    if (shouldShow) {
      $item.css({
        'display': 'block',
        'visibility': 'visible',
        'opacity': '1'
      }).fadeIn(300);
    } else {
      $item.hide();
    }
  });
  
  // animasyonları tekrar başlat
  setTimeout(function() {
    $products.filter(':visible').each(function(index) {
      var $el = $(this);
      setTimeout(function() {
        $el[0].offsetHeight; // reflow
        $el.addClass('fadeInUp animated-fast');
      }, index * 30);
    });
  }, 100);
}

// ============================================
// ürünleri html'e çeviren fonksiyon - TEMİZ VERSİYON
// ============================================
function generateProductsHTML(mainCategoryFilter) {
  var $productsContainer = $('#products-container');
  
  // eğer products-container yoksa ama main-categories varsa, ana kategori kartlarını göster
  if (!$productsContainer.length && $('#main-categories').length) {
    generateMainCategoryCards();
    return;
  }
  
  if (!$productsContainer.length) {
    return;
  }
  
  var currentLang = (typeof i18n !== 'undefined' && i18n.currentLang) ? i18n.currentLang : 'tr';
  
  // kategori filtrelerini oluştur
  generateCategoryFilters(mainCategoryFilter);
  
  // eski ürünleri temizle
  $productsContainer.empty();
  
  var html = '';
  var filteredProducts = [];
  
  // önce ürünleri filtrele
  productsData.forEach(function(product) {
    // mainCategory filtresi varsa kontrol et
    if (mainCategoryFilter) {
      var productMainCategory = (typeof product.mainCategory === 'object') 
        ? product.mainCategory[currentLang] || product.mainCategory.tr || product.mainCategory.en 
        : (product.mainCategory || '');
      
      if (productMainCategory !== mainCategoryFilter) {
        return;
      }
    }
    
    filteredProducts.push(product);
  });
  
  // products-container flexbox grid olacak (CSS'de tanımlı)
  $productsContainer.removeClass('row');
  
  // filtrelenmiş ürünleri HTML'e çevir - grid sistemi
  filteredProducts.forEach(function(product, index) {
    var mainCategory = (typeof product.mainCategory === 'object') 
      ? product.mainCategory[currentLang] || product.mainCategory.tr || product.mainCategory.en 
      : (product.mainCategory || '');
    var category = (typeof product.category === 'object') 
      ? product.category[currentLang] || product.category.tr || product.category.en 
      : (product.category || '');
    var title = (typeof product.title === 'object') 
      ? product.title[currentLang] || product.title.tr || product.title.en 
      : product.title;
    var description = (typeof product.description === 'object') 
      ? product.description[currentLang] || product.description.tr || product.description.en 
      : product.description;
    var specs = (typeof product.specs === 'object') 
      ? product.specs[currentLang] || product.specs.tr || product.specs.en 
      : product.specs;
    var shipping = (typeof product.shipping === 'object') 
      ? product.shipping[currentLang] || product.shipping.tr || product.shipping.en 
      : product.shipping;
    
    // Flexbox grid sistemi - her satırda 3 ürün, boş yer kalmayacak
    html += '<div class="product-item text-center animate-box">';
    html += '<div class="product"';
    html += ' data-title="' + escapeHtml(title) + '"';
    html += ' data-price="' + escapeHtml(product.price) + '"';
    html += ' data-desc="' + escapeHtml(description) + '"';
    html += ' data-specs="' + escapeHtml(specs) + '"';
    html += ' data-sku="' + escapeHtml(product.sku || '') + '"';
    html += ' data-ship="' + escapeHtml(shipping) + '"';
    html += ' data-main-category="' + escapeHtml(mainCategory) + '"';
    html += ' data-category="' + escapeHtml(category) + '"';
    html += ' data-images="' + escapeHtml(product.image) + '">';
    
    // resim URL'ini doğru şekilde escape et
    var imageUrl = escapeHtml(product.image);
    html += '<div class="product-grid" style="background-image:url(' + imageUrl + ');">';
    html += '<div class="inner">';
    html += '<p><a href="#" class="icon"><i class="icon-eye"></i></a></p>';
    html += '</div>';
    html += '</div>';
    
    html += '<div class="desc">';
    if (category) {
      html += '<span class="product-category">' + escapeHtml(category) + '</span>';
    }
    html += '<h3><a href="#">' + escapeHtml(title) + '</a></h3>';
    html += '<span class="price">' + escapeHtml(product.price) + '</span>';
    html += '</div>';
    html += '</div>'; // .product kapanış
    html += '</div>'; // .col-md-4 kapanış
  });
  
  // HTML'i container'a ekle
  $productsContainer.html(html);
  
  // Flexbox grid için row class'ını kaldır
  $productsContainer.removeClass('row clearfix');
  
  // Animasyonları başlat
  setTimeout(function() {
    $productsContainer.find('.animate-box').each(function(index) {
      var $el = $(this);
      
      setTimeout(function() {
        $el[0].offsetHeight; // reflow
        $el.addClass('fadeInUp animated-fast');
      }, index * 50);
    });
    
    // waypoint'leri tekrar başlat
    setTimeout(function() {
      if (typeof contentWayPoint === 'function') {
        contentWayPoint();
      }
    }, 200);
  }, 10);
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

