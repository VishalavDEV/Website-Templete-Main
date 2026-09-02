import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import CTA from '../components/CTA';

export default function Careers() {
  const [selectedRole, setSelectedRole] = useState(null);

  const openings = [
    {
      id: 'engagement-director-ai',
      title: 'ENGAGEMENT DIRECTOR — ENTERPRISE AI SYSTEMS',
      location: 'New York / San Francisco',
      type: 'Full-Time Equity Partner Track',
      department: 'Digital & AI Practice',
      desc: 'Lead multi-million dollar sovereign AI deployment engagements for Fortune 100 industrial and financial enterprises. Oversee machine learning engineering pods and C-suite alignment.'
    },
    {
      id: 'principal-operations-resilience',
      title: 'PRINCIPAL — SUPPLY NETWORK RESILIENCE',
      location: 'Zurich / London',
      type: 'Full-Time Senior Advisory',
      department: 'Operations Practice',
      desc: 'Architect digital twin telemetry control towers and predictive inventory buffer networks for multinational manufacturing and energy conglomerates.'
    },
    {
      id: 'lead-quant-risk',
      title: 'LEAD SYSTEMS ARCHITECT — QUANTITATIVE RISK',
      location: 'London / Singapore',
      type: 'Full-Time Practice Specialist',
      department: 'Financial Services',
      desc: 'Design sub-second intraday risk calculation kernels and automated regulatory telemetry engines for global investment banks.'
    },
    {
      id: 'strategy-associate-mna',
      title: 'STRATEGY ASSOCIATE — M&A VALUE REALIZATION',
      location: 'New York / Boston',
      type: 'Full-Time Associate',
      department: 'Corporate Strategy',
      desc: 'Model post-merger synergies, evaluate target tech stacks during due diligence, and author executive board investment dossiers.'
    }
  ];

  return (
    <main>
      <PageHeader
        badge="TALENT & FELLOWSHIP"
        title="YOUR NEXT MOVE"
        highlight="STARTS HERE."
        description="Join a multidisciplinary partnership of elite strategists, computational engineers, and systems architects solving the most complex enterprise challenges on earth."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Company', path: '/about' },
          { label: 'Careers' }
        ]}
      />

      {/* Cultural Pillars */}
      <section
        style={{
          padding: '120px 0',
          backgroundColor: '#191919',
          borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
        }}
      >
        <div className="container">
          <div style={{ marginBottom: '64px' }}>
            <div className="section-label">THE VANTAGE STANDARD</div>
            <h2 className="section-title" style={{ color: '#FFFFFF' }}>
              BUILT FOR EXTRAORDINARY OPERATORS
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '40px',
            }}
          >
            <div
              style={{
                padding: '36px',
                backgroundColor: '#111111',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '2px',
              }}
            >
              <div style={{ fontSize: '18px', fontWeight: 800, color: '#C8F169', marginBottom: '16px' }}>01</div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#FFFFFF', marginBottom: '12px' }}>
                DIRECT BOARD-LEVEL IMPACT
              </h3>
              <p style={{ fontSize: '15px', color: '#9B9B9B', lineHeight: 1.6 }}>
                You will not sit in backrooms building decks for junior managers. From day one, you sit at the table with Fortune 500 CEOs and chairpersons.
              </p>
            </div>

            <div
              style={{
                padding: '36px',
                backgroundColor: '#111111',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '2px',
              }}
            >
              <div style={{ fontSize: '18px', fontWeight: 800, color: '#899DFF', marginBottom: '16px' }}>02</div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#FFFFFF', marginBottom: '12px' }}>
                FRONTIER COMPUTATIONAL LABS
              </h3>
              <p style={{ fontSize: '15px', color: '#9B9B9B', lineHeight: 1.6 }}>
                Access our private high-performance compute clusters and proprietary algorithmic libraries to prototype solution kernels in hours.
              </p>
            </div>

            <div
              style={{
                padding: '36px',
                backgroundColor: '#111111',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '2px',
              }}
            >
              <div style={{ fontSize: '18px', fontWeight: 800, color: '#C8F169', marginBottom: '16px' }}>03</div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#FFFFFF', marginBottom: '12px' }}>
                PERFORMANCE VALUE SHARING
              </h3>
              <p style={{ fontSize: '15px', color: '#9B9B9B', lineHeight: 1.6 }}>
                Compensation is tied to the measurable billions we unlock for clients, providing uncapped upside and equity partner acceleration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions List */}
      <section
        style={{
          padding: '120px 0',
          backgroundColor: '#111111',
          borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
        }}
      >
        <div className="container">
          <div style={{ marginBottom: '64px' }}>
            <div className="section-label">GLOBAL VACANCIES</div>
            <h2 className="section-title" style={{ color: '#FFFFFF' }}>
              OPEN STRATEGIC & ENGINEERING POSITIONS
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {openings.map((job) => (
              <div
                key={job.id}
                style={{
                  backgroundColor: '#191919',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '4px',
                  padding: '36px',
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  gap: '24px',
                  alignItems: 'center',
                }}
                className="career-row"
              >
                <div>
                  <div style={{ display: 'flex', gap: '16px', fontSize: '12px', fontWeight: 700, color: '#C8F169', letterSpacing: '0.08em', marginBottom: '10px' }}>
                    <span>{job.department.toUpperCase()}</span>
                    <span>•</span>
                    <span style={{ color: '#9B9B9B' }}>{job.location}</span>
                  </div>

                  <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px' }}>
                    {job.title}
                  </h3>

                  <p style={{ fontSize: '15px', color: '#9B9B9B', maxWidth: '800px', lineHeight: 1.5 }}>
                    {job.desc}
                  </p>
                </div>

                <div>
                  <a
                    href="mailto:careers@vantage.example"
                    className="btn btn-primary"
                    style={{ padding: '14px 28px', fontSize: '13px' }}
                  >
                    <span>Apply Now</span>
                    <span className="arrow-glyph">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .career-row {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      <CTA />
    </main>
  );
}
