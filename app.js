const STORAGE_KEY = "adis-world-progress-v1";
const SOUND_KEY = "adis-world-sound-v1";

const worlds = [
  { id: "home", name: "Adi's Home", icon: "🏠", note: "Routines & life skills", status: "soon" },
  { id: "word", name: "Word Forest", icon: "🌳", note: "Letters, sounds & words", status: "open" },
  { id: "number", name: "Number Island", icon: "🏝️", note: "Counting & early math", status: "open" },
  { id: "drawing", name: "Drawing Garden", icon: "🎨", note: "Tracing & creativity", status: "soon" },
  { id: "discovery", name: "Discovery Lab", icon: "🔬", note: "Science & curiosity", status: "soon" },
  { id: "robot", name: "Robot Road", icon: "🤖", note: "Sequences & coding", status: "soon" },
  { id: "puzzle", name: "Puzzle Mountain", icon: "🧩", note: "Logic & problem-solving", status: "open" },
  { id: "memory", name: "Memory Castle", icon: "🏰", note: "Memory & attention", status: "soon" },
  { id: "feelings", name: "Feelings Town", icon: "💛", note: "Emotions & kindness", status: "soon" },
  { id: "adventure", name: "Adventure World", icon: "🌎", note: "Mixed learning missions", status: "soon" }
];

const activities = {
  word: [
    {
      id: "letter-find",
      title: "Find the Letter",
      icon: "🔤",
      description: "10 randomized rounds using letters from A to Z.",
      rounds: []
    },
    {
      id: "first-sound",
      title: "First Sound",
      icon: "🐻",
      description: "10 randomized rounds covering beginning sounds from A to Z.",
      rounds: []
    },
    {
      id: "picture-word",
      title: "Picture Match",
      icon: "🖼️",
      description: "10 randomized A–Z picture-word rounds. Tap the picture to hear its name.",
      rounds: []
    },
    {
      id: "build-word",
      title: "Build the Word",
      icon: "🧱",
      description: "Build 10 picture words by tapping letters in order. Words are 3–7 letters.",
      rounds: []
    },
    {
      id: "rhyme-time",
      title: "Rhyme Time",
      icon: "🎵",
      description: "Listen, compare, and find the word that rhymes.",
      rounds: []
    }
  ],
  number: [
    {
      id: "count-stars",
      title: "Count the Stars",
      icon: "⭐",
      description: "Count objects and choose the number.",
      rounds: [
        { prompt: "How many stars do you see?", stage: "⭐ ⭐ ⭐", choices: ["2", "3", "4"], answer: "3", speak: "How many stars do you see?" },
        { prompt: "How many apples do you see?", stage: "🍎 🍎 🍎 🍎", choices: ["3", "4", "5"], answer: "4", speak: "How many apples do you see?" },
        { prompt: "How many ducks do you see?", stage: "🦆 🦆 🦆 🦆 🦆", choices: ["4", "5", "6"], answer: "5", speak: "How many ducks do you see?" }
      ]
    },
    {
      id: "more-or-less",
      title: "Which Has More?",
      icon: "⚖️",
      description: "Compare two groups.",
      rounds: [
        { prompt: "Which group has more?", stage: "🍓🍓   |   🍓🍓🍓🍓", choices: ["Left", "Right"], answer: "Right", speak: "Which group has more?" },
        { prompt: "Which group has more?", stage: "🐟🐟🐟   |   🐟", choices: ["Left", "Right"], answer: "Left", speak: "Which group has more?" },
        { prompt: "Which group has more?", stage: "🌼🌼   |   🌼🌼🌼", choices: ["Left", "Right"], answer: "Right", speak: "Which group has more?" }
      ]
    },
    {
      id: "number-order",
      title: "What Comes Next?",
      icon: "➡️",
      description: "Continue the number sequence.",
      rounds: [
        { prompt: "What number comes next?", stage: "1  2  3  __", choices: ["4", "5", "6"], answer: "4", speak: "What number comes next? One, two, three." },
        { prompt: "What number comes next?", stage: "2  3  4  __", choices: ["3", "4", "5"], answer: "5", speak: "What number comes next? Two, three, four." },
        { prompt: "What number comes next?", stage: "4  5  6  __", choices: ["7", "8", "9"], answer: "7", speak: "What number comes next? Four, five, six." }
      ]
    }
  ],
  puzzle: [
    {
      id: "odd-one-out",
      title: "Odd One Out",
      icon: "🔎",
      description: "Find the one that is different.",
      rounds: [
        { prompt: "Which one is different?", stage: "Look carefully!", choices: ["🍎", "🍎", "🍌"], answer: "🍌", speak: "Which one is different?" },
        { prompt: "Which one is different?", stage: "Look carefully!", choices: ["🐶", "🐱", "🐶"], answer: "🐱", speak: "Which one is different?" },
        { prompt: "Which one is different?", stage: "Look carefully!", choices: ["🔵", "🔵", "🟡"], answer: "🟡", speak: "Which one is different?" }
      ]
    },
    {
      id: "pattern",
      title: "Finish the Pattern",
      icon: "🧠",
      description: "Choose what comes next.",
      rounds: [
        { prompt: "What comes next?", stage: "🔴 🔵 🔴 🔵 ?", choices: ["🔴", "🔵", "🟢"], answer: "🔴", speak: "What comes next in the pattern?" },
        { prompt: "What comes next?", stage: "⭐ 🌙 ⭐ 🌙 ?", choices: ["☀️", "⭐", "🌙"], answer: "⭐", speak: "What comes next in the pattern?" },
        { prompt: "What comes next?", stage: "🍎 🍌 🍎 🍌 ?", choices: ["🍌", "🍎", "🍐"], answer: "🍎", speak: "What comes next in the pattern?" }
      ]
    },
    {
      id: "shape-match",
      title: "Shape Match",
      icon: "🔺",
      description: "Match the shape Adi shows you.",
      rounds: [
        { prompt: "Can you find the circle?", stage: "⚪", choices: ["⚪", "🔺", "⬛"], answer: "⚪", speak: "Can you find the circle?" },
        { prompt: "Can you find the triangle?", stage: "🔺", choices: ["⬛", "🔺", "⚪"], answer: "🔺", speak: "Can you find the triangle?" },
        { prompt: "Can you find the square?", stage: "⬛", choices: ["🔺", "⚪", "⬛"], answer: "⬛", speak: "Can you find the square?" }
      ]
    }
  ]
};

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const LETTER_FIND_LEVELS = [
  { choiceCount: 3, label: "Warm-up", reward: "⭐" },
  { choiceCount: 3, label: "Warm-up", reward: "⭐" },
  { choiceCount: 3, label: "Warm-up", reward: "⭐" },
  { choiceCount: 4, label: "Explorer", reward: "⭐ ⭐" },
  { choiceCount: 4, label: "Explorer", reward: "⭐ ⭐" },
  { choiceCount: 4, label: "Explorer", reward: "⭐ ⭐" },
  { choiceCount: 5, label: "Super Search", reward: "⭐ ⭐ ⭐" },
  { choiceCount: 5, label: "Super Search", reward: "⭐ ⭐ ⭐" },
  { choiceCount: 5, label: "Super Search", reward: "⭐ ⭐ ⭐" },
  { choiceCount: 5, label: "Super Search", reward: "⭐ ⭐ ⭐" }
];

