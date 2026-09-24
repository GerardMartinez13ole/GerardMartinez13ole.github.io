// db.js - Lógica de Base de Datos Firestore y Storage

document.addEventListener('DOMContentLoaded', () => {
  const formCaptura = document.getElementById('form-captura');
  const btnGuardar = document.getElementById('btn-guardar-captura');

  // Guardar nueva captura
  formCaptura.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!window.db || !window.currentUser) {
      alert("Error: Base de dades no connectada o usuari no loguejat.");
      return;
    }

    // Cambiar estado del botón
    const originalBtnHTML = btnGuardar.innerHTML;
    btnGuardar.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Guardant...';
    btnGuardar.disabled = true;

    try {
      // 1. Recoger datos del formulario
      let especie = document.getElementById('cap-especie').value.trim();
      if (especie === 'Altre') {
        especie = document.getElementById('cap-especie-altre').value.trim();
      }
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

      // 2. Subir foto a Firebase Storage
      if (file && window.firebase && firebase.storage) {
        const storageRef = firebase.storage().ref();
        const fileName = `capturas/${window.currentUser.uid}/${Date.now()}_${file.name}`;
        const imageRef = storageRef.child(fileName);
        
        const snapshot = await imageRef.put(file);
        fotoUrl = await snapshot.ref.getDownloadURL();
      }

      // Procesar fecha y hora custom si el usuario la puso
      let fechaFinal = firebase.firestore.FieldValue.serverTimestamp();
      let horaStr = "";
      if (fechaInput) {
        const d = new Date(fechaInput);
        fechaFinal = firebase.firestore.Timestamp.fromDate(d);
        horaStr = d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
      }

      if (window.editingCapturaId) {
        // EDICIÓN
        const updateData = {
          especie: especie,
          peso: peso || null,
          longitud: longitud || null,
          modalidad: modalidad || null,
          cebo: cebo || null,
          equipo: equipo || null,
          tiempoLucha: tiempo || null,
          sitio: sitio,
          descripcion: descripcion || null
        };
        
        if (fotoUrl) updateData.fotoUrl = fotoUrl;
        
        if (fechaInput) {
          updateData.fecha = fechaFinal;
          updateData.horaStr = horaStr;
        }

        await window.db.collection('capturas').doc(window.editingCapturaId).update(updateData);
        alert('Captura actualitzada amb èxit!');
        
        // Limpiar estado
        window.editingCapturaId = null;
        document.getElementById('btn-guardar-captura').innerHTML = '<i class="fas fa-save"></i> Guardar Captura';
      } else {
        // NUEVA CAPTURA
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
          usuarioNombre: window.currentUser.displayName || window.currentUser.email.split('@')[0],
          fecha: fechaFinal,
          horaStr: horaStr,
          createdAt: firebase.firestore.FieldValue.serverTimestamp() // Para orden interno
        };

        await window.db.collection('capturas').add(captura);

        // Lógica Peixdex: Añadir especie si no existe
        if (especie) {
          const especieId = especie.toLowerCase().replace(/\s+/g, '-');
          const peixdexRef = window.db.collection('peixdex').doc(especieId);
          const doc = await peixdexRef.get();
          if (!doc.exists) {
            await peixdexRef.set({
              nombreOficial: especie,
              descubridor: window.currentUser.displayName || window.currentUser.email.split('@')[0],
              fechaDescubrimiento: firebase.firestore.FieldValue.serverTimestamp()
            });
          }
        }
        alert('Captura guardada amb èxit!');
      }
            formCaptura.reset();
      document.getElementById('foto-preview').style.display = 'none';
      document.getElementById('foto-text').textContent = 'Pujar foto del peix';
      const especieAltreReset = document.getElementById('cap-especie-altre');
      if (especieAltreReset) {
        especieAltreReset.style.display = 'none';
        especieAltreReset.required = false;
      }
      
      // Volver al muro
      document.querySelector('[data-target="muro"]').click();

    } catch (error) {
      console.error("Error guardando captura: ", error);
      alert("Hi ha hagut un error al guardar. Assegura't de tenir configurat Firebase Storage si has intentat pujar foto.");
    } finally {
      btnGuardar.innerHTML = originalBtnHTML;
      btnGuardar.disabled = false;
    }
  });
});

