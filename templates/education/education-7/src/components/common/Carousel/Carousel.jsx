/**
 * Carousel — Image slider with prev/next controls and optional autoplay.
 * @prop {Array<{id, image, alt}>} slides - Array of slide objects
 * @prop {boolean} [autoplay=true] - Enable auto-advance
 * @prop {number} [interval=5000] - Autoplay interval in ms
 */
import { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Carousel.module.css';

const Carousel = ({ slides, autoplay = true, interval = 5000 }) => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const next = useCallback(() => {
    setCurrent(c => (c + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrent(c => (c - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Reset and restart autoplay whenever slide changes
  useEffect(() => {
    if (!autoplay) return;
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, interval);
    return () => clearInterval(timerRef.current);
  }, [autoplay, interval, next, current]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [next, prev]);

  return (
    <div
      className={styles.carousel}
      role="region"
      aria-label="Image carousel"
      aria-roledescription="carousel"
    >
      <div className={styles.track} style={{ transform: `translateX(-${current * 100}%)` }}>
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={styles.slide}
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${idx + 1} of ${slides.length}`}
            aria-hidden={idx !== current}
          >
            <img src={slide.image} alt={slide.alt} className={styles.img} loading={idx === 0 ? 'eager' : 'lazy'} />
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className={[styles.control, styles.prev].join(' ')}
        onClick={prev}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className={[styles.control, styles.next].join(' ')}
        onClick={next}
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className={styles.dots} role="tablist" aria-label="Slide indicators">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            role="tab"
            aria-selected={idx === current}
            aria-label={`Go to slide ${idx + 1}`}
            className={[styles.dot, idx === current ? styles.active : ''].join(' ')}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number, image: PropTypes.string, alt: PropTypes.string })
  ).isRequired,
  autoplay: PropTypes.bool,
  interval: PropTypes.number,
};

export default Carousel;
