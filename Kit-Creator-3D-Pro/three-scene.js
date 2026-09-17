/**
 * ============================================================
 *  THREE-SCENE.JS — Módulo del Visor 3D
 *
 *  Responsabilidades:
 *   - Escena Three.js con iluminación de estudio
 *   - Carga de modelo GLB via GLTFLoader (con fallback procedural)
 *   - OrbitControls para rotación/zoom
 *   - Aplicación de CanvasTexture al material del modelo
 *   - Exportación del viewport como PNG
 *
 *  API Pública:
 *   new ThreeScene(canvasId)
 *   .init()
 *   .loadModel(url)
 *   .applyTexture(canvas2D)
 *   .setAutoRotate(bool)
 *   .setCameraPreset(name)
 *   .exportView() → string
 *   .resize()
 * ============================================================
 */

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader }    from 'three/addons/loaders/GLTFLoader.js';

export class ThreeScene {

  /**
   * @param {string} canvasId — ID del <canvas> WebGL
   * @param {string[]} models — Lista de rutas de modelos GLB disponibles
   */
  constructor(canvasId, models = ['assets/base-model.glb']) {
    this.canvasEl = document.getElementById(canvasId);
    this.scene    = null;
    this.camera   = null;
    this.renderer = null;
    this.controls = null;

    /** @type {THREE.Mesh|null} */
    this.shirtMesh = null;

    /** @type {THREE.MeshStandardMaterial|null} */
    this.material = null;

    /** @type {THREE.CanvasTexture|null} */
    this.texture = null;

    // Modelo actual
    this.currentModelIndex = 0;
    // Lista de modelos disponibles
    this.availableModels = models;
    // Estado de carga
    this.isLoading = false;

    this._animId = null;
    // Guardar referencia para debug (accesible desde ventana como window.__debugThreeScene)
    if (typeof window !== 'undefined') {
      window.__debugThreeScene = this;
    }
  }

  // ────────────────────────────────
  //  DEBUG CONTROLS (para ajustar posición de cámara en tiempo real)
  // ────────────────────────────────
  /**
   * Establece la posición de la cámara (para debug)
   * @param {number} x - Posición X
   * @param {number} y - Posición Y
   * @param {number} z - Posición Z
   */
  debugSetCameraPosition(x, y, z) {
    if (this.camera) {
      this.camera.position.set(x, y, z);
    }
  }

  /**
   * Establece el objetivo de la cámara (para debug)
   * @param {number} x - Posición X del objetivo
   * @param {number} y - Posición Y del objetivo
   * @param {number} z - Posición Z del objetivo
   */
  debugSetTarget(x, y, z) {
    if (this.controls) {
      this.controls.target.set(x, y, z);
      this.controls.update();
    }
  }

  /**
   * Establece tanto posición como objetivo (útil para debug rápido)
   * @param {number} camX - Posición X de la cámara
   * @param {number} camY - Posición Y de la cámara
   * @param {number} camZ - Posición Z de la cámara
   * @param {number} tarX - Posición X del objetivo
   * @param {number} tarY - Posición Y del objetivo
   * @param {number} tarZ - Posición Z del objetivo
   */
  debugSetView(camX, camY, camZ, tarX, tarY, tarZ) {
    this.debugSetCameraPosition(camX, camY, camZ);
    this.debugSetTarget(tarX, tarY, tarZ);
  }

  // ────────────────────────────────
  //  Inicialización
  // ────────────────────────────────

  /** Configura la escena 3D completa */
  init() {
    this._setupRenderer();
    this._setupScene();
    this._setupCamera();
    this._setupLighting();
    this._setupControls();
    window.addEventListener('resize', () => this.resize());
    this._animate();
  }

