import React from 'react';
import { X } from 'lucide-react';

export default function Modal({ children, onClose }) {
  return (
    <div className="custom-modal-overlay" onClick={onClose}>
      <div className="custom-modal-box" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          aria-label="Close Modal"
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(245, 185, 0, 0.5)',
            color: 'var(--gold-bright)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--gold-bright)';
            e.currentTarget.style.color = '#000';
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.color = 'var(--gold-bright)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <X size={22} />
        </button>
        {children}
      </div>
    </div>
  );
}
