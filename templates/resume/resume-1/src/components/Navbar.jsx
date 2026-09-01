// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { personalInfo, navLinks } from '../data/resumeData';
import Icons from './Icons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace('#', ''));
    const observers = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.getElementById(href.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = personalInfo.cvFile;
    link.download = 'Jordan_Davis_CV.pdf';
    link.click();
  };

  return (
    <>
      <nav
        className={`t1-navbar${scrolled ? ' scrolled' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="t1-container t1-navbar-inner">
          {/* Logo */}
          <a
            href="#home"
            className="t1-navbar-logo"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            aria-label="Jordan Davis — Home"
          >
            <div className="t1-navbar-logo-mark" aria-hidden="true">
              {personalInfo.initials}
            </div>
            <div>
              <div className="t1-navbar-logo-name">{personalInfo.name}</div>
              <div className="t1-navbar-logo-title">Software Engineer</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <ul className="t1-navbar-nav" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={activeSection === link.href.replace('#', '') ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="t1-navbar-right">
            <button
              className="t1-btn t1-btn-primary"
              onClick={handleDownloadCV}
              aria-label="Download CV"
              style={{ padding: '9px 18px', fontSize: '14px' }}
            >
              <span style={{ display: 'inline-flex', width: 16, height: 16 }}>{Icons.download}</span>
              Download CV
            </button>
            <button
              className={`t1-hamburger${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="t1-mobile-nav"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="t1-mobile-nav"
        className={`t1-mobile-nav${menuOpen ? ' open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul className="t1-mobile-nav-list" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={activeSection === link.href.replace('#', '') ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="t1-btn t1-btn-primary"
          onClick={() => { handleDownloadCV(); setMenuOpen(false); }}
          style={{ width: '100%' }}
        >
          <span style={{ display: 'inline-flex', width: 16, height: 16 }}>{Icons.download}</span>
          Download CV
        </button>
      </div>
    </>
  );
}
