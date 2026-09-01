import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({ products, columns = 4 }) {
  if (!products || products.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 2rem', background: '#ffffff', border: '1px solid var(--border-light)' }}>
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
          No Matching Jewellery Found
        </h3>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
          Try resetting your active filters or searching for different gemstone terms.
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1.2rem'
      }}
      className="main-product-grid"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}

      <style>{`
        @media (min-width: 768px) {
          .main-product-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 1.5rem !important;
          }
        }
        @media (min-width: 1200px) {
          .main-product-grid {
            grid-template-columns: repeat(${columns}, 1fr) !important;
            gap: 1.8rem !important;
          }
        }
      `}</style>
    </div>
  );
}
