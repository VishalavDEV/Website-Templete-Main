import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Download, Menu, X, Compass } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

export default function Navbar({ activeChapter, onOpenCV, isMuted, toggleAudio }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    { name: 'Story', href: '#chapter-01', chapter: '01' },
    { name: 'Stories', href: '#chapter-03', chapter: '03' },
    { name: 'Experience', href: '#chapter-04', chapter: '04' },
    { name: 'Expeditions', href: '#chapter-05', chapter: '05' },
    { name: 'Tools', href: '#chapter-06', chapter: '06', optional: true },
    { name: 'Publications', href: '#chapter-08', chapter: '08', optional: true },
    { name: 'Contact', href: '#contact', chapter: '09' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Brand Logo */}
        <a href="#hero" className="brand-logo">
          <span className="brand-initials">NE</span>
          <div className="brand-text">
            <span className="brand-name">{PROFILE_DATA.name}</span>
            <span className="brand-subtitle">WILDLIFE STORYTELLER</span>
          </div>
        </a>

        {/* Current Active Chapter Tracker */}
        <div className="chapter-indicator">
          <Compass size={14} className="compass-icon" />
          <span className="chapter-number">{activeChapter || 'CHAPTER 01'}</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`nav-link ${link.optional ? 'nav-link-optional' : ''}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions (Sound + CV Download) */}
        <div className="nav-actions">
          <button 
            className="sound-toggle-btn"
            onClick={toggleAudio}
            title={isMuted ? "Enable Ambient Field Audio" : "Mute Audio"}
            aria-label="Toggle ambient field audio"
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} className="audio-playing-icon" />}
            <span className="sound-label">{isMuted ? 'SOUND OFF' : 'SOUND ON'}</span>
          </button>

          <button className="cv-nav-btn" onClick={onOpenCV}>
            <Download size={14} />
            <span>DOWNLOAD CV</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <nav className="mobile-nav-list">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="mobile-nav-item"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="mobile-chapter-tag">CHAPTER {link.chapter}</span>
                <span className="mobile-link-name">{link.name}</span>
              </a>
            ))}
            <div className="mobile-drawer-actions">
              <button className="btn-primary w-full" onClick={() => { setMobileMenuOpen(false); onOpenCV(); }}>
                <Download size={16} /> Download Full CV
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
