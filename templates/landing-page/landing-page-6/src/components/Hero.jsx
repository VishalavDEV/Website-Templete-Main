import React, { useState } from 'react';
import { ArrowRight, BookOpen, ChevronDown } from 'lucide-react';
import BookVisual from './BookVisual';
import OpenBookModal from './OpenBookModal';
import { bookDetailsData } from '../data/bookData';

export default function Hero() {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column Text Content */}
          <div className="hero-content reveal-on-scroll">
            <div className="hero-badge">
              <span>✦</span> {bookDetailsData.heroBadge}
            </div>

            <h1 className="hero-heading">
              When Tomorrow <br />
              <span>Remembers Yesterday</span>
            </h1>

            <p className="hero-subtitle">
              {bookDetailsData.shortDesc}
            </p>

            <div className="hero-author">
              Written by <strong>{bookDetailsData.author}</strong>
            </div>

            <p className="hero-paragraph">
              {bookDetailsData.fullDesc}
            </p>

            <div className="hero-ctas">
              <a href="#purchase" className="btn-primary">
                Get The Book <ArrowRight size={18} />
              </a>
              <button 
                type="button" 
                className="btn-secondary" 
                onClick={() => setIsBookModalOpen(true)}
              >
                <BookOpen size={18} /> Open Book Reader
              </button>
            </div>
          </div>

          {/* Right Column 3D Product Visual */}
          <div className="hero-visual reveal-on-scroll delay-2">
            <BookVisual onOpenBook={() => setIsBookModalOpen(true)} />
          </div>
        </div>

        {/* Scroll Indicator */}
        <a href="#story" className="scroll-indicator" aria-label="Explore story">
          <span>EXPLORE THE STORY</span>
          <ChevronDown size={18} />
        </a>
      </div>

      {/* Interactive Opened Book Modal */}
      <OpenBookModal 
        isOpen={isBookModalOpen} 
        onClose={() => setIsBookModalOpen(false)} 
      />
    </section>
  );
}
