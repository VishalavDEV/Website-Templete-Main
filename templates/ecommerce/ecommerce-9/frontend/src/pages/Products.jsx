import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Grid, List, SlidersHorizontal, Search, RefreshCw } from 'lucide-react';
import { fetchProducts, formatINR } from '../services/api';
import PageTransition from '../components/PageTransition';
import ProductCard from '../components/ProductCard';
import ProductImage from '../components/ProductImage';

const Products = () => {
  const { categoryName } = useParams(); // For /category/:categoryName
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filters State
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [maxPrice, setMaxPrice] = useState(500000);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState('default'); // default, price-asc, price-desc, rating, discount
  const [isListView, setIsListView] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Load products on mount
  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const data = await fetchProducts();
        setAllProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // Update selected category based on route params or search params
  useEffect(() => {
    if (categoryName) {
      setSelectedCategory(categoryName);
    } else {
      const catParam = searchParams.get('category');
      if (catParam) {
        setSelectedCategory(catParam);
      } else {
        setSelectedCategory('all');
      }
    }
  }, [categoryName, searchParams, location]);

  // Apply filters and sorting
  useEffect(() => {
    let result = [...allProducts];

    // 1. Search Query
    if (searchTerm.trim() !== '') {
      const q = searchTerm.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.brand.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q)
      );
    }

    // 2. Category Filter
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    // 3. Brand Filter
    if (selectedBrand !== 'all') {
      result = result.filter(p => p.brand.toLowerCase() === selectedBrand.toLowerCase());
    }

    // 4. Price range Filter
    result = result.filter(p => p.price <= maxPrice);

    // 5. Rating Filter
    result = result.filter(p => p.rating >= minRating);

    // 6. Sorting
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'discount') {
      result.sort((a, b) => b.discount - a.discount);
    }

    setFilteredProducts(result);
  }, [allProducts, searchTerm, selectedCategory, selectedBrand, maxPrice, minRating, sortBy]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedBrand('all');
    setMaxPrice(500000);
    setMinRating(0);
    setSortBy('default');
  };

  // Get list of unique brands
  const brands = ['all', ...new Set(allProducts.map(p => p.brand))];
  const categories = [
    { key: 'all', name: 'ALL CHANNELS' },
    { key: 'tv', name: 'SMART TVS' },
    { key: 'mobiles', name: 'SMARTPHONES' },
    { key: 'laptops', name: 'LAPTOPS' },
    { key: 'audio', name: 'AUDIO SYSTEMS' },
    { key: 'cameras', name: 'CAMERAS' },
    { key: 'smart-watches', name: 'WEARABLES' },
    { key: 'gaming', name: 'GAMING SYSTEMS' },
    { key: 'appliances', name: 'APPLIANCES' }
  ];

  return (
    <PageTransition>
      <div style={{ padding: '40px 5%', position: 'relative' }}>
        <div className="circuit-bg" />

        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 className="glow-text" style={{ fontSize: '32px', fontFamily: 'var(--font-tech)' }}>
            DISCOVER YOUR NEXT DEVICE
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '14px', marginTop: '10px' }}>
            System database active. Syncing terminal filters.
          </p>
        </div>

        {/* Control Bar: Search & Sort toggles */}
        <div className="glass-panel" style={{
          padding: '15px 25px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '15px',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '30px',
          borderRadius: '10px'
        }}>
          {/* Left search */}
          <div style={{ position: 'relative', flex: '1 1 300px' }}>
            <input
              type="text"
              placeholder="SEARCH NODE DIRECTORY..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 15px 10px 40px',
                backgroundColor: 'rgba(3, 7, 18, 0.4)',
                border: '1px solid rgba(0, 240, 255, 0.25)',
                borderRadius: '6px',
                color: '#fff',
                outline: 'none',
                fontFamily: 'var(--font-tech)',
                fontSize: '12px'
              }}
            />
            <Search size={16} color="rgba(0, 240, 255, 0.5)" style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)' }} />
          </div>

          {/* Right layout toggles */}
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', color: '#94a3b8', fontFamily: 'var(--font-tech)' }}>SORT:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                backgroundColor: 'rgba(3, 7, 18, 0.7)',
                border: '1px solid rgba(0, 240, 255, 0.2)',
                borderRadius: '6px',
                color: '#fff',
                padding: '8px 12px',
                fontSize: '12px',
                fontFamily: 'var(--font-tech)',
                outline: 'none'
              }}
            >
              <option value="default">DEFAULT TELEMETRY</option>
              <option value="price-asc">PRICE: LOW TO HIGH</option>
              <option value="price-desc">PRICE: HIGH TO LOW</option>
              <option value="rating">RATING METRIC</option>
              <option value="discount">FLASH DISCOUNT</option>
            </select>

            <button
              onClick={() => setIsListView(!isListView)}
              style={{
                background: 'rgba(3, 7, 18, 0.4)',
                border: '1px solid rgba(0, 240, 255, 0.2)',
                borderRadius: '6px',
                color: '#00f0ff',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              {isListView ? <Grid size={16} /> : <List size={16} />}
            </button>
          </div>
        </div>

        {/* Main Columns */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '30px'
        }}>
          {/* 1. FILTER SIDEBAR PANEL */}
          <div className="glass-panel" style={{
            flex: '1 1 250px',
            padding: '25px',
            borderRadius: '12px',
            height: 'fit-content',
            display: 'flex',
            flexDirection: 'column',
            gap: '25px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '13px', color: '#00f0ff', fontFamily: 'var(--font-tech)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SlidersHorizontal size={14} /> FILTER PANEL
              </h3>
              <button onClick={resetFilters} style={{ background: 'none', border: 'none', color: '#64748b', fontSize: '11px', cursor: 'pointer', fontFamily: 'var(--font-tech)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <RefreshCw size={10} /> RESET
              </button>
            </div>

            {/* Category Select */}
            <div>
              <h4 style={{ fontSize: '11px', color: '#fff', marginBottom: '10px' }}>SYSTEM CHANNELS</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {categories.map((c) => (
                  <button
                    key={c.key}
                    onClick={() => setSelectedCategory(c.key)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: selectedCategory === c.key ? '#00f0ff' : '#94a3b8',
                      fontSize: '12px',
                      fontFamily: 'var(--font-tech)',
                      textAlign: 'left',
                      cursor: 'pointer',
                      padding: '6px 8px',
                      borderRadius: '4px',
                      backgroundColor: selectedCategory === c.key ? 'rgba(0, 240, 255, 0.08)' : 'transparent',
                      transition: 'all 0.2s'
                    }}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Brand Select */}
            <div>
              <h4 style={{ fontSize: '11px', color: '#fff', marginBottom: '10px' }}>MANUFACTURER</h4>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                style={{
                  width: '100%',
                  backgroundColor: 'rgba(3, 7, 18, 0.7)',
                  border: '1px solid rgba(0, 240, 255, 0.2)',
                  borderRadius: '6px',
                  color: '#fff',
                  padding: '8px 12px',
                  fontSize: '12px',
                  fontFamily: 'var(--font-tech)',
                  outline: 'none'
                }}
              >
                {brands.map((b, i) => (
                  <option key={i} value={b}>{b.toUpperCase()}</option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#fff', marginBottom: '10px' }}>
                <span>MAX CRITICAL PRICE</span>
                <span style={{ color: '#00f0ff', fontFamily: 'var(--font-tech)' }}>{formatINR(maxPrice)}</span>
              </div>
              <input
                type="range"
                min="5000"
                max="500000"
                step="5000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: '#00f0ff',
                  background: '#1e293b',
                  height: '4px',
                  borderRadius: '2px',
                  cursor: 'pointer'
                }}
              />
            </div>

            {/* Rating Filter */}
            <div>
              <h4 style={{ fontSize: '11px', color: '#fff', marginBottom: '10px' }}>MINIMUM RATING</h4>
              <div style={{ display: 'flex', gap: '8px' }}>
                {[0, 3, 4, 4.5].map((val) => (
                  <button
                    key={val}
                    onClick={() => setMinRating(val)}
                    style={{
                      flex: '1',
                      padding: '6px 0',
                      backgroundColor: minRating === val ? 'rgba(0, 240, 255, 0.15)' : 'rgba(3, 7, 18, 0.4)',
                      border: minRating === val ? '1px solid #00f0ff' : '1px solid rgba(0, 240, 255, 0.12)',
                      borderRadius: '4px',
                      color: minRating === val ? '#00f0ff' : '#94a3b8',
                      fontSize: '11px',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    {val === 0 ? 'ALL' : `${val}★`}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 2. PRODUCT GRID SECTION */}
          <div style={{ flex: '1 1 65%', minWidth: '300px' }}>
            {loading ? (
              <div style={{ textAlign: 'center', padding: '100px 0' }}>
                <div style={{
                  width: '45px',
                  height: '45px',
                  margin: '0 auto',
                  border: '2px solid rgba(0, 240, 255, 0.2)',
                  borderTopColor: '#00f0ff',
                  borderRadius: '50%',
                  animation: 'spin 1s infinite linear'
                }} />
              </div>
            ) : (
              <div>
                {/* Active results tally */}
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748b', fontSize: '12px', marginBottom: '20px' }}>
                  <span>DATABASE INDEX SYNCED</span>
                  <span>{filteredProducts.length} DEVICES AVAILABLE</span>
                </div>

                <motion.div layout>
                  <AnimatePresence mode="popLayout">
                    {filteredProducts.length > 0 ? (
                      /* Grid or List View renders */
                      !isListView ? (
                        <motion.div
                          key="grid"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="showroom-grid"
                        >
                          {filteredProducts.map((p) => (
                            <motion.div
                              layout
                              key={p.id}
                              initial={{ opacity: 0, scale: 0.9, y: 15 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.9, y: 15 }}
                              transition={{ duration: 0.4 }}
                            >
                              <ProductCard product={p} />
                            </motion.div>
                          ))}
                        </motion.div>
                      ) : (
                        /* LIST VIEW */
                        <motion.div
                          key="list"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
                        >
                          {filteredProducts.map((p) => (
                            <motion.div
                              layout
                              key={p.id}
                              initial={{ opacity: 0, x: -15 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 15 }}
                              transition={{ duration: 0.4 }}
                            >
                              <Link to={`/product/${p.id}`} style={{ textDecoration: 'none' }}>
                                <div className="glass-panel" style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '20px',
                                  padding: '15px 25px',
                                  borderRadius: '8px',
                                  color: '#fff',
                                  transition: 'all 0.3s'
                                }}>
                                  <div style={{ width: '80px', height: '80px', flexShrink: '0', background: 'rgba(3, 7, 18, 0.6)', borderRadius: '4px' }}>
                                    <ProductImage id={p.id} category={p.category} style={{ width: '100%', height: '100%' }} />
                                  </div>
                                  <div style={{ flex: '1' }}>
                                    <span style={{ fontSize: '10px', color: '#00f0ff', fontFamily: 'var(--font-tech)' }}>{p.brand}</span>
                                    <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginTop: '3px' }}>{p.name}</h3>
                                    <p style={{ fontSize: '13px', color: '#94a3b8', marginTop: '5px', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebKitLineClamp: '2', WebKitBoxOrient: 'vertical' }}>
                                      {p.description}
                                    </p>
                                  </div>
                                  <div style={{ textAlign: 'right', flexShrink: '0', minWidth: '100px' }}>
                                    <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#00f0ff', fontFamily: 'var(--font-tech)' }}>{formatINR(p.price)}</div>
                                    <span style={{ fontSize: '11px', color: '#64748b' }}>STOCK: {p.stock}</span>
                                  </div>
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )
                    ) : (
                      /* No results */
                      <motion.div
                        key="no-results"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                          padding: '100px 20px',
                          textAlign: 'center',
                          border: '1.5px dashed rgba(0, 240, 255, 0.15)',
                          borderRadius: '12px'
                        }}
                      >
                        <h2 style={{ color: '#ff0055', fontSize: '18px', fontFamily: 'var(--font-tech)' }}>SIGNAL LOST: NO DEVICE MATCH</h2>
                        <p style={{ color: '#64748b', fontSize: '13px', marginTop: '8px' }}>
                          The filtered query yielded 0 results. Try widening parameters.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            )}
          </div>
        </div>

      </div>
    </PageTransition>
  );
};

export default Products;
