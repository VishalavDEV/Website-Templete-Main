import React from 'react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section className="editorial-section">
      <div className="section-label">
        <span>06 / EDUCATION</span>
      </div>

      <div className="collections-header">
        <h2 className="collections-title">Design Education</h2>
        <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', letterSpacing: '0.15em', marginTop: '0.5rem' }}>
          ACADEMIC DEGREES & SPECIALIZED TEXTILE LABORATORIES
        </p>
      </div>

      <div className="edu-grid">
        {educationData.map((edu, idx) => (
          <div key={idx} className="edu-item">
            <div className="edu-year">{edu.period}</div>
            
            <div>
              <h3 className="edu-degree">{edu.degree}</h3>
              <div className="edu-institution">
                {edu.institution} — {edu.location}
              </div>
              <p className="edu-note">{edu.note}</p>
            </div>
          </div>
        ))}
      </div>

      <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', letterSpacing: '0.1em', marginTop: '2.5rem' }}>
        * All educational institutions listed are fictional demonstration content.
      </p>
    </section>
  );
}
