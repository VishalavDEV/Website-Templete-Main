import React from 'react';

export default function Footer() {
  return (
    <footer className="footer" id="about">
      <div style={{
        fontFamily: 'Plus Jakarta Sans, sans-serif',
        fontSize: '1.6rem',
        fontWeight: 900,
        marginBottom: 10,
        letterSpacing: '0.04em',
        color: 'var(--text-main)'
      }}>
        BUILDX // SUSTAINABLE BIOPHILIC ARCHITECTURE
      </div>
      <p style={{
        color: 'var(--text-muted)',
        fontSize: '0.88rem',
        maxWidth: 620,
        margin: '0 auto 20px auto',
        lineHeight: 1.6
      }}>
        Singapore · Zurich · Kyoto · Vancouver · Oslo<br />
        biophilic@buildx-construction.com · Net-Zero Mass-Timber Engineering
      </p>
      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
        © {new Date().getFullYear()} BuildX Sustainable Architecture. Full Stack React + Spring Boot Architecture.
      </div>
    </footer>
  );
}
