import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { servicesData } from '../data/services';
import ContactForm from '../components/ContactForm';

export default function ServiceDetails() {
  const { id } = useParams();
  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <main>
      <PageHeader
        badge={`PRACTICE ${service.number} // ${service.shortTitle.toUpperCase()}`}
        title={service.title}
        highlight="PRACTICE."
        description={service.tagline}
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Capabilities', path: '/services' },
          { label: service.title }
        ]}
      />

      {/* Main Capability Deep Dive Section */}
      <section
        style={{
          padding: '120px 0',
          backgroundColor: '#191919',
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
              marginBottom: '80px',
            }}
            className="service-overview-grid"
          >
            <div>
              <div className="section-label">STRATEGIC SCOPE</div>
              <h2
                style={{
                  fontSize: 'clamp(28px, 3.5vw, 44px)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 1.2,
                  marginBottom: '24px',
                }}
              >
                Turning Volatility Into Structural Advantage
              </h2>
              <p
                style={{
                  fontSize: '18px',
                  color: '#F4F4F4',
                  lineHeight: 1.7,
                  marginBottom: '20px',
                }}
              >
                {service.description}
              </p>
              <p
                style={{
                  fontSize: '16px',
                  color: '#9B9B9B',
                  lineHeight: 1.7,
                }}
              >
                Our partners work directly alongside executive sponsors to design sovereign architectures, run probabilistic stress-tests, and ensure seamless change adoption across global business units.
              </p>
            </div>

            {/* Visual Image */}
            <div
              style={{
                height: '380px',
                borderRadius: '2px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.14)',
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(60%) contrast(120%) brightness(85%)',
                }}
              />
            </div>
          </div>

          {/* Quantifiable Impact Metrics */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '24px',
              padding: '40px',
              backgroundColor: '#111111',
              border: '1px solid rgba(255, 255, 255, 0.14)',
              borderRadius: '4px',
            }}
          >
            {service.metrics.map((m, idx) => (
              <div key={idx}>
                <div
                  style={{
                    fontSize: 'clamp(36px, 4.5vw, 56px)',
                    fontWeight: 800,
                    color: idx === 0 ? '#C8F169' : '#FFFFFF',
                    lineHeight: 1,
                    letterSpacing: '-0.03em',
                    marginBottom: '8px',
                  }}
                >
                  {m.value}
                </div>
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: '#9B9B9B',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings & Tactical Deliverables */}
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
            className="service-offerings-grid"
          >
            {/* Left: Core Solution Vectors */}
            <div>
              <div className="section-label">SPECIALIZED SOLUTION PILLARS</div>
              <h3
                style={{
                  fontSize: '32px',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  marginBottom: '40px',
                }}
              >
                ENGINEERED PRACTICE OFFERINGS
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {service.offerings.map((offering, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '32px',
                      backgroundColor: '#191919',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '2px',
                    }}
                  >
                    <div style={{ fontSize: '12px', fontWeight: 800, color: '#C8F169', marginBottom: '8px' }}>
                      PILLAR 0{idx + 1}
                    </div>
                    <h4 style={{ fontSize: '20px', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>
                      {offering.title}
                    </h4>
                    <p style={{ fontSize: '15px', color: '#9B9B9B', lineHeight: 1.6 }}>
                      {offering.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Concrete Deliverables Box */}
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
              <div style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '0.1em', color: '#C8F169', textTransform: 'uppercase', marginBottom: '16px' }}>
                KEY DELIVERABLES
              </div>

              <h4 style={{ fontSize: '24px', fontWeight: 800, color: '#FFFFFF', marginBottom: '24px' }}>
                EXECUTIVE ARTIFACTS & BLUEPRINTS
              </h4>

              <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '36px' }}>
                {service.deliverables.map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      fontSize: '15px',
                      color: '#F4F4F4',
                      paddingBottom: '16px',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    <span style={{ color: '#C8F169', fontWeight: 800 }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="btn btn-primary"
                style={{ width: '100%', padding: '16px 0' }}
              >
                <span>REQUEST PRACTICE BRIEFING</span>
                <span className="arrow-glyph">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form for practice inquiry */}
      <ContactForm />

      <style>{`
        @media (max-width: 860px) {
          .service-overview-grid,
          .service-offerings-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
