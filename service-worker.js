const CACHE_NAME = "adis-world-v68";
const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css?v=66",
  "./drawing-garden.css?v=37",
  "./outfit-check.css?v=63",
  "./app.js?v=61",
  "./drawing-garden.js?v=37",
  "./outfit-check.js?v=63",
  "./assets/character/adi-front-3d.webp?v=63",
  "./assets/character/idle-front.webp",
  "./assets/character/hi-wave.webp",
  "./styles.css",
  "./drawing-garden.css",
  "./outfit-check.css",
  "./app.js",
  "./drawing-garden.js",
  "./outfit-check.js",
  "./manifest.json",
  "./assets/icons/icon.svg",
  "./assets/icons/adis-world-splash.jpg",
  "./assets/blessing-garden/gideon/gideon-call.jpg",
  "./assets/discovery/plant-foods/mango.jpg",
  "./assets/discovery/plant-foods/banana-photo.jpg",
  "./assets/discovery/plant-foods/pineapple.jpg",
  "./assets/discovery/plant-foods/carrot.jpg",
  "./assets/discovery/plant-foods/broccoli.jpg",
  "./assets/discovery/plant-foods/papaya.jpg",
  "./assets/discovery/plant-foods/guava.jpg",
  "./assets/discovery/plant-foods/coconut.jpg",
  "./assets/discovery/plant-foods/eggplant.jpg",
  "./assets/discovery/plant-foods/squash.jpg",
  "./assets/discovery/plant-foods/cucumber.jpg",
  "./assets/discovery/plant-foods/chico.jpg",
  "./assets/discovery/plant-foods/calamansi.jpg",
  "./assets/discovery/plant-foods/lanzones.jpg",
  "./assets/discovery/plant-foods/jackfruit.jpg",
  "./assets/discovery/plant-foods/ampalaya.jpg",
  "./assets/discovery/plant-foods/malunggay.jpg",
  "./assets/discovery/plant-foods/patola.jpg",
  "./assets/discovery/plant-foods/kangkong.jpg",
  "./assets/discovery/plant-foods/string-beans.jpg",
  "./assets/discovery/plant-foods/CREDITS.md"
];

const CORE_PATHS = new Set(["/", "/index.html", "/styles.css", "/drawing-garden.css", "/outfit-check.css", "/app.js", "/drawing-garden.js", "/outfit-check.js"]);

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

async function networkFirst(request) {
  try {
    const response = await fetch(request, { cache: "no-store" });
    if (response && response.ok) {
      const cache = await caches.open(CACHE_NAME);
      await cache.put(request, response.clone());
    }
    return response;
  } catch {
    return (await caches.match(request)) || (await caches.match("./index.html"));
  }
}

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response && response.ok) {
      const cache = await caches.open(CACHE_NAME);
      await cache.put(request, response.clone());
    }
    return response;
  } catch {
    return caches.match("./index.html");
  }
}

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);
  const isSameOrigin = url.origin === self.location.origin;
  const isCoreRequest = isSameOrigin && (event.request.mode === "navigate" || CORE_PATHS.has(url.pathname));

  event.respondWith(isCoreRequest ? networkFirst(event.request) : cacheFirst(event.request));
});


self.addEventListener("message", (event) => {
  if (event.data?.type === "SKIP_WAITING") self.skipWaiting();
});
