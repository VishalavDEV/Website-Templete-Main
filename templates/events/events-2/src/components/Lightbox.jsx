import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/gallery.css';

export const Lightbox = ({ items, currentIndex, onClose, onPrev, onNext }) => {
  const isOpen = currentIndex !== null && items && items.length > 0;

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen) return null;

  const currentItem = items[currentIndex];

  return (
    <div className="lightbox-modal" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        {/* Counter */}
        <div className="lightbox-counter">
          {currentIndex + 1} / {items.length}
        </div>

        {/* Close Button */}
        <button className="lightbox-close" onClick={onClose} aria-label="Close Lightbox">
          <X size={24} />
        </button>

        {/* Image Container */}
        <div className="lightbox-img-wrapper">
          <img src={currentItem.image} alt={currentItem.title} className="lightbox-img" />
        </div>

        {/* Caption */}
        <div className="lightbox-caption">
          <h3 className="lightbox-caption-title">{currentItem.title}</h3>
          <p className="lightbox-caption-text">{currentItem.caption}</p>
        </div>

        {/* Navigation Arrows */}
        <button className="lightbox-nav-btn lightbox-prev" onClick={onPrev} aria-label="Previous Image">
          <ChevronLeft size={28} />
        </button>
        <button className="lightbox-nav-btn lightbox-next" onClick={onNext} aria-label="Next Image">
          <ChevronRight size={28} />
        </button>
      </div>
    </div>
  );
};
