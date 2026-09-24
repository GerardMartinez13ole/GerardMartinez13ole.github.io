const fs = require('fs');
let content = fs.readFileSync('app.js', 'utf8');

const replacement = `
window.togglePeixdexView = (view) => {
  const btnAlbum = document.getElementById('btn-view-album');
  const btnLlista = document.getElementById('btn-view-llista');
  const viewAlbum = document.getElementById('peixdex-album-view');
  const viewLlista = document.getElementById('peixdex-llista-view');

  if (view === 'album') {
    btnAlbum.className = 'btn btn-primary';
    btnLlista.className = 'btn btn-secondary';
    viewAlbum.style.display = 'block';
    viewLlista.style.display = 'none';
  } else {
    btnAlbum.className = 'btn btn-secondary';
    btnLlista.className = 'btn btn-primary';
    viewAlbum.style.display = 'none';
    viewLlista.style.display = 'block';
  }
};

window.togglePerfilView = (view) => {
  const btnAlbum = document.getElementById('btn-perfil-view-album');
  const btnLlista = document.getElementById('btn-perfil-view-llista');
  const viewAlbum = document.getElementById('perfil-album-view');
  const viewLlista = document.getElementById('perfil-llista-view');

  if (view === 'album') {
    btnAlbum.className = 'btn btn-primary';
    btnLlista.className = 'btn btn-secondary';
    viewAlbum.style.display = 'block';
    viewLlista.style.display = 'none';
  } else {
    btnAlbum.className = 'btn btn-secondary';
    btnLlista.className = 'btn btn-primary';
    viewAlbum.style.display = 'none';
    viewLlista.style.display = 'block';
  }
};

window.filterPeixdexBySpecies = (speciesName, isPerfil = false) => {
  // Cambiar a la vista lista
  if (isPerfil) {
    window.togglePerfilView('llista');
  } else {
    window.togglePeixdexView('llista');
  }
  
  const feedId = isPerfil ? 'perfil-feed-capturas' : 'feed-personal';
  const feed = document.getElementById(feedId);
  const cards = Array.from(feed.getElementsByClassName('captura-card'));
  
  let count = 0;
  cards.forEach(card => {
    if (!speciesName || card.dataset.especie === speciesName.toLowerCase()) {
      card.style.display = 'block';
      count++;
    } else {
      card.style.display = 'none';
    }
  });

  // Mostrar botón de limpiar filtro
  const clearBtnId = isPerfil ? 'btn-clear-perfil-filter' : 'btn-clear-peixdex-filter';
  let clearBtn = document.getElementById(clearBtnId);
  
  if (speciesName) {
    if (!clearBtn) {
      clearBtn = document.createElement('button');
      clearBtn.id = clearBtnId;
      clearBtn.className = 'btn btn-secondary btn-block';
      clearBtn.style.marginBottom = '15px';
      clearBtn.onclick = () => window.filterPeixdexBySpecies(null, isPerfil);
      feed.parentElement.insertBefore(clearBtn, feed);
    }
    clearBtn.innerHTML = \`<i class="fas fa-times"></i> Traure filtre d'espècie (\${speciesName})\`;
    clearBtn.style.display = 'block';
  } else {
    if (clearBtn) clearBtn.style.display = 'none';
  }
};

window.renderAlbum = (caught, grid, isPerfil = false) => {
  if (!grid) return;
  grid.innerHTML = '';
  
  const especiesOficiales = [
    'Agulla', 'Anguila', 'Atun blanc', 'Atun roig', 'Bacoreta', 'Barb', 'Barracuda', 
    'Blackbass', 'Brema', 'Calamar', 'Caprí', 'Carpa', 'Catxo', 'Cavalla', 'Esturió', 
    'Jurel', 'Llampuga', 'Llisal', 'Llobarro', 'Lucio', 'Lucioperca', 'Mero', 
    'Muixarra / Dorada', 'Palometa', 'Peix gat de canal', 'Peix gat negre', 'Saboga', 
    'Sarg', 'Sepia', 'Silur', 'Tallahams', 'Trucha'
  ];

  // Primero las oficiales
  especiesOficiales.forEach(esp => {
    const info = caught[esp];
    const isUnlocked = !!info;
    
    const div = document.createElement('div');
    div.className = 'cromo ' + (isUnlocked ? 'unlocked' : '');
    
    if (isUnlocked) {
      div.style.cursor = 'pointer';
      div.onclick = () => window.filterPeixdexBySpecies(esp, isPerfil);
    }
    
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
      div.style.borderColor = '#fbbf24'; 
      div.style.cursor = 'pointer';
      div.onclick = () => window.filterPeixdexBySpecies(esp, isPerfil);
      
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
};
`;

content = content.replace(/window\.togglePeixdexView = \(view\) => \{[\s\S]*?viewLlista\.style\.display = 'block';\n  \}\n\};/, replacement.trim());

fs.writeFileSync('app.js', content, 'utf8');
console.log('Success app.js');

