import React, { useState } from 'react';
import './Testimonials.css';
import { MessageSquareQuote, Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Product Lead',
    company: 'Veloce Dynamics',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: 'Ben Carson delivered our complex web platform weeks ahead of schedule. The design system is clean, pixel-perfect, and the backend architecture is bulletproof.',
    project: 'SaaS Platform Redesign'
  },
  {
    id: 2,
    name: 'Marcus Thorne',
    role: 'CTO & Co-Founder',
    company: 'Apex Financial',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: 'Working with Ben has been a game-changer. He has that rare combination of deep backend engineering acumen and an unmatched eye for sleek, modern UI aesthetics.',
    project: 'Fintech Real-Time Dashboard'
  },
  {
    id: 3,
    name: 'Elena Rostova',
    role: 'Creative Director',
    company: 'Aura Studio',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: 'Ben brought our brand vision to life with fluid animations and responsive perfection. Our user engagement went up by 180% within the first month post-launch.',
    project: 'Brand Identity & Web Experience'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section id="client" className="testimonials-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <MessageSquareQuote size={14} />
            Client Reviews
          </span>
          <h2 className="section-title">What Clients Say</h2>
          <p className="section-subtitle">
            Feedback from founders, product teams, and engineering leaders worldwide.
          </p>
        </div>

        {/* Testimonial Showcase Card */}
        <div className="testimonial-slider-wrapper">
          <div className="testimonial-card glass-card">
            <div className="testimonial-quote-icon">
              <Quote size={40} />
            </div>

            <div className="testimonial-rating">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
              ))}
            </div>

            <blockquote className="testimonial-text">
              "{current.quote}"
            </blockquote>

            <div className="testimonial-author-row">
              <div className="author-info-group">
                <img 
                  src={current.avatar} 
                  alt={current.name} 
                  className="author-avatar" 
                />
                <div>
                  <h4 className="author-name">{current.name}</h4>
                  <p className="author-role">{current.role} • <span className="author-company">{current.company}</span></p>
                </div>
              </div>

              <div className="author-project-badge">
                {current.project}
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="testimonial-controls">
            <button 
              className="control-arrow-btn" 
              onClick={prevSlide}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="dot-indicators">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={`dot-indicator ${idx === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                ></button>
              ))}
            </div>

            <button 
              className="control-arrow-btn" 
              onClick={nextSlide}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
