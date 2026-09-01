import React from 'react';
import { useShop } from '../../context/ShopContext';
import { ProductCard } from '../product/ProductCard';

export const PersonalizedSection: React.FC = () => {
  const { recentlyViewed } = useShop();

  if (recentlyViewed.length === 0) return null;

  return (
    <section className="container">
      <div style={{ marginBottom: '2rem' }}>
        <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.15em', color: 'var(--accent-blue)', textTransform: 'uppercase' }}>
          RECOMMENDED FOR YOU
        </span>
        <h2 className="heading-lg" style={{ marginTop: '0.2rem' }}>KEEP EXPLORING</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
        {recentlyViewed.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