const LETTER_SOUND_CUES = {
  A: "A. ah. ah.",
  B: "B. buh. buh.",
  C: "C. kuh. kuh.",
  D: "D. duh. duh.",
  E: "E. eh. eh.",
  F: "F. fff. fff.",
  G: "G. guh. guh.",
  H: "H. huh. huh.",
  I: "I. ih. ih.",
  J: "J. juh. juh.",
  K: "K. kuh. kuh.",
  L: "L. lll. lll.",
  M: "M. mmm. mmm.",
  N: "N. nnn. nnn.",
  O: "O. o. o.",
  P: "P. puh. puh.",
  Q: "Q. kwuh. kwuh.",
  R: "R. rrr. rrr.",
  S: "S. sss. sss.",
  T: "T. tuh. tuh.",
  U: "U. uh. uh.",
  V: "V. vvv. vvv.",
  W: "W. wuh. wuh.",
  X: "X. ks. ks.",
  Y: "Y. yuh. yuh.",
  Z: "Zed. zzz. zzz."
};

const BUILD_WORD_POOL = [
  { word: "Cat", emoji: "🐱" },
  { word: "Dog", emoji: "🐶" },
  { word: "Sun", emoji: "☀️" },
  { word: "Hat", emoji: "🎩" },
  { word: "Pig", emoji: "🐷" },
  { word: "Van", emoji: "🚐" },
  { word: "Fish", emoji: "🐟" },
  { word: "Goat", emoji: "🐐" },
  { word: "Kite", emoji: "🪁" },
  { word: "Lion", emoji: "🦁" },
  { word: "Moon", emoji: "🌙" },
  { word: "Nest", emoji: "🪺" },
  { word: "Apple", emoji: "🍎" },
  { word: "Queen", emoji: "👑" },
  { word: "Tiger", emoji: "🐯" },
  { word: "Whale", emoji: "🐋" },
  { word: "Zebra", emoji: "🦓" },
  { word: "Rabbit", emoji: "🐰" },
  { word: "Orange", emoji: "🍊" },
  { word: "Banana", emoji: "🍌" },
  { word: "Flower", emoji: "🌼" },
  { word: "Rocket", emoji: "🚀" },
  { word: "Turtle", emoji: "🐢" },
  { word: "Planet", emoji: "🪐" },
  { word: "Rainbow", emoji: "🌈" }
];

const RHYME_ITEMS = [
  { word: "Cat", emoji: "🐱", rhyme: "Hat" },
  { word: "Dog", emoji: "🐶", rhyme: "Frog" },
  { word: "Sun", emoji: "☀️", rhyme: "Fun" },
  { word: "Bee", emoji: "🐝", rhyme: "Tree" },
  { word: "Star", emoji: "⭐", rhyme: "Car" },
  { word: "Cake", emoji: "🎂", rhyme: "Snake" },
  { word: "Moon", emoji: "🌙", rhyme: "Spoon" },
  { word: "Fox", emoji: "🦊", rhyme: "Box" },
  { word: "Light", emoji: "💡", rhyme: "Kite" },
  { word: "Bear", emoji: "🐻", rhyme: "Chair" },
  { word: "Boat", emoji: "⛵", rhyme: "Goat" },
  { word: "Ring", emoji: "💍", rhyme: "King" },
  { word: "Mouse", emoji: "🐭", rhyme: "House" },
  { word: "Duck", emoji: "🦆", rhyme: "Truck" },
  { word: "Snail", emoji: "🐌", rhyme: "Whale" }
];

const RHYME_DISTRACTORS = ["Dog","Sun","Fish","Moon","Pig","Ball","Nest","Lion","Van","Apple","Tiger","Rabbit","Queen","Star","Boat","Cake","Mouse","Duck","Bee","Fox"];

