import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text, MeshDistortMaterial, Sphere } from '@react-three/drei';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Compass } from 'lucide-react';
import { MagneticButton } from '../components/motion/MagneticButton';

function Floating404Scene() {
  const meshRef = useRef();

  useFrame(({ mouse, clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = mouse.y * 0.5 + Math.sin(t * 0.5) * 0.2;
      meshRef.current.rotation.y = mouse.x * 0.8 + Math.cos(t * 0.5) * 0.2;
    }
  });

  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 8, 5]} intensity={2} color="#FFFFFF" />
      <pointLight position={[-3, 2, 2]} intensity={2} color="#0055FF" />
      <pointLight position={[3, -2, 2]} intensity={1.5} color="#FF5E3A" />

      <group ref={meshRef}>
        {/* Floating 3D Text "404" */}
        <Float speed={2} rotationIntensity={0.8} floatIntensity={1.2}>
          <Text
            fontSize={2.4}
            color="#111827"
            font="https://fonts.gstatic.com/s/syne/v22/8vIS7w4qzmVxsWxjBCHSnw.woff"
            position={[0, 0.2, 0]}
            anchorX="center"
            anchorY="middle"
          >
            404
            <meshStandardMaterial metalness={0.2} roughness={0.1} color="#111827" />
          </Text>
        </Float>

        {/* Floating Iridescent Spatial Sphere */}
        <Float speed={1.8} rotationIntensity={0.6} floatIntensity={1.4}>
          <Sphere args={[0.7, 32, 32]} position={[2.2, -0.6, -1]}>
            <MeshDistortMaterial
              color="#0055FF"
              distort={0.4}
              speed={2}
              roughness={0.1}
              metalness={0.4}
              transparent
              opacity={0.7}
            />
          </Sphere>
        </Float>
      </group>
    </>
  );
}

export function NotFound() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center text-center px-4 relative my-12">
      {/* 3D Interactive Canvas Box */}
      <div className="w-full max-w-2xl h-80 sm:h-96 relative mb-8 rounded-3xl overflow-hidden glass-card bg-white/80 border border-white/90 shadow-xl">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <Floating404Scene />
        </Canvas>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#E5E7EB] text-[0.6875rem] font-mono text-[#6B7280] flex items-center gap-1.5 shadow-xs">
          <Sparkles className="w-3 h-3 text-[#0055FF]" />
          <span>Interactive 3D Scene &bull; Move cursor to tilt</span>
        </div>
      </div>

      {/* Typography & Actions */}
      <div className="max-w-md space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF1EE] text-[#FF5E3A] font-mono text-xs font-bold uppercase tracking-wider">
          <span>Spatial Coordinate Lost</span>
        </div>

        <h1 className="font-heading font-black text-3xl sm:text-4xl text-[#111827] uppercase tracking-tight">
          Monograph Not Found
        </h1>

        <p className="text-sm text-[#4B5563] leading-relaxed">
          The requested essay has been archived, relocated, or dissolved in the digital ether.
        </p>

        <div className="pt-4 flex justify-center">
          <MagneticButton strength={0.3}>
            <Link
              to="/"
              className="px-8 py-3.5 rounded-full bg-[#0055FF] hover:bg-[#0040C7] text-white font-heading font-extrabold text-xs uppercase tracking-wider transition-all shadow-[0_10px_25px_-5px_rgba(0,85,255,0.4)] flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Z MAG Index</span>
            </Link>
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}
