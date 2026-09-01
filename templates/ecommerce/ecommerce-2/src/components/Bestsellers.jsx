import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductCard from './ProductCard';

export default function Bestsellers() {
  const { products } = useContext(ShopContext);

  const bestsellers = products.filter((p) => p.isBestseller).slice(0, 8);

  return (
    <section
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        backgroundColor: 'var(--ivory)'
      }}
    >
      <div className="container-custom">
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3.5rem auto' }}>
          <span className="tracking-luxury" style={{ fontSize: '0.75rem', color: 'var(--gold-dark)', fontWeight: '600' }}>
            MOST CELEBRATED CREATIONS
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
            MOST LOVED
          </h2>
          <div className="gold-divider" />
        </div>

        {/* 4-column grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.2rem'
          }}
          className="bestsellers-grid"
        >
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .bestsellers-grid {
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 1.8rem !important;
          }
        }
      `}</style>
    </section>
  );
}
