import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <header className={`navbar-wrapper ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="navbar-pill">
        {/* Custom Geometric Brand Logo in Gold */}
        <Link to="/" className="navbar-brand">
          <div className="brand-symbol">
            <svg viewBox="0 0 28 28" width="22" height="22" fill="none">
              <path d="M14 2L26 8.5V21.5L14 28L2 21.5V8.5L14 2Z" stroke="#C8A96B" strokeWidth="1.75" />
              <path d="M14 8L20 11.5V18.5L14 22L8 18.5V11.5L14 8Z" fill="#C8A96B" fillOpacity="0.18" stroke="#E2C98D" strokeWidth="1.2" />
              <circle cx="14" cy="15" r="2.5" fill="#E2C98D" />
            </svg>
          </div>
          <span className="brand-name">NEXORA</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`} end>
            <span>Home</span>
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>
            <span>About</span>
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>
            <span>Services</span>
          </NavLink>
          <NavLink to="/solutions" className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>
            <span>Solutions</span>
          </NavLink>
          <NavLink to="/industries" className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>
            <span>Industries</span>
          </NavLink>
          <NavLink to="/work" className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>
            <span>Work</span>
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>
            <span>Insights</span>
          </NavLink>
        </nav>

        {/* Right CTA */}
        <div className="navbar-actions">
          <Link to="/contact" className="nav-cta-btn">
            <span>Let's Talk</span>
            <ArrowUpRight size={15} className="cta-arrow" />
          </Link>

          {/* Hamburger Mobile Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-menu-header">
            <Link to="/" className="navbar-brand" onClick={() => setMobileMenuOpen(false)}>
              <div className="brand-symbol">
                <svg viewBox="0 0 28 28" width="20" height="20" fill="none">
                  <path d="M14 2L26 8.5V21.5L14 28L2 21.5V8.5L14 2Z" stroke="#C8A96B" strokeWidth="1.75" />
                  <circle cx="14" cy="15" r="2.5" fill="#E2C98D" />
                </svg>
              </div>
              <span className="brand-name">NEXORA</span>
            </Link>
            <button className="mobile-close-btn" onClick={() => setMobileMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <div className="mobile-nav-links">
            <NavLink to="/" className={({ isActive }) => `mobile-nav-link ${isActive ? 'mobile-active' : ''}`} end>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `mobile-nav-link ${isActive ? 'mobile-active' : ''}`}>
              About
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => `mobile-nav-link ${isActive ? 'mobile-active' : ''}`}>
              Services
            </NavLink>
            <NavLink to="/solutions" className={({ isActive }) => `mobile-nav-link ${isActive ? 'mobile-active' : ''}`}>
              Solutions
            </NavLink>
            <NavLink to="/industries" className={({ isActive }) => `mobile-nav-link ${isActive ? 'mobile-active' : ''}`}>
              Industries
            </NavLink>
            <NavLink to="/work" className={({ isActive }) => `mobile-nav-link ${isActive ? 'mobile-active' : ''}`}>
              Work & Case Studies
            </NavLink>
            <NavLink to="/team" className={({ isActive }) => `mobile-nav-link ${isActive ? 'mobile-active' : ''}`}>
              Leadership & Team
            </NavLink>
            <NavLink to="/careers" className={({ isActive }) => `mobile-nav-link ${isActive ? 'mobile-active' : ''}`}>
              Careers
            </NavLink>
            <NavLink to="/blog" className={({ isActive }) => `mobile-nav-link ${isActive ? 'mobile-active' : ''}`}>
              Insights & Editorial
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `mobile-nav-link ${isActive ? 'mobile-active' : ''}`}>
              Contact
            </NavLink>
          </div>

          <div className="mobile-menu-footer">
            <Link to="/contact" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
              <span>Let's Talk</span>
              <ArrowUpRight size={17} />
            </Link>
            <p className="mobile-menu-tagline">NEXORA — Technology. Strategy. Impact.</p>
          </div>
        </div>
      </div>
    </header>
  );
}
