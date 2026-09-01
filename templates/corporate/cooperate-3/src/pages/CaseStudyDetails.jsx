import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { caseStudiesData } from '../data/caseStudies';
import ContactForm from '../components/ContactForm';

export default function CaseStudyDetails() {
  const { id } = useParams();
  const study = caseStudiesData.find((c) => c.id === id);

  if (!study) {
    return <Navigate to="/case-studies" replace />;
  }

  return (
    <main>
      <PageHeader
        badge={`CASE DOSSIER 0${study.number} // ${study.industry}`}
        title={study.title}
        description={study.headline}
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Work', path: '/case-studies' },
          { label: study.title }
        ]}
      />

      {/* Hero Overview & Key Metrics */}
      <section
        style={{
          padding: '100px 0',
          backgroundColor: '#191919',
          borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
        }}
      >
        <div className="container">
          {/* Large Hero Image */}
          <div
            style={{
              height: '460px',
              borderRadius: '4px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.14)',
              marginBottom: '60px',
              position: 'relative',
            }}
          >
            <img
              src={study.image}
              alt={study.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'grayscale(50%) contrast(115%) brightness(85%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '24px',
                left: '24px',
                backgroundColor: 'rgba(17, 17, 17, 0.9)',
                backdropFilter: 'blur(10px)',
                padding: '12px 20px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                fontSize: '13px',
                fontWeight: 700,
                color: '#C8F169',
              }}
            >
              CLIENT: {study.client.toUpperCase()} // {study.region.toUpperCase()}
            </div>
          </div>

          {/* Results Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '24px',
              padding: '40px',
              backgroundColor: '#111111',
              border: '1px solid rgba(255, 255, 255, 0.14)',
              borderRadius: '4px',
            }}
          >
            {study.results.map((res, idx) => (
              <div key={idx}>
                <div
                  style={{
                    fontSize: 'clamp(36px, 4vw, 52px)',
                    fontWeight: 800,
                    color: idx === 0 ? '#C8F169' : '#FFFFFF',
                    lineHeight: 1,
                    letterSpacing: '-0.03em',
                    marginBottom: '8px',
                  }}
                >
                  {res.metric}
                </div>
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: '#9B9B9B',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  {res.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Forensic Deep Dive: Challenge & Solution */}
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
              gridTemplateColumns: '1.4fr 1fr',
              gap: '80px',
              alignItems: 'flex-start',
            }}
            className="case-study-details-grid"
          >
            {/* Left: Narrative Breakdown */}
            <div>
              {/* Challenge */}
              <div style={{ marginBottom: '60px' }}>
                <div className="section-label">THE COMPLEXITY / THE CHALLENGE</div>
                <h3
                  style={{
                    fontSize: '28px',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    marginBottom: '20px',
                  }}
                >
                  Structural Bottlenecks & Operational Latency
                </h3>
                <p
                  style={{
                    fontSize: '17px',
                    color: '#9B9B9B',
                    lineHeight: 1.7,
                  }}
                >
                  {study.challenge}
                </p>
              </div>

              {/* Solution */}
              <div style={{ marginBottom: '60px' }}>
                <div className="section-label">THE VANTAGE INTERVENTION</div>
                <h3
                  style={{
                    fontSize: '28px',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    marginBottom: '20px',
                  }}
                >
                  Engineered Solution Architecture
                </h3>
                <p
                  style={{
                    fontSize: '17px',
                    color: '#9B9B9B',
                    lineHeight: 1.7,
                  }}
                >
                  {study.solution}
                </p>
              </div>

              {/* Executive Testimonial Quote */}
              {study.quote && (
                <div
                  style={{
                    padding: '40px',
                    backgroundColor: '#191919',
                    borderLeft: '4px solid #C8F169',
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRight: '1px solid rgba(255, 255, 255, 0.1)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '2px',
                  }}
                >
                  <p
                    style={{
                      fontSize: '20px',
                      fontStyle: 'italic',
                      fontWeight: 500,
                      color: '#FFFFFF',
                      lineHeight: 1.6,
                      marginBottom: '20px',
                    }}
                  >
                    "{study.quote.text}"
                  </p>
                  <div style={{ fontSize: '15px', fontWeight: 800, color: '#C8F169' }}>
                    {study.quote.author}
                  </div>
                  <div style={{ fontSize: '13px', color: '#9B9B9B' }}>
                    {study.quote.role}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Technical Metadata & Engagement Scope */}
            <div
              style={{
                backgroundColor: '#191919',
                border: '1px solid rgba(255, 255, 255, 0.14)',
                borderRadius: '4px',
                padding: '40px',
                position: 'sticky',
                top: '100px',
              }}
            >
              <div style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '0.1em', color: '#C8F169', textTransform: 'uppercase', marginBottom: '20px' }}>
                ENGAGEMENT TELEMETRY
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
                <div>
                  <div style={{ fontSize: '11px', color: '#9B9B9B', textTransform: 'uppercase' }}>DURATION</div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF', marginTop: '4px' }}>{study.timeline}</div>
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: '#9B9B9B', textTransform: 'uppercase' }}>GEOGRAPHY</div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF', marginTop: '4px' }}>{study.region}</div>
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: '#9B9B9B', textTransform: 'uppercase' }}>SECTOR</div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF', marginTop: '4px' }}>{study.industry}</div>
                </div>
              </div>

              <div style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '0.1em', color: '#FFFFFF', textTransform: 'uppercase', marginBottom: '16px' }}>
                DEPLOYED TECHNOLOGIES
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '36px' }}>
                {study.technologies.map((tech, i) => (
                  <span key={i} className="badge-outline">
                    {tech}
                  </span>
                ))}
              </div>

              <Link to="/contact" className="btn btn-primary" style={{ width: '100%', padding: '16px 0' }}>
                <span>DISCUSS SIMILAR ENGAGEMENT</span>
                <span className="arrow-glyph">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />

      <style>{`
        @media (max-width: 860px) {
          .case-study-details-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
