import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockStore } from '../lib/mockStore';
import { Layers, Calendar, Clock, ArrowRight } from 'lucide-react';

export default function Category() {
  const { slug } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const data = await mockStore.getArticles();
      if (slug === 'ai') {
        setArticles(data.filter(a => ['AI Agents', 'Generative AI', 'Foundation Models', 'AI Infrastructure'].includes(a.category)));
      } else if (slug === 'future-tech') {
        setArticles(data.filter(a => ['Quantum Computing', 'Robotics', 'Brain-Computer Interfaces', 'Autonomous Systems'].includes(a.category)));
      } else {
        setArticles(data.filter(a => a.categorySlug === slug));
      }
      setLoading(false);
    }
    load();
  }, [slug]);

  const displayTitle = slug === 'ai' ? 'Artificial Intelligence' : 
                       slug === 'future-tech' ? 'Future Technology & Frontier Systems' : 
                       slug.replace(/-/g, ' ');

  return (
    <div className="container" style={{ paddingTop: '8rem', paddingBottom: '6rem', minHeight: '100vh' }}>
      <div style={{ marginBottom: '3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <Layers size={20} style={{ color: 'var(--accent-cyan)' }} />
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, textTransform: 'capitalize' }}>
            {displayTitle}
          </h1>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '600px' }}>
          Curated dispatches, technical analysis, and frontier forecasts in this domain.
        </p>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-muted)' }}>
          Loading category articles...
        </div>
      ) : articles.length === 0 ? (
        <div className="card" style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
          No articles currently filed under this topic.
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1.75rem' }}>
          {articles.map((article, i) => (
            <Link 
              to={`/article/${article.slug}`} 
              key={article.id} 
              className="card group"
              style={{
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                animation: `fadeInUp ${0.2 + i * 0.06}s var(--ease-out-expo) forwards`,
                opacity: 0
              }}
            >
              <div style={{ height: '210px', overflow: 'hidden', borderRadius: '12px 12px 0 0' }}>
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="group-hover-scale-105"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s var(--ease-out-expo)'
                  }} 
                />
              </div>
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span className="badge" style={{ marginBottom: '0.75rem', alignSelf: 'flex-start' }}>
                  {article.category}
                </span>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  lineHeight: 1.25,
                  marginBottom: '0.75rem'
                }}>
                  {article.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6', flex: 1, marginBottom: '1.25rem' }}>
                  {article.excerpt}
                </p>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  fontSize: '0.75rem', 
                  color: 'var(--text-muted)',
                  borderTop: '1px solid var(--border-color)',
                  paddingTop: '0.85rem'
                }}>
                  <span>{article.author}</span>
                  <span>{article.readingTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
