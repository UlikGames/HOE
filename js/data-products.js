// ============================================
// ürün datası - admin panelinden otomatik güncelleniyor
// manuel düzenleme yapma, admin.html kullan!
// ============================================

var productsData = [
    {
        "image": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80",
        "mainCategory": {
            "tr": "Temizlik Ürünleri",
            "en": "Cleaning Products",
            "ka": "გაწმენდის პროდუქტები",
            "ru": "Чистящие средства"
        },
        "category": {
            "tr": "Çamaşır Suyu",
            "en": "Bleach",
            "ka": "გამათეთრებელი",
            "ru": "Отбеливатель"
        },
        "title": {
            "tr": "Domestos Ultra Çamaşır Suyu 5L",
            "en": "Domestos Ultra Bleach 5L",
            "ka": "დომესტოს ულტრა გამათეთრებელი 5ლ",
            "ru": "Доместос Ультра Отбеливатель 5л"
        },
        "description": {
            "tr": "Güçlü ve etkili çamaşır suyu. %99.9 bakteri ve virüslere karşı etkili. Evinizin her köşesinde hijyen garantisi.",
            "en": "Powerful and effective bleach. 99.9% effective against bacteria and viruses. Hygiene guaranteed in every corner of your home.",
            "ka": "ძლიერი და ეფექტური გამათეთრებელი. 99.9% ეფექტურია ბაქტერიებისა და ვირუსების წინააღმდეგ. ჰიგიენის გარანტია თქვენი სახლის ყველა კუთხეში.",
            "ru": "Мощное и эффективное отбеливающее средство. 99,9% эффективно против бактерий и вирусов. Гарантия гигиены в каждом уголке вашего дома."
        },
        "sku": "DOM-ULTRA-001",
        "stock": 10
    },
    {
        "image": "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=800&q=80",
        "images": [
            "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=800&q=80"
        ],
        "mainCategory": {
            "tr": "Temizlik Ürünleri",
            "en": "Cleaning Products",
            "ka": "გაწმენდის პროდუქტები",
            "ru": "Чистящие средства"
        },
        "category": {
            "tr": "Deterjan",
            "en": "Detergent",
            "ka": "სარეცხი ფხვნილი",
            "ru": "Стиральный порошок"
        },
        "title": {
            "tr": "Ariel Ultra Konsantre Deterjan 4kg",
            "en": "Ariel Ultra Concentrated Detergent 4kg",
            "ka": "არიელი ულტრა კონცენტრირებული ფხვნილი 4კგ",
            "ru": "Ариэль Ультра Концентрированный порошок 4кг"
        },
        "description": {
            "tr": "Leke çıkarma gücü yüksek, konsantre formül. Çamaşırlarınızı tertemiz yapar, renkleri korur. Hassas ciltler için uygun.",
            "en": "High stain removal power, concentrated formula. Makes your clothes spotless, preserves colors. Suitable for sensitive skin.",
            "ka": "მაღალი ლაქების მოცილების ძალა, კონცენტრირებული ფორმულა. აკეთებს თქვენს ტანსაცმელს უბრალოდ სუფთად, ინარჩუნებს ფერებს. შესაფერისია მგრძნობიარე კანისთვის.",
            "ru": "Высокая способность удаления пятен, концентрированная формула. Делает вашу одежду безупречно чистой, сохраняет цвета. Подходит для чувствительной кожи."
        },
        "sku": "ARI-ULTRA-002",
        "stock": 20
    },
    {
        "title": {
            "tr": "Fairy Bulaşık Deterjanı 750ml x 3",
            "en": "Fairy Dish Soap 750ml x 3",
            "ka": "ფეირი ჭურჭლის საპონი 750მლ x 3",
            "ru": "Фейри Средство для мытья посуды 750мл x 3"
        },
        "description": {
            "tr": "Yağlı bulaşıkları anında temizleyen, el dostu formül. Bulaşıklarınız parlak ve hijyenik kalacak. 3'lü paket.",
            "en": "Hand-friendly formula that instantly cleans greasy dishes. Your dishes will stay shiny and hygienic. 3-pack.",
            "ka": "ხელისთვის უსაფრთხო ფორმულა, რომელიც მყისიერად ასუფთავებს ცხიმიან ჭურჭელს. თქვენი ჭურჭელი ბრწყინვალე და ჰიგიენური დარჩება. 3 ცალი შეფუთვა.",
            "ru": "Безопасная для рук формула, которая мгновенно очищает жирную посуду. Ваша посуда останется блестящей и гигиеничной. Упаковка 3 шт."
        },
        "images": [
            "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80",
            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1920&q=80"
        ],
        "image": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80",
        "sku": "FAI-750-003",
        "stock": 25,
        "mainCategory": {
            "tr": "Temizlik Ürünleri",
            "en": "Cleaning Products",
            "ka": "გაწმენდის პროდუქტები",
            "ru": "Чистящие средства"
        },
        "category": {
            "tr": "Bulaşık Deterjanı",
            "en": "Dish Soap",
            "ka": "ჭურჭლის საპონი",
            "ru": "Средство для мытья посуды"
        }
    },
    {
        "image": "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&q=80",
        "images": [
            "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&q=80"
        ],
        "mainCategory": {
            "tr": "Temizlik Ürünleri",
            "en": "Cleaning Products",
            "ka": "გაწმენდის პროდუქტები",
            "ru": "Чистящие средства"
        },
        "category": {
            "tr": "Çok Amaçlı Temizleyici",
            "en": "Multi-Purpose Cleaner",
            "ka": "მრავალფუნქციური გამწმენდი",
            "ru": "Универсальное чистящее средство"
        },
        "title": {
            "tr": "Cif Çok Amaçlı Temizleyici 1L",
            "en": "Cif Multi-Purpose Cleaner 1L",
            "ka": "სიფ მრავალფუნქციური გამწმენდი 1ლ",
            "ru": "Сиф Универсальное чистящее средство 1л"
        },
        "description": {
            "tr": "Mutfaktan banyoya, her yüzey için güvenli ve etkili temizlik. Profesyonel temizlik sonuçları evinizde.",
            "en": "Safe and effective cleaning for every surface, from kitchen to bathroom. Professional cleaning results at home.",
            "ka": "საკუთრიდან აბაზანამდე, ყველა ზედაპირისთვის უსაფრთხო და ეფექტური გაწმენდა. პროფესიონალური გაწმენდის შედეგები თქვენს სახლში.",
            "ru": "Безопасная и эффективная очистка для любой поверхности, от кухни до ванной. Профессиональные результаты уборки дома."
        },
        "sku": "CIF-MULTI-004",
        "stock": 18
    },
    {
        "image": "https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=800&q=80",
        "mainCategory": {
            "tr": "Temizlik Ürünleri",
            "en": "Cleaning Products",
            "ka": "გაწმენდის პროდუქტები",
            "ru": "Чистящие средства"
        },
        "category": {
            "tr": "Çamaşır Suyu",
            "en": "Bleach",
            "ka": "გამათეთრებელი",
            "ru": "Отбеливатель"
        },
        "title": {
            "tr": "Domestos Toz Çamaşır Suyu 1kg",
            "en": "Domestos Powder Bleach 1kg",
            "ka": "დომესტოს ფხვნილის გამათეთრებელი 1კგ",
            "ru": "Доместос Порошковый отбеливатель 1кг"
        },
        "description": {
            "tr": "Toz formda pratik çamaşır suyu. Daha kolay kullanım ve saklama. Güçlü dezenfektan etkisi.",
            "en": "Practical bleach in powder form. Easier to use and store. Strong disinfectant effect.",
            "ka": "ფხვნილის ფორმაში პრაქტიკული გამათეთრებელი. უფრო მარტივი გამოსაყენებლად და შესანახად. ძლიერი დეზინფექციის ეფექტი.",
            "ru": "Практичный отбеливатель в порошковой форме. Легче использовать и хранить. Сильный дезинфицирующий эффект."
        },
        "sku": "DOM-POW-005",
        "stock": 12
    },
    {
        "image": "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&q=80",
        "mainCategory": {
            "tr": "Temizlik Ürünleri",
            "en": "Cleaning Products",
            "ka": "გაწმენდის პროდუქტები",
            "ru": "Чистящие средства"
        },
        "category": {
            "tr": "Yüzey Temizleyici",
            "en": "Surface Cleaner",
            "ka": "ზედაპირის გამწმენდი",
            "ru": "Средство для очистки поверхностей"
        },
        "title": {
            "tr": "Pine Sol Yüzey Temizleyici 946ml",
            "en": "Pine Sol Surface Cleaner 946ml",
            "ka": "პაინ სოლი ზედაპირის გამწმენდი 946მლ",
            "ru": "Пайн Сол Средство для очистки поверхностей 946мл"
        },
        "description": {
            "tr": "Çam kokulu güçlü yüzey temizleyici. Mutfak, banyo ve zeminlerde etkili. Hoş koku bırakır.",
            "en": "Pine-scented powerful surface cleaner. Effective on kitchen, bathroom and floors. Leaves pleasant scent.",
            "ka": "ფიჭვის სურნელის ძლიერი ზედაპირის გამწმენდი. ეფექტურია სამზარეულოში, აბაზანაში და იატაკებზე. ტოვებს სასიამოვნო სურნელს.",
            "ru": "Мощное средство для очистки поверхностей с запахом сосны. Эффективно на кухне, в ванной и на полу. Оставляет приятный аромат."
        },
        "sku": "PIN-946-006",
        "stock": 20
    },
    {
        "image": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80",
        "mainCategory": {
            "tr": "Temizlik Ürünleri",
            "en": "Cleaning Products",
            "ka": "გაწმენდის პროდუქტები",
            "ru": "Чистящие средства"
        },
        "category": {
            "tr": "Bulaşık Deterjanı",
            "en": "Dish Soap",
            "ka": "ჭურჭლის საპონი",
            "ru": "Средство для мытья посуды"
        },
        "title": {
            "tr": "Dawn Ultra Bulaşık Deterjanı 709ml",
            "en": "Dawn Ultra Dish Soap 709ml",
            "ka": "დონ ულტრა ჭურჭლის საპონი 709მლ",
            "ru": "Дон Ультра Средство для мытья посуды 709мл"
        },
        "description": {
            "tr": "Ultra konsantre formül. Az miktarla çok bulaşık yıkar. Yağları anında çözer.",
            "en": "Ultra concentrated formula. Washes many dishes with small amount. Instantly dissolves grease.",
            "ka": "ულტრა კონცენტრირებული ფორმულა. მცირე რაოდენობით ბევრ ჭურჭელს რეცხავს. მყისიერად ახსნის ცხიმს.",
            "ru": "Ультра концентрированная формула. Моет много посуды небольшим количеством. Мгновенно растворяет жир."
        },
        "sku": "DAW-709-007",
        "stock": 22
    },
    {
        "image": "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=800&q=80",
        "mainCategory": {
            "tr": "Temizlik Ürünleri",
            "en": "Cleaning Products",
            "ka": "გაწმენდის პროდუქტები",
            "ru": "Чистящие средства"
        },
        "category": {
            "tr": "Çamaşır Yumuşatıcısı",
            "en": "Fabric Softener",
            "ka": "ტანსაცმლის დამზადებელი",
            "ru": "Кондиционер для белья"
        },
        "title": {
            "tr": "Comfort Çamaşır Yumuşatıcısı 2.4L",
            "en": "Comfort Fabric Softener 2.4L",
            "ka": "კომფორტი ტანსაცმლის დამზადებელი 2.4ლ",
            "ru": "Комфорт Кондиционер для белья 2,4л"
        },
        "description": {
            "tr": "Çamaşırlarınızı yumuşacık yapan, uzun süreli hoş koku veren yumuşatıcı. Tüm çamaşır türleri için uygundur.",
            "en": "Fabric softener that makes your clothes soft and gives long-lasting pleasant scent. Suitable for all fabric types.",
            "ka": "ტანსაცმლის დამზადებელი, რომელიც აკეთებს თქვენს ტანსაცმელს რბილად და იძლევა გრძელვადიან სასიამოვნო სურნელს. შესაფერისია ყველა ტანსაცმლის ტიპისთვის.",
            "ru": "Кондиционер для белья, который делает вашу одежду мягкой и придает долговременный приятный аромат. Подходит для всех типов тканей."
        },
        "sku": "COM-FAB-008",
        "stock": 16
    },
    {
        "image": "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=800&q=80",
        "mainCategory": {
            "tr": "Temizlik Ürünleri",
            "en": "Cleaning Products",
            "ka": "გაწმენდის პროდუქტები",
            "ru": "Чистящие средства"
        },
        "category": {
            "tr": "Cam Temizleyici",
            "en": "Glass Cleaner",
            "ka": "მინის გამწმენდი",
            "ru": "Средство для очистки стекол"
        },
        "title": {
            "tr": "Mr. Muscle Cam Temizleyici 750ml",
            "en": "Mr. Muscle Glass Cleaner 750ml",
            "ka": "მისტერ მასკლ მინის გამწმენდი 750მლ",
            "ru": "Мистер Маскл Средство для очистки стекол 750мл"
        },
        "description": {
            "tr": "Camları ve aynaları lekesiz, parlak yapan profesyonel formül. İz bırakmaz, hızlı kurur.",
            "en": "Professional formula that makes windows and mirrors spotless and shiny. Leaves no streaks, dries quickly.",
            "ka": "პროფესიონალური ფორმულა, რომელიც აკეთებს ფანჯრებსა და სარკეებს უბრალოდ სუფთად და ბრწყინვალედ. არ ტოვებს კვალს, სწრაფად იშრება.",
            "ru": "Профессиональная формула, которая делает окна и зеркала безупречно чистыми и блестящими. Не оставляет разводов, быстро сохнет."
        },
        "sku": "MRM-GLASS-009",
        "stock": 14
    },
    {
        "image": "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&q=80",
        "mainCategory": {
            "tr": "Temizlik Ürünleri",
            "en": "Cleaning Products",
            "ka": "გაწმენდის პროდუქტები",
            "ru": "Чистящие средства"
        },
        "category": {
            "tr": "Deterjan",
            "en": "Detergent",
            "ka": "სარეცხი ფხვნილი",
            "ru": "Стиральный порошок"
        },
        "title": {
            "tr": "Persil Ultra Deterjan 3kg",
            "en": "Persil Ultra Detergent 3kg",
            "ka": "პერსილი ულტრა ფხვნილი 3კგ",
            "ru": "Персил Ультра Стиральный порошок 3кг"
        },
        "description": {
            "tr": "Ultra güçlü leke çıkarıcı formül. En zor lekeleri bile çıkarır. Çamaşırlarınızı beyazlatır ve korur.",
            "en": "Ultra powerful stain remover formula. Removes even the toughest stains. Whitens and protects your clothes.",
            "ka": "ულტრა ძლიერი ლაქების მოცილების ფორმულა. აშორებს ყველაზე რთულ ლაქებსაც კი. ათეთრებს და იცავს თქვენს ტანსაცმელს.",
            "ru": "Ультра мощная формула для удаления пятен. Удаляет даже самые стойкие пятна. Отбеливает и защищает вашу одежду."
        },
        "sku": "PER-ULTRA-010",
        "stock": 28
    },
    {
        "image": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80",
        "mainCategory": {
            "tr": "Temizlik Ürünleri",
            "en": "Cleaning Products",
            "ka": "გაწმენდის პროდუქტები",
            "ru": "Чистящие средства"
        },
        "category": {
            "tr": "Çok Amaçlı Temizleyici",
            "en": "Multi-Purpose Cleaner",
            "ka": "მრავალფუნქციური გამწმენდი",
            "ru": "Универсальное чистящее средство"
        },
        "title": {
            "tr": "Ajax Çok Amaçlı Temizleyici 750ml",
            "en": "Ajax Multi-Purpose Cleaner 750ml",
            "ka": "აჯაქს მრავალფუნქციური გამწმენდი 750მლ",
            "ru": "Аякс Универсальное чистящее средство 750мл"
        },
        "description": {
            "tr": "Güçlü köpük formülü ile her yüzeyi temizler. Mutfak, banyo ve zeminlerde etkili. Hoş limon kokusu.",
            "en": "Cleans every surface with powerful foam formula. Effective on kitchen, bathroom and floors. Pleasant lemon scent.",
            "ka": "ძლიერი ქაფის ფორმულით ასუფთავებს ყველა ზედაპირს. ეფექტურია სამზარეულოში, აბაზანაში და იატაკებზე. სასიამოვნო ლიმონის სურნელი.",
            "ru": "Очищает любую поверхность мощной пенящейся формулой. Эффективно на кухне, в ванной и на полу. Приятный лимонный аромат."
        },
        "sku": "AJX-750-011",
        "stock": 19
    }
];

