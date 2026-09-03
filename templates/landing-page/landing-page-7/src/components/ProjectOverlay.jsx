import React, { useState, useEffect } from 'react';

export const ProjectOverlay = ({ isOpen, onClose, projectData }) => {
  const [activeTab, setActiveTab] = useState('CONCEPT');
  const [currentSlide, setCurrentSlide] = useState(0);

  const tabs = ['CONCEPT', 'MATERIAL', 'LIGHT', 'STRUCTURE'];

  const tabContents = {
    CONCEPT: {
      headline: 'A Monolithic Coastal Sanctuary',
      paragraph: 'Located outside Chennai, House of Silence explores the poetic weight of cast concrete. The architecture withdraws from the chaos of the city to frame quiet horizons, shifting breezes, and an intimate interior courtyard garden.',
      image: '/images/house_of_silence.jpg',
      meta: [
        { label: 'Typology', val: 'Private Residential Monograph' },
        { label: 'Site Footprint', val: '420 m² on 1,800 m² coastal plot' },
        { label: 'Orientation', val: 'East-West solar axis facing the Bay of Bengal' },
      ],
    },
    MATERIAL: {
      headline: 'Board-Formed Concrete & Terracotta',
      paragraph: 'Local river sand and granite aggregates were combined into board-formed concrete slabs that will weather naturally in the coastal marine salt air. Hand-pressed terracotta tiles line the inner courtyards to absorb and release heat gradually.',
      image: '/images/hero.jpg',
      meta: [
        { label: 'Concrete Mix', val: 'Slag cement + coastal granite aggregate' },
        { label: 'Surface Finish', val: 'Rough timber board-marked texture' },
        { label: 'Thermal Mass', val: '350mm loadbearing monolithic walls' },
      ],
    },
    LIGHT: {
      headline: 'Carving Shadows & Water Reflections',
      paragraph: 'Daylight does not enter directly; it is captured by recessed clerestory cuts and reflected over shallow water channels. The interior shifts from cool dawn shadows into deep amber luminescence by twilight.',
      image: '/images/house_of_silence_interior.jpg',
      meta: [
        { label: 'Natural Glazing', val: 'Deep overhangs eliminating solar glare' },
        { label: 'Reflecting Pool', val: 'Basalt-lined passive cooling channel' },
        { label: 'Illumination', val: 'Concealed low-kelvin warm architectural washes' },
      ],
    },
    STRUCTURE: {
      headline: 'Massive Cantilevers & Pure Gravity',
      paragraph: 'A structural feat of post-tensioned concrete cantilevers spanning up to 7.8 meters without visible columns. The living pavilion floats above the reflection pools, creating a spatial sensation of weightless mass.',
      image: '/images/house_of_silence.jpg',
      meta: [
        { label: 'Span Length', val: '7.8m post-tensioned cantilever slab' },
        { label: 'Structural Core', val: 'Monolithic shear walls' },
        { label: 'Foundation', val: 'Deep friction piles into coastal strata' },
      ],
    },
  };

  const currentContent = tabContents[activeTab];

  // Navigation handlers
  const handlePrev = () => {
    const currentIndex = tabs.indexOf(activeTab);
    const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    setActiveTab(tabs[prevIndex]);
    setCurrentSlide(prevIndex);
  };

  const handleNext = () => {
    const currentIndex = tabs.indexOf(activeTab);
    const nextIndex = (currentIndex + 1) % tabs.length;
    setActiveTab(tabs[nextIndex]);
    setCurrentSlide(nextIndex);
  };

  // Keyboard navigation: Left Arrow, Right Arrow, ESC
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, activeTab]);

  if (!isOpen) return null;

  return (
    <div 
      className={`project-editorial-overlay ${isOpen ? 'open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="House of Silence Fullscreen Presentation"
    >
      {/* Overlay Sticky Header */}
      <header className="overlay-header-bar">
        <div className="overlay-project-title">
          {projectData?.name || 'HOUSE OF SILENCE'}
        </div>

        {/* Tabs: CONCEPT, MATERIAL, LIGHT, STRUCTURE */}
        <nav aria-label="Project Monograph Chapters">
          <ul className="overlay-nav-tabs">
            {tabs.map((tab, idx) => (
              <li key={tab}>
                <button
                  className={`overlay-tab-btn ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTab(tab);
                    setCurrentSlide(idx);
                  }}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Controls: PREVIOUS, NEXT, CLOSE */}
        <div className="overlay-controls">
          <button 
            className="overlay-nav-arrow-btn" 
            onClick={handlePrev}
            aria-label="Previous Slide (Arrow Left)"
          >
            ← PREVIOUS
          </button>
          <button 
            className="overlay-nav-arrow-btn" 
            onClick={handleNext}
            aria-label="Next Slide (Arrow Right)"
          >
            NEXT →
          </button>
          <button 
            className="overlay-close-btn" 
            onClick={onClose}
            aria-label="Close Project Overlay (ESC)"
          >
            CLOSE ×
          </button>
        </div>
      </header>

      {/* Main Editorial Content Body */}
      <div className="overlay-body-content">
        {/* Gallery Image Viewport */}
        <div className="overlay-image-gallery">
          <img 
            src={currentContent.image} 
            alt={`House of Silence — ${activeTab}`} 
            className="overlay-main-image"
          />
          <div className="overlay-slide-counter">
            [ 0{tabs.indexOf(activeTab) + 1} / 0{tabs.length} — {activeTab} ]
          </div>
        </div>

        {/* Editorial Text & Technical Data */}
        <div className="overlay-editorial-text">
          <div>
            <span className="tab-badge">Chapter 0{tabs.indexOf(activeTab) + 1} // {activeTab}</span>
            <h2 className="tab-headline">{currentContent.headline}</h2>
            <p className="tab-paragraph">{currentContent.paragraph}</p>
          </div>

          <div className="overlay-meta-table">
            {currentContent.meta.map((item, idx) => (
              <div key={idx} className="overlay-meta-row">
                <span className="row-label">{item.label}</span>
                <span className="row-val">{item.val}</span>
              </div>
            ))}
            <div className="overlay-meta-row" style={{ borderBottom: 'none' }}>
              <span className="row-label">Navigation</span>
              <span className="row-val" style={{ color: 'var(--color-clay)' }}>
                Use ← / → arrows or click tabs • Press ESC to close
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
