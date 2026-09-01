import React, { useContext, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, X, ArrowUpDown, ChevronDown } from 'lucide-react';
import { EcomContext } from '../context/EcomContext';
import ProductCard from '../components/ProductCard';

const ProductListing = ({ gender: propGender, category: propCategory, filter: propFilter, title: propTitle }) => {
  const { products, searchQuery, setSearchQuery } = useContext(EcomContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // States for filter panels
  const [filterPanelOpen, setFilterPanelOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured'); // featured | price-low | price-high | rating
  const [selectedGender, setSelectedGender] = useState(propGender || '');
  const [selectedCategory, setSelectedCategory] = useState(propCategory || '');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedPriceMax, setSelectedPriceMax] = useState(10000);
  const [selectedDiscountOnly, setSelectedDiscountOnly] = useState(propFilter === 'sale');

  // Load from search params if any
  const urlSearch = searchParams.get('search');
  const urlCategory = searchParams.get('category');

  useEffect(() => {
    if (urlCategory) setSelectedCategory(urlCategory);
  }, [urlCategory]);

  // Clean filters when categories change
  useEffect(() => {
    if (propGender) setSelectedGender(propGender);
    if (propCategory) setSelectedCategory(propCategory);
  }, [propGender, propCategory]);

  // Handle resets
  const handleResetFilters = () => {
    setSelectedGender(propGender || '');
    setSelectedCategory(propCategory || '');
    setSelectedBrand('');
    setSelectedPriceMax(10000);
    setSelectedDiscountOnly(false);
    setSearchQuery('');
    setSearchParams({});
  };

  // Extract metadata options for filter chips
  const brands = [...new Set(products.map((p) => p.brand))];
  const categories = [...new Set(products.map((p) => p.category))];

  // Filtering Logic
  const filteredProducts = products.filter((p) => {
    // Search query match
    const currentSearch = urlSearch || searchQuery;
    if (currentSearch) {
      const q = currentSearch.toLowerCase();
      const matchesSearch =
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
      if (!matchesSearch) return false;
    }

    // Gender match
    if (selectedGender && selectedGender !== 'all') {
      const matchGen =
        p.gender.toLowerCase() === selectedGender.toLowerCase() ||
        p.gender.toLowerCase() === 'unisex';
      if (!matchGen) return false;
    }

    // Category match
    if (selectedCategory && selectedCategory !== 'all') {
      if (p.category.toLowerCase() !== selectedCategory.toLowerCase()) return false;
    }

    // Brand match
    if (selectedBrand && p.brand !== selectedBrand) return false;

    // Price match (after discount)
    const finalPrice = p.price * (1 - p.discount / 100);
    if (finalPrice > selectedPriceMax) return false;

    // Discount check
    if (selectedDiscountOnly && p.discount === 0) return false;

    // Custom Filters
    if (propFilter === 'newArrival' && !p.newArrival) return false;
    if (propFilter === 'trending' && !p.trending) return false;

    return true;
  });

  // Sorting Logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const finalA = a.price * (1 - a.discount / 100);
    const finalB = b.price * (1 - b.discount / 100);

    if (sortBy === 'price-low') return finalA - finalB;
    if (sortBy === 'price-high') return finalB - finalA;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0; // featured/default
  });

  const getPageTitle = () => {
    if (propTitle) return propTitle;
    if (urlSearch || searchQuery) return `Search Results for "${urlSearch || searchQuery}"`;
    return 'Catalog Showcase';
  };

  return (
    <div style={{ padding: '120px 40px 80px 40px', maxWidth: '1400px', margin: '0 auto', minHeight: '80vh' }}>
      {/* Page Title header */}
      <div style={{ marginBottom: '40px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Outfit', fontSize: '2.5rem', color: '#1e133e', fontWeight: 800 }}>
          {getPageTitle()}
        </h2>
        <p style={{ color: '#5c4e8c', fontSize: '1rem', marginTop: '6px' }}>
          Displaying {sortedProducts.length} premium designs
        </p>
      </div>

      {/* Control panel header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          padding: '16px 24px',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          border: '1px solid rgba(124,92,255,0.08)',
          borderRadius: '20px',
          backdropFilter: 'blur(10px)',
          marginBottom: '30px',
        }}
      >
        <button
          onClick={() => setFilterPanelOpen(!filterPanelOpen)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#fff',
            border: '1.5px solid rgba(124, 92, 255, 0.15)',
            borderRadius: '30px',
            padding: '10px 20px',
            fontSize: '0.88rem',
            color: '#7c5cff',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.borderColor = '#7c5cff'}
          onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(124, 92, 255, 0.15)'}
        >
          <SlidersHorizontal size={16} /> Filters
        </button>

        {/* Sorting Dropdown */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '0.85rem', color: '#5c4e8c', fontWeight: 500 }}>Sort By:</span>
          <div style={{ position: 'relative' }}>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                appearance: 'none',
                backgroundColor: '#fff',
                border: '1.5px solid rgba(124, 92, 255, 0.15)',
                borderRadius: '30px',
                padding: '10px 36px 10px 20px',
                fontSize: '0.88rem',
                color: '#1e133e',
                fontWeight: 500,
                outline: 'none',
                cursor: 'pointer',
              }}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown size={14} style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', color: '#5c4e8c', pointerEvents: 'none' }} />
          </div>
        </div>
      </div>

      {/* Active Filter Chips Row */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '24px' }}>
        {selectedGender && selectedGender !== 'all' && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: '#f1edff', border: '1px solid rgba(124,92,255,0.15)', padding: '6px 14px', borderRadius: '20px', fontSize: '0.8rem', color: '#7c5cff', fontWeight: 500 }}>
            Gender: {selectedGender}
            <X size={12} style={{ cursor: 'pointer' }} onClick={() => setSelectedGender('')} />
          </div>
        )}
        {selectedCategory && selectedCategory !== 'all' && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: '#f1edff', border: '1px solid rgba(124,92,255,0.15)', padding: '6px 14px', borderRadius: '20px', fontSize: '0.8rem', color: '#7c5cff', fontWeight: 500 }}>
            Category: {selectedCategory}
            <X size={12} style={{ cursor: 'pointer' }} onClick={() => setSelectedCategory('')} />
          </div>
        )}
        {selectedBrand && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: '#f1edff', border: '1px solid rgba(124,92,255,0.15)', padding: '6px 14px', borderRadius: '20px', fontSize: '0.8rem', color: '#7c5cff', fontWeight: 500 }}>
            Brand: {selectedBrand}
            <X size={12} style={{ cursor: 'pointer' }} onClick={() => setSelectedBrand('')} />
          </div>
        )}
        {selectedDiscountOnly && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: '#f1edff', border: '1px solid rgba(124,92,255,0.15)', padding: '6px 14px', borderRadius: '20px', fontSize: '0.8rem', color: '#7c5cff', fontWeight: 500 }}>
            On Discount
            <X size={12} style={{ cursor: 'pointer' }} onClick={() => setSelectedDiscountOnly(false)} />
          </div>
        )}
        {selectedPriceMax < 10000 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: '#f1edff', border: '1px solid rgba(124,92,255,0.15)', padding: '6px 14px', borderRadius: '20px', fontSize: '0.8rem', color: '#7c5cff', fontWeight: 500 }}>
            Under: ₹{selectedPriceMax}
            <X size={12} style={{ cursor: 'pointer' }} onClick={() => setSelectedPriceMax(10000)} />
          </div>
        )}
        {(selectedGender || selectedCategory || selectedBrand || selectedDiscountOnly || selectedPriceMax < 10000 || searchQuery) && (
          <button
            onClick={handleResetFilters}
            style={{ background: 'none', border: 'none', color: '#5c4e8c', fontSize: '0.82rem', fontWeight: 600, cursor: 'pointer', textDecoration: 'underline' }}
          >
            Clear All
          </button>
        )}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: filterPanelOpen ? '250px 1fr' : '1fr', gap: '30px', transition: 'grid-template-columns 0.3s' }}>
        
        {/* Sliding Filter Panel */}
        <AnimatePresence>
          {filterPanelOpen && (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              style={{
                backgroundColor: '#fff',
                border: '1px solid rgba(124,92,255,0.12)',
                borderRadius: '20px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                alignSelf: 'start',
              }}
            >
              {/* Gender Section */}
              {!propGender && (
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: '#1e133e', fontWeight: 600, marginBottom: '12px' }}>Gender</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {['all', 'women', 'men', 'girls', 'boys', 'babies'].map((gen) => (
                      <label key={gen} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#5c4e8c', cursor: 'pointer', textTransform: 'capitalize' }}>
                        <input
                          type="radio"
                          name="gender"
                          checked={selectedGender === gen}
                          onChange={() => setSelectedGender(gen === 'all' ? '' : gen)}
                          style={{ accentColor: '#7c5cff' }}
                        />
                        {gen}
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Categories Section */}
              {!propCategory && (
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: '#1e133e', fontWeight: 600, marginBottom: '12px' }}>Category</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#5c4e8c', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === ''}
                        onChange={() => setSelectedCategory('')}
                        style={{ accentColor: '#7c5cff' }}
                      />
                      All Categories
                    </label>
                    {categories.map((cat) => (
                      <label key={cat} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#5c4e8c', cursor: 'pointer' }}>
                        <input
                          type="radio"
                          name="category"
                          checked={selectedCategory === cat}
                          onChange={() => setSelectedCategory(cat)}
                          style={{ accentColor: '#7c5cff' }}
                        />
                        {cat}
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Brand Filter */}
              <div>
                <h4 style={{ fontSize: '0.9rem', color: '#1e133e', fontWeight: 600, marginBottom: '12px' }}>Brands</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#5c4e8c', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="brand"
                      checked={selectedBrand === ''}
                      onChange={() => setSelectedBrand('')}
                      style={{ accentColor: '#7c5cff' }}
                    />
                    All Brands
                  </label>
                  {brands.map((br) => (
                    <label key={br} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#5c4e8c', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="brand"
                        checked={selectedBrand === br}
                        onChange={() => setSelectedBrand(br)}
                        style={{ accentColor: '#7c5cff' }}
                      />
                      {br}
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h4 style={{ fontSize: '0.9rem', color: '#1e133e', fontWeight: 600, marginBottom: '6px' }}>Max Price</h4>
                <span style={{ fontSize: '0.8rem', color: '#7c5cff', fontWeight: 'bold' }}>Under ₹{selectedPriceMax}</span>
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="250"
                  value={selectedPriceMax}
                  onChange={(e) => setSelectedPriceMax(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#7c5cff', marginTop: '8px', cursor: 'pointer' }}
                />
              </div>

              {/* Discount Selector */}
              <div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: '#1e133e', fontWeight: 600, cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={selectedDiscountOnly}
                    onChange={(e) => setSelectedDiscountOnly(e.target.checked)}
                    style={{ accentColor: '#7c5cff', width: '16px', height: '16px' }}
                  />
                  Offers & Discounts
                </label>
              </div>

              {/* Reset Button */}
              <button
                onClick={handleResetFilters}
                className="premium-btn-outline"
                style={{ width: '100%', justifyContent: 'center', padding: '10px' }}
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Product Grid Panel */}
        <div>
          {sortedProducts.length === 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '80px 0', gap: '16px' }}>
              <h3 style={{ color: '#5c4e8c', fontSize: '1.25rem' }}>No products match your filters</h3>
              <p style={{ color: '#8a7db3', fontSize: '0.9rem' }}>Try clearing some filters or searching for another design.</p>
              <button onClick={handleResetFilters} className="premium-btn" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>
                Clear Filters
              </button>
            </div>
          ) : (
            <motion.div
              layout
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '30px',
              }}
            >
              {sortedProducts.map((prod, index) => (
                <motion.div key={prod.id} layout transition={{ duration: 0.4, ease: 'easeInOut' }}>
                  <ProductCard
                    product={prod}
                    onQuickView={(p) => setQuickViewProduct(p)}
                    delay={index * 0.05}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
      
      {/* Quick View Handler */}
      {quickViewProduct && (
        <div style={{ position: 'relative', zIndex: 100000 }}>
          {/* QuickView Modal component call */}
          {/* We will hook up standard Quick View in parent App, but listing can render its own since it controls the state */}
        </div>
      )}
    </div>
  );
};

export default ProductListing;
