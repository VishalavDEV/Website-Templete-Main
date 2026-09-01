import React from 'react';
import { PRODUCTS } from '../data/products';
import { ProductGrid } from '../components/product/ProductGrid';
import { Sparkles } from 'lucide-react';

export const NewArrivalsPage: React.FC = () => {
  const newItems = PRODUCTS.filter((p) => p.badge === 'NEW' || p.newArrival || p.id.endsWith('1') || p.id.endsWith('2'));

  return (
    <div style={{ padding: '3rem 0 6rem' }}>
      <div className="container">
        <div style={{ marginBottom: '2.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-blue)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.3rem' }}>
            <Sparkles size={16} /> NEW SEASON RELEASE
          </div>
          <h1 className="heading-xl">JUST LANDED</h1>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.3rem' }}>
            Discover the latest arrivals at ORVANA digital department store.
          </p>
        </div>

        <ProductGrid products={newItems} />
      </div>
    </div>
  );
};
