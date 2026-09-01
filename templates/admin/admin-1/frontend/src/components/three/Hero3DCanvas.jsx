import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, MeshDistortMaterial, Sphere, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Generates points array for particle cloud
const particleCount = 200;
const positions = new Float32Array(particleCount * 3);
for (let i = 0; i < particleCount * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 10;
}

function CyberCoreGlobe() {
  const outerSphereRef = useRef();
  const innerWireframeRef = useRef();
  const pointsRef = useRef();

  useFrame((state, delta) => {
    if (outerSphereRef.current) {
      outerSphereRef.current.rotation.y += delta * 0.2;
      outerSphereRef.current.rotation.x += delta * 0.1;
    }
    if (innerWireframeRef.current) {
      innerWireframeRef.current.rotation.y -= delta * 0.3;
      innerWireframeRef.current.rotation.z += delta * 0.15;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group>
      {/* Outer Holographic Distorted Sphere */}
      <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.2}>
        <Sphere ref={outerSphereRef} args={[1.8, 64, 64]} scale={1.2}>
          <MeshDistortMaterial
            color="#00f0ff"
            attach="material"
            distort={0.35}
            speed={2}
            roughness={0.2}
            metalness={0.8}
            wireframe={true}
            transparent={true}
            opacity={0.6}
          />
        </Sphere>
      </Float>

      {/* Inner Glowing Wireframe Core */}
      <Float speed={3} rotationIntensity={1.2} floatIntensity={1.5}>
        <mesh ref={innerWireframeRef} scale={1.1}>
          <icosahedronGeometry args={[1.2, 2]} />
          <meshBasicMaterial
            color="#7000ff"
            wireframe={true}
            transparent={true}
            opacity={0.8}
          />
        </mesh>
      </Float>

      {/* Floating Particle Starfield */}
      <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00f0ff"
          size={0.06}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>

      {/* Center glowing light source */}
      <pointLight position={[0, 0, 0]} intensity={2.5} color="#00f0ff" distance={6} />
    </group>
  );
}

class CanvasErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-48 h-48 rounded-full bg-gradient-to-r from-neura-cyan/20 to-neura-purple/20 animate-pulse border border-neura-cyan/40 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full border border-neura-cyan border-dashed animate-spin" />
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function Hero3DCanvas() {
  return (
    <div className="w-full h-64 md:h-80 relative flex items-center justify-center">
      <CanvasErrorBoundary>
        <Canvas
          camera={{ position: [0, 0, 5.5], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
          <pointLight position={[-10, -10, -5]} intensity={1} color="#7000ff" />
          <CyberCoreGlobe />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} maxPolarAngle={Math.PI / 1.5} minPolarAngle={Math.PI / 3} />
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
}
