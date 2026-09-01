import React from 'react';

/**
 * Sunset Boulevard Aura Background
 * Architecture:
 * - Base color #faf8f2 on BODY
 * - Container is transparent (NO background-color)
 * - Dual multiply blend mode layers blur into page background
 * - Content renders in zIndex: 1 container
 */
export function AuraBackground({ children, className = '' }) {
  return (
    <div
      className={`aura-bg ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        width: '100%'
      }}
    >
      {/* Layer 1 - Atmospheric Multiply */}
      <div
        className="aura-layer-1"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(rgba(0,0,0,0) 0%, rgba(255,107,107,0.12) 28%, rgb(255,255,255) 18%, rgb(255,170,100) 68%, rgb(255,200,80) 100%)',
          mixBlendMode: 'multiply',
          pointerEvents: 'none',
          transform: 'translateZ(0)',
          willChange: 'transform'
        }}
        aria-hidden="true"
      />

      {/* Layer 2 - Sunset Amber Multiply */}
      <div
        className="aura-layer-2"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(rgba(0,0,0,0) 0%, rgba(255,107,107,0.22) 34%, rgb(255,255,255) 66%, rgb(255,170,100) 82%, rgb(255,200,80) 100%)',
          mixBlendMode: 'multiply',
          pointerEvents: 'none',
          transform: 'translateZ(0)',
          willChange: 'transform'
        }}
        aria-hidden="true"
      />

      {/* Content wrapper sitting directly above aura layers */}
      <div className="aura-content" style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
        {children}
      </div>
    </div>
  );
}

export default AuraBackground;
