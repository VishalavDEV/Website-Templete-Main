import React from 'react';
import { trustedBrands } from '../data/landingData';

export default function SocialProof() {
  const marqueeItems = [...trustedBrands, ...trustedBrands, ...trustedBrands];

  return (
    <section
      style={{
        padding: '3rem 0',
        borderTop: '1px solid rgba(200, 120, 115, 0.15)',
        borderBottom: '1px solid rgba(200, 120, 115, 0.15)',
        background: 'rgba(255, 255, 255, 0.4)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Side Fade Masks blending into #faf8f2 */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          width: '140px',
          background: 'linear-gradient(to right, #faf8f2 0%, transparent 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '140px',
          background: 'linear-gradient(to left, #faf8f2 0%, transparent 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
        <p
          style={{
            fontSize: '0.85rem',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: '#766e65',
            fontWeight: 700,
          }}
        >
          Trusted by visionary design and technology leaders
        </p>
      </div>

      {/* Infinite Horizontal Marquee */}
      <div className="animate-marquee">
        {marqueeItems.map((brand, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.65rem 2.25rem',
              marginRight: '1rem',
              borderRadius: 9999,
              background: 'rgba(255, 255, 255, 0.75)',
              border: '1px solid rgba(200, 120, 115, 0.18)',
              boxShadow: '0 4px 15px -4px rgba(200, 120, 115, 0.08)',
              transition: 'all 0.3s ease',
              cursor: 'default',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(200, 120, 115, 0.5)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
              e.currentTarget.style.boxShadow = '0 8px 25px -4px rgba(200, 120, 115, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(200, 120, 115, 0.18)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.75)';
              e.currentTarget.style.boxShadow = '0 4px 15px -4px rgba(200, 120, 115, 0.08)';
            }}
          >
            <span style={{ color: '#c87873', fontSize: '1.1rem' }}>{brand.symbol}</span>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '0.95rem',
                letterSpacing: '0.08em',
                color: '#2c2723',
              }}
            >
              {brand.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
