import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, Clock, ArrowRight, Trash2, BookOpen } from 'lucide-react';
import { getSavedStories } from '../services/mockApi';
import ArticleCard from '../components/common/ArticleCard';

export function SavedPage() {
  const [savedStories, setSavedStories] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadSaved = async () => {
    setLoading(true);
    try {
      const data = await getSavedStories();
      setSavedStories(data);
    } catch (err) {
      console.error('Failed to load saved stories', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSaved();
    const handleSavedChange = () => loadSaved();
    window.addEventListener('elemental_saved_change', handleSavedChange);
    return () => window.removeEventListener('elemental_saved_change', handleSavedChange);
  }, []);

  const totalReadingMinutes = savedStories.reduce((acc, curr) => {
    const min = parseInt(curr.readingTime, 10) || 8;
    return acc + min;
  }, 0);

  return (
    <div className="saved-page-view" style={{ padding: '3.5rem 0 6rem' }}>
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: '820px', marginBottom: '2.5rem' }}>
          <div className="section-label">PERSONAL READING VAULT</div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
              color: 'var(--text-ink)',
              marginBottom: '1rem'
            }}
          >
            Saved Investigations
          </h1>
          <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.25rem', color: 'var(--text-ink-secondary)' }}>
            Your curated collection of long-form articles, preserved locally for focused, offline reading.
          </p>
        </div>

        {/* Saved Stats Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-light)',
            borderRadius: '4px',
            padding: '1.25rem 2rem',
            marginBottom: '3rem',
            gap: '1rem'
          }}
        >
          <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: 'var(--text-ink)' }}>
            <span>
              Saved Stories: <strong>{savedStories.length}</strong>
            </span>
            <span>
              Estimated Read Time: <strong>{totalReadingMinutes} mins</strong>
            </span>
          </div>

          <Link to="/stories" className="btn-editorial-secondary" style={{ fontSize: '0.75rem', padding: '0.45rem 1rem' }}>
            <span>Browse More Stories</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* Stories List */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <p style={{ fontStyle: 'italic', fontFamily: 'var(--font-editorial)' }}>Loading your reading list...</p>
          </div>
        ) : savedStories.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: '5rem 2rem',
              backgroundColor: 'var(--bg-surface)',
              borderRadius: '4px',
              border: '1px solid var(--border-light)'
            }}
          >
            <Bookmark size={42} color="var(--accent-terracotta)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--text-ink)', marginBottom: '0.75rem' }}>
              Your Reading List is Empty
            </h3>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', maxWidth: '480px', margin: '0 auto 2rem', lineHeight: 1.6 }}>
              Click the bookmark icon on any investigation to save it here for later reading.
            </p>
            <Link to="/stories" className="btn-editorial-primary">
              Discover Stories
            </Link>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
            {savedStories.map((art) => (
              <ArticleCard key={art.id} article={art} variant="secondary" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SavedPage;
