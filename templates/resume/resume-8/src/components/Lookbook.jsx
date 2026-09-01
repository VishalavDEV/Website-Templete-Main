import React, { useState, useRef } from 'react';
import { ChevronRight, ChevronLeft, Layers, Sparkles } from 'lucide-react';
import { lookbookData } from '../data/portfolioData';

export default function Lookbook() {
  const [selectedLook, setSelectedLook] = useState(lookbookData[0]);
  const trackRef = useRef(null);

  const scrollLeft = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section id="lookbook" className="lookbook-section">
      <div className="lookbook-container">
        <div className="lookbook-header">
          <div>
            <div className="section-label">
              <span>EDITORIAL LOOKBOOK</span>
            </div>
            <h2 className="collections-title">THE LOOKBOOK</h2>
            <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', letterSpacing: '0.15em', marginTop: '0.3rem' }}>
              TACTILE DIGITAL PUBLICATION — DRAG OR SCROLL TO EXPLORE
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span className="lookbook-counter">
              {selectedLook ? selectedLook.number : '01'} / {String(lookbookData.length).padStart(2, '0')}
            </span>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button 
                onClick={scrollLeft} 
                className="btn-editorial-secondary"
                style={{ padding: '0.6rem 0.8rem' }}
                aria-label="Scroll Lookbook Left"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={scrollRight} 
                className="btn-editorial-secondary"
                style={{ padding: '0.6rem 0.8rem' }}
                aria-label="Scroll Lookbook Right"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Drag Track */}
        <div className="lookbook-drag-track" ref={trackRef}>
          {lookbookData.map((look) => (
            <div 
              key={look.id} 
              className={`lookbook-card ${selectedLook.id === look.id ? 'active' : ''}`}
              onClick={() => setSelectedLook(look)}
            >
              <div className="lookbook-image-box">
                <img src={look.image} alt={look.title} className="lookbook-img" />
                <span className="look-number-badge">LOOK {look.number}</span>
              </div>
              <div className="lookbook-card-body">
                <span className="look-collection-tag">{look.collection} — {look.year}</span>
                <h3 className="look-title">{look.title}</h3>
                <p className="look-material-text">{look.material}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Look Detailed Drawer */}
        {selectedLook && (
          <div 
            style={{ 
              marginTop: '3rem', 
              padding: '2.5rem', 
              backgroundColor: 'var(--bg-primary)', 
              border: '1px solid var(--border-subtle)',
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              gap: '3rem',
              alignItems: 'center'
            }}
          >
            <div>
              <span className="section-label">SELECTED SPECIFICATION</span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', margin: '0.5rem 0 1rem 0' }}>
                LOOK {selectedLook.number}: {selectedLook.title}
              </h3>
              <span className="look-collection-tag" style={{ fontSize: '0.9rem' }}>
                {selectedLook.collection} COLLECTION ({selectedLook.year})
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              <div>
                <span className="meta-label">SILHOUETTE</span>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: '500', marginTop: '0.2rem' }}>
                  {selectedLook.silhouette}
                </p>
              </div>
              <div>
                <span className="meta-label">MATERIALS</span>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: '500', marginTop: '0.2rem' }}>
                  {selectedLook.material}
                </p>
              </div>
              <div>
                <span className="meta-label">DESIGN CONCEPT</span>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                  {selectedLook.concept}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
