import React, { useState } from 'react';
import { paintColors } from '../data/paintData';
import { Link } from 'react-router-dom';
import { Palette, Sparkles, Check, ArrowRight, ShieldCheck } from 'lucide-react';

export const CarVisualizer = ({ onSelectColorForBooking }) => {
  const [selectedColor, setSelectedColor] = useState(paintColors[1]); // Crimson Red by default

  return (
    <div style={{
      background: 'linear-gradient(180deg, #0d1013 0%, #111417 100%)',
      border: '1px solid rgba(124, 255, 79, 0.2)',
      borderRadius: '24px',
      padding: '40px 32px',
      boxShadow: '0 25px 60px rgba(0,0,0,0.8)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Glow Effect */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '500px',
        height: '250px',
        background: `radial-gradient(circle, ${selectedColor.hex}44 0%, transparent 70%)`,
        filter: 'blur(60px)',
        transition: 'background 0.5s ease',
        pointerEvents: 'none'
      }} />

      <div style={{ textAlign: 'center', marginBottom: '32px', position: 'relative', zIndex: 2 }}>
        <div className="badge-pill badge-green" style={{ marginBottom: '12px' }}>
          <Palette size={14} /> INTERACTIVE COLOR STUDIO
        </div>
        <h2 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
          color: '#f5f7f8'
        }}>
          SEE IT BEFORE YOU PAINT IT.
        </h2>
        <p style={{ color: '#b9c0c5', fontSize: '1rem', marginTop: '8px' }}>
          Click any color swatch below to visualize real-time high-gloss paint transformations.
        </p>
      </div>

      {/* SVG Car Render Container */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '780px',
        margin: '0 auto 36px auto',
        padding: '20px',
        borderRadius: '16px',
        background: 'radial-gradient(ellipse at bottom, #1b2024 0%, #07090b 80%)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: 'inset 0 0 40px rgba(0,0,0,0.9)'
      }}>
        {/* Dynamic High Detail Sports Car Vector SVG */}
        <svg
          viewBox="0 0 1000 420"
          style={{ width: '100%', height: 'auto', filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.8))' }}
        >
          <defs>
            {/* Dynamic Paint Fill Gradient with Metallic Gloss Reflection */}
            <linearGradient id="carPaintGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={selectedColor.accentHex || '#ffffff'} />
              <stop offset="45%" stopColor={selectedColor.hex} />
              <stop offset="85%" stopColor={selectedColor.hex} />
              <stop offset="100%" stopColor="#050505" />
            </linearGradient>

            <linearGradient id="windowGlass" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0.95" />
            </linearGradient>

            <linearGradient id="headlightGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#25bfff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#7cff4f" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Under-car Neon Shadow Glow */}
          <ellipse cx="500" cy="370" rx="420" ry="25" fill={selectedColor.hex} opacity="0.4" filter="blur(15px)" />

          {/* Main Car Body Shell */}
          <path
            d="M 120 280 C 140 230 220 210 320 190 C 400 130 520 110 680 120 C 780 130 840 180 900 240 C 930 260 950 280 940 310 C 930 330 870 330 860 330 C 850 330 840 290 770 290 C 700 290 690 330 400 330 C 390 330 380 290 310 290 C 240 290 230 330 150 330 C 120 330 100 310 120 280 Z"
            fill="url(#carPaintGradient)"
            stroke="#1b2024"
            strokeWidth="3"
            style={{ transition: 'fill 0.4s ease' }}
          />

          {/* Roof Line & Hood Highlights */}
          <path
            d="M 330 185 C 410 135 520 118 670 125 C 760 135 815 185 860 235"
            fill="none"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="4"
          />

          {/* Side Windows */}
          <path
            d="M 350 180 C 420 140 520 125 640 130 C 660 170 660 210 660 210 L 350 210 Z"
            fill="url(#windowGlass)"
            stroke="#0f172a"
            strokeWidth="3"
          />
          <path
            d="M 670 132 C 730 140 770 170 800 210 L 675 210 Z"
            fill="url(#windowGlass)"
            stroke="#0f172a"
            strokeWidth="3"
          />

          {/* Door Cut Line */}
          <path d="M 490 190 L 480 320" stroke="rgba(0,0,0,0.5)" strokeWidth="3" />
          <path d="M 660 190 L 650 320" stroke="rgba(0,0,0,0.5)" strokeWidth="3" />
          <path d="M 500 220 L 540 220" stroke="#f5f7f8" strokeWidth="4" strokeLinecap="round" />

          {/* Front Headlights & Rear Taillight LED */}
          <polygon points="900,240 940,265 910,275 885,255" fill="#25bfff" />
          <polygon points="900,240 980,245 990,290 940,265" fill="url(#headlightGlow)" />
          <polygon points="120,280 100,285 110,305 135,295" fill="#ff2a3b" />

          {/* Front Wheel Assemblies */}
          <g transform="translate(770, 290)">
            <circle cx="0" cy="0" r="55" fill="#090a0c" stroke="#334155" strokeWidth="6" />
            <circle cx="0" cy="0" r="40" fill="#1b2024" stroke="#7cff4f" strokeWidth="2" />
            {/* Rim Spokes */}
            <line x1="-30" y1="0" x2="30" y2="0" stroke="#cbd5e1" strokeWidth="5" />
            <line x1="0" y1="-30" x2="0" y2="30" stroke="#cbd5e1" strokeWidth="5" />
            <line x1="-22" y1="-22" x2="22" y2="22" stroke="#cbd5e1" strokeWidth="5" />
            <line x1="-22" y1="22" x2="22" y2="-22" stroke="#cbd5e1" strokeWidth="5" />
            <circle cx="0" cy="0" r="14" fill="#07090b" />
          </g>

          {/* Rear Wheel Assemblies */}
          <g transform="translate(310, 290)">
            <circle cx="0" cy="0" r="55" fill="#090a0c" stroke="#334155" strokeWidth="6" />
            <circle cx="0" cy="0" r="40" fill="#1b2024" stroke="#7cff4f" strokeWidth="2" />
            {/* Rim Spokes */}
            <line x1="-30" y1="0" x2="30" y2="0" stroke="#cbd5e1" strokeWidth="5" />
            <line x1="0" y1="-30" x2="0" y2="30" stroke="#cbd5e1" strokeWidth="5" />
            <line x1="-22" y1="-22" x2="22" y2="22" stroke="#cbd5e1" strokeWidth="5" />
            <line x1="-22" y1="22" x2="22" y2="-22" stroke="#cbd5e1" strokeWidth="5" />
            <circle cx="0" cy="0" r="14" fill="#07090b" />
          </g>
        </svg>

        {/* Selected Paint Spec Pill Banner */}
        <div style={{
          marginTop: '16px',
          padding: '16px 24px',
          borderRadius: '12px',
          background: 'rgba(7, 9, 11, 0.85)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div>
            <div style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Selected Color
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: '900', color: selectedColor.accentHex || '#7cff4f', fontFamily: "'Space Grotesk', sans-serif" }}>
              {selectedColor.name}
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Finish Type
            </div>
            <div style={{ fontSize: '1rem', fontWeight: '700', color: '#f5f7f8' }}>
              {selectedColor.finish}
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Paint Code
            </div>
            <div style={{ fontSize: '1rem', fontWeight: '700', color: '#25bfff' }}>
              {selectedColor.code}
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Est. Package
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: '900', color: '#7cff4f', fontFamily: "'Space Grotesk', sans-serif" }}>
              {selectedColor.estimatedPrice}
            </div>
          </div>

          <Link to="/booking" className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>
            REQUEST THIS COLOR <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Color Swatch Picker Grid (12 Colors) */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        gap: '14px'
      }}>
        {paintColors.map((col) => {
          const isSelected = selectedColor.id === col.id;
          return (
            <button
              key={col.id}
              onClick={() => setSelectedColor(col)}
              style={{
                background: 'rgba(17, 20, 23, 0.9)',
                border: isSelected ? `2px solid ${col.accentHex || '#7cff4f'}` : '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.25s ease',
                boxShadow: isSelected ? `0 0 20px ${col.hex}66` : 'none'
              }}
            >
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${col.accentHex || col.hex} 0%, ${col.hex} 100%)`,
                border: '2px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {isSelected && <Check size={16} color="#ffffff" style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.8))' }} />}
              </div>
              <div style={{ overflow: 'hidden' }}>
                <div style={{
                  fontSize: '0.78rem',
                  fontWeight: '800',
                  color: isSelected ? '#ffffff' : '#b9c0c5',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden'
                }}>
                  {col.name}
                </div>
                <div style={{ fontSize: '0.68rem', color: '#64748b' }}>
                  {col.finish}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CarVisualizer;
