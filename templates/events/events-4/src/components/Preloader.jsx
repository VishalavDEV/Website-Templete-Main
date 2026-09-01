import React, { useEffect, useState } from 'react';
import { WeightPlateIcon } from './FloatingEquipment';

const Preloader = ({ onFinish }) => {
  const [stage, setStage] = useState(1);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(2), 1200);
    const timer2 = setTimeout(() => setFadeOut(true), 2400);
    const timer3 = setTimeout(() => onFinish && onFinish(), 2800);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onFinish]);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: '#08080A',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: fadeOut ? 0 : 1,
      transition: 'opacity 0.4s ease-out',
      pointerEvents: fadeOut ? 'none' : 'auto'
    }}>
      <div style={{ position: 'relative', marginBottom: '2rem' }}>
        <WeightPlateIcon size={110} color="#FFE600" style={{ animation: 'rotatePlate 2s linear infinite' }} />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '24px',
          height: '24px',
          background: '#8A2BE2',
          borderRadius: '50%',
          boxShadow: '0 0 20px #8A2BE2'
        }} />
      </div>

      <div style={{ textAlign: 'center', minHeight: '80px' }}>
        {stage === 1 ? (
          <h1 style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '2.5rem',
            color: '#FFFFFF',
            letterSpacing: '4px',
            animation: 'animate-zoom-in 0.4s ease'
          }}>
            VORTEX <span style={{ color: '#FFE600' }}>FORGE</span>
          </h1>
        ) : (
          <div style={{ animation: 'animate-zoom-in 0.4s ease' }}>
            <h1 style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '2.8rem',
              color: '#FFE600',
              letterSpacing: '3px',
              textShadow: '0 0 20px rgba(255,230,0,0.6)'
            }}>
              IRON ASCENT 2026
            </h1>
            <p style={{
              color: '#8A2BE2',
              fontFamily: 'Outfit, sans-serif',
              letterSpacing: '4px',
              fontWeight: 800,
              fontSize: '0.9rem',
              marginTop: '0.4rem'
            }}>
              TRAIN HARD. RISE HIGHER.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Preloader;
