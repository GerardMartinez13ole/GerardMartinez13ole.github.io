/**
 * ============================================================
 *  APP.JS — Orquestador Principal
 *
 *  Responsabilidades:
 *   1. Registrar el Service Worker (PWA offline)
 *   2. Instanciar ThreeScene y TextureEditor
 *   3. Conectar el puente 2D → 3D (onChange → applyTexture)
 *   4. Vincular toda la UI (tabs, controles, presets)
 *   5. Gestionar proyectos con IndexedDB (guardar/cargar)
 *   6. Exportación (textura 2K PNG + vista 3D)
 *
 *  Imports:
 *   - ThreeScene      (three-scene.js)
 *   - TextureEditor   (texture-editor.js)
 *   - PATTERNS        (texture-editor.js)
 * ============================================================
 */

import { ThreeScene }               from './three-scene.js';
import { TextureEditor, PATTERNS }  from './texture-editor.js';


// ────────────────────────────────────────────
//  CONSTANTES
// ────────────────────────────────────────────

const PRESETS = [
  '#1a5fb4','#e01b24','#f5c211','#26a269','#000000','#ffffff',
  '#9141ac','#ff7800','#1c71d8','#c01c28','#2ec27e','#613583',
  '#e66100','#62a0ea','#f8e45c','#dc8add',
];

// Modelos 3D disponibles en la carpeta assets/
// Actualiza este array con los nombres reales de tus modelos .glb
const AVAILABLE_MODELS = [
  'assets/base-model.glb',
  'assets/base-model.glb' // Duplicado temporal - reemplaza con modelos reales
];


// ────────────────────────────────────────────
//  INSTANCIAS
// ────────────────────────────────────────────

/** @type {ThreeScene} */
let scene;

/** @type {TextureEditor} */
let editor;

/** @type {ProjectDB} */
let db;


// ════════════════════════════════════════════
//  1. SERVICE WORKER (PWA)
// ════════════════════════════════════════════

async function registerSW() {
  if ('serviceWorker' in navigator) {
    try {
      const reg = await navigator.serviceWorker.register('./sw.js');
      setStatus('PWA Offline Ready');
    } catch (err) {
      setStatus('Modo Online');
    }
  }
}


// ════════════════════════════════════════════
//  2. INDEXEDDB — Persistencia de Proyectos
// ════════════════════════════════════════════

class ProjectDB {
  constructor() {
    this.dbName    = 'KitCreator3D';
    this.storeName = 'projects';
    this.db        = null;
  }

  /** Abre (o crea) la base de datos */
  open() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(this.dbName, 1);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(this.storeName)) {
          db.createObjectStore(this.storeName, { keyPath: 'id' });
        }
      };
      req.onsuccess = (e) => { this.db = e.target.result; resolve(); };
      req.onerror   = ()  => reject(req.error);
    });
  }

  /** Guarda (o actualiza) un proyecto */
  save(project) {
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(this.storeName, 'readwrite');
      tx.objectStore(this.storeName).put(project);
      tx.oncomplete = resolve;
      tx.onerror    = () => reject(tx.error);
    });
  }

  /** Carga un proyecto por ID */
  load(id) {
    return new Promise((resolve, reject) => {
      const tx  = this.db.transaction(this.storeName, 'readonly');
      const req = tx.objectStore(this.storeName).get(id);
      req.onsuccess = () => resolve(req.result);
      req.onerror   = () => reject(req.error);
    });
  }

  /** Lista todos los proyectos guardados */
  list() {
    return new Promise((resolve, reject) => {
      const tx  = this.db.transaction(this.storeName, 'readonly');
      const req = tx.objectStore(this.storeName).getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror   = () => reject(req.error);
    });
  }

  /** Elimina un proyecto por ID */
  delete(id) {
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(this.storeName, 'readwrite');
      tx.objectStore(this.storeName).delete(id);
      tx.oncomplete = resolve;
      tx.onerror    = () => reject(tx.error);
    });
  }
}


// ════════════════════════════════════════════
//  3. INICIALIZACIÓN
// ════════════════════════════════════════════

