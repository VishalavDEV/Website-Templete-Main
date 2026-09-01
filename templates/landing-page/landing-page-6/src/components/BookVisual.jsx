import React, { useState } from 'react';
import { BookOpen, Sparkles } from 'lucide-react';

export default function BookVisual({ onOpenBook }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: (y / rect.height) * -16,
      y: (x / rect.width) * 16,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className="hero-visual-wrapper">
      {/* Background Decorative Rings & Glow */}
      <div className="hero-deco-blob" />
      <div className="hero-deco-ring" />

      <div 
        className="book-stage"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onOpenBook}
        title="Click to Open & Read Book Excerpt"
      >
        <div 
          className="floating-book"
          style={{
            transform: tilt.x !== 0 || tilt.y !== 0 
              ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.03)`
              : undefined
          }}
        >
          <div className="book-cover-container">
            <div className="book-spine-side" />
            <div className="book-spine-glow" />
            <img 
              src="/assets/images/book_cover.jpg" 
              alt="The Echoes of Tomorrow Book Cover by Mira Rowan" 
              className="book-cover-img"
            />
            {/* Interactive Click Hint Badge */}
            <div className="book-click-hint">
              <BookOpen size={14} />
              <span>Click to Open Book</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Shadow Synchronized with Book Movement */}
      <div className="floating-shadow" />
    </div>
  );
}
