import React, { useState } from 'react';

export default function AISection() {
  const [activeNode, setActiveNode] = useState('DATA');

  const nodes = {
    DATA: {
      code: 'STAGE 01',
      title: 'DATA',
      subtitle: 'Unified Enterprise Ingestion',
      desc: 'Architecting domain-specific data meshes and sovereign pipelines that sanitize, vectorize, and structure legacy operational telemetry.',
      metric: '99.98% Data Lineage Precision',
    },
    MODELS: {
      code: 'STAGE 02',
      title: 'MODELS',
      subtitle: 'Air-Gapped Domain Models',
      desc: 'Training and fine-tuning private, sovereign foundation models and neural forecasting networks on internal transactional intelligence.',
      metric: 'Zero IP Data Egress Risk',
    },
    DECISIONS: {
      code: 'STAGE 03',
      title: 'DECISIONS',
      subtitle: 'Autonomous Synthesis & Routing',
      desc: 'Embedding agentic verification loops and decision engines directly into ERPs, trading desks, and supply chain control towers.',
      metric: '42ms Decision Calculation',
    },
    IMPACT: {
      code: 'STAGE 04',
      title: 'IMPACT',
      subtitle: 'Compounding Operational ROI',
      desc: 'Translating computational intelligence into sustained margin expansion, eliminated operational waste, and resilient market moats.',
      metric: '+34% Net Operational Margin',
    },
  };

  const currentNode = nodes[activeNode];

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
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '36px',
            alignItems: 'flex-start',
            marginBottom: '48px',
          }}
          className="ai-header-grid"
        >
          <div>
            <div className="section-label">ENTERPRISE ARTIFICIAL INTELLIGENCE</div>
            <h2 className="section-title" style={{ color: '#FFFFFF', lineHeight: 1 }}>
              INTELLIGENCE<br />
              <span className="accent-text">AT SCALE.</span>
            </h2>
          </div>

          <div>
            <p
              style={{
                fontSize: '17px',
                fontWeight: 500,
                color: '#F4F4F4',
                lineHeight: 1.5,
                marginBottom: '12px',
              }}
            >
              Turn data, automation, and artificial intelligence into measurable business outcomes.
            </p>
            <p
              style={{
                fontSize: '14px',
                color: '#9B9B9B',
                lineHeight: 1.6,
              }}
            >
              We move enterprise AI from disconnected experimental sandboxes directly into mission-critical operating infrastructure. Sovereign, audited, and mathematically optimized for strategic resilience.
            </p>
          </div>
        </div>

        {/* CONNECTED 2x2 NETWORK MESH VISUAL */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '36px',
            alignItems: 'center',
          }}
          className="ai-network-layout"
        >
          {/* Left: 2x2 Connected Grid Matrix */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
              position: 'relative',
              padding: '20px',
              backgroundColor: '#161616',
              border: '1px solid rgba(255, 255, 255, 0.14)',
              borderRadius: '4px',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '15%',
                right: '15%',
                height: '1px',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                zIndex: 1,
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: '15%',
                bottom: '15%',
                width: '1px',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                zIndex: 1,
              }}
            />

            {['DATA', 'MODELS', 'DECISIONS', 'IMPACT'].map((key) => {
              const item = nodes[key];
              const isSelected = activeNode === key;

              return (
                <div
                  key={key}
                  onClick={() => setActiveNode(key)}
                  style={{
                    backgroundColor: isSelected ? '#111111' : '#191919',
                    border: isSelected ? '1px solid #C8F169' : '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '2px',
                    padding: '20px 16px',
                    cursor: 'pointer',
                    position: 'relative',
                    zIndex: 2,
                    transition: 'all 0.25s ease',
                  }}
                >
                  <div
                    style={{
                      fontSize: '10px',
                      fontWeight: 800,
                      color: isSelected ? '#C8F169' : '#666666',
                      letterSpacing: '0.12em',
                      marginBottom: '4px',
                    }}
                  >
                    {item.code}
                  </div>
                  <div
                    style={{
                      fontSize: '18px',
                      fontWeight: 800,
                      color: isSelected ? '#FFFFFF' : 'rgba(255, 255, 255, 0.6)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {item.title}
                  </div>
                  <div style={{ fontSize: '11px', color: '#9B9B9B', marginTop: '2px' }}>
                    {item.subtitle}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Dynamic Node Inspection Panel */}
          <div
            key={activeNode}
            style={{
              backgroundColor: '#191919',
              border: '1px solid rgba(255, 255, 255, 0.14)',
              borderRadius: '4px',
              padding: '36px',
              animation: 'fadeInPanel 0.3s ease',
            }}
          >
            <div style={{ fontSize: '11px', fontWeight: 800, color: '#C8F169', letterSpacing: '0.12em', marginBottom: '12px' }}>
              {currentNode.code} // ACTIVE TELEMETRY
            </div>

            <h3 style={{ fontSize: '26px', fontWeight: 800, color: '#FFFFFF', marginBottom: '6px' }}>
              {currentNode.title}
            </h3>

            <div style={{ fontSize: '14px', fontWeight: 600, color: '#899DFF', marginBottom: '16px' }}>
              {currentNode.subtitle}
            </div>

            <p style={{ fontSize: '15px', color: '#9B9B9B', lineHeight: 1.6, marginBottom: '24px' }}>
              {currentNode.desc}
            </p>

            <div
              style={{
                padding: '16px 20px',
                backgroundColor: '#111111',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ fontSize: '11px', color: '#9B9B9B', textTransform: 'uppercase' }}>
                VERIFIED BENCHMARK
              </div>
              <div style={{ fontSize: '15px', fontWeight: 800, color: '#C8F169' }}>
                {currentNode.metric}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .ai-header-grid,
          .ai-network-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
