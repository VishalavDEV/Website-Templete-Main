import React, { useMemo } from 'react';

export default function ParticleField({ count = 80 }) {
  const particles = useMemo(() => {
    const list = [];
    for (let i = 0; i < count; i++) {
      list.push({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: `${Math.random() * 3 + 2}px`, // 2px to 5px
        delay: `${Math.random() * 5}s`,
        duration: `${Math.random() * 15 + 10}s`, // Slow drift
        opacity: Math.random() * 0.25 + 0.1 // Low opacity
      });
    }
    return list;
  }, [count]);

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      pointerEvents: 'none',
      zIndex: 0
    }}>
      {particles.map((p) => (
        <div 
          key={p.id}
          style={{
            position: 'absolute',
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            backgroundColor: '#c5a880', // Warm gold/beige
            opacity: p.opacity,
            borderRadius: '1px', // Square specks
            animation: `floatSpecks ${p.duration} ease-in-out infinite alternate`,
            animationDelay: p.delay
          }}
        />
      ))}

      <style>{`
        @keyframes floatSpecks {
          0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.15;
          }
          50% {
            opacity: 0.35;
          }
          100% {
            transform: translate(25px, -30px) rotate(45deg);
            opacity: 0.1;
          }
        }
      `}</style>
    </div>
  );
}
