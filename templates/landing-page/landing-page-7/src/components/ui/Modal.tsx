import React, { useEffect, useRef } from 'react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  sheetClassName?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  sheetClassName = 'inquiry-modal-sheet',
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`inquiry-modal-backdrop ${isOpen ? 'open' : ''}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title || 'Modal Dialog'}
    >
      <div
        ref={modalRef}
        className={sheetClassName}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="inquiry-close-btn"
          onClick={onClose}
          aria-label="Close dialog (ESC)"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};
