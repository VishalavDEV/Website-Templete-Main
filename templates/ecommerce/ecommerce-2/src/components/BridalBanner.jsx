import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ChevronRight } from 'lucide-react';

export default function BridalBanner() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#FAF7F0',
        color: 'var(--emerald-deep)',
        borderTop: '1px solid var(--border-gold)',
        borderBottom: '1px solid var(--border-gold)'
      }}
    >
      {/* Background Photography */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=1800")',
          backgroundPosition: 'center 35%',
          backgroundSize: 'cover',
          opacity: 0.18
        }}
      />

      {/* Decorative Gold Frame */}
      <div
        style={{
          position: 'absolute',
          inset: '2rem',
          border: '1px solid rgba(212, 175, 55, 0.25)',
          pointerEvents: 'none'
        }}
      />

      {/* Content */}
      <div
        className="container-custom"
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          maxWidth: '800px',
          paddingTop: '4rem',
          paddingBottom: '4rem'
        }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--gold-dark)', fontSize: '0.75rem', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '1rem', fontWeight: '600' }}>
          <Heart size={14} fill="var(--gold-primary)" style={{ color: 'var(--gold-primary)' }} /> BRIDAL ATELIER
        </div>

        {/* Heading with FOREVER in Gold */}
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.4rem, 5vw, 4rem)',
            letterSpacing: '0.15em',
            marginBottom: '1.2rem',
            color: 'var(--emerald-deep)'
          }}
        >
          FOR YOUR <span style={{ color: 'var(--gold-primary)', fontStyle: 'italic', fontWeight: '400' }}>FOREVER</span>
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(1.15rem, 1.8vw, 1.45rem)',
            color: 'var(--emerald-muted)',
            marginBottom: '2rem',
            lineHeight: 1.5
          }}
        >
          Discover refined pieces created for unforgettable beginnings.
        </p>

        <div className="gold-divider" style={{ marginBottom: '2.5rem' }} />

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.2rem' }}>
          <Link to="/bridal" className="btn-emerald">
            EXPLORE BRIDAL <ChevronRight size={16} style={{ color: 'var(--gold-primary)' }} />
          </Link>
          <Link to="/shop?category=Rings" className="btn-outline-gold">
            VIEW WEDDING RINGS
          </Link>
        </div>
      </div>
    </section>
  );
}
