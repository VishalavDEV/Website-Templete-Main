// src/components/Hero.jsx
import { personalInfo } from '../data/resumeData';
import Icons from './Icons';

export default function Hero() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = personalInfo.cvFile;
    link.download = 'Jordan_Davis_CV.pdf';
    link.click();
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="t1-hero" aria-label="Introduction">
      <div className="t1-container">
        <div className="t1-hero-grid">

          {/* ── Left: Text Content ── */}
          <div className="t1-hero-content">
            <div className="t1-hero-eyebrow">
              <span className="t1-hero-eyebrow-dot" aria-hidden="true" />
              <span className="t1-hero-eyebrow-text">Hello, I'm</span>
            </div>

            <h1 className="t1-hero-name">{personalInfo.name}</h1>
            <p className="t1-hero-role">{personalInfo.title}</p>
            <p className="t1-hero-summary">{personalInfo.summary}</p>

            <div className="t1-hero-cta">
              <button
                id="t1-hero-download-cv"
                className="t1-btn t1-btn-primary"
                onClick={handleDownloadCV}
                aria-label="Download Jordan Davis CV"
              >
                <span style={{ display: 'inline-flex', width: 17, height: 17 }}>{Icons.download}</span>
                Download CV
              </button>
              <button
                id="t1-hero-view-work"
                className="t1-btn t1-btn-outline"
                onClick={scrollToProjects}
                aria-label="View my projects"
              >
                View My Work
                <span style={{ display: 'inline-flex', width: 16, height: 16 }}>{Icons.arrowRight}</span>
              </button>
            </div>

            <div className="t1-hero-social">
              <span className="t1-hero-social-label">Connect with me:</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="t1-social-link"
                aria-label="LinkedIn Profile"
                id="t1-hero-linkedin"
              >
                {Icons.linkedin}
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="t1-social-link"
                aria-label="GitHub Profile"
                id="t1-hero-github"
              >
                {Icons.github}
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="t1-social-link"
                aria-label="Send Email"
                id="t1-hero-email"
              >
                {Icons.email}
              </a>
            </div>
          </div>

          {/* ── Right: Image ── */}
          <div className="t1-hero-image-side">
            <div className="t1-hero-image-wrapper">
              <div className="t1-hero-image-dots" aria-hidden="true" />
              <div className="t1-hero-image-frame">
                <img
                  src="profile.jpg"
                  alt="Jordan Davis — Software Engineer"
                  loading="eager"
                  fetchpriority="high"
                />
              </div>
              <div className="t1-hero-image-accent" aria-hidden="true">
                <span>💻</span>
              </div>
            </div>

            <div className="t1-availability-card" role="status" aria-label="Availability status">
              <div className="t1-avail-indicator" aria-hidden="true" />
              <div className="t1-avail-text">
                <strong>Available for Opportunities</strong>
                <span>Open to full-time &amp; contract roles</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
