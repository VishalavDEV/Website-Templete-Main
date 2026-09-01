import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { ArrowRight, SkipForward } from 'lucide-react';

interface CinematicIntroProps {
  onComplete: () => void;
  forceReplay?: boolean;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete, forceReplay = false }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<'logo' | 'zoom' | 'split' | 'hidden'>('logo');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Check if intro already seen in this session, unless forceReplay is requested
    const hasSeenIntro = sessionStorage.getItem('vanta_intro_seen');
    if (hasSeenIntro && !forceReplay) {
      setIsDone(true);
      onComplete();
      return;
    }

    let animationFrameId: number;
    let renderer: THREE.WebGLRenderer;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let torusMesh: THREE.Mesh;
    let particlesMesh: THREE.Points;

    const currentRef = mountRef.current;
    if (!currentRef) return;

    // 1. Setup Scene, Camera, Renderer
    const width = currentRef.clientWidth || window.innerWidth;
    const height = currentRef.clientHeight || window.innerHeight;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 8;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentRef.appendChild(renderer.domElement);

    // 2. Geometry & Metallic Shader Torus Knot
    const geometry = new THREE.TorusKnotGeometry(1.6, 0.4, 128, 32);
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x121316,
      metalness: 0.9,
      roughness: 0.2,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: false,
    });
    torusMesh = new THREE.Mesh(geometry, material);
    scene.add(torusMesh);

    // Wireframe overlay
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0xccff00,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const wireframeMesh = new THREE.Mesh(geometry, wireframeMat);
    scene.add(wireframeMesh);

    // Particles around sculpture
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      particlePositions[i] = (Math.random() - 0.5) * 12;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xccff00,
      size: 0.04,
      transparent: true,
      opacity: 0.6,
    });
    particlesMesh = new THREE.Points(particleGeo, particleMat);
    scene.add(particlesMesh);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xccff00, 2);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight2.position.set(-5, -5, -2);
    scene.add(dirLight2);

    // 3. Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Rotation
      torusMesh.rotation.x = elapsedTime * 0.4;
      torusMesh.rotation.y = elapsedTime * 0.6;
      wireframeMesh.rotation.x = elapsedTime * 0.4;
      wireframeMesh.rotation.y = elapsedTime * 0.6;

      particlesMesh.rotation.y = elapsedTime * 0.1;

      // Phase-based camera zoom
      if (elapsedTime > 1.2 && elapsedTime < 2.5) {
        camera.position.z = THREE.MathUtils.lerp(camera.position.z, 3.5, 0.05);
      } else if (elapsedTime >= 2.5) {
        camera.position.z = THREE.MathUtils.lerp(camera.position.z, 0.5, 0.08);
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // 4. Timeline phase updates
    const timer1 = setTimeout(() => {
      setPhase('zoom');
    }, 1200);

    const timer2 = setTimeout(() => {
      setPhase('split');
    }, 2800);

    const timer3 = setTimeout(() => {
      setPhase('hidden');
      setIsDone(true);
      sessionStorage.setItem('vanta_intro_seen', 'true');
      onComplete();
    }, 3800);

    // Resize listener
    const handleResize = () => {
      if (!currentRef) return;
      const w = currentRef.clientWidth || window.innerWidth;
      const h = currentRef.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (currentRef && renderer.domElement) {
        currentRef.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [forceReplay, onComplete]);

  const handleSkip = () => {
    setPhase('hidden');
    setIsDone(true);
    sessionStorage.setItem('vanta_intro_seen', 'true');
    onComplete();
  };

  if (isDone || phase === 'hidden') return null;

  return (
    <div className="fixed inset-0 z-[10000] overflow-hidden bg-[#0d0e11] text-[#f8f7f4] select-none font-sans">
      {/* Top Left Branding */}
      <div className="absolute top-8 left-8 z-20 flex items-center gap-3">
        <div className="w-3 h-3 bg-lime-400 rounded-full animate-ping" />
        <span className="font-mono text-xs uppercase tracking-widest text-lime-400">
          VANTA FORM // AGENCY INTRO
        </span>
      </div>

      {/* Skip Button */}
      <button
        onClick={handleSkip}
        className="absolute top-8 right-8 z-30 flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-lime-400 hover:text-black border border-white/20 hover:border-lime-400 backdrop-blur-md rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 group cursor-pointer"
        aria-label="Skip Intro Animation"
      >
        <span>SKIP INTRO</span>
        <SkipForward className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* 3D Canvas Mount */}
      <div ref={mountRef} className="absolute inset-0 z-0 opacity-90" />

      {/* Split Overlay Curtains for Reveal */}
      <div
        className={`absolute inset-x-0 top-0 h-1/2 bg-[#0d0e11] z-10 transition-transform duration-1000 cubic-bezier(0.87, 0, 0.13, 1) ${
          phase === 'split' ? '-translate-y-full' : 'translate-y-0'
        }`}
      />
      <div
        className={`absolute inset-x-0 bottom-0 h-1/2 bg-[#0d0e11] z-10 transition-transform duration-1000 cubic-bezier(0.87, 0, 0.13, 1) ${
          phase === 'split' ? 'translate-y-full' : 'translate-y-0'
        }`}
      />

      {/* Animated Text Content Overlay */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none px-6 text-center">
        {/* Brand Name */}
        <div
          className={`transition-all duration-700 transform ${
            phase === 'logo'
              ? 'opacity-100 scale-100 translate-y-0'
              : phase === 'zoom'
              ? 'opacity-100 scale-110 -translate-y-4'
              : 'opacity-0 scale-125 -translate-y-12'
          }`}
        >
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter uppercase text-white font-serif">
            VANTA FORM
          </h1>
          <p className="font-mono text-lime-400 text-xs sm:text-sm tracking-[0.4em] uppercase mt-2">
            STRATEGY • DESIGN • TECHNOLOGY • AI
          </p>
        </div>

        {/* Dynamic Tagline Reveal */}
        <div
          className={`mt-8 transition-all duration-700 delay-300 transform ${
            phase === 'zoom'
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-8 scale-95'
          }`}
        >
          <p className="text-xl sm:text-3xl font-light tracking-wide max-w-2xl text-gray-300 uppercase">
            WE BUILD WHAT BUSINESS BECOMES NEXT.
          </p>
          <div className="w-16 h-0.5 bg-lime-400 mx-auto mt-4" />
        </div>
      </div>

      {/* Bottom Coordinates metadata */}
      <div className="absolute bottom-8 left-8 right-8 z-20 flex justify-between items-center text-[10px] font-mono text-gray-500 uppercase tracking-widest hidden sm:flex">
        <span>EST. 2026 // GLOBAL DIGITAL AGENCY</span>
        <span>LAT: 40.7128° N, LON: 74.0060° W</span>
        <span>STATUS: SYSTEM INITIALIZED</span>
      </div>
    </div>
  );
};
