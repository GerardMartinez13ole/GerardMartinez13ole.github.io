const fs = require('fs');
let content = fs.readFileSync('map.js', 'utf8');

const replacement = `  const handleMapClick = function(e) {
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

content = content.replace(/\/\/ Manejar click largo \/ doble click para añadir marcador\n\s*map\.on\('dblclick', function\(e\) \{[\s\S]*?document\.getElementById\('form-marker-container'\)\.scrollIntoView\(\{behavior: 'smooth'\}\);\n\s*\}\);/, replacement);

fs.writeFileSync('map.js', content, 'utf8');
console.log('Success map.js');
