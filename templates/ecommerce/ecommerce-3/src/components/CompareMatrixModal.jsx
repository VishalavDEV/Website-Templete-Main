import React from 'react';
import { X, SlidersHorizontal, Trash2, ShoppingBag } from 'lucide-react';

export default function CompareMatrixModal({ isOpen, onClose, compareList, onRemoveFromCompare, onAddToCart }) {
  if (!isOpen) return null;

  const compareRows = [
    { label: 'PRICE', key: 'price', format: (v) => `₹${v.toLocaleString('en-IN')}` },
    { label: 'CATEGORY', key: 'category' },
    { label: 'DISPLAY', key: 'display' },
    { label: 'PROCESSOR', key: 'processor' },
    { label: 'SYSTEM RAM', key: 'ram' },
    { label: 'STORAGE options', key: 'storageOptions', format: (v) => v ? v.join(', ') : 'N/A' },
    { label: 'CAMERA / OPTICS', key: 'camera' },
    { label: 'BATTERY CELL', key: 'battery' },
    { label: 'WEIGHT', key: 'weight' },
    { label: 'RATING', key: 'rating', format: (v) => `★ ${v}` }
  ];

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 220,
      background: 'rgba(8, 9, 11, 0.92)',
      backdropFilter: 'blur(20px)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }}>
      {/* Top Header */}
      <div style={{
        padding: '1.5rem 2.5rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <SlidersHorizontal size={20} color="#00F0FF" />
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.5rem', color: '#F4F4F1' }}>
            COMPARE DEVICES ({compareList.length}/4)
          </h2>
        </div>
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            color: '#8E94A0',
            cursor: 'pointer'
          }}
        >
          <X size={24} />
        </button>
      </div>

      {/* Main Table Matrix */}
      <div style={{ flex: 1, overflow: 'auto', padding: '2rem 2.5rem' }}>
        {compareList.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '5rem 0', color: '#8E94A0' }}>
            <SlidersHorizontal size={48} color="rgba(255,255,255,0.1)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.2rem', color: '#F4F4F1', marginBottom: '0.5rem' }}>NO DEVICES SELECTED FOR COMPARISON</h3>
            <p style={{ fontSize: '0.9rem' }}>Click the compare icon on any product card in the Device Index to add it here.</p>
          </div>
        ) : (
          <div style={{ minWidth: '800px' }}>
            {/* Header Row: Products */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: `200px repeat(${compareList.length}, 1fr)`,
              gap: '1.5rem',
              alignItems: 'center',
              borderBottom: '1px solid rgba(0, 240, 255, 0.3)',
              paddingBottom: '1.5rem'
            }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', color: '#00F0FF', fontWeight: 700 }}>
                HARDWARE MATRIX
              </div>

              {compareList.map((product) => (
                <div key={product.id} style={{
                  background: 'rgba(16, 18, 22, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '8px',
                  padding: '1.2rem',
                  position: 'relative'
                }}>
                  <button
                    onClick={() => onRemoveFromCompare(product.id)}
                    style={{
                      position: 'absolute',
                      top: '0.6rem',
                      right: '0.6rem',
                      background: 'none',
                      border: 'none',
                      color: '#8E94A0',
                      cursor: 'pointer'
                    }}
                    title="Remove from comparison"
                  >
                    <Trash2 size={14} />
                  </button>

                  <div style={{ width: '80px', height: '80px', margin: '0 auto 0.8rem auto', borderRadius: '4px', overflow: 'hidden' }}>
                    <img src={product.images[0]} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>

                  <div style={{ textAlign: 'center', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#F4F4F1' }}>
                    {product.name}
                  </div>

                  <button
                    onClick={() => onAddToCart(product)}
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center', marginTop: '0.8rem', padding: '0.4rem', fontSize: '0.7rem' }}
                  >
                    <ShoppingBag size={12} />
                    <span>ADD TO BAG</span>
                  </button>
                </div>
              ))}
            </div>

            {/* Spec Attribute Rows */}
            {compareRows.map((row) => (
              <div
                key={row.key}
                style={{
                  display: 'grid',
                  gridTemplateColumns: `200px repeat(${compareList.length}, 1fr)`,
                  gap: '1.5rem',
                  padding: '1rem 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                  alignItems: 'center'
                }}
              >
                <div style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.75rem',
                  color: '#8E94A0',
                  fontWeight: 700
                }}>
                  {row.label}
                </div>

                {compareList.map((product) => {
                  const val = product[row.key];
                  const formatted = row.format ? row.format(val) : val;
                  return (
                    <div key={product.id} style={{
                      fontFamily: row.key === 'price' ? 'JetBrains Mono, monospace' : 'Inter, sans-serif',
                      fontSize: '0.88rem',
                      color: row.key === 'price' ? '#00F0FF' : '#F4F4F1',
                      fontWeight: row.key === 'price' ? 800 : 400
                    }}>
                      {formatted || 'N/A'}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
