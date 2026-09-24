const fs = require('fs');
let content = fs.readFileSync('app.js', 'utf8');

const replacement = `
// Iniciar edición de captura
window.iniciarEdicionCaptura = async (id) => {
  const data = window.capturasData[id];
  if(!data) return;

  window.editingCapturaId = id;
  
  // Cargar datos estáticos primero
  document.getElementById('cap-especie').value = data.especie || '';
  document.getElementById('cap-peso').value = data.peso || '';
  document.getElementById('cap-longitud').value = data.longitud || '';
  document.getElementById('cap-modalidad').value = data.modalidad || 'Altre';
  document.getElementById('cap-cebo').value = data.cebo || '';
  
  // Forzar carga de desplegables
  if (window.loadEquiposToSelect) await window.loadEquiposToSelect();
  if (window.loadSitiosToSelect) await window.loadSitiosToSelect();

  // Ahora asignar valores
  document.getElementById('cap-equipo').value = data.equipo || '';
  document.getElementById('cap-sitio').value = data.sitio || '';
  
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

content = content.replace(/\/\/ Iniciar edición de captura[\s\S]*?window\.switchTab\('nuevo', 'Editar Captura'\);\n\};/, replacement.trim());
fs.writeFileSync('app.js', content, 'utf8');

