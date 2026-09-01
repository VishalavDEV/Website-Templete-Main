import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function LiveProductStrip({ products, onSelectProduct }) {
  // Filter key newly dropped products
  const droppedProducts = products.filter(p => p.isNew).slice(0, 6);

  return (
    <section style={{
      background: '#101216',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '1.8rem 0',
      overflow: 'hidden'
    }}>
      <div style={{
        maxWidth: '1380px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '1.2rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.75rem',
            color: '#00F0FF',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontWeight: 700
          }}>
            JUST DROPPED
          </span>
          <span style={{ width: '30px', height: '1px', background: '#00F0FF' }} />
        </div>
        <span style={{ fontSize: '0.75rem', color: '#8E94A0', fontFamily: 'JetBrains Mono, monospace' }}>
          SCROLL TO EXPLORE →
        </span>
      </div>

      {/* Horizontal Rail */}
      <div className="no-scrollbar" style={{
        display: 'flex',
        gap: '1.2rem',
        overflowX: 'auto',
        padding: '0 2rem 0.5rem 2rem',
        maxWidth: '1380px',
        margin: '0 auto'
      }}>
        {droppedProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => onSelectProduct(product)}
            style={{
              flex: '0 0 240px',
              background: 'rgba(23, 25, 29, 0.6)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '6px',
              padding: '1rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              transition: 'all 0.2s ease',
              position: 'relative'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#00F0FF';
              e.currentTarget.style.background = 'rgba(0, 240, 255, 0.05)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.background = 'rgba(23, 25, 29, 0.6)';
              e.currentTarget.style.transform = 'translateY(0px)';
            }}
          >
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '4px',
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

            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '0.88rem',
                fontWeight: 700,
                color: '#F4F4F1',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}>
                {product.name}
              </div>
              <div style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.8rem',
                color: '#00F0FF',
                marginTop: '2px'
              }}>
                ₹{product.price.toLocaleString('en-IN')}
              </div>
            </div>

            <ArrowUpRight size={14} color="#8E94A0" style={{ flexShrink: 0 }} />
          </div>
        ))}
      </div>
    </section>
  );
}
