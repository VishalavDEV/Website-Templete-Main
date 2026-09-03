import React, { useState, useEffect } from 'react';

export const Header = ({ onOpenInquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.getAttribute('id'));
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    sections.forEach((sec) => observer.observe(sec));
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  // ESC key listener to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const handleCtaClick = (e) => {
    e.preventDefault();
    closeMobileMenu();
    if (onOpenInquiry) {
      onOpenInquiry();
    }
  };

  return (
    <>
      <header 
        className={`site-header ${scrolled ? 'scrolled' : ''}`} 
        role="banner"
      >
        {/* Studio Brandmark (Top-Left: MONOLITH) */}
        <div className="brand-container">
          <a href="#hero" className="brand-title" id="nav-brand">
            MONOLITH
          </a>
          <span className="brand-tagline">Architecture Beyond Structure</span>
        </div>

        {/* Navigation links: PROJECTS, PROCESS, STUDIO */}
        <nav className="nav-container" role="navigation" aria-label="Main Navigation">
          <ul className="nav-links">
            <li className="nav-item">
              <a 
                href="#featured-project" 
                id="nav-projects"
                className={activeSection === 'featured-project' || activeSection === 'project-index' ? 'active' : ''}
              >
                <span className="nav-index">01</span>Projects
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#process" 
                id="nav-process"
                className={activeSection === 'process' ? 'active' : ''}
              >
                <span className="nav-index">02</span>Process
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#studio" 
                id="nav-studio"
                className={activeSection === 'studio' ? 'active' : ''}
              >
                <span className="nav-index">03</span>Studio
              </a>
            </li>
          </ul>
        </nav>

        {/* CTA: START A PROJECT */}
        <div className="nav-cta-wrapper">
          <button 
            className="btn-cta-nav" 
            id="btn-start-project"
            onClick={handleCtaClick}
          >
            Start a Project
          </button>

          {/* Mobile Hamburger Toggle Button */}
          <button 
            className={`mobile-toggle-btn ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div 
        className={`mobile-nav-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* Mobile Navigation Drawer */}
      <div 
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        <div className="brand-container" style={{ marginBottom: '3rem' }}>
          <span className="brand-title">MONOLITH</span>
          <span className="brand-tagline">Spatial Design Studio</span>
        </div>

        <ul className="mobile-links-list">
          <li>
            <a 
              href="#featured-project" 
              onClick={closeMobileMenu}
              className={activeSection === 'featured-project' ? 'active' : ''}
            >
              <span className="mobile-index">01</span> Projects
            </a>
          </li>
          <li>
            <a 
              href="#process" 
              onClick={closeMobileMenu}
              className={activeSection === 'process' ? 'active' : ''}
            >
              <span className="mobile-index">02</span> Process
            </a>
          </li>
          <li>
            <a 
              href="#studio" 
              onClick={closeMobileMenu}
              className={activeSection === 'studio' ? 'active' : ''}
            >
              <span className="mobile-index">03</span> Studio
            </a>
          </li>
          <li>
            <a 
              href="#manifesto" 
              onClick={closeMobileMenu}
              className={activeSection === 'manifesto' ? 'active' : ''}
            >
              <span className="mobile-index">04</span> Manifesto
            </a>
          </li>
        </ul>

        <div className="mobile-drawer-footer">
          <button 
            className="btn-cta-nav" 
            onClick={handleCtaClick} 
            style={{ display: 'inline-flex', width: '100%', justifyContent: 'center' }}
          >
            Start a Project
          </button>
          <span style={{ marginTop: '1rem' }}>Press ESC to close</span>
        </div>
      </div>
    </>
  );
};
