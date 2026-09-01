import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from '../components/Icons';
import { INSIGHTS } from '../data/content';

export default function BlogDetails() {
  const { id } = useParams();
  const article = INSIGHTS.find(a => a.id === id) || INSIGHTS[0];
  const relatedArticles = INSIGHTS.filter(a => a.id !== article.id).slice(0, 2);

  return (
    <div>
      
      {/* ───────────────────────────────────────────────────────────── */}
      {/* COMPACT EDITORIAL PAGE HERO                                   */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="page-hero-editorial">
        <div className="container">
          <div style={{ marginBottom: '1.5rem' }}>
            <Link to="/insights" className="link-editorial font-mono" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-secondary)' }}>
              <ArrowLeft size={14} />
              <span>Back to Perspectives</span>
            </Link>
          </div>

          <div style={{ maxWidth: '960px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="font-mono" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
              <span className="text-terracotta" style={{ fontWeight: 700 }}>{article.type}</span>
              <span>·</span>
              <span>{article.readTime}</span>
              <span>·</span>
              <span>{article.date}</span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: '1.04', color: 'var(--text-charcoal)' }}>
              {article.title}
            </h1>

            <p className="font-serif italic" style={{ fontSize: '1.35rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
              {article.subtitle}
            </p>

            {/* Author Bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', filter: 'grayscale(100%)' }}
                />
                <div>
                  <p className="font-mono" style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase' }}>{article.author.name}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{article.author.role}</p>
                </div>
              </div>

              <span className="font-mono text-secondary" style={{ fontSize: '0.75rem', textTransform: 'uppercase' }}>
                Executive Monograph
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* LARGE EDITORIAL IMAGE                                         */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="container" style={{ padding: '3.5rem 0' }}>
        <div style={{ border: '1px solid var(--border-light)', aspectRatio: '16/7', overflow: 'hidden', backgroundColor: 'var(--bg-cream-200)' }}>
          <img src={article.image} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 35%' }} />
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* ARTICLE CONTENT (EDITORIAL SPREAD)                            */}
      {/* ───────────────────────────────────────────────────────────── */}
      <article className="container" style={{ maxWidth: '820px', paddingBottom: '100px', display: 'flex', flexDirection: 'column', gap: '2.5rem', fontSize: '1.15rem', color: 'var(--text-charcoal)', lineHeight: '1.8' }}>
        
        {/* Executive Thesis Callout */}
        <div style={{ padding: '2rem', backgroundColor: 'var(--bg-cream-100)', borderLeft: '4px solid var(--accent-terracotta)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <p className="font-mono" style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em' }}>Executive Thesis</p>
          <p className="font-serif italic" style={{ fontSize: '1.35rem', color: 'var(--text-charcoal)' }}>
            In an era of compressed economic cycles, resilience is not insurance against disaster—it is the ultimate engine of long-term total shareholder return.
          </p>
        </div>

        {article.content.map((paragraph, index) => (
          <p key={index}>
            {paragraph}
          </p>
        ))}

        {/* Pull Quote */}
        <div style={{ padding: '2.5rem 0', margin: '1.5rem 0', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)', textAlign: 'center' }}>
          <blockquote className="font-serif italic" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: 'var(--text-charcoal)', lineHeight: '1.25' }}>
            “An enterprise optimized solely for peace and stability becomes catastrophic when the external environment becomes chaotic.”
          </blockquote>
        </div>

        <p>
          Strategic resilience demands an active reconfiguration of organizational governance. Rather than centralizing decisions in a multi-tier management pyramid, high-performing firms deploy localized execution pods authorized to commit capital within strict operational parameters.
        </p>

        <p>
          As we look toward the next economic horizon, the winners will not be those who cut furthest, but those who build the dynamic capacity to capitalize on competitor distress during structural shocks.
        </p>

      </article>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* RELATED PERSPECTIVES                                          */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="section-py bg-cream-100 border-t">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          <div>
            <p className="font-mono text-terracotta" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>Related Intelligence</p>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem' }}>More from ORION Perspectives</h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            {relatedArticles.map((rel) => (
              <div key={rel.id} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-light)' }}>
                <div className="font-mono" style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
                  <span className="text-terracotta">{rel.type}</span>
                  <span>{rel.readTime}</span>
                </div>
                <Link to={`/insights/${rel.id}`} style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--text-charcoal)' }}>
                  {rel.title}
                </Link>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{rel.subtitle}</p>
                <div>
                  <Link to={`/insights/${rel.id}`} className="btn-editorial-underline">
                    <span>Read perspective</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
