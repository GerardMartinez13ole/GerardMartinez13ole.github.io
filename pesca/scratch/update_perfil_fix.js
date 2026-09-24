const fs = require('fs');
let content = fs.readFileSync('db.js', 'utf8');

const replacement = `
    const grid = document.getElementById('perfil-peixdex-grid');
    const caught = {};
    const especiesOficiales = [
      'Agulla', 'Anguila', 'Atun blanc', 'Atun roig', 'Bacoreta', 'Barb', 'Barracuda', 
      'Blackbass', 'Brema', 'Calamar', 'Caprí', 'Carpa', 'Catxo', 'Cavalla', 'Esturió', 
      'Jurel', 'Llampuga', 'Llisal', 'Llobarro', 'Lucio', 'Lucioperca', 'Mero', 
      'Muixarra / Dorada', 'Palometa', 'Peix gat de canal', 'Peix gat negre', 'Saboga', 
      'Sarg', 'Sepia', 'Silur', 'Tallahams', 'Trucha'
    ];

    if (snapCapturas.empty) {
      feedCapturas.innerHTML = '<p style="text-align:center; color:var(--text-muted);">Sense captures encara.</p>';
    } else {
      snapCapturas.forEach(doc => {
        const data = doc.data();
        data.id = doc.id;
        
        const esp = data.especie;
        if (esp) {
          const espMatch = especiesOficiales.find(e => e.toLowerCase() === esp.toLowerCase());
          const finalEsp = espMatch || esp; 
          
          if (!caught[finalEsp]) {
            caught[finalEsp] = { count: 0, maxPeso: 0, maxLong: 0 };
          }
          caught[finalEsp].count++;
          if (data.peso && parseFloat(data.peso) > caught[finalEsp].maxPeso) caught[finalEsp].maxPeso = parseFloat(data.peso);
          if (data.longitud && parseFloat(data.longitud) > caught[finalEsp].maxLong) caught[finalEsp].maxLong = parseFloat(data.longitud);
        }

        feedCapturas.appendChild(window.createCapturaCard(data));
        if (window.cargarComentarios) window.cargarComentarios(data.id);
      });
    }

    if (window.renderAlbum) {
      window.renderAlbum(caught, grid, true); // true = isPerfil
    }

    // 2. Cargar Canyadex (Equipos)
`;

const oldContent = content;
content = content.replace(/if \(snapCapturas\.empty\) \{[\s\S]*?\/\/ 2\. Cargar Canyadex \(Equipos\)/, replacement.trim() + '\n\n    // 2. Cargar Canyadex (Equipos)');

if (content === oldContent) {
  console.log("FAILED TO REPLACE");
} else {
  fs.writeFileSync('db.js', content, 'utf8');
  console.log('Success db.js perfil update');
}

