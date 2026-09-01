import React from 'react';
import { weddingData } from '../data/weddingData';

export default function DressCode() {
  return (
    <div className="dresscode-grid">
      {weddingData.dressCode.events.map((event, idx) => (
        <div key={idx} className="dresscode-card">
          <span className="section-label">{event.eventName}</span>
          <h3 className="serif-title" style={{ fontSize: '1.5rem', marginBottom: '0.6rem' }}>
            {event.style}
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '1.2rem' }}>
            {event.description}
          </p>

          <span style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text)', fontWeight: 600 }}>
            SUGGESTED COLOR PALETTE:
          </span>

          <div className="color-swatches">
            {event.swatches.map((swatch, sIdx) => (
              <div
                key={sIdx}
                className="swatch-circle"
                style={{ backgroundColor: swatch.hex }}
                title={`${swatch.name} (${swatch.hex})`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
