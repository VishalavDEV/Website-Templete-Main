import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ theme, toggleTheme, onOpenModal, backendOnline }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

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
      {/* Top Portal Quick Link Bar with Theme Switcher & Badges */}
      <div className="arcstone-top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <a href="#projects" className="top-nav-link">‹ LANDMARK CATALOG</a>
            <span className="sep">|</span>
            <a href="#home" className="top-nav-link">MAIN PORTAL</a>
          </div>
          <div className="top-bar-right">
            <div className="arcstone-badges-wrap">
              <span className="arcstone-badge-pill">React</span>
              <span className="arcstone-badge-pill">Spring Boot 3</span>
            </div>
            <button 
              className="arcstone-theme-toggle" 
              id="arcstoneThemeToggle" 
              onClick={toggleTheme}
              title="Toggle Light / Dark Mode"
            >
              <span id="arcThemeIcon">{theme === 'dark' ? '☀️' : '🌙'}</span>{' '}
              <span id="arcThemeText">{theme === 'dark' ? 'LIGHT MODE' : 'DARK MODE'}</span>
            </button>
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
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
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

            {/* CTA & Mobile Toggle */}
            <div className="nav-actions">
              <button 
                className="arcstone-theme-toggle mobile-theme-btn" 
                onClick={toggleTheme}
                title="Toggle Light / Dark Mode"
                aria-label="Toggle Light / Dark Mode"
              >
                <span>{theme === 'dark' ? '☀️' : '🌙'}</span>
              </button>
              <a href="#contact" className="btn-sage-outline header-cta">GET IN TOUCH</a>
              <button
                className="arcstone-mobile-toggle"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle Menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div
            className="arcstone-mobile-drawer"
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'var(--color-bg-darker, #07090f)',
              borderBottom: '2px solid var(--color-sage)',
              padding: '24px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
              zIndex: 9999
            }}
          >
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
              <span className="arcstone-badge-pill">React</span>
              <span className="arcstone-badge-pill">Spring Boot 3</span>
            </div>
            <a href="#home" onClick={() => setMobileOpen(false)} style={{ color: 'white', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 600 }}>HOME</a>
            <a href="#about" onClick={() => setMobileOpen(false)} style={{ color: 'white', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 600 }}>ABOUT</a>
            <a href="#services" onClick={() => setMobileOpen(false)} style={{ color: 'white', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 600 }}>SERVICES</a>
            <a href="#projects" onClick={() => setMobileOpen(false)} style={{ color: 'white', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 600 }}>PROJECTS</a>
            <a href="#estimator" onClick={() => setMobileOpen(false)} style={{ color: 'white', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 600 }}>ESTIMATOR</a>
            <a href="#contact" onClick={() => setMobileOpen(false)} className="btn-sage-outline" style={{ textAlign: 'center', marginTop: '6px' }}>GET IN TOUCH</a>
          </div>
        )}
      </header>
    </>
  );
}

