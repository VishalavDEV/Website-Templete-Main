import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Gem } from 'lucide-react';

export default function EditorialBanner() {
  return (
    <section
      style={{
        paddingTop: '6.5rem',
        paddingBottom: '6.5rem',
        backgroundColor: '#FAF7F0',
        color: 'var(--charcoal)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid var(--border-gold)',
        borderBottom: '1px solid var(--border-gold)'
      }}
    >
      <div className="container-custom">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '3.5rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Large Emerald Jewellery Photography */}
          <div
            style={{
              gridColumn: 'span 12',
              position: 'relative'
            }}
            className="editorial-left-col"
          >
            <div
              style={{
                position: 'relative',
                width: '88%',
                aspectRatio: '4 / 5',
                overflow: 'hidden',
                border: '1px solid var(--border-gold)',
                boxShadow: 'var(--shadow-lg)'
              }}
              className="img-zoom-container"
            >
              <img
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1200"
                alt="Emerald Fine Craftsmanship"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Overlapping Secondary Image */}
            <div
              style={{
                position: 'absolute',
                bottom: '-25px',
                right: '0',
                width: '48%',
                aspectRatio: '1 / 1',
                overflow: 'hidden',
                border: '4px solid #FAF7F0',
                boxShadow: 'var(--shadow-md)'
              }}
              className="animate-float"
            >
              <img
                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=600"
                alt="Emerald Detail"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Right Column: Editorial Copy on Ivory Background */}
          <div
            style={{
              gridColumn: 'span 12',
              paddingLeft: '1rem'
            }}
            className="editorial-right-col"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--gold-dark)', fontSize: '0.75rem', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '1.2rem', fontWeight: '600' }}>
              <Gem size={16} /> ATELIER PHILOSOPHY
            </div>

            {/* Heading with CRAFTSMANSHIP in Gold */}
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.4rem, 4vw, 3.8rem)',
                fontWeight: '300',
                lineHeight: 1.1,
                marginBottom: '1.6rem',
                color: 'var(--emerald-deep)'
              }}
            >
              THE BEAUTY OF<br />
              <span style={{ color: 'var(--gold-primary)', fontWeight: '400', fontStyle: 'italic' }}>CRAFTSMANSHIP</span>
            </h2>

            <div className="gold-divider-left" />

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1.05rem',
                color: 'var(--text-muted)',
                lineHeight: 1.8,
                marginBottom: '2rem',
                fontWeight: '300'
              }}
            >
              Every Aurelia piece is designed around balance, proportion and timeless elegance. Master artisans hand-select every natural Zambian emerald, meticulously setting each stone under high-power microscopy to ensure lifelong brilliance.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2.5rem', borderTop: '1px solid var(--border-light)', paddingTop: '1.5rem' }}>
              <div>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: 'var(--gold-dark)' }}>100%</span>
                <p style={{ fontSize: '0.75rem', color: 'var(--emerald-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '600' }}>Conflict-Free Gems</p>
              </div>
              <div>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: 'var(--gold-dark)' }}>18K</span>
                <p style={{ fontSize: '0.75rem', color: 'var(--emerald-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '600' }}>Solid Pure Gold</p>
              </div>
            </div>

            <Link to="/about" className="btn-emerald">
              DISCOVER OUR CRAFT <ChevronRight size={16} style={{ color: 'var(--gold-primary)' }} />
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .editorial-left-col { grid-column: span 6 !important; }
          .editorial-right-col { grid-column: span 6 !important; }
        }
      `}</style>
    </section>
  );
}
