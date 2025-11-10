// GPS Tracker - Admin Panel
// Handles historical route viewing and visualization

// State variables
let map = null;
let routeLine = null;

// DOM elements
const deviceIdInput = document.getElementById('deviceId');
const dateInput = document.getElementById('dateInput');
const showRouteBtn = document.getElementById('showRouteBtn');
const infoPanel = document.getElementById('infoPanel');
const infoDevice = document.getElementById('infoDevice');
const infoDate = document.getElementById('infoDate');
const infoPoints = document.getElementById('infoPoints');
const loading = document.getElementById('loading');

// Initialize map
function initMap() {
  // Create map with wider initial view
  map = L.map('map').setView([41.015137, 28.97953], 6);

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
  }).addTo(map);

  console.log('✓ Map initialized');
}

// Set today's date as default (optional - user can leave empty for all history)
function setDefaultDate() {
  // Don't set default date - let user choose or leave empty for all history
  // If you want to show today by default, uncomment below:
  // const today = new Date();
  // const year = today.getFullYear();
  // const month = String(today.getMonth() + 1).padStart(2, '0');
  // const day = String(today.getDate()).padStart(2, '0');
  // dateInput.value = `${year}-${month}-${day}`;
}

// Show loading spinner
function showLoading(show) {
  if (show) {
    loading.classList.add('visible');
  } else {
    loading.classList.remove('visible');
  }
}

// Display route on map
function displayRoute(locations, deviceId, date) {
  // Clear existing route
  if (routeLine) {
    map.removeLayer(routeLine);
    routeLine = null;
  }

  // Check if we have data
  if (!locations || locations.length === 0) {
    const dateText = date ? `seçilen tarih (${date})` : 'bu cihaz için';
    alert(`Bu cihaz için takip verisi bulunamadı.\n\nCihazın ${dateText} takip yaptığından emin olun.`);
    infoPanel.classList.remove('visible');
    return;
  }

  console.log(`Displaying route with ${locations.length} points`);

  // Extract coordinates
  const coords = locations.map(loc => [loc.lat, loc.lng]);

  // Create polyline
  routeLine = L.polyline(coords, {
    color: 'red',
    weight: 3,
    opacity: 0.7
  }).addTo(map);

  // Add start and end markers
  const startIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  const endIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  // Add markers
  const startCoord = coords[0];
  const endCoord = coords[coords.length - 1];

  L.marker(startCoord, { icon: startIcon })
    .addTo(map)
    .bindPopup('<b>Start</b>');

  L.marker(endCoord, { icon: endIcon })
    .addTo(map)
    .bindPopup('<b>End</b>');

  // Fit map to route bounds
  const bounds = routeLine.getBounds();
  map.fitBounds(bounds, { padding: [50, 50] });

  // Update info panel
  infoDevice.textContent = deviceId;
  infoDate.textContent = date || 'Tüm geçmiş';
  infoPoints.textContent = locations.length;
  infoPanel.classList.add('visible');

  console.log('✓ Route displayed successfully');
}

// Fetch and display route
async function fetchAndDisplayRoute() {
  const deviceId = deviceIdInput.value.trim();
  const date = dateInput.value;

  // Validate device ID
  if (!deviceId) {
    alert('Lütfen bir cihaz ID girin');
    deviceIdInput.focus();
    return;
  }

  console.log(`Fetching route for device: ${deviceId}, date: ${date || 'tüm geçmiş'}`);

  // Build URL
  let url = `/api/gps/locations?deviceId=${encodeURIComponent(deviceId)}`;
  if (date) {
    url += `&date=${encodeURIComponent(date)}`;
  }

  showLoading(true);

  try {
    const response = await fetch(url);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to fetch route');
    }

    const locations = await response.json();
    displayRoute(locations, deviceId, date);

  } catch (error) {
    console.error('Error fetching route:', error);
    alert(`Hata: ${error.message}\n\nBağlantınızı kontrol edip tekrar deneyin.`);
  } finally {
    showLoading(false);
  }
}

// Event listeners
showRouteBtn.addEventListener('click', fetchAndDisplayRoute);

// Allow Enter key to submit
deviceIdInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    fetchAndDisplayRoute();
  }
});

dateInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    fetchAndDisplayRoute();
  }
});

// Initialize on page load
window.addEventListener('load', () => {
  initMap();
  setDefaultDate();
  console.log('Admin panel ready');
});
