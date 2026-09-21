importScripts("./asset-registry.js?v=86");
const APP_VERSION = "86";
const CACHE_NAME = `adis-world-v${APP_VERSION}`;
const APP_SHELL = [
  "./", "./index.html",
  "./styles.css?v=86", "./drawing-garden.css?v=86", "./outfit-check.css?v=86", "./outfit-check-layered.css?v=86",
  "./asset-registry.js?v=86", "./progress-store.js?v=86", "./audio-manager.js?v=86", "./app.js?v=86", "./drawing-garden.js?v=86", "./outfit-check.js?v=86",
  ...Object.values(globalThis.AdiAssets.all()),
  "./assets/blessing-garden/stories/CREDITS.md",
  "./assets/discovery/plant-foods/CREDITS.md",
];
const CORE_PATHS = new Set(["/", "/index.html", "/styles.css", "/drawing-garden.css", "/outfit-check.css", "/outfit-check-layered.css", "/asset-registry.js", "/progress-store.js", "/audio-manager.js", "/app.js", "/drawing-garden.js", "/outfit-check.js"]);
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
