import { useState, useEffect } from 'react';
import { mockStore } from '../lib/mockStore';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

export default function Latest() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await mockStore.getArticles();
      setArticles(data);
    }
    load();
  }, []);

  const leadArticle = articles[0];
  const restArticles = articles.slice(1);

  return (
    <div className="container" style={{ paddingTop: '8rem', paddingBottom: '6rem', minHeight: '100vh' }}>
      <div style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '0.75rem' }}>Latest Stories</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '500px' }}>
          The freshest coverage of AI, future technology, and the systems shaping tomorrow.
        </p>
      </div>

      {/* Lead */}
      {leadArticle && (
        <Link to={`/article/${leadArticle.slug}`} className="card group" style={{
          padding: 0, marginBottom: '3rem', display: 'grid', gridTemplateColumns: '1.2fr 1fr', minHeight: '360px',
        }}>
          <div style={{ overflow: 'hidden', borderRadius: '12px 0 0 12px' }}>
            <img src={leadArticle.image} alt={leadArticle.title} className="group-hover-scale-105" style={{
              width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s var(--ease-out-expo)',
            }} />
          </div>
          <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span className="badge" style={{ marginBottom: '1rem', alignSelf: 'flex-start' }}>{leadArticle.category}</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 600, lineHeight: 1.15, marginBottom: '1rem' }}>{leadArticle.title}</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>{leadArticle.excerpt}</p>
            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: 'auto' }}>
              <span style={{ fontWeight: 500, color: 'var(--text-secondary)' }}>{leadArticle.author}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Calendar size={12} />{leadArticle.date}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Clock size={12} />{leadArticle.readingTime}</span>
            </div>
          </div>
        </Link>
      )}

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1.5rem' }}>
        {restArticles.map((article, i) => (
          <Link to={`/article/${article.slug}`} key={article.id} className="card group" style={{
            padding: 0, display: 'flex', flexDirection: 'column',
            animation: `fadeInUp ${0.3 + i * 0.08}s var(--ease-out-expo) forwards`, opacity: 0,
          }}>
            <div style={{ height: '200px', overflow: 'hidden', borderRadius: '12px 12px 0 0' }}>
              <img src={article.image} alt={article.title} className="group-hover-scale-105" style={{
                width: '100%', height: '100%', objectFit: 'cover',
                transition: 'transform 0.6s var(--ease-out-expo)',
              }} />
            </div>
            <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <span className="badge" style={{ marginBottom: '0.6rem', alignSelf: 'flex-start' }}>{article.category}</span>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 500, lineHeight: 1.25, marginBottom: '0.6rem' }}>{article.title}</h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.6, flex: 1, marginBottom: '1rem' }}>
                {article.excerpt.substring(0, 110)}...
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-color)', paddingTop: '0.75rem' }}>
                <span>{article.author}</span>
                <span>{article.readingTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
