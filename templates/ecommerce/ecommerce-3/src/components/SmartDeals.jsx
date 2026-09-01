import React from 'react';
import { Tag, ArrowUpRight, ShoppingBag } from 'lucide-react';

export default function SmartDeals({ products, onSelectProduct, onAddToCart }) {
  // Select products with active discounts
  const dealProducts = products.filter(p => p.dealDiscount || (p.originalPrice > p.price)).slice(0, 4);

  return (
    <section style={{
      padding: '5.5rem 0',
      background: '#08090B',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
    }}>
      <div style={{ maxWidth: '1380px', margin: '0 auto', padding: '0 2rem' }}>
        
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginBottom: '3rem'
        }}>
          <div>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.75rem',
              color: '#00F0FF',
              letterSpacing: '0.2em',
              marginBottom: '0.4rem'
            }}>
              CURATED PRIVILEGES
            </div>
            <h2 style={{ fontSize: '2.4rem', color: '#F4F4F1', fontWeight: 800 }}>
              SELECTED OFFERS
            </h2>
          </div>
          <span style={{ fontSize: '0.8rem', color: '#8E94A0', fontFamily: 'JetBrains Mono, monospace' }}>
            LIMITED AVAILABILITY / BATCH 04
          </span>
        </div>

        {/* Deals Cards Horizontal Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '1.5rem'
        }}>
          {dealProducts.map((product) => {
            const savings = product.originalPrice - product.price;

            return (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product)}
                style={{
                  background: 'rgba(16, 18, 22, 0.65)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '8px',
                  padding: '1.5rem',
                  cursor: 'pointer',
                  display: 'flex',
                  gap: '1.2rem',
                  alignItems: 'center',
                  transition: 'all 0.25s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#00F0FF';
                  e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(0,240,255,0.15)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0px)';
                }}
              >
                <div style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '6px',
                  background: '#08090B',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  overflow: 'hidden',
                  flexShrink: 0
                }}>
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                <div style={{ flex: 1 }}>
                  {/* Savings Tag */}
                  <span style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.65rem',
                    color: '#00F0FF',
                    background: 'rgba(0, 240, 255, 0.1)',
                    border: '1px solid rgba(0, 240, 255, 0.3)',
                    padding: '2px 8px',
                    borderRadius: '2px',
                    fontWeight: 700
                  }}>
                    SAVE ₹{savings.toLocaleString('en-IN')}
                  </span>

                  <h3 style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: '#F4F4F1',
                    marginTop: '0.5rem'
                  }}>
                    {product.name}
                  </h3>

                  <div style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '0.6rem',
                    marginTop: '0.4rem',
                    fontFamily: 'JetBrains Mono, monospace'
                  }}>
                    <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#F4F4F1' }}>
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: '#505662', textDecoration: 'line-through' }}>
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(product);
                    }}
                    style={{
                      marginTop: '0.8rem',
                      background: 'none',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#F4F4F1',
                      borderRadius: '4px',
                      padding: '0.4rem 0.8rem',
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.7rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#00F0FF';
                      e.currentTarget.style.color = '#00F0FF';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                      e.currentTarget.style.color = '#F4F4F1';
                    }}
                  >
                    <ShoppingBag size={12} />
                    <span>CLAIM OFFER</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
