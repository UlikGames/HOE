// ============================================
// çift dil desteği - tr/en
// basit ama çalışan bir i18n çözümü
// cors sorununu önlemek için çeviriler burada embedded
// ============================================

// çevirileri buraya gömüyoruz - cors sorunu olmasın diye
var translationsData = {
  tr: {
    "nav": {
      "home": "Ana Sayfa",
      "products": "Ürünler",
      "about": "Hakkımızda",
      "services": "Hizmetler",
      "contact": "İletişim",
      "partners": "İş Ortakları",
      "cleaningProducts": "Temizlik Ürünleri",
      "allProducts": "Tümü"
    },
    "index": {
      "services": {
        "creditCard": {
          "title": "Kredi Kartı",
          "description": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove",
          "button": "Daha Fazla"
        },
        "saveMoney": {
          "title": "Para Biriktir",
          "description": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove",
          "button": "Daha Fazla"
        },
        "freeDelivery": {
          "title": "Ücretsiz Kargo",
          "description": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove",
          "button": "Daha Fazla"
        }
      },
      "testimonial": {
        "title": "Referanslar",
        "subtitle": "Mutlu Müşteriler",
        "testimonial1": "Uzak ülkelerde, kelime dağlarının ardında, Vokalia ve Consonantia ülkelerinden çok uzakta, kör metinler yaşıyor. Ayrılmış olarak Bookmarksgrove'da, Semantics kıyısında, büyük bir dil okyanusunda yaşıyorlar.",
        "testimonial2": "Ayrılmış olarak Bookmarksgrove'da, Semantics kıyısında, büyük bir dil okyanusunda yaşıyorlar.",
        "testimonial3": "Vokalia ve Consonantia ülkelerinden çok uzakta, kör metinler yaşıyor. Ayrılmış olarak Bookmarksgrove'da, Semantics kıyısında, büyük bir dil okyanusunda yaşıyorlar.",
        "viaTwitter": "üzerinden"
      },
      "counter": {
        "creativityFuel": "Yaratıcılık Yakıtı",
        "happyClients": "Mutlu Müşteri",
        "allProducts": "Tüm Ürünler",
        "hoursSpent": "Harcanan Saat"
      }
    },
    "product": {
      "title": "Ürünler",
      "subtitle": "Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.",
      "coolStuff": "Harika Ürünler",
      "loadMore": "Daha Fazla Görüntüle",
      "loadMoreRemaining": "ürün daha",
      "subCategories": "Alt Kategoriler",
      "clear": "Temizle",
      "searchPlaceholder": "Bu kategoride ara...",
      "activeFilter": "Aktif Filtre:",
      "searchTitle": "Ürün Ara",
      "searchPlaceholderModal": "Ürün adı veya SKU yazın...",
      "searchButton": "Ara",
      "modal": {
        "description": "Açıklama",
        "specs": "Özellikler",
        "shipping": "Kargo",
        "close": "Kapat",
        "sku": "SKU:",
        "defaultDesc": "Açıklama yok.",
        "defaultShipping": "2-4 iş gününde kargo. 30 gün ücretsiz iade.",
        "defaultProduct": "Ürün"
      }
    },
    "about": {
      "title": "Hakkımızda",
      "subtitle": "tarafından",
      "companyHistory": "Şirket Geçmişi",
      "missionVision": "Misyon & Vizyon",
      "productiveStaff": "Üretken Kadro",
      "meetTeam": "Ekibimizle Tanışın",
      "teamDescription": "Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.",
      "companyHistoryText1": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quo est quis mollitia ratione magni assumenda repellat atque modi temporibus tempore ex. Dolore facilis ex sunt ea praesentium expedita numquam?",
      "companyHistoryText2": "Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat velit eaque aspernatur expedita. Possimus itaque adipisci rem dolorem nesciunt perferendis quae amet deserunt eum labore quidem minima.",
      "missionText1": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quo est quis mollitia ratione magni assumenda repellat atque modi temporibus tempore ex. Dolore facilis ex sunt ea praesentium expedita numquam?",
      "missionText2": "Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat velit eaque aspernatur expedita. Possimus itaque adipisci rem dolorem nesciunt perferendis quae amet deserunt eum labore quidem minima."
    },
    "services": {
      "title": "Hizmetler",
      "subtitle": "tarafından",
      "creditCard": {
        "title": "Kredi Kartı",
        "description": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove",
        "button": "Daha Fazla"
      },
      "saveMoney": {
        "title": "Para Biriktir",
        "description": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove",
        "button": "Daha Fazla"
      },
      "freeDelivery": {
        "title": "Ücretsiz Kargo",
        "description": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove",
        "button": "Daha Fazla"
      },
      "lifetimeWarranty": {
        "title": "Ömür Boyu Garanti",
        "description": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove",
        "button": "Daha Fazla"
      },
      "brandedModel": {
        "title": "Markalı Model",
        "description": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove",
        "button": "Daha Fazla"
      },
      "affordable": {
        "title": "Uygun Fiyatlı",
        "description": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove",
        "button": "Daha Fazla"
      }
    },
    "contact": {
      "title": "İletişim",
      "subtitle": "tarafından",
      "contactInfo": "İletişim Bilgileri",
      "getInTouch": "İletişime Geç",
      "firstname": "Adınız",
      "lastname": "Soyadınız",
      "fullname": "Adınız Soyadınız",
      "email": "E-posta adresiniz",
      "subject": "Konu",
      "message": "Mesajınız",
      "sendMessage": "Gönder",
      "address": "Batumi, Adjara, Georgia",
      "phone": "+ 1235 2355 98",
      "emailAddress": "info@yoursite.com",
      "website": "",
      "formLabel": "İLETİŞİM FORMU",
      "formTitle": "Bize Ulaşın",
      "phoneLabel": "Telefon Numarası",
      "emailLabel": "E-Posta Adresi",
      "companyAddressLabel": "Firma Adresi",
      "phoneInput": "Telefon Numarası",
      "directions": "Yol Tarifi",
      "addressFull": "Batumi, Adjara, Georgia",
      "rating": "5,0",
      "reviews": "1 yorum",
      "viewMap": "Daha büyük haritayı görüntüle",
      "kvkkText": "Kvkk Şartlarını okudum ve onaylıyorum.",
      "submitForm": "FORMU GÖNDER",
      "phone": "+ 1235 2355 98"
    },
    "partners": {
      "title": "İş Ortaklarımız",
      "subtitle": "tarafından",
      "heading": "Güvenilir İş Ortaklarımız",
      "description": "Kaliteli hizmet ve ürünler sunan değerli iş ortaklarımızla çalışmaktan gurur duyuyoruz.",
      "loading": "İş ortakları yükleniyor...",
      "noPartners": "Henüz iş ortağı eklenmemiş.",
      "noImage": "Resim Yok"
    },
    "footer": {
      "description": "Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.",
      "links": {
        "about": "Hakkımızda",
        "help": "Yardım",
        "contact": "İletişim",
        "terms": "Şartlar",
        "meetups": "Buluşmalar",
        "shop": "Mağaza",
        "privacy": "Gizlilik",
        "testimonials": "Referanslar",
        "handbook": "El Kitabı",
        "heldDesk": "Destek",
        "findDesigners": "Tasarımcı Bul",
        "findDevelopers": "Geliştirici Bul",
        "teams": "Takımlar",
        "advertise": "Reklam Ver",
        "api": "API"
      },
      "copyright": "Tüm Hakları Saklıdır.",
      "designedBy": "tarafından tasarlandı"
    }
  },
  en: {
    "nav": {
      "home": "Home",
      "products": "Products",
      "about": "About",
      "services": "Services",
      "contact": "Contact",
      "partners": "Partners",
      "cleaningProducts": "Cleaning Products",
      "allProducts": "All"
    },
    "index": {
      "services": {
        "creditCard": {
          "title": "Credit Card",
          "description": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove",
          "button": "Learn More"
        },
        "saveMoney": {
          "title": "Save Money",
          "description": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove",
          "button": "Learn More"
        },
        "freeDelivery": {
          "title": "Free Delivery",
          "description": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove",
          "button": "Learn More"
        }
      },
      "testimonial": {
        "title": "Testimony",
        "subtitle": "Happy Clients",
        "testimonial1": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        "testimonial2": "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        "testimonial3": "Far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        "viaTwitter": "via"
      },
      "counter": {
        "creativityFuel": "Creativity Fuel",
        "happyClients": "Happy Clients",
        "allProducts": "All Products",
        "hoursSpent": "Hours Spent"
      }
    },
    "product": {
      "title": "Products",
      "subtitle": "Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.",
      "coolStuff": "Cool Stuff",
      "loadMore": "Load More",
      "loadMoreRemaining": "more product",
      "loadMoreRemainingPlural": "more products",
      "subCategories": "Sub Categories",
      "clear": "Clear",
      "searchPlaceholder": "Search in this category...",
      "activeFilter": "Active Filter:",
      "searchTitle": "Search Products",
      "searchPlaceholderModal": "Enter product name or SKU...",
      "searchButton": "Search",
      "modal": {
        "description": "Description",
        "specs": "Specifications",
        "shipping": "Shipping",
        "quickView": "Quick view for this product.",
        "shippingInfo": "Ships in 2–4 business days. Free 30-day returns.",
        "close": "Close",
        "sku": "SKU:",
        "defaultDesc": "No description.",
        "defaultShipping": "Ships in 2-4 business days. Free 30-day returns.",
        "defaultProduct": "Product"
      }
    },
    "about": {
      "title": "About Us",
      "subtitle": "by",
      "companyHistory": "Company History",
      "missionVision": "Mission & Vission",
      "productiveStaff": "Productive Staff",
      "meetTeam": "Meet Our Team",
      "teamDescription": "Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.",
      "companyHistoryText1": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quo est quis mollitia ratione magni assumenda repellat atque modi temporibus tempore ex. Dolore facilis ex sunt ea praesentium expedita numquam?",
      "companyHistoryText2": "Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat velit eaque aspernatur expedita. Possimus itaque adipisci rem dolorem nesciunt perferendis quae amet deserunt eum labore quidem minima.",
      "missionText1": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quo est quis mollitia ratione magni assumenda repellat atque modi temporibus tempore ex. Dolore facilis ex sunt ea praesentium expedita numquam?",
      "missionText2": "Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat velit eaque aspernatur expedita. Possimus itaque adipisci rem dolorem nesciunt perferendis quae amet deserunt eum labore quidem minima."
    },
    "services": {
      "title": "Services",
      "subtitle": "by",
      "creditCard": {
        "title": "Credit Card",
        "description": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove",
        "button": "Learn More"
      },
      "saveMoney": {
        "title": "Save Money",
        "description": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove",
        "button": "Learn More"
      },
      "freeDelivery": {
        "title": "Free Delivery",
        "description": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove",
        "button": "Learn More"
      },
      "lifetimeWarranty": {
        "title": "Lifetime Warranty",
        "description": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove",
        "button": "Learn More"
      },
      "brandedModel": {
        "title": "Branded Model",
        "description": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove",
        "button": "Learn More"
      },
      "affordable": {
        "title": "Affordable",
        "description": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove",
        "button": "Learn More"
      }
    },
    "contact": {
      "title": "Contact Us",
      "subtitle": "by",
      "contactInfo": "Contact Information",
      "getInTouch": "Get In Touch",
      "firstname": "Your firstname",
      "lastname": "Your lastname",
      "fullname": "Your Full Name",
      "email": "Your email address",
      "subject": "Subject",
      "message": "Your Message",
      "sendMessage": "Send",
      "address": "Batumi, Adjara, Georgia",
      "phone": "+ 1235 2355 98",
      "emailAddress": "info@yoursite.com",
      "website": "",
      "formLabel": "CONTACT FORM",
      "formTitle": "Get In Touch",
      "phoneLabel": "Phone Number",
      "emailLabel": "Email Address",
      "companyAddressLabel": "Company Address",
      "phoneInput": "Phone Number",
      "directions": "Directions",
      "addressFull": "Batumi, Adjara, Georgia",
      "rating": "5.0",
      "reviews": "1 review",
      "viewMap": "View larger map",
      "kvkkText": "I have read and approve the KVKK terms.",
      "submitForm": "SEND FORM",
      "phone": "+ 1235 2355 98"
    },
    "partners": {
      "title": "Our Partners",
      "subtitle": "by",
      "heading": "Trusted Business Partners",
      "description": "We are proud to work with our valuable business partners who provide quality services and products.",
      "loading": "Loading partners...",
      "noPartners": "No partners added yet.",
      "noImage": "No Image"
    },
    "footer": {
      "description": "Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.",
      "links": {
        "about": "About",
        "help": "Help",
        "contact": "Contact",
        "terms": "Terms",
        "meetups": "Meetups",
        "shop": "Shop",
        "privacy": "Privacy",
        "testimonials": "Testimonials",
        "handbook": "Handbook",
        "heldDesk": "Held Desk",
        "findDesigners": "Find Designers",
        "findDevelopers": "Find Developers",
        "teams": "Teams",
        "advertise": "Advertise",
        "api": "API"
      },
      "copyright": "All Rights Reserved.",
      "designedBy": "Designed by"
    }
  },
  ka: {
    "nav": {
      "home": "მთავარი",
      "products": "პროდუქცია",
      "about": "ჩვენს შესახებ",
      "services": "სერვისები",
      "contact": "კონტაქტი",
      "partners": "პარტნიორები",
      "cleaningProducts": "საწმენდი საშუალებები",
      "allProducts": "ყველა"
    },
    "index": {
      "services": {
        "creditCard": {
          "title": "საკრედიტო ბარათი",
          "description": "შორს, სიტყვის მთების უკან, ვოკალიასა და კონსონანტიას ქვეყნებიდან შორს, ცხოვრობენ ბრმა ტექსტები. გამოყოფილნი ცხოვრობენ ბუკმარკსგროვში",
          "button": "მეტის ნახვა"
        },
        "saveMoney": {
          "title": "ფულის დაზოგვა",
          "description": "შორს, სიტყვის მთების უკან, ვოკალიასა და კონსონანტიას ქვეყნებიდან შორს, ცხოვრობენ ბრმა ტექსტები. გამოყოფილნი ცხოვრობენ ბუკმარკსგროვში",
          "button": "მეტის ნახვა"
        },
        "freeDelivery": {
          "title": "უფასო მიწოდება",
          "description": "შორს, სიტყვის მთების უკან, ვოკალიასა და კონსონანტიას ქვეყნებიდან შორს, ცხოვრობენ ბრმა ტექსტები. გამოყოფილნი ცხოვრობენ ბუკმარკსგროვში",
          "button": "მეტის ნახვა"
        }
      },
      "testimonial": {
        "title": "რეკომენდაციები",
        "subtitle": "ბედნიერი კლიენტები",
        "testimonial1": "შორს, სიტყვის მთების უკან, ვოკალიასა და კონსონანტიას ქვეყნებიდან შორს, ცხოვრობენ ბრმა ტექსტები. გამოყოფილნი ცხოვრობენ ბუკმარკსგროვში, სემანტიკის სანაპიროზე, დიდ ენის ოკეანეში.",
        "testimonial2": "გამოყოფილნი ცხოვრობენ ბუკმარკსგროვში, სემანტიკის სანაპიროზე, დიდ ენის ოკეანეში.",
        "testimonial3": "ვოკალიასა და კონსონანტიას ქვეყნებიდან შორს, ცხოვრობენ ბრმა ტექსტები. გამოყოფილნი ცხოვრობენ ბუკმარკსგროვში, სემანტიკის სანაპიროზე, დიდ ენის ოკეანეში.",
        "viaTwitter": "მეშვეობით"
      },
      "counter": {
        "creativityFuel": "შემოქმედების საწვავი",
        "happyClients": "ბედნიერი კლიენტი",
        "allProducts": "ყველა პროდუქტი",
        "hoursSpent": "დახარჯული საათები"
      }
    },
    "product": {
      "title": "პროდუქცია",
      "subtitle": "Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.",
      "coolStuff": "მაგარი ნივთები",
      "loadMore": "მეტის ჩვენება",
      "loadMoreRemaining": "მეტი პროდუქტი",
      "loadMoreRemainingPlural": "მეტი პროდუქტი",
      "subCategories": "ქვე კატეგორიები",
      "clear": "გასუფთავება",
      "searchPlaceholder": "ამ კატეგორიაში ძიება...",
      "activeFilter": "აქტიური ფილტრი:",
      "searchTitle": "პროდუქტის ძიება",
      "searchPlaceholderModal": "შეიყვანეთ პროდუქტის სახელი ან SKU...",
      "searchButton": "ძიება",
      "modal": {
        "description": "აღწერა",
        "specs": "სპეციფიკაციები",
        "shipping": "მიწოდება",
        "quickView": "სწრაფი ხედვა ამ პროდუქტისთვის.",
        "shippingInfo": "მიწოდება 2-4 სამუშაო დღეში. უფასო 30-დღიანი დაბრუნება.",
        "close": "დახურვა",
        "sku": "SKU:",
        "defaultDesc": "აღწერა არ არის.",
        "defaultShipping": "მიწოდება 2-4 სამუშაო დღეში. უფასო 30-დღიანი დაბრუნება.",
        "defaultProduct": "პროდუქტი"
      }
    },
    "about": {
      "title": "ჩვენს შესახებ",
      "subtitle": "ავტორი",
      "companyHistory": "კომპანიის ისტორია",
      "missionVision": "მისია და ხედვა",
      "productiveStaff": "პროდუქტიული პერსონალი",
      "meetTeam": "გაიცანით ჩვენი გუნდი",
      "teamDescription": "Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.",
      "companyHistoryText1": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quo est quis mollitia ratione magni assumenda repellat atque modi temporibus tempore ex. Dolore facilis ex sunt ea praesentium expedita numquam?",
      "companyHistoryText2": "Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat velit eaque aspernatur expedita. Possimus itaque adipisci rem dolorem nesciunt perferendis quae amet deserunt eum labore quidem minima.",
      "missionText1": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quo est quis mollitia ratione magni assumenda repellat atque modi temporibus tempore ex. Dolore facilis ex sunt ea praesentium expedita numquam?",
      "missionText2": "Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat velit eaque aspernatur expedita. Possimus itaque adipisci rem dolorem nesciunt perferendis quae amet deserunt eum labore quidem minima."
    },
    "services": {
      "title": "სერვისები",
      "subtitle": "ავტორი",
      "creditCard": {
        "title": "საკრედიტო ბარათი",
        "description": "შორს, სიტყვის მთების უკან, ვოკალიასა და კონსონანტიას ქვეყნებიდან შორს, ცხოვრობენ ბრმა ტექსტები. გამოყოფილნი ცხოვრობენ ბუკმარკსგროვში",
        "button": "მეტის ნახვა"
      },
      "saveMoney": {
        "title": "ფულის დაზოგვა",
        "description": "შორს, სიტყვის მთების უკან, ვოკალიასა და კონსონანტიას ქვეყნებიდან შორს, ცხოვრობენ ბრმა ტექსტები. გამოყოფილნი ცხოვრობენ ბუკმარკსგროვში",
        "button": "მეტის ნახვა"
      },
      "freeDelivery": {
        "title": "უფასო მიწოდება",
        "description": "შორს, სიტყვის მთების უკან, ვოკალიასა და კონსონანტიას ქვეყნებიდან შორს, ცხოვრობენ ბრმა ტექსტები. გამოყოფილნი ცხოვრობენ ბუკმარკსგროვში",
        "button": "მეტის ნახვა"
      },
      "lifetimeWarranty": {
        "title": "სიცოცხლის გარანტია",
        "description": "შორს, სიტყვის მთების უკან, ვოკალიასა და კონსონანტიას ქვეყნებიდან შორს, ცხოვრობენ ბრმა ტექსტები. გამოყოფილნი ცხოვრობენ ბუკმარკსგროვში",
        "button": "მეტის ნახვა"
      },
      "brandedModel": {
        "title": "ბრენდული მოდელი",
        "description": "შორს, სიტყვის მთების უკან, ვოკალიასა და კონსონანტიას ქვეყნებიდან შორს, ცხოვრობენ ბრმა ტექსტები. გამოყოფილნი ცხოვრობენ ბუკმარკსგროვში",
        "button": "მეტის ნახვა"
      },
      "affordable": {
        "title": "ხელმისაწვდომი",
        "description": "შორს, სიტყვის მთების უკან, ვოკალიასა და კონსონანტიას ქვეყნებიდან შორს, ცხოვრობენ ბრმა ტექსტები. გამოყოფილნი ცხოვრობენ ბუკმარკსგროვში",
        "button": "მეტის ნახვა"
      }
    },
    "contact": {
      "title": "დაგვიკავშირდით",
      "subtitle": "ავტორი",
      "contactInfo": "საკონტაქტო ინფორმაცია",
      "getInTouch": "დაგვიკავშირდით",
      "firstname": "თქვენი სახელი",
      "lastname": "თქვენი გვარი",
      "fullname": "თქვენი სრული სახელი",
      "email": "თქვენი ელფოსტის მისამართი",
      "subject": "თემა",
      "message": "თქვენი შეტყობინება",
      "sendMessage": "გაგზავნა",
      "address": "ბათუმი, აჭარა, საქართველო",
      "phone": "+ 1235 2355 98",
      "emailAddress": "info@yoursite.com",
      "website": "",
      "formLabel": "კონტაქტის ფორმა",
      "formTitle": "დაგვიკავშირდით",
      "phoneLabel": "ტელეფონის ნომერი",
      "emailLabel": "ელფოსტის მისამართი",
      "companyAddressLabel": "კომპანიის მისამართი",
      "phoneInput": "ტელეფონის ნომერი",
      "directions": "მიმართულებები",
      "addressFull": "ბათუმი, აჭარა, საქართველო",
      "rating": "5.0",
      "reviews": "1 მიმოხილვა",
      "viewMap": "დიდი რუკის ნახვა",
      "kvkkText": "მე წავიკითხე და ვეთანხმები KVKK პირობებს.",
      "submitForm": "ფორმის გაგზავნა",
      "phone": "+ 1235 2355 98"
    },
    "partners": {
      "title": "ჩვენი პარტნიორები",
      "subtitle": "ავტორი",
      "heading": "სანდო ბიზნეს პარტნიორები",
      "description": "ჩვენ ვამაყობთ, რომ ვმუშაობთ ჩვენს ღირებულ ბიზნეს პარტნიორებთან, რომლებიც უზრუნველყოფენ ხარისხიან მომსახურებასა და პროდუქტებს.",
      "loading": "პარტნიორები იტვირთება...",
      "noPartners": "პარტნიორები ჯერ არ დაემატა.",
      "noImage": "გამოსახულება არ არის"
    },
    "footer": {
      "description": "Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.",
      "links": {
        "about": "ჩვენს შესახებ",
        "help": "დახმარება",
        "contact": "კონტაქტი",
        "terms": "პირობები",
        "meetups": "შეხვედრები",
        "shop": "მაღაზია",
        "privacy": "კონფიდენციალურობა",
        "testimonials": "რეკომენდაციები",
        "handbook": "სახელმძღვანელო",
        "heldDesk": "დახმარების სამსახური",
        "findDesigners": "დიზაინერების პოვნა",
        "findDevelopers": "დეველოპერების პოვნა",
        "teams": "გუნდები",
        "advertise": "რეკლამა",
        "api": "API"
      },
      "copyright": "ყველა უფლება დაცულია.",
      "designedBy": "დიზაინი"
    }
  },
  ru: {
    "nav": {
      "home": "Главная",
      "products": "Продукты",
      "about": "О нас",
      "services": "Услуги",
      "contact": "Контакты",
      "partners": "Партнеры",
      "cleaningProducts": "Чистящие средства",
      "allProducts": "Все"
    },
    "index": {
      "services": {
        "creditCard": {
          "title": "Кредитная карта",
          "description": "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Разделились они живут в Bookmarksgrove",
          "button": "Подробнее"
        },
        "saveMoney": {
          "title": "Экономия денег",
          "description": "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Разделились они живут в Bookmarksgrove",
          "button": "Подробнее"
        },
        "freeDelivery": {
          "title": "Бесплатная доставка",
          "description": "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Разделились они живут в Bookmarksgrove",
          "button": "Подробнее"
        }
      },
      "testimonial": {
        "title": "Отзывы",
        "subtitle": "Довольные клиенты",
        "testimonial1": "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Разделились они живут в Bookmarksgrove, на берегу Семантика, большого языкового океана.",
        "testimonial2": "Разделились они живут в Bookmarksgrove, на берегу Семантика, большого языкового океана.",
        "testimonial3": "В стране гласных и согласных живут рыбные тексты. Разделились они живут в Bookmarksgrove, на берегу Семантика, большого языкового океана.",
        "viaTwitter": "через"
      },
      "counter": {
        "creativityFuel": "Топливо для творчества",
        "happyClients": "Довольный клиент",
        "allProducts": "Все продукты",
        "hoursSpent": "Потраченные часы"
      }
    },
    "product": {
      "title": "Продукты",
      "subtitle": "Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.",
      "coolStuff": "Крутые товары",
      "loadMore": "Показать больше",
      "loadMoreRemaining": "продуктов еще",
      "subCategories": "Подкатегории",
      "clear": "Очистить",
      "searchPlaceholder": "Поиск в этой категории...",
      "activeFilter": "Активный фильтр:",
      "searchTitle": "Поиск продуктов",
      "searchPlaceholderModal": "Введите название продукта или SKU...",
      "searchButton": "Поиск",
      "modal": {
        "description": "Описание",
        "specs": "Характеристики",
        "shipping": "Доставка",
        "close": "Закрыть",
        "sku": "SKU:",
        "defaultDesc": "Описание отсутствует.",
        "defaultShipping": "Доставка за 2-4 рабочих дня. 30 дней бесплатного возврата.",
        "defaultProduct": "Продукт"
      }
    },
    "about": {
      "title": "О нас",
      "subtitle": "автор",
      "companyHistory": "История компании",
      "missionVision": "Миссия и видение",
      "productiveStaff": "Продуктивный персонал",
      "meetTeam": "Познакомьтесь с нашей командой",
      "teamDescription": "Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.",
      "companyHistoryText1": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quo est quis mollitia ratione magni assumenda repellat atque modi temporibus tempore ex. Dolore facilis ex sunt ea praesentium expedita numquam?",
      "companyHistoryText2": "Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat velit eaque aspernatur expedita. Possimus itaque adipisci rem dolorem nesciunt perferendis quae amet deserunt eum labore quidem minima.",
      "missionText1": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quo est quis mollitia ratione magni assumenda repellat atque modi temporibus tempore ex. Dolore facilis ex sunt ea praesentium expedita numquam?",
      "missionText2": "Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat velit eaque aspernatur expedita. Possimus itaque adipisci rem dolorem nesciunt perferendis quae amet deserunt eum labore quidem minima."
    },
    "services": {
      "title": "Услуги",
      "subtitle": "автор",
      "creditCard": {
        "title": "Кредитная карта",
        "description": "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Разделились они живут в Bookmarksgrove",
        "button": "Подробнее"
      },
      "saveMoney": {
        "title": "Экономия денег",
        "description": "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Разделились они живут в Bookmarksgrove",
        "button": "Подробнее"
      },
      "freeDelivery": {
        "title": "Бесплатная доставка",
        "description": "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Разделились они живут в Bookmarksgrove",
        "button": "Подробнее"
      },
      "lifetimeWarranty": {
        "title": "Пожизненная гарантия",
        "description": "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Разделились они живут в Bookmarksgrove",
        "button": "Подробнее"
      },
      "brandedModel": {
        "title": "Фирменная модель",
        "description": "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Разделились они живут в Bookmarksgrove",
        "button": "Подробнее"
      },
      "affordable": {
        "title": "Доступный",
        "description": "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Разделились они живут в Bookmarksgrove",
        "button": "Подробнее"
      }
    },
    "contact": {
      "title": "Свяжитесь с нами",
      "subtitle": "автор",
      "contactInfo": "Контактная информация",
      "getInTouch": "Свяжитесь с нами",
      "firstname": "Ваше имя",
      "lastname": "Ваша фамилия",
      "fullname": "Ваше полное имя",
      "email": "Ваш адрес электронной почты",
      "subject": "Тема",
      "message": "Ваше сообщение",
      "sendMessage": "Отправить",
      "address": "Батуми, Аджария, Грузия",
      "phone": "+ 1235 2355 98",
      "emailAddress": "info@yoursite.com",
      "website": "",
      "formLabel": "Контактная форма",
      "formTitle": "Свяжитесь с нами",
      "phoneLabel": "Номер телефона",
      "emailLabel": "Адрес электронной почты",
      "companyAddressLabel": "Адрес компании",
      "phoneInput": "Номер телефона",
      "directions": "Направления",
      "addressFull": "Батуми, Аджария, Грузия",
      "rating": "5.0",
      "reviews": "1 отзыв",
      "viewMap": "Посмотреть большую карту",
      "kvkkText": "Я прочитал и согласен с условиями KVKK.",
      "submitForm": "Отправить форму",
      "phone": "+ 1235 2355 98"
    },
    "partners": {
      "title": "Наши партнеры",
      "subtitle": "автор",
      "heading": "Надежные деловые партнеры",
      "description": "Мы гордимся тем, что работаем с нашими ценными деловыми партнерами, которые обеспечивают качественные услуги и продукты.",
      "loading": "Загрузка партнеров...",
      "noPartners": "Партнеры еще не добавлены.",
      "noImage": "Изображение отсутствует"
    },
    "footer": {
      "description": "Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.",
      "links": {
        "about": "О нас",
        "help": "Помощь",
        "contact": "Контакты",
        "terms": "Условия",
        "meetups": "Встречи",
        "shop": "Магазин",
        "privacy": "Конфиденциальность",
        "testimonials": "Отзывы",
        "handbook": "Справочник",
        "heldDesk": "Служба поддержки",
        "findDesigners": "Найти дизайнеров",
        "findDevelopers": "Найти разработчиков",
        "teams": "Команды",
        "advertise": "Реклама",
        "api": "API"
      },
      "copyright": "Все права защищены.",
      "designedBy": "Дизайн"
    }
  }
};

