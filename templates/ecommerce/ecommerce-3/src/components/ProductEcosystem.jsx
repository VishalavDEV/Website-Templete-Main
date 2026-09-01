import React, { useState } from 'react';
import { Smartphone, Laptop, Watch, Headphones, Tablet, Plus, ShoppingBag } from 'lucide-react';

export default function ProductEcosystem({ products, onAddToCart, onSelectProduct }) {
  const [hoveredId, setHoveredId] = useState('nova-x1');

  const ecoProducts = [
    {
      id: 'nova-x1',
      title: 'PHONE',
      name: 'NOVA X1',
      spec: 'Quantum C1 Chip • 6.7" OLED',
      price: 49999,
      image: '/images/nova_x1_front.webp',
      icon: Smartphone
    },
    {
      id: 'nova-book-air',
      title: 'LAPTOP',
      name: 'NOVA BOOK AIR',
      spec: 'M1 Silicon • 18-Hour Battery',
      price: 74999,
      image: '/images/nova_book_air_open.webp',
      icon: Laptop
    },
    {
      id: 'nova-watch-x',
      title: 'WATCH',
      name: 'NOVA WATCH X',
      spec: 'Sapphire Glass • ECG Telemetry',
      price: 14999,
      image: '/images/nova_watch_x_front.webp',
      icon: Watch
    },
    {
      id: 'nova-buds-pro',
      title: 'BUDS',
      name: 'NOVA BUDS PRO',
      spec: '50dB Active Noise Cancelation',
      price: 8999,
      image: '/images/nova_buds_pro_open.webp',
      icon: Headphones
    },
    {
      id: 'nova-tab-12',
      title: 'TABLET',
      name: 'NOVA TAB 12',
      spec: '2.8K OLED • NOVA Pen Support',
      price: 39999,
      image: '/images/nova_tab_12_front.webp',
      icon: Tablet
    }
  ].map(item => ({
    ...item,
    image: item.image.startsWith('/') ? import.meta.env.BASE_URL + item.image.slice(1) : item.image
  }));

  return (
    <section style={{
      padding: '6.5rem 0',
      background: '#08090B',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1380px', margin: '0 auto', padding: '0 2rem' }}>

        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.75rem',
            color: '#00F0FF',
            letterSpacing: '0.25em',
            marginBottom: '0.5rem'
          }}>
            HARDWARE & NEURAL OS UNIFICATION
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#F4F4F1', fontWeight: 800 }}>
            ONE ECOSYSTEM.<br />ENDLESS POSSIBILITIES.
          </h2>
          <p style={{ color: '#8E94A0', fontSize: '1rem', marginTop: '0.6rem' }}>
            Instant clip handoff, unified clipboard, and low-latency audio sharing across all NOVA hardware.
          </p>
        </div>

        {/* Central Interconnected Radial Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '1.2rem',
          position: 'relative'
        }} className="ecosystem-grid">

          {ecoProducts.map((item) => {
            const Icon = item.icon;
            const isHovered = hoveredId === item.id;
            const fullProduct = products.find(p => p.id === item.id) || products[0];

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredId(item.id)}
                onClick={() => onSelectProduct(fullProduct)}
                style={{
                  background: isHovered ? 'rgba(16, 18, 22, 0.9)' : 'rgba(16, 18, 22, 0.4)',
                  border: `1px solid ${isHovered ? 'rgba(0, 240, 255, 0.5)' : 'rgba(255, 255, 255, 0.06)'}`,
                  borderRadius: '10px',
                  padding: '1.8rem 1.2rem',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transform: isHovered ? 'translateY(-10px)' : 'translateY(0px)',
                  boxShadow: isHovered ? '0 15px 40px -10px rgba(0, 240, 255, 0.2)' : 'none',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative'
                }}
              >
                {/* Category Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  marginBottom: '1rem',
                  color: isHovered ? '#00F0FF' : '#8E94A0'
                }}>
                  <Icon size={14} />
                  <span style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.7rem',
                    letterSpacing: '0.1em',
                    fontWeight: 700
                  }}>
                    {item.title}
                  </span>
                </div>

                {/* Product Image */}
                <div style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  marginBottom: '1.2rem',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  background: '#08090B'
                }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '6px' }}
                  />
                </div>

                {/* Product Title */}
                <div style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#F4F4F1'
                }}>
                  {item.name}
                </div>

                {/* Price */}
                <div style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.85rem',
                  color: '#00F0FF',
                  marginTop: '0.2rem',
                  fontWeight: 700
                }}>
                  ₹{item.price.toLocaleString('en-IN')}
                </div>

                {/* Specification Reveal on Hover */}
                <div style={{
                  fontSize: '0.72rem',
                  color: '#8E94A0',
                  marginTop: '0.6rem',
                  lineHeight: 1.4,
                  minHeight: '34px',
                  opacity: isHovered ? 1 : 0.6,
                  transition: 'opacity 0.2s ease'
                }}>
                  {item.spec}
                </div>

                {/* Quick Add Button on Hover */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onAddToCart(fullProduct);
                  }}
                  style={{
                    marginTop: '1.2rem',
                    width: '100%',
                    background: isHovered ? '#00F0FF' : 'rgba(255, 255, 255, 0.05)',
                    color: isHovered ? '#08090B' : '#8E94A0',
                    border: '1px solid rgba(0, 240, 255, 0.3)',
                    borderRadius: '4px',
                    padding: '0.6rem',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <ShoppingBag size={13} />
                  <span>ADD TO BAG</span>
                </button>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
