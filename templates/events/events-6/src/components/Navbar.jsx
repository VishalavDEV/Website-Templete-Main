import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Music, Ticket } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Section order strictly matching Home.jsx visual flow
  const navLinks = [
    { name: 'HOME', path: '/', sectionId: 'hero' },
    { name: 'ABOUT', path: '/about', sectionId: 'about' },
    { name: 'ARTISTS', path: '/artists', sectionId: 'artists' },
    { name: 'EVENTS', path: '/events', sectionId: 'events' },
    { name: 'SCHEDULE', path: '/schedule', sectionId: 'schedule' },
    { name: 'STAGES', path: '/stages', sectionId: 'stages' },
    { name: 'EXPERIENCE', path: '/experience', sectionId: 'experience' },
    { name: 'TICKETS', path: '/tickets', sectionId: 'tickets' },
    { name: 'GALLERY', path: '/gallery', sectionId: 'gallery' },
    { name: 'CONTACT', path: '/contact', sectionId: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Robust ScrollSpy algorithm when on Home Page
      if (isHomePage) {
        const triggerPoint = window.innerHeight * 0.4;
        let currentActive = 'hero';

        for (const link of navLinks) {
          const el = document.getElementById(link.sectionId);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= triggerPoint && rect.bottom >= 50) {
              currentActive = link.sectionId;
            }
          }
        }
        setActiveSection(currentActive);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage, location.pathname]);

  useEffect(() => {
    setMobileMenuOpen(false);
    if (!isHomePage) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  const handleNavClick = (e, link) => {
    setMobileMenuOpen(false);

    if (isHomePage && link.sectionId) {
      const el = document.getElementById(link.sectionId);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(link.sectionId);
      }
    }
  };

  const isLinkActive = (link) => {
    if (isHomePage) {
      return activeSection === link.sectionId;
    }
    return location.pathname === link.path;
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <Link to="/" className="navbar-logo" onClick={() => setActiveSection('hero')}>
            <Music className="navbar-logo-icon" size={26} />
            <span>VELORA <span className="logo-accent">LIVE</span></span>
          </Link>

          <div className="desktop-nav-group">
            <ul className="navbar-links">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`navbar-link ${isLinkActive(link) ? 'active' : ''}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="navbar-cta-wrapper">
              <Link to="/tickets" className="btn-primary navbar-cta-btn">
                <Ticket size={16} />
                GET TICKETS
              </Link>
            </div>
          </div>

          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Drawer Menu */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-menu-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                onClick={(e) => handleNavClick(e, link)}
                className={`mobile-menu-link ${isLinkActive(link) ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: '20px', width: '80%', maxWidth: '320px' }}>
          <Link to="/tickets" className="btn-primary mobile-cta-btn" onClick={() => setMobileMenuOpen(false)}>
            <Ticket size={20} />
            GET TICKETS
          </Link>
        </div>
      </div>
    </>
  );
}