async function init() {
  console.log('Iniciando aplicación...');

  // 1. Service Worker
  registerSW();

  // 2. IndexedDB
  db = new ProjectDB();
  try { await db.open(); } catch (e) {}

  // 3. TextureEditor (2048×2048 canvas + preview interactivo)
  editor = new TextureEditor('tex-preview');

  // 4. ThreeScene (visor 3D)
  scene = new ThreeScene('three-canvas', AVAILABLE_MODELS);
  scene.initMaterial(editor.getCanvas());
  scene.init();
  scene.loadModel();

  // 5. ✦ PUENTE 2D → 3D ✦
  // Cada cambio en el editor redibuja la textura y la sincroniza con el modelo 3D
  editor.onChange(() => {
    const canvas = editor.getCanvas();
    scene.applyTexture(canvas);
  });

  // Aplicar textura inicial
  scene.applyTexture(editor.getCanvas());

  // 6. Vincular toda la UI
  console.log('Vinculando componentes de UI...');
  bindTabs();
  bindColorPresets();
  bindBaseControls();
  bindPatternGrid();
  bindPatternControls();
  bindLogoControls();
  bindTextControls();
  bindSceneControls();
  bindProjectControls();
  bindExportControls();
  bindJsonControls();

  toast('¡Bienvenido al Kit Creator 3D! 🎨', 'info');
  console.log('Aplicación inicializada correctamente');
}


// ════════════════════════════════════════════
//  4. UI — TABS
// ════════════════════════════════════════════

function bindTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      // Desactivar todas
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      // Activar seleccionada
      btn.classList.add('active');
      const panel = document.getElementById(`panel-${btn.dataset.tab}`);
      if (panel) panel.classList.add('active');
    });
  });
}


// ════════════════════════════════════════════
//  5. UI — COLOR BASE
// ════════════════════════════════════════════

function bindColorPresets() {
  const container = document.getElementById('color-presets');
  PRESETS.forEach(color => {
    const dot = document.createElement('button');
    dot.className = 'preset-dot';
    dot.style.backgroundColor = color;
    dot.title = color;
    dot.addEventListener('click', () => {
      document.getElementById('base-color').value = color;
      document.getElementById('base-color-hex').textContent = color.toUpperCase();
      editor.setBaseColor(color);
      container.querySelectorAll('.preset-dot').forEach(d => d.classList.remove('on'));
      dot.classList.add('on');
    });
    container.appendChild(dot);
  });
}

function bindBaseControls() {
  colorHook('base-color',      'base-color-hex',      (c) => editor.setBaseColor(c));
  colorHook('secondary-color', 'secondary-color-hex', (c) => editor.setSecondaryColor(c));
  colorHook('collar-color',    'collar-color-hex',    (c) => editor.setCollarColor(c));
}

/** Atajo: vincula un input color + hex label a un setter */
function colorHook(inputId, hexId, setter) {
  const inp = document.getElementById(inputId);
  const hex = document.getElementById(hexId);
  inp.addEventListener('input', (e) => {
    hex.textContent = e.target.value.toUpperCase();
    setter(e.target.value);
  });
}


// ════════════════════════════════════════════
//  6. UI — PATRONES
// ════════════════════════════════════════════

function bindPatternGrid() {
  const grid = document.getElementById('pat-grid');

  PATTERNS.forEach(def => {
    const sw = document.createElement('div');
    sw.className = 'pat-swatch' + (def.id === 'none' ? ' on' : '');
    sw.dataset.id = def.id;
    sw.title = def.name;

    const c = document.createElement('canvas');
    c.width = 60; c.height = 60;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#334155';
    ctx.fillRect(0, 0, 60, 60);
    if (def.draw) {
      ctx.globalAlpha = 0.7;
      def.draw(ctx, 60, 60, '#ffffff', 10);
    } else {
      ctx.strokeStyle = '#64748b';
      ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(5, 55); ctx.lineTo(55, 5); ctx.stroke();
    }

    sw.appendChild(c);
    sw.addEventListener('click', () => {
      grid.querySelectorAll('.pat-swatch').forEach(s => s.classList.remove('on'));
      sw.classList.add('on');
      editor.setPattern(
        def.id,
        document.getElementById('pat-color').value,
        parseInt(document.getElementById('pat-op').value) / 100,
        parseInt(document.getElementById('pat-sc').value)
      );
    });
    grid.appendChild(sw);
  });
}

