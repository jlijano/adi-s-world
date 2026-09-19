# Adi's World Master Prompt Changelog

This changelog tracks durable changes to `PROJECT_MASTER_PROMPT.md`.

## 1.0.0 — 2026-09-19

Initial master prompt baseline created from the project's founding conversation.

Established:

- Adi's World identity and ages 3–5 target.
- Ten canonical learning worlds.
- Play-based learning philosophy.
- Child safety, privacy, UX, accessibility, and feedback rules.
- Static-first, mobile-first, PWA-ready technical direction.
- GitHub repository as source of truth.
- Reusable game-engine and data-driven content approach.
- MVP scope direction.
- GitHub workflow and QA expectations.
- Self-improving master-prompt protocol.
- Semantic versioning rules for future updates.
- Requirement that durable project decisions be recorded in the repository.


## 1.1.0 — 2026-09-19

Added:

- First playable mobile-first MVP implementation.
- Responsive phone/tablet interface and bottom navigation.
- Word Forest, Number Island, and Puzzle Mountain with three activities each.
- Three rounds per activity with gentle retry feedback.
- Local star/progress tracking with localStorage.
- Optional browser speech instructions.
- PWA manifest, offline app-shell service worker, and app icon.
- README with local run instructions and MVP architecture notes.

Changed:

- Current baseline now records the implemented mobile-first PWA MVP.
- Phone-first and tablet-second UI priority is now explicit.

Reason:

- The project moved from planning into a working product baseline that future features should build on rather than replace.


## 1.2.0 — 2026-09-19

Added:

- Child-friendly animated launch/loading screen for phone and tablet.
- Adi's World app icon as the launch focal point.
- Gentle clouds, stars, sparkles, and three-dot loading animation.
- Reduced-motion behavior for accessibility.

Changed:

- App shell stays hidden until the splash transition completes to prevent visual flashing.
- Service-worker cache version bumped so deployed devices receive the new launch experience.

Reason:

- The web app should feel more like a polished native children’s app when opened, using the limited visual assets currently available.
