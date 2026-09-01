import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight } from '../components/Icons';
import { INSIGHTS } from '../data/content';

export default function Blog() {
  const [selectedType, setSelectedType] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const types = ['ALL', 'PERSPECTIVE', 'RESEARCH REPORT', 'EXECUTIVE BRIEF', 'STRATEGY', 'GLOBAL INSIGHT'];

  const filteredArticles = INSIGHTS.filter(article => {
    const matchesType = selectedType === 'ALL' || article.type.toUpperCase() === selectedType;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  const featured = filteredArticles.find(a => a.featured) || filteredArticles[0];
  const regularArticles = filteredArticles.filter(a => a.id !== featured?.id);

  return (
    <div>
      
      {/* ───────────────────────────────────────────────────────────── */}
      {/* COMPACT EDITORIAL PAGE HERO                                   */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="page-hero-editorial">
        <div className="container">
          <div className="page-hero-header-grid">
            <div>
              <p className="font-mono text-terracotta" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                ORION PERSPECTIVES & RESEARCH
              </p>
              <h1 className="page-hero-title">
                Intelligence for <br />
                <span className="italic font-serif">the modern enterprise.</span>
              </h1>
              <div className="page-hero-divider"></div>
              <p className="page-hero-desc">
                Empirical research, boardroom monographs, and macroeconomic frameworks authored by our global practice partners.
              </p>
            </div>

            {/* Search Input */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '360px', marginLeft: 'auto' }}>
              <input
                type="text"
                placeholder="Search perspectives..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  backgroundColor: 'var(--bg-cream-100)',
                  border: '1px solid var(--border-medium)',
                  padding: '0.85rem 1rem 0.85rem 2.5rem',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
              <Search style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} size={16} />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* FILTER TABS                                                   */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="container" style={{ padding: '1.5rem 0', borderBottom: '1px solid var(--border-light)' }}>
        <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setSelectedType(t)}
              style={{
                padding: '0.5rem 1rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                whiteSpace: 'nowrap',
                backgroundColor: selectedType === t ? 'var(--text-charcoal)' : 'transparent',
                color: selectedType === t ? 'var(--bg-cream)' : 'var(--text-secondary)',
                fontWeight: selectedType === t ? 700 : 400,
                transition: 'all 0.2s ease'
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* MAGAZINE-STYLE PUBLICATION LAYOUT                             */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="container">
        {featured && (
          <div className="magazine-featured-cover">
            {/* Large Dominant Image */}
            <div style={{ width: '100%', aspectRatio: '16/10', overflow: 'hidden', border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-cream-200)', position: 'relative' }}>
              <Link to={`/insights/${featured.id}`} style={{ display: 'block', width: '100%', height: '100%' }}>
                <img src={featured.image} alt={featured.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', transition: 'transform var(--transition-slow)' }} />
                <div className="work-badge">
                  LEAD MONOGRAPH
                </div>
              </Link>
            </div>

            {/* Featured Article Narrative */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div className="font-mono" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
                <span className="text-terracotta" style={{ fontWeight: 700 }}>{featured.type}</span>
                <span>/</span>
                <span>{featured.readTime}</span>
                <span>/</span>
                <span>{featured.date}</span>
              </div>

              <Link to={`/insights/${featured.id}`} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: 'var(--text-charcoal)', lineHeight: '1.1' }}>
                {featured.title}
              </Link>

              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {featured.subtitle}
              </p>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <img
                    src={featured.author.avatar}
                    alt={featured.author.name}
                    style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', filter: 'grayscale(100%)' }}
                  />
                  <div>
                    <p className="font-mono" style={{ fontSize: '0.75rem', fontWeight: 700 }}>{featured.author.name}</p>
                    <p style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>{featured.author.role}</p>
                  </div>
                </div>

                <Link to={`/insights/${featured.id}`} className="btn-editorial-underline">
                  <span>Read perspective</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Staggered Secondary Articles Spread */}
        <div className="magazine-grid-staggered">
          {regularArticles.map((article, idx) => {
            const colSpanClass = (idx % 3 === 1) ? 'magazine-card-col-8' : 'magazine-card-col-4';
            const imgAspect = (idx % 3 === 1) ? '16/9' : '4/3';

            return (
              <article key={article.id} className={colSpanClass} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', paddingBottom: '2.5rem', borderBottom: '1px solid var(--border-light)' }}>
                <div style={{ width: '100%', aspectRatio: imgAspect, overflow: 'hidden', border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-cream-200)' }}>
                  <Link to={`/insights/${article.id}`} style={{ display: 'block', width: '100%', height: '100%' }}>
                    <img src={article.image} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%', transition: 'transform var(--transition-slow)' }} />
                  </Link>
                </div>

                <div className="font-mono" style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
                  <span className="text-terracotta">{article.type}</span>
                  <span>{article.readTime}</span>
                </div>

                <Link to={`/insights/${article.id}`} style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--text-charcoal)', lineHeight: '1.2' }}>
                  {article.title}
                </Link>

                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                  {article.subtitle}
                </p>

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
      </section>

    </div>
  );
}
