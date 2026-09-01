import React from 'react';

export default function Metrics() {
  return (
    <section
      style={{
        padding: '90px 0',
        backgroundColor: '#161616',
        borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="grid-lines-bg"
    >
      <div className="container">
        {/* Section Label */}
        <div style={{ marginBottom: '48px' }}>
          <div className="section-label">GLOBAL COMPOUNDING IMPACT</div>
          <h2 className="section-title" style={{ color: '#FFFFFF' }}>
            AUDITED SCALE & ENTERPRISE VALUE
          </h2>
        </div>

        {/* COMPACT & BALANCED ASYMMETRIC NUMERICAL COMPOSITION */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
          }}
        >
          {/* Row 1: Left 18 YEARS / Right 42 MARKETS */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: '40px',
              alignItems: 'baseline',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              paddingBottom: '32px',
            }}
            className="staggered-metric-row"
          >
            <div>
              <div
                style={{
                  fontSize: 'clamp(44px, 5.5vw, 76px)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 0.95,
                  letterSpacing: '-0.04em',
                }}
              >
                18
              </div>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  color: '#C8F169',
                  textTransform: 'uppercase',
                  marginTop: '8px',
                }}
              >
                YEARS OF EXECUTIVE ADVISORY
              </div>
            </div>

            <div style={{ paddingLeft: '32px', borderLeft: '1px solid rgba(255, 255, 255, 0.14)' }} className="metric-offset-col">
              <div
                style={{
                  fontSize: 'clamp(40px, 5vw, 68px)',
                  fontWeight: 800,
                  color: '#899DFF',
                  lineHeight: 0.95,
                  letterSpacing: '-0.03em',
                }}
              >
                42
              </div>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  color: '#9B9B9B',
                  textTransform: 'uppercase',
                  marginTop: '8px',
                }}
              >
                GLOBAL FINANCIAL & INDUSTRIAL MARKETS
              </div>
            </div>
          </div>

          {/* Row 2: Left 1,240+ PROJECTS / Right 94% RETENTION */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.2fr',
              gap: '40px',
              alignItems: 'baseline',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              paddingBottom: '32px',
            }}
            className="staggered-metric-row"
          >
            <div>
              <div
                style={{
                  fontSize: 'clamp(40px, 5vw, 68px)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 0.95,
                  letterSpacing: '-0.03em',
                }}
              >
                1,240<span style={{ color: '#C8F169' }}>+</span>
              </div>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  color: '#9B9B9B',
                  textTransform: 'uppercase',
                  marginTop: '8px',
                }}
              >
                DEPLOYED ENTERPRISE ENGAGEMENTS
              </div>
            </div>

            <div style={{ paddingLeft: '32px', borderLeft: '1px solid rgba(255, 255, 255, 0.14)' }} className="metric-offset-col">
              <div
                style={{
                  fontSize: 'clamp(44px, 5.5vw, 76px)',
                  fontWeight: 800,
                  color: '#C8F169',
                  lineHeight: 0.95,
                  letterSpacing: '-0.04em',
                }}
              >
                94<span style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}>%</span>
              </div>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  color: '#F4F4F4',
                  textTransform: 'uppercase',
                  marginTop: '8px',
                }}
              >
                C-SUITE CLIENT RETENTION RATE
              </div>
            </div>
          </div>

          {/* Row 3: Well-proportioned Capstone $3.8B VALUE CREATED */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              paddingTop: '8px',
            }}
          >
            <div
              style={{
                fontSize: 'clamp(52px, 7vw, 92px)',
                fontWeight: 800,
                color: '#FFFFFF',
                lineHeight: 0.92,
                letterSpacing: '-0.04em',
              }}
            >
              $3.8<span style={{ color: '#C8F169' }}>B</span>
            </div>
            <div
              style={{
                fontSize: '13px',
                fontWeight: 800,
                letterSpacing: '0.14em',
                color: '#C8F169',
                textTransform: 'uppercase',
                marginTop: '10px',
              }}
            >
              AUDITED ENTERPRISE VALUE GENERATED WORLDWIDE
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .staggered-metric-row {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          .metric-offset-col {
            padding-left: 0 !important;
            border-left: none !important;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            padding-top: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
