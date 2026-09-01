import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, MessageSquare, Camera, Play, Sparkles, Send } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: '#130e26', // Premium deep night-purple/black
        color: '#eae3ff',
        padding: '80px 40px 30px 40px',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(124, 92, 255, 0.15)',
      }}
    >
      {/* Floating Lavender Particles (CSS animated dots) */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="animated-float"
          style={{
            position: 'absolute',
            width: `${10 + i * 8}px`,
            height: `${10 + i * 8}px`,
            borderRadius: '50%',
            backgroundColor: 'rgba(124, 92, 255, 0.06)',
            boxShadow: '0 0 20px rgba(124, 92, 255, 0.2)',
            bottom: `${20 + i * 40}px`,
            left: `${10 + i * 15}%`,
            animationDelay: `${i * 0.7}s`,
            pointerEvents: 'none',
          }}
        />
      ))}

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Brand Section */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Sparkles size={20} style={{ color: '#7c5cff' }} />
            <span
              style={{
                fontFamily: 'Outfit',
                fontSize: '1.5rem',
                fontWeight: 800,
                letterSpacing: '0.08em',
                color: '#fff',
                textShadow: '0 0 10px rgba(124,92,255,0.4)',
              }}
            >
              LAVENDER
            </span>
          </Link>
          <p style={{ fontSize: '0.85rem', color: '#8a7db3', lineHeight: '1.6' }}>
            Elevating everyday shopping into a futuristic fashion experience. Discover handpicked luxury apparel, footwear, and accessories.
          </p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
            {[Globe, MessageSquare, Camera, Play].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  color: '#eae3ff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#7c5cff';
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(124,92,255,0.4)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Shop List */}
        <div>
          <h4 style={{ fontFamily: 'Outfit', fontSize: '1.05rem', color: '#fff', marginBottom: '20px' }}>Shop</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['Women\'s Wear', 'Men\'s Wear', 'Girls & Boys', 'Kids & Babies', 'Seasonal Sale'].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="footer-link" style={{ textDecoration: 'none', color: '#8a7db3', fontSize: '0.85rem', transition: 'color 0.2s' }}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h4 style={{ fontFamily: 'Outfit', fontSize: '1.05rem', color: '#fff', marginBottom: '20px' }}>Support</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['Track Order', 'FAQ & Help', 'Return Policy', 'Shipping Info', 'Size Guide'].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="footer-link" style={{ textDecoration: 'none', color: '#8a7db3', fontSize: '0.85rem', transition: 'color 0.2s' }}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Info */}
        <div>
          <h4 style={{ fontFamily: 'Outfit', fontSize: '1.05rem', color: '#fff', marginBottom: '20px' }}>Company</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['About Us', 'Careers', 'Press Releases', 'Sustainability', 'Privacy Policy'].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="footer-link" style={{ textDecoration: 'none', color: '#8a7db3', fontSize: '0.85rem', transition: 'color 0.2s' }}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Underline copyright bottom */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '40px auto 0 auto',
          paddingTop: '24px',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.8rem',
          color: '#5c4e8c',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <span>&copy; {currentYear} Lavender Fashion Universe. All rights reserved.</span>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="#" style={{ color: '#5c4e8c', textDecoration: 'none' }}>Terms of Use</a>
          <a href="#" style={{ color: '#5c4e8c', textDecoration: 'none' }}>Privacy Shield</a>
        </div>
      </div>

      {/* Styled underlines for links */}
      <style>{`
        .footer-link {
          position: relative;
        }
        .footer-link:hover {
          color: #fff !important;
        }
        .footer-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0;
          height: 1px;
          background-color: #7c5cff;
          transition: width 0.25s ease-in-out;
        }
        .footer-link:hover::after {
          width: 100%;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
