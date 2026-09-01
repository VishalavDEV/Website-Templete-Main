import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import BookmarkButton from './BookmarkButton';

export function ArticleCard({ article, variant = 'compact', className = '' }) {
  if (!article) return null;

  // LEAD VARIANT
  if (variant === 'lead') {
    return (
      <article
        className={`article-card-lead ${className}`}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'center',
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-light)',
          borderRadius: '4px',
          padding: '2.5rem',
          boxShadow: 'var(--shadow-md)',
          position: 'relative'
        }}
      >
        <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '2px', height: '420px', backgroundColor: '#201c18' }}>
          <Link to={`/story/${article.slug}`}>
            <img
              src={article.heroImage}
              alt={article.heroAlt || article.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'sepia(12%) contrast(104%)',
                transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              className="card-hero-img"
              loading="lazy"
            />
          </Link>
          <div style={{ position: 'absolute', top: 16, right: 16, zIndex: 3, backgroundColor: 'rgba(255, 250, 241, 0.9)', borderRadius: '50%' }}>
            <BookmarkButton storyId={article.id} size={18} />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem' }}>
            <Link to={`/topic/${article.categorySlug}`} className="category-badge">
              {article.category}
            </Link>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <Clock size={12} />
              {article.readingTime}
            </span>
          </div>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', lineHeight: 1.15, marginBottom: '1rem', color: 'var(--text-ink)' }}>
            <Link to={`/story/${article.slug}`} style={{ color: 'inherit' }}>
              {article.title}
            </Link>
          </h2>

          <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.2rem', lineHeight: 1.55, color: 'var(--text-ink-secondary)', marginBottom: '1.5rem' }}>
            {article.dek}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-light)', paddingTop: '1.25rem', marginTop: '0.5rem' }}>
            <div>
              <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', display: 'block' }}>
                By {article.author?.name || 'Editorial Desk'}
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-warm-brown)', fontStyle: 'italic' }}>
                {article.date}
              </span>
            </div>

            <Link to={`/story/${article.slug}`} className="btn-editorial-primary" style={{ padding: '0.7rem 1.4rem', fontSize: '0.78rem' }}>
              <span>Read Story</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  // SECONDARY VARIANT
  if (variant === 'secondary') {
    return (
      <article
        className={`article-card-secondary ${className}`}
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-light)',
          borderRadius: '3px',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-sm)',
          transition: 'var(--transition-editorial)'
        }}
      >
        <div style={{ position: 'relative', height: '240px', overflow: 'hidden', backgroundColor: '#201c18' }}>
          <Link to={`/story/${article.slug}`}>
            <img
              src={article.heroImage}
              alt={article.heroAlt || article.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'sepia(15%)',
                transition: 'transform 0.5s ease'
              }}
              className="card-hero-img"
              loading="lazy"
            />
          </Link>
          <div style={{ position: 'absolute', top: 12, right: 12, backgroundColor: 'rgba(255, 250, 241, 0.9)', borderRadius: '50%' }}>
            <BookmarkButton storyId={article.id} size={16} />
          </div>
          <span
            style={{
              position: 'absolute',
              bottom: 12,
              left: 12,
              backgroundColor: 'rgba(32, 28, 24, 0.85)',
              color: 'var(--bg-surface)',
              fontSize: '0.65rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              padding: '2px 8px',
              borderRadius: '2px'
            }}
          >
            {article.readingTime}
          </span>
        </div>

        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <Link to={`/topic/${article.categorySlug}`} className="category-badge" style={{ alignSelf: 'flex-start', marginBottom: '0.6rem' }}>
            {article.category}
          </Link>

          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', lineHeight: 1.25, marginBottom: '0.65rem', color: 'var(--text-ink)' }}>
            <Link to={`/story/${article.slug}`} style={{ color: 'inherit' }}>
              {article.title}
            </Link>
          </h3>

          <p style={{ fontSize: '0.88rem', color: 'var(--text-ink-secondary)', lineHeight: 1.55, marginBottom: '1.25rem', flexGrow: 1 }}>
            {article.dek}
          </p>

          <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '0.85rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-warm-brown)', fontStyle: 'italic' }}>
              {article.author?.name || 'Staff'} • {article.date}
            </span>
            <Link to={`/story/${article.slug}`} style={{ color: 'var(--accent-terracotta)', fontWeight: 700, fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '2px' }}>
              <span>Read</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  // HORIZONTAL VARIANT (Great for related stories & lists)
  if (variant === 'horizontal') {
    return (
      <article
        className={`article-card-horizontal ${className}`}
        style={{
          display: 'grid',
          gridTemplateColumns: '140px 1fr',
          gap: '1.25rem',
          alignItems: 'center',
          padding: '1rem',
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-light)',
          borderRadius: '3px',
          transition: 'var(--transition-editorial)'
        }}
      >
        <div style={{ position: 'relative', height: '110px', borderRadius: '2px', overflow: 'hidden', backgroundColor: '#201c18' }}>
          <Link to={`/story/${article.slug}`}>
            <img
              src={article.heroImage}
              alt={article.heroAlt || article.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(15%)' }}
              loading="lazy"
            />
          </Link>
        </div>

        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
            <Link to={`/topic/${article.categorySlug}`} style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, color: 'var(--accent-terracotta)' }}>
              {article.category}
            </Link>
            <BookmarkButton storyId={article.id} size={15} />
          </div>

          <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', lineHeight: 1.3, marginBottom: '0.35rem', color: 'var(--text-ink)' }}>
            <Link to={`/story/${article.slug}`} style={{ color: 'inherit' }}>
              {article.title}
            </Link>
          </h4>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readingTime}</span>
          </div>
        </div>
      </article>
    );
  }

  // DEFAULT COMPACT CARD VARIANT
  return (
    <article
      className={`article-card-compact ${className}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-light)',
        borderRadius: '3px',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-sm)',
        transition: 'var(--transition-editorial)'
      }}
    >
      <div style={{ position: 'relative', height: '190px', overflow: 'hidden', backgroundColor: '#201c18' }}>
        <Link to={`/story/${article.slug}`}>
          <img
            src={article.heroImage}
            alt={article.heroAlt || article.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'sepia(15%)',
              transition: 'transform 0.4s ease'
            }}
            loading="lazy"
          />
        </Link>
        <div style={{ position: 'absolute', top: 8, right: 8, backgroundColor: 'rgba(255, 250, 241, 0.9)', borderRadius: '50%' }}>
          <BookmarkButton storyId={article.id} size={15} />
        </div>
      </div>

      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <Link to={`/topic/${article.categorySlug}`} className="category-badge" style={{ fontSize: '0.65rem' }}>
            {article.category}
          </Link>
          <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
            {article.readingTime}
          </span>
        </div>

        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', lineHeight: 1.3, marginBottom: '0.5rem', color: 'var(--text-ink)' }}>
          <Link to={`/story/${article.slug}`} style={{ color: 'inherit' }}>
            {article.title}
          </Link>
        </h3>

        <p style={{ fontSize: '0.82rem', color: 'var(--text-ink-secondary)', lineHeight: 1.5, marginBottom: '1rem', flexGrow: 1 }}>
          {article.dek}
        </p>

        <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '0.65rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.72rem', color: 'var(--text-warm-brown)', fontStyle: 'italic' }}>
            {article.author?.name || 'Staff'}
          </span>
          <Link to={`/story/${article.slug}`} style={{ color: 'var(--accent-terracotta)', fontWeight: 700, fontSize: '0.75rem' }}>
            Read →
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ArticleCard;