// ============================================
// ANA KATEGORİLER - admin panelinden otomatik güncelleniyor
// ============================================
var mainCategories = [
    {
        "title": {
            "tr": "Temizlik Ürünleri",
            "en": "Cleaning Products",
            "ka": "გაწმენდის პროდუქტები",
            "ru": "Чистящие средства"
        },
        "slug": "temizlik-urunleri",
        "description": {
            "tr": "Güçlü ve etkili çamaşır suyu. %99.9 bakteri ve virüslere karşı etkili. Evinizin her köşesinde hijyen garantisi.",
            "en": "Powerful and effective bleach. 99.9% effective against bacteria and viruses. Hygiene guaranteed in every corner of your home.",
            "ka": "ძლიერი და ეფექტური გამათეთრებელი. 99.9% ეფექტურია ბაქტერიებისა და ვირუსების წინააღმდეგ. ჰიგიენის გარანტია თქვენი სახლის ყველა კუთხეში.",
            "ru": "Мощное и эффективное отбеливающее средство. 99,9% эффективно против бактерий и вирусов. Гарантия гигиены в каждом уголке вашего дома."
        },
        "headerImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1920&q=80",
        "subCategories": [
            {
                "title": {
                    "tr": "Bulaşık Deterjanı",
                    "en": "Dish Soap",
                    "ka": "ჭურჭლის საპონი",
                    "ru": "Средство для мытья посуды"
                }
            },
            {
                "title": {
                    "tr": "Çok Amaçlı Temizleyici",
                    "en": "Multi-Purpose Cleaner",
                    "ka": "მრავალფუნქციური გამწმენდი",
                    "ru": "Универсальное чистящее средство"
                }
            },
            {
                "title": {
                    "tr": "Yüzey Temizleyici",
                    "en": "Surface Cleaner",
                    "ka": "ზედაპირის გამწმენდი",
                    "ru": "Средство для очистки поверхностей"
                }
            },
            {
                "title": {
                    "tr": "Çamaşır Yumuşatıcısı",
                    "en": "Fabric Softener",
                    "ka": "ტანსაცმლის დამზადებელი",
                    "ru": "Кондиционер для белья"
                }
            },
            {
                "title": {
                    "tr": "Cam Temizleyici",
                    "en": "Glass Cleaner",
                    "ka": "მინის გამწმენდი",
                    "ru": "Средство для очистки стекол"
                }
            },
            {
                "title": {
                    "tr": "Deterjan",
                    "en": "Detergent",
                    "ka": "სარეცხი ფხვნილი",
                    "ru": "Стиральный порошок"
                }
            },
            {
                "title": {
                    "tr": "Çamaşır Suyu",
                    "en": "Bleach",
                    "ka": "გამათეთრებელი",
                    "ru": "Отбеливатель"
                }
            }
        ]
    },
    {
        "title": {
            "tr": "Peynir",
            "en": "Cheese",
            "ka": ""
        },
        "slug": "peynir",
        "description": {
            "tr": "çok iyi peynir",
            "en": "very good cheese",
            "ka": ""
        },
        "headerImage": "/images/uploads/product-1762715697873-373482336.png",
        "subCategories": [
            {
                "title": {
                    "tr": "Keçi Peyniri",
                    "en": "Goat Cheese"
                }
            }
        ]
    },
    {
        "title": {
            "tr": "asdsad",
            "en": "asdsad",
            "ka": "asdsad",
            "ru": "asdsad"
        },
        "slug": "asda",
        "description": {
            "tr": "asdsad",
            "en": "asdsad",
            "ka": "asdsad",
            "ru": "asdsad"
        },
        "headerImage": "/images/uploads/product-1762686892186-584687674.png",
        "subCategories": [
            {
                "title": {
                    "tr": "anan",
                    "en": "anan",
                    "ka": "anan",
                    "ru": "anan"
                }
            }
        ]
    },
    {
        "title": {
            "tr": "anan",
            "en": "anan",
            "ka": "anan",
            "ru": "anan"
        },
        "slug": "anan",
        "description": {
            "tr": "anan",
            "en": "anan",
            "ka": "anan",
            "ru": "anan"
        },
        "headerImage": "/images/uploads/product-1762686672035-482678575.png",
        "subCategories": [
            {
                "title": {
                    "tr": "anan",
                    "en": "",
                    "ka": ""
                }
            }
        ]
    },
    {
        "title": {
            "tr": "Test |ategora",
            "en": "Test |ategora",
            "ka": "Test |ategora",
            "ru": "Test |ategora"
        },
        "slug": "test-categora",
        "description": {
            "tr": "Test |ategora",
            "en": "Test |ategora",
            "ka": "Test |ategora",
            "ru": "Test |ategora"
        },
        "headerImage": "/images/uploads/product-1762715774393-320399727.png",
        "subCategories": [
            {
                "title": {
                    "tr": "ananan",
                    "en": "ananan",
                    "ka": "ananan",
                    "ru": "ananan"
                }
            }
        ]
    },
    {
        "title": {
            "tr": "baban",
            "en": "baban",
            "ka": "baban",
            "ru": "baban"
        },
        "slug": "baban",
        "description": {
            "tr": "baban",
            "en": "baban",
            "ka": "baban",
            "ru": "baban"
        },
        "headerImage": "/images/uploads/product-1762740716831-329630261.png",
        "subCategories": [
            {
                "title": {
                    "tr": "baban",
                    "en": "baban",
                    "ka": "baban",
                    "ru": "baban"
                }
            }
        ]
    }
];

// Global scope'a da ata (scope sorunlarını önlemek için)
if (typeof window !== 'undefined') {
  window.mainCategories = mainCategories;
}

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
  
  // Bu kategoriye ait ürün sayısını hesapla
  var productCount = 0;
  if (typeof productsData !== 'undefined' && productsData && productsData.length > 0) {
    var mainCategoryTitle = category.title[currentLang] || category.title.tr || category.title.en;
    
    productsData.forEach(function(product) {
      var productMainCategory = (typeof product.mainCategory === 'object') 
        ? (product.mainCategory[currentLang] || product.mainCategory.tr || product.mainCategory.en)
        : (product.mainCategory || '');
      
      // Ana kategori eşleşiyorsa ürünü say
      if (productMainCategory && mainCategoryTitle && 
          (productMainCategory === mainCategoryTitle || 
           productMainCategory.toLowerCase() === mainCategoryTitle.toLowerCase())) {
        productCount++;
      }
    });
  }
  
  // Ürün sayısı metni
  var productCountText = (currentLang === 'tr') 
    ? productCount + ' Ürün' 
    : productCount + ' Product' + (productCount !== 1 ? 's' : '');
  
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
    
    if ($h1.length) {
      $h1.text(title);
    }
    if ($h2.length) {
      if ($h2.find('span').length) {
        $h2.find('span').text(description);
      } else {
        $h2.text(description);
      }
    }
  }
  
  // products section başlığını gizle (sidebar'da göstereceğiz)
  var $productSection = $('#fh5co-product');
  if ($productSection.length) {
    var $heading = $productSection.find('.fh5co-heading');
    if ($heading.length) {
      // Başlığı gizle
      $heading.hide();
    }
  }
}

