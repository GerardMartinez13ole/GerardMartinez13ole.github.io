const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const replacement = `              <div style="display:flex; gap:8px;">
                <select id="cap-sitio" required style="flex:1;">
                  <option value="">Carregant zones...</option>
                </select>
                <button type="button" class="btn btn-secondary" onclick="window.switchTab('mapas', 'Mapes Interactius'); if(window.initMap) window.initMap(); alert('📍 Fes doble clic sobre el mapa per afegir una nova zona o botiga.\\n\\nQuan la guardis, torna aquí a la pestanya de Nova Captura per acabar.');" style="padding: 10px; flex-shrink: 0;" title="Crear nou lloc al mapa">
                  <i class="fas fa-plus"></i> <i class="fas fa-map"></i>
                </button>
              </div>`;

content = content.replace(/<select id="cap-sitio" required>[\s\n]*<option value="">Carregant zones...<\/option>[\s\n]*<\/select>[\s\n]*<small.*?>.*?<\/small>/, replacement);

fs.writeFileSync('index.html', content, 'utf8');
console.log('Success index.html sitio');
