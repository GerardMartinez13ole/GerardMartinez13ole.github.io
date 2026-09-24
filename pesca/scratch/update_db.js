const fs = require('fs');

let content = fs.readFileSync('db.js', 'utf8');

const replacement = `
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
          const especieId = especie.toLowerCase().replace(/\\s+/g, '-');
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
      }`;

content = content.replace(/(?:\/\/\s*3\.\s*Crear objeto de captura\s*)const captura = \{[\s\S]*?alert\('Captura guardada amb èxit!'\);/, replacement.trim());

fs.writeFileSync('db.js', content, 'utf8');
console.log("Success");