function bindPatternControls() {
  colorHook('pat-color', 'pat-color-hex', (c) => editor.setPatternColor(c));

  const opIn = document.getElementById('pat-op');
  const opV  = document.getElementById('pat-op-v');
  opIn.addEventListener('input', () => {
    opV.textContent = opIn.value + '%';
    editor.setPatternOpacity(parseInt(opIn.value) / 100);
  });

  const scIn = document.getElementById('pat-sc');
  const scV  = document.getElementById('pat-sc-v');
  scIn.addEventListener('input', () => {
    scV.textContent = (parseInt(scIn.value) / 40).toFixed(1) + 'x';
    editor.setPatternScale(parseInt(scIn.value));
  });

  document.getElementById('btn-clear-pat').addEventListener('click', () => {
    editor.clearPattern();
    document.querySelectorAll('.pat-swatch').forEach(s => s.classList.remove('on'));
    document.querySelector('.pat-swatch[data-id="none"]')?.classList.add('on');
  });
}


// ════════════════════════════════════════════
//  7. UI — LOGOS
// ════════════════════════════════════════════

function bindLogoControls() {
  const zone  = document.getElementById('upload-zone');
  const input = document.getElementById('file-input');
  const list  = document.getElementById('logo-list');
  const ctrls = document.getElementById('logo-ctrls');

  // Click → file dialog
  zone.addEventListener('click', () => input.click());

  // File selected
  input.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        await editor.addLogo(file);
        renderLogoList();
        toast(`Logo "${file.name}" añadido ✓`, 'ok');
      } catch (err) {
        toast(String(err), 'warn');
      }
    }
    input.value = '';
  });

  // Drag & Drop
  zone.addEventListener('dragover', (e) => { e.preventDefault(); zone.classList.add('drag-over'); });
  zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
  zone.addEventListener('drop', async (e) => {
    e.preventDefault();
    zone.classList.remove('drag-over');
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      try {
        await editor.addLogo(file);
        renderLogoList();
        toast(`Logo "${file.name}" añadido ✓`, 'ok');
      } catch (err) { toast(String(err), 'warn'); }
    }
  });

  // Logo position/size sliders
  const lx = document.getElementById('logo-x');
  const ly = document.getElementById('logo-y');
  const ls = document.getElementById('logo-s');

  const refreshSliders = () => {
    const logo = editor.getSelectedLogo();
    if (!logo) return;
    // Slider values are already in UI coordinates (0% top, 100% bottom)
    editor.updateLogo(logo.id, {
      x: parseInt(lx.value) / 100,
      y: parseInt(ly.value) / 100,
      size: parseInt(ls.value) / 100,
    });
    document.getElementById('lx-v').textContent = lx.value + '%';
    document.getElementById('ly-v').textContent = ly.value + '%';
    document.getElementById('ls-v').textContent = ls.value + '%';
  };

  lx.addEventListener('input', refreshSliders);
  ly.addEventListener('input', refreshSliders);
  ls.addEventListener('input', refreshSliders);

  /** Renderiza la lista delogos en el panel */
  function renderLogoList() {
    list.innerHTML = '';
    editor.state.logos.forEach((logo) => {
      const item = document.createElement('div');
      item.className = 'logo-item';
      item.innerHTML = `
        <img src="${logo.dataUrl}" alt="${logo.name}" />
        <span class="name">${logo.name}</span>
        <button class="rm" data-id="${logo.id}" title="Eliminar">✕</button>
      `;
      item.addEventListener('click', () => {
        editor.selectLogo(logo.id);
        // Actualizar sliders
        lx.value = Math.round(logo.x * 100);
        ly.value = Math.round(logo.y * 100);
        ls.value = Math.round(logo.size * 100);
        document.getElementById('lx-v').textContent = lx.value + '%';
        document.getElementById('ly-v').textContent = ly.value + '%';
        document.getElementById('ls-v').textContent = ls.value + '%';
        ctrls.style.display = 'flex';
        // Highlight
        list.querySelectorAll('.logo-item').forEach(i => i.classList.remove('selected'));
        item.classList.add('selected');
      });
      item.querySelector('.rm').addEventListener('click', (e) => {
        e.stopPropagation();
        editor.removeLogo(logo.id);
        renderLogoList();
        if (editor.state.logos.length === 0) ctrls.style.display = 'none';
      });
      list.appendChild(item);
    });
  }

  // Expose for project load
  window._renderLogoList = renderLogoList;
}


