import React from 'react';

export default function StageLights() {
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 2 }}>
      {/* Beam 1 - Gold Left */}
      <div
        className="anim-moving-beam"
        style={{
          position: 'absolute',
          top: '-15%',
          left: '15%',
          width: '300px',
          height: '1000px',
          background: 'linear-gradient(180deg, rgba(255, 201, 40, 0.25) 0%, rgba(245, 185, 0, 0.05) 70%, transparent 100%)',
          transformOrigin: 'top center',
          filter: 'blur(20px)',
          clipPath: 'polygon(40% 0, 60% 0, 100% 100%, 0 100%)',
        }}
      />

      {/* Beam 2 - White Center Flare */}
      <div
        className="anim-moving-beam-delayed"
        style={{
          position: 'absolute',
          top: '-15%',
          left: '48%',
          width: '250px',
          height: '950px',
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(245, 185, 0, 0.03) 70%, transparent 100%)',
          transformOrigin: 'top center',
          filter: 'blur(25px)',
          clipPath: 'polygon(45% 0, 55% 0, 100% 100%, 0 100%)',
        }}
      />

      {/* Beam 3 - Amber Right */}
      <div
        className="anim-moving-beam"
        style={{
          position: 'absolute',
          top: '-15%',
          right: '18%',
          width: '320px',
          height: '1000px',
          background: 'linear-gradient(180deg, rgba(217, 152, 0, 0.22) 0%, rgba(245, 185, 0, 0.04) 70%, transparent 100%)',
          transformOrigin: 'top center',
          filter: 'blur(22px)',
          clipPath: 'polygon(40% 0, 60% 0, 100% 100%, 0 100%)',
          animationDuration: '10s',
        }}
      />
    </div>
  );
}
