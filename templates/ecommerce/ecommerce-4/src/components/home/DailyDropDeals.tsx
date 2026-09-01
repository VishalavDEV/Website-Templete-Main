import React from 'react';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../product/ProductCard';
import { CountdownTimer } from '../common/CountdownTimer';
import { Zap } from 'lucide-react';

export const DailyDropDeals: React.FC = () => {
  const deals = PRODUCTS.filter((p) => p.flashDeal || p.discount >= 20).slice(0, 4);

  return (
    <section style={{ backgroundColor: 'var(--accent-amber-light)', borderTop: '1px solid #FCD34D', borderBottom: '1px solid #FCD34D', padding: '4rem 0' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-amber)', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
              <Zap size={16} /> LIMITED TIME FLASH SALE
            </div>
            <h2 className="heading-lg">THE DAILY DROP</h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-secondary)' }}>ENDS IN:</span>
            <CountdownTimer />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {deals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
