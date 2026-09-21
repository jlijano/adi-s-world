import fs from "node:fs";

const drawing = fs.readFileSync("drawing-garden.js", "utf8");
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

check(drawing.includes('const toleranceWidth = round.guideType === "shape" ? 54 : 48;'), "Tracing uses widened child-friendly tolerance corridor");
check(drawing.includes('drawStrokeMask(expandedInk.getContext("2d"), strokes, 18)'), "Tracing coverage uses expanded stroke mask");
check(drawing.includes("(activeGame.drawingDistance || 0) < 70"), "Minimum drawing distance is child-friendly");
check(drawing.includes("const minimumAccuracy = isWord ? 0.42 : 0.48;"), "Minimum accuracy threshold is relaxed");
check(drawing.includes("const minimumCoverage = isWord ? 0.22 : 0.28;"), "Minimum coverage threshold is relaxed");
check(drawing.includes("const maximumStrayRatio = isWord ? 0.58 : 0.52;"), "Stray tolerance allows normal finger wobble");
check(drawing.includes("const clearlyFollowedGuide = result.coverage >= strongCoverage"), "Strong guide coverage can pass despite lower pixel accuracy");
check(drawing.includes("if (!acceptablePath && !clearlyFollowedGuide)"), "Validator uses combined acceptance logic");
check(drawing.includes("Almost there! Trace a little more of the dotted line."), "Retry feedback encourages continued tracing");
check(!drawing.includes("Clear it and try the shape again."), "Validator no longer forces children to erase a mostly-correct trace");

console.log(`Tracing recognition audit passed: ${passed} checks`);
if (failed) process.exit(1);
