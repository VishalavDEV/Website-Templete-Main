import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Calendar, Sun, Moon, Menu, X, Ticket, Bookmark } from 'lucide-react';
import GooeyNav from './GooeyNav';

export default function Navbar({ theme, onToggleTheme, onOpenRegisterModal, savedScheduleCount = 0, onOpenMySchedule }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'About', path: '/about' },
    { name: 'Speakers', path: '/speakers' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Venue', path: '/venue' },
    { name: 'Tickets', path: '/tickets' },
    { name: 'Contact', path: '/contact' }
  ];

  const activeIndex = navLinks.findIndex(link => link.path === location.pathname);

  const gooeyItems = navLinks.map(link => ({
    label: link.name,
    href: link.path
  }));

  const handleNavClick = (item) => {
    if (item && item.href) {
      navigate(item.href);
    }
  };

  return (
    <>
      <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <div className="logo-icon">
              <Calendar size={22} />
            </div>
            <div className="logo-text">
              EVENT<span>ORA</span>
            </div>
          </Link>

          {/* Gooey Desktop Navigation Menu */}
          <div className="desktop-gooey-nav">
            <GooeyNav
              items={gooeyItems}
              initialActiveIndex={activeIndex >= 0 ? activeIndex : 0}
              onItemClick={handleNavClick}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </div>

          {/* Actions */}
          <div className="navbar-actions">
            {/* My Schedule Bookmark Counter */}
            <button
              onClick={onOpenMySchedule}
              className="theme-toggle-btn"
              title="My Saved Schedule"
              style={{ position: 'relative' }}
            >
              <Bookmark size={18} />
              {savedScheduleCount > 0 && (
                <span style={{ position: 'absolute', top: '-4px', right: '-4px', background: 'var(--secondary)', color: '#fff', borderRadius: '50%', width: '18px', height: '18px', fontSize: '0.7rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {savedScheduleCount}
                </span>
              )}
            </button>

            {/* Theme Toggle Switch */}
            <button
              onClick={onToggleTheme}
              className="theme-toggle-btn"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Register Button */}
            <button
              onClick={() => onOpenRegisterModal()}
              className="btn btn-primary btn-sm"
            >
              <Ticket size={16} /> Register Pass
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Toggle navigation menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-header">
          <Link
            to="/"
            className="navbar-logo"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="logo-icon">
              <Calendar size={22} />
            </div>
            <div className="logo-text">
              EVENT<span>ORA</span>
            </div>
          </Link>
          <button
            className="theme-toggle-btn"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`mobile-nav-link ${
                  location.pathname === link.path ? 'active' : ''
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenRegisterModal();
            }}
            className="btn btn-primary btn-lg"
            style={{ flex: 1 }}
          >
            <Ticket size={20} /> Register Pass
          </button>
        </div>
      </div>
    </>
  );
}

