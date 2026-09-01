import * as THREE from 'three';

/**
 * Creates procedural textures for high realism
 */
function createCarbonTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#181818';
  ctx.fillRect(0, 0, 64, 64);
  ctx.fillStyle = '#282828';
  for (let i = 0; i < 64; i += 8) {
    for (let j = 0; j < 64; j += 8) {
      if ((i + j) % 16 === 0) {
        ctx.fillRect(i, j, 8, 8);
      }
    }
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(12, 12);
  return texture;
}

function createTireTreadTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#111111';
  ctx.fillRect(0, 0, 128, 128);
  ctx.strokeStyle = '#333333';
  ctx.lineWidth = 4;
  for (let y = -64; y < 192; y += 16) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(64, y + 24);
    ctx.lineTo(128, y);
    ctx.stroke();
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 16);
  return texture;
}

function createTftDashTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#05070a';
  ctx.fillRect(0, 0, 256, 128);
  ctx.strokeStyle = '#ff6600';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(128, 90, 60, Math.PI, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = '#ff6600';
  ctx.font = 'bold 36px monospace';
  ctx.textAlign = 'center';
  ctx.fillText('185', 128, 70);

  ctx.font = '12px monospace';
  ctx.fillStyle = '#ffffff';
  ctx.fillText('KM/H  |  READY TO RACE', 128, 92);
  ctx.fillStyle = '#ff6600';
  ctx.fillText('KTM 390 DUKE // LC4c 44HP', 128, 112);

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

// Color palettes featuring iconic KTM 390 Duke livery
export const COLORWAYS = [
  { id: 'ktm-orange', name: 'KTM Electronic Orange', color: '#ff6600', frameColor: '#ffffff', wheelColor: '#ff6600', accent: '#ff6600', metalness: 0.85, roughness: 0.18 },
  { id: 'ktm-stealth', name: 'KTM Atlantic Blue / Dark', color: '#0d131f', frameColor: '#ff6600', wheelColor: '#ff6600', accent: '#ff6600', metalness: 0.9, roughness: 0.15 },
  { id: 'ktm-white', name: 'KTM Ceramic White', color: '#f0f4f8', frameColor: '#ff6600', wheelColor: '#ff6600', accent: '#ff6600', metalness: 0.8, roughness: 0.2 },
  { id: 'obsidian', name: 'Cyber Obsidian', color: '#16191f', frameColor: '#00f2fe', wheelColor: '#121418', accent: '#00f2fe', metalness: 0.95, roughness: 0.15 }
];

/**
 * Procedurally builds the high-detail KTM 390 Duke 3D hierarchy
 */
export function buildMotorcycle(colorway = COLORWAYS[0]) {
  const root = new THREE.Group();
  root.name = 'ktm_390_duke_root';

  const carbonTex = createCarbonTexture();
  const tireTex = createTireTreadTexture();
  const tftTex = createTftDashTexture();

  // Load KTM texture for decals / panels
  const textureLoader = new THREE.TextureLoader();
  const ktmImageTex = textureLoader.load('/ktm-390-duke-bike.jpg');

  // Materials
  const bodyPaintMaterial = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(colorway.color),
    metalness: colorway.metalness,
    roughness: colorway.roughness,
    clearcoat: 1.0,
    clearcoatRoughness: 0.06,
    reflectivity: 1.0,
    envMapIntensity: 2.2
  });

  const trellisFrameMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color(colorway.frameColor || '#ffffff'),
    metalness: 0.8,
    roughness: 0.25
  });

  const orangeWheelMaterial = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(colorway.wheelColor || '#ff6600'),
    metalness: 0.75,
    roughness: 0.2,
    clearcoat: 0.8
  });

  const accentMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color(colorway.accent),
    metalness: 0.6,
    roughness: 0.2,
    emissive: new THREE.Color(colorway.accent),
    emissiveIntensity: 0.45
  });

  const carbonMaterial = new THREE.MeshStandardMaterial({
    color: 0x202020,
    roughness: 0.35,
    metalness: 0.5,
    map: carbonTex,
    bumpMap: carbonTex,
    bumpScale: 0.03
  });

  const engineMat = new THREE.MeshStandardMaterial({
    color: 0x22262c,
    metalness: 0.9,
    roughness: 0.28
  });

  const exhaustMat = new THREE.MeshPhysicalMaterial({
    color: 0x828892,
    metalness: 0.96,
    roughness: 0.15,
    clearcoat: 0.7
  });

  const goldForkMat = new THREE.MeshStandardMaterial({
    color: 0x222222, // WP APEX inverted forks
    metalness: 0.92,
    roughness: 0.18
  });

  const darkAlloyMat = new THREE.MeshStandardMaterial({
    color: 0x15181e,
    metalness: 0.88,
    roughness: 0.22
  });

  const brakeRotorMat = new THREE.MeshStandardMaterial({
    color: 0xb8c0ca,
    metalness: 0.95,
    roughness: 0.2
  });

  const bybreBrakeMat = new THREE.MeshStandardMaterial({
    color: 0x1f2329,
    metalness: 0.8,
    roughness: 0.3
  });

  const tireRubberMat = new THREE.MeshStandardMaterial({
    color: 0x141517,
    roughness: 0.88,
    metalness: 0.08,
    bumpMap: tireTex,
    bumpScale: 0.08
  });

  const headlightLensMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    emissive: 0xffffff,
    emissiveIntensity: 3.8,
    roughness: 0.1
  });

  const taillightLensMat = new THREE.MeshStandardMaterial({
    color: 0xff1133,
    emissive: 0xff0022,
    emissiveIntensity: 2.8,
    roughness: 0.1
  });

  const refs = {
    root,
    bodyPaintMaterial,
    accentMaterial,
    headlightLensMat,
    headlightBeamMesh: null,
    frontWheelGroup: null,
    rearWheelGroup: null,
    hotspots: {}
  };

  // ==========================================
  // 1. KTM 390 DUKE TRELLIS CHASSIS
  // ==========================================
  const frameGroup = new THREE.Group();
  frameGroup.name = 'KTM_Trellis_Frame';

  // Front orange sub-trellis
  const orangeTrellisMat = new THREE.MeshStandardMaterial({
    color: 0xff6600,
    metalness: 0.8,
    roughness: 0.25
  });

  // Front trellis lattice tubes
  for (let i = 0; i < 4; i++) {
    const tubeGeo = new THREE.CylinderGeometry(0.042, 0.042, 1.1, 12);
    const tubeL = new THREE.Mesh(tubeGeo, orangeTrellisMat);
    tubeL.rotation.z = (i % 2 === 0 ? 1 : -1) * (Math.PI / 4.2);
    tubeL.position.set(-0.1 + i * 0.18, 0.85, 0.2);
    tubeL.castShadow = true;
    frameGroup.add(tubeL);

    const tubeR = tubeL.clone();
    tubeR.position.z = -0.2;
    frameGroup.add(tubeR);
  }

  // Rear white bolt-on subframe (KTM 390 signature)
  for (let j = 0; j < 3; j++) {
    const subTubeGeo = new THREE.CylinderGeometry(0.038, 0.038, 0.95, 12);
    const subTubeL = new THREE.Mesh(subTubeGeo, trellisFrameMaterial);
    subTubeL.rotation.z = Math.PI / 3.8;
    subTubeL.position.set(-0.6 - j * 0.15, 1.05, 0.16);
    subTubeL.castShadow = true;
    frameGroup.add(subTubeL);

    const subTubeR = subTubeL.clone();
    subTubeR.position.z = -0.16;
    frameGroup.add(subTubeR);
  }

  // ==========================================
  // 2. KTM LC4c 399cc ENGINE BLOCK
  // ==========================================
  const motorGroup = new THREE.Group();
  motorGroup.name = 'KTM_Engine_LC4c';
  motorGroup.position.set(-0.05, 0.62, 0);

  // Engine crankcase & cylinder head
  const cylinderGeo = new THREE.CylinderGeometry(0.18, 0.22, 0.48, 16);
  const cylinder = new THREE.Mesh(cylinderGeo, engineMat);
  cylinder.rotation.z = -0.25;
  cylinder.position.set(0.1, 0.18, 0);
  cylinder.castShadow = true;
  motorGroup.add(cylinder);

  // Crankcase with copper KTM clutch cover
  const clutchCoverGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.44, 20);
  const clutchMat = new THREE.MeshStandardMaterial({
    color: 0x8a5229, // KTM bronze/copper clutch casing
    metalness: 0.85,
    roughness: 0.25
  });
  const clutchCover = new THREE.Mesh(clutchCoverGeo, clutchMat);
  clutchCover.rotation.x = Math.PI / 2;
  clutchCover.position.set(-0.15, -0.05, 0);
  motorGroup.add(clutchCover);

  frameGroup.add(motorGroup);

  // ==========================================
  // 3. KTM 390 DUKE SCULPTED TANK & TANK SPOILERS
  // ==========================================
  const fairingGroup = new THREE.Group();
  fairingGroup.name = 'KTM_Fairings';

  // Muscular Steel Fuel Tank
  const tankGeo = new THREE.BoxGeometry(1.05, 0.42, 0.48);
  const tankMesh = new THREE.Mesh(tankGeo, bodyPaintMaterial);
  tankMesh.position.set(0.05, 1.25, 0);
  tankMesh.castShadow = true;
  fairingGroup.add(tankMesh);

  // Aggressive Forward-Extending Tank Spoilers / Shrouds (DUKE signature)
  const shroudGeo = new THREE.ConeGeometry(0.28, 1.1, 4);
  const shroudL = new THREE.Mesh(shroudGeo, bodyPaintMaterial);
  shroudL.rotation.z = -Math.PI / 2.3;
  shroudL.rotation.y = 0.15;
  shroudL.position.set(0.48, 1.18, 0.28);
  shroudL.castShadow = true;
  fairingGroup.add(shroudL);

  const shroudR = shroudL.clone();
  shroudR.rotation.y = -0.15;
  shroudR.position.z = -0.28;
  fairingGroup.add(shroudR);

  // Two-piece Duke Ergo Seat
  const riderSeatGeo = new THREE.BoxGeometry(0.55, 0.08, 0.32);
  const riderSeat = new THREE.Mesh(riderSeatGeo, darkAlloyMat);
  riderSeat.position.set(-0.42, 1.14, 0);
  fairingGroup.add(riderSeat);

  const pillionSeatGeo = new THREE.BoxGeometry(0.42, 0.08, 0.24);
  const pillionSeat = new THREE.Mesh(pillionSeatGeo, darkAlloyMat);
  pillionSeat.position.set(-0.85, 1.25, 0);
  fairingGroup.add(pillionSeat);

  // Minimalist Sharp Tail Cowl
  const tailCowlGeo = new THREE.ConeGeometry(0.2, 0.75, 4);
  const tailCowl = new THREE.Mesh(tailCowlGeo, trellisFrameMaterial);
  tailCowl.rotation.z = Math.PI / 2.5;
  tailCowl.position.set(-1.05, 1.26, 0);
  tailCowl.castShadow = true;
  fairingGroup.add(tailCowl);

  // License plate tail tidy bracket
  const tailTidyGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.45, 8);
  const tailTidy = new THREE.Mesh(tailTidyGeo, darkAlloyMat);
  tailTidy.rotation.z = -Math.PI / 4;
  tailTidy.position.set(-1.3, 1.05, 0);
  fairingGroup.add(tailTidy);

  frameGroup.add(fairingGroup);

  // ==========================================
  // 4. WP APEX SUSPENSION & COCKPIT 5" TFT
  // ==========================================
  const cockpitGroup = new THREE.Group();
  cockpitGroup.position.set(0.52, 1.36, 0);

  // Wide Naked Aluminum Handlebars
  const handleBarGeo = new THREE.CylinderGeometry(0.022, 0.022, 0.72, 12);
  const handleBar = new THREE.Mesh(handleBarGeo, trellisFrameMaterial);
  handleBar.rotation.x = Math.PI / 2;
  cockpitGroup.add(handleBar);

  // Mirrors
  const mirrorStemGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.25, 8);
  const mirrorStemL = new THREE.Mesh(mirrorStemGeo, darkAlloyMat);
  mirrorStemL.rotation.z = 0.4;
  mirrorStemL.position.set(0, 0.15, 0.32);
  cockpitGroup.add(mirrorStemL);

  const mirrorStemR = mirrorStemL.clone();
  mirrorStemR.position.z = -0.32;
  cockpitGroup.add(mirrorStemR);

  // 5" Bonded Glass TFT Dashboard
  const tftGeo = new THREE.BoxGeometry(0.16, 0.02, 0.24);
  const tftMat = new THREE.MeshBasicMaterial({ map: tftTex });
  const tftConsole = new THREE.Mesh(tftGeo, tftMat);
  tftConsole.position.set(-0.06, 0.06, 0);
  tftConsole.rotation.z = -Math.PI / 5;
  cockpitGroup.add(tftConsole);

  frameGroup.add(cockpitGroup);

  // ==========================================
  // 5. ICONIC SPLIT LED HEADLIGHT (PREDATOR FACE)
  // ==========================================
  const lightGroup = new THREE.Group();
  lightGroup.name = 'KTM_Predator_Headlight';

  // Split Mask Structure
  const maskGeo = new THREE.BoxGeometry(0.15, 0.28, 0.24);
  const maskMesh = new THREE.Mesh(maskGeo, bodyPaintMaterial);
  maskMesh.position.set(0.98, 1.22, 0);
  lightGroup.add(maskMesh);

  // Twin Split LED Projectors
  const lensGeo = new THREE.SphereGeometry(0.055, 16, 16);
  const lensL = new THREE.Mesh(lensGeo, headlightLensMat);
  lensL.position.set(1.06, 1.24, 0.07);
  lightGroup.add(lensL);

  const lensR = lensL.clone();
  lensR.position.z = -0.07;
  lightGroup.add(lensR);

  // Central Vertical DRL Blade
  const drlGeo = new THREE.BoxGeometry(0.02, 0.22, 0.02);
  const drlMesh = new THREE.Mesh(drlGeo, headlightLensMat);
  drlMesh.position.set(1.07, 1.22, 0);
  lightGroup.add(drlMesh);

  // Headlight Light Beam Cone
  const beamConeGeo = new THREE.ConeGeometry(1.2, 5.0, 32, 1, true);
  const beamConeMat = new THREE.MeshBasicMaterial({
    color: 0xfff0d0,
    transparent: true,
    opacity: 0.25,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });
  const headlightBeam = new THREE.Mesh(beamConeGeo, beamConeMat);
  headlightBeam.rotation.z = -Math.PI / 2;
  headlightBeam.position.set(3.5, 1.22, 0);
  lightGroup.add(headlightBeam);
  refs.headlightBeamMesh = headlightBeam;

  // Tail LED
  const tailStripGeo = new THREE.BoxGeometry(0.03, 0.03, 0.2);
  const taillight = new THREE.Mesh(tailStripGeo, taillightLensMat);
  taillight.position.set(-1.42, 1.32, 0);
  lightGroup.add(taillight);

  frameGroup.add(lightGroup);

  // ==========================================
  // 6. WP APEX 43MM FRONT FORKS & ORANGE 17" WHEEL
  // ==========================================
  const frontForkGroup = new THREE.Group();
  frontForkGroup.position.set(1.15, 0.65, 0);

  // Inverted Black Stanchions
  const forkLegGeo = new THREE.CylinderGeometry(0.042, 0.042, 0.95, 16);
  const forkL = new THREE.Mesh(forkLegGeo, goldForkMat);
  forkL.rotation.z = -0.38;
  forkL.position.set(0, 0.25, 0.15);
  frontForkGroup.add(forkL);

  const forkR = forkL.clone();
  forkR.position.z = -0.15;
  frontForkGroup.add(forkR);

  // Front Orange Wheel
  const frontWheelGroup = new THREE.Group();
  frontWheelGroup.position.set(0.18, -0.05, 0);

  const tireGeo = new THREE.TorusGeometry(0.58, 0.14, 20, 36);
  const frontTire = new THREE.Mesh(tireGeo, tireRubberMat);
  frontTire.castShadow = true;
  frontWheelGroup.add(frontTire);

  const rimGeo = new THREE.TorusGeometry(0.46, 0.04, 16, 32);
  const rimMesh = new THREE.Mesh(rimGeo, orangeWheelMaterial);
  frontWheelGroup.add(rimMesh);

  for (let s = 0; s < 5; s++) {
    const spokeGeo = new THREE.BoxGeometry(0.03, 0.88, 0.04);
    const spoke = new THREE.Mesh(spokeGeo, orangeWheelMaterial);
    spoke.rotation.z = (s * Math.PI) / 5;
    frontWheelGroup.add(spoke);
  }

  // 320mm Front Brake Disc
  const rotorGeo = new THREE.RingGeometry(0.18, 0.36, 32);
  const rotorL = new THREE.Mesh(rotorGeo, brakeRotorMat);
  rotorL.position.z = 0.08;
  frontWheelGroup.add(rotorL);

  // ByBre Radial Caliper
  const caliperGeo = new THREE.BoxGeometry(0.08, 0.16, 0.07);
  const caliperL = new THREE.Mesh(caliperGeo, bybreBrakeMat);
  caliperL.position.set(0.02, 0.16, 0.09);
  frontForkGroup.add(caliperL);

  frontForkGroup.add(frontWheelGroup);
  refs.frontWheelGroup = frontWheelGroup;
  frameGroup.add(frontForkGroup);

  // ==========================================
  // 7. CURVED CAST ALUMINUM SWINGARM & REAR WHEEL
  // ==========================================
  const rearAssembly = new THREE.Group();
  rearAssembly.position.set(-0.55, 0.6, 0);

  // Open-lattice curved swingarm (KTM signature)
  const swingarmGeo = new THREE.BoxGeometry(0.9, 0.1, 0.06);
  const swingarmL = new THREE.Mesh(swingarmGeo, darkAlloyMat);
  swingarmL.rotation.z = 0.14;
  swingarmL.position.set(-0.38, -0.05, 0.12);
  swingarmL.castShadow = true;
  rearAssembly.add(swingarmL);

  const swingarmR = swingarmL.clone();
  swingarmR.position.z = -0.12;
  rearAssembly.add(swingarmR);

  // WP APEX Monoshock with white spring
  const shockGeo = new THREE.CylinderGeometry(0.035, 0.035, 0.42, 12);
  const shockMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 });
  const shock = new THREE.Mesh(shockGeo, shockMat);
  shock.rotation.z = -Math.PI / 3.4;
  shock.position.set(0.05, 0.16, 0);
  rearAssembly.add(shock);

  // Rear Wheel
  const rearWheelGroup = new THREE.Group();
  rearWheelGroup.position.set(-0.82, 0.0, 0);

  const rearTireGeo = new THREE.TorusGeometry(0.58, 0.18, 20, 36);
  const rearTire = new THREE.Mesh(rearTireGeo, tireRubberMat);
  rearTire.castShadow = true;
  rearWheelGroup.add(rearTire);

  const rearRimGeo = new THREE.TorusGeometry(0.44, 0.05, 16, 32);
  const rearRim = new THREE.Mesh(rearRimGeo, orangeWheelMaterial);
  rearWheelGroup.add(rearRim);

  for (let s = 0; s < 5; s++) {
    const spoke = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.84, 0.05), orangeWheelMaterial);
    spoke.rotation.z = (s * Math.PI) / 5;
    rearWheelGroup.add(spoke);
  }

  // Underbelly Lightweight Stainless Exhaust
  const exhaustGeo = new THREE.BoxGeometry(0.55, 0.18, 0.28);
  const exhaust = new THREE.Mesh(exhaustGeo, exhaustMat);
  exhaust.position.set(0.12, -0.22, 0);
  exhaust.castShadow = true;
  rearAssembly.add(exhaust);

  rearAssembly.add(rearWheelGroup);
  refs.rearWheelGroup = rearWheelGroup;
  frameGroup.add(rearAssembly);

  root.add(frameGroup);
  return { root, refs };
}
