import React from 'react';

export function AuraBackground() {
  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      {/* Layer 1 - multiply */}
      <div
        className="aura-layer-1 absolute inset-0 will-change-transform"
        style={{
          background:
            'linear-gradient(rgba(0,0,0,0) 0%, rgba(255,107,107,0.12) 28%, rgb(255,255,255) 18%, rgb(255,170,100) 68%, rgb(255,200,80) 100%)',
          mixBlendMode: 'multiply',
          transform: 'translateZ(0)',
        }}
      />
      {/* Layer 2 - multiply */}
      <div
        className="aura-layer-2 absolute inset-0 will-change-transform"
        style={{
          background:
            'linear-gradient(rgba(0,0,0,0) 0%, rgba(255,107,107,0.22) 34%, rgb(255,255,255) 66%, rgb(255,170,100) 82%, rgb(255,200,80) 100%)',
          mixBlendMode: 'multiply',
          transform: 'translateZ(0)',
        }}
      />
    </div>
  );
}

