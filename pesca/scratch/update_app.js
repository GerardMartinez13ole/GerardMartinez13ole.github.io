const fs = require('fs');

let content = fs.readFileSync('app.js', 'utf8');

// 1. Add Edit button to card
const actionsHtmlStr = `
  if(!window.capturasData) window.capturasData = {};
  window.capturasData[data.id] = data;

  const isOwner = window.currentUser && window.currentUser.uid === data.usuarioId;
  const actionsHtml = isOwner ? \`
    <button onclick="window.iniciarEdicionCaptura('\${data.id}')" style="background:none; border:none; color:#3b82f6; cursor:pointer; font-size:1.1rem;" title="Editar"><i class="fas fa-edit"></i></button>
    <button onclick="window.borrarCaptura('\${data.id}')" style="background:none; border:none; color:#ef4444; cursor:pointer; font-size:1.1rem;" title="Esborrar"><i class="fas fa-trash-alt"></i></button>
  \` : '';
`;

content = content.replace(
  /const isOwner[\s\S]*?const deleteBtnHtml[\s\S]*?'';/,
  actionsHtmlStr.trim()
);

content = content.replace(/\$\{deleteBtnHtml\}/g, '${actionsHtml}');

// 2. Add switchTab logic
const switchTabReplacement = `
  window.switchTab = (target, title) => {
    if (target !== 'nuevo' && window.editingCapturaId) {
      window.editingCapturaId = null;
      const form = document.getElementById('form-captura');
      if (form) form.reset();
      const btn = document.getElementById('btn-guardar-captura');
      if (btn) btn.innerHTML = '<i class="fas fa-save"></i> Guardar Captura';
      const fp = document.getElementById('foto-preview');
      if (fp) fp.style.display = 'none';
      const ft = document.getElementById('foto-text');
      if (ft) ft.textContent = 'Pujar foto del peix';
      const btnCancel = document.getElementById('btn-cancelar-edicion');
      if (btnCancel) btnCancel.style.display = 'none';
    }

    navBtns.forEach(b => b.classList.remove('active'));
    tabs.forEach(t => t.style.display = 'none');
`;

content = content.replace(
  /window\.switchTab \= \(target, title\) \=\> \{[\s\n]*navBtns\.forEach\(b \=\> b\.classList\.remove\('active'\)\);[\s\n]*tabs\.forEach\(t \=\> t\.style\.display \= 'none'\);/,
  switchTabReplacement.trim()
);

// 3. Add iniciarEdicionCaptura
const iniciarEdicionCode = `
// Iniciar edición de captura
window.iniciarEdicionCaptura = (id) => {
  const data = window.capturasData[id];
  if(!data) return;

  window.editingCapturaId = id;
  
  document.getElementById('cap-especie').value = data.especie || '';
  document.getElementById('cap-peso').value = data.peso || '';
  document.getElementById('cap-longitud').value = data.longitud || '';
  document.getElementById('cap-modalidad').value = data.modalidad || 'Altre';
  document.getElementById('cap-cebo').value = data.cebo || '';
  
  setTimeout(() => {
    document.getElementById('cap-equipo').value = data.equipo || '';
    document.getElementById('cap-sitio').value = data.sitio || '';
  }, 500);
  
  document.getElementById('cap-tiempo').value = data.tiempoLucha || '';
  document.getElementById('cap-desc').value = data.descripcion || '';
  
  if (data.fecha) {
    const d = data.fecha.seconds ? new Date(data.fecha.seconds * 1000) : new Date(data.fecha);
    const tzoffset = (new Date()).getTimezoneOffset() * 60000;
    const localISOTime = (new Date(d - tzoffset)).toISOString().slice(0,16);
    document.getElementById('cap-fecha').value = localISOTime;
  } else {
    document.getElementById('cap-fecha').value = '';
  }

  const fotoPreview = document.getElementById('foto-preview');
  const fotoText = document.getElementById('foto-text');
  if (data.fotoUrl) {
    fotoPreview.src = data.fotoUrl;
    fotoPreview.style.display = 'block';
    fotoText.textContent = 'Canviar foto';
  } else {
    fotoPreview.src = '';
    fotoPreview.style.display = 'none';
    fotoText.textContent = 'Pujar foto del peix';
  }

  document.getElementById('btn-guardar-captura').innerHTML = '<i class="fas fa-save"></i> Guardar Canvis';
  const btnCancel = document.getElementById('btn-cancelar-edicion');
  if (btnCancel) btnCancel.style.display = 'block';
  
  window.switchTab('nuevo', 'Editar Captura');
};
`;

content += '\n' + iniciarEdicionCode;

fs.writeFileSync('app.js', content, 'utf8');
console.log('Success app.js');

