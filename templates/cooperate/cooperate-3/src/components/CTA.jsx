import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CTA() {
  const [expandedCat, setExpandedCat] = useState('STRATEGY');

  const careerCategories = [
    {
      name: 'STRATEGY',
      roles: 'Engagement Directors, M&A Synergy Advisors, Quantitative Scenario Modelers',
      focus: 'Boardroom capital allocation, sovereign portfolio restructuring, enterprise growth engines.'
    },
    {
      name: 'TECHNOLOGY',
      roles: 'Enterprise AI Systems Architects, Data Mesh Engineers, Cloud Modernization Leads',
      focus: 'Sovereign LLM deployments, sub-millisecond execution cores, zero-egress data fabrics.'
    },
    {
      name: 'OPERATIONS',
      roles: 'Supply Network Directors, Digital Twin Architects, Lean Turnaround Specialists',
      focus: 'Industrial IoT sensorization, predictive inventory control towers, working capital optimization.'
    },
    {
      name: 'DESIGN & GOVERNANCE',
      roles: 'Operating Model Architects, C-Suite Transformation Leads, Executive Change Directors',
      focus: 'Decentralized domain ownership, performance value-sharing structures, agile stream alignment.'
    }
  ];

  return (
    <section
      style={{
        padding: '90px 0',
        backgroundColor: '#111111',
        borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
      }}
    >
      <div className="container">
        {/* TOP: SPLIT-SCREEN CAREERS OVERVIEW */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 1fr',
            gap: '48px',
            alignItems: 'center',
            marginBottom: '56px',
          }}
          className="careers-split-grid"
        >
          <div>
            <div className="section-label">CAREERS AT VANTAGE</div>

            <h2
              className="hero-title"
              style={{
                color: '#FFFFFF',
                fontSize: 'clamp(30px, 4vw, 56px)',
                lineHeight: 1.05,
                marginBottom: '18px',
              }}
            >
              YOUR NEXT<br />
              <span className="accent-text">MOVE STARTS HERE.</span>
            </h2>

            <p
              className="subheading"
              style={{
                color: '#F4F4F4',
                marginBottom: '28px',
                maxWidth: '480px',
              }}
            >
              Join a team solving some of the world's most complex business challenges.
            </p>

            <Link to="/careers" className="btn btn-primary" style={{ padding: '14px 28px' }}>
              <span>Explore opportunities</span>
              <span className="arrow-glyph">→</span>
            </Link>
          </div>

          <div
            style={{
              height: '300px',
              borderRadius: '2px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.14)',
              position: 'relative',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80"
              alt="Vantage Workspace"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'grayscale(100%) contrast(120%) brightness(75%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '12px',
                left: '12px',
                backgroundColor: 'rgba(17, 17, 17, 0.9)',
                padding: '4px 10px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                fontSize: '10px',
                fontWeight: 700,
                color: '#C8F169',
              }}
            >
              GLOBAL FELLOWSHIP & EQUITY TRACK
            </div>
          </div>
        </div>

        {/* BELOW: EXPANDABLE CAREER CATEGORIES */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.14)',
          }}
        >
          {careerCategories.map((cat) => {
            const isExpanded = expandedCat === cat.name;

            return (
              <div
                key={cat.name}
                style={{
                  borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
                  backgroundColor: isExpanded ? '#161616' : 'transparent',
                  transition: 'background-color 0.25s ease',
                }}
              >
                <button
                  onClick={() => setExpandedCat(isExpanded ? '' : cat.name)}
                  style={{
                    width: '100%',
                    padding: '20px 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    cursor: 'pointer',
                  }}
                >
                  <span
                    style={{
                      fontSize: 'clamp(17px, 2vw, 24px)',
                      fontWeight: 800,
                      color: isExpanded ? '#C8F169' : '#FFFFFF',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {cat.name} {isExpanded ? '—' : '+'}
                  </span>

                  <span style={{ fontSize: '11px', color: '#9B9B9B', textTransform: 'uppercase' }}>
                    {isExpanded ? 'COLLAPSE' : 'VIEW PRACTICE ROLES'}
                  </span>
                </button>

                {isExpanded && (
                  <div
                    style={{
                      paddingBottom: '24px',
                      display: 'grid',
                      gridTemplateColumns: '1.2fr 1fr',
                      gap: '32px',
                      animation: 'fadeIn 0.3s ease',
                    }}
                    className="career-expand-grid"
                  >
                    <div>
                      <div style={{ fontSize: '11px', fontWeight: 800, color: '#C8F169', marginBottom: '6px' }}>
                        ACTIVE DISCIPLINES & ROLES
                      </div>
                      <p style={{ fontSize: '14px', color: '#F4F4F4', fontWeight: 600 }}>
                        {cat.roles}
                      </p>
                    </div>

                    <div>
                      <div style={{ fontSize: '11px', fontWeight: 800, color: '#9B9B9B', marginBottom: '6px' }}>
                        PRACTICE MISSION
                      </div>
                      <p style={{ fontSize: '13px', color: '#9B9B9B', lineHeight: 1.5 }}>
                        {cat.focus}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .careers-split-grid,
          .career-expand-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
