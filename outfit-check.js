(() => {
  const OUTFIT_STORAGE_KEY = "adis-world-outfit-v1";
  const ADI_3D_FRONT = "./assets/character/adi-front-3d.webp?v=39";

  const DEFAULT_OUTFIT = Object.freeze({
    top: "pink-donut",
    bottom: "denim-shorts",
    headband: "none",
    necklace: "none",
    wrist: "none",
    watch: "none",
    shoes: "pink-sneakers"
  });

  const OUTFIT_OPTIONS = {
    top: [
      { id: "pink-donut", label: "Pink Donut Tee", swatch: "#f25f9b" },
      { id: "lavender-star", label: "Lavender Star Tee", swatch: "#9f86e8" },
      { id: "mint-hoodie", label: "Mint Hoodie", swatch: "#65c9b1" }
    ],
    bottom: [
      { id: "denim-shorts", label: "Denim Shorts", swatch: "#4284c4" },
      { id: "purple-skirt", label: "Purple Skirt", swatch: "#a66bd3" },
      { id: "teal-pants", label: "Teal Pants", swatch: "#3caaa2" }
    ],
    headband: [
      { id: "none", label: "No Headband", swatch: "#f4f1f6" },
      { id: "pink-headband", label: "Pink Headband", swatch: "#f36aa4" },
      { id: "yellow-headband", label: "Yellow Headband", swatch: "#f4c94c" }
    ],
    necklace: [
      { id: "none", label: "No Necklace", swatch: "#f4f1f6" },
      { id: "heart-necklace", label: "Heart Necklace", swatch: "#ef5f8b" },
      { id: "star-necklace", label: "Star Necklace", swatch: "#f1bb35" }
    ],
    wrist: [
      { id: "none", label: "No Wrist Band", swatch: "#f4f1f6" },
      { id: "pink-rubber-band", label: "Pink Rubber Band", swatch: "#f15f9b" },
      { id: "blue-bead-band", label: "Blue Bead Band", swatch: "#4e91d6" }
    ],
    watch: [
      { id: "none", label: "No Watch", swatch: "#f4f1f6" },
      { id: "purple-watch", label: "Purple Watch", swatch: "#8258d4" },
      { id: "aqua-watch", label: "Aqua Watch", swatch: "#44bfc2" }
    ],
    shoes: [
      { id: "pink-sneakers", label: "Pink Sneakers", swatch: "#f47aa8" },
      { id: "purple-hightops", label: "Purple High-Tops", swatch: "#8b66d9" },
      { id: "aqua-slipons", label: "Aqua Slip-Ons", swatch: "#49bfc1" }
    ]
  };

  const CATEGORY_LABELS = {
    top: "Tops",
    bottom: "Bottoms",
    headband: "Head",
    necklace: "Necklace",
    wrist: "Wrist",
    watch: "Watch",
    shoes: "Shoes"
  };

  const CATEGORY_ICONS = {
    top: "👕",
    bottom: "🩳",
    headband: "🎀",
    necklace: "📿",
    wrist: "💠",
    watch: "⌚",
    shoes: "👟"
  };

  const AVATAR_VIEWS = [
    { id: "front", label: "Front", turn: 0 },
    { id: "three-quarter-right", label: "3/4 Right", turn: 1 },
    { id: "right", label: "Right", turn: 2 },
    { id: "back", label: "Back", turn: 3 },
    { id: "left", label: "Left", turn: 4 },
    { id: "three-quarter-left", label: "3/4 Left", turn: 5 }
  ];

  let outfitState = loadOutfit();
  let activeCategory = "top";
  let avatarViewIndex = 0;

  function loadOutfit() {
    try {
      const parsed = JSON.parse(localStorage.getItem(OUTFIT_STORAGE_KEY) || "{}");
      return { ...DEFAULT_OUTFIT, ...parsed };
    } catch {
      return { ...DEFAULT_OUTFIT };
    }
  }

  function saveOutfit() {
    localStorage.setItem(OUTFIT_STORAGE_KEY, JSON.stringify(outfitState));
  }

  function optionFor(category, id) {
    return OUTFIT_OPTIONS[category].find((item) => item.id === id) || OUTFIT_OPTIONS[category][0];
  }

  function avatarClasses() {
    return [
      "adi-outfit-avatar",
      "top-" + outfitState.top,
      "bottom-" + outfitState.bottom,
      "headband-" + outfitState.headband,
      "necklace-" + outfitState.necklace,
      "wrist-" + outfitState.wrist,
      "watch-" + outfitState.watch,
      "shoes-" + outfitState.shoes
    ].join(" ");
  }

  function currentAvatarView() {
    return AVATAR_VIEWS[avatarViewIndex];
  }

  function setAvatarView(index) {
    avatarViewIndex = (index + AVATAR_VIEWS.length) % AVATAR_VIEWS.length;
    const host = document.querySelector(".outfit-avatar-host");
    if (host) host.innerHTML = renderAvatar();
  }

  function renderViewRail() {
    return AVATAR_VIEWS.map((view, index) => `
      <button
        type="button"
        class="outfit-view-thumb ${index === avatarViewIndex ? "is-active" : ""}"
        data-outfit-view="${index}"
        aria-pressed="${index === avatarViewIndex}"
        aria-label="Show Adi ${view.label} view">
        <span class="outfit-view-mini view-${view.id}" aria-hidden="true">
          <img src="${ADI_3D_FRONT}" alt="">
        </span>
        <span>${view.label}</span>
      </button>
    `).join("");
  }

  function renderAvatar() {
    return `
      <div class="outfit-avatar-wrap outfit-avatar-v2">
        <div class="outfit-room-backdrop" aria-hidden="true">
          <span class="room-window"></span>
          <span class="room-shelf"></span>
          <span class="room-rug"></span>
          <span class="room-poster">A Brighter<br>Tomorrow<br>with Adi! ♡</span>
          <span class="room-plush">🐰</span>
        </div>

        <button type="button" class="outfit-stage-arrow outfit-stage-arrow-left" data-outfit-turn="-1" aria-label="Turn Adi left">‹</button>

        <div class="adi-outfit-avatar adi-outfit-avatar-render" id="outfit-avatar" data-avatar-view="${currentAvatarView().id}" role="img" aria-label="Adi in her Outfit Check look">
          <div class="adi-shadow"></div>
          <img class="adi-3d-render adi-3d-render-phase3" src="${ADI_3D_FRONT}" alt="" aria-hidden="true" decoding="async" fetchpriority="high">
          <div class="adi-wardrobe-layer" aria-hidden="true">
            <span class="wardrobe-top"></span>
            <span class="wardrobe-bottom"></span>
            <span class="wardrobe-headband"></span>
            <span class="wardrobe-necklace"></span>
            <span class="wardrobe-wrist"></span>
            <span class="wardrobe-watch"></span>
            <span class="wardrobe-shoe wardrobe-shoe-left"></span>
            <span class="wardrobe-shoe wardrobe-shoe-right"></span>
          </div>
        </div>

        <button type="button" class="outfit-stage-arrow outfit-stage-arrow-right" data-outfit-turn="1" aria-label="Turn Adi right">›</button>

        <div class="outfit-view-rail" role="group" aria-label="Adi view angles">
          ${renderViewRail()}
        </div>

        <div class="outfit-turn-controls" aria-label="Turn Adi">
          <button type="button" data-outfit-turn="-1" aria-label="Turn Adi left">↶</button>
          <span>${currentAvatarView().label}</span>
          <button type="button" data-outfit-turn="1" aria-label="Turn Adi right">↷</button>
        </div>
      </div>`;
  }

  function renderCategoryTabs() {
    return Object.keys(OUTFIT_OPTIONS).map((category) => `
      <button
        type="button"
        class="outfit-category-button ${activeCategory === category ? "is-active" : ""}"
        data-outfit-category="${category}"
        aria-pressed="${activeCategory === category}">
        <span class="outfit-category-icon" aria-hidden="true">${CATEGORY_ICONS[category]}</span>
        <span>${CATEGORY_LABELS[category]}</span>
      </button>
    `).join("");
  }

  function outfitSummary() {
    return Object.keys(OUTFIT_OPTIONS).map((category) => {
      const selected = optionFor(category, outfitState[category]);
      return `${CATEGORY_LABELS[category]}: ${selected.label}`;
    }).join(" • ");
  }

  function renderOptions() {
    return OUTFIT_OPTIONS[activeCategory].map((option) => {
      const selected = outfitState[activeCategory] === option.id;
      return `
        <button
          type="button"
          class="outfit-option-card ${selected ? "is-selected" : ""}"
          data-outfit-option="${option.id}"
          aria-pressed="${selected}">
          <span class="outfit-item-preview" style="--swatch:${option.swatch}" aria-hidden="true">
            <span class="outfit-item-glyph">${CATEGORY_ICONS[activeCategory]}</span>
          </span>
          <strong>${option.label}</strong>
          <span class="outfit-option-check" aria-hidden="true">${selected ? "✓" : ""}</span>
        </button>
      `;
    }).join("");
  }

  function updateOutfitUI() {
    const avatarHost = document.querySelector(".outfit-avatar-host");
    const tabsHost = document.querySelector(".outfit-category-tabs");
    const optionsHost = document.querySelector(".outfit-options-grid");
    const savedNote = document.querySelector(".outfit-save-note");
    const itemsTitle = document.querySelector(".outfit-items-title-row h3");
    const currentLook = document.querySelector(".outfit-current-look");
    if (avatarHost) avatarHost.innerHTML = renderAvatar();
    if (tabsHost) tabsHost.innerHTML = renderCategoryTabs();
    if (optionsHost) optionsHost.innerHTML = renderOptions();
    if (itemsTitle) itemsTitle.textContent = CATEGORY_LABELS[activeCategory];
    if (currentLook) currentLook.textContent = outfitSummary();
    if (savedNote) {
      savedNote.textContent = "Saved on this device ✓";
      window.setTimeout(() => {
        if (savedNote) savedNote.textContent = "Changes save automatically";
      }, 1200);
    }
  }

  window.renderOutfitCheck = function renderOutfitCheck() {
    if (!window.screen) return;
    currentView = { type: "outfit-check", worldId: "home", activityId: "outfit-check" };
    setActiveNav("worlds");
    screen.innerHTML = `
      <div class="outfit-page-head">
        <button class="back-button outfit-back-button" type="button" data-action="back-world" data-world-id="home">← Adi's Home</button>
        <header class="activity-header outfit-check-header">
          <span class="eyebrow">ADI'S HOME</span>
          <h1><span aria-hidden="true">👗</span> Outfit Check</h1>
          <p class="helper-text">Dress Adi, mix her clothes and accessories, and make a look you love.</p>
        </header>
      </div>

      <section class="outfit-check-layout" aria-label="Outfit Check">
        <div class="outfit-avatar-host">${renderAvatar()}</div>

        <div class="outfit-closet">
          <div class="outfit-closet-heading">
            <div>
              <span class="eyebrow">Closet</span>
              <h2>Choose an item</h2>
            </div>
          </div>

          <div class="outfit-category-tabs" role="group" aria-label="Outfit categories">${renderCategoryTabs()}</div>

          <section class="outfit-items-panel">
            <div class="outfit-items-title-row">
              <h3>${CATEGORY_LABELS[activeCategory]}</h3>
              <span>Tap an item to preview it</span>
            </div>
            <div class="outfit-options-grid" aria-live="polite">${renderOptions()}</div>
          </section>

          <div class="outfit-action-row">
            <button class="outfit-reset-button" type="button" data-outfit-reset>↶ Reset Look</button>
            <button class="outfit-save-button" type="button" data-outfit-save>✓ Save Outfit</button>
          </div>
          <p class="outfit-current-look" aria-live="polite">${outfitSummary()}</p>
          <p class="outfit-save-note">Your look is saved on this device.</p>
        </div>
      </section>
    `;
    window.scrollTo({ top: 0, behavior: "auto" });
    screen.focus({ preventScroll: true });
  };

  document.addEventListener("click", (event) => {
    const categoryButton = event.target.closest("[data-outfit-category]");
    if (categoryButton) {
      activeCategory = categoryButton.dataset.outfitCategory;
      const tabsHost = document.querySelector(".outfit-category-tabs");
      const optionsHost = document.querySelector(".outfit-options-grid");
      if (tabsHost) tabsHost.innerHTML = renderCategoryTabs();
      if (optionsHost) optionsHost.innerHTML = renderOptions();
      return;
    }

    const optionButton = event.target.closest("[data-outfit-option]");
    if (optionButton && currentView?.type === "outfit-check") {
      outfitState[activeCategory] = optionButton.dataset.outfitOption;
      saveOutfit();
      updateOutfitUI();
      return;
    }

    const viewButton = event.target.closest("[data-outfit-view]");
    if (viewButton && currentView?.type === "outfit-check") {
      setAvatarView(Number(viewButton.dataset.outfitView || 0));
      return;
    }

    const turnButton = event.target.closest("[data-outfit-turn]");
    if (turnButton && currentView?.type === "outfit-check") {
      setAvatarView(avatarViewIndex + Number(turnButton.dataset.outfitTurn || 0));
      return;
    }

    const saveButton = event.target.closest("[data-outfit-save]");
    if (saveButton && currentView?.type === "outfit-check") {
      saveOutfit();
      const savedNote = document.querySelector(".outfit-save-note");
      if (savedNote) savedNote.textContent = "Outfit saved ✓";
      if (typeof speak === "function") speak("Outfit saved.");
      window.setTimeout(() => {
        if (savedNote) savedNote.textContent = "Your look is saved on this device.";
      }, 1400);
      return;
    }

    const resetButton = event.target.closest("[data-outfit-reset]");
    if (resetButton && currentView?.type === "outfit-check") {
      outfitState = { ...DEFAULT_OUTFIT };
      activeCategory = "top";
      avatarViewIndex = 0;
      saveOutfit();
      updateOutfitUI();
      if (typeof speak === "function") speak("Adi is back in her default outfit.");
    }
  });
})();
