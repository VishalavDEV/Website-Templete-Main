import React, { useEffect } from 'react';

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  onOpenInquiry: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  activeSection,
  onOpenInquiry,
}) => {
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

  const handleInquiry = (e: React.MouseEvent) => {
    e.preventDefault();
    onClose();
    onOpenInquiry();
  };

  return (
    <>
      <div
        className={`mobile-nav-backdrop ${isOpen ? 'open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={`mobile-nav-drawer ${isOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        <div className="brand-container" style={{ marginBottom: '3rem' }}>
          <span className="brand-title">MONOLITH</span>
          <span className="brand-tagline">Spatial Design Studio</span>
        </div>

        <ul className="mobile-links-list">
          <li>
            <a
              href="#featured-project"
              onClick={onClose}
              className={activeSection === 'featured-project' ? 'active' : ''}
            >
              <span className="mobile-index">01</span> Projects
            </a>
          </li>
          <li>
            <a
              href="#process"
              onClick={onClose}
              className={activeSection === 'process' ? 'active' : ''}
            >
              <span className="mobile-index">02</span> Process
            </a>
          </li>
          <li>
            <a
              href="#studio"
              onClick={onClose}
              className={activeSection === 'studio' ? 'active' : ''}
            >
              <span className="mobile-index">03</span> Studio
            </a>
          </li>
          <li>
            <a
              href="#manifesto"
              onClick={onClose}
              className={activeSection === 'manifesto' ? 'active' : ''}
            >
              <span className="mobile-index">04</span> Manifesto
            </a>
          </li>
        </ul>

        <div className="mobile-drawer-footer">
          <button
            className="btn-cta-nav"
            onClick={handleInquiry}
            style={{ display: 'inline-flex', width: '100%', justifyContent: 'center' }}
          >
            Start a Project
          </button>
          <span style={{ marginTop: '1rem' }}>Press ESC to close</span>
        </div>
      </div>
    </>
  );
};
