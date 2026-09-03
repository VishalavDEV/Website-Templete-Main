import React, { useState } from 'react';
import { GALLERY_ITEMS, type GalleryItem } from '../../data/gallery';
import { Lightbox } from './Lightbox';
import { DomeGallery } from './DomeGallery';
import { Camera, Grid, Disc } from 'lucide-react';

export const VisualGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [viewMode, setViewMode] = useState<'masonry' | 'dome'>('masonry');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const categories = ['ALL', 'LIVE', 'STUDIO', 'FILM', 'NIGHT', 'PROCESS'];

  const filteredItems = activeCategory === 'ALL'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="visuals" className="section-dark">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Tag */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            color: 'var(--coral)',
            fontFamily: 'var(--font-grotesk)',
            fontSize: '0.8rem',
            letterSpacing: '0.2em',
            marginBottom: '1rem',
            textTransform: 'uppercase'
          }}
        >
          <Camera size={14} />
          <span>11 — CINEMATIC VISUAL ARCHIVE</span>
        </div>

        {/* Section Heading & Controls Header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', gap: '20px' }}>
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.5rem, 6vw, 4.8rem)',
                fontWeight: 400,
                color: 'var(--bg-light)',
                lineHeight: 1.05
              }}
            >
              SEE THE <br />
              <span style={{ fontStyle: 'italic', color: 'var(--accent-warm)' }}>SOUND.</span>
            </h2>
          </div>

          {/* View Mode Switcher (Masonry vs Dome) */}
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={() => setViewMode('masonry')}
              style={{
                padding: '10px 18px',
                backgroundColor: viewMode === 'masonry' ? 'var(--accent-warm)' : 'rgba(242, 238, 232, 0.1)',
                color: '#FFF',
                fontFamily: 'var(--font-grotesk)',
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                borderRadius: '2px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
              data-cursor="MASONRY VIEW"
            >
              <Grid size={14} />
              <span>GRID ARCHIVE</span>
            </button>
            <button
              onClick={() => setViewMode('dome')}
              style={{
                padding: '10px 18px',
                backgroundColor: viewMode === 'dome' ? 'var(--accent-warm)' : 'rgba(242, 238, 232, 0.1)',
                color: '#FFF',
                fontFamily: 'var(--font-grotesk)',
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                borderRadius: '2px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
              data-cursor="DOME VIEW"
            >
              <Disc size={14} />
              <span>DOME 3D VIEW</span>
            </button>
          </div>
        </div>

        {/* Category Filters (GooeyNav style) */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '2.5rem' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '8px 20px',
                borderRadius: '20px',
                backgroundColor: activeCategory === cat ? 'var(--coral)' : 'rgba(242, 238, 232, 0.06)',
                color: activeCategory === cat ? 'var(--bg-dark)' : 'var(--text-muted-on-dark)',
                fontFamily: 'var(--font-grotesk)',
                fontSize: '0.8rem',
                letterSpacing: '0.12em',
                fontWeight: activeCategory === cat ? 700 : 400,
                transition: 'var(--transition-smooth)'
              }}
              data-cursor={cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Content Render: Masonry Grid or 3D Dome */}
        {viewMode === 'masonry' ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '24px'
            }}
          >
            {filteredItems.map(item => (
              <div
                key={item.id}
                onClick={() => setActiveLightboxItem(item)}
                style={{
                  borderRadius: '6px',
                  background: `linear-gradient(135deg, ${item.colorHex} 0%, #241F23 100%)`,
                  padding: '30px',
                  minHeight: item.aspectRatio === 'vertical' ? '400px' : '260px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  color: '#FFFFFF',
                  border: '1px solid var(--border-dark)',
                  boxShadow: 'var(--shadow-subtle)',
                  cursor: 'pointer',
                  transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                data-cursor="VIEW VISUAL"
              >
                <span
                  style={{
                    fontFamily: 'var(--font-grotesk)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.15em',
                    color: 'var(--lavender)',
                    textTransform: 'uppercase'
                  }}
                >
                  {item.category} // {item.year}
                </span>

                <div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '6px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                    {item.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <DomeGallery onSelect={(item) => setActiveLightboxItem(item)} />
        )}
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        item={activeLightboxItem}
        items={filteredItems}
        onClose={() => setActiveLightboxItem(null)}
        onNavigate={(idx) => setActiveLightboxItem(filteredItems[idx])}
      />
    </section>
  );
};