// ============================================
// kategori sidebar'ını oluşturan fonksiyon
// Ana kategorileri ve ürün sayılarını gösterir
// ============================================
function generateCategorySidebar(currentSlug) {
  var $productSection = $('#fh5co-product');
  if (!$productSection.length) return;
  
  // Eğer sidebar zaten varsa, önce kaldır
  var $existingSidebar = $('#category-sidebar');
  if ($existingSidebar.length) {
    $existingSidebar.remove();
  }
  
  var $existingSubSidebar = $('#subcategory-sidebar');
  if ($existingSubSidebar.length) {
    $existingSubSidebar.remove();
  }
  
  var currentLang = (typeof i18n !== 'undefined' && i18n.currentLang) ? i18n.currentLang : 'tr';
  
  // URL'den mevcut kategoriyi al
  var urlParams = new URLSearchParams(window.location.search);
  var urlCategory = urlParams.get('category');
  
  // Ana kategoriyi bul (currentSlug'dan)
  var currentMainCategory = null;
  if (typeof mainCategories !== 'undefined' && mainCategories && mainCategories.length > 0) {
    mainCategories.forEach(function(cat) {
      if (cat.slug === currentSlug) {
        currentMainCategory = cat;
      }
    });
  }
  
  // Ana kategorileri ve ürün sayılarını hesapla
  var categoriesList = [];
  if (typeof mainCategories !== 'undefined' && mainCategories && mainCategories.length > 0) {
    mainCategories.forEach(function(cat) {
      var catTitle = cat.title[currentLang] || cat.title.tr || cat.title.en;
      var catSlug = cat.slug;
      
      // Bu kategoriye ait ürün sayısını hesapla
      var productCount = 0;
      if (typeof productsData !== 'undefined' && productsData && productsData.length > 0) {
        productsData.forEach(function(product) {
          var productMainCategory = (typeof product.mainCategory === 'object') 
            ? (product.mainCategory[currentLang] || product.mainCategory.tr || product.mainCategory.en)
            : (product.mainCategory || '');
          
          if (productMainCategory && catTitle && 
              (productMainCategory === catTitle || 
               productMainCategory.toLowerCase() === catTitle.toLowerCase())) {
            productCount++;
          }
        });
      }
      
      categoriesList.push({
        title: catTitle,
        slug: catSlug,
        count: productCount,
        isActive: (catSlug === currentSlug),
        category: cat
      });
    });
  }
  
  // Sidebar HTML'ini oluştur
  var sidebarTitle = ((typeof i18n !== 'undefined' && i18n.t) ? i18n.t('nav.products') : (currentLang === 'tr' ? 'Kategoriler' : 'Categories'));
  var sidebarHTML = '<div id="category-sidebar" class="category-sidebar">';
  sidebarHTML += '<button type="button" class="category-sidebar-toggle" id="category-sidebar-toggle">';
  sidebarHTML += '<span class="category-sidebar-toggle-text">' + sidebarTitle + '</span>';
  sidebarHTML += '<span class="category-sidebar-toggle-icon">▼</span>';
  sidebarHTML += '</button>';
  sidebarHTML += '<div class="category-sidebar-content" id="category-sidebar-content">';
  sidebarHTML += '<h3 class="category-sidebar-title">' + sidebarTitle + '</h3>';
  sidebarHTML += '<ul class="category-sidebar-list">';
  
  categoriesList.forEach(function(cat) {
    var activeClass = cat.isActive ? ' active' : '';
    var productText = (currentLang === 'tr') ? 'ürün' : (cat.count === 1 ? 'product' : 'products');
    sidebarHTML += '<li class="category-sidebar-item' + activeClass + '" data-category-slug="' + cat.slug + '">';
    sidebarHTML += '<a href="' + cat.slug + '.html" class="category-sidebar-link">';
    sidebarHTML += '<span class="category-name">' + escapeHtml(cat.title) + '</span>';
    sidebarHTML += '<span class="category-count">(' + cat.count + ' ' + productText + ')</span>';
    sidebarHTML += '</a>';
    sidebarHTML += '</li>';
  });
  
  sidebarHTML += '</ul>';
  sidebarHTML += '</div>';
  sidebarHTML += '</div>';
  
  // Alt kategori sidebar'ını oluştur (sadece ana kategori seçildiyse)
  var subSidebarHTML = '';
  if (currentMainCategory && currentMainCategory.subCategories && currentMainCategory.subCategories.length > 0) {
    var subSidebarTitle = (typeof i18n !== 'undefined' && i18n.t) ? i18n.t('product.subCategories') : ((currentLang === 'tr') ? 'Alt Kategoriler' : 'Sub Categories');
    subSidebarHTML = '<div id="subcategory-sidebar" class="category-sidebar subcategory-sidebar">';
    subSidebarHTML += '<button type="button" class="category-sidebar-toggle" id="subcategory-sidebar-toggle">';
    subSidebarHTML += '<span class="category-sidebar-toggle-text">' + subSidebarTitle + '</span>';
    subSidebarHTML += '<span class="category-sidebar-toggle-icon">▼</span>';
    subSidebarHTML += '</button>';
    subSidebarHTML += '<div class="category-sidebar-content" id="subcategory-sidebar-content">';
    subSidebarHTML += '<h3 class="category-sidebar-title">' + subSidebarTitle + '</h3>';
    subSidebarHTML += '<ul class="category-sidebar-list">';
    
    currentMainCategory.subCategories.forEach(function(subCat) {
      var subCatTitle = subCat.title[currentLang] || subCat.title.tr || subCat.title.en;
      var isActive = (urlCategory === subCatTitle);
      var activeClass = isActive ? ' active' : '';
      
      // Bu alt kategoriye ait ürün sayısını hesapla
      var subProductCount = 0;
      if (typeof productsData !== 'undefined' && productsData && productsData.length > 0) {
        productsData.forEach(function(product) {
          var productMainCategory = (typeof product.mainCategory === 'object') 
            ? (product.mainCategory[currentLang] || product.mainCategory.tr || product.mainCategory.en)
            : (product.mainCategory || '');
          var productCategory = (typeof product.category === 'object') 
            ? (product.category[currentLang] || product.category.tr || product.category.en)
            : (product.category || '');
          
          var mainCatTitle = currentMainCategory.title[currentLang] || currentMainCategory.title.tr || currentMainCategory.title.en;
          if (productMainCategory === mainCatTitle && productCategory === subCatTitle) {
            subProductCount++;
          }
        });
      }
      
      var productText = (currentLang === 'tr') ? 'ürün' : (subProductCount === 1 ? 'product' : 'products');
      subSidebarHTML += '<li class="category-sidebar-item' + activeClass + '">';
      subSidebarHTML += '<a href="' + currentSlug + '.html?category=' + encodeURIComponent(subCatTitle) + '" class="category-sidebar-link">';
      subSidebarHTML += '<span class="category-name">' + escapeHtml(subCatTitle) + '</span>';
      subSidebarHTML += '<span class="category-count">(' + subProductCount + ' ' + productText + ')</span>';
      subSidebarHTML += '</a>';
      subSidebarHTML += '</li>';
    });
    
    subSidebarHTML += '</ul>';
    subSidebarHTML += '</div>';
    subSidebarHTML += '</div>';
  }
  
  // Container'ı bul ve sidebar'ı ekle
  var $container = $productSection.find('.container');
  if (!$container.length) return;
  
  // Mevcut yapıyı kontrol et
  var $mainLayout = $container.find('.category-products-layout');
  
  if (!$mainLayout.length) {
    // Layout yoksa oluştur
    var $existingFilters = $container.find('#category-filters').closest('.row');
    var $existingProducts = $container.find('#products-container');
    
    // Yeni layout oluştur
    var $layout = $('<div class="category-products-layout row"></div>');
    var $sidebarWrapper = $('<div class="col-md-3 category-sidebar-wrapper"></div>');
    var $productsWrapper = $('<div class="col-md-9 category-products-wrapper"></div>');
    
    // Sidebar'ı ekle
    $sidebarWrapper.html(sidebarHTML);
    
    // Alt kategori sidebar'ını ekle
    if (subSidebarHTML) {
      $sidebarWrapper.append(subSidebarHTML);
    }
    
    // Filtreleri kaldır (artık kullanılmıyor)
    if ($existingFilters.length) {
      $existingFilters.remove();
    }
    
    // Products container'ı wrapper'a taşı
    if ($existingProducts.length) {
      $productsWrapper.append($existingProducts);
    }
    
    // Layout'u oluştur
    $layout.append($sidebarWrapper);
    $layout.append($productsWrapper);
    
    // Container'a ekle
    $container.append($layout);
  } else {
    // Layout zaten var, sidebar'ı güncelle
    var $sidebarWrapper = $mainLayout.find('.category-sidebar-wrapper');
    if ($sidebarWrapper.length) {
      $sidebarWrapper.html(sidebarHTML);
      // Alt kategori sidebar'ını ekle
      if (subSidebarHTML) {
        $sidebarWrapper.append(subSidebarHTML);
      }
      // Filtreleri kaldır
      $mainLayout.find('#category-filters').closest('.row').remove();
    } else {
      // Sidebar wrapper yok, ekle
      $sidebarWrapper = $('<div class="col-md-3 category-sidebar-wrapper"></div>').html(sidebarHTML);
      
      // Products wrapper kontrolü
      var $productsWrapper = $mainLayout.find('.category-products-wrapper');
      if (!$productsWrapper.length) {
        // Products container'ı wrap et
        var $products = $mainLayout.find('#products-container');
        if ($products.length) {
          $products.wrap('<div class="col-md-9 category-products-wrapper"></div>');
        }
      }
      
      $mainLayout.prepend($sidebarWrapper);
      
      // Col sınıflarını ayarla
      $mainLayout.find('.category-products-wrapper').removeClass('col-md-12').addClass('col-md-9');
    }
  }
  
  // Toggle button event handler
  $(document).off('click', '#category-sidebar-toggle').on('click', '#category-sidebar-toggle', function(e) {
    e.preventDefault();
    var $content = $('#category-sidebar-content');
    var $icon = $(this).find('.category-sidebar-toggle-icon');
    
    $content.slideToggle(300);
    $icon.toggleClass('rotated');
  });
  
  // Alt kategori sidebar toggle
  $(document).off('click', '#subcategory-sidebar-toggle').on('click', '#subcategory-sidebar-toggle', function(e) {
    e.preventDefault();
    var $content = $('#subcategory-sidebar-content');
    var $icon = $(this).find('.category-sidebar-toggle-icon');
    
    $content.slideToggle(300);
    $icon.toggleClass('rotated');
  });
  
  // Arama kutusunu ekle
  generateCategorySearchBox(currentSlug, currentMainCategory);
}

// Arama kutusu ve temizle butonu ekleme fonksiyonu
function generateCategorySearchBox(currentSlug, currentMainCategory) {
  var $productSection = $('#fh5co-product');
  if (!$productSection.length) return;
  
  // Mevcut arama kutusunu kaldır
  $productSection.find('.category-search-box').remove();
  
  var currentLang = (typeof i18n !== 'undefined' && i18n.currentLang) ? i18n.currentLang : 'tr';
  var searchPlaceholder = (typeof i18n !== 'undefined' && i18n.t) ? i18n.t('product.searchPlaceholder') : ((currentLang === 'tr') ? 'Bu kategoride ara...' : 'Search in this category...');
  var clearText = (typeof i18n !== 'undefined' && i18n.t) ? i18n.t('product.clear') : ((currentLang === 'tr') ? 'Temizle' : 'Clear');
  
  var searchHTML = '';
  searchHTML += '<div class="category-search-box" style="margin-top: 20px; width: 100%; display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: center;">';
  searchHTML += '<div class="category-search-input-wrapper" style="position: relative; flex: 1; min-width: 260px; max-width: 520px;">';
  searchHTML += '<span class="category-search-inline-icon" style="position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: #94a3b8; font-size: 16px; pointer-events: none; z-index: 2;"><i class="icon-search"></i></span>';
  searchHTML += '<input type="text" class="category-search-input" id="category-search-input" placeholder="' + escapeHtml(searchPlaceholder) + '" style="width: 100%; padding: 12px 16px 12px 46px; font-size: 16px; border: 2px solid #e5e7eb; border-radius: 8px; outline: none; transition: all 0.3s;" />';
  searchHTML += '</div>';
  searchHTML += '<button type="button" class="category-search-btn btn-clear-search-filter" id="category-search-clear" style="padding: 12px 24px; background: #6b7280; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 600; transition: all 0.3s; white-space: nowrap;">';
  searchHTML += '<i class="icon-cross" style="margin-right: 5px;"></i>' + clearText;
  searchHTML += '</button>';
  searchHTML += '</div>';
  
  // Arama kutusunu products-wrapper içine ekle
  var $productsWrapper = $productSection.find('.category-products-wrapper');
  if ($productsWrapper.length) {
    $productsWrapper.prepend(searchHTML);
  } else {
    // Eğer wrapper yoksa, container'a ekle
    var $container = $productSection.find('.container');
    if ($container.length) {
      var $layout = $container.find('.category-products-layout').first();
      if ($layout.length) {
        $layout.before(searchHTML);
      } else {
        $container.prepend(searchHTML);
      }
    }
  }
  
  // URL'den search parametresini yaz
  var urlParams = new URLSearchParams(window.location.search);
  var existingSearch = urlParams.get('search');
  var $categorySearchInput = $('#category-search-input');
  if (existingSearch && $categorySearchInput.length) {
    $categorySearchInput.val(existingSearch);
  }
  
  // Arama input event handler - gerçek zamanlı arama
  var searchTimeout;
  $(document).off('keyup input', '#category-search-input').on('keyup input', '#category-search-input', function(e) {
    clearTimeout(searchTimeout);
    var $input = $(this);
    searchTimeout = setTimeout(function() {
      var searchQuery = $input.val().trim();
      if (typeof applyCategorySearch === 'function') {
        var mainCategoryFilter = currentMainCategory ? (currentMainCategory.title[currentLang] || currentMainCategory.title.tr || currentMainCategory.title.en) : null;
        applyCategorySearch(searchQuery, mainCategoryFilter, { renderFilters: false });
      }
    }, 300); // 300ms gecikme ile debounce
  });
  
  // Temizle butonu event handler
  $(document).off('click', '#category-search-clear').on('click', '#category-search-clear', function(e) {
    e.preventDefault();
    var $searchInput = $('#category-search-input');
    if ($searchInput.length) {
      $searchInput.val('').focus();
    }
    if (typeof applyCategorySearch === 'function') {
      var mainCategoryFilter = currentMainCategory ? (currentMainCategory.title[currentLang] || currentMainCategory.title.tr || currentMainCategory.title.en) : null;
      applyCategorySearch('', mainCategoryFilter, { renderFilters: false });
    }
  });
}

// ============================================
// kategori sayfasını otomatik yükleyen fonksiyon
// URL'den slug'ı okuyup o kategoriye ait ürünleri yükler
// ============================================
function loadCategoryPage() {
  // Veriler zaten yüklü (statik olarak data-products.js'de tanımlı)
  loadCategoryPageInternal();
}

function loadCategoryPageInternal() {
  var slug = getCategorySlugFromURL();
  if (!slug) return;
  
  var category = getCategoryBySlug(slug);
  if (!category) return;
  
  var currentLang = (typeof i18n !== 'undefined' && i18n.currentLang) ? i18n.currentLang : 'tr';
  var mainCategory = category.title[currentLang] || category.title.tr || category.title.en;
  
  // header'ı doldur
  fillCategoryPageHeader();
  
  // Sidebar'ı oluştur
  generateCategorySidebar(slug);
  
  // ürünleri yükle
  if (typeof generateProductsHTML === 'function' && $('#products-container').length) {
    var urlParams = new URLSearchParams(window.location.search);
    var searchParam = urlParams.get('search');
    var productParam = urlParams.get('product');
    
    // Eğer search parametresi varsa, filtreleme yap
    if (searchParam) {
      generateProductsHTML(mainCategory, searchParam);
    } else {
      generateProductsHTML(mainCategory);
    }
    
    // URL'de product parametresi varsa VE search parametresi yoksa, ürünü otomatik aç
    // Eğer search varsa, sadece ürünleri göster (modal açma)
    if (productParam && !searchParam) {
      // Ürünü bul ve modal'ı aç
      setTimeout(function() {
        openProductFromSearch(productParam);
      }, 500);
    }
  }
}

// ============================================
// Arama sonucu ürünü açma fonksiyonu
// ============================================
function openProductFromSearch(productIdentifier) {
  if (!productIdentifier || typeof productsData === 'undefined' || !productsData) {
    return;
  }
  
  // productsData'dan ürünü bul (SKU veya index ile)
  var foundProduct = null;
  for (var i = 0; i < productsData.length; i++) {
    var product = productsData[i];
    if (product.sku === productIdentifier || ('product-' + i) === productIdentifier) {
      foundProduct = product;
      break;
    }
  }
  
  if (!foundProduct) {
    return;
  }
  
  // Ürün kartını bul ve tıkla
  var currentLang = (typeof i18n !== 'undefined' && i18n.currentLang) ? i18n.currentLang : 'tr';
  var productTitle = (typeof foundProduct.title === 'object')
    ? (foundProduct.title[currentLang] || foundProduct.title.tr || foundProduct.title.en)
    : foundProduct.title;
  
  // Ürün kartını bul (data-title attribute'u ile)
  var $productCard = $('.product').filter(function() {
    var $card = $(this);
    var cardTitle = $card.attr('data-title') || '';
    return cardTitle === productTitle;
  });
  
  if ($productCard.length > 0) {
    // Scroll yap, sonra modal'ı direkt aç
    $('html, body').animate({
      scrollTop: $productCard.offset().top - 100
    }, 300, function() {
      // Scroll tamamlandıktan sonra modal'ı aç
      setTimeout(function() {
        var $product = $productCard.first();
        
        // Önce global openProductModal fonksiyonunu dene
        if (typeof window.openProductModal === 'function') {
          window.openProductModal($product);
        } else {
          // Alternatif: Click event'ini trigger et
          var $clickTarget = $product.find('.product-grid, .icon, .desc h3 a').first();
          if ($clickTarget.length > 0) {
            $clickTarget.trigger('click');
          } else {
            // Son çare: Product card'a direkt click
            $product.trigger('click');
          }
        }
      }, 500);
    });
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
  if (!$dropdowns.length) {
    return;
  }
  
  // mainCategories tanımlı mı kontrol et - window objesi üzerinden de kontrol et
  var categories = typeof mainCategories !== 'undefined' ? mainCategories : (typeof window.mainCategories !== 'undefined' ? window.mainCategories : null);
  
  if (!categories || !categories.length || categories.length === 0) {
    // Boş olsa bile "Tümü" linkini ekle
    var currentLang = (typeof i18n !== 'undefined' && i18n.currentLang) ? i18n.currentLang : 'tr';
    var allText = (currentLang === 'tr') ? 'Tümü' : 'All';
    $dropdowns.each(function() {
      var $dropdown = $(this);
      $dropdown.html('<li><a href="product.html" data-i18n="nav.allProducts">' + escapeHtml(allText) + '</a></li>');
    });
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
    categories.forEach(function(cat) {
      if (!cat || !cat.slug) {
        console.warn('⚠️ Geçersiz kategori:', cat);
        return;
      }
      var title = (cat.title && cat.title[currentLang]) || (cat.title && cat.title.tr) || (cat.title && cat.title.en) || '';
      var slug = cat.slug;
      
      if (title && slug) {
        html += '<li><a href="' + slug + '.html">' + escapeHtml(title) + '</a></li>';
      } else {
      }
    });
    
    $dropdown.html(html);
    
  });
}

