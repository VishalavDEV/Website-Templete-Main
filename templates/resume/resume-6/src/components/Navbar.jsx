import React, { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { label: 'Profile', href: '#profile' },
  { label: 'Story', href: '#story' },
  { label: 'Experience', href: '#experience' },
  { label: 'Selected Work', href: '#work' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Recognition', href: '#recognition' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`em-navbar ${scrolled ? 'em-navbar--scrolled' : ''}`}>
        <div className="em-navbar__inner">
          {/* Monogram */}
          <a href="#hero" className="em-navbar__logo" onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}>
            <span className="em-navbar__monogram">EM</span>
          </a>

          {/* Desktop Nav */}
          <ul className="em-navbar__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="em-navbar__link"
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Controls */}
          <div className="em-navbar__right">
            <a href="#" className="btn-nav-outline">Download CV</a>
            <button
              className={`em-navbar__burger ${menuOpen ? 'em-navbar__burger--open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      <div className={`em-mobile-menu ${menuOpen ? 'em-mobile-menu--open' : ''}`}>
        <div className="em-mobile-menu__inner">
          <ul className="em-mobile-menu__links">
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                className="em-mobile-menu__item"
                style={{ transitionDelay: `${i * 0.06 + 0.1}s` }}
              >
                <a
                  href={link.href}
                  className="em-mobile-menu__link"
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                >
                  <span className="em-mobile-menu__num">0{i + 1}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="em-mobile-menu__footer">
            <a href="#" className="btn-primary">Download CV</a>
            <p className="body-sm" style={{ marginTop: '1.5rem', color: 'var(--em-gray-mid)' }}>
              hello@elenamarlowe.example<br />
              Amsterdam, Netherlands
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
