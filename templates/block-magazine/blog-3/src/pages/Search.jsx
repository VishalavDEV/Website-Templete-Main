import { useState, useEffect } from 'react';
import { globalSearch } from '../lib/search';
import { Search as SearchIcon, Loader, ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockStore } from '../lib/mockStore';

export default function Search({ onOpenTool, onOpenModel, onOpenCompany }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState('All');
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (query.trim().length >= 2) {
        setIsSearching(true);
        const data = await globalSearch(query);
        setResults(data.results);
        setIsSearching(false);
      } else {
        setResults([]);
      }
    }, 200);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const categories = ['All', 'Article', 'Tool', 'Model', 'Company'];
  const filteredResults = filter === 'All' ? results : results.filter(r => r.type === filter);

  const handleResultClick = async (res) => {
    if (res.type === 'Tool' && onOpenTool) {
      const t = await mockStore.getToolById(res.id);
      if (t) onOpenTool(t);
    } else if (res.type === 'Model' && onOpenModel) {
      const m = await mockStore.getModelById(res.id);
      if (m) onOpenModel(m);
    } else if (res.type === 'Company' && onOpenCompany) {
      const c = await mockStore.getCompanyById(res.id);
      if (c) onOpenCompany(c);
    }
  };

  return (
    <div className="container" style={{ paddingTop: '8rem', paddingBottom: '6rem', minHeight: '85vh' }}>
      <div style={{ maxWidth: '820px', margin: '0 auto' }}>
        
        <div style={{ marginBottom: '2.5rem' }}>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '0.5rem' }}>
            Search Global Archive
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
            Instant search across editorial reports, foundation models, robotics developments, and tool registries.
          </p>
        </div>

        {/* Input bar */}
        <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
          <SearchIcon style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} size={20} />
          <input
            type="text"
            placeholder="Type keywords (e.g., 'Cursor', 'Claude', 'OpenAI', 'Quantum')..."
            style={{
              width: '100%',
              padding: '1.1rem 3rem 1.1rem 3.25rem',
              fontSize: '1.1rem',
              borderRadius: '12px'
            }}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              style={{ position: 'absolute', right: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}
              className="hover-text-cyan"
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* Quick Suggestion Chips */}
        {query.length < 2 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Try searching:</span>
            {['Agentic', 'Claude 3.5', 'Midjourney', 'Figure AI', 'Quantum', 'Nvidia', 'DeepSeek'].map(tag => (
              <button
                key={tag}
                onClick={() => setQuery(tag)}
                className="btn-outline"
                style={{ fontSize: '0.72rem', padding: '0.3rem 0.7rem' }}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        {/* Filter Chips */}
        {results.length > 0 && (
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`btn-outline ${filter === cat ? 'active' : ''}`}
                style={{ fontSize: '0.75rem', padding: '0.35rem 0.85rem' }}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Results Container */}
        <div>
          {isSearching && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 0', color: 'var(--text-muted)', gap: '0.75rem' }}>
              <Loader className="animate-spin" size={20} /> Searching database...
            </div>
          )}

          {!isSearching && query.length >= 2 && filteredResults.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-secondary)' }}>
              No matches found for <strong style={{ color: 'var(--text-primary)' }}>"{query}"</strong>. Try broadening your terms.
            </div>
          )}

          {!isSearching && filteredResults.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                Showing {filteredResults.length} Result{filteredResults.length > 1 ? 's' : ''}
              </div>
              {filteredResults.map((res, i) => {
                if (res.type === 'Article') {
                  return (
                    <Link
                      key={i}
                      to={res.link}
                      className="card"
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '1.25rem 1.5rem',
                        animation: `fadeInUp ${0.15 + i * 0.04}s var(--ease-out-expo) forwards`,
                        opacity: 0
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <span className="badge" style={{ fontSize: '0.65rem' }}>
                          {res.type}
                        </span>
                        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 600 }}>
                          {res.title}
                        </h3>
                      </div>
                      <ArrowRight size={16} style={{ color: 'var(--text-muted)' }} />
                    </Link>
                  );
                }
                return (
                  <div
                    key={i}
                    onClick={() => handleResultClick(res)}
                    className="card"
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '1.25rem 1.5rem',
                      cursor: 'pointer',
                      animation: `fadeInUp ${0.15 + i * 0.04}s var(--ease-out-expo) forwards`,
                      opacity: 0
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <span className="badge" style={{
                        background: res.type === 'Model' ? 'rgba(139, 92, 246, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                        color: res.type === 'Model' ? 'var(--accent-violet)' : 'var(--text-primary)',
                        borderColor: 'currentColor',
                        fontSize: '0.65rem'
                      }}>
                        {res.type}
                      </span>
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 600 }}>
                        {res.title}
                      </h3>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      Inspect <ArrowRight size={14} />
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
