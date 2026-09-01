import React, { useState } from 'react';
import { galleryItems } from '../data/galleryData';
import { Eye, ChevronLeft, ChevronRight, X, Sparkles } from 'lucide-react';

export const GalleryGrid = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ['All', 'Car Wash', 'Detailing', 'Paint', 'Polishing', 'Equipment', 'Workshop'];

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const prevImage = () => {
    setLightboxIndex(lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1);
  };

  const nextImage = () => {
    setLightboxIndex(lightboxIndex === filteredItems.length - 1 ? 0 : lightboxIndex + 1);
  };

  return (
    <section style={{ padding: '60px 0', position: 'relative' }}>
      <div className="container">
        {/* Category Tabs */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          flexWrap: 'wrap',
          marginBottom: '40px'
        }}>
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={isActive ? "btn-primary" : "btn-secondary"}
                style={{ padding: '8px 18px', fontSize: '0.85rem', borderRadius: '99px' }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="gallery-card"
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                height: '280px',
                cursor: 'pointer',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="gallery-img"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }}
              />

              {/* Dark Hover Overlay */}
              <div className="gallery-overlay" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(180deg, rgba(7, 9, 11, 0.2) 0%, rgba(7, 9, 11, 0.92) 100%)',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                opacity: 0,
                transition: 'opacity 0.35s ease'
              }}>
                <div style={{ alignSelf: 'flex-end' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: '#7cff4f',
                    color: '#07090b',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 15px rgba(124,255,79,0.5)'
                  }}>
                    <Eye size={20} />
                  </div>
                </div>

                <div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: '#7cff4f',
                    fontWeight: '800',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase'
                  }}>
                    {item.category}
                  </div>
                  <h4 style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1.25rem',
                    color: '#f5f7f8',
                    fontWeight: '800',
                    marginTop: '4px'
                  }}>
                    {item.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(7, 9, 11, 0.95)',
          backdropFilter: 'blur(20px)',
          zIndex: 2000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              background: '#111417',
              border: '1px solid #7cff4f',
              color: '#7cff4f',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 2010
            }}
          >
            <X size={24} />
          </button>

          {/* Prev Button */}
          <button
            onClick={prevImage}
            style={{
              position: 'absolute',
              left: '24px',
              background: '#111417',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#f5f7f8',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 2010
            }}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Main Lightbox Content */}
          <div style={{
            maxWidth: '900px',
            width: '100%',
            textAlign: 'center',
            background: '#111417',
            border: '1px solid rgba(124, 255, 79, 0.3)',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 25px 60px rgba(0,0,0,0.9)'
          }}>
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              style={{
                width: '100%',
                maxHeight: '60vh',
                objectFit: 'cover'
              }}
            />
            <div style={{ padding: '24px' }}>
              <div style={{ fontSize: '0.8rem', color: '#7cff4f', fontWeight: '800', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                {filteredItems[lightboxIndex].category}
              </div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.6rem', color: '#f5f7f8', marginTop: '4px' }}>
                {filteredItems[lightboxIndex].title}
              </h3>
              <p style={{ color: '#b9c0c5', fontSize: '0.95rem', marginTop: '8px' }}>
                {filteredItems[lightboxIndex].description}
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextImage}
            style={{
              position: 'absolute',
              right: '24px',
              background: '#111417',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#f5f7f8',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 2010
            }}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}

      <style>{`
        .gallery-card:hover .gallery-img {
          transform: scale(1.1);
        }
        .gallery-card:hover .gallery-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};

export default GalleryGrid;
