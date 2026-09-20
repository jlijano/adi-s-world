import * as THREE from "./assets/vendor/three/three.module.js";
import { GLTFLoader } from "./assets/vendor/three/GLTFLoader.js";

(() => {
  const MODEL_URL = "./assets/character/addi/addi-base.glb?v=59";
  const TARGET_HEIGHT = 4.8;

  const state = {
    host: null,
    renderer: null,
    scene: null,
    camera: null,
    addiRoot: null,
    model: null,
    angle: 0,
    frame: 0,
    resizeObserver: null,
    dragging: false,
    lastPointerX: 0,
    ready: false,
    loadError: null
  };

  function setStatus(text, kind = "") {
    const el = state.host?.querySelector(".adi-three-status");
    if (!el) return;
    el.textContent = text;
    el.dataset.kind = kind;
  }

  function syncAngleLabel() {
    const normalized = ((state.angle % 360) + 360) % 360;
    const label = document.querySelector("[data-adi-angle-label]");
    if (label) label.textContent = Math.round(normalized) + "°";
  }

  function setAngle(degrees) {
    state.angle = Number.isFinite(degrees) ? degrees : 0;
    if (state.addiRoot) {
      state.addiRoot.rotation.y = THREE.MathUtils.degToRad(state.angle);
    }
    syncAngleLabel();
  }

  function rotateBy(delta) {
    setAngle(state.angle + Number(delta || 0));
  }

  function supportsWebGL() {
    try {
      const canvas = document.createElement("canvas");
      return Boolean(
        window.WebGLRenderingContext &&
        (canvas.getContext("webgl2") || canvas.getContext("webgl"))
      );
    } catch {
      return false;
    }
  }

  function prepareModel(model) {
    let meshCount = 0;
    model.traverse((node) => {
      if (!node.isMesh) return;
      meshCount += 1;
      node.castShadow = true;
      node.receiveShadow = true;
      const materials = Array.isArray(node.material) ? node.material : [node.material];
      materials.filter(Boolean).forEach((material) => {
        material.needsUpdate = true;
      });
    });
    return meshCount;
  }

  function normalizeModel(model) {
    model.updateMatrixWorld(true);

    let box = new THREE.Box3().setFromObject(model);
    let size = box.getSize(new THREE.Vector3());
    let center = box.getCenter(new THREE.Vector3());

    if (![size.x, size.y, size.z].every(Number.isFinite) || size.y <= 0.0001) {
      throw new Error("Addi GLB has invalid bounds.");
    }

    model.position.x -= center.x;
    model.position.z -= center.z;
    model.updateMatrixWorld(true);

    box = new THREE.Box3().setFromObject(model);
    size = box.getSize(new THREE.Vector3());
    const scale = TARGET_HEIGHT / Math.max(size.y, 0.001);
    model.scale.multiplyScalar(scale);
    model.updateMatrixWorld(true);

    box = new THREE.Box3().setFromObject(model);
    model.position.y -= box.min.y;
    model.updateMatrixWorld(true);

    box = new THREE.Box3().setFromObject(model);
    size = box.getSize(new THREE.Vector3());
    center = box.getCenter(new THREE.Vector3());

    return { box, size, center, scale };
  }

  function resize() {
    if (!state.host || !state.renderer || !state.camera) return;
    const rect = state.host.getBoundingClientRect();
    const width = Math.max(1, rect.width);
    const height = Math.max(1, rect.height);

    state.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    state.renderer.setSize(width, height, false);
    state.camera.aspect = width / height;
    state.camera.updateProjectionMatrix();
  }

  function animate() {
    if (!state.host?.isConnected || !state.renderer) return;
    state.renderer.render(state.scene, state.camera);
    state.frame = requestAnimationFrame(animate);
  }

  function bindPointer(canvas) {
    canvas.addEventListener("pointerdown", (event) => {
      state.dragging = true;
      state.lastPointerX = event.clientX;
      canvas.setPointerCapture?.(event.pointerId);
    });

    canvas.addEventListener("pointermove", (event) => {
      if (!state.dragging) return;
      const dx = event.clientX - state.lastPointerX;
      state.lastPointerX = event.clientX;
      rotateBy(dx * 0.7);
    });

    const endDrag = (event) => {
      state.dragging = false;
      canvas.releasePointerCapture?.(event.pointerId);
    };

    canvas.addEventListener("pointerup", endDrag);
    canvas.addEventListener("pointercancel", endDrag);
  }

  function disposeMaterial(material) {
    if (!material) return;
    for (const value of Object.values(material)) {
      if (value && value.isTexture) value.dispose();
    }
    material.dispose?.();
  }

  function disposeObject(node) {
    node.traverse?.((child) => {
      child.geometry?.dispose?.();
      if (Array.isArray(child.material)) {
        child.material.forEach(disposeMaterial);
      } else {
        disposeMaterial(child.material);
      }
    });
  }

  function destroy() {
    if (state.frame) cancelAnimationFrame(state.frame);
    state.resizeObserver?.disconnect();

    if (state.model) disposeObject(state.model);
    state.renderer?.dispose();

    if (state.host) state.host.innerHTML = "";

    Object.assign(state, {
      host: null,
      renderer: null,
      scene: null,
      camera: null,
      addiRoot: null,
      model: null,
      angle: 0,
      frame: 0,
      resizeObserver: null,
      dragging: false,
      lastPointerX: 0,
      ready: false,
      loadError: null
    });
  }

  function createScene(host) {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 100);
    camera.position.set(0, 2.35, 8.6);
    camera.lookAt(0, 2.25, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });

    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.domElement.className = "adi-three-canvas";
    renderer.domElement.setAttribute("role", "img");
    renderer.domElement.setAttribute(
      "aria-label",
      "Real 3D Addi character. Drag left or right to rotate through a full 360 degrees."
    );
    host.prepend(renderer.domElement);

    scene.add(new THREE.HemisphereLight(0xffffff, 0xe7cbd7, 1.6));

    const key = new THREE.DirectionalLight(0xffffff, 2.0);
    key.position.set(3, 6, 5);
    key.castShadow = true;
    scene.add(key);

    const fill = new THREE.DirectionalLight(0xffd8e8, 0.8);
    fill.position.set(-4, 3, 3);
    scene.add(fill);

    const rim = new THREE.DirectionalLight(0xd8e4ff, 0.6);
    rim.position.set(0, 4, -5);
    scene.add(rim);

    const ground = new THREE.Mesh(
      new THREE.CircleGeometry(2.2, 64),
      new THREE.MeshStandardMaterial({ color: 0xf4bfd3, roughness: 0.92 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.02;
    ground.receiveShadow = true;
    scene.add(ground);

    return { scene, camera, renderer };
  }

  function mount(hostOrId) {
    destroy();

    const host =
      typeof hostOrId === "string" ? document.getElementById(hostOrId) : hostOrId;

    if (!host) return false;

    state.host = host;
    host.innerHTML = '<div class="adi-three-status">Loading Addi 3D…</div>';

    if (!supportsWebGL()) {
      state.loadError = new Error("WebGL unavailable");
      setStatus("3D graphics are not available on this device.", "error");
      return false;
    }

    try {
      const { scene, camera, renderer } = createScene(host);
      state.scene = scene;
      state.camera = camera;
      state.renderer = renderer;

      bindPointer(renderer.domElement);
      state.resizeObserver = new ResizeObserver(resize);
      state.resizeObserver.observe(host);
      resize();
      animate();

      const loader = new GLTFLoader();
      loader.load(
        MODEL_URL,
        (gltf) => {
          try {
            const model = gltf.scene;
            if (!model) throw new Error("GLB contains no scene.");

            const meshCount = prepareModel(model);
            if (meshCount === 0) throw new Error("GLB contains no meshes.");

            const normalized = normalizeModel(model);
            const addiRoot = new THREE.Group();
            addiRoot.name = "AddiRuntimeRoot";
            addiRoot.add(model);
            scene.add(addiRoot);

            state.model = model;
            state.addiRoot = addiRoot;
            state.ready = true;
            state.loadError = null;

            setAngle(0);
            setStatus("Addi 3D ready • drag to rotate 360°", "ready");

            console.info("Addi GLB loaded", {
              url: MODEL_URL,
              meshCount,
              size: normalized.size,
              center: normalized.center,
              scale: normalized.scale
            });
          } catch (error) {
            console.error("Addi GLB validation failed", error);
            state.ready = false;
            state.loadError = error;
            setStatus("Addi model file is invalid.", "error");
          }
        },
        undefined,
        (error) => {
          console.error("Addi GLB load failed", error);
          state.ready = false;
          state.loadError = error;
          setStatus("Addi 3D model could not be loaded.", "error");
        }
      );

      return true;
    } catch (error) {
      console.error("Addi 3D renderer failed", error);
      state.ready = false;
      state.loadError = error;
      setStatus("Unable to initialize 3D renderer.", "error");
      return false;
    }
  }

  function getPart(name) {
    return state.model?.getObjectByName(name) || null;
  }

  window.Adi3D = {
    mount,
    destroy,
    setAngle,
    rotateBy,
    getAngle: () => state.angle,
    isReady: () => state.ready,
    getModel: () => state.model,
    getPart
  };
})();
