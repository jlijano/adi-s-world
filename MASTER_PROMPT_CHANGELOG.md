# Adi's World Master Prompt Changelog

## 1.14.2 — 2026-09-20

Fixed:

- Replaced the illustrated banana asset with a verified banana photograph.
- Removed decorative Fruit and Vegetable emoji from Plant Food Sort answer buttons.
- Switched the banana to a new local filename to prevent stale PWA caches from reusing the old illustration.
- Updated index asset query versions and bumped the PWA cache to v45.


## 1.14.1 — 2026-09-20

Fixed:

- Replaced all Plant Food Sort food emoji stand-ins with accurate locally stored photographs.
- Added dedicated images for all 20 foods, including calamansi, lanzones, chico, jackfruit, ampalaya, malunggay, patola, kangkong, and string beans.
- Added Wikimedia Commons source/license credits for the local image set.
- Added all Plant Food Sort photographs to the PWA app shell for offline availability after caching.

Changed:

- Plant Food Sort now renders responsive real-image cards with `object-fit: contain` rather than emoji.
- PWA cache version bumped to v44.

Reason:

- Generic emoji can visually misidentify foods, such as showing an orange for calamansi. Discovery Lab visual prompts must match the named learning item accurately.


## 1.14.0 — 2026-09-20

Added:

- First Discovery Lab game: **Plant Food Sort**.
- 20-food lesson pool with 10-round randomized sessions, five Fruit answers and five Vegetable answers per session.
- Familiar-to-local difficulty progression using foods from the source lesson, including mango, banana, pineapple, papaya, chico, guava, calamansi, lanzones, jackfruit, coconut, eggplant, ampalaya, squash, cucumber, malunggay, patola, kangkong, carrot, broccoli, and string beans.
- Large tap-to-hear food card plus two large Fruit/Vegetable classification choices.
- Discovery-specific correct feedback, calm retry behavior, persistent scoring, and **Great discovering!** completion messaging.
- Careful culinary-group wording for foods that are botanically fruits but commonly treated as vegetables.
- Instruction-to-game transitions now wait for spoken How to Play audio to finish when sound is enabled.
- Discovery Lab world cards now receive the existing Discovery Lab visual theme class.

Changed:

- PWA cache version bumped to v43 and core app/style cache-busting query versions updated to v43.

Reason:

- Converts the approved plant-food worksheet lesson into a touch-first, audio-supported science classification game while preserving Adi's World's existing scoring, retry, accessibility, and mobile UX standards.


## 1.13.1 — 2026-09-20

Changed:

- Match the Sound letter buttons now automatically reshuffle after every letter tap, including correct and incorrect attempts.
- PWA cache version bumped to v30.

Reason:

- Prevents children from relying on a fixed button position and keeps the focus on recognising the beginning sound.


## 1.13.0 — 2026-09-20

Added:

- New Word Forest game: **Match the Sound**, based on connecting pictures to the beginning sound of their names.
- Universal How to Play support for Match the Sound before the first round.
- 10 randomized rounds with progressive boards: 3 pictures/3 letters, then 4/4, then 5 pictures/4 letters.
- Tap-picture then tap-letter interaction designed for phones instead of freehand line drawing.
- Spoken picture-name and letter-sound reinforcement.
- Sticky correct matches that remain visibly locked while the child completes the rest of the board.
- Calm wrong-match retry behavior with the existing -1 star rule, never below zero.
- Round reset that clears only the current board without changing the score.
- Phone-first responsive board styling, accessibility labels, and reduced-motion support.

Changed:

- Word Forest overview copy now includes sound matching among its literacy activities.
- PWA cache version bumped to v29.

Reason:

- The worksheet's educational goal is categorizing several pictures by their beginning sounds. The digital version preserves that matching mechanic while making it touch-friendly for ages 3–5.


## 1.12.0 — 2026-09-20

Added:

