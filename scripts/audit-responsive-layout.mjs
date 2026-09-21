import fs from "node:fs";

const html = fs.readFileSync("index.html", "utf8");
const styles = fs.readFileSync("styles.css", "utf8");
const drawing = fs.readFileSync("drawing-garden.css", "utf8");
const outfit = fs.readFileSync("outfit-check-layered.css", "utf8");

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

check(
  html.includes('name="viewport"') &&
  html.includes('width=device-width') &&
  html.includes('viewport-fit=cover'),
  "Viewport meta supports mobile width and safe areas"
);

check(styles.includes("env(safe-area-inset-bottom"), "Safe-area bottom inset is used");
check(styles.includes("@media (max-width: 360px)"), "Small-phone breakpoint exists");
check(styles.includes("@media (max-width: 520px)"), "Phone breakpoint exists");
check(
  styles.includes("@media (min-width: 700px) and (max-width: 1023px)"),
  "Tablet breakpoint exists"
);
check(styles.includes("min-width: 0;"), "Shrinkable grid/flex children are protected from overflow");
check(styles.includes(".picture-confirm-card") && styles.includes("max-width: calc(100vw - 24px)"), "Confirmation dialogs fit narrow viewports");
check(styles.includes(".topbar-actions") && styles.includes("flex: 0 0 auto"), "Header actions remain compact on phones");
check(styles.includes(".brand-button") && styles.includes("min-width: 0"), "Brand can shrink instead of forcing horizontal overflow");
check(styles.includes(".activity-card.activity-card-visual") && styles.includes("grid-template-columns: 96px minmax(0, 1fr)"), "Activity cards compact on phones");
check(styles.includes(".bible-reader-actions") && styles.includes("grid-template-columns: 1fr"), "Bible reader controls stack on phones");
check(styles.includes(".world-grid") && styles.includes("repeat(3, minmax(0, 1fr))"), "Tablet world grid uses adaptive columns");

check(drawing.includes("@media (max-width: 360px)"), "Drawing Garden has narrow-phone overrides");
check(drawing.includes("repeat(3, minmax(0, 1fr))"), "Tracing picker reduces columns on small phones");
check(drawing.includes(".drawing-actions.four") && drawing.includes("grid-template-columns: 1fr"), "Drawing action buttons can stack on narrow phones");
check(drawing.includes(".drawing-canvas") && drawing.includes("width: 100%"), "Drawing canvas scales to its container");
check(drawing.includes("touch-action: none"), "Drawing canvas supports reliable pointer drawing");

check(outfit.includes("@media(max-width:360px)"), "Outfit Check has narrow-phone override");
check(outfit.includes(".outfit-avatar-layered{min-height:470px}"), "Outfit stage height is reduced on narrow phones");
check(outfit.includes(".outfit-category-tabs") && outfit.includes("overflow-x:auto"), "Outfit category tabs can scroll horizontally");
check(outfit.includes(".outfit-category-button{min-height:44px"), "Outfit category tap targets stay at least 44px high");

console.log(`Responsive layout audit passed: ${passed} checks`);
if (failed) process.exit(1);
