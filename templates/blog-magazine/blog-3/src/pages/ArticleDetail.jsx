import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { mockStore } from '../lib/mockStore';
import { Bookmark, Share2, Check, ArrowLeft, Clock, Calendar, Sparkles, Send } from 'lucide-react';
import { isBookmarked, saveBookmark, removeBookmark } from '../lib/bookmarks';

export default function ArticleDetail({ onOpenSubscribe }) {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [author, setAuthor] = useState(null);
  const [related, setRelated] = useState([]);
  const [bookmarked, setBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [readProgress, setReadProgress] = useState(0);
  const [inlineEmail, setInlineEmail] = useState('');
  const [inlineSubscribed, setInlineSubscribed] = useState(false);

  useEffect(() => {
    async function load() {
      const data = await mockStore.getArticleBySlug(slug);
      setArticle(data);
      if (data) {
        setBookmarked(isBookmarked(data.id));
        if (data.authorId) {
          const authData = await mockStore.getAuthorById(data.authorId);
          setAuthor(authData);
        }
        const all = await mockStore.getArticles();
        setRelated(all.filter(a => a.id !== data.id && a.category === data.category).slice(0, 3));
        if (related.length === 0) setRelated(all.filter(a => a.id !== data.id).slice(0, 3));
      }
    }
    load();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setReadProgress(docHeight > 0 ? Math.min(1, scrollTop / docHeight) : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!article) return (
    <div className="container" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: '40px', height: '40px', border: '2px solid var(--border-color)', borderTopColor: 'var(--accent-cyan)', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 1rem' }} />
        <p style={{ color: 'var(--text-muted)' }}>Loading article...</p>
      </div>
    </div>
  );

  const toggleBookmark = () => {
    if (bookmarked) { 
      removeBookmark(article.id); 
      setBookmarked(false); 
    } else { 
      saveBookmark(article.id); 
      setBookmarked(true); 
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleInlineSubscribe = async (e) => {
    e.preventDefault();
    try {
      await mockStore.subscribe(inlineEmail || 'reader@futureintelligence.io');
      setInlineSubscribed(true);
      setInlineEmail('');
    } catch (err) {
      if (onOpenSubscribe) onOpenSubscribe();
    }
  };

  const bodyParagraphs = (article.body || '').split('\n\n').filter(p => p.trim());

  return (
    <>
      {/* Reading progress bar */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: '3px', zIndex: 200,
        background: 'var(--border-color)',
      }}>
        <div style={{
          width: `${readProgress * 100}%`, height: '100%',
          background: 'var(--accent-cyan)', boxShadow: '0 0 10px var(--accent-cyan-glow)',
          transition: 'width 0.1s linear',
        }} />
      </div>

      <article style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          {/* Top Bar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
            <button 
              onClick={() => navigate(-1)} 
              style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer' }}
              className="hover-text-cyan"
            >
              <ArrowLeft size={16} /> Back to stories
            </button>
            <Link to={`/category/${article.categorySlug}`} className="badge">
              {article.category}
            </Link>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 700, lineHeight: 1.08, letterSpacing: '-0.03em',
            marginBottom: '1rem',
          }}>{article.title}</h1>

          {article.subtitle && (
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.5 }}>
              {article.subtitle}
            </p>
          )}

          {/* Meta bar */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem',
            padding: '1.25rem 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)',
            marginBottom: '2.5rem',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', fontSize: '0.85rem' }}>
              <span style={{ fontWeight: 600 }}>{article.author}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-muted)' }}>
                <Calendar size={14} /> {article.date}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-muted)' }}>
                <Clock size={14} /> {article.readingTime}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button 
                onClick={handleShare} 
                className="btn-outline" 
                style={{ padding: '0.45rem 0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem' }}
              >
                {copied ? <><Check size={14} style={{ color: 'var(--accent-cyan)' }} /> Copied Link</> : <><Share2 size={14} /> Share</>}
              </button>
              
              <button 
                onClick={toggleBookmark} 
                className="btn-outline" 
                style={{
                  padding: '0.45rem 0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem',
                  borderColor: bookmarked ? 'var(--accent-cyan)' : undefined,
                  color: bookmarked ? 'var(--accent-cyan)' : undefined,
                  background: bookmarked ? 'rgba(0, 229, 255, 0.08)' : undefined,
                }}
              >
                <Bookmark size={14} fill={bookmarked ? 'currentColor' : 'none'} />
                {bookmarked ? 'Saved to Profile' : 'Save Story'}
              </button>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="container" style={{ maxWidth: '1100px', marginBottom: '3rem' }}>
          <div style={{ borderRadius: '12px', overflow: 'hidden', aspectRatio: '21/9' }}>
            <img src={article.image} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

        {/* Article Body */}
        <div className="reading-container" style={{ maxWidth: '680px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {bodyParagraphs.map((para, i) => {
              if (para.startsWith('## ')) {
                return <h2 key={i} style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 600, marginTop: '2rem' }}>{para.replace('## ', '')}</h2>;
              }
              if (para.startsWith('> ')) {
                return (
                  <blockquote key={i} style={{
                    borderLeft: '3px solid var(--accent-cyan)', paddingLeft: '1.25rem',
                    margin: '1.5rem 0', fontStyle: 'italic', fontSize: '1.15rem',
                    color: 'var(--text-secondary)', lineHeight: 1.6,
                  }}>{para.replace('> ', '')}</blockquote>
                );
              }
              return <p key={i} style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>{para}</p>;
            })}
          </div>

          {/* Author Card */}
          {author && (
            <div style={{
              marginTop: '4rem', padding: '1.5rem 2rem', borderRadius: '12px',
              backgroundColor: 'var(--surface-color)', border: '1px solid var(--border-color)',
              display: 'flex', alignItems: 'center', gap: '1.25rem'
            }}>
              <img src={author.avatar} alt={author.name} style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--accent-cyan)' }} />
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>About the Author</div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 600, marginTop: '0.15rem' }}>{author.name}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.35rem', lineHeight: '1.5' }}>{author.bio}</p>
              </div>
            </div>
          )}

          {/* Inline Newsletter Block */}
          <div style={{
            marginTop: '3.5rem', padding: '2.5rem', borderRadius: '14px',
            background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.04), rgba(139, 92, 246, 0.04))',
            border: '1px solid var(--border-color)', textAlign: 'center'
          }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>
              Never miss a frontier AI breakthrough
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
              Get our weekly deep-dive technical reports sent straight to your inbox.
            </p>
            {!inlineSubscribed ? (
              <form onSubmit={handleInlineSubscribe} style={{ display: 'flex', gap: '0.5rem', maxWidth: '400px', margin: '0 auto', flexWrap: 'wrap' }}>
                <input
                  type="email"
                  placeholder="Enter your email..."
                  value={inlineEmail}
                  onChange={(e) => setInlineEmail(e.target.value)}
                  required
                  style={{ flex: '1 1 200px', padding: '0.75rem 1rem', fontSize: '0.85rem' }}
                />
                <button type="submit" className="btn-cyan" style={{ padding: '0.75rem 1.25rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Send size={14} /> Subscribe
                </button>
              </form>
            ) : (
              <div style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                <Check size={16} /> Subscribed to Future Intelligence.
              </div>
            )}
          </div>
        </div>

        {/* Related Articles */}
        {related.length > 0 && (
          <div className="container" style={{ maxWidth: '900px', marginTop: '5rem' }}>
            <div className="section-header">
              <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Related Dispatches</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {related.map(a => (
                <Link to={`/article/${a.slug}`} key={a.id} className="card group" style={{ padding: 0 }}>
                  <div style={{ height: '150px', overflow: 'hidden', borderRadius: '12px 12px 0 0' }}>
                    <img src={a.image} alt={a.title} className="group-hover-scale-105" style={{
                      width: '100%', height: '100%', objectFit: 'cover',
                      transition: 'transform 0.6s var(--ease-out-expo)',
                    }} />
                  </div>
                  <div style={{ padding: '1.25rem' }}>
                    <span style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-cyan)', fontWeight: 600 }}>{a.category}</span>
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 500, marginTop: '0.4rem', lineHeight: 1.3 }}>{a.title}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  );
}
