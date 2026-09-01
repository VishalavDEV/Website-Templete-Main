import React from 'react';

export default function TrustBar() {
  const clients = [
    'NORTHSTAR',
    'AXIOM',
    'VERTEX',
    'STRATA',
    'MONUMENT',
    'ARCADIA',
  ];

  return (
    <section
      style={{
        padding: '48px 0',
        backgroundColor: '#111111',
        borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          {/* Minimal Label */}
          <div
            style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.16em',
              color: '#9B9B9B',
              textTransform: 'uppercase',
            }}
          >
            TRUSTED BY LEADING ORGANIZATIONS
          </div>

          {/* Monochrome Text Client Names Strip */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '32px 48px',
            }}
          >
            {clients.map((client) => (
              <span
                key={client}
                style={{
                  fontSize: 'clamp(18px, 2.4vw, 26px)',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  color: 'rgba(255, 255, 255, 0.65)',
                  transition: 'color 0.25s ease, transform 0.25s ease',
                  cursor: 'default',
                  userSelect: 'none',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#FFFFFF';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'rgba(255, 255, 255, 0.65)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
