import fs from "node:fs";

const html = fs.readFileSync("index.html", "utf8");
const app = fs.readFileSync("app.js", "utf8");
const store = fs.readFileSync("progress-store.js", "utf8");
const sw = fs.readFileSync("service-worker.js", "utf8");

let failed = false;
let passed = 0;
function check(condition, message) {
  if (condition) { passed += 1; console.log("PASS:", message); }
  else { failed = true; console.error("FAIL:", message); }
}

check(html.indexOf("progress-store.js?v=") < html.indexOf("app.js?v="), "Progress store loads before app.js");
check(store.includes("window.AdiProgressStore"), "Progress store exports one browser module API");
check(app.includes("window.AdiProgressStore?.load?.()"), "app.js loads progress through module API");
check(app.includes("window.AdiProgressStore?.save?.(progress)"), "app.js saves progress through module API");
check(!app.includes("function safeStorageGet"), "Storage helper implementation is no longer duplicated in app.js");
check(!app.includes("function normalizeProgressState"), "Progress normalization implementation is no longer duplicated in app.js");
check(!app.includes('const STORAGE_KEY = "adis-world-progress-v1"'), "Progress storage key ownership moved out of app.js");
check(sw.includes("./progress-store.js?v=") && sw.includes('"/progress-store.js"'), "Progress module is part of the PWA core cache");
check(app.split("\n").length < 4303, "app.js line count was reduced by extraction");

console.log(`Modularization audit passed: ${passed} checks`);
if (failed) process.exit(1);
