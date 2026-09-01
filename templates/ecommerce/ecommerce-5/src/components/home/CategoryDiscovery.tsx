import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

export const CategoryDiscovery: React.FC = () => {
  const categories = [
    {
      id: 'women',
      label: '01 / FEMININE SILHOUETTES',
      title: 'WOMEN',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop',
      link: '/women',
    },
    {
      id: 'men',
      label: '02 / TAILORED REFINEMENT',
      title: 'MEN',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop',
      link: '/men',
    },
    {
      id: 'accessories',
      label: '03 / CURATED ESSENTIALS',
      title: 'ACCESSORIES',
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1000&auto=format&fit=crop',
      link: '/accessories',
    },
  ];

  return (
    <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container-custom">
        <ScrollReveal variant="fade-up">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: '40px',
              borderBottom: '1px solid var(--border-light)',
              paddingBottom: '20px',
            }}
          >
            <div>
              <span
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.18em',
                  fontWeight: '600',
                  color: 'var(--accent-bronze)',
                  textTransform: 'uppercase',
                }}
              >
                DISCOVERY
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(28px, 4vw, 44px)',
                  textTransform: 'uppercase',
                  marginTop: '4px',
                }}
              >
                SHOP THE COLLECTION
              </h2>
            </div>

            <Link
              to="/shop"
              data-cursor="→"
              style={{
                fontSize: '12px',
                letterSpacing: '0.1em',
                fontWeight: '500',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: 'var(--text-primary)',
              }}
            >
              VIEW ALL PIECES <ArrowRight size={14} className="btn-arrow" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Three Horizontal Panels */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {categories.map((cat, idx) => (
            <ScrollReveal key={cat.id} variant="fade-up" delay={idx * 0.12}>
              <Link
                to={cat.link}
                data-cursor="EXPLORE"
                style={{
                  position: 'relative',
                  height: '36vh',
                  minHeight: '280px',
                  maxHeight: '420px',
                  overflow: 'hidden',
                  borderRadius: '2px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '32px',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                }}
                className="category-panel"
              >
                {/* Background Image */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${cat.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                    zIndex: 1,
                  }}
                  className="panel-bg"
                />

                {/* Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(23, 22, 20, 0.75) 0%, rgba(23, 22, 20, 0.15) 60%)',
                    zIndex: 2,
                    transition: 'opacity 0.4s ease',
                  }}
                  className="panel-overlay"
                />

                {/* Content */}
                <div style={{ position: 'relative', zIndex: 3 }}>
                  <span
                    style={{
                      fontSize: '10px',
                      letterSpacing: '0.18em',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      opacity: 0.9,
                      display: 'block',
                      marginBottom: '6px',
                      transform: 'translateY(5px)',
                      transition: 'transform 0.4s ease',
                    }}
                    className="panel-label"
                  >
                    {cat.label}
                  </span>

                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(28px, 3vw, 40px)',
                      fontWeight: '400',
                      letterSpacing: '0.04em',
                      marginBottom: '16px',
                      textTransform: 'uppercase',
                      color: '#FFFFFF',
                    }}
                  >
                    {cat.title}
                  </h3>

                  <div
                    style={{
                      fontSize: '11px',
                      letterSpacing: '0.14em',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      borderBottom: '1px solid rgba(255,255,255,0.6)',
                      paddingBottom: '4px',
                      transition: 'gap 0.3s ease',
                    }}
                    className="explore-link"
                  >
                    EXPLORE <ArrowRight size={14} className="panel-arrow" style={{ transition: 'transform 0.3s ease' }} />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        .category-panel:hover .panel-bg {
          transform: scale(1.04) !important;
        }
        .category-panel:hover .panel-label {
          transform: translateY(0) !important;
        }
        .category-panel:hover .panel-arrow {
          transform: translateX(6px) !important;
        }
        .category-panel:hover .explore-link {
          gap: 12px !important;
          border-bottom-color: #FFFFFF !important;
        }
      `}</style>
    </section>
  );
};
