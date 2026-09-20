import * as THREE from "./assets/vendor/three/three.module.js";

(() => {
  const state = { host:null, renderer:null, scene:null, camera:null, model:null, angle:0, frame:0, resizeObserver:null, dragging:false, lastX:0, ready:false };

  const C = {
    skin: 0xf4b08f,
    skinLight: 0xffc3a7,
    hair: 0x3b1d16,
    hairHi: 0x5a2b21,
    pink: 0xf15d9a,
    pinkDark: 0xd94482,
    denim: 0x3f78b8,
    denimDark: 0x2b5f99,
    white: 0xffffff,
    eyeWhite: 0xfffbf7,
    iris: 0x4a2a18,
    pupil: 0x0b0705,
    cheek: 0xf08e91,
    yellow: 0xf4c64f,
    sole: 0xf6e8ee,
    purple: 0x8a63d2
  };

  function mat(color, roughness=.62, metalness=0) {
    return new THREE.MeshStandardMaterial({ color, roughness, metalness });
  }

  function mesh(geometry, material, pos, scale, rot=[0,0,0], name="") {
    const m = new THREE.Mesh(geometry, material);
    m.position.set(...pos);
    m.scale.set(...scale);
    m.rotation.set(...rot);
    m.castShadow = true;
    m.receiveShadow = true;
    if (name) m.name = name;
    return m;
  }

  function sphere(group, color, pos, scale, name="") {
    const g = new THREE.SphereGeometry(1, 36, 24);
    const m = mesh(g, mat(color), pos, scale, [0,0,0], name);
    group.add(m); return m;
  }

  function cyl(group, color, pos, scale, rot=[0,0,0], name="") {
    const g = new THREE.CylinderGeometry(1,1,2,28);
    const m = mesh(g, mat(color), pos, scale, rot, name);
    group.add(m); return m;
  }

  function box(group, color, pos, scale, rot=[0,0,0], name="") {
    const g = new THREE.BoxGeometry(2,2,2,4,4,4);
    const m = mesh(g, mat(color), pos, scale, rot, name);
    group.add(m); return m;
  }

  function torus(group, color, pos, scale, rot=[0,0,0], name="") {
    const g = new THREE.TorusGeometry(1,0.28,18,36);
    const m = mesh(g, mat(color,.5), pos, scale, rot, name);
    group.add(m); return m;
  }

  function cone(group, color, pos, scale, rot=[0,0,0], name="") {
    const g = new THREE.ConeGeometry(1,2,24);
    const m = mesh(g, mat(color,.55), pos, scale, rot, name);
    group.add(m); return m;
  }

  function bow(group, x, y, z, rotY=0) {
    const b = new THREE.Group();
    b.position.set(x,y,z); b.rotation.y = rotY;
    sphere(b,C.pink,[0,0,0],[.12,.12,.10]);
    cone(b,C.pink,[-.14,0,0],[.13,.13,.08],[0,0,Math.PI/2]);
    cone(b,C.pink,[.14,0,0],[.13,.13,.08],[0,0,-Math.PI/2]);
    group.add(b);
  }

  function buildAddi() {
    const root = new THREE.Group();
    root.name = "AddiCharacter";

    // Body proportions: chibi/preschool character.
    sphere(root,C.skin,[0,3.55,0],[1.05,.94,.92],"Head");
    sphere(root,C.hair,[0,3.82,-.22],[1.12,.90,.82],"HairCap");

    // Hair bangs.
    for (let i=-2;i<=2;i++) {
      sphere(root,C.hairHi,[i*.25,4.08,.69],[.21,.34,.16],`Bang_${i}`);
    }

    // Pigtails.
    sphere(root,C.hair,[-1.03,3.72,-.05],[.50,.62,.44],"Pigtail_L");
    sphere(root,C.hair,[ 1.03,3.72,-.05],[.50,.62,.44],"Pigtail_R");
    sphere(root,C.hair,[-1.19,3.48,.02],[.34,.48,.31],"PigtailTip_L");
    sphere(root,C.hair,[ 1.19,3.48,.02],[.34,.48,.31],"PigtailTip_R");
    bow(root,-.83,4.08,.36,-.15);
    bow(root,.83,4.08,.36,.15);

    // Ears.
    sphere(root,C.skin,[-1.01,3.53,.09],[.18,.28,.12],"Ear_L");
    sphere(root,C.skin,[1.01,3.53,.09],[.18,.28,.12],"Ear_R");

    // Eyes with glossy layered geometry.
    for (const x of [-.39,.39]) {
      sphere(root,C.eyeWhite,[x,3.68,.79],[.31,.39,.13]);
      sphere(root,C.iris,[x,3.66,.89],[.19,.26,.08]);
      sphere(root,C.pupil,[x,3.66,.95],[.11,.17,.05]);
      sphere(root,C.white,[x-.05,3.78,1.00],[.045,.06,.025]);
    }

    // Brows.
    box(root,C.hair,[-.39,4.03,.80],[.22,.025,.035],[0,0,.08]);
    box(root,C.hair,[.39,4.03,.80],[.22,.025,.035],[0,0,-.08]);

    // Nose and smile.
    sphere(root,C.skinLight,[0,3.44,.91],[.07,.09,.06],"Nose");
    torus(root,0x9b2f3e,[0,3.22,.87],[.22,.11,.08],[Math.PI/2,0,0],"Smile");
    box(root,C.skin,[0,3.31,.92],[.30,.09,.07],[0,0,0],"SmileMask");

    // Cheeks.
    sphere(root,C.cheek,[-.66,3.35,.79],[.16,.09,.045]);
    sphere(root,C.cheek,[.66,3.35,.79],[.16,.09,.045]);

    // Neck.
    cyl(root,C.skin,[0,2.80,0],[.18,.18,.18]);

    // Shirt / torso.
    sphere(root,C.pink,[0,2.42,0],[.65,.72,.50],"Top_PinkDonut");
    sphere(root,C.pinkDark,[-.64,2.45,0],[.22,.30,.24],"Sleeve_L");
    sphere(root,C.pinkDark,[.64,2.45,0],[.22,.30,.24],"Sleeve_R");

    // Donut emblem.
    torus(root,0xf2a16b,[0,2.48,.50],[.23,.23,.07],[Math.PI/2,0,0],"Donut");
    torus(root,0xf68bb8,[0,2.48,.55],[.18,.18,.045],[Math.PI/2,0,0],"DonutFrosting");

    // Arms and hands.
    cyl(root,C.skin,[-.78,2.05,0],[.17,.50,.17],[0,0,-.35],"Arm_L");
    cyl(root,C.skin,[.78,2.05,0],[.17,.50,.17],[0,0,.35],"Arm_R");
    sphere(root,C.skin,[-.94,1.70,.02],[.22,.22,.20],"Hand_L");
    sphere(root,C.skin,[.94,1.70,.02],[.22,.22,.20],"Hand_R");

    // Wrist accessories to match reference.
    torus(root,C.pink,[-.84,1.82,.03],[.18,.18,.08],[Math.PI/2,0,0],"Bracelet");
    box(root,C.purple,[.86,1.85,.03],[.19,.14,.12],[0,0,.30],"Watch");

    // Shorts.
    box(root,C.denim,[0,1.52,0],[.69,.38,.50],[0,0,0],"Bottom_DenimShorts");
    box(root,C.denimDark,[0,1.78,.49],[.58,.035,.03],[0,0,0],"ShortsWaist");
    sphere(root,C.yellow,[0,1.79,.54],[.055,.055,.025],"ShortsButton");

    // Legs.
    cyl(root,C.skin,[-.34,.85,0],[.22,.48,.22],[0,0,0],"Leg_L");
    cyl(root,C.skin,[.34,.85,0],[.22,.48,.22],[0,0,0],"Leg_R");

    // Socks.
    cyl(root,C.white,[-.34,.40,0],[.23,.16,.23],[0,0,0],"Sock_L");
    cyl(root,C.white,[.34,.40,0],[.23,.16,.23],[0,0,0],"Sock_R");

    // Shoes.
    sphere(root,C.pink,[-.37,.17,.16],[.38,.20,.55],"Shoe_L");
    sphere(root,C.pink,[.37,.17,.16],[.38,.20,.55],"Shoe_R");
    box(root,C.white,[-.37,.06,.19],[.38,.06,.57],[0,0,0],"Sole_L");
    box(root,C.white,[.37,.06,.19],[.38,.06,.57],[0,0,0],"Sole_R");
    sphere(root,C.yellow,[-.37,.19,.60],[.07,.07,.035],"ShoeHeart_L");
    sphere(root,C.yellow,[.37,.19,.60],[.07,.07,.035],"ShoeHeart_R");

    // Necklace.
    torus(root,0xe8c66d,[0,2.83,.46],[.27,.18,.05],[Math.PI/2,0,0],"Necklace");
    sphere(root,C.pink,[0,2.64,.55],[.08,.08,.04],"Pendant");

    // Slight character tilt/pose similar to reference.
    root.rotation.z = -.02;
    return root;
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

  function rotateBy(degrees) { setAngle(state.angle + degrees); }

  function resize() {
    if (!state.host || !state.renderer || !state.camera) return;
    const rect = state.host.getBoundingClientRect();
    const w = Math.max(1, rect.width), h = Math.max(1, rect.height);
    state.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    state.renderer.setSize(w,h,false);
    state.camera.aspect = w/h;
    state.camera.updateProjectionMatrix();
  }

  function animate() {
    if (!state.host?.isConnected) return;
    state.renderer?.render(state.scene,state.camera);
    state.frame=requestAnimationFrame(animate);
  }

  function bindPointer(canvas) {
    canvas.addEventListener("pointerdown",(e)=>{state.dragging=true;state.lastX=e.clientX;canvas.setPointerCapture?.(e.pointerId);});
    canvas.addEventListener("pointermove",(e)=>{if(!state.dragging)return;const dx=e.clientX-state.lastX;state.lastX=e.clientX;rotateBy(dx*.7);});
    const end=(e)=>{state.dragging=false;canvas.releasePointerCapture?.(e.pointerId);};
    canvas.addEventListener("pointerup",end); canvas.addEventListener("pointercancel",end);
  }

  function destroy() {
    if(state.frame) cancelAnimationFrame(state.frame);
    state.resizeObserver?.disconnect();
    state.renderer?.dispose();
    if(state.host) state.host.innerHTML="";
    Object.assign(state,{host:null,renderer:null,scene:null,camera:null,model:null,frame:0,resizeObserver:null,dragging:false,ready:false,angle:0});
  }

  function mount(hostOrId) {
    destroy();
    const host=typeof hostOrId==="string"?document.getElementById(hostOrId):hostOrId;
    if(!host) return false;
    state.host=host;
    host.innerHTML='<div class="adi-three-status">Building Addi in real 3D…</div>';

    try {
      const scene=new THREE.Scene();
      const camera=new THREE.PerspectiveCamera(28,1,.1,100);
      camera.position.set(0,2.35,8.6);
      camera.lookAt(0,2.25,0);

      const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,powerPreference:"high-performance"});
      renderer.outputEncoding=THREE.sRGBEncoding;
      renderer.shadowMap.enabled=true;
      renderer.shadowMap.type=THREE.PCFSoftShadowMap;
      renderer.domElement.className="adi-three-canvas";
      renderer.domElement.setAttribute("role","img");
      renderer.domElement.setAttribute("aria-label","Real 3D Addi character. Drag to rotate 360 degrees.");
      host.prepend(renderer.domElement);

      scene.add(new THREE.HemisphereLight(0xffffff,0xe7cbd7,1.7));
      const key=new THREE.DirectionalLight(0xffffff,2.0); key.position.set(3,6,5); key.castShadow=true; scene.add(key);
      const fill=new THREE.DirectionalLight(0xffd5e7,.9); fill.position.set(-4,4,3); scene.add(fill);
      const rim=new THREE.DirectionalLight(0xcbd8ff,.65); rim.position.set(0,4,-5); scene.add(rim);

      const ground=new THREE.Mesh(new THREE.CircleGeometry(2.2,64),new THREE.MeshStandardMaterial({color:0xf4bfd3,roughness:.92}));
      ground.rotation.x=-Math.PI/2; ground.position.y=-.02; ground.receiveShadow=true; scene.add(ground);

      const model=buildAddi();
      scene.add(model);

      state.scene=scene; state.camera=camera; state.renderer=renderer; state.model=model; state.ready=true;
      bindPointer(renderer.domElement);
      state.resizeObserver=new ResizeObserver(resize); state.resizeObserver.observe(host);
      resize(); setAngle(0); animate();
      setStatus("Addi 3D ready • drag to rotate 360°","ready");
      return true;
    } catch(err) {
      console.error("Addi 3D build error",err);
      setStatus("Could not initialize Addi 3D.","error");
      return false;
    }
  }

  window.Adi3D={mount,destroy,rotateBy,setAngle,getAngle:()=>state.angle,isReady:()=>state.ready};
})();