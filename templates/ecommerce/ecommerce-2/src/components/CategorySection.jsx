import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { categoriesList } from '../data/products';

export default function CategorySection() {
  return (
    <section
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        backgroundColor: 'var(--ivory)'
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 4rem auto' }}>
          <span className="tracking-luxury" style={{ fontSize: '0.75rem', color: 'var(--gold-dark)', fontWeight: '600' }}>
            ATELIER DESIGNS
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              marginTop: '0.4rem',
              color: 'var(--emerald-deep)',
              letterSpacing: '0.14em'
            }}
          >
            EXPLORE OUR COLLECTIONS
          </h2>
          <div className="gold-divider" />
        </div>

        {/* Asymmetric Editorial Category Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '1.8rem'
          }}
        >
          {/* Card 1: Rings */}
          <Link
            to="/shop?category=Rings"
            className="category-card img-zoom-container"
            style={{
              gridColumn: 'span 12',
              position: 'relative',
              minHeight: '400px',
              textDecoration: 'none',
              color: '#ffffff',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1200"
              alt="Rings"
              style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
            />
            <div className="category-overlay" />
            <div className="category-content">
              <span style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-light)' }}>
                FINE RINGS
              </span>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '0.4rem' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: 'var(--gold-primary)', fontWeight: '400' }}>
                  RINGS
                </h3>
                <span className="explore-text">
                  EXPLORE <ArrowUpRight size={18} />
                </span>
              </div>
            </div>
          </Link>

          {/* Card 2: Necklaces */}
          <Link
            to="/shop?category=Necklaces"
            className="category-card img-zoom-container"
            style={{
              gridColumn: 'span 12',
              position: 'relative',
              minHeight: '400px',
              textDecoration: 'none',
              color: '#ffffff',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1000"
              alt="Necklaces"
              style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
            />
            <div className="category-overlay" />
            <div className="category-content">
              <span style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-light)' }}>
                FINE NECKLACES
              </span>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '0.4rem' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: 'var(--gold-primary)', fontWeight: '400' }}>
                  NECKLACES
                </h3>
                <span className="explore-text">
                  EXPLORE <ArrowUpRight size={18} />
                </span>
              </div>
            </div>
          </Link>

          {/* Card 3: Earrings */}
          <Link
            to="/shop?category=Earrings"
            className="category-card img-zoom-container"
            style={{
              gridColumn: 'span 12',
              position: 'relative',
              minHeight: '320px',
              textDecoration: 'none',
              color: '#ffffff',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800"
              alt="Earrings"
              style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
            />
            <div className="category-overlay" />
            <div className="category-content">
              <span style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-light)' }}>EARRINGS</span>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '0.3rem' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--gold-primary)' }}>EARRINGS</h3>
                <span className="explore-text">EXPLORE <ArrowUpRight size={16} /></span>
              </div>
            </div>
          </Link>

          {/* Card 4: Bracelets */}
          <Link
            to="/shop?category=Bracelets"
            className="category-card img-zoom-container"
            style={{
              gridColumn: 'span 12',
              position: 'relative',
              minHeight: '320px',
              textDecoration: 'none',
              color: '#ffffff',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1611591475179-67314290d462?auto=format&fit=crop&q=80&w=800"
              alt="Bracelets"
              style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
            />
            <div className="category-overlay" />
            <div className="category-content">
              <span style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-light)' }}>BRACELETS</span>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '0.3rem' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--gold-primary)' }}>BRACELETS</h3>
                <span className="explore-text">EXPLORE <ArrowUpRight size={16} /></span>
              </div>
            </div>
          </Link>

          {/* Card 5: Bridal */}
          <Link
            to="/bridal"
            className="category-card img-zoom-container"
            style={{
              gridColumn: 'span 12',
              position: 'relative',
              minHeight: '320px',
              textDecoration: 'none',
              color: '#ffffff',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=800"
              alt="Bridal"
              style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
            />
            <div className="category-overlay" />
            <div className="category-content">
              <span style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-light)' }}>BRIDAL ATELIER</span>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '0.3rem' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--gold-primary)' }}>BRIDAL</h3>
                <span className="explore-text">EXPLORE <ArrowUpRight size={16} /></span>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <style>{`
        .category-card {
          border: 1px solid var(--border-light);
          transition: all 0.4s ease;
        }
        .category-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(6, 78, 59, 0.2) 0%, rgba(6, 78, 59, 0.85) 100%);
          transition: background 0.4s ease;
        }
        .category-card:hover {
          border-color: var(--gold-primary) !important;
          boxShadow: var(--shadow-gold) !important;
        }
        .category-card:hover .category-overlay {
          background: linear-gradient(180deg, rgba(6, 78, 59, 0.4) 0%, rgba(6, 78, 59, 0.92) 100%);
        }
        .category-content {
          position: absolute;
          inset: 0;
          padding: 2.2rem;
          display: flex;
          flex-direction: column;
          justifyAttribute: flex-end;
          justify-content: flex-end;
          z-index: 10;
        }
        .explore-text {
          font-family: var(--font-sans);
          font-size: 0.78rem;
          letter-spacing: 0.18em;
          font-weight: 600;
          color: var(--gold-light);
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          opacity: 0.85;
          transition: all 0.3s ease;
        }
        .category-card:hover .explore-text {
          opacity: 1;
          color: var(--gold-primary);
        }

        @media (min-width: 768px) {
          .category-card:nth-child(1) { grid-column: span 7 !important; }
          .category-card:nth-child(2) { grid-column: span 5 !important; }
          .category-card:nth-child(3) { grid-column: span 4 !important; }
          .category-card:nth-child(4) { grid-column: span 4 !important; }
          .category-card:nth-child(5) { grid-column: span 4 !important; }
        }
      `}</style>
    </section>
  );
}
