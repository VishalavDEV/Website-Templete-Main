import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Compass } from 'lucide-react';
import { CHEF_PROFILE } from '../data/culinaryData';

export default function Navbar({ onOpenCV }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Career", href: "#career" },
    { label: "Signature Work", href: "#signature-work" },
    { label: "Expertise", href: "#expertise" },
    { label: "Recognition", href: "#recognition" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-inner">
          <a href="#hero" className="nav-brand">
            <div className="nav-initials">{CHEF_PROFILE.initials}</div>
            <div className="nav-brand-text">
              <span className="nav-name">{CHEF_PROFILE.name.toUpperCase()}</span>
              <span className="nav-sub">EXECUTIVE CHEF</span>
            </div>
          </a>

          <ul className="nav-links">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <a href={item.href} className="nav-link">{item.label}</a>
              </li>
            ))}
          </ul>

          <div className="nav-right">
            <button className="btn-secondary" onClick={onOpenCV} style={{ padding: '0.6rem 1.2rem', fontSize: '0.75rem' }}>
              <Download size={15} /> Download CV
            </button>

            <button 
              className="mobile-menu-toggle" 
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu Overlay */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <div className="nav-brand">
            <div className="nav-initials">{CHEF_PROFILE.initials}</div>
            <div className="nav-brand-text">
              <span className="nav-name">{CHEF_PROFILE.name.toUpperCase()}</span>
              <span className="nav-sub">CULINARY DIRECTOR</span>
            </div>
          </div>
          <button 
            className="mobile-menu-toggle" 
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        <ul className="mobile-menu-links">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <a 
                href={item.href} 
                className="mobile-menu-link" 
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="mobile-menu-num">0{idx + 1}</span>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: 'auto', paddingTop: '2rem', borderTop: '1px solid rgba(43,41,39,0.1)' }}>
          <button className="btn-primary" onClick={() => { setMobileMenuOpen(false); onOpenCV(); }} style={{ width: '100%', justifyContent: 'center' }}>
            <Download size={16} /> View & Download CV
          </button>
        </div>
      </div>
    </>
  );
}
