import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-light)',
        paddingTop: '80px',
        paddingBottom: '100px',
        marginTop: '120px',
      }}
    >
      <div className="container-custom">
        {/* Main Footer Links Matrix */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '48px 32px',
            marginBottom: '80px',
          }}
        >
          {/* Brand Col */}
          <div style={{ gridColumn: 'span 2' }}>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '32px',
                letterSpacing: '0.15em',
                marginBottom: '16px',
                textTransform: 'uppercase',
              }}
            >
              AUREL
            </h3>
            <p
              style={{
                fontSize: '13px',
                color: 'var(--text-secondary)',
                maxWidth: '280px',
                lineHeight: '1.6',
              }}
            >
              Digital fashion house dedicated to modern tailoring, natural textures, and considered silhouettes.
            </p>
          </div>

          {/* SHOP */}
          <div>
            <h4
              style={{
                fontSize: '11px',
                letterSpacing: '0.14em',
                fontWeight: '600',
                textTransform: 'uppercase',
                marginBottom: '20px',
                color: 'var(--text-primary)',
              }}
            >
              SHOP
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: 'var(--text-secondary)' }}>
              <li><Link to="/women" style={{ transition: 'color 0.2s' }}>Women</Link></li>
              <li><Link to="/men" style={{ transition: 'color 0.2s' }}>Men</Link></li>
              <li><Link to="/accessories" style={{ transition: 'color 0.2s' }}>Accessories</Link></li>
              <li><Link to="/shop?filter=new" style={{ transition: 'color 0.2s' }}>New Arrivals</Link></li>
              <li><Link to="/collections" style={{ transition: 'color 0.2s' }}>Collections</Link></li>
            </ul>
          </div>

          {/* ABOUT */}
          <div>
            <h4
              style={{
                fontSize: '11px',
                letterSpacing: '0.14em',
                fontWeight: '600',
                textTransform: 'uppercase',
                marginBottom: '20px',
                color: 'var(--text-primary)',
              }}
            >
              ABOUT
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: 'var(--text-secondary)' }}>
              <li><a href="#story" style={{ transition: 'color 0.2s' }}>Our Story</a></li>
              <li><a href="#journal" style={{ transition: 'color 0.2s' }}>Journal</a></li>
            </ul>
          </div>

          {/* HELP */}
          <div>
            <h4
              style={{
                fontSize: '11px',
                letterSpacing: '0.14em',
                fontWeight: '600',
                textTransform: 'uppercase',
                marginBottom: '20px',
                color: 'var(--text-primary)',
              }}
            >
              HELP
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: 'var(--text-secondary)' }}>
              <li><a href="#shipping" style={{ transition: 'color 0.2s' }}>Shipping</a></li>
              <li><a href="#returns" style={{ transition: 'color 0.2s' }}>Returns</a></li>
              <li><a href="#sizeguide" style={{ transition: 'color 0.2s' }}>Size Guide</a></li>
              <li><a href="#faq" style={{ transition: 'color 0.2s' }}>FAQ</a></li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4
              style={{
                fontSize: '11px',
                letterSpacing: '0.14em',
                fontWeight: '600',
                textTransform: 'uppercase',
                marginBottom: '20px',
                color: 'var(--text-primary)',
              }}
            >
              SOCIAL
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: 'var(--text-secondary)' }}>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ transition: 'color 0.2s' }}>Instagram</a></li>
              <li><a href="https://pinterest.com" target="_blank" rel="noreferrer" style={{ transition: 'color 0.2s' }}>Pinterest</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid var(--border-light)',
            paddingTop: '32px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '11px',
            letterSpacing: '0.08em',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
          }}
        >
          <div>© 2026 AUREL ATELIER. ALL RIGHTS RESERVED.</div>
          <div>INDIA / ₹ INR</div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#privacy">PRIVACY</a>
            <a href="#terms">TERMS</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
