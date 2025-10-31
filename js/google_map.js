// google maps yerine ücretsiz leaflet haritası kullanıyoruz
function init() {
    // başlangıç koordinatları (brooklyn)
    var myLatlng = [40.69847032728747, -73.9514422416687];

    // haritayı oluştur
    var map = L.map('map').setView(myLatlng, 7);

    // ücretsiz openstreetmap tile'larını ekle
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    }).addTo(map);

    // göstermek istediğin adresler
    var addresses = ['Brooklyn'];

    // marker'ları ekle
    addresses.forEach(address => {
        // ücretsiz geocoding servisi kullan (nominatim)
        fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
            .then(response => response.json())
            .then(data => {
                if (data && data.length > 0) {
                    var lat = parseFloat(data[0].lat);
                    var lon = parseFloat(data[0].lon);
                    L.marker([lat, lon], {
                        icon: L.icon({
                            iconUrl: 'images/loc.png', // özel ikonun
                            iconSize: [32, 32],        // boyutu ihtiyacına göre ayarla
                            iconAnchor: [16, 32]
                        })
                    }).addTo(map);
                }
            })
            .catch(err => console.error('geocoding hatası:', err));
    });
}

// sayfa yüklendiğinde init'i çağır
window.addEventListener('load', init);
