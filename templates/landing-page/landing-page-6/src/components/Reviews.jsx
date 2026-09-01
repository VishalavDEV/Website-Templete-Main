import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { bookDetailsData } from '../data/bookData';

export default function Reviews() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const reviews = bookDetailsData.reviews;

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, reviews.length]);

  const current = reviews[activeIdx];

  return (
    <section id="reviews" className="section">
      <div className="container">
        <div className="text-center center-content">
          <span className="section-label reveal-on-scroll">CRITICAL ACCLAIM</span>
          <h2 className="section-heading reveal-on-scroll delay-1">
            Readers Are Talking
          </h2>
          <p className="section-desc reveal-on-scroll delay-2">
            Discover how critics and early readers are reacting to <em>The Echoes of Tomorrow</em>.
          </p>
        </div>

        <div 
          className="reviews-carousel-wrapper reveal-on-scroll delay-3"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="review-card">
            <div className="review-stars">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} size={20} fill="#F5A623" stroke="none" />
              ))}
            </div>

            <blockquote className="review-quote">
              "{current.quote}"
            </blockquote>

            <div className="review-author-info">
              <img 
                src={current.avatar} 
                alt={current.author} 
                className="review-avatar" 
              />
              <div style={{ textAlign: 'left' }}>
                <div className="review-author-name">{current.author}</div>
                <div className="review-author-meta">{current.role} • {current.location}</div>
              </div>
            </div>
          </div>

          <div className="carousel-controls">
            <button 
              className="carousel-arrow-btn"
              onClick={() => setActiveIdx((activeIdx - 1 + reviews.length) % reviews.length)}
              aria-label="Previous Review"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="carousel-dots">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  className={`carousel-dot ${idx === activeIdx ? 'active' : ''}`}
                  onClick={() => setActiveIdx(idx)}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

            <button 
              className="carousel-arrow-btn"
              onClick={() => setActiveIdx((activeIdx + 1) % reviews.length)}
              aria-label="Next Review"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
