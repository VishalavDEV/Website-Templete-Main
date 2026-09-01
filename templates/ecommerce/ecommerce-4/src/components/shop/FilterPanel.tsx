import React from 'react';
import { FilterState } from '../../types';
import { BRANDS } from '../../data/brands';
import { RotateCcw, Check } from 'lucide-react';

interface FilterPanelProps {
  filters: FilterState;
  onFilterChange: (newFilters: FilterState) => void;
  onReset: () => void;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({ filters, onFilterChange, onReset }) => {
  const handleBrandToggle = (brandName: string) => {
    const exists = filters.brands.includes(brandName);
    const updated = exists
      ? filters.brands.filter((b) => b !== brandName)
      : [...filters.brands, brandName];
    onFilterChange({ ...filters, brands: updated });
  };

  const handlePriceChange = (maxPrice: number) => {
    onFilterChange({ ...filters, priceRange: [filters.priceRange[0], maxPrice] });
  };

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border-light)',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-light)' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 800 }}>FILTERS</h3>
        <button
          onClick={onReset}
          style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '0.2rem' }}
        >
          <RotateCcw size={12} /> RESET ALL
        </button>
      </div>

      {/* Price Filter */}
      <div>
        <h4 style={{ fontSize: '0.82rem', fontWeight: 800, marginBottom: '0.75rem', textTransform: 'uppercase' }}>
          MAX PRICE: ₹{filters.priceRange[1].toLocaleString('en-IN')}
        </h4>
        <input
          type="range"
          min={500}
          max={120000}
          step={500}
          value={filters.priceRange[1]}
          onChange={(e) => handlePriceChange(Number(e.target.value))}
          style={{ width: '100%', accentColor: 'var(--accent-blue)' }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
          <span>₹500</span>
          <span>₹1,20,000</span>
        </div>
      </div>

      {/* Brand Filter */}
      <div>
        <h4 style={{ fontSize: '0.82rem', fontWeight: 800, marginBottom: '0.75rem', textTransform: 'uppercase' }}>
          BRANDS
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
          {BRANDS.map((b) => {
            const isChecked = filters.brands.includes(b.logoText);
            return (
              <label
                key={b.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  color: isChecked ? 'var(--accent-blue)' : 'var(--text-primary)'
                }}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleBrandToggle(b.logoText)}
                  style={{ accentColor: 'var(--accent-blue)' }}
                />
                <span>{b.name}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Toggles */}
      <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={filters.discountOnly}
            onChange={(e) => onFilterChange({ ...filters, discountOnly: e.target.checked })}
            style={{ accentColor: 'var(--accent-blue)' }}
          />
          <span>Discounted Items Only</span>
        </label>

        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={filters.inStockOnly}
            onChange={(e) => onFilterChange({ ...filters, inStockOnly: e.target.checked })}
            style={{ accentColor: 'var(--accent-blue)' }}
          />
          <span>In Stock Only</span>
        </label>
      </div>
    </div>
  );
};
