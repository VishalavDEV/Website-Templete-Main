import React, { useState, useMemo, useContext, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import ProductGrid from '../components/ProductGrid';
import { SlidersHorizontal, X, ChevronRight, RotateCcw } from 'lucide-react';

export default function Shop() {
  const { products, formatPrice } = useContext(ShopContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCategoryParam = searchParams.get('category') || 'All';
  const selectedCollectionParam = searchParams.get('collection') || 'All';
  const selectedMetalParam = searchParams.get('metal') || 'All';

  const [categoryFilter, setCategoryFilter] = useState(selectedCategoryParam);
  const [collectionFilter, setCollectionFilter] = useState(selectedCollectionParam);
  const [metalFilter, setMetalFilter] = useState(selectedMetalParam);
  const [maxPrice, setMaxPrice] = useState(100000);
  const [sortBy, setSortBy] = useState('featured');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    setCategoryFilter(searchParams.get('category') || 'All');
    setCollectionFilter(searchParams.get('collection') || 'All');
    setMetalFilter(searchParams.get('metal') || 'All');
  }, [searchParams]);

  const handleCategoryChange = (cat) => {
    setCategoryFilter(cat);
    const newParams = new URLSearchParams(searchParams);
    if (cat === 'All') newParams.delete('category');
    else newParams.set('category', cat);
    setSearchParams(newParams);
  };

  const handleResetFilters = () => {
    setCategoryFilter('All');
    setCollectionFilter('All');
    setMetalFilter('All');
    setMaxPrice(100000);
    setSortBy('featured');
    setSearchParams({});
  };

  const filteredProducts = useMemo(() => {
    let list = [...products];

    if (categoryFilter !== 'All') {
      list = list.filter((p) => p.category.toLowerCase() === categoryFilter.toLowerCase());
    }

    if (collectionFilter !== 'All') {
      list = list.filter((p) => p.collection.toLowerCase() === collectionFilter.toLowerCase());
    }

    if (metalFilter !== 'All') {
      list = list.filter((p) => p.material.toLowerCase().includes(metalFilter.toLowerCase()));
    }

    list = list.filter((p) => p.price <= maxPrice);

    switch (sortBy) {
      case 'newest':
        list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case 'price-low':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        list.sort((a, b) => b.rating - a.rating);
        break;
      default:
        list.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
    }

    return list;
  }, [products, categoryFilter, collectionFilter, metalFilter, maxPrice, sortBy]);

  const categories = ['All', 'Rings', 'Necklaces', 'Earrings', 'Bracelets', 'Bridal', "Men's Jewellery"];
  const metals = ['All', '18K Yellow Gold & Emerald', '18K Yellow Gold', 'Platinum & Emerald', 'Freshwater Pearl'];
  const collections = ['All', 'Signature', 'Emerald Edit', 'Celestial', 'Pearl', 'Bridal', 'Everyday Luxury', "Men's", 'Personalised'];

  const hasActiveFilters = categoryFilter !== 'All' || collectionFilter !== 'All' || metalFilter !== 'All' || maxPrice < 100000;

  return (
    <div style={{ backgroundColor: 'var(--ivory)', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* Top Banner in Deep Emerald */}
      <div
        style={{
          background: '#064E3B',
          color: '#FAF7F0',
          padding: '4.5rem 1.5rem 3.5rem 1.5rem',
          textAlign: 'center',
          borderBottom: '1px solid var(--border-gold)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--gold-light)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
          <Link to="/" style={{ color: 'var(--gold-light)', textDecoration: 'none' }}>HOME</Link>
          <ChevronRight size={12} />
          <span>CATALOGUE</span>
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
            letterSpacing: '0.15em',
            color: '#FAF7F0'
          }}
        >
          SHOP JEWELLERY
        </h1>
        <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.15rem', color: '#D4DEC9', marginTop: '0.4rem' }}>
          Handcrafted in solid 18K gold, platinum, and Zambian emeralds.
        </p>
      </div>

      <div className="container-custom" style={{ paddingTop: '3rem' }}>
        {/* Controls Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2rem',
            paddingBottom: '1rem',
            borderBottom: '1px solid var(--border-gold)',
            gap: '1rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.6rem 1.2rem',
                border: '1px solid var(--border-gold)',
                background: '#ffffff',
                fontSize: '0.8rem',
                fontWeight: '600',
                cursor: 'pointer',
                color: 'var(--emerald-deep)'
              }}
              className="lg:hidden"
            >
              <SlidersHorizontal size={16} style={{ color: 'var(--gold-primary)' }} /> Filter Designs
            </button>

            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Showing {filteredProducts.length} of {products.length} designs
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--emerald-deep)', fontWeight: '600' }}>Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: '0.6rem 1.2rem',
                border: '1px solid var(--border-gold)',
                background: '#ffffff',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.82rem',
                color: 'var(--emerald-deep)',
                outline: 'none',
                cursor: 'pointer',
                fontWeight: '600'
              }}
            >
              <option value="featured">Featured & Bestseller</option>
              <option value="newest">Newest Releases</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Active Filter Chips */}
        {hasActiveFilters && (
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.6rem', marginBottom: '2rem' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Active Filters:</span>

            {categoryFilter !== 'All' && (
              <span className="badge-gold" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                Category: {categoryFilter}
                <X size={12} style={{ cursor: 'pointer' }} onClick={() => handleCategoryChange('All')} />
              </span>
            )}

            {collectionFilter !== 'All' && (
              <span className="badge-gold" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                Collection: {collectionFilter}
                <X size={12} style={{ cursor: 'pointer' }} onClick={() => setCollectionFilter('All')} />
              </span>
            )}

            {metalFilter !== 'All' && (
              <span className="badge-gold" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                Metal: {metalFilter}
                <X size={12} style={{ cursor: 'pointer' }} onClick={() => setMetalFilter('All')} />
              </span>
            )}

            <button
              onClick={handleResetFilters}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--gold-dark)',
                fontSize: '0.78rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                marginLeft: '0.5rem',
                textDecoration: 'underline',
                fontWeight: '600'
              }}
            >
              <RotateCcw size={12} /> Clear All
            </button>
          </div>
        )}

        {/* Grid Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2.5rem' }}>
          
          {/* Sidebar */}
          <aside
            style={{
              gridColumn: 'span 3',
              display: 'none',
              flexDirection: 'column',
              gap: '2.2rem',
              background: '#ffffff',
              padding: '2rem',
              border: '1px solid var(--border-gold)',
              height: 'fit-content',
              boxShadow: 'var(--shadow-sm)'
            }}
            className="desktop-filter-sidebar"
          >
            <div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', letterSpacing: '0.15em', color: 'var(--gold-dark)', textTransform: 'uppercase', marginBottom: '1rem', borderBottom: '1px solid var(--border-gold)', paddingBottom: '0.4rem', fontWeight: '700' }}>
                Category
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    style={{
                      textAlign: 'left',
                      background: 'none',
                      border: 'none',
                      fontSize: '0.85rem',
                      color: categoryFilter.toLowerCase() === cat.toLowerCase() ? 'var(--gold-dark)' : 'var(--emerald-deep)',
                      fontWeight: categoryFilter.toLowerCase() === cat.toLowerCase() ? '700' : '400',
                      cursor: 'pointer'
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Slider */}
            <div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', letterSpacing: '0.15em', color: 'var(--gold-dark)', textTransform: 'uppercase', marginBottom: '1rem', borderBottom: '1px solid var(--border-gold)', paddingBottom: '0.4rem', fontWeight: '700' }}>
                Max Price: {formatPrice(maxPrice)}
              </h4>
              <input
                type="range"
                min="10000"
                max="100000"
                step="5000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--emerald-deep)', cursor: 'pointer' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
                <span>₹10,000</span>
                <span>₹1,00,000</span>
              </div>
            </div>

            {/* Metal Filter */}
            <div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', letterSpacing: '0.15em', color: 'var(--gold-dark)', textTransform: 'uppercase', marginBottom: '1rem', borderBottom: '1px solid var(--border-gold)', paddingBottom: '0.4rem', fontWeight: '700' }}>
                Precious Metal
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {metals.map((m) => (
                  <button
                    key={m}
                    onClick={() => setMetalFilter(m)}
                    style={{
                      textAlign: 'left',
                      background: 'none',
                      border: 'none',
                      fontSize: '0.85rem',
                      color: metalFilter === m ? 'var(--gold-dark)' : 'var(--emerald-deep)',
                      fontWeight: metalFilter === m ? '700' : '400',
                      cursor: 'pointer'
                    }}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            {/* Collection Filter */}
            <div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', letterSpacing: '0.15em', color: 'var(--gold-dark)', textTransform: 'uppercase', marginBottom: '1rem', borderBottom: '1px solid var(--border-gold)', paddingBottom: '0.4rem', fontWeight: '700' }}>
                Collections
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {collections.map((col) => (
                  <button
                    key={col}
                    onClick={() => setCollectionFilter(col)}
                    style={{
                      textAlign: 'left',
                      background: 'none',
                      border: 'none',
                      fontSize: '0.85rem',
                      color: collectionFilter.toLowerCase() === col.toLowerCase() ? 'var(--gold-dark)' : 'var(--emerald-deep)',
                      fontWeight: collectionFilter.toLowerCase() === col.toLowerCase() ? '700' : '400',
                      cursor: 'pointer'
                    }}
                  >
                    {col}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <main style={{ gridColumn: 'span 12' }} className="shop-grid-area">
            <ProductGrid products={filteredProducts} columns={3} />
          </main>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .desktop-filter-sidebar {
            display: flex !important;
          }
          .shop-grid-area {
            grid-column: span 9 !important;
          }
        }
      `}</style>
    </div>
  );
}
