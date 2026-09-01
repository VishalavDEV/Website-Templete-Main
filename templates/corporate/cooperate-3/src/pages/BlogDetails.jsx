import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { blogData } from '../data/blog';
import CTA from '../components/CTA';

export default function BlogDetails() {
  const { id } = useParams();
  const article = blogData.find((p) => p.id === id);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const related = blogData.filter((p) => p.id !== article.id).slice(0, 2);

  return (
    <main>
      <PageHeader
        badge={`PUBLICATION // ${article.category}`}
        title={article.title}
        description={article.excerpt}
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Insights', path: '/blog' },
          { label: 'Publication' }
        ]}
      />

      {/* Hero Image & Metadata */}
      <section
        style={{
          padding: '80px 0 40px 0',
          backgroundColor: '#191919',
          borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
        }}
      >
        <div className="container">
          <div
            style={{
              height: '480px',
              borderRadius: '4px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.14)',
              marginBottom: '32px',
            }}
          >
            <img
              src={article.image}
              alt={article.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'grayscale(40%) contrast(115%) brightness(85%)',
              }}
            />
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '20px',
              padding: '24px 0',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 800, color: '#FFFFFF' }}>{article.author}</div>
                <div style={{ fontSize: '13px', color: '#C8F169' }}>{article.authorRole}</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '24px', fontSize: '13px', color: '#9B9B9B' }}>
              <span>DATE: <strong style={{ color: '#FFFFFF' }}>{article.date}</strong></span>
              <span>READING TIME: <strong style={{ color: '#FFFFFF' }}>{article.readTime}</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Editorial Text Section */}
      <section
        style={{
          padding: '100px 0',
          backgroundColor: '#111111',
          borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
        }}
      >
        <div className="container" style={{ maxWidth: '900px' }}>
          {/* Strategic Takeaways Box */}
          {article.takeaways && (
            <div
              style={{
                padding: '36px',
                backgroundColor: '#191919',
                borderLeft: '4px solid #C8F169',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                borderRight: '1px solid rgba(255, 255, 255, 0.1)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '2px',
                marginBottom: '64px',
              }}
            >
              <div style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '0.12em', color: '#C8F169', textTransform: 'uppercase', marginBottom: '16px' }}>
                EXECUTIVE SUMMARY // STRATEGIC TAKEAWAYS
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {article.takeaways.map((t, idx) => (
                  <li key={idx} style={{ fontSize: '15px', color: '#F4F4F4', display: 'flex', gap: '10px' }}>
                    <span style={{ color: '#C8F169', fontWeight: 800 }}>•</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Article Body Chapters */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {article.content.map((sec, idx) => (
              <div key={idx}>
                <h3
                  style={{
                    fontSize: 'clamp(24px, 2.6vw, 34px)',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    lineHeight: 1.25,
                    marginBottom: '20px',
                  }}
                >
                  {sec.heading}
                </h3>
                <p
                  style={{
                    fontSize: '18px',
                    color: '#9B9B9B',
                    lineHeight: 1.8,
                  }}
                >
                  {sec.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Publications */}
      <section
        style={{
          padding: '100px 0',
          backgroundColor: '#191919',
          borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
        }}
      >
        <div className="container">
          <div style={{ marginBottom: '48px' }}>
            <div className="section-label">FURTHER READING</div>
            <h2 className="section-title" style={{ color: '#FFFFFF' }}>
              RELATED EXECUTIVE PERSPECTIVES
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
            }}
          >
            {related.map((post) => (
              <div
                key={post.id}
                style={{
                  backgroundColor: '#111111',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  padding: '32px',
                  borderRadius: '2px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#C8F169', letterSpacing: '0.1em', marginBottom: '12px' }}>
                    {post.category} // {post.readTime}
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <h3
                      style={{
                        fontSize: '20px',
                        fontWeight: 800,
                        color: '#FFFFFF',
                        lineHeight: 1.3,
                        marginBottom: '12px',
                        transition: 'color 0.2s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#C8F169')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                    >
                      {post.title}
                    </h3>
                  </Link>
                  <p style={{ fontSize: '14px', color: '#9B9B9B', lineHeight: 1.6 }}>
                    {post.excerpt}
                  </p>
                </div>

                <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <Link to={`/blog/${post.id}`} className="btn-link" style={{ fontSize: '12px' }}>
                    <span>Read Article</span>
                    <span className="arrow-glyph">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
