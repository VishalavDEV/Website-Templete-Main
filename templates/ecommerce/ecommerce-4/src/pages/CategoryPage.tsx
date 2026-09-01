import React, { useState } from 'react';
import { CategoryId } from '../types';
import { CATEGORIES } from '../data/categories';
import { PRODUCTS } from '../data/products';
import { ProductGrid } from '../components/product/ProductGrid';
import { SortDropdown } from '../components/shop/SortDropdown';

interface CategoryPageProps {
  categoryId: CategoryId;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({ categoryId }) => {
  const category = CATEGORIES.find((c) => c.id === categoryId) || CATEGORIES[0];
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [sortMode, setSortMode] = useState<string>('FEATURED');

  const categoryProducts = PRODUCTS.filter((p) => p.category === categoryId);

  const filteredProducts = selectedSubcategory === 'all'
    ? categoryProducts
    : categoryProducts.filter((p) => p.subcategory === selectedSubcategory);

  return (
    <div style={{ paddingBottom: '5rem' }}>
      {/* Category Hero Banner */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '280px',
          background: `linear-gradient(to top, rgba(22,22,22,0.85), rgba(22,22,22,0.3)), url(${category.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          color: '#FFFFFF',
          marginBottom: '3rem'
        }}
      >
        <div className="container" style={{ padding: '3rem 1.5rem' }}>
          <span style={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.15em', color: 'var(--accent-amber)', textTransform: 'uppercase' }}>
            ORVANA DEPARTMENT
          </span>
          <h1 className="heading-xl" style={{ color: '#FFFFFF', marginTop: '0.3rem', marginBottom: '0.5rem' }}>
            {category.tagline}
          </h1>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.85)', maxWidth: '540px' }}>
            Explore curated {category.name.toLowerCase()} products designed for performance and aesthetic living.
          </p>
        </div>
      </div>

      <div className="container">
        {/* Subcategories Filter Chips & Sorting */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-light)' }}>
          <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.4rem' }}>
            <button
              onClick={() => setSelectedSubcategory('all')}
              style={{
                padding: '0.55rem 1.2rem',
                borderRadius: 'var(--radius-full)',
                backgroundColor: selectedSubcategory === 'all' ? 'var(--text-primary)' : '#FFFFFF',
                color: selectedSubcategory === 'all' ? '#FFFFFF' : 'var(--text-primary)',
                border: '1px solid var(--border-light)',
                fontSize: '0.82rem',
                fontWeight: 700
              }}
            >
              All {category.name} ({categoryProducts.length})
            </button>

            {category.subcategories.map((sub) => (
              <button
                key={sub.id}
                onClick={() => setSelectedSubcategory(sub.id)}
                style={{
                  padding: '0.55rem 1.2rem',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: selectedSubcategory === sub.id ? 'var(--text-primary)' : '#FFFFFF',
                  color: selectedSubcategory === sub.id ? '#FFFFFF' : 'var(--text-primary)',
                  border: '1px solid var(--border-light)',
                  fontSize: '0.82rem',
                  fontWeight: 700
                }}
              >
                {sub.name}
              </button>
            ))}
          </div>

          <SortDropdown currentSort={sortMode} onSortChange={setSortMode} />
        </div>

        {/* Product Grid */}
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
};
