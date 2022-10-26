const URLS_TO_CACHE = [
  "index.html",
  "js/app.js",
  "js/deck.json",
  "css/styles.css",
  "favicon.ico",
  "app.webmanifest",
  "android-chrome-192x192.png",
];

const CACHE_NAME = "pwa-assets";
const VERSION = "0.0.1";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
    .open(CACHE_NAME)
    .then(cache => {
      return cache.addAll(URLS_TO_CACHE);
    })
    .then(() => {
      self.skipWaiting();
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches
    .match(event.request)
    .then(response => {
      return response || fetch(event.request);
    })
  );
});