// ============================================
// kategori filtrelerini oluşturan fonksiyon (alt kategoriler için)
// ============================================
function resolveMainCategoryTitle(mainCategoryFilter) {
  if (mainCategoryFilter && typeof mainCategoryFilter === 'string' && mainCategoryFilter.trim()) {
    return mainCategoryFilter;
  }
  if (typeof getCategorySlugFromURL !== 'function' || typeof getCategoryBySlug !== 'function') {
    return '';
  }
  var slug = getCategorySlugFromURL();
  if (!slug) return '';
  var category = getCategoryBySlug(slug);
  if (!category || !category.title) return '';
  var currentLang = (typeof i18n !== 'undefined' && i18n.currentLang) ? i18n.currentLang : 'tr';
  return category.title[currentLang] || category.title.tr || category.title.en || '';
}

function updateCategorySearchUrl(searchQuery) {
  var searchParams = new URLSearchParams(window.location.search);
  if (searchQuery && searchQuery.trim()) {
    searchParams.set('search', searchQuery.trim());
  } else {
    searchParams.delete('search');
  }
  searchParams.delete('page');
  var hash = window.location.hash || '';
  var queryString = searchParams.toString();
  var newUrl = window.location.pathname + (queryString ? '?' + queryString : '') + hash;
  if (window.history && window.history.replaceState) {
    window.history.replaceState({}, '', newUrl);
    return true;
  }
  window.location.href = newUrl;
  return false;
}

function applyCategorySearch(searchQuery, mainCategoryFilter, options) {
  var trimmedQuery = (searchQuery || '').trim();
  var resolvedMainCategory = resolveMainCategoryTitle(mainCategoryFilter);
  var shouldContinue = updateCategorySearchUrl(trimmedQuery);
  if (!shouldContinue) {
    return;
  }
  var renderOptions = options || {};
  if (typeof generateProductsHTML === 'function') {
    if (trimmedQuery) {
      generateProductsHTML(resolvedMainCategory, trimmedQuery, renderOptions);
    } else {
      generateProductsHTML(resolvedMainCategory, null, renderOptions);
    }
  }
}

