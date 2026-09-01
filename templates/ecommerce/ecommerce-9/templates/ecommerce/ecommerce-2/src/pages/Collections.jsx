import React from 'react';
import { Link } from 'react-router-dom';
import { collectionsList } from '../data/products';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function Collections() {
  return (
    <div style={{ backgroundColor: 'var(--ivory)', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* Header Banner */}
      <div
        style={{
          background: '#064E3B',
          color: '#FAF7F0',
          padding: '5rem 1.5rem 4rem 1.5rem',
          textAlign: 'center',
          borderBottom: '1px solid var(--border-gold)'
        }}
      >
        <span style={{ fontSize: '0.75rem', color: 'var(--gold-light)', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: '600' }}>
          ATELIER CURATIONS
        </span>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
            letterSpacing: '0.15em',
            marginTop: '0.5rem',
            color: '#FAF7F0'
          }}
        >
          OUR COLLECTIONS
        </h1>
        <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.2rem', color: '#D4DEC9', maxWidth: '600px', margin: '0.5rem auto 0 auto' }}>
          Each collection represents a distinct chapter in Aurelia's design legacy.
        </p>
      </div>

      <div className="container-custom" style={{ paddingTop: '4rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {collectionsList.map((col, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={col.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(12, 1fr)',
                  gap: '3rem',
                  alignItems: 'center',
                  background: '#FAF7F0',
                  border: '1px solid var(--border-gold)',
                  boxShadow: 'var(--shadow-md)',
                  padding: '2rem'
                }}
              >
                {/* Image Col */}
                <div
                  style={{
                    gridColumn: 'span 12',
                    order: isEven ? 1 : 2,
                    position: 'relative',
                    aspectRatio: '16 / 9',
                    overflow: 'hidden',
                    border: '1px solid var(--border-gold)'
                  }}
                  className="img-zoom-container collection-img"
                >
                  <img
                    src={col.image}
                    alt={col.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                {/* Text Col */}
                <div
                  style={{
                    gridColumn: 'span 12',
                    order: isEven ? 2 : 1,
                    padding: '1rem'
                  }}
                  className="collection-text"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--gold-dark)', fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.6rem', fontWeight: '600' }}>
                    <Sparkles size={14} /> SIGNATURE SERIES
                  </div>

                  <h2
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                      color: 'var(--emerald-deep)',
                      marginBottom: '0.4rem'
                    }}
                  >
                    {col.name}
                  </h2>

                  <p
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontStyle: 'italic',
                      fontSize: '1.1rem',
                      color: 'var(--gold-dark)',
                      marginBottom: '1rem',
                      fontWeight: '600'
                    }}
                  >
                    "{col.tagline}"
                  </p>

                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.92rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.7,
                      marginBottom: '1.8rem'
                    }}
                  >
                    {col.description}
                  </p>

                  <Link
                    to={`/shop?collection=${col.id}`}
                    className="btn-emerald"
                  >
                    EXPLORE {col.name.toUpperCase()} <ArrowUpRight size={16} style={{ color: 'var(--gold-primary)' }} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .collection-img { grid-column: span 6 !important; }
          .collection-text { grid-column: span 6 !important; }
        }
      `}</style>
    </div>
  );
}
