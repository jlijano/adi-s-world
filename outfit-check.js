(() => {
  const OUTFIT_STORAGE_KEY = "adis-world-outfit-v2";
  const SPRITE_URL = "assets/character/outfit-check/outfit-layers.svg";

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
      { id: "lavender-star", label: "Lavender Star Tee", swatch: "#9f86e8", layer: "top-lavender-star" },
      { id: "mint-hoodie", label: "Mint Hoodie", swatch: "#65c9b1", layer: "top-mint-hoodie" }
    ],
    bottom: [
      { id: "denim-shorts", label: "Denim Shorts", swatch: "#4284c4" },
      { id: "purple-skirt", label: "Purple Skirt", swatch: "#a66bd3", layer: "bottom-purple-skirt" },
      { id: "teal-pants", label: "Teal Pants", swatch: "#3caaa2", layer: "bottom-teal-pants" }
    ],
    headband: [
      { id: "none", label: "No Headband", swatch: "#f4f1f6" },
      { id: "pink-headband", label: "Pink Headband", swatch: "#f36aa4", layer: "headband-pink" },
      { id: "yellow-headband", label: "Yellow Headband", swatch: "#f4c94c", layer: "headband-yellow" }
    ],
    necklace: [
      { id: "none", label: "No Necklace", swatch: "#f4f1f6" },
      { id: "heart-necklace", label: "Heart Necklace", swatch: "#ef5f8b", layer: "necklace-heart" },
      { id: "star-necklace", label: "Star Necklace", swatch: "#f1bb35", layer: "necklace-star" }
    ],
    wrist: [
      { id: "none", label: "No Wrist Band", swatch: "#f4f1f6" },
      { id: "pink-rubber-band", label: "Pink Band", swatch: "#f15f9b", layer: "wrist-pink" },
      { id: "blue-bead-band", label: "Blue Beads", swatch: "#4e91d6", layer: "wrist-blue" }
    ],
    watch: [
      { id: "none", label: "No Watch", swatch: "#f4f1f6" },
      { id: "purple-watch", label: "Purple Watch", swatch: "#8258d4", layer: "watch-purple" },
      { id: "aqua-watch", label: "Aqua Watch", swatch: "#44bfc2", layer: "watch-aqua" }
    ],
    shoes: [
      { id: "pink-sneakers", label: "Pink Sneakers", swatch: "#f47aa8" },
      { id: "purple-hightops", label: "Purple High-Tops", swatch: "#8b66d9", layer: "shoes-purple" },
      { id: "aqua-slipons", label: "Aqua Slip-Ons", swatch: "#49bfc1", layer: "shoes-aqua" }
    ]
  };

  const CATEGORY_LABELS = {
    top: "Tops", bottom: "Bottoms", headband: "Head",
    necklace: "Necklace", wrist: "Wrist", watch: "Watch", shoes: "Shoes"
  };

  const PREVIEW_BOX = {
    top: "45 68 90 76",
    bottom: "45 118 90 65",
    headband: "48 15 84 55",
    necklace: "62 67 56 48",
    wrist: "38 105 52 58",
    watch: "92 105 52 58",
    shoes: "36 188 108 44"
  };

  let outfitState = loadOutfit();
  let activeCategory = "top";

  function safeGet(key) {
    try {
      return window.localStorage?.getItem(key) ?? null;
    } catch {
      return null;
    }
  }

  function safeSet(key, value) {
    try {
      window.localStorage?.setItem(key, value);
      return true;
    } catch {
      return false;
    }
  }

  function sanitizeOutfit(candidate) {
    const source = candidate && typeof candidate === "object" && !Array.isArray(candidate) ? candidate : {};
    const sanitized = { ...DEFAULT_OUTFIT };
    for (const category of Object.keys(OUTFIT_OPTIONS)) {
      const requested = source[category];
      if (OUTFIT_OPTIONS[category].some((item) => item.id === requested)) {
        sanitized[category] = requested;
      }
    }
    return sanitized;
  }

  function loadOutfit() {
    try {
      const current = JSON.parse(safeGet(OUTFIT_STORAGE_KEY) || "{}");
      const legacy = JSON.parse(safeGet("adis-world-outfit-v1") || "{}");
      return sanitizeOutfit({ ...legacy, ...current });
    } catch {
      return { ...DEFAULT_OUTFIT };
    }
  }

  function saveOutfit() {
    outfitState = sanitizeOutfit(outfitState);
    safeSet(OUTFIT_STORAGE_KEY, JSON.stringify(outfitState));
  }

  function optionFor(category, id) {
    return OUTFIT_OPTIONS[category].find((item) => item.id === id) || OUTFIT_OPTIONS[category][0];
  }

  function svgUse(layer, className = "") {
    if (!layer) return "";
    return `<svg class="adi-doll-layer ${className}" viewBox="0 0 180 240" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#${layer}"></use></svg>`;
  }

  function renderAvatar() {
    const selected = Object.fromEntries(Object.keys(OUTFIT_OPTIONS).map((category) => [category, optionFor(category, outfitState[category])]));
    return `
      <div class="outfit-avatar-wrap outfit-avatar-layered">
        <div class="outfit-room-backdrop" aria-hidden="true">
          <span class="room-window"></span><span class="room-shelf"></span><span class="room-rug"></span>
          <span class="room-poster">A Brighter<br>Tomorrow<br>with Adi! ♡</span>
        </div>
        <div class="adi-doll-stage" aria-label="Adi wearing the selected outfit">
          <div class="adi-doll-stack">
            <img class="adi-doll-base" src="assets/character/adi-front-3d.webp?v=70" alt="Adi">
            ${svgUse(selected.bottom.layer, "layer-bottom")}
            ${svgUse(selected.top.layer, "layer-top")}
            ${svgUse(selected.shoes.layer, "layer-shoes")}
            ${svgUse(selected.necklace.layer, "layer-necklace")}
            ${svgUse(selected.wrist.layer, "layer-wrist")}
            ${svgUse(selected.watch.layer, "layer-watch")}
            ${svgUse(selected.headband.layer, "layer-headband")}
          </div>
        </div>
      </div>`;
  }

  function renderCategoryTabs() {
    return Object.keys(OUTFIT_OPTIONS).map((category) => `
      <button type="button" class="outfit-category-button ${activeCategory === category ? "is-active" : ""}"
        data-outfit-category="${category}" aria-pressed="${activeCategory === category}">
        <span>${CATEGORY_LABELS[category]}</span>
      </button>`).join("");
  }

  function renderPreview(category, option) {
    if (!option.layer) {
      return `<span class="outfit-default-preview" style="--swatch:${option.swatch}" aria-hidden="true"><span></span></span>`;
    }
    return `<svg class="outfit-garment-preview" viewBox="${PREVIEW_BOX[category]}" aria-hidden="true" focusable="false"><use href="${SPRITE_URL}#${option.layer}"></use></svg>`;
  }

  function renderOptions() {
    return OUTFIT_OPTIONS[activeCategory].map((option) => {
      const selected = outfitState[activeCategory] === option.id;
      return `
        <button type="button" class="outfit-option-card ${selected ? "is-selected" : ""}"
          data-outfit-option="${option.id}" aria-pressed="${selected}">
          <span class="outfit-item-preview" style="--swatch:${option.swatch}">${renderPreview(activeCategory, option)}</span>
          <strong>${option.label}</strong>
          <span class="outfit-option-check" aria-hidden="true">${selected ? "✓" : ""}</span>
        </button>`;
    }).join("");
  }

  function outfitSummary() {
    return Object.keys(OUTFIT_OPTIONS).map((category) => `${CATEGORY_LABELS[category]}: ${optionFor(category, outfitState[category]).label}`).join(" • ");
  }

  function refreshAvatar() {
    const host = document.querySelector(".outfit-avatar-host");
    if (host) host.innerHTML = renderAvatar();
  }

  function updateOutfitUI() {
    const tabsHost = document.querySelector(".outfit-category-tabs");
    const optionsHost = document.querySelector(".outfit-options-grid");
    const itemsTitle = document.querySelector(".outfit-items-title-row h3");
    const currentLook = document.querySelector(".outfit-current-look");
    if (tabsHost) tabsHost.innerHTML = renderCategoryTabs();
    if (optionsHost) optionsHost.innerHTML = renderOptions();
    if (itemsTitle) itemsTitle.textContent = CATEGORY_LABELS[activeCategory];
    if (currentLook) currentLook.textContent = outfitSummary();
    refreshAvatar();
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
          <h1>Outfit Check</h1>
          <p class="helper-text">Dress Adi, mix her clothes and accessories, and make a look you love.</p>
        </header>
      </div>
      <section class="outfit-check-layout" aria-label="Outfit Check">
        <div class="outfit-avatar-host">${renderAvatar()}</div>
        <div class="outfit-closet">
          <div class="outfit-closet-heading"><div><span class="eyebrow">Closet</span><h2>Choose an item</h2></div></div>
          <div class="outfit-category-tabs" role="group" aria-label="Outfit categories">${renderCategoryTabs()}</div>
          <section class="outfit-items-panel">
            <div class="outfit-items-title-row"><h3>${CATEGORY_LABELS[activeCategory]}</h3><span>Tap an item to wear it</span></div>
            <div class="outfit-options-grid" aria-live="polite">${renderOptions()}</div>
          </section>
          <div class="outfit-action-row">
            <button class="outfit-reset-button" type="button" data-outfit-reset>↶ Reset Look</button>
            <button class="outfit-save-button" type="button" data-outfit-save>✓ Save Outfit</button>
          </div>
          <p class="outfit-current-look" aria-live="polite">${outfitSummary()}</p>
          <p class="outfit-save-note">Changes save automatically.</p>
        </div>
      </section>`;
    window.scrollTo({ top: 0, behavior: "auto" });
    screen.focus({ preventScroll: true });
  };

  document.addEventListener("click", (event) => {
    const categoryButton = event.target.closest("[data-outfit-category]");
    if (categoryButton && currentView?.type === "outfit-check") {
      activeCategory = categoryButton.dataset.outfitCategory;
      updateOutfitUI();
      return;
    }

    const optionButton = event.target.closest("[data-outfit-option]");
    if (optionButton && currentView?.type === "outfit-check") {
      outfitState[activeCategory] = optionButton.dataset.outfitOption;
      saveOutfit();
      updateOutfitUI();
      return;
    }

    const saveButton = event.target.closest("[data-outfit-save]");
    if (saveButton && currentView?.type === "outfit-check") {
      saveOutfit();
      if (typeof speak === "function") speak("Outfit saved.");
      return;
    }

    const resetButton = event.target.closest("[data-outfit-reset]");
    if (resetButton && currentView?.type === "outfit-check") {
      outfitState = { ...DEFAULT_OUTFIT };
      activeCategory = "top";
      saveOutfit();
      updateOutfitUI();
      if (typeof speak === "function") speak("Adi is back in her default outfit.");
    }
  });
})();
