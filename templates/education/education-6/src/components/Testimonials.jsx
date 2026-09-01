import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { contentData } from '../data/content';

/**
 * Testimonials Section Carousel Component
 * Renders student testimonies in a sliding carousel layout with indicators.
 * 
 * @param {Object} props
 * @param {number} [props.limit] - Optional limit of reviews to show in loop
 */
export default function Testimonials({ limit }) {
  const allTestimonials = contentData.testimonials;
  const testimonials = limit ? allTestimonials.slice(0, limit) : allTestimonials;

  const [activeIndex, setActiveIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  // Auto-play timer
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const triggerAnimation = () => {
    setAnimate(false);
    setTimeout(() => setAnimate(true), 50);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    triggerAnimation();
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    triggerAnimation();
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
    triggerAnimation();
  };

  if (!testimonials || testimonials.length === 0) return null;

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="testimonials-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="badge badge-primary">Student Stories</span>
          <h2>What Our Students Say</h2>
          <p>Hear firsthand reviews from Apex Business College alumni about their academic journey.</p>
        </div>

        <div className="carousel-container">
          {/* Main Card */}
          <div className={`carousel-card card ${animate ? 'fade-in' : ''}`}>
            <Quote className="quote-icon" size={48} />
            
            <p className="testimonial-quote">"{activeTestimonial.quote}"</p>
            
            <div className="testimonial-user">
              <img 
                src={activeTestimonial.avatar} 
                alt={activeTestimonial.name} 
                className="testimonial-avatar"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80"; // fallback avatar
                }}
              />
              <div className="testimonial-info">
                <h4>{activeTestimonial.name}</h4>
                <p className="testimonial-meta">
                  {activeTestimonial.course} &bull; <span>{activeTestimonial.year}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <button 
            onClick={handlePrev} 
            className="carousel-control btn-prev" 
            aria-label="Previous Testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={handleNext} 
            className="carousel-control btn-next" 
            aria-label="Next Testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicators */}
          <div className="carousel-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`carousel-dot ${activeIndex === index ? 'dot-active' : ''}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
