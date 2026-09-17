/**
 * ============================================================
 *  SERVICE WORKER — Kit Creator 3D Pro
 *  Estrategia: Cache-First + Runtime Caching
 *
 *  1. Install: pre-cachea archivos locales de la app
 *  2. Fetch:   sirve desde cache; si no existe, busca en red
 *              y cachea la respuesta para uso offline futuro
 *  3. Activate: limpia caches antiguos
 * ============================================================
 */

const CACHE_VERSION = 'kit3d-v1';

/** Archivos locales que se pre-cachean en la instalación */
const PRECACHE_URLS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './three-scene.js',
  './texture-editor.js',
  './manifest.json',
  './assets/icon.svg',
];

// ─── Install: pre-cachear recursos locales ───
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// ─── Activate: limpiar caches antiguos ───
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_VERSION)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// ─── Fetch: Cache-First con fallback a red ───
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Solo manejar GET requests
  if (request.method !== 'GET') return;

  // Ignorar peticiones de esquemas no soportados (como chrome-extension:, blob:, etc.)
  if (!request.url.startsWith('http')) return;

  event.respondWith(
    caches.match(request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }

      // No está en cache → buscar en la red
      return fetch(request)
        .then(networkResponse => {
          // Solo cachear respuestas válidas (status 200, tipo basic u opaque)
          if (
            networkResponse &&
            networkResponse.status === 200 &&
            (networkResponse.type === 'basic' || networkResponse.type === 'cors')
          ) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_VERSION).then(cache => {
              cache.put(request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // Red no disponible y no hay cache — fallback según tipo
          if (request.destination === 'document') {
            return caches.match('./index.html');
          }
          return new Response('Offline — recurso no disponible', {
            status: 503,
            statusText: 'Service Unavailable',
          });
        });
    })
  );
});
