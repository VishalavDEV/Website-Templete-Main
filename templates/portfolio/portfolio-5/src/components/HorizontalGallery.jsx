import React, { useRef, useState, useEffect } from 'react';
import { GALLERY_DATA } from '../data/portfolioData';
import { ChevronLeft, ChevronRight, Maximize2, Aperture } from 'lucide-react';

export default function HorizontalGallery() {
  const galleryRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  const handleScroll = () => {
    if (!galleryRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = galleryRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      const progress = (scrollLeft / maxScroll) * 100;
      setScrollProgress(progress);

      // Determine active item index based on scroll position
      const itemWidth = clientWidth * 0.7;
      const calculatedIndex = Math.round(scrollLeft / itemWidth);
      setActiveIndex(Math.min(calculatedIndex, GALLERY_DATA.length - 1));
    }
  };

  useEffect(() => {
    const el = galleryRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll);
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Mouse Drag to Scroll handlers
  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - galleryRef.current.offsetLeft);
    setScrollLeftState(galleryRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - galleryRef.current.offsetLeft;
    const walk = (x - startX) * 1.8;
    galleryRef.current.scrollLeft = scrollLeftState - walk;
  };

  const scrollByAmount = (direction) => {
    if (galleryRef.current) {
      const amount = galleryRef.current.clientWidth * 0.6 * direction;
      galleryRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <div className="horizontal-gallery-wrapper">
      <div className="gallery-header container">
        <div>
          <span className="chapter-badge">CINEMATIC VISUAL REEL</span>
          <h3 className="gallery-title">Field Photography Reel</h3>
        </div>

        {/* Gallery Controls & Progress */}
        <div className="gallery-controls">
          <button 
            className="gallery-nav-btn" 
            onClick={() => scrollByAmount(-1)}
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            className="gallery-nav-btn" 
            onClick={() => scrollByAmount(1)}
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Drag & Swipe Scrollable Container */}
      <div 
        className={`horizontal-gallery-track ${isMouseDown ? 'dragging' : ''}`}
        ref={galleryRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {GALLERY_DATA.map((item, index) => (
          <div 
            key={item.id} 
            className={`gallery-item-card ${activeIndex === index ? 'active-center' : ''}`}
          >
            <div className="gallery-img-container">
              <img 
                src={item.image} 
                alt={item.title} 
                className="gallery-img"
                draggable="false"
              />
              <div className="gallery-overlay">
                <div className="gallery-meta-tag">
                  <Aperture size={12} />
                  <span>{item.meta}</span>
                </div>
                <h4 className="gallery-item-title">{item.title}</h4>
                <p className="gallery-item-sub">{item.subtitle}</p>
                <p className="gallery-item-caption">"{item.caption}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gallery Bottom Progress Bar */}
      <div className="gallery-progress-container container">
        <div className="gallery-progress-bar">
          <div 
            className="gallery-progress-fill" 
            style={{ width: `${Math.max(15, scrollProgress)}%` }}
          ></div>
        </div>
        <div className="gallery-scroll-hint">
          <span>DRAG OR SWIPE TO EXPLORE</span>
        </div>
      </div>
    </div>
  );
}
