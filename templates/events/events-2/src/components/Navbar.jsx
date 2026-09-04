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
      <header className={`navbar fixed top-0 left-0 w-full max-w-full z-50 transition-all duration-300 ${scrolled ? 'scrolled bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200' : 'bg-transparent'}`}>
        <div className="container navbar-container flex items-center justify-between w-full px-4 sm:px-6 lg:px-8 py-4">
          {/* Logo Brand */}
          <div className="nav-brand flex items-center gap-2.5 cursor-pointer flex-shrink-0" onClick={() => handleNavClick('home')}>
            <div className="brand-icon-wrapper w-[38px] h-[38px] rounded-[10px] bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md">
              <Zap size={22} />
            </div>
            <span className="brand-logo-text font-bold text-xl tracking-tight text-slate-900">
              CYBER<span className="brand-logo-accent text-indigo-600">NEXUS</span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav-wrapper">
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
                  <Clock size={14} className="text-amber-500" /> Mode: Past 2025
                </>
              ) : (
                <>
                  <CalendarCheck size={14} className="text-emerald-500" /> Mode: Upcoming
                </>
              )}
            </button>

            {/* CTA Button */}
            <div className="nav-cta-desktop">
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
            </div>

            {/* Hamburger Button Mobile/Tablet */}
            <button
              className="mobile-hamburger"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile/Tablet Drawer Navigation Overlay */}
      <div className={`mobile-drawer-overlay fixed inset-0 w-full h-full bg-slate-950/95 backdrop-blur-xl z-50 flex flex-col justify-start items-center p-6 transition-all duration-300 overflow-y-auto ${mobileMenuOpen ? 'open opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="mobile-drawer-header w-full flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
          <div className="nav-brand flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('home')}>
            <div className="brand-icon-wrapper w-9 h-9 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white">
              <Zap size={20} />
            </div>
            <span className="brand-logo-text text-xl font-bold text-white">
              CYBER<span className="brand-logo-accent text-indigo-400">NEXUS</span>
            </span>
          </div>
          <button
            className="mobile-drawer-close min-h-[44px] min-w-[44px] w-11 h-11 rounded-full bg-slate-800/80 border border-slate-700 text-white flex items-center justify-center hover:bg-slate-700 transition-all"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Navigation Menu"
          >
            <X size={22} />
          </button>
        </div>

        <ul className="mobile-nav-links list-none flex flex-col items-center gap-3 w-full my-auto">
          {navItems.map((item, index) => (
            <li
              key={item.id}
              className="mobile-nav-item w-full text-center"
              style={{
                animation: mobileMenuOpen ? `fadeInUp 0.35s ease ${index * 0.04}s forwards` : 'none'
              }}
            >
              <button
                className={`mobile-nav-btn w-full min-h-[44px] text-lg font-bold py-2.5 transition-colors ${activePage === item.id ? 'active text-indigo-400 font-extrabold' : 'text-slate-200 hover:text-indigo-300'}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li className="w-full max-w-xs mt-6">
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
            transform: translateY(16px);
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

