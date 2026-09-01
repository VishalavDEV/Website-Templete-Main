import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface InteractiveCanvas3DProps {
  className?: string;
  theme?: 'light' | 'dark';
}

export const InteractiveCanvas3D: React.FC<InteractiveCanvas3DProps> = ({
  className = '',
  theme = 'light',
}) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = mountRef.current;
    if (!currentRef) return;

    let animationFrameId: number;
    let width = currentRef.clientWidth || window.innerWidth;
    let height = currentRef.clientHeight || 600;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentRef.appendChild(renderer.domElement);

    // Geometry: Icosahedron / Complex polyhedral sculpture
    const geometry = new THREE.IcosahedronGeometry(2, 1);

    // Material
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: theme === 'dark' ? 0xccff00 : 0x121316,
      wireframe: true,
      transparent: true,
      opacity: theme === 'dark' ? 0.35 : 0.15,
    });

    const innerGeometry = new THREE.OctahedronGeometry(1.2, 0);
    const innerMaterial = new THREE.MeshPhysicalMaterial({
      color: theme === 'dark' ? 0x1a1b1f : 0xf0eee8,
      metalness: 0.8,
      roughness: 0.2,
      clearcoat: 1.0,
      transparent: true,
      opacity: 0.85,
    });

    const meshOuter = new THREE.Mesh(geometry, wireframeMaterial);
    const meshInner = new THREE.Mesh(innerGeometry, innerMaterial);

    const group = new THREE.Group();
    group.add(meshOuter);
    group.add(meshInner);
    scene.add(group);

    // Floating particles
    const particleCount = 80;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 8;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: theme === 'dark' ? 0xccff00 : 0x121316,
      size: 0.03,
      transparent: true,
      opacity: 0.4,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Lighting
    const light1 = new THREE.DirectionalLight(0xffffff, 2);
    light1.position.set(4, 4, 4);
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0xccff00, 1.5);
    light2.position.set(-4, -4, 2);
    scene.add(light2);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    // Mouse Parallax Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (e.clientX - windowHalfX) / windowHalfX;
      mouseY = (e.clientY - windowHalfY) / windowHalfY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      // Rotation
      meshOuter.rotation.x = elapsed * 0.15;
      meshOuter.rotation.y = elapsed * 0.2;

      meshInner.rotation.x = -elapsed * 0.25;
      meshInner.rotation.y = -elapsed * 0.3;

      particles.rotation.y = elapsed * 0.05;

      // Mouse lerp
      targetX = mouseX * 0.8;
      targetY = mouseY * 0.8;

      group.rotation.y += (targetX - group.rotation.y) * 0.05;
      group.rotation.x += (-targetY - group.rotation.x) * 0.05;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!currentRef) return;
      width = currentRef.clientWidth || window.innerWidth;
      height = currentRef.clientHeight || 600;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (currentRef && renderer.domElement) {
        currentRef.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [theme]);

  return <div ref={mountRef} className={`w-full h-full pointer-events-none ${className}`} />;
};