// Cargar Mur Públic
window.loadMuro = async () => {
  if (!window.db) return;
  const feed = document.getElementById('feed-muro');
  feed.innerHTML = '<p class="loading"><i class="fas fa-spinner fa-spin"></i> Carregant captures...</p>';

  try {
    // Usamos createdAt para ordenar de forma segura
    const snapshot = await window.db.collection('capturas')
      .orderBy('createdAt', 'desc')
      .limit(30)
      .get();
      
    feed.innerHTML = ''; 
    
    
    const grid = document.getElementById('peixdex-grid');
    const caught = {};
    const especiesOficiales = [
      'Agulla', 'Anguila', 'Atun blanc', 'Atun roig', 'Bacoreta', 'Barb', 'Barracuda', 
      'Blackbass', 'Brema', 'Calamar', 'Caprí', 'Carpa', 'Catxo', 'Cavalla', 'Esturió', 
      'Jurel', 'Llampuga', 'Llisal', 'Llobarro', 'Lucio', 'Lucioperca', 'Mero', 
      'Muixarra / Dorada', 'Palometa', 'Peix gat de canal', 'Peix gat negre', 'Saboga', 
      'Sarg', 'Sepia', 'Silur', 'Tallahams', 'Trucha'
    ];

    if (snapshot.empty) {
      feed.innerHTML = '<p style="text-align:center; color:var(--text-muted); margin-top:30px;">Encara no has registrat res. Ves a pescar!</p>';
    } else {
      snapshot.forEach(doc => {
        const data = doc.data();
        data.id = doc.id;
        
        const esp = data.especie;
        if (esp) {
          const espMatch = especiesOficiales.find(e => e.toLowerCase() === esp.toLowerCase());
          const finalEsp = espMatch || esp; 
          
          if (!caught[finalEsp]) {
            caught[finalEsp] = { count: 0, maxPeso: 0, maxLong: 0 };
          }
          caught[finalEsp].count++;
          if (data.peso && parseFloat(data.peso) > caught[finalEsp].maxPeso) caught[finalEsp].maxPeso = parseFloat(data.peso);
          if (data.longitud && parseFloat(data.longitud) > caught[finalEsp].maxLong) caught[finalEsp].maxLong = parseFloat(data.longitud);
        }

        const card = window.createCapturaCard(data);
        feed.appendChild(card);
        if (window.cargarComentarios) window.cargarComentarios(data.id);
      });
    }

    if (window.renderAlbum) {
      window.renderAlbum(caught, grid, false);
    }
  } catch (error) {
    console.error("Error leyendo muro:", error);
    feed.innerHTML = "<p class='error-msg'>Error al carregar. Assegura't que les regles de Firestore permeten lectura.</p>";
  }
};

// Cargar Mi Registro
window.loadPersonalRegistro = async () => {
  if (!window.db || !window.currentUser) return;
  const feed = document.getElementById('feed-personal');
  feed.innerHTML = '<p class="loading"><i class="fas fa-spinner fa-spin"></i> Carregant les teves captures...</p>';

  try {
    const snapshot = await window.db.collection('capturas')
      .where('usuarioId', '==', window.currentUser.uid)
      .orderBy('createdAt', 'desc')
      .get();
      
    feed.innerHTML = '';
    
    if (snapshot.empty) {
      feed.innerHTML = '<p style="text-align:center; color:var(--text-muted); margin-top:30px;">Encara no has registrat res. Ves a pescar!</p>';
      return;
    }

    snapshot.forEach(doc => {
      const data = doc.data();
      data.id = doc.id;
      const card = window.createCapturaCard(data);
      feed.appendChild(card);
      if (window.cargarComentarios) window.cargarComentarios(data.id);
    });
  } catch (error) {
    console.error("Error leyendo registro personal:", error);
    if (error.message.includes('index')) {
       feed.innerHTML = '<p class="error-msg">Requereix un índex a Firestore per ordenar per createdAt. <a href="https://console.firebase.google.com/" target="_blank" style="color:white">Revisa la consola</a>.</p>';
    } else {
       feed.innerHTML = '<p class="error-msg">Error al carregar captures. Revisa consola.</p>';
    }
  }
};

