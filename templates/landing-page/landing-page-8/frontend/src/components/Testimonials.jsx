import React from 'react';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section 
      className="section-padding"
      style={{
        borderBottom: '1px solid var(--border-color)',
        position: 'relative',
        zIndex: 1,
        backgroundColor: '#F5F3EF',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        
        {/* Header */}
        <div 
          style={{
            textAlign: 'left',
            marginBottom: '5rem',
            borderBottom: '1px solid var(--border-color)',
            paddingBottom: '2rem'
          }}
        >
          <span className="text-meta">Client Partnerships</span>
          <h2 className="text-editorial-h2" style={{ marginTop: '0.5rem' }}>
            Built on strong partnerships<span style={{ color: 'var(--accent-color)' }}>.</span>
          </h2>
        </div>

        {/* Testimonial Core Layout */}
        <div 
          className="reveal-on-scroll"
          style={{
            position: 'relative',
            maxWidth: '950px',
            margin: '0 auto',
            textAlign: 'left',
            padding: '2rem 0'
          }}
        >
          {/* Subtle large background Quote Icon */}
          <div 
            style={{
              position: 'absolute',
              top: '-30px',
              left: '-20px',
              opacity: 0.03,
              color: 'var(--text-primary)',
              pointerEvents: 'none'
            }}
          >
            <Quote size={200} style={{ transform: 'rotate(180deg)' }} />
          </div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            
            {/* Quote Text */}
            <blockquote 
              style={{
                fontFamily: 'var(--font-headings)',
                fontSize: 'clamp(1.75rem, 3.2vw, 3rem)',
                fontWeight: 700,
                lineHeight: '1.25',
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                marginBottom: '3rem'
              }}
            >
              "Vanta didn't just redesign our brand. They helped us see our business differently."
            </blockquote>

            {/* Author details */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                borderTop: '1px solid var(--border-color)',
                paddingTop: '2rem',
                maxWidth: '300px'
              }}
            >
              <div>
                <div 
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    fontSize: '1rem',
                    color: 'var(--text-primary)'
                  }}
                >
                  Maya Chen
                </div>
                <div 
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    marginTop: '0.2rem'
                  }}
                >
                  Founder, Aura Skincare
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