// ════════════════════════════════════════════
//  8. UI — TEXTOS
// ════════════════════════════════════════════

function bindTextControls() {
  const nameIn    = document.getElementById('p-name');
  const nameFont  = document.getElementById('name-font');
  const nameColor = document.getElementById('name-color');
  const nameSz    = document.getElementById('name-sz');
  const namePrev  = document.getElementById('name-prev');

  const numIn    = document.getElementById('p-number');
  const numFont  = document.getElementById('num-font');
  const numColor = document.getElementById('num-color');
  const numSz    = document.getElementById('num-sz');

  const syncName = () => {
    editor.setName(
      nameIn.value,
      nameFont.value,
      nameColor.value,
      parseInt(nameSz.value)
    );
    namePrev.textContent = nameIn.value.toUpperCase() || 'NOMBRE';
    document.getElementById('name-sz-v').textContent = nameSz.value;
  };

  const syncNum = () => {
    editor.setNumber(
      numIn.value,
      numFont.value,
      numColor.value,
      parseInt(numSz.value)
    );
    document.getElementById('num-sz-v').textContent = numSz.value;
  };

  nameIn.addEventListener('input', syncName);
  nameFont.addEventListener('change', () => {
    namePrev.style.fontFamily = `'${nameFont.value}', sans-serif`;
    syncName();
  });
  namePrev.style.fontFamily = `'${nameFont.value}', sans-serif`;
  nameColor.addEventListener('input', (e) => {
    document.getElementById('name-color-hex').textContent = e.target.value.toUpperCase();
    syncName();
  });
  nameSz.addEventListener('input', syncName);

  numIn.addEventListener('input', syncNum);
  numFont.addEventListener('change', syncNum);
  numColor.addEventListener('input', (e) => {
    document.getElementById('num-color-hex').textContent = e.target.value.toUpperCase();
    syncNum();
  });
  numSz.addEventListener('input', syncNum);
}


// ════════════════════════════════════════════
//  9. UI — ESCENA 3D
// ════════════════════════════════════════════

function bindSceneControls() {
  let autoRotate = true;
  const btnRotate = document.getElementById('btn-rotate');

  btnRotate.addEventListener('click', () => {
    autoRotate = !autoRotate;
    scene.setAutoRotate(autoRotate);
    btnRotate.classList.toggle('active', autoRotate);
    toast(autoRotate ? 'Auto-rotación ON' : 'Auto-rotación OFF', 'info');
  });

  document.getElementById('btn-reset-cam').addEventListener('click', () => scene.resetCamera());

  // View presets (frontal, trasera, izq, der)
  document.querySelectorAll('#scene-controls [data-view]').forEach(btn => {
    btn.addEventListener('click', () => scene.setCameraPreset(btn.dataset.view));
  });

  // Camera movement controls (arrow buttons)
  document.getElementById('btn-move-up').addEventListener('click', () => scene.moveUp(0.1));
  document.getElementById('btn-move-down').addEventListener('click', () => scene.moveDown(0.1));
  document.getElementById('btn-move-left').addEventListener('click', () => scene.moveLeft(0.1));
  document.getElementById('btn-move-right').addEventListener('click', () => scene.moveRight(0.1));

  // Cambiar modelo 3D
  const btnChangeModel = document.getElementById('btn-change-model');
  if (btnChangeModel) {
    // Hacerlo más visible temporalmente para debugging
    btnChangeModel.style.border = '2px solid #00ff00';
    btnChangeModel.style.backgroundColor = 'rgba(0,255,0,0.2)';

    btnChangeModel.addEventListener('click', () => {
      scene.nextModel();
      toast('Cambiando modelo 3D...', 'info');
    });
    console.log('Botón de cambio de modelo encontrado y vinculado');
  } else {
    console.error('Botón de cambio de modelo NO encontrado en el DOM');
  }
}