- New Word Forest game: **Sound Hunt**, based on coloring every picture whose name begins with a target letter.
- A–Z single-letter setup plus 5, 10, 15, or 20-round sessions, with 10 as the default.
- At least five randomized picture choices per round, scaling to six later in the session.
- Black-and-white starting state for every picture; only correct target-sound pictures become full colour.
- Sticky correct progress: correct pictures stay coloured, checked, locked, and cannot be scored twice.
- One picture-name audio control per choice and immediate classification feedback without a Yes/No dialog.
- Round completion only after all correct pictures are found; one completed round awards one correct answer/session star.
- Phone-first responsive, accessible, reduced-motion-aware presentation.

Changed:

- Word Forest overview copy now includes Sound Hunt as a configurable selected-letter activity.
- PWA cache version bumped to v26.

Reason:

- The worksheet teaches beginning-sound categorization through selective coloring. Sound Hunt preserves that mechanic as touch-first digital play.


## 1.11.1 — 2026-09-20

Added:

- Universal pre-game **How to Play** screen for every currently playable activity across Word Forest, Number Island, and Puzzle Mountain.
- Each instruction screen provides short child-friendly steps plus spoken instructions before gameplay begins.
- A large **Let's Play** button now explicitly starts the selected game.
- Start the Word now shows the instruction screen before its letter/round setup flow.

Fixed:

- Removed the duplicate speaker icon shown on Start the Word letter choices. The existing shared letter-audio indicator remains, so each letter now shows only one speaker icon.

Changed:

- PWA cache version bumped to v24.

Reason:

- Young children should receive clear instructions before every game begins, and the Start the Word answer buttons should have one consistent audio indicator rather than duplicate speaker icons.


## 1.11.0 — 2026-09-20

Added:

- New Word Forest game: Start the Word.
- Image-derived mechanic based on naming a picture and supplying its missing beginning letter.
- A pre-game setup screen where the user chooses the practice letter from A–Z.
- Configurable session length of 5, 10, 15, or 20 rounds, with 10 selected by default.
- Letter setup buttons speak the existing child-friendly phonics cue.
- Each round shows a tappable picture/visual, the target word with its first letter missing, and progressively scaled 3/4/5 letter choices.
- Direct letter-placement interaction: selected letters are spoken immediately and do not use the Yes/No confirmation dialog.
- Correct answers reveal and lock the complete word, award one session star, speak the word, and advance.
- Wrong answers subtract one session star without going below zero, keep the child on the same round, and never reveal the answer.
- A–Z content pools with randomised round ordering, distractors, and answer positions; longer sessions may reuse age-appropriate examples while avoiding immediate repetition.
- Phone-first setup and gameplay styling with tablet expansion and reduced-motion support.

Changed:

- Word Forest copy now acknowledges configurable Start the Word sessions rather than implying that every Word Forest game has exactly 10 rounds.
- PWA cache version bumped to v23.

Reason:

- The source worksheet teaches a distinct progression from picture recognition to beginning-sound recognition to completing a printed word. Start the Word preserves that learning mechanic while adapting it into touch-first, audio-supported play and allowing parents or children to deliberately practise a chosen letter.

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


## 1.6.1 — 2026-09-19

Added:

- Picture Match now reads a tapped written answer aloud before it is submitted.
- After the spoken word finishes, a child-friendly confirmation dialog asks: “Is this the answer you want?”
- The confirmation dialog uses large Yes/check and No/X controls for phone and tablet use.
- Choosing No returns the child to the word choices without changing the score.
- Choosing Yes submits the selected word to the existing correct/wrong scoring logic.
- Added accessible dialog semantics, focus handling, responsive layout, and reduced-motion support.

Changed:

- Picture Match scoring now occurs only after the child explicitly confirms a word choice.
- PWA cache version bumped so devices receive the new confirmation interaction.

Reason:

- The interaction should reinforce recognition of the printed word together with its spoken form before the child commits to an answer, supporting vocabulary and early word-recognition practice rather than simple guessing.