function generateCategoryFilters(mainCategoryFilter) {
  // Filtreler kaldırıldı - fonksiyon devre dışı
  return;
  var $filtersContainer = $('#category-filters');
  if (!$filtersContainer.length) return;
  
  // mevcut dili al
  var currentLang = (typeof i18n !== 'undefined' && i18n.currentLang) ? i18n.currentLang : 'tr';
  
  // Ana kategoriye ait ürün sayılarını hesapla
  var totalProductsCount = 0;
  var inStockCount = 0;
  var outOfStockCount = 0;
  var categories = [];
  var categoryMap = {};
  
  // Önce mainCategories'dan alt kategorileri al (sadece geçerli olanları)
  var validSubCategories = [];
  var validSubCategoriesMap = {};
  
  if (typeof mainCategories !== 'undefined' && mainCategories && mainCategories.length > 0) {
    mainCategories.forEach(function(mainCat) {
      var mainCatTitle = mainCat.title ? (mainCat.title[currentLang] || mainCat.title.tr || mainCat.title.en) : '';
      
      // mainCategoryFilter varsa, sadece bu ana kategoriye ait alt kategorileri al
      if (mainCategoryFilter && mainCatTitle !== mainCategoryFilter) {
        return;
      }
      
      // Bu ana kategoriye ait alt kategorileri ekle
      if (mainCat.subCategories && Array.isArray(mainCat.subCategories) && mainCat.subCategories.length > 0) {
        mainCat.subCategories.forEach(function(subCat) {
          var subCatTitle = subCat.title ? (subCat.title[currentLang] || subCat.title.tr || subCat.title.en) : '';
          if (subCatTitle && subCatTitle.trim() && !validSubCategoriesMap[subCatTitle]) {
            validSubCategoriesMap[subCatTitle] = true;
            validSubCategories.push(subCatTitle);
          }
        });
      }
    });
  }
  
  // Geçerli alt kategorileri direkt categories listesine ekle (ürünlerden bağımsız)
  validSubCategories.forEach(function(subCat) {
    if (subCat && subCat.trim() && !categoryMap[subCat]) {
      categoryMap[subCat] = true;
      categories.push(subCat);
    }
  });
  
  // Şimdi ürünleri işle ve sadece geçerli alt kategorilere sahip ürünleri say
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
    
    totalProductsCount++;
    
    // Stok durumunu kontrol et
    var stock = parseInt(product.stock) || 0;
    if (stock > 0) {
      inStockCount++;
    } else {
      outOfStockCount++;
    }
    
    // Ürünün alt kategorisini kontrol et - sadece geçerli alt kategorileri kullan
    var productCategory = (typeof product.category === 'object') 
      ? product.category[currentLang] || product.category.tr || product.category.en 
      : (product.category || '');
    
    // Sadece geçerli alt kategoriler listesinde varsa ve henüz eklenmemişse ekle
    if (productCategory && validSubCategoriesMap[productCategory] && !categoryMap[productCategory]) {
      categoryMap[productCategory] = true;
      categories.push(productCategory);
    }
  });
  
  // kategorileri alfabetik sırala
  categories.sort();
  
  // Filtre HTML'ini oluştur
  var filterLabel = (currentLang === 'tr') ? 'Filtre:' : 'Filter:';
  var stockLabel = (currentLang === 'tr') ? 'Stok durumu' : 'Stock status';
  var stockText = (currentLang === 'tr') ? 'Stokta var (' + inStockCount + ')' : 'In stock (' + inStockCount + ')';
  var outOfStockText = (currentLang === 'tr') ? 'Stokta yok (' + outOfStockCount + ')' : 'Out of stock (' + outOfStockCount + ')';
  var selectedText = (currentLang === 'tr') ? 'seçildi' : 'selected';
  var resetText = (currentLang === 'tr') ? 'Sıfırla' : 'Reset';
  var allCategoryText = (currentLang === 'tr') ? 'Tümü' : 'All';
  
  // HTML değişkenini başlat
  var html = '';
  
  // Mobil için "Filtrele ve sırala" butonu
  html += '<button type="button" class="mobile-filter-btn" id="mobile-filter-btn">';
  html += '<span class="filter-icon">☰</span>';
  html += '<span class="filter-text">Filtrele ve sırala</span>';
  html += '<span class="mobile-filter-count-badge" id="mobile-filter-count-badge"></span>';
  html += '</button>';
  
  // Mobil sidebar overlay
  html += '<div class="mobile-filter-overlay" id="mobile-filter-overlay"></div>';
  html += '<div class="mobile-filter-sidebar" id="mobile-filter-sidebar">';
  html += '<div class="mobile-filter-header">';
  html += '<h3>Filtrele ve sırala</h3>';
  html += '<span class="mobile-filter-count" id="mobile-filter-count">29 ürün</span>';
  html += '<button type="button" class="mobile-filter-close" id="mobile-filter-close">✕</button>';
  html += '</div>';
  html += '<div class="mobile-filter-content">';
  
  // Stok durumu section
  html += '<div class="mobile-filter-section">';
  html += '<div class="mobile-filter-section-header" data-target="stock-section">';
  html += '<span>Stok durumu</span>';
  html += '<span class="section-arrow">›</span>';
  html += '</div>';
  html += '<div class="mobile-filter-section-content" id="stock-section" style="display: none;">';
  html += '<div class="dropdown-options">';
  html += '<label class="dropdown-option">';
  html += '<input type="checkbox" class="stock-checkbox" value="in_stock" data-count="' + inStockCount + '">';
  html += '<span>' + stockText + '</span>';
  html += '</label>';
  html += '<label class="dropdown-option">';
  html += '<input type="checkbox" class="stock-checkbox" value="out_of_stock" data-count="' + outOfStockCount + '">';
  html += '<span>' + outOfStockText + '</span>';
  html += '</label>';
  html += '</div>';
  html += '</div>';
  html += '</div>';
  
  // Alt kategori section
  html += '<div class="mobile-filter-section">';
  html += '<div class="mobile-filter-section-header" data-target="category-section">';
  html += '<span>Alt kategori seçimi</span>';
  html += '<span class="section-arrow">›</span>';
  html += '</div>';
  html += '<div class="mobile-filter-section-content" id="category-section" style="display: none;">';
  html += '<select class="category-filter-dropdown mobile-select" id="subcategory-filter-mobile">';
  html += '<option value="all">' + allCategoryText + '</option>';
  categories.forEach(function(cat) {
    html += '<option value="' + escapeHtml(cat) + '">' + escapeHtml(cat) + '</option>';
  });
  html += '</select>';
  html += '</div>';
  html += '</div>';
  
  html += '</div>'; // mobile-filter-content
  html += '<div class="mobile-filter-footer">';
  html += '<button type="button" class="mobile-filter-clear" id="mobile-filter-clear">Tümünü kaldır</button>';
  html += '<button type="button" class="mobile-filter-apply" id="mobile-filter-apply">Uygula</button>';
  html += '</div>';
  html += '</div>'; // mobile-filter-sidebar
  
  // Desktop filtreler - direkt category-filters içinde
  html += '<div class="category-filter-left">';
  html += '<span class="category-filter-label">' + filterLabel + '</span>';
  
  // Stok durumu custom dropdown
  html += '<div class="custom-dropdown-wrapper" style="position: relative;">';
  html += '<button type="button" class="category-filter-dropdown custom-dropdown-trigger" id="stock-status-filter-trigger">';
  html += '<span class="dropdown-text">' + stockLabel + '</span>';
  html += '<span class="dropdown-arrow">▼</span>';
  html += '</button>';
  html += '<div class="custom-dropdown-menu" id="stock-status-dropdown" style="display: none;">';
  html += '<div class="dropdown-header">';
  html += '<span class="selected-count" id="stock-selected-count">0 ' + selectedText + '</span>';
  html += '<a href="#" class="dropdown-reset" id="stock-reset">' + resetText + '</a>';
  html += '</div>';
  html += '<div class="dropdown-options">';
  html += '<label class="dropdown-option">';
  html += '<input type="checkbox" class="stock-checkbox" value="in_stock" data-count="' + inStockCount + '">';
  html += '<span>' + stockText + '</span>';
  html += '</label>';
  html += '<label class="dropdown-option">';
  html += '<input type="checkbox" class="stock-checkbox" value="out_of_stock" data-count="' + outOfStockCount + '">';
  html += '<span>' + outOfStockText + '</span>';
  html += '</label>';
  html += '</div>';
  html += '</div>';
  html += '</div>';
  
  // Alt kategori custom dropdown
  html += '<div class="custom-dropdown-wrapper" style="position: relative;">';
  html += '<button type="button" class="category-filter-dropdown custom-dropdown-trigger" id="subcategory-filter-trigger">';
  html += '<span class="dropdown-text">' + allCategoryText + '</span>';
  html += '<span class="dropdown-arrow">▼</span>';
  html += '</button>';
  html += '<div class="custom-dropdown-menu" id="subcategory-dropdown" style="display: none;">';
  html += '<div class="dropdown-options">';
  html += '<label class="dropdown-option" data-value="all">';
  html += '<span>' + allCategoryText + '</span>';
  html += '</label>';
  categories.forEach(function(cat) {
    html += '<label class="dropdown-option" data-value="' + escapeHtml(cat) + '">';
    html += '<span>' + escapeHtml(cat) + '</span>';
    html += '</label>';
  });
  html += '</div>'; // dropdown-options
  html += '</div>'; // custom-dropdown-menu
  html += '</div>'; // custom-dropdown-wrapper (alt kategori)
  html += '</div>'; // category-filter-left
  
  // Sağda ürün sayısı
  html += '<div class="category-filter-right">';
  html += '<span class="category-product-count" id="showing-product-count"></span>';
  html += '</div>';
  
  // Aktif filtreler gösterimi (category-filter-left ve category-filter-right'ın altında)
  html += '<div class="active-filters-container" id="active-filters-container" style="display: none; width: 100%; flex-basis: 100%; order: 999;">';
  html += '<div class="active-filters-wrapper">';
  html += '<div class="active-filters-list" id="active-filters-list"></div>';
  html += '<a href="#" class="clear-all-filters" id="clear-all-filters">Tümünü kaldır</a>';
  html += '</div>';
  html += '</div>';
  html += '</div>'; // category-filters kapanış
  
  $filtersContainer.html(html);
  
  // Önceki arama çubuğunu kaldır (varsa)
  $filtersContainer.parent().find('.category-search-box').remove();
  
  // Kategoriye özel arama input'unu ekle (filtrelerin ALTINDA, parent container'a)
  var searchPlaceholder = (typeof i18n !== 'undefined' && i18n.t) ? i18n.t('product.searchPlaceholder') : ((currentLang === 'tr') ? 'Bu kategoride ara...' : 'Search in this category...');
  var searchHTML = '';
  searchHTML += '<div class="category-search-box" style="margin-top: 20px; width: 100%; display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">';
  searchHTML += '<div class="category-search-input-wrapper" style="position: relative; flex: 1; min-width: 260px; max-width: 520px;">';
  searchHTML += '<span class="category-search-inline-icon" style="position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: #94a3b8; font-size: 16px; pointer-events: none;"><i class="icon-search"></i></span>';
  searchHTML += '<input type="text" class="category-search-input" placeholder="' + escapeHtml(searchPlaceholder) + '" style="width: 100%; padding: 12px 16px 12px 46px; font-size: 16px; border: 2px solid #e5e7eb; border-radius: 8px; outline: none; transition: all 0.3s;" />';
  searchHTML += '</div>';
  searchHTML += '</div>';
  
  // Arama çubuğunu filtrelerin altına, parent container'a ekle (flex container'dan çıkar)
  $filtersContainer.after(searchHTML);
  
  // Arama input'una URL'den search parametresini yaz
  var $categorySearchInput = $filtersContainer.parent().find('.category-search-input');
  var urlParams = new URLSearchParams(window.location.search);
  var existingSearch = urlParams.get('search');
  if (existingSearch && $categorySearchInput.length) {
    $categorySearchInput.val(existingSearch);
  }
  
  // Canlı arama (products.html benzeri) - debounce ile filtrele
  var searchDebounceTimer = null;
  function scheduleCategorySearch(value) {
    clearTimeout(searchDebounceTimer);
    searchDebounceTimer = setTimeout((function(val) {
      return function() {
        applyCategorySearch(val, mainCategoryFilter, { renderFilters: false });
      };
    })(value), 250);
  }
  
  $categorySearchInput.off('input.categorySearch').on('input.categorySearch', function() {
    scheduleCategorySearch($(this).val());
  });
  
  // Enter tuşu yeni satır eklemesin
  $categorySearchInput.off('keydown.categorySearch').on('keydown.categorySearch', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  });
  
  // Stok durumu dropdown toggle
  $(document).off('click', '#stock-status-filter-trigger').on('click', '#stock-status-filter-trigger', function(e) {
    e.stopPropagation();
    var $wrapper = $(this).closest('.custom-dropdown-wrapper');
    var $menu = $('#stock-status-dropdown');
    var isOpen = $wrapper.hasClass('open');
    
    // Tüm dropdown'ları kapat
    $('.custom-dropdown-wrapper').removeClass('open');
    $('.custom-dropdown-menu').hide();
    
    // Bu dropdown'ı aç/kapat
    if (!isOpen) {
      $wrapper.addClass('open');
      $menu.show();
    }
  });
  
  // Dışarı tıklanınca kapat
  $(document).on('click', function(e) {
    if (!$(e.target).closest('.custom-dropdown-wrapper').length) {
      $('.custom-dropdown-wrapper').removeClass('open');
      $('.custom-dropdown-menu').hide();
    }
  });
  
  // Stok checkbox değişiklikleri
  $(document).off('change', '.stock-checkbox').on('change', '.stock-checkbox', function(e) {
    e.stopPropagation(); // Dropdown'ın kapanmasını engelle
    // Checkbox state'i zaten değişmiş olmalı (label tıklaması veya direkt tıklama)
    // State güncellemesini hemen uygula
    updateStockFilter();
    
    // Kısa bir gecikme ile filtreyi uygula (checkbox state'inin korunması için)
    setTimeout(function() {
      applyStockFilter();
    }, 150);
  });
  
  // Checkbox'a direkt tıklandığında (label dışından)
  $(document).off('click', '.stock-checkbox').on('click', '.stock-checkbox', function(e) {
    e.stopPropagation(); // Dropdown'ın kapanmasını engelle
    // Checkbox'ın change event'i otomatik tetiklenecek
  });
  
  // Sıfırla butonu
  $(document).off('click', '#stock-reset').on('click', '#stock-reset', function(e) {
    e.preventDefault();
    $('.stock-checkbox').prop('checked', false);
    updateStockFilter();
    applyStockFilter();
  });
  
  // Stok filtre güncelleme fonksiyonu
  function updateStockFilter() {
    // Sadece desktop dropdown içindeki checkbox'ları kontrol et (mobile'ı hariç tut)
    var checked = $('#stock-status-dropdown .stock-checkbox:checked');
    var count = checked.length;
    var selectedText = (currentLang === 'tr') ? 'seçildi' : 'selected';
    $('#stock-selected-count').text(count + ' ' + selectedText);
    
    // Trigger butonundaki metni güncelle
    var $trigger = $('#stock-status-filter-trigger .dropdown-text');
    var stockLabelText = (currentLang === 'tr') ? 'Stok durumu' : 'Stock status';
    if (count === 0) {
      $trigger.text(stockLabelText);
    } else {
      var labels = [];
      var seenValues = {};
      checked.each(function() {
        var value = $(this).val();
        // Duplicate kontrolü - aynı value'yu iki kez ekleme
        if (!seenValues[value]) {
          var $label = $(this).closest('label').find('span');
          labels.push($label.text());
          seenValues[value] = true;
        }
      });
      $trigger.text(labels.join(', '));
    }
  }
  
  // Stok filtresini uygula
  function applyStockFilter() {
    // Checkbox state'lerini doğru okumak için kısa bir gecikme
    setTimeout(function() {
      var selectedStock = [];
      var seenValues = {};
      // Sadece desktop dropdown içindeki checkbox'ları kontrol et (mobile ile sync olmalı)
      // Checkbox'ların gerçek state'ini oku
      $('#stock-status-dropdown .stock-checkbox').each(function() {
        var $checkbox = $(this);
        // Checkbox'ın gerçek state'ini kontrol et (prop ile)
        var isChecked = $checkbox.prop('checked');
        if (isChecked) {
          var value = $checkbox.val();
          if (!seenValues[value]) {
            selectedStock.push(value);
            seenValues[value] = true;
          }
        }
      });
      
      // URL'yi güncelle
      var currentUrl = window.location.pathname;
      var searchParams = new URLSearchParams(window.location.search);
      
      // Sayfa parametresini kaldır
      searchParams.delete('page');
      
      // Stock parametresini güncelle - eğer hiçbir şey seçili değilse stock parametresini kaldır (tümünü göster)
      if (selectedStock.length > 0) {
        searchParams.set('stock', selectedStock.join(','));
      } else {
        searchParams.delete('stock');
      }
      
      var newUrl = currentUrl;
      if (searchParams.toString()) {
        newUrl += '?' + searchParams.toString();
      }
      
      window.location.href = newUrl;
    }, 50);
  }
  
  // Mobil sidebar açma/kapama
  $(document).off('click', '#mobile-filter-btn').on('click', '#mobile-filter-btn', function() {
    $('#mobile-filter-overlay').show().css('opacity', '1');
    $('#mobile-filter-sidebar').addClass('open');
    $('body').addClass('mobile-filter-open');
  });
  
  $(document).off('click', '#mobile-filter-close, #mobile-filter-overlay').on('click', '#mobile-filter-close, #mobile-filter-overlay', function() {
    $('#mobile-filter-overlay').css('opacity', '0');
    setTimeout(function() {
      $('#mobile-filter-overlay').hide();
    }, 300);
    $('#mobile-filter-sidebar').removeClass('open');
    $('body').removeClass('mobile-filter-open');
  });
  
  // Mobil section açma/kapama
  $(document).off('click', '.mobile-filter-section-header').on('click', '.mobile-filter-section-header', function() {
    var target = $(this).data('target');
    var $section = $('#' + target);
    var $arrow = $(this).find('.section-arrow');
    
    if ($section.is(':visible')) {
      $section.slideUp(200);
      $arrow.removeClass('rotated');
    } else {
      $section.slideDown(200);
      $arrow.addClass('rotated');
    }
  });
  
  // Mobil alt kategori dropdown değişikliği
  $(document).off('change', '#subcategory-filter-mobile').on('change', '#subcategory-filter-mobile', function() {
    var selectedCategory = $(this).val();
    // Desktop dropdown'ı da güncelle
    $('#subcategory-filter').val(selectedCategory);
    
    // Filtreyi uygula
    var currentUrl = window.location.pathname + (window.location.search ? window.location.search.replace(/[?&]page=\d+/, '') : '');
    if (selectedCategory !== 'all') {
      if (currentUrl.indexOf('?') === -1) {
        currentUrl += '?category=' + encodeURIComponent(selectedCategory);
      } else if (currentUrl.indexOf('category=') === -1) {
        currentUrl += '&category=' + encodeURIComponent(selectedCategory);
      } else {
        currentUrl = currentUrl.replace(/category=[^&]*/, 'category=' + encodeURIComponent(selectedCategory));
      }
    } else {
      currentUrl = currentUrl.replace(/[?&]category=[^&]*/, '');
      if (currentUrl.indexOf('?') !== -1 && currentUrl.split('?')[1] === '') {
        currentUrl = currentUrl.split('?')[0];
      }
    }
    currentUrl = currentUrl.replace(/[?&]page=\d+/, '');
    
    // Mobil sidebar'ı kapat ve filtreyi uygula
    $('#mobile-filter-overlay').css('opacity', '0');
    setTimeout(function() {
      $('#mobile-filter-overlay').hide();
    }, 300);
    $('#mobile-filter-sidebar').removeClass('open');
    $('body').removeClass('mobile-filter-open');
    window.location.href = currentUrl;
  });
  
  // Mobil "Tümünü kaldır" butonu
  $(document).off('click', '#mobile-filter-clear').on('click', '#mobile-filter-clear', function() {
    $('.stock-checkbox').prop('checked', false);
    $('#subcategory-filter-mobile').val('all');
    $('#subcategory-filter').val('all');
  });
  
  // Mobil "Uygula" butonu
  $(document).off('click', '#mobile-filter-apply').on('click', '#mobile-filter-apply', function() {
    // Stok filtresini uygula
    var selectedStock = [];
    $('.stock-checkbox:checked').each(function() {
      selectedStock.push($(this).val());
    });
    
    // Alt kategori filtresini uygula
    var selectedCategory = $('#subcategory-filter-mobile').val();
    
    // URL'yi oluştur
    var currentUrl = window.location.pathname;
    var searchParams = new URLSearchParams(window.location.search);
    searchParams.delete('page');
    
    if (selectedStock.length > 0) {
      searchParams.set('stock', selectedStock.join(','));
    } else {
      searchParams.delete('stock');
    }
    
    if (selectedCategory !== 'all') {
      searchParams.set('category', selectedCategory);
    } else {
      searchParams.delete('category');
    }
    
    var newUrl = currentUrl;
    if (searchParams.toString()) {
      newUrl += '?' + searchParams.toString();
    }
    
    // Sidebar'ı kapat ve filtreyi uygula
    $('#mobile-filter-overlay').css('opacity', '0');
    setTimeout(function() {
      $('#mobile-filter-overlay').hide();
    }, 300);
    $('#mobile-filter-sidebar').removeClass('open');
    $('body').removeClass('mobile-filter-open');
    window.location.href = newUrl;
  });
  
  // Alt kategori dropdown toggle
  $(document).off('click', '#subcategory-filter-trigger').on('click', '#subcategory-filter-trigger', function(e) {
    e.stopPropagation();
    var $wrapper = $(this).closest('.custom-dropdown-wrapper');
    var $menu = $('#subcategory-dropdown');
    var isOpen = $wrapper.hasClass('open');
    
    // Tüm dropdown'ları kapat
    $('.custom-dropdown-wrapper').removeClass('open');
    $('.custom-dropdown-menu').hide();
    
    // Bu dropdown'ı aç/kapat
    if (!isOpen) {
      $wrapper.addClass('open');
      $menu.show();
    }
  });
  
  // Alt kategori seçimi
  $(document).off('click', '#subcategory-dropdown .dropdown-option').on('click', '#subcategory-dropdown .dropdown-option', function() {
    var selectedCategory = $(this).data('value');
    var categoryText = $(this).find('span').text();
    
    // Active class'ı güncelle
    $('#subcategory-dropdown .dropdown-option').removeClass('active');
    $(this).addClass('active');
    
    // Trigger butonundaki metni güncelle
    $('#subcategory-filter-trigger .dropdown-text').text(categoryText);
    
    // Dropdown'ı kapat
    $(this).closest('.custom-dropdown-wrapper').removeClass('open');
    $(this).closest('.custom-dropdown-menu').hide();
    
    // Mobil dropdown'ı da güncelle
    $('#subcategory-filter-mobile').val(selectedCategory);
    
    // Sayfayı 1'e resetle ve ürünleri filtrele
    var currentUrl = window.location.pathname + (window.location.search ? window.location.search.replace(/[?&]page=\d+/, '') : '');
    if (selectedCategory !== 'all') {
      // URL'de category parametresi yoksa ekle, varsa güncelle
      if (currentUrl.indexOf('?') === -1) {
        currentUrl += '?category=' + encodeURIComponent(selectedCategory);
      } else if (currentUrl.indexOf('category=') === -1) {
        currentUrl += '&category=' + encodeURIComponent(selectedCategory);
      } else {
        currentUrl = currentUrl.replace(/category=[^&]*/, 'category=' + encodeURIComponent(selectedCategory));
      }
    } else {
      // Tümü seçildiğinde category parametresini kaldır
      currentUrl = currentUrl.replace(/[?&]category=[^&]*/, '');
      if (currentUrl.indexOf('?') !== -1 && currentUrl.split('?')[1] === '') {
        currentUrl = currentUrl.split('?')[0];
      }
    }
    // Sayfa parametresini kaldır (ilk sayfaya dön)
    currentUrl = currentUrl.replace(/[?&]page=\d+/, '');
    window.location.href = currentUrl;
  });
  
  // Aktif filtreleri güncelle
  setTimeout(function() {
    updateActiveFilters();
  }, 200);
}

