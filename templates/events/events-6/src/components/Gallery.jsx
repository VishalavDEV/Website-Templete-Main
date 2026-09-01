import React, { useState } from 'react';
import { Maximize2, ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const categories = ['ALL', 'LIVE', 'ARTISTS', 'STAGE', 'DJ', 'CROWD', 'BEHIND THE SCENES'];

  const galleryItems = [
    { id: 1, title: 'Lead Singer Under Golden Light', category: 'LIVE', image: '/images/hero_performer.jpg' },
    { id: 2, title: 'Aurora Main Stage Spectacle', category: 'STAGE', image: '/images/main_stage.jpg' },
    { id: 3, title: 'DJ Night Frequency Mix', category: 'DJ', image: '/images/dj_performer.jpg' },
    { id: 4, title: 'Electrifying Festival Crowd', category: 'CROWD', image: '/images/main_stage.jpg' },
    { id: 5, title: 'Acoustic Soul Performance', category: 'ARTISTS', image: '/images/hero_performer.jpg' },
    { id: 6, title: 'Backstage Soundcheck & Gear', category: 'BEHIND THE SCENES', image: '/images/dj_performer.jpg' },
  ];

  const filteredItems = activeCategory === 'ALL'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index) => setActiveImageIndex(index);
  const closeLightbox = () => setActiveImageIndex(null);

  const nextImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div style={{ position: 'relative', zIndex: 10 }}>
      {/* Category Filter Bar */}
      <div className="gallery-filter-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Layout */}
      <div className="gallery-grid">
        {filteredItems.map((item, index) => (
          <div key={item.id} className="gallery-item" onClick={() => openLightbox(index)}>
            <img src={item.image} alt={item.title} />
            <div className="gallery-item-hover">
              <div className="gallery-item-icon">
                <Maximize2 size={22} />
              </div>
              <h4 style={{ fontFamily: 'var(--font-display)', color: '#FFF', fontSize: '1.1rem', textAlign: 'center', padding: '0 16px' }}>
                {item.title}
              </h4>
              <span style={{ fontSize: '0.75rem', color: 'var(--gold-bright)', letterSpacing: '1px', marginTop: '4px' }}>
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeImageIndex !== null && (
        <div className="lightbox-modal">
          <div className="lightbox-content">
            <button className="lightbox-close" onClick={closeLightbox}>
              <X size={36} />
            </button>

            <button className="lightbox-btn prev" onClick={prevImage}>
              <ChevronLeft size={28} />
            </button>

            <img
              src={filteredItems[activeImageIndex].image}
              alt={filteredItems[activeImageIndex].title}
            />

            <div style={{ textAlign: 'center', marginTop: '16px' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', color: '#FFF', fontSize: '1.4rem' }}>
                {filteredItems[activeImageIndex].title}
              </h3>
              <p style={{ color: 'var(--gold-bright)', fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
                {filteredItems[activeImageIndex].category}
              </p>
            </div>

            <button className="lightbox-btn next" onClick={nextImage}>
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
