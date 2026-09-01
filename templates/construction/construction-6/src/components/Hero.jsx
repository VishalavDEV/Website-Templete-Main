import React, { useEffect, useState } from 'react';

export default function Hero({ onOpenVideoModal }) {
  const [activeSlide, setActiveSlide] = useState(1);
  const [videoTransform, setVideoTransform] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 900) {
        const scale = 1 + scrollY * 0.00035;
        setVideoTransform(`scale(${scale}) translateY(${scrollY * 0.1}px)`);
      }

      if (scrollY < 450) {
        setActiveSlide(1);
      } else if (scrollY < 1200) {
        setActiveSlide(2);
      } else {
        setActiveSlide(3);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSlideClick = (slideNum) => {
    setActiveSlide(slideNum);
    if (slideNum === 1) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (slideNum === 2) {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    } else if (slideNum === 3) {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="arcstone-hero" id="home">
      {/* Cinematic Background Video */}
      <div className="hero-media-wrapper">
        <video 
          className="hero-video" 
          id="heroScrollVideo" 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="./assets/images/arcstone-villa.jpg"
          style={{ transform: videoTransform }}
        >
          <source src="./assets/videos/luxury-villa.mp4" type="video/mp4" />
        </video>
        <div 
          className="hero-bg-poster" 
          style={{ 
            backgroundImage: "url('./assets/images/arcstone-villa.jpg')",
            transform: videoTransform
          }}
        ></div>
        <div className="hero-gradient-overlay"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-tagline">
            WE BUILD MORE THAN STRUCTURES<span className="gold-dot">.</span>
          </span>
          
          <h1 className="hero-heading">
            From Vision<br />
            to Landmarks
          </h1>

          <p className="hero-description">
            We partner with our clients to build spaces that enhance lives and communities. Engineered with React and Java Spring Boot.
          </p>

          <div className="hero-btn-group">
            <a href="#projects" className="btn-sage">
              Explore Projects
            </a>
            <button 
              className="btn-play-circle" 
              id="heroPlayModalBtn" 
              onClick={onOpenVideoModal}
              title="Play Architectural Film"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="6 3 20 12 6 21" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Vertical Slide Indicator */}
        <div className="hero-slider-pagination">
          <div 
            className={`page-num ${activeSlide === 1 ? 'active' : ''}`} 
            onClick={() => handleSlideClick(1)}
          >
            01
          </div>
          <div 
            className={`page-num ${activeSlide === 2 ? 'active' : ''}`} 
            onClick={() => handleSlideClick(2)}
          >
            02
          </div>
          <div 
            className={`page-num ${activeSlide === 3 ? 'active' : ''}`} 
            onClick={() => handleSlideClick(3)}
          >
            03
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <a href="#stats" className="hero-scroll-indicator">
          <span>SCROLL</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 13l5 5 5-5M12 4v14"/>
          </svg>
        </a>
      </div>
    </section>
  );
}
