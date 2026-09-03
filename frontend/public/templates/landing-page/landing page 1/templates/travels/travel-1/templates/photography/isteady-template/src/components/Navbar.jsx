import React, { useState, useEffect } from 'react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '90px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 40px',
      zIndex: 1000,
      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      backgroundColor: isScrolled || menuOpen ? 'rgba(255, 255, 255, 0.98)' : 'transparent',
      borderBottom: isScrolled || menuOpen ? '1px solid rgba(0, 0, 0, 0.08)' : '1px solid transparent',
      backdropFilter: isScrolled || menuOpen ? 'blur(16px)' : 'none',
      boxSizing: 'border-box'
    }}>
      {/* Brand logo */}
      <a href="#home" style={{
        textDecoration: 'none',
        color: '#111827',
        fontFamily: "'Poppins', sans-serif",
        fontWeight: '800',
        fontSize: '1.4rem',
        letterSpacing: '3px'
      }}>
        LUME STUDIO
      </a>

      {/* Hamburger menu icon for mobile */}
      <button 
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          color: '#111827',
          fontSize: '1.5rem',
          cursor: 'pointer',
          outline: 'none'
        }}
        className="hamburger-btn"
      >
        <span style={{
          display: 'block',
          width: '24px',
          height: '2px',
          backgroundColor: '#111827',
          marginBottom: '5px',
          transition: '0.3s',
          transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
        }} />
        <span style={{
          display: 'block',
          width: '24px',
          height: '2px',
          backgroundColor: '#111827',
          marginBottom: '5px',
          opacity: menuOpen ? 0 : 1,
          transition: '0.3s'
        }} />
        <span style={{
          display: 'block',
          width: '24px',
          height: '2px',
          backgroundColor: '#111827',
          transition: '0.3s',
          transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'
        }} />
      </button>

      {/* Nav Menu */}
      <div 
        className={`nav-menu ${menuOpen ? 'open' : ''}`}
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '35px' 
        }}
      >
        <style>{`
          @media (max-width: 768px) {
            .hamburger-btn {
              display: block !important;
            }
            .nav-menu {
              position: fixed;
              top: 90px;
              left: 0;
              right: 0;
              bottom: 0;
              background-color: #ffffff;
              flex-direction: column;
              justify-content: center;
              gap: 40px !important;
              padding: 40px;
              transform: translateY(-100%);
              opacity: 0;
              pointer-events: none;
              transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
              z-index: 999;
            }
            .nav-menu.open {
              transform: translateY(0);
              opacity: 1;
              pointer-events: auto;
            }
            .nav-links-list {
              flex-direction: column;
              align-items: center;
              gap: 30px !important;
            }
          }
        `}</style>
        
        <ul className="nav-links-list" style={{
          display: 'flex',
          listStyle: 'none',
          gap: '30px',
          margin: 0,
          padding: 0
        }}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a 
                href={link.href} 
                onClick={() => setMenuOpen(false)}
                style={{
                  color: '#111827',
                  textDecoration: 'none',
                  fontSize: '0.78rem',
                  fontWeight: '600',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  fontFamily: "'Poppins', sans-serif",
                  opacity: 0.8,
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.color = '#ff7a52'; // Coral accent
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = 0.8;
                  e.currentTarget.style.color = '#111827';
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Action Button */}
        <a 
          href="#contact" 
          onClick={() => setMenuOpen(false)}
          style={{
            background: 'linear-gradient(135deg, #ff7a52 0%, #ff5e3a 100%)', // Coral accent
            color: '#ffffff',
            textDecoration: 'none',
            fontSize: '0.75rem',
            fontWeight: '800',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            padding: '12px 26px',
            borderRadius: '99px',
            boxShadow: '0 4px 15px rgba(255, 122, 82, 0.25)',
            fontFamily: "'Poppins', sans-serif",
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-1px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          Book a Shoot
        </a>
      </div>
    </nav>
  );
}
