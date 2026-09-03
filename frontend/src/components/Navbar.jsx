import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'PRICING', href: '#pricing' },
    { name: 'ABOUT', href: '#about' },
    { name: 'PRODUCTS', href: '#products' },
    { name: 'FAQ', href: '#faq' },
    { name: 'CONTACT', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'pricing', 'about', 'products', 'faq', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
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
      height: 'var(--header-height)',
      display: 'flex',
      alignItems: 'center',
      transition: 'var(--transition-smooth)',
      backgroundColor: scrolled ? 'rgba(12, 14, 18, 0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-dark)' : '1px solid transparent'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
      }}>
        {/* Brand Logo */}
        <a href="#home" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2px',
          fontSize: '1.75rem',
          fontWeight: '800',
          letterSpacing: '-0.03em',
          color: '#ffffff',
          fontFamily: 'var(--font-display)',
          textTransform: 'lowercase'
        }}>
          <span style={{ color: 'var(--accent)' }}>a</span>sentus
        </a>

        {/* Desktop Nav Items */}
        <nav style={{
          display: 'none',
          alignItems: 'center',
          gap: '32px'
        }} className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontSize: '0.82rem',
                  fontWeight: '600',
                  letterSpacing: '0.12em',
                  color: isActive ? 'var(--accent)' : 'rgba(255, 255, 255, 0.8)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  position: 'relative',
                  padding: '8px 0',
                  transition: 'var(--transition-smooth)'
                }}
              >
                {isActive && (
                  <span style={{
                    width: '12px',
                    height: '2px',
                    backgroundColor: 'var(--accent)',
                    display: 'inline-block'
                  }} />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div style={{ display: 'none', alignItems: 'center' }} className="desktop-nav">
          <a href="#contact" className="btn-outline" style={{ padding: '8px 20px', fontSize: '0.78rem' }}>
            GET IN TOUCH
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation"
          style={{
            color: '#ffffff',
            display: 'block',
            padding: '8px'
          }}
          className="mobile-toggle"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: 'var(--header-height)',
          left: 0,
          right: 0,
          backgroundColor: 'rgba(12, 14, 18, 0.98)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border-dark)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          zIndex: 999
        }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '1rem',
                fontWeight: '600',
                letterSpacing: '0.1em',
                color: activeSection === link.href.substring(1) ? 'var(--accent)' : '#ffffff',
                padding: '12px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-accent"
            style={{ marginTop: '8px', textAlign: 'center' }}
          >
            GET IN TOUCH
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
