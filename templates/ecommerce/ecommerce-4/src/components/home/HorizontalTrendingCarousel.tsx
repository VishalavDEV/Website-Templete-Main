import React, { useRef } from 'react';
import { Product } from '../../types';
import { ProductCard } from '../product/ProductCard';
import { Reveal } from '../animation/Reveal';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface HorizontalTrendingCarouselProps {
  products: Product[];
}

export const HorizontalTrendingCarousel: React.FC<HorizontalTrendingCarouselProps> = ({ products }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="container">
      <Reveal>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2rem' }}>
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--accent-cobalt)', textTransform: 'uppercase' }}>
              MOST POPULAR SELECTIONS
            </span>
            <h2 className="heading-lg" style={{ marginTop: '0.2rem' }}>TRENDING NOW</h2>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={() => handleScroll('left')}
              className="btn-icon"
              style={{ border: '1px solid var(--border-light)', backgroundColor: '#FFFFFF' }}
              title="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="btn-icon"
              style={{ border: '1px solid var(--border-light)', backgroundColor: '#FFFFFF' }}
              title="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </Reveal>

      {/* Horizontal Carousel Container */}
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
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              flex: '0 0 280px',
              scrollSnapAlign: 'start'
            }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};