// ==============================
// FASE 2: CAÑADEX
// ==============================

// Guardar nueva Canya/Equipo
document.addEventListener('DOMContentLoaded', () => {
  const formCanadex = document.getElementById('form-canadex');
  if(formCanadex) {
    formCanadex.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!window.db || !window.currentUser) return;
      
      const btnGuardar = document.getElementById('btn-guardar-cana');
      const originalHtml = btnGuardar.innerHTML;
      btnGuardar.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Guardant...';
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
        alert("Hi ha hagut un error al guardar el teu equip.");
      } finally {
        btnGuardar.innerHTML = originalHtml;
        btnGuardar.disabled = false;
      }
    });
  }
});

// Cargar Els meus Equips en la pestaña Canyadex
window.loadCanadex = async () => {
  if (!window.db || !window.currentUser) return;
  const feed = document.getElementById('feed-canadex');
  feed.innerHTML = '<p class="loading"><i class="fas fa-spinner fa-spin"></i> Carregant els teus equips...</p>';

  try {
    const snapshot = await window.db.collection('canadex')
      .where('usuarioId', '==', window.currentUser.uid)
      .orderBy('createdAt', 'desc')
      .get();
      
    feed.innerHTML = '';
    
    if (snapshot.empty) {
      feed.innerHTML = '<p style="text-align:center; color:var(--text-muted); margin-top:30px;">Encara no tens cap equip registrat.</p>';
      return;
    }

    snapshot.forEach(doc => {
      const card = window.createCanadexCard(doc.data());
      feed.appendChild(card);
    });
  } catch (error) {
    console.error("Error leyendo canadex:", error);
    if (error.message.includes('index')) {
       feed.innerHTML = '<p class="error-msg">Requereix índex per createdAt a canadex.</p>';
    } else {
       feed.innerHTML = '<p class="error-msg">Error al carregar equips.</p>';
    }
  }
};

