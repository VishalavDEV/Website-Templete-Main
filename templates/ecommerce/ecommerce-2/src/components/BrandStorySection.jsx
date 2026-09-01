import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Gem } from 'lucide-react';

export default function BrandStorySection() {
  return (
    <section
      style={{
        paddingTop: '6.5rem',
        paddingBottom: '6.5rem',
        backgroundColor: '#064E3B',
        color: 'var(--ivory)',
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
          {/* Left Text */}
          <div style={{ gridColumn: 'span 12' }} className="story-text-col">
            <span className="tracking-luxury" style={{ fontSize: '0.75rem', color: 'var(--gold-light)' }}>
              OUR HERITAGE
            </span>

            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
                color: '#FAF7F0',
                marginTop: '0.4rem',
                lineHeight: 1.15,
                marginBottom: '1.2rem',
                fontWeight: '300'
              }}
            >
              MORE THAN JEWELLERY.<br />
              <span style={{ color: 'var(--gold-primary)', fontStyle: 'italic', fontWeight: '400' }}>A STORY YOU WEAR.</span>
            </h2>

            <div className="gold-divider-left" />

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1.02rem',
                color: '#D4DEC9',
                lineHeight: 1.8,
                marginBottom: '1.5rem',
                fontWeight: '300'
              }}
            >
              Aurelia was founded on a simple premise: true luxury needs no loud declarations. It whispers through flawless emerald cuts, hand-bevelled gold edges, and gemstones that reflect light with mesmerizing purity.
            </p>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1.02rem',
                color: '#D4DEC9',
                lineHeight: 1.8,
                marginBottom: '2.2rem',
                fontWeight: '300'
              }}
            >
              From rough Zambian emeralds to hand-cast heirlooms, every piece undergoes over 40 hours of painstaking hand-craftsmanship by certified master goldsmiths in our private atelier.
            </p>

            <Link to="/about" className="link-gold" style={{ fontSize: '0.9rem', color: 'var(--gold-primary)', fontWeight: '600' }}>
              OUR STORY <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right Imagery */}
          <div style={{ gridColumn: 'span 12', position: 'relative' }} className="story-img-col">
            <div
              style={{
                position: 'relative',
                width: '88%',
                aspectRatio: '3 / 4',
                overflow: 'hidden',
                border: '1px solid var(--border-gold)',
                boxShadow: 'var(--shadow-lg)'
              }}
              className="img-zoom-container"
            >
              <img
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1000"
                alt="Crafting Aurelia Emerald & Gold Jewellery"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Overlapping secondary image */}
            <div
              style={{
                position: 'absolute',
                top: '-20px',
                right: '0',
                width: '46%',
                aspectRatio: '1 / 1',
                overflow: 'hidden',
                border: '4px solid #064E3B',
                boxShadow: 'var(--shadow-md)'
              }}
              className="animate-float"
            >
              <img
                src="https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=600"
                alt="Atelier Gold Details"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .story-text-col { grid-column: span 6 !important; }
          .story-img-col { grid-column: span 6 !important; }
        }
      `}</style>
    </section>
  );
}
