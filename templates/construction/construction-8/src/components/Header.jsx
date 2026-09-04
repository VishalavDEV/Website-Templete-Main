import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header({ isLightMode, setIsLightMode, onOpenModal }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="topBar">
      <a href="#hero" className="brandWrap">
        <div className="brandLogoBox">BX</div>
        <div>
          <div className="brandName">BUILDX</div>
          <div className="brandTagline">Biophilic Architecture</div>
        </div>
      </a>

      <ul className="navLinks">
        <li><a href="#hero" className="navLink">Philosophy</a></li>
        <li><a href="#telemetry" className="navLink">Impact Telemetry</a></li>
        <li><a href="#projects" className="navLink">Living Megastructures</a></li>
        <li><a href="#about" className="navLink">Atelier</a></li>
      </ul>

      <div className="navActions">
        <button
          className="themeToggleBtn"
          onClick={() => setIsLightMode(!isLightMode)}
          aria-label="Toggle Theme"
        >
          {isLightMode ? '🌙' : '☀️'}
        </button>

        <button className="consultationCtaBtn header-cta-btn" onClick={onOpenModal}>
          COMMISSION →
        </button>

        <button
          className="buildx-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div
          className="buildx-mobile-drawer"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'var(--forest-card)',
            borderBottom: '2px solid var(--green-bright)',
            padding: '24px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
            zIndex: 999
          }}
        >
          <a href="#hero" onClick={() => setMobileOpen(false)} style={{ color: 'var(--text-main)', textDecoration: 'none', fontSize: '1rem', fontWeight: 600 }}>Philosophy</a>
          <a href="#telemetry" onClick={() => setMobileOpen(false)} style={{ color: 'var(--text-main)', textDecoration: 'none', fontSize: '1rem', fontWeight: 600 }}>Impact Telemetry</a>
          <a href="#projects" onClick={() => setMobileOpen(false)} style={{ color: 'var(--text-main)', textDecoration: 'none', fontSize: '1rem', fontWeight: 600 }}>Living Megastructures</a>
          <a href="#about" onClick={() => setMobileOpen(false)} style={{ color: 'var(--text-main)', textDecoration: 'none', fontSize: '1rem', fontWeight: 600 }}>Atelier</a>
          <button
            className="consultationCtaBtn"
            style={{ width: '100%', marginTop: '6px', textAlign: 'center' }}
            onClick={() => {
              setMobileOpen(false);
              onOpenModal();
            }}
          >
            COMMISSION BIO-TOWER →
          </button>
        </div>
      )}
    </header>
  );
}

