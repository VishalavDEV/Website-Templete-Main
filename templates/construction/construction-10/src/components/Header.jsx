import React, { useState, useEffect } from 'react';
import { Sun, Moon, ArrowRight, Menu, X } from 'lucide-react';

export default function Header({ currentTheme, onToggleTheme, onOpenRfq }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.25s ease',
        background: scrolled ? 'var(--bg-glass)' : 'var(--bg-main)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border-subtle)'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: scrolled ? '14px 24px' : '20px 24px', transition: 'padding 0.25s ease' }}>
        
        {/* Brand Logo */}
        <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '4px',
              background: 'var(--accent-primary)',
              color: 'var(--accent-primary-text)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 900,
              fontSize: '0.95rem',
              fontFamily: 'var(--font-heading)'
            }}
          >
            A
          </div>
          <div>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: '800', letterSpacing: '-0.02em', color: 'var(--text-main)' }}>
              AEROVISION
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px'
          }}
          className="desktop-nav"
        >
          <a href="#hero" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500', transition: 'color 0.2s' }}>
            Overview
          </a>
          <a href="#projects" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500', transition: 'color 0.2s' }}>
            Projects
          </a>
          <a href="#wind-tunnel" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500', transition: 'color 0.2s' }}>
            Aerodynamics
          </a>
          <a href="#kinetic-facade" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500', transition: 'color 0.2s' }}>
            Kinetic Facade
          </a>
          <a href="#estimator" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500', transition: 'color 0.2s' }}>
            Estimator
          </a>
        </nav>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          
          {/* Theme Switcher */}
          <button
            onClick={onToggleTheme}
            style={{
              background: 'transparent',
              border: '1px solid var(--border-subtle)',
              borderRadius: '6px',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text-main)',
              transition: 'all 0.2s ease'
            }}
            aria-label="Toggle Theme"
          >
            {currentTheme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          {/* Contact Button */}
          <button
            onClick={onOpenRfq}
            className="btn btn-primary header-cta-btn"
            style={{ padding: '8px 18px', fontSize: '0.86rem' }}
          >
            Contact Studio <ArrowRight size={14} />
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'transparent',
              border: '1px solid var(--border-subtle)',
              borderRadius: '6px',
              width: '38px',
              height: '38px',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-main)',
              cursor: 'pointer',
              zIndex: 1001
            }}
            className="mobile-toggle"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} color="currentColor" /> : <Menu size={22} color="currentColor" />}
          </button>
        </div>

      </div>

      {/* Mobile / Tablet Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="mobile-drawer"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'var(--bg-main)',
            borderBottom: '2px solid var(--accent-primary)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            zIndex: 999
          }}
        >
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: 'var(--text-main)', textDecoration: 'none', fontSize: '1rem', fontWeight: '600', padding: '8px 0', borderBottom: '1px solid var(--border-subtle)' }}
          >
            Overview
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: 'var(--text-main)', textDecoration: 'none', fontSize: '1rem', fontWeight: '600', padding: '8px 0', borderBottom: '1px solid var(--border-subtle)' }}
          >
            Projects
          </a>
          <a
            href="#wind-tunnel"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: 'var(--text-main)', textDecoration: 'none', fontSize: '1rem', fontWeight: '600', padding: '8px 0', borderBottom: '1px solid var(--border-subtle)' }}
          >
            Aerodynamics & Wind Tunnel
          </a>
          <a
            href="#kinetic-facade"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: 'var(--text-main)', textDecoration: 'none', fontSize: '1rem', fontWeight: '600', padding: '8px 0', borderBottom: '1px solid var(--border-subtle)' }}
          >
            Kinetic Facade
          </a>
          <a
            href="#estimator"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: 'var(--text-main)', textDecoration: 'none', fontSize: '1rem', fontWeight: '600', padding: '8px 0', borderBottom: '1px solid var(--border-subtle)' }}
          >
            Parametric Estimator
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenRfq();
            }}
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center', marginTop: '8px', padding: '12px' }}
          >
            Contact Studio <ArrowRight size={14} />
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
        @media (max-width: 640px) {
          .container { padding: 12px 16px !important; }
          .header-cta-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}

