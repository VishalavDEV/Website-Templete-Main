import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { isWebGLAvailable } from '../utils/webgl';

export const ContactPortalScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const reqIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isWebGLAvailable()) return;
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 6.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0x0f172a, 2.5);
    scene.add(ambient);

    const pointLight = new THREE.PointLight(0x06b6d4, 5, 15);
    pointLight.position.set(0, 0, 2);
    scene.add(pointLight);

    const group = new THREE.Group();
    scene.add(group);

    // 1. Spacetime Singularity Torus Portal
    const portalGeo = new THREE.TorusGeometry(1.8, 0.15, 32, 100);
    const portalMat = new THREE.MeshPhysicalMaterial({
      color: 0x06b6d4,
      emissive: 0x0284c7,
      emissiveIntensity: 0.6,
      roughness: 0.1,
      metalness: 0.9,
    });
    const portal = new THREE.Mesh(portalGeo, portalMat);
    group.add(portal);

    // 2. Inner Event Horizon Wireframe Vortex
    const vortexGeo = new THREE.ConeGeometry(1.7, 2.5, 32, 16, true);
    const vortexMat = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
      side: THREE.DoubleSide,
    });
    const vortex = new THREE.Mesh(vortexGeo, vortexMat);
    vortex.rotation.x = Math.PI / 2;
    group.add(vortex);

    // 3. Swirling Infalling Accretion Particles
    const pCount = 600;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      const rad = 0.5 + Math.random() * 2.2;
      const angle = Math.random() * Math.PI * 2;
      pPos[i * 3] = Math.cos(angle) * rad;
      pPos[i * 3 + 1] = Math.sin(angle) * rad;
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 1.5;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      size: 0.04,
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(pGeo, pMat);
    group.add(particles);

    // Render loop
    let clock = new THREE.Clock();
    const animate = () => {
      reqIdRef.current = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      portal.rotation.z = elapsed * 0.4;
      portal.rotation.x = Math.sin(elapsed * 0.3) * 0.15;

      vortex.rotation.z = -elapsed * 0.6;
      particles.rotation.z = elapsed * 0.5;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container || !camera || !renderer) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (reqIdRef.current) cancelAnimationFrame(reqIdRef.current);
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full min-h-[320px] pointer-events-none" />;
};
