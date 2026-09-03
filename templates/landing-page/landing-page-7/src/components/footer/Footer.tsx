import React from 'react';

export interface FooterProps {
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry }) => {
  return (
    <footer className="site-footer" id="footer" role="contentinfo">
      <div className="footer-minimal-container">
        <div className="footer-main-row">
          <div className="footer-col-left">
            <h2 className="footer-huge-brand">MONOLITH</h2>

            <div className="footer-tagline-block">
              <span>ARCHITECTURE</span>
              <span>BEYOND</span>
              <span>STRUCTURE.</span>
            </div>
          </div>

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

        <div className="footer-bottom-line">
          <span>© 2026 MONOLITH</span>
          <span>FICTIONAL ARCHITECTURE STUDIO</span>
        </div>
      </div>
    </footer>
  );
};
