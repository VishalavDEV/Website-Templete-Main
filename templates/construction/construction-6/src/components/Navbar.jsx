import React, { useState, useEffect } from 'react';

export default function Navbar({ theme, toggleTheme, onOpenModal, backendOnline }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = ['home', 'about', 'services', 'projects', 'estimator', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Portal Quick Link Bar with Theme Switcher */}
      <div className="arcstone-top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <a href="#projects" className="top-nav-link">‹ LANDMARK CATALOG</a>
            <span className="sep">|</span>
            <span className="top-nav-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <span style={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: backendOnline ? '#4ade80' : '#f59e0b',
                boxShadow: backendOnline ? '0 0 8px #4ade80' : 'none'
              }}></span>
              SPRING BOOT API: {backendOnline ? 'ONLINE (PORT 8080)' : 'CONNECTING...'}
            </span>
          </div>
          <div className="top-bar-right">
            <button 
              className="arcstone-theme-toggle" 
              id="arcstoneThemeToggle" 
              onClick={toggleTheme}
              title="Toggle Light / Dark Mode"
            >
              <span id="arcThemeIcon">{theme === 'dark' ? '☀️' : '🌙'}</span>{' '}
              <span id="arcThemeText">{theme === 'dark' ? 'LIGHT MODE' : 'DARK MODE'}</span>
            </button>
            <span>REACT + SPRING BOOT 3</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className={`arcstone-header ${scrolled ? 'scrolled' : ''}`} id="arcstoneHeader">
        <div className="container">
          <div className="nav-inner">
            {/* Logo */}
            <a href="#home" className="arcstone-logo">
              <div className="logo-symbol">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <polygon points="12 2 21 12 12 22 3 12" stroke="white" strokeWidth="2" fill="rgba(255,255,255,0.08)"/>
                  <polygon points="12 6 18 12 12 18 6 12" fill="var(--color-sage)"/>
                </svg>
              </div>
              <span className="logo-text">ARCSTONE</span>
            </a>

            {/* Menu Links */}
            <nav className="nav-menu">
              <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>HOME</a>
              <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>ABOUT</a>
              <a href="#services" className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}>SERVICES</a>
              <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>PROJECTS</a>
              <a href="#estimator" className={`nav-link ${activeSection === 'estimator' ? 'active' : ''}`}>ESTIMATOR</a>
              <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>CONTACT</a>
            </nav>

            {/* CTA Button */}
            <div className="nav-actions">
              <a href="#contact" className="btn-sage-outline">GET IN TOUCH</a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
