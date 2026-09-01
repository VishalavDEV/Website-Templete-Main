// src/components/About.jsx
import { aboutMe, personalInfo } from '../data/resumeData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Icons from './Icons';

export default function About() {
  const imgRef = useScrollAnimation();
  const contentRef = useScrollAnimation();

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="t1-section t1-section--alt" aria-label="About me">
      <div className="t1-container">
        <div className="t1-section-header">
          <div className="t1-section-label">Get to know me</div>
          <h2 className="t1-section-title">About Me</h2>
        </div>

        <div className="t1-about-grid">
          {/* Left: Image */}
          <div ref={imgRef} className="t1-about-image-col t1-fade-in">
            <div className="t1-about-image-box">
              <img
                src="profile.jpg"
                alt="Jordan Davis — Professional portrait"
                loading="lazy"
              />
            </div>
            <div className="t1-about-experience-badge" aria-label="3 plus years of experience">
              <span className="t1-exp-number">3+</span>
              <span className="t1-exp-label">Years of<br />Experience</span>
            </div>
          </div>

          {/* Right: Bio */}
          <div ref={contentRef} className="t1-about-content t1-fade-in t1-fade-in-delay-2">
            <div className="t1-section-label" style={{ justifyContent: 'flex-start', marginBottom: 8 }}>
              My Story
            </div>
            <h3
              style={{
                fontSize: 'clamp(22px, 3vw, 28px)',
                fontWeight: 800,
                marginBottom: 20,
                lineHeight: 1.25,
              }}
            >
              Passionate Engineer Building<br />
              <span style={{ color: 'var(--t1-accent)' }}>Impactful Digital Solutions</span>
            </h3>

            {aboutMe.bio.map((paragraph, i) => (
              <p key={i} className="t1-about-bio" style={{ marginBottom: i < aboutMe.bio.length - 1 ? 16 : 0 }}>
                {paragraph}
              </p>
            ))}

            <div className="t1-about-details-grid">
              {aboutMe.details.map((detail) => (
                <div key={detail.label} className="t1-about-detail-item">
                  <span className="t1-about-detail-label">{detail.label}</span>
                  <span className="t1-about-detail-value">{detail.value}</span>
                </div>
              ))}
            </div>

            <button
              id="t1-about-lets-connect"
              className="t1-btn t1-btn-primary"
              onClick={scrollToContact}
              aria-label="Navigate to contact section"
            >
              Let's Connect
              <span style={{ display: 'inline-flex', width: 16, height: 16 }}>{Icons.arrowRight}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
