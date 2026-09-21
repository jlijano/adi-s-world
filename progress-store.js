(() => {
  const STORAGE_KEY = "adis-world-progress-v1";

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

  function safeRemove(key) {
    try {
      window.localStorage?.removeItem(key);
      return true;
    } catch {
      return false;
    }
  }

  function normalize(value) {
    const source = value && typeof value === "object" && !Array.isArray(value) ? value : {};
    const completedSource = source.completed && typeof source.completed === "object" && !Array.isArray(source.completed)
      ? source.completed
      : {};
    const completed = {};

    for (const [key, stars] of Object.entries(completedSource)) {
      const numericStars = Number(stars);
      if (Number.isFinite(numericStars) && numericStars >= 0) {
        completed[key] = Math.floor(numericStars);
      }
    }

    const storyProgress = source.storyProgress && typeof source.storyProgress === "object" && !Array.isArray(source.storyProgress)
      ? source.storyProgress
      : {};

    return {
      ...source,
      stars: Math.max(0, Math.floor(Number(source.stars) || 0)),
      completed,
      storyProgress
    };
  }

  function load() {
    const raw = safeGet(STORAGE_KEY);
    if (!raw) return normalize(null);

    try {
      return normalize(JSON.parse(raw));
    } catch {
      return normalize(null);
    }
  }

  function save(value) {
    const normalized = normalize(value);
    safeSet(STORAGE_KEY, JSON.stringify(normalized));
    return normalized;
  }

  window.AdiProgressStore = {
    STORAGE_KEY,
    load,
    normalize,
    safeGet,
    safeRemove,
    safeSet,
    save
  };
})();