import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, OrbitControls, Float, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import CameraModel from './CameraModel';

// Inner component to handle mouse tracking parallax on the model group
function ModelContainer({ scrollProgress = 0, isMobile = false }) {
  const containerRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Parallax tracking
    const targetX = state.pointer.x * 0.25;
    const targetY = state.pointer.y * 0.2;

    if (containerRef.current) {
      // Y-axis: base 3/4 angle (-0.6 rad) + continuous slow rotation + mouse tilt
      const baseRotationY = -0.5 + Math.sin(t * 0.08) * 0.05;
      containerRef.current.rotation.y = THREE.MathUtils.lerp(
        containerRef.current.rotation.y,
        baseRotationY + targetX,
        0.05
      );

      // X-axis: mouse vertical tilt
      containerRef.current.rotation.x = THREE.MathUtils.lerp(
        containerRef.current.rotation.x,
        0.1 - targetY,
        0.05
      );
    }
  });

  return (
    <group ref={containerRef} rotation={[0.1, -0.5, 0]}>
      <CameraModel 
        glbPath={null} // CRITICAL NOTE: Replace null with path to real camera .glb (e.g. "/models/sony_camera.glb") to drop in a real asset
        scrollProgress={isMobile ? 0 : scrollProgress} // Disable exploded separate on mobile view
      />
    </group>
  );
}

export default function Hero3DScene() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const height = window.innerHeight;
      const progress = Math.min(Math.max(scrolled / height, 0), 1);
      setScrollProgress(progress);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 1,
      pointerEvents: 'none'
    }}>
      <Canvas
        camera={{ position: [0, 0.2, 4.0], fov: 45 }}
        shadows
        style={{ pointerEvents: 'auto' }}
      >
        {/* Soft Ambient lighting */}
        <ambientLight intensity={0.4} />

        {/* 1. Cool Rim Light from Behind-Left */}
        <directionalLight 
          position={[-6, 3, -3]} 
          intensity={2.2} 
          color="#93c5fd" // Soft rim blue light
        />

        {/* 2. Warm Amber Key Light from Front-Right */}
        <directionalLight 
          position={[5, 4, 3]} 
          intensity={3.0} 
          color="#ffb070" // Amber gold key light
          castShadow
          shadow-mapSize={[1024, 1024]}
        />

        {/* 3. Soft Point Highlight focused on Lens glass reflection */}
        <pointLight position={[0, 0.1, 1.8]} intensity={0.8} color="#ffffff" />

        {/* Floating container to apply minor vertical hover bounce */}
        <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.25}>
          <ModelContainer scrollProgress={scrollProgress} isMobile={isMobile} />
        </Float>

        {/* Soft Contact Shadows on Floor */}
        <ContactShadows 
          position={[0, -1.3, 0]} 
          opacity={0.4} 
          scale={6.5} 
          blur={2.4} 
          far={3.0} 
        />

        {/* Restrained OrbitControls for gentle user rotation interactive viewing */}
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2 + 0.1}
          minPolarAngle={Math.PI / 2 - 0.4}
          maxAzimuthAngle={0.4}
          minAzimuthAngle={-1.2}
          dampingFactor={0.05}
          enableDamping
        />

        {/* Environment preset mapping for photorealistic brushed metal and glass textures */}
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
