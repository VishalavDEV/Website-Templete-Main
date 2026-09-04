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

  // Lock body scroll when mobile menu is open
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
          <Link to="/" className="navbar-logo" onClick={() => setMobileMenuOpen(false)}>
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
              aria-label="My Saved Schedule"
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
              aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Register Button */}
            <button
              onClick={() => onOpenRegisterModal()}
              className="btn btn-primary btn-sm"
              style={{ display: 'none' }}
            >
              <Ticket size={16} /> Register Pass
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(prev => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`mobile-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Slide-Over Drawer Overlay */}
      <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`} role="dialog" aria-modal="true">
        <div className="mobile-nav-header">
          <Link
            to="/"
            className="navbar-logo"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="logo-icon">
              <Calendar size={20} />
            </div>
            <div className="logo-text">
              EVENT<span>ORA</span>
            </div>
          </Link>
          <button
            className="theme-toggle-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Quick Drawer Actions: Theme Toggle & My Schedule */}
        <div className="mobile-nav-controls">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)' }}>
            {theme === 'dark' ? <Moon size={16} color="var(--primary)" /> : <Sun size={16} color="var(--accent)" />}
            <span>{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
          </div>
          <button
            onClick={onToggleTheme}
            className="theme-toggle-btn"
            style={{ width: '38px', height: '38px', minWidth: '38px', minHeight: '38px' }}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
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

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenMySchedule();
            }}
            className="btn btn-outline btn-md"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <Bookmark size={18} /> My Saved Schedule ({savedScheduleCount})
          </button>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenRegisterModal();
            }}
            className="btn btn-primary btn-lg"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <Ticket size={20} /> Register Pass
          </button>
        </div>
      </div>
    </>
  );
}


