import React, { useEffect, useState } from 'react';
import { Zap } from 'lucide-react';

export const LoadingScreen = ({ onFinished }) => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFade(true);
    }, 700);

    const timer2 = setTimeout(() => {
      if (onFinished) onFinished();
    }, 1000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onFinished]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#07080c',
        zIndex: 10000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: fade ? 0 : 1,
        visibility: fade ? 'hidden' : 'visible',
        transition: 'opacity 0.35s ease, visibility 0.35s ease'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
        <div
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '14px',
            background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 30px rgba(124, 58, 237, 0.6)'
          }}
        >
          <Zap size={28} color="#ffffff" />
        </div>
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '2.2rem',
            fontWeight: 800,
            letterSpacing: '0.05em',
            color: '#ffffff'
          }}
        >
          CYBER<span style={{ color: '#06b6d4' }}>NEXUS</span>
        </span>
      </div>
      {/* Animated Loading Bar Line */}
      <div
        style={{
          width: '200px',
          height: '3px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '99px',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, #7c3aed, #06b6d4)',
            animation: 'loadProgress 0.7s ease-in-out forwards'
          }}
        />
      </div>
      <style>{`
        @keyframes loadProgress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};
