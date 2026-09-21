import fs from "node:fs";

const app = fs.readFileSync("app.js", "utf8");
const outfit = fs.readFileSync("outfit-check.js", "utf8");
const audio = fs.readFileSync("audio-manager.js", "utf8");

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

check(app.includes('const STORAGE_KEY = "adis-world-progress-v1"'), "Progress storage key remains backward-compatible");
check(app.includes("function safeStorageGet"), "Progress reads are guarded");
check(app.includes("function safeStorageSet"), "Progress writes are guarded");
check(app.includes("function safeStorageRemove"), "Legacy setting cleanup is guarded");
check(app.includes("function normalizeProgressState"), "Stored progress is normalized before use");
check(app.includes("Math.max(0, Math.floor(Number(source.stars) || 0))"), "Stored stars cannot become negative or invalid");
check(app.includes("completed[key] = Math.floor(numericStars)"), "Completed activity star values are normalized");
check(app.includes("storyProgress"), "Bible Story progress remains part of persisted progress");
check(app.includes("saveProgress()") && app.includes("safeStorageSet(STORAGE_KEY"), "Progress saving uses safe storage wrapper");
check(app.includes("markStorySceneSeen") && app.includes("saveProgress();"), "Bible Story scene progress is persisted");

check(outfit.includes('const OUTFIT_STORAGE_KEY = "adis-world-outfit-v2"'), "Outfit storage key remains backward-compatible");
check(outfit.includes("function safeGet"), "Outfit reads are guarded");
check(outfit.includes("function safeSet"), "Outfit writes are guarded");
check(outfit.includes("function sanitizeOutfit"), "Outfit state is validated before use");
check(outfit.includes('"adis-world-outfit-v1"'), "Legacy outfit state remains supported");
check(outfit.includes("OUTFIT_OPTIONS[category].some"), "Invalid outfit option IDs are rejected");
check(outfit.includes("saveOutfit()") && outfit.includes("safeSet(OUTFIT_STORAGE_KEY"), "Outfit saving uses safe storage wrapper");

check(audio.includes('const SOUND_KEY = "adis-world-sound-v1"'), "Sound preference key remains stable");
check(audio.includes('const RATE_KEY = "adis-world-speech-rate-v1"'), "Speech-rate preference key remains stable");
check(audio.includes("function safeGet"), "Audio setting reads are guarded");
check(audio.includes("function safeSet"), "Audio setting writes are guarded");
check(audio.includes("safeSet(SOUND_KEY"), "Sound setting uses safe storage wrapper");
check(audio.includes("safeSet(RATE_KEY"), "Speech-rate setting uses safe storage wrapper");
check(audio.includes("Object.prototype.hasOwnProperty.call(RATE_PRESETS, ratePreset)"), "Invalid stored speech-rate values fall back safely");

console.log(`Persistence audit passed: ${passed} checks`);
if (failed) process.exit(1);
