import React from 'react';

export default function BrutalistPhilosophy() {
  const pillars = [
    {
      code: "01 // FORM",
      title: "Board-Formed Monolithic Concrete",
      desc: "Imprinting rough-sawn Douglas fir and Scandinavian pine grain textures directly into self-consolidating fair-faced concrete mixes for indelible tactile permanence.",
      metric: "0.2mm Aggregate Reveal",
      color: "var(--accent-orange)"
    },
    {
      code: "02 // STRENGTH",
      title: "Post-Tensioned Cantilever Frames",
      desc: "Utilizing high-tensile steel tendon matrices to liberate building masses, creating dramatic 24-meter hovering volumes without intermediate column interference.",
      metric: "1860 MPa Steel Tendons",
      color: "var(--accent-cyan)"
    },
    {
      code: "03 // DURATION",
      title: "150-Year Structural Longevity",
      desc: "Micro-silica dense crystalline formulations that self-heal micro-fissures and resist aggressive coastal salt aerosol and extreme sub-zero thermal cycling.",
      metric: "150+ Year Lifecycle",
      color: "var(--accent-amber)"
    },
    {
      code: "04 // SUSTAINABILITY",
      title: "Pozzolanic Carbon Mineralization",
      desc: "Infusing direct-injected CO₂ and volcanic pozzolan into concrete batching plants to permanently sequester carbon into stable solid calcium carbonate minerals.",
      metric: "-85 kg CO₂ / m³",
      color: "#10b981"
    }
  ];

  return (
    <section id="philosophy" className="section-padding" style={{ background: 'var(--bg-main)', position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <span className="brutalist-badge">
            // ENGINEERING METHODOLOGY
          </span>
          <h2 className="section-title">
            BRUTALIST PURITY & HEAVY CIVIL RIGOR
          </h2>
          <p className="section-desc">
            We reject superficial facades and fleeting cladding. Chronos monolithic structures celebrate raw mass, honest material truth, and geometric precision built to endure centuries.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '28px'
        }}>
          {pillars.map((p, idx) => (
            <div key={idx} style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-strong)',
              padding: '32px 28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'all 0.3s ease',
              position: 'relative'
            }} onMouseEnter={e => {
              e.currentTarget.style.borderColor = p.color;
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-md)';
            }} onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border-strong)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              {/* Top Accent Line */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: p.color
              }} />

              <div>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  color: p.color,
                  letterSpacing: '0.12em',
                  marginBottom: '16px'
                }}>
                  {p.code}
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  marginBottom: '14px',
                  lineHeight: 1.25
                }}>
                  {p.title}
                </h3>

                <p style={{
                  fontSize: '0.94rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  marginBottom: '24px'
                }}>
                  {p.desc}
                </p>
              </div>

              <div style={{
                paddingTop: '16px',
                borderTop: '1px solid var(--border-subtle)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: 'var(--text-main)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <span style={{ color: 'var(--text-dim)' }}>BENCHMARK:</span>
                <span>{p.metric}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
