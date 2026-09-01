import React, { useState, useEffect } from 'react';

export default function Header({
  isDarkMode,
  setIsDarkMode,
  backendStatus,
  onReplayIntro,
  stormActive,
  setStormActive
}) {
  const [scrolled, setScrolled] = useState(false);

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
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
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
              fontSize: '1.4rem',
              fontWeight: 900,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              lineHeight: 1
            }}>
              CHRONOS
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              letterSpacing: '0.22em',
              color: 'var(--accent-orange)',
              textTransform: 'uppercase',
              marginTop: '4px'
            }}>
              MONOLITHIC CONCRETE
            </div>
          </div>
        </a>

        {/* Navigation Links */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px'
        }} className="desktop-nav">
          <a href="#philosophy" style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.82rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            transition: 'color 0.2s ease'
          }} onMouseEnter={e => e.target.style.color = 'var(--accent-orange)'}
             onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>
            // 01. MATERIALITY
          </a>
          <a href="#projects" style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.82rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            transition: 'color 0.2s ease'
          }} onMouseEnter={e => e.target.style.color = 'var(--accent-orange)'}
             onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>
            // 02. MONOLITHS
          </a>
          <a href="#telemetry" style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.82rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            transition: 'color 0.2s ease'
          }} onMouseEnter={e => e.target.style.color = 'var(--accent-orange)'}
             onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>
            // 03. TELEMETRY
          </a>
          <a href="#estimator" style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.82rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            transition: 'color 0.2s ease'
          }} onMouseEnter={e => e.target.style.color = 'var(--accent-orange)'}
             onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>
            // 04. ESTIMATOR
          </a>
          <a href="#rfq" style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.82rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            transition: 'color 0.2s ease'
          }} onMouseEnter={e => e.target.style.color = 'var(--accent-orange)'}
             onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>
            // 05. COMMISSION RFQ
          </a>
        </nav>

        {/* Right Tools & Theme Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Storm Rain & Lightning Toggle */}
          <button
            onClick={() => setStormActive(!stormActive)}
            style={{
              padding: '7px 12px',
              background: stormActive ? 'rgba(0, 229, 255, 0.15)' : 'var(--bg-surface-elevated)',
              border: '1px solid',
              borderColor: stormActive ? 'var(--accent-cyan)' : 'var(--border-strong)',
              color: stormActive ? 'var(--accent-cyan)' : 'var(--text-muted)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              boxShadow: stormActive ? '0 0 12px rgba(0, 229, 255, 0.35)' : 'none'
            }}
            title="Toggle Atmospheric Rain & Lightning Storm"
          >
            ⛈ {stormActive ? 'STORM ON' : 'STORM OFF'}
          </button>

          {/* Replay Intro Button */}
          {onReplayIntro && (
            <button
              onClick={onReplayIntro}
              style={{
                padding: '7px 12px',
                background: 'rgba(255, 93, 0, 0.1)',
                border: '1px solid var(--accent-orange)',
                color: 'var(--accent-orange)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 800,
                letterSpacing: '0.1em',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer'
              }}
              title="Replay Monolith Intro Scene"
            >
              ▶ INTRO
            </button>
          )}

          {/* Backend Status Pill */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 10px',
            background: 'var(--bg-surface-elevated)',
            border: '1px solid var(--border-subtle)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem'
          }}>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: backendStatus === 'UP' ? '#10b981' : '#f59e0b',
              boxShadow: backendStatus === 'UP' ? '0 0 8px #10b981' : '0 0 8px #f59e0b'
            }} />
            <span style={{ color: 'var(--text-dim)' }}>API:</span>
            <span style={{ fontWeight: 700 }}>{backendStatus === 'UP' ? '8080' : 'ACTIVE'}</span>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            style={{
              padding: '8px 12px',
              background: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-strong)',
              color: 'var(--text-main)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer'
            }}
            title="Toggle Brutalist Theme"
          >
            {isDarkMode ? '☀' : '☾'}
          </button>

          {/* Primary CTA */}
          <a href="#rfq" className="btn-primary" style={{ padding: '9px 18px', fontSize: '0.78rem' }}>
            TENDER RFQ
          </a>
        </div>
      </div>
    </header>
  );
}
