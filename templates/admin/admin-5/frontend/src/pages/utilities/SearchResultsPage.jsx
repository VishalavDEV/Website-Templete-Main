import React, { useState } from 'react';
import { Search, FileText, User, Layout } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const SearchResultsPage = () => {
  const { searchQuery, setSearchQuery, navigateTo } = useApp();
  const [filterTab, setFilterTab] = useState('All');

  const results = [
    { title: 'Sales Dashboard Analytics', type: 'Dashboard', page: 'sales', category: 'dashboards' },
    { title: 'Marcus Chen (Senior Engineer)', type: 'User Profile', page: 'user-profile', category: 'users' },
    { title: 'Spring Boot REST API Controllers', type: 'System Code', page: 'overview', category: 'dashboards' },
    { title: 'Enterprise Invoice #INV-2026-089', type: 'Utility Invoice', page: 'invoice', category: 'utilities' }
  ];

  return (
    <div className="search-page" style={{ maxWidth: 800, margin: '0 auto' }}>
      <div className="page-header" style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 24, fontWeight: 800 }}>Global Search Results</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Showing query results for "{searchQuery || 'smart admin'}".</p>
      </div>

      <div className="glass-card" style={{ marginBottom: 24, padding: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'var(--bg-subtle)', padding: '10px 16px', borderRadius: 8 }}>
          <Search size={18} color="var(--text-muted)" />
          <input
            type="text"
            placeholder="Search across all modules..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            style={{ border: 'none', background: 'transparent', outline: 'none', color: 'var(--text-primary)', width: '100%', fontSize: 14 }}
          />
        </div>
      </div>

      <div className="glass-card">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {results.map((r, idx) => (
            <div key={idx} style={{ padding: 12, borderBottom: '1px solid var(--border-color-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span className="badge badge-primary" style={{ marginBottom: 4 }}>{r.type}</span>
                <h4 style={{ fontSize: 16, fontWeight: 700, cursor: 'pointer', color: 'var(--brand-primary)' }} onClick={() => navigateTo(r.category, r.page)}>
                  {r.title}
                </h4>
              </div>
              <button className="btn btn-secondary btn-sm" onClick={() => navigateTo(r.category, r.page)}>Open Module</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
