import React, { useState } from 'react';
import { ArrowUpRight, Clock, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';

const insightsData = [
  {
    id: 'art-01',
    category: 'Brand Strategy',
    readTime: '6 min read',
    date: 'OCT 2026',
    title: 'The Death of Sameness: Why Ultra-Minimalist Branding Lost Its Soul',
    excerpt: 'Over the last decade, tech homogeny stripped brands of nuance. We explore the tactical revival of tactile typography, bespoke silhouettes, and idiosyncratic identity design.',
    author: 'Elena Rostova',
    role: 'Principal Strategist'
  },
  {
    id: 'art-02',
    category: 'Design Systems',
    readTime: '8 min read',
    date: 'SEP 2026',
    title: 'Spatial Typography & Liquid Layouts: Crafting High-Contrast Interfaces',
    excerpt: 'How our studio orchestrates Syne, Plus Jakarta Sans, and micro-grid systems across multi-device canvases without losing emotional tension.',
    author: 'Kaelen Vance',
    role: 'Creative Director'
  },
  {
    id: 'art-03',
    category: 'Creative Tech',
    readTime: '5 min read',
    date: 'AUG 2026',
    title: 'Generative Atmospheres: Balancing Algorithmic Generation with Human Taste',
    excerpt: 'Artificial intelligence is not a shortcut; it is a raw brush. How we deploy neural shaders to sculpt brand experiences that feel alive.',
    author: 'Marcus Thorne',
    role: 'Lead Interactive Technologist'
  }
];

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  const [activeArticle, setActiveArticle] = useState(null);

  const categories = ['All', 'Brand Strategy', 'Design Systems', 'Creative Tech'];

  const filteredInsights = activeCategory === 'All'
    ? insightsData
    : insightsData.filter(item => item.category === activeCategory);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 3000);
  };

  return (
    <section id="insights" className="section-padding" style={{ backgroundColor: 'var(--bg-color)', borderTop: '1px solid var(--border-color)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontFamily: 'monospace', fontSize: '0.8rem', color: 'var(--accent-color)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            <span>[ 04 ]</span>
            <span>Agency Perspectives & Field Notes</span>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '2rem' }}>
            <h2 style={{ fontFamily: 'var(--font-headings)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.05, maxWidth: '680px' }}>
              Insights from the bleeding edge of design.
            </h2>

            {/* Category Filter Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '0.5rem 1.1rem',
                    borderRadius: '9999px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    border: '1px solid',
                    borderColor: activeCategory === cat ? 'var(--text-primary)' : 'var(--border-color)',
                    backgroundColor: activeCategory === cat ? 'var(--text-primary)' : 'transparent',
                    color: activeCategory === cat ? 'var(--bg-color)' : 'var(--text-secondary)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Articles List */}
        <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid var(--border-color)' }}>
          {filteredInsights.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveArticle(activeArticle === item.id ? null : item.id)}
              style={{
                padding: '2.25rem 0',
                borderBottom: '1px solid var(--border-color)',
                display: 'grid',
                gridTemplateColumns: 'minmax(120px, 1fr) 2fr 1fr auto',
                gap: '2rem',
                alignItems: 'center',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
              className="insight-row group"
            >
              {/* Meta */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <span style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: 'var(--accent-color)' }}>
                  {item.date}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  {item.category}
                </span>
              </div>

              {/* Title & Preview */}
              <div>
                <h3 style={{ fontFamily: 'var(--font-headings)', fontSize: 'clamp(1.2rem, 2vw, 1.7rem)', fontWeight: 700, lineHeight: 1.25, marginBottom: activeArticle === item.id ? '0.75rem' : '0' }}>
                  {item.title}
                </h3>
                {activeArticle === item.id && (
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginTop: '0.5rem' }}>
                    {item.excerpt}
                  </p>
                )}
              </div>

              {/* Author & Read Time */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{item.author}</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Clock size={12} /> {item.readTime}
                </span>
              </div>

              {/* Arrow */}
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}>
                <ArrowUpRight size={18} />
              </div>
            </div>
          ))}
        </div>

        {/* Thought Leadership Dispatch Box */}
        <div style={{ marginTop: '4.5rem', padding: '2.5rem', borderRadius: '4px', border: '1px solid var(--border-color)', backgroundColor: 'rgba(255,255,255,0.02)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', fontFamily: 'monospace', color: 'var(--accent-color)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              <Sparkles size={14} />
              <span>Vanta Quarterly Dispatch</span>
            </div>
            <h4 style={{ fontFamily: 'var(--font-headings)', fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.3rem' }}>
              Deep-dives delivered to your inbox every season.
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Strictly confidential observations, typeface releases, and agency post-mortems. No promotional spam.
            </p>
          </div>

          <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.75rem', width: '100%', maxWidth: '420px' }}>
            {subscribed ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10b981', fontSize: '0.9rem', fontWeight: 600 }}>
                <CheckCircle2 size={20} />
                <span>Subscribed to Vanta Dispatch. Welcome aboard.</span>
              </div>
            ) : (
              <>
                <input
                  type="email"
                  required
                  placeholder="editor@studio.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: 1,
                    padding: '0.85rem 1rem',
                    backgroundColor: 'transparent',
                    border: '1px solid var(--border-color)',
                    borderRadius: '2px',
                    color: 'var(--text-primary)',
                    fontSize: '0.88rem',
                    outline: 'none'
                  }}
                />
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ padding: '0.85rem 1.5rem', whiteSpace: 'nowrap' }}
                >
                  <span>Join</span>
                  <ArrowUpRight size={15} />
                </button>
              </>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}
