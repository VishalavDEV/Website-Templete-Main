import React from 'react';

export default function Footer() {
  return (
    <footer className="main-footer" id="contact">
      <div className="container footer-grid">
        <div className="footer-col brand-col">
          <a href="#hero" className="brand-logo">
            <div className="logo-icon-box">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                <path d="M9 22v-4h6v4"></path>
                <path d="M8 6h.01"></path>
                <path d="M16 6h.01"></path>
                <path d="M12 6h.01"></path>
                <path d="M12 10h.01"></path>
                <path d="M12 14h.01"></path>
                <path d="M16 10h.01"></path>
                <path d="M16 14h.01"></path>
                <path d="M8 10h.01"></path>
                <path d="M8 14h.01"></path>
              </svg>
            </div>
            <span className="brand-text">Construction</span>
          </a>
          <p className="footer-desc">
            Advanced Construction is a heavy industrial civil contractor specializing in skyscraper framing, sub-structure foundation piling, and tower crane logistics across North America.
          </p>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#hero">Home & Overview</a></li>
            <li><a href="#services">Civil Capabilities</a></li>
            <li><a href="#portfolio">Featured Landmarks</a></li>
            <li><a href="#calculator">Parametric Estimator</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Civil Services</h4>
          <ul className="footer-links">
            <li><a href="#services">Engineering & BIM 3D</a></li>
            <li><a href="#services">Masonry & Concrete Piles</a></li>
            <li><a href="#services">Tower Crane Fleet Operations</a></li>
            <li><a href="#services">Structural Steel Framing</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Direct Contact</h4>
          <div className="footer-contact-item">
            <strong>Yard & Headquarters:</strong>
            <span>1200 Industrial Parkway, Sector 4, CA</span>
          </div>
          <div className="footer-contact-item">
            <strong>24/7 Dispatch Hotline:</strong>
            <span>+(123) 1234-587-8901</span>
          </div>
          <div className="footer-contact-item">
            <strong>Tender Inquiry Email:</strong>
            <span>info@advanced-construction.com</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="container footer-bottom-flex">
          <div className="copyright-text">
            © 2026 ADVANCED CONSTRUCTION Inc. All Rights Reserved.
          </div>
          <div className="footer-extra-links">
            <a href="#hero">Back to Top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
