import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import CapabilityList from '../components/CapabilityList';
import { servicesData } from '../data/services';
import CTA from '../components/CTA';

export default function Services() {
  const models = [
    {
      title: 'EMBEDDED EXECUTIVE ADVISORY',
      desc: 'Senior partners embed directly with the C-suite and board of directors to govern capital allocation, M&A transactions, and crisis strategy.',
      cadence: 'Retainer & Value-Share'
    },
    {
      title: 'CROSS-FUNCTIONAL ENGINEERING PODS',
      desc: 'Multidisciplinary squads of systems architects, AI engineers, and change directors deployed on-site to execute core digital transformations.',
      cadence: 'Sprint-Based Milestone Gates'
    },
    {
      title: 'RAPID TURNAROUND TASKFORCE',
      desc: 'Emergency operational intervention units that stabilize distressed business units, optimize working capital, and restore EBITDA margins within 90 days.',
      cadence: 'Contingent Value Creation'
    }
  ];

  return (
    <main>
      <PageHeader
        badge="CAPABILITIES & PRACTICES"
        title="TRANSFORMATION"
        highlight="AT SCALE."
        description="Comprehensive strategic, operational, and computational capabilities engineered for global corporations navigating rapid market disruption."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Capabilities' }
        ]}
      />

      {/* Interactive Capability Rows */}
      <CapabilityList />

      {/* Deep Dive Breakdown of Capabilities */}
      <section
        style={{
          padding: '120px 0',
          backgroundColor: '#191919',
          borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
        }}
      >
        <div className="container">
          <div style={{ marginBottom: '64px' }}>
            <div className="section-label">PRACTICE ARCHITECTURE</div>
            <h2 className="section-title" style={{ color: '#FFFFFF' }}>
              HOW WE SOLVE COMPLEX CHALLENGES
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {servicesData.map((svc) => (
              <div
                key={svc.id}
                style={{
                  backgroundColor: '#111111',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  padding: '48px',
                  borderRadius: '4px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                    gap: '20px',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                    paddingBottom: '24px',
                    marginBottom: '32px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <span style={{ fontSize: '20px', fontWeight: 800, color: '#C8F169' }}>
                      {svc.number}
                    </span>
                    <h3 style={{ fontSize: '32px', fontWeight: 800, color: '#FFFFFF' }}>
                      {svc.title}
                    </h3>
                  </div>

                  <Link
                    to={`/services/${svc.id}`}
                    className="btn btn-secondary"
                    style={{ padding: '10px 20px', fontSize: '12px' }}
                  >
                    <span>Practice Deep Dive</span>
                    <span className="arrow-glyph">→</span>
                  </Link>
                </div>

                <p style={{ fontSize: '18px', color: '#F4F4F4', marginBottom: '32px', maxWidth: '880px', lineHeight: 1.6 }}>
                  {svc.tagline}
                </p>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: '24px',
                  }}
                >
                  {svc.offerings.map((off, i) => (
                    <div
                      key={i}
                      style={{
                        padding: '24px',
                        backgroundColor: '#191919',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '2px',
                      }}
                    >
                      <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>
                        {off.title}
                      </h4>
                      <p style={{ fontSize: '14px', color: '#9B9B9B', lineHeight: 1.5 }}>
                        {off.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section
        style={{
          padding: '120px 0',
          backgroundColor: '#111111',
          borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
        }}
      >
        <div className="container">
          <div style={{ marginBottom: '64px' }}>
            <div className="section-label">ENGAGEMENT FRAMEWORKS</div>
            <h2 className="section-title" style={{ color: '#FFFFFF' }}>
              FLEXIBLE, OUTCOME-DRIVEN MODELS
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '40px',
            }}
          >
            {models.map((mod, idx) => (
              <div
                key={idx}
                style={{
                  padding: '40px',
                  backgroundColor: '#191919',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '2px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#C8F169', letterSpacing: '0.1em', marginBottom: '16px' }}>
                    FRAMEWORK 0{idx + 1}
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#FFFFFF', marginBottom: '16px' }}>
                    {mod.title}
                  </h3>
                  <p style={{ fontSize: '15px', color: '#9B9B9B', lineHeight: 1.6 }}>
                    {mod.desc}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: '32px',
                    paddingTop: '20px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#899DFF',
                  }}
                >
                  Model: {mod.cadence}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
