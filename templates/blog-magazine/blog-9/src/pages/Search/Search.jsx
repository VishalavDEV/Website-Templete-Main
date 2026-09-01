import React, { useEffect, useState } from 'react';
import { Search as SearchIcon, X, Compass, FileQuestion } from 'lucide-react';
import StoryCard from '../../components/StoryCard/StoryCard';
import { searchContent, getCategories } from '../../services/mockApi';
import './Search.css';

export default function Search() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [categories, setCategories] = useState([]);
  const [results, setResults] = useState({ articles: [], photoEssays: [], fieldNotes: [], totalCount: 0 });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      searchContent(query, category).then(res => {
        setResults(res);
        setLoading(false);
      });
    }, 150);
    return () => clearTimeout(timer);
  }, [query, category]);

  return (
    <div className="search-page">
      <div className="atlas-container">
        <header className="search-hero">
          <div className="atlas-section-eyebrow" style={{ justifyContent: 'center' }}>
            <Compass size={14} />
            <span>Archive Index</span>
          </div>
          <h1 className="atlas-section-title">Search ATLAS</h1>
          <p className="atlas-section-subtitle" style={{ margin: '0 auto' }}>
            Instant inquiry across articles, authors, scientific expeditions, and photo essays.
          </p>

          <div className="search-input-box">
            <SearchIcon size={20} className="search-icon-lead" />
            <input
              type="text"
              placeholder="Search expeditions, species, places, authors..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
            {query && (
              <button
                type="button"
                className="search-clear-btn"
                onClick={() => setQuery('')}
                aria-label="Clear Search"
              >
                <X size={18} />
              </button>
            )}
          </div>

          <div className="search-category-filters">
            <button
              type="button"
              className={`search-filter-pill${category === 'all' ? ' is-active' : ''}`}
              onClick={() => setCategory('all')}
            >
              All Topics
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                type="button"
                className={`search-filter-pill${category === cat.slug ? ' is-active' : ''}`}
                onClick={() => setCategory(cat.slug)}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Found {results.totalCount} results {query && `for "${query}"`}
          </div>
        </header>

        {/* Results Grid */}
        {results.totalCount === 0 && !loading ? (
          <div style={{ textAlign: 'center', padding: '4rem 0 8rem' }}>
            <FileQuestion size={48} color="#6b7280" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              No matches found
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Try adjusting your search terms or clearing the category filter.
            </p>
            <button
              type="button"
              className="atlas-btn atlas-btn-secondary"
              style={{ marginTop: '1.5rem' }}
              onClick={() => {
                setQuery('');
                setCategory('all');
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="search-results-grid">
            {results.articles.map(art => (
              <StoryCard key={art.id} story={art} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
