import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, X, Compass, Filter, Sparkles } from 'lucide-react';
import { searchStories, getCategories } from '../services/mockApi';
import ArticleCard from '../components/common/ArticleCard';

export function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const initialCat = searchParams.get('category') || 'all';

  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(initialCat);
  const [results, setResults] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function init() {
      const cats = await getCategories();
      setCategories(cats);
    }
    init();
  }, []);

  useEffect(() => {
    async function executeSearch() {
      setLoading(true);
      try {
        const res = await searchStories(query, category);
        setResults(res);
      } catch (err) {
        console.error('Search failed', err);
      } finally {
        setLoading(false);
      }
    }
    executeSearch();
  }, [query, category]);

  const handleQueryChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    if (val) {
      setSearchParams({ q: val, ...(category !== 'all' ? { category } : {}) });
    } else {
      searchParams.delete('q');
      setSearchParams(searchParams);
    }
  };

  const handleCategoryChange = (e) => {
    const cat = e.target.value;
    setCategory(cat);
    setSearchParams({ ...(query ? { q: query } : {}), ...(cat !== 'all' ? { category: cat } : {}) });
  };

  const clearSearch = () => {
    setQuery('');
    setCategory('all');
    setSearchParams({});
  };

  return (
    <div className="search-page-view" style={{ padding: '3.5rem 0 6rem' }}>
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: '820px', marginBottom: '2.5rem' }}>
          <div className="section-label">INQUIRY ENGINE</div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
              color: 'var(--text-ink)',
              marginBottom: '1rem'
            }}
          >
            Search the Archives
          </h1>
          <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.25rem', color: 'var(--text-ink-secondary)' }}>
            Search titles, deks, full article texts, topics, apparatus, and historical figures.
          </p>
        </div>

        {/* Search Bar Input Container */}
        <div
          style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-light)',
            borderRadius: '4px',
            padding: '1.5rem',
            boxShadow: 'var(--shadow-sm)',
            marginBottom: '3rem'
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
            <div style={{ position: 'relative', flexGrow: 1, minWidth: '280px' }}>
              <Search size={20} color="var(--accent-terracotta)" style={{ position: 'absolute', left: 14, top: 14 }} />
              <input
                type="text"
                placeholder="Search discoveries, instruments, scientists (e.g., 'ether', 'radium', 'Tharp')..."
                value={query}
                onChange={handleQueryChange}
                style={{
                  width: '100%',
                  padding: '0.85rem 2.8rem 0.85rem 2.8rem',
                  fontSize: '1rem',
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--border-light)',
                  borderRadius: '2px',
                  outline: 'none',
                  color: 'var(--text-ink)'
                }}
              />
              {query && (
                <button
                  onClick={() => handleQueryChange({ target: { value: '' } })}
                  style={{
                    position: 'absolute',
                    right: 12,
                    top: 14,
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'var(--text-muted)'
                  }}
                  aria-label="Clear search query"
                >
                  <X size={18} />
                </button>
              )}
            </div>

            {/* Category Filter Select */}
            <div style={{ minWidth: '200px' }}>
              <select
                value={category}
                onChange={handleCategoryChange}
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem',
                  fontSize: '0.9rem',
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--border-light)',
                  borderRadius: '2px',
                  outline: 'none',
                  color: 'var(--text-ink)'
                }}
              >
                <option value="all">All Topics</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Quick suggestions pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem', alignItems: 'center' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>Frequent Searches:</span>
            {['Marie Tharp', 'Refrigeration', 'Röntgen', 'Penicillin', 'Bletchley', 'Spices', 'Galvani', 'Aspirin'].map((term) => (
              <button
                key={term}
                onClick={() => {
                  setQuery(term);
                  setSearchParams({ q: term, ...(category !== 'all' ? { category } : {}) });
                }}
                style={{
                  padding: '0.2rem 0.6rem',
                  fontSize: '0.75rem',
                  backgroundColor: 'rgba(32, 28, 24, 0.04)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  color: 'var(--text-ink)'
                }}
              >
                {term}
              </button>
            ))}
          </div>
        </div>

        {/* Results Metadata Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem' }}>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-ink)' }}>
            Found <strong>{results.length}</strong> matching investigations {query && <span>for "<em>{query}</em>"</span>}
          </span>
          {(query || category !== 'all') && (
            <button onClick={clearSearch} style={{ fontSize: '0.78rem', color: 'var(--accent-terracotta)', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}>
              Clear All Filters
            </button>
          )}
        </div>

        {/* Results Grid */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <p style={{ fontStyle: 'italic', fontFamily: 'var(--font-editorial)' }}>Scanning repository...</p>
          </div>
        ) : results.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '5rem 0', backgroundColor: 'var(--bg-surface)', borderRadius: '4px', border: '1px solid var(--border-light)' }}>
            <Compass size={40} color="var(--accent-terracotta)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--text-ink)', marginBottom: '0.5rem' }}>
              No archival records found
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', maxWidth: '480px', margin: '0 auto 1.5rem' }}>
              No articles matched your search query. Try broadening your keywords or clearing topic filters.
            </p>
            <button onClick={clearSearch} className="btn-editorial-primary">
              View All 32 Stories
            </button>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
            {results.map((art) => (
              <ArticleCard key={art.id} article={art} variant="secondary" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
