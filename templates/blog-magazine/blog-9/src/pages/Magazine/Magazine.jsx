import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Layers, Filter } from 'lucide-react';
import DepthCarousel from '../../components/DepthCarousel/DepthCarousel';
import { getIssues } from '../../services/mockApi';
import './Magazine.css';

export default function Magazine() {
  const [issues, setIssues] = useState([]);
  const [activeYear, setActiveYear] = useState('all');

  useEffect(() => {
    getIssues().then(setIssues);
  }, []);

  const carouselItems = issues.map(iss => ({
    image: iss.coverImage,
    alt: `${iss.month} ${iss.year}`,
    title: iss.title,
    tag: `${iss.month.toUpperCase()} ${iss.year}`,
    dek: iss.subtitle,
    link: `/magazine/${iss.slug}`
  }));

  const filteredIssues = issues.filter(iss => {
    if (activeYear === 'all') return true;
    return iss.year === activeYear;
  });

  return (
    <div className="magazine-page">
      <div className="atlas-container">
        <header className="magazine-hero">
          <div className="atlas-section-eyebrow" style={{ justifyContent: 'center' }}>
            <BookOpen size={14} />
            <span>Digital Collection</span>
          </div>
          <h1 className="atlas-section-title">The Magazine Collection</h1>
          <p className="atlas-section-subtitle" style={{ margin: '0 auto' }}>
            Browse contemporary and retrospective issues of ATLAS. Each edition is crafted around a central scientific exploration theme.
          </p>
        </header>
      </div>

      {/* Featured Depth Carousel */}
      {carouselItems.length > 0 && (
        <div className="magazine-carousel-block">
          <div className="atlas-container" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div className="atlas-section-eyebrow" style={{ justifyContent: 'center' }}>
              <span>Recent Issues</span>
            </div>
          </div>
          <DepthCarousel
            items={carouselItems}
            cardWidth={320}
            cardHeight={450}
            spread={90}
            depth={220}
            tilt={18}
          />
        </div>
      )}

      {/* Full Archive Grid with Year Filter */}
      <div className="atlas-container">
        <div className="magazine-filters-bar">
          <div className="magazine-year-tabs">
            <button
              type="button"
              className={`magazine-year-btn${activeYear === 'all' ? ' is-active' : ''}`}
              onClick={() => setActiveYear('all')}
            >
              All Volumes ({issues.length})
            </button>
            <button
              type="button"
              className={`magazine-year-btn${activeYear === '2026' ? ' is-active' : ''}`}
              onClick={() => setActiveYear('2026')}
            >
              2026
            </button>
            <button
              type="button"
              className={`magazine-year-btn${activeYear === '2025' ? ' is-active' : ''}`}
              onClick={() => setActiveYear('2025')}
            >
              2025
            </button>
          </div>

          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Showing {filteredIssues.length} editions
          </div>
        </div>

        <div className="magazine-grid-full">
          {filteredIssues.map(iss => (
            <Link key={iss.id} to={`/magazine/${iss.slug}`} className="magazine-archive-card">
              <div className="magazine-archive-cover">
                <img src={iss.coverImage} alt={iss.title} loading="lazy" />
              </div>
              <div className="magazine-archive-body">
                <span className="magazine-archive-date">{iss.month} {iss.year} · {iss.number}</span>
                <h3 className="magazine-archive-title">{iss.title}</h3>
                <p className="magazine-archive-meta">{iss.subtitle}</p>
                <div className="magazine-archive-link">
                  <span>Read Issue ({iss.storyCount} Stories)</span>
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
