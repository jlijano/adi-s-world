import fs from "node:fs";
import path from "node:path";

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

function exists(localPath) {
  return fs.existsSync(localPath.split("?")[0].replace(/^\.\//, ""));
}

const html = fs.readFileSync("index.html", "utf8");
const app = fs.readFileSync("app.js", "utf8");
const audio = fs.readFileSync("audio-manager.js", "utf8");
const sw = fs.readFileSync("service-worker.js", "utf8");
const manifest = JSON.parse(fs.readFileSync("manifest.json", "utf8"));

check(html.includes('id="app"'), "App shell exists");
check(html.includes('id="screen"'), "Main screen mount exists");
check(html.includes('data-nav="home"') && html.includes('data-nav="worlds"') && html.includes('data-nav="progress"'), "Primary navigation controls exist");
check(html.includes('data-action="show-settings"'), "Settings entry exists in app header");
check(html.includes('audio-manager.js?v='), "Central audio manager loads before app");

for (const id of ["home","word","number","drawing","discovery","blessing","robot","puzzle","memory","feelings","adventure"]) {
  check(app.includes(`id: "${id}"`), `World definition exists: ${id}`);
}

for (const group of ["home","word","number","discovery","blessing","puzzle"]) {
  check(new RegExp(`\\n  ${group}: \\[|\\n  ${group}: \\{`).test(app), `Activity group exists: ${group}`);
}
const drawingModule = fs.readFileSync("drawing-garden.js", "utf8");
check(drawingModule.includes("activities.drawing = ["), "Drawing activity group is registered by drawing-garden.js");

check(app.includes("renderHome()"), "Home renderer is present");
check(app.includes("renderWorlds()"), "Worlds renderer is present");
check(app.includes("renderProgress()"), "Progress renderer is present");
check(app.includes('document.addEventListener("click"'), "Delegated interaction handler is present");

check(app.includes("gameSession.score = Math.max(0"), "Session score cannot go below zero");
check(app.includes("progress.stars"), "Persistent star tracking is present");
check(app.includes("localStorage"), "Local progress storage is present");
check(app.includes("function renderSettings()"), "Settings screen renderer is present");
check(!app.includes("https://commons.wikimedia.org/wiki/Special:Redirect/file/"), "Bible Story images are local");
check(app.includes("window.AdiAudio"), "App routes speech through centralized audio manager");
check(audio.includes("window.AdiAudio"), "Central audio manager exports its API");
check(audio.includes("setRatePreset") && audio.includes("setEnabled"), "Audio settings controls are supported");

const refs = [];
for (const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
  const ref = match[1];
  if (!/^https?:|^#|^data:/.test(ref)) refs.push(ref);
}
for (const source of [app, sw, fs.readFileSync("outfit-check.js", "utf8"), fs.readFileSync("drawing-garden.js", "utf8")]) {
  for (const match of source.matchAll(/["'](\.\/?assets\/[^"'\s)]+)["']/g)) refs.push(match[1]);
}
const uniqueRefs = [...new Set(refs)];
const missing = uniqueRefs.filter((ref) => !exists(ref));
check(missing.length === 0, missing.length ? `All local assets exist; missing: ${missing.join(", ")}` : "All referenced local assets exist");

check(manifest.name === "Adi's World", "Manifest app name is correct");
check(manifest.display === "standalone", "Manifest uses standalone display");
check(typeof manifest.start_url === "string" && typeof manifest.scope === "string", "Manifest start_url and scope exist");
check(Array.isArray(manifest.icons) && manifest.icons.length > 0, "Manifest has at least one install icon");

check(sw.includes('const APP_VERSION = "'), "Service worker has explicit app version");
check(sw.includes("skipWaiting()") && sw.includes("clients.claim()"), "Service worker update lifecycle is configured");
check(sw.includes('request.mode === "navigate"'), "Service worker distinguishes navigation requests");
check(sw.includes('new Response("Offline", { status: 503'), "Failed uncached assets return 503 offline");
check(!/async function cacheFirst[\s\S]*?caches\.match\("\.\/index\.html"\)/.test(sw), "Asset cache fallback does not return index.html");

check(app.includes('register("./service-worker.js?v='), "App registers versioned service worker");
check(app.includes('{ updateViaCache: "none" }'), "Service worker update check bypasses HTTP cache");

console.log(`Smoke tests passed: ${passed}`);
if (failed) process.exit(1);
