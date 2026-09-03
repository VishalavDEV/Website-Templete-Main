import React from 'react';

export default function AuraBackground() {
  return (
    <div
      className="aura-bg"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
        /* NO background-color here - blend modes composite against body/page bg (#faf8f2) */
      }}
      aria-hidden="true"
    >
      {/* Layer 1 - multiply blend mode with smooth blur */}
      <div
        className="aura-layer-1"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(rgba(0,0,0,0) 0%, rgba(255,183,178,0.12) 28%, rgb(255,255,255) 18%, rgb(255,145,140) 68%, rgb(200,120,115) 100%)',
          mixBlendMode: 'multiply',
          transform: 'translateZ(0)',
          willChange: 'transform',
          pointerEvents: 'none',
        }}
      />

      {/* Layer 2 - multiply blend mode with smooth blur */}
      <div
        className="aura-layer-2"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(rgba(0,0,0,0) 0%, rgba(255,183,178,0.22) 34%, rgb(255,255,255) 66%, rgb(255,145,140) 82%, rgb(200,120,115) 100%)',
          mixBlendMode: 'multiply',
          transform: 'translateZ(0)',
          willChange: 'transform',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
