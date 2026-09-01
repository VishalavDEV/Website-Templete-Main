import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { isWebGLAvailable } from '../utils/webgl';

interface Project3DCanvasProps {
  theme: 'news' | 'medical' | 'satellite' | 'skeleton';
  isHovered: boolean;
}

export const Project3DCanvas: React.FC<Project3DCanvasProps> = ({ theme, isHovered }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const reqIdRef = useRef<number | null>(null);
  const groupRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    if (!isWebGLAvailable()) return;
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 5.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0xffffff, 1.8);
    scene.add(ambient);

    const pointLight = new THREE.PointLight(0x06b6d4, 4, 10);
    pointLight.position.set(2, 3, 3);
    scene.add(pointLight);

    const mainGroup = new THREE.Group();
    groupRef.current = mainGroup;
    scene.add(mainGroup);

    // Build specific 3D procedural environment based on theme
    if (theme === 'news') {
      // Newspaper Fragments Transforming into Data Particles
      const fragmentCount = 18;
      for (let i = 0; i < fragmentCount; i++) {
        const planeGeo = new THREE.PlaneGeometry(0.55, 0.75);
        const planeMat = new THREE.MeshStandardMaterial({
          color: 0x38bdf8,
          emissive: 0x0369a1,
          emissiveIntensity: 0.2,
          roughness: 0.3,
          wireframe: i % 2 === 0,
          side: THREE.DoubleSide,
        });
        const plane = new THREE.Mesh(planeGeo, planeMat);
        plane.position.set(
          (Math.random() - 0.5) * 3.2,
          (Math.random() - 0.5) * 2.5,
          (Math.random() - 0.5) * 2
        );
        plane.rotation.set(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        );
        mainGroup.add(plane);
      }
      // Floating data particles
      const pGeo = new THREE.BufferGeometry();
      const pPos = new Float32Array(200 * 3);
      for (let i = 0; i < 200; i++) {
        pPos[i * 3] = (Math.random() - 0.5) * 4;
        pPos[i * 3 + 1] = (Math.random() - 0.5) * 4;
        pPos[i * 3 + 2] = (Math.random() - 0.5) * 4;
      }
      pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
      const pMat = new THREE.PointsMaterial({ size: 0.04, color: 0x38bdf8 });
      const particles = new THREE.Points(pGeo, pMat);
      mainGroup.add(particles);
    } else if (theme === 'medical') {
      // Digital Medical Thoracic Voxel Grid & Scan Laser
      const thoraxGeo = new THREE.IcosahedronGeometry(1.5, 3);
      const thoraxMat = new THREE.MeshStandardMaterial({
        color: 0x06b6d4,
        wireframe: true,
        transparent: true,
        opacity: 0.4,
      });
      const thorax = new THREE.Mesh(thoraxGeo, thoraxMat);
      mainGroup.add(thorax);

      // Scanning plane
      const scanPlaneGeo = new THREE.PlaneGeometry(3.5, 3.5);
      const scanPlaneMat = new THREE.MeshBasicMaterial({
        color: 0x10b981,
        transparent: true,
        opacity: 0.25,
        side: THREE.DoubleSide,
      });
      const scanPlane = new THREE.Mesh(scanPlaneGeo, scanPlaneMat);
      scanPlane.rotation.x = Math.PI / 2;
      mainGroup.add(scanPlane);
      mainGroup.userData = { scanPlane };
    } else if (theme === 'satellite') {
      // 3D Topological Satellite Terrain with Glowing Thermal Heights
      const gridX = 24;
      const gridY = 24;
      const terrainGeo = new THREE.PlaneGeometry(3.2, 3.2, gridX - 1, gridY - 1);
      const posAttr = terrainGeo.attributes.position;
      for (let i = 0; i < posAttr.count; i++) {
        const vx = posAttr.getX(i);
        const vy = posAttr.getY(i);
        // Thermal elevation hill
        const dist = Math.sqrt(vx * vx + vy * vy);
        const z = Math.exp(-dist * dist * 1.5) * 0.9 + Math.sin(vx * 4) * 0.1;
        posAttr.setZ(i, z);
      }
      terrainGeo.computeVertexNormals();

      const terrainMat = new THREE.MeshStandardMaterial({
        color: 0xf97316,
        emissive: 0xe11d48,
        emissiveIntensity: 0.4,
        wireframe: true,
      });
      const terrain = new THREE.Mesh(terrainGeo, terrainMat);
      terrain.rotation.x = -Math.PI / 3;
      mainGroup.add(terrain);
    } else if (theme === 'skeleton') {
      // 3D 21-Joint Hand Skeleton Structure
      const jointGeo = new THREE.SphereGeometry(0.08, 16, 16);
      const jointMat = new THREE.MeshStandardMaterial({
        color: 0x22d3ee,
        emissive: 0x0891b2,
        emissiveIntensity: 0.8,
      });

      // Synthetic 21-joint skeleton layout
      const joints: [number, number, number][] = [
        [0, -1.2, 0], // Wrist
        // Thumb
        [-0.5, -0.8, 0.1],
        [-0.8, -0.4, 0.2],
        [-1.0, 0.0, 0.3],
        [-1.2, 0.3, 0.4],
        // Index
        [-0.4, -0.2, 0],
        [-0.45, 0.4, 0],
        [-0.5, 0.9, 0],
        [-0.55, 1.3, 0],
        // Middle
        [0, -0.1, 0],
        [0, 0.5, 0],
        [0, 1.1, 0],
        [0, 1.5, 0],
        // Ring
        [0.4, -0.2, 0],
        [0.45, 0.4, 0],
        [0.5, 0.9, 0],
        [0.55, 1.3, 0],
        // Pinky
        [0.7, -0.4, 0],
        [0.8, 0.1, 0],
        [0.85, 0.5, 0],
        [0.9, 0.9, 0],
      ];

      joints.forEach((pos) => {
        const jointMesh = new THREE.Mesh(jointGeo, jointMat);
        jointMesh.position.set(...pos);
        mainGroup.add(jointMesh);
      });

      // Connections between joints
      const connections: [number, number][] = [
        [0, 1], [1, 2], [2, 3], [3, 4],
        [0, 5], [5, 6], [6, 7], [7, 8],
        [0, 9], [9, 10], [10, 11], [11, 12],
        [0, 13], [13, 14], [14, 15], [15, 16],
        [0, 17], [17, 18], [18, 19], [19, 20]
      ];

      connections.forEach(([i, j]) => {
        const lineGeo = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(...joints[i]),
          new THREE.Vector3(...joints[j]),
        ]);
        const lineMat = new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.5 });
        mainGroup.add(new THREE.Line(lineGeo, lineMat));
      });
    }

    // Animation Loop
    let clock = new THREE.Clock();
    const animate = () => {
      reqIdRef.current = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      if (mainGroup) {
        mainGroup.rotation.y = elapsed * 0.3;
        mainGroup.rotation.x = Math.sin(elapsed * 0.2) * 0.15;

        if (mainGroup.userData.scanPlane) {
          mainGroup.userData.scanPlane.position.y = Math.sin(elapsed * 2) * 1.2;
        }
      }

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
  }, [theme]);

  // Adjust rotation speed or scale on hover
  useEffect(() => {
    if (!groupRef.current) return;
    if (isHovered) {
      groupRef.current.scale.set(1.15, 1.15, 1.15);
    } else {
      groupRef.current.scale.set(1.0, 1.0, 1.0);
    }
  }, [isHovered]);

  return <div ref={containerRef} className="w-full h-full min-h-[220px] pointer-events-none" />;
};
