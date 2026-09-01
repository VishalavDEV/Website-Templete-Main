import React, { useState, useEffect, useContext, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { searchProducts, formatINR } from '../services/api';
import ProductImage from './ProductImage';

const SearchOverlay = () => {
  const { searchOpen, setSearchOpen } = useContext(AppContext);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recent, setRecent] = useState(() => {
    const saved = localStorage.getItem('bluecore_recent_searches');
    return saved ? JSON.parse(saved) : ['OLED-X', 'iPhone', 'CoreBook', 'Headphones'];
  });
  
  const inputRef = useRef(null);

  useEffect(() => {
    if (searchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);
    const delayDebounce = setTimeout(async () => {
      try {
        const data = await searchProducts(query);
        setResults(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  const handleRecentClick = (term) => {
    setQuery(term);
  };

  const handleClose = () => {
    setQuery('');
    setResults([]);
    setSearchOpen(false);
  };

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    if (query.trim() && !recent.includes(query.trim())) {
      const updated = [query.trim(), ...recent.slice(0, 4)];
      setRecent(updated);
      localStorage.setItem('bluecore_recent_searches', JSON.stringify(updated));
    }
  };

  return (
    <AnimatePresence>
      {searchOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(3, 7, 18, 0.95)',
            backdropFilter: 'blur(16px)',
            zIndex: 11000,
            display: 'flex',
            justifyContent: 'center',
            padding: '80px 20px 20px 20px',
            fontFamily: 'var(--font-tech)'
          }}
        >
          {/* Main search capsule */}
          <motion.div
            initial={{ y: -50, scale: 0.95 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: -50, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              width: '100%',
              maxWidth: '800px',
              display: 'flex',
              flexDirection: 'column',
              gap: '30px'
            }}
          >
            {/* Header / Input controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <form onSubmit={handleSearchSubmit} style={{ flex: '1', position: 'relative' }}>
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="INPUT COMMAND OR PRODUCT NAME..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '16px 20px 16px 50px',
                    fontSize: '16px',
                    fontFamily: 'var(--font-tech)',
                    backgroundColor: 'rgba(11, 19, 43, 0.6)',
                    border: '1.5px solid var(--neon-blue)',
                    borderRadius: '8px',
                    color: '#fff',
                    outline: 'none',
                    boxShadow: '0 0 15px rgba(0, 240, 255, 0.15), inset 0 0 10px rgba(0, 240, 255, 0.05)',
                    letterSpacing: '0.1em'
                  }}
                />
                <Search size={20} color="#00f0ff" style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)' }} />
                
                {loading && (
                  <Loader2 size={18} color="#00f0ff" className="led-blinker" style={{ position: 'absolute', right: '18px', top: '50%', transform: 'translateY(-50%)' }} />
                )}
              </form>

              <button
                onClick={handleClose}
                style={{
                  background: 'rgba(11, 19, 43, 0.6)',
                  border: '1px solid rgba(0, 240, 255, 0.2)',
                  color: '#94a3b8',
                  borderRadius: '8px',
                  width: '52px',
                  height: '52px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#ff0055'; e.currentTarget.style.color = '#ff0055'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.2)'; e.currentTarget.style.color = '#94a3b8'; }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Content Drawer */}
            <div style={{ flex: '1', overflowY: 'auto', paddingRight: '5px' }}>
              {query.trim() === '' ? (
                /* Static view: Recents and categories */
                <div style={{ display: 'flex', flexDirection: 'column', gap: '35px' }}>
                  {/* Recents */}
                  <div>
                    <h4 style={{ fontSize: '11px', color: '#00f0ff', letterSpacing: '0.15em', marginBottom: '15px' }}>
                      RECENT SHOWROOM COMMANDS
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                      {recent.map((term, i) => (
                        <button
                          key={i}
                          onClick={() => handleRecentClick(term)}
                          style={{
                            background: 'rgba(11, 19, 43, 0.4)',
                            border: '1px solid rgba(0, 240, 255, 0.1)',
                            borderRadius: '4px',
                            padding: '8px 16px',
                            color: '#94a3b8',
                            fontSize: '12px',
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                          }}
                          onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#00f0ff'; e.currentTarget.style.color = '#fff'; }}
                          onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.1)'; e.currentTarget.style.color = '#94a3b8'; }}
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Categories shortcut */}
                  <div>
                    <h4 style={{ fontSize: '11px', color: '#00f0ff', letterSpacing: '0.15em', marginBottom: '15px' }}>
                      SYSTEM CHANNELS (CATEGORIES)
                    </h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '15px' }}>
                      {[
                        { name: 'SMART TVS', cat: 'tv' },
                        { name: 'SMARTPHONES', cat: 'mobiles' },
                        { name: 'LAPTOPS', cat: 'laptops' },
                        { name: 'AUDIO SYSTEMS', cat: 'audio' }
                      ].map((c, i) => (
                        <Link
                          key={i}
                          to={`/category/${c.cat}`}
                          onClick={handleClose}
                          style={{
                            textDecoration: 'none',
                            padding: '15px',
                            background: 'rgba(11, 19, 43, 0.4)',
                            border: '1px solid rgba(0, 240, 255, 0.1)',
                            borderRadius: '6px',
                            color: '#fff',
                            fontSize: '13px',
                            display: 'block',
                            textAlign: 'center',
                            transition: 'all 0.3s'
                          }}
                          onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#00f0ff'; e.currentTarget.style.boxShadow = '0 0 10px rgba(0,240,255,0.15)'; }}
                          onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
                        >
                          {c.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                /* Search Results Grid */
                <div>
                  <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', marginBottom: '20px' }}>
                    <span style={{ fontSize: '11px', color: '#64748b' }}>
                      SEARCH DATABASE FOUND: {results.length} NODES
                    </span>
                  </div>

                  {results.length > 0 ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                      {results.map((product) => (
                        <Link
                          key={product.id}
                          to={`/product/${product.id}`}
                          onClick={handleClose}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '20px',
                            padding: '12px 20px',
                            background: 'rgba(11, 19, 43, 0.4)',
                            border: '1.5px solid rgba(0, 240, 255, 0.12)',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            color: '#fff',
                            transition: 'all 0.3s'
                          }}
                          onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#00f0ff'; e.currentTarget.style.boxShadow = '0 0 10px rgba(0,240,255,0.15)'; }}
                          onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.12)'; e.currentTarget.style.boxShadow = 'none'; }}
                        >
                          <div style={{ width: '50px', height: '50px', flexShrink: '0', background: 'rgba(3, 7, 18, 0.6)', borderRadius: '4px' }}>
                            <ProductImage id={product.id} category={product.category} style={{ width: '100%', height: '100%' }} />
                          </div>

                          <div style={{ flex: '1' }}>
                            <h4 style={{ fontSize: '14px', fontWeight: 'bold' }}>{product.name}</h4>
                            <p style={{ fontSize: '11px', color: '#94a3b8', marginTop: '3px' }}>{product.brand} - {product.category.toUpperCase()}</p>
                          </div>

                          <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '15px', fontWeight: 'bold', color: '#00f0ff' }}>{formatINR(product.price)}</div>
                            {product.oldPrice > product.price && (
                              <div style={{ fontSize: '11px', color: '#64748b', textDecoration: 'line-through', marginTop: '2px' }}>{formatINR(product.oldPrice)}</div>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    /* Scanning Empty State */
                    !loading && (
                      <div style={{
                        padding: '60px 20px',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '20px',
                        border: '1px dashed rgba(0, 240, 255, 0.2)',
                        borderRadius: '8px'
                      }}>
                        <div style={{
                          width: '40px',
                          height: '40px',
                          border: '2px solid rgba(0, 240, 255, 0.3)',
                          borderTopColor: '#00f0ff',
                          borderRadius: '50%',
                          animation: 'spin 1.5s infinite linear'
                        }} />
                        <div>
                          <h3 style={{ color: '#ff0055', fontSize: '16px' }}>DATABASE SEARCH: NO RECORD FOUND</h3>
                          <p style={{ color: '#64748b', fontSize: '13px', marginTop: '5px' }}>Signal scanned 0 matching nodes. Refine query variables.</p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchOverlay;
