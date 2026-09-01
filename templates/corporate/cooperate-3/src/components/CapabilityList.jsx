import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';

export default function CapabilityList() {
  const [activeId, setActiveId] = useState(servicesData[0].id);
  const activeService =
    servicesData.find((s) => s.id === activeId) || servicesData[0];

  return (
    <section
      style={{
        padding: '90px 0',
        backgroundColor: '#111111',
        borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '20px',
            marginBottom: '36px',
          }}
        >
          <div>
            <div className="section-label">CORE CAPABILITIES</div>
            <h2 className="section-title" style={{ color: '#FFFFFF' }}>
              PRACTICE NAVIGATION
            </h2>
          </div>
          <Link to="/services" className="btn btn-secondary">
            <span>All 06 Practices</span>
            <span className="arrow-glyph">→</span>
          </Link>
        </div>

        {/* HORIZONTAL INTERACTIVE CAPABILITY BAR */}
        <div
          style={{
            display: 'flex',
            alignItems: 'stretch',
            overflowX: 'auto',
            borderTop: '1px solid rgba(255, 255, 255, 0.14)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
            marginBottom: '32px',
            scrollbarWidth: 'none',
          }}
          className="capability-horizontal-nav"
        >
          {servicesData.map((svc) => {
            const isSelected = svc.id === activeId;

            return (
              <button
                key={svc.id}
                onClick={() => setActiveId(svc.id)}
                style={{
                  padding: '18px 24px',
                  backgroundColor: isSelected ? '#191919' : 'transparent',
                  borderRight: '1px solid rgba(255, 255, 255, 0.14)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'background-color 0.25s ease',
                  flex: '1 0 auto',
                  textAlign: 'left',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    backgroundColor: isSelected ? '#C8F169' : 'transparent',
                  }}
                />

                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 800,
                    color: isSelected ? '#C8F169' : '#666666',
                  }}
                >
                  {svc.number}
                </span>

                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: 800,
                    letterSpacing: '0.03em',
                    color: isSelected ? '#FFFFFF' : '#9B9B9B',
                  }}
                >
                  {svc.title}
                </span>

                <span
                  style={{
                    color: isSelected ? '#C8F169' : 'transparent',
                    fontSize: '12px',
                    marginLeft: 'auto',
                  }}
                >
                  ↓
                </span>
              </button>
            );
          })}
        </div>

        {/* EXPANDED CONTENT PANEL BELOW */}
        <div
          key={activeService.id}
          style={{
            backgroundColor: '#191919',
            border: '1px solid rgba(255, 255, 255, 0.14)',
            borderRadius: '4px',
            padding: '40px 36px',
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '40px',
            alignItems: 'center',
            animation: 'fadeInPanel 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          className="capability-panel-grid"
        >
          <div>
            <div
              style={{
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.12em',
                color: '#C8F169',
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}
            >
              PRACTICE {activeService.number} // {activeService.shortTitle.toUpperCase()}
            </div>

            <h3
              style={{
                fontSize: 'clamp(26px, 3vw, 38px)',
                fontWeight: 800,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                marginBottom: '14px',
              }}
            >
              {activeService.title}
            </h3>

            <p
              style={{
                fontSize: '16px',
                fontWeight: 500,
                color: '#F4F4F4',
                lineHeight: 1.5,
                marginBottom: '12px',
              }}
            >
              {activeService.tagline}
            </p>

            <p
              style={{
                fontSize: '14px',
                color: '#9B9B9B',
                lineHeight: 1.6,
                marginBottom: '24px',
              }}
            >
              {activeService.description}
            </p>

            {/* Impact Metrics Row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
                paddingTop: '20px',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                marginBottom: '28px',
              }}
            >
              {activeService.metrics.map((m, idx) => (
                <div key={idx}>
                  <div
                    style={{
                      fontSize: 'clamp(20px, 2.2vw, 26px)',
                      fontWeight: 800,
                      color: idx === 0 ? '#C8F169' : '#FFFFFF',
                      lineHeight: 1,
                      marginBottom: '4px',
                    }}
                  >
                    {m.value}
                  </div>
                  <div
                    style={{
                      fontSize: '10px',
                      fontWeight: 700,
                      color: '#9B9B9B',
                      textTransform: 'uppercase',
                    }}
                  >
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <Link
                to={`/services/${activeService.id}`}
                className="btn btn-primary"
                style={{ padding: '14px 28px', fontSize: '12px' }}
              >
                <span>Explore {activeService.title} Practice</span>
                <span className="arrow-glyph">→</span>
              </Link>
            </div>
          </div>

          <div
            style={{
              height: '320px',
              borderRadius: '2px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.14)',
              position: 'relative',
            }}
          >
            <img
              src={activeService.image}
              alt={activeService.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'grayscale(60%) contrast(120%) brightness(85%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '12px',
                right: '12px',
                backgroundColor: 'rgba(17, 17, 17, 0.9)',
                padding: '4px 10px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                fontSize: '10px',
                fontWeight: 700,
                color: '#C8F169',
              }}
            >
              ENGAGEMENT POD READY
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInPanel {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 900px) {
          .capability-panel-grid {
            grid-template-columns: 1fr !important;
            padding: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
