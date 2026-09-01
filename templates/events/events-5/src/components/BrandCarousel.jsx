import React from 'react';
import { carBrands } from '../data/carBrandsData';
import { Shield, Award } from 'lucide-react';

export const BrandCarousel = () => {
  return (
    <section style={{
      padding: '70px 0',
      background: '#07090b',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ marginBottom: '40px', textAlign: 'center' }}>
        <div className="section-label">VEHICLE COMPATIBILITY</div>
        <h2 className="section-title">WE CARE FOR EVERY BRAND.</h2>
        <p className="section-subtitle">
          Factory paint codes and manufacturer-grade detailing specs for all luxury & high-performance marques.
        </p>
      </div>

      {/* Infinite Scrolling Marquee Banner */}
      <div style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        padding: '16px 0'
      }}>
        {/* Fade Edges */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100px',
          height: '100%',
          background: 'linear-gradient(90deg, #07090b 0%, transparent 100%)',
          zIndex: 2,
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100px',
          height: '100%',
          background: 'linear-gradient(-90deg, #07090b 0%, transparent 100%)',
          zIndex: 2,
          pointerEvents: 'none'
        }} />

        <div style={{
          display: 'flex',
          gap: '24px',
          width: 'max-content',
          animation: 'marquee 30s linear infinite'
        }}>
          {/* Render twice for seamless infinite loop */}
          {[...carBrands, ...carBrands].map((brand, idx) => (
            <div
              key={idx}
              style={{
                background: 'linear-gradient(145deg, #111417 0%, #1b2024 100%)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '14px',
                padding: '18px 28px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                minWidth: '220px',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: 'rgba(124, 255, 79, 0.1)',
                border: '1px solid rgba(124, 255, 79, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#7cff4f',
                fontWeight: '900',
                fontSize: '0.85rem'
              }}>
                {brand.name.substring(0, 2)}
              </div>
              <div>
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: '800',
                  color: '#f5f7f8',
                  fontSize: '1.05rem',
                  letterSpacing: '0.05em'
                }}>
                  {brand.name}
                </div>
                <div style={{ fontSize: '0.72rem', color: '#7cff4f', fontWeight: '700' }}>
                  {brand.badge}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;
