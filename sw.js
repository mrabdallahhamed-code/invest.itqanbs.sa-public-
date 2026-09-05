// Service Worker بسيط — يفعّل خاصية "إضافة للشاشة الرئيسية" على أندرويد/كروم
const CACHE_NAME = 'itqan-shell-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// شبكة أولاً، دون تخزين مؤقت معقد — يضمن أن يكون المحتوى محدثاً دائماً
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
