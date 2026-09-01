import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';

const ProductCarousel = ({ products, onQuickView }) => {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const offset = direction === 'left' ? -clientWidth * 0.75 : clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: scrollLeft + offset,
        behavior: 'smooth',
      });
    }
  };

  if (!products || products.length === 0) return null;

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* Scroll Navigation Buttons */}
      <button
        onClick={() => handleScroll('left')}
        style={{
          position: 'absolute',
          left: '-20px',
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: '#fff',
          border: '1px solid rgba(124, 92, 255, 0.15)',
          borderRadius: '50%',
          width: '44px',
          height: '44px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(124, 92, 255, 0.08)',
          zIndex: 5,
        }}
      >
        <ChevronLeft size={22} style={{ color: '#7c5cff' }} />
      </button>

      <button
        onClick={() => handleScroll('right')}
        style={{
          position: 'absolute',
          right: '-20px',
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: '#fff',
          border: '1px solid rgba(124, 92, 255, 0.15)',
          borderRadius: '50%',
          width: '44px',
          height: '44px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(124, 92, 255, 0.08)',
          zIndex: 5,
        }}
      >
        <ChevronRight size={22} style={{ color: '#7c5cff' }} />
      </button>

      {/* Horizontal Scroll Containers */}
      <div
        ref={scrollRef}
        style={{
          display: 'flex',
          gap: '24px',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          padding: '10px 4px 30px 4px',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {products.map((product, idx) => (
          <div
            key={product.id}
            style={{
              flex: '0 0 280px',
              scrollSnapAlign: 'start',
            }}
          >
            <ProductCard product={product} onQuickView={onQuickView} delay={idx * 0.05} />
          </div>
        ))}
      </div>

      <style>{`
        ::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default ProductCarousel;
