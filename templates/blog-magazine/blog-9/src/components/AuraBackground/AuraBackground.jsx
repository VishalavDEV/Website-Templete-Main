import React from 'react';
import './AuraBackground.css';

export function AuraBackground({ children, className = '' }) {
  return (
    <div className={`aura-bg ${className}`.trim()}>
      <div className="aura-layer-1" aria-hidden="true" />
      <div className="aura-layer-2" aria-hidden="true" />
      <div className="aura-content-wrapper">
        {children}
      </div>
    </div>
  );
}

export default AuraBackground;