const FIRST_SOUND_WORDS = [
  { letter: "A", word: "Apple", emoji: "🍎" },
  { letter: "B", word: "Ball", emoji: "⚽" },
  { letter: "C", word: "Cat", emoji: "🐱" },
  { letter: "D", word: "Dog", emoji: "🐶" },
  { letter: "E", word: "Egg", emoji: "🥚" },
  { letter: "F", word: "Fish", emoji: "🐟" },
  { letter: "G", word: "Goat", emoji: "🐐" },
  { letter: "H", word: "Hat", emoji: "🎩" },
  { letter: "I", word: "Ice cream", emoji: "🍦" },
  { letter: "J", word: "Jam", emoji: "🍓" },
  { letter: "K", word: "Kite", emoji: "🪁" },
  { letter: "L", word: "Lion", emoji: "🦁" },
  { letter: "M", word: "Moon", emoji: "🌙" },
  { letter: "N", word: "Nest", emoji: "🪺" },
  { letter: "O", word: "Orange", emoji: "🍊" },
  { letter: "P", word: "Pig", emoji: "🐷" },
  { letter: "Q", word: "Queen", emoji: "👑" },
  { letter: "R", word: "Rabbit", emoji: "🐰" },
  { letter: "S", word: "Sun", emoji: "☀️" },
  { letter: "T", word: "Tiger", emoji: "🐯" },
  { letter: "U", word: "Umbrella", emoji: "☂️" },
  { letter: "V", word: "Van", emoji: "🚐" },
  { letter: "W", word: "Whale", emoji: "🐋" },
  { letter: "X", word: "Xylophone", emoji: "🎵" },
  { letter: "Y", word: "Yo-yo", emoji: "🪀" },
  { letter: "Z", word: "Zebra", emoji: "🦓" }
];

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildLetterFindRounds() {
  const targets = shuffle(ALPHABET).slice(0, LETTER_FIND_LEVELS.length);

  return LETTER_FIND_LEVELS.map((level, index) => {
    const answer = targets[index];
    const distractors = shuffle(ALPHABET.filter((letter) => letter !== answer))
      .slice(0, level.choiceCount - 1);

    return {
      prompt: `Can you find the letter ${answer}?`,
      stage: answer,
      choices: shuffle([answer, ...distractors]),
      answer,
      speak: `Can you find the letter ${answer}?`,
      difficultyLabel: level.label,
      choiceCount: level.choiceCount,
      rewardLabel: level.reward,
      alphabetRound: true
    };
  });
}

function buildFirstSoundRounds() {
  const targets = shuffle(FIRST_SOUND_WORDS).slice(0, LETTER_FIND_LEVELS.length);

  return LETTER_FIND_LEVELS.map((level, index) => {
    const target = targets[index];
    const distractors = shuffle(ALPHABET.filter((letter) => letter !== target.letter))
      .slice(0, level.choiceCount - 1);

    return {
      prompt: `${target.word} starts with which letter?`,
      stage: target.emoji,
      choices: shuffle([target.letter, ...distractors]),
      answer: target.letter,
      speak: `${target.word} starts with which letter?`,
      difficultyLabel: level.label,
      choiceCount: level.choiceCount,
      rewardLabel: level.reward,
      alphabetRound: true,
      phonicsRound: true,
      letterSoundRound: true,
      word: target.word,
      spelling: target.word
    };
  });
}

function buildPictureMatchRounds() {
  const targets = shuffle(FIRST_SOUND_WORDS).slice(0, LETTER_FIND_LEVELS.length);

  return LETTER_FIND_LEVELS.map((level, index) => {
    const target = targets[index];
    const distractors = shuffle(FIRST_SOUND_WORDS.filter((item) => item.word !== target.word))
      .slice(0, level.choiceCount - 1)
      .map((item) => item.word);

    return {
      prompt: "Which word matches this picture? Tap the picture to hear its name.",
      stage: target.emoji,
      choices: shuffle([target.word, ...distractors]),
      answer: target.word,
      speak: "Which word matches this picture? Tap the picture to hear its name.",
      difficultyLabel: level.label,
      choiceCount: level.choiceCount,
      rewardLabel: level.reward,
      alphabetRound: true,
      pictureMatchRound: true,
      spokenWord: target.word,
      word: target.word,
      letter: target.letter
    };
  });
}

function buildBuildWordRounds() {
  const picked = [];
  return LETTER_FIND_LEVELS.map((level, index) => {
    const pool = BUILD_WORD_POOL.filter((item) => {
      const length = item.word.length;
      if (index < 3) return length >= 3 && length <= 4;
      if (index < 6) return length >= 4 && length <= 5;
      return length >= 5 && length <= 7;
    });
    const available = pool.filter((item) => !picked.some((chosen) => chosen.word === item.word));
    const fallback = BUILD_WORD_POOL.filter((item) => !picked.some((chosen) => chosen.word === item.word));
    const target = shuffle(available.length ? available : fallback)[0];
    picked.push(target);
    const answer = target.word.toUpperCase();
    const letters = answer.split("").map((letter, tileId) => ({ letter, tileId }));
    return {
      prompt: "Build the word. Tap the picture to hear it, then tap the letters in order.",
      stage: target.emoji,
      answer,
      speak: "Build the word. Tap the picture to hear it, then tap the letters in order.",
      difficultyLabel: level.label,
      rewardLabel: level.reward,
      alphabetRound: true,
      buildWordRound: true,
      spokenWord: target.word,
      word: target.word,
      letters: shuffle(letters),
      choiceCount: answer.length
    };
  });
}

function buildRhymeRounds() {
  const targets = shuffle(RHYME_ITEMS).slice(0, LETTER_FIND_LEVELS.length);
  return LETTER_FIND_LEVELS.map((level, index) => {
    const target = targets[index];
    const blocked = new Set([target.word.toLowerCase(), target.rhyme.toLowerCase()]);
    const distractors = shuffle(RHYME_DISTRACTORS.filter((word) => !blocked.has(word.toLowerCase())))
      .slice(0, level.choiceCount - 1);
    return {
      prompt: "Which word rhymes with " + target.word + "? Tap the picture to hear it.",
      stage: target.emoji,
      choices: shuffle([target.rhyme, ...distractors]),
      answer: target.rhyme,
      speak: "Which word rhymes with " + target.word + "?",
      difficultyLabel: level.label,
      choiceCount: level.choiceCount,
      rewardLabel: level.reward,
      alphabetRound: true,
      pictureMatchRound: true,
      rhymeRound: true,
      spokenWord: target.word,
      displayWord: target.word
    };
  });
}

