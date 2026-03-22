const cacheName = 'sawa-v2.1';
const assets = [
  './',
  './index.html',
  './gamesData.js',
  './manifest.json',
  'https://cdn-icons-png.flaticon.com/512/833/833472.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
