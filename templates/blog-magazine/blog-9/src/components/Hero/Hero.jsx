import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ArrowRight, BookOpen, Compass } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const contentRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll('.atlas-hero-animate'),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2
      }
    );
  }, []);

  return (
    <section className="atlas-hero" aria-label="Hero">
      <div className="atlas-hero-bg" ref={bgRef}>
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2400&q=90"
          alt="Majestic mountain landscape at sunrise"
          loading="eager"
        />
      </div>
      <div className="atlas-hero-overlay" />

      <div className="atlas-container atlas-hero-content" ref={contentRef}>
        <div className="atlas-hero-badge atlas-hero-animate">
          <Compass size={14} color="#c9933b" />
          <span>The Magazine of Discovery</span>
        </div>

        <h1 className="atlas-hero-headline atlas-hero-animate">
          There is always more to discover.
        </h1>

        <p className="atlas-hero-sub atlas-hero-animate">
          Stories from the wild, the unknown, the ancient and the infinite.
        </p>

        <div className="atlas-hero-actions atlas-hero-animate">
          <Link to="/explore" className="atlas-btn atlas-btn-primary">
            <span>Explore the World</span>
            <ArrowRight size={16} />
          </Link>
          <Link to="/magazine" className="atlas-btn atlas-btn-secondary">
            <BookOpen size={16} />
            <span>Read the Latest Issue</span>
          </Link>
        </div>
      </div>

      <div className="atlas-hero-scroll-hint">
        <span>Scroll to Explore</span>
        <span className="atlas-scroll-line" />
      </div>
    </section>
  );
}
