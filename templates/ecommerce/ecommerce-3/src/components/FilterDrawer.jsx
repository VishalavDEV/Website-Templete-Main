import React, { useState } from 'react';
import { X, SlidersHorizontal, Check } from 'lucide-react';
import { CATEGORIES } from '../data/products';

export default function FilterDrawer({ isOpen, onClose, onApplyFilters, currentFilters }) {
  const [maxPrice, setMaxPrice] = useState(currentFilters?.maxPrice || 160000);
  const [selectedCat, setSelectedCat] = useState(currentFilters?.category || 'ALL');
  const [selectedStorage, setSelectedStorage] = useState(currentFilters?.storage || 'ALL');
  const [minRating, setMinRating] = useState(currentFilters?.minRating || 0);

  if (!isOpen) return null;

  const storageOptions = ['ALL', '128 GB', '256 GB', '512 GB', '1 TB'];
  const ratingOptions = [
    { label: 'ALL RATINGS', value: 0 },
    { label: '4.5+ ★', value: 4.5 },
    { label: '4.8+ ★', value: 4.8 }
  ];

  const handleApply = () => {
    onApplyFilters({
      maxPrice,
      category: selectedCat,
      storage: selectedStorage,
      minRating
    });
    onClose();
  };

  const handleClear = () => {
    setMaxPrice(160000);
    setSelectedCat('ALL');
    setSelectedStorage('ALL');
    setMinRating(0);
    onApplyFilters({
      maxPrice: 160000,
      category: 'ALL',
      storage: 'ALL',
      minRating: 0
    });
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 200,
      display: 'flex',
      justifyContent: 'flex-end',
      background: 'rgba(0, 0, 0, 0.75)',
      backdropFilter: 'blur(10px)'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '440px',
        background: '#101216',
        borderLeft: '1px solid rgba(0, 240, 255, 0.3)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '-20px 0 50px rgba(0,0,0,0.8)',
        animation: 'slideInRight 0.3s ease'
      }}>
        
        {/* Top Header */}
        <div style={{
          padding: '1.8rem 2rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <SlidersHorizontal size={18} color="#00F0FF" />
            <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.2rem', color: '#F4F4F1' }}>
              FILTER DEVICES
            </h3>
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
            <X size={20} />
          </button>
        </div>

        {/* Filter Criteria Body */}
        <div style={{
          padding: '2rem',
          overflowY: 'auto',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '2.2rem'
        }}>
          
          {/* Price Range Slider */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '0.8rem',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.78rem'
            }}>
              <span style={{ color: '#00F0FF', fontWeight: 700 }}>MAX PRICE</span>
              <span style={{ color: '#F4F4F1', fontWeight: 800 }}>₹{maxPrice.toLocaleString('en-IN')}</span>
            </div>
            <input
              type="range"
              min="5000"
              max="160000"
              step="5000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              style={{
                width: '100%',
                accentColor: '#00F0FF',
                cursor: 'pointer'
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', color: '#8E94A0', marginTop: '0.3rem' }}>
              <span>₹5,000</span>
              <span>₹1,60,000</span>
            </div>
          </div>

          {/* Category Selector */}
          <div>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.78rem',
              color: '#00F0FF',
              fontWeight: 700,
              marginBottom: '0.8rem'
            }}>
              HARDWARE CATEGORY
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCat(cat.id)}
                  style={{
                    background: selectedCat === cat.id ? '#00F0FF' : 'rgba(255, 255, 255, 0.04)',
                    color: selectedCat === cat.id ? '#08090B' : '#8E94A0',
                    border: `1px solid ${selectedCat === cat.id ? '#00F0FF' : 'rgba(255, 255, 255, 0.08)'}`,
                    borderRadius: '2px',
                    padding: '0.4rem 0.8rem',
                    fontSize: '0.72rem',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Storage Capacity */}
          <div>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.78rem',
              color: '#00F0FF',
              fontWeight: 700,
              marginBottom: '0.8rem'
            }}>
              STORAGE CAPACITY
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {storageOptions.map(opt => (
                <button
                  key={opt}
                  onClick={() => setSelectedStorage(opt)}
                  style={{
                    background: selectedStorage === opt ? 'rgba(0, 240, 255, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                    color: selectedStorage === opt ? '#00F0FF' : '#8E94A0',
                    border: `1px solid ${selectedStorage === opt ? '#00F0FF' : 'rgba(255, 255, 255, 0.08)'}`,
                    borderRadius: '2px',
                    padding: '0.4rem 0.8rem',
                    fontSize: '0.72rem',
                    fontFamily: 'JetBrains Mono, monospace',
                    cursor: 'pointer'
                  }}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Rating */}
          <div>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.78rem',
              color: '#00F0FF',
              fontWeight: 700,
              marginBottom: '0.8rem'
            }}>
              MINIMUM RATING
            </div>
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              {ratingOptions.map(opt => (
                <button
                  key={opt.label}
                  onClick={() => setMinRating(opt.value)}
                  style={{
                    flex: 1,
                    background: minRating === opt.value ? 'rgba(0, 240, 255, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                    color: minRating === opt.value ? '#00F0FF' : '#8E94A0',
                    border: `1px solid ${minRating === opt.value ? '#00F0FF' : 'rgba(255, 255, 255, 0.08)'}`,
                    borderRadius: '2px',
                    padding: '0.6rem',
                    fontSize: '0.75rem',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Actions */}
        <div style={{
          padding: '1.5rem 2rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr',
          gap: '1rem'
        }}>
          <button
            onClick={handleClear}
            className="btn-secondary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            CLEAR
          </button>
          <button
            onClick={handleApply}
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            APPLY FILTERS
          </button>
        </div>

      </div>
    </div>
  );
}
