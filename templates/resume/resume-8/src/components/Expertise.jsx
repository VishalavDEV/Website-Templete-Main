import React from 'react';
import { expertiseData } from '../data/portfolioData';

export default function Expertise() {
  return (
    <section id="expertise" className="editorial-section">
      <div className="section-label">
        <span>05 / EXPERTISE</span>
      </div>

      <div className="collections-header">
        <h2 className="collections-title">Creative Practice</h2>
        <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', letterSpacing: '0.15em', marginTop: '0.5rem' }}>
          CORE COMPETENCIES & STUDIO SPECIALIZATIONS
        </p>
      </div>

      <div className="expertise-grid">
        {expertiseData.map((cat, idx) => (
          <div key={idx} className="expertise-category-card">
            <h3 className="expertise-cat-title">{cat.category}</h3>
            
            <div className="skills-pill-list">
              {cat.skills.map((skill, sIdx) => (
                <span key={sIdx} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
