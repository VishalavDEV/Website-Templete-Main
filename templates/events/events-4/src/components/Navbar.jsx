import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();
  const navigate = useNavigate();

  // Navigation items in exact sequential order of page sections as you scroll down
  const navItems = [
    { name: 'Home', sectionId: 'hero', path: '/' },
    { name: 'About', sectionId: 'about', path: '/about' },
    { name: 'Programs', sectionId: 'programs', path: '/programs' },
    { name: 'Classes', sectionId: 'classes', path: '/classes' },
    { name: 'Equipment', sectionId: 'equipment', path: '/equipment' },
    { name: 'Trainers', sectionId: 'trainers', path: '/trainers' },
    { name: 'Event', sectionId: 'event', path: '/event' },       // Placed right before Pricing
    { name: 'Pricing', sectionId: 'pricing', path: '/pricing' },   // Placed right after Event
    { name: 'Leaderboard', sectionId: 'leaderboard', path: '/leaderboard' },
    { name: 'FAQ', sectionId: 'faq', path: '/faq' },
    { name: 'Contact', sectionId: 'contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      if (location.pathname === '/') {
        const scrollPosition = window.scrollY + 180;
        for (let i = navItems.length - 1; i >= 0; i--) {
          const section = document.getElementById(navItems[i].sectionId);
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(navItems[i].sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = (item) => {
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      const section = document.getElementById(item.sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(item.sectionId);
      }
    } else {
      navigate(item.path);
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <Link to="/" className="navbar-brand" onClick={() => handleNavClick(navItems[0])}>
            <div className="navbar-logo-icon">VF</div>
            <div className="navbar-logo-text">
              VORTEX FORGE
              <span>FITNESS ARENA</span>
            </div>
          </Link>

          <ul className="navbar-links">
            {navItems.map((item) => {
              const isActive = location.pathname === '/'
                ? activeSection === item.sectionId
                : location.pathname === item.path;

              return (
                <li key={item.name}>
                  <a
                    href={`#${item.sectionId}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item);
                    }}
                    className={`navbar-link ${isActive ? 'active' : ''}`}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="navbar-actions">
            <Button to="/membership" variant="outline" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>
              JOIN THE GYM
            </Button>
            <Button to="/registration" variant="primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>
              REGISTER NOW
            </Button>
            <button
              className="hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-in Menu */}
      <div
        className={`mobile-menu-overlay ${mobileMenuOpen ? 'active' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <button
          onClick={() => setMobileMenuOpen(false)}
          style={{
            alignSelf: 'flex-end',
            background: 'none',
            border: 'none',
            color: 'var(--color-yellow)',
            fontSize: '1.8rem',
            cursor: 'pointer'
          }}
        >
          ✕
        </button>
        <ul className="mobile-menu-links">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={`#${item.sectionId}`}
                className="mobile-menu-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item);
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
          <Button to="/registration" variant="primary" onClick={() => setMobileMenuOpen(false)}>
            REGISTER NOW
          </Button>
          <Button to="/membership" variant="outline" onClick={() => setMobileMenuOpen(false)}>
            JOIN THE GYM
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
