// google maps yerine ücretsiz leaflet haritası kullanıyoruz
var mapInitialized = false; // Map'in sadece bir kez initialize edilmesi için flag

function init() {
    // Map zaten initialize edilmişse tekrar etme
    if (mapInitialized) {
        return;
    }
    
    // Map container'ı kontrol et
    var mapElement = document.getElementById('map');
    if (!mapElement) {
        console.warn('Map container bulunamadı!');
        return;
    }
    
    // Leaflet yüklenmemişse bekle
    if (typeof L === 'undefined') {
        console.warn('Leaflet yüklenmedi, tekrar denenecek...');
        setTimeout(init, 200);
        return;
    }
    
    // başlangıç koordinatları (Batumi, Gürcistan)
    var myLatlng = [41.6168, 41.6367];

    // haritayı oluştur
    var map = L.map('map').setView(myLatlng, 13);
    
    // Map başarıyla oluşturuldu, flag'i set et
    mapInitialized = true;

    // ücretsiz openstreetmap tile'larını ekle
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    }).addTo(map);

    // göstermek istediğin adresler
    var addresses = ['Batumi, Georgia'];

    // marker'ları ekle
    addresses.forEach(address => {
        // ücretsiz geocoding servisi kullan (nominatim)
        fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
            .then(response => response.json())
            .then(data => {
                if (data && data.length > 0) {
                    var lat = parseFloat(data[0].lat);
                    var lon = parseFloat(data[0].lon);
                    
                    // marker'ı ekle
                    var marker = L.marker([lat, lon], {
                        icon: L.icon({
                            iconUrl: 'images/loc.png', // özel ikonun
                            iconSize: [32, 32],        // boyutu ihtiyacına göre ayarla
                            iconAnchor: [16, 32]
                        })
                    }).addTo(map);
                    
                    // haritayı marker'ın konumuna göre merkezle (animasyonlu)
                    map.flyTo([lat, lon], 12, {
                        animate: true,
                        duration: 1.5
                    });
                }
            })
            .catch(err => console.error('geocoding hatası:', err));
    });
}

// sayfa yüklendiğinde init'i çağır - DOM hazır olduğunda
function tryInitMap() {
    // Map zaten initialize edilmişse çık
    if (mapInitialized) {
        return;
    }
    
    // Map container'ın var olduğundan ve Leaflet'in yüklendiğinden emin ol
    if (document.getElementById('map') && typeof L !== 'undefined') {
        init();
    } else {
        // Henüz hazır değilse biraz bekle ve tekrar dene
        setTimeout(tryInitMap, 200);
    }
}

// DOMContentLoaded event'inde dene
document.addEventListener('DOMContentLoaded', function() {
    tryInitMap();
});

// window.load event'inde de dene (leaflet script'inin yüklenmesi için)
window.addEventListener('load', function() {
    tryInitMap();
});
