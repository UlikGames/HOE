;(function () {

  'use strict';

  /* =========================
     mobil menü kısmı işte
     hamburger açılıp kapanıyor basit
  ========================== */

  var mobileMenuOutsideClick = function () {
    $(document).on('click', function (e) {
      var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('offcanvas')) {
          $('body').removeClass('offcanvas');
          $('.js-fh5co-nav-toggle').removeClass('active');
        }
      }
    });
  };

  var offcanvasMenu = function () {
    $('#page').prepend('<div id="fh5co-offcanvas"></div>');
    // menu butonunu navigation bar'a direkt ekle - en sağa konumlandır
    $('.fh5co-nav').append('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');

    var clone1 = $('.menu-1 > ul').clone();
    $('#fh5co-offcanvas').append(clone1);
    var clone2 = $('.menu-2 > ul').clone();
    $('#fh5co-offcanvas').append(clone2);

    $('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
    $('#fh5co-offcanvas').find('li').removeClass('has-dropdown');

    // mobilde dropdown açma/kapama - tıklayınca aç ama dropdown içindeki linklere tıklayınca normal çalışsın
    // dropdown içinde artık "Tümü" linki var, o product.html'e götürür
    $(document).on('click', '.offcanvas-has-dropdown > a', function(e) {
      var $link = $(this);
      var $parent = $link.parent('.offcanvas-has-dropdown');
      var $dropdown = $parent.find('ul');
      
      // dropdown yoksa normal link gibi çalışsın
      if (!$dropdown.length || $dropdown.children().length === 0) {
        return; // normal link gibi çalışsın
      }
      
      // dropdown varsa aç/kapat ama link'e gitme (çünkü dropdown içinde "Tümü" linki var)
      e.preventDefault();
      
      // diğer açık dropdown'ları kapat
      $('.offcanvas-has-dropdown').not($parent).removeClass('active').find('ul').slideUp(300);
      
      // bu dropdown'ı aç/kapat
      if ($parent.hasClass('active')) {
        $parent.removeClass('active');
        $dropdown.slideUp(300);
      } else {
        $parent.addClass('active');
        $dropdown.slideDown(300);
      }
    });
    
    // dropdown içindeki linklere tıklayınca normal çalışsın (product.html, mobilya.html, peynir.html)
    // bu zaten normal çalışır, ekstra bir şey yapmaya gerek yok

    $(window).on('resize', function () {
      if ($('body').hasClass('offcanvas')) {
        $('body').removeClass('offcanvas');
        $('.js-fh5co-nav-toggle').removeClass('active');
      }
    });
  };

  var burgerMenu = function () {
    $('body').on('click', '.js-fh5co-nav-toggle', function (event) {
      event.preventDefault();
      if ($('body').hasClass('overflow offcanvas')) {
        $('body').removeClass('overflow offcanvas');
      } else {
        $('body').addClass('overflow offcanvas');
      }
      $(this).toggleClass('active');
    });
  };


  /* =========================
     animasyonlar ve tablar - scroll'da reveal oluyor
     scroll edince elementler animate oluyor hoş görünüyor
  ========================== */

  var contentWayPoint = function () {
    var i = 0;
    
    // element'i animate eden helper fonk
    var animateElement = function($el) {
      if ($el.hasClass('animated-fast')) {
        return;
      }
      
      var effect = $el.data('animate-effect') || 'fadeInUp';
      
      // reflow tetikle animasyon başlasın diye
      $el[0].offsetHeight;
      
      // animasyon classlarını ekle
      if (effect === 'fadeIn') {
        $el.addClass('fadeIn animated-fast');
      } else if (effect === 'fadeInLeft') {
        $el.addClass('fadeInLeft animated-fast');
      } else if (effect === 'fadeInRight') {
        $el.addClass('fadeInRight animated-fast');
      } else {
        $el.addClass('fadeInUp animated-fast');
      }
    };
    
    // waypoint yoksa elementler için waypoint kur
    $('.animate-box').each(function() {
      var $el = $(this);
      
      // zaten animate olmuşsa ya da waypoint varsa atla
      if ($el.hasClass('animated-fast') || $el.data('waypoint-setup')) {
        return;
      }
      
      // waypoint kuruldu diye işaretle
      $el.data('waypoint-setup', true);
      
      // Bu element için waypoint oluştur
      $el.waypoint(function (direction) {
        var element = this.element;
        var $element = $(element);
        
        // zaten animate olmuşsa atla
        if ($element.hasClass('animated-fast')) {
          return;
        }
        
        // scroll'da görünce animate et (her iki yön için)
        if (direction === 'down' || direction === 'up') {
          setTimeout(function() {
            animateElement($element);
          }, 100);
        }
      }, { 
        offset: '75%',  // erken tetikle (viewport'un %75'i aşağıda)
        triggerOnce: true
      });
    });
    
        // scroll'da görünür olan elementleri de kontrol et
    var checkVisibleElements = function() {
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();
      
      $('.animate-box:not(.animated-fast)').each(function() {
        var $el = $(this);
        var elementTop = $el.offset().top;
        var elementHeight = $el.outerHeight() || 300;
        var elementBottom = elementTop + elementHeight;
        
          // element görünüyorsa animate et
        if (elementBottom > viewportTop && elementTop < viewportBottom) {
          animateElement($el);
        }
      });
    };
    
    // scroll'da kontrol et
    $(window).on('scroll', checkVisibleElements);
    
    // bi gecikme sonra da kontrol et
    setTimeout(checkVisibleElements, 300);
  };

  var dropdown = function () {
    $('.has-dropdown').mouseenter(function(){
      var $this = $(this);
      $this.find('.dropdown').stop(true,true).slideDown(200);
    }).mouseleave(function(){
      var $this = $(this);
      $this.find('.dropdown').stop(true,true).slideUp(200);
    });
  };

  // tab'lar için autoHeight helper (tema için kullanılıyor)
  var autoHeight = function() {
    setTimeout(function(){
      var $wrap = $('.fh5co-tab-content-wrap');
      var $active = $('.tab-content.active');
      if ($wrap.length && $active.length) {
        var h = $active.outerHeight();
        if (h) { $wrap.css('height', h + 90); }
      }
    }, 50);
  };

  var tabs = function () {
    // varsayılan olarak aktif
    $('.fh5co-tab-content').css('display', 'none');
    $('.fh5co-tab-content.active').css('display', 'block');

    $('body').on('click', '.fh5co-tab-nav a', function (event) {
      var $this = $(this),
          tab = $this.data('tab');

      $('.fh5co-tab-nav li').removeClass('active');
      $this.closest('li').addClass('active');

      $('.fh5co-tab-content').removeClass('active').hide();
      $this.closest('.fh5co-tabs')
        .find('.fh5co-tab-content[data-tab-content="'+tab+'"]')
        .addClass('active').fadeIn(150);

      autoHeight();
      event.preventDefault();
    });

    autoHeight();
    $(window).on('resize', autoHeight);
  };


  /* =========================
     util fonksiyonlar - yukarı git butonu falan
     scroll edince buton görünüyor tıklayınca yukarı çıkıyor
  ========================== */

  var goToTop = function () {
    $('.js-gotop').on('click', function (event) {
      event.preventDefault();
      $('html, body').animate({ scrollTop: $('html').offset().top }, 500, 'easeInOutExpo');
      return false;
    });

    $(window).scroll(function(){
      var $win = $(window);
      if ($win.scrollTop() > 200) {
        $('.js-top').addClass('active');
      } else {
        $('.js-top').removeClass('active');
      }
    });
  };

  // sayfa yükleniyor loader'ı - loading spinner'ı yönetiyor
  var loaderPage = function () {
    // #page'in opacity'sini 1'de tut - hiçbir şey değiştiremesin
    var $page = $('#page');
    $page.css({
      'opacity': '1',
      'visibility': 'visible',
      'transition': 'transform 0.5s ease, background-color 0.5s ease',
      '-webkit-transition': 'transform 0.5s ease, background-color 0.5s ease'
    });
    
    // loader'ı göster sonra kaldır
    var $loader = $(".fh5co-loader");
    if ($loader.length) {
      // loader'ın görünür olduğundan emin ol
      $loader.css({
        'z-index': '9999',
        'opacity': '1',
        'visibility': 'visible',
        'display': 'block'
      });
      // 1500ms göster sonra kaldır
      setTimeout(function() {
        $loader.css({
          'transition': 'opacity 0.3s ease',
          '-webkit-transition': 'opacity 0.3s ease',
          'opacity': '0',
          'visibility': 'hidden',
          'pointer-events': 'none',
          'z-index': '-1'
        });
        setTimeout(function() {
          $loader.remove();
        }, 300);
      }, 1500);
    }
  };

  // counter - sayıları sayma animasyonu (0'dan başlayıp sayıya gider)
  var counter = function () {
    $('.js-counter').countTo({
      formatter: function (value, options) {
        return value.toFixed(options.decimals);
      }
    });
  };

  var counterWayPoint = function () {
    if ($('#fh5co-counter').length > 0) {
      $('#fh5co-counter').waypoint(function (direction) {
        if (direction === 'down' && !$(this.element).hasClass('animated')) {
          setTimeout(counter, 200);
          $(this.element).addClass('animated');
        }
      }, { offset: '90%' });
    }
  };

  // ana slider (modal carousel'ları ignore et)
  var sliderMain = function () {
    var $carousels = $('.owl-carousel-fullwidth').not('.pqv-carousel');
    if (!$carousels.length) return;

    $carousels.each(function () {
      var $c = $(this);

      // boş carousel'ları atla
      if ($c.children().length === 0) return;

      // zaten init olmuşsa temizle tekrar init et
      if ($c.hasClass('owl-loaded')) {
        try { $c.trigger('destroy.owl.carousel'); } catch (e) {}
        $c.removeClass('owl-loaded owl-hidden');
        $c.find('.owl-stage-outer').children().unwrap();
        $c.find('.owl-dots, .owl-nav').remove();
        $c.removeData();
      }

      // tema slider'ını init et
      if (typeof $.fn.owlCarousel === 'function') {
        var itemCount = $c.children().length;
        $c.owlCarousel({
          items: 1,
          loop: itemCount > 1,
          margin: 0,
          nav: false,
          dots: true,
          smartSpeed: 800,
          autoHeight: true
        });
      }
    });
  };

  // testimonials carousel (yoksa sorun çıkarmaz)
  var testimonialCarousel = function () {
    var $sets = $('.owl-carousel-testimony, .owl-carousel-testimonial');
    if (!$sets.length) return;

    $sets.each(function () {
      var $c = $(this);

      if ($c.children().length === 0) return;

      if ($c.hasClass('owl-loaded')) {
        try { $c.trigger('destroy.owl.carousel'); } catch (e) {}
        $c.removeClass('owl-loaded owl-hidden');
        $c.find('.owl-stage-outer').children().unwrap();
        $c.find('.owl-dots, .owl-nav').remove();
        $c.removeData();
      }

      if (typeof $.fn.owlCarousel === 'function') {
        var itemCount = $c.children().length;
        $c.owlCarousel({
          items: 1,
          loop: itemCount > 1,
          margin: 0,
          nav: false,
          dots: true,
          smartSpeed: 800,
          autoHeight: true
        });
      }
    });
  };

  // ana slider burada başlıyor aga - owl carousel kullanıyoruz flexslider yerine
  // i18n.js'den çağırabilmek için global scope'a atıyoruz
  var heroFlexslider = window.heroFlexslider = function () {
    // önce slider html'ini data'dan oluşturuyoruz
    if (typeof generateSliderHTML === 'function') {
      generateSliderHTML();
    }
    
    var $carousel = $('.hero-carousel');
    
    if ($carousel.length && typeof $.fn.owlCarousel === 'function') {
      var $items = $carousel.find('.item');
      
      // slide yoksa bi bekle sonra tekrar dene
      if ($items.length === 0) {
        setTimeout(function() {
          heroFlexslider();
        }, 100);
        return;
      }
      
      // varsa eski carousel'i temizle
      if ($carousel.hasClass('owl-loaded')) {
        try {
          var owlData = $carousel.data('owl.carousel');
          
          if (owlData) {
            // event'leri kaldır önce
            $carousel.off('.owl.carousel');
            $(window).off('resize.owl.carousel');
            // destroy et
            if (typeof owlData.destroy === 'function') {
              owlData.destroy();
            }
          }
          
          // fallback olarak trigger da dene
          try {
            $carousel.trigger('destroy.owl.carousel');
          } catch(e) {}
          
          $carousel.removeData('owl.carousel');
        } catch (e) {
          // hata varsa salla geç
        }
        
        // dom'u temizle
        $carousel.removeClass('owl-loaded owl-hidden owl-grab owl-drag');
        $carousel.find('.owl-stage-outer').children().unwrap();
        $carousel.find('.owl-dots, .owl-nav').remove();
        $carousel.removeAttr('style');
      }
      
      // carousel'i başlat - fade animasyonu var
      $carousel.owlCarousel({
        items: 1,
        loop: $items.length > 1,
        margin: 0,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 800,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoHeight: false,
        onInitialized: function() {
          // loader'ı kaldır
          var $loader = $(".fh5co-loader");
          if ($loader.length) {
            $loader.css({
              'transition': 'opacity 0.3s ease',
              '-webkit-transition': 'opacity 0.3s ease',
              'opacity': '0',
              'visibility': 'hidden',
              'pointer-events': 'none',
              'z-index': '-1'
            });
            setTimeout(function() {
              $loader.remove();
            }, 300);
          }
          
          // sayfanın görünür olduğundan emin ol
          $('#page').css({
            'opacity': '1',
            'visibility': 'visible',
            'transition': 'transform 0.5s ease, background-color 0.5s ease',
            '-webkit-transition': 'transform 0.5s ease, background-color 0.5s ease'
          });
        }
      });
    }
  };


  /* =========================
     product quick view - ürün hızlı görüntüleme modal'ı
     ürüne tıklayınca popup açılıyor detayları gösteriyor
     kapatabiliyorsun hoş görünüyor
  ========================== */

  // carousel helper'lar (modal içinde güvenli init/destroy)
  function pqvDestroyCarousel($carousel) {
    if ($carousel.hasClass('owl-loaded')) {
      try { $carousel.trigger('destroy.owl.carousel'); } catch (e) {}
      $carousel.removeClass('owl-loaded owl-hidden');
      $carousel.find('.owl-stage-outer').children().unwrap();
      $carousel.find('.owl-dots, .owl-nav').remove();
      $carousel.removeData();
    }
    $carousel.empty();
  }

  function pqvBuildSlides($carousel, images) {
    pqvDestroyCarousel($carousel);
    images.forEach(function (src) {
      var $item = $('<div class="item pqv-item">').css('background-image', 'url(' + src + ')');
      $carousel.append($item);
    });
  }

  function pqvInitCarousel($carousel) {
    if (typeof $.fn.owlCarousel !== 'function') return;
    var itemCount = $carousel.children().length;
    if (itemCount === 0) return;

    // modal görünür olduktan sonra init et - erken görünürlük sorunlarını önler
    // 1'den fazla item varsa loop'u aç
    $carousel.owlCarousel({
      items: 1,
      loop: itemCount > 1,
      margin: 0,
      nav: false,
      dots: true,
      smartSpeed: 800,
      autoHeight: false, // gizli container'larda önemli işte
      autoRefresh: false
    });
  }

  // modal davranışları
  var productQuickViewModal = function () {
    var $overlay = $('#productQuickView');
    if (!$overlay.length) return;

    var $carousel = $overlay.find('.pqv-carousel');
    var $title = $overlay.find('.pqv-title');
    var $price = $overlay.find('.pqv-price');
    var $sku = $overlay.find('.pqv-sku');
    var $desc = $overlay.find('.pqv-desc');

    function parseBgUrl(bg) {
      var imgUrl = '';
      if (bg && bg !== 'none') {
        var m = bg.match(/^url\(["']?(.+?)["']?\)$/);
        if (m) imgUrl = m[1];
      }
      return imgUrl;
    }

    function openFrom($product) {
      // card'dan fallback'ler
      var bg = $product.find('.product-grid').css('background-image') || '';
      var fallbackImg = parseBgUrl(bg);
      var defaults = {
        title: $.trim($product.find('.desc h3').text()) || 'Ürün',
        price: $.trim($product.find('.desc .price').text()) || ''
      };

      // .product üzerindeki opsiyonel data attribute'ları
      var data = $product.data() || {};

      // resimler
      var images = [];
      if (data.images) {
        images = String(data.images).split(',').map(function (s) { return $.trim(s); }).filter(Boolean);
      }
      if (!images.length && fallbackImg) images = [fallbackImg];

      // alanları doldur - çevirileri de uygula
      var skuText = (typeof i18n !== 'undefined' && i18n.t) ? i18n.t('product.modal.sku') : 'SKU:';
      var defaultDesc = (typeof i18n !== 'undefined' && i18n.t) ? i18n.t('product.modal.defaultDesc') : 'Açıklama yok.';
      var defaultProduct = (typeof i18n !== 'undefined' && i18n.t) ? i18n.t('product.modal.defaultProduct') : 'Ürün';
      
      $title.text(data.title || defaults.title || defaultProduct);
      $price.text(data.price || defaults.price);
      // rating kaldırıldı - artık göstermiyoruz
      if (data.sku) { $sku.text(skuText + ' ' + data.sku).show(); } else { $sku.hide().text(''); }
      $desc.text(data.desc || data.description || defaultDesc);
      
      // modal close butonunu çevir
      var closeText = (typeof i18n !== 'undefined' && i18n.t) ? i18n.t('product.modal.close') : 'Close';
      $overlay.find('.pqv-close').attr('aria-label', closeText);

      // önce slide'ları oluştur (henüz owl yok)
      pqvBuildSlides($carousel, images);

      // modal'ı göster sonra görünür olduktan sonra owl'ı init et
      $('body').addClass('modal-open');
      $overlay.attr('aria-hidden', 'false').fadeIn(150, function () {
        pqvInitCarousel($carousel);
      });
    }

    function close() {
      $overlay.fadeOut(120, function () {
        $('body').removeClass('modal-open');
        $overlay.attr('aria-hidden', 'true');
        pqvDestroyCarousel($carousel);
      });
    }

    // aç: resim başlık ya da göz ikonuna tıkla
    $('body').on('click', '.product .icon, .product .desc h3 a, .product .product-grid', function (e) {
      var $product = $(this).closest('.product');
      if (!$product.length) return;
      e.preventDefault(); // single.html'e gitmeyi engelle işte
      openFrom($product);
    });

    // kapat aksiyonları
    $overlay.on('click', function (e) { if (e.target === this) close(); });
    $overlay.on('click', '.pqv-close', function () { close(); });
    $(document).on('keyup', function (e) { if (e.key === 'Escape') close(); });
  };


  /* =========================
     init - her şey buradan başlıyor
     sayfa yüklenince buradaki fonksiyonlar çalışıyor
     sırayla başlatıyoruz hepsini
  ========================== */

  $(function () {
    // sayfa yüklenir yüklenmez #page'in opacity'sini garantile - hiç geç kalma
    // transition'ı opacity için devre dışı bırak
    var $page = $('#page');
    $page.css({
      'opacity': '1',
      'visibility': 'visible',
      'transition': 'transform 0.5s ease, background-color 0.5s ease',
      '-webkit-transition': 'transform 0.5s ease, background-color 0.5s ease'
    });
    
    // loader'ı göster sonra kaldır (fallback)
    var $loader = $(".fh5co-loader");
    if ($loader.length) {
      // loader'ın görünür olduğundan emin ol
      $loader.css({
        'z-index': '9999',
        'opacity': '1',
        'visibility': 'visible',
        'display': 'block'
      });
      // 1200ms göster sonra kaldır (fallback - loaderPage çalışmazsa)
      setTimeout(function() {
        $loader.css({
          'transition': 'opacity 0.3s ease',
          '-webkit-transition': 'opacity 0.3s ease',
          'opacity': '0',
          'visibility': 'hidden',
          'pointer-events': 'none',
          'z-index': '-1'
        });
        setTimeout(function() {
          $loader.remove();
        }, 300);
      }, 1200);
    }
    
    mobileMenuOutsideClick();
    offcanvasMenu();
    burgerMenu();
    contentWayPoint();
    dropdown();
    tabs();
    goToTop();
    
    // menü dropdown'ını dinamik oluştur (mainCategories array'inden)
    if (typeof generateMenuDropdown === 'function') {
      generateMenuDropdown();
    }
    
    // ürünleri data'dan oluştur (product sayfasındaysa ve fonksiyon varsa)
    // eğer products-container yoksa ama main-categories varsa, ana kategori kartlarını göster
    if (typeof generateProductsHTML === 'function') {
      if ($('#products-container').length && $('#main-categories').length === 0) {
        // alt kategori sayfası (mobilya.html, peynir.html gibi)
        // loadCategoryPage() fonksiyonu script tag'i içinde çağrılacak, burada bir şey yapma
      } else if ($('#main-categories').length) {
        // ana products.html sayfası - kategori kartlarını göster
        generateProductsHTML(); // içinde generateMainCategoryCards() çağrılacak
      }
    }
    
    // hero slider'ı başlat - loader zaten kaldırıldı
    heroFlexslider();
    
    // navigation bar scroll kontrolü - scroll edildiğinde fixed yap
    var navScrollHandler = function() {
      var $nav = $('.fh5co-nav');
      if ($(window).scrollTop() > 50) {
        $nav.addClass('scrolled');
      } else {
        $nav.removeClass('scrolled');
      }
    };
    
    // scroll event'i ekle
    $(window).on('scroll', navScrollHandler);
    // sayfa yüklendiğinde de kontrol et
    navScrollHandler();
    
    // diğer slider'ları başlat
    sliderMain();
    
    // loader'ı tekrar kontrol et (eğer hala varsa)
    loaderPage();
    
    counterWayPoint();
    testimonialCarousel();

    // ürün bilgi modal'ı
    productQuickViewModal();
  });

  // window tamamen yüklendiğinde loader'ı kaldır (eğer hala varsa)
  $(window).on('load', function() {
    var $loader = $(".fh5co-loader");
    if ($loader.length) {
      $loader.css({
        'transition': 'opacity 0.3s ease',
        '-webkit-transition': 'opacity 0.3s ease',
        'opacity': '0',
        'visibility': 'hidden',
        'pointer-events': 'none',
        'z-index': '-1'
      });
      setTimeout(function() {
        $loader.remove();
      }, 300);
    }
    // #page'in opacity'sini garantile işte
    $('#page').css({
      'opacity': '1',
      'visibility': 'visible',
      'transition': 'transform 0.5s ease, background-color 0.5s ease',
      '-webkit-transition': 'transform 0.5s ease, background-color 0.5s ease'
    });
  });

}());
