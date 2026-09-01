import React from 'react';
import { weddingData } from '../data/weddingData';

export default function WeddingParty() {
  return (
    <div className="family-grid">
      {weddingData.weddingParty.map((person, idx) => (
        <div key={idx} className="family-card">
          <img src={person.image} alt={person.name} className="family-avatar" />
          <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--accent)', textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: '0.3rem' }}>
            {person.role}
          </span>
          <h3 className="family-name">{person.name}</h3>
          <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '0.8rem' }}>
            {person.relationship}
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--muted)', fontStyle: 'italic' }}>
            "{person.message}"
          </p>
        </div>
      ))}
    </div>
  );
}