function prepareActivityForPlay(worldId, activityId) {
  const activity = (activities[worldId] || []).find((item) => item.id === activityId);
  if (!activity) return;

  if (activityId === "letter-find") {
    activity.rounds = buildLetterFindRounds();
  }

  if (activityId === "first-sound") {
    activity.rounds = buildFirstSoundRounds();
  }

  if (activityId === "picture-word") {
    activity.rounds = buildPictureMatchRounds();
  }

  if (activityId === "build-word") {
    activity.rounds = buildBuildWordRounds();
  }

  if (activityId === "rhyme-time") {
    activity.rounds = buildRhymeRounds();
  }
}

function startGameSession(worldId, activityId) {
  gameSession = {
    worldId,
    activityId,
    correctAnswers: 0,
    mistakes: 0,
    score: 0
  };
}

function updateSessionScore(delta) {
  if (!gameSession) return;

  if (delta > 0) {
    gameSession.correctAnswers += 1;
  } else if (delta < 0) {
    gameSession.mistakes += 1;
  }

  gameSession.score = Math.max(0, gameSession.correctAnswers - gameSession.mistakes);
}

let progress = loadProgress();
let soundEnabled = localStorage.getItem(SOUND_KEY) !== "off";
let currentView = { type: "home" };
let activeGame = null;
let gameSession = null;
let pendingPictureChoice = null;
let pendingFirstSoundChoice = null;

const screen = document.getElementById("screen");
const starCount = document.getElementById("star-count");
const soundButton = document.getElementById("sound-button");
const celebration = document.getElementById("celebration");

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { stars: 0, completed: {} };
  } catch {
    return { stars: 0, completed: {} };
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  updateStarCount();
}

function updateStarCount() {
  starCount.textContent = progress.stars || 0;
}

let preferredBritishVoice = null;

function scoreBritishVoice(voice) {
  const name = (voice.name || "").toLowerCase();
  const lang = (voice.lang || "").toLowerCase();
  let score = 0;

  if (lang === "en-gb") score += 100;
  else if (lang.startsWith("en-gb")) score += 90;
  else if (lang.startsWith("en")) score += 20;

  if (name.includes("google uk english")) score += 40;
  if (name.includes("sonia")) score += 35;
  if (name.includes("ryan")) score += 34;
  if (name.includes("serena")) score += 33;
  if (name.includes("daniel")) score += 32;
  if (name.includes("kate")) score += 31;
  if (name.includes("british")) score += 28;
  if (voice.localService) score += 8;

  if (name.includes("whisper") || name.includes("novelty")) score -= 50;

  return score;
}

function refreshPreferredBritishVoice() {
  if (!("speechSynthesis" in window)) return;

  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return;

  preferredBritishVoice =
    voices
      .filter((voice) => (voice.lang || "").toLowerCase().startsWith("en"))
      .sort((a, b) => scoreBritishVoice(b) - scoreBritishVoice(a))[0] || null;
}

if ("speechSynthesis" in window) {
  refreshPreferredBritishVoice();
  window.speechSynthesis.addEventListener?.("voiceschanged", refreshPreferredBritishVoice);
  window.speechSynthesis.onvoiceschanged = refreshPreferredBritishVoice;
}

function speak(text, onDone) {
  if (!soundEnabled || !("speechSynthesis" in window)) {
    if (typeof onDone === "function") onDone();
    return;
  }

  refreshPreferredBritishVoice();
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-GB";

  if (preferredBritishVoice) {
    utterance.voice = preferredBritishVoice;
  }

  // Calm, neutral British delivery for young learners:
  // slightly slower pace, natural pitch, and full volume for clear enunciation.
  utterance.rate = 0.82;
  utterance.pitch = 1.0;
  utterance.volume = 1.0;

  if (typeof onDone === "function") {
    let finished = false;
    const finishOnce = () => {
      if (finished) return;
      finished = true;
      onDone();
    };
    utterance.onend = finishOnce;
    utterance.onerror = finishOnce;
  }

  window.speechSynthesis.speak(utterance);
}

function setActiveNav(name) {
  document.querySelectorAll(".nav-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.nav === name);
  });
}

function worldCard(world) {
  const cssClass = ["word", "number", "puzzle"].includes(world.id) ? world.id : "";
  const stateClass = world.status === "open" ? "is-open" : "is-locked";
  return `
    <button class="world-card ${cssClass} ${stateClass}" type="button" data-world="${world.id}" aria-label="${world.name}">
      <span class="status">${world.status === "open" ? "PLAY" : "SOON"}</span>
      <span class="world-icon" aria-hidden="true">${world.icon}</span>
      <strong>${world.name}</strong>
      <small>${world.note}</small>
    </button>`;
}

function renderHome() {
  currentView = { type: "home" };
  setActiveNav("home");
  const openWorlds = worlds.filter((world) => world.status === "open");
  screen.innerHTML = `
    <section class="hero" aria-labelledby="home-title">
      <div class="hero-grid">
        <div>
          <h1 id="home-title">Hi! I’m Adi 👋</h1>
          <p>Come explore, play, and learn with me. Pick an adventure and let’s go!</p>
          <div class="hero-actions">
            <button class="primary-button" type="button" data-action="start-learning">Start learning</button>
            <button class="secondary-button" type="button" data-action="show-progress">My stars</button>
          </div>
        </div>
        <div class="adi-bubble" aria-hidden="true">👧🏻</div>
      </div>
    </section>

    <section class="section" aria-labelledby="continue-heading">
      <div class="section-heading">
        <div>
          <h2 id="continue-heading">Choose an adventure</h2>
          <p>Three worlds are ready to play.</p>
        </div>
        <button class="text-button" type="button" data-action="show-worlds">See all</button>
      </div>
      <div class="world-grid">
        ${openWorlds.map(worldCard).join("")}
      </div>
    </section>

    <section class="section" aria-labelledby="coming-heading">
      <div class="section-heading">
        <div>
          <h2 id="coming-heading">More worlds are growing</h2>
          <p>New adventures will arrive step by step.</p>
        </div>
      </div>
      <div class="world-grid">
        ${worlds.filter((world) => world.status !== "open").slice(0, 4).map(worldCard).join("")}
      </div>
    </section>
  `;
  screen.focus({ preventScroll: true });
}

