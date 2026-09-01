import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

export const FeaturedEdit: React.FC = () => {
  return (
    <section style={{ padding: '100px 0', backgroundColor: 'var(--bg-card)' }}>
      <div className="container-custom">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          {/* LEFT: Large Vertical Image (Cols 1-6) */}
          <div
            style={{
              gridColumn: 'span 12',
              position: 'relative',
            }}
            className="featured-left-col"
          >
            <ScrollReveal variant="image-reveal" duration={0.9}>
              <div
                style={{
                  width: '100%',
                  aspectRatio: '3 / 4',
                  maxHeight: '70vh',
                  overflow: 'hidden',
                  borderRadius: '2px',
                  backgroundColor: 'var(--bg-secondary)',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop"
                  alt="The Essential Edit"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT: Editorial Content (Cols 7-12) */}
          <div
            style={{
              gridColumn: 'span 12',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
            className="featured-right-col"
          >
            <ScrollReveal variant="fade-up" delay={0.15}>
              <span
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.2em',
                  fontWeight: '600',
                  color: 'var(--accent-bronze)',
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                  display: 'block',
                }}
              >
                EDITORIAL SPOTLIGHT
              </span>

              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(38px, 5vw, 64px)',
                  lineHeight: '1.05',
                  marginBottom: '24px',
                  textTransform: 'uppercase',
                }}
              >
                THE ESSENTIAL EDIT
              </h2>

              <p
                style={{
                  fontSize: '16px',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.7',
                  maxWidth: '460px',
                  marginBottom: '40px',
                }}
              >
                A collection of refined pieces designed for everyday movement. Focus on immaculate proportions, soft organic wools, and adaptable layers that age gracefully.
              </p>

              {/* Category Tags */}
              <div
                style={{
                  display: 'flex',
                  gap: '24px',
                  fontSize: '11px',
                  letterSpacing: '0.14em',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '48px',
                  borderTop: '1px solid var(--border-light)',
                  borderBottom: '1px solid var(--border-light)',
                  padding: '16px 0',
                }}
              >
                <span>TAILORING</span>
                <span>•</span>
                <span>KNITWEAR</span>
                <span>•</span>
                <span>OUTERWEAR</span>
              </div>

              <div>
                <Link to="/collections/the-essentials" className="btn-aurel-primary" data-cursor="→">
                  DISCOVER THE EDIT <ArrowRight size={15} className="btn-arrow" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .featured-left-col {
            grid-column: span 6 !important;
          }
          .featured-right-col {
            grid-column: span 6 !important;
          }
        }
      `}</style>
    </section>
  );
};
