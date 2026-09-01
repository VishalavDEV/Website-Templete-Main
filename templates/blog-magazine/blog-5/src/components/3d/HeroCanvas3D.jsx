import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, RoundedBox } from '@react-three/drei';

function FloatingGeometries() {
  const sphereRef = useRef();
  const torusRef = useRef();
  const boxRef = useRef();

  useFrame(({ clock, mouse }) => {
    const t = clock.getElapsedTime();
    if (sphereRef.current) {
      sphereRef.current.position.x = Math.sin(t * 0.4) * 0.4 + mouse.x * 0.3;
      sphereRef.current.position.y = Math.cos(t * 0.5) * 0.3 + mouse.y * 0.3;
      sphereRef.current.rotation.y = t * 0.2;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.3;
      torusRef.current.rotation.y = t * 0.15;
      torusRef.current.position.x = -1.8 + mouse.x * 0.2;
      torusRef.current.position.y = 0.8 + mouse.y * 0.2;
    }
    if (boxRef.current) {
      boxRef.current.rotation.z = t * 0.25;
      boxRef.current.rotation.y = t * 0.4;
      boxRef.current.position.x = 2.0 + mouse.x * 0.25;
      boxRef.current.position.y = -0.9 + mouse.y * 0.25;
    }
  });

  return (
    <>
      {/* Studio Lighting Setup: Crisp, Ambient, Soft Bounce */}
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 8, 5]} intensity={1.5} color="#FFFFFF" />
      <pointLight position={[-4, 3, 2]} intensity={1.8} color="#0055FF" distance={10} />
      <pointLight position={[4, -2, 2]} intensity={1.5} color="#FF5E3A" distance={10} />

      {/* Main Floating Distorted Iridescent Glass Sphere */}
      <Float speed={1.8} rotationIntensity={0.6} floatIntensity={1.2}>
        <Sphere ref={sphereRef} args={[1.2, 64, 64]} position={[0, 0, -1]}>
          <MeshDistortMaterial
            color="#FFFFFF"
            roughness={0.15}
            metalness={0.1}
            distort={0.35}
            speed={1.5}
            clearcoat={1.0}
            clearcoatRoughness={0.1}
            transparent
            opacity={0.82}
          />
        </Sphere>
      </Float>

      {/* Floating Accent Torus Ring */}
      <Float speed={2.0} rotationIntensity={1.0} floatIntensity={1.4}>
        <Torus ref={torusRef} args={[0.7, 0.22, 32, 64]} position={[-1.8, 0.8, -2]}>
          <meshStandardMaterial
            color="#EBF4FF"
            roughness={0.2}
            metalness={0.6}
            transparent
            opacity={0.7}
          />
        </Torus>
      </Float>

      {/* Floating Iridescent Rounded Box */}
      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.1}>
        <RoundedBox ref={boxRef} args={[0.8, 0.8, 0.8]} radius={0.15} position={[2.0, -0.9, -2]}>
          <meshPhysicalMaterial
            color="#FFF1EE"
            roughness={0.1}
            metalness={0.3}
            clearcoat={0.9}
            transparent
            opacity={0.75}
          />
        </RoundedBox>
      </Float>
    </>
  );
}

export function HeroCanvas3D({ className = '' }) {
  return (
    <div className={`absolute inset-0 pointer-events-none z-0 overflow-hidden ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <FloatingGeometries />
      </Canvas>
    </div>
  );
}
