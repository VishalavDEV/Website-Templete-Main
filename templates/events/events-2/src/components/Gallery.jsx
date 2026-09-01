import React, { useState } from 'react';
import { galleryItems } from '../data/gallery';
import { Lightbox } from './Lightbox';
import { Maximize2 } from 'lucide-react';
import '../styles/gallery.css';

export const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ['All', 'Keynotes', 'Workshops', 'Networking', 'Behind the Scenes', 'Awards'];

  const filteredItems = filter === 'All'
    ? galleryItems
    : galleryItems.filter((g) => g.category.toLowerCase() === filter.toLowerCase());

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="section-tag">SUMMIT GALLERY</div>
          <h2 className="section-title">Capturing Global Moments</h2>
          <p className="section-subtitle">
            Explore high-resolution photography highlights from keynote speeches, technical labs, networking receptions, and award ceremonies.
          </p>

          {/* Filter Pills */}
          <div className="filter-pills" style={{ marginTop: '24px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-pill ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item, index) => (
            <div key={item.id} className="gallery-item" onClick={() => handleOpenLightbox(index)}>
              <img src={item.image} alt={item.title} className="gallery-item-img" />
              <div className="gallery-overlay">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <span className="gallery-category">{item.category}</span>
                  <Maximize2 size={16} color="var(--accent-cyan)" />
                </div>
                <h3 className="gallery-title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <Lightbox
          items={filteredItems}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
};
