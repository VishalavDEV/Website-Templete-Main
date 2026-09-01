import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import { contentData } from '../data/content';

/**
 * Hero Section Component
 * 
 * @param {Object} props
 * @param {string} [props.heading] - Hero title text
 * @param {string} [props.subtext] - Hero subtitle text
 * @param {string} [props.ctaPrimary] - Primary button text
 * @param {string} [props.ctaSecondary] - Secondary button text
 */
export default function Hero({ heading, subtext, ctaPrimary, ctaSecondary }) {
  const { hero } = contentData;

  const displayHeading = heading || hero.heading;
  const displaySubtext = subtext || hero.subtext;
  const displayCtaPrimary = ctaPrimary || hero.ctaPrimary;
  const displayCtaSecondary = ctaSecondary || hero.ctaSecondary;

  return (
    <section className="hero-wrapper">
      <div className="container hero-container grid-2">
        <div className="hero-content flex-center-start fade-in">
          <div className="badge badge-gold hero-badge">Admissions Open 2026/2027</div>
          <h1 className="hero-heading">{displayHeading}</h1>
          <p className="hero-subtext">{displaySubtext}</p>
          <div className="hero-buttons">
            <Link to="/admissions" className="btn btn-gold">
              {displayCtaPrimary} <ArrowRight size={18} />
            </Link>
            <Link to="/courses" className="btn btn-secondary hero-btn-secondary">
              {displayCtaSecondary} <BookOpen size={18} />
            </Link>
          </div>
        </div>

        {/* Graduation celebration themed inline SVG Illustration */}
        <div className="hero-media flex-center fade-in">
          <svg 
            viewBox="0 0 500 450" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="hero-illustration"
            aria-label="Illustration of students celebrating graduation"
          >
            {/* Background elements */}
            <circle cx="250" cy="225" r="180" fill="url(#circleGrad)" opacity="0.15" />
            <circle cx="120" cy="120" r="40" fill="url(#dotGrad)" opacity="0.2" />
            <rect x="380" y="320" width="30" height="30" rx="6" transform="rotate(45 380 320)" fill="url(#dotGrad)" opacity="0.25" />
            
            {/* Abstract stack of books / foundation */}
            <path d="M120 340 L380 340 L350 380 L150 380 Z" fill="#1e3a8a" opacity="0.7" />
            <path d="M100 360 L400 360 L380 395 L120 395 Z" fill="#0f172a" />
            
            {/* Scroll/Diploma scroll representation */}
            <rect x="230" y="270" width="40" height="90" rx="4" transform="rotate(-70 230 270)" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
            <path d="M150 285 L230 258" stroke="#f59e0b" strokeWidth="6" strokeLinecap="round" />
            
            {/* Graduation Cap floating in center */}
            <g transform="translate(140, 90)">
              {/* Cap base */}
              <path d="M75 110 C75 110 75 130 110 130 C145 130 145 110 145 110 L75 110 Z" fill="#1e293b" stroke="#334155" strokeWidth="2" />
              <path d="M78 110 L78 120 C78 120 110 132 142 120 L142 110 Z" fill="#0f172a" />
              
              {/* Cap rhombus top */}
              <polygon points="110,60 210,95 110,130 10,95" fill="#1e40af" stroke="#3b82f6" strokeWidth="3" />
              <polygon points="110,68 190,95 110,122 30,95" fill="#0f172a" />
              
              {/* Button & Tassel */}
              <circle cx="110" cy="95" r="5" fill="#f59e0b" />
              <path d="M110 95 C130 105 155 125 155 140" stroke="#f59e0b" strokeWidth="3" fill="none" />
              <polygon points="151,138 159,138 155,148" fill="#d97706" />
            </g>

            {/* Flying Mini Caps */}
            <g transform="translate(300, 60) scale(0.5)">
              <polygon points="110,60 210,95 110,130 10,95" fill="#3b82f6" />
              <path d="M75 110 C75 110 75 130 110 130 C145 130 145 110 145 110" fill="#1e293b" />
              <path d="M110 95 C130 105 155 125 155 140" stroke="#f59e0b" strokeWidth="2" fill="none" />
            </g>
            <g transform="translate(60, 180) scale(0.4) rotate(-20)">
              <polygon points="110,60 210,95 110,130 10,95" fill="#f59e0b" />
              <path d="M75 110 C75 110 75 130 110 130 C145 130 145 110 145 110" fill="#d97706" />
              <path d="M110 95 C130 105 155 125 155 140" stroke="#1e293b" strokeWidth="2" fill="none" />
            </g>

            {/* Dynamic Celebration Rays/Stars */}
            <g stroke="#f59e0b" strokeWidth="2" strokeLinecap="round">
              <line x1="250" y1="50" x2="250" y2="35" />
              <line x1="280" y1="180" x2="295" y2="185" />
              <line x1="80" y1="80" x2="90" y2="90" />
            </g>

            {/* Definitions for Gradients */}
            <defs>
              <linearGradient id="circleGrad" x1="70" y1="45" x2="430" y2="405" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3b82f6" />
                <stop offset="1" stopColor="#1e3a8a" />
              </linearGradient>
              <linearGradient id="dotGrad" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#f59e0b" />
                <stop offset="1" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}
