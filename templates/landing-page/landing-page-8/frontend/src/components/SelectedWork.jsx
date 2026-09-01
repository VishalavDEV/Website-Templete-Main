import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function SelectedWork() {
  const projects = [
    {
      id: 'aura',
      number: '01',
      title: 'AURA',
      category: 'Luxury skincare rebrand',
      tags: ['Brand Strategy', 'Digital'],
      image: '/aura.jpg',
      layout: 'wide'
    },
    {
      id: 'nova',
      number: '02',
      title: 'NOVA',
      category: 'Next-generation mobility platform',
      tags: ['Brand Identity', 'Product Design'],
      image: '/nova.jpg',
      layout: 'vertical-right'
    },
    {
      id: 'solace',
      number: '03',
      title: 'SOLACE',
      category: 'Modern wellness experience',
      tags: ['Strategy', 'Web Design'],
      image: '/solace.jpg',
      layout: 'vertical-left'
    }
  ];

  // Mobile viewport automatic reveal observer
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50px 0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      const projectCards = sectionRef.current.querySelectorAll('.portfolio-card');
      projectCards.forEach((card) => observer.observe(card));
    }

    return () => {
      if (sectionRef.current) {
        const projectCards = sectionRef.current.querySelectorAll('.portfolio-card');
        projectCards.forEach((card) => observer.unobserve(card));
      }
    };
  }, []);

  return (
    <section 
      id="work" 
      ref={sectionRef}
      className="section-padding"
      style={{
        borderTop: '1px solid var(--border-color)',
        position: 'relative',
        zIndex: 1
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: '6rem',
            borderBottom: '1px solid var(--border-color)',
            paddingBottom: '2rem'
          }}
        >
          <div>
            <span className="text-meta">Selected Work</span>
            <h2 className="text-editorial-h2" style={{ marginTop: '0.5rem' }}>Selected work<span style={{ color: 'var(--accent-color)' }}>.</span></h2>
          </div>
          <span 
            style={{ 
              fontFamily: 'var(--font-body)', 
              color: 'var(--text-secondary)',
              fontSize: '0.95rem'
            }}
          >
            Portfolio — 2026
          </span>
        </div>

        {/* Projects Grid / Layout list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10rem' }}>
          
          {/* Project 1: AURA (Wide Editorial Layout) */}
          <div 
            className="portfolio-card wide-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              textAlign: 'left'
            }}
          >
            <div 
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                flexWrap: 'wrap',
                gap: '1rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                <span 
                  style={{ 
                    fontFamily: 'var(--font-headings)', 
                    fontSize: '1.5rem', 
                    fontWeight: 800, 
                    color: 'var(--accent-color)', 
                    marginTop: '0.2rem' 
                  }}
                >
                  01
                </span>
                
                {/* Masked reveal container for title */}
                <div style={{ overflow: 'hidden' }}>
                  <h3 
                    className="portfolio-title text-editorial-h2" 
                    style={{ fontFamily: 'var(--font-headings)', transform: 'translateY(105%)', transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}
                  >
                    {projects[0].title}
                  </h3>
                  <p 
                    className="portfolio-meta"
                    style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginTop: '0.25rem', transform: 'translateY(105%)', transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s' }}
                  >
                    {projects[0].category}
                  </p>
                </div>
              </div>

              {/* Tags fade reveal */}
              <div 
                className="portfolio-tags"
                style={{ display: 'flex', gap: '0.5rem', opacity: 0, transform: 'translateY(15px)', transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s' }}
              >
                {projects[0].tags.map(t => (
                  <span key={t} style={{ fontSize: '0.75rem', fontWeight: 600, padding: '0.4rem 0.8rem', border: '1px solid var(--border-color)', borderRadius: '20px' }}>{t}</span>
                ))}
              </div>
            </div>

            {/* Image Container with crop boundaries */}
            <a 
              href="#featured-case-study"
              data-cursor="project"
              className="portfolio-image-wrap"
              style={{
                display: 'block',
                width: '100%',
                aspectRatio: '21 / 9',
                maxHeight: '520px',
                border: '1px solid var(--border-color)',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              {/* Inner scale visual element */}
              <div className="portfolio-image-inner" style={{ width: '100%', height: '100%', transform: 'scale(1.08) translate(0px, 0px)', transition: 'transform 1.4s cubic-bezier(0.16, 1, 0.3, 1)' }}>
                <img src={projects[0].image} alt="AURA project" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              
              {/* Overlay hover indicator */}
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(255, 90, 31, 0.04)',
                  opacity: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'var(--transition-fast)',
                }}
                className="hover-overlay"
              >
                <div 
                  style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--text-primary)',
                    color: '#FFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                  }}
                >
                  <ArrowUpRight size={24} />
                </div>
              </div>
            </a>
          </div>

          {/* Staggered Row for Projects 2 and 3 */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '6rem',
              alignItems: 'start'
            }}
            className="staggered-projects-grid"
          >
            
            {/* Project 2: NOVA (Vertical layout) */}
            <div 
              className="portfolio-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                textAlign: 'left',
                marginTop: '4rem'
              }}
            >
              <a 
                href="#work"
                data-cursor="project"
                className="portfolio-image-wrap"
                style={{
                  display: 'block',
                  width: '100%',
                  aspectRatio: '4 / 5',
                  border: '1px solid var(--border-color)',
                  overflow: 'hidden',
                  position: 'relative'
                }}
              >
                <div className="portfolio-image-inner" style={{ width: '100%', height: '100%', transform: 'scale(1.08)', transition: 'transform 1.4s cubic-bezier(0.16, 1, 0.3, 1)' }}>
                  <img src={projects[1].image} alt="NOVA project" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="hover-overlay" style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(255, 90, 31, 0.04)', opacity: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'var(--transition-fast)' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--text-primary)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </a>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <span style={{ fontFamily: 'var(--font-headings)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent-color)' }}>02</span>
                  
                  {/* Masked reveal container */}
                  <div style={{ overflow: 'hidden' }}>
                    <h3 
                      className="portfolio-title text-editorial-h3" 
                      style={{ fontSize: '1.75rem', fontWeight: 800, transform: 'translateY(105%)', transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}
                    >
                      {projects[1].title}
                    </h3>
                    
                    <p 
                      className="portfolio-meta"
                      style={{ fontSize: '0.95rem', color: 'var(--text-primary)', marginTop: '0.2rem', transform: 'translateY(105%)', transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s' }}
                    >
                      {projects[1].category}
                    </p>
                  </div>
                </div>
                
                {/* Tags reveal */}
                <div 
                  className="portfolio-tags"
                  style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', justifyContent: 'flex-end', maxWidth: '50%', opacity: 0, transform: 'translateY(15px)', transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s' }}
                >
                  {projects[1].tags.map(t => (
                    <span key={t} style={{ fontSize: '0.7rem', fontWeight: 600, padding: '0.3rem 0.6rem', border: '1px solid var(--border-color)', borderRadius: '20px', whiteSpace: 'nowrap' }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project 3: SOLACE (Vertical layout) */}
            <div 
              className="portfolio-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                textAlign: 'left'
              }}
            >
              <a 
                href="#work"
                data-cursor="project"
                className="portfolio-image-wrap"
                style={{
                  display: 'block',
                  width: '100%',
                  aspectRatio: '4 / 5',
                  border: '1px solid var(--border-color)',
                  overflow: 'hidden',
                  position: 'relative'
                }}
              >
                <div className="portfolio-image-inner" style={{ width: '100%', height: '100%', transform: 'scale(1.08)', transition: 'transform 1.4s cubic-bezier(0.16, 1, 0.3, 1)' }}>
                  <img src={projects[2].image} alt="SOLACE project" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="hover-overlay" style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(255, 90, 31, 0.04)', opacity: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'var(--transition-fast)' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--text-primary)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </a>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <span style={{ fontFamily: 'var(--font-headings)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent-color)' }}>03</span>
                  
                  {/* Masked reveal container */}
                  <div style={{ overflow: 'hidden' }}>
                    <h3 
                      className="portfolio-title text-editorial-h3" 
                      style={{ fontSize: '1.75rem', fontWeight: 800, transform: 'translateY(105%)', transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}
                    >
                      {projects[2].title}
                    </h3>
                    
                    <p 
                      className="portfolio-meta"
                      style={{ fontSize: '0.95rem', color: 'var(--text-primary)', marginTop: '0.2rem', transform: 'translateY(105%)', transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s' }}
                    >
                      {projects[2].category}
                    </p>
                  </div>
                </div>
                
                {/* Tags reveal */}
                <div 
                  className="portfolio-tags"
                  style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', justifyContent: 'flex-end', maxWidth: '50%', opacity: 0, transform: 'translateY(15px)', transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s' }}
                >
                  {projects[2].tags.map(t => (
                    <span key={t} style={{ fontSize: '0.7rem', fontWeight: 600, padding: '0.3rem 0.6rem', border: '1px solid var(--border-color)', borderRadius: '20px', whiteSpace: 'nowrap' }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Styled reveal states & zoom operations */}
      <style>{`
        /* Hover zoom / offset effects (desktop only) */
        @media (min-width: 1025px) {
          .portfolio-card:hover .portfolio-image-inner {
            transform: scale(1.01) translate3d(0px, 4px, 0) !important;
          }
          .portfolio-card:hover .hover-overlay {
            opacity: 1 !important;
          }
          .portfolio-card:hover .portfolio-title,
          .portfolio-card:hover .portfolio-meta {
            transform: translateY(0) !important;
          }
          .portfolio-card:hover .portfolio-tags {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
        }

        /* Scroll triggers for in-view (mobile/tablet & fallback) */
        .portfolio-card.reveal-active .portfolio-title,
        .portfolio-card.reveal-active .portfolio-meta {
          transform: translateY(0) !important;
        }
        .portfolio-card.reveal-active .portfolio-tags {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .portfolio-card.reveal-active .portfolio-image-inner {
          /* Apply slight default alignment shift once in viewport */
          transform: scale(1.05) !important;
        }

        @media (max-width: 768px) {
          .staggered-projects-grid {
            grid-template-columns: 1fr !important;
            gap: 6rem !important;
          }
          .staggered-projects-grid > div {
            margin-top: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
