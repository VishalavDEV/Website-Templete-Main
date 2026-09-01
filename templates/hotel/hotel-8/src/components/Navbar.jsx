import React, { useState, useEffect } from 'react';
import { Menu, X, User } from 'lucide-react';

export default function Navbar({ onBookClick, onLoginClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'OVERVIEW', targetId: 'overview' },
    { label: 'STAY', targetId: 'stay' },
    { label: 'FINE DINING', targetId: 'dining' },
    { label: 'WELL-BEING', targetId: 'wellbeing' },
    { label: 'AMENITIES', targetId: 'amenities' },
    { label: 'OFFERS', targetId: 'offers' },
    { label: 'GALLERY', targetId: 'gallery' },
    { label: 'EXPERIENCES', targetId: 'experiences' },
    { label: 'CONTACT', targetId: 'contact' }
  ];

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of the navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Determine text color based on scrolled state
  const textColor = isScrolled ? 'var(--color-teak-dark)' : 'var(--color-sandstone-light)';
  const brandTextColor = isScrolled ? 'var(--color-teak-dark)' : 'var(--color-sandstone-light)';

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        transition: 'var(--transition-smooth)',
        padding: isScrolled ? '0.8rem 0' : '1.2rem 0',
        background: isScrolled ? 'var(--color-ivory)' : 'linear-gradient(to bottom, rgba(15,9,6,0.9) 0%, rgba(15,9,6,0) 100%)',
        boxShadow: isScrolled ? '0 4px 20px rgba(10, 6, 4, 0.08)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(194, 155, 79, 0.15)' : '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1440px' }}>
        {/* Brand Logo - Ananthara */}
        <a href="#" onClick={(e) => handleNavClick(e, 'overview')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <span style={{ 
            fontFamily: 'var(--font-serif-header)', 
            fontSize: '1.4rem', 
            letterSpacing: '0.2em', 
            color: brandTextColor,
            lineHeight: 1.2,
            transition: 'var(--transition-smooth)'
          }}>
            ANANTHARA
          </span>
          <span style={{ 
            fontFamily: 'var(--font-serif-sc)', 
            fontSize: '0.55rem', 
            letterSpacing: '0.35em', 
            color: 'var(--color-brass)',
            marginTop: '1px'
          }}>
            HERITAGE HOTEL
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '1.2rem' }}>
          <ul style={{ display: 'flex', listStyle: 'none', gap: '1.2rem' }}>
            {navItems.map((item) => (
              <li key={item.label}>
                <a 
                  href="#"
                  onClick={(e) => handleNavClick(e, item.targetId)}
                  style={{
                    fontFamily: 'var(--font-serif-sc)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.12em',
                    color: textColor,
                    opacity: 0.8,
                    padding: '0.5rem 0',
                    transition: 'var(--transition-smooth)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.opacity = '1';
                    e.target.style.color = 'var(--color-brass)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.opacity = '0.8';
                    e.target.style.color = textColor;
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Actions */}
        <div style={{ display: 'none', alignItems: 'center', gap: '1.2rem' }}>
          <button 
            onClick={onLoginClick}
            style={{
              background: 'none',
              border: 'none',
              fontFamily: 'var(--font-serif-sc)',
              fontSize: '0.75rem',
              color: textColor,
              opacity: 0.85,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'var(--transition-smooth)'
            }}
            onMouseEnter={(e) => e.target.style.opacity = '1'}
            onMouseLeave={(e) => e.target.style.opacity = '0.85'}
          >
            <User size={14} style={{ color: 'var(--color-brass)' }} />
            LOGIN
          </button>
          
          <button 
            onClick={onBookClick} 
            className="btn-gold" 
            style={{ 
              padding: '0.6rem 1.5rem', 
              fontSize: '0.8rem',
              boxShadow: isScrolled ? '0 4px 10px rgba(194, 155, 79, 0.15)' : 'none'
            }}
          >
            BOOK YOUR STAY
          </button>
        </div>

        {/* Mobile menu and CTA triggers */}
        <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
          <button 
            onClick={onBookClick} 
            className="btn-gold" 
            style={{ 
              padding: '0.5rem 1rem', 
              fontSize: '0.75rem',
              display: 'inline-block' 
            }}
          >
            BOOK
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: textColor,
              cursor: 'pointer',
              display: 'block',
              transition: 'var(--transition-smooth)'
            }}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Styles for responsive menu */}
      <style>{`
        @media (min-width: 1024px) {
          nav { display: flex !important; }
          header .btn-gold, header div:nth-child(3) { display: flex !important; }
          header div:nth-child(4) { display: none !important; }
        }
      `}</style>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div 
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            backgroundColor: isScrolled ? 'var(--color-ivory)' : 'var(--color-dark-bg)',
            borderBottom: '1px solid rgba(194, 155, 79, 0.2)',
            padding: '1.5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem',
            boxShadow: isScrolled ? '0 10px 20px rgba(10, 6, 4, 0.08)' : 'none',
            animation: 'fadeInSimple 0.3s ease-in-out',
            transition: 'var(--transition-smooth)'
          }}
        >
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {navItems.map((item) => (
              <li key={item.label}>
                <a 
                  href="#"
                  onClick={(e) => handleNavClick(e, item.targetId)}
                  style={{
                    fontFamily: 'var(--font-serif-header)',
                    fontSize: '1rem',
                    letterSpacing: '0.1em',
                    color: textColor,
                    display: 'block',
                    padding: '0.4rem 0',
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', gap: '1.5rem', borderTop: '1px solid rgba(194, 155, 79, 0.15)', paddingTop: '1rem', alignItems: 'center' }}>
            <button 
              onClick={() => { onLoginClick(); setIsMobileMenuOpen(false); }}
              style={{
                background: 'none',
                border: 'none',
                fontFamily: 'var(--font-serif-sc)',
                fontSize: '0.8rem',
                color: textColor,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                transition: 'var(--transition-smooth)'
              }}
            >
              <User size={14} style={{ color: 'var(--color-brass)' }} />
              LOGIN
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
