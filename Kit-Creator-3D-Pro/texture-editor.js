/**
 * ============================================================
 *  TEXTURE-EDITOR.JS — Motor de Texturas 2D con Capas
 *
 *  Gestiona un canvas 2D de 2048×2048 como textura UV.
 *  Sistema de capas estricto: base → mangas → cuello →
 *  patrón → logos → nombre → número.
 *
 *  Incluye un preview interactivo donde el usuario puede
 *  arrastrar logos y textos directamente.
 *
 *  API Pública:
 *   new TextureEditor(previewCanvasId)
 *   .setBaseColor(c) / .setSecondaryColor(c) / .setCollarColor(c)
 *   .setPattern(id, color, opacity, scale) / .clearPattern()
 *   .addLogo(file) → Promise<id>
 *   .removeLogo(id) / .selectLogo(id)
 *   .setName(text, font, color, size)
 *   .setNumber(text, font, color, size)
 *   .getCanvas() → HTMLCanvasElement
 *   .onChange(fn) — registra callback de cambio
 *   .serialize() → object
 *   .deserialize(data) → Promise
 * ============================================================
 */

/** Resolución de la textura (potencia de 2) */
const TEX = 2048;

// ─── Definiciones de patrones ───

const PATTERNS = [
  { id: 'none',       name: 'Ninguno',              draw: null },
  { id: 'v-stripes',  name: 'Rayas Verticales',     draw: patVStripes },
  { id: 'h-stripes',  name: 'Rayas Horizontales',   draw: patHStripes },
  { id: 'd-stripes',  name: 'Rayas Diagonales',     draw: patDStripes },
  { id: 'checkers',   name: 'Cuadros',              draw: patCheckers },
  { id: 'dots',       name: 'Puntos',               draw: patDots },
  { id: 'diamonds',   name: 'Rombos',               draw: patDiamonds },
  { id: 'zigzag',     name: 'Zigzag',               draw: patZigzag },
];

export { PATTERNS };

// ─── Clase principal ───

export class TextureEditor {

  /**
   * @param {string} previewId — ID del <canvas> visible de preview
   */
  constructor(previewId) {
    // Canvas principal de textura (oculto, 2048×2048)
    this.canvas = document.createElement('canvas');
    this.canvas.width  = TEX;
    this.canvas.height = TEX;
    this.ctx = this.canvas.getContext('2d');

    // Preview interactivo (visible en el panel)
    this.preview    = document.getElementById(previewId);
    this.previewCtx = this.preview.getContext('2d');

    // ── Estado del diseño ──
    this.state = {
      baseColor:      '#1a1a1a',
      secondaryColor: '#1a1a1a',
      collarColor:    '#111111',
      pattern: { id: 'none', color: '#ffffff', opacity: 0.5, scale: 40 },
      logos:   [],  // [{ id, img, dataUrl, x, y, size, name }]
      name:   { text: '', font: 'Bebas Neue', color: '#ffffff', size: 90, x: 0.5, y: 0.28 },
      number: { text: '', font: 'Bebas Neue', color: '#ffffff', size: 220, x: 0.5, y: 0.52 },
    };

    // Drag state
    this._drag = null;
    this._logoIdCounter = 0;

    // Callbacks
    this._listeners = [];

    // Init
    this._bindPreviewEvents();
    this.redraw();
  }

  // ──────────────────────────────────
  //  Setters (disparan redraw + notify)
  // ──────────────────────────────────

  setBaseColor(c)      { this.state.baseColor = c; this.redraw(); this._notify(); }
  setSecondaryColor(c) { this.state.secondaryColor = c; this.redraw(); this._notify(); }
  setCollarColor(c)    { this.state.collarColor = c;    this.redraw(); this._notify(); }

  setPattern(id, color, opacity, scale) {
    Object.assign(this.state.pattern, { id, color, opacity, scale });
    this.redraw(); this._notify();
  }

  clearPattern() {
    this.state.pattern.id = 'none';
    this.redraw(); this._notify();
  }

