import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, Sun, Moon } from 'lucide-react';

export default function Navbar({ onOpenQuote, theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Portal Quick Link & Theme Switcher Bar */}
      <div className="buildhub-top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <span className="top-nav-link" style={{ cursor: 'pointer' }}>‹ TEMPLATES CATALOG</span>
            <span className="sep">|</span>
            <a href="#home" className="top-nav-link">MAIN PORTAL</a>
          </div>
          <div className="top-bar-right">
            <button 
              className="theme-toggle-pill" 
              onClick={onToggleTheme} 
              title="Toggle Light / Dark Mode"
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              {theme === 'light' ? <Moon size={14} /> : <Sun size={14} />}
              <span>{theme === 'light' ? 'DARK MODE' : 'LIGHT MODE'}</span>
            </button>
            <span className="tpl-tag">REACT + SPRING BOOT 3 • 3D BIM</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`} id="siteHeader">
        <div className="container">
          <div className="nav-inner">
            {/* Logo */}
            <a href="#home" className="brand-logo">
              <div className="logo-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <div className="logo-text">
                <span className="logo-main">BUILDHUB</span>
                <span className="logo-sub">CONSTRUCTIONS</span>
              </div>
            </a>

            {/* Desktop Navigation Menu */}
            <ul className="nav-menu">
              <li><a href="#home" className="nav-link active">HOME</a></li>
              <li><a href="#bim3d" className="nav-link">3D DIGITAL TWIN</a></li>
              <li><a href="#services" className="nav-link">SERVICES</a></li>
              <li><a href="#projects" className="nav-link">PROJECTS</a></li>
              <li className="nav-dropdown">
                <a href="#calculator" className="nav-link nav-dropdown-toggle">
                  PAGES <span className="dropdown-arrow">▼</span>
                </a>
                <ul className="dropdown-menu">
                  <li className="dropdown-item"><a href="#bim3d"><span>3D BIM Model</span> <span>›</span></a></li>
                  <li className="dropdown-item"><a href="#calculator"><span>Cost Calculator</span> <span>›</span></a></li>
                  <li className="dropdown-item"><a href="#about"><span>Why Choose Us</span> <span>›</span></a></li>
                </ul>
              </li>
              <li><a href="#calculator" className="nav-link">ESTIMATOR</a></li>
            </ul>

            {/* Right Contact Hotline & CTA Button */}
            <div className="nav-actions">
              <div 
                className="contact-pill trigger-callback-modal" 
                onClick={onOpenQuote}
                title="Click to schedule instant callback"
                style={{ cursor: 'pointer' }}
              >
                <div className="contact-icon-circle">
                  <Phone size={16} />
                </div>
                <div className="contact-text">
                  <span className="phone-number">+1 (234) 567-8900</span>
                  <span className="phone-sub">Call Us Anytime</span>
                </div>
              </div>

              <button className="btn btn-primary" onClick={onOpenQuote}>
                GET A QUOTE
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
