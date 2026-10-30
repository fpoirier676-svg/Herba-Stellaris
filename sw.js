// Herba Stellaris — mise en cache pour jouer sans réseau.
// Les pages du site : le réseau d'abord (toujours la dernière version), le cache seulement hors ligne.
// Les bibliothèques et polices : le cache d'abord, rafraîchi en arrière-plan.
const CACHE = 'herba-v14';
const CORE = ['./', './index.html', './capteur.html', './public.html',
  'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js',
  'https://cdn.jsdelivr.net/npm/peerjs@1.5.4/dist/peerjs.min.js',
  'https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.js'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => Promise.all(CORE.map(u => c.add(new Request(u, { cache: 'reload' })).catch(() => {}))))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
const cacheable = u => u.origin === location.origin || /(^|\.)(jsdelivr\.net|googleapis\.com|gstatic\.com)$/.test(u.hostname);
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || !cacheable(u)) return;
  const page = u.origin === location.origin && (e.request.mode === 'navigate' || /\.html?$|\/$/.test(u.pathname) || u.pathname.endsWith('sw.js'));
  if (page) {
    e.respondWith(fetch(e.request, { cache: 'no-cache' }).then(r => { if (r && r.ok) { const cp = r.clone(); caches.open(CACHE).then(c => c.put(e.request, cp)); } return r; })
      .catch(() => caches.match(e.request, { ignoreSearch: true }).then(h => h || caches.match('./index.html'))));
    return;
  }
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(e.request);
    const net = fetch(e.request).then(r => { if (r && (r.ok || r.type === 'opaque')) c.put(e.request, r.clone()); return r; }).catch(() => hit);
    return hit || net;
  }));
});