  setPatternColor(c)   { this.state.pattern.color = c;   this.redraw(); this._notify(); }
  setPatternOpacity(o) { this.state.pattern.opacity = o;  this.redraw(); this._notify(); }
  setPatternScale(s)   { this.state.pattern.scale = s;    this.redraw(); this._notify(); }

  setName(text, font, color, size) {
    Object.assign(this.state.name, { text, font, color, size });
    this.redraw(); this._notify();
  }

  setNumber(text, font, color, size) {
    Object.assign(this.state.number, { text, font, color, size });
    this.redraw(); this._notify();
  }

  // ──────────────────────────────────
  //  Logos
  // ──────────────────────────────────

  /**
   * Añade una imagen subida por el usuario como logo.
   * @param {File} file
   * @returns {Promise<string>} — ID del logo añadido
   */
  addLogo(file) {
    return new Promise((resolve, reject) => {
      if (file.size > 5 * 1024 * 1024) { reject('File too large'); return; }

      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target.result;
        const img = new Image();
        img.onload = () => {
          const id = `logo-${++this._logoIdCounter}`;
          this.state.logos.push({
            id, img, dataUrl,
            x: 0.5, y: 0.42, size: 0.15,
            name: file.name,
          });
          this.redraw();
          this._notify();
          resolve(id);
        };
        img.onerror = () => reject('Invalid image');
        img.src = dataUrl;
      };
      reader.readAsDataURL(file);
    });
  }

  /** @param {string} id */
  removeLogo(id) {
    this.state.logos = this.state.logos.filter(l => l.id !== id);
    this.redraw(); this._notify();
  }

  /** @param {string} id */
  selectLogo(id) {
    this._selectedLogoId = id;
  }

  getSelectedLogo() {
    return this.state.logos.find(l => l.id === this._selectedLogoId) || null;
  }

  updateLogo(id, props) {
    const logo = this.state.logos.find(l => l.id === id);
    if (logo) {
      Object.assign(logo, props);
      this.redraw(); this._notify();
    }
  }

  // ──────────────────────────────────
  //  Dibujo principal
  // ──────────────────────────────────

  /** Redibuja TODAS las capas en orden */
  redraw() {
    const ctx = this.ctx;
    const w = TEX, h = TEX;

    // Capa 0: Color base
    ctx.fillStyle = this.state.baseColor;
    ctx.fillRect(0, 0, w, h);

    // Capa 0b: Mangas (color secundario)
    this._drawSleeves(ctx, w, h);

    // Capa 0c: Cuello
    this._drawCollar(ctx, w, h);

    // Capa 1: Patrón
    this._drawPattern(ctx, w, h);

    // Capa 2: Logos
    this._drawLogos(ctx, w, h);

    // Capa 3: Nombre
    this._drawName(ctx, w, h);

    // Capa 3b: Número
    this._drawNumber(ctx, w, h);

    // Actualizar preview
    this._updatePreview();
  }

  _drawSleeves(ctx, w, h) {
    // Eliminado temporalmente a petición del usuario
    return;
  }

  _drawCollar(ctx, w, h) {
    // Eliminado temporalmente a petición del usuario
    return;
  }

  _drawPattern(ctx, w, h) {
    const p = this.state.pattern;
    const def = PATTERNS.find(d => d.id === p.id);
    if (!def || !def.draw) return;

    ctx.save();
    ctx.globalAlpha = p.opacity;
    def.draw(ctx, w, h, p.color, p.scale);
    ctx.restore();
  }

  _drawLogos(ctx, w, h) {
    for (const logo of this.state.logos) {
      if (!logo.img || !logo.img.complete) continue;
      const sz      = logo.size * w;
      const aspect  = logo.img.height / logo.img.width;
      const dw      = sz;
      const dh      = sz * aspect;
      ctx.drawImage(logo.img, logo.x * w - dw / 2, logo.y * h - dh / 2, dw, dh);
    }
  }

  _drawName(ctx, w, h) {
    const n = this.state.name;
    if (!n.text) return;
    ctx.save();
    ctx.fillStyle    = n.color;
    ctx.font         = `bold ${n.size}px '${n.font}', sans-serif`;
    ctx.textAlign    = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor  = 'rgba(0,0,0,0.5)';
    ctx.shadowBlur   = 6;
    ctx.shadowOffsetY = 3;
    ctx.fillText(n.text.toUpperCase(), n.x * w, n.y * h);
    ctx.restore();
  }

  _drawNumber(ctx, w, h) {
    const n = this.state.number;
    if (!n.text) return;
    ctx.save();
    ctx.fillStyle    = n.color;
    ctx.font         = `bold ${n.size}px '${n.font}', sans-serif`;
    ctx.textAlign    = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor  = 'rgba(0,0,0,0.5)';
    ctx.shadowBlur   = 8;
    ctx.shadowOffsetY = 4;
    ctx.fillText(n.text, n.x * w, n.y * h);
    ctx.restore();
  }

  /** Copia el canvas principal al preview visible */
  _updatePreview() {
    const pw = this.preview.width;
    const ph = this.preview.height;
    this.previewCtx.clearRect(0, 0, pw, ph);
    this.previewCtx.drawImage(this.canvas, 0, 0, pw, ph);

    // DIBUJAR SILUETAS DE GUÍA (Frente y Espalda separados)
    const ctx = this.previewCtx;
    ctx.save();
    ctx.beginPath();
    
    // --- SILUETA FRENTE (Mitad Izquierda: 0 a 0.5) ---
    // El torso nativo del GLB ocupa la parte inferior (v = 0 a 0.75), que corresponde a Y = 0.25 a 1.0
    ctx.moveTo(pw * 0.05, ph);
    ctx.lineTo(pw * 0.05, ph * 0.475);
    ctx.lineTo(pw * 0.0, ph * 0.475);
    ctx.lineTo(pw * 0.0, ph * 0.325);
    ctx.lineTo(pw * 0.15, ph * 0.287);
    ctx.lineTo(pw * 0.2, ph * 0.287);
    ctx.quadraticCurveTo(pw * 0.25, ph * 0.362, pw * 0.3, ph * 0.287); // Escote profundo
    ctx.lineTo(pw * 0.35, ph * 0.287);
    ctx.lineTo(pw * 0.5, ph * 0.325);
    ctx.lineTo(pw * 0.5, ph * 0.475);
    ctx.lineTo(pw * 0.45, ph * 0.475);
    ctx.lineTo(pw * 0.45, ph);
    
    // --- SILUETA ESPALDA (Mitad Derecha: 0.5 a 1.0) ---
    ctx.moveTo(pw * 0.55, ph);
    ctx.lineTo(pw * 0.55, ph * 0.475);
    ctx.lineTo(pw * 0.5, ph * 0.475);
    ctx.lineTo(pw * 0.5, ph * 0.325);
    ctx.lineTo(pw * 0.65, ph * 0.287);
    ctx.lineTo(pw * 0.7, ph * 0.287);
    ctx.quadraticCurveTo(pw * 0.75, ph * 0.31, pw * 0.8, ph * 0.287); // Escote alto
    ctx.lineTo(pw * 0.85, ph * 0.287);
    ctx.lineTo(pw * 1.0, ph * 0.325);
    ctx.lineTo(pw * 1.0, ph * 0.475);
    ctx.lineTo(pw * 0.95, ph * 0.475);
    ctx.lineTo(pw * 0.95, ph);

    ctx.closePath();
    
    // Estilo de la línea guía
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.stroke();
    
    // Sombrear el fondo fuera de las siluetas
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.rect(0, 0, pw, ph);
    ctx.fill('evenodd');
    
    // Añadir textos guía
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('FRENTE', pw * 0.25, ph * 0.95);
    ctx.fillText('ESPALDA', pw * 0.75, ph * 0.95);
    
    ctx.restore();

    // Dibujar marcos de selección sobre logos
    const sel = this._selectedLogoId;
    if (sel) {
      const logo = this.state.logos.find(l => l.id === sel);
      if (logo && logo.img) {
        const scale = pw / TEX;
        const sz = logo.size * TEX * scale;
        const aspect = logo.img.height / logo.img.width;
        const dx = logo.x * pw - sz / 2;
        const dy = logo.y * ph - (sz * aspect) / 2;
        this.previewCtx.strokeStyle = '#22d3ee';
        this.previewCtx.lineWidth = 2;
        this.previewCtx.setLineDash([4, 3]);
        this.previewCtx.strokeRect(dx, dy, sz, sz * aspect);
        this.previewCtx.setLineDash([]);
      }
    }
  }

  // ──────────────────────────────────
  //  Preview interactivo (Drag & Drop)
  // ──────────────────────────────────

  _bindPreviewEvents() {
    const cv = this.preview;

    cv.addEventListener('pointerdown', (e) => {
      const { nx, ny } = this._pointerToNorm(e);
      const hit = this._hitTest(nx, ny);
      if (hit) {
        this._drag = { ...hit, ox: nx - hit.x, oy: ny - hit.y };
        cv.setPointerCapture(e.pointerId);
      }
    });

    cv.addEventListener('pointermove', (e) => {
      if (!this._drag) return;
      const { nx, ny } = this._pointerToNorm(e);
      const x = Math.max(0, Math.min(1, nx - this._drag.ox));
      const y = Math.max(0, Math.min(1, ny - this._drag.oy));

      if (this._drag.type === 'logo') {
        const logo = this.state.logos.find(l => l.id === this._drag.id);
        if (logo) { logo.x = x; logo.y = y; }
      } else if (this._drag.type === 'name') {
        this.state.name.x = x; this.state.name.y = y;
      } else if (this._drag.type === 'number') {
        this.state.number.x = x; this.state.number.y = y;
      }
      this.redraw();
    });

    cv.addEventListener('pointerup', () => {
      if (this._drag) {
        this._drag = null;
        this._notify();
      }
    });
  }

  /** Convierte coordenadas de puntero a normalizadas [0,1] */
  _pointerToNorm(e) {
    const rect = this.preview.getBoundingClientRect();
    return {
      nx: (e.clientX - rect.left) / rect.width,
      ny: (e.clientY - rect.top)  / rect.height,
    };
  }

  /**
   * Hit-test: verifica si un punto normalizado (0–1) colisiona
   * con un logo o texto arrastrable.
   */
  _hitTest(nx, ny) {
    // Probar logos en orden inverso (el de arriba primero)
    for (let i = this.state.logos.length - 1; i >= 0; i--) {
      const l = this.state.logos[i];
      if (!l.img) continue;
      const hw = l.size / 2;
      const hh = hw * (l.img.height / l.img.width);
      if (nx >= l.x - hw && nx <= l.x + hw && ny >= l.y - hh && ny <= l.y + hh) {
        this._selectedLogoId = l.id;
        return { type: 'logo', id: l.id, x: l.x, y: l.y };
      }
    }

    // Probar nombre
    if (this.state.name.text) {
      const n = this.state.name;
      const tw = (n.size * n.text.length * 0.55) / TEX;
      const th = (n.size * 1.2) / TEX;
      if (nx >= n.x - tw/2 && nx <= n.x + tw/2 && ny >= n.y - th/2 && ny <= n.y + th/2) {
        return { type: 'name', x: n.x, y: n.y };
      }
    }

    // Probar número
    if (this.state.number.text) {
      const n = this.state.number;
      const tw = (n.size * n.text.length * 0.55) / TEX;
      const th = (n.size * 1.2) / TEX;
      if (nx >= n.x - tw/2 && nx <= n.x + tw/2 && ny >= n.y - th/2 && ny <= n.y + th/2) {
        return { type: 'number', x: n.x, y: n.y };
      }
    }

    return null;
  }

  // ──────────────────────────────────
  //  Observadores
  // ──────────────────────────────────

  /** Registra un callback invocado cuando la textura cambia */
  onChange(fn) { this._listeners.push(fn); }

  _notify() { this._listeners.forEach(fn => fn()); }

  // ──────────────────────────────────
  //  Canvas getter
  // ──────────────────────────────────

  /** @returns {HTMLCanvasElement} — El canvas de textura 2048×2048 */
  getCanvas() { return this.canvas; }

  // ──────────────────────────────────
  //  Serialización (para IndexedDB)
  // ──────────────────────────────────

  /**
   * Serializa el estado completo a un objeto plano
   * (sin referencias a Image/Canvas).
   */
  serialize() {
    const s = this.state;
    return {
      baseColor:      s.baseColor,
      secondaryColor: s.secondaryColor,
      collarColor:    s.collarColor,
      pattern:        { ...s.pattern },
      logos: s.logos.map(l => ({
        id: l.id, dataUrl: l.dataUrl,
        x: l.x, y: l.y, size: l.size, name: l.name,
      })),
      name:   { ...s.name },
      number: { ...s.number },
    };
  }

  /**
   * Restaura el estado desde un objeto serializado.
   * Reconstruye objetos Image desde data URLs.
   * @param {Object} data — Objeto de serialize()
   * @returns {Promise<void>}
   */
  async deserialize(data) {
    this.state.baseColor      = data.baseColor;
    this.state.secondaryColor = data.secondaryColor;
    this.state.collarColor    = data.collarColor;
    this.state.pattern        = { ...data.pattern };
    this.state.name           = { ...data.name };
    this.state.number         = { ...data.number };

    // Reconstruir imágenes de logos
    this.state.logos = [];
    for (const ld of data.logos) {
      const img = new Image();
      await new Promise((res, rej) => {
        img.onload = res;
        img.onerror = rej;
        img.src = ld.dataUrl;
      });
      this.state.logos.push({
        id: ld.id, img, dataUrl: ld.dataUrl,
        x: ld.x, y: ld.y, size: ld.size, name: ld.name,
      });
      // Actualizar counter
      const num = parseInt(ld.id.replace('logo-', ''));
      if (num >= this._logoIdCounter) this._logoIdCounter = num + 1;
    }

    this.redraw();
    this._notify();
  }
}


