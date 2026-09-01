import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import CaseStudyExplorer from '../components/CaseStudyExplorer';
import { caseStudiesData } from '../data/caseStudies';
import CTA from '../components/CTA';

export default function CaseStudies() {
  const [filter, setFilter] = useState('ALL');

  const categories = ['ALL', 'MANUFACTURING', 'FINANCIAL SERVICES', 'HEALTHCARE', 'CONSUMER', 'TECHNOLOGY'];

  const filteredStudies =
    filter === 'ALL'
      ? caseStudiesData
      : caseStudiesData.filter((c) => c.industry.includes(filter));

  return (
    <main>
      <PageHeader
        badge="PROVEN IMPACT"
        title="CLIENT CASE"
        highlight="PORTFOLIO."
        description="Forensic case analyses detailing real-world enterprise transformations, ROI metrics, and technological architectures engineered by VANTAGE."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Work & Case Studies' }
        ]}
      />

      {/* Interactive Case Study Explorer Showcase */}
      <CaseStudyExplorer />

      {/* Complete Case Studies Portfolio Grid */}
      <section
        style={{
          padding: '120px 0',
          backgroundColor: '#111111',
          borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
        }}
      >
        <div className="container">
          {/* Header & Filter Controls */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
              marginBottom: '64px',
              paddingBottom: '24px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
            }}
          >
            <div>
              <div className="section-label">FULL CASE INDEX</div>
              <h2 className="section-title" style={{ color: '#FFFFFF' }}>
                ALL ENGAGEMENT DOSSIERS
              </h2>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  style={{
                    padding: '8px 16px',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    borderRadius: '2px',
                    backgroundColor: filter === cat ? '#C8F169' : 'transparent',
                    color: filter === cat ? '#111111' : '#9B9B9B',
                    border: filter === cat ? '1px solid #C8F169' : '1px solid rgba(255, 255, 255, 0.14)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Case Studies Rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {filteredStudies.map((study) => (
              <div
                key={study.id}
                style={{
                  backgroundColor: '#191919',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  borderRadius: '4px',
                  padding: '48px',
                  display: 'grid',
                  gridTemplateColumns: 'minmax(280px, 360px) 1fr',
                  gap: '48px',
                  alignItems: 'center',
                }}
                className="study-row-card"
              >
                {/* Image */}
                <div
                  style={{
                    height: '280px',
                    borderRadius: '2px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <img
                    src={study.image}
                    alt={study.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'grayscale(70%) contrast(120%) brightness(85%)',
                    }}
                  />
                </div>

                {/* Content */}
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      fontSize: '12px',
                      fontWeight: 700,
                      color: '#C8F169',
                      letterSpacing: '0.1em',
                      marginBottom: '12px',
                    }}
                  >
                    <span>{study.industry}</span>
                    <span>•</span>
                    <span style={{ color: '#9B9B9B' }}>{study.timeline}</span>
                  </div>

                  <Link to={`/case-studies/${study.id}`}>
                    <h3
                      style={{
                        fontSize: 'clamp(24px, 2.5vw, 32px)',
                        fontWeight: 800,
                        color: '#FFFFFF',
                        lineHeight: 1.2,
                        marginBottom: '12px',
                        transition: 'color 0.2s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#C8F169')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                    >
                      {study.title}
                    </h3>
                  </Link>

                  <p style={{ fontSize: '15px', color: '#9B9B9B', lineHeight: 1.6, marginBottom: '24px' }}>
                    {study.headline}
                  </p>

                  {/* Impact Results */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
                      gap: '16px',
                      paddingTop: '20px',
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                      marginBottom: '24px',
                    }}
                  >
                    {study.results.map((r, i) => (
                      <div key={i}>
                        <div style={{ fontSize: '22px', fontWeight: 800, color: i === 0 ? '#C8F169' : '#FFFFFF', lineHeight: 1 }}>
                          {r.metric}
                        </div>
                        <div style={{ fontSize: '11px', color: '#9B9B9B', marginTop: '4px', textTransform: 'uppercase' }}>
                          {r.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <Link to={`/case-studies/${study.id}`} className="btn btn-secondary" style={{ padding: '12px 24px', fontSize: '13px' }}>
                      <span>Read Complete Case Dossier</span>
                      <span className="arrow-glyph">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />

      <style>{`
        @media (max-width: 860px) {
          .study-row-card {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
