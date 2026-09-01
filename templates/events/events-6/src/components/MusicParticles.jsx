import React, { useMemo } from 'react';

export default function MusicParticles() {
  const symbols = ['♪', '♫', '♬', '•', '+', '★', '♩'];
  
  // Generate 25 fixed particle objects
  const particles = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      symbol: symbols[i % symbols.length],
      left: `${(i * 4) % 96 + 2}%`,
      size: `${14 + (i % 16)}px`,
      duration: `${10 + (i % 12)}s`,
      delay: `${(i % 7) * 1.5}s`,
      opacity: 0.2 + (i % 5) * 0.12,
    }));
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 1, overflow: 'hidden' }}>
      {particles.map((p) => (
        <span
          key={p.id}
          style={{
            position: 'absolute',
            bottom: '-40px',
            left: p.left,
            fontSize: p.size,
            color: p.id % 2 === 0 ? 'var(--gold-bright)' : '#FFFFFF',
            opacity: p.opacity,
            animation: `particleDrift ${p.duration} linear infinite`,
            animationDelay: p.delay,
            textShadow: '0 0 10px rgba(245, 185, 0, 0.6)',
          }}
        >
          {p.symbol}
        </span>
      ))}
    </div>
  );
}
