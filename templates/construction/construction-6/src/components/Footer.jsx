import React from 'react';

export default function Footer() {
  return (
    <footer className="arcstone-footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="arcstone-logo">
              <div className="logo-symbol">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <polygon points="12 2 21 12 12 22 3 12" stroke="white" strokeWidth="2"/>
                  <polygon points="12 6 18 12 12 18 6 12" fill="var(--color-sage)"/>
                </svg>
              </div>
              <span className="logo-text">ARCSTONE</span>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '12px', maxWidth: '320px', lineHeight: '1.6' }}>
              From vision to landmarks. World-class architectural design, turnkey luxury villas, and landmark spaces built with React & Java Spring Boot.
            </p>
          </div>

          <div className="footer-links">
            <h4>Navigation</h4>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#estimator">Estimator</a>
          </div>

          <div className="footer-links">
            <h4>Offices</h4>
            <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Zurich • New York • Dubai</span>
            <span style={{ color: 'var(--color-sage-light)', fontSize: '0.85rem', marginTop: '6px' }}>concierge@arcstone.design</span>
            <span style={{ color: '#64748b', fontSize: '0.8rem', marginTop: '12px' }}>Tech: React + Spring Boot 3</span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} ARCSTONE Architectural Group. All Rights Reserved.</span>
          <span>Full Stack Architecture Platform (React 18 + Spring Boot 3)</span>
        </div>
      </div>
    </footer>
  );
}