// ════════════════════════════════════════════
//  10. PROYECTOS — Guardar / Cargar (IndexedDB)
// ════════════════════════════════════════════

function bindProjectControls() {
  // ── Guardar ──
  document.getElementById('btn-save').addEventListener('click', async () => {
    const name = prompt('Nombre del proyecto:', `Kit ${new Date().toLocaleDateString()}`);
    if (!name) return;

    const project = {
      id:        crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
      name,
      timestamp: Date.now(),
      data:      editor.serialize(),
      camera:    scene.getCameraState(),
      modelIndex: scene.getModelIndex()
    };

    try {
      await db.save(project);
      toast(`Proyecto "${name}" guardado ✓`, 'ok');
    } catch (e) {
      toast('Error al guardar: ' + e, 'warn');
    }
  });

  // ── Cargar (abrir modal) ──
  const modal = document.getElementById('project-modal');
  const list  = document.getElementById('project-list');

  document.getElementById('btn-load').addEventListener('click', async () => {
    const projects = await db.list();
    list.innerHTML = '';

    if (projects.length === 0) {
      list.innerHTML = '<p class="empty">No hay proyectos guardados</p>';
    } else {
      // Ordenar por fecha (más reciente primero)
      projects.sort((a, b) => b.timestamp - a.timestamp);

      projects.forEach(p => {
        const date = new Date(p.timestamp).toLocaleString();
        const item = document.createElement('div');
        item.className = 'project-item';
        item.innerHTML = `
          <div class="info">
            <div class="pname">${p.name}</div>
            <div class="pdate">${date}</div>
          </div>
          <div class="actions">
            <button class="btn btn-ghost btn-sm load-btn" data-id="${p.id}">Abrir</button>
            <button class="btn btn-danger btn-sm del-btn" data-id="${p.id}">🗑</button>
          </div>
        `;

        // Abrir proyecto
        item.querySelector('.load-btn').addEventListener('click', async () => {
          try {
            const proj = await db.load(p.id);
            await editor.deserialize(proj.data);
            scene.applyTexture(editor.getCanvas());

            // Restaurar estado de cámara si existe
            if (proj.camera) {
              scene.setCameraState(proj.camera);
            }

            // Restaurar índice de modelo si existe
            if (proj.modelIndex !== undefined) {
              scene.setModelIndex(proj.modelIndex);
            }

            syncUIFromEditor();
            modal.style.display = 'none';
            toast(`Proyecto "${p.name}" cargado ✓`, 'ok');
          } catch (e) {
            toast('Error al cargar: ' + e, 'warn');
          }
        });

        // Eliminar proyecto
        item.querySelector('.del-btn').addEventListener('click', async (e) => {
          e.stopPropagation();
          if (confirm(`¿Eliminar "${p.name}"?`)) {
            await db.delete(p.id);
            item.remove();
            toast(`Proyecto "${p.name}" eliminado`, 'info');
            if (list.children.length === 0) {
              list.innerHTML = '<p class="empty">No hay proyectos guardados</p>';
            }
          }
        });

        list.appendChild(item);
      });
    }

    modal.style.display = 'flex';
  });

  // Cerrar modal
  document.getElementById('modal-close').addEventListener('click', () => {
    modal.style.display = 'none';
  });
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
  });
}

/**
 * Sincroniza los controles de la UI con el estado actual del editor.
 * Se usa tras cargar un proyecto desde IndexedDB.
 */
