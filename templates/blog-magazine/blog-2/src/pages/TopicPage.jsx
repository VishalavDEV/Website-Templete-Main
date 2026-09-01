import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Compass, ArrowLeft, Layers, BookOpen } from 'lucide-react';
import { getArticlesByCategory, getCategoryBySlug, getCollection } from '../services/mockApi';
import ArticleCard from '../components/common/ArticleCard';

export function TopicPage() {
  const { slug } = useParams();
  const [category, setCategory] = useState(null);
  const [articles, setArticles] = useState([]);
  const [artifacts, setArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const [cat, arts, cols] = await Promise.all([
          getCategoryBySlug(slug),
          getArticlesByCategory(slug),
          getCollection()
        ]);
        setCategory(cat);
        setArticles(arts);
        setArtifacts(cols.slice(0, 3));
      } catch (err) {
        console.error('Failed to load topic', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [slug]);

  if (loading) {
    return (
      <div className="container" style={{ padding: '8rem 0', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.3rem', fontStyle: 'italic' }}>
          Loading category archive...
        </p>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="container" style={{ padding: '8rem 0', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', marginBottom: '1rem' }}>Category Not Found</h2>
        <Link to="/stories" className="btn-editorial-primary">View All Stories</Link>
      </div>
    );
  }

  return (
    <div className="topic-page-view" style={{ padding: '3.5rem 0 6rem' }}>
      <div className="container">
        {/* Back Link */}
        <Link to="/stories" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
          <ArrowLeft size={14} />
          <span>All Categories</span>
        </Link>

        {/* Topic Header Card */}
        <div
          style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-light)',
            borderRadius: '4px',
            padding: '3rem 2.5rem',
            marginBottom: '3.5rem',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <span className="category-badge" style={{ marginBottom: '1rem' }}>
            EDITORIAL TAXONOMY
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
              color: 'var(--text-ink)',
              marginBottom: '1rem'
            }}
          >
            {category.name}
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: '1.3rem',
              color: 'var(--text-ink-secondary)',
              lineHeight: 1.55,
              maxWidth: '780px'
            }}
          >
            {category.dek}
          </p>

          <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-light)', display: 'flex', gap: '2rem', fontSize: '0.85rem', color: 'var(--text-warm-brown)' }}>
            <span>Documented Inquiries: <strong>{articles.length}</strong></span>
            <span>Archival Status: <strong>Verified</strong></span>
          </div>
        </div>

        {/* Story List */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.85rem', color: 'var(--text-ink)', marginBottom: '2rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem' }}>
            Stories in this Series ({articles.length})
          </h2>

          {articles.length === 0 ? (
            <p style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>No articles found under this taxonomy category.</p>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
              {articles.map((art) => (
                <ArticleCard key={art.id} article={art} variant="secondary" />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopicPage;
