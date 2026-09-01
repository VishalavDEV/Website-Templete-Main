import React, { useState } from 'react';
import { galleryImages } from '../data/gallery';
import { Image as ImageIcon, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="gallery" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-header">
        <div className="section-tag">
          <ImageIcon size={14} /> Visual Archives
        </div>
        <h2 className="section-title">
          VERTEX <span className="text-gradient">Photo Gallery</span>
        </h2>
        <p className="section-subtitle">
          Moments captured from previous summit editions: cryogenic dilution fridges, bipedal humanoid balance trials, drone flight arenas, and packed keynote auditoriums.
        </p>
      </div>

      {/* Responsive Masonry / Column Grid */}
      <div
        style={{
          columnCount: 3,
          columnGap: '20px'
        }}
        className="masonry-grid"
      >
        {galleryImages.map((img, idx) => (
          <div
            key={img.id}
            className="glass-card"
            onClick={() => openLightbox(idx)}
            style={{
              marginBottom: '20px',
              breakInside: 'avoid',
              borderRadius: '16px',
              overflow: 'hidden',
              cursor: 'pointer',
              position: 'relative'
            }}
          >
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <img
                src={img.url}
                alt={img.title}
                loading="lazy"
                style={{
                  width: '100%',
                  display: 'block',
                  transition: 'transform 0.4s ease',
                  objectFit: 'cover'
                }}
              />

              {/* Hover Overlay */}
              <div
                className="gallery-hover-overlay"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(180deg, rgba(8,11,18,0.2) 0%, rgba(8,11,18,0.85) 100%)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ alignSelf: 'flex-end' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'rgba(0, 240, 255, 0.2)',
                      border: '1px solid var(--accent-cyan)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#00f0ff'
                    }}
                  >
                    <ZoomIn size={18} />
                  </div>
                </div>

                <div>
                  <span className="badge badge-cyan" style={{ marginBottom: '6px' }}>
                    {img.category}
                  </span>
                  <h4 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '4px' }}>{img.title}</h4>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{img.caption}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Fullscreen Modal */}
      {lightboxIndex !== null && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(8, 11, 18, 0.95)',
            backdropFilter: 'blur(20px)',
            zIndex: 3000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 20px'
          }}
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            aria-label="Close lightbox"
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid var(--glass-border)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 3001
            }}
          >
            <X size={24} />
          </button>

          {/* Prev Button */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            aria-label="Previous image"
            style={{
              position: 'absolute',
              left: '24px',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid var(--glass-border)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 3001
            }}
          >
            <ChevronLeft size={28} />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            aria-label="Next image"
            style={{
              position: 'absolute',
              right: '24px',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid var(--glass-border)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 3001
            }}
          >
            <ChevronRight size={28} />
          </button>

          {/* Main Lightbox Content */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '1000px',
              width: '100%',
              maxHeight: '85vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img
              src={galleryImages[lightboxIndex].url}
              alt={galleryImages[lightboxIndex].title}
              style={{
                maxHeight: '68vh',
                maxWidth: '100%',
                objectFit: 'contain',
                borderRadius: '16px',
                boxShadow: '0 0 40px rgba(0, 240, 255, 0.2)',
                marginBottom: '20px'
              }}
            />
            <div style={{ textAlign: 'center', maxWidth: '700px' }}>
              <span className="badge badge-cyan" style={{ marginBottom: '8px' }}>
                {galleryImages[lightboxIndex].category}
              </span>
              <h3 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '6px' }}>
                {galleryImages[lightboxIndex].title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                {galleryImages[lightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .glass-card:hover .gallery-hover-overlay {
          opacity: 1 !important;
        }
        @media (max-width: 1024px) {
          .masonry-grid { column-count: 2 !important; }
        }
        @media (max-width: 640px) {
          .masonry-grid { column-count: 1 !important; }
        }
      `}</style>
    </section>
  );
}
