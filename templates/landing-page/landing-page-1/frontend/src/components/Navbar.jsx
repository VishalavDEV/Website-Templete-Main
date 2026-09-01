import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Logo */}
          <a href="#" className="navbar-logo" onClick={closeMobileMenu}>
            <svg width="28" height="28" viewBox="0 0 32 32">
              <defs>
                <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
              <path d="M16 4C9.37 4 4 9.37 4 16s5.37 12 12 12 12-5.37 12-12S22.63 4 16 4zm0 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-2-8h4v4h-4z" />
            </svg>
            <span>Flowly AI</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav>
            <ul className="navbar-links">
              <li><a href="#product" className="navbar-link">Product</a></li>
              <li><a href="#solutions" className="navbar-link">Solutions</a></li>
              <li><a href="#features" className="navbar-link">Features</a></li>
              <li><a href="#pricing" className="navbar-link">Pricing</a></li>
              <li><a href="#resources" className="navbar-link">Resources</a></li>
            </ul>
          </nav>

          {/* Desktop CTAs */}
          <div className="navbar-actions">
            <button className="btn btn-secondary btn-sm">Sign In</button>
            <button className="btn btn-primary btn-sm">Get Started</button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button className="navbar-mobile-toggle" onClick={toggleMobileMenu} aria-label="Toggle navigation menu">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`navbar-mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="navbar-mobile-links">
          <li><a href="#product" className="navbar-mobile-link" onClick={closeMobileMenu}>Product</a></li>
          <li><a href="#solutions" className="navbar-mobile-link" onClick={closeMobileMenu}>Solutions</a></li>
          <li><a href="#features" className="navbar-mobile-link" onClick={closeMobileMenu}>Features</a></li>
          <li><a href="#pricing" className="navbar-mobile-link" onClick={closeMobileMenu}>Pricing</a></li>
          <li><a href="#resources" className="navbar-mobile-link" onClick={closeMobileMenu}>Resources</a></li>
        </ul>
        <div className="navbar-mobile-actions">
          <button className="btn btn-secondary" onClick={closeMobileMenu}>Sign In</button>
          <button className="btn btn-primary" onClick={closeMobileMenu}>
            Get Started <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </>
  );
}
