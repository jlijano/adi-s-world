# Adi's World

A mobile-first educational web app and PWA for children around ages 3–5.

## Current MVP

The first playable build includes:

- World map with all 10 canonical Adi's World locations.
- Word Forest — 3 learning games.
- Number Island — 3 learning games.
- Puzzle Mountain — 3 learning games.
- 3 rounds per game.
- Gentle retry feedback.
- Local star/progress tracking with `localStorage`.
- Optional browser speech instructions.
- Responsive phone/tablet layout.
- Installable PWA shell with offline caching.

## Run locally

Because the app includes a service worker, serve it from a local HTTP server rather than opening `index.html` directly.

Example:

```bash
python3 -m http.server 8080
```

Then open:

```
http://localhost:8080
```

## Main files

- `index.html` — app shell.
- `styles.css` — mobile-first visual system.
- `app.js` — worlds, activities, game engine, navigation, and progress.
- `manifest.json` — installable PWA metadata.
- `service-worker.js` — offline app-shell cache.
- `PROJECT_MASTER_PROMPT.md` — durable project contract.

## Product direction

The canonical product and development rules are maintained in `PROJECT_MASTER_PROMPT.md`.
