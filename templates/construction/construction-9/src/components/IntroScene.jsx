import React, { useState, useEffect } from 'react';

export default function IntroScene({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState(0);
  const [isClosing, setIsClosing] = useState(false);

  const logs = [
    "INITIALIZING BEDROCK SEISMIC ANCHORS...",
    "CALIBRATING C80/95 POZZOLANIC DENSITY MATRIX...",
    "ENGAGING 24M POST-TENSIONED CANTILEVER TENDONS...",
    "SYNCHRONIZING STRUCTURAL STRAIN SENSORS [PORT 8080]...",
    "CHRONOS MONOLITHIC PLATFORM READY."
  ];

  useEffect(() => {
    // Increment progress counter
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        const step = Math.floor(Math.random() * 8) + 4;
        return Math.min(100, prev + step);
      });
    }, 90);

    // Progression of technical log stages
    const stage1 = setTimeout(() => setStage(1), 500);
    const stage2 = setTimeout(() => setStage(2), 1100);
    const stage3 = setTimeout(() => setStage(3), 1700);
    const stage4 = setTimeout(() => setStage(4), 2200);

    // Auto-complete intro sequence
    const completeTimer = setTimeout(() => {
      handleEnter();
    }, 3100);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(stage1);
      clearTimeout(stage2);
      clearTimeout(stage3);
      clearTimeout(stage4);
      clearTimeout(completeTimer);
    };
  }, []);

  const handleEnter = () => {
    setIsClosing(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 900);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 99999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0a0b0e',
      color: '#f1f5f9',
      overflow: 'hidden',
      fontFamily: 'var(--font-mono)'
    }}>
      {/* Split Aperture Concrete Shutters (Top & Bottom Doors that slide away on entrance) */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '50%',
        background: 'linear-gradient(180deg, #15181f 0%, #0d0e12 100%)',
        borderBottom: '2px solid var(--accent-orange)',
        zIndex: 10,
        transform: isClosing ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'transform 0.9s cubic-bezier(0.77, 0, 0.175, 1)',
        boxShadow: isClosing ? '0 10px 40px rgba(0,0,0,0.8)' : 'none'
      }}>
        {/* Shutter Grid Lines */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '12px',
          left: '24px',
          fontSize: '0.7rem',
          color: 'var(--text-dim)',
          letterSpacing: '0.14em'
        }}>
          // SECTOR VAULT SHUTTER A-01 · REINFORCED TITANIUM
        </div>
      </div>

      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '50%',
        background: 'linear-gradient(0deg, #15181f 0%, #0d0e12 100%)',
        borderTop: '2px solid var(--accent-orange)',
        zIndex: 10,
        transform: isClosing ? 'translateY(100%)' : 'translateY(0)',
        transition: 'transform 0.9s cubic-bezier(0.77, 0, 0.175, 1)',
        boxShadow: isClosing ? '0 -10px 40px rgba(0,0,0,0.8)' : 'none'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
        <div style={{
          position: 'absolute',
          top: '12px',
          right: '24px',
          fontSize: '0.7rem',
          color: 'var(--text-dim)',
          letterSpacing: '0.14em'
        }}>
          // SECTOR VAULT SHUTTER B-02 · HYDRAULIC PRESSURE 320 BAR
        </div>
      </div>

      {/* Main Center Console / Cinematic Hologram Container */}
      <div style={{
        position: 'relative',
        zIndex: 20,
        maxWidth: '720px',
        width: '90%',
        textAlign: 'center',
        opacity: isClosing ? 0 : 1,
        transform: isClosing ? 'scale(1.08)' : 'scale(1)',
        transition: 'all 0.6s ease',
        padding: '36px',
        background: 'rgba(15, 17, 22, 0.85)',
        border: '1px solid var(--border-strong)',
        boxShadow: '0 0 50px rgba(0,0,0,0.9), inset 0 0 20px rgba(255,93,0,0.08)'
      }}>
        {/* Technical Corner Brackets */}
        <div style={{ position: 'absolute', top: '-4px', left: '-4px', width: '16px', height: '16px', borderTop: '3px solid var(--accent-orange)', borderLeft: '3px solid var(--accent-orange)' }} />
        <div style={{ position: 'absolute', top: '-4px', right: '-4px', width: '16px', height: '16px', borderTop: '3px solid var(--accent-orange)', borderRight: '3px solid var(--accent-orange)' }} />
        <div style={{ position: 'absolute', bottom: '-4px', left: '-4px', width: '16px', height: '16px', borderBottom: '3px solid var(--accent-orange)', borderLeft: '3px solid var(--accent-orange)' }} />
        <div style={{ position: 'absolute', bottom: '-4px', right: '-4px', width: '16px', height: '16px', borderBottom: '3px solid var(--accent-orange)', borderRight: '3px solid var(--accent-orange)' }} />

        {/* Top Header Stamp */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          paddingBottom: '12px',
          marginBottom: '28px',
          fontSize: '0.72rem',
          color: 'var(--text-dim)',
          letterSpacing: '0.16em'
        }}>
          <span>SYS.CALIBRATION // 57°42'N 11°58'E</span>
          <span style={{ color: 'var(--accent-orange)' }}>● PROTOCOL ACTIVE</span>
        </div>

        {/* Giant Monolithic Brand Typography */}
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.4rem, 6vw, 4.2rem)',
          fontWeight: 900,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          lineHeight: 1,
          marginBottom: '10px',
          color: '#ffffff',
          textShadow: '0 0 30px rgba(255, 93, 0, 0.4)'
        }}>
          CHRONOS
        </div>

        <div style={{
          fontSize: 'clamp(0.8rem, 2vw, 1rem)',
          fontWeight: 800,
          letterSpacing: '0.3em',
          color: 'var(--accent-orange)',
          textTransform: 'uppercase',
          marginBottom: '32px'
        }}>
          MONOLITHIC BRUTALIST ARCHITECTURE
        </div>

        {/* Animated Progress Bar */}
        <div style={{
          width: '100%',
          height: '6px',
          background: 'rgba(255,255,255,0.08)',
          marginBottom: '18px',
          position: 'relative',
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{
            width: `${progress}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #ff5d00, #ff8c42)',
            boxShadow: '0 0 12px var(--accent-orange)',
            transition: 'width 0.1s linear'
          }} />
        </div>

        {/* Progress Percentage & Status Readout */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.82rem',
          marginBottom: '28px'
        }}>
          <div style={{ color: 'var(--accent-cyan)', textAlign: 'left', minHeight: '20px' }}>
            &gt; {logs[stage] || logs[0]}
          </div>
          <div style={{ fontWeight: 900, color: 'var(--accent-orange)', fontSize: '1.1rem', letterSpacing: '0.08em' }}>
            {progress}%
          </div>
        </div>

        {/* Skip / Enter Action Button */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
          <button
            onClick={handleEnter}
            style={{
              padding: '12px 28px',
              background: progress >= 100 ? 'var(--accent-orange)' : 'rgba(255, 93, 0, 0.15)',
              color: progress >= 100 ? '#0c0d10' : 'var(--accent-orange)',
              border: '1px solid var(--accent-orange)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.82rem',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              boxShadow: progress >= 100 ? '0 0 20px rgba(255, 93, 0, 0.5)' : 'none'
            }}
          >
            {progress >= 100 ? 'ENTER MONOLITH [CLICK]' : 'ENTER ATELIER [SKIP] →'}
          </button>
        </div>
      </div>
    </div>
  );
}
