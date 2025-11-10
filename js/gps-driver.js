// GPS Tracker - Driver Interface
// Handles real-time GPS tracking and route visualization

// State variables
let map = null;
let routeLine = null;
let pathCoords = [];
let watchId = null;
let isTracking = false;
let firstLocation = false;

// DOM elements
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const statusDot = document.getElementById('statusDot');
const statusText = document.getElementById('statusText');
const deviceIdInput = document.getElementById('deviceId');

// Initialize map
function initMap() {
  // Create map centered on Istanbul
  map = L.map('map').setView([41.015137, 28.97953], 13);

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
  }).addTo(map);

  // Create empty polyline (red route)
  routeLine = L.polyline([], {
    color: 'red',
    weight: 3,
    opacity: 0.7
  }).addTo(map);

  console.log('✓ Map initialized');
}

// Update UI status
function updateStatus(active) {
  isTracking = active;
  
  if (active) {
    statusDot.classList.add('active');
    statusText.textContent = 'Aktif';
    startBtn.disabled = true;
    stopBtn.disabled = false;
  } else {
    statusDot.classList.remove('active');
    statusText.textContent = 'Pasif';
    startBtn.disabled = false;
    stopBtn.disabled = true;
  }
}

// Send location to backend
async function sendLocation(lat, lng) {
  const deviceId = deviceIdInput.value.trim();
  
  if (!deviceId) {
    console.error('No device ID specified');
    return;
  }

  try {
    const response = await fetch('/api/gps/locations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        deviceId: deviceId,
        lat: lat,
        lng: lng,
        timestamp: Date.now()
      })
    });

    if (response.ok) {
      const data = await response.json();
      console.log('✓ Location saved:', data);
    } else {
      console.error('Failed to save location:', response.status);
    }
  } catch (error) {
    // Silently fail - don't interrupt tracking
    console.error('Network error:', error.message);
  }
}

// GPS success callback
function onLocationSuccess(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const accuracy = position.coords.accuracy;

  console.log(`GPS: ${lat.toFixed(6)}, ${lng.toFixed(6)} (±${accuracy.toFixed(0)}m)`);

  // Add to path
  pathCoords.push([lat, lng]);

  // Update polyline on map
  routeLine.setLatLngs(pathCoords);

  // On first location, center map
  if (!firstLocation) {
    map.setView([lat, lng], 15);
    firstLocation = true;
    console.log('✓ Map centered on current location');
  }

  // Send to backend
  sendLocation(lat, lng);
}

// GPS error callback
function onLocationError(error) {
  let message = 'GPS Hatası: ';
  
  switch(error.code) {
    case error.PERMISSION_DENIED:
      message += 'Konum izni reddedildi. Lütfen tarayıcı ayarlarından konum erişimini etkinleştirin.';
      break;
    case error.POSITION_UNAVAILABLE:
      message += 'Konum bilgisi alınamadı. GPS\'in açık olduğundan emin olun.';
      break;
    case error.TIMEOUT:
      message += 'Konum isteği zaman aşımına uğradı. Lütfen tekrar deneyin.';
      break;
    default:
      message += 'Bilinmeyen bir hata oluştu.';
  }

  console.error(message);
  alert(message);

  // Reset to inactive state
  if (watchId) {
    navigator.geolocation.clearWatch(watchId);
    watchId = null;
  }
  updateStatus(false);
}

// Start tracking
function startTracking() {
  // Check if geolocation is supported
  if (!navigator.geolocation) {
    alert('Tarayıcınız konum servisini desteklemiyor.');
    return;
  }

  // Check device ID
  if (!deviceIdInput.value.trim()) {
    alert('Lütfen bir cihaz ID girin');
    deviceIdInput.focus();
    return;
  }

  console.log('Starting GPS tracking...');

  // Start watching position
  watchId = navigator.geolocation.watchPosition(
    onLocationSuccess,
    onLocationError,
    {
      enableHighAccuracy: true,  // Use GPS if available
      timeout: 5000,              // 5 second timeout
      maximumAge: 0               // Don't use cached positions
    }
  );

  updateStatus(true);
  console.log('✓ GPS tracking started');
}

// Stop tracking
function stopTracking() {
  if (watchId) {
    navigator.geolocation.clearWatch(watchId);
    watchId = null;
    console.log('✓ GPS tracking stopped');
  }

  updateStatus(false);
  firstLocation = false;
}

// Event listeners
startBtn.addEventListener('click', startTracking);
stopBtn.addEventListener('click', stopTracking);

// Initialize map on page load
window.addEventListener('load', () => {
  initMap();
  console.log('Driver interface ready');
});
