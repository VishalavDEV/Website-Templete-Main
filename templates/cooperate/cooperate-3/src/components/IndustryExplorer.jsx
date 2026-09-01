import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { industriesData } from '../data/industries';

export default function IndustryExplorer() {
  const [activeId, setActiveId] = useState(industriesData[0].id);
  const activeSector =
    industriesData.find((ind) => ind.id === activeId) || industriesData[0];

  return (
    <section
      style={{
        padding: '90px 0',
        backgroundColor: '#161616',
        borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '48px' }}>
          <div className="section-label">INDUSTRY ARCHITECTURE</div>
          <h2 className="section-title" style={{ color: '#FFFFFF' }}>
            SECTOR-SPECIFIC COMMAND EXPLORER
          </h2>
        </div>

        {/* FULL-SCREEN INDUSTRY EXPLORER GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '320px 1fr',
            gap: '36px',
            alignItems: 'stretch',
          }}
          className="industry-command-grid"
        >
          {/* LEFT: Industry Navigation List */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              borderTop: '1px solid rgba(255, 255, 255, 0.14)',
            }}
          >
            {industriesData.map((item) => {
              const isSelected = item.id === activeId;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  onMouseEnter={() => setActiveId(item.id)}
                  style={{
                    padding: '18px 16px',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
                    textAlign: 'left',
                    backgroundColor: isSelected ? '#111111' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'relative',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: '3px',
                      backgroundColor: '#C8F169',
                      opacity: isSelected ? 1 : 0,
                    }}
                  />

                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: isSelected ? '#C8F169' : '#666666' }}>
                      {item.code}
                    </span>
                    <span
                      style={{
                        fontSize: '16px',
                        fontWeight: 800,
                        color: isSelected ? '#FFFFFF' : 'rgba(255, 255, 255, 0.5)',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {item.name}
                    </span>
                  </div>

                  <span
                    style={{
                      color: isSelected ? '#C8F169' : 'transparent',
                      fontSize: '14px',
                      transform: isSelected ? 'translateX(0)' : 'translateX(-6px)',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* RIGHT: Image with Layered Content Overlay */}
          <div
            key={activeSector.id}
            style={{
              position: 'relative',
              minHeight: '440px',
              borderRadius: '4px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.14)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '36px',
              animation: 'fadeInSector 0.3s ease',
            }}
          >
            <img
              src={activeSector.image}
              alt={activeSector.name}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'grayscale(70%) contrast(120%) brightness(55%)',
              }}
            />

            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(17,17,17,0.95) 0%, rgba(17,17,17,0.4) 60%, transparent 100%)',
              }}
            />

            <div style={{ position: 'relative', zIndex: 2, maxWidth: '720px' }}>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
                {activeSector.subSectors.slice(0, 3).map((sub, i) => (
                  <span key={i} className="badge-outline" style={{ backgroundColor: 'rgba(17,17,17,0.8)' }}>
                    {sub}
                  </span>
                ))}
              </div>

              <h3
                style={{
                  fontSize: 'clamp(26px, 3.2vw, 38px)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 1.15,
                  marginBottom: '10px',
                }}
              >
                {activeSector.name}
              </h3>

              <p
                style={{
                  fontSize: '16px',
                  fontWeight: 500,
                  color: '#F4F4F4',
                  lineHeight: 1.5,
                  marginBottom: '8px',
                }}
              >
                {activeSector.tagline}
              </p>

              <p
                style={{
                  fontSize: '14px',
                  color: '#9B9B9B',
                  lineHeight: 1.6,
                  marginBottom: '20px',
                }}
              >
                {activeSector.description}
              </p>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '20px',
                  paddingTop: '20px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                }}
              >
                <div style={{ display: 'flex', gap: '28px' }}>
                  <div>
                    <div style={{ fontSize: '24px', fontWeight: 800, color: '#C8F169', lineHeight: 1 }}>
                      {activeSector.keyMetric.value}
                    </div>
                    <div style={{ fontSize: '10px', fontWeight: 700, color: '#9B9B9B', marginTop: '4px', textTransform: 'uppercase' }}>
                      {activeSector.keyMetric.label}
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '24px', fontWeight: 800, color: '#899DFF', lineHeight: 1 }}>
                      {activeSector.secondaryMetric.value}
                    </div>
                    <div style={{ fontSize: '10px', fontWeight: 700, color: '#9B9B9B', marginTop: '4px', textTransform: 'uppercase' }}>
                      {activeSector.secondaryMetric.label}
                    </div>
                  </div>
                </div>

                <Link to="/industries" className="btn btn-primary" style={{ padding: '12px 24px', fontSize: '12px' }}>
                  <span>EXPLORE SECTOR</span>
                  <span className="arrow-glyph">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInSector {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @media (max-width: 900px) {
          .industry-command-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
