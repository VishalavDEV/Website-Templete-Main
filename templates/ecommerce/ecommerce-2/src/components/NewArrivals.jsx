import React, { useRef, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductCard from './ProductCard';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function NewArrivals() {
  const { products } = useContext(ShopContext);
  const scrollRef = useRef(null);

  const newProducts = products.filter((p) => p.isNew);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        backgroundColor: 'var(--ivory)'
      }}
    >
      <div className="container-custom">
        {/* Header with Gold Navigation Arrows */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '3rem',
            gap: '1rem'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--gold-dark)', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: '600' }}>
              <Sparkles size={14} /> FRESH ATELIER UNVEILS
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                color: 'var(--emerald-deep)',
                marginTop: '0.3rem',
                letterSpacing: '0.12em'
              }}
            >
              NEW ARRIVALS
            </h2>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--emerald-muted)' }}>
              Pieces designed for the moments that matter.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.8rem' }}>
            <button
              onClick={() => scroll('left')}
              style={{
                width: '44px',
                height: '44px',
                border: '1px solid var(--gold-primary)',
                background: '#ffffff',
                color: 'var(--emerald-deep)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease'
              }}
              title="Previous"
            >
              <ChevronLeft size={20} style={{ color: 'var(--gold-primary)' }} />
            </button>
            <button
              onClick={() => scroll('right')}
              style={{
                width: '44px',
                height: '44px',
                border: '1px solid var(--gold-primary)',
                background: 'var(--emerald-deep)',
                color: 'var(--gold-light)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease'
              }}
              title="Next"
            >
              <ChevronRight size={20} style={{ color: 'var(--gold-light)' }} />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel */}
        <div
          ref={scrollRef}
          style={{
            display: 'flex',
            gap: '1.8rem',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            paddingBottom: '1.5rem',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {newProducts.map((product) => (
            <div
              key={product.id}
              style={{
                minWidth: '280px',
                maxWidth: '310px',
                flex: '0 0 auto',
                scrollSnapAlign: 'start'
              }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
