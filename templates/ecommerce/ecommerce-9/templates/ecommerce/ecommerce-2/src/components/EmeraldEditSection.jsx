import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import ProductCard from './ProductCard';
import { Sparkles, ChevronRight } from 'lucide-react';

export default function EmeraldEditSection() {
  const { products } = useContext(ShopContext);

  // Filter products containing Emerald or green gemstones
  const emeraldItems = products.filter((p) => p.material.toLowerCase().includes('emerald')).slice(0, 4);

  return (
    <section
      style={{
        paddingTop: '6.5rem',
        paddingBottom: '6.5rem',
        backgroundColor: '#033B2C',
        color: 'var(--ivory)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid var(--border-gold)',
        borderBottom: '1px solid var(--border-gold)'
      }}
    >
      {/* Subtle Emerald Background Glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(4, 120, 87, 0.25) 0%, rgba(3, 59, 44, 0) 70%)',
          pointerEvents: 'none',
          filter: 'blur(50px)'
        }}
      />

      <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 3.5rem auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--gold-light)', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.6rem', fontWeight: '600' }}>
            <Sparkles size={14} style={{ color: 'var(--gold-primary)' }} /> SIGNATURE GEMSTONE EDIT
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              color: 'var(--gold-primary)',
              letterSpacing: '0.16em'
            }}
          >
            THE EMERALD EDIT
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: '1.2rem',
              color: '#D4DEC9',
              marginTop: '0.4rem'
            }}
          >
            Vibrant Zambian & Colombian emeralds set in solid 18K gold.
          </p>
          <div className="gold-divider" />
        </div>

        {/* Product Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '2rem'
          }}
        >
          {emeraldItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <Link to="/shop?metal=18K+Yellow+Gold+%26+Emerald" className="btn-gold-sweep">
            EXPLORE THE FULL EMERALD EDIT <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
