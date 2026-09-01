import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Download } from 'lucide-react';

export default function Navbar({ onOpenCv }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Profile', href: '#profile' },
    { label: 'Collections', href: '#collections' },
    { label: 'Lookbook', href: '#lookbook' },
    { label: 'Process', href: '#process' },
    { label: 'Career', href: '#career' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Projects', href: '#projects' },
    { label: 'Recognition', href: '#recognition' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'compact' : ''}`}>
        <div className="navbar-container">
          <a href="#profile" className="brand-mark">
            <span className="brand-logo-text">ELARA VOSS</span>
            <span className="brand-subtext">FASHION DESIGNER & CREATIVE DIRECTOR</span>
          </a>

          <ul className="nav-center-menu">
            {navLinks.slice(0, 6).map((link, idx) => (
              <li key={idx}>
                <a href={link.href} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>

          <div className="nav-right-action" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <button 
              onClick={onOpenCv} 
              className="btn-editorial-secondary"
              style={{ padding: '0.6rem 1.4rem', fontSize: '0.75rem' }}
            >
              <Download size={14} />
              <span>Download CV</span>
            </button>
          </div>

          <button 
            className="mobile-menu-toggle" 
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Navigation Menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Overlay */}
      <div className={`mobile-overlay-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-overlay-header">
          <span className="brand-logo-text">ELARA VOSS</span>
          <button 
            onClick={() => setMobileMenuOpen(false)}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <X size={32} />
          </button>
        </div>

        <ul className="mobile-nav-list">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <a 
                href={link.href} 
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ paddingTop: '2rem', borderTop: '1px solid var(--border-subtle)' }}>
          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenCv();
            }}
            className="btn-editorial-primary"
            style={{ width: '100%' }}
          >
            <Download size={16} />
            <span>Download Digital CV</span>
          </button>
        </div>
      </div>
    </>
  );
}
