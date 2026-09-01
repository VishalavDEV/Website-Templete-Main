import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-main)',
      borderTop: '2px solid var(--border-strong)',
      padding: '80px 0 40px 0',
      position: 'relative'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
          gap: '48px',
          marginBottom: '60px'
        }} className="footer-grid">

          {/* Col 1: Brand Info */}
          <div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.6rem',
              fontWeight: 900,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '12px'
            }}>
              CHRONOS // MONOLITHIC
            </div>
            <p style={{
              fontSize: '0.92rem',
              color: 'var(--text-muted)',
              lineHeight: 1.65,
              maxWidth: '340px',
              marginBottom: '20px'
            }}>
              Monolithic raw concrete architecture and heavy civil engineering atelier. Built with React (Vite) and Spring Boot REST API.
            </p>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--accent-orange)'
            }}>
              ISO 9001 / EN 206 STRUCTURAL CONCRETE CERTIFIED
            </div>
          </div>

          {/* Col 2: Sectors */}
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              fontWeight: 800,
              color: 'var(--text-dim)',
              letterSpacing: '0.12em',
              marginBottom: '16px',
              textTransform: 'uppercase'
            }}>
              // HUBS & ATELIERS
            </div>
            <ul style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.84rem',
              color: 'var(--text-muted)'
            }}>
              <li>Gothenburg (Nordic HQ)</li>
              <li>Basel (Alpine Civil)</li>
              <li>Reykjavik (Seismic Monoliths)</li>
              <li>Rotterdam (Marine Heavy)</li>
              <li>Kyoto (Atelier East)</li>
            </ul>
          </div>

          {/* Col 3: Specifications */}
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              fontWeight: 800,
              color: 'var(--text-dim)',
              letterSpacing: '0.12em',
              marginBottom: '16px',
              textTransform: 'uppercase'
            }}>
              // SPECIFICATIONS
            </div>
            <ul style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.84rem',
              color: 'var(--text-muted)'
            }}>
              <li>C80 Self-Compacting Mix</li>
              <li>Post-Tensioned Cantilevers</li>
              <li>Carbon Mineralization</li>
              <li>Zone 4 Seismic Isolation</li>
              <li>Embedded Strain Telemetry</li>
            </ul>
          </div>

          {/* Col 4: Platform Stack */}
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              fontWeight: 800,
              color: 'var(--text-dim)',
              letterSpacing: '0.12em',
              marginBottom: '16px',
              textTransform: 'uppercase'
            }}>
              // FULL-STACK PORTS
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.82rem',
              color: 'var(--text-muted)',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
              <div>Frontend: <span style={{ color: 'var(--accent-cyan)' }}>http://localhost:5173</span></div>
              <div>Backend API: <span style={{ color: 'var(--accent-orange)' }}>http://localhost:8080</span></div>
              <div>Engine: <span style={{ color: 'var(--text-main)' }}>Java 21 / Spring Boot 3.3.2</span></div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '28px',
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.78rem',
          color: 'var(--text-dim)'
        }}>
          <div>
            © {new Date().getFullYear()} CHRONOS ARCHITECTURE & CIVIL ENGINEERING. ALL RIGHTS RESERVED.
          </div>
          <div style={{ color: 'var(--accent-orange)' }}>
            TEMPLATE 8 // CHRONOS BRUTALIST SUITE
          </div>
        </div>
      </div>
    </footer>
  );
}
