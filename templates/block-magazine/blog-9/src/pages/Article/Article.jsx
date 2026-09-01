import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Bookmark, Share2, ArrowLeft, ArrowRight, Compass, Clock, MapPin } from 'lucide-react';
import StoryCard from '../../components/StoryCard/StoryCard';
import { getArticleBySlug } from '../../services/mockApi';
import { useAppStore } from '../../store/appStore';
import './Article.css';

export default function Article() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const { isArticleSaved, toggleSaveArticle, showToast } = useAppStore();

  useEffect(() => {
    setLoading(true);
    getArticleBySlug(slug).then(data => {
      setArticle(data);
      setLoading(false);
    });
  }, [slug]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Article link copied to clipboard.');
    } else {
      showToast('Article URL: ' + window.location.href);
    }
  };

  if (loading) {
    return (
      <div className="article-page" style={{ padding: '10rem 0' }}>
        <div className="atlas-container-editorial">
          <div className="atlas-skeleton" style={{ height: '50px', marginBottom: '1.5rem' }} />
          <div className="atlas-skeleton" style={{ height: '30px', width: '60%', marginBottom: '3rem' }} />
          <div className="atlas-skeleton" style={{ height: '450px', borderRadius: '16px' }} />
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="article-page" style={{ padding: '10rem 0', textAlign: 'center' }}>
        <div className="atlas-container">
          <h2 style={{ color: 'var(--text-primary)' }}>Article Not Found</h2>
          <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>
            The requested dispatch does not exist in the active collection.
          </p>
          <Link to="/" className="atlas-btn atlas-btn-primary" style={{ marginTop: '2rem' }}>
            Return to Front Page
          </Link>
        </div>
      </div>
    );
  }

  const isSaved = isArticleSaved(article.id);

  return (
    <article className="article-page">
      <div className="atlas-container">
        {/* Article Header */}
        <header className="article-header">
          <Link to={`/${article.category}`} className="article-category-link">
            <Compass size={14} />
            <span>Department of {article.categoryLabel || article.category}</span>
          </Link>

          <h1 className="article-headline">{article.title}</h1>
          <p className="article-subtitle">{article.subtitle}</p>

          <div className="article-meta-bar">
            {article.authorDetails ? (
              <div className="article-author-info">
                <img
                  src={article.authorDetails.avatar}
                  alt={article.authorDetails.name}
                  className="article-author-avatar"
                />
                <div>
                  <div className="article-author-name">{article.authorDetails.name}</div>
                  <div className="article-meta-details">{article.authorDetails.role}</div>
                </div>
              </div>
            ) : (
              <div className="article-meta-details">By {article.author}</div>
            )}

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              <span>{article.date}</span>
              <span>·</span>
              <span>{article.readTime}</span>
              {article.location && (
                <>
                  <span>·</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin size={13} />
                    {article.location}
                  </span>
                </>
              )}
            </div>

            <div className="article-actions-bar">
              <button
                type="button"
                className="article-action-btn"
                onClick={() => toggleSaveArticle(article.id, article.title)}
                aria-label={isSaved ? 'Remove Bookmark' : 'Save Story'}
              >
                <Bookmark size={15} fill={isSaved ? '#c4892c' : 'none'} color={isSaved ? '#c4892c' : '#15171e'} />
                <span>{isSaved ? 'Saved' : 'Save'}</span>
              </button>
              <button type="button" className="article-action-btn" onClick={handleShare} aria-label="Share story">
                <Share2 size={15} />
                <span>Share</span>
              </button>
            </div>
          </div>
        </header>

        {/* Hero Media */}
        <div className="article-hero-media">
          <img src={article.heroImage} alt={article.title} />
        </div>

        {/* Content Layout with Table of Contents */}
        <div className="article-layout">
          <aside className="article-sidebar">
            <div className="article-toc-heading">Contents</div>
            <ul className="article-toc-list">
              {article.sections?.map((sec, idx) => (
                <li key={idx}>
                  <a href={`#section-${idx}`} className="article-toc-link">
                    {sec.heading}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <div className="article-body-content">
            <p style={{ fontSize: '1.45rem', fontStyle: 'italic', color: 'var(--text-primary)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
              {article.excerpt}
            </p>

            {article.sections?.map((sec, idx) => (
              <section key={idx} id={`section-${idx}`}>
                <h2 className="article-section-title">{sec.heading}</h2>

                {sec.paragraphs?.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}

                {sec.image && (
                  <figure className="article-inline-image">
                    <img src={sec.image} alt={sec.caption || sec.heading} loading="lazy" />
                    {sec.caption && <figcaption className="article-caption">{sec.caption}</figcaption>}
                  </figure>
                )}

                {sec.pullQuote && (
                  <blockquote className="article-pullquote">
                    "{sec.pullQuote}"
                  </blockquote>
                )}
              </section>
            ))}
          </div>
        </div>

        {/* Previous & Next Navigation */}
        {(article.prevArticle || article.nextArticle) && (
          <div className="article-nav-prev-next">
            {article.prevArticle ? (
              <Link to={`/story/${article.prevArticle.slug}`} className="article-nav-card">
                <div style={{ fontSize: '0.72rem', color: 'var(--accent-ochre)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '4px', fontWeight: 700 }}>
                  ← Previous Dispatch
                </div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--text-primary)' }}>
                  {article.prevArticle.title}
                </div>
              </Link>
            ) : <div />}

            {article.nextArticle && (
              <Link to={`/story/${article.nextArticle.slug}`} className="article-nav-card" style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--accent-ochre)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '4px', fontWeight: 700 }}>
                  Next Dispatch →
                </div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--text-primary)' }}>
                  {article.nextArticle.title}
                </div>
              </Link>
            )}
          </div>
        )}
      </div>

      {/* Related Stories */}
      {article.related && article.related.length > 0 && (
        <section className="article-related-section">
          <div className="atlas-container">
            <div className="atlas-section-eyebrow" style={{ marginBottom: '2rem' }}>
              <span>Related Investigations</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {article.related.map(rel => (
                <StoryCard key={rel.id} story={rel} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
