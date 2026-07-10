/* Service worker — cache offline del workspace */
const CACHE = 'md-workspace-v19';
const ASSETS = ['./', './index.html', './styles.css', './app.js', './videos.js', './apuntes.js', './soluciones.html', './soluciones.js', './manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
      // cachear los propios assets de la app (no PDFs/imágenes pesadas)
      const url = new URL(e.request.url);
      if (ASSETS.some(a => url.pathname.endsWith(a.replace('./', '/')))) {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
      }
      return res;
    }).catch(() => caches.match('./index.html')))
  );
});
