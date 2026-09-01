import React, { useState } from 'react';

export default function Header({ darkMode, setDarkMode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="main-header" id="header">
      <div className="container nav-container">
        {/* Brand Logo */}
        <a href="#hero" className="brand-logo">
          <span className="brand-title">
            <strong className="brand-bold">ADVANCED</strong> <span className="text-orange">CONSTRUCTION</span>
          </span>
          <span className="brand-subtitle">CIVIL EPC</span>
        </a>

        {/* Navigation Menu */}
        <nav className={`nav-menu ${mobileOpen ? 'open' : ''}`} id="navMenu">
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

          <a href="#services" className="nav-link" onClick={() => setMobileOpen(false)}>OPERATIONS COCKPIT</a>
          <a href="#hero" className="nav-link" onClick={() => setMobileOpen(false)}>LOAD PHYSICS</a>
          <a href="#calculator" className="nav-link" onClick={() => setMobileOpen(false)}>EPC ESTIMATOR</a>
        </nav>

        {/* Action Buttons */}
        <div className="header-actions">
          <button
            className="adv-theme-toggle nav-theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            title="Toggle Theme"
          >
            <span>{darkMode ? '🌙' : '☀️'}</span>
            <span>{darkMode ? 'DARK MODE' : 'LIGHT MODE'}</span>
          </button>

          <a href="#calculator" className="btn-dispatch-bid">
            <span>DISPATCH BID</span>
            <span>→</span>
          </a>

          <button
            className="mobile-toggle"
            id="mobileMenuToggle"
            aria-label="Toggle Menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
