import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Compass, ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export default function Navbar({ onOpenCV }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('profile');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = ['profile', 'practice', 'projects', 'experience', 'expertise', 'education', 'research', 'contact'];
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

  const navLinks = [
    { id: 'profile', label: 'Profile' },
    { id: 'practice', label: 'Practice' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'expertise', label: 'Expertise' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header className={`sticky-nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          {/* LEFT: Monogram & Identity */}
          <div className="nav-brand" onClick={() => scrollTo('profile')}>
            <div className="monogram-box">AV</div>
            <div className="brand-text">
              <span className="brand-name">{profileData.name}</span>
              <span className="brand-title">ARCHITECT / SPATIAL DESIGNER</span>
            </div>
          </div>

          {/* CENTER: Navigation Links */}
          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* RIGHT SIDE: Download CV & Mobile Toggle */}
          <div className="nav-actions">
            <button className="btn-outline cv-btn" onClick={onOpenCV}>
              <Download size={14} />
              <span>Download CV</span>
            </button>

            <button 
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Compass size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE FULL-SCREEN ARCHITECTURAL OVERLAY */}
      {mobileMenuOpen && (
        <div className="mobile-overlay">
          <div className="mobile-overlay-grid"></div>
          <div className="mobile-overlay-header">
            <div className="monogram-box">AV</div>
            <span className="mono-text">COPENHAGEN / DK — 2026</span>
            <button className="mobile-close" onClick={() => setMobileMenuOpen(false)}>
              <X size={28} />
            </button>
          </div>

          <div className="mobile-nav-content">
            <span className="section-label">NAVIGATION MATRIX</span>
            <nav className="mobile-links">
              {navLinks.map((link, idx) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`mobile-link ${activeSection === link.id ? 'active' : ''}`}
                >
                  <span className="link-num">0{idx + 1}</span>
                  <span className="link-text">{link.label}</span>
                  <ArrowUpRight size={20} className="link-arrow" />
                </button>
              ))}
            </nav>

            <div className="mobile-overlay-footer">
              <button className="btn-primary full-width" onClick={() => { setMobileMenuOpen(false); onOpenCV(); }}>
                <Download size={16} />
                <span>DOWNLOAD COMPLETE CV</span>
              </button>
              <p className="mono-text legal-note">
                {profileData.disclaimer}
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .sticky-nav {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          height: var(--header-height);
          background-color: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border-light);
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .sticky-nav.scrolled {
          background-color: rgba(255, 255, 255, 0.98);
          border-bottom-color: var(--border-medium);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 16px;
          cursor: pointer;
        }

        .monogram-box {
          width: 42px;
          height: 42px;
          background-color: var(--accent-charcoal);
          color: var(--bg-pure);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.1rem;
          letter-spacing: -0.05em;
          transition: transform 0.3s ease;
        }

        .nav-brand:hover .monogram-box {
          background-color: var(--accent-green);
          transform: rotate(90deg);
        }

        .brand-text {
          display: flex;
          flex-direction: column;
        }

        .brand-name {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          color: var(--text-main);
          line-height: 1.1;
        }

        .brand-title {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          margin-top: 2px;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .nav-link {
          background: none;
          border: none;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-muted);
          cursor: pointer;
          padding: 8px 0;
          position: relative;
          transition: color 0.25s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--accent-green);
          transition: width 0.3s ease;
        }

        .nav-link:hover {
          color: var(--text-main);
        }

        .nav-link.active {
          color: var(--accent-green);
          font-weight: 700;
        }

        .nav-link.active::after {
          width: 100%;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .cv-btn {
          padding: 10px 20px;
          font-size: 0.75rem;
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: 1px solid var(--border-light);
          padding: 10px;
          color: var(--text-main);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .mobile-toggle:hover {
          background-color: var(--bg-gray);
        }

        /* Mobile Overlay */
        .mobile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: var(--bg-pure);
          z-index: 9999;
          display: flex;
          flex-direction: column;
          padding: 24px;
          animation: slideDown 0.3s ease forwards;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .mobile-overlay-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--border-light);
        }

        .mobile-close {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text-main);
        }

        .mobile-nav-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 40px 0 20px;
        }

        .mobile-links {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 24px;
        }

        .mobile-link {
          display: flex;
          align-items: center;
          gap: 20px;
          background: none;
          border: none;
          border-bottom: 1px solid var(--border-light);
          padding: 16px 0;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .link-num {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--accent-green);
        }

        .link-text {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--text-main);
          flex: 1;
        }

        .mobile-link.active .link-text {
          color: var(--accent-green);
        }

        .mobile-overlay-footer {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: auto;
        }

        .full-width {
          width: 100%;
        }

        .legal-note {
          font-size: 0.65rem;
          text-align: center;
          opacity: 0.6;
        }

        @media (max-width: 1024px) {
          .desktop-nav {
            display: none;
          }
          .mobile-toggle {
            display: flex;
          }
        }
      `}</style>
    </>
  );
}
