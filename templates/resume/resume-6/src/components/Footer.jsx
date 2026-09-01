import React from 'react';
import './Footer.css';

const socialLinks = [
  { label: 'LinkedIn', href: '#' },
  { label: 'Behance', href: '#' },
  { label: 'Email', href: 'mailto:hello@elenamarlowe.example' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="em-footer">
      <div className="em-footer__top">
        <div className="divider"></div>
      </div>
      <div className="container">
        <div className="em-footer__inner">
          <div className="em-footer__brand">
            <button className="em-footer__monogram" onClick={scrollToTop} aria-label="Back to top">
              EM
            </button>
            <div className="em-footer__brand-text">
              <span className="em-footer__name">Elena Marlowe</span>
              <span className="em-footer__role section-label">Creative Director & Brand Strategist</span>
            </div>
          </div>
          <div className="em-footer__center">
            <span className="em-footer__disclaimer section-label">
              Creative Director & Brand Strategist
            </span>
          </div>
          <div className="em-footer__right">
            <div className="em-footer__socials">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} className="em-footer__social">
                  {link.label}
                </a>
              ))}
            </div>
            <p className="em-footer__copy section-label">
              © 2026 Elena Marlowe.<br />
              <span style={{ color: 'rgba(250,248,244,0.3)', fontSize: '0.55rem' }}>
                All content is fictional for template demonstration purposes.
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
