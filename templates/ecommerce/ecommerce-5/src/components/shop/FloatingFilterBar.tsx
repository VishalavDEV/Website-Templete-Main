import React, { useState } from 'react';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import type { FilterState, Gender } from '../../types';

interface FloatingFilterBarProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  totalResults: number;
}

export const FloatingFilterBar: React.FC<FloatingFilterBarProps> = ({
  filters,
  setFilters,
  totalResults,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const categories = ['All', 'Shirts', 'Dresses', 'Trousers', 'Jackets', 'Knitwear', 'Denim', 'Bags', 'Jewelry', 'Eyewear', 'Footwear'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL', '26', '28', '30', '32', '34'];
  const colors = ['Ivory', 'Charcoal', 'Sand', 'Taupe', 'Black', 'Oatmeal', 'Olive', 'Bronze', 'Navy'];

  const resetFilters = () => {
    setFilters({
      gender: 'all',
      category: 'All',
      subcategory: 'All',
      colors: [],
      sizes: [],
      materials: [],
      priceRange: [0, 30000],
      sortBy: 'featured',
      searchQuery: '',
      inStockOnly: false,
    });
  };

  return (
    <>
      {/* Floating Filter Bar */}
      <div
        style={{
          position: 'sticky',
          top: 'var(--header-height)',
          zIndex: 80,
          backgroundColor: 'var(--bg-glass)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border-light)',
          padding: '14px 0',
          marginBottom: '32px',
        }}
      >
        <div
          className="container-custom"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            flexWrap: 'wrap',
          }}
        >
          {/* Gender Pills */}
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {(['all', 'women', 'men', 'accessories'] as (Gender | 'all')[]).map((g) => (
              <button
                key={g}
                onClick={() => setFilters(prev => ({ ...prev, gender: g }))}
                style={{
                  padding: '6px 14px',
                  fontSize: '11px',
                  letterSpacing: '0.1em',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  borderRadius: '999px',
                  backgroundColor: filters.gender === g ? 'var(--text-primary)' : 'transparent',
                  color: filters.gender === g ? 'var(--bg-primary)' : 'var(--text-secondary)',
                  border: '1px solid',
                  borderColor: filters.gender === g ? 'var(--text-primary)' : 'var(--border-light)',
                  transition: 'all 0.2s ease',
                }}
              >
                {g}
              </button>
            ))}
          </div>

          {/* Results count & Filter Drawer Trigger + Sort Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
              {totalResults} PIECES
            </span>

            <button
              onClick={() => setDrawerOpen(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '11px',
                letterSpacing: '0.1em',
                fontWeight: '600',
                textTransform: 'uppercase',
                padding: '6px 14px',
                border: '1px solid var(--border-medium)',
                backgroundColor: 'var(--bg-primary)',
              }}
            >
              <SlidersHorizontal size={14} /> FILTERS
            </button>

            {/* Sort Dropdown */}
            <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
              <select
                value={filters.sortBy}
                onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value as any }))}
                style={{
                  appearance: 'none',
                  WebkitAppearance: 'none',
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-medium)',
                  padding: '6px 28px 6px 12px',
                  fontSize: '11px',
                  letterSpacing: '0.1em',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  color: 'var(--text-primary)',
                  cursor: 'pointer',
                  outline: 'none',
                }}
              >
                <option value="featured">SORT: FEATURED</option>
                <option value="newest">SORT: NEWEST</option>
                <option value="price-low">PRICE: LOW → HIGH</option>
                <option value="price-high">PRICE: HIGH → LOW</option>
                <option value="bestsellers">BESTSELLERS</option>
              </select>
              <ChevronDown size={14} style={{ position: 'absolute', right: '8px', pointerEvents: 'none' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Filter Drawer */}
      <div className={`drawer-backdrop ${drawerOpen ? 'open' : ''}`} onClick={() => setDrawerOpen(false)}>
        <div
          className="drawer-panel"
          onClick={(e) => e.stopPropagation()}
          style={{ padding: '32px' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', textTransform: 'uppercase' }}>
              REFINE SELECTION
            </h3>
            <button onClick={() => setDrawerOpen(false)}>
              <X size={20} />
            </button>
          </div>

          <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* Category */}
            <div>
              <h4 style={{ fontSize: '11px', letterSpacing: '0.14em', fontWeight: '600', textTransform: 'uppercase', marginBottom: '12px' }}>
                CATEGORY
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilters(prev => ({ ...prev, category: cat }))}
                    style={{
                      padding: '6px 12px',
                      fontSize: '11px',
                      border: '1px solid var(--border-medium)',
                      backgroundColor: filters.category === cat ? 'var(--text-primary)' : 'transparent',
                      color: filters.category === cat ? 'var(--bg-primary)' : 'var(--text-primary)',
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div>
              <h4 style={{ fontSize: '11px', letterSpacing: '0.14em', fontWeight: '600', textTransform: 'uppercase', marginBottom: '12px' }}>
                SIZE
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {sizes.map((s) => {
                  const isSelected = filters.sizes.includes(s);
                  return (
                    <button
                      key={s}
                      onClick={() => setFilters(prev => ({
                        ...prev,
                        sizes: isSelected ? prev.sizes.filter(item => item !== s) : [...prev.sizes, s]
                      }))}
                      style={{
                        padding: '6px 12px',
                        fontSize: '11px',
                        border: '1px solid var(--border-medium)',
                        backgroundColor: isSelected ? 'var(--text-primary)' : 'transparent',
                        color: isSelected ? 'var(--bg-primary)' : 'var(--text-primary)',
                      }}
                    >
                      {s}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Color */}
            <div>
              <h4 style={{ fontSize: '11px', letterSpacing: '0.14em', fontWeight: '600', textTransform: 'uppercase', marginBottom: '12px' }}>
                COLOR PALETTE
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {colors.map((c) => {
                  const isSelected = filters.colors.includes(c);
                  return (
                    <button
                      key={c}
                      onClick={() => setFilters(prev => ({
                        ...prev,
                        colors: isSelected ? prev.colors.filter(item => item !== c) : [...prev.colors, c]
                      }))}
                      style={{
                        padding: '6px 12px',
                        fontSize: '11px',
                        border: '1px solid var(--border-medium)',
                        backgroundColor: isSelected ? 'var(--accent-bronze)' : 'transparent',
                        color: isSelected ? '#FFF' : 'var(--text-primary)',
                      }}
                    >
                      {c}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Drawer Actions */}
          <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '20px', display: 'flex', gap: '12px' }}>
            <button onClick={resetFilters} className="btn-aurel-outline" style={{ flex: 1 }}>
              CLEAR ALL
            </button>
            <button onClick={() => setDrawerOpen(false)} className="btn-aurel-primary" style={{ flex: 1 }}>
              APPLY FILTERS
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
