import React, { useState } from 'react';

export default function Header({ darkMode, setDarkMode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState('cranes');

  const toggleSection = (sec) => {
    setExpandedSection(expandedSection === sec ? '' : sec);
  };

  const handleLinkClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="main-header" id="header">
      <div className="container nav-container">
        {/* Brand Logo */}
        <a href="#hero" className="brand-logo" onClick={() => setMobileOpen(false)}>
          <span className="brand-title">
            <strong className="brand-bold">ADVANCED</strong> <span className="text-orange">CONSTRUCTION</span>
          </span>
          <span className="brand-subtitle">CIVIL EPC</span>
        </a>

        {/* Desktop Navigation Menu (>1024px) */}
        <nav className="desktop-nav" id="desktopNav">
          <div className="nav-item-dropdown">
            <a href="#services" className="nav-link dropdown-trigger">
              HEAVY FLEET & CRANES <span className="dropdown-chevron">▾</span>
            </a>
            <div className="mega-blueprint-dropdown">
              <div className="mega-grid-4">
                <div className="mega-col">
                  <div className="mega-col-header">
                    <span className="mega-icon">🏗️</span>
                    <h4>Heavy Tower Fleet</h4>
                  </div>
                  <ul className="mega-links">
                    <li><a href="#services">• 1,200T Lattice Boom Cranes</a></li>
                    <li><a href="#services">• Liebherr High-Rise Towers</a></li>
                    <li><a href="#services">• Self-Erecting Hydraulic Jibs</a></li>
                  </ul>
                </div>
                <div className="mega-col">
                  <div className="mega-col-header">
                    <span className="mega-icon">📐</span>
                    <h4>Rigging & Telemetry</h4>
                  </div>
                  <ul className="mega-links">
                    <li><a href="#services">• 3D Tandem Lift Modeling</a></li>
                    <li><a href="#services">• Anemometer Telemetry</a></li>
                    <li><a href="#services">• Dynamic Load Cell Monitoring</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="nav-item-dropdown">
            <a href="#services" className="nav-link dropdown-trigger">
              EPC SECTORS <span className="dropdown-chevron">▾</span>
            </a>
            <div className="mega-blueprint-dropdown">
              <div className="mega-grid-4">
                <div className="mega-col">
                  <div className="mega-col-header">
                    <span className="mega-icon">🌉</span>
                    <h4>Civil Infrastructure</h4>
                  </div>
                  <ul className="mega-links">
                    <li><a href="#services">• Highway Viaducts</a></li>
                    <li><a href="#services">• Deep Seismic Foundations</a></li>
                    <li><a href="#services">• Port & Maritime Dredging</a></li>
                  </ul>
                </div>
                <div className="mega-col">
                  <div className="mega-col-header">
                    <span className="mega-icon">🏢</span>
                    <h4>Commercial Supertall</h4>
                  </div>
                  <ul className="mega-links">
                    <li><a href="#services">• High-Rise Steel Framing</a></li>
                    <li><a href="#services">• Unitized Glass Curtain Wall</a></li>
                    <li><a href="#services">• Seismic Moment Connections</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <a href="#services" className="nav-link">OPERATIONS COCKPIT</a>
          <a href="#hero" className="nav-link">LOAD PHYSICS</a>
          <a href="#calculator" className="nav-link">EPC ESTIMATOR</a>
        </nav>

        {/* Action Buttons */}
        <div className="header-actions">
          <button
            className="adv-theme-toggle nav-theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            title="Toggle Theme"
            id="advThemeToggle"
          >
            <span className="theme-icon">{darkMode ? '🌙' : '☀️'}</span>
            <span className="theme-text">{darkMode ? 'DARK MODE' : 'LIGHT MODE'}</span>
          </button>

          <a href="#calculator" className="btn-dispatch-bid">
            <span>DISPATCH BID</span>
            <span>→</span>
          </a>

          {/* Mobile / Tablet Hamburger Toggle */}
          <button
            className={`mobile-toggle ${mobileOpen ? 'is-open' : ''}`}
            id="mobileMenuToggle"
            aria-label="Toggle Navigation Menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <span className="mobile-toggle-close">✕</span>
            ) : (
              <div className="hamburger-box">
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Full Navigation Drawer */}
      {mobileOpen && (
        <div className="mobile-drawer-menu" id="mobileDrawer">
          <div className="mobile-drawer-inner">
            
            {/* Section 1: Heavy Fleet & Cranes */}
            <div className="drawer-group">
              <button 
                className="drawer-group-header" 
                onClick={() => toggleSection('cranes')}
              >
                <span>🏗️ HEAVY FLEET & CRANES</span>
                <span className="drawer-chevron">{expandedSection === 'cranes' ? '▲' : '▼'}</span>
              </button>
              {expandedSection === 'cranes' && (
                <div className="drawer-sublinks">
                  <a href="#services" onClick={() => handleLinkClick('#services')}>• 1,200T Lattice Boom Cranes</a>
                  <a href="#services" onClick={() => handleLinkClick('#services')}>• Liebherr High-Rise Towers</a>
                  <a href="#services" onClick={() => handleLinkClick('#services')}>• Self-Erecting Hydraulic Jibs</a>
                  <a href="#services" onClick={() => handleLinkClick('#services')}>• 3D Tandem Lift Modeling & Telemetry</a>
                </div>
              )}
            </div>

            {/* Section 2: EPC Sectors */}
            <div className="drawer-group">
              <button 
                className="drawer-group-header" 
                onClick={() => toggleSection('sectors')}
              >
                <span>🌉 EPC SECTORS</span>
                <span className="drawer-chevron">{expandedSection === 'sectors' ? '▲' : '▼'}</span>
              </button>
              {expandedSection === 'sectors' && (
                <div className="drawer-sublinks">
                  <a href="#services" onClick={() => handleLinkClick('#services')}>• Highway Viaducts & Bridges</a>
                  <a href="#services" onClick={() => handleLinkClick('#services')}>• Deep Seismic Foundations</a>
                  <a href="#services" onClick={() => handleLinkClick('#services')}>• High-Rise Steel Framing</a>
                  <a href="#services" onClick={() => handleLinkClick('#services')}>• Port & Maritime Dredging</a>
                </div>
              )}
            </div>

            {/* Section 3: Standalone Action Links */}
            <div className="drawer-direct-links">
              <a href="#services" className="drawer-direct-link" onClick={() => handleLinkClick('#services')}>
                🚀 OPERATIONS COCKPIT
              </a>
              <a href="#hero" className="drawer-direct-link" onClick={() => handleLinkClick('#hero')}>
                📐 LOAD PHYSICS & TELEMETRY
              </a>
              <a href="#calculator" className="drawer-direct-link" onClick={() => handleLinkClick('#calculator')}>
                💰 EPC PARAMETRIC ESTIMATOR
              </a>
            </div>

            {/* Dispatch Bid Button */}
            <a 
              href="#calculator" 
              className="btn-dispatch-bid" 
              style={{ width: '100%', justifyContent: 'center', marginTop: '14px', padding: '14px' }}
              onClick={() => handleLinkClick('#calculator')}
            >
              <span>DISPATCH BID FOR PDF</span>
              <span>→</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