function syncUIFromEditor() {
  const s = editor.state;

  // Colores
  document.getElementById('base-color').value      = s.baseColor;
  document.getElementById('base-color-hex').textContent = s.baseColor.toUpperCase();
  document.getElementById('secondary-color').value = s.secondaryColor;
  document.getElementById('secondary-color-hex').textContent = s.secondaryColor.toUpperCase();
  document.getElementById('collar-color').value    = s.collarColor;
  document.getElementById('collar-color-hex').textContent = s.collarColor.toUpperCase();

  // Patrones
  document.getElementById('pat-color').value = s.pattern.color;
  document.getElementById('pat-color-hex').textContent = s.pattern.color.toUpperCase();
  document.getElementById('pat-op').value = Math.round(s.pattern.opacity * 100);
  document.getElementById('pat-op-v').textContent = Math.round(s.pattern.opacity * 100) + '%';
  document.getElementById('pat-sc').value = s.pattern.scale;
  document.getElementById('pat-sc-v').textContent = (s.pattern.scale / 40).toFixed(1) + 'x';
  document.querySelectorAll('.pat-swatch').forEach(sw => {
    sw.classList.toggle('on', sw.dataset.id === s.pattern.id);
  });

  // Texto
  document.getElementById('p-name').value    = s.name.text;
  document.getElementById('name-font').value = s.name.font;
  document.getElementById('name-color').value = s.name.color;
  document.getElementById('name-color-hex').textContent = s.name.color.toUpperCase();
  document.getElementById('name-sz').value   = s.name.size;
  document.getElementById('name-sz-v').textContent = s.name.size;
  document.getElementById('name-prev').textContent = s.name.text.toUpperCase() || 'NOMBRE';
  document.getElementById('name-prev').style.fontFamily = `'${s.name.font}', sans-serif`;

  document.getElementById('p-number').value    = s.number.text;
  document.getElementById('num-font').value    = s.number.font;
  document.getElementById('num-color').value   = s.number.color;
  document.getElementById('num-color-hex').textContent = s.number.color.toUpperCase();
  document.getElementById('num-sz').value      = s.number.size;
  document.getElementById('num-sz-v').textContent = s.number.size;

  // Logos
  try {
    if (typeof renderLogoList === 'function') renderLogoList();
  } catch (e) {
    console.warn('Error rendering logo list:', e);
  }
}


// ════════════════════════════════════════════
//  11. EXPORTACIÓN
// ════════════════════════════════════════════

