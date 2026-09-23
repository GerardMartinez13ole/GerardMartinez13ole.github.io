// app.js - Manejo de la interfaz de usuario

document.addEventListener('DOMContentLoaded', () => {
  const navBtns = document.querySelectorAll('.nav-item:not(.disabled)');
  const tabs = document.querySelectorAll('.tab-content');
  const topTitle = document.getElementById('top-title');

  // Navegación Bottom Navigation
  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remover active
      navBtns.forEach(b => b.classList.remove('active'));
      tabs.forEach(t => t.style.display = 'none');

      // Añadir active
      btn.classList.add('active');

      // Actualizar Título Superior
      topTitle.textContent = btn.getAttribute('data-title') || 'PescaApp';

      // Mostrar Tab
      const targetId = 'tab-' + btn.getAttribute('data-target');
      document.getElementById(targetId).style.display = 'block';

      // Disparar carga si corresponde
      if (btn.getAttribute('data-target') === 'muro') {
        if (window.loadMuro) window.loadMuro();
      } else if (btn.getAttribute('data-target') === 'registro') {
        if (window.loadPersonalRegistro) window.loadPersonalRegistro();
      } else if (btn.getAttribute('data-target') === 'canadex') {
        if (window.loadCanadex) window.loadCanadex();
      } else if (btn.getAttribute('data-target') === 'nuevo') {
        if (window.loadEquiposToSelect) window.loadEquiposToSelect();
      } else if (btn.getAttribute('data-target') === 'mapas') {
        if (window.initMap) window.initMap();
      }
    });
  });

  // Previsualización de Foto
  const fotoInput = document.getElementById('cap-foto');
  const fotoPreview = document.getElementById('foto-preview');
  const fotoText = document.getElementById('foto-text');

  if (fotoInput) {
    fotoInput.addEventListener('change', function() {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
          fotoPreview.src = e.target.result;
          fotoPreview.style.display = 'block';
          fotoText.textContent = 'Cambiar foto';
        }
        reader.readAsDataURL(file);
      }
    });
  }
});

// Función para mostrar errores en login
window.showAuthError = (msg) => {
  const errorDiv = document.getElementById('auth-error');
  errorDiv.textContent = msg;
  errorDiv.style.display = 'block';
  setTimeout(() => {
    errorDiv.style.display = 'none';
  }, 5000);
};

// Crear elemento HTML para una captura (Estilo Tarjeta Feed)
window.createCapturaCard = (data) => {
  const div = document.createElement('div');
  div.className = 'captura-card';
  
  // Parsear fecha
  let dateStr = 'Fecha desconocida';
  if (data.fecha) {
    // Manejar Timestamp de Firestore o string ISO
    const dateObj = data.fecha.seconds ? new Date(data.fecha.seconds * 1000) : new Date(data.fecha);
    dateStr = dateObj.toLocaleDateString() + (data.horaStr ? ' ' + data.horaStr : '');
  }
  
  // Imagen (si hay) o placeholder
  const imgHtml = data.fotoUrl 
    ? `<img src="${data.fotoUrl}" class="captura-img" alt="Foto de la captura">`
    : `<div class="captura-img-placeholder"><i class="fas fa-fish"></i></div>`;

  div.innerHTML = `
    <div class="captura-header">
      <div class="captura-user" style="cursor:pointer;" onclick="window.openPerfil('${data.usuarioId}', '${data.usuarioNombre}')">
        <i class="fas fa-user-circle"></i> ${data.usuarioNombre}
      </div>
      <div class="captura-date">${dateStr}</div>
    </div>
    ${imgHtml}
    <div class="captura-body">
      <h3 class="captura-title">${data.especie}</h3>
      
      <div class="captura-stats">
        <div class="stat-badge" title="Peso"><i class="fas fa-weight-hanging"></i> ${data.peso ? data.peso + ' kg' : '-'}</div>
        <div class="stat-badge" title="Longitud"><i class="fas fa-ruler-horizontal"></i> ${data.longitud ? data.longitud + ' cm' : '-'}</div>
        <div class="stat-badge" title="Sitio"><i class="fas fa-map-marker-alt"></i> ${data.sitio}</div>
      </div>

      <div class="captura-stats" style="margin-bottom: 10px;">
        ${data.modalidad ? `<div class="stat-badge"><i class="fas fa-water"></i> ${data.modalidad}</div>` : ''}
        ${data.cebo ? `<div class="stat-badge"><i class="fas fa-bug"></i> ${data.cebo}</div>` : ''}
        ${data.equipo ? `<div class="stat-badge"><i class="fas fa-hammer"></i> ${data.equipo}</div>` : ''}
        ${data.tiempoLucha ? `<div class="stat-badge"><i class="fas fa-stopwatch"></i> ${data.tiempoLucha}</div>` : ''}
      </div>

      ${data.descripcion ? `<div class="captura-desc">"${data.descripcion}"</div>` : ''}
    </div>
  `;
  return div;
};

// Crear elemento HTML para un equipo de la Cañadex
window.createCanadexCard = (data) => {
  const div = document.createElement('div');
  div.className = 'captura-card';
  div.style.padding = '15px';
  div.style.borderLeft = '5px solid var(--accent)';

  div.innerHTML = `
    <h3 style="margin-top:0; color:var(--accent); font-size:1.2rem;">
      <i class="fas fa-toolbox"></i> ${data.nombre}
    </h3>
    <div style="display:flex; flex-direction:column; gap:8px; font-size:0.9rem; color:var(--text-main);">
      ${data.cana ? `<div><strong>Caña:</strong> ${data.cana}</div>` : ''}
      ${data.carrete ? `<div><strong>Carrete:</strong> ${data.carrete}</div>` : ''}
      ${data.hilo ? `<div><strong>Hilo:</strong> ${data.hilo}</div>` : ''}
      ${data.plomo ? `<div><strong>Plomo/Montaje:</strong> ${data.plomo}</div>` : ''}
    </div>
    
    <div style="margin-top:15px; display:flex; justify-content:space-between; align-items:center;">
      <span style="font-weight:bold; color:var(--primary); font-size:1.1rem;">
        ${data.precio ? data.precio + ' €' : ''}
      </span>
      ${data.enlace ? `<a href="${data.enlace}" target="_blank" class="btn btn-secondary btn-small" style="text-decoration:none;"><i class="fas fa-shopping-cart"></i> Ver Tienda</a>` : ''}
    </div>
  `;
  return div;
};
