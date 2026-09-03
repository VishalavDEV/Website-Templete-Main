import React from 'react';

export default function App() {
  return (
    <footer id="footer" style={{
      backgroundColor: '#0a0a0a',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      padding: '60px 40px',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '24px',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '1200px',
        flexWrap: 'wrap',
        gap: '24px'
      }}>
        {/* Brand */}
        <span style={{
          fontSize: '0.85rem',
          fontWeight: '700',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          fontFamily: "'Inter', sans-serif"
        }}>
          Kairo Photography
        </span>

        {/* Links */}
        <div style={{
          display: 'flex',
          gap: '20px',
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.75rem',
          opacity: 0.6
        }}>
          <a href="#" style={{ color: '#ffffff', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="#" style={{ color: '#ffffff', textDecoration: 'none' }}>Terms of Service</a>
        </div>

        {/* Copyright */}
        <span style={{
          fontSize: '0.75rem',
          opacity: 0.4,
          fontFamily: "'Inter', sans-serif"
        }}>
          &copy; {new Date().getFullYear()} Kairo. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
