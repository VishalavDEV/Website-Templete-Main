import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { caseStudiesData } from '../data/caseStudies';

export default function CaseStudyExplorer() {
  const [activeIdx, setActiveIdx] = useState(0);
  const featuredCases = caseStudiesData.slice(0, 4);
  const currentCase = featuredCases[activeIdx];

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
            marginBottom: '48px',
          }}
        >
          <div>
            <div className="section-label">SELECTED CASE STUDIES</div>
            <h2 className="section-title" style={{ color: '#FFFFFF' }}>
              PROJECT TIMELINE DOSSIER
            </h2>
          </div>
          <Link to="/case-studies" className="btn btn-secondary">
            <span>All Case Studies</span>
            <span className="arrow-glyph">→</span>
          </Link>
        </div>

        {/* VERTICAL PROJECT TIMELINE & SPLIT COMMAND CANVAS */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '340px 1fr',
            gap: '48px',
            alignItems: 'flex-start',
          }}
          className="timeline-explorer-grid"
        >
          {/* LEFT: Continuous Vertical Stepper Spine */}
          <div
            style={{
              position: 'relative',
              paddingLeft: '32px',
              borderLeft: '2px solid rgba(255, 255, 255, 0.12)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: '-2px',
                top: `${(activeIdx / (featuredCases.length - 1)) * 75}%`,
                height: '25%',
                width: '2px',
                backgroundColor: '#C8F169',
                transition: 'all 0.35s ease',
              }}
            />

            {featuredCases.map((item, idx) => {
              const isActive = activeIdx === idx;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIdx(idx)}
                  style={{
                    padding: '24px 0',
                    cursor: 'pointer',
                    position: 'relative',
                    borderBottom: idx < featuredCases.length - 1 ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      left: '-38px',
                      top: '30px',
                      width: '12px',
                      height: '12px',
                      borderRadius: '2px',
                      backgroundColor: isActive ? '#C8F169' : '#191919',
                      border: isActive ? '1px solid #C8F169' : '1px solid rgba(255, 255, 255, 0.2)',
                      transition: 'all 0.25s ease',
                    }}
                  />

                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: 800,
                      color: isActive ? '#C8F169' : '#666666',
                      letterSpacing: '0.08em',
                      marginBottom: '2px',
                    }}
                  >
                    0{idx + 1} // {item.timeline.toUpperCase()}
                  </div>

                  <h3
                    style={{
                      fontSize: 'clamp(18px, 1.8vw, 22px)',
                      fontWeight: 800,
                      color: isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.45)',
                      textTransform: 'uppercase',
                      letterSpacing: '-0.01em',
                      lineHeight: 1.2,
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {item.industry}
                  </h3>

                  <div style={{ fontSize: '12px', color: '#9B9B9B', marginTop: '4px' }}>
                    {item.client}
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Dynamic Project Canvas */}
          <div
            key={currentCase.id}
            style={{
              backgroundColor: '#191919',
              border: '1px solid rgba(255, 255, 255, 0.14)',
              borderRadius: '4px',
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              animation: 'fadeInCase 0.3s ease',
            }}
          >
            <div
              style={{
                height: '260px',
                borderRadius: '2px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                position: 'relative',
              }}
            >
              <img
                src={currentCase.image}
                alt={currentCase.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(50%) contrast(120%) brightness(85%)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  backgroundColor: 'rgba(17, 17, 17, 0.9)',
                  padding: '4px 10px',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  fontSize: '10px',
                  fontWeight: 700,
                  color: '#C8F169',
                }}
              >
                {currentCase.region}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '11px', fontWeight: 800, color: '#C8F169', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                {currentCase.industry} // {currentCase.client}
              </div>

              <h4
                style={{
                  fontSize: 'clamp(22px, 2.4vw, 28px)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 1.2,
                  marginBottom: '12px',
                }}
              >
                {currentCase.title}
              </h4>

              <p style={{ fontSize: '15px', color: '#9B9B9B', lineHeight: 1.6, marginBottom: '20px' }}>
                {currentCase.description}
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
                  gap: '16px',
                  paddingTop: '20px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  marginBottom: '24px',
                }}
              >
                {currentCase.results.map((res, i) => (
                  <div key={i}>
                    <div style={{ fontSize: 'clamp(20px, 2.2vw, 26px)', fontWeight: 800, color: i === 0 ? '#C8F169' : '#FFFFFF', lineHeight: 1 }}>
                      {res.metric}
                    </div>
                    <div style={{ fontSize: '10px', fontWeight: 600, color: '#9B9B9B', marginTop: '4px', textTransform: 'uppercase' }}>
                      {res.label}
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to={`/case-studies/${currentCase.id}`}
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'space-between', padding: '14px 24px', fontSize: '13px' }}
              >
                <span>VIEW COMPLETE CASE DOSSIER</span>
                <span className="arrow-glyph">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInCase {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        @media (max-width: 900px) {
          .timeline-explorer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
