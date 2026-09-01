import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Compass, Sparkles, Eye } from 'lucide-react';
import StoryCard from '../../components/StoryCard/StoryCard';
import HalftoneReveal from '../../components/HalftoneReveal/HalftoneReveal';
import { getCategoryBySlug } from '../../services/mockApi';
import './Category.css';

export default function Category({ slugOverride }) {
  const { slug: urlSlug } = useParams();
  const slug = slugOverride || urlSlug;
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getCategoryBySlug(slug).then(data => {
      setCategory(data);
      setLoading(false);
    });
  }, [slug]);

  if (loading) {
    return (
      <div className="category-page" style={{ padding: '10rem 0', textAlign: 'center' }}>
        <div className="atlas-container">
          <div className="atlas-skeleton" style={{ height: '300px', marginBottom: '2rem' }} />
          <div className="atlas-skeleton" style={{ height: '40px', width: '300px', margin: '0 auto' }} />
        </div>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="category-page" style={{ padding: '10rem 0', textAlign: 'center' }}>
        <div className="atlas-container">
          <h2 style={{ color: 'var(--text-primary)' }}>Department Not Found</h2>
          <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>
            The requested topic could not be located in the ATLAS archive.
          </p>
          <Link to="/explore" className="atlas-btn atlas-btn-primary" style={{ marginTop: '2rem' }}>
            Explore All Departments
          </Link>
        </div>
      </div>
    );
  }

  const isPlanet = slug === 'planet';
  const halftoneImageSrc =
    isPlanet
      ? 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1800&q=90'
      : category.heroImage;

  return (
    <div className="category-page">
      {/* Category Hero */}
      <section className="category-hero">
        <div className="category-hero-bg">
          <img src={category.heroImage} alt={category.name} />
        </div>
        <div className="category-hero-overlay" />

        <div className="atlas-container category-hero-content">
          <div className="category-hero-eyebrow">
            <Compass size={14} style={{ display: 'inline', marginRight: '6px' }} />
            <span>Department of {category.name}</span>
          </div>
          <h1 className="category-hero-title">{category.title}</h1>
          <p className="category-hero-desc">{category.longDescription || category.description}</p>
        </div>
      </section>

      <div className="atlas-container category-content-layout">
        {/* Interactive HalftoneReveal Feature */}
        <section className="category-halftone-section" aria-label="Interactive Plate Reveal">
          <div className="atlas-section-eyebrow" style={{ marginBottom: '1.25rem' }}>
            <Sparkles size={14} />
            <span>High-Resolution Field Plate · Interactive Halftone Reveal</span>
          </div>

          <div className="category-halftone-wrapper">
            <HalftoneReveal
              src={halftoneImageSrc}
              inkColor="#17181c"
              paperColor="#f4efe4"
              mode="mono"
              dotDensity={84}
              angle={28}
              revealRadius={0.32}
              borderRadius="20px"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="category-halftone-badge">
              <Eye size={14} color="#c4892c" />
              <span>Hover cursor over print to reveal optical plate</span>
            </div>
          </div>
        </section>

        {/* Stories Grid with Halftone enabled for all images on Planet */}
        <div className="atlas-section-eyebrow" style={{ marginBottom: '2rem' }}>
          <span>Department Dispatches ({category.allArticles.length})</span>
        </div>

        <div className="category-stories-grid">
          {category.allArticles.map(article => (
            <StoryCard
              key={article.id}
              story={article}
              useHalftone={isPlanet || true}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
