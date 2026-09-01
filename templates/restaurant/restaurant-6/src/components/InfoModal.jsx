import React from 'react';

export default function InfoModal({ isOpen, onClose, modalContent }) {
  if (!isOpen) return null;

  const { tag, title, meta, bodyHtml } = modalContent || {};

  return (
    <div
      className={`info-modal ${isOpen ? 'is-active' : ''}`}
      id="info-modal"
      role="dialog"
      aria-modal="true"
      aria-label="Information Overlay"
      onClick={(e) => {
        if (e.target.id === 'info-modal') onClose();
      }}
    >
      <div className="info-modal-content">
        <button className="info-modal-close" aria-label="Close modal" onClick={onClose}>
          &times;
        </button>
        <span className="info-modal-tag" id="info-modal-tag">{tag}</span>
        <h3 id="info-modal-title">{title}</h3>
        <span className="info-modal-meta" id="info-modal-meta">{meta}</span>
        <div
          className="info-modal-body"
          id="info-modal-body"
          dangerouslySetInnerHTML={{ __html: bodyHtml }}
        />
      </div>
    </div>
  );
}
