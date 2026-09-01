import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';
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
                <Twitter size={16} />
              </a>
              <a href="#" className="footer-social-btn" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href="#" className="footer-social-btn" aria-label="GitHub">
                <Github size={16} />
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
