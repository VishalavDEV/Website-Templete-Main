import React from 'react';
import { PROFILE_DATA } from '../data/portfolioData';
import { ArrowUp, ShieldAlert } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <a href="#hero" className="brand-logo footer-logo">
              <span className="brand-initials">NE</span>
              <div className="brand-text">
                <span className="brand-name">{PROFILE_DATA.name}</span>
                <span className="brand-subtitle">WILDLIFE STORYTELLER</span>
              </div>
            </a>
            <p className="footer-tagline">"{PROFILE_DATA.tagline}"</p>
            <span className="footer-loc">Queenstown, New Zealand</span>
          </div>

          {/* Nav Links */}
          <div className="footer-nav">
            <h4 className="footer-heading">DOCUMENTARY CHAPTERS</h4>
            <div className="footer-links-grid">
              <a href="#chapter-01">01. Behind the Lens</a>
              <a href="#chapter-02">02. Visual Philosophy</a>
              <a href="#chapter-03">03. Selected Stories</a>
              <a href="#chapter-04">04. Field Experience</a>
              <a href="#chapter-05">05. Field Journeys</a>
              <a href="#chapter-06">06. Tools of the Story</a>
              <a href="#chapter-07">07. Education</a>
              <a href="#chapter-08">08. Publications</a>
              <a href="#chapter-09">09. Recognition</a>
              <a href="#contact">Contact & Inquiries</a>
            </div>
          </div>

          {/* Scroll Back to Top Button */}
          <div className="footer-back-top">
            <button className="back-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
              <ArrowUp size={20} />
              <span>RETURN TO TOP</span>
            </button>
          </div>
        </div>

        <hr className="footer-hr" />

        {/* Fictional Disclaimer & Copyright */}
        <div className="footer-bottom">
          <div className="footer-disclaimer-box">
            <ShieldAlert size={16} className="shield-icon" />
            <p className="disclaimer-text">
              <strong>FICTIONAL DEMONSTRATION NOTICE:</strong> This is a fictional Resume/CV template demonstration. All names, organizations, projects, locations, publications, awards, and visuals are fictional or AI-generated for demonstration purposes.
            </p>
          </div>

          <div className="footer-copy">
            <span>© 2026 Noah Everwood. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