function renderWorlds() {
  currentView = { type: "worlds" };
  setActiveNav("worlds");
  screen.innerHTML = `
    <section class="section" style="margin-top:0">
      <div class="section-heading">
        <div>
          <h2>Explore Adi’s World</h2>
          <p>Tap a world to start an adventure.</p>
        </div>
      </div>
      <div class="world-grid">
        ${worlds.map(worldCard).join("")}
      </div>
    </section>
  `;
  screen.focus({ preventScroll: true });
}

function renderWorld(worldId) {
  const world = worlds.find((item) => item.id === worldId);
  if (!world || world.status !== "open") {
    gentleMessage("This world is still growing. Try one of the worlds marked PLAY.");
    return;
  }
  currentView = { type: "world", worldId };
  setActiveNav("worlds");
  const worldActivities = activities[worldId] || [];

  screen.innerHTML = `
    <div class="back-row"><button class="back-button" type="button" data-action="back-worlds">← All worlds</button></div>
    <section class="world-hero ${worldId}">
      <span class="eyebrow">Learning world</span>
      <h1>${world.icon} ${world.name}</h1>
      <p>${world.note}. Pick a short game and help Adi complete fun learning challenges.</p>
    </section>

    <section class="section" aria-labelledby="activity-heading">
      <div class="section-heading">
        <div>
          <h2 id="activity-heading">Pick a game</h2>
          <p>Games use short, child-friendly rounds. Find the Letter now has 10.</p>
        </div>
      </div>
      <div class="activity-list">
        ${worldActivities.map((activity) => {
          const key = `${worldId}:${activity.id}`;
          const done = progress.completed[key] || 0;
          return `
            <button class="activity-card" type="button" data-activity="${activity.id}" data-world-id="${worldId}">
              <span class="activity-icon" aria-hidden="true">${activity.icon}</span>
              <span>
                <strong>${activity.title}</strong>
                <small>${activity.description}</small>
              </span>
              <span class="activity-stars" aria-label="${done} stars earned">${done ? "⭐".repeat(Math.min(done, 3)) : "○○○"}</span>
            </button>`;
        }).join("")}
      </div>
    </section>
  `;
  screen.focus({ preventScroll: true });
}

function renderGame(worldId, activityId, roundIndex = 0) {
  const activity = (activities[worldId] || []).find((item) => item.id === activityId);
  if (!activity) return renderWorld(worldId);

  activeGame = { worldId, activityId, roundIndex, correctThisRound: false, buildIndex: 0 };
  currentView = { type: "game", worldId, activityId };
  setActiveNav("worlds");

  const round = activity.rounds[roundIndex];
  const progressPct = ((roundIndex + 1) / activity.rounds.length) * 100;
  const isSequence = /\s{2}|\?/.test(round.stage);
  const isNumber = /^\d$/.test(round.stage);
  const isAlphabetRound = Boolean(round.alphabetRound);
  const roundLabel = round.difficultyLabel
    ? `${round.difficultyLabel} • Round ${roundIndex + 1} of ${activity.rounds.length}`
    : `Round ${roundIndex + 1} of ${activity.rounds.length}`;

  screen.innerHTML = `
    <div class="back-row"><button class="back-button" type="button" data-action="back-world" data-world-id="${worldId}">← Back</button></div>
    <header class="activity-header">
      <div class="round-meta">
        <span class="eyebrow">${roundLabel}</span>
        ${isAlphabetRound ? `<span class="round-pill">${round.choiceCount} choices</span>` : ""}
      </div>
      <h1>${activity.icon} ${activity.title}</h1>
      <div class="session-score" aria-label="Current game score">
        <span>⭐ <strong>${gameSession?.score ?? 0}</strong></span>
        <small>${gameSession ? `${gameSession.correctAnswers} correct • ${gameSession.mistakes} mistakes` : ""}</small>
      </div>
      <div class="progress-track" aria-label="Game progress">
        <div class="progress-fill" style="width:${progressPct}%"></div>
      </div>
    </header>

    <section class="game-card ${isAlphabetRound ? "alphabet-game" : ""} game-enter" aria-live="polite">
      <div class="adi-prompt">
        <div class="adi-mini" aria-hidden="true">👧🏻</div>
        <p>${round.prompt}</p>
      </div>

      <div class="prompt-stage ${isAlphabetRound ? "alphabet-stage" : ""} ${round.phonicsRound ? "phonics-stage" : ""} ${round.pictureMatchRound || round.buildWordRound ? "picture-match-stage" : ""}">
        ${isAlphabetRound ? '<span class="target-sparkle sparkle-left" aria-hidden="true">✨</span>' : ""}
        ${round.pictureMatchRound || round.buildWordRound
          ? `<button class="picture-speak-button" type="button" data-speak-word="${escapeAttr(round.spokenWord)}" aria-label="Hear ${escapeAttr(round.spokenWord)}">
               <span class="picture-speak-emoji" aria-hidden="true">${round.stage}</span>
               <span class="picture-speak-hint">🔊 Tap to hear</span>
             </button>`
          : `<div class="${isNumber ? "big-number" : isSequence ? "sequence" : "big-symbol"}">${round.stage}</div>`}
        ${round.phonicsRound ? `<div class="phonics-word" aria-label="Spelling: ${round.spelling}">${round.spelling}</div>` : ""}
        ${round.rhymeRound ? `<div class="phonics-word rhyme-source-word" aria-label="Rhyme word: ${round.displayWord}">${round.displayWord}</div>` : ""}
        ${isAlphabetRound ? '<span class="target-sparkle sparkle-right" aria-hidden="true">⭐</span>' : ""}
      </div>

      ${round.buildWordRound ? `
        <div class="build-word-area">
          <div class="word-slots" aria-label="Word has ${round.answer.length} letters">
            ${round.answer.split("").map((letter, slotIndex) => `<span class="word-slot" data-build-slot="${slotIndex}" aria-hidden="true">_</span>`).join("")}
          </div>
          <div class="build-letter-tray" aria-label="Letter choices">
            ${round.letters.map((tile, choiceIndex) => `
              <button class="build-letter-button" type="button" data-build-letter="${escapeAttr(tile.letter)}" data-build-tile="${tile.tileId}" style="--choice-index:${choiceIndex}" aria-label="${escapeAttr(tile.letter)}, tap to add this letter">
                ${tile.letter}<span aria-hidden="true" class="build-letter-speaker">🔊</span>
              </button>
            `).join("")}
          </div>
          <button class="build-reset-button" type="button" data-build-reset>↺ Start this word again</button>
        </div>
      ` : `
        <div class="choice-grid ${isAlphabetRound ? `alphabet-choice-grid choices-${round.choiceCount}` : ""}">
          ${round.choices.map((choice, choiceIndex) => `
            <button class="choice-button ${isAlphabetRound ? "alphabet-choice" : ""} ${round.pictureMatchRound ? "picture-word-choice" : ""} ${round.letterSoundRound ? "letter-sound-choice" : ""}" style="--choice-index:${choiceIndex}" type="button" data-choice="${escapeAttr(choice)}" ${round.letterSoundRound ? `aria-label="${escapeAttr(choice)}, tap to hear the letter sound"` : ""}>
              ${choice.length > 2 && !containsEmojiOnly(choice)
                ? `<span class="${round.pictureMatchRound ? "picture-choice-word" : "choice-label"}">${choice}</span>`
                : `<span aria-hidden="true">${choice}</span>`}
            </button>
          `).join("")}
        </div>
      `}

      <div id="feedback" class="feedback" aria-live="assertive"></div>
    </section>
  `;

  screen.focus({ preventScroll: true });
  setTimeout(() => speak(round.speak || round.prompt), 250);
}

