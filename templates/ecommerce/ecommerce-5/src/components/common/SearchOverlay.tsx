import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { ProductCard } from '../shop/ProductCard';

export const SearchOverlay: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, products } = useShop();
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const popularTags = ['LINEN', 'DRESSES', 'TAILORING', 'KNITWEAR', 'DENIM', 'ACCESSORIES'];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setIsSearchOpen]);

  if (!isSearchOpen) return null;

  const filteredProducts = query.trim()
    ? products.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setIsSearchOpen(false);
      navigate(`/shop?search=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'var(--bg-primary)',
        zIndex: 300,
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header Bar */}
      <div
        className="container-custom"
        style={{
          height: 'var(--header-height)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid var(--border-light)',
        }}
      >
        <span style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', letterSpacing: '0.15em' }}>
          AUREL SEARCH
        </span>

        <button
          onClick={() => setIsSearchOpen(false)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '11px',
            letterSpacing: '0.1em',
            fontWeight: '600',
          }}
        >
          CLOSE <X size={18} />
        </button>
      </div>

      {/* Main Search Area */}
      <div className="container-custom" style={{ paddingTop: '60px', paddingBottom: '80px', flex: 1 }}>
        <form onSubmit={handleSearchSubmit} style={{ maxWidth: '840px', margin: '0 auto 60px auto' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              borderBottom: '2px solid var(--text-primary)',
              paddingBottom: '12px',
            }}
          >
            <Search size={28} style={{ color: 'var(--text-muted)', marginRight: '16px' }} />
            <input
              type="text"
              autoFocus
              placeholder="SEARCH AUREL PIECES..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{
                width: '100%',
                background: 'none',
                border: 'none',
                outline: 'none',
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(24px, 4vw, 48px)',
                color: 'var(--text-primary)',
              }}
            />
            {query && (
              <button type="button" onClick={() => setQuery('')} style={{ padding: '8px' }}>
                <X size={20} />
              </button>
            )}
          </div>
        </form>

        {/* Popular Tags when query is empty */}
        {!query && (
          <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
            <span
              style={{
                fontSize: '11px',
                letterSpacing: '0.18em',
                fontWeight: '600',
                color: 'var(--accent-bronze)',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '20px',
              }}
            >
              POPULAR SEARCHES
            </span>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
              {popularTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => {
                    setQuery(tag);
                  }}
                  style={{
                    padding: '10px 20px',
                    fontSize: '11px',
                    letterSpacing: '0.12em',
                    fontWeight: '600',
                    border: '1px solid var(--border-medium)',
                    backgroundColor: 'var(--bg-card)',
                    color: 'var(--text-primary)',
                    borderRadius: '999px',
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results Grid when user types query */}
        {query && (
          <div>
            <div style={{ marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px' }}>
                RESULTS FOR "{query}"
              </h3>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                {filteredProducts.length} ITEMS FOUND
              </span>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="product-grid">
                {filteredProducts.map((prod) => (
                  <div key={prod.id} onClick={() => setIsSearchOpen(false)}>
                    <ProductCard product={prod} />
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ padding: '60px 0', textAlign: 'center' }}>
                <p style={{ fontSize: '16px', color: 'var(--text-secondary)' }}>
                  No matching fashion items found for "{query}".
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