// Aktif filtreleri gösteren fonksiyon
function updateActiveFilters() {
  var $container = $('#active-filters-container');
  var $list = $('#active-filters-list');
  if (!$container.length || !$list.length) return;
  
  var currentLang = (typeof i18n !== 'undefined' && i18n.currentLang) ? i18n.currentLang : 'tr';
  var urlParams = new URLSearchParams(window.location.search);
  var urlCategory = urlParams.get('category');
  var urlStock = urlParams.get('stock');
  
  $list.empty();
  var hasActiveFilters = false;
  
  // Stok durumu filtreleri
  if (urlStock && urlStock.trim() !== '') {
    var stockFilters = urlStock.split(',');
    stockFilters.forEach(function(filter) {
      var filterText = '';
      if (filter === 'in_stock') {
        filterText = (currentLang === 'tr') ? 'Stokta var' : 'In stock';
      } else if (filter === 'out_of_stock') {
        filterText = (currentLang === 'tr') ? 'Stokta yok' : 'Out of stock';
      }
      
      if (filterText) {
        hasActiveFilters = true;
        var chipHTML = '<span class="active-filter-chip" data-type="stock" data-value="' + escapeHtml(filter) + '">';
        chipHTML += '<span>' + escapeHtml(filterText) + '</span>';
        chipHTML += '<button type="button" class="remove-filter-btn" title="Kaldır">×</button>';
        chipHTML += '</span>';
        $list.append(chipHTML);
      }
    });
  }
  
  // Kategori filtresi
  if (urlCategory && urlCategory.trim() !== '') {
    hasActiveFilters = true;
    var categoryChipHTML = '<span class="active-filter-chip" data-type="category" data-value="' + escapeHtml(urlCategory) + '">';
    categoryChipHTML += '<span>' + escapeHtml(urlCategory) + '</span>';
    categoryChipHTML += '<button type="button" class="remove-filter-btn" title="Kaldır">×</button>';
    categoryChipHTML += '</span>';
    $list.append(categoryChipHTML);
  }
  
  // Container'ı göster/gizle
  if (hasActiveFilters) {
    $container.show();
  } else {
    $container.hide();
  }
  
  // Filtre kaldırma event listener'ları
  $(document).off('click', '.remove-filter-btn').on('click', '.remove-filter-btn', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    var $chip = $(this).closest('.active-filter-chip');
    var filterType = $chip.data('type');
    var filterValue = $chip.data('value');
    
    var currentUrl = window.location.pathname;
    var searchParams = new URLSearchParams(window.location.search);
    searchParams.delete('page');
    
    if (filterType === 'stock') {
      // Stok filtresini kaldır
      var currentStock = searchParams.get('stock');
      if (currentStock) {
        var stockArray = currentStock.split(',');
        var index = stockArray.indexOf(filterValue);
        if (index !== -1) {
          stockArray.splice(index, 1);
          if (stockArray.length > 0) {
            searchParams.set('stock', stockArray.join(','));
          } else {
            searchParams.delete('stock');
          }
        }
      }
    } else if (filterType === 'category') {
      // Kategori filtresini kaldır
      searchParams.delete('category');
    }
    
    var newUrl = currentUrl;
    if (searchParams.toString()) {
      newUrl += '?' + searchParams.toString();
    }
    
    window.location.href = newUrl;
  });
  
  // Tümünü kaldır butonu
  $(document).off('click', '#clear-all-filters').on('click', '#clear-all-filters', function(e) {
    e.preventDefault();
    var currentUrl = window.location.pathname;
    var searchParams = new URLSearchParams(window.location.search);
    searchParams.delete('stock');
    searchParams.delete('category');
    searchParams.delete('page');
    
    var newUrl = currentUrl;
    if (searchParams.toString()) {
      newUrl += '?' + searchParams.toString();
    }
    
    window.location.href = newUrl;
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
function generateProductsHTML(mainCategoryFilter, searchQuery, options) {
  options = options || {};
  var renderFilters = options.renderFilters !== false;
  var $productsContainer = $('#products-container');
  
  // eğer products-container yoksa ama main-categories varsa, ana kategori kartlarını göster
  if (!$productsContainer.length && $('#main-categories').length) {
    // Veriler zaten yüklü (statik olarak data-products.js'de tanımlı)
    generateMainCategoryCards();
    return;
  }
  
  if (!$productsContainer.length) {
    return;
  }
  
  // Veriler zaten yüklü (statik olarak data-products.js'de tanımlı)
  generateProductsHTMLInternal(mainCategoryFilter, searchQuery, options);
}

function generateProductsHTMLInternal(mainCategoryFilter, searchQuery, options) {
  options = options || {};
  var renderFilters = options.renderFilters !== false;
  var $productsContainer = $('#products-container');
  
  if (!$productsContainer.length) {
    return;
  }
  
  var currentLang = (typeof i18n !== 'undefined' && i18n.currentLang) ? i18n.currentLang : 'tr';
  
  // Filtreler kaldırıldı - artık sadece sidebar kullanılıyor
  // generateCategoryFilters fonksiyonu devre dışı
  
  // eski ürünleri temizle
  $productsContainer.empty();
  
  // HTML değişkenini başlat
  var html = '';
  
  // URL'den kategori filtresini al
  var urlParams = new URLSearchParams(window.location.search);
  var urlCategory = urlParams.get('category');
  
  // Eğer kategori filtresi varsa, aktif filtre banner'ını ekle
  if (urlCategory && urlCategory.trim()) {
    var clearFilterText = (typeof i18n !== 'undefined' && i18n.t) ? i18n.t('product.clear') : ((currentLang === 'tr') ? 'Temizle' : 'Clear');
    var activeFilterText = (typeof i18n !== 'undefined' && i18n.t) ? i18n.t('product.activeFilter') : ((currentLang === 'tr') ? 'Aktif Filtre:' : 'Active Filter:');
    
    html += '<div class="search-results-banner active-category-banner" style="width: 100%; margin-bottom: 30px; padding: 20px; background: #f8f9fa; border-radius: 8px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 15px;">';
    html += '<div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">';
    html += '<span style="font-size: 16px; color: #333; font-weight: 600;">' + activeFilterText + '</span>';
    html += '<span style="font-size: 16px; color: #6366f1; font-weight: 600;">"' + escapeHtml(urlCategory) + '"</span>';
    html += '</div>';
    html += '<button type="button" class="btn-clear-category-filter btn-clear-search-filter" data-category="' + escapeHtml(urlCategory) + '" style="padding: 10px 20px; background: #6366f1; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 600; transition: background 0.2s;">';
    html += '<i class="icon-cross" style="margin-right: 5px;"></i>' + clearFilterText;
    html += '</button>';
    html += '</div>';
  }
  
  // Arama sonuçları banner'ı kaldırıldı - artık gerek yok
  
  // Geçerli alt kategorileri al (mainCategories'dan)
  var validSubCategoriesMap = {};
  if (typeof mainCategories !== 'undefined' && mainCategories && mainCategories.length > 0) {
    mainCategories.forEach(function(mainCat) {
      var mainCatTitle = mainCat.title ? (mainCat.title[currentLang] || mainCat.title.tr || mainCat.title.en) : '';
      
      // mainCategoryFilter varsa, sadece bu ana kategoriye ait alt kategorileri al
      if (mainCategoryFilter && mainCatTitle !== mainCategoryFilter) {
        return;
      }
      
      // Bu ana kategoriye ait alt kategorileri ekle
      if (mainCat.subCategories && Array.isArray(mainCat.subCategories) && mainCat.subCategories.length > 0) {
        mainCat.subCategories.forEach(function(subCat) {
          var subCatTitle = subCat.title ? (subCat.title[currentLang] || subCat.title.tr || subCat.title.en) : '';
          if (subCatTitle && subCatTitle.trim()) {
            validSubCategoriesMap[subCatTitle] = true;
          }
        });
      }
    });
  }
  
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
    
    // Alt kategori kontrolü - eğer ürünün alt kategorisi geçerli alt kategoriler listesinde yoksa, ürünü gösterme
    var productCategory = (typeof product.category === 'object') 
      ? product.category[currentLang] || product.category.tr || product.category.en 
      : (product.category || '');
    
    // Eğer ürünün bir alt kategorisi varsa ama bu kategori geçerli değilse, ürünü gösterme
    if (productCategory && productCategory.trim()) {
      if (!validSubCategoriesMap[productCategory]) {
        return; // Bu alt kategori silinmiş, ürünü gösterme
      }
    }
    
    filteredProducts.push(product);
  });
  
  // Eğer searchQuery varsa, ürünleri arama sorgusuna göre filtrele
  // SADECE ürün adı (title) ve SKU'ya göre arama yap
  if (searchQuery && searchQuery.trim()) {
    var query = searchQuery.toLowerCase().trim();
    filteredProducts = filteredProducts.filter(function(product) {
      // Başlık kontrolü
      var title = (typeof product.title === 'object') 
        ? (product.title[currentLang] || product.title.tr || product.title.en || '')
        : (product.title || '');
      var titleLower = title.toLowerCase();
      
      // SKU kontrolü
      var sku = (product.sku || '').toLowerCase();
      
      // Başlıkta arama
      var matchesInTitle = titleLower.indexOf(query) !== -1;
      
      // SKU'da arama
      var matchesInSku = sku === query || sku.indexOf(query) !== -1;
      
      // SADECE başlık ve SKU'da arama yap (açıklama, kategori vs. hariç)
      return matchesInTitle || matchesInSku;
    });
  }
  
  // products-container flexbox grid olacak (CSS'de tanımlı)
  $productsContainer.removeClass('row');
  
  // Eğer arama yapıldıysa ve sonuç bulunamadıysa mesaj göster
  if (searchQuery && searchQuery.trim() && filteredProducts.length === 0) {
    var noResultsText = (currentLang === 'tr') ? 'Bir şey bulamadık' : 'No results found';
    var noResultsSubText = (currentLang === 'tr') 
      ? 'Aradığınız kriterlere uygun ürün bulunamadı. Lütfen farklı bir arama terimi deneyin.' 
      : 'No products found matching your search criteria. Please try a different search term.';
    
    html += '<div class="no-search-results" style="width: 100%; padding: 60px 20px; text-align: center; background: #f8f9fa; border-radius: 12px; margin: 30px 0;">';
    html += '<div style="max-width: 500px; margin: 0 auto;">';
    html += '<i class="icon-search" style="font-size: 64px; color: #cbd5e0; margin-bottom: 20px; display: block;"></i>';
    html += '<h3 style="font-size: 24px; color: #1a202c; margin-bottom: 12px; font-weight: 600;">' + escapeHtml(noResultsText) + '</h3>';
    html += '<p style="font-size: 16px; color: #718096; line-height: 1.6; margin: 0;">' + escapeHtml(noResultsSubText) + '</p>';
    html += '</div>';
    html += '</div>';
  } else if (filteredProducts.length === 0 && !searchQuery) {
    // Eğer arama yapılmadıysa ama yine de ürün yoksa (normal durumda olmaması gerekir ama yine de kontrol edelim)
    var noProductsText = (currentLang === 'tr') ? 'Henüz ürün eklenmemiş' : 'No products available';
    html += '<div class="no-products" style="width: 100%; padding: 60px 20px; text-align: center; background: #f8f9fa; border-radius: 12px; margin: 30px 0;">';
    html += '<p style="font-size: 18px; color: #718096;">' + escapeHtml(noProductsText) + '</p>';
    html += '</div>';
  }
  
  // URL'den parametreleri oku
  var urlParams = new URLSearchParams(window.location.search);
  var urlCategory = urlParams.get('category');
  var urlStock = urlParams.get('stock');
  
  // URL'den gelen category filtresini uygula
  if (urlCategory) {
    filteredProducts = filteredProducts.filter(function(product) {
      var productCategory = (typeof product.category === 'object') 
        ? product.category[currentLang] || product.category.tr || product.category.en 
        : (product.category || '');
      return productCategory === urlCategory;
    });
    
    // Dropdown'ı seçili hale getir (desktop ve mobil)
    setTimeout(function() {
      // Desktop custom dropdown
      var $option = $('#subcategory-dropdown .dropdown-option[data-value="' + urlCategory + '"]');
      if ($option.length) {
        var categoryText = $option.find('span').text();
        $('#subcategory-filter-trigger .dropdown-text').text(categoryText);
        // Active class ekle
        $('#subcategory-dropdown .dropdown-option').removeClass('active');
        $option.addClass('active');
      } else {
        // Eğer kategori bulunamazsa "Tümü" seç
        var allCategoryText = (currentLang === 'tr') ? 'Tümü' : 'All';
        $('#subcategory-filter-trigger .dropdown-text').text(allCategoryText);
        $('#subcategory-dropdown .dropdown-option[data-value="all"]').addClass('active');
      }
      // Mobil dropdown
      $('#subcategory-filter-mobile').val(urlCategory);
    }, 100);
  }
  
  // URL'den gelen stock filtresini uygula - eğer stock parametresi yoksa veya boşsa tümünü göster
  if (urlStock && urlStock.trim() !== '') {
    var stockFilters = urlStock.split(',');
    filteredProducts = filteredProducts.filter(function(product) {
      var stock = parseInt(product.stock) || 0;
      var inStock = stock > 0;
      
      if (stockFilters.indexOf('in_stock') !== -1 && inStock) {
        return true;
      }
      if (stockFilters.indexOf('out_of_stock') !== -1 && !inStock) {
        return true;
      }
      return false;
    });
    
    // Checkbox'ları seçili hale getir
    setTimeout(function() {
      stockFilters.forEach(function(filter) {
        // Hem desktop hem mobile checkbox'larını seç
        $('.stock-checkbox[value="' + filter + '"]').prop('checked', true);
      });
      // Seçim sayısını ve trigger butonunu güncelle (sadece desktop dropdown'ından)
      var checked = $('#stock-status-dropdown .stock-checkbox:checked');
      var count = checked.length;
      var selectedText = (currentLang === 'tr') ? 'seçildi' : 'selected';
      $('#stock-selected-count').text(count + ' ' + selectedText);
      
      // Trigger butonundaki metni güncelle
      var $trigger = $('#stock-status-filter-trigger .dropdown-text');
      var stockLabel = (currentLang === 'tr') ? 'Stok durumu' : 'Stock status';
      if (count === 0) {
        $trigger.text(stockLabel);
      } else {
        var labels = [];
        var seenValues = {};
        checked.each(function() {
          var value = $(this).val();
          // Duplicate kontrolü - aynı value'yu iki kez ekleme
          if (!seenValues[value]) {
            var $label = $(this).closest('label').find('span');
            labels.push($label.text());
            seenValues[value] = true;
          }
        });
        $trigger.text(labels.join(', '));
      }
    }, 100);
  }
  
  // Sayfalama için ürün sayısı
  var productsPerPage = 12;
  var totalProducts = filteredProducts.length;
  var currentPage = 1;
  
  // URL'den sayfa numarasını al
  var pageParam = urlParams.get('page');
  if (pageParam && !isNaN(parseInt(pageParam)) && parseInt(pageParam) > 0) {
    currentPage = parseInt(pageParam);
  }
  
  // Toplam sayfa sayısı
  var totalPages = Math.ceil(totalProducts / productsPerPage);
  if (currentPage > totalPages && totalPages > 0) {
    currentPage = totalPages;
  }
  
  // Helper fonksiyon: Ürün HTML'ini oluştur
  function createProductHTML(product, index) {
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
    
    // Kategori kontrolü - alt kategorisi veya ana kategorisi eksikse uyarı göster
    var hasMainCategory = mainCategory && mainCategory.trim();
    var hasValidCategory = true;
    var categoryWarning = '';
    
    if (!hasMainCategory) {
      categoryWarning = (currentLang === 'tr') ? 'Ana kategorisi yok - ekleyin' : 'Main category missing - add it';
      hasValidCategory = false;
    } else if (!category || !category.trim()) {
      categoryWarning = (currentLang === 'tr') ? 'Alt kategorisi yok - ekleyin' : 'Sub category missing - add it';
      hasValidCategory = false;
    }
    
    // Flexbox grid sistemi - her satırda 3 ürün, boş yer kalmayacak
    var productHTML = '<div class="product-item text-center animate-box';
    
    // Kategori sorunu varsa farklı stil uygula
    var itemStyle = '';
    if (!hasValidCategory) {
      itemStyle = 'background: #fff3cd; border: 2px solid #ffc107; opacity: 0.95;';
    }
    
    // Sayfalama: Sadece mevcut sayfadaki ürünleri göster
    var startIndex = (currentPage - 1) * productsPerPage;
    var endIndex = startIndex + productsPerPage;
    if (index < startIndex || index >= endIndex) {
      productHTML += ' product-item-hidden" style="display: none;' + (itemStyle ? ' ' + itemStyle : '') + '"';
    } else {
      productHTML += '"' + (itemStyle ? ' style="' + itemStyle + '"' : '');
    }
    productHTML += '>';
    productHTML += '<div class="product"';
    productHTML += ' data-title="' + escapeHtml(title) + '"';
    productHTML += ' data-desc="' + escapeHtml(description) + '"';
    productHTML += ' data-specs="' + escapeHtml(specs) + '"';
    productHTML += ' data-sku="' + escapeHtml(product.sku || '') + '"';
    productHTML += ' data-stock="' + escapeHtml(product.stock || 0) + '"';
    productHTML += ' data-ship="' + escapeHtml(shipping) + '"';
    productHTML += ' data-main-category="' + escapeHtml(mainCategory) + '"';
    productHTML += ' data-category="' + escapeHtml(category) + '"';
    
    // çoklu resim desteği - images array varsa onu kullan, yoksa image string'i kullan
    var imagesForModal = [];
    if (product.images && Array.isArray(product.images) && product.images.length > 0) {
      imagesForModal = product.images;
    } else if (product.image) {
      // geriye uyumluluk - tek resim varsa array'e çevir
      imagesForModal = [product.image];
    }
    // virgülle ayrılmış string olarak data-images'e yaz
    productHTML += ' data-images="' + escapeHtml(imagesForModal.join(',')) + '">';
    
    // resim URL'ini doğru şekilde escape et - ilk resmi göster (product card için)
    var imageUrl = escapeHtml(imagesForModal.length > 0 ? imagesForModal[0] : product.image || '');
    productHTML += '<div class="product-grid" style="background-image:url(' + imageUrl + ');">';
    productHTML += '<div class="inner">';
    productHTML += '<p><a href="#" class="icon"><i class="icon-eye"></i></a></p>';
    productHTML += '</div>';
    productHTML += '</div>';
    
    productHTML += '<div class="desc">';
    if (categoryWarning) {
      productHTML += '<div style="margin-bottom: 8px; padding: 6px 10px; background: #fff3cd; border: 1px solid #ffc107; border-radius: 4px; font-size: 11px; color: #856404; font-weight: 600;">';
      productHTML += '⚠️ ' + escapeHtml(categoryWarning);
      productHTML += '</div>';
    }
    if (category) {
      productHTML += '<span class="product-category">' + escapeHtml(category) + '</span>';
    }
    productHTML += '<h3><a href="#">' + escapeHtml(title) + '</a></h3>';
    productHTML += '</div>';
    productHTML += '</div>'; // .product kapanış
    productHTML += '</div>'; // .product-item kapanış
    
    return productHTML;
  }
  
  // filtrelenmiş ürünleri HTML'e çevir - grid sistemi
  filteredProducts.forEach(function(product, index) {
    html += createProductHTML(product, index);
  });
  
  // Gösterilen ürün sayısını hesapla
  var startIndex = (currentPage - 1) * productsPerPage;
  var endIndex = Math.min(startIndex + productsPerPage, totalProducts);
  var showingCount = endIndex - startIndex;
  
  // Sağdaki ürün sayısını güncelle (desktop ve mobil)
  var showingText = (currentLang === 'tr') ? showingCount + ' ürün' : showingCount + ' product' + (showingCount !== 1 ? 's' : '');
  $('#showing-product-count').text(showingText);
  $('#mobile-filter-count').text(totalProducts + ' ürün');
  
  // Mobil butonunun sağında ürün sayısını göster
  setTimeout(function() {
    var $mobileBtn = $('#mobile-filter-btn');
    if ($mobileBtn.length) {
      var $existingCount = $('#mobile-filter-count-badge');
      if ($existingCount.length) {
        $existingCount.text(totalProducts + ' ürün');
      }
    }
  }, 100);
  
  // Sayfalama ekle - her zaman göster (ürün 12'den az olsa bile "1" göster)
  if (totalPages >= 1) {
    html += '<div class="pagination-container">';
    
    // En başa git butonu («) - her zaman göster (disabled olarak tek sayfa varsa veya ilk sayfadaysak)
    if (totalPages > 1 && currentPage > 1) {
      var firstUrl = window.location.pathname + (window.location.search ? window.location.search.replace(/[?&]page=\d+/, '') : '');
      if (firstUrl.indexOf('?') === -1) {
        firstUrl += '?page=1';
      } else {
        firstUrl += '&page=1';
      }
      html += '<a href="' + firstUrl + '" class="pagination-btn pagination-btn-first" title="İlk sayfa">«</a>';
    } else {
      html += '<span class="pagination-btn pagination-btn-first disabled" title="İlk sayfa">«</span>';
    }
    
    // Önceki sayfa butonu (<) - her zaman göster (disabled olarak tek sayfa varsa)
    if (totalPages > 1 && currentPage > 1) {
      var prevPage = currentPage - 1;
      var prevUrl = window.location.pathname + (window.location.search ? window.location.search.replace(/[?&]page=\d+/, '') : '');
      if (prevUrl.indexOf('?') === -1) {
        prevUrl += '?page=' + prevPage;
      } else {
        prevUrl += '&page=' + prevPage;
      }
      html += '<a href="' + prevUrl + '" class="pagination-btn pagination-btn-prev" title="Önceki sayfa">‹</a>';
    } else {
      html += '<span class="pagination-btn pagination-btn-prev disabled" title="Önceki sayfa">‹</span>';
    }
    
    // Sayfa numaraları
    if (totalPages > 1) {
      // Birden fazla sayfa varsa normal pagination
      var maxVisiblePages = 5;
      var startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
      var endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
      
      if (startPage > 1) {
        var firstPageUrl = window.location.pathname + (window.location.search ? window.location.search.replace(/[?&]page=\d+/, '') : '');
        if (firstPageUrl.indexOf('?') === -1) {
          firstPageUrl += '?page=1';
        } else {
          firstPageUrl += '&page=1';
        }
        html += '<a href="' + firstPageUrl + '" class="pagination-btn' + (currentPage === 1 ? ' active' : '') + '">1</a>';
        if (startPage > 2) {
          html += '<span class="pagination-btn disabled">...</span>';
        }
      }
      
      for (var i = startPage; i <= endPage; i++) {
        var pageUrl = window.location.pathname + (window.location.search ? window.location.search.replace(/[?&]page=\d+/, '') : '');
        if (pageUrl.indexOf('?') === -1) {
          pageUrl += '?page=' + i;
        } else {
          pageUrl += '&page=' + i;
        }
        var activeClass = (i === currentPage) ? ' active' : '';
        html += '<a href="' + pageUrl + '" class="pagination-btn' + activeClass + '">' + i + '</a>';
      }
      
      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          html += '<span class="pagination-btn disabled">...</span>';
        }
        var lastPageUrl = window.location.pathname + (window.location.search ? window.location.search.replace(/[?&]page=\d+/, '') : '');
        if (lastPageUrl.indexOf('?') === -1) {
          lastPageUrl += '?page=' + totalPages;
        } else {
          lastPageUrl += '&page=' + totalPages;
        }
        html += '<a href="' + lastPageUrl + '" class="pagination-btn' + (currentPage === totalPages ? ' active' : '') + '">' + totalPages + '</a>';
      }
    } else {
      // Tek sayfa varsa sadece "1" göster
      html += '<span class="pagination-btn active">1</span>';
    }
    
    // Sonraki sayfa butonu (>) - her zaman göster (disabled olarak tek sayfa varsa)
    if (totalPages > 1 && currentPage < totalPages) {
      var nextPage = currentPage + 1;
      var nextUrl = window.location.pathname + (window.location.search ? window.location.search.replace(/[?&]page=\d+/, '') : '');
      if (nextUrl.indexOf('?') === -1) {
        nextUrl += '?page=' + nextPage;
      } else {
        nextUrl += '&page=' + nextPage;
      }
      html += '<a href="' + nextUrl + '" class="pagination-btn pagination-btn-next" title="Sonraki sayfa">›</a>';
    } else {
      html += '<span class="pagination-btn pagination-btn-next disabled" title="Sonraki sayfa">›</span>';
    }
    
    // En sona git butonu (») - her zaman göster (disabled olarak tek sayfa varsa veya son sayfadaysak)
    if (totalPages > 1 && currentPage < totalPages) {
      var lastUrl = window.location.pathname + (window.location.search ? window.location.search.replace(/[?&]page=\d+/, '') : '');
      if (lastUrl.indexOf('?') === -1) {
        lastUrl += '?page=' + totalPages;
      } else {
        lastUrl += '&page=' + totalPages;
      }
      html += '<a href="' + lastUrl + '" class="pagination-btn pagination-btn-last" title="Son sayfa">»</a>';
    } else {
      html += '<span class="pagination-btn pagination-btn-last disabled" title="Son sayfa">»</span>';
    }
    
    html += '</div>';
  }
  
  // Ürün sayısını göster
  $('#showing-product-count').text(showingText);
  
  // HTML'i container'a ekle
  $productsContainer.html(html);
  
  // Aktif filtreleri güncelle
  setTimeout(function() {
    updateActiveFilters();
  }, 300);
  
  // Sayfa değiştiğinde üst kısma scroll yap
  if (pageParam) {
    setTimeout(function() {
      // Filtreler kaldırıldı, category-search-box veya products-container'a scroll yap
      var $scrollTarget = $('.category-search-box');
      if (!$scrollTarget.length) {
        $scrollTarget = $('#products-container');
      }
      if ($scrollTarget.length && $scrollTarget.offset()) {
        $('html, body').animate({
          scrollTop: $scrollTarget.offset().top - 100
        }, 300);
      } else {
        // Hiçbir element bulunamazsa sayfanın en üstüne scroll yap
        $('html, body').animate({
          scrollTop: 0
        }, 300);
      }
    }, 100);
  }
  
  // Filtre temizleme butonuna event listener ekle
  // Kategori filtresini temizle butonu
  $productsContainer.find('.btn-clear-category-filter').on('click', function(e) {
    e.preventDefault();
    var currentUrl = window.location.pathname;
    var searchParams = new URLSearchParams(window.location.search);
    searchParams.delete('category');
    
    var newUrl = currentUrl;
    if (searchParams.toString()) {
      newUrl += '?' + searchParams.toString();
    }
    window.location.href = newUrl;
  });
  
  // Arama filtresini temizle butonu
  $productsContainer.find('.btn-clear-search-filter').on('click', function(e) {
    e.preventDefault();
    // Eğer kategori filtresi butonu değilse (sadece arama butonu)
    if (!$(this).hasClass('btn-clear-category-filter')) {
      var $searchInput = $('.category-search-input');
      if ($searchInput.length) {
        $searchInput.val('').focus();
      }
      applyCategorySearch('', mainCategoryFilter, { renderFilters: false });
    }
  });
  
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

