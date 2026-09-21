(() => {
  const drawingWorld = worlds.find((world) => world.id === "drawing");
  if (drawingWorld) drawingWorld.status = "open";

  const ROUND_OPTIONS = [5, 10, 15, 20];
  const SHAPES = [
    { id: "circle", name: "Circle", icon: "⚪" },
    { id: "square", name: "Square", icon: "⬜" },
    { id: "triangle", name: "Triangle", icon: "🔺" },
    { id: "star", name: "Star", icon: "⭐" },
    { id: "heart", name: "Heart", icon: "❤️" },
    { id: "diamond", name: "Diamond", icon: "🔷" }
  ];
  const WORD_LEVELS = [
    { id: "short", label: "Short", note: "3–4 letters", min: 3, max: 4 },
    { id: "medium", label: "Medium", note: "4–5 letters", min: 4, max: 5 },
    { id: "long", label: "Long", note: "5–7 letters", min: 5, max: 7 }
  ];

  activities.drawing = [
    { id: "letter-tracing", title: "Letter Tracing", icon: "✍️", description: "Choose A–Z and trace uppercase and lowercase letters for 5, 10, 15, or 20 rounds.", rounds: [] },
    { id: "number-tracing", title: "Number Tracing", icon: "🔢", description: "Choose a number from 0–30 and practise tracing it for up to 20 rounds.", rounds: [] },
    { id: "shape-tracing", title: "Shape Tracing", icon: "🔷", description: "Choose a shape and trace the dotted guide with your finger or stylus.", rounds: [] },
    { id: "word-writing", title: "Word Writing", icon: "📝", description: "Practise writing familiar 3–7 letter words from Word Forest.", rounds: [] },
    { id: "free-drawing", title: "Free Drawing Practice", icon: "🎨", description: "Draw freely with colours and brush sizes, then save your picture to your device.", rounds: [] }
  ];

  Object.assign(GAME_INSTRUCTIONS, {
    "drawing:letter-tracing": {
      intro: "Choose a letter, then trace it with your finger or stylus.",
      steps: ["Choose one letter from A to Z.", "Choose 5, 10, 15, or 20 rounds.", "Follow the dotted letter guide, then tap Done."],
      spoken: "Choose a letter and how many rounds to practise. Trace the dotted letter with your finger or stylus, then tap Done."
    },
    "drawing:number-tracing": {
      intro: "Choose a number and practise tracing it.",
      steps: ["Choose a number from zero to thirty.", "Choose 5, 10, 15, or 20 rounds.", "Trace the dotted number guide, then tap Done."],
      spoken: "Choose a number and how many rounds to practise. Trace the dotted number, then tap Done."
    },
    "drawing:shape-tracing": {
      intro: "Choose a shape and trace around its dotted guide.",
      steps: ["Choose a shape.", "Choose 5, 10, 15, or 20 rounds.", "Trace the dotted outline, then tap Done."],
      spoken: "Choose a shape and how many rounds to practise. Trace around the dotted outline, then tap Done."
    },
    "drawing:word-writing": {
      intro: "Practise writing familiar words one letter at a time.",
      steps: ["Choose short, medium, or long words.", "Choose 5, 10, 15, or 20 rounds.", "Copy the dotted word on the writing board, then tap Done."],
      spoken: "Choose a word level and how many rounds to practise. Copy the dotted word on the writing board, then tap Done."
    },
    "drawing:free-drawing": {
      intro: "Use the drawing board to practise lines, curves, shapes, or anything you imagine.",
      steps: ["Draw with your finger or stylus.", "Change the colour or brush size whenever you like.", "Tap Save to download your drawing as a PNG image, or tap Finish when you are done."],
      spoken: "Draw anything you like. Change colours or brush size whenever you want. Tap Save to keep your picture on your device, or tap Finish when you are done."
    }
  });

  const setups = {
    "letter-tracing": { target: "A", rounds: 10 },
    "number-tracing": { target: "1", rounds: 10 },
    "shape-tracing": { target: "circle", rounds: 10 },
    "word-writing": { target: "short", rounds: 10 }
  };

  const originalRenderHome = renderHome;
  renderHome = function () {
    originalRenderHome();
    const copy = [...document.querySelectorAll(".section-heading p")].find((node) => /worlds are ready to play/i.test(node.textContent));
    if (copy) copy.textContent = `${worlds.filter((world) => world.status === "open").length} worlds are ready to play.`;
  };

  const originalRenderWorld = renderWorld;
  renderWorld = function (worldId) {
    originalRenderWorld(worldId);
    if (worldId !== "drawing") return;
    const heading = document.querySelector("#activity-heading")?.parentElement?.querySelector("p");
    if (heading) heading.textContent = "Drawing Garden builds early handwriting, pencil-control, tracing, and creative drawing skills.";
  };

  function targetOptions(activityId) {
    if (activityId === "letter-tracing") {
      return ALPHABET.map((letter) => ({ value: letter, label: letter, sub: letter.toLowerCase() }));
    }
    if (activityId === "number-tracing") {
      return Array.from({ length: 31 }, (_, value) => ({ value: String(value), label: String(value), sub: numberWord(value) }));
    }
    if (activityId === "shape-tracing") {
      return SHAPES.map((shape) => ({ value: shape.id, label: shape.icon, sub: shape.name }));
    }
    return WORD_LEVELS.map((level) => ({ value: level.id, label: level.label, sub: level.note }));
  }

  function setupTitle(activityId) {
    return {
      "letter-tracing": "Choose a letter",
      "number-tracing": "Choose a number",
      "shape-tracing": "Choose a shape",
      "word-writing": "Choose word length"
    }[activityId];
  }

  function setupSpeak(activityId, value) {
    if (activityId === "letter-tracing") return speakLetterSound(value);
    if (activityId === "number-tracing") return speak(numberWord(value));
    if (activityId === "shape-tracing") return speak(SHAPES.find((shape) => shape.id === value)?.name || value);
    const level = WORD_LEVELS.find((item) => item.id === value);
    return speak(level ? `${level.label} words. ${level.note}.` : value);
  }

  function renderDrawingSetup(activityId) {
    const activity = activities.drawing.find((item) => item.id === activityId);
    const setup = setups[activityId];
    if (!activity || !setup) return renderWorld("drawing");

    currentView = { type: "drawing-setup", worldId: "drawing", activityId };
    setActiveNav("worlds");
    const options = targetOptions(activityId);

    screen.innerHTML = `
      <div class="back-row"><button class="back-button" type="button" data-action="back-world" data-world-id="drawing">← Back</button></div>
      <header class="activity-header">
        <span class="eyebrow">Drawing Garden</span>
        <h1>${activity.icon} ${activity.title}</h1>
        <p class="helper-text">Pick what to practise, then choose how many rounds.</p>
      </header>
      <section class="game-card drawing-setup-card game-enter">
        <div class="start-word-setup-section">
          <div class="start-word-step-badge">1</div>
          <div><h2>${setupTitle(activityId)}</h2><p class="helper-text">Tap an option to select it and hear its name.</p></div>
        </div>
        <div class="drawing-target-grid ${activityId}" aria-label="${setupTitle(activityId)}">
          ${options.map((option) => `
            <button class="drawing-target-button ${setup.target === option.value ? "is-selected" : ""}" type="button"
              data-drawing-target="${escapeAttr(option.value)}" data-drawing-activity="${activityId}" aria-pressed="${setup.target === option.value}">
              <strong>${option.label}</strong><span>${option.sub}</span>
            </button>`).join("")}
        </div>
        <div class="start-word-setup-section start-word-round-section">
          <div class="start-word-step-badge">2</div>
          <div><h2>How many rounds?</h2><p class="helper-text">Choose a short or longer practice session.</p></div>
        </div>
        <div class="start-word-round-grid" aria-label="Choose number of rounds">
          ${ROUND_OPTIONS.map((count) => `
            <button class="start-word-round-button ${setup.rounds === count ? "is-selected" : ""}" type="button"
              data-drawing-rounds="${count}" data-drawing-activity="${activityId}" aria-pressed="${setup.rounds === count}">
              <strong>${count}</strong><span>rounds</span>
            </button>`).join("")}
        </div>
        <div class="start-word-setup-summary" aria-live="polite">
          Ready for <strong>${setup.rounds}</strong> rounds
        </div>
        <button class="primary-button start-word-start-button" type="button" data-drawing-start="${activityId}">▶ Start Practice</button>
      </section>`;
    screen.focus({ preventScroll: true });
  }

  function repeatTargets(source, total) {
    const output = [];
    while (output.length < total) {
      const batch = shuffle(source);
      for (const item of batch) {
        if (output.length >= total) break;
        output.push(item);
      }
    }
    return output;
  }

  function buildRounds(activityId) {
    const setup = setups[activityId];
    if (!setup) return [];

    if (activityId === "letter-tracing") {
      return Array.from({ length: setup.rounds }, (_, index) => {
        const display = index % 2 === 0 ? setup.target : setup.target.toLowerCase();
        return { prompt: `Trace the letter ${display}.`, speak: `Trace the letter ${display}.`, guideType: "text", guide: display, label: display };
      });
    }

    if (activityId === "number-tracing") {
      return Array.from({ length: setup.rounds }, () => ({
        prompt: `Trace the number ${setup.target}.`, speak: `Trace the number ${numberWord(setup.target)}.`, guideType: "text", guide: setup.target, label: setup.target
      }));
    }

    if (activityId === "shape-tracing") {
      const shape = SHAPES.find((item) => item.id === setup.target) || SHAPES[0];
      return Array.from({ length: setup.rounds }, () => ({
        prompt: `Trace the ${shape.name.toLowerCase()}.`, speak: `Trace the ${shape.name.toLowerCase()}.`, guideType: "shape", guide: shape.id, label: shape.name
      }));
    }

    const level = WORD_LEVELS.find((item) => item.id === setup.target) || WORD_LEVELS[0];
    const pool = BUILD_WORD_POOL.filter((item) => item.word.length >= level.min && item.word.length <= level.max);
    return repeatTargets(pool.length ? pool : BUILD_WORD_POOL, setup.rounds).map((item) => ({
      prompt: `Write the word ${item.word}.`, speak: `Write the word ${item.word}.`, guideType: "text", guide: item.word.toUpperCase(), label: item.word, emoji: item.emoji
    }));
  }

  function startDrawingActivity(activityId) {
    if (activityId === "free-drawing") {
      startGameSession("drawing", activityId);
      renderFreeDrawing();
      return;
    }
    const activity = activities.drawing.find((item) => item.id === activityId);
    if (!activity) return;
    activity.rounds = buildRounds(activityId);
    startGameSession("drawing", activityId);
    renderDrawingRound(activityId, 0);
  }

  function drawGuide(ctx, canvas, round) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.strokeStyle = "#d6d1ea";
    ctx.fillStyle = "#f4f1fb";
    ctx.lineWidth = 5;
    ctx.setLineDash([14, 12]);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    if (round.guideType === "shape") {
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const size = Math.min(canvas.width, canvas.height) * 0.58;
      ctx.beginPath();
      if (round.guide === "circle") ctx.arc(cx, cy, size / 2, 0, Math.PI * 2);
      if (round.guide === "square") ctx.rect(cx - size / 2, cy - size / 2, size, size);
      if (round.guide === "triangle") {
        ctx.moveTo(cx, cy - size / 2);
        ctx.lineTo(cx + size / 2, cy + size / 2);
        ctx.lineTo(cx - size / 2, cy + size / 2);
        ctx.closePath();
      }
      if (round.guide === "diamond") {
        ctx.moveTo(cx, cy - size / 2);
        ctx.lineTo(cx + size / 2, cy);
        ctx.lineTo(cx, cy + size / 2);
        ctx.lineTo(cx - size / 2, cy);
        ctx.closePath();
      }
      if (round.guide === "star") {
        for (let i = 0; i < 10; i += 1) {
          const radius = i % 2 === 0 ? size / 2 : size / 4;
          const angle = -Math.PI / 2 + i * Math.PI / 5;
          const x = cx + Math.cos(angle) * radius;
          const y = cy + Math.sin(angle) * radius;
          i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.closePath();
      }
      if (round.guide === "heart") {
        const s = size / 2;
        ctx.moveTo(cx, cy + s * 0.7);
        ctx.bezierCurveTo(cx - s * 1.2, cy, cx - s, cy - s, cx, cy - s * 0.25);
        ctx.bezierCurveTo(cx + s, cy - s, cx + s * 1.2, cy, cx, cy + s * 0.7);
      }
      ctx.stroke();
    } else {
      const text = String(round.guide);
      const maxFont = text.length > 6 ? 120 : text.length > 3 ? 160 : 250;
      ctx.font = `900 ${maxFont}px Arial, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.strokeText(text, canvas.width / 2, canvas.height / 2 + 8);
    }
    ctx.restore();
  }

  function renderDrawingRound(activityId, roundIndex) {
    const activity = activities.drawing.find((item) => item.id === activityId);
    const round = activity?.rounds?.[roundIndex];
    if (!activity || !round) return renderWorld("drawing");

    activeGame = { worldId: "drawing", activityId, roundIndex, correctThisRound: false, answerLocked: false, drawingDistance: 0, strokes: [] };
    currentView = { type: "game", worldId: "drawing", activityId };
    setActiveNav("worlds");
    const progressPct = ((roundIndex + 1) / activity.rounds.length) * 100;

    screen.innerHTML = `
      <div class="back-row"><button class="back-button" type="button" data-action="back-world" data-world-id="drawing">← Back</button></div>
      <header class="activity-header">
        <div class="round-meta"><span class="eyebrow">Round ${roundIndex + 1} of ${activity.rounds.length}</span><span class="round-pill">✍️ Practice</span></div>
        <h1>${activity.icon} ${activity.title}</h1>
        <div class="session-score"><span>⭐ <strong>${gameSession?.score ?? 0}</strong></span><small>${gameSession ? `${gameSession.correctAnswers} complete • ${gameSession.mistakes} retries` : ""}</small></div>
        <div class="progress-track"><div class="progress-fill" style="width:${progressPct}%"></div></div>
      </header>
      <section class="game-card drawing-game-card game-enter">
        <div class="adi-prompt"><div class="adi-mini" aria-hidden="true">👧🏻</div><p>${round.prompt}</p></div>
        ${round.emoji ? `<div class="drawing-word-cue"><span aria-hidden="true">${round.emoji}</span><strong>${round.label}</strong></div>` : ""}
        <div class="drawing-board-wrap">
          <canvas id="drawing-canvas" class="drawing-canvas" width="760" height="430" aria-label="Writing practice board"></canvas>
        </div>
        <div class="drawing-actions">
          <button class="drawing-tool-button" type="button" data-drawing-clear>↺ Clear</button>
          <button class="primary-button drawing-done-button" type="button" data-drawing-done>✓ Done</button>
        </div>
        <div id="feedback" class="feedback" aria-live="assertive"></div>
      </section>`;

    initCanvas(round, false);
    screen.focus({ preventScroll: true });
    setTimeout(() => speak(round.speak), 220);
  }

  let freeDrawingState = { colour: "#5b4bc4", width: 10, history: [] };

  function renderFreeDrawing() {
    const activity = activities.drawing.find((item) => item.id === "free-drawing");
    activeGame = { worldId: "drawing", activityId: "free-drawing", roundIndex: 0, correctThisRound: false, drawingDistance: 0, strokes: [] };
    currentView = { type: "game", worldId: "drawing", activityId: "free-drawing" };
    setActiveNav("worlds");

    screen.innerHTML = `
      <div class="back-row"><button class="back-button" type="button" data-action="back-world" data-world-id="drawing">← Back</button></div>
      <header class="activity-header"><span class="eyebrow">Creative practice</span><h1>${activity.icon} ${activity.title}</h1></header>
      <section class="game-card drawing-game-card game-enter">
        <div class="adi-prompt"><div class="adi-mini" aria-hidden="true">👧🏻</div><p>Draw anything you like!</p></div>
        <div class="drawing-palette" aria-label="Drawing colours">
          ${["#5b4bc4","#e8579d","#e68a21","#2a9d68","#2487c9","#303344"].map((colour) => `
            <button type="button" class="colour-swatch ${freeDrawingState.colour === colour ? "is-selected" : ""}" data-drawing-colour="${colour}" style="--swatch:${colour}" aria-label="Choose drawing colour"></button>`).join("")}
        </div>
        <div class="brush-size-row" aria-label="Brush size">
          ${[6,10,16].map((width) => `<button type="button" class="brush-size-button ${freeDrawingState.width === width ? "is-selected" : ""}" data-drawing-width="${width}"><span style="--brush:${width}px"></span>${width === 6 ? "Small" : width === 10 ? "Medium" : "Large"}</button>`).join("")}
        </div>
        <div class="drawing-board-wrap free"><canvas id="drawing-canvas" class="drawing-canvas" width="760" height="500" aria-label="Free drawing board"></canvas></div>
        <div class="drawing-actions four">
          <button class="drawing-tool-button" type="button" data-drawing-undo>↶ Undo</button>
          <button class="drawing-tool-button" type="button" data-drawing-clear>↺ Clear</button>
          <button class="drawing-tool-button drawing-save-button" type="button" data-free-drawing-save>💾 Save</button>
          <button class="primary-button drawing-done-button" type="button" data-free-drawing-finish>★ Finish</button>
        </div>
        <div id="feedback" class="feedback" aria-live="assertive"></div>
      </section>`;
    freeDrawingState.history = [];
    initCanvas(null, true);
    screen.focus({ preventScroll: true });
    setTimeout(() => speak("Draw anything you like. Use the colours and brush sizes. Tap Save to keep your picture on your device, or tap Finish when you are done."), 220);
  }

  function initCanvas(round, isFree) {
    const canvas = document.getElementById("drawing-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!isFree && round) drawGuide(ctx, canvas, round);
    else {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    let drawing = false;
    let last = null;
    let currentStroke = [];

    const point = (event) => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: (event.clientX - rect.left) * (canvas.width / rect.width),
        y: (event.clientY - rect.top) * (canvas.height / rect.height)
      };
    };

    const start = (event) => {
      event.preventDefault();
      drawing = true;
      last = point(event);
      currentStroke = [last];
      canvas.setPointerCapture?.(event.pointerId);
    };

    const move = (event) => {
      if (!drawing || !last) return;
      event.preventDefault();
      const next = point(event);
      const colour = isFree ? freeDrawingState.colour : "#5b4bc4";
      const width = isFree ? freeDrawingState.width : 11;
      ctx.save();
      ctx.strokeStyle = colour;
      ctx.lineWidth = width;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(last.x, last.y);
      ctx.lineTo(next.x, next.y);
      ctx.stroke();
      ctx.restore();
      const distance = Math.hypot(next.x - last.x, next.y - last.y);
      if (activeGame) activeGame.drawingDistance = (activeGame.drawingDistance || 0) + distance;
      currentStroke.push(next);
      last = next;
    };

    const end = (event) => {
      if (!drawing) return;
      drawing = false;
      canvas.releasePointerCapture?.(event.pointerId);
      if (currentStroke.length > 1) {
        const stroke = { points: currentStroke.slice(), colour: isFree ? freeDrawingState.colour : "#5b4bc4", width: isFree ? freeDrawingState.width : 11 };
        activeGame?.strokes?.push(stroke);
        if (isFree) freeDrawingState.history.push(stroke);
      }
      currentStroke = [];
      last = null;
    };

    canvas.addEventListener("pointerdown", start);
    canvas.addEventListener("pointermove", move);
    canvas.addEventListener("pointerup", end);
    canvas.addEventListener("pointercancel", end);
  }

  function redrawFreeCanvas() {
    const canvas = document.getElementById("drawing-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (const stroke of freeDrawingState.history) {
      ctx.save();
      ctx.strokeStyle = stroke.colour;
      ctx.lineWidth = stroke.width;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      stroke.points.forEach((p, index) => index ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y));
      ctx.stroke();
      ctx.restore();
    }
  }

  function saveFreeDrawing() {
    const canvas = document.getElementById("drawing-canvas");
    const feedback = document.getElementById("feedback");
    if (!canvas || activeGame?.activityId !== "free-drawing") return;

    if (!freeDrawingState.history.length || (activeGame?.drawingDistance || 0) < 10) {
      if (feedback) {
        feedback.className = "feedback try";
        feedback.textContent = "Draw something first, then tap Save.";
      }
      speak("Draw something first, then tap Save.");
      return;
    }

    const now = new Date();
    const stamp = [
      now.getFullYear(),
      String(now.getMonth() + 1).padStart(2, "0"),
      String(now.getDate()).padStart(2, "0"),
      "-",
      String(now.getHours()).padStart(2, "0"),
      String(now.getMinutes()).padStart(2, "0"),
      String(now.getSeconds()).padStart(2, "0")
    ].join("");
    const filename = `adis-world-drawing-${stamp}.png`;

    const downloadBlob = (blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1500);

      if (feedback) {
        feedback.className = "feedback good";
        feedback.textContent = "Saved! Your drawing was downloaded as a PNG. 💾";
      }
      speak("Saved! Your drawing was downloaded.");
    };

    if (canvas.toBlob) {
      canvas.toBlob(downloadBlob, "image/png");
      return;
    }

    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = filename;
    link.click();
    if (feedback) {
      feedback.className = "feedback good";
      feedback.textContent = "Saved! Your drawing was downloaded as a PNG. 💾";
    }
    speak("Saved! Your drawing was downloaded.");
  }

  function clearCurrentCanvas() {
    if (!activeGame) return;
    if (activeGame.activityId === "free-drawing") {
      freeDrawingState.history = [];
      activeGame.drawingDistance = 0;
      activeGame.strokes = [];
      redrawFreeCanvas();
      return;
    }
    const activity = activities.drawing.find((item) => item.id === activeGame.activityId);
    const round = activity?.rounds?.[activeGame.roundIndex];
    const canvas = document.getElementById("drawing-canvas");
    if (!round || !canvas) return;
    activeGame.drawingDistance = 0;
    activeGame.strokes = [];
    drawGuide(canvas.getContext("2d"), canvas, round);
  }

  function drawValidationGuide(ctx, canvas, round, lineWidth) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.strokeStyle = "#fff";
    ctx.fillStyle = "#fff";
    ctx.lineWidth = lineWidth;
    ctx.setLineDash([]);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    if (round.guideType === "shape") {
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const size = Math.min(canvas.width, canvas.height) * 0.58;
      ctx.beginPath();

      if (round.guide === "circle") ctx.arc(cx, cy, size / 2, 0, Math.PI * 2);
      if (round.guide === "square") ctx.rect(cx - size / 2, cy - size / 2, size, size);
      if (round.guide === "triangle") {
        ctx.moveTo(cx, cy - size / 2);
        ctx.lineTo(cx + size / 2, cy + size / 2);
        ctx.lineTo(cx - size / 2, cy + size / 2);
        ctx.closePath();
      }
      if (round.guide === "diamond") {
        ctx.moveTo(cx, cy - size / 2);
        ctx.lineTo(cx + size / 2, cy);
        ctx.lineTo(cx, cy + size / 2);
        ctx.lineTo(cx - size / 2, cy);
        ctx.closePath();
      }
      if (round.guide === "star") {
        for (let i = 0; i < 10; i += 1) {
          const radius = i % 2 === 0 ? size / 2 : size / 4;
          const angle = -Math.PI / 2 + i * Math.PI / 5;
          const x = cx + Math.cos(angle) * radius;
          const y = cy + Math.sin(angle) * radius;
          i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.closePath();
      }
      if (round.guide === "heart") {
        const s = size / 2;
        ctx.moveTo(cx, cy + s * 0.7);
        ctx.bezierCurveTo(cx - s * 1.2, cy, cx - s, cy - s, cx, cy - s * 0.25);
        ctx.bezierCurveTo(cx + s, cy - s, cx + s * 1.2, cy, cx, cy + s * 0.7);
      }
      ctx.stroke();
    } else {
      const text = String(round.guide);
      const maxFont = text.length > 6 ? 120 : text.length > 3 ? 160 : 250;
      ctx.font = `900 ${maxFont}px Arial, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.strokeText(text, canvas.width / 2, canvas.height / 2 + 8);
    }

    ctx.restore();
  }

  function drawStrokeMask(ctx, strokes, widthBoost = 0) {
    ctx.save();
    ctx.strokeStyle = "#fff";
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    for (const stroke of strokes || []) {
      if (!stroke.points || stroke.points.length < 2) continue;
      ctx.lineWidth = Math.max(1, (stroke.width || 11) + widthBoost);
      ctx.beginPath();
      stroke.points.forEach((point, index) => {
        if (index === 0) ctx.moveTo(point.x, point.y);
        else ctx.lineTo(point.x, point.y);
      });
      ctx.stroke();
    }

    ctx.restore();
  }

  function evaluateTracing(round) {
    const canvas = document.getElementById("drawing-canvas");
    const strokes = activeGame?.strokes || [];

    if (!canvas || !round || !strokes.length) {
      return { accuracy: 0, coverage: 0, strayRatio: 1, inkPixels: 0 };
    }

    const makeMask = () => {
      const mask = document.createElement("canvas");
      mask.width = canvas.width;
      mask.height = canvas.height;
      return mask;
    };

    const centerGuide = makeMask();
    const toleranceGuide = makeMask();
    const ink = makeMask();
    const expandedInk = makeMask();

    const centerWidth = round.guideType === "shape" ? 12 : 10;
    const toleranceWidth = round.guideType === "shape" ? 26 : 22;

    drawValidationGuide(centerGuide.getContext("2d"), centerGuide, round, centerWidth);
    drawValidationGuide(toleranceGuide.getContext("2d"), toleranceGuide, round, toleranceWidth);
    drawStrokeMask(ink.getContext("2d"), strokes, 0);
    drawStrokeMask(expandedInk.getContext("2d"), strokes, 8);

    const centerPixels = centerGuide.getContext("2d").getImageData(0, 0, canvas.width, canvas.height).data;
    const tolerancePixels = toleranceGuide.getContext("2d").getImageData(0, 0, canvas.width, canvas.height).data;
    const inkPixels = ink.getContext("2d").getImageData(0, 0, canvas.width, canvas.height).data;
    const expandedInkPixels = expandedInk.getContext("2d").getImageData(0, 0, canvas.width, canvas.height).data;

    let inkCount = 0;
    let inkNearGuide = 0;
    let guideCount = 0;
    let guideCovered = 0;

    for (let i = 3; i < inkPixels.length; i += 4) {
      const hasInk = inkPixels[i] > 20;
      const nearGuide = tolerancePixels[i] > 20;
      const onCenterGuide = centerPixels[i] > 20;
      const nearInk = expandedInkPixels[i] > 20;

      if (hasInk) {
        inkCount += 1;
        if (nearGuide) inkNearGuide += 1;
      }

      if (onCenterGuide) {
        guideCount += 1;
        if (nearInk) guideCovered += 1;
      }
    }

    const accuracy = inkCount ? inkNearGuide / inkCount : 0;
    const coverage = guideCount ? guideCovered / guideCount : 0;
    const strayRatio = inkCount ? (inkCount - inkNearGuide) / inkCount : 1;

    return { accuracy, coverage, strayRatio, inkPixels: inkCount };
  }

  function finishStructuredRound() {
    if (!activeGame || activeGame.worldId !== "drawing" || activeGame.activityId === "free-drawing" || activeGame.correctThisRound) return;

    const feedback = document.getElementById("feedback");
    const activity = activities.drawing.find((item) => item.id === activeGame.activityId);
    const round = activity?.rounds?.[activeGame.roundIndex];
    if (!round) return;

    if ((activeGame.drawingDistance || 0) < 140 || !(activeGame.strokes || []).length) {
      updateSessionScore(-1);
      refreshVisibleSessionScore();
      feedback.className = "feedback try";
      feedback.textContent = "Add a little more tracing, then try Done again.";
      speak("Add a little more tracing, then try Done again.");
      return;
    }

    const result = evaluateTracing(round);
    const isWord = activeGame.activityId === "word-writing";
    const minimumAccuracy = isWord ? 0.74 : 0.80;
    const minimumCoverage = isWord ? 0.40 : 0.48;
    const maximumStrayRatio = isWord ? 0.26 : 0.20;

    if (result.accuracy < minimumAccuracy || result.strayRatio > maximumStrayRatio) {
      updateSessionScore(-1);
      refreshVisibleSessionScore();
      feedback.className = "feedback try";
      feedback.textContent = "Stay on the dotted line. Clear it and try the shape again.";
      speak("Stay on the dotted line. Clear it and try the shape again.");
      return;
    }

    if (result.coverage < minimumCoverage) {
      updateSessionScore(-1);
      refreshVisibleSessionScore();
      feedback.className = "feedback try";
      feedback.textContent = "Good start! Follow more of the dotted line before you finish.";
      speak("Good start. Follow more of the dotted line before you finish.");
      return;
    }

    activeGame.correctThisRound = true;
    updateSessionScore(1);
    refreshVisibleSessionScore();
    feedback.className = "feedback good";
    feedback.textContent = "Lovely tracing! ⭐";
    document.querySelector(".game-card")?.classList.add("round-success");
    speak("Lovely tracing! Great job.");

    const { activityId, roundIndex } = activeGame;
    setTimeout(() => {
      if (roundIndex + 1 < activity.rounds.length) renderDrawingRound(activityId, roundIndex + 1);
      else completeActivity("drawing", activityId);
    }, 900);
  }

  document.addEventListener("click", (event) => {
    const start = event.target.closest("[data-start-instructed-game]");
    if (!start || start.dataset.worldId !== "drawing") return;
    event.preventDefault();
    event.stopImmediatePropagation();
    const activityId = start.dataset.activityId;
    if (activityId === "free-drawing") startDrawingActivity(activityId);
    else renderDrawingSetup(activityId);
  }, true);

  document.addEventListener("click", (event) => {
    const target = event.target.closest("[data-drawing-target]");
    if (target) {
      const activityId = target.dataset.drawingActivity;
      setups[activityId].target = target.dataset.drawingTarget;
      setupSpeak(activityId, setups[activityId].target);
      renderDrawingSetup(activityId);
      return;
    }

    const rounds = event.target.closest("[data-drawing-rounds]");
    if (rounds) {
      const activityId = rounds.dataset.drawingActivity;
      const count = Number(rounds.dataset.drawingRounds);
      if (ROUND_OPTIONS.includes(count)) setups[activityId].rounds = count;
      renderDrawingSetup(activityId);
      return;
    }

    const start = event.target.closest("[data-drawing-start]");
    if (start) {
      startDrawingActivity(start.dataset.drawingStart);
      return;
    }

    if (event.target.closest("[data-drawing-clear]")) {
      clearCurrentCanvas();
      speak("Board cleared.");
      return;
    }

    if (event.target.closest("[data-drawing-done]")) {
      finishStructuredRound();
      return;
    }

    const colour = event.target.closest("[data-drawing-colour]");
    if (colour) {
      freeDrawingState.colour = colour.dataset.drawingColour;
      renderFreeDrawingControlsOnly();
      return;
    }

    const width = event.target.closest("[data-drawing-width]");
    if (width) {
      freeDrawingState.width = Number(width.dataset.drawingWidth);
      renderFreeDrawingControlsOnly();
      return;
    }

    if (event.target.closest("[data-drawing-undo]")) {
      freeDrawingState.history.pop();
      if (activeGame?.activityId === "free-drawing") {
        activeGame.strokes = freeDrawingState.history.slice();
        activeGame.drawingDistance = freeDrawingState.history.reduce((total, stroke) => {
          const points = stroke.points || [];
          for (let i = 1; i < points.length; i += 1) {
            total += Math.hypot(points[i].x - points[i - 1].x, points[i].y - points[i - 1].y);
          }
          return total;
        }, 0);
      }
      redrawFreeCanvas();
      return;
    }

    if (event.target.closest("[data-free-drawing-save]")) {
      saveFreeDrawing();
      return;
    }

    if (event.target.closest("[data-free-drawing-finish]")) {
      const feedback = document.getElementById("feedback");
      if (!freeDrawingState.history.length || (activeGame?.drawingDistance || 0) < 120) {
        feedback.className = "feedback try";
        feedback.textContent = "Draw a little more before you finish.";
        speak("Draw a little more before you finish.");
        return;
      }
      if (activeGame?.correctThisRound) return;
      activeGame.correctThisRound = true;
      updateSessionScore(1);
      feedback.className = "feedback good";
      feedback.textContent = "Wonderful drawing! ⭐";
      speak("Wonderful drawing!");
      setTimeout(() => completeActivity("drawing", "free-drawing"), 850);
    }
  });

  function renderFreeDrawingControlsOnly() {
    document.querySelectorAll("[data-drawing-colour]").forEach((button) => button.classList.toggle("is-selected", button.dataset.drawingColour === freeDrawingState.colour));
    document.querySelectorAll("[data-drawing-width]").forEach((button) => button.classList.toggle("is-selected", Number(button.dataset.drawingWidth) === freeDrawingState.width));
  }

  renderHome();
})();