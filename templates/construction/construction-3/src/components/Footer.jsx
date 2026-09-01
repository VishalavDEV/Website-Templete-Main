import React from 'react';

export default function Footer() {
  return (
    <footer className="futurix-footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="futurix-logo" style={{ marginBottom: '16px' }}>
              <div className="logo-cube">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <polygon 
                    points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" 
                    stroke="var(--accent-cyan)" 
                    strokeWidth="1.8" 
                    fill="rgba(0, 240, 255, 0.2)"
                  />
                </svg>
              </div>
              <div className="logo-text-block">
                <span className="logo-title">FUTURIX</span>
                <span className="logo-subtitle">CONSTRUCTIONS</span>
              </div>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6', maxWidth: '320px' }}>
              Pioneering digital twin architecture, intelligent construction robotics, and sustainable high-tech megastructures.
            </p>
          </div>

          <div>
            <h4>SOLUTIONS</h4>
            <ul className="footer-link-list">
              <li><a href="#services">3D BIM Modeling</a></li>
              <li><a href="#services">Digital Twin Slicing</a></li>
              <li><a href="#services">Clash Detection</a></li>
              <li><a href="#services">Robotic Assembly</a></li>
            </ul>
          </div>

          <div>
            <h4>RESOURCES</h4>
            <ul className="footer-link-list">
              <li><a href="#projects">Skyline Tower</a></li>
              <li><a href="#estimator">Cost Calculator</a></li>
              <li><a href="#about">ISO 19650 Standards</a></li>
              <li><a href="#about">Safety Compliance</a></li>
            </ul>
          </div>

          <div>
            <h4>CONNECT</h4>
            <span style={{ color: 'var(--accent-cyan)', fontWeight: 700, fontSize: '1rem', display: 'block', marginBottom: '6px' }}>
              contact@futurix-constructions.io
            </span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>
              Global Smart Construction Network • 24/7 Monitoring
            </span>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <span>&copy; 2026 FUTURIX Constructions Corporation. Powered by React & Java Spring Boot.</span>
          <span>Template 3 — Full-Stack BIM Edition.</span>
        </div>
      </div>
    </footer>
  );
}