// Cargar mis equipos en el desplegable de Nova Captura
window.loadEquiposToSelect = async () => {
  if (!window.db || !window.currentUser) return;
  const select = document.getElementById('cap-equipo');
  
  // Guardamos la primera opción
  const defaultOption = '<option value="">Cap / Selecciona un...</option>';
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

// Cargar sitios del mapa en el desplegable de Nova Captura
window.loadSitiosToSelect = async () => {
  if (!window.db) return;
  const select = document.getElementById('cap-sitio');
  
  const defaultOption = '<option value="">Selecciona una ubicació del mapa...</option>';
  select.innerHTML = defaultOption;

  try {
    // Cargamos todos los puntos (así no hace falta índice) y filtramos en frontend
    const snapshot = await window.db.collection('mapa_puntos').get();
    
    // Agrupar por tipos
    const optionsHtml = [];
    
    snapshot.forEach(doc => {
      const data = doc.data();
      // No incluimos tiendas en los sitios de pesca
      if(data.tipo !== 'tienda') {
        let emoji = '📍';
        if(data.tipo === 'pescar') emoji = '🎣';
        else if(data.tipo === 'investigar') emoji = '🔍';
        else if(data.tipo === 'dificil') emoji = '⚠️';
        
        optionsHtml.push(`<option value="${data.nombre}">${emoji} ${data.nombre}</option>`);
      }
    });
    
    if(optionsHtml.length > 0) {
      select.innerHTML += optionsHtml.join('');
    } else {
      select.innerHTML = '<option value="">(No hi ha zones al mapa comunitari)</option>';
    }

  } catch(error) {
    console.error("Error cargando sitios al select:", error);
  }
};

// ==============================
// FASE 4: PEIXDEX Y RANKING
// ==============================



window.loadRanking = async () => {
  if (!window.db) return;
  const list = document.getElementById('ranking-list');
  list.innerHTML = '<p class="loading"><i class="fas fa-spinner fa-spin"></i> Calculant classificacions...</p>';

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
        <h3 style="color:var(--accent); border-bottom:1px solid #334155; padding-bottom:5px;">🏆 Top Pescadors</h3>
        ${sortedUsers.map((u, i) => `
          <div style="display:flex; justify-content:space-between; padding:8px 0;">
            <span><strong>${i+1}.</strong> ${u[0]}</span>
            <span style="background:var(--primary); padding:2px 8px; border-radius:12px; font-size:0.8rem;">${u[1]} peixos</span>
          </div>
        `).join('')}
      </div>
      
      <div>
        <h3 style="color:var(--accent); border-bottom:1px solid #334155; padding-bottom:5px;">⚖️ Rècord de Pes</h3>
        <p>${maxPeso.user} amb un <strong>${maxPeso.especie}</strong> de <strong>${maxPeso.peso} kg</strong></p>
      </div>

      <div>
        <h3 style="color:var(--accent); border-bottom:1px solid #334155; padding-bottom:5px;">📏 Rècord de Longitud</h3>
        <p>${maxLong.user} amb un <strong>${maxLong.especie}</strong> de <strong>${maxLong.longitud} cm</strong></p>
      </div>
    `;

    list.innerHTML = html;
  } catch(error) {
    console.error("Error calculando ranking", error);
  }
};

window.openPerfil = async (userId, userName) => {
  if (!window.db) return;
  
  // Usar switchTab en lugar del modal
  window.switchTab('perfil', `Perfil de ${userName}`);
  document.getElementById('perfil-title').textContent = userName;
  
  const feedCapturas = document.getElementById('perfil-feed-capturas');
  const feedEquipos = document.getElementById('perfil-feed-equipos');
  
  feedCapturas.innerHTML = '<p class="loading">Carregant peixdex...</p>';
  feedEquipos.innerHTML = '<p class="loading">Carregant canyadex...</p>';
  document.getElementById('perfil-total').textContent = '...';

  try {
    // 1. Cargar Peixdex (Capturas)
    const snapCapturas = await window.db.collection('capturas')
      .where('usuarioId', '==', userId)
      .orderBy('createdAt', 'desc')
      .get();
      
    feedCapturas.innerHTML = '';
    document.getElementById('perfil-total').textContent = snapCapturas.size;
    
    const grid = document.getElementById('perfil-peixdex-grid');
    const caught = {};
    const especiesOficiales = [
      'Agulla', 'Anguila', 'Atun blanc', 'Atun roig', 'Bacoreta', 'Barb', 'Barracuda', 
      'Blackbass', 'Brema', 'Calamar', 'Caprí', 'Carpa', 'Catxo', 'Cavalla', 'Esturió', 
      'Jurel', 'Llampuga', 'Llisal', 'Llobarro', 'Lucio', 'Lucioperca', 'Mero', 
      'Muixarra / Dorada', 'Palometa', 'Peix gat de canal', 'Peix gat negre', 'Saboga', 
      'Sarg', 'Sepia', 'Silur', 'Tallahams', 'Trucha'
    ];

    if (snapCapturas.empty) {
      feedCapturas.innerHTML = '<p style="text-align:center; color:var(--text-muted);">Sense captures encara.</p>';
    } else {
      snapCapturas.forEach(doc => {
        const data = doc.data();
        data.id = doc.id;
        
        const esp = data.especie;
        if (esp) {
          const espMatch = especiesOficiales.find(e => e.toLowerCase() === esp.toLowerCase());
          const finalEsp = espMatch || esp; 
          
          if (!caught[finalEsp]) {
            caught[finalEsp] = { count: 0, maxPeso: 0, maxLong: 0 };
          }
          caught[finalEsp].count++;
          if (data.peso && parseFloat(data.peso) > caught[finalEsp].maxPeso) caught[finalEsp].maxPeso = parseFloat(data.peso);
          if (data.longitud && parseFloat(data.longitud) > caught[finalEsp].maxLong) caught[finalEsp].maxLong = parseFloat(data.longitud);
        }

        feedCapturas.appendChild(window.createCapturaCard(data));
        if (window.cargarComentarios) window.cargarComentarios(data.id);
      });
    }

    if (window.renderAlbum) {
      window.renderAlbum(caught, grid, true); // true = isPerfil
    }

    // 2. Cargar Canyadex (Equipos)

    // 2. Cargar Canyadex (Equipos)
    const snapEquipos = await window.db.collection('canadex')
      .where('usuarioId', '==', userId)
      .orderBy('createdAt', 'desc')
      .get();
      
    feedEquipos.innerHTML = '';
    
    if (snapEquipos.empty) {
      feedEquipos.innerHTML = '<p style="text-align:center; color:var(--text-muted);">No té equips registrats.</p>';
    } else {
      snapEquipos.forEach(doc => {
        feedEquipos.appendChild(window.createCanadexCard(doc.data()));
      });
    }

  } catch (error) {
    console.error("Error leyendo perfil:", error);
    feedCapturas.innerHTML = '<p class="error-msg">Error carregant dades del perfil.</p>';
    feedEquipos.innerHTML = '';
  }
};

// ==============================
// FASE 5: SOCIAL Y GESTIÓN
// ==============================

// Borrar una captura propia
window.borrarCaptura = async (capturaId) => {
  if (!window.db || !window.currentUser) return;
  const confirmar = confirm("Estàs segur que vols esborrar aquesta captura? Aquesta acció no es pot desfer.");
  if (!confirmar) return;

  try {
    await window.db.collection('capturas').doc(capturaId).delete();
    alert("Captura eliminada correctament.");
    // Recargar vistas para reflejar los cambios
    if (document.getElementById('tab-muro').classList.contains('active')) {
      window.loadMuro();
    } else if (document.getElementById('tab-registro').classList.contains('active')) {
      window.loadPersonalRegistro();
    }
  } catch (error) {
    console.error("Error borrando captura:", error);
    alert("Error a l'esborrar. Comprova que tinguis permisos.");
  }
};

// Alternar panel de comentarios y cargar
window.toggleComentarios = (capturaId) => {
  const container = document.getElementById(`comentarios-${capturaId}`);
  if (container.style.display === 'none') {
    container.style.display = 'block';
    window.cargarComentarios(capturaId);
  } else {
    container.style.display = 'none';
  }
};

// Cargar comentarios
window.cargarComentarios = async (capturaId) => {
  if (!window.db) return;
  const lista = document.getElementById(`lista-comentarios-${capturaId}`);
  lista.innerHTML = '<p style="color:var(--text-muted); font-size:0.85rem;">Carregant...</p>';

  try {
    const snapshot = await window.db.collection('capturas').doc(capturaId).collection('comentarios')
      .orderBy('createdAt', 'asc')
      .get();
      
    lista.innerHTML = '';
    
    if (snapshot.empty) {
      lista.innerHTML = '<p style="color:var(--text-muted); font-size:0.85rem;">No hi ha comentaris encara. Escriu alguna cosa!</p>';
      return;
    }

    snapshot.forEach(doc => {
      const cData = doc.data();
      const div = document.createElement('div');
      div.style = 'background: rgba(255,255,255,0.05); padding:8px; border-radius:8px;';
      div.innerHTML = `
        <div style="font-size:0.8rem; color:var(--accent); margin-bottom:2px;">
          <i class="fas fa-user"></i> <strong>${cData.usuarioNombre}</strong>
        </div>
        <div style="font-size:0.9rem; color:var(--text-main);">${cData.texto}</div>
      `;
      lista.appendChild(div);
    });
    
    // Auto-scroll al fondo
    lista.scrollTop = lista.scrollHeight;
  } catch(error) {
    console.error("Error cargando comentarios:", error);
    lista.innerHTML = '<p class="error-msg" style="font-size:0.85rem;">Error al carregar comentaris.</p>';
  }
};

// Enviar un comentario
window.enviarComentario = async (capturaId) => {
  if (!window.db || !window.currentUser) {
    alert("Has d'iniciar sessió per comentar.");
    return;
  }
  
  const input = document.getElementById(`input-comentario-${capturaId}`);
  const texto = input.value.trim();
  if (!texto) return;
  
  // Deshabilitar input temporalmente
  input.disabled = true;

  try {
    await window.db.collection('capturas').doc(capturaId).collection('comentarios').add({
      usuarioId: window.currentUser.uid,
      usuarioNombre: window.currentUser.displayName || window.currentUser.email.split('@')[0],
      texto: texto,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    
    input.value = '';
    window.cargarComentarios(capturaId); // Recargar
  } catch (error) {
    console.error("Error enviando comentario:", error);
    alert("No s'ha pogut enviar el comentari.");
  } finally {
    input.disabled = false;
  }
};
