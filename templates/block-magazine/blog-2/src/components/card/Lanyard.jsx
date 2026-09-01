import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

/**
 * Procedural Texture Generator for Lanyard Card Faces and Strap
 */
function createCardFrontTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1536;
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = '#fffaf1';
  ctx.fillRect(0, 0, 1024, 1536);

  // Subtle warm gradient aura
  const grad = ctx.createRadialGradient(800, 200, 50, 800, 200, 700);
  grad.addColorStop(0, 'rgba(217, 108, 74, 0.12)');
  grad.addColorStop(1, 'rgba(255, 250, 241, 0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1024, 1536);

  // Card Border
  ctx.strokeStyle = 'rgba(111, 81, 64, 0.25)';
  ctx.lineWidth = 12;
  ctx.strokeRect(36, 36, 1024 - 72, 1536 - 72);

  // Top Punch Slot
  ctx.fillStyle = '#e5ded4';
  ctx.beginPath();
  ctx.roundRect(432, 70, 160, 36, 18);
  ctx.fill();
  ctx.strokeStyle = 'rgba(111, 81, 64, 0.3)';
  ctx.lineWidth = 4;
  ctx.stroke();

  // Badge Tag
  ctx.fillStyle = '#d96c4a';
  ctx.font = 'bold 30px "Plus Jakarta Sans", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('◈ ARCHIVAL PASS', 512, 230);

  // Main Brand Heading
  ctx.fillStyle = '#201c18';
  ctx.font = 'bold 88px "Cinzel", Georgia, serif';
  ctx.fillText('ELEMENTAL', 512, 340);

  // Subtitle
  ctx.fillStyle = '#6f5140';
  ctx.font = 'bold 30px "Plus Jakarta Sans", sans-serif';
  ctx.letterSpacing = '6px';
  ctx.fillText('STORIES BEHIND THE SCIENCE', 512, 400);

  // Center Seal Circle
  ctx.beginPath();
  ctx.arc(512, 760, 210, 0, Math.PI * 2);
  ctx.strokeStyle = '#d96c4a';
  ctx.lineWidth = 6;
  ctx.setLineDash([16, 12]);
  ctx.stroke();
  ctx.setLineDash([]);

  // Inside Seal
  ctx.fillStyle = '#201c18';
  ctx.font = 'bold 74px "Fraunces", Georgia, serif';
  ctx.fillText('ISSUE 01', 512, 740);

  ctx.fillStyle = '#d96c4a';
  ctx.font = 'bold 44px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('2026', 512, 810);

  // Quote
  ctx.fillStyle = '#4a413a';
  ctx.font = 'italic 38px "Newsreader", Georgia, serif';
  ctx.fillText('"Science didn\'t happen in a vacuum."', 512, 1080);

  // Footer Divider Line
  ctx.strokeStyle = 'rgba(111, 81, 64, 0.25)';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(100, 1260);
  ctx.lineTo(924, 1260);
  ctx.stroke();

  // Footer Info
  ctx.fillStyle = '#7d7065';
  ctx.font = 'bold 26px "Plus Jakarta Sans", sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('CREDENTIAL', 100, 1330);

  ctx.fillStyle = '#201c18';
  ctx.font = 'bold 40px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('EDITORIAL DESK', 100, 1390);

  // Gold Seal Stamp Icon
  ctx.fillStyle = '#ffb05a';
  ctx.beginPath();
  ctx.arc(860, 1360, 60, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#201c18';
  ctx.font = 'bold 44px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('★', 860, 1375);

  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 16;
  return texture;
}

function createCardBackTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1536;
  const ctx = canvas.getContext('2d');

  // Dark editorial background
  ctx.fillStyle = '#201c18';
  ctx.fillRect(0, 0, 1024, 1536);

  // Warm amber gradient
  const grad = ctx.createRadialGradient(200, 1300, 50, 200, 1300, 800);
  grad.addColorStop(0, 'rgba(217, 108, 74, 0.25)');
  grad.addColorStop(1, 'rgba(32, 28, 24, 0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1024, 1536);

  // Border
  ctx.strokeStyle = 'rgba(255, 250, 241, 0.15)';
  ctx.lineWidth = 12;
  ctx.strokeRect(36, 36, 1024 - 72, 1536 - 72);

  // Top Punch Slot
  ctx.fillStyle = '#141210';
  ctx.beginPath();
  ctx.roundRect(432, 70, 160, 36, 18);
  ctx.fill();

  // Brand Heading
  ctx.fillStyle = '#ffb05a';
  ctx.font = 'bold 76px "Cinzel", Georgia, serif';
  ctx.textAlign = 'center';
  ctx.fillText('ELEMENTAL', 512, 280);

  ctx.fillStyle = '#d5c8be';
  ctx.font = 'bold 28px "Plus Jakarta Sans", sans-serif';
  ctx.letterSpacing = '6px';
  ctx.fillText('SCIENCE • HISTORY • PEOPLE', 512, 340);

  // Mission
  ctx.fillStyle = '#fffaf1';
  ctx.font = 'italic 36px "Newsreader", Georgia, serif';
  ctx.fillText('Curated investigations into how unexpected', 512, 520);
  ctx.fillText('accidents, human persistence, and', 512, 570);
  ctx.fillText('mistakes transformed what we know.', 512, 620);

  // Bullet Verification Criteria
  const bulletY = 820;
  const items = [
    '✓ Primary Source Archival Verification',
    '✓ Museum Laboratory Provenance',
    '✓ Unpublished Notebook Marginalia',
    '✓ Uncensored Historical Chronologies'
  ];

  ctx.fillStyle = '#ffb05a';
  ctx.font = 'bold 32px "Plus Jakarta Sans", sans-serif';
  ctx.textAlign = 'left';
  items.forEach((item, i) => {
    ctx.fillText(item, 140, bulletY + i * 85);
  });

  // Footer Email
  ctx.fillStyle = '#d96c4a';
  ctx.font = 'bold 30px "Plus Jakarta Sans", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('DESK@ELEMENTAL-MAGAZINE.ORG', 512, 1380);

  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 16;
  return texture;
}

function createLanyardStrapTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#201c18';
  ctx.fillRect(0, 0, 128, 512);

  ctx.fillStyle = '#d96c4a';
  for (let y = -128; y < 640; y += 32) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(128, y + 64);
    ctx.lineTo(128, y + 80);
    ctx.lineTo(0, y + 16);
    ctx.closePath();
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 4);
  return texture;
}

