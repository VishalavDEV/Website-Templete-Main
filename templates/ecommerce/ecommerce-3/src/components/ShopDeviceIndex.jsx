import React, { useState } from 'react';
import { SlidersHorizontal, Heart, ArrowUpRight, ShoppingBag, Star, Check } from 'lucide-react';
import { CATEGORIES } from '../data/products';

export default function ShopDeviceIndex({
  products,
  selectedCategory,
  onSelectCategory,
  onOpenFilter,
  onSelectProduct,
  onAddToCart,
  wishlist,
  onToggleWishlist,
  compareList,
  onToggleCompare
}) {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  // Filter products by selected category
  const filteredProducts = selectedCategory === 'ALL'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <section style={{
      paddingTop: '110px',
      paddingBottom: '6rem',
      background: '#08090B',
      minHeight: '100vh'
    }}>
      <div style={{ maxWidth: '1380px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Header Title */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.6rem',
          marginBottom: '2.5rem'
        }}>
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.75rem',
            color: '#00F0FF',
            letterSpacing: '0.2em'
          }}>
            CATALOG INDEX / 2026
          </div>
          <h1 style={{
            fontSize: 'clamp(2.4rem, 4vw, 3.8rem)',
            color: '#F4F4F1',
            fontWeight: 800
          }}>
            THE DEVICE INDEX
          </h1>
        </div>

        {/* Filter Navigation Strip */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.2rem',
          paddingBottom: '1.5rem',
          marginBottom: '2.5rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          {/* Category Tabs */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            overflowX: 'auto',
            paddingBottom: '0.4rem'
          }} className="no-scrollbar">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  style={{
                    background: isActive ? '#00F0FF' : 'rgba(255, 255, 255, 0.04)',
                    color: isActive ? '#08090B' : '#8E94A0',
                    border: `1px solid ${isActive ? '#00F0FF' : 'rgba(255, 255, 255, 0.08)'}`,
                    borderRadius: '2px',
                    padding: '0.45rem 1rem',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Filter Panel Open Button */}
          <button
            onClick={onOpenFilter}
            style={{
              background: 'rgba(16, 18, 22, 0.8)',
              border: '1px solid rgba(0, 240, 255, 0.3)',
              color: '#F4F4F1',
              padding: '0.55rem 1.2rem',
              borderRadius: '4px',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.78rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0, 240, 255, 0.15)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(16, 18, 22, 0.8)'}
          >
            <SlidersHorizontal size={15} color="#00F0FF" />
            <span>FILTER DEVICES</span>
          </button>
        </div>

        {/* Results Counter */}
        <div style={{
          fontSize: '0.75rem',
          color: '#8E94A0',
          fontFamily: 'JetBrains Mono, monospace',
          marginBottom: '2rem'
        }}>
          SHOWING {filteredProducts.length} HARDWARE ITEMS
        </div>

        {/* 3-Column Product Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {filteredProducts.map((product) => {
            const isWishlisted = wishlist.includes(product.id);
            const isCompared = compareList.some(item => item.id === product.id);
            const isHovered = hoveredProduct === product.id;

            return (
              <div
                key={product.id}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                onClick={() => onSelectProduct(product)}
                style={{
                  background: 'rgba(16, 18, 22, 0.65)',
                  border: `1px solid ${isHovered ? 'rgba(0, 240, 255, 0.4)' : 'rgba(255, 255, 255, 0.08)'}`,
                  borderRadius: '8px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                  transform: isHovered ? 'translateY(-4px)' : 'none',
                  boxShadow: isHovered ? '0 15px 40px -10px rgba(0, 240, 255, 0.18)' : 'none'
                }}
              >
                {/* Image Container & Overlay */}
                <div style={{
                  height: '280px',
                  background: '#08090B',
                  position: 'relative',
                  overflow: 'hidden',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
                }}>
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      padding: '12px',
                      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                      transition: 'transform 0.5s ease'
                    }}
                  />

                  {/* Badges */}
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.4rem'
                  }}>
                    {product.isNew && (
                      <span style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.65rem',
                        background: '#00F0FF',
                        color: '#08090B',
                        padding: '2px 8px',
                        fontWeight: 800,
                        borderRadius: '2px'
                      }}>
                        NEW DROP
                      </span>
                    )}
                    <span style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.65rem',
                      background: 'rgba(8, 9, 11, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#8E94A0',
                      padding: '2px 8px',
                      borderRadius: '2px'
                    }}>
                      {product.category}
                    </span>
                  </div>

                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist(product.id);
                    }}
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: 'rgba(8, 9, 11, 0.75)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: '50%',
                      width: '34px',
                      height: '34px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      zIndex: 3
                    }}
                  >
                    <Heart size={16} fill={isWishlisted ? '#00F0FF' : 'none'} color={isWishlisted ? '#00F0FF' : '#8E94A0'} />
                  </button>

                  {/* Technical Spec Overlay on Hover */}
                  {isHovered && (
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(8, 9, 11, 0.88)',
                      backdropFilter: 'blur(8px)',
                      padding: '1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      animation: 'fadeIn 0.2s ease forwards'
                    }}>
                      <div>
                        <div style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '0.7rem',
                          color: '#00F0FF',
                          marginBottom: '0.5rem',
                          fontWeight: 700
                        }}>
                          TELEMETRY SPEC SHEET
                        </div>
                        <ul style={{
                          listStyle: 'none',
                          fontSize: '0.8rem',
                          color: '#F4F4F1',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.4rem',
                          fontFamily: 'JetBrains Mono, monospace'
                        }}>
                          <li>• DISPLAY: {product.display}</li>
                          <li>• PROCESSOR: {product.processor}</li>
                          <li>• RAM: {product.ram}</li>
                          <li>• BATTERY: {product.battery}</li>
                        </ul>
                      </div>

                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                        paddingTop: '0.8rem'
                      }}>
                        <span style={{ fontSize: '0.75rem', color: '#00F0FF', fontWeight: 700 }}>
                          VIEW PRODUCT DETAILS →
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Content Body */}
                <div style={{ padding: '1.4rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '0.4rem'
                    }}>
                      <h3 style={{
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontSize: '1.2rem',
                        fontWeight: 700,
                        color: '#F4F4F1'
                      }}>
                        {product.name}
                      </h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.78rem', color: '#00F0FF' }}>
                        <Star size={13} fill="#00F0FF" />
                        <span>{product.rating}</span>
                      </div>
                    </div>

                    <div style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '1.1rem',
                      fontWeight: 800,
                      color: '#00F0FF'
                    }}>
                      ₹{product.price.toLocaleString('en-IN')}
                    </div>
                  </div>

                  {/* Actions Bottom Bar */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: '1.2rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)'
                  }}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleCompare(product);
                      }}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: isCompared ? '#00F0FF' : '#8E94A0',
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.72rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem'
                      }}
                    >
                      <SlidersHorizontal size={13} />
                      <span>{isCompared ? 'COMPARING' : 'COMPARE'}</span>
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart(product);
                      }}
                      className="btn-primary"
                      style={{ padding: '0.45rem 0.9rem', fontSize: '0.72rem' }}
                    >
                      <ShoppingBag size={13} />
                      <span>ADD TO BAG</span>
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
