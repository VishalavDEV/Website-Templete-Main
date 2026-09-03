import React, { useState, useEffect } from 'react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

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
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '80px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 40px',
      zIndex: 1000,
      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      backgroundColor: isScrolled ? 'rgba(13, 13, 13, 0.95)' : 'transparent',
      borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
      backdropFilter: isScrolled ? 'blur(12px)' : 'none',
      boxSizing: 'border-box'
    }}>
      {/* Brand Logo */}
      <a href="#home" style={{
        color: '#ffffff',
        textDecoration: 'none',
        fontSize: '1.2rem',
        fontWeight: '900',
        letterSpacing: '6px',
        fontFamily: "'Inter', sans-serif",
        textTransform: 'uppercase',
        transition: 'opacity 0.2s'
      }}
      onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
      onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
      >
        KAIRO
      </a>

      {/* Nav Menu & Socials */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
        <ul style={{
          display: 'flex',
          listStyle: 'none',
          gap: '24px',
          margin: 0,
          padding: 0
        }}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a 
                href={link.href} 
                style={{
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  letterSpacing: '2.5px',
                  textTransform: 'uppercase',
                  fontFamily: "'Inter', sans-serif",
                  opacity: 0.7,
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.color = '#ff4a3b';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = 0.7;
                  e.currentTarget.style.color = '#ffffff';
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Divider Line */}
        <div style={{
          height: '20px',
          width: '1px',
          backgroundColor: 'rgba(255, 255, 255, 0.25)',
          marginLeft: '10px'
        }} />

        {/* Social Icons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <a href="#" style={{ color: '#ffffff', opacity: 0.7, transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
          </a>
          <a href="#" style={{ color: '#ffffff', opacity: 0.7, transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="#" style={{ color: '#ffffff', opacity: 0.7, transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </a>
        </div>
      </div>
    </nav>
  );
}
