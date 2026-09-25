const fs = require('fs');
let content = fs.readFileSync('map.js', 'utf8');

content = content.replace("  map.on('contextmenu', handleMapClick);\n  });\n\n  // Selector de tipo de mapa", "  map.on('contextmenu', handleMapClick);\n\n  // Selector de tipo de mapa");
content = content.replace("  map.on('contextmenu', handleMapClick);\r\n  });\r\n\r\n  // Selector de tipo de mapa", "  map.on('contextmenu', handleMapClick);\r\n\r\n  // Selector de tipo de mapa");

fs.writeFileSync('map.js', content, 'utf8');
console.log('Success removed extra syntax');
