import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from './Icons';
import { INSIGHTS } from '../data/content';

export default function InsightsGrid({ articles = INSIGHTS, showFeatured = true, limit = null }) {
  const featured = showFeatured ? articles.find(a => a.featured) || articles[0] : null;
  const regular = showFeatured ? articles.filter(a => a.id !== featured?.id) : articles;
  const displayRegular = limit ? regular.slice(0, limit) : regular;

  return (
    <div className="insights-editorial-layout">
      
      {/* 1 Large Dominant Featured Story */}
      {featured && (
        <div className="insights-featured-block">
          {/* Dominant Featured Image */}
          <div className="insights-featured-img-wrap">
            <Link to={`/insights/${featured.id}`} style={{ display: 'block', width: '100%', height: '100%' }}>
              <img src={featured.image} alt={featured.title} />
              <div className="work-badge">
                FEATURED MONOGRAPH
              </div>
            </Link>
          </div>

          {/* Narrative */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div className="font-mono" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
              <span className="text-terracotta" style={{ fontWeight: 700 }}>{featured.type}</span>
              <span>/</span>
              <span>{featured.readTime}</span>
            </div>

            <Link
              to={`/insights/${featured.id}`}
              style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)', color: 'var(--text-charcoal)', lineHeight: '1.1' }}
            >
              {featured.title}
            </Link>

            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              {featured.subtitle}
            </p>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.25rem', borderTop: '1px solid var(--border-light)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <img
                  src={featured.author.avatar}
                  alt={featured.author.name}
                  style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover', filter: 'grayscale(100%)' }}
                />
                <div>
                  <p className="font-mono" style={{ fontSize: '0.75rem', fontWeight: 700 }}>{featured.author.name}</p>
                  <p style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>{featured.author.role}</p>
                </div>
              </div>

              <Link to={`/insights/${featured.id}`} className="btn-editorial-underline">
                <span>Read Article</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Smaller Secondary Editorial Articles with Varied Proportions */}
      <div className="insights-secondary-grid">
        {displayRegular.map((article, idx) => {
          const thumbRatio = idx % 2 === 0 ? '16/10' : '4/3';

          return (
            <article
              key={article.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.25rem',
                paddingBottom: '2.5rem',
                borderBottom: '1px solid var(--border-light)'
              }}
            >
              {/* Secondary Article Thumbnail with varied aspect ratio */}
              <div style={{ width: '100%', aspectRatio: thumbRatio, overflow: 'hidden', border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-cream-200)', marginBottom: '0.5rem' }}>
                <Link to={`/insights/${article.id}`} style={{ display: 'block', width: '100%', height: '100%' }}>
                  <img
                    src={article.image}
                    alt={article.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%', transition: 'transform var(--transition-slow)' }}
                  />
                </Link>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div className="font-mono" style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                  <span className="text-terracotta">{article.type}</span>
                  <span>{article.readTime}</span>
                </div>

                <Link
                  to={`/insights/${article.id}`}
                  style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--text-charcoal)', lineHeight: '1.2' }}
                >
                  {article.title}
                </Link>

                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                  {article.subtitle}
                </p>
              </div>

              <div className="font-mono" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid var(--border-light)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                <span>{article.date} · {article.author.name}</span>
                <Link to={`/insights/${article.id}`} style={{ color: 'var(--text-charcoal)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                  <span>Read</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </article>
          );
        })}
      </div>

    </div>
  );
}
