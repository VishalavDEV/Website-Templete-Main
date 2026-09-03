import React from 'react';
import './Hero.css';
import heroImage from '../assets/hero-ben.jpg';
import { ArrowRight, FileText, Send, Code2, CheckCircle2 } from 'lucide-react';

export default function Hero({ onOpenResume }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-ambient-glow hero-glow-1"></div>
      <div className="hero-ambient-glow hero-glow-2"></div>

      <div className="container hero-container">
        <div className="hero-grid">
          {/* Left Column: Bio, Status & CTA Actions */}
          <div className="hero-content-col">
            <div className="hero-status-badge">
              <span className="pulse-dot"></span>
              <span>Available for Freelance & Full-time Roles</span>
            </div>

            <h1 className="hero-title">
              Hi, I'm <span className="hero-title-gradient">Ben Carson</span>
            </h1>

            <h2 className="hero-role">
              Full Stack Web Developer & UI/UX Designer
            </h2>

            <p className="hero-description">
              Based in New York City. I craft exceptional digital experiences, scalable enterprise applications, and sleek modern web products that drive impactful results.
            </p>

            {/* Interactive Action Buttons */}
            <div className="hero-actions">
              <button 
                className="btn-primary hero-main-btn"
                onClick={() => scrollTo('portfolio')}
                id="hero-explore-portfolio"
              >
                <span>Explore Portfolio</span>
                <ArrowRight size={18} />
              </button>

              <button 
                className="btn-secondary hero-contact-btn"
                onClick={() => scrollTo('contact')}
                id="hero-contact-me"
              >
                <Send size={16} />
                <span>Get in Touch</span>
              </button>

              <button 
                className="btn-outline hero-resume-btn"
                onClick={onOpenResume}
                id="hero-view-cv"
                title="View interactive CV"
              >
                <FileText size={16} />
                <span>View CV</span>
              </button>
            </div>

            {/* Tech Stack Highlights */}
            <div className="hero-tech-stack">
              <span className="tech-stack-label">Core Technologies:</span>
              <div className="tech-pills">
                <span className="tech-pill">React 19</span>
                <span className="tech-pill">Spring Boot</span>
                <span className="tech-pill">TypeScript</span>
                <span className="tech-pill">Java 21</span>
                <span className="tech-pill">Tailwind & UI</span>
                <span className="tech-pill">PostgreSQL</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Portrait with Floating Info Badges */}
          <div className="hero-image-col">
            <div className="hero-card-frame">
              <div className="hero-image-wrapper">
                <img 
                  src={heroImage} 
                  alt="Ben Carson - Senior Web Developer & Designer" 
                  className="hero-person-img"
                  loading="eager"
                />
              </div>

              {/* Floating Badge 1 */}
              <div className="floating-badge badge-top-left glass-card">
                <div className="badge-icon-box bg-emerald">
                  <Code2 size={20} />
                </div>
                <div>
                  <div className="badge-value">5+ Years</div>
                  <div className="badge-label">Experience</div>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="floating-badge badge-bottom-right glass-card">
                <div className="badge-icon-box bg-indigo">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <div className="badge-value">50+ Delivered</div>
                  <div className="badge-label">Web Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
