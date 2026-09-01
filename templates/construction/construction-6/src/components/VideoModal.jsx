import React, { useEffect, useRef } from 'react';

export default function VideoModal({ isOpen, onClose }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (videoRef.current) {
        videoRef.current.play().catch(() => {});
      }
    } else {
      document.body.style.overflow = '';
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="video-modal-backdrop active" 
      id="videoModal" 
      onClick={(e) => {
        if (e.target.id === 'videoModal') onClose();
      }}
    >
      <div className="video-modal-box">
        <button className="video-modal-close" id="videoModalClose" onClick={onClose}>
          ✕
        </button>
        <video 
          ref={videoRef}
          className="modal-video-player" 
          controls 
          poster="./assets/images/arcstone-villa.jpg"
        >
          <source src="./assets/videos/luxury-villa.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
