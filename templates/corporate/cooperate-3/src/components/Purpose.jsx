import React from 'react';

export default function Purpose() {
  const timelinePhases = [
    { title: 'STRATEGY', desc: 'Market Sensing & Capital Allocation' },
    { title: 'TRANSFORMATION', desc: 'Core Modernization & Operating Models' },
    { title: 'OPERATIONS', desc: 'Telemetry & Supply Optimization' },
    { title: 'GROWTH', desc: 'Sustainable Scale & Margin Expansion' },
  ];

  return (
    <section
      style={{
        padding: '90px 0',
        backgroundColor: '#191919',
        borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
      }}
    >
      <div className="container">
        {/* Top: Small Label */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div className="section-label" style={{ margin: '0 auto' }}>
            OUR PURPOSE
          </div>
        </div>

        {/* Center: Statement */}
        <div style={{ textAlign: 'center', maxWidth: '960px', margin: '0 auto 32px auto' }}>
          <h2
            className="hero-title"
            style={{
              fontSize: 'clamp(32px, 4.2vw, 56px)',
              lineHeight: 1.1,
              color: '#FFFFFF',
              textTransform: 'uppercase',
            }}
          >
            We turn complex<br />
            business challenges<br />
            into measurable <span className="accent-text">advantage.</span>
          </h2>
        </div>

        {/* Bottom: Supporting Strategy Narrative */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 56px auto' }}>
          <p
            style={{
              fontSize: '17px',
              fontWeight: 500,
              color: '#F4F4F4',
              lineHeight: 1.6,
            }}
          >
            VANTAGE partners with leaders to transform strategy, operations, technology, and growth.
          </p>
        </div>

        {/* Horizontal Visual Timeline Strip */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.14)',
            paddingTop: '32px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
          }}
          className="purpose-timeline-grid"
        >
          {timelinePhases.map((phase, idx) => (
            <div
              key={phase.title}
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '4px',
                }}
              >
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#C8F169' }}>
                  0{idx + 1}
                </span>
                <div
                  style={{
                    flex: 1,
                    height: '1px',
                    backgroundColor: 'rgba(255, 255, 255, 0.14)',
                  }}
                />
              </div>

              <div
                style={{
                  fontSize: '15px',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  letterSpacing: '0.04em',
                }}
              >
                {phase.title}
              </div>

              <div
                style={{
                  fontSize: '12px',
                  color: '#9B9B9B',
                  lineHeight: 1.5,
                }}
              >
                {phase.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
