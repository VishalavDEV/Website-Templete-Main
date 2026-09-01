import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Cpu, ChevronRight } from 'lucide-react';

export default function Navbar({ theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Tracks', href: '#tracks' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Hackathon', href: '#hackathon' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'Venue', href: '#venue' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Register', href: '#register' }
  ];


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section highlighting
      const sections = navLinks.map(link => link.href.substring(1));
      sections.unshift('hero');

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.3s ease',
          padding: isScrolled ? '12px 0' : '20px 0',
          background: isScrolled ? 'rgba(255, 255, 255, 0.96)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(15, 23, 42, 0.12)' : '1px solid transparent',
          boxShadow: isScrolled ? '0 4px 24px rgba(0, 0, 0, 0.08)' : 'none'
        }}
      >
        <div
          style={{
            maxWidth: '1320px',
            margin: '0 auto',
            padding: '0 5%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {/* Logo Mark */}
          <a
            href="#hero"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none'
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.2) 0%, rgba(138, 43, 226, 0.3) 100%)',
                border: '1px solid rgba(0, 240, 255, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 15px rgba(0, 240, 255, 0.3)'
              }}
            >
              <Cpu size={24} color={theme === 'light' ? '#0066cc' : '#00f0ff'} />
            </div>
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  letterSpacing: '0.05em',
                  color: 'var(--text-primary)',
                  display: 'block',
                  lineHeight: 1
                }}
              >
                VERTEX
              </span>
              <span
                style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.15em',
                  color: 'var(--accent-cyan)',
                  textTransform: 'uppercase',
                  fontWeight: 700
                }}
              >
                Summit 2026
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '24px'
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.95rem',
                    fontWeight: isActive ? 800 : 700,
                    color: isActive ? 'var(--accent-cyan)' : 'var(--text-primary)',
                    opacity: isActive ? 1 : (theme === 'light' ? 0.9 : 0.85),
                    transition: 'all 0.2s ease',
                    position: 'relative',
                    padding: '6px 0'
                  }}
                >
                  {link.name}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '3px',
                        background: 'var(--accent-cyan)',
                        borderRadius: '2px',
                        boxShadow: '0 0 8px var(--accent-cyan)'
                      }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Header Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: theme === 'light' ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.08)',
                border: '1px solid var(--glass-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-primary)',
                transition: 'all 0.2s ease'
              }}
            >
              {theme === 'dark' ? <Sun size={18} color="#00f0ff" /> : <Moon size={18} color="#6b21a8" />}
            </button>

            {/* CTA Button Desktop */}
            <a
              href="#register"
              className="btn-primary"
              style={{
                padding: '10px 22px',
                fontSize: '0.88rem',
                display: 'none'
              }}
              className="desktop-cta btn-primary"
            >
              Register Pass <ChevronRight size={16} />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="mobile-menu-btn"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: theme === 'light' ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.08)',
                border: '1px solid var(--glass-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-primary)'
              }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full Screen Menu Overlay */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: theme === 'light' ? 'rgba(248, 250, 252, 0.98)' : 'rgba(8, 11, 18, 0.96)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '24px',
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
          padding: '40px 20px'
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={closeMobileMenu}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.5rem',
              fontWeight: 800,
              color: activeSection === link.href.substring(1) ? 'var(--accent-cyan)' : 'var(--text-primary)',
              textDecoration: 'none'
            }}
          >
            {link.name}
          </a>
        ))}
        <a
          href="#register"
          onClick={closeMobileMenu}
          className="btn-primary"
          style={{ marginTop: '20px', padding: '14px 36px' }}
        >
          Register Now <ChevronRight size={18} />
        </a>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: inline-flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}
