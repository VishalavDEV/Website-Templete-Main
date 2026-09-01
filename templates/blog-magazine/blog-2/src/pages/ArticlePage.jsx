import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Clock, Calendar, Bookmark, Share2, ArrowLeft, ArrowRight, Check, BookOpen, Quote, ShieldCheck, ChevronRight } from 'lucide-react';
import { getArticleBySlug } from '../services/mockApi';
import ArticleCard from '../components/common/ArticleCard';
import BookmarkButton from '../components/common/BookmarkButton';
import NewsletterBox from '../components/common/NewsletterBox';

export function ArticlePage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    async function loadArticle() {
      setLoading(true);
      try {
        const data = await getArticleBySlug(slug);
        if (!data) {
          navigate('/stories');
          return;
        }
        setArticle(data);
      } catch (err) {
        console.error('Failed to load article', err);
      } finally {
        setLoading(false);
      }
    }
    loadArticle();
  }, [slug, navigate]);

  // Reading progress tracker
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading || !article) {
    return (
      <div className="container" style={{ padding: '8rem 0', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.3rem', color: 'var(--text-warm-brown)', fontStyle: 'italic' }}>
          Unrolling manuscript folio...
        </p>
      </div>
    );
  }

  return (
    <article className="article-page-view" style={{ position: 'relative' }}>
      {/* Fixed Reading Progress Bar */}
      <div
        style={{
          position: 'fixed',
          top: 'var(--header-height)',
          left: 0,
          width: `${scrollProgress}%`,
          height: '3px',
          backgroundColor: 'var(--accent-terracotta)',
          zIndex: 1000,
          transition: 'width 0.1s linear'
        }}
      />

      {/* ARTICLE HEADER HERO */}
      <header style={{ padding: '3.5rem 0 2.5rem', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container" style={{ maxWidth: '920px' }}>
          {/* Breadcrumb Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', marginBottom: '1.25rem', color: 'var(--text-muted)' }}>
            <Link to="/stories" style={{ color: 'var(--text-ink)', fontWeight: 600 }}>Stories</Link>
            <ChevronRight size={12} />
            <Link to={`/topic/${article.categorySlug}`} style={{ color: 'var(--accent-terracotta)', fontWeight: 700, textTransform: 'uppercase' }}>
              {article.category}
            </Link>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'var(--text-ink)',
              marginBottom: '1.25rem'
            }}
          >
            {article.title}
          </h1>

          {/* Subtitle / Dek */}
          <p
            style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: 'clamp(1.2rem, 2.5vw, 1.45rem)',
              lineHeight: 1.5,
              color: 'var(--text-ink-secondary)',
              marginBottom: '2rem'
            }}
          >
            {article.dek}
          </p>

          {/* Author Byline & Article Metadata Bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTop: '1px solid var(--border-light)',
              borderBottom: '1px solid var(--border-light)',
              padding: '1.25rem 0',
              gap: '1.5rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {article.author?.avatar && (
                <Link to={`/author/${article.author.slug}`}>
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--border-light)' }}
                  />
                </Link>
              )}
              <div>
                <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', display: 'block', fontWeight: 600 }}>
                  Written by
                </span>
                <Link
                  to={`/author/${article.author?.slug || 'maya-rowan'}`}
                  style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-ink)' }}
                >
                  {article.author?.name || 'Dr. Maya Rowan'}
                </Link>
                <p style={{ fontSize: '0.72rem', color: 'var(--text-warm-brown)' }}>
                  {article.author?.role}
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-ink-secondary)', display: 'block' }}>
                  {article.date}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem', justifyContent: 'flex-end' }}>
                  <Clock size={12} />
                  {article.readingTime}
                </span>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderLeft: '1px solid var(--border-light)', paddingLeft: '1rem' }}>
                <BookmarkButton storyId={article.id} size={20} showLabel={false} />
                <button
                  onClick={handleShare}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: copied ? 'var(--accent-sage)' : 'var(--text-muted)',
                    padding: '6px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  title="Copy link to clipboard"
                  aria-label="Share article"
                >
                  {copied ? <Check size={20} /> : <Share2 size={20} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* HERO IMAGE & CAPTION */}
      <div className="container" style={{ maxWidth: '1080px', margin: '2.5rem auto' }}>
        <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '4px', backgroundColor: '#201c18', maxHeight: '560px' }}>
          <img
            src={article.heroImage}
            alt={article.heroAlt || article.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(10%) contrast(105%)' }}
          />
        </div>
        {article.heroCaption && (
          <p
            style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: '0.9rem',
              color: 'var(--text-warm-brown)',
              fontStyle: 'italic',
              marginTop: '0.75rem',
              textAlign: 'center'
            }}
          >
            {article.heroCaption}
          </p>
        )}
      </div>

      {/* ARTICLE BODY & NARRATIVE LAYOUT */}
      <div className="container" style={{ maxWidth: 'var(--max-width-article)', margin: '0 auto', paddingBottom: '4rem' }}>
        {/* Drop Cap First Section Opening */}
        <div style={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'var(--text-ink-secondary)', fontFamily: 'var(--font-editorial)' }}>
          <p className="drop-cap" style={{ marginBottom: '2rem' }}>
            {article.excerpt}
          </p>

          {/* Render Sections */}
          {article.sections?.map((section, idx) => (
            <div key={idx} style={{ margin: '3rem 0' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.85rem',
                  color: 'var(--text-ink)',
                  marginBottom: '1.25rem',
                  letterSpacing: '-0.01em'
                }}
              >
                {section.heading}
              </h2>

              <div style={{ whiteSpace: 'pre-line', marginBottom: '2rem' }}>
                {section.body}
              </div>

              {/* Optional Section Pull Quote */}
              {section.quote && (
                <blockquote className="editorial-quote">
                  "{section.quote}"
                  {section.quoteAuthor && <cite>— {section.quoteAuthor}</cite>}
                </blockquote>
              )}

              {/* Optional Section Image Break */}
              {section.image && (
                <div style={{ margin: '2.5rem 0' }}>
                  <img
                    src={section.image}
                    alt={section.imageCaption || section.heading}
                    style={{ width: '100%', borderRadius: '2px', objectFit: 'cover', maxHeight: '420px', filter: 'sepia(15%)' }}
                    loading="lazy"
                  />
                  {section.imageCaption && (
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-warm-brown)', fontStyle: 'italic', marginTop: '0.5rem', textAlign: 'center' }}>
                      {section.imageCaption}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Historical Timeline Sidebar Box */}
        {article.timeline && article.timeline.length > 0 && (
          <div
            style={{
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-light)',
              borderRadius: '4px',
              padding: '2rem',
              margin: '3.5rem 0',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <div className="section-label">CHRONOLOGY OF DISCOVERY</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', color: 'var(--text-ink)', marginBottom: '1.25rem' }}>
              Historical Milestones
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {article.timeline.map((item, idx) => (
                <div key={idx} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '1rem', alignItems: 'baseline' }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: '0.9rem', color: 'var(--accent-terracotta)' }}>
                    {item.year}
                  </span>
                  <span style={{ fontSize: '0.92rem', color: 'var(--text-ink-secondary)', lineHeight: 1.5 }}>
                    {item.event}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Editorial Source Note */}
        {article.sourceNote && (
          <div
            style={{
              borderTop: '1px solid var(--border-light)',
              paddingTop: '1.5rem',
              marginTop: '3rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem',
              fontSize: '0.82rem',
              color: 'var(--text-muted)',
              fontStyle: 'italic'
            }}
          >
            <ShieldCheck size={16} color="var(--accent-terracotta)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong>Archival Note:</strong> {article.sourceNote}
            </div>
          </div>
        )}

        {/* Story Save & Social CTA Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-light)',
            borderRadius: '4px',
            padding: '1.25rem 1.75rem',
            margin: '3rem 0'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <BookmarkButton storyId={article.id} size={20} showLabel={true} />
          </div>
          <button onClick={handleShare} className="btn-editorial-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}>
            <Share2 size={13} />
            <span>{copied ? 'Link Copied' : 'Share Investigation'}</span>
          </button>
        </div>
      </div>

      {/* =========================================================================
          YOU MAY ALSO LIKE (Related Stories)
          ========================================================================= */}
      {article.relatedStories && article.relatedStories.length > 0 && (
        <section style={{ padding: '4rem 0', backgroundColor: 'rgba(32, 28, 24, 0.02)', borderTop: '1px solid var(--border-light)' }}>
          <div className="container">
            <div className="section-label">THEMATIC CONNECTIONS</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--text-ink)', marginBottom: '2rem' }}>
              You May Also Like
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {article.relatedStories.map((rel) => (
                <ArticleCard key={rel.id} article={rel} variant="secondary" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          MORE FROM ELEMENTAL
          ========================================================================= */}
      {article.moreStories && article.moreStories.length > 0 && (
        <section style={{ padding: '4rem 0', borderTop: '1px solid var(--border-light)' }}>
          <div className="container">
            <div className="section-label">CONTINUE READING</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--text-ink)', marginBottom: '2rem' }}>
              More From Elemental
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
              {article.moreStories.map((more) => (
                <ArticleCard key={more.id} article={more} variant="compact" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* NEWSLETTER BOX */}
      <section style={{ padding: '2rem 0 5rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <NewsletterBox />
        </div>
      </section>
    </article>
  );
}

export default ArticlePage;
