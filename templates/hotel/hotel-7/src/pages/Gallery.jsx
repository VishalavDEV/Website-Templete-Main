import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY } from '../data/gallery';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.8 } },
  exit: { opacity: 0 }
};

const CATEGORIES = ['All', 'Rooms', 'Pool', 'Dining', 'Spa', 'Nature', 'Architecture', 'Experiences'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredItems = activeCategory === 'All'
    ? GALLERY
    : GALLERY.filter(item => item.category === activeCategory);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, filteredItems]);

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ padding: '140px 40px 100px', maxWidth: '1200px', margin: '0 auto', boxSizing: 'border-box' }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <span style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.75rem',
          fontWeight: '700',
          letterSpacing: '3px',
          color: '#c5a880',
          textTransform: 'uppercase'
        }}>
          Visual Chronicle
        </span>
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '3rem',
          fontWeight: '400',
          margin: '10px 0 20px 0',
          color: '#1e1e1e'
        }}>
          Resort Gallery
        </h1>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.95rem',
          color: '#777777',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6',
          fontWeight: '300'
        }}>
          A photo chronicle of private clifftop views, hot spring spas, farm dining tables, and luxury residences.
        </p>
      </div>

      {/* Filter Category Tabs */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        flexWrap: 'wrap',
        marginBottom: '50px'
      }}>
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              padding: '8px 20px',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.72rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              border: 'none',
              borderBottom: activeCategory === cat ? '2px solid #c5a880' : '2px solid transparent',
              backgroundColor: 'transparent',
              color: activeCategory === cat ? '#c5a880' : '#777777',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Columns */}
      <div style={{
        columns: '3 280px',
        columnGap: '24px'
      }}>
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, idx) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              style={{
                breakInside: 'avoid',
                marginBottom: '24px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                border: '1px solid rgba(197, 168, 128, 0.15)'
              }}
              onClick={() => openLightbox(idx)}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  transition: 'transform 0.8s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
              />
              
              {/* Overlay on hover */}
              <div 
                className="gallery-overlay"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(17, 17, 17, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'opacity 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
              >
                <div style={{ textAlign: 'center', color: '#ffffff' }}>
                  <ZoomIn size={24} style={{ color: '#c5a880', marginBottom: '8px', display: 'inline-block' }} />
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: '400', margin: 0 }}>
                    {item.title}
                  </h4>
                  <span style={{ fontSize: '0.68rem', letterSpacing: '1px', textTransform: 'uppercase', color: '#c5a880' }}>
                    {item.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(11, 11, 11, 0.95)',
              zIndex: 99999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px',
              boxSizing: 'border-box'
            }}
          >
            {/* Close */}
            <button
              onClick={() => setLightboxOpen(false)}
              style={{
                position: 'absolute',
                top: '30px',
                right: '30px',
                background: 'none',
                border: 'none',
                color: '#ffffff',
                cursor: 'pointer',
                padding: '10px'
              }}
            >
              <X size={28} />
            </button>

            {/* Prev */}
            <button
              onClick={handlePrev}
              style={{
                position: 'absolute',
                left: '30px',
                background: 'none',
                border: 'none',
                color: '#ffffff',
                cursor: 'pointer',
                padding: '10px'
              }}
            >
              <ChevronLeft size={36} />
            </button>

            {/* Next */}
            <button
              onClick={handleNext}
              style={{
                position: 'absolute',
                right: '30px',
                background: 'none',
                border: 'none',
                color: '#ffffff',
                cursor: 'pointer',
                padding: '10px'
              }}
            >
              <ChevronRight size={36} />
            </button>

            {/* Image display */}
            <div style={{ maxWidth: '90%', maxHeight: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                style={{ maxWidth: '100%', maxHeight: '75vh', objectFit: 'contain', border: '1px solid rgba(255, 255, 255, 0.15)' }}
              />
              <div style={{ textAlign: 'center' }}>
                <h4 style={{ color: '#faf8f5', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: '400', margin: 0 }}>
                  {filteredItems[lightboxIndex].title}
                </h4>
                <span style={{ color: '#c5a880', fontSize: '0.72rem', fontFamily: 'var(--font-sans)', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  {filteredItems[lightboxIndex].category} • {lightboxIndex + 1} of {filteredItems.length}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
