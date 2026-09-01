import React from 'react';

export default function Footer() {
  return (
    <footer className="editorial-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <span className="footer-logo">EV</span>
          <span className="brand-logo-text" style={{ fontSize: '1.2rem', marginTop: '0.2rem' }}>ELARA VOSS</span>
          <span className="footer-role" style={{ marginTop: '0.5rem' }}>
            FASHION DESIGNER & CREATIVE DIRECTOR
          </span>
          <span style={{ fontSize: '0.8rem', color: '#888888', marginTop: '0.5rem' }}>
            Berlin, Germany
          </span>
        </div>

        <div>
          <span className="meta-label" style={{ color: '#888888', marginBottom: '1.2rem', display: 'block' }}>NAVIGATION</span>
          <ul className="footer-nav">
            <li><a href="#profile" className="footer-nav-link">Profile</a></li>
            <li><a href="#collections" className="footer-nav-link">Collections</a></li>
            <li><a href="#lookbook" className="footer-nav-link">Lookbook</a></li>
            <li><a href="#process" className="footer-nav-link">Process</a></li>
            <li><a href="#career" className="footer-nav-link">Career</a></li>
            <li><a href="#contact" className="footer-nav-link">Contact</a></li>
          </ul>
        </div>

        <div className="footer-right-info">
          <div>
            <span className="meta-label" style={{ color: '#888888', marginBottom: '1.2rem', display: 'block' }}>DEMONSTRATION NOTICE</span>
            <p className="footer-disclaimer">
              This is a fictional Resume/CV template demonstration. All names, studios, collections, institutions, projects, awards, events, designs, and visuals are fictional or AI-generated.
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <span>© 2026 ELARA VOSS. ALL RIGHTS RESERVED.</span>
        <span>BERLIN — CONTEMPORARY WOMENSWEAR & CREATIVE DIRECTION</span>
      </div>
    </footer>
  );
}
