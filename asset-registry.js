(() => {
  const ASSETS = Object.freeze({
    icons: Object.freeze({
      app: "assets/icons/icon.svg",
      splash: "assets/icons/adis-world-splash.jpg"
    }),
    character: Object.freeze({
      idle: "assets/character/idle-front.webp",
      hiWave: "assets/character/hi-wave.webp",
      outfitBase: "assets/character/adi-front-3d.webp",
      outfitLayers: "assets/character/outfit-check/outfit-layers.svg"
    }),
    worlds: Object.freeze({
      wordForestCard: "assets/worlds/word-forest-card.webp",
      wordForestReference: "assets/worlds/word-forest/word-forest-reference.jpg"
    }),
    blessing: Object.freeze({
      gideon: "assets/blessing-garden/gideon/gideon-call.jpg",
      stories: Object.freeze({
        creation: "assets/blessing-garden/stories/creation.jpg",
        noah: "assets/blessing-garden/stories/noah.png",
        davidGoliath: "assets/blessing-garden/stories/david-goliath.jpg",
        danielLions: "assets/blessing-garden/stories/daniel-lions.jpg",
        jesusChildren: "assets/blessing-garden/stories/jesus-children.jpg"
      })
    }),
    discovery: Object.freeze({
      plantFoods: Object.freeze({
        mango: "assets/discovery/plant-foods/mango.jpg",
        banana: "assets/discovery/plant-foods/banana-photo.jpg",
        pineapple: "assets/discovery/plant-foods/pineapple.jpg",
        carrot: "assets/discovery/plant-foods/carrot.jpg",
        broccoli: "assets/discovery/plant-foods/broccoli.jpg",
        papaya: "assets/discovery/plant-foods/papaya.jpg",
        guava: "assets/discovery/plant-foods/guava.jpg",
        coconut: "assets/discovery/plant-foods/coconut.jpg",
        eggplant: "assets/discovery/plant-foods/eggplant.jpg",
        squash: "assets/discovery/plant-foods/squash.jpg",
        cucumber: "assets/discovery/plant-foods/cucumber.jpg",
        chico: "assets/discovery/plant-foods/chico.jpg",
        calamansi: "assets/discovery/plant-foods/calamansi.jpg",
        lanzones: "assets/discovery/plant-foods/lanzones.jpg",
        jackfruit: "assets/discovery/plant-foods/jackfruit.jpg",
        ampalaya: "assets/discovery/plant-foods/ampalaya.jpg",
        malunggay: "assets/discovery/plant-foods/malunggay.jpg",
        patola: "assets/discovery/plant-foods/patola.jpg",
        kangkong: "assets/discovery/plant-foods/kangkong.jpg",
        stringBeans: "assets/discovery/plant-foods/string-beans.jpg"
      })
    })
  });

  const FALLBACKS = Object.freeze({
    image: ASSETS.icons.app,
    character: ASSETS.character.idle,
    world: ASSETS.icons.app,
    story: ASSETS.icons.app,
    food: ASSETS.icons.app
  });

  function resolve(path, fallbackType = "image") {
    const parts = String(path || "").split(".").filter(Boolean);
    let value = ASSETS;
    for (const part of parts) {
      value = value?.[part];
    }
    return typeof value === "string" ? value : FALLBACKS[fallbackType] || FALLBACKS.image;
  }

  function flatten(node = ASSETS, prefix = "", output = {}) {
    for (const [key, value] of Object.entries(node)) {
      const nextKey = prefix ? `${prefix}.${key}` : key;
      if (typeof value === "string") output[nextKey] = value;
      else flatten(value, nextKey, output);
    }
    return output;
  }

  globalThis.AdiAssets = Object.freeze({
    assets: ASSETS,
    fallbacks: FALLBACKS,
    resolve,
    all: () => Object.freeze({ ...flatten() })
  });
})();