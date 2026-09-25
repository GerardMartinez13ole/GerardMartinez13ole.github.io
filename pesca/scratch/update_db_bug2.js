const fs = require('fs');
let content = fs.readFileSync('db.js', 'utf8');

const regex = /\/\/ Cargar Mi Registro\nwindow\.loadPersonalRegistro = async \(\) => \{[\s\S]*?\/\/ ==============================\n\/\/ FASE 2: CAÑADEX/;

const correctRegistro = `// Cargar Mi Registro
window.loadPersonalRegistro = async () => {
  if (!window.db || !window.currentUser) return;
  const feed = document.getElementById('feed-personal');
  feed.innerHTML = '<p class="loading"><i class="fas fa-spinner fa-spin"></i> Carregant les teves captures...</p>';

  try {
    const snapshot = await window.db.collection('capturas')
      .where('usuarioId', '==', window.currentUser.uid)
      .orderBy('createdAt', 'desc')
      .get();
      
    feed.innerHTML = '';
    
    const grid = document.getElementById('peixdex-grid');
    const caught = {};
    const especiesOficiales = [
      'Agulla', 'Anguila', 'Atun blanc', 'Atun roig', 'Bacoreta', 'Barb', 'Barracuda', 
      'Blackbass', 'Brema', 'Calamar', 'Caprí', 'Carpa', 'Catxo', 'Cavalla', 'Esturió', 
      'Jurel', 'Llampuga', 'Llisal', 'Llobarro', 'Lucio', 'Lucioperca', 'Mero', 
      'Muixarra / Dorada', 'Palometa', 'Peix gat de canal', 'Peix gat negre', 'Saboga', 
      'Sarg', 'Sepia', 'Silur', 'Tallahams', 'Trucha'
    ];

    if (snapshot.empty) {
      feed.innerHTML = '<p style="text-align:center; color:var(--text-muted); margin-top:30px;">Encara no has registrat res. Ves a pescar!</p>';
    } else {
      snapshot.forEach(doc => {
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

        const card = window.createCapturaCard(data);
        feed.appendChild(card);
        if (window.cargarComentarios) window.cargarComentarios(data.id);
      });
    }

    if (window.renderAlbum) {
      window.renderAlbum(caught, grid, false);
    }
  } catch (error) {
    console.error("Error leyendo registro personal:", error);
    if (error.message.includes('index')) {
       feed.innerHTML = '<p class="error-msg">Requereix un índex a Firestore per ordenar per createdAt. <a href="https://console.firebase.google.com/" target="_blank" style="color:white">Revisa la consola</a>.</p>';
    } else {
       feed.innerHTML = '<p class="error-msg">Error al carregar captures. Revisa consola.</p>';
    }
  }
};

// ==============================
// FASE 2: CAÑADEX`;

content = content.replace(regex, correctRegistro);

fs.writeFileSync('db.js', content, 'utf8');
console.log('Success db.js final fix');
