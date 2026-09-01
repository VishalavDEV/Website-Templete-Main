import React from 'react';
import { FilterState } from '../../types';
import { CATEGORIES } from '../../data/categories';
import { BRANDS } from '../../data/brands';
import { X, RotateCcw, Check, Star } from 'lucide-react';

interface FilterDrawerProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  isOpen: boolean;
  onClose: () => void;
  isMobileSheet?: boolean;
}

export const FilterDrawer: React.FC<FilterDrawerProps> = ({
  filters,
  setFilters,
  isOpen,
  onClose,
  isMobileSheet = false
}) => {
  const currentCategory = CATEGORIES.find((c) => c.id === filters.category);

  const handleBrandToggle = (brandName: string) => {
    setFilters((prev) => {
      const exists = prev.brands.includes(brandName);
      if (exists) {
        return { ...prev, brands: prev.brands.filter((b) => b !== brandName) };
      } else {
        return { ...prev, brands: [...prev.brands, brandName] };
      }
    });
  };

  const handleCustomSpecChange = (key: string, value: string) => {
    setFilters((prev) => {
      const updatedSpecs = { ...prev.customSpecs };
      if (updatedSpecs[key] === value) {
        delete updatedSpecs[key];
      } else {
        updatedSpecs[key] = value;
      }
      return { ...prev, customSpecs: updatedSpecs };
    });
  };

  const handleReset = () => {
    setFilters({
      category: '',
      subcategory: '',
      brands: [],
      priceRange: [0, 200000],
      minRating: 0,
      discountOnly: false,
      inStockOnly: false,
      searchQuery: '',
      customSpecs: {}
    });
  };

  const content = (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '1.25rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid var(--border-light)', marginBottom: '1.25rem' }}>
        <div style={{ fontSize: '0.95rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          FILTER CATALOG
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button onClick={handleReset} style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--accent-cobalt)', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
            <RotateCcw size={12} /> RESET
          </button>
          {isMobileSheet && (
            <button onClick={onClose} className="btn-icon">
              <X size={18} />
            </button>
          )}
        </div>
      </div>

      {/* Filter Sections Scrollable */}
      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingRight: '0.25rem' }}>
        {/* Category Selector */}
        <div>
          <label style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.05em', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.6rem' }}>
            CATEGORY
          </label>
          <select
            value={filters.category}
            onChange={(e) => setFilters((prev) => ({ ...prev, category: e.target.value, subcategory: '', customSpecs: {} }))}
            style={{ width: '100%', padding: '0.6rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', fontSize: '0.85rem', fontWeight: 600 }}
          >
            <option value="">All Marketplace Categories</option>
            {CATEGORIES.map((cat) => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>

        {/* Subcategories (If Category Selected) */}
        {currentCategory && (
          <div>
            <label style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.05em', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.6rem' }}>
              SUBCATEGORY
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              <button
                onClick={() => setFilters((prev) => ({ ...prev, subcategory: '' }))}
                style={{
                  padding: '0.35rem 0.65rem',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: filters.subcategory === '' ? 'var(--text-primary)' : 'var(--bg-secondary)',
                  color: filters.subcategory === '' ? '#FFFFFF' : 'var(--text-primary)'
                }}
              >
                All
              </button>
              {currentCategory.subcategories.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => setFilters((prev) => ({ ...prev, subcategory: sub.id }))}
                  style={{
                    padding: '0.35rem 0.65rem',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: filters.subcategory === sub.id ? 'var(--text-primary)' : 'var(--bg-secondary)',
                    color: filters.subcategory === sub.id ? '#FFFFFF' : 'var(--text-primary)'
                  }}
                >
                  {sub.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Brand Checkboxes */}
        <div>
          <label style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.05em', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.6rem' }}>
            BRAND
          </label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', maxHeight: '160px', overflowY: 'auto' }}>
            {BRANDS.map((b) => {
              const isChecked = filters.brands.includes(b.name);
              return (
                <label key={b.id} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.82rem', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleBrandToggle(b.name)}
                    style={{ accentColor: 'var(--accent-cobalt)' }}
                  />
                  <span>{b.name}</span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Dynamic Category-Specific Filters */}
        {filters.category === 'electronics' && (
          <div>
            <label style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.05em', color: 'var(--accent-cobalt)', textTransform: 'uppercase', display: 'block', marginBottom: '0.6rem' }}>
              TECH SPECIFICATIONS
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)' }}>RAM Memory</span>
                <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.3rem' }}>
                  {['8GB', '12GB', '32GB'].map((ram) => (
                    <button
                      key={ram}
                      onClick={() => handleCustomSpecChange('RAM', ram)}
                      style={{
                        padding: '0.25rem 0.5rem',
                        fontSize: '0.72rem',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: filters.customSpecs['RAM'] === ram ? 'var(--accent-cobalt)' : 'var(--bg-secondary)',
                        color: filters.customSpecs['RAM'] === ram ? '#FFFFFF' : 'var(--text-primary)'
                      }}
                    >
                      {ram}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {filters.category === 'fashion' && (
          <div>
            <label style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.05em', color: 'var(--accent-cobalt)', textTransform: 'uppercase', display: 'block', marginBottom: '0.6rem' }}>
              FASHION ATTRIBUTES
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Material</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.3rem' }}>
                  {['Leather', 'Cashmere', 'Silk', 'Knit'].map((mat) => (
                    <button
                      key={mat}
                      onClick={() => handleCustomSpecChange('Material', mat)}
                      style={{
                        padding: '0.25rem 0.5rem',
                        fontSize: '0.72rem',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: filters.customSpecs['Material'] === mat ? 'var(--accent-cobalt)' : 'var(--bg-secondary)',
                        color: filters.customSpecs['Material'] === mat ? '#FFFFFF' : 'var(--text-primary)'
                      }}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Rating Filter */}
        <div>
          <label style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.05em', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.6rem' }}>
            MINIMUM RATING
          </label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {[4.8, 4.5, 4.0].map((star) => (
              <label key={star} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', cursor: 'pointer' }}>
                <input
                  type="radio"
                  name="rating"
                  checked={filters.minRating === star}
                  onChange={() => setFilters((prev) => ({ ...prev, minRating: star }))}
                  style={{ accentColor: 'var(--accent-cobalt)' }}
                />
                <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                  <Star size={14} fill="var(--accent-amber)" color="var(--accent-amber)" />
                  <span>{star} & Above</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Checkbox Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.82rem', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={filters.discountOnly}
              onChange={(e) => setFilters((prev) => ({ ...prev, discountOnly: e.target.checked }))}
              style={{ accentColor: 'var(--accent-cobalt)' }}
            />
            <span>On Sale & Discounted Only</span>
          </label>
        </div>
      </div>
    </div>
  );

  if (isMobileSheet) {
    if (!isOpen) return null;
    return (
      <div
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(17, 24, 39, 0.5)',
          backdropFilter: 'blur(4px)',
          zIndex: 200,
          display: 'flex',
          justifyContent: 'flex-end'
        }}
        onClick={onClose}
      >
        <div
          style={{ width: '100%', maxWidth: '340px', height: '100%', backgroundColor: '#FFFFFF' }}
          onClick={(e) => e.stopPropagation()}
        >
          {content}
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border-light)',
        height: 'fit-content',
        position: 'sticky',
        top: '90px'
      }}
    >
      {content}
    </div>
  );
};
