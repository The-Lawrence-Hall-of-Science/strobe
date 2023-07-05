importScripts('https://unpkg.com/appcache-polyfill-window@0.4.0/build/index.umd.js');

self.addEventListener('fetch', (event) => {
  // Alternatively, examine event.request and only use the
  // appcachePolyfill.handle() logic for a subset of requests.
  event.respondWith(appcachePolyfill.handle(event));
});

