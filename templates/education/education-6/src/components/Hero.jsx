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

        {/* Business College Executive Showcase */}
        <div className="hero-media flex-center fade-in" style={{ position: 'relative' }}>
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '460px',
            borderRadius: '1.5rem',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.35)',
            border: '3px solid rgba(245, 158, 11, 0.4)',
          }}>
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=85"
              alt="Business College Students in Executive Seminar"
              style={{
                width: '100%',
                height: '380px',
                objectFit: 'cover',
                display: 'block',
              }}
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80';
              }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(15, 23, 42, 0.8) 0%, transparent 60%)',
            }} />

            {/* Floating Top Badge */}
            <div style={{
              position: 'absolute',
              top: '1rem',
              left: '1rem',
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(8px)',
              padding: '0.4rem 0.85rem',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              fontWeight: 800,
              color: '#0f172a',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}>
              <span style={{ color: '#f59e0b' }}>★</span> AACSB Accredited Business School
            </div>

            {/* Floating Bottom Metrics Card */}
            <div style={{
              position: 'absolute',
              bottom: '1rem',
              left: '1rem',
              right: '1rem',
              background: 'rgba(15, 23, 42, 0.85)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '1rem',
              padding: '0.85rem 1.25rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              color: '#ffffff',
            }}>
              <div>
                <p style={{ fontSize: '1.25rem', fontWeight: 900, color: '#f59e0b', margin: 0 }}>94%</p>
                <p style={{ fontSize: '0.7rem', color: '#94a3b8', margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Placement Rate</p>
              </div>
              <div style={{ width: '1px', height: '28px', background: 'rgba(255, 255, 255, 0.15)' }} />
              <div>
                <p style={{ fontSize: '1.25rem', fontWeight: 900, color: '#38bdf8', margin: 0 }}>$145k</p>
                <p style={{ fontSize: '0.7rem', color: '#94a3b8', margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Avg Starting Base</p>
              </div>
              <div style={{ width: '1px', height: '28px', background: 'rgba(255, 255, 255, 0.15)' }} />
              <div>
                <p style={{ fontSize: '1.25rem', fontWeight: 900, color: '#4ade80', margin: 0 }}>50+</p>
                <p style={{ fontSize: '0.7rem', color: '#94a3b8', margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Corporate Partners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
