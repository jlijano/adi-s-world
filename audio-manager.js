(() => {
  const SOUND_KEY = "adis-world-sound-v1";
  const RATE_KEY = "adis-world-speech-rate-v1";
  const RATE_PRESETS = {
    slow: 0.78,
    normal: 0.90,
    quick: 1.00
  };

  let enabled = localStorage.getItem(SOUND_KEY) !== "off";
  let ratePreset = localStorage.getItem(RATE_KEY);
  if (!Object.prototype.hasOwnProperty.call(RATE_PRESETS, ratePreset)) ratePreset = "normal";

  let activeToken = 0;

  function supported() {
    return "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
  }

  function chooseVoice() {
    if (!supported()) return null;
    const voices = window.speechSynthesis.getVoices();
    const english = voices.filter((voice) => (voice.lang || "").toLowerCase().startsWith("en"));
    const candidates = english.length ? english : voices;

    return candidates.slice().sort((a, b) => scoreVoice(b) - scoreVoice(a))[0] || null;
  }

  function scoreVoice(voice) {
    const name = (voice.name || "").toLowerCase();
    const lang = (voice.lang || "").toLowerCase();
    let score = 0;

    if (lang.startsWith("en")) score += 80;
    if (name.includes("natural") || name.includes("neural")) score += 160;
    if (name.includes("enhanced") || name.includes("premium")) score += 100;
    if (name.includes("microsoft") || name.includes("google") || name.includes("apple")) score += 30;
    if (name.includes("compact") || name.includes("whisper") || name.includes("novelty")) score -= 80;

    return score;
  }

  function finishCallback(callback) {
    if (typeof callback === "function") callback();
  }

  function cancel() {
    activeToken += 1;
    if (supported()) window.speechSynthesis.cancel();
  }

  function speak(text, options = {}) {
    const { onDone, interrupt = true, rate = RATE_PRESETS[ratePreset], pitch = 1, volume = 1 } = options;

    if (!enabled || !supported() || !text) {
      finishCallback(onDone);
      return null;
    }

    if (interrupt) cancel();
    const token = activeToken;
    const utterance = new SpeechSynthesisUtterance(String(text));
    const voice = chooseVoice();

    utterance.lang = voice?.lang || "en";
    if (voice) utterance.voice = voice;
    utterance.rate = rate;
    utterance.pitch = pitch;
    utterance.volume = volume;

    let finished = false;
    const finishOnce = () => {
      if (finished) return;
      finished = true;
      if (token === activeToken) finishCallback(onDone);
    };

    utterance.onend = finishOnce;
    utterance.onerror = finishOnce;
    window.speechSynthesis.speak(utterance);
    return utterance;
  }

  function speakSequence(parts, options = {}) {
    const items = (Array.isArray(parts) ? parts : []).filter((part) => part?.text);
    const { onDone, pauseMs = 160 } = options;

    if (!enabled || !supported() || !items.length) {
      finishCallback(onDone);
      return;
    }

    cancel();
    const token = activeToken;
    let index = 0;

    const next = () => {
      if (token !== activeToken || !enabled) {
        finishCallback(onDone);
        return;
      }
      if (index >= items.length) {
        finishCallback(onDone);
        return;
      }

      const part = items[index++];
      speak(part.text, {
        interrupt: false,
        rate: part.rate ?? RATE_PRESETS[ratePreset],
        pitch: part.pitch ?? 1,
        volume: part.volume ?? 1,
        onDone: () => window.setTimeout(next, part.pauseMs ?? pauseMs)
      });
    };

    next();
  }

  function setEnabled(value, options = {}) {
    enabled = Boolean(value);
    localStorage.setItem(SOUND_KEY, enabled ? "on" : "off");
    if (!enabled) cancel();
    if (enabled && options.announce !== false) {
      speak("Sound on.");
    }
    window.dispatchEvent(new CustomEvent("adi-audio-settings-changed"));
  }

  function setRatePreset(value, options = {}) {
    if (!Object.prototype.hasOwnProperty.call(RATE_PRESETS, value)) return;
    ratePreset = value;
    localStorage.setItem(RATE_KEY, ratePreset);
    window.dispatchEvent(new CustomEvent("adi-audio-settings-changed"));
    if (options.preview) speak("This is how Adi's World will speak.");
  }

  function isSpeaking() {
    return supported() && window.speechSynthesis.speaking;
  }

  function getSettings() {
    return {
      enabled,
      ratePreset,
      rate: RATE_PRESETS[ratePreset],
      supported: supported()
    };
  }

  window.AdiAudio = {
    cancel,
    getSettings,
    isEnabled: () => enabled,
    isSpeaking,
    setEnabled,
    setRatePreset,
    speak,
    speakSequence,
    supported
  };
})();