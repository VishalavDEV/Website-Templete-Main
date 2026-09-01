import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{
      position: 'relative',
      backgroundColor: '#02050e',
      borderTop: '1px solid rgba(0, 240, 255, 0.1)',
      padding: '70px 5% 30px 5%',
      marginTop: '80px',
      overflow: 'hidden',
      zIndex: 10
    }}>
      {/* Interactive Circuit Background Overlay */}
      <svg style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.1,
        pointerEvents: 'none',
        zIndex: 0
      }} viewBox="0 0 1440 400">
        <path d="M 0 50 L 300 50 L 350 100 L 700 100 L 750 50 L 1100 50 L 1150 100 L 1440 100" fill="none" stroke="#00f0ff" strokeWidth="1" />
        <path d="M 150 200 L 400 200 L 450 150 L 900 150 L 950 200 L 1300 200" fill="none" stroke="#0066ff" strokeWidth="1" />
        <circle cx="350" cy="100" r="3" fill="#00f0ff" />
        <circle cx="750" cy="50" r="3" fill="#00f0ff" />
        <circle cx="1150" cy="100" r="3" fill="#00f0ff" />
        <circle cx="450" cy="150" r="3" fill="#0066ff" />
        <circle cx="950" cy="200" r="3" fill="#0066ff" />
      </svg>

      <div style={{
        position: 'relative',
        zIndex: 1,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '40px',
        maxWidth: '1200px',
        margin: '0 auto',
        fontFamily: 'var(--font-body)'
      }}>
        {/* Brand Section */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <Link to="/" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '22px',
            fontFamily: 'var(--font-tech)',
            letterSpacing: '0.15em'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              border: '1.5px solid #00f0ff',
              color: '#00f0ff',
              fontSize: '16px'
            }}>
              ⚡
            </div>
            <span>BLUECORE</span>
          </Link>
          <p style={{ color: '#00f0ff', fontSize: '11px', fontFamily: 'var(--font-tech)', letterSpacing: '0.2em' }}>
            POWER YOUR FUTURE.
          </p>
          <p style={{ color: '#64748b', fontSize: '13px', lineHeight: '1.6', marginTop: '10px' }}>
            Enter the future of home entertainment and personal electronics with our high-performance line-up.
          </p>
        </div>

        {/* Categories Section */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <h4 style={{ color: '#fff', fontSize: '14px', fontFamily: 'var(--font-tech)', letterSpacing: '0.08em' }}>PRODUCTS</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
            <li><Link to="/products?category=tv" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#00f0ff'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Smart TVs</Link></li>
            <li><Link to="/products?category=mobiles" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#00f0ff'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Smartphones</Link></li>
            <li><Link to="/products?category=laptops" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#00f0ff'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Laptops</Link></li>
            <li><Link to="/products?category=audio" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#00f0ff'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Audio Devices</Link></li>
            <li><Link to="/products?category=gaming" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#00f0ff'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Gaming Gear</Link></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <h4 style={{ color: '#fff', fontSize: '14px', fontFamily: 'var(--font-tech)', letterSpacing: '0.08em' }}>SUPPORT</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
            <li><Link to="/contact" style={{ color: '#94a3b8', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#00f0ff'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Tech Support</Link></li>
            <li><Link to="/profile" style={{ color: '#94a3b8', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#00f0ff'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>My Bluecore</Link></li>
            <li><Link to="/track-order" style={{ color: '#94a3b8', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#00f0ff'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Track Delivery</Link></li>
            <li><Link to="/offers" style={{ color: '#94a3b8', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#00f0ff'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Blue Deals</Link></li>
          </ul>
        </div>

        {/* Company & Socials */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <h4 style={{ color: '#fff', fontSize: '14px', fontFamily: 'var(--font-tech)', letterSpacing: '0.08em' }}>CONNECT</h4>
          <div style={{ display: 'flex', gap: '15px' }}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ color: '#94a3b8', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#00f0ff'} onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h3V1H13c-3 0-4 2-4 4v3z"/></svg></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" style={{ color: '#94a3b8', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#00f0ff'} onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18.2 2.4h3.3L14.3 11l8.5 11.3h-6.7L11 15.6l-6 6.7H1.7l7.6-8.7L1.2 2.4h6.9l5.1 6.8 5-6.8zm-1.2 17.5h1.8L7.1 4.1H5.2l11.8 15.8z"/></svg></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ color: '#94a3b8', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#00f0ff'} onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}><svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" style={{ color: '#94a3b8', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#00f0ff'} onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M23.5 6.2s-.2-1.6-.9-2.3c-.9-1-1.9-1-2.4-1.1C16.7 2.5 12 2.5 12 2.5s-4.7 0-8.2.3c-.5 0-1.5.1-2.4 1.1-.7.7-.9 2.3-.9 2.3S.3 8.2.3 10.1v3.7c0 2 .2 3.8.2 3.8s.2 1.6.9 2.3c.9 1 2 .9 2.5 1 2 .2 8.1.3 8.1.3s4.7 0 8.2-.3c.5 0 1.5-.1 2.4-1.1.7-.7.9-2.3.9-2.3s.2-1.8.2-3.8v-3.7c0-1.9-.2-3.8-.2-3.8zM9.5 14.2V9.8l4.4 2.2-4.4 2.2z"/></svg></a>
          </div>
          <div style={{ fontSize: '12px', color: '#475569', marginTop: '10px' }}>
            <p>HQ Terminal: Sector 42, Neo Tokyo</p>
            <p style={{ marginTop: '5px' }}>© 2026 BLUECORE Corp.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
