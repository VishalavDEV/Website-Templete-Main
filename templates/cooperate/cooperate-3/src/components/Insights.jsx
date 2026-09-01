import React from 'react';
import { Link } from 'react-router-dom';
import { blogData } from '../data/blog';

export default function Insights() {
  const featured = blogData.find((b) => b.featured) || blogData[0];
  const secondaryArticles = blogData.filter((b) => b.id !== featured.id);

  return (
    <section
      style={{
        padding: '90px 0',
        backgroundColor: '#111111',
        borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '20px',
            marginBottom: '48px',
          }}
        >
          <div>
            <div className="section-label">EXECUTIVE INTELLIGENCE</div>
            <h2 className="section-title" style={{ color: '#FFFFFF' }}>
              MAGAZINE & PERSPECTIVES
            </h2>
          </div>
          <Link to="/blog" className="btn btn-secondary">
            <span>All Articles</span>
            <span className="arrow-glyph">→</span>
          </Link>
        </div>

        {/* MAGAZINE-STYLE HORIZONTAL BROWSER */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '40px',
            alignItems: 'stretch',
          }}
          className="magazine-browser-grid"
        >
          {/* LEFT: Featured Editorial Anchor */}
          <div
            style={{
              backgroundColor: '#191919',
              border: '1px solid rgba(255, 255, 255, 0.14)',
              borderRadius: '4px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '20px',
            }}
          >
            <div>
              <div
                style={{
                  height: '240px',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  marginBottom: '20px',
                }}
              >
                <img
                  src={featured.image}
                  alt={featured.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'grayscale(60%) contrast(120%) brightness(85%)',
                  }}
                />
              </div>

              <div style={{ display: 'flex', gap: '10px', fontSize: '11px', fontWeight: 800, color: '#C8F169', letterSpacing: '0.08em', marginBottom: '10px' }}>
                <span>FEATURED</span>
                <span>•</span>
                <span>{featured.category}</span>
                <span>•</span>
                <span style={{ color: '#9B9B9B' }}>{featured.readTime}</span>
              </div>

              <Link to={`/blog/${featured.id}`}>
                <h3
                  style={{
                    fontSize: 'clamp(20px, 2.2vw, 28px)',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    lineHeight: 1.2,
                    marginBottom: '12px',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#C8F169')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                >
                  {featured.title}
                </h3>
              </Link>

              <p style={{ fontSize: '14px', color: '#9B9B9B', lineHeight: 1.6 }}>
                {featured.excerpt}
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div style={{ fontSize: '12px', color: '#FFFFFF', fontWeight: 700 }}>
                By {featured.author}
              </div>
              <Link to={`/blog/${featured.id}`} className="btn-link" style={{ fontSize: '12px' }}>
                <span>Read Publication</span>
                <span className="arrow-glyph">→</span>
              </Link>
            </div>
          </div>

          {/* RIGHT: Vertical Numbered Article List */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderTop: '1px solid rgba(255, 255, 255, 0.14)',
            }}
          >
            {secondaryArticles.slice(0, 3).map((post, idx) => (
              <div
                key={post.id}
                style={{
                  padding: '24px 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#C8F169', letterSpacing: '0.08em' }}>
                    0{idx + 1} // {post.category}
                  </span>
                  <span style={{ fontSize: '11px', color: '#9B9B9B' }}>{post.readTime}</span>
                </div>

                <Link to={`/blog/${post.id}`}>
                  <h4
                    style={{
                      fontSize: '17px',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      lineHeight: 1.3,
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#C8F169')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  >
                    {post.title} →
                  </h4>
                </Link>

                <p style={{ fontSize: '13px', color: '#9B9B9B', lineHeight: 1.5, marginTop: '2px' }}>
                  {post.excerpt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .magazine-browser-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
