import React from 'react';
import HeroContent from './HeroContent';
import ParticleField from './ParticleField';

export default function App() {
  return (
    <section id="home" style={{
      width: '100%',
      height: '100vh',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      boxSizing: 'border-box',
      // Full bleed dramatic background portrait image
      backgroundImage: 'url("/lume_hero.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Light overlay gradient to ensure high readability of overlays */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.8) 75%, #ffffff 100%)',
        zIndex: 1,
        pointerEvents: 'none'
      }} />

      {/* 1. Ambient warm gold drifting particles (z-index: 2) */}
      <div style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 2, pointerEvents: 'none' }}>
        <ParticleField />
      </div>

      {/* 2. Thin Status Bar Line (Center Screen, z-index: 3) */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '10%',
        right: '10%',
        height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(255, 122, 82, 0.45) 20%, rgba(255, 122, 82, 0.45) 80%, transparent)', // Coral accent line
        boxShadow: '0 0 8px rgba(255, 122, 82, 0.2)',
        zIndex: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '10px',
        color: '#121316',
        fontFamily: "'Poppins', sans-serif",
        fontWeight: '700',
        letterSpacing: '2px',
        padding: '0 20px',
        boxSizing: 'border-box'
      }}>
        <span>AVAILABLE FOR BOOKINGS</span>
        <span>BASED IN NEW YORK</span>
      </div>

      {/* 3. Text Overlay content (z-index: 4) */}
      <div style={{ position: 'relative', zIndex: 4, width: '100%', display: 'flex', justifyContent: 'center' }}>
        <HeroContent />
      </div>
    </section>
  );
}
