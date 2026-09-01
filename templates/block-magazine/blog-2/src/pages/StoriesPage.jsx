import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Compass, Filter, ArrowUpDown, Clock } from 'lucide-react';
import { getArticles, getCategories } from '../services/mockApi';
import ArticleCard from '../components/common/ArticleCard';
import SectionHeader from '../components/common/SectionHeader';
import GooeyNav from '../components/nav/GooeyNav';

export function StoriesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';

  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedSort, setSelectedSort] = useState('newest');
  const [maxReadingTime, setMaxReadingTime] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const [arts, cats] = await Promise.all([getArticles(), getCategories()]);
        setArticles(arts);
        setCategories([{ id: 'cat-all', name: 'All Stories', slug: 'all', storyCount: arts.length }, ...cats]);
      } catch (err) {
        console.error('Failed to load stories', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const handleCategorySelect = (slug) => {
    if (slug === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: slug });
    }
  };

  // Filter & Sort
  let filtered = articles;
  if (activeCategory && activeCategory !== 'all') {
    filtered = filtered.filter((a) => a.categorySlug === activeCategory);
  }

  if (maxReadingTime !== 'all') {
    const maxMin = parseInt(maxReadingTime, 10);
    filtered = filtered.filter((a) => {
      const readMin = parseInt(a.readingTime, 10) || 10;
      return readMin <= maxMin;
    });
  }

  if (selectedSort === 'oldest') {
    filtered = [...filtered].reverse();
  } else if (selectedSort === 'longest') {
    filtered = [...filtered].sort((a, b) => parseInt(b.readingTime, 10) - parseInt(a.readingTime, 10));
  } else if (selectedSort === 'shortest') {
    filtered = [...filtered].sort((a, b) => parseInt(a.readingTime, 10) - parseInt(b.readingTime, 10));
  }

  return (
    <div className="stories-page" style={{ padding: '3.5rem 0 6rem' }}>
      <div className="container">
        {/* Page Title & Intro */}
        <div style={{ maxWidth: '820px', marginBottom: '2.5rem' }}>
          <div className="section-label">MAGAZINE ARCHIVE</div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
              lineHeight: 1.1,
              color: 'var(--text-ink)',
              marginBottom: '1rem'
            }}
          >
            All Investigations & Stories
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: '1.25rem',
              color: 'var(--text-ink-secondary)',
              lineHeight: 1.55
            }}
          >
            Browse our complete catalog of long-form historical inquiries, forgotten laboratories, and the accidental turning points of scientific knowledge.
          </p>
        </div>

        {/* GooeyNav Topic Filter Bar */}
        <GooeyNav
          items={categories}
          activeSlug={activeCategory}
          onSelect={handleCategorySelect}
        />

        {/* Secondary Filter & Sort Controls */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 0',
            borderBottom: '1px solid var(--border-light)',
            marginBottom: '2.5rem',
            gap: '1rem'
          }}
        >
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Showing <strong>{filtered.length}</strong> stories
          </span>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
            {/* Reading Time filter */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem' }}>
              <Clock size={14} color="var(--text-muted)" />
              <select
                value={maxReadingTime}
                onChange={(e) => setMaxReadingTime(e.target.value)}
                style={{
                  padding: '0.35rem 0.6rem',
                  fontSize: '0.78rem',
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '2px',
                  outline: 'none',
                  color: 'var(--text-ink)'
                }}
              >
                <option value="all">Any Length</option>
                <option value="8">Under 8 mins</option>
                <option value="10">Under 10 mins</option>
                <option value="12">10+ mins long-read</option>
              </select>
            </div>

            {/* Sort Dropdown */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem' }}>
              <ArrowUpDown size={14} color="var(--text-muted)" />
              <select
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                style={{
                  padding: '0.35rem 0.6rem',
                  fontSize: '0.78rem',
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '2px',
                  outline: 'none',
                  color: 'var(--text-ink)'
                }}
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="longest">Longest Read</option>
                <option value="shortest">Shortest Read</option>
              </select>
            </div>
          </div>
        </div>

        {/* Stories Grid */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <p style={{ fontStyle: 'italic', fontFamily: 'var(--font-editorial)' }}>Loading stories...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '5rem 0', backgroundColor: 'var(--bg-surface)', borderRadius: '4px', border: '1px solid var(--border-light)' }}>
            <Compass size={36} color="var(--accent-terracotta)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--text-ink)', marginBottom: '0.5rem' }}>
              No stories match your filter criteria
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Try clearing reading-time restrictions or selecting all categories.
            </p>
            <button onClick={() => { handleCategorySelect('all'); setMaxReadingTime('all'); }} className="btn-editorial-primary">
              Reset Filters
            </button>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
            {filtered.map((art) => (
              <ArticleCard key={art.id} article={art} variant="secondary" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default StoriesPage;
