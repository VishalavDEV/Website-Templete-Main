import React from 'react';

export default function AboutSection() {
  return (
    <section className="arcstone-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text-col">
            <span className="section-subtitle">OUR PHILOSOPHY</span>
            <h2 className="section-title">Harmonizing Nature & Modern Architecture</h2>
            <p className="section-desc">
              At Arcstone, we believe true architectural luxury lies in seamless integration with surrounding landscapes. Every residence, alpine villa, and commercial landmark is engineered with sustainable materials, custom glass outriggers, and bespoke structural framing.
            </p>
            <div className="feature-bullets">
              <div className="bullet-item">
                <span className="bullet-check">✓</span>
                <div>
                  <strong>Bespoke Alpine & Coastal Architecture:</strong> Tailored structural cantilevers and floor-to-ceiling panoramic glass envelopes.
                </div>
              </div>
              <div className="bullet-item">
                <span className="bullet-check">✓</span>
                <div>
                  <strong>Master-Crafted Turnkey Execution:</strong> From geotechnical site survey to interior acoustic and luxury smart automation.
                </div>
              </div>
              <div className="bullet-item">
                <span className="bullet-check">✓</span>
                <div>
                  <strong>Robust Engineering Stack:</strong> Powered by React frontend and Java Spring Boot REST backend microservices.
                </div>
              </div>
            </div>
          </div>

          <div className="about-image-col">
            <div className="about-img-frame">
              <img src="./assets/images/arcstone-villa.jpg" alt="Arcstone Villa Design" />
              <div className="about-card-badge">
                <span className="badge-num">2026</span>
                <span className="badge-lbl">ARCHITECTURAL DESIGN EXCELLENCE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
