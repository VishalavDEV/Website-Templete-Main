import React from 'react';

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="futurix-modal-backdrop active" onClick={onClose}>
      <div className="modal-card-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>✕</button>
        <h3 style={{ color: 'var(--text-heading)', marginBottom: '12px', fontSize: '1.2rem' }}>
          📹 3D BIM Holographic Construction Walkthrough
        </h3>
        <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', minHeight: '260px' }}>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            controls 
            style={{ width: '100%', borderRadius: '6px', display: 'block' }}
          >
            <source src="./assets/videos/futurix-civil.webm" type="video/webm" />
            <source src="./assets/videos/futurix-construction.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
