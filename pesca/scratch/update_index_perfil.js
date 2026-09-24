const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const replacement = `      <!-- TAB: PERFIL PÚBLICO -->
      <section id="tab-perfil" class="tab-content" style="display: none;">
        <div style="padding:20px; background:var(--panel-bg); border-radius:16px; margin-bottom:20px; display:flex; flex-direction:column; align-items:center; text-align:center;">
          <i class="fas fa-user-circle" style="font-size:4rem; color:var(--accent); margin-bottom:10px;"></i>
          <h2 id="perfil-title" style="margin:0; color:var(--primary);">Usuario</h2>
          <div style="margin-top:10px; font-size:1.5rem; color:var(--accent); font-weight:bold;">🎣 <span id="perfil-total">0</span></div>
          <div style="color:var(--text-muted); font-size:0.9rem;">Captures totals</div>
        </div>

        <h3 style="color:var(--accent); border-bottom:1px solid #334155; padding-bottom:5px; margin-top:20px;"><i class="fas fa-book-open"></i> La seva Peixdex</h3>
        
        <div style="display:flex; justify-content:center; gap:10px; margin-bottom:15px;">
          <button id="btn-perfil-view-album" class="btn btn-primary" onclick="window.togglePerfilView('album')"><i class="fas fa-grip-horizontal"></i> Àlbum</button>
          <button id="btn-perfil-view-llista" class="btn btn-secondary" onclick="window.togglePerfilView('llista')"><i class="fas fa-list"></i> Historial</button>
        </div>

        <div id="perfil-album-view" style="display:block;">
          <div id="perfil-peixdex-grid" style="display:grid; grid-template-columns: repeat(auto-fill, minmax(90px, 1fr)); gap: 10px; margin-bottom: 30px;">
            <p class="loading" style="grid-column: 1 / -1;">Calculant els seus cromos...</p>
          </div>
        </div>

        <div id="perfil-llista-view" style="display:none;">
          <div id="perfil-feed-capturas" class="feed" style="margin-bottom:40px;">
            <p class="loading">Carregant...</p>
          </div>
        </div>

        <h3 style="color:var(--accent); border-bottom:1px solid #334155; padding-bottom:5px;"><i class="fas fa-toolbox"></i> La seva Canyadex</h3>
        <div id="perfil-feed-equipos" class="feed" style="margin-bottom:40px;">
          <p class="loading">Carregant...</p>
        </div>
      </section>`;

content = content.replace(/<!-- TAB: PERFIL PÚBLICO -->[\s\S]*?<\/section>/, replacement);

fs.writeFileSync('index.html', content, 'utf8');
console.log('Success index.html perfil');

