import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header({
  isDarkMode,
  setIsDarkMode,
  backendStatus,
  onReplayIntro,
  stormActive,
  setStormActive
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: scrolled ? 'var(--bg-glass)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '84px'
      }}>
        {/* Brand Logo */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}>
          <div style={{
            width: '42px',
            height: '42px',
            background: 'var(--steel-gradient)',
            border: '2px solid var(--border-strong)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 900,
            fontFamily: 'var(--font-mono)',
            fontSize: '1.2rem',
            color: 'var(--accent-orange)',
            boxShadow: 'inset 0 0 8px rgba(0,0,0,0.6)'
          }}>
            C8
          </div>
          <div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.3rem',
              fontWeight: 900,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              lineHeight: 1,
              color: 'var(--text-main)'
            }}>
              CHRONOS
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.22em',
              color: 'var(--accent-orange)',
              textTransform: 'uppercase',
              marginTop: '4px'
            }}>
              MONOLITHIC CONCRETE
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '24px'
        }} className="desktop-nav">
          <a href="#philosophy" style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            textDecoration: 'none'
          }}>
            // 01. MATERIALITY
          </a>
          <a href="#projects" style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            textDecoration: 'none'
          }}>
            // 02. MONOLITHS
          </a>
          <a href="#telemetry" style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            textDecoration: 'none'
          }}>
            // 03. TELEMETRY
          </a>
          <a href="#estimator" style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            textDecoration: 'none'
          }}>
            // 04. ESTIMATOR
          </a>
        </nav>

        {/* Right Tools & Theme Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* Storm Rain Toggle */}
          <button
            onClick={() => setStormActive(!stormActive)}
            className="storm-toggle-btn"
            style={{
              padding: '6px 10px',
              background: stormActive ? 'rgba(0, 229, 255, 0.15)' : 'var(--bg-surface-elevated)',
              border: '1px solid',
              borderColor: stormActive ? 'var(--accent-cyan)' : 'var(--border-strong)',
              color: stormActive ? 'var(--accent-cyan)' : 'var(--text-muted)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              cursor: 'pointer'
            }}
            title="Toggle Atmospheric Storm"
          >
            ⛈ {stormActive ? 'STORM' : 'OFF'}
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            style={{
              padding: '6px 10px',
              background: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-strong)',
              color: 'var(--text-main)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
            title="Toggle Theme"
          >
            {isDarkMode ? '☀' : '☾'}
          </button>

          {/* Primary CTA */}
          <a href="#rfq" className="btn-primary tender-cta-btn" style={{ padding: '8px 14px', fontSize: '0.75rem' }}>
            RFQ
          </a>

          {/* Hamburger Mobile/Tablet Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="chronos-mobile-toggle"
            aria-label="Toggle Navigation"
            style={{
              display: 'none',
              background: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-strong)',
              color: 'var(--text-main)',
              padding: '6px',
              cursor: 'pointer'
            }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'var(--bg-base)',
          borderBottom: '2px solid var(--accent-orange)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          zIndex: 9999,
          boxShadow: '0 20px 40px rgba(0,0,0,0.8)'
        }}>
          <a href="#philosophy" onClick={() => setMobileOpen(false)} style={{ color: 'var(--text-main)', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', fontWeight: 700 }}>// 01. MATERIALITY</a>
          <a href="#projects" onClick={() => setMobileOpen(false)} style={{ color: 'var(--text-main)', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', fontWeight: 700 }}>// 02. MONOLITHS</a>
          <a href="#telemetry" onClick={() => setMobileOpen(false)} style={{ color: 'var(--text-main)', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', fontWeight: 700 }}>// 03. TELEMETRY</a>
          <a href="#estimator" onClick={() => setMobileOpen(false)} style={{ color: 'var(--text-main)', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', fontWeight: 700 }}>// 04. ESTIMATOR</a>
          <a href="#rfq" onClick={() => setMobileOpen(false)} className="btn-primary" style={{ textAlign: 'center', marginTop: '10px' }}>TENDER RFQ →</a>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .chronos-mobile-toggle { display: block !important; }
        }
        @media (max-width: 600px) {
          .storm-toggle-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}

