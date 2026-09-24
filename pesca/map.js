// map.js - Lógica de mapas con Leaflet

let map = null;
let currentMarkers = [];
let tempMarker = null;

window.initMap = () => {
  // Solo inicializar una vez
  if (map !== null) {
    map.invalidateSize(); // Refrescar tamaño al mostrar el div
    loadMapMarkers();
    return;
  }

  // Inicializar mapa (Centrado en Tortosa, Tarragona por defecto)
  map = L.map('map-container').setView([40.8125, 0.5216], 12);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(map);

  // Manejar click largo / doble click para añadir marcador
  map.on('dblclick', function(e) {
    if (tempMarker) map.removeLayer(tempMarker);
    
    tempMarker = L.marker(e.latlng).addTo(map);
    
    // Abrir formulario
    document.getElementById('marker-lat').value = e.latlng.lat;
    document.getElementById('marker-lng').value = e.latlng.lng;
    document.getElementById('form-marker-container').style.display = 'block';
    
    // Scroll al formulario
    document.getElementById('form-marker-container').scrollIntoView({behavior: 'smooth'});
  });

  // Selector de tipo de mapa
  document.getElementById('map-type-selector').addEventListener('change', () => {
    loadMapMarkers();
  });

  // Cargar marcadores iniciales
  loadMapMarkers();
};

// Guardar nuevo marcador en Firestore
document.addEventListener('DOMContentLoaded', () => {
  const formMarker = document.getElementById('form-marker');
  if (formMarker) {
    formMarker.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!window.db || !window.currentUser) return;

      const lat = parseFloat(document.getElementById('marker-lat').value);
      const lng = parseFloat(document.getElementById('marker-lng').value);
      const tipo = document.getElementById('marker-type').value;
      const nombre = document.getElementById('marker-nombre').value;
      const desc = document.getElementById('marker-desc').value;

      try {
        await window.db.collection('mapa_puntos').add({
          lat: lat,
          lng: lng,
          tipo: tipo,
          nombre: nombre,
          descripcion: desc,
          usuarioId: window.currentUser.uid,
          usuarioNombre: window.currentUser.displayName || window.currentUser.email.split('@')[0],
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        
        formMarker.reset();
        document.getElementById('form-marker-container').style.display = 'none';
        if (tempMarker) map.removeLayer(tempMarker);
        
        alert("Punt afegit al mapa.");
        loadMapMarkers();

      } catch (error) {
        console.error("Error guardando punto:", error);
        alert("Error al guardar al mapa.");
      }
    });
  }
});

function clearMarkers() {
  currentMarkers.forEach(m => map.removeLayer(m));
  currentMarkers = [];
}

const icons = {
  pescar: '🎣',
  investigar: '🔍',
  dificil: '⚠️',
  tienda: '🏬'
};

async function loadMapMarkers() {
  if (!window.db || !map) return;
  clearMarkers();

  const mapType = document.getElementById('map-type-selector').value;

  try {
    let query = window.db.collection('mapa_puntos');
    
    // Filtrar si no es "todos"
    if (mapType !== 'todos') {
      query = query.where('tipo', '==', mapType);
    }
    
    const snapshot = await query.get();

    snapshot.forEach(doc => {
      const data = doc.data();
      const emoji = icons[data.tipo] || '📍';
      
      const customIcon = L.divIcon({
        className: 'custom-map-marker',
        html: `<div style="font-size:24px; text-shadow: 0 0 5px rgba(255,255,255,0.8);">${emoji}</div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 15]
      });

      const marker = L.marker([data.lat, data.lng], {icon: customIcon}).addTo(map);
      
      const isOwner = window.currentUser && window.currentUser.uid === data.usuarioId;
      const deleteBtn = isOwner ? `
        <button onclick="window.borrarPuntoMapa('${doc.id}')" style="margin-top:5px; display:block; width:100%; text-align:center; background:#ef4444; color:white; border:none; padding:5px 10px; border-radius:8px; cursor:pointer; font-weight:bold; font-size:14px;">
          <i class="fas fa-trash-alt"></i> Esborrar
        </button>
      ` : '';

      let popupContent = `
        <h3 style="margin:0 0 5px 0; color:#0b1320;">${emoji} ${data.nombre}</h3>
        <p style="margin:0; font-size:14px; color:#333;">${data.descripcion || ''}</p>
        <small style="color:#666; display:block; margin-top:5px; margin-bottom:10px;">Afegit per: ${data.usuarioNombre}</small>
        <a href="https://www.google.com/maps/dir/?api=1&destination=${data.lat},${data.lng}" target="_blank" style="display:block; text-align:center; background:#3b82f6; color:white; padding:5px 10px; border-radius:8px; text-decoration:none; font-weight:bold; font-size:14px;">
          <i class="fas fa-directions"></i> Com arribar
        </a>
        ${deleteBtn}
      `;
      marker.bindPopup(popupContent);
      currentMarkers.push(marker);
    });

  } catch (error) {
    console.error("Error cargando marcadores:", error);
    if(error.message.includes('index')) {
      alert("Requereix un índex de Firestore per filtrar per tipus. Revisa la consola.");
    }
  }
}

window.borrarPuntoMapa = async (id) => {
  if (!window.db || !window.currentUser) return;
  const confirmar = confirm("Estàs segur que vols esborrar aquest lloc del mapa?");
  if (!confirmar) return;

  try {
    await window.db.collection('mapa_puntos').doc(id).delete();
    alert("Lloc esborrat correctament.");
    loadMapMarkers();
  } catch (error) {
    console.error("Error esborrant punt:", error);
    alert("Error a l'esborrar. Comprova que tinguis permisos.");
  }
};