  _setupRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvasEl,
      antialias: true,
      preserveDrawingBuffer: true,
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.2; // Ligeramente más brillante
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Sombras suaves
    // Activamos el mejoramiento de profundidad
    this.renderer.physicallyCorrectLights = true;
  }

  _setupScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x2b2c45); // Índigo oscuro mate
  }

  _setupCamera() {
    this.camera = new THREE.PerspectiveCamera(
      35, // Reduced field of view for less distortion, better for product viewing
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    // Position camera much closer and lower for better framing
    this.camera.position.set(0.0, 1.1, 2.0);
    // Look at center area to show shirt properly framed
  }

  /**
   * Iluminación de estudio oscuro fotorrealista
   */
  _setupLighting() {
    // Luz ambiental más oscura para crear contraste
    this.scene.add(new THREE.AmbientLight(0xffffff, 0.2));

    // Luz principal más fuerte y desde un ángulo oscuro
    const dirMain = new THREE.DirectionalLight(0xffffff, 1.8);
    dirMain.position.set(3, 5, 2); // Desde arriba-frontal derecho
    dirMain.castShadow = true;
    dirMain.shadow.mapSize.set(2048, 2048);
    dirMain.shadow.camera.near = 0.5;
    dirMain.shadow.camera.far = 20;
    const sc = dirMain.shadow.camera;
    sc.left = -4; sc.right = 4; sc.top = 4; sc.bottom = -4;
    this.scene.add(dirMain);

    // Luz de relleno para suavizar sombras
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.6);
    fillLight.position.set(-2, 3, -2); // Desde atrás-izquierda
    this.scene.add(fillLight);

    // Luz de contorno (rim light) para destacar los bordes
    const rimLight = new THREE.SpotLight(0xffffff, 2.0);
    rimLight.position.set(0, 4, -3);
    rimLight.angle = Math.PI / 3;
    rimLight.penumbra = 0.5;
    rimLight.decay = 1.5;
    rimLight.distance = 25;
    rimLight.castShadow = true;
    this.scene.add(rimLight);

    // Luz puntual para destacar detalles
    const pointLight = new THREE.PointLight(0xffffff, 0.8, 10);
    pointLight.position.set(0, 2, 2);
    this.scene.add(pointLight);
  }

  _setupControls() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.08; // Un poco más de amortiguación para control suave
    this.controls.autoRotate = false;
    this.controls.autoRotateSpeed = 0.3; // Más lento para mejor apreciación
    this.controls.enableZoom = true;
    this.controls.zoomSpeed = 0.8;
    this.controls.minDistance = 2.0;
    this.controls.maxDistance = 6.0;
    // El objetivo es el centro de la camisa (ajustado para mostrar más parte inferior)
    this.controls.target.set(0, 1.1, 0);
    this.controls.minPolarAngle = Math.PI / 6; // 30 grados
    this.controls.maxPolarAngle = Math.PI * 0.8; // 144 grados
    this.controls.update();
  }

  // ────────────────────────────────
  //  Gestión de Modelos
  // ────────────────────────────────

  /** Elimina el modelo actual de la escena y libera recursos */
  _clearCurrentModel() {
    if (this.shirtMesh) {
      this.scene.remove(this.shirtMesh);

      // Liberar recursos de geometría (el material se reutiliza)
      this.shirtMesh.traverse((child) => {
        if (child.isMesh && child.geometry) {
          child.geometry.dispose();
        }
      });

      this.shirtMesh = null;
    }
  }

  /**
   * Cambia al siguiente modelo disponible en la lista
   */
  nextModel() {
    // Evitar múltiples clicks mientras cargamos
    if (this.isLoading) return;

    this.isLoading = true;

    // Eliminar el modelo actual
    this._clearCurrentModel();

    // Avanzar al siguiente modelo (con vuelta al inicio)
    this.currentModelIndex = (this.currentModelIndex + 1) % this.availableModels.length;

    // Cargar el nuevo modelo
    this.loadModel(this.availableModels[this.currentModelIndex]);
  }

  // ────────────────────────────────
  //  Modelo 3D
  // ────────────────────────────────

 /**
   * Carga un modelo GLB externo.
   * Si falla, crea la camiseta procedural como fallback.
   * @param {string} url — Ruta al archivo .glb
   */
  loadModel(url = 'assets/base-model.glb') {
    this.isLoading = true;

    
    
    const loader = new GLTFLoader();

    // Cargar el modelo GLB
    loader.load(
      url,
      (gltf) => {
        // El modelo cargado está en gltf.scene
        const model = gltf.scene;

        // Asegurarnos de que el modelo tenga un solo mesh (o procesar todos)
        model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            
            // Aplicar nuestro material personalizado con la textura
            child.material = this.material;

            // El modelo GLB tiene un mapeo UV distinto al canvas 2D.
            // Usamos las UVs nativas del modelo sin modificarlas para evitar roturas de malla
            if (child.geometry && child.geometry.attributes.position && child.geometry.attributes.uv) {
               // Ya no modificamos las UVs. El layout nativo es:
               // Frente: u=[0, 0.5], v=[0, 0.75]
               // Espalda: u=[0.5, 1.0], v=[0, 0.75]
               // Mangas/Cuello: v=[0.75, 1.0]
            }
          }
        });

        // Ajustar posición y escala si es necesario
        model.position.set(0, -0.1, 0); // Ajustar según el modelo
        model.scale.set(1, 1, 1);       // Ajustar escala si el modelo es muy grande/pequeño

        // Guardar referencia al mesh para futuras actualizaciones
        this.shirtMesh = model;
        this.scene.add(model);

        this.isLoading = false;
      },
      (xhr) => {
        // Opcional: mostrar progreso de carga
        console.log((xhr.loaded / xhr.total * 100) + '% cargado');
      },
      (error) => {
        // Si falla la carga del GLB, usar el modelo procedural como fallback
        console.error('Error al cargar el modelo GLB:', error);
        console.info('Usando modèle procedural como fallback');
        this._createProceduralShirt();
        this.isLoading = false;
      }
    );
  }

  /** Genera una camiseta 3D usando Shape + ExtrudeGeometry */
  _createProceduralShirt() {

    // Perfil mejorado para una camiseta más realista
    const shape = new THREE.Shape();

    // Hombro izquierdo
    shape.moveTo(-0.6, 2.2);
    // Mangas izquierda
    shape.bezierCurveTo(-0.8, 2.2, -0.9, 1.8, -0.9, 1.4);
    shape.lineTo(-0.8, 1.0);
    // Hombro izquierdo a cuello
    shape.lineTo(-0.4, 0.6);
    // Cuello
    shape.quadraticCurveTo(-0.2, 0.3, 0.0, 0.3);
    shape.quadraticCurveTo(0.2, 0.3, 0.4, 0.6);
    // Hombro derecho
    // Hombro derecho a manga derecha
    shape.lineTo(0.8, 1.0);
    // Manga derecha
    shape.bezierCurveTo(0.9, 1.4, 0.9, 1.8, 0.8, 2.2);
    // Hombro derecho
    shape.lineTo(0.6, 2.2);
    // Lado derecho
    shape.lineTo(0.5, -2.2);
    // Bajando por el lado derecho
    shape.lineTo(0.4, -2.4);
    // Punta derecha
    shape.lineTo(0.0, -2.6);
    // Punta izquierda
    shape.lineTo(-0.4, -2.4);
    // Subiendo por el lado izquierdo
    shape.lineTo(-0.5, -2.2);
    shape.lineTo(-0.6, -2.0);
    // Vuelve al inicio
    shape.lineTo(-0.6, 2.2);

    // Aumentamos el volumen y definición 3D para mejor visualización manteniendo realismo
    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: 0.6, // Aumentado de 0.4 a 0.6 para mejor grosor pero manteniendo realismo
      bevelEnabled: true,
      bevelThickness: 0.03, // Ligeramente aumentado para mejor definición
      bevelSize: 0.03,
      bevelSegments: 3,
      curveSegments: 16,
    });

    this._computeCustomUVs(geo);
    this._applyCurvature(geo);
    geo.computeVertexNormals();

    const mesh = new THREE.Mesh(geo, this.material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    // Posicionamos la camisa para que se vea bien desde la cámara
    mesh.position.set(0, -0.1, 0);
    // Pequeña rotación para mostrar mejor el volumen
    mesh.rotation.y = -Math.PI * 0.05;

    this.shirtMesh = mesh;
    this.scene.add(mesh);
  }


  /** Calcula las UVs para mapear correctamente la textura - Corrección alternativa para mangas */
