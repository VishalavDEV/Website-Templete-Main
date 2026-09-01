import React, { useState } from 'react';
import { Lightbulb, Target, Compass, Send } from 'lucide-react';

export default function Process() {
  const [hoveredStep, setHoveredStep] = useState(null);

  const steps = [
    {
      num: '01',
      title: 'Discover',
      short: 'Understand the landscape.',
      desc: 'Understand the problem, people, and opportunity. We run immersive workshops, interview target users, and study market structures to unearth the strategic opportunities.',
      icon: <Lightbulb size={24} />
    },
    {
      num: '02',
      title: 'Define',
      short: 'Determine the vector.',
      desc: 'Turn insights into a clear creative direction. We construct the strategic pillars, positioning systems, and voice parameters that act as our creative north star.',
      icon: <Target size={24} />
    },
    {
      num: '03',
      title: 'Design',
      short: 'Build the universe.',
      desc: 'Build systems, experiences, and ideas. We explore diverse brand directions, interactive mockups, and typographic systems, stress-testing them across multiple channels.',
      icon: <Compass size={24} />
    },
    {
      num: '04',
      title: 'Deliver',
      short: 'Deploy with precision.',
      desc: 'Launch something built to make an impact. We implement development bundles, orchestrate launch campaigns, and compile handoff kits for seamless production scaling.',
      icon: <Send size={24} />
    }
  ];

  return (
    <section 
      className="section-padding"
      style={{
        borderBottom: '1px solid var(--border-color)',
        position: 'relative',
        zIndex: 1,
        backgroundColor: '#F5F3EF'
      }}
    >
      <div className="container">
        
        {/* Header */}
        <div 
          style={{
            textAlign: 'left',
            marginBottom: '6rem',
            borderBottom: '1px solid var(--border-color)',
            paddingBottom: '2rem'
          }}
        >
          <span className="text-meta">Our Framework</span>
          <h2 className="text-editorial-h2" style={{ marginTop: '0.5rem' }}>
            Good work doesn't happen by accident<span style={{ color: 'var(--accent-color)' }}>.</span>
          </h2>
        </div>

        {/* Connected Journey Grid */}
        <div 
          style={{
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2.5rem'
          }}
          className="process-grid"
        >
          
          {/* Desktop SVG Connecting Line */}
          <div 
            style={{
              position: 'absolute',
              top: '60px',
              left: '12%',
              right: '12%',
              height: '2px',
              backgroundColor: 'var(--border-color)',
              zIndex: 0,
              pointerEvents: 'none'
            }}
            className="process-line"
          >
            <div 
              style={{
                width: hoveredStep !== null ? `${(hoveredStep / (steps.length - 1)) * 100}%` : '0%',
                height: '100%',
                backgroundColor: 'var(--accent-color)',
                transition: 'width 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            />
          </div>

          {/* Steps */}
          {steps.map((step, idx) => {
            const isHovered = hoveredStep === idx;
            return (
              <div 
                key={step.num}
                className="reveal-on-scroll"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  position: 'relative',
                  zIndex: 2,
                  cursor: 'pointer'
                }}
                onMouseEnter={() => setHoveredStep(idx)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                
                {/* Step Connector Icon node */}
                <div 
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: isHovered ? 'var(--accent-color)' : 'var(--bg-color)',
                    border: isHovered ? '1px solid var(--accent-color)' : '1px solid var(--border-dark)',
                    color: isHovered ? '#FFF' : 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '2rem',
                    transition: 'var(--transition-fast)',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.02)'
                  }}
                >
                  {step.icon}
                </div>

                {/* Step Content */}
                <div style={{ textAlign: 'left', width: '100%', padding: '0 0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <span style={{ fontFamily: 'var(--font-headings)', fontSize: '0.9rem', color: 'var(--accent-color)', fontWeight: 800 }}>{step.num}</span>
                    <h3 style={{ fontFamily: 'var(--font-headings)', fontSize: '1.5rem', fontWeight: 800 }}>{step.title}</h3>
                  </div>
                  
                  <p 
                    style={{ 
                      fontSize: '0.85rem', 
                      fontWeight: 600, 
                      color: 'var(--text-primary)', 
                      marginBottom: '0.5rem',
                      opacity: isHovered ? 1 : 0.8 
                    }}
                  >
                    {step.short}
                  </p>

                  <p 
                    style={{ 
                      fontSize: '0.9rem', 
                      lineHeight: '1.6', 
                      color: 'var(--text-secondary)' 
                    }}
                  >
                    {step.desc}
                  </p>
                </div>

              </div>
            );
          })}

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .process-grid {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
          .process-line {
            display: none !important;
          }
          .process-grid > div {
            align-items: flex-start !important;
          }
          .process-grid > div > div:first-child {
            margin-bottom: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
