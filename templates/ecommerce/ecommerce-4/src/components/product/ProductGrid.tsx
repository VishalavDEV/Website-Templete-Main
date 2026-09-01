import React from 'react';
import { Product } from '../../types';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  if (products.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 1rem', backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
        <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.5rem' }}>NO PRODUCTS MATCH YOUR FILTERS</h4>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Try adjusting your price range, category or brand selections.</p>
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
        gap: '1.5rem'
      }}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