// ──────────────────────────────────────
//  Funciones de dibujo de patrones
// ──────────────────────────────────────

function patVStripes(ctx, w, h, color, spacing) {
  ctx.fillStyle = color;
  for (let x = 0; x < w; x += spacing * 2) ctx.fillRect(x, 0, spacing, h);
}

function patHStripes(ctx, w, h, color, spacing) {
  ctx.fillStyle = color;
  for (let y = 0; y < h; y += spacing * 2) ctx.fillRect(0, y, w, spacing);
}

function patDStripes(ctx, w, h, color, spacing) {
  ctx.strokeStyle = color;
  ctx.lineWidth = spacing;
  const step = spacing * 2;
  for (let i = -h; i < w + h; i += step) {
    ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i + h, h); ctx.stroke();
  }
}

function patCheckers(ctx, w, h, color, spacing) {
  ctx.fillStyle = color;
  const s = spacing * 2;
  for (let y = 0; y < h; y += s) {
    for (let x = 0; x < w; x += s) {
      ctx.fillRect(x, y, spacing, spacing);
      ctx.fillRect(x + spacing, y + spacing, spacing, spacing);
    }
  }
}

function patDots(ctx, w, h, color, spacing) {
  ctx.fillStyle = color;
  const r = spacing / 4;
  for (let y = spacing; y < h; y += spacing)
    for (let x = spacing; x < w; x += spacing) {
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
    }
}

function patDiamonds(ctx, w, h, color, spacing) {
  ctx.fillStyle = color;
  const half = spacing / 2;
  for (let y = 0; y < h; y += spacing)
    for (let x = 0; x < w; x += spacing) {
      ctx.beginPath();
      ctx.moveTo(x + half, y + 2);
      ctx.lineTo(x + spacing - 2, y + half);
      ctx.lineTo(x + half, y + spacing - 2);
      ctx.lineTo(x + 2, y + half);
      ctx.closePath(); ctx.fill();
    }
}

function patZigzag(ctx, w, h, color, spacing) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  const half = spacing / 2;
  for (let y = 0; y < h; y += spacing) {
    ctx.beginPath();
    ctx.moveTo(0, y + spacing);
    for (let x = 0; x < w; x += spacing) {
      ctx.lineTo(x + half, y);
      ctx.lineTo(x + spacing, y + spacing);
    }
    ctx.stroke();
  }
}
