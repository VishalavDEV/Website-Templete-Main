import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useWebGLSupport } from '../../hooks/useWebGLSupport';
import { HeroFallback } from './HeroFallback';

function KineticMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (e.clientX / innerWidth) * 2 - 1,
        y: -(e.clientY / innerHeight) * 2 + 1,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.3;
    
    // Smooth mouse tilt
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, mousePos.y * 0.5, 0.05);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, mousePos.x * 0.5, 0.05);
  });

  return (
    <Float speed={2.5} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={meshRef} scale={1.8}>
        <torusKnotGeometry args={[1, 0.35, 128, 32]} />
        <MeshDistortMaterial
          color="#C8FF3D"
          attach="material"
          distort={0.25}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          wireframe={true}
        />
      </mesh>
    </Float>
  );
}

export const Hero3DCanvas: React.FC = () => {
  const isWebGLSupported = useWebGLSupport();
  const [hasError, setHasError] = useState(false);

  if (!isWebGLSupported || hasError) {
    return <HeroFallback />;
  }

  return (
    <div className="relative w-full h-full min-h-[280px] sm:min-h-[360px] md:min-h-[480px] flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        onError={() => setHasError(true)}
        className="w-full h-full"
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={0.8} color="#C8FF3D" />
        <KineticMesh />
      </Canvas>
    </div>
  );
};
