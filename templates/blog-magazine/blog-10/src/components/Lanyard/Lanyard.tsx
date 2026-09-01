import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, ShieldCheck, RefreshCw } from 'lucide-react';

export const Lanyard: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const width = container.clientWidth || 380;
    const height = container.clientHeight || 460;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, -0.2, 5.2);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    keyLight.position.set(3, 5, 4);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(0xF27D26, 2.2, 10);
    fillLight.position.set(-3, -2, 2);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 1.5);
    rimLight.position.set(0, -4, -3);
    scene.add(rimLight);

    // Badge Group
    const badgeGroup = new THREE.Group();
    scene.add(badgeGroup);

    // Create Canvas Texture for Front
    const createFrontTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1024;
      canvas.height = 1440;
      const ctx = canvas.getContext('2d')!;

      // Background
      const grad = ctx.createLinearGradient(0, 0, 1024, 1440);
      grad.addColorStop(0, '#0a0a0a');
      grad.addColorStop(0.5, '#121214');
      grad.addColorStop(1, '#050505');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 1024, 1440);

      // Orange Accent border
      ctx.strokeStyle = '#F27D26';
      ctx.lineWidth = 14;
      ctx.strokeRect(40, 40, 944, 1360);

      ctx.strokeStyle = 'rgba(255,255,255,0.15)';
      ctx.lineWidth = 2;
      ctx.strokeRect(55, 55, 914, 1330);

      // Top Header
      ctx.fillStyle = '#F27D26';
      ctx.font = 'bold 36px monospace';
      ctx.textAlign = 'center';
      ctx.fillText('DISCOVERY SERIES · 2026', 512, 130);

      // Brand Logo Emblem
      ctx.fillStyle = '#ffffff';
      ctx.font = '900 80px sans-serif';
      ctx.fillText('TERRA.', 512, 260);

      ctx.fillStyle = '#a1a1aa';
      ctx.font = 'bold 30px monospace';
      ctx.fillText('OFFICIAL EXPEDITION PASS', 512, 320);

      // Divider line
      ctx.strokeStyle = '#F27D26';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(160, 370);
      ctx.lineTo(864, 370);
      ctx.stroke();

      // Cardholder Photo Box
      ctx.fillStyle = '#18181b';
      ctx.fillRect(262, 430, 500, 480);
      ctx.strokeStyle = 'rgba(255,255,255,0.2)';
      ctx.strokeRect(262, 430, 500, 480);

      // Stylized holographic globe watermark inside photo box
      ctx.fillStyle = 'rgba(242, 125, 38, 0.15)';
      ctx.beginPath();
      ctx.arc(512, 670, 160, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#F27D26';
      ctx.font = '900 46px sans-serif';
      ctx.fillText('FIELD EXPLORER', 512, 650);

      ctx.fillStyle = '#d4d4d8';
      ctx.font = 'bold 26px monospace';
      ctx.fillText('ID: TERRA-8848-EXP', 512, 710);

      // Badge Information Details
      ctx.textAlign = 'left';
      ctx.fillStyle = '#71717a';
      ctx.font = 'bold 24px monospace';
      ctx.fillText('CLEARANCE LEVEL', 120, 1000);
      ctx.fillStyle = '#ffffff';
      ctx.font = '900 36px monospace';
      ctx.fillText('ALPHA · HADAL / CRYOSPHERE', 120, 1050);

      ctx.fillStyle = '#71717a';
      ctx.font = 'bold 24px monospace';
      ctx.fillText('STATION ASSIGNMENT', 120, 1140);
      ctx.fillStyle = '#ffffff';
      ctx.font = '900 36px monospace';
      ctx.fillText('GLOBAL RESEARCH NETWORK', 120, 1190);

      // Holographic seal
      ctx.fillStyle = '#F27D26';
      ctx.textAlign = 'center';
      ctx.font = 'bold 22px monospace';
      ctx.fillText('★ VERIFIED CREDENTIAL ★', 512, 1310);

      const texture = new THREE.CanvasTexture(canvas);
      texture.anisotropy = 8;
      return texture;
    };

    // Create Canvas Texture for Back
    const createBackTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1024;
      canvas.height = 1440;
      const ctx = canvas.getContext('2d')!;

      // Background
      ctx.fillStyle = '#0a0a0a';
      ctx.fillRect(0, 0, 1024, 1440);

      ctx.strokeStyle = '#F27D26';
      ctx.lineWidth = 10;
      ctx.strokeRect(40, 40, 944, 1360);

      // Header
      ctx.fillStyle = '#F27D26';
      ctx.font = '900 68px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('FIELD NOTES', 512, 180);

      ctx.fillStyle = '#d4d4d8';
      ctx.font = '32px sans-serif';
      ctx.fillText('Stories. Places. Species. Discoveries.', 512, 270);

      // Barcode / Matrix Simulation
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(180, 360, 664, 160);
      ctx.fillStyle = '#000000';
      for (let i = 210; i < 814; i += 16) {
        const w = (i % 3 === 0 ? 9 : 4);
        ctx.fillRect(i, 380, w, 120);
      }

      // Rules text
      ctx.textAlign = 'left';
      ctx.fillStyle = '#a1a1aa';
      ctx.font = '26px sans-serif';
      const lines = [
        "1. This credential grants reader access to all",
        "   field notes, dispatch logs and raw telemetry.",
        "2. Observe with reverence. Preserve wilderness.",
        "3. Scientific truth overrides speculation.",
        "4. Always carry curiosity into the unknown."
      ];
      lines.forEach((line, idx) => {
        ctx.fillText(line, 140, 600 + idx * 55);
      });

      // Bottom Button prompt
      ctx.textAlign = 'center';
      ctx.fillStyle = '#F27D26';
      ctx.font = 'bold 36px monospace';
      ctx.fillText('SCAN / EXPLORE NOW', 512, 1000);

      ctx.strokeStyle = '#F27D26';
      ctx.lineWidth = 4;
      ctx.strokeRect(260, 940, 504, 90);

      // Logo
      ctx.fillStyle = '#52525b';
      ctx.font = 'bold 24px monospace';
      ctx.fillText('TERRA DISCOVERY COLLECTIVE · 2026', 512, 1280);

      const texture = new THREE.CanvasTexture(canvas);
      texture.anisotropy = 8;
      return texture;
    };

    const frontTex = createFrontTexture();
    const backTex = createBackTexture();

    // Badge Mesh (Card)
    const cardWidth = 2.0;
    const cardHeight = 2.9;
    const cardThickness = 0.04;
    const cardGeo = new THREE.BoxGeometry(cardWidth, cardHeight, cardThickness);

    const frontMat = new THREE.MeshStandardMaterial({
      map: frontTex,
      roughness: 0.25,
      metalness: 0.15
    });

    const backMat = new THREE.MeshStandardMaterial({
      map: backTex,
      roughness: 0.3,
      metalness: 0.1
    });

    const edgeMat = new THREE.MeshStandardMaterial({
      color: 0x1f2329,
      roughness: 0.4,
      metalness: 0.8
    });

    const materials = [
      edgeMat, // Right
      edgeMat, // Left
      edgeMat, // Top
      edgeMat, // Bottom
      frontMat, // Front
      backMat  // Back
    ];

    const cardMesh = new THREE.Mesh(cardGeo, materials);
    cardMesh.castShadow = true;
    cardMesh.receiveShadow = true;
    cardMesh.position.y = -0.3;
    badgeGroup.add(cardMesh);

    // Top Clip & Metal Ring
    const clipGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.35, 16);
    const clipMat = new THREE.MeshStandardMaterial({
      color: 0xd8d8d8,
      metalness: 0.95,
      roughness: 0.15
    });
    const clipMesh = new THREE.Mesh(clipGeo, clipMat);
    clipMesh.rotation.z = Math.PI / 2;
    clipMesh.position.set(0, cardHeight / 2 - 0.3 + 0.1, 0);
    badgeGroup.add(clipMesh);

    const ringGeo = new THREE.TorusGeometry(0.18, 0.035, 16, 32);
    const ringMesh = new THREE.Mesh(ringGeo, clipMat);
    ringMesh.position.set(0, cardHeight / 2 - 0.3 + 0.3, 0);
    badgeGroup.add(ringMesh);

    // Fabric Lanyard Straps (2 hanging ribbons)
    const strapMat = new THREE.MeshStandardMaterial({
      color: 0x1a1d22,
      roughness: 0.85,
      metalness: 0.05
    });

    const strapGeoLeft = new THREE.CylinderGeometry(0.04, 0.04, 2.5, 12);
    const strapLeft = new THREE.Mesh(strapGeoLeft, strapMat);
    strapLeft.position.set(-0.35, 2.3, 0);
    strapLeft.rotation.z = -0.15;
    scene.add(strapLeft);

    const strapGeoRight = new THREE.CylinderGeometry(0.04, 0.04, 2.5, 12);
    const strapRight = new THREE.Mesh(strapGeoRight, strapMat);
    strapRight.position.set(0.35, 2.3, 0);
    strapRight.rotation.z = 0.15;
    scene.add(strapRight);

    setIsLoaded(true);

    // Physics / Motion variables
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;
    let targetPosX = 0;
    let currentPosX = 0;
    let isPointerDown = false;
    let startPointerX = 0;
    let startPointerY = 0;

    const handlePointerDown = (e: PointerEvent) => {
      isPointerDown = true;
      setIsDragging(true);
      startPointerX = e.clientX;
      startPointerY = e.clientY;
    };

    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const normX = (e.clientX - rect.left) / rect.width - 0.5;
      const normY = (e.clientY - rect.top) / height - 0.5;

      if (isPointerDown) {
        const deltaX = (e.clientX - startPointerX) * 0.01;
        const deltaY = (e.clientY - startPointerY) * 0.01;
        targetRotationY += deltaX;
        targetRotationX += deltaY;
        targetPosX = normX * 1.5;
        startPointerX = e.clientX;
        startPointerY = e.clientY;
      } else {
        targetRotationY = normX * 0.6;
        targetRotationX = -normY * 0.4;
        targetPosX = normX * 0.4;
      }
    };

    const handlePointerUp = () => {
      isPointerDown = false;
      setIsDragging(false);
      targetPosX = 0;
    };

    container.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    // Animation Loop
    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      time += 0.02;
      animationFrameId = requestAnimationFrame(animate);

      // Natural pendulum resting sway
      const naturalSwayY = Math.sin(time * 0.8) * 0.08;
      const naturalSwayX = Math.cos(time * 0.6) * 0.04;

      currentRotationX += (targetRotationX + naturalSwayX - currentRotationX) * 0.08;
      currentRotationY += (targetRotationY + naturalSwayY - currentRotationY) * 0.08;
      currentPosX += (targetPosX - currentPosX) * 0.08;

      badgeGroup.rotation.x = currentRotationX;
      badgeGroup.rotation.y = currentRotationY;
      badgeGroup.position.x = currentPosX;
      badgeGroup.position.y = Math.sin(time * 1.2) * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-3xl bg-[#121214] border border-zinc-800 p-6 sm:p-10 shadow-2xl overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#F27D26]/10 blur-[120px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left 3D Canvas Stage */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          <div
            ref={containerRef}
            className="w-full max-w-[340px] h-[400px] sm:h-[450px] cursor-grab active:cursor-grabbing touch-none select-none relative"
          >
            {/* Hover instruction overlay */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-zinc-800 text-[9px] font-mono tracking-widest text-zinc-400 uppercase pointer-events-none whitespace-nowrap">
              {isDragging ? 'DRAGGING 3D PASS' : 'DRAG TO ROTATE & INSPECT'}
            </div>
          </div>
        </div>

        {/* Right Editorial Info & Actions */}
        <div className="lg:col-span-6 space-y-5 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F27D26]/10 border border-[#F27D26]/30 text-[#F27D26] text-[10px] font-mono font-bold tracking-[0.3em] uppercase">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>AUTHENTICATED FIELD PASS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-[0.95]">
            YOUR TERRA EXPLORER PASS
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            Every reader holds an explorer credential. Access raw field dispatches, telemetry logs, scientific notes, and high-resolution optical archives directly from our research bureaus.
          </p>

          <div className="p-4 rounded-2xl bg-[#0a0a0a] border border-zinc-800 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-500">SERIES:</span>
              <span className="text-white font-bold">2026 DISCOVERY ED.</span>
            </div>
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-500">STATUS:</span>
              <span className="text-[#F27D26] font-bold">VERIFIED ACCESS</span>
            </div>
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-500">BUREAU ACCESS:</span>
              <span className="text-white font-bold">ALL 8 DISCIPLINES</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              to="/field-notes"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#F27D26] hover:bg-[#ff9345] text-black font-black text-xs font-mono tracking-widest uppercase transition-all transform active:scale-95 shadow-xl shadow-[#F27D26]/20 cursor-pointer"
            >
              <span>ACCESS FIELD NOTES</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </Link>

            <Link
              to="/saved"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#18181b] hover:bg-zinc-800 text-white border border-zinc-800 text-xs font-mono tracking-widest uppercase transition-colors cursor-pointer"
            >
              <span>VIEW SAVED PASSES</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
