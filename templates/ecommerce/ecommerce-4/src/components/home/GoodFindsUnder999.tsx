import React, { useRef } from 'react';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../product/ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const GoodFindsUnder999: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemsUnder999 = PRODUCTS.filter((p) => p.price <= 999 || p.under999);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="container">
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2rem' }}>
        <div>
          <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.15em', color: 'var(--accent-blue)', textTransform: 'uppercase' }}>
            EVERYDAY VALUE
          </span>
          <h2 className="heading-lg" style={{ marginTop: '0.2rem' }}>GOOD FINDS UNDER ₹999</h2>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button onClick={() => handleScroll('left')} className="btn-icon" style={{ border: '1px solid var(--border-light)', backgroundColor: '#FFFFFF' }}>
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => handleScroll('right')} className="btn-icon" style={{ border: '1px solid var(--border-light)', backgroundColor: '#FFFFFF' }}>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        style={{
          display: 'flex',
          gap: '1.5rem',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          paddingBottom: '1rem',
          scrollbarWidth: 'none'
        }}
      >
        {itemsUnder999.map((product) => (
          <div key={product.id} style={{ flex: '0 0 260px', scrollSnapAlign: 'start' }}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};
