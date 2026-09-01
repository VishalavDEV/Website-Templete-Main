import React, { useState, useRef } from 'react';
import { ZoomIn, ZoomOut, Maximize2, RotateCw, Eye, Sparkles, Check, Layers, Compass } from 'lucide-react';

export const ProductShowcase = ({ 
  product, 
  activeColorway, 
  onSelectColorway 
}) => {
  const [activeAngleIndex, setActiveAngleIndex] = useState(0);
  const [isZooming, setIsZooming] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const imageContainerRef = useRef(null);

  const activeAngle = activeColorway.angles[activeAngleIndex] || activeColorway.angles[0];

  // Mouse move handler for precision loupe zoom
  const handleMouseMove = (e) => {
    if (!imageContainerRef.current) return;
    const { left, top, width, height } = imageContainerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - left) / width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - top) / height) * 100));
    setZoomPos({ x, y });
  };

  return (
    <div className="product-showcase-container">
      
      {/* Top Controls Bar */}
      <div className="showcase-header-bar">
        <div className="showcase-status">
          <span className="badge-tag">
            <Sparkles size={13} /> {activeColorway.badge}
          </span>
          <span className="active-view-label">
            Angle: <strong>{activeAngle.name}</strong>
          </span>
        </div>

        <div className="showcase-actions">
          <div className="zoom-hint">
            <ZoomIn size={14} />
            <span>Hover image to zoom (2.5x)</span>
          </div>
          <button 
            className="action-pill-btn"
            onClick={() => setIsFullscreen(!isFullscreen)}
            title="Toggle Expanded View"
          >
            <Maximize2 size={14} />
            <span>Expand</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Stage with Loupe Zoom */}
      <div 
        ref={imageContainerRef}
        className={`main-image-stage ${isZooming ? 'is-zoomed' : ''} ${isFullscreen ? 'fullscreen-mode' : ''}`}
        onMouseEnter={() => setIsZooming(true)}
        onMouseLeave={() => setIsZooming(false)}
        onMouseMove={handleMouseMove}
      >
        {/* Base Image */}
        <img 
          src={activeAngle.image} 
          alt={`${product.name} - ${activeAngle.name}`}
          className="stage-base-image"
        />

        {/* Dynamic Zoom Loupe Overlay */}
        {isZooming && (
          <div 
            className="zoom-lens"
            style={{
              backgroundImage: `url(${activeAngle.image})`,
              backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
              backgroundSize: '280%'
            }}
          >
            <div className="lens-crosshair"></div>
          </div>
        )}

        {/* Overlay Hotspot Indicator */}
        <div className="stage-overlay-meta">
          <div className="meta-pill">
            <Compass size={13} className="spin-icon" />
            <span>{activeAngle.description}</span>
          </div>
        </div>

        {/* Close Fullscreen button if open */}
        {isFullscreen && (
          <button 
            className="close-fullscreen-btn"
            onClick={() => setIsFullscreen(false)}
          >
            Close Fullscreen ✕
          </button>
        )}
      </div>

      {/* Angle Thumbnails Row */}
      <div className="showcase-thumbnails-row">
        {activeColorway.angles.map((angle, idx) => (
          <button
            key={angle.id}
            className={`angle-thumb-btn ${activeAngleIndex === idx ? 'active' : ''}`}
            onClick={() => setActiveAngleIndex(idx)}
          >
            <div className="thumb-image-wrapper">
              <img src={angle.image} alt={angle.name} />
            </div>
            <div className="thumb-meta">
              <span className="thumb-index">0{idx + 1}</span>
              <span className="thumb-name">{angle.name}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Colorway Switcher Bar */}
      <div className="colorway-selection-card glass-card">
        <div className="colorway-header">
          <span className="colorway-heading-label">COLORWAY SELECTION:</span>
          <span className="colorway-active-name" style={{ color: activeColorway.primaryHex }}>
            {activeColorway.name}
          </span>
        </div>

        <div className="colorway-pills-grid">
          {product.colorways.map((cw) => {
            const isSelected = activeColorway.id === cw.id;
            return (
              <button
                key={cw.id}
                className={`colorway-option-btn ${isSelected ? 'selected' : ''}`}
                onClick={() => {
                  onSelectColorway(cw);
                  setActiveAngleIndex(0); // Reset to primary angle
                }}
                style={{
                  '--cw-accent': cw.primaryHex,
                  '--cw-glow': cw.accentGlow
                }}
              >
                <div className="swatch-preview-circle">
                  <div className="swatch-split" style={{ backgroundColor: cw.primaryHex }}></div>
                  <div className="swatch-split" style={{ backgroundColor: cw.secondaryHex }}></div>
                  {isSelected && <Check size={12} className="check-icon" />}
                </div>

                <div className="colorway-details">
                  <div className="colorway-title-row">
                    <span className="colorway-main-title">{cw.name.split('/')[0]}</span>
                    <span className="colorway-edition-badge">{cw.badge}</span>
                  </div>
                  <span className="colorway-stock-status">{cw.stockWarning}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Colorway Storytelling Teaser */}
        <div className="colorway-story-box">
          <span className="story-label">DESIGN STORY:</span>
          <p className="story-text">{activeColorway.story}</p>
        </div>
      </div>

    </div>
  );
};
