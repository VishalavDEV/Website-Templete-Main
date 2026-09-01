import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ image, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (!image) return null;

  return (
    <div className="lightbox-modal" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close Lightbox">
        <X size={32} />
      </button>

      <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); onPrev(); }} aria-label="Previous Image">
        <ChevronLeft size={28} />
      </button>

      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={image.image} alt={image.title} className="lightbox-image" />
        <div className="lightbox-caption">
          <h3>{image.title}</h3>
          <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--accent)', textTransform: 'uppercase' }}>
            {image.category}
          </span>
        </div>
      </div>

      <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); onNext(); }} aria-label="Next Image">
        <ChevronRight size={28} />
      </button>
    </div>
  );
}