// ============================================
// Ürün arama fonksiyonu
// Arama yapıldığında bulunan ürünün alt kategori sayfasına yönlendirir
// ============================================
function searchProduct(searchQuery) {
  if (!searchQuery || !searchQuery.trim()) {
    return null;
  }
  
  if (typeof productsData === 'undefined' || !productsData || productsData.length === 0) {
    return null;
  }
  
  var query = searchQuery.toLowerCase().trim();
  var currentLang = (typeof i18n !== 'undefined' && i18n.currentLang) ? i18n.currentLang : 'tr';
  
  // Tüm eşleşen ürünleri bul (öncelik: başlık > SKU > açıklama)
  var foundProducts = [];
  for (var i = 0; i < productsData.length; i++) {
    var product = productsData[i];
    
    // Başlık kontrolü (öncelik 1) - kelime sınırları ile
    var title = (typeof product.title === 'object') 
      ? (product.title[currentLang] || product.title.tr || product.title.en || '')
      : (product.title || '');
    var titleLower = title.toLowerCase();
    
    // SKU kontrolü (öncelik 2) - tam eşleşme
    var sku = (product.sku || '').toLowerCase();
    
    // Başlıkta arama - en basit yöntem: başlığın tamamında ara
    // "deterjan" kelimesi başlıkta herhangi bir yerde geçiyorsa eşleşme var demektir
    var matchesInTitle = titleLower.indexOf(query) !== -1;
    
    // SKU'da tam eşleşme kontrolü
    var matchesInSku = sku === query || sku.indexOf(query) !== -1;
    
    // SADECE başlık ve SKU'da arama yap (açıklama, kategori vs. hariç)
    var matchesInTitleOrSku = matchesInTitle || matchesInSku;
    
    // Eğer başlık veya SKU'da eşleşme varsa, direkt ekle
    if (matchesInTitleOrSku) {
      foundProducts.push(product);
    }
    
    // Açıklamada arama yapma - sadece ürün adı ve SKU'ya göre arama
  }
  
  if (foundProducts.length === 0) {
    return null;
  }
  
  // Eğer tek ürün bulunduysa, modal açılacak şekilde yönlendir
  if (foundProducts.length === 1) {
    var foundProduct = foundProducts[0];
    
    // Ana kategori bilgisini al
    var mainCategory = (typeof foundProduct.mainCategory === 'object')
      ? (foundProduct.mainCategory[currentLang] || foundProduct.mainCategory.tr || foundProduct.mainCategory.en)
      : foundProduct.mainCategory;
    
    if (!mainCategory) {
      return null;
    }
    
    // Ana kategori slug'ını bul
    var categorySlug = null;
    if (typeof mainCategories !== 'undefined' && mainCategories && mainCategories.length > 0) {
      for (var j = 0; j < mainCategories.length; j++) {
        var mc = mainCategories[j];
        var mcTitle = (typeof mc.title === 'object')
          ? (mc.title[currentLang] || mc.title.tr || mc.title.en)
          : mc.title;
        if (mcTitle === mainCategory && mc.slug) {
          categorySlug = mc.slug;
          break;
        }
      }
    }
    
    if (!categorySlug) {
      function createSlug(text) {
        if (!text) return '';
        return text.toLowerCase()
          .replace(/ş/g, 's').replace(/ğ/g, 'g').replace(/ü/g, 'u')
          .replace(/ö/g, 'o').replace(/ç/g, 'c').replace(/ı/g, 'i')
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, '');
      }
      categorySlug = createSlug(mainCategory);
    }
    
    if (!categorySlug) {
      return null;
    }
    
    // Ürün SKU'sunu veya index'ini URL'ye ekle
    var productIdentifier = foundProduct.sku || ('product-' + productsData.indexOf(foundProduct));
    var targetUrl = categorySlug + '.html?product=' + encodeURIComponent(productIdentifier);
    
    return {
      products: foundProducts,
      product: foundProduct,
      categorySlug: categorySlug,
      url: targetUrl,
      singleProduct: true
    };
  }
  
  // Birden fazla ürün bulunduysa, sadece listele (modal açma)
  // En yaygın ana kategoriyi bul veya product.html'e yönlendir
  var mainCategoryCounts = {};
  foundProducts.forEach(function(product) {
    var mainCat = (typeof product.mainCategory === 'object')
      ? (product.mainCategory[currentLang] || product.mainCategory.tr || product.mainCategory.en)
      : product.mainCategory;
    if (mainCat) {
      mainCategoryCounts[mainCat] = (mainCategoryCounts[mainCat] || 0) + 1;
    }
  });
  
  // En çok ürün içeren kategoriyi bul
  var mostCommonCategory = null;
  var maxCount = 0;
  for (var cat in mainCategoryCounts) {
    if (mainCategoryCounts[cat] > maxCount) {
      maxCount = mainCategoryCounts[cat];
      mostCommonCategory = cat;
    }
  }
  
  var categorySlug = 'product'; // Default: product.html
  if (mostCommonCategory && typeof mainCategories !== 'undefined' && mainCategories) {
    for (var k = 0; k < mainCategories.length; k++) {
      var mc = mainCategories[k];
      var mcTitle = (typeof mc.title === 'object')
        ? (mc.title[currentLang] || mc.title.tr || mc.title.en)
        : mc.title;
      if (mcTitle === mostCommonCategory && mc.slug) {
        categorySlug = mc.slug;
        break;
      }
    }
  }
  
  // Search parametresi ile yönlendir (modal açılmayacak)
  var targetUrl = categorySlug + '.html?search=' + encodeURIComponent(searchQuery);
  
  return {
    products: foundProducts,
    categorySlug: categorySlug,
    url: targetUrl,
    singleProduct: false,
    searchQuery: searchQuery
  };
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

