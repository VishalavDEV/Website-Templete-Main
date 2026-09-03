import React from 'react';

export default function App() {
  const links = [
    { label: "Home", href: "#home" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer style={{
      backgroundColor: '#ffffff',
      borderTop: '1px solid rgba(0, 0, 0, 0.06)',
      padding: '80px 40px 60px 40px',
      color: '#111827',
      fontFamily: "'Poppins', sans-serif"
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '40px'
      }}>
        {/* Logo */}
        <a href="#home" style={{
          textDecoration: 'none',
          color: '#111827',
          fontWeight: '800',
          fontSize: '1.5rem',
          letterSpacing: '3px'
        }}>
          LUME STUDIO
        </a>

        {/* Small Navigation Links */}
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {links.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              style={{
                color: '#4b5563',
                textDecoration: 'none',
                fontSize: '0.72rem',
                fontWeight: '600',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#ff7a52'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#4b5563'}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(0, 0, 0, 0.06)' }} />

        {/* Lower row */}
        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          fontSize: '0.75rem',
          color: '#4b5563'
        }}>
          <span>&copy; 2026 Lume Studio. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" style={{ color: '#4b5563', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: '#4b5563', textDecoration: 'none' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
