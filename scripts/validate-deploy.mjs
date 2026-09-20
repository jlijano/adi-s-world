import fs from "node:fs";
import vm from "node:vm";

const jsFiles = ["audio-manager.js", "app.js", "drawing-garden.js", "outfit-check.js", "service-worker.js"];
const jsonFiles = ["manifest.json", "master-prompt-version.json"];
let failed = false;

function fail(message) {
  failed = true;
  console.error("FAIL:", message);
}

for (const file of jsFiles) {
  try {
    const source = fs.readFileSync(file, "utf8");
    new vm.Script(source, { filename: file });
    console.log("PASS syntax:", file);
  } catch (error) {
    fail(`${file} syntax error: ${error.message}`);
  }
}

for (const file of jsonFiles) {
  try {
    JSON.parse(fs.readFileSync(file, "utf8"));
    console.log("PASS json:", file);
  } catch (error) {
    fail(`${file} JSON error: ${error.message}`);
  }
}

const html = fs.readFileSync("index.html", "utf8");
const versions = [...html.matchAll(/(?:src|href)="[^"]+\?v=(\d+)"/g)].map((match) => match[1]);
const uniqueVersions = [...new Set(versions)];
if (uniqueVersions.length !== 1) {
  fail(`index.html core asset versions are inconsistent: ${uniqueVersions.join(", ")}`);
} else {
  console.log("PASS asset version:", uniqueVersions[0]);
}

const app = fs.readFileSync("app.js", "utf8");
const sw = fs.readFileSync("service-worker.js", "utf8");
const appVersion = /service-worker\.js\?v=(\d+)/.exec(app)?.[1];
const swVersion = /const APP_VERSION = "(\d+)"/.exec(sw)?.[1];
if (!appVersion || !swVersion || appVersion !== swVersion || appVersion !== uniqueVersions[0]) {
  fail(`PWA version mismatch: index=${uniqueVersions[0] || "missing"}, app=${appVersion || "missing"}, sw=${swVersion || "missing"}`);
} else {
  console.log("PASS PWA version alignment:", appVersion);
}

if (failed) process.exit(1);
console.log("Deployment validation passed.");
