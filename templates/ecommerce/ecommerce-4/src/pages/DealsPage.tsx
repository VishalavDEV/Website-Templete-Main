import React from 'react';
import { PRODUCTS } from '../data/products';
import { ProductGrid } from '../components/product/ProductGrid';
import { CountdownTimer } from '../components/common/CountdownTimer';
import { Zap } from 'lucide-react';

export const DealsPage: React.FC = () => {
  const deals = PRODUCTS.filter((p) => p.discount > 0);

  return (
    <div style={{ padding: '3rem 0 6rem' }}>
      <div className="container">
        {/* Header */}
        <div style={{ backgroundColor: 'var(--accent-amber-light)', borderRadius: 'var(--radius-lg)', border: '1px solid #FCD34D', padding: '3rem 2rem', marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-amber)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>
              <Zap size={16} /> EXCLUSIVE DEALS
            </div>
            <h1 className="heading-xl">THE BEST DEALS, RIGHT NOW</h1>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '0.3rem' }}>
              Save up to 33% on verified flagship products across technology, style, and home.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', backgroundColor: '#FFFFFF', padding: '1rem 1.5rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800 }}>FLASH ENDS:</span>
            <CountdownTimer />
          </div>
        </div>

        <ProductGrid products={deals} />
      </div>
    </div>
  );
};