_computeCustomUVs(geo) {
  const pos = geo.attributes.position;
  const uv = geo.attributes.uv;

  // Encontramos los límites del modelo
  let minX = Infinity, maxX = -Infinity;
  let minY = Infinity, maxY = -Infinity;
  let minZ = Infinity, maxZ = -Infinity;

  for (let i = 0; i < pos.count; i++) {
    if (i >= pos.count) break;
    const x = pos.getX(i);
    const y = pos.getY(i);
    const z = pos.getZ(i);
    if (x < minX) minX = x;
    if (x > maxX) maxX = x;
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;
    if (z < minZ) minZ = z;
    if (z > maxZ) maxZ = z;
  }

  const rangeX = maxX - minX;
  const rangeY = maxY - minY;
  const rangeZ = maxZ - minZ;

  const safeRangeX = rangeX !== 0 ? rangeX : 1;
  const safeRangeY = rangeY !== 0 ? rangeY : 1;
  const safeRangeZ = rangeZ !== 0 ? rangeZ : 1;

  for (let i = 0; i < uv.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const z = pos.getZ(i);

    // Normalizamos las coordenadas a 0-1 para cada eje
    const u = (x - minX) / safeRangeX;
    const v = (y - minY) / safeRangeY;

    // Con flipY = false, 1.0 - v alinea correctamente el top del canvas con el top del modelo
    uv.setXY(i, u, 1.0 - v);
  }

  uv.needsUpdate = true;
}

  /** Ajusta las coordenadas Z para dar volumen al torso */
  _applyCurvature(geo) {
    const pos = geo.attributes.position;
    // Procesamos todos los vértices para aplicar curvatura realista
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);

      // Solo aplicar curvatura a la parte del torso (no mangas muy extendidas)
      // El ancho de la camisa es aproximadamente de -0.5 a 0.5 en X
      const normalizedX = Math.abs(x) / 0.5; // Normalizado a 0-1 donde 1 es el borde

      if (normalizedX <= 1.0) {
        // Aplicamos curvatura basada en la posición vertical
        // Los hombros y pecho tienen más curvature que la cintura
        let curvatureFactor = 0.0;

        if (y > 1.5) { // Hombros y cuello
          curvatureFactor = 0.02 * (1.0 - normalizedX * normalizedX);
        } else if (y > 0.5) { // Pecho
          curvatureFactor = 0.04 * (1.0 - normalizedX * normalizedX);
        } else if (y > -1.5) { // Torso medio
          curvatureFactor = 0.03 * (1.0 - normalizedX * normalizedX);
        } else { // Cintura y abajo
          curvatureFactor = 0.01 * (1.0 - normalizedX * normalizedX);
        }

        // Aplicamos la curvatura en Z (profundidad)
        const currentZ = pos.getZ(i);
        pos.setZ(i, currentZ + curvatureFactor);
      }
    }
    pos.needsUpdate = true;
  }

  // ────────────────────────────────
  //  Textura Dinámica
  // ────────────────────────────────

  /**
   * Aplica (o actualiza) la textura 2D al material del modelo 3D.
   * Convierte el canvas 2D en THREE.CanvasTexture.
   *
   * @param {HTMLCanvasElement} canvas2D — Canvas de textura (2048×2048)
   */
  applyTexture(canvas2D) {
    if (!this.texture) {
      // Primera vez: crear la textura
      this.texture = new THREE.CanvasTexture(canvas2D);
      this.texture.colorSpace = THREE.SRGBColorSpace;
      this.texture.flipY = true;

      // Actualizar el material existente con la nueva textura
      this.material.map = this.texture;

      // Si ya hay mesh, asegurar que tenga el material correcto
      if (this.shirtMesh) {
        this.shirtMesh.material = this.material;
      }
    } else {
      // Actualizaciones posteriores: marcar textura como dirty
      this.texture.needsUpdate = true;
    }
  }

  /**
   * Inicializa el material antes de cargar el modelo.
   * Se llama desde app.js tras crear el TextureEditor.
   * @param {HTMLCanvasElement} canvas2D
   */
  initMaterial(canvas2D) {
    this.texture = new THREE.CanvasTexture(canvas2D);
    this.texture.colorSpace = THREE.SRGBColorSpace;
    this.texture.flipY = true;

    this.material = new THREE.MeshStandardMaterial({
      color: 0xffffff, // Blanco para permitir que los colores de la textura se vean correctamente
      map: this.texture,
      roughness: 0.9, // Ligeramente más áspero para tela de algodón
      metalness: 0.0,
      // Nota: No especificamos side, así que usa THREE.FrontSide por defecto
      // Esto es mejor para mostrar volumen ya que solo renderizamos la cara frontal
    });
  }

  // ────────────────────────────────
  //  Controles de Escena
  // ────────────────────────────────

  /** @param {boolean} enabled */
  setAutoRotate(enabled) {
    this.controls.autoRotate = enabled;
  }

  /** Anima la cámara a una posición preset */
  setCameraPreset(name) {
    const targets = {
      front: new THREE.Vector3(0, 1.4, 2.4),
      back:  new THREE.Vector3(0, 1.4, -2.4),
      left:  new THREE.Vector3(-2.4, 1.4, 0),
      right: new THREE.Vector3(2.4, 1.4, 0),
    };
    const target = targets[name];
    if (!target) return;

    const start = this.camera.position.clone();
    const t0 = performance.now();
    const dur = 800;

    const step = (now) => {
      const t = Math.min((now - t0) / dur, 1);
      const ease = t * (2 - t);
      this.camera.position.lerpVectors(start, target, ease);
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  /** Reinicia cámara a posición inicial */
  resetCamera() {
    this.camera.position.set(0.0, 1.1, 2.4);
    this.controls.target.set(0, 1.1, 0);
    this.controls.update();
  }

  /** Exporta la vista 3D actual como Data URL PNG */
  exportView() {
    this.renderer.render(this.scene, this.camera);
    return this.renderer.domElement.toDataURL('image/png');
  }

  /** Ajusta al tamaño de la ventana */
  resize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  // ────────────────────────────────
  //  Loop de Renderizado
  // ────────────────────────────────

  _animate() {
    this._animId = requestAnimationFrame(() => this._animate());
    this.controls.update();
    // Actualizamos suavemente las sombras y efectos
    this.renderer.render(this.scene, this.camera);
  }

  // ────────────────────────────────
  //  Estado de cámara y modelo (para guardar/cargar proyectos)
  // ────────────────────────────────
  /**
   * Obtiene el estado actual de la cámara para guardarlo en un proyecto
   * @returns {{position: {x:number,y:number,z:number}, target: {x:number,y:number,z:number}}}
   */
  getCameraState() {
    return {
      position: this.camera.position.clone(),
      target: this.controls.target.clone()
    };
  }

  /**
   * Aplica un estado de cámara previamente guardado
   * @param {{position: {x:number,y:number,z:number}, target: {x:number,y:number,z:number}}} state
   */
  setCameraState(state) {
    if (state.position) {
      this.camera.position.copy(state.position);
    }
    if (state.target) {
      this.controls.target.copy(state.target);
    }
    this.controls.update();
  }

  /**
   * Obtiene el índice del modelo actual
   * @returns {number}
   */
  getModelIndex() {
    return this.currentModelIndex;
  }

  /**
   * Establece el índice del modelo actual y carga ese modelo
   * @param {number} index
   */
  setModelIndex(index) {
    if (index < 0 || index >= this.availableModels.length) {
      console.warn(`Índice de modelo fuera de rango: ${index}`);
      return;
    }
    this.currentModelIndex = index;
    this.loadModel(this.availableModels[index]);
  }

  // ────────────────────────────────
  //  CONTROLES DE CÁMARA CON TECLADO/FLECHAS
  // ────────────────────────────────

  /**
   * Mueve la cámara y su objetivo por las cantidades especificadas
   * @param {number} dx - Desplazamiento en X
   * @param {number} dy - Desplazamiento en Y
   * @param {number} dz - Desplazamiento en Z
   */
  moveCamera(dx, dy, dz) {
    if (this.camera && this.controls) {
      // Mover la posición de la cámara
      this.camera.position.x += dx;
      this.camera.position.y += dy;
      this.camera.position.z += dz;

      // Mover el objetivo para mantener la misma orientación relativa
      this.controls.target.x += dx;
      this.controls.target.y += dy;
      this.controls.target.z += dz;

      // Actualizar los controles
      this.controls.update();
    }
  }

  /**
   * Mueve la cámara hacia la izquierda
   * @param {number} amount - Cantidad de movimiento (opcional, default 0.1)
   */
  moveLeft(amount = 0.1) {
    this.moveCamera(-amount, 0, 0);
  }

  /**
   * Mueve la cámara hacia la derecha
   * @param {number} amount - Cantidad de movimiento (opcional, default 0.1)
   */
  moveRight(amount = 0.1) {
    this.moveCamera(amount, 0, 0);
  }

  /**
   * Mueve la cámara hacia arriba
   * @param {number} amount - Cantidad de movimiento (opcional, default 0.1)
   */
  moveUp(amount = 0.1) {
    this.moveCamera(0, amount, 0);
  }

  /**
   * Mueve la cámara hacia abajo
   * @param {number} amount - Cantidad de movimiento (opcional, default 0.1)
   */
  moveDown(amount = 0.1) {
    this.moveCamera(0, -amount, 0);
  }

  /**
   * Acercar la cámara (zoom in)
   * @param {number} amount - Cantidad de zoom (opcional, default 0.1)
   */
  zoomIn(amount = 0.1) {
    if (this.camera) {
      // Mover la cámara hacia el objetivo
      const direction = new THREE.Vector3();
      this.controls.target.sub(this.camera.position).normalize();
      this.camera.position.addScaledVector(direction, amount);
      this.controls.update();
    }
  }

  /**
   * Alejar la cámara (zoom out)
   * @param {number} amount - Cantidad de zoom (opcional, default 0.1)
   */
  zoomOut(amount = 0.1) {
    if (this.camera) {
      // Mover la cámara alejada del objetivo
      const direction = new THREE.Vector3();
      this.controls.target.sub(this.camera.position).normalize();
      this.camera.position.addScaledVector(direction, -amount);
      this.controls.update();
    }
  }
}
