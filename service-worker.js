let urlsToCache = [
  "/",
  "js/app.js",
  "css/styles.css"
];

self.addEventListener("fetch", () => console.log("fetch"));

self.addEventListener("install", (event) => {
  console.log("installing");
  return event.waitUntil(
    caches
    .open("pwa-assets")
    .then(cache => {
      console.log(`caching ${urlsToCache}`);
      return cache.addAll(urlsToCache);
    })
  );
});
