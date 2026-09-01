import React from 'react';
import { recognitionData } from '../data/portfolioData';

export default function Recognition() {
  return (
    <section id="recognition" className="editorial-section">
      <div className="section-label">
        <span>08 / RECOGNITION</span>
      </div>

      <div className="collections-header">
        <h2 className="collections-title">Recognition</h2>
        <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', letterSpacing: '0.15em', marginTop: '0.5rem' }}>
          HONORS & INDUSTRY DISTINCTIONS
        </p>
      </div>

      <div className="recognition-list">
        {recognitionData.map((rec, idx) => (
          <div key={idx} className="recognition-item">
            <div className="rec-year">{rec.year}</div>
            
            <div>
              <h3 className="rec-award">{rec.award}</h3>
              <div className="rec-org">{rec.organization} — {rec.location}</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{rec.description}</p>
            </div>
          </div>
        ))}
      </div>

      <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', letterSpacing: '0.1em', marginTop: '2.5rem', textTransform: 'uppercase' }}>
        * All awards and organizations shown are fictional demonstration content.
      </p>
    </section>
  );
}