var i18n = {
  // Mevcut dil - varsayılan olarak Türkçe veya localStorage'dan al
  currentLang: localStorage.getItem('siteLanguage') || 'tr',
  
  // Tüm dil verileri burada saklanacak - artık direkt translationsData'dan alıyoruz
  translations: translationsData,
  
  // Metni çevir
  t: function(key) {
    // Key'i parçalara ayır (örn: "nav.home" -> ["nav", "home"])
    var keys = key.split('.');
    var value = this.translations[this.currentLang];
    
    // Nested object'lerde gez
    for (var i = 0; i < keys.length; i++) {
      if (value && value[keys[i]]) {
        value = value[keys[i]];
      } else {
        // Çeviri bulunamadı, key'i döndür
        return key;
      }
    }
    
    return value || key;
  },
  
  // dil değiştir
  changeLanguage: function(lang) {
    var self = this;
    
    // dil değiştir (artık yükleme yok direkt değiştir)
    this.currentLang = lang;
    localStorage.setItem('siteLanguage', lang);
    
    // tüm sayfayı güncelle
    this.updatePage();
    
    // dil butonunu güncelle
    this.updateLanguageButton();
    
    // dropdown menüsünü güncelle (eğer fonksiyon varsa)
    if (typeof generateMenuDropdown === 'function') {
      generateMenuDropdown();
    }
  },
  
  // Sayfayı güncelle - tüm data-i18n attribute'larını güncelle
  updatePage: function() {
    var self = this;
    
    // Tüm [data-i18n] elementlerini bul
    var elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      var translated = self.t(key);
      
      // Eğer input/textarea/button ise value veya placeholder güncelle
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'BUTTON') {
        if (el.type === 'button' || el.type === 'submit' || el.tagName === 'BUTTON') {
          // data-i18n-value varsa onu kullan, yoksa value'yu güncelle
          if (el.hasAttribute('data-i18n-value')) {
            el.value = self.t(el.getAttribute('data-i18n-value'));
          } else {
            el.value = translated;
          }
          // aria-label için data-i18n-aria-label kontrolü
          if (el.hasAttribute('data-i18n-aria-label')) {
            el.setAttribute('aria-label', self.t(el.getAttribute('data-i18n-aria-label')));
          }
        } else if (el.hasAttribute('data-i18n-placeholder')) {
          // data-i18n-placeholder varsa onu kullan
          el.placeholder = self.t(el.getAttribute('data-i18n-placeholder'));
        } else if (el.hasAttribute('placeholder')) {
          el.placeholder = translated;
        }
      } else {
        // aria-label için data-i18n-aria-label kontrolü (diğer elementler için)
        if (el.hasAttribute('data-i18n-aria-label')) {
          el.setAttribute('aria-label', self.t(el.getAttribute('data-i18n-aria-label')));
        }
        // Normal elementler için innerHTML güncelle
        // Eğer element içinde başka HTML varsa sadece text node'u güncelle
        if (el.children.length > 0 && el.textContent.trim() === el.innerText.trim()) {
          el.textContent = translated;
        } else {
          el.innerHTML = translated;
        }
      }
    });
    
    // data-i18n-placeholder'a sahip ama data-i18n'e sahip olmayan input/textarea'ları da güncelle
    var placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(function(el) {
      if (!el.hasAttribute('data-i18n')) {
        // Sadece placeholder güncelle
        var placeholderKey = el.getAttribute('data-i18n-placeholder');
        el.placeholder = self.t(placeholderKey);
      }
    });
    
    // data-i18n-value'a sahip ama data-i18n'e sahip olmayan button'ları da güncelle
    var valueElements = document.querySelectorAll('[data-i18n-value]');
    valueElements.forEach(function(el) {
      if (!el.hasAttribute('data-i18n')) {
        // Sadece value güncelle
        var valueKey = el.getAttribute('data-i18n-value');
        el.value = self.t(valueKey);
      }
    });
    
    // slider ve ürün açıklamalarını da güncelle (data-slider.js ve data-products.js'den)
    // jquery yüklüyse ve fonksiyonlar varsa güncelle
    if (typeof $ !== 'undefined') {
      // slider'ı yeniden oluştur - destroy edip tekrar init et
      if (typeof generateSliderHTML === 'function' && $('.hero-carousel').length) {
        // mevcut slider'ı destroy et
        var $carousel = $('.hero-carousel');
        if ($carousel.length) {
          // owl carousel destroy et
          if ($carousel.hasClass('owl-loaded')) {
            try {
              // owl carousel instance'ını al
              var owlData = $carousel.data('owl.carousel');
              
              if (owlData) {
                // önce tüm event'leri kaldır
                $carousel.off('.owl.carousel');
                $(window).off('resize.owl.carousel');
                // destroy metodunu çağır
                if (typeof owlData.destroy === 'function') {
                  owlData.destroy();
                }
              }
              
              // jquery trigger ile de dene (yukarıdaki çalışmazsa)
              try {
                $carousel.trigger('destroy.owl.carousel');
              } catch(e) {}
              
              // veriyi temizle
              $carousel.removeData('owl.carousel');
            } catch(e) {
              // hata varsa salla geç
            }
            
            // DOM'u temizle
            $carousel.removeClass('owl-loaded owl-hidden owl-grab owl-drag');
            $carousel.find('.owl-stage-outer').children().unwrap();
            $carousel.find('.owl-dots, .owl-nav').remove();
            $carousel.removeAttr('style');
          }
        }
        
        // yeni html oluştur - Promise döndürüyor
        var sliderPromise = Promise.resolve();
        if (typeof generateSliderHTML === 'function') {
          var result = generateSliderHTML();
          if (result && typeof result.then === 'function') {
            sliderPromise = result;
          }
        }
        
        // slider'ı yeniden init et - slide'lar hazır olduktan sonra
        sliderPromise.then(function() {
          setTimeout(function() {
            // heroFlexslider global scope'ta mı kontrol et
            var initSlider = window.heroFlexslider || (typeof heroFlexslider !== 'undefined' ? heroFlexslider : null);
            
            if (initSlider) {
              initSlider();
            }
          }, 150);
        }).catch(function(error) {
          console.error('❌ Slider HTML oluşturulurken hata (i18n):', error);
          // Hata olsa bile slider'ı başlatmayı dene
          setTimeout(function() {
            var initSlider = window.heroFlexslider || (typeof heroFlexslider !== 'undefined' ? heroFlexslider : null);
            if (initSlider) {
              initSlider();
            }
          }, 150);
        });
      }
      
      // menü dropdown'ını güncelle
      if (typeof generateMenuDropdown === 'function') {
        generateMenuDropdown();
      }
      
      // ana kategori kartlarını güncelle
      if (typeof generateMainCategoryCards === 'function' && $('#main-categories').length) {
        generateMainCategoryCards();
      }
      
      // kategori sayfası header'ını güncelle (eğer kategori sayfasındaysak)
      if (typeof fillCategoryPageHeader === 'function' && $('#products-container').length && $('#main-categories').length === 0) {
        fillCategoryPageHeader();
      }
      
      // ürünleri yeniden generate et - dil değiştiğinde ürünler de güncellenecek
      // generateProductsHTML içinde generateCategoryFilters() de çağrılıyor, kategoriler de güncellenecek
      if (typeof loadCategoryPage === 'function' && $('#products-container').length && $('#main-categories').length === 0) {
        // kategori sayfasındaysak loadCategoryPage kullan (hem header hem ürünler güncellenecek)
        loadCategoryPage();
      } else if (typeof generateProductsHTML === 'function' && $('#products-container').length) {
        // fallback - normal ürün sayfası
        generateProductsHTML();
      }
      
      // modal açıksa ve içerik varsa güncelle
      var $modal = $('#productQuickView');
      if ($modal.length && $modal.is(':visible')) {
        var closeText = self.t('product.modal.close');
        $modal.find('.pqv-close').attr('aria-label', closeText);
        
        // Modal tab'larını güncelle (zaten data-i18n var, updatePage zaten güncelledi)
        // Ama shipping ve desc default metinleri güncellenmeli
        var $ship = $modal.find('.pqv-ship');
        if ($ship.length && $ship.text().trim() === '2-4 iş gününde kargo. 30 gün ücretsiz iade.') {
          $ship.text(self.t('product.modal.defaultShipping'));
        }
        var $desc = $modal.find('.pqv-desc');
        if ($desc.length && $desc.text().trim() === 'Açıklama yok.') {
          $desc.text(self.t('product.modal.defaultDesc'));
        }
        
        // Ürün detaylarını güncelle - mevcut ürünü bul ve tekrar yükle
        var $currentProduct = $('.product').first(); // Şu an açık modal hangi ürünü gösteriyor?
        // Modal'daki title'dan ürünü bul
        var modalTitle = $modal.find('.pqv-title').text();
        var $foundProduct = null;
        $('.product').each(function() {
          var $prod = $(this);
          if ($prod.data('title') === modalTitle || $prod.find('.desc h3').text() === modalTitle) {
            $foundProduct = $prod;
            return false; // break
          }
        });
        
        // Eğer ürün bulunduysa modal'ı tekrar aç (dil değişmiş olacak)
        if ($foundProduct && $foundProduct.length) {
          // Modal'ı kapatmadan içeriği güncelle
          var $title = $modal.find('.pqv-title');
          var $desc = $modal.find('.pqv-desc');
          var $specs = $modal.find('.pqv-specs');
          var $ship = $modal.find('.pqv-ship');
          var $sku = $modal.find('.pqv-sku');
          var $stock = $modal.find('.pqv-stock');
          
          var data = $foundProduct.data() || {};
          var skuText = self.t('product.modal.sku');
          
          $title.text(data.title || self.t('product.modal.defaultProduct'));
          if (data.sku) { 
            $sku.text(skuText + ' ' + data.sku).show(); 
          } else { 
            $sku.hide().text(''); 
          }
          
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
          
          $desc.text(data.desc || data.description || self.t('product.modal.defaultDesc'));
          
          $specs.empty();
          if (data.specs) {
            (String(data.specs).includes('|') ? String(data.specs).split('|') : String(data.specs).split(','))
              .map(function (s) { return $.trim(s); })
              .filter(Boolean)
              .forEach(function (item) { $specs.append($('<li>').text(item)); });
          }
          
          $ship.text(data.ship || data.shipping || self.t('product.modal.defaultShipping'));
        }
      }
    }
  },
  
  // Dil butonunu güncelle - aktif olanı işaretle
  updateLanguageButton: function() {
    var langBtns = document.querySelectorAll('.language-switcher');
    var self = this;
    
    langBtns.forEach(function(btn) {
      var btnLang = btn.getAttribute('data-lang');
      
      // Aktif dil butonuna "active" class'ı ekle - CSS'te highlight ediliyor
      if (btnLang === self.currentLang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    if (window.refreshLanguageDropdownLabel) {
      window.refreshLanguageDropdownLabel(self.currentLang);
    }
  },
  
  // ilk yükleme - mevcut dili yükle
  init: function() {
    var self = this;
    
    // direkt çeviriler hazır olduğu için hemen sayfayı güncelle
    this.updatePage();
    this.updateLanguageButton();
    
    // dil değiştirici butonu ekle
    this.setupLanguageButton();
  },
  
  // dil değiştirici butonu kurulumu - tüm butonlara event listener ekle
  setupLanguageButton: function() {
    var self = this;
    if (this._languageClickHandler) {
      return;
    }
    this._languageClickHandler = function(event) {
      var target = event.target.closest('.language-switcher');
      if (!target) {
        return;
      }
      var newLang = target.getAttribute('data-lang');
      if (newLang) {
        self.changeLanguage(newLang);
      }
    };
    document.addEventListener('click', this._languageClickHandler);
  }
};

// Sayfa yüklendiğinde başlat - jQuery'den bağımsız çalışsın
(function() {
  // En başta #page'i görünür yap - hiçbir şey onu gizleyemesin
  // Script yüklenir yüklenmez hemen çalış
  var page = document.getElementById('page');
  if (page) {
    // Transition'ı devre dışı bırak, direkt opacity 1 yap
    page.style.transition = 'none';
    page.style.webkitTransition = 'none';
    page.style.opacity = '1';
    page.style.visibility = 'visible';
    
    // Kısa bir süre sonra transition'ı tekrar aç (sadece transform için, opacity için DEĞİL)
    setTimeout(function() {
      page.style.transition = 'transform 0.5s ease, background-color 0.5s ease';
      page.style.webkitTransition = 'transform 0.5s ease, background-color 0.5s ease';
      // Opacity'yi tekrar garantile
      page.style.opacity = '1';
      page.style.visibility = 'visible';
    }, 200);
  }
  
  // Loader'ı kontrol et - eğer varsa z-index'i yüksek tut (görünür olsun)
  var loader = document.querySelector('.fh5co-loader');
  if (loader) {
    loader.style.zIndex = '9999'; // En üstte
    loader.style.opacity = '1';
    loader.style.visibility = 'visible';
    loader.style.display = 'block';
  }
  
  function initI18n() {
    // Yine de garantile - opacity transition olmadan
    if (page) {
      page.style.transition = 'transform 0.5s ease, background-color 0.5s ease';
      page.style.webkitTransition = 'transform 0.5s ease, background-color 0.5s ease';
      page.style.opacity = '1';
      page.style.visibility = 'visible';
    }
    i18n.init();
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
  } else {
    // DOM zaten yüklüyse hemen başlat
    setTimeout(initI18n, 50);
  }
})();
