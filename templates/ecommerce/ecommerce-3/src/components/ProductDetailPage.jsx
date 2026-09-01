import React, { useState } from 'react';
import { ArrowLeft, Star, ShoppingBag, SlidersHorizontal, Heart, Shield, Truck, Package, Check, Sparkles } from 'lucide-react';

export default function ProductDetailPage({
  product,
  onBack,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  onToggleCompare,
  isCompared,
  onBuyNow
}) {
  const [selectedImage, setSelectedImage] = useState(product?.images?.[0] || '');
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || null);
  const [selectedStorage, setSelectedStorage] = useState(product?.storageOptions?.[0] || '');
  const [activeTab, setActiveTab] = useState('SPECS');

  if (!product) return null;

  return (
    <div style={{
      paddingTop: '100px',
      paddingBottom: '6rem',
      background: '#08090B',
      minHeight: '100vh'
    }}>
      <div style={{ maxWidth: '1380px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Back Navigation Bar */}
        <button
          onClick={onBack}
          style={{
            background: 'none',
            border: 'none',
            color: '#00F0FF',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.8rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '2rem'
          }}
        >
          <ArrowLeft size={16} />
          <span>BACK TO CATALOG INDEX</span>
        </button>

        {/* Top Product Detail Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 1fr',
          gap: '4rem',
          alignItems: 'start'
        }} className="pdp-grid">

          {/* Left Column: Image Gallery */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <div style={{
              width: '100%',
              height: '500px',
              borderRadius: '12px',
              background: '#101216',
              border: '1px solid rgba(0, 240, 255, 0.3)',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 20px 50px rgba(0,0,0,0.6)'
            }}>
              <img
                src={selectedImage || product.images[0]}
                alt={product.name}
                style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '16px', background: '#0D0E12' }}
              />
              <span style={{
                position: 'absolute',
                top: '1.2rem',
                left: '1.2rem',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.7rem',
                color: '#00F0FF',
                background: 'rgba(8, 9, 11, 0.8)',
                padding: '3px 8px',
                borderRadius: '2px',
                border: '1px solid rgba(0, 240, 255, 0.3)'
              }}>
                STUDIO RENDER 8K
              </span>
            </div>

            {/* Thumbnails Rail */}
            <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto' }}>
              {product.images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '6px',
                    background: '#101216',
                    border: `1px solid ${selectedImage === img ? '#00F0FF' : 'rgba(255, 255, 255, 0.08)'}`,
                    cursor: 'pointer',
                    overflow: 'hidden'
                  }}
                >
                  <img src={img} alt={`Thumbnail ${idx}`} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '4px', background: '#0D0E12' }} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Configuration & Cart Actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
            <div>
              <div style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.75rem',
                color: '#00F0FF',
                letterSpacing: '0.2em',
                marginBottom: '0.4rem'
              }}>
                {product.tag || 'NOVA HARDWARE'}
              </div>

              <h1 style={{
                fontSize: '2.8rem',
                color: '#F4F4F1',
                fontWeight: 800,
                lineHeight: 1.1
              }}>
                {product.name}
              </h1>

              {/* Rating & Reviews */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginTop: '0.8rem',
                fontSize: '0.85rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#00F0FF' }}>
                  <Star size={16} fill="#00F0FF" />
                  <span style={{ fontWeight: 800 }}>{product.rating}</span>
                </div>
                <span style={{ color: '#505662' }}>|</span>
                <span style={{ color: '#8E94A0', fontFamily: 'JetBrains Mono, monospace' }}>
                  {product.reviewsCount} VERIFIED REVIEWS
                </span>
              </div>
            </div>

            {/* Price */}
            <div style={{
              fontFamily: 'JetBrains Mono, monospace',
              display: 'flex',
              alignItems: 'baseline',
              gap: '1rem'
            }}>
              <span style={{ fontSize: '2.2rem', fontWeight: 800, color: '#00F0FF' }}>
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice > product.price && (
                <span style={{ fontSize: '1.1rem', color: '#505662', textDecoration: 'line-through' }}>
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>

            <p style={{ color: '#8E94A0', fontSize: '0.98rem', lineHeight: 1.6 }}>
              {product.description}
            </p>

            {/* Color Swatches */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <div style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.75rem',
                  color: '#8E94A0',
                  marginBottom: '0.6rem'
                }}>
                  SELECT FINISH: <span style={{ color: '#F4F4F1', fontWeight: 700 }}>{selectedColor?.name}</span>
                </div>
                <div style={{ display: 'flex', gap: '0.8rem' }}>
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c)}
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: c.hex,
                        border: `2px solid ${selectedColor?.name === c.name ? '#00F0FF' : 'rgba(255, 255, 255, 0.1)'}`,
                        cursor: 'pointer',
                        boxShadow: selectedColor?.name === c.name ? '0 0 15px rgba(0, 240, 255, 0.5)' : 'none',
                        transition: 'transform 0.2s'
                      }}
                      title={c.name}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Storage Selection */}
            {product.storageOptions && product.storageOptions.length > 0 && product.storageOptions[0] !== 'N/A' && (
              <div>
                <div style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.75rem',
                  color: '#8E94A0',
                  marginBottom: '0.6rem'
                }}>
                  SELECT STORAGE CAPACITY:
                </div>
                <div style={{ display: 'flex', gap: '0.6rem' }}>
                  {product.storageOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setSelectedStorage(opt)}
                      style={{
                        background: selectedStorage === opt ? 'rgba(0, 240, 255, 0.15)' : 'rgba(16, 18, 22, 0.6)',
                        color: selectedStorage === opt ? '#00F0FF' : '#8E94A0',
                        border: `1px solid ${selectedStorage === opt ? '#00F0FF' : 'rgba(255, 255, 255, 0.08)'}`,
                        borderRadius: '4px',
                        padding: '0.6rem 1.2rem',
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Primary Actions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '1rem' }}>
                <button
                  onClick={() => onAddToCart({ ...product, selectedColor: selectedColor?.name, selectedStorage })}
                  className="btn-primary"
                  style={{ justifyContent: 'center' }}
                >
                  <ShoppingBag size={18} />
                  <span>ADD TO BAG</span>
                </button>

                <button
                  onClick={() => onBuyNow({ ...product, selectedColor: selectedColor?.name, selectedStorage })}
                  style={{
                    background: 'rgba(0, 240, 255, 0.15)',
                    border: '1px solid #00F0FF',
                    color: '#00F0FF',
                    borderRadius: '2px',
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    letterSpacing: '0.05em'
                  }}
                >
                  BUY NOW
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <button
                  onClick={() => onToggleWishlist(product.id)}
                  className="btn-secondary"
                  style={{ justifyContent: 'center', fontSize: '0.75rem' }}
                >
                  <Heart size={15} fill={isWishlisted ? '#00F0FF' : 'none'} color={isWishlisted ? '#00F0FF' : '#8E94A0'} />
                  <span>{isWishlisted ? 'SAVED TO WISHLIST' : 'SAVE TO WISHLIST'}</span>
                </button>

                <button
                  onClick={() => onToggleCompare(product)}
                  className="btn-secondary"
                  style={{ justifyContent: 'center', fontSize: '0.75rem' }}
                >
                  <SlidersHorizontal size={15} color={isCompared ? '#00F0FF' : '#8E94A0'} />
                  <span>{isCompared ? 'COMPARING' : 'ADD TO COMPARE'}</span>
                </button>
              </div>
            </div>

            {/* Quick Guarantees */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              fontSize: '0.72rem',
              color: '#8E94A0',
              fontFamily: 'JetBrains Mono, monospace'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Shield size={14} color="#00F0FF" />
                <span>2-YR WARRANTY</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Truck size={14} color="#00F0FF" />
                <span>FREE EXPRESS SHIP</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Package size={14} color="#00F0FF" />
                <span>14-DAY RETURNS</span>
              </div>
            </div>

          </div>
        </div>

        {/* Section Tabs Below (WHY X1, TECH SPECS, IN THE BOX, WARRANTY, REVIEWS) */}
        <div style={{ marginTop: '6rem' }}>
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            marginBottom: '2.5rem'
          }}>
            {['SPECS', 'WHY THIS DEVICE', 'IN THE BOX', 'WARRANTY & DELIVERY', 'REVIEWS'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  background: 'none',
                  border: 'none',
                  borderBottom: `2px solid ${activeTab === tab ? '#00F0FF' : 'transparent'}`,
                  color: activeTab === tab ? '#00F0FF' : '#8E94A0',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  paddingBottom: '0.8rem',
                  cursor: 'pointer',
                  transition: 'color 0.2s'
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content Display */}
          <div style={{
            background: 'rgba(16, 18, 22, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '8px',
            padding: '2.5rem'
          }}>
            {activeTab === 'SPECS' && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', color: '#00F0FF', marginBottom: '1rem' }}>
                    HARDWARE SPECIFICATIONS
                  </div>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                        <td style={{ padding: '0.6rem 0', color: '#8E94A0' }}>Display</td>
                        <td style={{ padding: '0.6rem 0', color: '#F4F4F1', fontWeight: 600 }}>{product.display}</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                        <td style={{ padding: '0.6rem 0', color: '#8E94A0' }}>Processor</td>
                        <td style={{ padding: '0.6rem 0', color: '#F4F4F1', fontWeight: 600 }}>{product.processor}</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                        <td style={{ padding: '0.6rem 0', color: '#8E94A0' }}>System RAM</td>
                        <td style={{ padding: '0.6rem 0', color: '#F4F4F1', fontWeight: 600 }}>{product.ram}</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                        <td style={{ padding: '0.6rem 0', color: '#8E94A0' }}>Battery Cell</td>
                        <td style={{ padding: '0.6rem 0', color: '#F4F4F1', fontWeight: 600 }}>{product.battery}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', color: '#00F0FF', marginBottom: '1rem' }}>
                    PHYSICAL TELEMETRY
                  </div>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                        <td style={{ padding: '0.6rem 0', color: '#8E94A0' }}>Optics / Cam</td>
                        <td style={{ padding: '0.6rem 0', color: '#F4F4F1', fontWeight: 600 }}>{product.camera}</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                        <td style={{ padding: '0.6rem 0', color: '#8E94A0' }}>Chassis Weight</td>
                        <td style={{ padding: '0.6rem 0', color: '#F4F4F1', fontWeight: 600 }}>{product.weight}</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                        <td style={{ padding: '0.6rem 0', color: '#8E94A0' }}>OS Architecture</td>
                        <td style={{ padding: '0.6rem 0', color: '#F4F4F1', fontWeight: 600 }}>NOVA Neural OS 2026</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'WHY THIS DEVICE' && (
              <div>
                <h3 style={{ fontSize: '1.4rem', color: '#F4F4F1', marginBottom: '1rem' }}>
                  {product.headline}
                </h3>
                <p style={{ color: '#8E94A0', lineHeight: 1.7, fontSize: '1rem', maxWidth: '700px' }}>
                  {product.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginTop: '1.5rem' }}>
                  {product.features?.map(f => (
                    <span key={f} style={{
                      background: 'rgba(0, 240, 255, 0.08)',
                      border: '1px solid rgba(0, 240, 255, 0.3)',
                      color: '#00F0FF',
                      padding: '0.4rem 0.8rem',
                      borderRadius: '4px',
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.75rem'
                    }}>
                      ✓ {f}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'IN THE BOX' && (
              <div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', color: '#00F0FF', marginBottom: '1rem' }}>
                  UNBOXING CONTENT LIST
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  {product.inBox?.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#F4F4F1', fontSize: '0.95rem' }}>
                      <Check size={16} color="#00F0FF" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'WARRANTY & DELIVERY' && (
              <div>
                <h4 style={{ fontSize: '1.1rem', color: '#F4F4F1', marginBottom: '0.6rem' }}>
                  {product.warranty}
                </h4>
                <p style={{ color: '#8E94A0', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  All NOVA products are backed by 24/7 technical concierge access and guaranteed express replacement in case of hardware malfunction. Express insured global transit dispatched within 24 hours of confirmation.
                </p>
              </div>
            )}

            {activeTab === 'REVIEWS' && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                  <div>
                    <span style={{ fontSize: '2rem', fontWeight: 800, color: '#F4F4F1' }}>{product.rating}</span>
                    <span style={{ color: '#8E94A0', fontSize: '0.9rem', marginLeft: '0.5rem' }}>out of 5 stars ({product.reviewsCount} reviews)</span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{
                    background: '#08090B',
                    padding: '1.2rem',
                    borderRadius: '6px',
                    border: '1px solid rgba(255, 255, 255, 0.06)'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                      <span style={{ fontWeight: 700, color: '#F4F4F1' }}>Karan V.</span>
                      <span style={{ fontSize: '0.75rem', color: '#8E94A0' }}>Verified Owner</span>
                    </div>
                    <p style={{ color: '#8E94A0', fontSize: '0.88rem' }}>
                      "The tactile titanium chassis and 120Hz LTPO display are unrivaled. Battery charging speed is phenomenal."
                    </p>
                  </div>
                  <div style={{
                    background: '#08090B',
                    padding: '1.2rem',
                    borderRadius: '6px',
                    border: '1px solid rgba(255, 255, 255, 0.06)'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                      <span style={{ fontWeight: 700, color: '#F4F4F1' }}>Elena R.</span>
                      <span style={{ fontSize: '0.75rem', color: '#8E94A0' }}>Verified Owner</span>
                    </div>
                    <p style={{ color: '#8E94A0', fontSize: '0.88rem' }}>
                      "Thermal management under 4K video rendering is whisper quiet. Truly feels like technology from 2026."
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}