function escapeAttr(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function containsEmojiOnly(value) {
  return String(value).length <= 4 && /[^A-Za-z0-9 ]/.test(value);
}

function closePictureChoiceConfirmation() {
  const overlay = document.getElementById("picture-confirm-overlay");
  overlay?.remove();
  pendingPictureChoice = null;
}

function speakLetterSound(letter, button, onDone) {
  const cue = LETTER_SOUND_CUES[letter] || `${letter}. ${letter}. ${letter}.`;

  if (button) {
    button.classList.remove("is-speaking-letter");
    void button.offsetWidth;
    button.classList.add("is-speaking-letter");
  }

  speak(cue, () => {
    button?.classList.remove("is-speaking-letter");
    if (typeof onDone === "function") onDone();
  });
}

function closeFirstSoundConfirmation() {
  const overlay = document.getElementById("first-sound-confirm-overlay");
  overlay?.remove();
  pendingFirstSoundChoice = null;
}

function showFirstSoundConfirmation(choice, button) {
  if (!activeGame || activeGame.correctThisRound) return;

  pendingFirstSoundChoice = { choice, button };

  const openDialog = () => {
    if (!pendingFirstSoundChoice || pendingFirstSoundChoice.choice !== choice) return;

    document.getElementById("first-sound-confirm-overlay")?.remove();

    const overlay = document.createElement("div");
    overlay.id = "first-sound-confirm-overlay";
    overlay.className = "picture-confirm-overlay";
    overlay.innerHTML = `
      <div class="picture-confirm-card" role="dialog" aria-modal="true" aria-labelledby="first-sound-confirm-title">
        <span class="picture-confirm-heard">🔊 You chose</span>
        <strong class="picture-confirm-word">${choice}</strong>
        <h2 id="first-sound-confirm-title">Is this the answer you want?</h2>
        <div class="picture-confirm-actions">
          <button class="picture-confirm-button yes" type="button" data-first-sound-confirm="yes" aria-label="Yes, choose ${escapeAttr(choice)}">
            <span class="picture-confirm-symbol" aria-hidden="true">✓</span>
            <span>Yes</span>
          </button>
          <button class="picture-confirm-button no" type="button" data-first-sound-confirm="no" aria-label="No, choose another letter">
            <span class="picture-confirm-symbol" aria-hidden="true">✕</span>
            <span>No</span>
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    overlay.querySelector("[data-first-sound-confirm='yes']")?.focus();
  };

  speakLetterSound(choice, button, openDialog);
}

function showPictureChoiceConfirmation(choice, button) {
  if (!activeGame || activeGame.correctThisRound) return;

  pendingPictureChoice = { choice, button };

  const openDialog = () => {
    if (!pendingPictureChoice || pendingPictureChoice.choice !== choice) return;

    document.getElementById("picture-confirm-overlay")?.remove();

    const overlay = document.createElement("div");
    overlay.id = "picture-confirm-overlay";
    overlay.className = "picture-confirm-overlay";
    overlay.innerHTML = `
      <div class="picture-confirm-card" role="dialog" aria-modal="true" aria-labelledby="picture-confirm-title">
        <span class="picture-confirm-heard">🔊 You chose</span>
        <strong class="picture-confirm-word">${choice}</strong>
        <h2 id="picture-confirm-title">Is this the answer you want?</h2>
        <div class="picture-confirm-actions">
          <button class="picture-confirm-button yes" type="button" data-picture-confirm="yes" aria-label="Yes, choose ${escapeAttr(choice)}">
            <span class="picture-confirm-symbol" aria-hidden="true">✓</span>
            <span>Yes</span>
          </button>
          <button class="picture-confirm-button no" type="button" data-picture-confirm="no" aria-label="No, choose another word">
            <span class="picture-confirm-symbol" aria-hidden="true">✕</span>
            <span>No</span>
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    overlay.querySelector("[data-picture-confirm='yes']")?.focus();
  };

  speak(choice, openDialog);
}

function resetBuildWordRound() {
  if (!activeGame) return;
  activeGame.buildIndex = 0;
  document.querySelectorAll("[data-build-slot]").forEach((slot) => {
    slot.textContent = "_";
    slot.classList.remove("is-filled");
  });
  document.querySelectorAll("[data-build-letter]").forEach((button) => {
    button.disabled = false;
    button.classList.remove("is-used", "is-try-again");
  });
  const feedback = document.getElementById("feedback");
  if (feedback) {
    feedback.className = "feedback";
    feedback.textContent = "";
  }
  speak("Build the word again.");
}

function handleBuildLetter(letter, button) {
  if (!activeGame || activeGame.correctThisRound) return;
  const { worldId, activityId, roundIndex } = activeGame;
  const activity = activities[worldId].find((item) => item.id === activityId);
  const round = activity?.rounds?.[roundIndex];
  if (!round?.buildWordRound) return;

  const expectedLetter = round.answer[activeGame.buildIndex];
  speakLetterSound(letter, button);

  if (letter !== expectedLetter) {
    updateSessionScore(-1);
    button.classList.add("is-try-again");
    const feedback = document.getElementById("feedback");
    feedback.className = "feedback try";
    feedback.textContent = "Almost! Try a different letter.";
    setTimeout(() => button.classList.remove("is-try-again"), 600);
    return;
  }

  const slot = document.querySelector("[data-build-slot=\"" + activeGame.buildIndex + "\"]");
  if (slot) {
    slot.textContent = letter;
    slot.classList.add("is-filled");
  }
  activeGame.buildIndex += 1;
  button.disabled = true;
  button.classList.add("is-used");

  if (activeGame.buildIndex < round.answer.length) {
    const feedback = document.getElementById("feedback");
    feedback.className = "feedback good";
    feedback.textContent = "Great! Keep building.";
    return;
  }

  activeGame.correctThisRound = true;
  updateSessionScore(1);
  const feedback = document.getElementById("feedback");
  feedback.className = "feedback good";
  feedback.textContent = "You built " + round.word + "! ⭐";
  document.querySelector(".game-card")?.classList.add("round-success");
  speak("Brilliant! You built " + round.word + "!");

  setTimeout(() => {
    const nextRound = roundIndex + 1;
    if (nextRound < activity.rounds.length) renderGame(worldId, activityId, nextRound);
    else completeActivity(worldId, activityId);
  }, 1150);
}

function handleChoice(choice, button) {
  if (!activeGame || activeGame.correctThisRound) return;
  const { worldId, activityId, roundIndex } = activeGame;
  const activity = activities[worldId].find((item) => item.id === activityId);
  const round = activity.rounds[roundIndex];
  const feedback = document.getElementById("feedback");

  if (choice === round.answer) {
    activeGame.correctThisRound = true;
    updateSessionScore(1);
    button.classList.add("is-correct");
    feedback.className = "feedback good";
    feedback.textContent = round.alphabetRound
      ? `Brilliant! ${round.rewardLabel || "⭐"}`
      : "You found it! ⭐";
    const gameCard = document.querySelector(".game-card");
    gameCard?.classList.add("round-success");
    speak(round.alphabetRound ? "Brilliant! You found it!" : "You found it! Great job!");

    setTimeout(() => {
      const nextRound = roundIndex + 1;
      if (nextRound < activity.rounds.length) {
        renderGame(worldId, activityId, nextRound);
      } else {
        completeActivity(worldId, activityId);
      }
    }, round.alphabetRound ? 1050 : 900);
  } else {
    updateSessionScore(-1);
    button.classList.add("is-try-again");
    feedback.className = "feedback try";
    feedback.textContent = "Almost! Try another one.";
    speak("Almost! Try another one.");
    setTimeout(() => button.classList.remove("is-try-again"), 600);
  }
}

function completeActivity(worldId, activityId) {
  const key = `${worldId}:${activityId}`;
  const sessionStars = Math.max(0, gameSession?.score ?? 0);
  const previousBest = Number(progress.completed[key]) || 0;

  progress.completed[key] = Math.max(previousBest, sessionStars);
  progress.stars = Math.max(0, (Number(progress.stars) || 0) + sessionStars);
  saveProgress();

  celebration.classList.add("is-visible");
  celebration.setAttribute("aria-hidden", "false");

  const resultMessage = sessionStars === 1
    ? "Great job! You earned one star!"
    : `Great job! You earned ${sessionStars} stars!`;

  const celebrationText = celebration.querySelector("p");
  if (celebrationText) {
    celebrationText.textContent = `${gameSession?.correctAnswers ?? 0} correct • ${gameSession?.mistakes ?? 0} mistakes • +${sessionStars} stars`;
  }

  speak(resultMessage);

  setTimeout(() => {
    celebration.classList.remove("is-visible");
    celebration.setAttribute("aria-hidden", "true");
    gameSession = null;
    renderWorld(worldId);
  }, 1800);
}

function renderProgress() {
  currentView = { type: "progress" };
  setActiveNav("progress");
  const openWorlds = worlds.filter((world) => world.status === "open");
  const totalActivities = Object.values(activities).flat().length;
  const completedActivities = Object.keys(progress.completed).length;
  const pct = totalActivities ? Math.round((completedActivities / totalActivities) * 100) : 0;

  screen.innerHTML = `
    <section class="progress-hero">
      <span class="eyebrow">My learning journey</span>
      <h1>⭐ My Stars</h1>
      <p>Every star means you finished a learning adventure.</p>
    </section>

    <div class="progress-summary" aria-label="Progress summary">
      <div class="stat-card"><strong>${progress.stars}</strong><small>Stars</small></div>
      <div class="stat-card"><strong>${completedActivities}</strong><small>Games</small></div>
      <div class="stat-card"><strong>${pct}%</strong><small>MVP</small></div>
    </div>

    <section class="section">
      <div class="section-heading">
        <div>
          <h2>World progress</h2>
          <p>Keep exploring at your own pace.</p>
        </div>
      </div>
      <div class="progress-world-list">
        ${openWorlds.map((world) => {
          const list = activities[world.id] || [];
          const done = list.filter((activity) => progress.completed[`${world.id}:${activity.id}`]).length;
          const worldPct = list.length ? Math.round((done / list.length) * 100) : 0;
          return `
            <div class="progress-world">
              <div class="progress-world-header">
                <span>${world.icon} ${world.name}</span>
                <span>${done}/${list.length}</span>
              </div>
              <div class="progress-track">
                <div class="progress-fill" style="width:${worldPct}%"></div>
              </div>
            </div>`;
        }).join("")}
      </div>
    </section>
  `;
  screen.focus({ preventScroll: true });
}

function gentleMessage(message) {
  const original = screen.innerHTML;
  screen.innerHTML = `
    <section class="game-card" style="margin-top:20px;text-align:center">
      <div style="font-size:64px" aria-hidden="true">🌱</div>
      <h2>Coming soon</h2>
      <p class="helper-text">${message}</p>
      <button class="primary-button" style="margin-top:18px;background:#6c5ce7;color:#fff" type="button" data-action="show-worlds">Choose another world</button>
    </section>
  `;
  setTimeout(() => {
    if (!document.querySelector("[data-action='show-worlds']")) screen.innerHTML = original;
  }, 0);
}

function toggleSound() {
  soundEnabled = !soundEnabled;
  localStorage.setItem(SOUND_KEY, soundEnabled ? "on" : "off");
  soundButton.textContent = soundEnabled ? "🔊" : "🔇";
  soundButton.setAttribute("aria-label", soundEnabled ? "Turn sound off" : "Turn sound on");
  if (soundEnabled) speak("Sound on");
  else if ("speechSynthesis" in window) window.speechSynthesis.cancel();
}

document.addEventListener("click", (event) => {
  const nav = event.target.closest("[data-nav]");
  if (nav) {
    const name = nav.dataset.nav;
    if (name === "home") renderHome();
    if (name === "worlds") renderWorlds();
    if (name === "progress") renderProgress();
    return;
  }

  const action = event.target.closest("[data-action]");
  if (action) {
    switch (action.dataset.action) {
      case "go-home":
        renderHome();
        break;
      case "start-learning":
        renderWorld("word");
        break;
      case "show-worlds":
      case "back-worlds":
        renderWorlds();
        break;
      case "show-progress":
        renderProgress();
        break;
      case "back-world":
        renderWorld(action.dataset.worldId);
        break;
    }
    return;
  }

  const worldButton = event.target.closest("[data-world]");
  if (worldButton) {
    renderWorld(worldButton.dataset.world);
    return;
  }

  const activityButton = event.target.closest("[data-activity]");
  if (activityButton) {
    prepareActivityForPlay(activityButton.dataset.worldId, activityButton.dataset.activity);
    startGameSession(activityButton.dataset.worldId, activityButton.dataset.activity);
    renderGame(activityButton.dataset.worldId, activityButton.dataset.activity, 0);
    return;
  }

  const firstSoundConfirmButton = event.target.closest("[data-first-sound-confirm]");
  if (firstSoundConfirmButton) {
    if (firstSoundConfirmButton.dataset.firstSoundConfirm === "yes" && pendingFirstSoundChoice) {
      const { choice, button } = pendingFirstSoundChoice;
      closeFirstSoundConfirmation();
      handleChoice(choice, button);
    } else {
      closeFirstSoundConfirmation();
      speak("Okay. Choose another letter.");
    }
    return;
  }

  const confirmButton = event.target.closest("[data-picture-confirm]");
  if (confirmButton) {
    if (confirmButton.dataset.pictureConfirm === "yes" && pendingPictureChoice) {
      const { choice, button } = pendingPictureChoice;
      closePictureChoiceConfirmation();
      handleChoice(choice, button);
    } else {
      closePictureChoiceConfirmation();
      speak("Okay. Choose another word.");
    }
    return;
  }

  const speakPictureButton = event.target.closest("[data-speak-word]");
  if (speakPictureButton) {
    speak(speakPictureButton.dataset.speakWord);
    speakPictureButton.classList.remove("is-speaking");
    void speakPictureButton.offsetWidth;
    speakPictureButton.classList.add("is-speaking");
    return;
  }

  const buildResetButton = event.target.closest("[data-build-reset]");
  if (buildResetButton) {
    resetBuildWordRound();
    return;
  }

  const buildLetterButton = event.target.closest("[data-build-letter]");
  if (buildLetterButton) {
    handleBuildLetter(buildLetterButton.dataset.buildLetter, buildLetterButton);
    return;
  }

  const choiceButton = event.target.closest("[data-choice]");
  if (choiceButton) {
    const activity = activeGame
      ? (activities[activeGame.worldId] || []).find((item) => item.id === activeGame.activityId)
      : null;
    const round = activity && activeGame ? activity.rounds[activeGame.roundIndex] : null;

    if (round?.pictureMatchRound) {
      showPictureChoiceConfirmation(choiceButton.dataset.choice, choiceButton);
    } else if (round?.letterSoundRound) {
      showFirstSoundConfirmation(choiceButton.dataset.choice, choiceButton);
    } else {
      handleChoice(choiceButton.dataset.choice, choiceButton);
    }
  }
});

soundButton.addEventListener("click", toggleSound);
soundButton.textContent = soundEnabled ? "🔊" : "🔇";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  });
}

updateStarCount();
renderHome();


function finishAppSplash() {
  const splash = document.getElementById("app-splash");
  const app = document.getElementById("app");

  if (!splash || !app) return;

  const minimumSplashMs = 1450;
  const startedAt = performance.now();

  const reveal = () => {
    const elapsed = performance.now() - startedAt;
    const wait = Math.max(0, minimumSplashMs - elapsed);

    window.setTimeout(() => {
      app.classList.remove("is-loading");
      splash.classList.add("is-hiding");

      window.setTimeout(() => {
        splash.remove();
      }, 500);
    }, wait);
  };

  if (document.readyState === "complete") {
    reveal();
  } else {
    window.addEventListener("load", reveal, { once: true });
  }
}

finishAppSplash();
