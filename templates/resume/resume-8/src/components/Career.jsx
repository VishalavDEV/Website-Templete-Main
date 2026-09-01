import React from 'react';
import { careerData } from '../data/portfolioData';

export default function Career() {
  return (
    <section id="career" className="editorial-section">
      <div className="section-label">
        <span>04 / CAREER</span>
      </div>

      <div className="collections-header">
        <h2 className="collections-title">Creative Journey</h2>
        <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', letterSpacing: '0.15em', marginTop: '0.5rem' }}>
          12+ YEARS OF FASHION HOUSE & STUDIO DIRECTION
        </p>
      </div>

      <div className="career-timeline">
        {careerData.map((item, idx) => (
          <div key={idx} className="career-item">
            <div className="career-period">
              {item.period}
            </div>

            <div className="career-details">
              <h3 className="career-role">{item.role}</h3>
              
              <div className="career-studio-line">
                <span className="career-studio">{item.studio}</span>
                <span style={{ color: 'var(--text-light)' }}>•</span>
                <span className="career-location">{item.location}</span>
                {item.isFictional && (
                  <span style={{ fontSize: '0.65rem', background: 'var(--bg-warm)', padding: '0.2rem 0.6rem', border: '1px solid var(--border-subtle)', letterSpacing: '0.1em' }}>
                    FICTIONAL STUDIO
                  </span>
                )}
              </div>

              <ul className="career-resp-list">
                {item.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx} className="career-resp-item">
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
