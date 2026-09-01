import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Studio() {
  return (
    <section 
      id="studio" 
      className="section-padding"
      style={{
        borderBottom: '1px solid var(--border-color)',
        position: 'relative',
        zIndex: 1,
        backgroundColor: '#F5F3EF'
      }}
    >
      <div className="container">
        
        <div className="grid-2" style={{ alignItems: 'center' }}>
          
          {/* Studio Left Text */}
          <div 
            className="reveal-on-scroll"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2.5rem',
              textAlign: 'left'
            }}
          >
            <div>
              <span className="text-meta">Our Studio</span>
              <h2 
                className="text-editorial-h2" 
                style={{ 
                  marginTop: '0.5rem',
                  lineHeight: 1.1 
                }}
              >
                Small enough to care. <br />
                Bold enough to matter<span style={{ color: 'var(--accent-color)' }}>.</span>
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p 
                style={{ 
                  fontSize: '1.35rem', 
                  lineHeight: '1.5', 
                  color: 'var(--text-primary)',
                  fontWeight: 500 
                }}
              >
                We are an independent creative studio working across strategy, design, and technology.
              </p>
              
              <p 
                style={{ 
                  fontSize: '1.1rem', 
                  lineHeight: '1.6', 
                  color: 'var(--text-secondary)' 
                }}
              >
                We believe the best brands are not just seen. They are felt. By limiting our active client roster, we partner deeply with founders to execute work that drives real attention and long-term cultural capital.
              </p>
            </div>

            <div>
              <a 
                href="#contact" 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  fontWeight: 600,
                  fontSize: '1rem',
                  color: 'var(--text-primary)',
                  borderBottom: '2px solid var(--accent-color)',
                  paddingBottom: '0.25rem'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--accent-color)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}
              >
                <span>Read our philosophy</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* Studio Right Visual: Collage Design */}
          <div 
            className="reveal-on-scroll"
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '1 / 1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            
            {/* 1. Underlying Accent Frame */}
            <div 
              style={{
                position: 'absolute',
                top: '5%',
                left: '5%',
                width: '75%',
                height: '75%',
                backgroundColor: 'rgba(255, 90, 31, 0.04)',
                border: '1px dashed var(--accent-color)',
                zIndex: 0
              }}
            />

            {/* 2. Main Studio Workspaces Image */}
            <div 
              className="img-zoom-container"
              style={{
                position: 'absolute',
                top: '15%',
                left: '15%',
                width: '70%',
                height: '70%',
                boxShadow: '0 20px 40px rgba(17,17,17,0.08)',
                border: '1px solid var(--border-color)',
                zIndex: 1,
                borderRadius: '2px'
              }}
            >
              <img 
                src="/studio.jpg" 
                alt="Vanta Studio Workspace" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>

            {/* 3. Small Floating Debossed Typography Card */}
            <div 
              style={{
                position: 'absolute',
                bottom: '10%',
                left: '8%',
                backgroundColor: 'var(--text-primary)',
                color: '#FFF',
                padding: '1.25rem 2rem',
                boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                zIndex: 2,
                borderRadius: '2px',
                textAlign: 'left',
                border: '1px solid var(--text-primary)'
              }}
            >
              <div 
                style={{ 
                  fontFamily: 'monospace', 
                  fontSize: '0.65rem', 
                  color: 'var(--accent-color)', 
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase'
                }}
              >
                Vanta Identity
              </div>
              <div 
                style={{ 
                  fontFamily: 'var(--font-headings)', 
                  fontSize: '1.5rem', 
                  fontWeight: 800,
                  marginTop: '0.2rem',
                  lineHeight: 1
                }}
              >
                EST. 2017
              </div>
            </div>

            {/* 4. Small Grid overlay tag */}
            <div 
              style={{
                position: 'absolute',
                top: '8%',
                right: '8%',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(8px)',
                border: '1px solid var(--border-color)',
                padding: '0.5rem 1rem',
                fontSize: '0.7rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                letterSpacing: '0.05em',
                zIndex: 2,
                boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
              }}
            >
              LOC / 52.5200° N, 13.4050° E
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
