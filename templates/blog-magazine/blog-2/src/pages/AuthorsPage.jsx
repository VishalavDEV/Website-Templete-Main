import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, BookOpen, ArrowRight, Award } from 'lucide-react';
import { getAuthors } from '../services/mockApi';

export function AuthorsPage() {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getAuthors();
        setAuthors(data);
      } catch (err) {
        console.error('Failed to load authors', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  return (
    <div className="authors-page-view" style={{ padding: '3.5rem 0 6rem' }}>
      <div className="container">
        {/* Intro */}
        <div style={{ maxWidth: '820px', marginBottom: '3rem' }}>
          <div className="section-label">MASTHEAD & CONTRIBUTORS</div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
              color: 'var(--text-ink)',
              marginBottom: '1rem'
            }}
          >
            Contributing Historians & Curators
          </h1>
          <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.25rem', color: 'var(--text-ink-secondary)' }}>
            Meet the archival researchers, museum curators, and investigative essayists who reconstruct the forgotten human dramas of science.
          </p>
        </div>

        {/* Authors Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {authors.map((author) => (
            <div
              key={author.id}
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-light)',
                borderRadius: '4px',
                padding: '2rem',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <img
                    src={author.avatar}
                    alt={author.name}
                    style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--border-light)' }}
                  />
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', color: 'var(--text-ink)', lineHeight: 1.2 }}>
                      <Link to={`/author/${author.slug}`} style={{ color: 'inherit' }}>
                        {author.name}
                      </Link>
                    </h3>
                    <p style={{ fontSize: '0.75rem', color: 'var(--accent-terracotta)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '2px' }}>
                      {author.role}
                    </p>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '3px', marginTop: '3px' }}>
                      <MapPin size={11} />
                      {author.location}
                    </span>
                  </div>
                </div>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-ink-secondary)', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                  {author.bio}
                </p>

                <div>
                  <span style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', fontWeight: 700, display: 'block', marginBottom: '0.4rem' }}>
                    Specializations:
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {author.specialties.map((spec) => (
                      <span
                        key={spec}
                        style={{
                          fontSize: '0.72rem',
                          backgroundColor: 'rgba(32, 28, 24, 0.04)',
                          color: 'var(--text-ink)',
                          padding: '2px 7px',
                          borderRadius: '2px'
                        }}
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem', marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  <strong>{author.storyCount}</strong> Published Inquiries
                </span>
                <Link
                  to={`/author/${author.slug}`}
                  style={{ fontSize: '0.78rem', color: 'var(--accent-terracotta)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '3px' }}
                >
                  <span>View Profile</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AuthorsPage;
