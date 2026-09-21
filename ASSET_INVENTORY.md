# Adi's World Asset Inventory

Item 13 centralizes app-owned asset paths so runtime features do not invent or duplicate asset locations.

## Registry-owned assets

`asset-registry.js` is the source of truth for app-owned image paths and safe fallback categories.

Current registry groups:

- **Icons:** application icon and splash artwork.
- **Character:** Adi idle, greeting, Outfit Check base, and Outfit Check layer sprite.
- **World artwork:** Word Forest card/reference artwork.
- **Blessing Garden:** Gideon artwork and five localized Bible Story images.
- **Discovery Lab:** 20 localized plant-food photographs.

The registry currently contains **34 app-owned asset entries**.

## Safe fallbacks

The registry provides fallback types for:

- generic image
- character
- world
- story
- food

Unknown registry keys resolve to the corresponding safe fallback instead of returning an invented path.

## Intentional bootstrap exceptions

These paths remain literal because they are required before JavaScript can initialize or are non-visual credit files:

- `index.html`: `assets/icons/icon.svg`
- `index.html`: `assets/icons/adis-world-splash.jpg`
- `manifest.json`: `assets/icons/icon.svg`
- `service-worker.js`: Bible Story `CREDITS.md`
- `service-worker.js`: plant-food `CREDITS.md`

All runtime feature modules—`app.js`, `drawing-garden.js`, `outfit-check.js`, `audio-manager.js`, and `progress-store.js`—must remain free of direct `assets/` literals.

## Regression enforcement

`scripts/audit-assets.mjs` verifies:

- every registered asset exists;
- fallback types resolve safely;
- runtime modules contain no hardcoded asset paths;
- bootstrap hardcoded paths stay within the allowlist;
- the service worker populates app-owned cache entries from the central registry.
