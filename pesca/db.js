// db.js - Lógica de Base de Datos Firestore y Storage

document.addEventListener('DOMContentLoaded', () => {
  const formCaptura = document.getElementById('form-captura');
  const btnGuardar = document.getElementById('btn-guardar-captura');

  // Guardar nueva captura
  formCaptura.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!window.db || !window.currentUser) {
      alert("Error: Base de datos no conectada o usuario no logueado.");
      return;
    }

    // Cambiar estado del botón
    const originalBtnHTML = btnGuardar.innerHTML;
    btnGuardar.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Guardando...';
    btnGuardar.disabled = true;

    try {
      // 1. Recoger datos del formulario
      const especie = document.getElementById('cap-especie').value.trim();
      const peso = document.getElementById('cap-peso').value;
      const longitud = document.getElementById('cap-longitud').value;
      const modalidad = document.getElementById('cap-modalidad').value;
      const cebo = document.getElementById('cap-cebo').value;
      const equipo = document.getElementById('cap-equipo').value;
      const fechaInput = document.getElementById('cap-fecha').value; // YYYY-MM-DDTHH:mm
      const tiempo = document.getElementById('cap-tiempo').value;
      const sitio = document.getElementById('cap-sitio').value;
      const descripcion = document.getElementById('cap-desc').value;
      
      const fotoInput = document.getElementById('cap-foto');
      const file = fotoInput ? fotoInput.files[0] : null;

      let fotoUrl = null;

      // 2. Subir foto a Firebase Storage (Deshabilitado temporalmente)
      /*
      if (file && window.firebase && firebase.storage) {
        const storageRef = firebase.storage().ref();
        const fileName = `capturas/${window.currentUser.uid}/${Date.now()}_${file.name}`;
        const imageRef = storageRef.child(fileName);
        
        const snapshot = await imageRef.put(file);
        fotoUrl = await snapshot.ref.getDownloadURL();
      }
      */

      // Procesar fecha y hora custom si el usuario la puso
      let fechaFinal = firebase.firestore.FieldValue.serverTimestamp();
      let horaStr = "";
      if (fechaInput) {
        const d = new Date(fechaInput);
        fechaFinal = firebase.firestore.Timestamp.fromDate(d);
        horaStr = d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
      }

      // 3. Crear objeto de captura
      const captura = {
        especie: especie,
        peso: peso || null,
        longitud: longitud || null,
        modalidad: modalidad || null,
        cebo: cebo || null,
        equipo: equipo || null,
        tiempoLucha: tiempo || null,
        sitio: sitio,
        descripcion: descripcion || null,
        fotoUrl: fotoUrl, // Puede ser null
        usuarioId: window.currentUser.uid,
        usuarioNombre: window.currentUser.email.split('@')[0],
        fecha: fechaFinal,
        horaStr: horaStr,
        createdAt: firebase.firestore.FieldValue.serverTimestamp() // Para orden interno
      };

      // 4. Guardar en Firestore (Colección 'capturas')
      await window.db.collection('capturas').add(captura);

      // 5. Lógica Peixdex: Añadir especie si no existe
      if (especie) {
        // Normalizar nombre para el ID (minúsculas, sin espacios extra)
        const especieId = especie.toLowerCase().replace(/\s+/g, '-');
        const peixdexRef = window.db.collection('peixdex').doc(especieId);
        
        const doc = await peixdexRef.get();
        if (!doc.exists) {
          // Si no existe, la creamos
          await peixdexRef.set({
            nombreOficial: especie,
            descubridor: window.currentUser.email.split('@')[0],
            fechaDescubrimiento: firebase.firestore.FieldValue.serverTimestamp()
          });
          console.log("Nueva especie añadida a la Peixdex:", especie);
        }
      }

      alert('¡Captura guardada con éxito!');
      formCaptura.reset();
      document.getElementById('foto-preview').style.display = 'none';
      document.getElementById('foto-text').textContent = 'Subir foto del pez';
      
      // Volver al muro
      document.querySelector('[data-target="muro"]').click();

    } catch (error) {
      console.error("Error guardando captura: ", error);
      alert("Hubo un error al guardar. Asegúrate de tener configurado Firebase Storage si intentaste subir foto.");
    } finally {
      btnGuardar.innerHTML = originalBtnHTML;
      btnGuardar.disabled = false;
    }
  });
});

// Cargar Muro Público
window.loadMuro = async () => {
  if (!window.db) return;
  const feed = document.getElementById('feed-muro');
  feed.innerHTML = '<p class="loading"><i class="fas fa-spinner fa-spin"></i> Cargando capturas...</p>';

  try {
    // Usamos createdAt para ordenar de forma segura
    const snapshot = await window.db.collection('capturas')
      .orderBy('createdAt', 'desc')
      .limit(30)
      .get();
      
    feed.innerHTML = ''; 
    
    if (snapshot.empty) {
      feed.innerHTML = '<p style="text-align:center; color:var(--text-muted); margin-top:30px;">No hay capturas aún. ¡Sé el primero!</p>';
      return;
    }

    snapshot.forEach(doc => {
      const card = window.createCapturaCard(doc.data());
      feed.appendChild(card);
    });
  } catch (error) {
    console.error("Error leyendo muro:", error);
    feed.innerHTML = '<p class="error-msg">Error al cargar. Asegúrate de que las reglas de Firestore permiten lectura.</p>';
  }
};

