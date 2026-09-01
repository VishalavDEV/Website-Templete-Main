import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { isWebGLAvailable } from '../utils/webgl';

export const AboutScene: React.FC = () => {
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
    camera.position.set(0, 0, 6);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0x0f172a, 2.5);
    scene.add(ambient);

    const pointLight = new THREE.PointLight(0x06b6d4, 4, 12);
    pointLight.position.set(2, 2, 3);
    scene.add(pointLight);

    const group = new THREE.Group();
    scene.add(group);

    // Floating Data Crystals (Truncated Icosahedrons / Octahedrons)
    const crystals: THREE.Mesh[] = [];
    for (let i = 0; i < 5; i++) {
      const geo = new THREE.OctahedronGeometry(0.65 + i * 0.1, 1);
      const mat = new THREE.MeshPhysicalMaterial({
        color: i % 2 === 0 ? 0x06b6d4 : 0xa855f7,
        emissive: i % 2 === 0 ? 0x0284c7 : 0x7e22ce,
        emissiveIntensity: 0.35,
        roughness: 0.1,
        metalness: 0.9,
        wireframe: i % 2 === 1,
      });
      const mesh = new THREE.Mesh(geo, mat);
      const angle = (i / 5) * Math.PI * 2;
      mesh.position.set(Math.cos(angle) * 2.2, Math.sin(angle) * 1.6, (Math.random() - 0.5) * 1.5);
      group.add(mesh);
      crystals.push(mesh);
    }

    // Connective laser spline
    const splineGeo = new THREE.BufferGeometry();
    const splinePos = new Float32Array(5 * 3);
    crystals.forEach((c, idx) => {
      splinePos[idx * 3] = c.position.x;
      splinePos[idx * 3 + 1] = c.position.y;
      splinePos[idx * 3 + 2] = c.position.z;
    });
    splineGeo.setAttribute('position', new THREE.BufferAttribute(splinePos, 3));
    const splineMat = new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.4 });
    const splineLine = new THREE.LineLoop(splineGeo, splineMat);
    group.add(splineLine);

    // Render loop
    let clock = new THREE.Clock();
    const animate = () => {
      reqIdRef.current = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      group.rotation.y = elapsed * 0.15;
      group.rotation.x = Math.sin(elapsed * 0.1) * 0.1;

      crystals.forEach((c, idx) => {
        c.rotation.x += 0.01 * (idx + 1);
        c.rotation.y += 0.015;
      });

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

  return <div ref={containerRef} className="w-full h-full min-h-[350px] pointer-events-none" />;
};
