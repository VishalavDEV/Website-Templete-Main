import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { MaterialConfig } from '../types';

interface FonixCanvas3DProps {
  scrollProgress?: number;
  materialConfig?: MaterialConfig;
  interactive?: boolean;
  activeSection?: string;
  onFpsUpdate?: (fps: number) => void;
}

export const FonixCanvas3D: React.FC<FonixCanvas3DProps> = ({
  scrollProgress = 0,
  materialConfig,
  interactive = true,
  activeSection = 'hero',
  onFpsUpdate,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  
  // 3D Objects refs
  const coreGroupRef = useRef<THREE.Group | null>(null);
  const outerCageRef = useRef<THREE.Mesh | null>(null);
  const innerCoreRef = useRef<THREE.Mesh | null>(null);
  const gyroRing1Ref = useRef<THREE.Mesh | null>(null);
  const gyroRing2Ref = useRef<THREE.Mesh | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const lightKeyRef = useRef<THREE.DirectionalLight | null>(null);
  const lightRimRef = useRef<THREE.PointLight | null>(null);

  // Mouse / Interaction state
  const mouseRef = useRef<{ x: number; y: number; targetX: number; targetY: number; isDown: boolean; lastX: number; lastY: number }>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    isDown: false,
    lastX: 0,
    lastY: 0,
  });

  const animFrameId = useRef<number | null>(null);
  const clockRef = useRef(new THREE.Clock());
  const fpsStatsRef = useRef({ frames: 0, prevTime: performance.now() });

  // Store original geometry positions for vertex wave deformation
  const originalInnerPositions = useRef<Float32Array | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Setup Scene, Camera, Renderer
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);
    cameraRef.current = camera;

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

    // Clean container before appending
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // 2. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0x0a0f1d, 2.5);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x5eead4, 3.5);
    dirLight1.position.set(5, 5, 4);
    scene.add(dirLight1);
    lightKeyRef.current = dirLight1;

    const dirLight2 = new THREE.DirectionalLight(0x818cf8, 2.8);
    dirLight2.position.set(-5, -3, -2);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0xf59e0b, 4, 15);
    pointLight.position.set(0, 0, 2);
    scene.add(pointLight);
    lightRimRef.current = pointLight;

    // 3. Create Hierarchical Core Group
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);
    coreGroupRef.current = coreGroup;

    // A. Outer Translucent Crystalline Cage (Icosahedron)
    const outerGeometry = new THREE.IcosahedronGeometry(2.1, 1);
    const outerMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      roughness: materialConfig?.roughness ?? 0.12,
      metalness: materialConfig?.metalness ?? 0.1,
      transmission: materialConfig?.transmission ?? 0.92,
      ior: materialConfig?.ior ?? 1.52,
      thickness: materialConfig?.thickness ?? 1.4,
      transparent: true,
      opacity: 0.85,
      wireframe: materialConfig?.wireframe ?? false,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });
    const outerMesh = new THREE.Mesh(outerGeometry, outerMaterial);
    coreGroup.add(outerMesh);
    outerCageRef.current = outerMesh;

    // B. Inner Deforming Liquid Core (Subdivided Sphere)
    const innerGeometry = new THREE.SphereGeometry(1.25, 48, 48);
    originalInnerPositions.current = new Float32Array(innerGeometry.attributes.position.array);
    const innerMaterial = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.95,
      roughness: 0.15,
      wireframe: false,
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    coreGroup.add(innerMesh);
    innerCoreRef.current = innerMesh;

    // C. Kinetic Orbital Gyro Rings
    const ringGeo1 = new THREE.TorusGeometry(2.6, 0.025, 16, 100);
    const ringMat1 = new THREE.MeshStandardMaterial({
      color: 0x5eead4,
      emissive: 0x14b8a6,
      emissiveIntensity: 0.6,
      metalness: 0.8,
      roughness: 0.2,
    });
    const gyro1 = new THREE.Mesh(ringGeo1, ringMat1);
    gyro1.rotation.x = Math.PI / 3;
    coreGroup.add(gyro1);
    gyroRing1Ref.current = gyro1;

    const ringGeo2 = new THREE.TorusGeometry(2.9, 0.02, 16, 100);
    const ringMat2 = new THREE.MeshStandardMaterial({
      color: 0x818cf8,
      emissive: 0x6366f1,
      emissiveIntensity: 0.5,
      metalness: 0.8,
      roughness: 0.2,
    });
    const gyro2 = new THREE.Mesh(ringGeo2, ringMat2);
    gyro2.rotation.y = Math.PI / 4;
    coreGroup.add(gyro2);
    gyroRing2Ref.current = gyro2;

    // D. Particle Cloud (Sonic Photons)
    const particleCount = 1800;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x5eead4);
    const color2 = new THREE.Color(0x818cf8);
    const color3 = new THREE.Color(0xf59e0b);

    for (let i = 0; i < particleCount; i++) {
      const radius = 3.2 + Math.random() * 5.0;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const mixedColor = i % 3 === 0 ? color1 : i % 3 === 1 ? color2 : color3;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);
    particlesRef.current = particles;

    // 4. Mouse / Touch Events
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const rawX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const rawY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseRef.current.targetX = rawX * 0.8;
      mouseRef.current.targetY = rawY * 0.8;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        const rawX = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
        const rawY = -(((touch.clientY - rect.top) / rect.height) * 2 - 1);
        mouseRef.current.targetX = rawX * 0.6;
        mouseRef.current.targetY = rawY * 0.6;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // 5. Resize Handling with ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: w, height: h } = entry.contentRect;
        if (w === 0 || h === 0) return;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }
    });
    resizeObserver.observe(container);

    // 6. Animation Render Loop
    const animate = () => {
      animFrameId.current = requestAnimationFrame(animate);

      const elapsedTime = clockRef.current.getElapsedTime();
      const speed = materialConfig?.speed ?? 1.0;
      const t = elapsedTime * speed;

      // Smooth mouse interpolation (spring inertia)
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Group rotation & parallax
      if (coreGroupRef.current) {
        coreGroupRef.current.rotation.y = t * 0.2 + mouseRef.current.x * 0.7;
        coreGroupRef.current.rotation.x = Math.sin(t * 0.15) * 0.15 - mouseRef.current.y * 0.5;
        coreGroupRef.current.position.x = mouseRef.current.x * 0.4;
        coreGroupRef.current.position.y = mouseRef.current.y * 0.3;
      }

      // Gyro rings counter-rotations
      if (gyroRing1Ref.current) {
        gyroRing1Ref.current.rotation.z = t * 0.4;
        gyroRing1Ref.current.rotation.x = Math.PI / 3 + Math.sin(t * 0.3) * 0.2;
      }
      if (gyroRing2Ref.current) {
        gyroRing2Ref.current.rotation.y = t * -0.3;
        gyroRing2Ref.current.rotation.z = Math.PI / 4 + Math.cos(t * 0.25) * 0.2;
      }

      // Dynamic vertex deformation for inner liquid core (Sonic Harmonic wave simulation)
      if (innerCoreRef.current && originalInnerPositions.current) {
        const geo = innerCoreRef.current.geometry;
        const posAttr = geo.attributes.position;
        const orig = originalInnerPositions.current;
        const distortion = materialConfig?.distortion ?? 0.28;
        const reactivity = materialConfig?.audioReactivity ?? 1.0;

        for (let i = 0; i < posAttr.count; i++) {
          const ox = orig[i * 3];
          const oy = orig[i * 3 + 1];
          const oz = orig[i * 3 + 2];

          // Harmonic wave equation in spherical space
          const wave =
            Math.sin(ox * 2.8 + t * 2.5) *
            Math.cos(oy * 2.5 + t * 2.0) *
            Math.sin(oz * 2.2 + t * 1.8);

          const displacement = 1.0 + wave * distortion * reactivity;

          posAttr.setXYZ(i, ox * displacement, oy * displacement, oz * displacement);
        }
        posAttr.needsUpdate = true;
        geo.computeVertexNormals();
      }

      // Particle orbital rotation
      if (particlesRef.current) {
        particlesRef.current.rotation.y = t * 0.06;
        particlesRef.current.rotation.x = Math.sin(t * 0.04) * 0.1;
      }

      // FPS tracking for telemetry
      fpsStatsRef.current.frames++;
      const now = performance.now();
      if (now >= fpsStatsRef.current.prevTime + 1000) {
        const fps = Math.round((fpsStatsRef.current.frames * 1000) / (now - fpsStatsRef.current.prevTime));
        onFpsUpdate?.(fps);
        fpsStatsRef.current.frames = 0;
        fpsStatsRef.current.prevTime = now;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      renderer.dispose();
    };
  }, []);

  // Update material properties dynamically when props change
  useEffect(() => {
    if (!outerCageRef.current) return;
    const mat = outerCageRef.current.material as THREE.MeshPhysicalMaterial;
    if (materialConfig) {
      mat.roughness = materialConfig.roughness;
      mat.metalness = materialConfig.metalness;
      mat.transmission = materialConfig.transmission;
      mat.ior = materialConfig.ior;
      mat.thickness = materialConfig.thickness;
      mat.wireframe = materialConfig.wireframe;

      // Color scheme adjustments
      if (materialConfig.colorScheme === 'luminescence') {
        mat.color.setHex(0x5eead4);
        if (lightKeyRef.current) lightKeyRef.current.color.setHex(0x5eead4);
      } else if (materialConfig.colorScheme === 'nebula') {
        mat.color.setHex(0x818cf8);
        if (lightKeyRef.current) lightKeyRef.current.color.setHex(0xa855f7);
      } else if (materialConfig.colorScheme === 'solar') {
        mat.color.setHex(0xf59e0b);
        if (lightKeyRef.current) lightKeyRef.current.color.setHex(0xfbbf24);
      } else {
        // Obsidian
        mat.color.setHex(0xffffff);
        if (lightKeyRef.current) lightKeyRef.current.color.setHex(0x5eead4);
      }
    }
  }, [materialConfig]);

  // Scroll reaction mapping (Morphs 3D core layout based on scrollProgress)
  useEffect(() => {
    if (!coreGroupRef.current || !outerCageRef.current) return;

    // Explode cage facets slightly as scroll passes hero into architecture
    const p = Math.max(0, Math.min(1, scrollProgress));
    
    // Scale & Explode effect
    if (p < 0.25) {
      // Hero state: intact, centered
      outerCageRef.current.scale.setScalar(1.0 + p * 0.3);
      coreGroupRef.current.position.z = 0 - p * 1.5;
    } else if (p < 0.55) {
      // Exploded architecture state
      const explode = 1.0 + (p - 0.25) * 1.2;
      outerCageRef.current.scale.setScalar(explode);
      coreGroupRef.current.position.z = -0.5 - (p - 0.25) * 2;
    } else if (p < 0.8) {
      // Harmonics / Lab state
      outerCageRef.current.scale.setScalar(1.4);
      coreGroupRef.current.position.z = -1.0;
    } else {
      // CTA state: Condenses into high-energy singularity
      const condense = Math.max(0.6, 1.4 - (p - 0.8) * 2.5);
      outerCageRef.current.scale.setScalar(condense);
      coreGroupRef.current.position.z = 0.5 + (p - 0.8) * 3;
    }
  }, [scrollProgress]);

  return (
    <div
      ref={containerRef}
      id="fonix-webgl-canvas-container"
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ overflow: 'hidden' }}
    />
  );
};
