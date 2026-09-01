import React from 'react';
import PageHeader from '../components/PageHeader';
import Metrics from '../components/Metrics';
import Team from '../components/Team';
import CTA from '../components/CTA';

export default function About() {
  const principles = [
    {
      num: '01',
      title: 'ZERO THEORETICAL FLUFF',
      desc: 'We do not sell 400-page slide decks destined to gather dust. Every strategic recommendation is backed by working code, mathematical simulation, and operational execution pods.'
    },
    {
      num: '02',
      title: 'ALGORITHMIC & DATA RIGOR',
      desc: 'Intuition is insufficient in volatile markets. We replace executive conjecture with real-time continuous telemetry, probabilistic scenario modeling, and predictive analytics.'
    },
    {
      num: '03',
      title: 'MUTUAL SKIN IN THE GAME',
      desc: 'Our fee structures are tied directly to audited client value realization milestones, EBITDA expansion, and capital efficiency gains.'
    },
    {
      num: '04',
      title: 'SOVEREIGN INTELLECTUAL PROPERTY',
      desc: 'All models, data pipelines, and operating playbooks engineered during our engagements belong 100% to our clients without proprietary lock-in.'
    }
  ];

  return (
    <main>
      <PageHeader
        badge="COMPANY OVERVIEW"
        title="BUILT FOR DECISIVE"
        highlight="LEADERSHIP."
        description="VANTAGE is a global corporate consulting and transformation firm helping multinational enterprises navigate structural volatility, deploy machine intelligence, and compound market advantage."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Company' }
        ]}
      />

      {/* Origin & Story Section */}
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
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '80px',
              alignItems: 'center',
            }}
          >
            <div>
              <div className="section-label">ORIGIN & PHILOSOPHY</div>
              <h2
                className="section-title"
                style={{ color: '#FFFFFF', marginBottom: '28px' }}
              >
                EIGHTEEN YEARS OF STRATEGIC DOMINANCE
              </h2>
              <p
                style={{
                  fontSize: '18px',
                  color: '#F4F4F4',
                  lineHeight: 1.6,
                  marginBottom: '20px',
                }}
              >
                Founded in 2008 in London and New York, VANTAGE was built by senior operators and systems theorists who believed traditional management consulting had lost touch with execution reality.
              </p>
              <p
                style={{
                  fontSize: '16px',
                  color: '#9B9B9B',
                  lineHeight: 1.7,
                }}
              >
                Today, our multidisciplinary teams of strategic advisors, machine learning engineers, and operational architects operate across 18 major financial and industrial markets worldwide, stewarding over $3.8 billion in generated client enterprise value.
              </p>
            </div>

            <div
              style={{
                height: '440px',
                borderRadius: '2px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.14)',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                alt="Vantage Headquarters"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(100%) contrast(120%) brightness(85%)',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Operating Principles Grid */}
      <section
        style={{
          padding: '120px 0',
          backgroundColor: '#111111',
          borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
        }}
      >
        <div className="container">
          <div style={{ marginBottom: '64px' }}>
            <div className="section-label">OPERATING PRINCIPLES</div>
            <h2 className="section-title" style={{ color: '#FFFFFF' }}>
              HOW WE OPERATE & DELIVER
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '40px',
            }}
          >
            {principles.map((item) => (
              <div
                key={item.num}
                style={{
                  padding: '36px',
                  backgroundColor: '#191919',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '2px',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    fontSize: '18px',
                    fontWeight: 800,
                    color: '#C8F169',
                    marginBottom: '16px',
                  }}
                >
                  {item.num}
                </div>
                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    marginBottom: '12px',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: '15px',
                    color: '#9B9B9B',
                    lineHeight: 1.6,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Impact Metrics */}
      <Metrics />

      {/* Leadership Team Showcase */}
      <Team limit={6} showHeader={true} />

      {/* Call to action */}
      <CTA />
    </main>
  );
}
