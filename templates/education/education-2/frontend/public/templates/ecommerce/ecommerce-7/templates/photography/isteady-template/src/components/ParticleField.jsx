import React, { useEffect, useState } from 'react';

export default function App() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate 35 static/slow drifting warm gold dust specks
    const arr = Array.from({ length: 35 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 2}px`,
      delay: `${Math.random() * 8}s`,
      duration: `${Math.random() * 15 + 15}s`,
      opacity: Math.random() * 0.15 + 0.05
    }));
    setParticles(arr);
  }, []);

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      pointerEvents: 'none',
      overflow: 'hidden'
    }}>
      <style>{`
        @keyframes slowTwinkle {
          0%, 100% { opacity: 0.1; transform: translateY(0) scale(1); }
          50% { opacity: 0.6; transform: translateY(-15px) scale(1.1); }
        }
      `}</style>
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            backgroundColor: '#ffb97a', // Warm gold/orange tint
            opacity: p.opacity,
            animation: `slowTwinkle ${p.duration} infinite ease-in-out`,
            animationDelay: p.delay
          }}
        />
      ))}
    </div>
  );
}
