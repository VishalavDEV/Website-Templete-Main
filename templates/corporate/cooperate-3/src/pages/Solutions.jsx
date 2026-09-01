import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import AISection from '../components/AISection';
import CTA from '../components/CTA';

export default function Solutions() {
  const solutionsList = [
    {
      code: 'SOL-01',
      title: 'ENTERPRISE OPERATING MODEL REDESIGN',
      tagline: 'Deconstructing bureaucratic matrix organizations into agile, high-velocity value streams.',
      capabilities: ['Decentralized Domain Ownership', 'Value-Stream OKR Governance', 'Automated C-Suite Telemetry'],
      impact: '3.8x faster product cycle time'
    },
    {
      code: 'SOL-02',
      title: 'SOVEREIGN ENTERPRISE AI ARCHITECTURE',
      tagline: 'Private, air-gapped foundation model pipelines tuned on proprietary corporate data lakes.',
      capabilities: ['Domain-Tuned RAG Pipelines', 'Deterministic Compliance Gateways', 'Zero-Egress Data Mesh'],
      impact: '85% compression in decision latency'
    },
    {
      code: 'SOL-03',
      title: 'AUTONOMOUS SUPPLY NETWORK CONTROL',
      tagline: 'Sensorized IoT telemetry and real-time digital twin routing across multi-tier global supply chains.',
      capabilities: ['Predictive Buffer Allocation', 'Continuous Vendor Health Sensing', 'Automated Logistics Redirection'],
      impact: '-45% reduction in supply latency'
    },
    {
      code: 'SOL-04',
      title: 'CLEAN CAPITAL & DECARBONIZATION ENGINE',
      tagline: 'Milestone-governed capital reallocation frameworks aligning ESG commitments with bottom-line EBITDA expansion.',
      capabilities: ['Real-Time Carbon Accounting Mesh', 'Renewable Generation Dispatch AI', 'Clean Asset CapEx Verification'],
      impact: '$420M in freed working capital'
    }
  ];

  return (
    <main>
      <PageHeader
        badge="ENTERPRISE SOLUTIONS"
        title="SYSTEMIC SOLUTIONS FOR"
        highlight="MODERN SCALE."
        description="Pre-architected transformation frameworks and enterprise-grade intelligence blueprints engineered for immediate deployment."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Solutions' }
        ]}
      />

      {/* Solutions Grid */}
      <section
        style={{
          padding: '120px 0',
          backgroundColor: '#191919',
          borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
        }}
      >
        <div className="container">
          <div style={{ marginBottom: '64px' }}>
            <div className="section-label">SYSTEMIC BLUEPRINTS</div>
            <h2 className="section-title" style={{ color: '#FFFFFF' }}>
              TRANSFORMATION BLUEPRINTS
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
            }}
          >
            {solutionsList.map((sol) => (
              <div
                key={sol.code}
                style={{
                  backgroundColor: '#111111',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  padding: '40px',
                  borderRadius: '4px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '24px',
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: '12px',
                      fontWeight: 800,
                      color: '#C8F169',
                      letterSpacing: '0.12em',
                      marginBottom: '16px',
                    }}
                  >
                    {sol.code}
                  </div>

                  <h3
                    style={{
                      fontSize: '22px',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      lineHeight: 1.3,
                      marginBottom: '12px',
                    }}
                  >
                    {sol.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '15px',
                      color: '#9B9B9B',
                      lineHeight: 1.6,
                      marginBottom: '24px',
                    }}
                  >
                    {sol.tagline}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {sol.capabilities.map((cap, i) => (
                      <div
                        key={i}
                        style={{
                          fontSize: '13px',
                          color: '#F4F4F4',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                        }}
                      >
                        <span style={{ color: '#C8F169' }}>■</span>
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    paddingTop: '20px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#C8F169' }}>
                    {sol.impact}
                  </div>
                  <Link to="/contact" className="btn-link" style={{ fontSize: '12px' }}>
                    <span>Inquire</span>
                    <span className="arrow-glyph">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded AI Intelligence Architecture */}
      <AISection />

      {/* Call to action */}
      <CTA />
    </main>
  );
}
