import React, { useContext, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { Search, X } from 'lucide-react';

export default function SearchOverlay() {
  const { isSearchOpen, setIsSearchOpen, products, formatPrice } = useContext(ShopContext);
  const [query, setQuery] = useState('');

  const suggestedTerms = [
    'Emerald Ring',
    'Zambian Emerald',
    '18K Gold Necklace',
    'Tennis Bracelet',
    'Bridal Set',
    'Solitaire'
  ];

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.material.toLowerCase().includes(q) ||
        p.collection.toLowerCase().includes(q)
    );
  }, [query, products]);

  if (!isSearchOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2500,
        backgroundColor: 'rgba(6, 78, 59, 0.96)',
        backdropFilter: 'blur(20px)',
        color: 'var(--ivory)',
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem 1.5rem',
        animation: 'fadeIn 0.3s ease forwards'
      }}
    >
      <div className="container-custom" style={{ width: '100%', maxWidth: '900px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', letterSpacing: '0.2em', color: 'var(--gold-primary)' }}>
            AURELIA SEARCH
          </span>
          <button
            onClick={() => {
              setIsSearchOpen(false);
              setQuery('');
            }}
            style={{
              background: 'none',
              border: '1px solid var(--border-gold)',
              color: 'var(--gold-primary)',
              cursor: 'pointer',
              padding: '0.5rem',
              borderRadius: '50%'
            }}
          >
            <X size={24} />
          </button>
        </div>

        {/* Large Search Field */}
        <div
          style={{
            position: 'relative',
            borderBottom: '2px solid var(--gold-primary)',
            paddingBottom: '0.8rem',
            marginBottom: '2.5rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Search size={28} style={{ color: 'var(--gold-primary)' }} />
            <input
              type="text"
              placeholder="Search by emerald cut, gold purity, category or name..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
              style={{
                width: '100%',
                background: 'none',
                border: 'none',
                outline: 'none',
                color: '#FAF7F0',
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
                fontWeight: '300'
              }}
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                style={{ background: 'none', border: 'none', color: 'var(--gold-light)', cursor: 'pointer' }}
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Suggested Searches */}
        {!query.trim() && (
          <div>
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-primary)', display: 'block', marginBottom: '1rem', fontWeight: '600' }}>
              Suggested Searches
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
              {suggestedTerms.map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  style={{
                    padding: '0.6rem 1.2rem',
                    background: 'rgba(212, 175, 55, 0.12)',
                    border: '1px solid var(--border-gold)',
                    color: '#FAF7F0',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    borderRadius: '20px',
                    transition: 'all 0.2s'
                  }}
                  className="suggested-tag-btn"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results */}
        {query.trim() && (
          <div style={{ maxHeight: '60vh', overflowY: 'auto', paddingRight: '0.5rem' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--gold-light)', marginBottom: '1.5rem' }}>
              Found {results.length} matching design{results.length !== 1 ? 's' : ''}
            </div>

            {results.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '3rem 0', color: '#D4DEC9' }}>
                No jewellery items matched "{query}". Try searching "Emerald", "Ring", or "Gold".
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.5rem' }}>
                {results.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    onClick={() => {
                      setIsSearchOpen(false);
                      setQuery('');
                    }}
                    style={{
                      display: 'flex',
                      gap: '1rem',
                      alignItems: 'center',
                      background: 'rgba(250, 247, 240, 0.08)',
                      border: '1px solid var(--border-gold)',
                      padding: '0.8rem',
                      textDecoration: 'none',
                      color: '#ffffff'
                    }}
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                    />
                    <div>
                      <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', color: 'var(--gold-primary)' }}>{product.name}</h4>
                      <p style={{ fontSize: '0.8rem', color: 'var(--gold-light)', fontWeight: '600' }}>{formatPrice(product.price)}</p>
                      <span style={{ fontSize: '0.65rem', color: '#D4DEC9' }}>{product.category}</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <style>{`
        .suggested-tag-btn:hover {
          border-color: var(--gold-primary) !important;
          color: var(--emerald-dark) !important;
          background: var(--gold-primary) !important;
        }
      `}</style>
    </div>
  );
}
