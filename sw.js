// BaatLink Service Worker — PWA install ke liye zaroori
const CACHE='baatlink-v1';

self.addEventListener('install', e=>{
  self.skipWaiting();
});

self.addEventListener('activate', e=>{
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', e=>{
  // Network-first (Firebase data hamesha fresh chahiye)
  e.respondWith(
    fetch(e.request).catch(()=>caches.match(e.request))
  );
});
