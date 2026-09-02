import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Realistic procedural Mirrorless Camera component
function ProceduralCamera({ scrollProgress = 0 }) {
  // Define separation offsets based on scroll progress (exploded view)
  const lensOffset = scrollProgress * 0.9;
  const dialOffset = scrollProgress * 0.25;
  const bodyOffset = -scrollProgress * 0.15;

  // Materials definition matching Sony mirrorless body textures
  const bodyMaterial = new THREE.MeshStandardMaterial({
    color: '#1a1a1a', // Matte charcoal black
    roughness: 0.55,
    metalness: 0.15
  });

  const plateMaterial = new THREE.MeshStandardMaterial({
    color: '#4a4d53', // Brushed warm gunmetal
    roughness: 0.3,
    metalness: 0.85
  });

  const chromeMaterial = new THREE.MeshStandardMaterial({
    color: '#d4af7a', // Warm gold/champagne bronze accent
    roughness: 0.2,
    metalness: 0.95
  });

  const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: '#1a2e40', // Deep blue coated glass
    transmission: 0.9,
    roughness: 0.05,
    thickness: 0.8,
    ior: 1.5,
    clearcoat: 1.0
  });

  return (
    <group>
      {/* 1. Main Camera Body (drifts backward slightly) */}
      <group position={[0, 0, bodyOffset]}>
        {/* Main rectangular box */}
        <mesh castShadow receiveShadow material={bodyMaterial}>
          <boxGeometry args={[1.8, 1.1, 0.7]} />
        </mesh>
        
        {/* Top Plate Trim (Brushed metal) */}
        <mesh position={[0, 0.58, 0]} castShadow material={plateMaterial}>
          <boxGeometry args={[1.82, 0.08, 0.72]} />
        </mesh>

        {/* Viewfinder Pentaprism Bump */}
        <mesh position={[0, 0.65, -0.05]} castShadow material={plateMaterial}>
          <boxGeometry args={[0.36, 0.18, 0.3]} />
        </mesh>

        {/* Front Grip Bulge */}
        <mesh position={[0.7, 0, 0.2]} castShadow material={bodyMaterial}>
          <boxGeometry args={[0.3, 1.0, 0.4]} />
        </mesh>
      </group>

      {/* 2. Top Controls & Dials (separated upwards on scroll) */}
      <group position={[0, dialOffset, 0]}>
        {/* Shutter Button Dial */}
        <mesh position={[0.5, 0.64, 0.15]} castShadow material={chromeMaterial}>
          <cylinderGeometry args={[0.08, 0.08, 0.14, 16]} />
        </mesh>
        
        {/* Mode dial left */}
        <mesh position={[-0.5, 0.66, 0]} castShadow material={chromeMaterial}>
          <cylinderGeometry args={[0.15, 0.15, 0.08, 20]} />
        </mesh>

        {/* Exposure dial right */}
        <mesh position={[0.7, 0.66, 0]} castShadow material={chromeMaterial}>
          <cylinderGeometry args={[0.12, 0.12, 0.06, 20]} />
        </mesh>
      </group>

      {/* 3. Lens System (shifts forward on scroll) */}
      <group position={[0, 0, lensOffset]}>
        {/* Lens Base Mount */}
        <mesh position={[0, 0, 0.38]} rotation={[Math.PI / 2, 0, 0]} castShadow material={chromeMaterial}>
          <cylinderGeometry args={[0.52, 0.52, 0.1, 32]} />
        </mesh>

        {/* Main Lens Barrel */}
        <mesh position={[0, 0, 0.65]} rotation={[Math.PI / 2, 0, 0]} castShadow material={bodyMaterial}>
          <cylinderGeometry args={[0.48, 0.48, 0.5, 32]} />
        </mesh>

        {/* Lens Zoom Ring (Gold Trim) */}
        <mesh position={[0, 0, 0.72]} rotation={[Math.PI / 2, 0, 0]} castShadow material={chromeMaterial}>
          <cylinderGeometry args={[0.49, 0.49, 0.08, 32]} />
        </mesh>

        {/* Front Lens Glass Ring */}
        <mesh position={[0, 0, 0.9]} rotation={[Math.PI / 2, 0, 0]} castShadow material={plateMaterial}>
          <cylinderGeometry args={[0.47, 0.47, 0.05, 32]} />
        </mesh>

        {/* Curved front lens element glass coating */}
        <mesh position={[0, 0, 0.92]} rotation={[Math.PI / 2, 0, 0]} material={glassMaterial}>
          <sphereGeometry args={[0.41, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        </mesh>
      </group>
    </group>
  );
}

export default function CameraModel({ glbPath = null, scrollProgress = 0 }) {
  // CRITICAL NOTE: If a real Sony mirrorless camera .glb is provided, load it below.
  // Example:
  // const { scene } = useGLTF(glbPath);
  // return <primitive object={scene} scale={[1, 1, 1]} />;

  if (glbPath) {
    try {
      const { scene } = useGLTF(glbPath);
      return <primitive object={scene} scale={[1.2, 1.2, 1.2]} />;
    } catch (e) {
      console.warn("Failed to load .glb asset, falling back to procedural camera", e);
    }
  }

  // Default to procedural mirrorless camera model
  return <ProceduralCamera scrollProgress={scrollProgress} />;
}
