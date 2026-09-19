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


## 1.2.1 — 2026-09-19

Changed:

- Replaced the temporary splash icon with the approved Adi's World reference artwork supplied by the user.
- Added the optimized splash image to the PWA app-shell cache.

Reason:

- The launch screen should use the approved Adi visual reference rather than a placeholder icon.


## 1.2.2 — 2026-09-19

Changed:

- Updated in-app speech to prefer a neutral British English (en-GB) voice.
- Added voice selection logic that prioritizes higher-quality British voices available on the device.
- Reduced speaking speed and normalized pitch for clearer enunciation.
- Added graceful fallback to the best available English voice when en-GB is unavailable.
- Bumped the PWA cache version so devices receive the updated speech logic.

Reason:

- The previous default browser voice sounded too robotic. The new standard aims for a calmer, clearer, more natural voice for young learners.


## 1.3.0 — 2026-09-19

Added:

- Full A–Z letter pool for Find the Letter.
- Fresh random target letters and answer positions every time the activity is opened.
- Progressive challenge sizes: 5 choices in Round 1, 7 in Round 2, and 10 in Round 3.
- Difficulty labels, choice-count badges, improved progress feedback, animated letter stage, staggered choice entrances, correct-answer pop, gentle retry wiggle, and star-burst celebration.
- Reduced-motion fallback for the new game animations.

Changed:

- Find the Letter now generates each play session dynamically instead of using three fixed letter questions.
- The round progress bar now reflects the current round immediately.
- PWA cache version bumped so deployed devices receive the updated game logic and styling.

Reason:

- The activity should cover the complete alphabet over repeated play while feeling progressively more game-like and replayable on phones and tablets.


## 1.3.1 — 2026-09-19

Changed:

- Find the Letter now runs for 10 rounds per play session.
- Rounds 1–3 use 5 choices, rounds 4–6 use 7 choices, and rounds 7–10 use 10 choices.
- Each session uses 10 randomized target letters from the A–Z pool with randomized answer positions.
- Updated Word Forest activity copy so it no longer implies every game has only three rounds.
- Bumped the PWA cache version so devices receive the new round structure.

Reason:

- The Find the Letter activity should provide a longer, more complete alphabet-learning session while keeping the difficulty progression capped at 10 visible choices.


## 1.4.0 — 2026-09-19

Added:

- Performance-based star scoring across playable activities.
- Each correct answer adds one session star.
- Each incorrect attempt subtracts one session star.
- Session star score is clamped at zero so a young child never finishes with a negative score.
- Live game score now shows stars, correct answers, and mistakes.
- Completion summary now shows correct answers, mistakes, and stars earned.

Changed:

- Finishing a game now adds the final session score to the persistent star total every time the activity is completed.
- Activity progress stores the best score achieved for that activity instead of a fixed three-star completion award.
- Bumped the PWA cache version so devices receive the new scoring logic.

Reason:

- Rewards should reflect the child's actual answers rather than grant a fixed number of stars simply for completing a game.


## 1.5.0 — 2026-09-19

Added:

- Full A–Z content pool for the First Sound activity.
- Age-appropriate word and visual examples for every letter from A through Z.
- Ten randomized First Sound rounds per play session.
- Randomized target words and randomized answer positions every time the activity opens.
- The same progressive choice structure used by Find the Letter: 5 choices in rounds 1–3, 7 choices in rounds 4–6, and 10 choices in rounds 7–10.
- Existing performance-based star scoring now applies to First Sound: +1 for each correct answer and -1 for each incorrect attempt, with no negative session score.
- Existing alphabet animations, progress feedback, and transitions are reused for a consistent Word Forest experience.

Changed:

- First Sound no longer uses three fixed examples.
- PWA cache version bumped so devices receive the randomized full-alphabet phonics game.

Reason:

- First Sound should be as replayable and complete as Find the Letter while reinforcing beginning sounds across the full alphabet.


## 1.5.1 — 2026-09-19

Changed:

- Reduced alphabet-game choice counts to a minimum of 3 and maximum of 5.
- New progression for both Find the Letter and First Sound: rounds 1–3 use 3 choices, rounds 4–6 use 4, and rounds 7–10 use 5.
- First Sound now displays the spelling of the pictured word directly beneath the visual cue, such as 🍎 with “Apple”.
- Added responsive styling for 4-choice and 5-choice layouts on phones and tablets.
- Bumped the PWA cache version so devices receive the updated choice limits and phonics spelling display.

Reason:

- The activities should remain visually manageable for ages 3–5 while still increasing difficulty gradually, and First Sound should connect the image, spoken prompt, printed word, and starting letter more clearly.


## 1.6.0 — 2026-09-19

Added:

- Full A–Z Picture Match content using the same age-appropriate word and visual pool as First Sound.
- Ten randomized Picture Match rounds every time the activity opens.
- The same progressive choice structure as the other alphabet games: 3 choices in rounds 1–3, 4 choices in rounds 4–6, and 5 choices in rounds 7–10.
- The same performance-based star scoring: +1 for a correct answer and -1 for an incorrect attempt, with no negative session score.
- Tappable picture audio: tapping the displayed picture speaks its name using the neutral British voice standard.
- A visual “Tap to hear” affordance and gentle audio-feedback animation.
- Word-choice styling optimized for phone and tablet layouts.

Changed:

- Picture Match no longer uses three fixed examples.
- Picture Match answer choices are randomized from the full A–Z vocabulary pool each session.
- PWA cache version bumped so devices receive the new Picture Match logic and styling.

Reason:

- Picture Match should match the replayability, scoring, difficulty progression, alphabet coverage, and child-friendly interaction standards established by Find the Letter and First Sound while adding an audio-supported picture-to-word learning cue.
