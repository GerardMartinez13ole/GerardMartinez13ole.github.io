const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const replacement = `      <!-- TAB: MI PEIXDEX -->
      <section id="tab-registro" class="tab-content" style="display: none;">
        <h2 style="color:var(--primary); margin-top:0; text-align:center;"><i class="fas fa-book-open"></i> La meva Peixdex</h2>
        
        <div style="display:flex; justify-content:center; gap:10px; margin-bottom:15px;">
          <button id="btn-view-album" class="btn btn-primary" onclick="window.togglePeixdexView('album')"><i class="fas fa-grip-horizontal"></i> Àlbum</button>
          <button id="btn-view-llista" class="btn btn-secondary" onclick="window.togglePeixdexView('llista')"><i class="fas fa-list"></i> Historial</button>
        </div>

        <!-- VISTA ALBUM -->
        <div id="peixdex-album-view" style="display:block;">
          <div id="peixdex-grid" style="display:grid; grid-template-columns: repeat(auto-fill, minmax(90px, 1fr)); gap: 10px; margin-bottom: 30px;">
            <p class="loading" style="grid-column: 1 / -1;">Calculant els teus cromos...</p>
          </div>
        </div>

        <!-- VISTA LLISTA -->
        <div id="peixdex-llista-view" style="display:none;">
          <div class="form-group" style="margin-bottom: 15px; display:flex; gap:10px; align-items:center;">
            <label for="sort-peixdex" style="white-space:nowrap; color:var(--text-muted);"><i class="fas fa-sort"></i> Ordenar per:</label>
            <select id="sort-peixdex" onchange="window.ordenarPeixdex()" style="padding:8px; border-radius:8px;">
              <option value="fecha-desc">Més recents primer</option>
              <option value="fecha-asc">Més antics primer</option>
              <option value="peso">Major pes</option>
              <option value="longitud">Major longitud</option>
              <option value="especie">Espècie (A-Z)</option>
              <option value="sitio">Lloc (A-Z)</option>
            </select>
          </div>
          <div id="feed-personal" class="feed">
            <p class="loading">Carregant les teves captures...</p>
          </div>
        </div>
      </section>`;

content = content.replace(/<!-- TAB: MI PEIXDEX -->[\s\S]*?<\/section>/, replacement);

fs.writeFileSync('index.html', content, 'utf8');
console.log('Success index.html');

