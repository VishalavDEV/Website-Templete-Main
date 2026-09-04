import React, { useState, useEffect } from 'react';
import { useAudio } from '../../context/AudioContext';
import { Play, Pause, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { isPlaying, togglePlay, currentTrack } = useAudio();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'SOUND', href: '#sound' },
    { label: 'RELEASES', href: '#releases' },
    { label: 'VISUALS', href: '#visuals' },
    { label: 'TOUR', href: '#tour' },
    { label: 'STORY', href: '#story' },
    { label: 'STUDIO', href: '#studio' },
    { label: 'CONTACT', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 900,
        padding: isScrolled ? '12px 5vw' : '16px 5vw',
        background: isScrolled ? 'rgba(242, 238, 232, 0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border-light)' : 'none',
        transition: 'padding 0.3s var(--ease-out-expo), background 0.3s, border-bottom 0.3s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      {/* Brand Title */}
      <a
        href="#home"
        onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.4rem',
          fontWeight: 600,
          letterSpacing: '0.05em',
          color: 'var(--text-main)',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
        data-cursor="HOME"
      >
        <span>NOVA//ECHO</span>
        <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-grotesk)', color: 'var(--accent-warm)' }}>
          [2026]
        </span>
      </a>

      {/* Desktop Nav Links */}
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2.5rem'
        }}
        aria-label="Main Navigation"
        className="desktop-nav"
      >
        {navLinks.map(link => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
            className="hover-underline"
            style={{
              fontFamily: 'var(--font-grotesk)',
              fontSize: '0.85rem',
              letterSpacing: '0.12em',
              fontWeight: 500,
              color: 'var(--text-main)',
              textTransform: 'uppercase'
            }}
            data-cursor={link.label}
          >
            {link.label}
          </a>
        ))}

        {/* Quick Audio Toggle Button */}
        <button
          onClick={togglePlay}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 18px',
            backgroundColor: isPlaying ? 'var(--bg-dark)' : 'var(--accent-warm)',
            color: isPlaying ? 'var(--coral)' : '#FFFFFF',
            borderRadius: '2px',
            fontFamily: 'var(--font-grotesk)',
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            transition: 'var(--transition-smooth)'
          }}
          data-cursor={isPlaying ? 'PAUSE' : 'PLAY'}
          aria-label={isPlaying ? 'Pause Audio' : 'Listen Now'}
        >
          {isPlaying ? <Pause size={14} /> : <Play size={14} />}
          <span>{isPlaying ? 'PAUSE' : '[LISTEN]'}</span>
        </button>
      </nav>

      {/* Mobile Hamburger Toggle */}
      <button
        className="mobile-toggle"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        style={{
          display: 'none',
          padding: '8px',
          color: 'var(--text-main)'
        }}
        aria-label="Toggle Navigation Menu"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            top: '70px',
            backgroundColor: 'var(--bg-dark)',
            color: 'var(--text-on-dark)',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            padding: '40px 8vw',
            gap: '24px',
            animation: 'fadeIn 0.3s ease-out'
          }}
        >
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2rem',
                color: 'var(--bg-light)',
                textDecoration: 'none'
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid var(--border-dark)' }}>
            <button
              onClick={() => { togglePlay(); setMobileMenuOpen(false); }}
              style={{
                width: '100%',
                padding: '16px',
                backgroundColor: 'var(--accent-warm)',
                color: '#FFF',
                fontFamily: 'var(--font-grotesk)',
                fontWeight: 700,
                fontSize: '1rem',
                letterSpacing: '0.1em',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px'
              }}
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} />}
              <span>{isPlaying ? `NOW PLAYING: ${currentTrack.title}` : '[LISTEN NOW]'}</span>
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
};
