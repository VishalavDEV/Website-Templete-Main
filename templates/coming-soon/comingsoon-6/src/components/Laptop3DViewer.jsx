import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { 
  RotateCw, Eye, Zap, Flame, Shield, Sparkles, 
  Maximize2, Play, Pause, Compass, Layers, CheckCircle2, 
  Cpu, BatteryCharging, Feather, Wifi, Volume2, ArrowRight
} from 'lucide-react';

const ORBIT_FEATURES = [
  {
    id: 'display',
    title: '1200-Nit Quantum OLED',
    category: 'Visual Architecture',
    angle: 0, // Front (0 deg)
    icon: Eye,
    metric: '240Hz ProMotion • 3.2K',
    desc: 'Individually lit sub-pixels with infinite contrast, 0.1ms response time, and 100% DCI-P3 cinematic mastering.',
    specs: ['3200 x 2000 Native Matrix', '1,000,000:1 Dynamic Contrast', 'True 10-Bit Color Depth']
  },
  {
    id: 'silicon',
    title: '3nm Neural Silicon Engine',
    category: 'Compute & AI',
    angle: Math.PI * 0.33, // 60 deg
    icon: Cpu,
    metric: '68 TOPS Sustained AI',
    desc: 'Custom monolithic silicon balancing heavy generative ML workflows and gaming renders with sub-15W efficiency.',
    specs: ['16 Hybrid CPU Cores', '32-Core Neural Processing Cluster', 'Unified 512-Bit Memory']
  },
  {
    id: 'battery',
    title: '24-Hour Adaptive Cell',
    category: 'Power Engineering',
    angle: Math.PI * 0.66, // 120 deg
    icon: BatteryCharging,
    metric: '0 to 80% in 28 Mins',
    desc: 'Silicon-carbon high-energy anode battery providing all-day untethered stamina with 140W GaN fast charging.',
    specs: ['99.8Wh Airline Max Capacity', '1,500 Full Charge Cycle Lifespan', 'Dual Bi-Directional USB-PD']
  },
  {
    id: 'exhaust',
    title: 'Liquid Metal Vapor Loop',
    category: 'Thermal Dynamics',
    angle: Math.PI, // 180 deg (Rear)
    icon: Flame,
    metric: '< 0.5dB Whisper Fanless',
    desc: 'Dual-phase sintered copper vapor chambers paired with Gallium-Indium liquid metal thermal conductor.',
    specs: ['65W Sustained Thermal Headroom', 'Zero-Dust Self-Cleaning Channels', 'Superconducting Heat Pipes']
  },
  {
    id: 'connectivity',
    title: 'Dual 80Gbps Thunderbolt 5',
    category: 'High-Speed I/O',
    angle: Math.PI * 1.33, // 240 deg (Left side)
    icon: Wifi,
    metric: '80Gbps Bandwidth',
    desc: 'Next-gen unified bus architecture driving triple 8K displays, external eGPU compute, and Wi-Fi 7 wireless.',
    specs: ['2x Thunderbolt 5 (80Gbps)', 'Wi-Fi 7 Tri-Band (320MHz)', 'Bluetooth 5.4 Low-Energy']
  },
  {
    id: 'chassis',
    title: '0.89cm Aerospace Titanium',
    category: 'Structural Precision',
    angle: Math.PI * 1.66, // 300 deg (Right side)
    icon: Feather,
    metric: '890g Total Chassis Weight',
    desc: 'Laser-milled Grade-5 titanium unibody offering the rigidity of steel at a fraction of the mass.',
    specs: ['0.89cm Tapered Profile', 'Grade-5 Titanium Shell', '100% Recycled Magnesium Core']
  }
];

