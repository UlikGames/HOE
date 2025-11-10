;(function () {

  'use strict';
  var languageDisplayNames = {
    tr: 'Türkçe',
    en: 'English',
    ka: 'ქართული',
    ru: 'Русский'
  };
  // SVG bayrak fonksiyonu - hazır doğru SVG kodları
  function getFlagSVG(lang) {
    var flags = {
      // Türkiye Bayrağı - Kırmızı arka plan, sol tarafta beyaz hilal, sağında beyaz yıldız
      tr: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" width="20" height="14"><rect width="900" height="600" fill="#E30A17"/><circle cx="300" cy="300" r="180" fill="#fff"/><circle cx="330" cy="300" r="150" fill="#E30A17"/><path d="M450 220 L470 280 L530 280 L485 315 L505 375 L450 340 L395 375 L415 315 L370 280 L430 280 Z" fill="#fff"/></svg>',
      // İngiltere/UK Bayrağı (Union Jack) - Mavi arka plan, kırmızı ve beyaz çapraz çizgiler
      en: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" width="20" height="14"><rect width="1200" height="600" fill="#012169"/><path d="M0 0 L1200 600 M1200 0 L0 600" stroke="#fff" stroke-width="140" stroke-linecap="square"/><path d="M0 0 L1200 600 M1200 0 L0 600" stroke="#C8102E" stroke-width="100" stroke-linecap="square"/><rect x="0" y="250" width="1200" height="100" fill="#C8102E"/><rect x="550" y="0" width="100" height="600" fill="#C8102E"/><rect x="0" y="270" width="1200" height="60" fill="#fff"/><rect x="570" y="0" width="60" height="600" fill="#fff"/></svg>',
      // Gürcistan Bayrağı - Beyaz arka plan, merkezi büyük kırmızı haç, dört köşede küçük kırmızı haçlar
      ka: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" width="20" height="14"><rect width="900" height="600" fill="#fff"/><rect x="400" y="0" width="100" height="600" fill="#FF0000"/><rect x="0" y="250" width="900" height="100" fill="#FF0000"/><rect x="150" y="50" width="60" height="60" fill="#FF0000"/><rect x="150" y="50" width="60" height="20" fill="#fff"/><rect x="150" y="70" width="20" height="20" fill="#fff"/><rect x="190" y="70" width="20" height="20" fill="#fff"/><rect x="150" y="90" width="60" height="20" fill="#fff"/><rect x="690" y="50" width="60" height="60" fill="#FF0000"/><rect x="690" y="50" width="60" height="20" fill="#fff"/><rect x="690" y="70" width="20" height="20" fill="#fff"/><rect x="730" y="70" width="20" height="20" fill="#fff"/><rect x="690" y="90" width="60" height="20" fill="#fff"/><rect x="150" y="490" width="60" height="60" fill="#FF0000"/><rect x="150" y="490" width="60" height="20" fill="#fff"/><rect x="150" y="510" width="20" height="20" fill="#fff"/><rect x="190" y="510" width="20" height="20" fill="#fff"/><rect x="150" y="530" width="60" height="20" fill="#fff"/><rect x="690" y="490" width="60" height="60" fill="#FF0000"/><rect x="690" y="490" width="60" height="20" fill="#fff"/><rect x="690" y="510" width="20" height="20" fill="#fff"/><rect x="730" y="510" width="20" height="20" fill="#fff"/><rect x="690" y="530" width="60" height="20" fill="#fff"/></svg>',
      // Rusya Bayrağı
      ru: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" width="20" height="14"><rect width="900" height="200" fill="#fff"/><rect y="200" width="900" height="200" fill="#0039A6"/><rect y="400" width="900" height="200" fill="#D52B1E"/></svg>'
    };
    return flags[lang] || '';
  }
  
  var languageFlagMap = {
    tr: getFlagSVG('tr'),
    en: getFlagSVG('en'),
    ka: getFlagSVG('ka'),
    ru: getFlagSVG('ru')
  };

  function buildLanguageDropdown() {
    var $navUtility = $('.fh5co-nav .col-md-3.col-xs-4.text-right > div.nav-utility');
    if (!$navUtility.length) return;
    if ($navUtility.find('.language-dropdown').length) return;

    var $dropdown = $('<div class="language-dropdown desktop-language-dropdown">' +
      '<button type="button" class="language-dropdown-trigger" aria-haspopup="true" aria-expanded="false">' +
        '<span class="flag-icon"></span>' +
        '<span class="language-dropdown-label"></span>' +
        '<span class="language-dropdown-arrow">▾</span>' +
      '</button>' +
      '<div class="language-dropdown-menu" role="menu"></div>' +
    '</div>');

    Object.keys(languageDisplayNames).forEach(function(lang) {
      var label = languageDisplayNames[lang] || lang.toUpperCase();
      var flag = languageFlagMap[lang] || '';
      $dropdown.find('.language-dropdown-menu').append('<button type="button" class="language-switcher" data-lang="' + lang + '" data-flag="' + lang + '"><span class="flag-icon">' + flag + '</span><span>' + label + '</span></button>');
    });

    $navUtility.append($dropdown);
    refreshLanguageDropdownLabel();
  }

  function refreshLanguageDropdownLabel(lang) {
    if (!lang) {
      lang = (typeof i18n !== 'undefined' && i18n.currentLang) ? i18n.currentLang : 'tr';
    }
    var label = languageDisplayNames[lang] || lang.toUpperCase();
    var flag = languageFlagMap[lang] || '';
    var $label = $('.language-dropdown-label');
    if ($label.length) {
      $label.text(label);
      $label.closest('.language-dropdown-trigger').find('.flag-icon').html(flag);
    }
    var $menuButtons = $('.language-dropdown-menu .language-switcher');
    $menuButtons.removeClass('active');
    $menuButtons.filter('[data-lang="' + lang + '"]').addClass('active');
  }

  window.refreshLanguageDropdownLabel = function(lang) {
    refreshLanguageDropdownLabel(lang);
  };

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
    // menu butonunu navigation bar'ın row container'ına ekle - nav içine
    $('.fh5co-nav .row').append('<div class="col-xs-2 hamburger-container"><a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a></div>');

    var clone1 = $('.menu-1 > ul').clone();
    $('#fh5co-offcanvas').append(clone1);
    var clone2 = $('.menu-2 > ul').clone();
    $('#fh5co-offcanvas').append(clone2);

    var offcanvasActions = '' +
      '<div class="offcanvas-language-panel">' +
        '<div class="language-switcher-group offcanvas-language-switchers">' +
          '<button class="language-switcher" data-lang="tr" data-flag="tr">' + getFlagSVG('tr') + '</button>' +
          '<button class="language-switcher" data-lang="en" data-flag="en">' + getFlagSVG('en') + '</button>' +
          '<button class="language-switcher" data-lang="ka" data-flag="ka">' + getFlagSVG('ka') + '</button>' +
          '<button class="language-switcher" data-lang="ru" data-flag="ru">' + getFlagSVG('ru') + '</button>' +
        '</div>' +
      '</div>';
    $('#fh5co-offcanvas').append(offcanvasActions);
    
    // Hamburger menü oluşturulduktan sonra aktif dil işaretlemesini yap
    if (typeof i18n !== 'undefined' && i18n.updateLanguageButton) {
      i18n.updateLanguageButton();
    }

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
    // Sayfa yüklendiğinde tüm dropdown'ları kapalı duruma getir
    $('.has-dropdown').each(function() {
      var $li = $(this);
      var $dropdown = $li.find('.dropdown');
      // CSS hover'ı devre dışı bırakmak için class ekle
      $li.addClass('dropdown-closed');
      $dropdown.css({
        'visibility': 'hidden',
        'opacity': '0',
        'display': 'none',
        'pointer-events': 'none',
        'z-index': '1000'
      });
      // Dropdown içindeki TÜM elementlere pointer-events: none ekle
      $dropdown.find('*').css({
        'pointer-events': 'none',
        'cursor': 'default'
      });
    });
    
    // Her dropdown için ayrı timer tutmak için data attribute kullan
    // Sadece li > a üzerine gelince dropdown açılsın (dropdown'un kendisi üzerine gelince açılmasın)
    $('.has-dropdown > a').on('mouseenter', function(){
      var $li = $(this).closest('.has-dropdown');
      var $dropdown = $li.find('.dropdown');
      
      // Timer'ı iptal et
      var timer = $dropdown.data('closeTimer');
      if (timer) {
        clearTimeout(timer);
        $dropdown.removeData('closeTimer');
      }
      
      // CSS hover'ı aktif etmek için class'ı kaldır
      $li.removeClass('dropdown-closed');
      
      $dropdown.css({
        'pointer-events': 'auto',
        'z-index': '10000', // Açık olduğunda yüksek z-index
        'display': 'block',
        'visibility': 'visible',
        'opacity': '1'
      }).stop(true,true).show();
      // Linklere de pointer-events ekle
      $dropdown.find('a').css({
        'pointer-events': 'auto',
        'cursor': 'pointer'
      }).on('mouseenter.dropdown-link', function() {
        // Link üzerindeyken timer'ı iptal et - dropdown açık kalsın
        var timer = $dropdown.data('closeTimer');
        if (timer) {
          clearTimeout(timer);
          $dropdown.removeData('closeTimer');
        }
      }).on('click.dropdown-link', function() {
        // Linke tıklanınca timer'ı iptal et - dropdown açık kalsın
        var timer = $dropdown.data('closeTimer');
        if (timer) {
          clearTimeout(timer);
          $dropdown.removeData('closeTimer');
        }
      });
    });

    // Tüm li.has-dropdown üzerine gelince de açık tut (köprü etkisi için)
    $('.has-dropdown').on('mouseenter', function(){
      var $li = $(this);
      var $dropdown = $li.find('.dropdown');

      var timer = $dropdown.data('closeTimer');
      if (timer) {
        clearTimeout(timer);
        $dropdown.removeData('closeTimer');
      }

      // CSS hover'ı aktif etmek için class'ı kaldır
      $li.removeClass('dropdown-closed');

      $dropdown.stop(true,true).css({
        'visibility': 'visible',
        'opacity': '1',
        'display': 'block',
        'transform': 'translateY(0)',
        'pointer-events': 'auto',
        'z-index': '10000'
      }).show();

      $dropdown.find('*').css({ 'pointer-events': 'auto' });
      $dropdown.find('a').css({ 'cursor': 'pointer' });
    });
    
    // Dropdown içine girince açık kalsın - timer'ı iptal et
    // SADECE zaten açık olan dropdown'u açık tut, kapalıysa açma
    $('.has-dropdown .dropdown').on('mouseenter', function(e){
      var $dropdown = $(this);
      var $li = $dropdown.closest('.has-dropdown');
      
      // Dropdown kapalıysa hiçbir şey yapma (pointer-events: none olduğu için bu event zaten tetiklenmemeli ama yine de kontrol et)
      var isDropdownVisible = (
        $dropdown.css('visibility') === 'visible' &&
        parseFloat($dropdown.css('opacity') || '0') > 0.01 &&
        $dropdown.css('pointer-events') !== 'none'
      );
      
      // Eğer dropdown kapalıysa, hiçbir şey yapma
      if (!isDropdownVisible) {
        return;
      }
      
      // Timer'ı HEMEN iptal et - dropdown içindeyken hiç timer olmamalı
      var timer = $dropdown.data('closeTimer');
      if (timer) {
        clearTimeout(timer);
        $dropdown.removeData('closeTimer');
      }
      
      // Tüm timer'ları iptal et (birden fazla timer olabilir)
      $dropdown.data('closeTimer', null);
      
      // Açık kalmasını garanti et
      $dropdown.css({
        'visibility': 'visible',
        'opacity': '1',
        'display': 'block',
        'transform': 'translateY(0)',
        'pointer-events': 'auto', // Açık olduğunda tıklanabilir
        'z-index': '10000' // Açık olduğunda yüksek z-index
      }).stop(true,true).show();
      // Dropdown içindeki TÜM elementlere pointer-events: auto ekle
      $dropdown.find('*').css({
        'pointer-events': 'auto'
      });
      // Linklere özel olarak cursor: pointer
      $dropdown.find('a').css({
        'cursor': 'pointer'
      });
    });
    
    // Dropdown içindeki herhangi bir elemente mousedown olunca timer'ı iptal et (tıklamaya başladığında)
    $('.has-dropdown .dropdown').on('mousedown', function(e){
      var $dropdown = $(this);
      // Timer'ı HEMEN iptal et
      var timer = $dropdown.data('closeTimer');
      if (timer) {
        clearTimeout(timer);
        $dropdown.removeData('closeTimer');
      }
      // Tüm timer'ları iptal et
      $dropdown.data('closeTimer', null);
      // Dropdown'u açık tut
      $dropdown.css({
        'pointer-events': 'auto',
        'z-index': '10000'
      });
    });
    
    // li > a üzerinden çıkınca kapanma zamanlayıcısı başlatma
    // (sadece .has-dropdown veya .dropdown üzerinden çıkışta kapanma yönetilsin)
    $('.has-dropdown > a').on('mouseleave', function(e){
      var $li = $(this).closest('.has-dropdown');
      var $dropdown = $li.find('.dropdown');
      var $relatedTarget = $(e.relatedTarget);

      // Geçişte (linkten dropdown'a inerken) menüyü görünür tut
      $dropdown.stop(true,true).css({
        'visibility': 'visible',
        'opacity': '1',
        'display': 'block',
        'transform': 'translateY(0)',
        'pointer-events': 'auto',
        'z-index': '10000'
      });
      // Dropdown içindeki TÜM elementlere pointer-events ekle
      $dropdown.find('*').css({
        'pointer-events': 'auto'
      });
      // Linklere özel olarak cursor: pointer
      $dropdown.find('a').css({
        'cursor': 'pointer'
      }).on('mouseenter.dropdown-link', function() {
        // Link üzerindeyken timer'ı iptal et - dropdown açık kalsın
        var timer = $dropdown.data('closeTimer');
        if (timer) {
          clearTimeout(timer);
          $dropdown.removeData('closeTimer');
        }
      }).on('click.dropdown-link', function(e) {
        // Linke tıklanınca timer'ı iptal et - dropdown açık kalsın
        var timer = $dropdown.data('closeTimer');
        if (timer) {
          clearTimeout(timer);
          $dropdown.removeData('closeTimer');
        }
        // Linke tıklanınca dropdown'u açık tut (sayfa değişene kadar)
        $dropdown.css({
          'pointer-events': 'auto',
          'z-index': '10000'
        });
      });

      // Dropdown'a gidiyorsak veya aynı li içinde kalıyorsak, hiçbir kapanma zamanlayıcısı başlatma
      if ($relatedTarget && ($relatedTarget.closest('.has-dropdown .dropdown').length || $relatedTarget.closest('.has-dropdown > a').length)) {
        var existTimer = $dropdown.data('closeTimer');
        if (existTimer) {
          clearTimeout(existTimer);
          $dropdown.removeData('closeTimer');
        }
        $dropdown.data('closeTimer', null);
        return;
      }

      // Linkten ayrıldık ama kapatma işlemi sadece .has-dropdown veya .dropdown mouseleave'inde yönetilecek
      var exist = $dropdown.data('closeTimer');
      if (exist) {
        clearTimeout(exist);
        $dropdown.removeData('closeTimer');
      }
      $dropdown.data('closeTimer', null);
    });
    
    // li.has-dropdown üzerinden çıkınca - ama dropdown içine gidiyorsak hiç timer başlatma
    $('.has-dropdown').on('mouseleave', function(e){
      var $li = $(this);
      var $dropdown = $li.find('.dropdown');
      var $relatedTarget = $(e.relatedTarget);
      
      // Eğer dropdown içine veya li > a'ya gidiyorsak hiç timer başlatma, açık kalsın
      if ($relatedTarget && ($relatedTarget.closest('.has-dropdown .dropdown').length || $relatedTarget.closest('.has-dropdown > a').length)) {
        return; // Açık kalsın, timer başlatma
      }
      
      // Timer'ı iptal et
      var timer = $dropdown.data('closeTimer');
      if (timer) {
        clearTimeout(timer);
      }
      
      // Daha uzun bir gecikme ile kapat (linklere tıklama şansı ver)
      timer = setTimeout(function(){
        // Eğer hala dropdown üzerindeysek veya li > a üzerindeysek açık kalsın
        if ($dropdown.is(':hover') || $li.find('> a').is(':hover')) {
          return; // Açık kalsın
        }
        // CSS hover'ı devre dışı bırakmak için class ekle
        $li.addClass('dropdown-closed');
        $dropdown.css({
          'visibility': 'hidden',
          'opacity': '0',
          'display': 'none',
          'pointer-events': 'none',
          'z-index': '1000' // Kapalı olduğunda düşük z-index
        }).stop(true,true).hide();
        // Dropdown içindeki TÜM elementlere pointer-events: none ekle
        $dropdown.find('*').css({
          'pointer-events': 'none',
          'cursor': 'default'
        });
        $dropdown.removeData('closeTimer');
      }, 300); // 300ms gecikme - linklere tıklama şansı ver
      
      $dropdown.data('closeTimer', timer);
    });
    
    // Dropdown'dan çıkınca kapat (ama li > a üzerindeyse açık kalsın)
    $('.has-dropdown .dropdown').on('mouseleave', function(e){
      var $li = $(this).closest('.has-dropdown');
      var $dropdown = $(this);
      var relatedTarget = e.relatedTarget;
      var $relatedTarget = relatedTarget ? $(relatedTarget) : null;
      
      // Eğer li > a üzerine gidiyorsak açık kalsın, timer başlatma
      if ($relatedTarget && $relatedTarget.length && $relatedTarget.closest('.has-dropdown > a').length) {
        // Tüm timer'ları iptal et
        var existingTimer = $dropdown.data('closeTimer');
        if (existingTimer) {
          clearTimeout(existingTimer);
        }
        $dropdown.data('closeTimer', null);
        return; // Açık kalsın
      }
      
      // Eğer aynı li içindeki başka bir elemente gidiyorsak açık kalsın
      if ($relatedTarget && $relatedTarget.length && $relatedTarget.closest($li).length) {
        return; // Aynı li içindeyiz, açık kalsın
      }
      
      // Eğer başka bir .has-dropdown içine gidiyorsak da açık kalsın
      if ($relatedTarget && $relatedTarget.length && $relatedTarget.closest('.has-dropdown').length && !$relatedTarget.closest($li).length) {
        return; // Başka bir dropdown'a geçiyoruz, bu dropdown'u kapatma
      }
      
      // Timer'ı iptal et
      var timer = $dropdown.data('closeTimer');
      if (timer) {
        clearTimeout(timer);
      }
      
      // Daha kısa bir gecikme ile kapat (linklere tıklama şansı ver)
      timer = setTimeout(function(){
        // Eğer hala dropdown üzerindeysek veya li > a üzerindeysek açık kalsın
        if ($dropdown.is(':hover') || $li.find('> a').is(':hover') || $li.is(':hover')) {
          return; // Açık kalsın
        }
        // Dropdown içine girilmişse kapatma
        if ($dropdown.data('closeTimer') !== timer) {
          return; // Timer değişmiş, iptal et
        }
        // CSS hover'ı devre dışı bırakmak için class ekle
        $li.addClass('dropdown-closed');
        $dropdown.css({
          'visibility': 'hidden',
          'opacity': '0',
          'display': 'none',
          'pointer-events': 'none',
          'z-index': '1000' // Kapalı olduğunda düşük z-index
        }).stop(true,true).hide();
        // Dropdown içindeki TÜM elementlere pointer-events: none ekle
        $dropdown.find('*').css({
          'pointer-events': 'none',
          'cursor': 'default'
        });
        $dropdown.removeData('closeTimer');
      }, 300); // 300ms gecikme - linklere tıklama şansı ver
      
      $dropdown.data('closeTimer', timer);
    });
    
    // Document'e tıklanınca dropdown'u kapat (dropdown dışına tıklanınca)
    $(document).on('click.dropdown', function(e) {
      // Eğer tıklanan element dropdown veya dropdown içindeki bir element değilse
      if (!$(e.target).closest('.has-dropdown').length) {
        $('.has-dropdown .dropdown').each(function() {
          var $dropdown = $(this);
          // Açık olan dropdown'ları kapat
          if ($dropdown.css('visibility') === 'visible' && parseFloat($dropdown.css('opacity') || '0') > 0.01) {
            $dropdown.css({
              'visibility': 'hidden',
              'opacity': '0',
              'display': 'none',
              'pointer-events': 'none',
              'z-index': '1000'
            }).stop(true,true);
            // Dropdown içindeki TÜM elementlere pointer-events: none ekle
            $dropdown.find('*').css({
              'pointer-events': 'none',
              'cursor': 'default'
            });
          }
        });
      }
    });
    
    // Dropdown kapalıyken içindeki linklere tıklamayı engelle
    $(document).on('click', '.has-dropdown .dropdown a', function(e) {
      var $dropdown = $(this).closest('.dropdown');
      // Eğer dropdown kapalıysa (display: none veya visibility: hidden) tıklamayı engelle
      if ($dropdown.css('display') === 'none' || 
          $dropdown.css('visibility') === 'hidden' ||
          $dropdown.css('pointer-events') === 'none') {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        return false;
      }
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
  var heroFlexslider = window.heroFlexslider = function (retryCount) {
    // retryCount kontrolü - sonsuz loop'u önle
    retryCount = retryCount || 0;
    var MAX_RETRIES = 10; // Maksimum 10 deneme
    
    if (retryCount >= MAX_RETRIES) {
      console.warn('⚠️ Slider yüklenemedi: Maksimum deneme sayısına ulaşıldı.');
      // Placeholder göster
      var $carousel = $('.hero-carousel');
      if ($carousel.length && $carousel.find('.item').length === 0) {
        $carousel.html('<div class="item" style="background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%); min-height: 500px; display: flex; align-items: center; justify-content: center; color: #fff;"><div style="text-align: center;"><h2 style="font-size: 32px; margin-bottom: 16px;">Hoş Geldiniz</h2><p style="font-size: 18px;">Slider yükleniyor...</p></div></div>');
      }
      return;
    }
    
    var $carousel = $('.hero-carousel');
    if (!$carousel.length) {
      return;
    }
    
    // önce slider html'ini data'dan oluşturuyoruz - Promise döndürüyor
    var sliderPromise = Promise.resolve();
    if (typeof generateSliderHTML === 'function') {
      var result = generateSliderHTML();
      if (result && typeof result.then === 'function') {
        sliderPromise = result;
      }
    }
    
    // Slide'lar oluşturulana kadar bekle
    sliderPromise.then(function() {
      // Slide'lar hazır, carousel'i başlat
      initCarousel();
    }).catch(function(error) {
      console.error('❌ Slider HTML oluşturulurken hata:', error);
      // Hata olsa bile carousel'i başlatmayı dene
      initCarousel();
    });
    
    function initCarousel() {
      if ($carousel.length && typeof $.fn.owlCarousel === 'function') {
        var $items = $carousel.find('.item');
        
        // slide yoksa bi bekle sonra tekrar dene
        if ($items.length === 0) {
          setTimeout(function() {
            heroFlexslider(retryCount + 1);
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
        nav: true,
        navText: [
          '<span><i class="icon-chevron-left"></i></span>',
          '<span><i class="icon-chevron-right"></i></span>'
        ],
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
          
          // Slide'lara tıklama event'i kaldırıldı - sadece buton tıklanabilir
          // Artık sadece "Detaylar" butonuna tıklanınca link'e gidilecek
        }
      });
      }
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
    
    var $overlay = $('#productQuickView');
    var $thumbnailContainer = $overlay.find('.pqv-thumbnails');
    
    // Thumbnail container'ı temizle
    if ($thumbnailContainer.length) {
      $thumbnailContainer.empty();
    }
    
    if (!images || images.length === 0) {
      // Eğer resim yoksa placeholder göster
      var $placeholder = $('<div class="item pqv-item" style="background-color: #f7f7f7; display: flex; align-items: center; justify-content: center; color: #999;">Resim Yok</div>');
      $carousel.append($placeholder);
      return;
    }
    
    // Ana carousel slide'larını oluştur
    images.forEach(function (src, index) {
      if (src && src.trim()) {
        var $item = $('<div class="item pqv-item" data-image-src="' + src + '">')
          .css('background-image', 'url(' + src + ')')
          .css('cursor', 'zoom-in');
        $carousel.append($item);
        
        // Thumbnail'ları oluştur (1 veya daha fazla resim varsa - tek resim olsa bile göster)
        if (images.length >= 1 && $thumbnailContainer.length) {
          var $thumb = $('<div class="pqv-thumbnail-item" data-index="' + index + '">')
            .css('background-image', 'url(' + src + ')');
          if (index === 0) {
            $thumb.addClass('active');
          }
          $thumbnailContainer.append($thumb);
        }
      }
    });
  }

  function pqvInitCarousel($carousel) {
    if (typeof $.fn.owlCarousel !== 'function') return;
    
    // önce eski carousel'ı destroy et
    if ($carousel.hasClass('owl-loaded')) {
      try { $carousel.trigger('destroy.owl.carousel'); } catch (e) {}
      $carousel.removeClass('owl-loaded owl-hidden');
      $carousel.find('.owl-stage-outer').children().unwrap();
      $carousel.find('.owl-dots, .owl-nav').remove();
      $carousel.removeData();
    }
    
    var itemCount = $carousel.children('.item').length;
    if (itemCount === 0) {
      // Eğer item yoksa carousel'ı gizle veya placeholder göster
      $carousel.css('min-height', '360px');
      return;
    }

    // Thumbnail güncelleme fonksiyonu (owlCarousel'dan önce tanımlanmalı)
    function updateActiveThumbnail($carousel) {
      var $thumbnails = $('#productQuickView .pqv-thumbnail-item');
      if ($thumbnails.length === 0) return;
      
      var currentIndex = -1;
      
      // Carousel instance'ından index al
      try {
        var carouselData = $carousel.data('owl.carousel');
        if (carouselData && typeof carouselData.current === 'function') {
          currentIndex = carouselData.current();
        }
      } catch (e) {
        // Fallback: active item'dan index al
        var $activeItem = $carousel.find('.owl-item.active');
        if ($activeItem.length) {
          currentIndex = $activeItem.index();
        }
      }
      
      // Hala geçerli değilse, active class'lı item'dan al
      if (currentIndex < 0) {
        var $activeItem = $carousel.find('.owl-item.active');
        if ($activeItem.length) {
          var $allItems = $carousel.find('.owl-item');
          currentIndex = $allItems.index($activeItem);
        }
      }
      
      // Tüm active class'ları kaldır
      $thumbnails.removeClass('active');
      
      // Index geçerliyse active ekle
      if (currentIndex >= 0 && currentIndex < $thumbnails.length) {
        var $targetThumb = $thumbnails.eq(currentIndex);
        $targetThumb.addClass('active');
        
        // Aktif thumbnail'ı görünür alana getir (scroll)
        var $thumbContainer = $('#productQuickView .pqv-thumbnails');
        if ($thumbContainer.length && $targetThumb.length) {
          var containerScrollLeft = $thumbContainer.scrollLeft();
          var containerWidth = $thumbContainer.width();
          var thumbOffset = $targetThumb.position().left;
          var thumbWidth = $targetThumb.outerWidth(true);
          var thumbCenter = thumbOffset + (thumbWidth / 2) - (containerWidth / 2);
          
          $thumbContainer.animate({
            scrollLeft: containerScrollLeft + thumbCenter
          }, 300);
        }
      }
    }
    
    // modal görünür olduktan sonra init et - erken görünürlük sorunlarını önler
    // 1'den fazla item varsa loop'u aç
    setTimeout(function() {
      $carousel.owlCarousel({
        items: 1,
        loop: false, // Loop'u kapat - thumbnail navigation için daha güvenilir
        margin: 0,
        nav: itemCount > 1, // Birden fazla resim varsa nav göster
        navText: [
          '<span><i class="icon-chevron-left"></i></span>',
          '<span><i class="icon-chevron-right"></i></span>'
        ],
        navContainer: false, // Owl'ın kendi nav container'ını kullan
        dots: false, // Thumbnail'lar olduğu için dots kaldırıldı
        smartSpeed: 800,
        autoHeight: false,
        autoRefresh: false,
        responsive: {
          0: {
            items: 1,
            nav: itemCount > 1
          }
        },
        onInitialized: function(event) {
          // Carousel init olduktan sonra nav'ın görünür olduğundan emin ol
          setTimeout(function() {
            var $nav = $carousel.siblings('.owl-nav');
            if ($nav.length === 0) {
              $nav = $carousel.find('.owl-nav');
            }
            if ($nav.length === 0) {
              // Eğer nav yoksa, Owl'ın kendi nav'ını oluşturmasını bekle
              $nav = $carousel.parent().find('.owl-nav');
            }
            if ($nav.length) {
              $nav.css({
                'display': 'flex !important',
                'visibility': 'visible !important',
                'opacity': '1 !important'
              }).show();
            }
            
            // İlk thumbnail'ı aktif yap
            var $thumbnails = $('#productQuickView .pqv-thumbnail-item');
            if ($thumbnails.length > 0) {
              $thumbnails.removeClass('active');
              $thumbnails.eq(0).addClass('active');
            }
          }, 100);
          
          // Resimlere tıklayınca büyütme (lightbox) ekle
          $carousel.find('.pqv-item').off('click.zoom').on('click.zoom', function() {
            var imageSrc = $(this).data('image-src') || $(this).css('background-image').replace(/url\(["']?(.+?)["']?\)/, '$1');
            if (imageSrc) {
              openImageLightbox(imageSrc);
            }
          });
          
          // Thumbnail'lara tıklama event'i ekle (carousel init olduktan sonra) - event delegation kullan
          var $thumbnailContainer = $('#productQuickView .pqv-thumbnails');
          if ($thumbnailContainer.length) {
            // Önce mevcut event'leri temizle
            $thumbnailContainer.off('click.pqvthumb');
            $(document).off('click.pqvthumb', '.pqv-thumbnail-item');
            
            // Event delegation ile ekle (container'a)
            $thumbnailContainer.on('click.pqvthumb', '.pqv-thumbnail-item', function(e) {
              e.preventDefault();
              e.stopPropagation();
              
              var $clickedThumb = $(this);
              var index = parseInt($clickedThumb.data('index'));
              
              if (!isNaN(index) && index >= 0) {
                  // Önce active tag'ı değiştir
                  var $allThumbs = $('#productQuickView .pqv-thumbnail-item');
                  $allThumbs.removeClass('active');
                  $clickedThumb.addClass('active');
                  
                  // Aktif thumbnail'ı görünür alana getir (scroll)
                  var $thumbContainer = $('#productQuickView .pqv-thumbnails');
                  if ($thumbContainer.length && $clickedThumb.length) {
                    var containerScrollLeft = $thumbContainer.scrollLeft();
                    var containerWidth = $thumbContainer.width();
                    var thumbOffset = $clickedThumb.position().left;
                    var thumbWidth = $clickedThumb.outerWidth(true);
                    var thumbCenter = thumbOffset + (thumbWidth / 2) - (containerWidth / 2);
                    
                    $thumbContainer.animate({
                      scrollLeft: containerScrollLeft + thumbCenter
                    }, 300);
                  }
                  
                  // Sonra carousel'ı o resme gönder
                  // Carousel'ın hazır olduğundan emin ol
                  if (!$carousel.hasClass('owl-loaded')) {
                    return;
                  }
                  
                  // Carousel instance'ını al
                  var carouselData = $carousel.data('owl.carousel');
                  
                  if (!carouselData) {
                    return;
                  }
                  
                  // Index'i doğrula (0 ile itemCount-1 arasında olmalı)
                  var targetIndex = Math.max(0, Math.min(index, itemCount - 1));
                  
                  // Mevcut carousel pozisyonunu al
                  var currentIndex = carouselData.current();
                  if (currentIndex === undefined || currentIndex === null || currentIndex < 0) {
                    // Alternatif: active class'ından al
                    var $activeItem = $carousel.find('.owl-item.active');
                    if ($activeItem.length) {
                      currentIndex = $activeItem.index();
                    } else {
                      currentIndex = 0;
                    }
                  }
                  
                  // Eğer zaten hedef resimdeysek bir şey yapma
                  if (currentIndex === targetIndex) {
                    return;
                  }
                  
                  // Carousel'ı hedef slide'a geçir
                  // Sağ-sol tuşlar çalıştığı için next/prev trigger'ını kullanalım
                  setTimeout(function() {
                    var diff = targetIndex - currentIndex;
                    
                    if (diff === 0) {
                      // Zaten doğru yerdeyiz
                      return;
                    }
                    
                    // Yöntem 1: to.owl.carousel trigger'ını dene (eğer destekleniyorsa)
                    try {
                      $carousel.trigger('to.owl.carousel', [targetIndex, 300]);
                      // Eğer çalıştıysa return et
                      return;
                    } catch (err) {
                      // Çalışmadıysa devam et
                    }
                    
                    // Yöntem 2: next/prev trigger'larını kullan (sağ-sol tuşlar gibi)
                    var direction = diff > 0 ? 'next' : 'prev';
                    var steps = Math.abs(diff);
                    
                    // Her adım için trigger gönder (hızlıca ama sırayla)
                    var stepIndex = 0;
                    function triggerNext() {
                      if (stepIndex < steps) {
                        try {
                          $carousel.trigger(direction + '.owl.carousel');
                          stepIndex++;
                          setTimeout(triggerNext, 150); // Her adım arasında biraz daha bekleme
                        } catch(e) {
                        }
                      }
                    }
                    triggerNext();
                  }, 50);
                }
              });
          }
        },
        onChanged: function(event) {
          // Carousel değiştiğinde aktif thumbnail'ı güncelle
          setTimeout(function() {
            updateActiveThumbnail($carousel);
          }, 50);
        },
        onTranslated: function(event) {
          // Carousel translate olduğunda da thumbnail'ı güncelle (owl-next/prev için)
          updateActiveThumbnail($carousel);
        }
      });
      
      // Owl-next ve owl-prev butonlarına click event listener ekle
      setTimeout(function() {
        var $nav = $carousel.siblings('.owl-nav');
        if ($nav.length === 0) {
          $nav = $carousel.find('.owl-nav');
        }
        if ($nav.length === 0) {
          $nav = $carousel.parent().find('.owl-nav');
        }
        
        if ($nav.length) {
          // Önceki event listener'ları temizle
          $nav.find('.owl-prev, .owl-next').off('click.pqvthumbupdate');
          
          // Yeni event listener'ları ekle
          $nav.on('click.pqvthumbupdate', '.owl-prev, .owl-next', function() {
            // Buton tıklandıktan sonra carousel'in translate olmasını bekle
            setTimeout(function() {
              updateActiveThumbnail($carousel);
            }, 100);
          });
        }
      }, 200);
      
      // carousel init olduktan sonra görünürlüğü kontrol et
      if ($carousel.find('.owl-stage-outer').length) {
        $carousel.find('.owl-stage-outer').css('display', 'block');
      }
      
      // Thumbnail'lara tıklama event'i ekle (carousel init olduktan sonra - yedek)
      // Direkt thumbnail'lara event ekle (event delegation yerine)
      setTimeout(function() {
        var $thumbnails = $('#productQuickView .pqv-thumbnail-item');
        
        $thumbnails.off('click.pqvbackup').on('click.pqvbackup', function(e) {
          e.preventDefault();
          e.stopPropagation();
          
          var $clickedThumb = $(this);
          var index = parseInt($clickedThumb.data('index'));
          
          if (!isNaN(index) && index >= 0) {
            // Aktif class'ı güncelle
            $('#productQuickView .pqv-thumbnail-item').removeClass('active');
            $clickedThumb.addClass('active');
            
            // Carousel'ı o resme gönder
            if (!$carousel.hasClass('owl-loaded')) {
              // Biraz bekle ve tekrar dene
              setTimeout(function() {
                $clickedThumb.trigger('click.pqvbackup');
              }, 200);
              return;
            }
            
            // Mevcut aktif item'ı bul (instance olmadan da çalışır)
            var $items = $carousel.find('.owl-item');
            var $activeItem = $items.filter('.active');
            var currentIndex = 0;
            
            if ($activeItem.length) {
              currentIndex = $items.index($activeItem);
            } else {
              // İlk item aktif olmalı
              currentIndex = 0;
            }
            
            // Carousel instance'ını dene (olmasa da devam et)
            var carouselData = null;
            try {
              carouselData = $carousel.data('owl.carousel');
              if (carouselData && typeof carouselData.current === 'function') {
                var instanceIndex = carouselData.current();
                if (instanceIndex !== undefined && instanceIndex !== null && instanceIndex >= 0) {
                  currentIndex = instanceIndex;
                }
              }
            } catch(e) {
              // Instance yoksa DOM'dan devam et
            }
            
            var targetIndex = Math.max(0, Math.min(index, itemCount - 1));
            var diff = targetIndex - currentIndex;
            
            if (diff === 0) {
              return;
            }
            
            // Yöntem 1: to.owl.carousel trigger'ını dene
            try {
              $carousel.trigger('to.owl.carousel', [targetIndex, 300]);
              return;
            } catch(e) {
              // Devam et
            }
            
            // Yöntem 2: Next/prev trigger kullan (sağ-sol tuşlar gibi)
            var direction = diff > 0 ? 'next' : 'prev';
            var steps = Math.abs(diff);
            
            var stepIndex = 0;
            function triggerStep() {
              if (stepIndex < steps) {
                try {
                  $carousel.trigger(direction + '.owl.carousel');
                  stepIndex++;
                  setTimeout(triggerStep, 200); // Biraz daha fazla bekleme
                } catch(e) {
                }
              }
            }
            triggerStep();
          }
        });
      }, 300);
    }, 50);
  }

  // Image Lightbox Function
  function openImageLightbox(imageSrc) {
    // Eğer lightbox zaten varsa, kaldır
    $('#pqv-image-lightbox').remove();
    
    // Lightbox overlay oluştur
    var $lightbox = $('<div id="pqv-image-lightbox" class="pqv-lightbox-overlay">');
    var $lightboxImg = $('<img src="' + imageSrc + '" class="pqv-lightbox-image">');
    var $lightboxClose = $('<button class="pqv-lightbox-close" aria-label="Kapat">&times;</button>');
    
    $lightbox.append($lightboxImg, $lightboxClose);
    $('body').append($lightbox);
    
    // Lightbox'ı göster (fade in)
    setTimeout(function() {
      $lightbox.addClass('active');
    }, 10);
    
    // Kapatma fonksiyonları
    function closeLightbox() {
      $lightbox.removeClass('active');
      setTimeout(function() {
        $lightbox.remove();
        $('body').removeClass('lightbox-open');
      }, 300);
    }
    
    $lightboxClose.on('click', closeLightbox);
    $lightbox.on('click', function(e) {
      if (e.target === $lightbox[0]) {
        closeLightbox();
      }
    });
    
    // ESC tuşu ile kapat
    $(document).on('keyup.lightbox', function(e) {
      if (e.keyCode === 27) {
        closeLightbox();
        $(document).off('keyup.lightbox');
      }
    });
    
    $('body').addClass('lightbox-open');
  }

  // modal davranışları
  var productQuickViewModal = function () {
    var $overlay = $('#productQuickView');
    if (!$overlay.length) return;

    var $carousel = $overlay.find('.pqv-carousel');
    var $title = $overlay.find('.pqv-title');
    var $sku = $overlay.find('.pqv-sku');
    var $stock = $overlay.find('.pqv-stock');
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
        title: $.trim($product.find('.desc h3').text()) || 'Ürün'
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
      // rating ve price kaldırıldı - artık göstermiyoruz
      if (data.sku) { $sku.text(skuText + ' ' + data.sku).show(); } else { $sku.hide().text(''); }
      
      // stok bilgisini göster
      var stock = parseInt(data.stock) || 0;
      if (stock !== undefined && stock !== null) {
        var stockColor = '#10b981'; // yeşil
        var stockText = stock + ' adet';
        if (stock === 0) {
          stockColor = '#ef4444'; // kırmızı
          stockText = 'Stokta Yok';
        } else if (stock < 10) {
          stockColor = '#f59e0b'; // turuncu
          stockText = stock + ' adet (Az Stok)';
        }
        $stock.html(' | <span style="color: ' + stockColor + '; font-weight: 600;">Stok: ' + stockText + '</span>').show();
      } else {
        $stock.hide().text('');
      }
      
      $desc.text(data.desc || data.description || defaultDesc);
      
      // modal close butonunu çevir
      var closeText = (typeof i18n !== 'undefined' && i18n.t) ? i18n.t('product.modal.close') : 'Close';
      $overlay.find('.pqv-close').attr('aria-label', closeText);

      // önce slide'ları oluştur (henüz owl yok)
      pqvBuildSlides($carousel, images);

      // modal'ı göster sonra görünür olduktan sonra owl'ı init et
      $('body').addClass('modal-open').css('overflow', 'hidden');
      $overlay.css({
        'display': 'flex',
        'align-items': 'center',
        'justify-content': 'center'
      }).attr('aria-hidden', 'false').fadeIn(150, function () {
        // Modal görünür olduktan sonra carousel'ı init et
        // Biraz gecikme ekle ki DOM tam hazır olsun
        setTimeout(function() {
          pqvInitCarousel($carousel);
        }, 100);
      });
    }

    function close() {
      $overlay.fadeOut(120, function () {
        $('body').removeClass('modal-open').css('overflow', '');
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
    
    // Global function for opening product modal from search
    window.openProductModal = function($product) {
      if ($product && $product.length) {
        openFrom($product);
      }
    };

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
    
    $('.fh5co-nav .col-md-3.col-xs-4.text-right > div').addClass('nav-utility');
    buildLanguageDropdown();
    
    // modal kapalı olduğundan emin ol - eğer açık kaldıysa kapat
    var $modal = $('#productQuickView');
    if ($modal.length && $modal.is(':visible')) {
      $modal.hide().attr('aria-hidden', 'true');
      $('body').removeClass('modal-open');
    }
    
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
    // mainCategories yüklenmesi için bekle
    function tryGenerateDropdown() {
      var categories = typeof mainCategories !== 'undefined' ? mainCategories : (typeof window.mainCategories !== 'undefined' ? window.mainCategories : null);
      
      if (categories && categories.length > 0) {
        if (typeof generateMenuDropdown === 'function') {
          generateMenuDropdown();
        }
      } else {
        setTimeout(tryGenerateDropdown, 200);
      }
    }
    
    // İlk deneme
    setTimeout(tryGenerateDropdown, 300);
    
    // Veri yüklendikten sonra da tekrar çağır (backup)
    $(window).on('load', function() {
      setTimeout(function() {
        if (typeof generateMenuDropdown === 'function') {
          generateMenuDropdown();
        }
      }, 500);
    });
    
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
    
    // Ürün arama modal fonksiyonları
    function openProductSearchModal() {
      var $modal = $('#productSearchModal');
      // Modal'ı göster - CSS kurallarının çalışmasına izin ver
      $modal.css({
        'display': 'flex',
        'visibility': 'visible',
        'opacity': '1'
      }).fadeIn(300);
      // Body scroll'u engelle
      $('body').css('overflow', 'hidden');
      
      // Modal açıldığında placeholder'ı güncelle (i18n varsa)
      if (typeof i18n !== 'undefined' && i18n.t) {
        var $input = $('#productSearchInputModal');
        if ($input.length && $input.attr('data-i18n-placeholder')) {
          var placeholderKey = $input.attr('data-i18n-placeholder');
          $input.attr('placeholder', i18n.t(placeholderKey));
        }
        // Buton metnini de güncelle
        var $button = $('#productSearchBtnModal');
        if ($button.length) {
          var $buttonText = $button.find('span[data-i18n]');
          if ($buttonText.length && $buttonText.attr('data-i18n')) {
            var buttonKey = $buttonText.attr('data-i18n');
            $buttonText.text(i18n.t(buttonKey));
          }
        }
      }
      
      setTimeout(function() {
        $('#productSearchInputModal').focus();
      }, 350);
    }
    
    function closeProductSearchModal() {
      var $modal = $('#productSearchModal');
      var $content = $modal.find('.product-search-modal-content');
      // İçeriği önce küçült ve kaybolsun
      $content.css({
        'transform': 'scale(0.95)',
        'opacity': '0',
        'transition': 'transform 0.2s ease, opacity 0.2s ease'
      });
      // Sonra modal'ı kapat
      setTimeout(function() {
        $modal.fadeOut(200, function() {
          // FadeOut tamamlandıktan sonra display'i none yap ve transition'ı sıfırla
          $modal.css({
            'display': 'none',
            'visibility': 'hidden',
            'opacity': '0'
          });
          $content.css({
            'transform': 'scale(1)',
            'opacity': '1',
            'transition': ''
          });
        });
      }, 150);
      $('#productSearchInputModal').val('');
      // Body scroll'u geri getir
      $('body').css('overflow', '');
    }
    
    // Ürün bulunamadı pop-up'ı göster
    function showProductNotFoundModal(searchQuery) {
      // Eski modal varsa kaldır
      var $existingModal = $('#productNotFoundModal');
      if ($existingModal.length) {
        $existingModal.remove();
      }
      
      // Pop-up modal HTML'i oluştur (önceden oluştur)
      var modalHTML = '<div id="productNotFoundModal" class="product-not-found-modal">' +
        '<div class="product-not-found-modal-overlay"></div>' +
        '<div class="product-not-found-modal-content">' +
        '<button type="button" class="product-not-found-modal-close" aria-label="Kapat">×</button>' +
        '<div class="product-not-found-icon">🔍</div>' +
        '<h3>Ürün Bulunamadı</h3>' +
        '<p><strong>"' + (searchQuery || '') + '"</strong> için sonuç bulunamadı.</p>' +
        '<p>Lütfen farklı bir arama terimi deneyin.</p>' +
        '<button type="button" class="product-not-found-btn-close">Tamam</button>' +
        '</div>' +
        '</div>';
      
      $('body').append(modalHTML);
      var $modal = $('#productNotFoundModal');
      
      // Önce arama modal'ını kapat
      var $searchModal = $('#productSearchModal');
      if ($searchModal.length && $searchModal.is(':visible')) {
        $searchModal.css({
          'display': 'none',
          'visibility': 'hidden',
          'opacity': '0'
        });
      }
      
      // Pop-up modal'ı hemen göster (kısa gecikme ile animasyon için)
      setTimeout(function() {
        $modal.css({
          'display': 'flex',
          'visibility': 'visible',
          'opacity': '1'
        });
        $('body').css('overflow', 'hidden');
      }, 50);
      
      // Kapatma işlevi
      function closeNotFoundModal(reopenSearch) {
        reopenSearch = reopenSearch !== false; // Varsayılan true
        $modal.css({
          'opacity': '0',
          'transition': 'opacity 0.2s ease'
        });
        setTimeout(function() {
          $modal.css({
            'display': 'none',
            'visibility': 'hidden',
            'opacity': '0'
          });
          $('body').css('overflow', '');
          $modal.remove();
          
          // Eğer reopenSearch true ise, arama modal'ını tekrar aç
          if (reopenSearch) {
            setTimeout(function() {
              openProductSearchModal();
            }, 100);
          }
        }, 200);
      }
      
      // Kapatma butonları (event delegation kullan)
      $modal.on('click', '.product-not-found-btn-close', function(e) {
        e.preventDefault();
        e.stopPropagation();
        closeNotFoundModal(true); // Arama modal'ını tekrar aç
      });
      
      // X butonu ve overlay için sadece kapat (arama modal'ını açma)
      $modal.on('click', '.product-not-found-modal-close, .product-not-found-modal-overlay', function(e) {
        if ($(e.target).hasClass('product-not-found-modal-overlay') || 
            $(e.target).closest('.product-not-found-modal-close').length) {
          e.preventDefault();
          e.stopPropagation();
          closeNotFoundModal(false); // Arama modal'ını açma
        }
      });
      
      // ESC tuşu ile kapat (arama modal'ını tekrar aç)
      $(document).on('keydown.productNotFound', function(e) {
        if (e.keyCode === 27 && $modal.is(':visible')) {
          e.preventDefault();
          closeNotFoundModal(true); // Arama modal'ını tekrar aç
          $(document).off('keydown.productNotFound');
        }
      });
    }
    
    // Sayfa yüklendiğinde modal'ın kapalı olduğundan emin ol
    $(document).ready(function() {
      var $modal = $('#productSearchModal');
      $modal.css({
        'display': 'none',
        'visibility': 'hidden',
        'opacity': '0'
      });
    });
    
    function performProductSearch() {
      var searchQuery = $('#productSearchInputModal').val().trim();
      if (!searchQuery) {
        return;
      }
      
      // Ürünü ara
      var searchResult = null;
      if (typeof searchProduct === 'function') {
        searchResult = searchProduct(searchQuery);
      }
      
      if (searchResult && searchResult.url) {
        // Bulundu, modal'ı kapat ve kategori sayfasına yönlendir
        closeProductSearchModal();
        
        // Eğer tek ürün bulunduysa, normal akış (modal açılacak)
        // Eğer birden fazla ürün bulunduysa, sadece liste gösterilecek (search parametresi ile)
        // Normal yönlendirme
        window.location.href = searchResult.url;
      } else {
        // Bulunamadı - Pop-up modal göster
        showProductNotFoundModal(searchQuery);
      }
    }
    
    // Arama butonuna tıklama (navbar'daki ikon)
    $(document).on('click', '#productSearchBtn', function(e) {
      e.preventDefault();
      openProductSearchModal();
    });

    // Desktop language dropdown
    $(document).on('click', '.language-dropdown-trigger', function(e) {
      e.stopPropagation();
      var $menu = $(this).siblings('.language-dropdown-menu');
      var isOpen = $menu.hasClass('open');
      $('.language-dropdown-menu').removeClass('open');
      if (!isOpen) {
        $menu.addClass('open');
      }
    });

    $(document).on('click', function(e) {
      if (!$(e.target).closest('.language-dropdown').length) {
        $('.language-dropdown-menu').removeClass('open');
      }
    });

    $(document).on('click', '.language-dropdown-menu .language-switcher', function() {
      $('.language-dropdown-menu').removeClass('open');
    });
    
    // Modal içindeki arama butonuna tıklama
    $(document).on('click', '#productSearchBtnModal', function(e) {
      e.preventDefault();
      performProductSearch();
    });
    
    // İletişim formu submit handler
    $(document).on('submit', '.contact-form', function(e) {
      e.preventDefault();
      
      var $form = $(this);
      var $submitBtn = $form.find('input[type="submit"], button[type="submit"]');
      var originalBtnText = $submitBtn.val() || $submitBtn.text();
      
      // Form verilerini al
      var formData = {
        fullname: $form.find('#fullname').val().trim(),
        phone: $form.find('#phone').val().trim(),
        email: $form.find('#email').val().trim(),
        subject: $form.find('#subject').val().trim(),
        message: $form.find('#message').val().trim(),
        kvkk: $form.find('#kvkk').is(':checked')
      };
      
      // Validasyon (frontend)
      if (!formData.fullname || !formData.phone || !formData.email || !formData.subject || !formData.message) {
        showAlert('error', 'Lütfen tüm alanları doldurun!');
        return;
      }
      
      if (!formData.kvkk) {
        showAlert('warning', 'KVKK şartlarını kabul etmelisiniz!');
        return;
      }
      
      // Submit butonunu devre dışı bırak
      $submitBtn.prop('disabled', true);
      $submitBtn.val('Gönderiliyor...').text('Gönderiliyor...');
      
      // API'ye gönder
      $.ajax({
        url: '/api/contact/send',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(formData),
        success: function(response) {
          if (response.success) {
            showAlert('success', response.message || 'Mesajınız başarıyla gönderildi!');
            $form[0].reset(); // Formu temizle
          } else {
            showAlert('error', response.error || 'Bir hata oluştu!');
          }
        },
        error: function(xhr) {
          var errorMsg = 'Bir hata oluştu. Lütfen tekrar deneyin.';
          if (xhr.responseJSON && xhr.responseJSON.error) {
            errorMsg = xhr.responseJSON.error;
          }
          showAlert('error', errorMsg);
        },
        complete: function() {
          // Submit butonunu tekrar aktif et
          $submitBtn.prop('disabled', false);
          $submitBtn.val(originalBtnText).text(originalBtnText);
        }
      });
    });
    
    // Alert gösterme fonksiyonu (admin paneldeki gibi)
    function showAlert(type, message) {
      // Eğer admin panel alert fonksiyonu varsa onu kullan
      if (typeof window.showAlert === 'function') {
        window.showAlert(type, message);
        return;
      }
      
      // Yoksa basit alert göster
      var alertClass = 'alert-' + type;
      var alertIcon = type === 'success' ? '✓' : type === 'warning' ? '⚠' : '✗';
      var alertBg = type === 'success' ? '#10b981' : type === 'warning' ? '#f59e0b' : '#ef4444';
      
      var $alert = $('<div class="contact-alert" style="position: fixed; top: 20px; right: 20px; padding: 16px 24px; background: ' + alertBg + '; color: white; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.2); z-index: 100002; max-width: 400px; animation: slideInRight 0.3s ease;">' +
        '<strong>' + alertIcon + '</strong> ' + message +
        '</div>');
      
      $('body').append($alert);
      
      // 5 saniye sonra kaldır
      setTimeout(function() {
        $alert.fadeOut(300, function() {
          $(this).remove();
        });
      }, 5000);
    }
    
    // Modal kapatma
    $(document).on('click', '#productSearchModalClose, .product-search-modal-overlay', function(e) {
      e.preventDefault();
      closeProductSearchModal();
    });
    
    // ESC tuşu ile modal'ı kapat
    $(document).on('keydown', function(e) {
      if (e.keyCode === 27) { // ESC tuşu
        if ($('#productSearchModal').is(':visible')) {
          closeProductSearchModal();
        }
      }
    });
    
    // Enter tuşu ile arama (modal içinde)
    $(document).on('keypress', '#productSearchInputModal', function(e) {
      if (e.which === 13) { // Enter tuşu
        e.preventDefault();
        performProductSearch();
      }
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
  });
}());
