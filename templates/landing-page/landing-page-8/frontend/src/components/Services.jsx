import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function Services() {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const services = [
    {
      num: '01',
      title: 'Brand Strategy',
      description: 'Positioning, research, and creative direction.',
      details: 'We dive deep into your market, analyze competitors, and extract the core essence of your business. The result is a rigorous roadmap that defines your voice, positioning, and path forward in a crowded marketplace.'
    },
    {
      num: '02',
      title: 'Brand Identity',
      description: 'Visual systems designed to be recognizable and memorable.',
      details: 'We construct living, breathing visual systems including wordmarks, custom logo typography, brand color systems, and comprehensive design guides designed to adapt to any physical or digital touchpoint.'
    },
    {
      num: '03',
      title: 'Digital Experiences',
      description: 'Websites and digital products built around people.',
      details: 'We craft high-performance digital environments that align your message with user expectations. We combine design intuition with practical usability testing to build experiences that feel completely natural.'
    },
    {
      num: '04',
      title: 'Product Design',
      description: 'Interfaces that balance simplicity, function, and personality.',
      details: 'Our product design method focuses on stripping away friction while retaining brand character. We construct design systems, user flows, and wireframes that turn utilities into products users love.'
    },
    {
      num: '05',
      title: 'Development',
      description: 'High-performance digital experiences brought to life.',
      details: 'Using modern tech stacks (React, Vite, NextJS, CSS animations, optimized web workers), we translate high-fidelity static prototypes into pixel-perfect, secure, SEO-optimized interactive platforms.'
    },
    {
      num: '06',
      title: 'Creative Direction',
      description: 'A clear creative vision across every touchpoint.',
      details: 'We maintain visual and narrative consistency across all channels, directing marketing assets, campaign graphics, content creation, and product launches to ensure the brand message remains clear.'
    }
  ];

  return (
    <section 
      id="services" 
      className="section-padding"
      style={{
        backgroundColor: '#F1EFEA', // Slightly darker warm tint to separate sections
        borderTop: '1px solid var(--border-color)',
        borderBottom: '1px solid var(--border-color)',
        position: 'relative',
        zIndex: 1
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '4rem',
            marginBottom: '6rem',
            textAlign: 'left',
            alignItems: 'end'
          }}
          className="services-header"
        >
          <div>
            <span className="text-meta">Our Expertise</span>
            <h2 className="text-editorial-h2" style={{ marginTop: '0.5rem' }}>
              Built for ideas that need to move<span style={{ color: 'var(--accent-color)' }}>.</span>
            </h2>
          </div>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxContent: '400px' }}>
            We work at the intersection of brand strategy, premium web design, and high-fidelity front-end engineering.
          </p>
        </div>

        {/* Editorial Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          {services.map((service, index) => {
            const isActive = activeAccordion === index;
            return (
              <div 
                key={service.num}
                className="reveal-on-scroll services-item-card"
                style={{
                  borderBottom: '1px solid rgba(17, 17, 17, 0.1)',
                  padding: '2.5rem 0',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'var(--transition-fast)'
                }}
                onClick={() => setActiveAccordion(isActive ? -1 : index)}
              >
                <div 
                  className="services-row-top"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '2rem',
                    width: '100%'
                  }}
                >
                  {/* Number & Primary Info */}
                  <div 
                    className="services-row-header"
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: '3rem',
                      flex: 1,
                      minWidth: 0
                    }}
                  >
                    <span 
                      className="services-number"
                      style={{
                        fontFamily: 'var(--font-headings)',
                        fontSize: '1.25rem',
                        fontWeight: 800,
                        color: isActive ? 'var(--accent-color)' : 'var(--text-secondary)',
                        transition: 'var(--transition-fast)',
                        minWidth: '35px',
                        flexShrink: 0
                      }}
                    >
                      {service.num}
                    </span>
                    
                    <div 
                      className="services-title-desc"
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1.5fr 2fr',
                        gap: '2rem',
                        width: '100%',
                        alignItems: 'center',
                        minWidth: 0
                      }}
                    >
                      <h3 
                        className="services-item-title"
                        style={{
                          fontFamily: 'var(--font-headings)',
                          fontWeight: 800,
                          color: 'var(--text-primary)',
                          lineHeight: 1.15
                        }}
                      >
                        {service.title}
                      </h3>
                      
                      <p 
                        className="services-item-desc"
                        style={{
                          color: 'var(--text-secondary)',
                          lineHeight: 1.5
                        }}
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Accordion Icon */}
                  <div 
                    className="services-toggle-icon"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      border: '1px solid var(--border-dark)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: isActive ? 'var(--text-primary)' : 'transparent',
                      color: isActive ? '#FFF' : 'var(--text-primary)',
                      transition: 'var(--transition-fast)',
                      flexShrink: 0
                    }}
                  >
                    {isActive ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </div>

                {/* Expanding Details Panel */}
                <div 
                  style={{
                    maxHeight: isActive ? '300px' : '0',
                    opacity: isActive ? 1 : 0,
                    overflow: 'hidden',
                    transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                    paddingLeft: '5.25rem',
                    maxWidth: '850px'
                  }}
                  className="services-details-container"
                >
                  <p 
                    style={{ 
                      paddingTop: '1.5rem', 
                      fontSize: '1.05rem', 
                      lineHeight: '1.7', 
                      color: 'var(--text-secondary)'
                    }}
                  >
                    {service.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        .services-item-title {
          font-size: clamp(1.45rem, 3.2vw, 2.25rem);
          word-break: break-word;
          overflow-wrap: break-word;
        }

        .services-item-desc {
          font-size: clamp(0.9rem, 1.6vw, 1.05rem);
          word-break: break-word;
          overflow-wrap: break-word;
        }

        @media (max-width: 900px) {
          .services-header {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            margin-bottom: 3.5rem !important;
          }
          .services-title-desc {
            display: flex !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.4rem !important;
          }
          .services-row-header {
            gap: 1.5rem !important;
          }
          .services-details-container {
            padding-left: 3.5rem !important;
          }
        }

        @media (max-width: 600px) {
          .services-item-card {
            padding: 1.75rem 0 !important;
          }
          .services-row-top {
            align-items: flex-start !important;
            gap: 0.75rem !important;
          }
          .services-row-header {
            align-items: flex-start !important;
            gap: 0.75rem !important;
          }
          .services-number {
            font-size: 1rem !important;
            min-width: 26px !important;
            padding-top: 0.15rem;
          }
          .services-toggle-icon {
            width: 32px !important;
            height: 32px !important;
            margin-top: 0.1rem;
          }
          .services-item-title {
            font-size: clamp(1.25rem, 5.8vw, 1.65rem) !important;
            line-height: 1.15 !important;
          }
          .services-item-desc {
            font-size: 0.88rem !important;
            line-height: 1.45 !important;
          }
          .services-details-container {
            padding-left: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
