import React from 'react';
import { processData } from '../data/portfolioData';

export default function Process() {
  return (
    <section id="process" className="editorial-section">
      <div className="section-label">
        <span>03 / PROCESS</span>
      </div>

      <div className="collections-header">
        <h2 className="collections-title">From Concept to Silhouette</h2>
        <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', letterSpacing: '0.15em', marginTop: '0.5rem' }}>
          THE FOUR STAGES OF CREATIVE CONSTRUCTION
        </p>
      </div>

      <div className="process-grid">
        {processData.map((item) => (
          <div key={item.step} className="process-card">
            <div>
              <span className="process-step-num">{item.step}</span>
              <h3 className="process-step-title">{item.title}</h3>
              <p className="process-step-subtitle">{item.subtitle}</p>
              
              <div className="process-img-wrapper">
                <img src={item.image} alt={item.title} className="process-img" />
              </div>

              <p className="process-desc">{item.description}</p>
            </div>

            <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
              <span className="meta-label">KEY ACTIVITIES</span>
              <ul style={{ listStyle: 'none', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {item.details.map((act, i) => (
                  <li key={i} style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    • {act}
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
