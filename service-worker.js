const APP_VERSION = "81";
const CACHE_NAME = `adis-world-v${APP_VERSION}`;
const APP_SHELL = [
  "./", "./index.html",
  "./styles.css?v=81", "./drawing-garden.css?v=81", "./outfit-check.css?v=81", "./outfit-check-layered.css?v=81",
  "./audio-manager.js?v=81", "./app.js?v=81", "./drawing-garden.js?v=81", "./outfit-check.js?v=81",
  "./assets/character/adi-front-3d.webp",
  "./assets/character/outfit-check/outfit-layers.svg",
  "./assets/character/idle-front.webp", "./assets/character/hi-wave.webp",
  "./styles.css", "./drawing-garden.css", "./outfit-check.css", "./outfit-check-layered.css",
  "./audio-manager.js", "./app.js", "./drawing-garden.js", "./outfit-check.js", "./manifest.json",
  "./assets/icons/icon.svg", "./assets/icons/adis-world-splash.jpg", "./assets/worlds/word-forest-card.svg",
  "./assets/blessing-garden/gideon/gideon-call.jpg",
  "./assets/blessing-garden/stories/creation.jpg",
  "./assets/blessing-garden/stories/noah.png",
  "./assets/blessing-garden/stories/david-goliath.jpg",
  "./assets/blessing-garden/stories/daniel-lions.jpg",
  "./assets/blessing-garden/stories/jesus-children.jpg",
  "./assets/blessing-garden/stories/CREDITS.md",
  "./assets/discovery/plant-foods/mango.jpg", "./assets/discovery/plant-foods/banana-photo.jpg", "./assets/discovery/plant-foods/pineapple.jpg",
  "./assets/discovery/plant-foods/carrot.jpg", "./assets/discovery/plant-foods/broccoli.jpg", "./assets/discovery/plant-foods/papaya.jpg",
  "./assets/discovery/plant-foods/guava.jpg", "./assets/discovery/plant-foods/coconut.jpg", "./assets/discovery/plant-foods/eggplant.jpg",
  "./assets/discovery/plant-foods/squash.jpg", "./assets/discovery/plant-foods/cucumber.jpg", "./assets/discovery/plant-foods/chico.jpg",
  "./assets/discovery/plant-foods/calamansi.jpg", "./assets/discovery/plant-foods/lanzones.jpg", "./assets/discovery/plant-foods/jackfruit.jpg",
  "./assets/discovery/plant-foods/ampalaya.jpg", "./assets/discovery/plant-foods/malunggay.jpg", "./assets/discovery/plant-foods/patola.jpg",
  "./assets/discovery/plant-foods/kangkong.jpg", "./assets/discovery/plant-foods/string-beans.jpg", "./assets/discovery/plant-foods/CREDITS.md",
  "./assets/worlds/word-forest-card.webp",
];
const CORE_PATHS = new Set(["/", "/index.html", "/styles.css", "/drawing-garden.css", "/outfit-check.css", "/outfit-check-layered.css", "/audio-manager.js", "/app.js", "/drawing-garden.js", "/outfit-check.js"]);
self.addEventListener("install", (event) => { event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)).then(() => self.skipWaiting())); });
self.addEventListener("activate", (event) => { event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))).then(() => self.clients.claim())); });
async function networkFirst(request) {
  try {
    const response = await fetch(request, { cache: "no-store" });
    if (response && response.ok) {
      const cache = await caches.open(CACHE_NAME);
      await cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await caches.match(request);
    if (cached) return cached;
    if (request.mode === "navigate") return caches.match("./index.html");
    return new Response("Offline", { status: 503, statusText: "Offline" });
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
    return new Response("Offline", { status: 503, statusText: "Offline" });
  }
}
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  const isSameOrigin = url.origin === self.location.origin;
  const isNavigation = event.request.mode === "navigate";
  const isCoreRequest = isSameOrigin && (isNavigation || CORE_PATHS.has(url.pathname));
  event.respondWith(isCoreRequest ? networkFirst(event.request) : cacheFirst(event.request));
});
self.addEventListener("message", (event) => { if (event.data?.type === "SKIP_WAITING") self.skipWaiting(); });
