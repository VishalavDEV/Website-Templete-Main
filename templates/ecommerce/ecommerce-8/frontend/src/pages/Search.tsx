import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../context/ToyCartContext';
import { Search as SearchIcon, HelpCircle } from 'lucide-react';
import './Search.css';

import { BACKUP_PRODUCTS } from './Shop';

export const Search: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setSearched(false);
      return;
    }

    const delayDebounce = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await axios.get(`http://localhost:8080/api/products/search?q=${query}`);
        if (res.data && res.data.length > 0) {
          setResults(res.data);
        } else {
          // Perform local query matching
          const matched = BACKUP_PRODUCTS.filter(p => 
            p.name.toLowerCase().includes(query.toLowerCase()) || 
            p.brand.toLowerCase().includes(query.toLowerCase()) ||
            p.category.toLowerCase().includes(query.toLowerCase())
          );
          setResults(matched);
        }
      } catch (err) {
        // Fallback to local filter
        const matched = BACKUP_PRODUCTS.filter(p => 
          p.name.toLowerCase().includes(query.toLowerCase()) || 
          p.brand.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase())
        );
        setResults(matched);
      } finally {
        setLoading(false);
        setSearched(true);
      }
    }, 400); // 400ms debounce

    return () => clearTimeout(delayDebounce);
  }, [query]);

  return (
    <div className="search-page app-container">
      <div className="stars-bg" />

      <div className="search-panel-container">
        <h1 className="search-title">SUMMON TOYS</h1>
        <p className="search-subtitle">Type 'cars', 'robots', or 'lego' to watch them react and arrive!</p>
        
        {/* Search input bar */}
        <div className="search-bar-wrapper glass-panel">
          <SearchIcon size={24} className="search-bar-icon" />
          <input 
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type search terms here..."
            className="search-bar-input"
            autoFocus
          />
        </div>
      </div>

      {/* Results grid */}
      <div className="search-results-section">
        {loading ? (
          <div className="search-state-view">
            <div className="loader-lego">🧱 Searching Toy Store...</div>
          </div>
        ) : query.trim() && results.length > 0 ? (
          <div>
            <h3 className="results-indicator">Found {results.length} toys matching '{query}':</h3>
            <div className="products-grid">
              {results.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onQuickView={() => {}} // Simple details routing or empty trigger
                />
              ))}
            </div>
          </div>
        ) : searched ? (
          /* Empty state: Toy Detective searching */
          <div className="search-state-view glass-panel">
            <span className="detective-avatar">🕵️‍♂️🔎</span>
            <h3>No results found for '{query}'!</h3>
            <p>Our toy detective searched all boxes and couldn't find a matching playmate.</p>
            <div className="detective-suggestions">
              <span>Suggestions:</span>
              <button onClick={() => setQuery('car')}>car</button>
              <button onClick={() => setQuery('robot')}>robot</button>
              <button onClick={() => setQuery('lego')}>lego</button>
            </div>
          </div>
        ) : (
          /* Landing state: Waiting for input */
          <div className="search-landing-view">
            <HelpCircle size={40} className="landing-question-icon" />
            <p>Ready to search? Let's find your next favorite toy!</p>
          </div>
        )}
      </div>
    </div>
  );
};
