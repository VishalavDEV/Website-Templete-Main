import React from 'react';
import PageHeader from '../components/PageHeader';
import TeamSection from '../components/Team';
import CTA from '../components/CTA';

export default function Team() {
  return (
    <main>
      <PageHeader
        badge="PARTNERSHIP & GOVERNANCE"
        title="EXECUTIVE"
        highlight="LEADERSHIP."
        description="Our global partnership brings decades of high-stakes executive leadership, computational engineering, and strategic acumen to the world's most critical enterprises."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Company', path: '/about' },
          { label: 'Leadership' }
        ]}
      />

      {/* Full 6-Partner Leadership Showcase */}
      <TeamSection limit={6} showHeader={false} />

      {/* Advisory Council & Global Governance */}
      <section
        style={{
          padding: '120px 0',
          backgroundColor: '#111111',
          borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: '60px',
              alignItems: 'center',
            }}
            className="team-governance-grid"
          >
            <div>
              <div className="section-label">GLOBAL ADVISORY COUNCIL</div>
              <h2 className="section-title" style={{ color: '#FFFFFF', marginBottom: '24px' }}>
                INDEPENDENT OVERSIGHT & SECTOR AUTHORITY
              </h2>
              <p
                style={{
                  fontSize: '18px',
                  color: '#F4F4F4',
                  lineHeight: 1.6,
                  marginBottom: '16px',
                }}
              >
                In addition to our equity partners, VANTAGE is guided by an external council of former central bankers, Fortune 50 chief technologists, and defense research fellows.
              </p>
              <p
                style={{
                  fontSize: '15px',
                  color: '#9B9B9B',
                  lineHeight: 1.7,
                }}
              >
                This ensures our strategic scenario modeling accounts for geopolitical shifts, frontier AI safety standards, and macroeconomic policy inflections before they impact global capital markets.
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#191919',
                border: '1px solid rgba(255, 255, 255, 0.14)',
                borderRadius: '4px',
                padding: '40px',
              }}
            >
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#C8F169', letterSpacing: '0.1em', marginBottom: '20px' }}>
                GOVERNANCE PILLARS
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF' }}>Algorithmic Model Risk Committee</h4>
                  <p style={{ fontSize: '13px', color: '#9B9B9B', marginTop: '4px' }}>Independent quarterly verification of all client-deployed machine intelligence engines.</p>
                </div>
                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '16px' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF' }}>Macroeconomic Volatility Board</h4>
                  <p style={{ fontSize: '13px', color: '#9B9B9B', marginTop: '4px' }}>Probabilistic stress testing of sovereign debt, rate cycles, and liquidity shocks.</p>
                </div>
                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '16px' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF' }}>Client Value Realization Audit</h4>
                  <p style={{ fontSize: '13px', color: '#9B9B9B', marginTop: '4px' }}>Third-party metric verification on all performance-contingent advisory engagements.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 860px) {
            .team-governance-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      <CTA />
    </main>
  );
}