// Cargar Mi Registro
window.loadPersonalRegistro = async () => {
  if (!window.db || !window.currentUser) return;
  const feed = document.getElementById('feed-personal');
  feed.innerHTML = '<p class="loading"><i class="fas fa-spinner fa-spin"></i> Cargando tus capturas...</p>';

  try {
    const snapshot = await window.db.collection('capturas')
      .where('usuarioId', '==', window.currentUser.uid)
      .orderBy('createdAt', 'desc')
      .get();
      
    feed.innerHTML = '';
    
    if (snapshot.empty) {
      feed.innerHTML = '<p style="text-align:center; color:var(--text-muted); margin-top:30px;">Aún no has registrado nada. ¡Vete de pesca!</p>';
      return;
    }

    snapshot.forEach(doc => {
      const card = window.createCapturaCard(doc.data());
      feed.appendChild(card);
    });
  } catch (error) {
    console.error("Error leyendo registro personal:", error);
    if (error.message.includes('index')) {
       feed.innerHTML = '<p class="error-msg">Requiere un índice en Firestore para ordenar por createdAt. <a href="https://console.firebase.google.com/" target="_blank" style="color:white">Revisa la consola</a>.</p>';
    } else {
       feed.innerHTML = '<p class="error-msg">Error al cargar capturas. Revisa consola.</p>';
    }
  }
};

// ==============================
// FASE 2: CAÑADEX
// ==============================

// Guardar nueva Caña/Equipo
document.addEventListener('DOMContentLoaded', () => {
  const formCanadex = document.getElementById('form-canadex');
  if(formCanadex) {
    formCanadex.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!window.db || !window.currentUser) return;
      
      const btnGuardar = document.getElementById('btn-guardar-cana');
      const originalHtml = btnGuardar.innerHTML;
      btnGuardar.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Guardando...';
      btnGuardar.disabled = true;

      const equipoData = {
        nombre: document.getElementById('can-nombre').value,
        cana: document.getElementById('can-cana').value,
        carrete: document.getElementById('can-carrete').value,
        hilo: document.getElementById('can-hilo').value,
        plomo: document.getElementById('can-plomo').value,
        precio: document.getElementById('can-precio').value,
        enlace: document.getElementById('can-link').value,
        usuarioId: window.currentUser.uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      };

      try {
        await window.db.collection('canadex').add(equipoData);
        formCanadex.reset();
        document.getElementById('form-canadex-container').style.display = 'none';
        document.getElementById('btn-nueva-cana').style.display = 'inline-block';
        window.loadCanadex(); // Recargar la lista
      } catch(error) {
        console.error("Error guardando equipo:", error);
        alert("Hubo un error al guardar tu equipo.");
      } finally {
        btnGuardar.innerHTML = originalHtml;
        btnGuardar.disabled = false;
      }
    });
  }
});

// Cargar Mis Equipos en la pestaña Cañadex
window.loadCanadex = async () => {
  if (!window.db || !window.currentUser) return;
  const feed = document.getElementById('feed-canadex');
  feed.innerHTML = '<p class="loading"><i class="fas fa-spinner fa-spin"></i> Cargando tus equipos...</p>';

  try {
    const snapshot = await window.db.collection('canadex')
      .where('usuarioId', '==', window.currentUser.uid)
      .orderBy('createdAt', 'desc')
      .get();
      
    feed.innerHTML = '';
    
    if (snapshot.empty) {
      feed.innerHTML = '<p style="text-align:center; color:var(--text-muted); margin-top:30px;">Aún no tienes ningún equipo registrado.</p>';
      return;
    }

    snapshot.forEach(doc => {
      const card = window.createCanadexCard(doc.data());
      feed.appendChild(card);
    });
  } catch (error) {
    console.error("Error leyendo canadex:", error);
    if (error.message.includes('index')) {
       feed.innerHTML = '<p class="error-msg">Requiere índice para createdAt en canadex.</p>';
    } else {
       feed.innerHTML = '<p class="error-msg">Error al cargar equipos.</p>';
    }
  }
};

// Cargar mis equipos en el desplegable de Nueva Captura
window.loadEquiposToSelect = async () => {
  if (!window.db || !window.currentUser) return;
  const select = document.getElementById('cap-equipo');
  
  // Guardamos la primera opción
  const defaultOption = '<option value="">Ninguno / Selecciona uno...</option>';
  select.innerHTML = defaultOption;

  try {
    // Para selects, el orden a veces da error de índice, si falla, quitamos el orderBy
    const snapshot = await window.db.collection('canadex')
      .where('usuarioId', '==', window.currentUser.uid)
      .get();
      
    snapshot.forEach(doc => {
      const data = doc.data();
      const option = document.createElement('option');
      option.value = data.nombre; // Guardamos el nombre para que salga en la tarjeta de captura
      option.textContent = data.nombre;
      select.appendChild(option);
    });
  } catch(error) {
    console.error("Error cargando equipos al select:", error);
  }
};

