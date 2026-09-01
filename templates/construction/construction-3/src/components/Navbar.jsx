import React, { useState } from 'react';

export default function Navbar({ onOpenQuoteModal }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="futurix-header" id="futurixHeader">
      <div className="container">
        <div className="nav-inner">
          {/* Brand Logo */}
          <a href="#home" className="futurix-logo">
            <div className="logo-cube">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <polygon 
                  points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" 
                  stroke="var(--accent-blue)" 
                  strokeWidth="1.8" 
                  fill="rgba(0, 102, 255, 0.15)"
                />
                <line x1="12" y1="22" x2="12" y2="12" stroke="var(--accent-blue)" strokeWidth="1.8"/>
                <line x1="22" y1="8.5" x2="12" y2="12" stroke="var(--accent-blue)" strokeWidth="1.8"/>
                <line x1="2" y1="8.5" x2="12" y2="12" stroke="var(--accent-blue)" strokeWidth="1.8"/>
              </svg>
            </div>
            <div className="logo-text-block">
              <span className="logo-title">FUTURIX</span>
              <span className="logo-subtitle">CONSTRUCTIONS</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="nav-menu">
            <a href="#home" className="nav-link active">HOME</a>
            <a href="#about" className="nav-link">ABOUT</a>
            <a href="#services" className="nav-link">SERVICES</a>
            <a href="#projects" className="nav-link">PROJECTS</a>
            <a href="#estimator" className="nav-link">ESTIMATOR</a>
            <a href="#contact" className="nav-link">CONTACT</a>
          </nav>

          {/* Right Header Actions */}
          <div className="nav-actions">
            <button className="btn-cyan-gradient" onClick={onOpenQuoteModal} id="headerQuoteBtn">
              GET A QUOTE <span className="arrow">›</span>
            </button>
            <button 
              className="hamburger-btn" 
              onClick={() => setMobileOpen(!mobileOpen)} 
              aria-label="Toggle Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="mobile-nav-drawer">
          <a href="#home" className="nav-link" onClick={() => setMobileOpen(false)}>HOME</a>
          <a href="#about" className="nav-link" onClick={() => setMobileOpen(false)}>ABOUT</a>
          <a href="#services" className="nav-link" onClick={() => setMobileOpen(false)}>SERVICES</a>
          <a href="#projects" className="nav-link" onClick={() => setMobileOpen(false)}>PROJECTS</a>
          <a href="#estimator" className="nav-link" onClick={() => setMobileOpen(false)}>ESTIMATOR</a>
          <a href="#contact" className="nav-link" onClick={() => setMobileOpen(false)}>CONTACT</a>
          <button 
            className="btn-cyan-gradient" 
            style={{ width: '100%', justifyContent: 'center' }} 
            onClick={() => { setMobileOpen(false); onOpenQuoteModal(); }}
          >
            GET A QUOTE <span className="arrow">›</span>
          </button>
        </div>
      )}
    </header>
  );
}
