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
      description: "Spot the letter Adi asks for.",
      rounds: [
        { prompt: "Can you find the letter B?", stage: "B", choices: ["A", "B", "D"], answer: "B", speak: "Can you find the letter B?" },
        { prompt: "Can you find the letter M?", stage: "M", choices: ["N", "M", "W"], answer: "M", speak: "Can you find the letter M?" },
        { prompt: "Can you find the letter S?", stage: "S", choices: ["C", "S", "Z"], answer: "S", speak: "Can you find the letter S?" }
      ]
    },
    {
      id: "first-sound",
      title: "First Sound",
      icon: "🐻",
      description: "Match a word to its first letter.",
      rounds: [
        { prompt: "Bear starts with which letter?", stage: "🐻", choices: ["B", "C", "D"], answer: "B", speak: "Bear starts with which letter?" },
        { prompt: "Apple starts with which letter?", stage: "🍎", choices: ["A", "E", "O"], answer: "A", speak: "Apple starts with which letter?" },
        { prompt: "Sun starts with which letter?", stage: "☀️", choices: ["F", "S", "T"], answer: "S", speak: "Sun starts with which letter?" }
      ]
    },
    {
      id: "picture-word",
      title: "Picture Match",
      icon: "🖼️",
      description: "Choose the word that matches the picture.",
      rounds: [
        { prompt: "Which word matches this picture?", stage: "🐱", choices: ["Cat", "Dog", "Fish"], answer: "Cat", speak: "Which word matches this picture?" },
        { prompt: "Which word matches this picture?", stage: "🍌", choices: ["Apple", "Banana", "Pear"], answer: "Banana", speak: "Which word matches this picture?" },
        { prompt: "Which word matches this picture?", stage: "🚗", choices: ["Bus", "Bike", "Car"], answer: "Car", speak: "Which word matches this picture?" }
      ]
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

let progress = loadProgress();
let soundEnabled = localStorage.getItem(SOUND_KEY) !== "off";
let currentView = { type: "home" };
let activeGame = null;

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

function speak(text) {
  if (!soundEnabled || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.88;
  utterance.pitch = 1.08;
  utterance.volume = 0.9;
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
      <p>${world.note}. Pick a short game and help Adi complete three little challenges.</p>
    </section>

    <section class="section" aria-labelledby="activity-heading">
      <div class="section-heading">
        <div>
          <h2 id="activity-heading">Pick a game</h2>
          <p>Each game has 3 quick rounds.</p>
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

  activeGame = { worldId, activityId, roundIndex, correctThisRound: false };
  currentView = { type: "game", worldId, activityId };
  setActiveNav("worlds");

  const round = activity.rounds[roundIndex];
  const progressPct = (roundIndex / activity.rounds.length) * 100;
  const isSequence = /\s{2}|\?/.test(round.stage);
  const isNumber = /^\d$/.test(round.stage);

  screen.innerHTML = `
    <div class="back-row"><button class="back-button" type="button" data-action="back-world" data-world-id="${worldId}">← Back</button></div>
    <header class="activity-header">
      <span class="eyebrow">Round ${roundIndex + 1} of ${activity.rounds.length}</span>
      <h1>${activity.icon} ${activity.title}</h1>
      <div class="progress-track" aria-label="Game progress">
        <div class="progress-fill" style="width:${progressPct}%"></div>
      </div>
    </header>

    <section class="game-card" aria-live="polite">
      <div class="adi-prompt">
        <div class="adi-mini" aria-hidden="true">👧🏻</div>
        <p>${round.prompt}</p>
      </div>

      <div class="prompt-stage">
        <div class="${isNumber ? "big-number" : isSequence ? "sequence" : "big-symbol"}">${round.stage}</div>
      </div>

      <div class="choice-grid">
        ${round.choices.map((choice) => `
          <button class="choice-button" type="button" data-choice="${escapeAttr(choice)}">
            <span aria-hidden="true">${choice}</span>
            ${choice.length > 2 && !containsEmojiOnly(choice) ? `<span class="choice-label">${choice}</span>` : ""}
          </button>
        `).join("")}
      </div>

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

function handleChoice(choice, button) {
  if (!activeGame || activeGame.correctThisRound) return;
  const { worldId, activityId, roundIndex } = activeGame;
  const activity = activities[worldId].find((item) => item.id === activityId);
  const round = activity.rounds[roundIndex];
  const feedback = document.getElementById("feedback");

  if (choice === round.answer) {
    activeGame.correctThisRound = true;
    button.classList.add("is-correct");
    feedback.className = "feedback good";
    feedback.textContent = "You found it! ⭐";
    speak("You found it! Great job!");

    setTimeout(() => {
      const nextRound = roundIndex + 1;
      if (nextRound < activity.rounds.length) {
        renderGame(worldId, activityId, nextRound);
      } else {
        completeActivity(worldId, activityId);
      }
    }, 900);
  } else {
    button.classList.add("is-try-again");
    feedback.className = "feedback try";
    feedback.textContent = "Almost! Try another one.";
    speak("Almost! Try another one.");
    setTimeout(() => button.classList.remove("is-try-again"), 600);
  }
}

function completeActivity(worldId, activityId) {
  const key = `${worldId}:${activityId}`;
  const firstCompletion = !progress.completed[key];

  if (firstCompletion) {
    progress.completed[key] = 3;
    progress.stars += 3;
    saveProgress();
  }

  celebration.classList.add("is-visible");
  celebration.setAttribute("aria-hidden", "false");
  speak(firstCompletion ? "Great job! You earned three stars!" : "Great job! You finished the game again!");

  setTimeout(() => {
    celebration.classList.remove("is-visible");
    celebration.setAttribute("aria-hidden", "true");
    renderWorld(worldId);
  }, 1500);
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
    renderGame(activityButton.dataset.worldId, activityButton.dataset.activity, 0);
    return;
  }

  const choiceButton = event.target.closest("[data-choice]");
  if (choiceButton) {
    handleChoice(choiceButton.dataset.choice, choiceButton);
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
