import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const categories = [
    { id: 'all', label: 'All Vistas' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'rooms', label: 'Rooms' },
    { id: 'dining', label: 'Dining' },
    { id: 'wellness', label: 'Wellness' },
    { id: 'pool', label: 'Pool & Courtyard' },
    { id: 'events', label: 'Events' }
  ];

  const items = [
    { id: 1, category: 'architecture', image: 'images/1_hero_overview.jpg', title: 'Palace Facade' },
    { id: 2, category: 'architecture', image: 'images/2_hotel_entrance.jpg', title: 'Grand Archways' },
    { id: 3, category: 'architecture', image: 'images/3_the_lobby.jpg', title: 'Lobby Dome' },
    { id: 4, category: 'rooms', image: 'images/4_palace_suite.jpg', title: 'Chamber Detail' },
    { id: 5, category: 'rooms', image: 'images/5_the_view.jpg', title: 'Window Jharokha' },
    { id: 6, category: 'dining', image: 'images/6_fine_dining.jpg', title: 'Thali Table' },
    { id: 7, category: 'wellness', image: 'images/7_wellbeing_spa.jpg', title: ' Ayurvedic Bath' },
    { id: 8, category: 'pool', image: 'images/8_courtyard_pool.jpg', title: 'Reflecting Pool' },
    { id: 9, category: 'events', image: 'images/9_evening_experience.jpg', title: 'Rooftop Terrace' }
  ];

  const filteredItems = activeCategory === 'all' 
    ? items 
    : items.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" style={{ padding: '8rem 0', backgroundColor: 'var(--color-ivory)', position: 'relative' }}>
      
      {/* Background visual detail */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '2%',
        fontSize: '10rem',
        fontFamily: 'var(--font-serif-header)',
        color: 'var(--color-sandstone-light)',
        opacity: 0.12,
        userSelect: 'none',
        pointerEvents: 'none',
        zIndex: 1
      }}>
        GALLERY
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <div className="section-header">
          <span className="subtitle">Visual Chronicles</span>
          <h2>Ananthara Gallery</h2>
        </div>

        {/* Category Filters */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            flexWrap: 'wrap', 
            gap: '1rem', 
            marginBottom: '3.5rem' 
          }}
        >
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                background: 'none',
                border: '1px solid',
                borderColor: activeCategory === cat.id ? 'var(--color-brass)' : 'rgba(194, 155, 79, 0.25)',
                color: activeCategory === cat.id ? 'var(--color-teak-dark)' : 'var(--color-teak-light)',
                backgroundColor: activeCategory === cat.id ? 'rgba(194, 155, 79, 0.1)' : 'transparent',
                fontFamily: 'var(--font-serif-sc)',
                fontSize: '0.78rem',
                letterSpacing: '0.12em',
                padding: '0.5rem 1.2rem',
                cursor: 'pointer',
                transition: 'var(--transition-smooth)'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry Image Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '2rem',
            minHeight: '400px'
          }}
        >
          {filteredItems.map(item => (
            <div
              key={item.id}
              onClick={() => setFullscreenImage(item)}
              style={{
                position: 'relative',
                borderRadius: '4px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-premium)',
                border: 'var(--border-brass)',
                cursor: 'pointer',
                height: '240px',
                animation: 'fadeInSimple 0.6s ease-in-out'
              }}
              className="gallery-item"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'var(--transition-slow)'
                }}
                className="gallery-zoom"
              />

              {/* Dark Hover Reveal */}
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(15, 9, 6, 0.45)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '0.5rem',
                  opacity: 0,
                  transition: 'var(--transition-smooth)'
                }}
                className="gallery-overlay"
              >
                <ZoomIn size={24} style={{ color: 'var(--color-brass)' }} />
                <span style={{ 
                  fontFamily: 'var(--font-serif-sc)', 
                  color: 'var(--color-ivory)', 
                  fontSize: '0.85rem', 
                  letterSpacing: '0.15em' 
                }}>
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Expanded View Dialog */}
      {fullscreenImage && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(15, 9, 6, 0.95)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 2300,
            padding: '2rem',
            animation: 'fadeInSimple 0.3s ease-out'
          }}
        >
          {/* Close */}
          <button 
            onClick={() => setFullscreenImage(null)}
            style={{
              position: 'absolute',
              top: '25px',
              right: '25px',
              background: 'none',
              border: 'none',
              color: 'var(--color-sandstone-light)',
              cursor: 'pointer',
              opacity: 0.8
            }}
          >
            <X size={28} />
          </button>

          <div style={{ maxWidth: '900px', width: '100%', position: 'relative' }}>
            <img 
              src={fullscreenImage.image} 
              alt={fullscreenImage.title} 
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '80vh',
                objectFit: 'contain',
                borderRadius: '2px',
                border: '1px solid rgba(194, 155, 79, 0.45)',
                boxShadow: '0 25px 50px rgba(0,0,0,0.8)'
              }}
            />
            <div style={{ textAlign: 'center', marginTop: '1.2rem' }}>
              <span style={{ 
                fontFamily: 'var(--font-serif-header)', 
                fontSize: '1.4rem', 
                color: 'var(--color-brass)',
                letterSpacing: '0.1em'
              }}>
                {fullscreenImage.title}
              </span>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .gallery-item:hover .gallery-zoom {
          transform: scale(1.05);
        }
        .gallery-item:hover .gallery-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
