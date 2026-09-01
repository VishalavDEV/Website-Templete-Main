import React, { useEffect, useState } from 'react';
import { Zap, Menu, X, ArrowRight, CalendarCheck, Clock } from 'lucide-react';
import { SpecularButton } from './SpecularButton';
import '../styles/navbar.css';

export const Navbar = ({ activePage, setActivePage, isCompletedMode, setIsCompletedMode, onOpenRegister }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'events', label: 'Events' },
    { id: 'speakers', label: 'Speakers' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'venue', label: 'Venue' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Logo Brand */}
          <div className="nav-brand" onClick={() => handleNavClick('home')}>
            <div className="brand-icon-wrapper">
              <Zap size={24} />
            </div>
            <span className="brand-logo-text">
              CYBER<span className="brand-logo-accent">NEXUS</span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav>
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    className={`nav-link-btn ${activePage === item.id ? 'active' : ''}`}
                    onClick={() => handleNavClick(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Nav Actions Right */}
          <div className="nav-actions">
            {/* Event State Toggle: Upcoming vs Completed */}
            <button
              className="mode-toggle-btn"
              onClick={() => setIsCompletedMode(!isCompletedMode)}
              title="Toggle between Upcoming 2026 Summit and Completed 2025 Event Highlight Mode"
            >
              {isCompletedMode ? (
                <>
                  <Clock size={14} color="#f59e0b" /> Mode: Past 2025
                </>
              ) : (
                <>
                  <CalendarCheck size={14} color="#10b981" /> Mode: Upcoming
                </>
              )}
            </button>

            {/* CTA Button */}
            <SpecularButton
              size="sm"
              radius={12}
              lineColor="#00f2fe"
              baseColor="#7c3aed"
              textColor="#ffffff"
              tint="#7c3aed"
              tintOpacity={0.25}
              autoAnimate
              onClick={onOpenRegister}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                {isCompletedMode ? 'View Recap' : 'Register Now'}
                <ArrowRight size={16} />
              </span>
            </SpecularButton>

            {/* Hamburger Button Mobile */}
            <button
              className="mobile-hamburger"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Overlay */}
      <div className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        <button
          className="mobile-drawer-close"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close Navigation Menu"
        >
          <X size={26} />
        </button>

        <ul className="mobile-nav-links">
          {navItems.map((item, index) => (
            <li
              key={item.id}
              className="mobile-nav-item"
              style={{
                animation: mobileMenuOpen ? `fadeInUp 0.4s ease ${index * 0.06}s forwards` : 'none'
              }}
            >
              <button
                className={`mobile-nav-btn ${activePage === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li style={{ marginTop: '20px' }}>
            <SpecularButton
              size="md"
              radius={14}
              lineColor="#00f2fe"
              baseColor="#7c3aed"
              textColor="#ffffff"
              tint="#7c3aed"
              tintOpacity={0.25}
              autoAnimate
              style={{ width: '100%' }}
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
            >
              {isCompletedMode ? 'View Recap' : 'Register Now'} →
            </SpecularButton>
          </li>
        </ul>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};
