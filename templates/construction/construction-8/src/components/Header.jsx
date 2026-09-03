import React from 'react';

export default function Header({ isLightMode, setIsLightMode, onOpenModal, backendStatus }) {
  return (
    <header className="topBar">
      <a href="#hero" className="brandWrap">
        <div className="brandLogoBox">BX</div>
        <div>
          <div className="brandName">BUILDX</div>
          <div className="brandTagline">Sustainable Biophilic Architecture</div>
        </div>
      </a>

      <ul className="navLinks">
        <li><a href="#hero" className="navLink">Philosophy</a></li>
        <li><a href="#telemetry" className="navLink">Impact Telemetry</a></li>
        <li><a href="#projects" className="navLink">Living Megastructures</a></li>
        <li><a href="#about" className="navLink">Atelier</a></li>
      </ul>

      <div className="navActions">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '0.75rem',
          fontFamily: 'Space Grotesk, monospace',
          color: backendStatus?.online ? '#52b788' : '#e9c46a',
          background: 'var(--forest-surface)',
          padding: '6px 12px',
          borderRadius: '20px',
          border: '1px solid var(--forest-border)'
        }}>
          <span style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: backendStatus?.online ? '#52b788' : '#e9c46a',
            display: 'inline-block'
          }} />
          {backendStatus?.online ? 'SPRING BOOT CONNECTED' : 'SPRING BOOT STANDBY'}
        </div>

        <button
          className="themeToggleBtn"
          onClick={() => setIsLightMode(!isLightMode)}
          aria-label="Toggle Theme"
        >
          {isLightMode ? '🌙 DARK' : '☀️ LIGHT'}
        </button>

        <button className="consultationCtaBtn" onClick={onOpenModal}>
          COMMISSION BIO-TOWER →
        </button>
      </div>
    </header>
  );
}
