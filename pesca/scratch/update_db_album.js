const fs = require('fs');
let content = fs.readFileSync('db.js', 'utf8');

const replacement = `
    const grid = document.getElementById('peixdex-grid');
    if (grid) grid.innerHTML = '';
    
    // Lista oficial de especies
    const especiesOficiales = [
      'Agulla', 'Anguila', 'Atun blanc', 'Atun roig', 'Bacoreta', 'Barb', 'Barracuda', 
      'Blackbass', 'Brema', 'Calamar', 'Caprí', 'Carpa', 'Catxo', 'Cavalla', 'Esturió', 
      'Jurel', 'Llampuga', 'Llisal', 'Llobarro', 'Lucio', 'Lucioperca', 'Mero', 
      'Muixarra / Dorada', 'Palometa', 'Peix gat de canal', 'Peix gat negre', 'Saboga', 
      'Sarg', 'Sepia', 'Silur', 'Tallahams', 'Trucha'
    ];
    
    // Registrar qué especies hemos pescado
    const caught = {};

    snapshot.forEach(doc => {
      const data = doc.data();
      data.id = doc.id;
      
      // Contar para el álbum
      const esp = data.especie;
      if (esp) {
        // Encontrar coincidencia sin importar mayúsculas/minúsculas
        const espMatch = especiesOficiales.find(e => e.toLowerCase() === esp.toLowerCase());
        const finalEsp = espMatch || esp; // Si es Altre, usar su nombre tal cual
        
        if (!caught[finalEsp]) {
          caught[finalEsp] = { count: 0, maxPeso: 0, maxLong: 0 };
        }
        caught[finalEsp].count++;
        if (data.peso && parseFloat(data.peso) > caught[finalEsp].maxPeso) caught[finalEsp].maxPeso = parseFloat(data.peso);
        if (data.longitud && parseFloat(data.longitud) > caught[finalEsp].maxLong) caught[finalEsp].maxLong = parseFloat(data.longitud);
      }

      // Añadir al feed de historial
      const card = window.createCapturaCard(data);
      feed.appendChild(card);
      if (window.cargarComentarios) window.cargarComentarios(data.id);
    });

    // Renderizar cromos
    if (grid) {
      // Primero las oficiales
      especiesOficiales.forEach(esp => {
        const info = caught[esp];
        const isUnlocked = !!info;
        
        const div = document.createElement('div');
        div.className = 'cromo ' + (isUnlocked ? 'unlocked' : '');
        
        div.innerHTML = \`
          <i class="fas fa-fish cromo-icon"></i>
          <div class="cromo-name">\${esp}</div>
          \${isUnlocked ? \`
            <div class="cromo-stats">
              <span>\${info.count} capt.</span>
              \${info.maxPeso ? \`<span>\${info.maxPeso}kg</span>\` : ''}
              \${info.maxLong ? \`<span>\${info.maxLong}cm</span>\` : ''}
            </div>
          \` : \`
            <div class="cromo-stats"><i class="fas fa-lock"></i></div>
          \`}
        \`;
        grid.appendChild(div);
      });
      
      // Después las extras ("Altre")
      Object.keys(caught).forEach(esp => {
        if (!especiesOficiales.includes(esp)) {
          const info = caught[esp];
          const div = document.createElement('div');
          div.className = 'cromo unlocked';
          div.style.borderColor = '#fbbf24'; // Color especial para especies extra
          
          div.innerHTML = \`
            <i class="fas fa-star cromo-icon" style="color:#fbbf24;"></i>
            <div class="cromo-name" style="color:#fbbf24;">\${esp}</div>
            <div class="cromo-stats">
              <span>\${info.count} capt.</span>
              \${info.maxPeso ? \`<span>\${info.maxPeso}kg</span>\` : ''}
              \${info.maxLong ? \`<span>\${info.maxLong}cm</span>\` : ''}
            </div>
          \`;
          grid.appendChild(div);
        }
      });
    }
  } catch (error) {`;

content = content.replace(/snapshot\.forEach\(doc => \{[\s\S]*?\}\);[\s\n]*\} catch \(error\) \{/, replacement);

fs.writeFileSync('db.js', content, 'utf8');
console.log('Success db.js');

