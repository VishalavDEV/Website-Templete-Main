import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { apiService } from '../utils/api';
import './Testimonials.css';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await apiService.getTestimonials();
        setTestimonials(data);
      } catch (err) {
        console.error("Failed fetching testimonials:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Define reactive backgrounds coordinates based on active slide index
  const backgroundBlobs = [
    { left: '20%', top: '30%', color: 'var(--color-blue)' },
    { left: '60%', top: '20%', color: 'var(--color-purple)' },
    { left: '40%', top: '60%', color: 'var(--color-pink)' },
    { left: '10%', top: '50%', color: 'var(--color-blue-dark)' },
    { left: '70%', top: '40%', color: 'var(--color-blue)' }
  ];

  const activeBlob = backgroundBlobs[activeIndex % backgroundBlobs.length] || backgroundBlobs[0];

  return (
    <div className="testimonials-page">
      {/* Reactive Animated Blob Background */}
      <div className="reactive-glow-container">
        <motion.div
          className="reactive-glow-orb"
          animate={{
            x: activeBlob.left,
            y: activeBlob.top,
            backgroundColor: activeBlob.color
          }}
          transition={{ type: 'spring', stiffness: 60, damping: 20 }}
        />
      </div>

      {/* Header */}
      <section className="testimonials-header section-padding">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-subtitle">TESTIMONIALS</span>
            <h1 className="large-headline">What Our Clients <br /><span className="text-gradient">Say About Us</span></h1>
            <p className="lead-paragraph">
              Read how our automated solutions and custom-engineered strategies deliver operations growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="testimonials-carousel-section section-padding">
        <div className="container">
          {loading ? (
            <div className="loading-spinner-box">
              <div className="spinner"></div>
              <p>Loading testimonials...</p>
            </div>
          ) : (
            <div className="testimonials-carousel-wrapper">
              
              <AnimatePresence mode="wait">
                <motion.div
                  className="testimonial-carousel-card glass-card"
                  key={testimonials[activeIndex].id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <Quote className="carousel-quote-mark" size={48} />
                  
                  <div className="testimonial-rating-row">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} size={16} fill="var(--color-blue)" color="var(--color-blue)" />
                    ))}
                  </div>

                  <p className="testimonial-content-text">
                    "{testimonials[activeIndex].content}"
                  </p>

                  <div className="testimonial-user-row">
                    <div className="user-avatar-placeholder">
                      {testimonials[activeIndex].name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="user-info-text">
                      <h3>{testimonials[activeIndex].name}</h3>
                      <p>{testimonials[activeIndex].role}, {testimonials[activeIndex].company}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Controls */}
              <div className="carousel-controls-row">
                <button className="carousel-control-btn glass-card" onClick={handlePrev} aria-label="Previous slide">
                  <ChevronLeft size={20} />
                </button>
                <div className="carousel-bullets">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      className={`bullet-dot ${activeIndex === idx ? 'active' : ''}`}
                      onClick={() => setActiveIndex(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
                <button className="carousel-control-btn glass-card" onClick={handleNext} aria-label="Next slide">
                  <ChevronRight size={20} />
                </button>
              </div>

            </div>
          )}
        </div>
      </section>
    </div>
  );
}
