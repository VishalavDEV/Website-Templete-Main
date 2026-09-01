import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { ctaBannerData } from '../data/content';

export default function CtaBanner() {
  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const offsetTop = el.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section className="section" style={{ padding: '4rem 0', background: 'transparent' }}>
      <div className="container">
        
        <div 
          className="glass-card"
          style={{
            padding: 'clamp(2.5rem, 5vw, 4.5rem) clamp(1.25rem, 3.5vw, 2.5rem)',
            background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.04) 0%, rgba(124, 58, 237, 0.08) 100%), #ffffff',
            border: '1.5px solid rgba(0, 102, 255, 0.25)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0, 102, 255, 0.12)'
          }}
        >
          {/* Decorative Glowing Backdrop Orbs */}
          <div 
            style={{
              position: 'absolute',
              top: '-50%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '600px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(0, 102, 255, 0.15) 0%, transparent 70%)',
              pointerEvents: 'none',
              filter: 'blur(50px)'
            }}
          />

          <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px', margin: '0 auto' }}>
            
            <div className="section-tag" style={{ marginBottom: '1.25rem' }}>
              {ctaBannerData.tag}
            </div>

            <h2 
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw + 1rem, 3.25rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                marginBottom: '1.25rem',
                lineHeight: 1.15
              }}
            >
              Ready to <span className="text-gradient">Benchmark Your Digital Footprint?</span>
            </h2>

            <p 
              style={{
                fontSize: 'clamp(0.95rem, 2vw, 1.125rem)',
                color: 'var(--text-muted)',
                marginBottom: '2.5rem',
                lineHeight: 1.6
              }}
            >
              {ctaBannerData.subheading}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
              <button 
                onClick={handleScrollToContact}
                className="btn btn-primary"
                style={{ padding: '1rem 2.25rem', fontSize: '1rem' }}
              >
                {ctaBannerData.primaryBtn} <ArrowRight size={18} />
              </button>

              <a 
                href="#contact"
                onClick={handleScrollToContact}
                className="btn btn-secondary"
                style={{ padding: '1rem 2.25rem', fontSize: '1rem' }}
              >
                <Download size={18} /> {ctaBannerData.secondaryBtn}
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
