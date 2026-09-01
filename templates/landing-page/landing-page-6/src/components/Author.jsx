import React, { useState, useEffect, useRef } from 'react';
import { Twitter, Instagram, Globe, BookOpen, ArrowRight } from 'lucide-react';
import { bookDetailsData } from '../data/bookData';

export default function Author() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          bookDetailsData.stats.forEach((stat, index) => {
            let start = 0;
            const end = stat.value;
            const duration = 1800; // ms
            const increment = Math.ceil(end / (duration / 30));

            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                start = end;
                clearInterval(timer);
              }
              setCounts((prev) => {
                const updated = [...prev];
                updated[index] = start;
                return updated;
              });
            }, 30);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="author" className="section" ref={sectionRef}>
      <div className="container">
        <div className="author-grid">
          {/* Left Column Author Portrait */}
          <div className="author-image-frame reveal-on-scroll">
            <img 
              src="/assets/images/author_portrait.jpg" 
              alt="Mira Rowan Author Portrait" 
            />
          </div>

          {/* Right Column Author Bio & Stats */}
          <div className="author-content reveal-on-scroll delay-2">
            <span className="section-label">MEET THE AUTHOR</span>
            <h2 className="section-heading">Mira Rowan</h2>
            
            <p className="hero-paragraph" style={{ marginBottom: '16px' }}>
              Mira Rowan is an award-winning speculative fiction author known for blending intricate futuristic worldbuilding with profound psychological intimacy.
            </p>

            <p className="hero-paragraph" style={{ marginBottom: '28px' }}>
              Her work explores memory, technology, identity, and the quiet human connections that endure across time. When she isn't writing in her Melbourne studio, she presents lectures on temporal philosophy and ethics in modern fiction.
            </p>

            <div className="author-socials">
              <a href="#author" className="social-icon-btn" aria-label="Author Twitter">
                <Twitter size={18} />
              </a>
              <a href="#author" className="social-icon-btn" aria-label="Author Instagram">
                <Instagram size={18} />
              </a>
              <a href="#author" className="social-icon-btn" aria-label="Author Website">
                <Globe size={18} />
              </a>
              <a href="#author" className="social-icon-btn" aria-label="Author Goodreads">
                <BookOpen size={18} />
              </a>
            </div>

            {/* Animated Statistics */}
            <div className="stats-grid">
              {bookDetailsData.stats.map((stat, idx) => (
                <div key={stat.label} className="stat-item">
                  <div className="stat-value">
                    {counts[idx]}{stat.suffix}
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
