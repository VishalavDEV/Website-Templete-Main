import React from 'react';
import { CHEF_PROFILE, PHILOSOPHY_PRINCIPLES } from '../data/culinaryData';

export default function Philosophy() {
  return (
    <section id="philosophy" className="philosophy-section">
      <div className="container">
        <span className="section-label">01 / PHILOSOPHY</span>
        <h2 className="section-title">Cooking Begins Before the Kitchen</h2>

        <div className="philosophy-quote-box">
          <div className="philosophy-statement">
            "Great food is not about complexity. It is about knowing what deserves attention."
          </div>
        </div>

        <div className="philosophy-grid">
          <div className="philosophy-image-frame">
            <img 
              src={CHEF_PROFILE.philosophyImg} 
              alt="Raw seasonal artisanal ingredients close up" 
              className="philosophy-img"
            />
            <div style={{ marginTop: '0.75rem', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-charcoal-muted)' }}>
              BOTANICAL HARVEST &bull; RAW INGREDIENT INSPIRATION
            </div>
          </div>

          <div className="philosophy-content">
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--color-charcoal-light)' }}>
              True culinary direction demands respect for origin. Long before heat meets pan, a dish is formed by soil quality, weather changes, and the dedication of small-scale growers. My cooking honors the integrity of each element, pairing technical precision with organic simplicity.
            </p>

            <div className="principles-list">
              {PHILOSOPHY_PRINCIPLES.map((principle, index) => (
                <div key={index} className="principle-card">
                  <span className="principle-num">{principle.number}</span>
                  <div className="principle-body">
                    <h4>{principle.title}</h4>
                    <p>{principle.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
