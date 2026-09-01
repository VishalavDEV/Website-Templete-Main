import React, { useEffect } from 'react';

export interface LightboxImageItem {
  src: string;
  caption?: string;
}

interface LightboxModalProps {
  isOpen: boolean;
  currentIndex: number;
  items: LightboxImageItem[];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  currentIndex,
  items,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !items.length || currentIndex < 0 || currentIndex >= items.length) {
    return null;
  }

  const currentItem = items[currentIndex];

  return (
    <div className={`lightbox-modal ${isOpen ? 'active' : ''}`} id="lightboxModal" onClick={onClose}>
      <button className="lightbox-btn lightbox-close" id="lightboxClose" onClick={onClose} aria-label="Close">
        <i className="bi bi-x-lg"></i>
      </button>

      {items.length > 1 && (
        <>
          <button
            className="lightbox-btn lightbox-prev"
            style={{ left: '2rem', right: 'auto' }}
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label="Previous Image"
          >
            <i className="bi bi-chevron-left"></i>
          </button>

          <button
            className="lightbox-btn lightbox-next"
            style={{ right: '2rem', left: 'auto' }}
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label="Next Image"
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </>
      )}

      <div className="lightbox-content text-center" onClick={(e) => e.stopPropagation()}>
        <img src={currentItem.src} alt={currentItem.caption || 'Expanded view'} className="lightbox-img" id="lightboxImg" />
        {currentItem.caption && <div className="lightbox-caption mt-3 text-gold fs-5">{currentItem.caption}</div>}
      </div>
    </div>
  );
};

export default LightboxModal;