## 1.6.2 — 2026-09-19

Added:

- First Sound letter choices now play a child-friendly letter-sound cue when tapped.
- The sound cue plays before the selected letter is submitted for scoring.
- Added A–Z sound cues, such as “D, duh, duh”, “O, o, o”, and “G, guh, guh”.
- Added a small speaker affordance and gentle pulse animation on First Sound letter buttons while audio is playing.
- Added reduced-motion support for the new letter-audio feedback.

Changed:

- First Sound now reinforces the printed letter, its spoken sound, the pictured object, and the displayed spelling in the same interaction.
- PWA cache version bumped so devices receive the new letter-sound behavior.

Reason:

- The activity should train phonemic familiarity as well as visual letter recognition and word-picture association.


## 1.6.3 — 2026-09-19

Added:

- First Sound now uses the same child-friendly Yes/No confirmation step as Picture Match.
- Tapping a letter first plays its letter-sound cue, then opens the confirmation dialog.
- The dialog shows the selected letter with large Yes/check and No/X controls.
- Choosing No returns to the letter choices with no score change.
- Choosing Yes submits the letter to the existing correct/wrong scoring logic.

Changed:

- First Sound scoring now occurs only after the child confirms the selected letter.
- PWA cache version bumped so devices receive the new confirmation flow.

Reason:

- The confirmation step gives the child time to hear the phonics cue, visually review the selected letter, and intentionally commit to an answer before scoring.


## 1.7.0 — 2026-09-19

Added:

- New Word Forest game: Build the Word.
- Build the Word uses 10 randomized rounds and words capped at 7 letters.
- Children tap the picture to hear the target word, then tap scrambled letters in order to build it.
- Letter tiles play their letter sound; completing a word adds one star and incorrect letter attempts subtract one star, never below zero.
- A no-penalty reset lets the child restart the current word.
- New Word Forest game: Rhyme Time.
- Rhyme Time uses 10 randomized rounds with the established 3/4/5 choice progression.
- The source picture can be tapped to hear the word and the printed source word stays visible.
- Candidate words are spoken before the existing Yes/No confirmation and are only scored after confirmation.
- Rhyme Time uses the same +1 correct / -1 confirmed mistake scoring.

Changed:

- Word Forest now contains five playable learning games.
- PWA cache version bumped so devices receive the new games.

Reason:

- These games extend Word Forest into early spelling, letter sequencing, phonological awareness, and rhyme recognition without repeating the core mechanics of the existing activities.


## 1.7.1 — 2026-09-19

Changed:

- Build the Word now explicitly locks each correct next letter into its word slot.
- Locked correct letters remain visible and stay in place while the child continues building the word.
- Incorrect letters never fill a slot and do not remove or replace previously locked letters.
- Added a clear locked-letter visual state with a gentle check animation.
- Wrong-letter feedback now explains that the letter does not go in that position yet.
- PWA cache version bumped so devices receive the updated Build the Word behavior.

Reason:

- Children should be able to build a word progressively and keep the correct parts they have already learned, while wrong taps remain temporary and non-destructive.


## 1.8.0 — 2026-09-19

Added:

- Permanent Number Island standard for Count the Stars.
- Ten randomized Count the Stars rounds per session with progressive quantity ranges from 1 through 10.
- Varied familiar counting objects instead of stars only.
- Tap-to-count interaction where each object can be counted only once, remains visibly marked, and speaks the next counting number.
- No-penalty “Count again” reset for the current round.
- Progressive 3/4/5 numeric answer choices with unique, nearby distractors and randomized answer positions.
- Spoken number preview followed by the existing child-friendly Yes/No confirmation before scoring.
- Wrong confirmed answers keep the child on the same round, subtract one session star without going below zero, and encourage recounting instead of revealing the answer.
- Phone/tablet touch styling, short animations, accessible counted states, and reduced-motion behavior.

Changed:

- Count the Stars no longer uses three fixed questions.
- Count the Stars now uses the project’s performance-based session-star and persistent best-score systems for a complete 10-round activity.
- PWA cache version bumped so existing devices receive the updated Number Island game.

Reason:

- Number Island needs a replayable, developmentally appropriate counting-and-number-recognition activity that teaches one-to-one counting through direct touch interaction rather than worksheet-style selection.


## 1.8.1 — 2026-09-19

Changed:

- Renamed Number Island’s first game from “Count the Stars” to “Let’s Count!” so the title matches its randomized multi-object design.
- Replaced the star activity icon with a neutral counting icon.
- Number Island now shows its own world-specific “Pick a game” description instead of the Word Forest message.
- The first counting round now starts from a randomized non-star object pool, preventing the old star-first presentation from appearing as a fixed opening.
- The activity card now explicitly states that the game contains 10 randomized rounds.
- PWA cache version bumped so existing devices receive the corrected Number Island copy and game presentation.

Reason:

- The game now counts many object types, so the interface and opening round should clearly communicate that it is a general counting game rather than a star-only activity.


## 1.8.2 — 2026-09-19

Changed:

- Core PWA files now use a network-first service-worker strategy with cached offline fallback.
- Service-worker registration now uses `updateViaCache: "none"` and explicitly checks for updates after load.
- Core requests for navigation, `index.html`, `app.js`, and `styles.css` no longer prefer stale cached copies over a newer deployed version.
- PWA cache version bumped to v18.

Reason:

- A device could remain on the previous v1.8.0 interface while the server was already serving v1.8.1, producing a mixed experience where randomized counting worked but old “Count the Stars” and Word Forest text remained visible. Core UI updates must refresh reliably while preserving offline fallback.


## 1.9.0 — 2026-09-19

Added:

- Permanent Number Island standards for Which Has More? and What Comes Next?.
- Which Has More? now uses 10 randomized comparison rounds with varied familiar objects and progressive quantity ranges.
- Left and Right choices are spoken before a child confirms the answer with the shared Yes/No dialog.
- What Comes Next? now uses 10 randomized ascending number-sequence rounds.
- Number sequences display exactly one missing-number blank.
- Numeric choices are spoken before the shared Yes/No confirmation dialog and use the established 3/4/5 progressive choice counts.

Changed:

- Which Has More? and What Comes Next? no longer use three fixed questions.
- Both activities now use the existing performance-based star system and remain on the same round after a confirmed incorrect answer.
- Added phone/tablet layouts for side-by-side comparison groups and single-blank number sequences.
- PWA cache version bumped so devices receive the updated Number Island activities.

Reason:

- Number Island’s remaining MVP activities should match the 10-round randomized, intentional-confirmation, replayable quality standard established by Let’s Count! and Word Forest.


## 1.9.1 — 2026-09-20

Changed:

- What Comes Next? now generates ascending number sequences with answers up to 30 instead of stopping at 10.
- The existing 10-round randomized session structure, single missing-number blank, spoken numeric choice, Yes/No confirmation, and performance-based scoring remain unchanged.
- PWA cache version bumped so devices receive the updated sequence range.

Reason:

- Number Island should temporarily support broader number-sequence practice up to 30 while retaining the same child-friendly interaction model.


## 1.10.0 — 2026-09-20

Added:

- New Number Island game: Count & Match.
- Count & Match uses 30 randomized rounds per session and quantities 1–30, with every quantity used once per session.
- Rounds 1–10 use quantities 1–10 with 3 choices, rounds 11–20 use 11–20 with 4 choices, and rounds 21–30 use 21–30 with 5 choices.
- Children tap individual objects to count them, confirm the matching numeral, then match that numeral to its written number word.
- Correct numeral progress stays visibly locked while the child completes the number-word stage.
- Numeral and number-word choices are spoken before the shared Yes/No confirmation step.
- Number-word vocabulary now supports one through thirty.
- Responsive layouts support up to 30 individually tappable objects without changing the existing Let’s Count! layout.

