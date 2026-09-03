import React from 'react';

/**
 * 27 — Minimal Architectural Footer
 * Huge MONOLITH title, vertical tagline, and essential anchors
 */
export const Footer = ({ onOpenInquiry }) => {
  return (
    <footer className="site-footer" id="footer" role="contentinfo">
      <div className="footer-minimal-container">
        <div className="footer-main-row">
          {/* Large MONOLITH Brandmark */}
          <div className="footer-col-left">
            <h2 className="footer-huge-brand">MONOLITH</h2>
            
            {/* Tagline: ARCHITECTURE BEYOND STRUCTURE. */}
            <div className="footer-tagline-block">
              <span>ARCHITECTURE</span>
              <span>BEYOND</span>
              <span>STRUCTURE.</span>
            </div>
          </div>

          {/* Links: PROJECTS, PROCESS, STUDIO, CONTACT */}
          <nav className="footer-col-right" aria-label="Footer Navigation">
            <ul className="footer-minimal-links">
              <li><a href="#featured-project">PROJECTS</a></li>
              <li><a href="#process">PROCESS</a></li>
              <li><a href="#studio">STUDIO</a></li>
              <li>
                <button 
                  className="footer-link-btn" 
                  onClick={onOpenInquiry}
                  aria-label="Open Project Inquiry Contact"
                >
                  CONTACT
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Small Copyright Notice */}
        <div className="footer-bottom-line">
          <span>© 2026 MONOLITH</span>
          <span>FICTIONAL ARCHITECTURE STUDIO</span>
        </div>
      </div>
    </footer>
  );
};
