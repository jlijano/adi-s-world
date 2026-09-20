(() => {
  const OUTFIT_STORAGE_KEY = "adis-world-outfit-v1";
  const ADI_3D_FRONT = "data:image/webp;base64,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";

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
    top: "Top",
    bottom: "Bottom",
    headband: "Headband",
    necklace: "Necklace",
    wrist: "Wrist",
    watch: "Watch",
    shoes: "Shoes"
  };

  let outfitState = loadOutfit();
  let activeCategory = "top";
  let rotation = 0;

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

  function renderAvatar() {
    return `
      <div class="outfit-avatar-wrap outfit-avatar-v2">
        <div class="outfit-room-backdrop" aria-hidden="true">
          <span class="room-window"></span>
          <span class="room-shelf"></span>
          <span class="room-rug"></span>
        </div>
        <div class="adi-outfit-avatar adi-outfit-avatar-render" id="outfit-avatar" style="--adi-turn:${rotation}deg" role="img" aria-label="3D-style Adi in her default Outfit Check look">
          <div class="adi-shadow"></div>
          <img class="adi-3d-render" src="${ADI_3D_FRONT}" alt="" aria-hidden="true">
        </div>
        <div class="outfit-turn-controls" aria-label="Turn Adi">
          <button type="button" data-outfit-turn="-12" aria-label="Turn Adi left">↶</button>
          <span>Turn Adi</span>
          <button type="button" data-outfit-turn="12" aria-label="Turn Adi right">↷</button>
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
        ${CATEGORY_LABELS[category]}
      </button>
    `).join("");
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
          <span class="outfit-swatch" style="--swatch:${option.swatch}" aria-hidden="true"></span>
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
    if (avatarHost) avatarHost.innerHTML = renderAvatar();
    if (tabsHost) tabsHost.innerHTML = renderCategoryTabs();
    if (optionsHost) optionsHost.innerHTML = renderOptions();
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
      <div class="back-row">
        <button class="back-button" type="button" data-action="back-world" data-world-id="home">← Adi's Home</button>
      </div>
      <header class="activity-header outfit-check-header">
        <span class="eyebrow">Adi's Home</span>
        <h1>👗 Outfit Check</h1>
        <p class="helper-text">Dress Adi, mix her clothes and accessories, and make a look you love.</p>
      </header>

      <section class="outfit-check-layout" aria-label="Outfit Check">
        <div class="outfit-avatar-host">${renderAvatar()}</div>

        <div class="outfit-closet">
          <div class="outfit-closet-heading">
            <div>
              <span class="eyebrow">Closet</span>
              <h2>Choose an item</h2>
            </div>
            <button class="outfit-reset-button" type="button" data-outfit-reset>Reset</button>
          </div>
          <div class="outfit-category-tabs" role="group" aria-label="Outfit categories">${renderCategoryTabs()}</div>
          <div class="outfit-options-grid" aria-live="polite">${renderOptions()}</div>
          <p class="outfit-save-note">3D Addi base is active. Outfit layers remain saved locally and will be migrated to the 3D model next.</p>
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

    const turnButton = event.target.closest("[data-outfit-turn]");
    if (turnButton && currentView?.type === "outfit-check") {
      rotation = Math.max(-24, Math.min(24, rotation + Number(turnButton.dataset.outfitTurn || 0)));
      const avatar = document.getElementById("outfit-avatar");
      if (avatar) avatar.style.setProperty("--adi-turn", rotation + "deg");
      return;
    }

    const resetButton = event.target.closest("[data-outfit-reset]");
    if (resetButton && currentView?.type === "outfit-check") {
      outfitState = { ...DEFAULT_OUTFIT };
      activeCategory = "top";
      rotation = 0;
      saveOutfit();
      updateOutfitUI();
      if (typeof speak === "function") speak("Adi is back in her default outfit.");
    }
  });
})();
