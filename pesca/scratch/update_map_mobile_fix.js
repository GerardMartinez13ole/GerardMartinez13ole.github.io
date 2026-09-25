const fs = require('fs');
let content = fs.readFileSync('map.js', 'utf8');

const oldStr = `  // Manejar click largo / doble click para añadir marcador
  map.on('dblclick', function(e) {
    if (tempMarker) map.removeLayer(tempMarker);
    
    tempMarker = L.marker(e.latlng).addTo(map);
    
    // Abrir formulario
    document.getElementById('marker-lat').value = e.latlng.lat;
    document.getElementById('marker-lng').value = e.latlng.lng;
    document.getElementById('form-marker-container').style.display = 'block';
    
    // Scroll al formulario
    document.getElementById('form-marker-container').scrollIntoView({behavior: 'smooth'});
  });`;

const newStr = `  const handleMapClick = function(e) {
    if (tempMarker) map.removeLayer(tempMarker);
    
    tempMarker = L.marker(e.latlng).addTo(map);
    
    // Abrir formulario
    document.getElementById('marker-lat').value = e.latlng.lat;
    document.getElementById('marker-lng').value = e.latlng.lng;
    document.getElementById('form-marker-container').style.display = 'block';
    
    // Scroll al formulario
    document.getElementById('form-marker-container').scrollIntoView({behavior: 'smooth'});
  };

  // Manejar doble click para PC
  map.on('dblclick', handleMapClick);
  
  // Manejar pulsación larga (contextmenu) para móvil
  map.on('contextmenu', handleMapClick);`;

const startIdx = content.indexOf('// Manejar click largo / doble click para añadir marcador');
const endIdx = content.indexOf('});', startIdx) + 3;

if (startIdx !== -1) {
  content = content.substring(0, startIdx) + newStr + content.substring(endIdx);
  fs.writeFileSync('map.js', content, 'utf8');
  console.log('Success exact replace');
} else {
  console.log('Not found');
}
