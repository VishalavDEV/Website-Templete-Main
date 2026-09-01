import React from 'react';

export default function Navbar({ isDarkMode, toggleTheme }) {
  return (
    <header className="hero-top-header">
      <div className="container-fluid header-flex">
        {/* Brand Title & Subtitle Matching Screenshot */}
        <a href="#hero" className="hero-brand">
          <h1 className="brand-title">New House</h1>
          <span className="brand-sub">строительство элитных домов</span>
        </a>

        {/* Minimalist Nav Links & Dropdowns */}
        <nav className="hero-nav">
          <div className="nav-dropdown-item">
            <a href="#about" className="h-nav-link">
              About <span className="nav-arrow">▾</span>
            </a>
            <div className="h-dropdown-menu">
              <a href="#about" className="h-drop-link">Philosophy & Vision</a>
              <a href="#materials" className="h-drop-link">Materials & Craftsmanship</a>
              <a href="#about" className="h-drop-link">Architectural Team</a>
            </div>
          </div>
          <div className="nav-dropdown-item">
            <a href="#portfolio" className="h-nav-link">
              Villas <span className="nav-arrow">▾</span>
            </a>
            <div className="h-dropdown-menu">
              <a href="#portfolio" className="h-drop-link">Lakefront Pavilions</a>
              <a href="#portfolio" className="h-drop-link">Alpine Cantilevers</a>
              <a href="#portfolio" className="h-drop-link">Forest Estates</a>
            </div>
          </div>
          <a href="#materials" className="h-nav-link">Materials</a>
          <a href="#configurator" className="h-nav-link">Configurator</a>
          <a href="#contact" className="h-nav-link">Contact</a>
        </nav>

        {/* Right Actions: Theme Toggle & Est. Year Tag */}
        <div className="header-right-box">
          <button 
            className="nh-theme-toggle" 
            onClick={toggleTheme} 
            title="Toggle Light / Dark Mode"
            id="nhThemeToggle"
          >
            <span>{isDarkMode ? '☀️' : '🌙'}</span>{' '}
            <span>{isDarkMode ? 'LIGHT MODE' : 'DARK MODE'}</span>
          </button>
          <div className="hero-year-tag">2018</div>
        </div>
      </div>
    </header>
  );
}
