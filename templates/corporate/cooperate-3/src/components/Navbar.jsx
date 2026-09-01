import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { num: '01', name: 'Capabilities', path: '/services' },
    { num: '02', name: 'Industries', path: '/industries' },
    { num: '03', name: 'Work', path: '/case-studies' },
    { num: '04', name: 'Insights', path: '/blog' },
    { num: '05', name: 'Company', path: '/about' },
  ];

  return (
    <>
      {/* DESKTOP VERTICAL NAVIGATION RAIL */}
      <aside
        className="desktop-nav-rail"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          width: isExpanded ? '260px' : '80px',
          backgroundColor: '#111111',
          borderRight: '1px solid rgba(255, 255, 255, 0.14)',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: isExpanded ? '32px 24px' : '32px 16px',
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          boxShadow: isExpanded ? '10px 0 40px rgba(0,0,0,0.8)' : 'none',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}
      >
        {/* Top: Brand Vertical Monogram / Expanded */}
        <div>
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              color: '#FFFFFF',
              textDecoration: 'none',
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                backgroundColor: '#191919',
                border: '1px solid rgba(255, 255, 255, 0.14)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
                fontWeight: 800,
                color: '#C8F169',
                flexShrink: 0,
              }}
            >
              V
            </div>

            {isExpanded && (
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '18px', fontWeight: 800, letterSpacing: '0.08em' }}>
                  VANTAGE
                </span>
                <span style={{ fontSize: '10px', color: '#9B9B9B', letterSpacing: '0.12em' }}>
                  GLOBAL ADVISORY
                </span>
              </div>
            )}
          </Link>

          {!isExpanded && (
            <div
              style={{
                writingMode: 'vertical-rl',
                textOrientation: 'mixed',
                transform: 'rotate(180deg)',
                margin: '40px auto 0 auto',
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.24em',
                color: '#9B9B9B',
                textAlign: 'center',
              }}
            >
              V A N T A G E
            </div>
          )}
        </div>

        {/* Middle: Numbered Navigation Items */}
        <nav
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            marginTop: '20px',
          }}
        >
          {navLinks.map((item) => {
            const isActive = location.pathname.startsWith(item.path);

            return (
              <Link
                key={item.name}
                to={item.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  color: isActive ? '#C8F169' : '#9B9B9B',
                  textDecoration: 'none',
                  padding: '8px 0',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = isActive ? '#C8F169' : '#9B9B9B')
                }
              >
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    color: isActive ? '#C8F169' : '#666666',
                    width: '32px',
                    textAlign: 'center',
                    flexShrink: 0,
                  }}
                >
                  {item.num}
                </span>

                {isExpanded && (
                  <span
                    style={{
                      fontSize: '14px',
                      fontWeight: 700,
                      letterSpacing: '0.04em',
                      color: isActive ? '#FFFFFF' : 'inherit',
                    }}
                  >
                    {item.name}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bottom: LET'S TALK ↗ */}
        <div>
          <Link
            to="/contact"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: isExpanded ? 'space-between' : 'center',
              backgroundColor: '#C8F169',
              color: '#111111',
              padding: isExpanded ? '14px 18px' : '14px 0',
              width: '100%',
              borderRadius: '2px',
              fontWeight: 800,
              fontSize: '12px',
              letterSpacing: '0.08em',
              textDecoration: 'none',
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#D8F78B')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#C8F169')}
            title="LET'S TALK"
          >
            {isExpanded && <span>LET'S TALK</span>}
            <span style={{ fontSize: '15px' }}>↗</span>
          </Link>
        </div>
      </aside>

      {/* MOBILE TOP BAR (< 1024px) */}
      <header
        className="mobile-top-bar"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '70px',
          backgroundColor: '#111111',
          borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
          zIndex: 998,
          display: 'none',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px',
        }}
      >
        <Link to="/" style={{ fontSize: '20px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '0.08em' }}>
          VANTAGE <span style={{ color: '#C8F169' }}>■</span>
        </Link>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            fontSize: '13px',
            fontWeight: 800,
            letterSpacing: '0.1em',
            color: '#FFFFFF',
            padding: '8px 14px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '2px',
          }}
        >
          {mobileMenuOpen ? 'CLOSE ✕' : 'MENU'}
        </button>
      </header>

      {/* MOBILE FULL-SCREEN MENU OVERLAY */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: '#111111',
            zIndex: 999,
            padding: '100px 32px 40px 32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ fontSize: '11px', letterSpacing: '0.14em', color: '#9B9B9B', textTransform: 'uppercase' }}>
              NAVIGATION
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                style={{
                  fontSize: '26px',
                  fontWeight: 800,
                  color: location.pathname.startsWith(link.path) ? '#C8F169' : '#FFFFFF',
                  display: 'flex',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  paddingBottom: '14px',
                }}
              >
                <span>{link.name}</span>
                <span style={{ fontSize: '14px', color: '#9B9B9B' }}>{link.num}</span>
              </Link>
            ))}
            <Link
              to="/solutions"
              style={{
                fontSize: '26px',
                fontWeight: 800,
                color: location.pathname === '/solutions' ? '#C8F169' : '#FFFFFF',
                display: 'flex',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                paddingBottom: '14px',
              }}
            >
              <span>Solutions</span>
              <span style={{ fontSize: '14px', color: '#9B9B9B' }}>06</span>
            </Link>
          </div>

          <div>
            <Link
              to="/contact"
              className="btn btn-primary"
              style={{ width: '100%', padding: '18px 0', fontSize: '14px' }}
            >
              <span>LET'S TALK</span>
              <span style={{ fontSize: '16px' }}>↗</span>
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav-rail {
            display: none !important;
          }
          .mobile-top-bar {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
