import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import './Testimonials.css';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <section className="editorial-testimonials-section section">
      <div className="testimonials-ambient-glow" />
      <div className="container">
        <div className="testimonials-editorial-wrapper">
          {/* Large Quote Mark */}
          <div className="editorial-quote-mark">“</div>

          {/* Large Testimonial Statement */}
          <blockquote className="editorial-quote-statement">
            {current.quote}
          </blockquote>

          {/* Author & Verification Row */}
          <div className="editorial-testimonial-footer">
            <div className="editorial-author-block">
              <img
                src={current.avatar}
                alt={current.author}
                className="editorial-author-avatar"
              />
              <div className="editorial-author-credentials">
                <h4 className="ed-author-name">{current.author}</h4>
                <p className="ed-author-role">{current.role}, <span className="ed-co">{current.company}</span></p>
                <p className="ed-industry-tag">{current.industry}</p>
              </div>
            </div>

            {/* Minimal Luxury Navigation Controls */}
            <div className="editorial-carousel-nav">
              <span className="carousel-fraction">
                0{currentIndex + 1} / 0{testimonials.length}
              </span>
              <div className="carousel-btn-group">
                <button onClick={prevTestimonial} className="ed-nav-arrow" aria-label="Previous endorsement">
                  <ArrowLeft size={18} />
                </button>
                <button onClick={nextTestimonial} className="ed-nav-arrow" aria-label="Next endorsement">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
