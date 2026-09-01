import React, { useState, useEffect, useRef } from 'react';
import { useShop } from '../../context/ShopContext';
import { PRODUCTS } from '../../data/products';
import { Search, X, TrendingUp, Clock, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const SearchOverlay: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, searchQuery, setSearchQuery, navigate } = useShop();
  const inputRef = useRef<HTMLInputElement>(null);

  const [recentSearches, setRecentSearches] = useState<string[]>(['smartphones', 'headphones', 'boots', 'skincare']);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const filteredProducts = searchQuery.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 6)
    : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      if (!recentSearches.includes(searchQuery.trim())) {
        setRecentSearches([searchQuery.trim(), ...recentSearches.slice(0, 4)]);
      }
      setIsSearchOpen(false);
      navigate('/shop');
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(22, 22, 22, 0.85)',
          backdropFilter: 'blur(12px)',
          zIndex: 600,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '5vh'
        }}
        onClick={() => setIsSearchOpen(false)}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          style={{
            width: '90%',
            maxWidth: '720px',
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-float)',
            overflow: 'hidden',
            border: '1px solid var(--border-light)'
          }}
        >
          {/* Search Bar Input */}
          <form onSubmit={handleSearchSubmit} style={{ display: 'flex', alignItems: 'center', padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--border-light)' }}>
            <Search size={22} color="var(--accent-blue)" style={{ marginRight: '1rem' }} />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search products, brands and categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                flex: 1,
                border: 'none',
                outline: 'none',
                fontSize: '1.15rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                backgroundColor: 'transparent'
              }}
            />
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setIsSearchOpen(false);
              }}
              className="btn-icon"
              style={{ border: 'none' }}
            >
              <X size={20} />
            </button>
          </form>

          {/* Results / Suggestions Container */}
          <div style={{ padding: '1.5rem', maxHeight: '65vh', overflowY: 'auto' }}>
            {searchQuery.trim() ? (
              <div>
                <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '1rem' }}>
                  SEARCH RESULTS ({filteredProducts.length})
                </div>

                {filteredProducts.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>
                    No products found matching "{searchQuery}". Try searching for <strong>smartphones</strong>, <strong>boots</strong>, or <strong>audio</strong>.
                  </div>
                ) : (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
                    {filteredProducts.map((p) => (
                      <div
                        key={p.id}
                        onClick={() => {
                          setIsSearchOpen(false);
                          navigate(`/product/${p.slug}`);
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem',
                          padding: '0.6rem',
                          borderRadius: 'var(--radius-sm)',
                          backgroundColor: 'var(--bg-primary)',
                          cursor: 'pointer'
                        }}
                      >
                        <div style={{ width: '56px', height: '56px', aspectRatio: '1 / 1', borderRadius: 'var(--radius-sm)', overflow: 'hidden', flexShrink: 0 }}>
                          <img src={p.images[0]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
                        </div>
                        <div style={{ flex: 1, overflow: 'hidden' }}>
                          <div style={{ fontSize: '0.68rem', fontWeight: 800, color: 'var(--accent-blue)' }}>{p.brand}</div>
                          <div style={{ fontSize: '0.82rem', fontWeight: 700, lineClamp: 1, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{p.name}</div>
                          <div style={{ fontSize: '0.85rem', fontWeight: 900 }}>₹{p.price.toLocaleString('en-IN')}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                    <TrendingUp size={14} color="var(--accent-blue)" /> TRENDING SEARCHES
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {['NOVA X1 Pro', 'Noise Cancelling Headphones', 'Italian Leather Boots', 'Bouclé Lounge Chair', 'Ceremonial Matcha'].map((kw) => (
                      <button
                        key={kw}
                        onClick={() => setSearchQuery(kw)}
                        style={{
                          padding: '0.45rem 0.9rem',
                          borderRadius: 'var(--radius-full)',
                          backgroundColor: 'var(--bg-primary)',
                          border: '1px solid var(--border-light)',
                          fontSize: '0.82rem',
                          fontWeight: 700
                        }}
                      >
                        {kw}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                    <Clock size={14} /> RECENT SEARCHES
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {recentSearches.map((rec) => (
                      <button
                        key={rec}
                        onClick={() => setSearchQuery(rec)}
                        style={{
                          padding: '0.4rem 0.8rem',
                          borderRadius: 'var(--radius-sm)',
                          backgroundColor: 'var(--bg-secondary)',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          color: 'var(--text-secondary)'
                        }}
                      >
                        {rec}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
