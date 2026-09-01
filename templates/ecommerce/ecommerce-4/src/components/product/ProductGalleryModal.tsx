import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProductGalleryModalProps {
  images: string[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

export const ProductGalleryModal: React.FC<ProductGalleryModalProps> = ({
  images,
  initialIndex = 0,
  isOpen,
  onClose,
  productName
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length]);

  if (!isOpen || images.length === 0) return null;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(22, 22, 22, 0.94)',
          backdropFilter: 'blur(10px)',
          zIndex: 900,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '1.5rem'
        }}
        onClick={onClose}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#FFFFFF', zIndex: 10 }}>
          <div style={{ fontSize: '0.9rem', fontWeight: 800 }}>
            {productName} <span style={{ opacity: 0.6 }}>({currentIndex + 1} / {images.length})</span>
          </div>
          <button onClick={onClose} className="btn-icon" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#FFFFFF' }}>
            <X size={20} />
          </button>
        </div>

        {/* Center Main Zoom Image */}
        <div
          style={{
            position: 'relative',
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={productName}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            style={{
              maxWidth: '90%',
              maxHeight: '80vh',
              objectFit: 'contain',
              borderRadius: 'var(--radius-md)',
              boxShadow: 'var(--shadow-float)'
            }}
          />

          {/* Navigation Controls */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                style={{
                  position: 'absolute',
                  left: '1.5rem',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  color: '#FFFFFF',
                  borderRadius: '50%',
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(4px)'
                }}
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={handleNext}
                style={{
                  position: 'absolute',
                  right: '1.5rem',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  color: '#FFFFFF',
                  borderRadius: '50%',
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(4px)'
                }}
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        {/* Thumbnail Selector Strip */}
        {images.length > 1 && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.75rem',
              zIndex: 10
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  border: currentIndex === idx ? '2px solid var(--accent-blue)' : '1px solid rgba(255,255,255,0.3)',
                  opacity: currentIndex === idx ? 1 : 0.5,
                  transition: 'all 150ms ease'
                }}
              >
                <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </button>
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