// ==============================
// FASE 4: PEIXDEX Y RANKING
// ==============================

window.loadPeixdex = async () => {
  if (!window.db) return;
  const list = document.getElementById('peixdex-list');
  list.innerHTML = '<p class="loading">Cargando...</p>';

  try {
    const snapshot = await window.db.collection('peixdex').get();
    list.innerHTML = '';
    
    if (snapshot.empty) {
      list.innerHTML = '<p style="text-align:center;">Todavía no se ha descubierto ninguna especie.</p>';
      return;
    }

    snapshot.forEach(doc => {
      const data = doc.data();
      const div = document.createElement('div');
      div.style = 'background:var(--bg-color); padding:15px; border-radius:12px; border-left:4px solid var(--accent); display:flex; justify-content:space-between; align-items:center;';
      div.innerHTML = `
        <div>
          <h4 style="margin:0; font-size:1.1rem;">${data.nombreOficial}</h4>
          <small style="color:var(--text-muted)">Descubierto por: ${data.descubridor}</small>
        </div>
        <i class="fas fa-check-circle" style="color:var(--primary); font-size:1.5rem;"></i>
      `;
      list.appendChild(div);
    });
  } catch(error) {
    console.error("Error cargando peixdex", error);
  }
};

window.loadRanking = async () => {
  if (!window.db) return;
  const list = document.getElementById('ranking-list');
  list.innerHTML = '<p class="loading"><i class="fas fa-spinner fa-spin"></i> Calculando rankings...</p>';

  try {
    const snapshot = await window.db.collection('capturas').get();
    
    const userCounts = {};
    let maxPeso = { peso: 0, user: '', especie: '' };
    let maxLong = { longitud: 0, user: '', especie: '' };

    snapshot.forEach(doc => {
      const data = doc.data();
      
      // Contar por usuario
      if(!userCounts[data.usuarioNombre]) userCounts[data.usuarioNombre] = 0;
      userCounts[data.usuarioNombre]++;

      // Récord peso
      if(data.peso && parseFloat(data.peso) > maxPeso.peso) {
        maxPeso = { peso: parseFloat(data.peso), user: data.usuarioNombre, especie: data.especie };
      }
      
      // Récord longitud
      if(data.longitud && parseFloat(data.longitud) > maxLong.longitud) {
        maxLong = { longitud: parseFloat(data.longitud), user: data.usuarioNombre, especie: data.especie };
      }
    });

    // Ordenar usuarios por capturas
    const sortedUsers = Object.entries(userCounts).sort((a,b) => b[1] - a[1]);
    
    let html = `
      <div>
        <h3 style="color:var(--accent); border-bottom:1px solid #334155; padding-bottom:5px;">🏆 Top Pescadores</h3>
        ${sortedUsers.map((u, i) => `
          <div style="display:flex; justify-content:space-between; padding:8px 0;">
            <span><strong>${i+1}.</strong> ${u[0]}</span>
            <span style="background:var(--primary); padding:2px 8px; border-radius:12px; font-size:0.8rem;">${u[1]} peces</span>
          </div>
        `).join('')}
      </div>
      
      <div>
        <h3 style="color:var(--accent); border-bottom:1px solid #334155; padding-bottom:5px;">⚖️ Récord de Peso</h3>
        <p>${maxPeso.user} con un <strong>${maxPeso.especie}</strong> de <strong>${maxPeso.peso} kg</strong></p>
      </div>

      <div>
        <h3 style="color:var(--accent); border-bottom:1px solid #334155; padding-bottom:5px;">📏 Récord de Longitud</h3>
        <p>${maxLong.user} con un <strong>${maxLong.especie}</strong> de <strong>${maxLong.longitud} cm</strong></p>
      </div>
    `;

    list.innerHTML = html;
  } catch(error) {
    console.error("Error calculando ranking", error);
  }
};

window.openPerfil = async (userId, userName) => {
  if (!window.db) return;
  document.getElementById('modal-perfil').style.display = 'flex';
  document.getElementById('perfil-title').innerHTML = `<i class="fas fa-user-circle"></i> ${userName}`;
  
  const feed = document.getElementById('perfil-feed');
  feed.innerHTML = '<p class="loading">Cargando...</p>';

  try {
    const snapshot = await window.db.collection('capturas')
      .where('usuarioId', '==', userId)
      .orderBy('createdAt', 'desc')
      .get();
      
    feed.innerHTML = '';
    document.getElementById('perfil-total').textContent = snapshot.size;
    
    if (snapshot.empty) {
      feed.innerHTML = '<p style="text-align:center;">Sin capturas.</p>';
      return;
    }

    snapshot.forEach(doc => {
      feed.appendChild(window.createCapturaCard(doc.data()));
    });
  } catch (error) {
    console.error("Error leyendo perfil:", error);
    feed.innerHTML = '<p class="error-msg">Requiere índice de Firestore.</p>';
  }
};
