# Adi's World — Cleanup & Fix Checklist

This checklist tracks the active cleanup and stabilization work from the September 20, 2026 full-site audit.

## P0 — Critical

- [x] **1. Fix service-worker syntax error**
  - Fixed missing comma in `APP_SHELL`.
  - Corrected Word Forest WebP asset path to `./assets/worlds/word-forest-card.webp`.
  - Verified `service-worker.js` parses successfully.
  - Completed on commit `454ff0820722325e04f64d101c3b41a0de5bd1c1`.

- [x] **2. Standardize cache/version handling**
  - Unified core app references to application version `v78`.
  - Aligned `index.html`, service-worker cache version, and service-worker registration.
  - Kept content-specific asset query versions separate where they are intentionally used for artwork refreshes.
  - Completed across commits `142d368d48611b4a574c24199d2cfe5509e0c2c0`, `c27d8c446ed87937f23f17d552f3c94de9cdc7b6`, and `21054ed2927acda3d834b56284642038f5372486`.

- [x] **3. Fix service-worker asset fallback behavior**
  - Failed non-navigation requests no longer receive `index.html`.
  - Navigation requests may still fall back to cached `index.html` for offline app routing.
  - Failed uncached assets now return an explicit HTTP 503 Offline response.
  - Verified service-worker syntax and fallback logic after the change.
  - Completed on commit `c27d8c446ed87937f23f17d552f3c94de9cdc7b6`.

- [x] **4. Add deployment syntax validation**
  - Added `scripts/validate-deploy.mjs` to validate JavaScript syntax, JSON parsing, and PWA version alignment.
  - Added GitHub Actions quality gate for pushes to `main`, pull requests, and manual runs.
  - Verified the validation step passes in GitHub Actions.
  - Completed across commits `010d255c30904b39b5f3ed0cbcffeaf8f9e321c2` and `d7d1412e76a3ffc6ed671e827da32812e44d0bf0`.

## P1 — High

- [x] **5. Add automated smoke tests**
  - Added `scripts/smoke-test.mjs` covering app shell, navigation, all 11 worlds, activity registration, scoring floor, persistent storage, local assets, manifest, and service-worker behavior.
  - Corrected the test to account for Drawing Garden being registered by its own module.
  - Verified the complete quality-gate workflow passes on `main` in GitHub Actions.
  - Completed across commits `ecffaa1c8f8f06fbb7751e70cfa261345238c02d` and `07ea57707634e85630dda08c84aa84e11bbfd370`.

- [ ] **6. Centralize audio handling**
  - Create one audio/speech manager for queueing, completion, cancellation, and navigation locks.

- [ ] **7. Localize external Bible Story images**
  - Store approved story illustrations under local `assets/` paths for offline reliability.

- [ ] **8. Audit every playable game end-to-end**
  - Setup, instructions, wrong answer, correct answer, score, completion, replay, and navigation.

- [ ] **9. Audit mobile/tablet responsive behavior**
  - Android phones first, tablets second, plus desktop compatibility.

- [ ] **10. Verify tracing/drawing input logic**
  - Make tracing tolerant of realistic child input and verify touch/stylus behavior.

- [ ] **11. Verify persistent progress/state**
  - Stars, completed games, story progress, outfit choices, and sound settings.

## P2 — Important Cleanup

- [ ] **12. Begin modularizing `app.js`**
  - Gradually separate worlds, games, navigation, audio, data, scoring, and progress.

- [ ] **13. Create a central asset registry**
  - Manage world images, game art, character art, story images, and fallbacks from one mapping.

- [ ] **14. Add controlled asset fallbacks**
  - Never expose a broken-image icon to the child.

- [ ] **15. Replace remaining emoji-first cards**
  - Use approved illustrated app-style artwork; keep emoji only as fallback.

- [ ] **16. Harden localStorage writes**
  - Gracefully handle unavailable storage, quota errors, or restricted environments.

- [ ] **17. Remove unused/legacy code**
  - Clean obsolete 3D Outfit Check and abandoned implementation paths after confirming no dependencies.

- [ ] **18. Remove obsolete voice configuration code**
  - Keep the current standard natural voice approach and remove abandoned voice settings.

- [ ] **19. Normalize naming**
  - Standardize Adi/Addi names, asset names, storage keys, and legacy implementation labels.

## P3 — PWA & Polish

- [ ] **20. Add proper PWA install icons**
  - 192x192, 512x512, and maskable PNG assets.

- [ ] **21. Audit complete offline coverage**
  - Core navigation, selected games, character art, and required educational assets.

- [ ] **22. Improve installed-PWA update behavior**
  - Ensure new versions replace stale content predictably.

- [ ] **23. Add asset loading/error states**
  - Friendly placeholders rather than blank or broken screens.

- [ ] **24. Optimize image sizes**
  - Resize/compress assets based on actual UI usage.

- [ ] **25. Lazy-load world assets**
  - Avoid loading unused world content at startup.

## P4 — Documentation & Maintainability

- [ ] **26. Update README**
  - Reflect the current 11-world product and current playable features.

- [ ] **27. Keep master prompt aligned with production**
  - Permanent behavior changes must match the repository contract.

- [ ] **28. Create a permanent QA/release checklist**
  - Mobile, audio, scoring, assets, offline, navigation, accessibility, and regression checks.

- [ ] **29. Document asset licensing/source credits**
  - Especially externally sourced educational and Bible artwork.

- [ ] **30. Move toward world-level folders/modules**
  - Each world should gradually own its data, assets, styles, and game logic.

## Active Item

**Next:** Item 6 — Centralize audio handling.
