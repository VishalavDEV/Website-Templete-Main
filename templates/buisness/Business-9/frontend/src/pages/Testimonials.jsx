import { useState, useEffect } from 'react';
import { fetchTestimonials } from '../services/api';
import TestimonialSlider from '../components/TestimonialSlider';
import PageTransition from '../animations/PageTransition';
import { MessageSquare, Quote } from 'lucide-react';

export default function Testimonials() {
  const [testimonialsList, setTestimonialsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        const data = await fetchTestimonials();
        setTestimonialsList(data);
      } catch (err) {
        console.error("Failed to load testimonials data", err);
      } finally {
        setLoading(false);
      }
    };
    loadTestimonials();
  }, []);

  const clientLogos = [
    'Nova Space Corp.',
    'Apex Global Ltd.',
    'Stratos Inc.',
    'Alpha Logistics',
    'Beta Merchandisers',
    'Quantum Tech'
  ];

  return (
    <PageTransition>
      <div style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
        <div className="container">
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="badge"><MessageSquare size={14} /> Reviews</span>
            <h1 style={{ fontSize: '3rem', fontWeight: 800, fontFamily: 'var(--font-title)', marginBottom: '1rem' }}>
              What Our Clients <span className="text-gradient">Say About Us</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', maxDWidth: '600px', margin: '0 auto', fontSize: '1.05rem' }}>
              Read the direct impact metrics and software delivery feedback shared by startup founders and enterprise partners.
            </p>
          </div>

          {/* Loading Indicator */}
          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem 0' }}>
              <div className="spinner" style={{
                width: '40px',
                height: '40px',
                border: '4px solid var(--secondary)',
                borderTopColor: 'var(--primary)',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
              }} />
            </div>
          ) : (
            <div>
              {/* Testimonial slider */}
              <TestimonialSlider testimonials={testimonialsList} />
              
              {/* Trust Section */}
              <div style={{
                marginTop: '6rem',
                textAlign: 'center'
              }}>
                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  color: 'var(--text-muted)',
                  marginBottom: '2.5rem'
                }}>
                  Trusted by Forward-Thinking Brands
                </h3>
                
                {/* Brand Logos mock grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(6, 1fr)',
                  gap: '2.5rem 1.5rem',
                  alignItems: 'center'
                }} className="logos-grid">
                  {clientLogos.map((logo, i) => (
                    <div
                      key={i}
                      style={{
                        background: 'var(--glass-bg)',
                        border: '1px solid var(--glass-border)',
                        padding: '1.25rem 0.5rem',
                        borderRadius: 'var(--border-radius-sm)',
                        fontFamily: 'var(--font-title)',
                        fontWeight: 800,
                        color: 'var(--text-muted)',
                        fontSize: '0.95rem',
                        boxShadow: 'var(--glass-shadow)',
                        opacity: 0.7,
                        cursor: 'default',
                        transition: 'var(--transition-fast)'
                      }}
                      className="brand-logo-card"
                    >
                      {logo}
                    </div>
                  ))}
                </div>

              </div>
            </div>
          )}

        </div>
      </div>
      
      <style>{`
        .spinner {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .brand-logo-card:hover {
          color: var(--primary) !important;
          opacity: 1 !important;
          border-color: var(--primary) !important;
          transform: translateY(-2px);
        }
        @media (max-width: 900px) {
          .logos-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 500px) {
          .logos-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem 1rem !important;
          }
        }
      `}</style>
    </PageTransition>
  );
}
