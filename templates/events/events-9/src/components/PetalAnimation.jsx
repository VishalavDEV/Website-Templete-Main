import React from 'react';

export default function PetalAnimation() {
  const petals = Array.from({ length: 14 });

  return (
    <div className="petals-container" aria-hidden="true">
      {petals.map((_, i) => {
        const left = Math.random() * 100;
        const size = Math.random() * 12 + 8;
        const delay = Math.random() * 10;
        const duration = Math.random() * 8 + 12;

        return (
          <div
            key={i}
            className="petal"
            style={{
              left: `${left}%`,
              width: `${size}px`,
              height: `${size * 1.4}px`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`
            }}
          />
        );
      })}
    </div>
  );
}
