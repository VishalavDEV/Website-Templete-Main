import React, { useState } from 'react';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'UNDERSTAND',
      subtitle: 'Diagnostic & Quantitative Baseline',
      desc: 'We perform deep forensic audits of existing technology architectures, unit economics, supply dependencies, and operational latency to uncover latent value vectors.',
      deliverables: ['Enterprise Telemetry Audit', 'Latency & Friction Mapping', 'Value Realization Blueprint'],
    },
    {
      num: '02',
      title: 'DESIGN',
      subtitle: 'Target State & Operating Topology',
      desc: 'Co-authoring the future-proof organizational, algorithmic, and technological topology. Establishing measurable milestone gates and executive governance models.',
      deliverables: ['Target Operating Blueprint', 'Sovereign AI Architecture', 'Executive Alignment Charter'],
    },
    {
      num: '03',
      title: 'BUILD',
      subtitle: 'High-Velocity Systems Engineering',
      desc: 'Deploying integrated engineering pods alongside client teams. Deconstructing monolithic bottlenecks into modular, high-throughput production systems.',
      deliverables: ['Microservices Production Core', 'Data Mesh Pipeline', 'Automated Compliance Gateways'],
    },
    {
      num: '04',
      title: 'SCALE',
      subtitle: 'Global Autonomous Expansion',
      desc: 'Institutionalizing transformation through organizational enablement, executive training, and real-time observability dashboards for compounding returns.',
      deliverables: ['Global Rollout Playbook', 'Continuous Observability Control', 'Autonomous Decision Engine'],
    },
  ];

  return (
    <section
      id="approach"
      style={{
        padding: '90px 0',
        backgroundColor: '#191919',
        borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '48px' }}>
          <div className="section-label">TRANSFORMATION RIGOR</div>
          <h2 className="section-title" style={{ color: '#FFFFFF' }}>
            METHODOLOGY PROGRESS MATRIX
          </h2>
        </div>

        {/* 2-Column Command Progress Interface */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '320px 1fr',
            gap: '40px',
            alignItems: 'stretch',
          }}
          className="process-matrix-grid"
        >
          {/* Left Side: Numbered Selector Rails */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {steps.map((step, idx) => {
              const isSelected = activeStep === idx;

              return (
                <button
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  style={{
                    backgroundColor: isSelected ? '#111111' : '#161616',
                    border: isSelected ? '1px solid #C8F169' : '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '2px',
                    padding: '18px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span
                      style={{
                        fontSize: '15px',
                        fontWeight: 800,
                        color: isSelected ? '#C8F169' : '#666666',
                      }}
                    >
                      {step.num}
                    </span>
                    <span
                      style={{
                        fontSize: '17px',
                        fontWeight: 800,
                        color: isSelected ? '#FFFFFF' : 'rgba(255, 255, 255, 0.55)',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {step.title}
                    </span>
                  </div>

                  <span style={{ color: isSelected ? '#C8F169' : 'transparent', fontSize: '15px' }}>
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Side: Action Canvas */}
          <div
            key={steps[activeStep].num}
            style={{
              backgroundColor: '#111111',
              border: '1px solid rgba(255, 255, 255, 0.14)',
              borderRadius: '4px',
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              animation: 'fadeInPanel 0.3s ease',
            }}
          >
            <div>
              <div style={{ fontSize: '11px', fontWeight: 800, color: '#C8F169', letterSpacing: '0.1em', marginBottom: '12px' }}>
                PHASE {steps[activeStep].num} // {steps[activeStep].subtitle.toUpperCase()}
              </div>

              <h3 style={{ fontSize: 'clamp(24px, 2.6vw, 34px)', fontWeight: 800, color: '#FFFFFF', marginBottom: '16px' }}>
                {steps[activeStep].title}
              </h3>

              <p style={{ fontSize: '15px', color: '#9B9B9B', lineHeight: 1.65, marginBottom: '24px' }}>
                {steps[activeStep].desc}
              </p>
            </div>

            <div>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
                EXECUTIVE DELIVERABLES
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px' }}>
                {steps[activeStep].deliverables.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      padding: '10px 14px',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      fontSize: '12px',
                      fontWeight: 600,
                      color: '#F4F4F4',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <span style={{ color: '#C8F169' }}>■</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .process-matrix-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