function bindExportControls() {
  // Exportar textura 2K como PNG
  document.getElementById('btn-export-tex').addEventListener('click', () => {
    const dataURL = editor.getCanvas().toDataURL('image/png');
    download(dataURL, `kit-texture-2k-${Date.now()}.png`);
    toast('¡Textura 2K exportada! 🎉', 'ok');
  });

  // Exportar vista 3D como PNG
  document.getElementById('btn-export-3d').addEventListener('click', () => {
    const dataURL = scene.exportView();
    download(dataURL, `kit-3d-view-${Date.now()}.png`);
    toast('¡Vista 3D exportada! 🎉', 'ok');
  });

  // Atajo Ctrl+S
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 's') {
      e.preventDefault();
      const dataURL = editor.getCanvas().toDataURL('image/png');
      download(dataURL, `kit-texture-2k-${Date.now()}.png`);
      toast('Textura exportada (Ctrl+S)', 'ok');
    }
  });

  // Exportar proyecto como JSON
  document.getElementById('btn-export-json').addEventListener('click', () => {
    try {
      const jsonData = editor.serialize();
      const jsonString = JSON.stringify(jsonData, null, 2);
      const blob = new Blob([jsonString], { type: 'application/json' });
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = `kit-project-${Date.now()}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      toast('Proyecto exportado como JSON 📤', 'ok');
    } catch (e) {
      toast('Error al exportar JSON: ' + e, 'warn');
    }
  });

  // Importar proyecto desde JSON
  const importJsonBtn = document.getElementById('btn-import-json');
  const fileImportJson = document.getElementById('file-import-json');

  importJsonBtn.addEventListener('click', () => {
    fileImportJson.click();
  });

  fileImportJson.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Confirmar sobrescritura
    if (!confirm('¿Reemplazar el diseño actual con el archivo JSON seleccionado?')) {
      e.target.value = '';
      return;
    }

    try {
      const text = await file.text();
      const jsonData = JSON.parse(text);
      await editor.deserialize(jsonData);
      scene.applyTexture(editor.getCanvas());
      syncUIFromEditor();
      toast('Proyecto importado desde JSON 📥', 'ok');
    } catch (err) {
      toast('Error al importar JSON: ' + err.message, 'warn');
    }

    // Reset file input
    e.target.value = '';
  });

  // ===== CONTROLES DE TECLADO PARA MOVIMIENTO DE CÁMARA =====
  document.addEventListener('keydown', (e) => {
    // Prevenir que las flechas hagan scroll en la página
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
      e.preventDefault();
    }

    // Mover cámara con flechas
    const moveAmount = 0.1; // Cantidad de movimiento por pulsación
    switch (e.key) {
      case 'ArrowLeft':
        scene.moveLeft(moveAmount);
        break;
      case 'ArrowRight':
        scene.moveRight(moveAmount);
        break;
      case 'ArrowUp':
        scene.moveUp(moveAmount);
        break;
      case 'ArrowDown':
        scene.moveDown(moveAmount);
        break;
      // Zoom con + y -
      case '+':
      case '=': // Shift+= en algunos teclados
        scene.zoomIn(moveAmount);
        break;
      case '-':
      case '_': // Shift+- en algunos teclados
        scene.zoomOut(moveAmount);
        break;
      // Reset camera con '0' o 'r'
      case '0':
      case 'r':
      case 'R':
        scene.resetCamera();
        break;
    }
  });
}

/**
 * Vincula controles de exportación/importación de JSON
 */
function bindJsonControls() {
  const exportJsonBtn = document.getElementById('btn-export-json');
  const importJsonBtn = document.getElementById('btn-import-json');
  const fileImportJson = document.getElementById('file-import-json');

  // Exportar proyecto como JSON
  exportJsonBtn.addEventListener('click', () => {
    try {
      const jsonData = editor.serialize();
      const jsonString = JSON.stringify(jsonData, null, 2);
      const blob = new Blob([jsonString], { type: 'application/json' });
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = `kit-project-${Date.now()}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      toast('Proyecto exportado como JSON 📤', 'ok');
    } catch (e) {
      toast('Error al exportar JSON: ' + e, 'warn');
    }
  });

  // Importar proyecto desde JSON
  importJsonBtn.addEventListener('click', () => {
    fileImportJson.click();
  });

  fileImportJson.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Confirmar sobrescritura
    if (!confirm('¿Reemplazar el diseño actual con el archivo JSON seleccionado?')) {
      e.target.value = '';
      return;
    }

    try {
      const text = await file.text();
      const jsonData = JSON.parse(text);
      await editor.deserialize(jsonData);
      scene.applyTexture(editor.getCanvas());
      syncUIFromEditor();
      toast('Proyecto importado desde JSON 📥', 'ok');
    } catch (err) {
      toast('Error al importar JSON: ' + err.message, 'warn');
    }

    // Reset file input
    e.target.value = '';
  });
}

/** Dispara la descarga de un archivo desde un data URL */
function download(dataURL, filename) {
  const a = document.createElement('a');
  a.href = dataURL;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}


// ════════════════════════════════════════════
//  12. UTILIDADES
// ════════════════════════════════════════════

function toast(msg, type = 'info') {
  const box = document.getElementById('toast-box');
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  const icons = { ok: '✅', info: 'ℹ️', warn: '⚠️' };
  el.innerHTML = `<span>${icons[type] || ''}</span><span>${msg}</span>`;
  box.appendChild(el);
  setTimeout(() => {
    el.style.animation = 'toast-out 0.3s ease-in forwards';
    setTimeout(() => el.remove(), 300);
  }, 3000);
}

function setStatus(text) {
  const el = document.getElementById('status-text');
  if (el) el.textContent = text;
}


// ════════════════════════════════════════════
//  13. PUNTO DE ENTRADA
// ════════════════════════════════════════════

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
