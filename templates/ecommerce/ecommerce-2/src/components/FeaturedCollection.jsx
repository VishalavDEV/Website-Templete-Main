import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import ProductCard from './ProductCard';
import { ChevronRight } from 'lucide-react';

export default function FeaturedCollection() {
  const { products } = useContext(ShopContext);

  const featured = products.slice(0, 4);

  return (
    <section
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        backgroundColor: '#064E3B',
        color: 'var(--ivory)',
        borderTop: '1px solid var(--border-gold)',
        borderBottom: '1px solid var(--border-gold)'
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: '3.5rem'
          }}
        >
          <span className="tracking-luxury" style={{ fontSize: '0.75rem', color: 'var(--gold-light)' }}>
            CURATED SELECTION
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)',
              marginTop: '0.4rem',
              color: '#FAF7F0',
              letterSpacing: '0.14em'
            }}
          >
            THE <span style={{ color: 'var(--gold-primary)' }}>SIGNATURE</span> COLLECTION
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: '1.15rem',
              color: '#D4DEC9',
              marginTop: '0.4rem'
            }}
          >
            Designed for moments worth remembering.
          </p>
          <div className="gold-divider" />
        </div>

        {/* Product Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '2rem'
          }}
        >
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Discover Button */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <Link to="/shop?collection=signature" className="btn-outline-gold">
            EXPLORE SIGNATURE LINE <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
