import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterPlaceholder, setNewsletterPlaceholder] = useState('Enter your email address');
  const [newsletterStyle, setNewsletterStyle] = useState<React.CSSProperties>({});

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;

    setNewsletterEmail('');
    setNewsletterPlaceholder('Subscribed! Check your inbox.');
    setNewsletterStyle({ borderColor: 'var(--color-accent)' });

    setTimeout(() => {
      setNewsletterPlaceholder('Enter your email address');
      setNewsletterStyle({});
    }, 4000);
  };

  return (
    <footer className="site-footer">
      <div className="container-xl">
        <div className="row g-5">
          
          {/* Brand & Bio */}
          <div className="col-lg-4 col-md-6">
            <Link to="/" className="brand-logo">
              <span className="brand-logo-text">EMBER <span>&</span> OLIVE</span>
              <span className="brand-subtext text-bone">Artisan Hearth & Wine Cellar</span>
            </Link>
            <p className="footer-brand-desc">
              Thoughtful seasonal cooking, local organic ingredients, and warm hospitality come together around every table. Savor every shared moment.
            </p>
            <div className="footer-social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
              <a href="https://tripadvisor.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Tripadvisor"><i className="bi bi-trophy"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item"><Link to="/" className="footer-link">Home</Link></li>
              <li className="footer-link-item"><Link to="/about" className="footer-link">Our Story</Link></li>
              <li className="footer-link-item"><Link to="/menu" className="footer-link">Seasonal Menu</Link></li>
              <li className="footer-link-item"><Link to="/events" className="footer-link">Private Events</Link></li>
              <li className="footer-link-item"><Link to="/gallery" className="footer-link">Photo Gallery</Link></li>
              <li className="footer-link-item"><Link to="/contact" className="footer-link">Contact & Hours</Link></li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div className="col-lg-3 col-md-6 col-6">
            <h4 className="footer-heading">Opening Hours</h4>
            <div className="footer-hours-row">
              <span className="footer-hours-day">Monday – Thursday</span>
              <span className="footer-hours-time">11:00 AM – 10:00 PM</span>
            </div>
            <div className="footer-hours-row">
              <span className="footer-hours-day">Friday – Saturday</span>
              <span className="footer-hours-time">11:00 AM – 11:30 PM</span>
            </div>
            <div className="footer-hours-row">
              <span className="footer-hours-day">Sunday Brunch</span>
              <span className="footer-hours-time">11:00 AM – 10:30 PM</span>
            </div>
            <p className="small text-bone opacity-60 mt-3 mb-0">
              Valet parking available at the main entrance.
            </p>
          </div>

          {/* Newsletter Subscription */}
          <div className="col-lg-3 col-md-6">
            <h4 className="footer-heading">Join The Hearth Club</h4>
            <p className="small text-bone opacity-75 mb-3">
              Get seasonal tasting menus, wine release invitations, and private event announcements directly to your inbox.
            </p>
            <form className="newsletter-form" id="footerNewsletterForm" onSubmit={handleNewsletterSubmit}>
              <input 
                type="email" 
                className="newsletter-input" 
                placeholder={newsletterPlaceholder} 
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                style={newsletterStyle}
                required 
                aria-label="Email Address for newsletter"
              />
              <button type="submit" className="newsletter-btn" aria-label="Subscribe to newsletter"><i className="bi bi-arrow-right"></i></button>
            </form>
          </div>

        </div>

        {/* Copyright & Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            © 2026 Ember & Olive. All Rights Reserved. Commercial Restaurant Website Template.
          </div>
          <div className="d-flex gap-3">
            <Link to="/about" className="text-bone opacity-60 hover-accent">Privacy Policy</Link>
            <span>·</span>
            <Link to="/about" className="text-bone opacity-60 hover-accent">Terms of Hospitality</Link>
            <span>·</span>
            <Link to="/contact" className="text-bone opacity-60 hover-accent">Directions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
