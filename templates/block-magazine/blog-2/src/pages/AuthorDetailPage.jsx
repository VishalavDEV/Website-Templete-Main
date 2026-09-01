import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, ArrowLeft, BookOpen } from 'lucide-react';
import { getAuthorBySlug } from '../services/mockApi';
import ArticleCard from '../components/common/ArticleCard';

export function AuthorDetailPage() {
  const { slug } = useParams();
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAuthor() {
      setLoading(true);
      try {
        const data = await getAuthorBySlug(slug);
        setAuthor(data);
      } catch (err) {
        console.error('Failed to load author profile', err);
      } finally {
        setLoading(false);
      }
    }
    loadAuthor();
  }, [slug]);

  if (loading) {
    return (
      <div className="container" style={{ padding: '8rem 0', textAlign: 'center' }}>
        <p style={{ fontStyle: 'italic', fontFamily: 'var(--font-editorial)' }}>Loading historian profile...</p>
      </div>
    );
  }

  if (!author) {
    return (
      <div className="container" style={{ padding: '8rem 0', textAlign: 'center' }}>
        <h2>Historian Profile Not Found</h2>
        <Link to="/authors" className="btn-editorial-primary" style={{ marginTop: '1rem' }}>
          Back to Contributors
        </Link>
      </div>
    );
  }

  return (
    <div className="author-detail-view" style={{ padding: '3.5rem 0 6rem' }}>
      <div className="container">
        {/* Back Link */}
        <Link to="/authors" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '2rem' }}>
          <ArrowLeft size={14} />
          <span>All Contributors</span>
        </Link>

        {/* Profile Card */}
        <div
          style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-light)',
            borderRadius: '4px',
            padding: '3rem 2.5rem',
            marginBottom: '3.5rem',
            boxShadow: 'var(--shadow-sm)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <img
              src={author.avatar}
              alt={author.name}
              style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--border-light)' }}
            />
            <div>
              <span className="category-badge" style={{ marginBottom: '0.5rem' }}>
                CONTRIBUTOR PROFILE
              </span>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', color: 'var(--text-ink)', lineHeight: 1.15 }}>
                {author.name}
              </h1>
              <p style={{ fontSize: '0.85rem', color: 'var(--accent-terracotta)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '4px' }}>
                {author.role}
              </p>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
                <MapPin size={13} />
                {author.location}
              </span>
            </div>
          </div>

          <div>
            <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.15rem', color: 'var(--text-ink-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              {author.bio}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {author.specialties.map((spec) => (
                <span
                  key={spec}
                  style={{
                    fontSize: '0.75rem',
                    backgroundColor: 'rgba(32, 28, 24, 0.05)',
                    color: 'var(--text-ink)',
                    padding: '3px 8px',
                    borderRadius: '2px',
                    border: '1px solid var(--border-light)'
                  }}
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stories Written by Author */}
        <div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.85rem', color: 'var(--text-ink)', marginBottom: '2rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem' }}>
            Inquiries by {author.name} ({author.articles?.length || 0})
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
            {author.articles?.map((art) => (
              <ArticleCard key={art.id} article={{ ...art, author }} variant="secondary" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthorDetailPage;
