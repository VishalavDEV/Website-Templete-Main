import React from 'react';

export default function SoundWave({ barsCount = 24, height = 45 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', height: `${height}px` }}>
      {Array.from({ length: barsCount }).map((_, index) => {
        const animDelay = `${(index % 7) * 0.15}s`;
        const animDuration = `${0.8 + (index % 5) * 0.25}s`;
        const isGold = index % 3 !== 0;

        return (
          <div
            key={index}
            style={{
              width: '4px',
              height: '100%',
              background: isGold
                ? 'linear-gradient(180deg, #FFC928 0%, #D99800 100%)'
                : 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.4) 100%)',
              borderRadius: '4px',
              animation: `soundwaveBars ${animDuration} ease-in-out infinite alternate`,
              animationDelay: animDelay,
              boxShadow: isGold ? '0 0 10px rgba(255, 201, 40, 0.5)' : 'none',
            }}
          />
        );
      })}
    </div>
  );
}