/**
 * Lanyard 3D Physics Component
 * Supports props:
 * - position: [x, y, z] (camera/stage position, default [0, 0, 24])
 * - gravity: [x, y, z] (default [0, -40, 0])
 * - frontImage: custom front image URL
 * - backImage: custom back image URL
 * - imageFit: "cover" | "contain"
 * - lanyardImage: custom strap image URL
 * - lanyardWidth: width multiplier for strap
 */
export function Lanyard({
  position = [0, 0, 24],
  gravity = [0, -40, 0],
  frontImage,
  backImage,
  imageFit = 'cover',
  lanyardImage,
  lanyardWidth = 1,
  className = ''
}) {
  const mountRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 360;
    const height = 480;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
    camera.position.set(position[0], position[1], position[2]);

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Warm Lights
    const ambientLight = new THREE.AmbientLight(0xfff5ea, 1.4);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2.0);
    dirLight.position.set(8, 15, 12);
    dirLight.castShadow = true;
    scene.add(dirLight);

    const warmPointLight = new THREE.PointLight(0xffb05a, 2.5, 30);
    warmPointLight.position.set(-6, -2, 8);
    scene.add(warmPointLight);

    // Textures
    const textureLoader = new THREE.TextureLoader();
    const frontTex = frontImage ? textureLoader.load(frontImage) : createCardFrontTexture();
    const backTex = backImage ? textureLoader.load(backImage) : createCardBackTexture();
    const strapTex = lanyardImage ? textureLoader.load(lanyardImage) : createLanyardStrapTexture();

    // Card Dimensions: width 4.2, height 6.2, depth 0.08
    const cardGeo = new THREE.BoxGeometry(4.2, 6.2, 0.08);

    // Materials: [right, left, top, bottom, front, back]
    const edgeMat = new THREE.MeshStandardMaterial({ color: 0xded6cc, roughness: 0.4 });
    const frontMat = new THREE.MeshStandardMaterial({
      map: frontTex,
      roughness: 0.35,
      metalness: 0.05
    });
    const backMat = new THREE.MeshStandardMaterial({
      map: backTex,
      roughness: 0.35,
      metalness: 0.05
    });

    const cardMesh = new THREE.Mesh(cardGeo, [
      edgeMat,
      edgeMat,
      edgeMat,
      edgeMat,
      frontMat,
      backMat
    ]);
    cardMesh.castShadow = true;
    cardMesh.receiveShadow = true;

    // Brass eyelet ring
    const ringGeo = new THREE.TorusGeometry(0.32, 0.07, 16, 32);
    const ringMat = new THREE.MeshStandardMaterial({ color: 0xffb05a, metalness: 0.85, roughness: 0.2 });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.position.set(0, 3.25, 0);
    ringMesh.rotation.x = Math.PI / 2;

    // Hanging Strap / Band Mesh using CatmullRomCurve3
    const strapWidth = 0.5 * lanyardWidth;
    const curvePoints = [
      new THREE.Vector3(0, 8.5, 0),
      new THREE.Vector3(0.3, 6.0, 0.2),
      new THREE.Vector3(0, 3.4, 0)
    ];
    const curve = new THREE.CatmullRomCurve3(curvePoints);
    const strapGeo = new THREE.TubeGeometry(curve, 32, strapWidth * 0.35, 12, false);
    const strapMat = new THREE.MeshStandardMaterial({
      map: strapTex,
      roughness: 0.6,
      side: THREE.DoubleSide
    });
    const strapMesh = new THREE.Mesh(strapGeo, strapMat);
    scene.add(strapMesh);

    // Card assembly group
    const cardGroup = new THREE.Group();
    cardGroup.add(cardMesh);
    cardGroup.add(ringMesh);
    cardGroup.position.set(0, -0.6, 0);
    scene.add(cardGroup);

    // Physics Verlet & Drag Simulation
    let isDragging = false;
    let dragPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    let raycaster = new THREE.Raycaster();
    let mouse = new THREE.Vector2();
    let planeIntersect = new THREE.Vector3();

    // Physical state
    let cardPos = new THREE.Vector3(0, -0.6, 0);
    let cardVel = new THREE.Vector3(0, 0, 0);
    let cardRot = new THREE.Vector3(0, 0, 0);
    let cardRotVel = new THREE.Vector3(0, 0, 0);
    let anchor = new THREE.Vector3(0, 3.4, 0);

    const getMousePos = (e) => {
      const rect = renderer.domElement.getBoundingClientRect();
      return {
        x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
        y: -((e.clientY - rect.top) / rect.height) * 2 + 1
      };
    };

    const onPointerDown = (e) => {
      const p = getMousePos(e);
      mouse.set(p.x, p.y);
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(cardMesh);
      if (intersects.length > 0) {
        isDragging = true;
        renderer.domElement.style.cursor = 'grabbing';
      }
    };

    const onPointerMove = (e) => {
      const p = getMousePos(e);
      mouse.set(p.x, p.y);
      if (isDragging) {
        raycaster.setFromCamera(mouse, camera);
        raycaster.ray.intersectPlane(dragPlane, planeIntersect);
        const targetX = Math.max(-5, Math.min(5, planeIntersect.x));
        const targetY = Math.max(-4.5, Math.min(2.5, planeIntersect.y));
        cardVel.x += (targetX - cardPos.x) * 0.45;
        cardVel.y += (targetY - cardPos.y) * 0.45;
      }
    };

    const onPointerUp = () => {
      isDragging = false;
      if (renderer.domElement) {
        renderer.domElement.style.cursor = 'grab';
      }
    };

    const dom = renderer.domElement;
    dom.style.cursor = 'grab';
    dom.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    // Intersection Observer to only render when in viewport
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && !frameId) {
          animate();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    // Animation Loop with Spring & Gravity
    let frameId;
    let time = 0;
    let lastCurveUpdatePos = new THREE.Vector3(999, 999, 999);

    const animate = () => {
      if (!isVisible) {
        frameId = null;
        return;
      }

      time += 0.02;

      if (!isDragging) {
        // Natural subtle pendulum sway
        const naturalSway = Math.sin(time * 1.5) * 0.12;
        cardVel.x += naturalSway * 0.06;

        // Spring force returning to resting anchor
        const springK = 0.085;
        const restY = -0.6;
        cardVel.x += (0 - cardPos.x) * springK;
        cardVel.y += (restY - cardPos.y) * springK;
        cardVel.z += (0 - cardPos.z) * springK;

        // Damping
        cardVel.multiplyScalar(0.92);
      }

      cardPos.add(cardVel);
      cardGroup.position.copy(cardPos);

      // Card tilt responds to velocity + target flip angle
      const targetRotY = isFlipped ? Math.PI : 0;
      cardRotVel.x += (-cardVel.y * 0.18 - cardRot.x) * 0.1;
      cardRotVel.y += (cardVel.x * 0.22 + (targetRotY - cardRot.y)) * 0.12;
      cardRotVel.z += (-cardVel.x * 0.15 - cardRot.z) * 0.1;

      cardRotVel.multiplyScalar(0.88);
      cardRot.add(cardRotVel);

      cardGroup.rotation.set(cardRot.x, cardRot.y, cardRot.z);

      // Update strap curve dynamically only when card has moved noticeably
      if (lastCurveUpdatePos.distanceToSquared(cardPos) > 0.002) {
        curvePoints[0].set(0, 8.5, 0);
        curvePoints[1].set(cardPos.x * 0.45, (8.5 + cardPos.y + 3.25) * 0.5, cardPos.z * 0.5 + 0.2);
        curvePoints[2].set(cardPos.x, cardPos.y + 3.25, cardPos.z);
        curve.points = curvePoints;
        const oldGeo = strapMesh.geometry;
        strapMesh.geometry = new THREE.TubeGeometry(curve, 20, strapWidth * 0.35, 8, false);
        if (oldGeo) oldGeo.dispose();
        lastCurveUpdatePos.copy(cardPos);
      }

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container || !renderer) return;
      const w = container.clientWidth || 360;
      camera.aspect = w / height;
      camera.updateProjectionMatrix();
      renderer.setSize(w, height);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      observer.disconnect();
      if (frameId) cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      dom.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [position, gravity, frontImage, backImage, lanyardImage, lanyardWidth, isFlipped]);

  return (
    <div
      className={`lanyard-wrapper ${className}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        userSelect: 'none'
      }}
    >
      <div
        ref={mountRef}
        style={{
          width: '100%',
          maxWidth: '380px',
          height: '480px',
          display: 'flex',
          justifyContent: 'center'
        }}
      />
      <div style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <button
          onClick={() => setIsFlipped(!isFlipped)}
          className="btn-editorial-secondary"
          style={{ fontSize: '0.75rem', padding: '0.45rem 1rem' }}
        >
          <span>Flip Credential Card ({isFlipped ? 'Back' : 'Front'})</span>
        </button>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
          (Drag card to test physics)
        </span>
      </div>
    </div>
  );
}

export default Lanyard;
