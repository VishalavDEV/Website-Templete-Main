import React, { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className={`announcement-bar ${!isVisible ? 'hidden' : ''}`}>
      <div className="announcement-content">
        <span className="announcement-badge">New Release</span>
        <span>Enter the world of <strong>The Echoes of Tomorrow</strong></span>
        <a href="#purchase" className="announcement-link">
          Order Now <ArrowRight size={14} />
        </a>
      </div>
      <button 
        className="announcement-close" 
        onClick={() => setIsVisible(false)}
        aria-label="Close announcement bar"
      >
        <X size={16} />
      </button>
    </div>
  );
}