export default function Laptop3DViewer({ onSelectFeature }) {
  const mountRef = useRef(null);
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [isAutoRotate, setIsAutoRotate] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [viewMode, setViewMode] = useState('3d'); // '3d' | 'render'

  // Rotation references for 60FPS sync
  const targetRotationRef = useRef({ x: 0.22, y: 0 });
  const currentRotationRef = useRef({ x: 0.22, y: 0 });
  const targetZoomRef = useRef(6.2);
  const currentZoomRef = useRef(6.2);
  const isAutoRotateRef = useRef(true);
  isAutoRotateRef.current = isAutoRotate;

  useEffect(() => {
    if (viewMode !== '3d') return;

    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight || 540;

    // 1. Scene & Perspective Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 6.2);

    // 2. High-Performance WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    mount.innerHTML = '';
    mount.appendChild(renderer.domElement);

    // 3. Cinematic Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const cyanKeyLight = new THREE.DirectionalLight(0x00F0FF, 3.8);
    cyanKeyLight.position.set(-6, 5, 6);
    scene.add(cyanKeyLight);

    const magentaRimLight = new THREE.DirectionalLight(0xD946EF, 3.4);
    magentaRimLight.position.set(6, -2, -6);
    scene.add(magentaRimLight);

    const topWhiteFill = new THREE.DirectionalLight(0xffffff, 2.2);
    topWhiteFill.position.set(0, 8, 3);
    scene.add(topWhiteFill);

    // RGB Base Underglow
    const underGlow = new THREE.PointLight(0x00F0FF, 3.0, 9);
    underGlow.position.set(0, -1.2, 0);
    scene.add(underGlow);

    // 4. Laptop Root Group (will rotate in 360 deg)
    const laptopGroup = new THREE.Group();
    scene.add(laptopGroup);

    // --- MATERIALS ---
    const brushedTitaniumMat = new THREE.MeshStandardMaterial({
      color: 0x18202c,
      roughness: 0.2,
      metalness: 0.9,
    });

    const darkDeckMat = new THREE.MeshStandardMaterial({
      color: 0x101622,
      roughness: 0.3,
      metalness: 0.8,
    });

    const keycapMat = new THREE.MeshStandardMaterial({
      color: 0x080c14,
      roughness: 0.35,
      metalness: 0.4,
    });

    const rgbBarMat = new THREE.MeshBasicMaterial({
      color: 0x00F0FF,
    });

    const trackpadMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.12,
      metalness: 0.95,
    });

    // --- SCREEN CANVAS TEXTURE (OLED Matrix matching generated render) ---
    const screenCanvas = document.createElement('canvas');
    screenCanvas.width = 1024;
    screenCanvas.height = 640;
    const sCtx = screenCanvas.getContext('2d');

    const updateScreenTexture = (t) => {
      // Cosmic cyber gradient
      const grad = sCtx.createLinearGradient(0, 0, 1024, 640);
      grad.addColorStop(0, '#020b18');
      grad.addColorStop(0.35, '#07244a');
      grad.addColorStop(0.7, '#4a044e');
      grad.addColorStop(1, '#020617');
      sCtx.fillStyle = grad;
      sCtx.fillRect(0, 0, 1024, 640);

      // Neon Tunnel Geometric vectors
      sCtx.lineWidth = 3.5;
      const numLines = 6;
      for (let i = 0; i < numLines; i++) {
        const offset = (t * 40 + i * 90) % 500;
        const color = i % 2 === 0 ? '#00F0FF' : '#D946EF';
        sCtx.strokeStyle = color;
        sCtx.shadowColor = color;
        sCtx.shadowBlur = 18;

        sCtx.strokeRect(512 - offset, 320 - offset * 0.6, offset * 2, offset * 1.2);
      }
      sCtx.shadowBlur = 0;

      // Brand Typography on Screen
      sCtx.fillStyle = '#FFFFFF';
      sCtx.font = '800 48px Outfit, sans-serif';
      sCtx.textAlign = 'center';
      sCtx.fillText('AURA PRO X1', 512, 290);

      sCtx.fillStyle = '#00F0FF';
      sCtx.font = '600 20px "Space Grotesk", monospace';
      sCtx.fillText('// 3NM NEURAL SILICON • QUANTUM MATRIX', 512, 335);
    };

    const screenTexture = new THREE.CanvasTexture(screenCanvas);
    const screenMat = new THREE.MeshBasicMaterial({ map: screenTexture });

    // --- BASE CHASSIS ---
    const baseW = 3.6;
    const baseD = 2.4;
    const baseH = 0.12;

    const baseGeo = new THREE.BoxGeometry(baseW, baseH, baseD);
    const baseMesh = new THREE.Mesh(baseGeo, brushedTitaniumMat);
    baseMesh.position.y = -baseH / 2;
    laptopGroup.add(baseMesh);

    // Keyboard Deck Inset
    const deckGeo = new THREE.PlaneGeometry(baseW * 0.94, baseD * 0.92);
    const deckMesh = new THREE.Mesh(deckGeo, darkDeckMat);
    deckMesh.rotation.x = -Math.PI / 2;
    deckMesh.position.y = 0.001;
    baseMesh.add(deckMesh);

    // Trackpad
    const padGeo = new THREE.PlaneGeometry(1.2, 0.75);
    const padMesh = new THREE.Mesh(padGeo, trackpadMat);
    padMesh.rotation.x = -Math.PI / 2;
    padMesh.position.set(0, 0.003, 0.65);
    baseMesh.add(padMesh);

    // Keyboard Keys
    const keyRows = 5;
    const keyCols = 14;
    const keyW = 0.18;
    const keyD = 0.18;
    const keyH = 0.03;
    const keyGeo = new THREE.BoxGeometry(keyW, keyH, keyD);

    for (let r = 0; r < keyRows; r++) {
      for (let c = 0; c < keyCols; c++) {
        const kMesh = new THREE.Mesh(keyGeo, keycapMat);
        const kX = (c - (keyCols - 1) / 2) * (keyW + 0.035);
        const kZ = -0.35 + (r - (keyRows - 1) / 2) * (keyD + 0.035);
        kMesh.position.set(kX, keyH / 2 + 0.002, kZ);
        baseMesh.add(kMesh);
      }
    }

    // Edge Lightbar (Front bottom rim)
    const barGeo = new THREE.BoxGeometry(baseW * 0.96, 0.025, 0.025);
    const barMesh = new THREE.Mesh(barGeo, rgbBarMat);
    barMesh.position.set(0, -baseH / 2 + 0.01, baseD / 2 + 0.01);
    baseMesh.add(barMesh);

    // Side Thunderbolt 5 Ports
    const portMat = new THREE.MeshBasicMaterial({ color: 0x00F0FF });
    const portGeo = new THREE.BoxGeometry(0.02, 0.03, 0.08);
    [-0.4, -0.1, 0.2].forEach((offsetZ) => {
      const pLeft = new THREE.Mesh(portGeo, portMat);
      pLeft.position.set(-baseW / 2 - 0.005, -0.02, offsetZ);
      baseMesh.add(pLeft);

      const pRight = new THREE.Mesh(portGeo, portMat);
      pRight.position.set(baseW / 2 + 0.005, -0.02, offsetZ);
      baseMesh.add(pRight);
    });

    // --- SCREEN LID (112 Degree Opening) ---
    const lidGroup = new THREE.Group();
    lidGroup.position.set(0, 0, -baseD / 2);
    laptopGroup.add(lidGroup);
    lidGroup.rotation.x = -1.95;

    // Back shell
    const lidThickness = 0.06;
    const lidGeo = new THREE.BoxGeometry(baseW, baseD, lidThickness);
    const lidMesh = new THREE.Mesh(lidGeo, brushedTitaniumMat);
    lidMesh.position.set(0, baseD / 2, -lidThickness / 2);
    lidGroup.add(lidMesh);

    // Back Outer Glowing Monogram Logo
    const logoGeo = new THREE.CircleGeometry(0.28, 32);
    const logoMat = new THREE.MeshBasicMaterial({ color: 0x00F0FF });
    const logoMesh = new THREE.Mesh(logoGeo, logoMat);
    logoMesh.position.set(0, baseD / 2, -lidThickness - 0.002);
    logoMesh.rotation.y = Math.PI;
    lidGroup.add(logoMesh);

    // Active Screen Plane
    const screenW = baseW * 0.94;
    const screenH = baseD * 0.90;
    const screenGeo = new THREE.PlaneGeometry(screenW, screenH);
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.set(0, baseD / 2, 0.002);
    lidGroup.add(screenMesh);

    // --- 6 3D ORBITING HOLOGRAPHIC FEATURE NODES ---
    const orbitNodesGroup = new THREE.Group();
    laptopGroup.add(orbitNodesGroup);

    const orbitRadius = 2.8;
    const nodeMeshes = [];

    ORBIT_FEATURES.forEach((feature, idx) => {
      const nodeAnchor = new THREE.Group();
      const nodeX = Math.sin(feature.angle) * orbitRadius;
      const nodeZ = Math.cos(feature.angle) * orbitRadius;
      const nodeY = idx % 2 === 0 ? 0.4 : -0.2;
      nodeAnchor.position.set(nodeX, nodeY, nodeZ);

      // Glowing Node Sphere
      const sphereGeo = new THREE.SphereGeometry(0.12, 16, 16);
      const sphereMat = new THREE.MeshBasicMaterial({
        color: idx % 2 === 0 ? 0x00F0FF : 0xD946EF,
      });
      const sphere = new THREE.Mesh(sphereGeo, sphereMat);
      nodeAnchor.add(sphere);

      // Outer Glowing Ring
      const ringGeo = new THREE.RingGeometry(0.16, 0.22, 24);
      const ringMat = new THREE.MeshBasicMaterial({
        color: idx % 2 === 0 ? 0x00F0FF : 0xD946EF,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.7,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      nodeAnchor.add(ring);

      // Pulsing Connecting Laser Line to Laptop Center
      const lineMat = new THREE.LineBasicMaterial({
        color: idx % 2 === 0 ? 0x00F0FF : 0xD946EF,
        transparent: true,
        opacity: 0.35,
      });
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(-nodeX * 0.6, -nodeY, -nodeZ * 0.6),
      ]);
      const laserLine = new THREE.Line(lineGeo, lineMat);
      nodeAnchor.add(laserLine);

      orbitNodesGroup.add(nodeAnchor);
      nodeMeshes.push({ anchor: nodeAnchor, ring });
    });

    // --- MOUSE & TOUCH CONTROLS ---
    let prevMouseX = 0;
    let prevMouseY = 0;

    const onMouseDown = (e) => {
      setIsDragging(true);
      setIsAutoRotate(false);
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;

      targetRotationRef.current.y += deltaX * 0.008;
      targetRotationRef.current.x = Math.max(-0.35, Math.min(1.1, targetRotationRef.current.x + deltaY * 0.006));
    };

    const onMouseUp = () => setIsDragging(false);

    const onWheel = (e) => {
      e.preventDefault();
      targetZoomRef.current = Math.max(3.8, Math.min(8.5, targetZoomRef.current + e.deltaY * 0.004));
    };

    const domEl = renderer.domElement;
    domEl.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    domEl.addEventListener('wheel', onWheel, { passive: false });

    // Mobile Touch
    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        setIsDragging(true);
        setIsAutoRotate(false);
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };
    const onTouchMove = (e) => {
      if (isDragging && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - prevMouseX;
        const deltaY = e.touches[0].clientY - prevMouseY;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;

        targetRotationRef.current.y += deltaX * 0.008;
        targetRotationRef.current.x = Math.max(-0.35, Math.min(1.1, targetRotationRef.current.x + deltaY * 0.006));
      }
    };
    const onTouchEnd = () => setIsDragging(false);

    domEl.addEventListener('touchstart', onTouchStart);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onTouchEnd);

    // --- ANIMATION & SYNCHRONIZATION LOOP ---
    let animId;
    let clock = 0;

    const animate = () => {
      clock += 0.015;

      // 360 Continuous Auto-Rotation
      if (isAutoRotateRef.current) {
        targetRotationRef.current.y += 0.007;
      }

      // Smooth camera damping
      currentRotationRef.current.x += (targetRotationRef.current.x - currentRotationRef.current.x) * 0.08;
      currentRotationRef.current.y += (targetRotationRef.current.y - currentRotationRef.current.y) * 0.08;
      currentZoomRef.current += (targetZoomRef.current - currentZoomRef.current) * 0.08;

      laptopGroup.rotation.x = currentRotationRef.current.x;
      laptopGroup.rotation.y = currentRotationRef.current.y;
      laptopGroup.position.y = Math.sin(clock * 1.4) * 0.08 - 0.15;

      camera.position.z = currentZoomRef.current;

      // Update screen graphics
      updateScreenTexture(clock);
      screenTexture.needsUpdate = true;

      // Orbiting node ring rotations & face camera
      nodeMeshes.forEach((node, i) => {
        node.ring.rotation.z += 0.02;
        node.anchor.rotation.y = -laptopGroup.rotation.y;
      });

      // Synchronize closest facing feature in 360 rotation
      const normalizedAngle = (-currentRotationRef.current.y % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
      
      let closestIdx = 0;
      let minDiff = Infinity;
      ORBIT_FEATURES.forEach((feat, idx) => {
        let diff = Math.abs(normalizedAngle - feat.angle);
        if (diff > Math.PI) diff = Math.PI * 2 - diff;
        if (diff < minDiff) {
          minDiff = diff;
          closestIdx = idx;
        }
      });

      setActiveFeatureIndex(closestIdx);

      // Underglow RGB pulse
      const color = new THREE.Color().setHSL((clock * 0.08) % 1, 1, 0.5);
      underGlow.color = color;
      rgbBarMat.color = color;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!mount) return;
      const newW = mount.clientWidth;
      const newH = mount.clientHeight || 540;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      domEl.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      domEl.removeEventListener('wheel', onWheel);
      domEl.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      if (mount && renderer.domElement) mount.innerHTML = '';
      renderer.dispose();
    };
  }, [viewMode]);

  const handleSelectFeatureByButton = (index) => {
    setActiveFeatureIndex(index);
    const targetAngle = -ORBIT_FEATURES[index].angle;
    targetRotationRef.current = { x: 0.22, y: targetAngle };
    setIsAutoRotate(false);
    onSelectFeature?.(ORBIT_FEATURES[index]);
  };

  const activeFeature = ORBIT_FEATURES[activeFeatureIndex];

  return (
    <div className="relative w-full max-w-6xl mx-auto my-12 px-4 sm:px-6">
      
      {/* Visualizer Card */}
      <div className="relative rounded-3xl glass-panel-glow p-5 sm:p-8 overflow-hidden border border-cyber-cyan/30 shadow-2xl">
        
        {/* Top Header & View Modes */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-4 relative z-20">
          
          <div>
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyber-cyan animate-ping" />
              <h3 className="font-display font-black text-xl sm:text-2xl text-white">
                AURA PRO X1 — 360° Rotating Feature Showcase
              </h3>
            </div>
            <p className="text-xs font-mono text-slate-400 mt-1">
              Interactive 360° rotation with real-time orbiting feature nodes • Drag or pick a pillar below
            </p>
          </div>

          <div className="flex items-center space-x-2">
            
            {/* View Mode Toggle: 3D vs 8K Render */}
            <div className="flex items-center p-1 rounded-xl bg-obsidian-900/90 border border-white/10 text-xs font-mono">
              <button
                onClick={() => setViewMode('3d')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  viewMode === '3d'
                    ? 'bg-cyber-cyan text-obsidian-950 font-bold shadow-neon-cyan'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                3D Interactive 360°
              </button>
              <button
                onClick={() => setViewMode('render')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  viewMode === 'render'
                    ? 'bg-cyber-cyan text-obsidian-950 font-bold shadow-neon-cyan'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                8K Cinematic Studio
              </button>
            </div>

            {/* Auto Rotate Toggle */}
            {viewMode === '3d' && (
              <button
                onClick={() => setIsAutoRotate(!isAutoRotate)}
                className={`p-2 rounded-xl border transition-colors ${
                  isAutoRotate
                    ? 'bg-cyber-violet/20 border-cyber-violet/40 text-cyber-violet'
                    : 'bg-white/5 border-white/10 text-slate-400'
                }`}
                title={isAutoRotate ? 'Pause 360° Auto-Rotate' : 'Start 360° Auto-Rotate'}
              >
                {isAutoRotate ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
            )}

          </div>

        </div>

        {/* Orbiting Feature Node Switcher Pills */}
        <div className="flex flex-wrap items-center gap-1.5 mb-4 relative z-20">
          {ORBIT_FEATURES.map((feat, idx) => {
            const Icon = feat.icon;
            const isActive = activeFeatureIndex === idx;
            return (
              <button
                key={feat.id}
                onClick={() => handleSelectFeatureByButton(idx)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 flex items-center space-x-1.5 ${
                  isActive
                    ? 'bg-cyber-cyan text-obsidian-950 font-bold shadow-neon-cyan scale-105'
                    : 'bg-obsidian-900/80 border border-white/10 text-slate-300 hover:border-cyber-cyan/50'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{feat.title.split(' ')[0]} {feat.title.split(' ')[1] || ''}</span>
              </button>
            );
          })}
        </div>

        {/* Viewport Area: 3D Canvas OR 8K Cinematic Render */}
        {viewMode === '3d' ? (
          <div className="relative w-full h-[400px] sm:h-[480px] md:h-[520px] rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing bg-radial-gradient">
            <div ref={mountRef} className="w-full h-full" />

            {/* Bottom floating instruction badge */}
            <div className="absolute bottom-4 left-4 pointer-events-none z-10 hidden sm:flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-obsidian-900/80 border border-white/10 text-[11px] font-mono text-slate-300 backdrop-blur-md">
              <Compass className="w-3.5 h-3.5 text-cyber-cyan animate-spin-slow" />
              <span>Drag to spin 360° • Floating nodes rotate with laptop</span>
            </div>

            <div className="absolute top-4 right-4 pointer-events-none z-10 flex items-center space-x-2 px-3 py-1.5 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-[11px] font-mono text-cyber-cyan backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse" />
              <span>WebGL 60FPS</span>
            </div>
          </div>
        ) : (
          <div className="relative w-full h-[400px] sm:h-[480px] md:h-[520px] rounded-2xl overflow-hidden flex items-center justify-center bg-obsidian-950 p-4">
            <img
              src="/laptop_hero.jpg"
              alt="AURA PRO X1 8K Octane Render"
              className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,240,255,0.4)] rounded-xl animate-fade-in"
            />
            <div className="absolute bottom-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-obsidian-900/80 border border-white/10 text-xs font-mono text-white">
              ✨ 8K Octane Studio Master
            </div>
          </div>
        )}

        {/* Live Synchronized Active Feature Detail Card */}
        {activeFeature && (
          <div className="mt-6 p-5 sm:p-6 rounded-2xl glass-panel border border-cyber-cyan/30 animate-fade-in transition-all duration-300 shadow-glass-card">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-white/10 pb-4 mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-11 h-11 rounded-xl bg-cyber-cyan/15 border border-cyber-cyan/40 flex items-center justify-center text-cyber-cyan shadow-neon-cyan">
                  <activeFeature.icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-cyber-cyan uppercase tracking-widest">
                    // ROTATING ANGLE SPECIFICATION • {activeFeature.category}
                  </span>
                  <h4 className="font-display font-black text-xl sm:text-2xl text-white mt-0.5">
                    {activeFeature.title}
                  </h4>
                </div>
              </div>

              <div className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-cyber-cyan/20 to-fuchsia-500/20 border border-cyber-cyan/40 text-cyber-cyan font-mono text-xs font-bold self-start md:self-auto shadow-neon-cyan">
                {activeFeature.metric}
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              {activeFeature.desc}
            </p>

            {/* Spec Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {activeFeature.specs.map((spec, i) => (
                <div key={i} className="flex items-center space-x-2 p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyber-cyan shrink-0" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>

          </div>
        )}

      </div>

    </div>
  );
}
