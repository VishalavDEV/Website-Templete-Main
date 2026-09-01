import React, { useState, useEffect, useRef } from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import { Search, SlidersHorizontal, RefreshCw } from 'lucide-react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import OfferCountdown from '../components/OfferCountdown';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const catalogRef = useRef(null);

  const categories = ['All', 'Acoustics', 'Timepieces', 'Apparel', 'Living'];

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:5000/api/products');
      if (!response.ok) {
        throw new Error('Failed to load products');
      }
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const scrollToCatalog = () => {
    catalogRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Filter products based on category and search query
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      product.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Hero Section */}
      <Hero onExploreClick={scrollToCatalog} />

      <OfferCountdown />

      {/* Catalog Section */}
      <section
        ref={catalogRef}
        style={{
          padding: '100px 5% 100px 5%',
          minHeight: '100vh',
          background: 'var(--bg-primary)',
          position: 'relative'
        }}
      >
        <div className="ambient-glow" style={{ bottom: '10%', right: '-15%', opacity: 0.1 }} />

        {/* Heading */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: '4rem'
          }}
        >
          <span style={{ color: 'var(--accent-gold)', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.2em' }}>
            AURA DESIGN ARCHIVE
          </span>
          <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)' }}>THE COLLECTION</h2>
          <div style={{ width: '40px', height: '1px', background: 'var(--accent-gold)' }} />
        </div>

        {/* Filters and Search Bar Container */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2rem',
            marginBottom: '3rem'
          }}
          className="filters-row-responsive"
        >
          {/* Category Tabs */}
          <LayoutGroup>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      position: 'relative',
                      padding: '0.6rem 1.5rem',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      borderRadius: '4px',
                      color: isActive ? '#000000' : 'var(--text-secondary)',
                      transition: 'color 0.3s ease',
                      zIndex: 1
                    }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeCategoryPill"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'var(--accent-gold)',
                          borderRadius: '4px',
                          zIndex: -1
                        }}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {cat}
                  </button>
                );
              })}
            </div>
          </LayoutGroup>

          {/* Search bar */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '350px',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Search
              size={18}
              style={{
                position: 'absolute',
                left: '1rem',
                color: 'var(--text-muted)',
                pointerEvents: 'none'
              }}
            />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="premium-input"
              style={{ paddingLeft: '3rem' }}
            />
          </div>
        </div>

        {/* Product Grid / Loading / Error States */}
        {loading ? (
          <div className="grid-container">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="glass-panel"
                style={{
                  height: '420px',
                  borderRadius: '8px',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '1.25rem',
                  gap: '1rem'
                }}
              >
                <div style={{ flex: 1.1, background: 'rgba(255,255,255,0.03)', borderRadius: '4px' }} className="skeleton-pulse" />
                <div style={{ flex: 0.9, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ width: '40%', height: '14px', background: 'rgba(255,255,255,0.03)' }} className="skeleton-pulse" />
                  <div style={{ width: '80%', height: '20px', background: 'rgba(255,255,255,0.03)' }} className="skeleton-pulse" />
                  <div style={{ width: '30%', height: '24px', background: 'rgba(255,255,255,0.03)' }} className="skeleton-pulse" />
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.5rem',
              padding: '4rem 0',
              textAlign: 'center'
            }}
          >
            <p style={{ color: '#ff4d4d', fontSize: '1rem' }}>Error loading collection: {error}</p>
            <button onClick={fetchProducts} className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center' }}>
              <RefreshCw size={14} style={{ marginRight: '0.5rem' }} /> TRY AGAIN
            </button>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '5rem 0', color: 'var(--text-secondary)' }}>
            <p style={{ fontSize: '1.1rem' }}>No products found matching your criteria.</p>
          </div>
        ) : (
          <motion.div layout className="grid-container">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        )}
      </section>

      {/* Styled Responsive Classes and Skeleton Pulse */}
      <style>{`
        .skeleton-pulse {
          animation: pulse 1.5s infinite ease-in-out;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        @media (max-width: 820px) {
          .filters-row-responsive {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .filters-row-responsive div {
            width: 100% !important;
            max-width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
