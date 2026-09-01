import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowRight } from 'lucide-react';
import AccordionGallery from '../../components/AccordionGallery/AccordionGallery';
import StoryCard from '../../components/StoryCard/StoryCard';
import { getCategories, getArticles } from '../../services/mockApi';

export default function Explore() {
  const [categories, setCategories] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getCategories().then(setCategories);
    getArticles().then(setArticles);
  }, []);

  const accordionItems = categories.map(cat => ({
    image: cat.panelImage || cat.heroImage,
    label: cat.name.toUpperCase(),
    desc: cat.description,
    link: `/${cat.slug}`
  }));

  return (
    <div style={{ paddingTop: '6rem', minHeight: '100vh' }}>
      <div className="atlas-container" style={{ paddingBottom: '7rem' }}>
        <header style={{ textAlign: 'center', maxWidth: '780px', margin: '3rem auto 4rem' }}>
          <div className="atlas-section-eyebrow" style={{ justifyContent: 'center' }}>
            <Compass size={14} />
            <span>Exploration Hub</span>
          </div>
          <h1 className="atlas-section-title">Explore All Departments</h1>
          <p className="atlas-section-subtitle" style={{ margin: '0 auto' }}>
            Navigate the breadth of ATLAS across nature, wildlife, oceanography, astrophysics, deep history, and anthropology.
          </p>
        </header>

        {/* Interactive Accordion Gallery */}
        {accordionItems.length > 0 && (
          <div style={{ marginBottom: '6rem' }}>
            <AccordionGallery
              items={accordionItems}
              height={500}
              expandRatio={0.44}
            />
          </div>
        )}

        {/* Department Grid Cards */}
        <div className="atlas-section-eyebrow" style={{ marginBottom: '2rem' }}>
          <span>Curated Topic Indexes</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '6rem' }}>
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/${cat.slug}`}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '14px',
                overflow: 'hidden',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 30px -10px rgba(80,60,40,0.08)',
                backdropFilter: 'blur(8px)'
              }}
              className="magazine-archive-card"
            >
              <div style={{ width: '100%', height: '180px', overflow: 'hidden' }}>
                <img src={cat.heroImage} alt={cat.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-ochre)', marginBottom: '0.4rem' }}>
                  Department
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  {cat.name}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                  {cat.description}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent-ochre)' }}>
                  <span>Enter Department</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* All Dispatches Feed */}
        <div className="atlas-section-eyebrow" style={{ marginBottom: '2rem' }}>
          <span>Complete Archive Feed ({articles.length})</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {articles.map(article => (
            <StoryCard key={article.id} story={article} />
          ))}
        </div>
      </div>
    </div>
  );
}
