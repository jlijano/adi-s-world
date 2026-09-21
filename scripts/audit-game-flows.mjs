import fs from "node:fs";

const app = fs.readFileSync("app.js", "utf8");
const drawing = fs.readFileSync("drawing-garden.js", "utf8");
const outfit = fs.readFileSync("outfit-check.js", "utf8");

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

const standardActivities = [
  ["word", "letter-find"],
  ["word", "first-sound"],
  ["word", "picture-word"],
  ["word", "build-word"],
  ["word", "rhyme-time"],
  ["word", "start-word"],
  ["word", "sound-hunt"],
  ["word", "sound-match"],
  ["discovery", "plant-food-sort"],
  ["blessing", "verse-time"],
  ["blessing", "bible-questions"],
  ["blessing", "gideon-activity"],
  ["number", "count-stars"],
  ["number", "more-or-less"],
  ["number", "number-order"],
  ["number", "count-match"],
  ["puzzle", "odd-one-out"],
  ["puzzle", "pattern"],
  ["puzzle", "shape-match"]
];

for (const [world, activity] of standardActivities) {
  check(app.includes(`id: "${activity}"`), `Activity is registered: ${world} / ${activity}`);
  check(
    app.includes(`"${world}:${activity}": {`) || app.includes(`activityId === "${activity}"`),
    `Activity has instructions/setup path: ${activity}`
  );
}

for (const activity of ["letter-tracing", "number-tracing", "shape-tracing", "word-writing", "free-drawing"]) {
  check(drawing.includes(`id: "${activity}"`), `Drawing activity is registered: ${activity}`);
  check(drawing.includes(`"drawing:${activity}": {`), `Drawing activity has instructions: ${activity}`);
}

check(app.includes('activityButton.dataset.worldId === "home"') && app.includes('renderOutfitCheck()'), "Outfit Check has entry route");
check(outfit.includes("function renderOutfitCheck"), "Outfit Check renderer exists");
check(outfit.includes("function saveOutfit"), "Outfit Check persists selections");
check(outfit.includes("[data-outfit-option]"), "Outfit Check option interaction exists");

check(app.includes("function renderBibleStoryLibrary"), "Bible Story library entry exists");
check(app.includes("function renderBibleStory("), "Bible Story reader exists");
check(app.includes("data-bible-story-next"), "Bible Story next navigation exists");
check(app.includes("data-bible-story-prev"), "Bible Story previous navigation exists");
check(app.includes("data-bible-story-finish"), "Bible Story finish action exists");
check(app.includes("function renderBibleStoryCompletion"), "Bible Story completion screen exists");

check(app.includes("function startConfiguredStartWordGame"), "Start the Word setup launches game");
check(app.includes("function startConfiguredSoundHuntGame"), "Sound Hunt setup launches game");
check(app.includes("function handleSoundMatchPicture") && app.includes("function handleSoundMatchLetter"), "Match the Sound handlers exist");
check(app.includes("function handleBuildLetter") && app.includes("function resetBuildWordRound"), "Build the Word play/reset handlers exist");
check(app.includes("function handleCountStarsChoice"), "Let's Count answer handler exists");
check(app.includes("function handleNumberSequenceChoice"), "What Comes Next answer handler exists");
check(app.includes("function handleCountMatchNumberChoice") && app.includes("function handleCountMatchWordChoice"), "Count & Match two-step handlers exist");
check(app.includes("function showCompareChoiceConfirmation"), "Which Has More confirmation flow exists");
check(app.includes("function showFirstSoundConfirmation"), "First Sound confirmation flow exists");
check(app.includes("function showPictureChoiceConfirmation"), "Picture Match confirmation flow exists");
check(app.includes("function handlePlantFoodChoice"), "Plant Food Sort answer handler exists");
check(app.includes("function completeActivity"), "Shared completion flow exists");
check(app.includes("renderWorld(worldId)") && app.includes("gameSession = null"), "Completion returns to the world and clears session");

check(app.includes('refreshVisibleSessionScore();\n    button.classList.add("is-try-again")'), "Wrong-answer shared flow refreshes visible score");
check(app.includes('slot.classList.remove("is-filled", "is-locked")'), "Build the Word reset fully unlocks slots");
check(app.includes("speakMatchFeedback"), "Match the Sound preserves the selected letter cue before feedback");
check(app.includes("pendingFirstSoundChoice) return"), "First Sound blocks duplicate confirmation taps");
check(app.includes("pendingPictureChoice) return"), "Picture Match blocks duplicate confirmation taps");

check(drawing.includes("function finishStructuredRound"), "Structured drawing completion handler exists");
check(drawing.includes('completeActivity("drawing", activityId)'), "Structured Drawing Garden completes through shared scoring");
check(drawing.includes('completeActivity("drawing", "free-drawing")'), "Free Drawing has completion flow");
check(drawing.includes("freeDrawingState.history.length"), "Free Drawing finish/save validates remaining artwork");
check(drawing.includes("activeGame.drawingDistance = freeDrawingState.history.reduce"), "Free Drawing undo recalculates drawing state");

console.log(`Playable game-flow audit passed: ${passed} checks`);
if (failed) process.exit(1);
