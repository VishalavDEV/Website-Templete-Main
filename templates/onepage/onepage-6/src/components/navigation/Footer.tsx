import React from 'react';

export const Footer: React.FC = () => {
  const navLinks = [
    { label: 'SOUND', href: '#sound' },
    { label: 'RELEASES', href: '#releases' },
    { label: 'VISUALS', href: '#visuals' },
    { label: 'TOUR', href: '#tour' },
    { label: 'STORY', href: '#story' },
    { label: 'STUDIO', href: '#studio' },
    { label: 'CONTACT', href: '#contact' }
  ];

  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-dark)',
        color: 'var(--text-on-dark)',
        padding: '80px 5vw 40px 5vw',
        borderTop: '1px solid var(--border-dark)'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '40px', marginBottom: '60px' }}>
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
                fontWeight: 400,
                color: 'var(--bg-light)',
                lineHeight: 1,
                marginBottom: '8px'
              }}
            >
              NOVA//ECHO
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '1.2rem',
                color: 'var(--accent-warm)'
              }}
            >
              Sound lives between moments.
            </p>
          </div>

          <nav
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '24px'
            }}
            aria-label="Footer Navigation"
          >
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-grotesk)',
                  fontSize: '0.85rem',
                  letterSpacing: '0.12em',
                  color: 'var(--text-muted-on-dark)',
                  textDecoration: 'none'
                }}
                data-cursor={link.label}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Copyright */}
        <div
          style={{
            borderTop: '1px solid var(--border-dark)',
            paddingTop: '24px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.8rem',
            fontFamily: 'var(--font-grotesk)',
            color: 'var(--text-muted-on-dark)'
          }}
        >
          <span>© 2026 NOVA//ECHO — FICTIONAL CONCEPT WEBSITE</span>
          <span style={{ color: 'var(--lavender)' }}>CHROME DUSK VISUAL DIRECTION</span>
        </div>
      </div>
    </footer>
  );
};
