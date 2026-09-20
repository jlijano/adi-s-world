(() => {
  const GLB_B64 = "Z2xURgIAAAB4JAAA9BAAAEpTT057InNjZW5lIjowLCJzY2VuZXMiOlt7Im5vZGVzIjpbMF19XSwiYXNzZXQiOnsidmVyc2lvbiI6IjIuMCIsImdlbmVyYXRvciI6Imh0dHBzOi8vZ2l0aHViLmNvbS9taWtlZGgvdHJpbWVzaCJ9LCJhY2Nlc3NvcnMiOlt7ImNvbXBvbmVudFR5cGUiOjUxMjUsInR5cGUiOiJTQ0FMQVIiLCJidWZmZXJWaWV3IjowLCJjb3VudCI6MjA0LCJtYXgiOlszOV0sIm1pbiI6WzBdfSx7ImNvbXBvbmVudFR5cGUiOjUxMjYsInR5cGUiOiJWRUMzIiwiYnl0ZU9mZnNldCI6MCwiYnVmZmVyVmlldyI6MSwiY291bnQiOjQwLCJtYXgiOlswLjc2NTU4NTcyMDUzOTA5Myw0LjIwMDY1MDY5MTk4NjA4NCwwLjcyMzA1MzE1NzMyOTU1OTNdLCJtaW4iOlstMC43NjU1ODU3MjA1MzkwOTMsMC40OTQxMTU0NDIwMzc1ODI0LC0wLjcyMzA1MzE1NzMyOTU1OTNdfSx7ImNvbXBvbmVudFR5cGUiOjUxMjUsInR5cGUiOiJTQ0FMQVIiLCJidWZmZXJWaWV3IjoyLCJjb3VudCI6MTgwLCJtYXgiOlszNV0sIm1pbiI6WzBdfSx7ImNvbXBvbmVudFR5cGUiOjUxMjYsInR5cGUiOiJWRUMzIiwiYnl0ZU9mZnNldCI6MCwiYnVmZmZXaWV3IjozLCJjb3VudCI6MzYsIm1heCI6WzEuMzk0NzAxOTU3NzAyNjM2Nyw0LjM1NTQ1NTM5ODU1OTU3LDAuNjQ1NTg1NzE1NzcwNzIxNF0sIm1pbiI6Wy0xLjM5NDcwMTk1NzcwMjYzNjcsMy4xNjQ1NDQzNDM5NDgzNjQzLC0wLjg4NTU4NTcyNTMwNzQ2NDZdfSx7ImNvbXBvbmVudFR5cGUiOjUxMjUsInR5cGUiOiJTQ0FMQVIiLCJidWZmZXJWaWV3Ijo0LCJjb3VudCI6MTkyLCJtYXgiOlszN10sIm1pbiI6WzBdfSx7ImNvbXBvbmVudFR5cGUiOjUxMjYsInR5cGUiOiJWRUMzIiwiYnl0ZU9mZnNldCI6MCwiYnVmZmZXaWV3Ijo1LCJjb3VudCI6MzgsIm1heCI6WzAuNTU1MTk1MjcxOTY4ODQxNiwyLjM2NzY1MzYwODMyMjE0MzYsMC41NTAwMDAwMTE5MjA5MjldLCJtaW4iOlstMC41NTUxOTUyNzE5Njg4NDE2LC0wLjAwNzU5NzYyMTA2NDYzMzEzMSwtMC41NTAwMDAwMTE5MjA5MjldfSx7ImNvbXBvbmVudFR5cGUiOjUxMjUsInR5cGUiOiJTQ0FMQVIiLCJidWZmZXJWaWV3Ijo2LCJjb3VudCI6MzYsIm1heCI6WzddLCJtaW4iOlswXX0seyJjb21wb25lbnRUeXBlIjo1MTI2LCJ0eXBlIjoiVkVDMyIsImJ5dGVPZmZzZXQiOjAsImJ1ZmZmZXJWaWV3Ijo3LCJjb3VudCI6OCwibWF4IjpbMC42MDAwMDAwMjM4NDE4NTc5LDEuNDI0OTk5OTUyMzE2Mjg0MiwwLjMyNDk5OTk4ODA3OTA3MTA0XSwibWluIjpbLTAuNjAwMDAwMDIzODQxODU3OSwwLjg3NSwtMC4zMjQ5OTk5ODgwNzkwNzEwNF19LHsiY29tcG9uZW50VHlwZSI6NTEyNSwidHlwZSI6IlNDQUxBUiIsImJ1ZmZlclZpZXciOjgsImNvdW50IjoxMjAsIm1heCI6WzIzXSwibWluIjpbMF19LHsiY29tcG9uZW50VHlwZSI6NTEyNiwidHlwZSI6IlZFQzMiLCJieXRlT2Zmc2V0IjowLCJidWZmZXJWaWV3Ijo5LCJjb3VudCI6MjQsIm1heCI6WzAuNTExMzk2NDA4MDgxMDU0NywzLjY1MzkyODk5NTEzMjQ0NjMsMC44MDk1NDU1NzY1NzI0MTgyXSwibWluIjpbLTAuNTExMzk2NDA4MDgxMDU0NywzLjE4NjA3MDkxOTAzNjg2NTIsMC42OTA0NTQ0MjM0Mjc1ODE4XX0seyJjb21wb25lbnRUeXBlIjo1MTI2LCJ0eXBlIjoiVkVDMyIsImJ5dGVPZmZzZXQiOjAsImJ1ZmZmZXJWaWV3IjoxMCwiY291bnQiOjI0LCJtYXgiOlswLjM5NjU1ODU4Mjc4Mjc0NTM2LDMuNDk2NTU4NjY2MjI5MjQ4LDAuOTg4Mjc5MjgzMDQ2NzIyNF0sIm1pbiI6Wy0wLjM5NjU1ODU4Mjc4Mjc0NTM2LDMuMzQzNDQxNDg2MzU4NjQyNiwwLjkxMTcyMDY5MzExMTQxOTddfV0sIm1lc2hlcyI6W3sibmFtZSI6IlNraW4iLCJleHRyYXMiOnsic2hhcGUiOiJyYWRpdXMifSwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6MX0sImluZGljZXMiOjAsIm1vZGUiOjQsIm1hdGVyaWFsIjowfV19LHsibmFtZSI6IkhhaXIiLCJleHRyYXMiOnsic2hhcGUiOiJyYWRpdXMifSwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6M30sImluZGljZXMiOjIsIm1vZGUiOjQsIm1hdGVyaWFsIjoxfV19LHsibmFtZSI6IlBpbmsiLCJleHRyYXMiOnt9LCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjo1fSwiaW5kaWNlcyI6NCwibW9kZSI6NCwibWF0ZXJpYWwiOjJ9XX0seyJuYW1lIjoiRGVuaW0iLCJleHRyYXMiOnsic2hhcGUiOiJib3giLCJleHRlbnRzIjpbMS4yLDAuNTUsMC42NV19LCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjo3fSwiaW5kaWNlcyI6NiwibW9kZSI6NCwibWF0ZXJpYWwiOjN9XX0seyJuYW1lIjoiRXllcyIsImV4dHJhcyI6eyJzaGFwZSI6InJhZGl1cyJ9LCJwcmltaXRpdmVzIjpbeyJhdHRyaWJ1dGVzIjp7IlBPU0lUSU9OIjo5fSwiaW5kaWNlcyI6OCwibW9kZSI6NCwibWF0ZXJpYWwiOjR9XX0seyJuYW1lIjoiUHVwaWxzIiwiZXh0cmFzIjp7InNoYXBlIjoicmFkaXVzIn0sInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjEwfSwiaW5kaWNlcyI6OCwibW9kZSI6NCwibWF0ZXJpYWwiOjV9XX1dLCJtYXRlcmlhbHMiOlt7InBick1ldGFsbGljUm91Z2huZXNzIjp7ImJhc2VDb2xvckZhY3RvciI6WzEuMCwwLjY5MDE5NjA3ODQzMTM3MjUsMC41MjE1Njg2Mjc0NTA5ODA0LDEuMF0sInJvdWdobmVzc0ZhY3RvciI6MC43LCJtZXRhbGxpY0ZhY3RvciI6MC4wfSwiZG91YmxlU2lkZWQiOmZhbHNlfSx7InBick1ldGFsbGljUm91Z2huZXNzIjp7ImJhc2VDb2xvckZhY3RvciI6WzAuMTYwNzg0MzEzNzI1NDkwMiwwLjA1NDkwMTk2MDc4NDMxMzcyNSwwLjAzMTM3MjU0OTAxOTYwNzg0LDEuMF0sInJvdWdobmVzc0ZhY3RvciI6MC43LCJtZXRhbGxpY0ZhY3RvciI6MC4wfSwiZG91YmxlU2lkZWQiOmZhbHNlfSx7InBick1ldGFsbGljUm91Z2huZXNzIjp7ImJhc2VDb2xvckZhY3RvciI6WzAuOTYwNzg0MzEzNzI1NDkwMiwwLjIsMC40NzA1ODgyMzUyOTQxMTc2NCwxLjBdLCJyb3VnaG5lc3NGYWN0b3IiOjAuNywibWV0YWxsaWNGYWN0b3IiOjAuMH0sImRvdWJsZVNpZGVkIjpmYWxzZX0seyJwYnJNZXRhbGxpY1JvdWdobmVzcyI6eyJiYXNlQ29sb3JGYWN0b3IiOlswLjEwMTk2MDc4NDMxMzcyNTQ5LDAuMzI5NDExNzY0NzA1ODgyMzUsMC42NzA1ODgyMzUyOTQxMTc2LDEuMF0sInJvdWdobmVzc0ZhY3RvciI6MC43LCJtZXRhbGxpY0ZhY3RvciI6MC4wfSwiZG91YmxlU2lkZWQiOmZhbHNlfSx7InBick1ldGFsbGljUm91Z2huZXNzIjp7ImJhc2VDb2xvckZhY3RvciI6WzAuOTgwMzkyMTU2ODYyNzQ1MSwwLjk4MDM5MjE1Njg2Mjc0NTEsMS4wLDEuMF0sInJvdWdobmVzc0ZhY3RvciI6MC43LCJtZXRhbGxpY0ZhY3RvciI6MC4wfSwiZG91YmxlU2lkZWQiOmZhbHNlfSx7InBick1ldGFsbGljUm91Z2huZXNzIjp7ImJhc2VDb2xvckZhY3RvciI6WzAuMDMxMzcyNTQ5MDE5NjA3ODQsMC4wMTk2MDc4NDMxMzcyNTQ5LDAuMDE5NjA3ODQzMTM3MjU0OSwxLjBdLCJyb3VnaG5lc3NGYWN0b3IiOjAuNywibWV0YWxsaWNGYWN0b3IiOjAuMH0sImRvdWJsZVNpZGVkIjpmYWxzZX1dLCJub2RlcyI6W3sibmFtZSI6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";
  const state = { host:null, renderer:null, scene:null, camera:null, model:null, angle:0, frame:0, resizeObserver:null, dragging:false, lastX:0, ready:false };

  function decodeGlb() {
    const bin = atob(GLB_B64);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i += 1) bytes[i] = bin.charCodeAt(i);
    return bytes.buffer;
  }

  function setStatus(text, kind="") {
    const el = state.host?.querySelector(".adi-three-status");
    if (!el) return;
    el.textContent = text;
    el.dataset.kind = kind;
  }

  function syncAngleLabel() {
    const angle = ((state.angle % 360) + 360) % 360;
    const label = document.querySelector("[data-adi-angle-label]");
    if (label) label.textContent = Math.round(angle) + "°";
  }

  function setAngle(degrees) {
    state.angle = degrees;
    if (state.model) state.model.rotation.y = THREE.MathUtils.degToRad(state.angle);
    syncAngleLabel();
  }

  function rotateBy(degrees) {
    setAngle(state.angle + degrees);
  }

  function resize() {
    if (!state.host || !state.renderer || !state.camera) return;
    const rect = state.host.getBoundingClientRect();
    const w = Math.max(1, rect.width);
    const h = Math.max(1, rect.height);
    state.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    state.renderer.setSize(w, h, false);
    state.camera.aspect = w / h;
    state.camera.updateProjectionMatrix();
  }

  function animate() {
    if (!state.host?.isConnected) return;
    state.renderer?.render(state.scene, state.camera);
    state.frame = requestAnimationFrame(animate);
  }

  function bindPointer(canvas) {
    canvas.addEventListener("pointerdown", (e) => {
      state.dragging = true;
      state.lastX = e.clientX;
      canvas.setPointerCapture?.(e.pointerId);
    });
    canvas.addEventListener("pointermove", (e) => {
      if (!state.dragging) return;
      const dx = e.clientX - state.lastX;
      state.lastX = e.clientX;
      rotateBy(dx * 0.7);
    });
    const end = (e) => {
      state.dragging = false;
      canvas.releasePointerCapture?.(e.pointerId);
    };
    canvas.addEventListener("pointerup", end);
    canvas.addEventListener("pointercancel", end);
  }

  function destroy() {
    if (state.frame) cancelAnimationFrame(state.frame);
    state.resizeObserver?.disconnect();
    state.renderer?.dispose();
    if (state.host) state.host.innerHTML = "";
    Object.assign(state, { host:null, renderer:null, scene:null, camera:null, model:null, frame:0, resizeObserver:null, dragging:false, ready:false });
  }

  function mount(hostOrId) {
    destroy();
    const host = typeof hostOrId === "string" ? document.getElementById(hostOrId) : hostOrId;
    if (!host) return false;
    state.host = host;
    host.innerHTML = '<div class="adi-three-status">Loading real 3D Addi…</div>';

    if (!window.THREE || !THREE.GLTFLoader) {
      setStatus("3D engine unavailable. Check connection and reload.", "error");
      return false;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 100);
    camera.position.set(0, 2.25, 8.7);
    camera.lookAt(0, 2.1, 0);

    const renderer = new THREE.WebGLRenderer({ antialias:true, alpha:true, powerPreference:"high-performance" });
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.domElement.className = "adi-three-canvas";
    renderer.domElement.setAttribute("aria-label", "Real-time 3D Addi character. Drag left or right to rotate 360 degrees.");
    renderer.domElement.setAttribute("role", "img");
    host.prepend(renderer.domElement);

    scene.add(new THREE.HemisphereLight(0xffffff, 0xd7bfd2, 2.0));
    const key = new THREE.DirectionalLight(0xffffff, 2.2);
    key.position.set(3, 6, 5);
    key.castShadow = true;
    scene.add(key);
    const fill = new THREE.DirectionalLight(0xffd7e8, 1.0);
    fill.position.set(-4, 3, 2);
    scene.add(fill);

    const ground = new THREE.Mesh(
      new THREE.CircleGeometry(2.15, 48),
      new THREE.MeshStandardMaterial({ color:0xf5c7d9, roughness:0.95, metalness:0 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.02;
    ground.receiveShadow = true;
    scene.add(ground);

    state.scene = scene;
    state.camera = camera;
    state.renderer = renderer;
    bindPointer(renderer.domElement);

    const loader = new THREE.GLTFLoader();
    loader.parse(decodeGlb(), "", (gltf) => {
      const model = gltf.scene;
      model.traverse((node) => {
        if (node.isMesh) {
          node.castShadow = true;
          node.receiveShadow = true;
          if (node.material) {
            node.material.side = THREE.FrontSide;
            node.material.needsUpdate = true;
          }
        }
      });
      const box = new THREE.Box3().setFromObject(model);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());
      model.position.set(-center.x, -box.min.y, -center.z);
      const targetHeight = 4.8;
      const scale = targetHeight / Math.max(size.y, 0.001);
      model.scale.setScalar(scale);
      scene.add(model);
      state.model = model;
      state.ready = true;
      setAngle(0);
      setStatus("Real 3D model ready • drag to rotate 360°", "ready");
    }, (err) => {
      console.error("Adi GLB parse error", err);
      setStatus("Could not load the 3D model.", "error");
    });

    state.resizeObserver = new ResizeObserver(resize);
    state.resizeObserver.observe(host);
    resize();
    animate();
    return true;
  }

  window.Adi3D = { mount, destroy, rotateBy, setAngle, getAngle:() => state.angle, isReady:() => state.ready };
})();