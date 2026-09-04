import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
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
    { name: 'Event', sectionId: 'event', path: '/event' },
    { name: 'Pricing', sectionId: 'pricing', path: '/pricing' },
    { name: 'Leaderboard', sectionId: 'leaderboard', path: '/leaderboard' },
    { name: 'FAQ', sectionId: 'faq', path: '/faq' },
    { name: 'Contact', sectionId: 'contact', path: '/contact' }
  ];

  // ScrollSpy listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

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

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Handle body scroll locking when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close on Escape or desktop resize
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth > 1024) setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNavClick = (item) => {
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      const section = document.getElementById(item.sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(item.sectionId);
      } else {
        navigate(item.path);
      }
    } else {
      navigate(item.path);
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Brand Logo */}
          <Link to="/" className="navbar-brand" onClick={() => handleNavClick(navItems[0])}>
            <div className="navbar-logo-icon">VF</div>
            <div className="navbar-logo-text">
              VORTEX FORGE
              <span>FITNESS ARENA</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
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

          {/* Actions: Desktop CTAs, Tablet/Mobile CTA, and Hamburger Toggle */}
          <div className="navbar-actions">
            <div className="nav-desktop-buttons">
              <Button to="/membership" variant="outline" className="nav-btn-join">
                JOIN THE GYM
              </Button>
              <Button to="/registration" variant="primary" className="nav-btn-register">
                REGISTER NOW
              </Button>
            </div>

            {/* Compact CTA for Tablet and Mobile */}
            <Link to="/registration" className="nav-mobile-cta btn btn-primary">
              REGISTER NOW
            </Link>
            
            <button
              className="hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-in Drawer Overlay */}
      <div
        className={`mobile-menu-overlay ${mobileMenuOpen ? 'active' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />
      <aside 
        className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}
        aria-label="Mobile Navigation"
      >
        <div className="mobile-menu-header">
          <Link to="/" className="navbar-brand" onClick={() => handleNavClick(navItems[0])}>
            <div className="navbar-logo-icon">VF</div>
            <div className="navbar-logo-text">
              VORTEX FORGE
              <span>FITNESS ARENA</span>
            </div>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close navigation menu"
            className="mobile-menu-close-btn"
          >
            <X size={20} />
          </button>
        </div>
        
        <ul className="mobile-menu-links">
          {navItems.map((item) => {
            const isActive = location.pathname === '/'
              ? activeSection === item.sectionId
              : location.pathname === item.path;

            return (
              <li key={item.name}>
                <a
                  href={`#${item.sectionId}`}
                  className={`mobile-menu-link ${isActive ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item);
                  }}
                >
                  <span>{item.name}</span>
                  <ChevronRight size={16} className="menu-arrow" />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="mobile-menu-ctas">
          <Button to="/registration" variant="primary" onClick={() => setMobileMenuOpen(false)} className="drawer-btn-primary">
            REGISTER NOW
          </Button>
          <Button to="/membership" variant="outline" onClick={() => setMobileMenuOpen(false)} className="drawer-btn-secondary">
            JOIN THE GYM
          </Button>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
