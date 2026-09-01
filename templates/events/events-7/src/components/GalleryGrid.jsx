import React, { useState } from 'react';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data/gallery';
import { X, ZoomIn } from 'lucide-react';

const FALLBACK_GALLERY_IMAGE = "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80";

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeImage, setActiveImage] = useState(null);
  const [failedImages, setFailedImages] = useState({});

  const handleImageError = (id) => {
    setFailedImages(prev => ({ ...prev, [id]: true }));
  };

  const filteredItems = activeCategory === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div>
      {/* Category Filter Tabs */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        flexWrap: 'wrap',
        marginBottom: '40px'
      }}>
        {GALLERY_CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            style={{
              background: activeCategory === cat.id 
                ? 'linear-gradient(135deg, var(--marathon-red), var(--bright-orange))' 
                : 'rgba(255, 255, 255, 0.05)',
              border: activeCategory === cat.id ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
              color: '#FFFFFF',
              padding: '10px 20px',
              borderRadius: '20px',
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: '0.82rem',
              transition: 'all 0.3s ease'
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Masonry-style Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '20px'
      }}>
        {filteredItems.map(item => {
          const src = failedImages[item.id] ? FALLBACK_GALLERY_IMAGE : item.image;

          return (
            <div 
              key={item.id}
              onClick={() => setActiveImage({ ...item, displaySrc: src })}
              className="glass-panel"
              style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                cursor: 'pointer',
                height: '260px'
              }}
            >
              <img 
                src={src} 
                alt={item.title}
                onError={() => handleImageError(item.id)}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />

              {/* Hover Caption Overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, transparent 40%, rgba(9,10,13,0.9) 100%)',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                color: '#FFFFFF'
              }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--bright-orange)', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                  {item.category}
                </span>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800 }}>{item.title}</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--soft-grey)' }}>{item.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Fullscreen Viewer */}
      {activeImage && (
        <div 
          onClick={() => setActiveImage(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(9,10,13,0.96)',
            backdropFilter: 'blur(20px)',
            zIndex: 3000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
        >
          <button 
            onClick={() => setActiveImage(null)}
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              color: '#FFF',
              padding: '10px',
              borderRadius: '50%',
              cursor: 'pointer'
            }}
          >
            <X size={24} />
          </button>

          <div 
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '900px', width: '100%', textAlign: 'center' }}
          >
            <img 
              src={activeImage.displaySrc || activeImage.image} 
              alt={activeImage.title}
              style={{
                maxWidth: '100%',
                maxHeight: '75vh',
                borderRadius: '12px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.9)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            />
            <h3 className="font-display" style={{ fontSize: '2rem', color: '#FFF', marginTop: '16px' }}>
              {activeImage.title}
            </h3>
            <p style={{ color: 'var(--bright-orange)', fontSize: '0.9rem' }}>
              {activeImage.subtitle} • Photo by {activeImage.photographer}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
