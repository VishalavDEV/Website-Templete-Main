import React, { useState } from 'react';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';

export default function SearchCommandModal({ isOpen, onClose, products, onSelectProduct }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const popularChips = ['OLED', 'WIRELESS', 'GAMING', 'LAPTOP', 'SMARTWATCH', 'TITANIUM'];

  const results = query.trim() === ''
    ? []
    : products.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        (p.features && p.features.some(f => f.toLowerCase().includes(query.toLowerCase())))
      );

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 250,
      background: 'rgba(8, 9, 11, 0.95)',
      backdropFilter: 'blur(24px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '6rem',
      paddingLeft: '2rem',
      paddingRight: '2rem'
    }}>
      {/* Close button top right */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '2rem',
          right: '2rem',
          background: 'none',
          border: 'none',
          color: '#8E94A0',
          cursor: 'pointer'
        }}
      >
        <X size={28} />
      </button>

      <div style={{ maxWidth: '800px', width: '100%' }}>
        
        {/* Command Center Title */}
        <div style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.8rem',
          color: '#00F0FF',
          letterSpacing: '0.25em',
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          SEARCH NOVA TELEMETRY & HARDWARE
        </div>

        {/* Input Box */}
        <div style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          background: 'rgba(16, 18, 22, 0.8)',
          border: '1px solid rgba(0, 240, 255, 0.4)',
          borderRadius: '8px',
          padding: '0.8rem 1.4rem',
          boxShadow: '0 0 30px rgba(0, 240, 255, 0.15)'
        }}>
          <Search size={22} color="#00F0FF" style={{ marginRight: '1rem' }} />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search devices, categories or features (e.g. OLED, Titanium)..."
            style={{
              width: '100%',
              background: 'none',
              border: 'none',
              outline: 'none',
              color: '#F4F4F1',
              fontSize: '1.2rem',
              fontFamily: 'Space Grotesk, sans-serif'
            }}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              style={{ background: 'none', border: 'none', color: '#8E94A0', cursor: 'pointer' }}
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* Popular Query Chips */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          marginTop: '1.2rem',
          flexWrap: 'wrap'
        }}>
          <span style={{ fontSize: '0.75rem', color: '#8E94A0', fontFamily: 'JetBrains Mono, monospace' }}>
            POPULAR:
          </span>
          {popularChips.map((chip) => (
            <button
              key={chip}
              onClick={() => setQuery(chip)}
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                color: '#8E94A0',
                padding: '0.3rem 0.7rem',
                borderRadius: '2px',
                fontSize: '0.72rem',
                fontFamily: 'JetBrains Mono, monospace',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#00F0FF';
                e.currentTarget.style.color = '#00F0FF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.color = '#8E94A0';
              }}
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Live Search Results List */}
        <div style={{
          marginTop: '2rem',
          maxHeight: '420px',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.8rem'
        }}>
          {query && results.length === 0 && (
            <div style={{ textAlign: 'center', padding: '3rem 0', color: '#8E94A0' }}>
              No devices found matching "{query}". Try another query like OLED, Headphones, or Phone.
            </div>
          )}

          {results.map((product) => (
            <div
              key={product.id}
              onClick={() => {
                onSelectProduct(product);
                onClose();
              }}
              style={{
                background: 'rgba(16, 18, 22, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '6px',
                padding: '1rem 1.4rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#00F0FF';
                e.currentTarget.style.background = 'rgba(0, 240, 255, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.background = 'rgba(16, 18, 22, 0.7)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '4px', overflow: 'hidden', background: '#08090B' }}>
                  <img src={product.images[0]} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1rem', fontWeight: 700, color: '#F4F4F1' }}>
                    {product.name}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#8E94A0' }}>
                    {product.category} • {product.display || product.tag}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', color: '#00F0FF', fontWeight: 700 }}>
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                <ArrowRight size={16} color="#8E94A0" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
