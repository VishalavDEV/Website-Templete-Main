import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div>
            <h3 className="footer-brand-title">Lunara Press</h3>
            <p className="footer-brand-desc">
              Dedicated to publishing visionary speculative fiction and transformative literary voices that redefine the boundaries of human imagination.
            </p>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="footer-column-title">Explore</h4>
            <ul className="footer-links-list">
              <li><a href="#hero" className="footer-link">Home</a></li>
              <li><a href="#story" className="footer-link">The Book</a></li>
              <li><a href="#themes" className="footer-link">Key Themes</a></li>
              <li><a href="#author" className="footer-link">Mira Rowan</a></li>
              <li><a href="#preview" className="footer-link">Read Excerpt</a></li>
              <li><a href="#reviews" className="footer-link">Critical Reviews</a></li>
            </ul>
          </div>

          {/* Information Links */}
          <div>
            <h4 className="footer-column-title">Information</h4>
            <ul className="footer-links-list">
              <li><a href="#purchase" className="footer-link">Editions & Pricing</a></li>
              <li><a href="#faq" className="footer-link">Shipping & Returns</a></li>
              <li><a href="#faq" className="footer-link">Privacy Policy</a></li>
              <li><a href="#faq" className="footer-link">Terms of Service</a></li>
              <li><a href="#contact" className="footer-link">Press & Media</a></li>
              <li><a href="#contact" className="footer-link">Contact Support</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="footer-column-title">Follow Lunara</h4>
            <ul className="footer-links-list">
              <li><a href="#hero" className="footer-link">Instagram</a></li>
              <li><a href="#hero" className="footer-link">Twitter / X</a></li>
              <li><a href="#hero" className="footer-link">Goodreads Author Page</a></li>
              <li><a href="#hero" className="footer-link">YouTube Booktrailer</a></li>
              <li><a href="#hero" className="footer-link">Substack Newsletter</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© 2026 Lunara Press. All rights reserved. Designed for 'The Echoes of Tomorrow'.</div>
          <div>Designed with Editorial Excellence & Precision.</div>
        </div>
      </div>
    </footer>
  );
}
