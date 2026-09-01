import React, { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { num: '01', label: 'THE HOUSE', target: '#house', previewId: 'preview-1', imgSrc: 'assets/images/hero.jpg', alt: 'The House Preview' },
  { num: '02', label: 'THE TABLE', target: '#ingredients', previewId: 'preview-2', imgSrc: 'assets/images/kitchen.jpg', alt: 'The Table Preview' },
  { num: '03', label: 'MENU', target: '#menu', previewId: 'preview-3', imgSrc: 'assets/images/dish_octopus.jpg', alt: 'Menu Preview' },
  { num: '04', label: 'THE GARDEN', target: '#garden', previewId: 'preview-4', imgSrc: 'assets/images/signature.jpg', alt: 'The Garden Preview' },
  { num: '05', label: 'EXPERIENCE', target: '#experience', previewId: 'preview-5', imgSrc: 'assets/images/night.jpg', alt: 'Experience Preview' },
  { num: '06', label: 'JOURNAL', target: '#journal', previewId: 'preview-6', imgSrc: 'assets/images/chef.jpg', alt: 'Journal Preview' },
  { num: '07', label: 'CONTACT', target: '#contact', previewId: 'preview-7', imgSrc: 'assets/images/cocktail.jpg', alt: 'Contact Preview' }
];

export default function FullscreenNav({ isOpen, onCloseNav }) {
  const [activePreview, setActivePreview] = useState('preview-1');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onCloseNav();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onCloseNav]);

  const handleNavClick = (targetSection) => {
    onCloseNav();
    if (targetSection) {
      const targetEl = document.querySelector(targetSection);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fullscreen-nav ${isOpen ? 'open' : ''}`} id="fullscreen-nav">
      <div className="nav-header">
        <div className="pill-logo-mark">C</div>
        <button className="btn-close-nav" id="close-nav" onClick={onCloseNav}>
          CLOSE &times;
        </button>
      </div>
      <div className="nav-container">
        <div className="nav-links-list">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.num}
              className="nav-item"
              data-target={item.target}
              data-preview={item.previewId}
              onMouseEnter={() => setActivePreview(item.previewId)}
              onClick={() => handleNavClick(item.target)}
            >
              <span className="nav-item-num">{item.num}</span> {item.label}
            </a>
          ))}
        </div>
        <div className="nav-preview-panel">
          {NAV_ITEMS.map((item) => (
            <img
              key={item.previewId}
              src={item.imgSrc}
              alt={item.alt}
              className={`nav-preview-img ${activePreview === item.previewId ? 'active' : ''}`}
              id={item.previewId}
            />
          ))}
        </div>
      </div>
      <div className="nav-footer-info">
        <div>LOCATION: <span>BOAT CLUB ROAD, CHENNAI</span></div>
        <div>HOURS: <span>TUE &mdash; SUN / 12:00 &mdash; 23:30</span></div>
        <div>RESERVATIONS: <span>HELLO@CHENNAIGARDEN.COM</span></div>
      </div>
    </nav>
  );
}
