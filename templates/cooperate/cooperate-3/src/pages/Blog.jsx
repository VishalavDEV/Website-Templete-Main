import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { blogData } from '../data/blog';
import CTA from '../components/CTA';

export default function Blog() {
  const [filter, setFilter] = useState('ALL');

  const categories = ['ALL', 'EXECUTIVE STRATEGY', 'AI & TECHNOLOGY', 'OPERATIONS & SUPPLY', 'FINANCE & RISK'];

  const filteredPosts =
    filter === 'ALL'
      ? blogData
      : blogData.filter((p) => p.category.toUpperCase() === filter);

  return (
    <main>
      <PageHeader
        badge="PUBLICATIONS & ESSAYS"
        title="EXECUTIVE"
        highlight="INTELLIGENCE."
        description="Forensic analyses, computational frameworks, and strategic essays published by VANTAGE partners and research fellows."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Insights' }
        ]}
      />

      {/* Publications Section */}
      <section
        style={{
          padding: '120px 0',
          backgroundColor: '#111111',
          borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
        }}
      >
        <div className="container">
          {/* Filter Bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
              marginBottom: '64px',
              paddingBottom: '24px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
            }}
          >
            <div className="section-label" style={{ margin: 0 }}>
              RESEARCH DISPATCHES ({filteredPosts.length})
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  style={{
                    padding: '8px 16px',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    borderRadius: '2px',
                    backgroundColor: filter === cat ? '#C8F169' : 'transparent',
                    color: filter === cat ? '#111111' : '#9B9B9B',
                    border: filter === cat ? '1px solid #C8F169' : '1px solid rgba(255, 255, 255, 0.14)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Editorial Articles List (NOT cards) */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                style={{
                  borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
                  padding: '48px 0',
                  display: 'grid',
                  gridTemplateColumns: 'minmax(240px, 320px) 1fr auto',
                  gap: '48px',
                  alignItems: 'center',
                }}
                className="blog-row-item"
              >
                {/* Image */}
                <div
                  style={{
                    height: '200px',
                    borderRadius: '2px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'grayscale(70%) contrast(120%) brightness(85%)',
                    }}
                  />
                </div>

                {/* Content */}
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#C8F169',
                      letterSpacing: '0.1em',
                      marginBottom: '10px',
                    }}
                  >
                    <span>{post.category}</span>
                    <span>•</span>
                    <span style={{ color: '#9B9B9B' }}>{post.date}</span>
                    <span>•</span>
                    <span style={{ color: '#9B9B9B' }}>{post.readTime}</span>
                  </div>

                  <Link to={`/blog/${post.id}`}>
                    <h3
                      style={{
                        fontSize: 'clamp(22px, 2.4vw, 32px)',
                        fontWeight: 800,
                        color: '#FFFFFF',
                        lineHeight: 1.2,
                        marginBottom: '12px',
                        transition: 'color 0.2s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#C8F169')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                    >
                      {post.title}
                    </h3>
                  </Link>

                  <p style={{ fontSize: '15px', color: '#9B9B9B', lineHeight: 1.6, marginBottom: '16px' }}>
                    {post.excerpt}
                  </p>

                  <div style={{ fontSize: '13px', color: '#FFFFFF', fontWeight: 600 }}>
                    By {post.author} — <span style={{ color: '#9B9B9B' }}>{post.authorRole}</span>
                  </div>
                </div>

                {/* Arrow */}
                <div>
                  <Link
                    to={`/blog/${post.id}`}
                    style={{
                      width: '48px',
                      height: '48px',
                      border: '1px solid rgba(255, 255, 255, 0.14)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '18px',
                      color: '#FFFFFF',
                      borderRadius: '2px',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#C8F169';
                      e.currentTarget.style.backgroundColor = '#C8F169';
                      e.currentTarget.style.color = '#111111';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.14)';
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#FFFFFF';
                    }}
                  >
                    →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 860px) {
            .blog-row-item {
              grid-template-columns: 1fr !important;
              gap: 24px !important;
            }
          }
        `}</style>
      </section>

      <CTA />
    </main>
  );
}
