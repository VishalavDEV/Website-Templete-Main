import React, { useState, useMemo } from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { ProductGrid } from '../components/product/ProductGrid';
import { FilterPanel } from '../components/shop/FilterPanel';
import { SortDropdown } from '../components/shop/SortDropdown';
import { FilterState } from '../types';

export const ShopPage: React.FC = () => {
  const { searchQuery } = useShop();

  const initialFilterState: FilterState = {
    category: '',
    subcategory: '',
    brands: [],
    priceRange: [0, 120000],
    minRating: 0,
    discountOnly: false,
    inStockOnly: false,
    searchQuery: searchQuery || '',
    customSpecs: {}
  };

  const [filters, setFilters] = useState<FilterState>(initialFilterState);
  const [sortMode, setSortMode] = useState<string>('FEATURED');

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (filters.brands.length > 0) {
      result = result.filter((p) => filters.brands.includes(p.brand));
    }

    result = result.filter(
      (p) => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    );

    if (filters.discountOnly) {
      result = result.filter((p) => p.discount > 0);
    }

    if (filters.inStockOnly) {
      result = result.filter((p) => p.stock > 0);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    // Sort
    switch (sortMode) {
      case 'NEWEST':
        return result.sort((a, b) => (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0));
      case 'BESTSELLING':
        return result.sort((a, b) => b.reviewCount - a.reviewCount);
      case 'BEST_RATED':
        return result.sort((a, b) => b.rating - a.rating);
      case 'PRICE_LOW_HIGH':
        return result.sort((a, b) => a.price - b.price);
      case 'PRICE_HIGH_LOW':
        return result.sort((a, b) => b.price - a.price);
      case 'BIGGEST_DISCOUNT':
        return result.sort((a, b) => b.discount - a.discount);
      case 'FEATURED':
      default:
        return result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
  }, [filters, sortMode, searchQuery]);

  return (
    <div style={{ padding: '2.5rem 0 5rem' }}>
      <div className="container">
        {/* Header Title */}
        <div style={{ marginBottom: '2rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1.5rem' }}>
          <span style={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.15em', color: 'var(--accent-blue)', textTransform: 'uppercase' }}>
            ORVANA CATALOG
          </span>
          <h1 className="heading-xl" style={{ marginTop: '0.2rem' }}>EXPLORE EVERYTHING</h1>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.4rem' }}>
            Showing {filteredProducts.length} items across electronics, fashion, home, beauty, sports and everyday essentials.
          </p>
        </div>

        {/* Catalog Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '2rem' }}>
          <FilterPanel
            filters={filters}
            onFilterChange={setFilters}
            onReset={() => setFilters(initialFilterState)}
          />

          <div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1.5rem' }}>
              <SortDropdown currentSort={sortMode} onSortChange={setSortMode} />
            </div>

            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </div>
    </div>
  );
};
