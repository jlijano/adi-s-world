import fs from "node:fs";
import vm from "node:vm";

const registrySource = fs.readFileSync("asset-registry.js", "utf8");
const context = {};
vm.createContext(context);
vm.runInContext(registrySource, context, { filename: "asset-registry.js" });

const registry = context.AdiAssets;
let failed = false;
let passed = 0;

function check(condition, message) {
  if (condition) {
    passed += 1;
    console.log("PASS:", message);
  } else {
    failed = true;
    console.error("FAIL:", message);
  }
}

check(registry && typeof registry.resolve === "function", "Asset registry exposes resolve()");
check(registry && typeof registry.all === "function", "Asset registry exposes all()");
check(registry?.fallbacks?.image, "Generic image fallback exists");
check(registry?.fallbacks?.character, "Character fallback exists");
check(registry?.fallbacks?.world, "World fallback exists");
check(registry?.fallbacks?.story, "Story fallback exists");
check(registry?.fallbacks?.food, "Food fallback exists");
check(registry.resolve("missing.path", "character") === registry.fallbacks.character, "Unknown character asset resolves to safe character fallback");
check(registry.resolve("missing.path", "story") === registry.fallbacks.story, "Unknown story asset resolves to safe story fallback");

const registered = registry.all();
const entries = Object.entries(registered);
check(entries.length >= 34, `Registry inventories app-owned assets (${entries.length} entries)`);

for (const [key, assetPath] of entries) {
  check(typeof assetPath === "string" && assetPath.startsWith("assets/"), `Registry path is local: ${key}`);
  check(fs.existsSync(assetPath), `Registered asset exists: ${assetPath}`);
}

const runtimeFiles = ["app.js", "drawing-garden.js", "outfit-check.js", "audio-manager.js", "progress-store.js"];
for (const file of runtimeFiles) {
  const source = fs.readFileSync(file, "utf8");
  check(!/(?:\.\/)?assets\//.test(source), `${file} has no hardcoded asset path`);
}

const index = fs.readFileSync("index.html", "utf8");
const manifest = fs.readFileSync("manifest.json", "utf8");
const sw = fs.readFileSync("service-worker.js", "utf8");

const indexRefs = [...index.matchAll(/(?:\.\/)?assets\/[A-Za-z0-9_./?=&%-]+/g)].map((m) => m[0]);
const manifestRefs = [...manifest.matchAll(/(?:\.\/)?assets\/[A-Za-z0-9_./?=&%-]+/g)].map((m) => m[0]);
const swRefs = [...sw.matchAll(/(?:\.\/)?assets\/[A-Za-z0-9_./?=&%-]+/g)].map((m) => m[0]);

check(indexRefs.every((ref) => ["assets/icons/icon.svg", "assets/icons/adis-world-splash.jpg"].includes(ref)), "index.html hardcoded assets are bootstrap-only allowlist");
check(manifestRefs.every((ref) => ref === "assets/icons/icon.svg"), "manifest hardcoded asset is bootstrap-only app icon");
check(swRefs.every((ref) => ["./assets/blessing-garden/stories/CREDITS.md", "./assets/discovery/plant-foods/CREDITS.md"].includes(ref)), "Service worker hardcoded assets are credits-only allowlist");
check(sw.includes("Object.values(globalThis.AdiAssets.all())"), "PWA app-owned asset cache is registry-driven");
check(sw.includes('importScripts("./asset-registry.js?v=86")'), "Service worker loads the same central asset registry");

console.log(`Asset registry audit passed: ${passed} checks`);
if (failed) process.exit(1);