Changed:

- A Count & Match round awards one correct answer/session star only after both the numeral and number-word stages are completed.
- Confirmed incorrect numeral or word choices count as mistakes and subtract one session star, never below zero, while keeping the child on the same round.
- PWA cache version bumped so devices receive the new game.

Reason:

- The worksheet-inspired activity adds quantity-to-numeral and numeral-to-number-word association as a distinct early-math skill while preserving Adi’s World’s touch-first, audio-supported interaction model.


## 1.10.1 — 2026-09-20

Changed:

- Build the Word now treats each correctly used letter tile as consumed for the rest of the current word.
- A correctly used tile becomes disabled and cannot be tapped, focused, or selected again.
- Incorrectly tapped tiles remain enabled and can still be selected later if they become the correct next letter.
- Duplicate-letter words are handled per physical tile, so only the used copy is disabled while another copy remains available.
- Resetting the current word restores all letter tiles to selectable state.
- PWA cache version bumped so devices receive the updated tile-selection behavior.

Reason:

- The child should clearly see which letter tiles have already been used while still being able to retry a letter that was tapped too early or incorrectly.


## 1.15.0 — 2026-09-20

Added:

- Added Blessing Garden to the canonical world architecture.
- Added a permanent **Blessing Garden Bible Lesson Package** workflow for future lesson imports.
- A new Bible lesson is now treated as one linked package: source lesson → colored illustration → Bible Story → memory verse → story-linked activity → QA → deployment.
- Raw black-and-white Bible lesson artwork must be colorized into a preschool-friendly illustration before app implementation.
- When approval is requested, the colored image must be approved first and that exact approved image must then be implemented rather than regenerated.
- Added a Biblical subject-accuracy rule so the illustration must match the actual role named in the story, such as depicting Gideon's visitor as an angel rather than Jesus.
- Approved lesson images should be stored locally under a story-specific Blessing Garden asset folder and may be reused as both the story cover and memory-verse image.
- Every new story follows the existing 5-page/5-star story-reader pattern by default, with narration, persistent progress, and duplicate-star prevention.
- Every supplied memory verse is added to the story's Memory Verse section and, when appropriate, to Blessing Garden's Verse Time/verse-selection content.
- Every supplied worksheet adds a separate story-linked Blessing Garden activity that preserves the worksheet's actual mechanic, such as answer-box letter selection, matching, sequencing, picture choice, or true/false.
- Added a reusable QA checklist covering story, memory verse, activity, visual accuracy, audio, persistence, PWA cache updates, and Render deployment verification.

Reason:

- The Call of Gideon implementation established a repeatable content-production workflow: analyze the lesson pages, colorize the raw illustration, verify Biblical character accuracy, add the story, add its memory verse, recreate the worksheet activity, store the approved image locally, and deploy the complete package. Future Bible lessons should follow the same connected workflow instead of being implemented as unrelated one-off features.


## 1.16.0 — 2026-09-20

Added:

- Added a permanent Blessing Garden **Sacred Narrator** voice profile.
- Sacred Narrator targets a deep, warm, mature male character with slow, clear, calm, reverent delivery suitable for Bible stories and Scripture.
- Added a persistent Blessing Garden choice between Sacred Narrator and Standard Voice.
- Sacred Narrator is used for Bible Story scene narration, Memory Verse read-aloud, and Verse Time verse narration.
- The implementation selects the best available mature/male-sounding English system voice and uses lower pitch and slower pacing, with graceful fallback on devices that expose different voice sets.
- Other worlds and ordinary game feedback keep the standard Adi's World voice behavior.
- Added a master-prompt rule that this is a general voice profile and must not be represented as an imitation of a specific living actor or public figure.

Reason:

- Blessing Garden Scripture and story reading should feel natural, peaceful, dignified, easy for young children to understand, and distinct from ordinary game narration.
