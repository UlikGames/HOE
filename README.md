# E-Ticaret Sitesi - Admin Paneli ile Yönetim

Modern, responsive e-ticaret showcase sitesi. Admin paneli ile ürün ve kategori yönetimi.

## Hızlı Başlangıç

### 1. Kurulum

```bash
npm install
npm start
```

### 2. Admin Paneline Git

Tarayıcıda aç:
```
http://localhost:3000/admin.html
```

## Admin Panel Kullanımı

### Ürün Ekleme

1. Formu doldur (Türkçe/İngilizce)
2. **Ana Kategori** belirle (örn: "Temizlik Ürünleri")
3. "➕ Ürün Ekle" butonuna tıkla
4. İstediğin kadar ürün ekle
5. "💾 Sunucuya Kaydet & Kategoriler Oluştur" butonuna tıkla

### Otomatik Olan İşlemler

✅ Ürünler `js/data-products.js`'e kaydedilir  
✅ Ana kategoriler otomatik tespit edilir  
✅ Slug'lar otomatik oluşturulur (örn: "Temizlik Ürünleri" → `temizlik-urunleri`)  
✅ Kategori sayfaları otomatik oluşturulur (`temizlik-urunleri.html`)  
✅ Menü otomatik güncellenir  
✅ Ana products sayfasına kart eklenir  

### Ürün Düzenleme/Silme

- **Düzenle:** Liste'deki "✏️ Düzenle" butonu
- **Sil:** Liste'deki "🗑️ Sil" butonu

## Önemli Notlar

- Server çalışıyor olmalı (`npm start`)
- Node.js ve npm gerekli
- Port 3000 kullanılıyor (server.js'de değiştirilebilir)

## Güvenlik

**ŞİFREYİ DEĞİŞTİR!**

Varsayılan şifre: `admin`

### Şifreyi Değiştirmek (GitHub'a yüklenmeyecek):

1. **Local için (`.env` dosyası):**
   ```bash
   # Windows:
   copy .env.example .env
   
   # Mac/Linux:
   cp .env.example .env
   ```
   Sonra `.env` dosyasını aç ve şifreyi değiştir:
   ```
   ADMIN_PASSWORD=güçlü-şifren-buraya
   ```

2. **Netlify/Vercel için:**
   - Project Settings → Environment Variables
   - `ADMIN_PASSWORD` değişkenini ekle
   - Değeri şifren olarak ayarla
   - Deploy et

**Önemli:**
- ✅ `.env` dosyası `.gitignore`'da - GitHub'a yüklenmeyecek
- ✅ Frontend şifreyi backend'e gönderip doğrulatıyor (daha güvenli)
- ✅ `.env.example` GitHub'a yüklenebilir (şifre yok, sadece örnek)
- ✅ Netlify/Vercel gibi platformlarda environment variables olarak kolayca ayarlanabilir

## Sorun Giderme

**"Sunucuya bağlanılamadı" hatası:**
- Server çalışıyor mu? `npm start` yaptın mı?

**Kategori sayfaları oluşmuyor:**
- Backend console'da hata var mı kontrol et
- `temizlik-urunleri.html` template dosyası var mı?

**Ürünler kaydedilmiyor:**
- `js/data-products.js` dosyası yazılabilir mi?
- Browser console'da hata var mı? (F12)

## Site Yapısı

- `admin.html` - Admin paneli
- `index.html` - Ana sayfa
- `product.html` - Ürünler ana sayfası
- `temizlik-urunleri.html` - Kategori sayfası (template)
- `js/data-products.js` - Ürün verileri (otomatik güncellenir)
- `server.js` - Backend server

