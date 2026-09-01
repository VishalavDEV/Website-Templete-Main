import React from 'react';

export default function AboutSection({ onOpenQuote, onOpenVideo }) {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-img-composite">
            <img 
              src="./assets/images/commercial.jpg" 
              alt="BuildHub Engineering Headquarters" 
              className="about-main-img" 
            />
            <div className="about-floating-badge">
              <div className="about-badge-icon">🏆</div>
              <div className="about-badge-text">
                <h4>10-Year Warranty</h4>
                <p>Certified Structural Guarantee</p>
              </div>
            </div>
          </div>

          <div className="about-text-col">
            <div className="section-tag">WHY CHOOSE BUILDHUB</div>
            <h2 className="section-title">ENGINEERING EXCELLENCE & UNCOMPROMISED QUALITY</h2>
            <p className="section-desc">
              With over 15 years of industry leadership, BuildHub Constructions integrates cutting-edge BIM modeling, sustainable green technology, and precision execution to create architectural masterworks.
            </p>

            <div className="about-features-list">
              <div className="about-feature-item">
                <span className="check-icon">✓</span>
                <span>100% On-Time Project Delivery</span>
              </div>
              <div className="about-feature-item">
                <span className="check-icon">✓</span>
                <span>LEED Gold & Net-Zero Certified</span>
              </div>
              <div className="about-feature-item">
                <span className="check-icon">✓</span>
                <span>Zero-Incident Safety Record (OSHA)</span>
              </div>
              <div className="about-feature-item">
                <span className="check-icon">✓</span>
                <span>3D Digital Twin Client Portal</span>
              </div>
            </div>

            <div style={{ marginTop: '36px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button className="btn btn-primary" onClick={onOpenQuote}>
                CONSULT WITH AN ARCHITECT
              </button>
              <button className="btn btn-secondary" onClick={onOpenVideo}>
                WATCH 4K TOUR ▶
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
