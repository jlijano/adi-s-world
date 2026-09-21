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

- [x] **6. Centralize audio handling**
  - Added `audio-manager.js` as the single shared speech/audio controller.
  - Centralized sound enable/disable, voice selection, speaking speed, cancellation, speaking-state checks, and multi-part speech sequencing.
  - Routed the main `speak()`, instruction-transition waits, Bible story navigation waits, and Adi greeting through the shared manager.
  - Added an in-app Settings screen with Sound On/Off, Slow/Normal/Quick speaking speed, and Test Voice.
  - Saved audio preferences locally on the device.
  - Added the Settings button to the app header and cached the audio manager for offline use in PWA version `v79`.
  - Extended deployment validation and smoke tests to cover the new audio manager and Settings UI.
  - Completed across commits `6b4a5203069359536baa4de8036e21e3e66c727b`, `563f483b4980a0cf0877c65dd0a94904a29b641e`, `65c081e7edd62f5e85c1931f52b0c9ea92afef36`, `eb6e2717a3f98ceaafd77ef11d3d498b60bba2bb`, `486c51eabf31fc34e9ca5bfdf09268eb0441366a`, `cbc9cc88e723bb1f03a4cff9240f3f25bae72b9a`, `2940eafe4849a182725a8b47e0b62c2f5905e225`, and `46792d901ffc04dfeec5519abbcafd68457d327b`.

- [x] **7. Localize external Bible Story images**
  - Cached the five externally hosted Bible Story illustrations under `assets/blessing-garden/stories/`.
  - Added `CREDITS.md` for the local Bible Story artwork sources and public-domain notes.
  - Replaced all 30 external Wikimedia image-load URLs in Bible Story covers/scenes with local asset paths while keeping source-page metadata for attribution.
  - Added all local Bible Story assets to the PWA app shell and bumped the app/cache version to `v80`.
  - Added a smoke-test assertion that rejects external Wikimedia Bible Story image redirects.
  - Verified deployment validation and automated smoke tests both pass.
  - Completed across commits `d9537c3ab0a3fe7714db266003f504f8d660c915`, `0be46b67174a28815561d66cba0c4ba69303df80`, `b422d4da07cbe486d6bfb6073eb1de3b7c04c751`, `c376fabe3b5530bb2be6e09579526b9dae10a392`, `7754ea3247141d69e1098326d50bd77277b69069`, and `94644b9058dd98e9731c80c32b56385fb9f47ebc`.

- [x] **8. Audit every playable game end-to-end**
  - Audited all currently playable Word Forest, Number Island, Drawing Garden, Discovery Lab, Blessing Garden, Puzzle Mountain, Bible Story, and Outfit Check flows from entry through completion/back navigation.
  - Fixed stale visible scores after generic wrong answers and Build the Word completion.
  - Fixed Build the Word reset so locked slots fully unlock.
  - Fixed Build the Word and Match the Sound audio sequencing so letter sounds are not immediately cancelled by feedback speech.
  - Prevented duplicate rapid-tap confirmation dialogs in First Sound and Picture Match and restored choices correctly on cancel.
  - Added a safe guard for missing/empty round data so a malformed activity returns to its world instead of breaking the game view.
  - Fixed Free Drawing undo state so undo recalculates remaining drawing distance/strokes and an empty canvas cannot be finished.
  - Added `scripts/audit-game-flows.mjs` with permanent coverage for all currently playable activities, custom handlers, reset paths, completion paths, Bible Story navigation, Outfit Check persistence, and Drawing Garden completion.
  - Added the game-flow audit to the GitHub Actions quality gate.
  - Bumped app/PWA cache version to `v81`.
  - Verified deployment validation, playable game-flow audit, and automated smoke tests all pass together.
  - Completed across commits `30f1140533fcd2512010a605368e956a8c766cbe`, `3eaea78223f1ff508c3ee0992e8d1052251b3028`, `25bafed44d4e653b22a012eab46858be324b89df`, `6478553c268f6ec1d1850c7c821b5c34d2b4b46f`, `e640eea02c803ef1dbce2c6f440390d1028f9b59`, `33fb6a58e54235d3e40e440a8affecdb6d86a2a9`, and `797a329489d7fe5c0dba95ded60c3b2e5d9b7d32`.

- [x] **9. Audit mobile/tablet responsive behavior**
  - Audited the current responsive CSS across phone widths down to 320–360px and common tablet widths.
  - Hardened the top bar so branding, star count, sound, and Settings controls can shrink without horizontal overflow.
  - Added phone-specific activity-card compaction, world-header sizing, comparison-game tightening, stacked Bible Story navigation, and responsive confirmation dialogs.
  - Added a dedicated 700–1023px tablet layout for content width, world grids, activity grids, Bible Story grids, and game/settings panels.
  - Improved Drawing Garden on narrow phones by reducing tracing-picker columns and stacking drawing/brush controls.
  - Improved Outfit Check on narrow phones by reducing stage height/insets and keeping category controls touch-friendly and horizontally scrollable.
  - Added `scripts/audit-responsive-layout.mjs` to permanently validate viewport configuration, safe-area handling, phone/tablet breakpoints, overflow guards, touch targets, canvas scaling, dialogs, Drawing Garden, and Outfit Check.
  - Added the responsive-layout audit to the GitHub Actions quality gate.
  - Bumped app/PWA cache version to `v82`.
  - Verified deployment validation, game-flow audit, responsive-layout audit, and smoke tests all pass together.
  - Completed across commits `57c7d5bf7dfeb068c4363cc82f0fab52a1615cd5`, `f0bbdc3191769f238f7f251a9a7465b447d92771`, `979fed7843c2294418c153cf17709274cfb5ae96`, `cb47f5e6e6cf08832142e8ad91820668a79e2603`, `bb087a8576a97ce4e1cece98ab1fc3942e8612f3`, `8ea580f9f53a661a31ffd72a3a2b067a9fba197a`, `29c19c34ededb75d499a60212e3cf2b05a0ac78e`, and `939b541f0ad130bef0fd4ce0502ba652fa264a02`.

- [x] **10. Verify tracing/drawing input logic**
  - Reworked the structured tracing validator to be child-friendly on touchscreens.
  - Increased the accepted guide corridor from 22–26px to 48–54px so normal finger wobble is recognized.
  - Expanded the coverage mask so near-line strokes count toward successful tracing.
  - Lowered the minimum trace distance from 140 to 70 so short letters, numbers, and shapes are not rejected unfairly.
  - Relaxed accuracy, coverage, and stray-line thresholds while still rejecting clearly off-path scribbles.
  - Added a second acceptance path for strong guide coverage, allowing a child to pass even when pixel accuracy is lower.
  - Changed retry feedback so children can keep tracing instead of being told to clear a mostly-correct attempt.
  - Added `scripts/audit-tracing.mjs` and wired it into the GitHub Actions quality gate.
  - Bumped app/PWA cache version to `v83`.
  - Verified deployment validation, game-flow audit, responsive-layout audit, tracing-recognition audit, and smoke tests all pass together.
  - Completed across commits `b79289997e2265817a8ed0e70519c5009066f0c4`, `0b548d995c70ae2cd37c4694b259939028983056`, `f8d525aeb706fd739209950999f99367d077f3df`, `f150aeae64c1bcc6e1b6623cf8caaa857b428c9a`, `182123342f0b18ed3cfa8b216de5cc1ef3ac7c32`, `73dfd418ac365be57e4b2e4f6026247e8ad51322`, and `79ad3dc47c8d2e85775db97b8c00cee6caeda950`.

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

**Next:** Item 11 — Verify persistent progress/state.
