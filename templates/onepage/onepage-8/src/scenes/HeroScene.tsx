import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { isWebGLAvailable } from '../utils/webgl';
import { CursorState } from '../types';

interface HeroSceneProps {
  mouseX: number;
  mouseY: number;
  setCursorState: (state: CursorState) => void;
  onHoverSound: () => void;
}

export const HeroScene: React.FC<HeroSceneProps> = ({
  mouseX,
  mouseY,
  setCursorState,
  onHoverSound,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // References for Three.js state
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const coreGroupRef = useRef<THREE.Group | null>(null);
  const innerMeshRef = useRef<THREE.Mesh | null>(null);
  const outerWireframeRef = useRef<THREE.Mesh | null>(null);
  const icosahedronRef = useRef<THREE.Mesh | null>(null);
  const ringsRef = useRef<THREE.Group | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const reqIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isWebGLAvailable()) {
      setHasWebGL(false);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 7;
    cameraRef.current = camera;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    rendererRef.current = renderer;

    // Clear previous children
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0x0f172a, 2.5);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x06b6d4, 4.0);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xa855f7, 3.5);
    dirLight2.position.set(-5, -3, -2);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0x38bdf8, 5, 10);
    pointLight.position.set(0, 0, 2);
    scene.add(pointLight);

    // 5. Main Quantum-Mechanical Core Group
    const coreGroup = new THREE.Group();
    coreGroupRef.current = coreGroup;
    scene.add(coreGroup);

    // (A) Inner Liquid Metal Sphere (Displaced / Morphing Torus Knot / Sphere)
    const innerGeo = new THREE.TorusKnotGeometry(1.2, 0.42, 128, 32, 2, 3);
    const innerMat = new THREE.MeshPhysicalMaterial({
      color: 0x0891b2,
      emissive: 0x0284c7,
      emissiveIntensity: 0.25,
      roughness: 0.12,
      metalness: 0.95,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: false,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    innerMeshRef.current = innerMesh;
    coreGroup.add(innerMesh);

    // (B) Geometric Neural Lattice (Icosahedron Wireframe)
    const icoGeo = new THREE.IcosahedronGeometry(2.3, 2);
    const icoMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });
    const icosahedron = new THREE.Mesh(icoGeo, icoMat);
    icosahedronRef.current = icosahedron;
    coreGroup.add(icosahedron);

    // (C) Outer Quantum Dodecahedron Cage
    const dodecGeo = new THREE.DodecahedronGeometry(2.8, 1);
    const dodecMat = new THREE.MeshBasicMaterial({
      color: 0xc084fc,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending,
    });
    const outerWireframe = new THREE.Mesh(dodecGeo, dodecMat);
    outerWireframeRef.current = outerWireframe;
    coreGroup.add(outerWireframe);

    // (D) Mechanical Orbital Rings
    const ringsGroup = new THREE.Group();
    ringsRef.current = ringsGroup;
    coreGroup.add(ringsGroup);

    for (let r = 0; r < 3; r++) {
      const ringGeo = new THREE.TorusGeometry(3.1 + r * 0.35, 0.015, 16, 100);
      const ringMat = new THREE.MeshStandardMaterial({
        color: r === 0 ? 0x06b6d4 : r === 1 ? 0x818cf8 : 0x34d399,
        emissive: r === 0 ? 0x06b6d4 : 0x818cf8,
        emissiveIntensity: 0.6,
        roughness: 0.2,
        metalness: 0.8,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 3 + r * 0.4;
      ring.rotation.y = (Math.PI / 4) * r;
      ringsGroup.add(ring);
    }

    // 6. Ambient Particle Cloud (GPU Points)
    const particleCount = 1200;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const c1 = new THREE.Color(0x06b6d4);
    const c2 = new THREE.Color(0xa855f7);
    const c3 = new THREE.Color(0x38bdf8);

    for (let i = 0; i < particleCount; i++) {
      const radius = 3 + Math.random() * 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const mixed = Math.random() > 0.5 ? (Math.random() > 0.5 ? c1 : c2) : c3;
      colors[i * 3] = mixed.r;
      colors[i * 3 + 1] = mixed.g;
      colors[i * 3 + 2] = mixed.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    particlesRef.current = particles;
    scene.add(particles);

    // Resize Handler
    const handleResize = () => {
      if (!container || !camera || !renderer) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      reqIdRef.current = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Slow continuous kinetic rotation
      if (coreGroupRef.current) {
        coreGroupRef.current.rotation.y = elapsedTime * 0.15;
        coreGroupRef.current.rotation.x = Math.sin(elapsedTime * 0.1) * 0.1;
      }

      if (innerMeshRef.current) {
        innerMeshRef.current.rotation.z = elapsedTime * 0.25;
        innerMeshRef.current.rotation.x = elapsedTime * 0.2;
      }

      if (icosahedronRef.current) {
        icosahedronRef.current.rotation.y = -elapsedTime * 0.18;
        icosahedronRef.current.rotation.z = elapsedTime * 0.12;
      }

      if (outerWireframeRef.current) {
        outerWireframeRef.current.rotation.x = -elapsedTime * 0.08;
        outerWireframeRef.current.rotation.y = elapsedTime * 0.1;
      }

      if (ringsRef.current) {
        ringsRef.current.children.forEach((r, idx) => {
          r.rotation.z += 0.003 * (idx + 1);
        });
      }

      if (particlesRef.current) {
        particlesRef.current.rotation.y = elapsedTime * 0.03;
      }

      // Smooth camera interpolation toward mouse position
      if (cameraRef.current) {
        const targetX = mouseX * 0.8;
        const targetY = mouseY * 0.8;
        cameraRef.current.position.x += (targetX - cameraRef.current.position.x) * 0.04;
        cameraRef.current.position.y += (targetY - cameraRef.current.position.y) * 0.04;
        cameraRef.current.lookAt(0, 0, 0);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (reqIdRef.current) cancelAnimationFrame(reqIdRef.current);
      renderer.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      icoGeo.dispose();
      icoMat.dispose();
      dodecGeo.dispose();
      dodecMat.dispose();
    };
  }, []);

  // Update hover interaction states
  useEffect(() => {
    if (!innerMeshRef.current || !icosahedronRef.current || !outerWireframeRef.current) return;

    if (isHovered) {
      (innerMeshRef.current.material as THREE.MeshPhysicalMaterial).emissiveIntensity = 0.8;
      (innerMeshRef.current.material as THREE.MeshPhysicalMaterial).roughness = 0.02;
      (icosahedronRef.current.material as THREE.MeshStandardMaterial).opacity = 0.8;
      (outerWireframeRef.current.material as THREE.MeshBasicMaterial).opacity = 0.5;
      icosahedronRef.current.scale.set(1.15, 1.15, 1.15);
      outerWireframeRef.current.scale.set(1.2, 1.2, 1.2);
    } else {
      (innerMeshRef.current.material as THREE.MeshPhysicalMaterial).emissiveIntensity = 0.25;
      (innerMeshRef.current.material as THREE.MeshPhysicalMaterial).roughness = 0.12;
      (icosahedronRef.current.material as THREE.MeshStandardMaterial).opacity = 0.35;
      (outerWireframeRef.current.material as THREE.MeshBasicMaterial).opacity = 0.2;
      icosahedronRef.current.scale.set(1.0, 1.0, 1.0);
      outerWireframeRef.current.scale.set(1.0, 1.0, 1.0);
    }
  }, [isHovered]);

  return (
    <div
      ref={containerRef}
      id="hero-webgl-canvas-container"
      onMouseEnter={() => {
        setIsHovered(true);
        onHoverSound();
        setCursorState({ variant: 'interact', text: 'EXPLORE' });
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setCursorState({ variant: 'default', text: '' });
      }}
      className="w-full h-full absolute inset-0 z-0 overflow-hidden pointer-events-auto"
    >
      {!hasWebGL && (
        <div className="w-full h-full flex items-center justify-center bg-radial from-slate-900 to-[#030407]">
          <div className="w-72 h-72 rounded-full border border-cyan-500/30 flex items-center justify-center animate-pulse">
            <div className="w-48 h-48 rounded-full border border-purple-500/40 animate-spin" />
          </div>
        </div>
      )}
    </div>
  );
};
