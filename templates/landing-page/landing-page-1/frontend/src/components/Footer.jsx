import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="container">
        
        {/* Sitemap Grid */}
        <div className="footer-grid">
          
          {/* Brand Column */}
          <div className="footer-brand-col">
            <a href="#" className="footer-logo">
              <svg width="24" height="24" viewBox="0 0 32 32">
                <defs>
                  <linearGradient id="footer-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
                <path d="M16 4C9.37 4 4 9.37 4 16s5.37 12 12 12 12-5.37 12-12S22.63 4 16 4zm0 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-2-8h4v4h-4z" />
              </svg>
              <span>Flowly AI</span>
            </a>
            <p className="footer-desc">
              Flowly AI brings your tasks, notes, meetings, and workflows into one intelligent platform to help teams move forward with clarity.
            </p>
            <div className="footer-socials">
              <a href="#" className="footer-social-btn" aria-label="Twitter">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
              </a>
              <a href="#" className="footer-social-btn" aria-label="LinkedIn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="footer-social-btn" aria-label="GitHub">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div className="footer-links-col">
            <span className="footer-col-title">Product</span>
            <ul className="footer-links-list">
              <li className="footer-link-item"><a href="#product-showcase">Features</a></li>
              <li className="footer-link-item"><a href="#solutions">Solutions</a></li>
              <li className="footer-link-item"><a href="#pricing">Pricing</a></li>
              <li className="footer-link-item"><a href="#integrations">Integrations</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="footer-links-col">
            <span className="footer-col-title">Company</span>
            <ul className="footer-links-list">
              <li className="footer-link-item"><a href="#">About Us</a></li>
              <li className="footer-link-item"><a href="#">Careers</a></li>
              <li className="footer-link-item"><a href="#">Press Kit</a></li>
              <li className="footer-link-item"><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="footer-links-col">
            <span className="footer-col-title">Resources</span>
            <ul className="footer-links-list">
              <li className="footer-link-item"><a href="#">Documentation</a></li>
              <li className="footer-link-item"><a href="#resources">FAQ</a></li>
              <li className="footer-link-item"><a href="#">Help Center</a></li>
              <li className="footer-link-item"><a href="#">API Status</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <span className="footer-copy">
            &copy; {new Date().getFullYear()} Flowly AI. All rights reserved.
          </span>
          <div className="footer-legal-links">
            <a href="#" className="footer-legal-link">Privacy Policy</a>
            <a href="#" className="footer-legal-link">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
