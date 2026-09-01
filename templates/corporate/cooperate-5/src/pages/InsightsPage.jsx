import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { INSIGHTS_ARTICLES } from '../data/corporateData';

export default function InsightsPage() {
  const [activeTopic, setActiveTopic] = useState('ALL');
  const featuredArticle = INSIGHTS_ARTICLES[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const topics = ['ALL', 'ARTIFICIAL INTELLIGENCE', 'SYSTEMS ARCHITECTURE', 'DATA PLATFORMS', 'AUTONOMOUS OPS'];

  const filteredList = activeTopic === 'ALL'
    ? INSIGHTS_ARTICLES
    : INSIGHTS_ARTICLES.filter(a => a.category === activeTopic);

  return (
    <div style={{ paddingTop: '90px' }}>
      {/* 13. Header */}
      <section style={{ padding: '80px 0 60px', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container-asym">
          <div className="meta-tag-copper" style={{ marginBottom: '14px' }}>
            VOLUME 2026 // RESEARCH & DISPATCHES
          </div>
          <h1 className="edit-heading-display" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(38px, 4.8vw, 68px)', fontWeight: 700, color: 'var(--c-charcoal)' }}>
            Insights & Papers
          </h1>
        </div>
      </section>

      {/* 13. Featured Spread */}
      <section style={{ background: 'var(--c-charcoal)', color: 'var(--c-ivory)', padding: '70px 0', borderBottom: '1px solid var(--border-dark)' }}>
        <div className="container-asym">
          <div style={{ background: 'var(--c-charcoal-surface)', border: '1px solid var(--border-dark)', padding: '48px', borderRadius: '2px', display: 'grid', gridTemplateColumns: '1.3fr 0.7fr', gap: '50px', alignItems: 'center' }}>
            <div>
              <div className="meta-tag-copper" style={{ marginBottom: '12px' }}>
                FEATURED PAPER // {featuredArticle.category}
              </div>

              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 3.2vw, 42px)', fontWeight: 700, lineHeight: 1.15, color: '#FFFFFF', marginBottom: '18px' }}>
                {featuredArticle.title}
              </h2>

              <p style={{ fontSize: '16px', color: 'var(--c-eucalyptus-light)', lineHeight: '1.65', marginBottom: '24px' }}>
                {featuredArticle.summary}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '12px', color: 'var(--c-eucalyptus-light)', fontFamily: 'var(--font-mono)' }}>
                <span>{featuredArticle.date}</span>
                <span>/</span>
                <span>{featuredArticle.readTime}</span>
                <span>/</span>
                <span>By {featuredArticle.author}</span>
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <Link to="/contact" className="btn-copper-primary">
                <span>Read Full Paper</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 13. Horizontal Editorial List */}
      <section style={{ padding: '80px 0 130px' }}>
        <div className="container-asym">
          {/* Topic Filters */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '40px' }}>
            {topics.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTopic(t)}
                style={{
                  padding: '9px 18px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  border: `1px solid ${activeTopic === t ? 'var(--c-charcoal)' : 'var(--border-light)'}`,
                  background: activeTopic === t ? 'var(--c-charcoal)' : 'var(--c-ivory-pure)',
                  color: activeTopic === t ? '#FFFFFF' : 'var(--c-charcoal)',
                  borderRadius: '2px',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {t}
              </button>
            ))}
          </div>

          {/* List */}
          <div style={{ borderTop: '1px solid var(--border-light)' }}>
            {filteredList.map((art, idx) => (
              <div key={art.id} className="asym-article-row">
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: 700, color: 'var(--c-copper)' }}>0{idx + 1}</span>
                <span className="meta-tag-eucalyptus">{art.category}</span>
                <h3 className="asym-article-title">{art.title}</h3>
                <span style={{ fontSize: '13px', color: 'var(--c-eucalyptus)', fontFamily: 'var(--font-mono)' }}>
                  {art.date} // {art.readTime}
                </span>
                <div style={{ display: 'flex', justifyContent: 'flex-end', color: 'var(--c-copper)' }}>
                  <ArrowRight size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
