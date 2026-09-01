import React, { useState } from 'react';
import { EXPEDITIONS } from '../data/portfolioData';
import { MapPin, Calendar, Clock, Target, ArrowRight, X, Compass } from 'lucide-react';

export default function ExpeditionMap() {
  const [selectedExpedition, setSelectedExpedition] = useState(EXPEDITIONS[0]);

  return (
    <section id="chapter-05" className="expeditions-section">
      <div className="container">
        <div className="chapter-badge">CHAPTER 05</div>
        <h2 className="section-title">Field Journeys</h2>
        <p className="section-subtitle">
          Interactive terrain map detailing five fictional wilderness expeditions across isolated sub-alpine, marine, and forest corridors.
        </p>

        <div className="map-expedition-layout">
          {/* Abstract Fictional Terrain Map Canvas */}
          <div className="abstract-map-container">
            <svg 
              viewBox="0 0 1000 600" 
              className="fictional-terrain-svg"
            >
              <defs>
                <linearGradient id="terrainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#EAE6DD" />
                  <stop offset="50%" stopColor="#DFD9CB" />
                  <stop offset="100%" stopColor="#D4CEBF" />
                </linearGradient>
                <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(27, 48, 34, 0.05)" strokeWidth="1" />
                </pattern>
              </defs>

              {/* Background Map Fill with Grid Lines */}
              <rect width="1000" height="600" fill="url(#terrainGrad)" />
              <rect width="1000" height="600" fill="url(#gridPattern)" />

              {/* Abstract Topographical Contour Lines */}
              <path d="M 50 100 Q 250 50 450 180 T 850 120 T 950 450" fill="none" stroke="rgba(27, 48, 34, 0.12)" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M 100 250 Q 350 150 550 300 T 900 350" fill="none" stroke="rgba(27, 48, 34, 0.15)" strokeWidth="1.5" />
              <path d="M 0 350 Q 200 480 600 400 T 1000 520" fill="none" stroke="rgba(27, 48, 34, 0.1)" strokeWidth="2" />
              
              {/* Abstract Fictional Mountain Ridges */}
              <polygon points="180,180 220,100 260,180" fill="rgba(27, 48, 34, 0.08)" stroke="rgba(27, 48, 34, 0.2)" />
              <polygon points="230,200 280,80 330,200" fill="rgba(27, 48, 34, 0.08)" stroke="rgba(27, 48, 34, 0.2)" />
              <polygon points="700,380 750,280 800,380" fill="rgba(27, 48, 34, 0.08)" stroke="rgba(27, 48, 34, 0.2)" />
              <polygon points="760,400 810,310 860,400" fill="rgba(27, 48, 34, 0.08)" stroke="rgba(27, 48, 34, 0.2)" />
              
              {/* Fictional River Contour */}
              <path 
                d="M 220 100 C 350 250, 400 300, 450 550" 
                fill="none" 
                stroke="#52735B" 
                strokeWidth="3" 
                opacity="0.6"
              />
              <path 
                d="M 680 120 C 720 220, 750 380, 850 600" 
                fill="none" 
                stroke="#52735B" 
                strokeWidth="2.5" 
                opacity="0.5"
              />

              {/* Map Title Compass Graphic */}
              <g transform="translate(80, 500)" opacity="0.6">
                <circle cx="0" cy="0" r="30" fill="none" stroke="#1B3022" strokeWidth="1" />
                <line x1="0" y1="-38" x2="0" y2="38" stroke="#1B3022" strokeWidth="1" />
                <line x1="-38" y1="0" x2="38" y2="0" stroke="#1B3022" strokeWidth="1" />
                <text x="-4" y="-42" fontSize="10" fontWeight="bold" fill="#1B3022">N</text>
                <text x="44" y="4" fontSize="9" fill="#1B3022">FICTIONAL TERRAIN</text>
              </g>
            </svg>

            {/* Interactive Pins Overlay */}
            <div className="map-pins-layer">
              {EXPEDITIONS.map((exp) => {
                const isSelected = selectedExpedition.id === exp.id;
                return (
                  <button
                    key={exp.id}
                    className={`map-pin-btn ${isSelected ? 'active' : ''}`}
                    style={{ left: `${exp.coordinates.x}%`, top: `${exp.coordinates.y}%` }}
                    onClick={() => setSelectedExpedition(exp)}
                  >
                    <span className="pin-pulse"></span>
                    <span className="pin-core"></span>
                    <span className="pin-label">{exp.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Expedition Details Drawer */}
          <div className="expedition-detail-card">
            <div className="detail-header">
              <span className="expedition-year-tag">{selectedExpedition.year} EXPEDITION</span>
              <span className="duration-tag">
                <Clock size={13} /> {selectedExpedition.duration}
              </span>
            </div>

            <h3 className="expedition-name">{selectedExpedition.name}</h3>

            <div className="expedition-visual-frame">
              <img 
                src={selectedExpedition.visual} 
                alt={selectedExpedition.name} 
                className="expedition-img"
              />
            </div>

            <div className="expedition-focus-box">
              <Target size={15} className="focus-icon" />
              <div>
                <span className="focus-label">EXPEDITION FOCUS</span>
                <span className="focus-val">{selectedExpedition.focus}</span>
              </div>
            </div>

            <p className="expedition-summary">
              {selectedExpedition.summary}
            </p>

            <div className="fictional-disclaimer-badge">
              <span>FICTIONAL DEMONSTRATION REGION</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
