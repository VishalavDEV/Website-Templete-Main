import React from 'react';
import ParticleField from './ParticleField';
import Hero3DScene from './Hero3DScene';
import HeroContent from './HeroContent';

export default function Scene3D() {
  return (
    <section id="home" style={{
      width: '100%',
      height: '100vh',
      backgroundColor: '#0a0a0a', // Near black background
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      boxSizing: 'border-box'
    }}>
      {/* 1. Background Dust/Particle Specks (z-index: 0) */}
      <ParticleField count={90} />

      {/* 2. Interactive 3D Camera Canvas (z-index: 1) */}
      <Hero3DScene />

      {/* 3. Staggered Text Entrance Overlay (z-index: 2) */}
      <HeroContent />
    </section>
  );
}