// ============================================
// Slider HTML Generate Fonksiyonu
// sliderData ve mainCategories'dan slide'ları oluşturur
// Backend'den carousel verisini çeker
// Promise döndürür - slide'lar hazır olduğunda resolve eder
// ============================================
function generateSliderHTML() {
  var $carousel = $('.hero-carousel');
  if (!$carousel.length) {
    return Promise.resolve(); // Carousel yoksa hemen resolve et
  }
  
  // Carousel'i temizle
  $carousel.empty();
  
  // Promise döndür
  return new Promise(function(resolve, reject) {
    // Önce backend'den carousel verisini çek
    $.ajax({
      url: '/api/products',
      method: 'GET',
      success: function(response) {
      console.log('📥 Backend response:', {
        hasCarousel: !!response.carousel,
        carousel: response.carousel,
        carouselType: typeof response.carousel,
        isArray: Array.isArray(response.carousel),
        mainCategoriesCount: response.mainCategories ? response.mainCategories.length : 0
      });
      
      if (response && response.carousel) {
        // Backend'den gelen carousel verisini kullan
        var carouselData = response.carousel;
        
        // Eğer carousel bir array ise (eski format), obje formatına çevir
        if (Array.isArray(carouselData)) {
          console.warn('⚠️ Carousel array formatında geldi, obje formatına çevriliyor...');
          console.warn('⚠️ Response:', response);
          carouselData = {
            slides: carouselData,
            excludedAutoCategories: response.excludedAutoCategories || [],
            slideOrder: []
          };
        }
        
        // Eğer carousel bir obje ise ama slides property'si yoksa, slides array olarak kabul et
        if (carouselData && typeof carouselData === 'object' && !Array.isArray(carouselData) && !carouselData.slides) {
          console.warn('⚠️ Carousel objesi slides property\'si olmadan geldi, düzeltiliyor...');
          carouselData = {
            slides: [],
            excludedAutoCategories: carouselData.excludedAutoCategories || response.excludedAutoCategories || [],
            slideOrder: carouselData.slideOrder || []
          };
        }
        
        var slides = carouselData.slides || [];
        var slideOrder = carouselData.slideOrder || [];
        var excludedAutoCategories = carouselData.excludedAutoCategories || [];
        
        console.log('📊 Backend carousel data:', {
          slidesCount: slides.length,
          slideOrderCount: slideOrder.length,
          excludedCount: excludedAutoCategories.length,
          slideOrder: slideOrder,
          carouselData: carouselData
        });
        
        // mainCategories'ı backend'den al veya global'dan
        var mainCats = response.mainCategories || (typeof mainCategories !== 'undefined' ? mainCategories : []);
        
        // Aktif dil
        var currentLang = typeof i18n !== 'undefined' && i18n.currentLang ? i18n.currentLang : 'tr';
        
        // Slide'ları generate et
        generateSlidesFromData($carousel, slides, slideOrder, excludedAutoCategories, mainCats, currentLang);
        
        // Slide'lar oluşturuldu, resolve et
        resolve();
      } else {
        // Backend'den veri yoksa, placeholder göster
        console.warn('⚠️ Backend\'den carousel verisi gelmedi!');
        $carousel.html('<div class="item" style="background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%); min-height: 500px; display: flex; align-items: center; justify-content: center; color: #fff;"><div style="text-align: center;"><h2 style="font-size: 32px; margin-bottom: 16px;">Hoş Geldiniz</h2><p style="font-size: 18px;">Slider yükleniyor...</p></div></div>');
        resolve(); // Hata olsa bile resolve et
      }
    },
    error: function(xhr, status, error) {
      // Backend hatası varsa, placeholder göster
      console.error('❌ Backend API\'den carousel verisi yüklenemedi:', error);
      $carousel.html('<div class="item" style="background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%); min-height: 500px; display: flex; align-items: center; justify-content: center; color: #fff;"><div style="text-align: center;"><h2 style="font-size: 32px; margin-bottom: 16px;">Hoş Geldiniz</h2><p style="font-size: 18px;">Slider yüklenemedi.</p></div></div>');
      resolve(); // Hata olsa bile resolve et
    }
  });
  });
}

// Slide'ları generate eden helper fonksiyon
function generateSlidesFromData($carousel, slides, slideOrder, excludedAutoCategories, mainCats, currentLang) {
  console.log('🔍 generateSlidesFromData çağrıldı:', {
    slidesCount: slides.length,
    slideOrderCount: slideOrder.length,
    excludedCount: excludedAutoCategories.length,
    mainCatsCount: mainCats.length,
    slideOrder: slideOrder
  });
  
  // Combined slides array oluştur (slideOrder'a göre)
  var combinedSlides = [];
  
  // Eğer slideOrder boşsa ama mainCats varsa, otomatik kategorileri ekle
  if ((!slideOrder || slideOrder.length === 0) && mainCats && mainCats.length > 0) {
    console.log('⚠️ slideOrder boş, otomatik kategorileri ekleniyor...');
    slideOrder = [];
    // Önce tüm otomatik kategorileri ekle (excluded olmayanlar)
    mainCats.forEach(function(cat) {
      var slug = cat.slug || '';
      if (slug && excludedAutoCategories.indexOf(slug) === -1) {
        slideOrder.push({type: 'auto', slug: slug});
      }
    });
    // Sonra manuel slide'ları ekle
    slides.forEach(function(slide, index) {
      if (slide && slide.active !== false) {
        slideOrder.push({type: 'manual', index: index});
      }
    });
    console.log('✅ Otomatik slideOrder oluşturuldu:', slideOrder.length, 'item');
  }
  
  if (slideOrder && slideOrder.length > 0) {
    // slideOrder'a göre sırala - slideOrder'daki sıraya göre slide'ları ekle
    console.log('📋 slideOrder kullanılıyor, toplam', slideOrder.length, 'item');
    console.log('📋 slideOrder detayları:', JSON.stringify(slideOrder, null, 2));
    slideOrder.forEach(function(orderItem, orderIndex) {
      if (!orderItem || !orderItem.type) {
        console.warn('⚠️ Geçersiz orderItem:', orderItem, 'index:', orderIndex);
        return;
      }
      
      if (orderItem.type === 'manual') {
        // Manuel slide
        var slideIndex = orderItem.index;
        if (slideIndex >= 0 && slideIndex < slides.length) {
          var slide = slides[slideIndex];
          if (slide && slide.active !== false) {
            combinedSlides.push({
              type: 'manual',
              data: slide
            });
            console.log('✅ Manuel slide eklendi: index', slideIndex, 'sıra', orderIndex);
          } else {
            console.warn('⚠️ Manuel slide pasif veya geçersiz:', slideIndex);
          }
        } else {
          console.warn('⚠️ Geçersiz manuel slide index:', slideIndex, 'slides.length:', slides.length);
        }
      } else if (orderItem.type === 'auto') {
        // Otomatik kategori slide'ı
        var slug = orderItem.slug;
        if (slug && excludedAutoCategories.indexOf(slug) === -1) {
          // Bu kategori excluded değilse ekle
          var category = mainCats.find(function(cat) {
            return cat.slug === slug;
          });
          
          if (category) {
            var title = category.title ? (category.title[currentLang] || category.title.tr || category.title.en || category.title.ka || '') : '';
            var description = category.description ? (category.description[currentLang] || category.description.tr || category.description.en || category.description.ka || '') : '';
            var image = category.headerImage || '';
            
            combinedSlides.push({
              type: 'auto',
              data: {
                title: { tr: title, en: title, ka: title },
                description: { tr: description, en: description, ka: description },
                image: image,
                link: '/' + slug + '.html',
                isCategory: true,
                active: true
              }
            });
            console.log('✅ Otomatik kategori slide eklendi:', slug, 'sıra', orderIndex);
          } else {
            console.warn('⚠️ Kategori bulunamadı:', slug, 'mevcut kategoriler:', mainCats.map(function(c) { return c.slug; }));
          }
        } else {
          if (excludedAutoCategories.indexOf(slug) !== -1) {
            console.log('⏭️ Kategori excluded:', slug);
          } else if (!slug) {
            console.warn('⚠️ Geçersiz slug:', orderItem);
          }
        }
      } else {
        console.warn('⚠️ Bilinmeyen orderItem type:', orderItem.type, orderItem);
      }
    });
    
    console.log('📊 slideOrder işlendi, toplam', combinedSlides.length, 'slide oluşturuldu');
  } else {
    // slideOrder yoksa, sadece aktif manuel slide'ları ekle
    slides.forEach(function(slide) {
      if (slide && slide.active !== false) {
        combinedSlides.push({
          type: 'manual',
          data: slide
        });
      }
    });
  }
  
  console.log('📊 Toplam combined slides:', combinedSlides.length);
  
  // Eğer hiç slide yoksa, bir placeholder göster
  if (combinedSlides.length === 0) {
    console.warn('⚠️ Hiç slide bulunamadı!');
    $carousel.html('<div class="item" style="background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%); min-height: 500px; display: flex; align-items: center; justify-content: center; color: #fff;"><div style="text-align: center;"><h2 style="font-size: 32px; margin-bottom: 16px;">Hoş Geldiniz</h2><p style="font-size: 18px;">Henüz slide eklenmemiş.</p></div></div>');
    return;
  }
  
  // Slide'ları HTML'e çevir
  combinedSlides.forEach(function(slideItem) {
    var slide = slideItem.data;
    var title = slide.title ? (slide.title[currentLang] || slide.title.tr || slide.title.en || slide.title.ka || '') : '';
    var description = slide.description ? (slide.description[currentLang] || slide.description.tr || slide.description.en || slide.description.ka || '') : '';
    var image = slide.image || '';
    var link = slide.link || '';
    
    // HTML oluştur
    var itemStyle = 'position: relative; min-height: 500px;';
    // Resim tıklanabilir değil, sadece buton tıklanabilir
    var slideHTML = '<div class="item" style="' + itemStyle + '">';
    
    // Background image veya gradient
    var bgStyle = '';
    if (image) {
      bgStyle = 'background-image: url(' + escapeHtml(image) + '); background-size: cover; background-position: center;';
    } else {
      bgStyle = 'background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);';
    }
    
    slideHTML += '<div class="fh5co-overlay"></div>';
    slideHTML += '<div class="container">';
    slideHTML += '<div class="row">';
    slideHTML += '<div class="col-md-8 col-md-offset-2 text-center js-fullheight slider-text">';
    slideHTML += '<div class="slider-text-inner">';
    if (title) {
      slideHTML += '<h1 style="color: #fff; font-size: 48px; margin-bottom: 20px; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">' + escapeHtml(title) + '</h1>';
    }
    if (description) {
      slideHTML += '<h2 style="color: #fff; font-size: 24px; font-weight: 300; text-shadow: 1px 1px 2px rgba(0,0,0,0.3);">' + escapeHtml(description) + '</h2>';
    }
    if (link) {
      slideHTML += '<p><a href="' + escapeHtml(link) + '" class="btn btn-primary btn-lg" style="margin-top: 30px;">Detaylar</a></p>';
    }
    slideHTML += '</div>';
    slideHTML += '</div>';
    slideHTML += '</div>';
    slideHTML += '</div>';
    slideHTML += '<div style="' + bgStyle + ' position: absolute; top: 0; left: 0; right: 0; bottom: 0; z-index: -1;"></div>';
    
    slideHTML += '</div>';
    
    $carousel.append(slideHTML);
  });
}

// Global scope'a ekle
window.generateSliderHTML = generateSliderHTML;
