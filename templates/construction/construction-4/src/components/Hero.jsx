import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const phrases = [
  'Elevated Living, Masterfully Built',
  'Luxury Spaces Crafted With Precision',
  'Modernist Living Where Details Matter',
  'Bespoke Architecture & Design + Build'
];

export default function Hero({ onOpenConsultModal }) {
  const [displayText, setDisplayText] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    let timeout;
    const currentPhrase = phrases[phraseIdx];

    if (isDeleting) {
      if (charIdx > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentPhrase.substring(0, charIdx - 1));
          setCharIdx(charIdx - 1);
        }, 35);
      } else {
        setIsDeleting(false);
        setPhraseIdx((prev) => (prev + 1) % phrases.length);
        timeout = setTimeout(() => {}, 400);
      }
    } else {
      if (charIdx < currentPhrase.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentPhrase.substring(0, charIdx + 1));
          setCharIdx(charIdx + 1);
        }, 80);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIdx, isDeleting, phraseIdx]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback for browsers blocking unmuted autoplay
      });
    }
  }, []);

  const scrollToServices = (e) => {
    e.preventDefault();
    const target = document.querySelector('#services');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="knack-hero" id="home">
      {/* Parallax Video Media Background */}
      <div className="hero-media-wrapper">
        <video
          ref={videoRef}
          id="knackHeroVideo"
          className="hero-video-element"
          autoPlay
          loop
          muted
          playsInline
          poster="./assets/images/knack-hero-villa.jpg"
        >
          <source src="./assets/videos/knack-villa.mp4" type="video/mp4" />
        </video>
        <div 
          className="hero-image-fallback" 
          style={{ backgroundImage: "url('./assets/images/knack-hero-villa.jpg')" }} 
        />
        <div className="hero-ambient-overlay" />
      </div>

      <div className="container hero-container">
        <div className="hero-center-content">
          <h1 className="hero-main-title">
            <span>{displayText}</span>
            <span className="typewriter-cursor">|</span>
          </h1>
          <p className="hero-sub-title">
            Luxury spaces crafted with precision, where the details matter.
          </p>
          <div className="hero-cta-wrapper">
            <button className="btn-honey-gold" onClick={onOpenConsultModal}>
              Book A Consultation Today <ArrowRight size={18} className="arrow-glyph" />
            </button>
            <a href="#estimator" className="btn-outline-pill">
              Explore Cost Estimator
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Pill Indicator */}
      <a href="#services" onClick={scrollToServices} className="hero-scroll-pill">
        <span>EXPLORE SERVICES</span>
        <ChevronDown size={14} className="bounce-dot" />
      </a>
    </section>
  );
}
