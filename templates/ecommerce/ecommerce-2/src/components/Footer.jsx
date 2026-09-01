import React from 'react';
import { Link } from 'react-router-dom';

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const PinterestIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.63 7.87 6.3 9.35-.09-.79-.17-2 .04-2.86.19-.78 1.23-5.2 1.23-5.2s-.31-.63-.31-1.56c0-1.46.85-2.55 1.9-2.55.9 0 1.33.67 1.33 1.48 0 .9-.57 2.26-.87 3.51-.25 1.05.52 1.91 1.56 1.91 1.87 0 3.31-1.97 3.31-4.81 0-2.51-1.81-4.27-4.38-4.27-2.98 0-4.73 2.24-4.73 4.55 0 .9.35 1.87.78 2.39.09.11.1.2.07.31-.08.33-.26 1.05-.29 1.2-.05.18-.16.22-.36.13-1.34-.62-2.18-2.58-2.18-4.15 0-3.38 2.46-6.49 7.09-6.49 3.72 0 6.62 2.65 6.62 6.2 0 3.7-2.33 6.67-5.57 6.67-1.09 0-2.11-.57-2.46-1.23l-.67 2.56c-.24.93-.9 2.1-1.34 2.82C9.8 21.84 10.88 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"></path>
  </svg>
);

export default function Footer() {
  return (
    <footer
      style={{
        background: '#064E3B',
        color: 'var(--ivory)',
        paddingTop: '5rem',
        paddingBottom: '2.5rem',
        borderTop: '1px solid var(--border-gold)',
        position: 'relative'
      }}
    >
      <div className="container-custom">
        {/* Brand Header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: '4rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid var(--border-gold)'
          }}
        >
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', letterSpacing: '0.25em', color: 'var(--gold-primary)' }}>
            AURELIA
          </span>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: '1.15rem',
              color: 'var(--gold-light)',
              marginTop: '0.4rem',
              letterSpacing: '0.04em'
            }}
          >
            Jewellery designed to become part of your story.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem'
          }}
        >
          {/* Column 1: SHOP */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                color: 'var(--gold-primary)',
                marginBottom: '1.4rem',
                textTransform: 'uppercase'
              }}
            >
              SHOP
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><Link to="/shop?category=Rings" className="footer-link">Rings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="footer-link">Necklaces</Link></li>
              <li><Link to="/shop?category=Earrings" className="footer-link">Earrings</Link></li>
              <li><Link to="/shop?category=Bracelets" className="footer-link">Bracelets</Link></li>
              <li><Link to="/bridal" className="footer-link">Bridal</Link></li>
            </ul>
          </div>

          {/* Column 2: ABOUT */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                color: 'var(--gold-primary)',
                marginBottom: '1.4rem',
                textTransform: 'uppercase'
              }}
            >
              ABOUT
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><Link to="/about" className="footer-link">Our Story</Link></li>
              <li><Link to="/about" className="footer-link">Craftsmanship</Link></li>
              <li><Link to="/about" className="footer-link">Journal</Link></li>
              <li><Link to="/contact" className="footer-link">Boutique Stores</Link></li>
            </ul>
          </div>

          {/* Column 3: CUSTOMER CARE */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                color: 'var(--gold-primary)',
                marginBottom: '1.4rem',
                textTransform: 'uppercase'
              }}
            >
              CUSTOMER CARE
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><Link to="/contact" className="footer-link">Contact Concierge</Link></li>
              <li><Link to="/contact" className="footer-link">Shipping & Delivery</Link></li>
              <li><Link to="/contact" className="footer-link">Complimentary Returns</Link></li>
              <li><Link to="/contact" className="footer-link">Jewellery Care</Link></li>
              <li><Link to="/contact" className="footer-link">FAQs</Link></li>
            </ul>
          </div>

          {/* Column 4: FOLLOW */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                color: 'var(--gold-primary)',
                marginBottom: '1.4rem',
                textTransform: 'uppercase'
              }}
            >
              FOLLOW
            </h4>
            <p style={{ color: '#D4DEC9', fontSize: '0.85rem', marginBottom: '1.2rem' }}>
              Discover private trunk shows and editorial unveils.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon-box" title="Instagram">
                <InstagramIcon size={18} />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="social-icon-box" title="Pinterest">
                <PinterestIcon size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon-box" title="Facebook">
                <FacebookIcon size={18} />
              </a>
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--gold-light)' }}>
              Concierge Line: +91 1800 287 3542
            </p>
          </div>
        </div>

        {/* Thin Gold Divider & Bottom Copyright */}
        <div
          style={{
            borderTop: '1px solid var(--border-gold)',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.75rem',
            color: '#A8B7B0'
          }}
        >
          <div>
            © {new Date().getFullYear()} AURELIA Fine Jewellery Ltd. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/contact" style={{ color: '#A8B7B0', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link to="/contact" style={{ color: '#A8B7B0', textDecoration: 'none' }}>Terms of Service</Link>
            <Link to="/contact" style={{ color: '#A8B7B0', textDecoration: 'none' }}>Accessibility</Link>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link {
          color: #D4DEC9;
          text-decoration: none;
          font-size: 0.85rem;
          transition: all 0.2s ease;
        }
        .footer-link:hover {
          color: var(--gold-primary) !important;
          padding-left: 4px;
        }
        .social-icon-box {
          color: var(--gold-primary);
          padding: 0.6rem;
          border: 1px solid var(--border-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .social-icon-box:hover {
          background: var(--gold-primary);
          color: #064E3B !important;
          box-shadow: var(--shadow-gold);
        }
      `}</style>
    </footer>
  );
}
