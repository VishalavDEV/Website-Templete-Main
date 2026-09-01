import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import type { FilterState } from '../types';
import { FloatingFilterBar } from '../components/shop/FloatingFilterBar';
import { ProductCard } from '../components/shop/ProductCard';

export const ShopPage: React.FC = () => {
  const { products } = useShop();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const urlParams = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return {
      search: params.get('search') || '',
      mood: params.get('mood') || '',
      filter: params.get('filter') || '',
      sort: params.get('sort') || '',
    };
  }, [location.search]);

  const [filters, setFilters] = useState<FilterState>(() => ({
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
  }));

  // Sync searchQuery and sortBy from URL params if present
  const effectiveSortBy = urlParams.sort === 'newest' ? 'newest' : urlParams.sort === 'bestsellers' ? 'bestsellers' : filters.sortBy;
  const effectiveSearchQuery = urlParams.search || filters.searchQuery;

  // Filter products logic
  const filteredProducts = products.filter(p => {
    if (filters.gender !== 'all' && p.gender !== filters.gender) return false;
    if (filters.category !== 'All' && p.category !== filters.category) return false;
    if (filters.colors.length > 0 && !p.colors.some(c => filters.colors.includes(c.name))) return false;
    if (filters.sizes.length > 0 && !p.sizes.some(s => filters.sizes.includes(s))) return false;
    if (urlParams.mood && p.mood !== urlParams.mood) return false;
    if (urlParams.filter === 'new' && !p.newArrival) return false;
    if (urlParams.filter === 'bestsellers' && !p.bestSeller) return false;
    if (effectiveSearchQuery && !p.name.toLowerCase().includes(effectiveSearchQuery.toLowerCase()) && !p.category.toLowerCase().includes(effectiveSearchQuery.toLowerCase())) return false;
    return true;
  });

  // Sort products logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (effectiveSortBy === 'price-low') return a.price - b.price;
    if (effectiveSortBy === 'price-high') return b.price - a.price;
    if (effectiveSortBy === 'newest') return (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0);
    if (effectiveSortBy === 'bestsellers') return (b.bestSeller ? 1 : 0) - (a.bestSeller ? 1 : 0);
    return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
  });

  return (
    <main style={{ paddingTop: 'calc(var(--header-height) + 20px)', minHeight: '90vh' }}>
      <div className="container-custom" style={{ marginBottom: '24px' }}>
        <span style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'var(--accent-bronze)', fontWeight: '600', textTransform: 'uppercase' }}>
          CATALOGUE
        </span>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 5vw, 56px)', textTransform: 'uppercase', marginTop: '4px' }}>
          ALL PIECES
        </h1>
      </div>

      <FloatingFilterBar
        filters={filters}
        setFilters={setFilters}
        totalResults={sortedProducts.length}
      />

      <div className="container-custom" style={{ paddingBottom: '100px' }}>
        {sortedProducts.length > 0 ? (
          <div className="product-grid">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div style={{ padding: '80px 0', textAlign: 'center' }}>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)' }}>
              No products match your selected filters.
            </p>
          </div>
        )}
      </div>
    </main>
  );
};
