import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#111111',
        borderTop: '1px solid rgba(255, 255, 255, 0.14)',
        paddingTop: '100px',
        paddingBottom: '40px',
      }}
    >
      <div className="container">
        {/* Top Massive Typographic Brand & Statement */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '60px',
            paddingBottom: '80px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <div>
            <div
              style={{
                fontSize: 'clamp(40px, 6vw, 72px)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1,
                color: '#FFFFFF',
                marginBottom: '16px',
              }}
            >
              VANTAGE
            </div>
            <p
              style={{
                fontSize: '18px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                color: '#C8F169',
                textTransform: 'uppercase',
              }}
            >
              BUILD WHAT'S NEXT.
            </p>
            <p
              style={{
                fontSize: '15px',
                color: '#9B9B9B',
                maxWidth: '420px',
                marginTop: '20px',
                lineHeight: 1.6,
              }}
            >
              Global corporate consulting and business transformation. Helping ambitious enterprise leaders turn complexity into compounding market advantage.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '40px',
            }}
          >
            {/* Nav Column 1 */}
            <div>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  color: '#FFFFFF',
                  textTransform: 'uppercase',
                  marginBottom: '24px',
                }}
              >
                PRACTICE AREAS
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <li>
                  <Link to="/services" style={{ color: '#9B9B9B', fontSize: '14px', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.target.style.color = '#C8F169')} onMouseLeave={(e) => (e.target.style.color = '#9B9B9B')}>
                    Capabilities
                  </Link>
                </li>
                <li>
                  <Link to="/industries" style={{ color: '#9B9B9B', fontSize: '14px', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.target.style.color = '#C8F169')} onMouseLeave={(e) => (e.target.style.color = '#9B9B9B')}>
                    Industries
                  </Link>
                </li>
                <li>
                  <Link to="/solutions" style={{ color: '#9B9B9B', fontSize: '14px', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.target.style.color = '#C8F169')} onMouseLeave={(e) => (e.target.style.color = '#9B9B9B')}>
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/case-studies" style={{ color: '#9B9B9B', fontSize: '14px', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.target.style.color = '#C8F169')} onMouseLeave={(e) => (e.target.style.color = '#9B9B9B')}>
                    Work & Case Studies
                  </Link>
                </li>
              </ul>
            </div>

            {/* Nav Column 2 */}
            <div>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  color: '#FFFFFF',
                  textTransform: 'uppercase',
                  marginBottom: '24px',
                }}
              >
                FIRM
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <li>
                  <Link to="/about" style={{ color: '#9B9B9B', fontSize: '14px', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.target.style.color = '#C8F169')} onMouseLeave={(e) => (e.target.style.color = '#9B9B9B')}>
                    Company Overview
                  </Link>
                </li>
                <li>
                  <Link to="/team" style={{ color: '#9B9B9B', fontSize: '14px', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.target.style.color = '#C8F169')} onMouseLeave={(e) => (e.target.style.color = '#9B9B9B')}>
                    Leadership
                  </Link>
                </li>
                <li>
                  <Link to="/careers" style={{ color: '#9B9B9B', fontSize: '14px', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.target.style.color = '#C8F169')} onMouseLeave={(e) => (e.target.style.color = '#9B9B9B')}>
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/blog" style={{ color: '#9B9B9B', fontSize: '14px', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.target.style.color = '#C8F169')} onMouseLeave={(e) => (e.target.style.color = '#9B9B9B')}>
                    Insights
                  </Link>
                </li>
                <li>
                  <Link to="/contact" style={{ color: '#9B9B9B', fontSize: '14px', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.target.style.color = '#C8F169')} onMouseLeave={(e) => (e.target.style.color = '#9B9B9B')}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Nav Column 3 */}
            <div>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  color: '#FFFFFF',
                  textTransform: 'uppercase',
                  marginBottom: '24px',
                }}
              >
                GLOBAL DESKS
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', color: '#9B9B9B', fontSize: '14px' }}>
                <li>New York — 575 5th Ave</li>
                <li>London — 100 Bishopsgate</li>
                <li>Zurich — Paradeplatz 4</li>
                <li>Singapore — Marina Bay Tower</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Social + Copyright */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            paddingTop: '36px',
            fontSize: '13px',
            color: '#9B9B9B',
          }}
        >
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <span>© 2026 VANTAGE GLOBAL LLC. ALL RIGHTS RESERVED.</span>
            <span style={{ display: 'inline-block', width: '4px', height: '4px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '50%' }} />
            <Link to="/contact" style={{ color: '#9B9B9B' }} onMouseEnter={(e) => (e.target.style.color = '#FFFFFF')} onMouseLeave={(e) => (e.target.style.color = '#9B9B9B')}>
              Privacy Policy
            </Link>
            <span style={{ display: 'inline-block', width: '4px', height: '4px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '50%' }} />
            <Link to="/contact" style={{ color: '#9B9B9B' }} onMouseEnter={(e) => (e.target.style.color = '#FFFFFF')} onMouseLeave={(e) => (e.target.style.color = '#9B9B9B')}>
              Terms of Engagement
            </Link>
          </div>

          <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              style={{ color: '#9B9B9B', fontWeight: 600, transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.target.style.color = '#C8F169')}
              onMouseLeave={(e) => (e.target.style.color = '#9B9B9B')}
            >
              LinkedIn ↗
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              style={{ color: '#9B9B9B', fontWeight: 600, transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.target.style.color = '#C8F169')}
              onMouseLeave={(e) => (e.target.style.color = '#9B9B9B')}
            >
              Instagram ↗
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              style={{ color: '#9B9B9B', fontWeight: 600, transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.target.style.color = '#C8F169')}
              onMouseLeave={(e) => (e.target.style.color = '#9B9B9B')}
            >
              X ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
