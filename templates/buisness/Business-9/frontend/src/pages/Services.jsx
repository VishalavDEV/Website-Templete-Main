import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, ArrowRight, X, Sparkles, AlertCircle } from 'lucide-react';
import { fetchServices } from '../services/api';
import ServiceCard from '../components/ServiceCard';
import PageTransition from '../animations/PageTransition';
import { useNavigate } from 'react-router-dom';

export default function Services() {
  const [servicesList, setServicesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadServices = async () => {
      try {
        const data = await fetchServices();
        setServicesList(data);
      } catch (err) {
        console.error("Failed to load services data", err);
      } finally {
        setLoading(false);
      }
    };
    loadServices();
  }, []);

  const handleInquire = (serviceTitle) => {
    setSelectedService(null);
    navigate('/contact', { state: { serviceName: serviceTitle } });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <PageTransition>
      <div style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
        <div className="container">
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="badge"><Briefcase size={14} /> Our Services</span>
            <h1 style={{ fontSize: '3rem', fontWeight: 800, fontFamily: 'var(--font-title)', marginBottom: '1rem' }}>
              Solutions Crafted For <span className="text-gradient">Modern Brands</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', maxDWidth: '600px', margin: '0 auto', fontSize: '1.05rem' }}>
              From initial market entry advising to custom server deployment, we handle your growth cycle end-to-end.
            </p>
          </div>

          {/* Loading state */}
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
            <div className="grid-3">
              {servicesList.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  index={index}
                  onLearnMore={(srv) => setSelectedService(srv)}
                />
              ))}
            </div>
          )}

        </div>

        {/* Detailed Modal Overlay */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(26, 22, 19, 0.6)',
                backdropFilter: 'blur(8px)',
                zIndex: 9999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.5rem'
              }}
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 30, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 30, opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: '#FFF',
                  maxWidth: '620px',
                  width: '100%',
                  borderRadius: 'var(--border-radius-lg)',
                  border: '1px solid rgba(249,115,22,0.2)',
                  padding: '2.5rem',
                  position: 'relative',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.15)'
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  style={{
                    position: 'absolute',
                    top: '1.25rem',
                    right: '1.25rem',
                    background: 'var(--secondary)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'var(--primary)'
                  }}
                >
                  <X size={18} />
                </button>

                {/* Modal Info */}
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: 'var(--primary)',
                  letterSpacing: '1px',
                  background: 'rgba(249,115,22,0.08)',
                  padding: '0.25rem 0.6rem',
                  borderRadius: '4px',
                  display: 'inline-block',
                  marginBottom: '1rem'
                }}>
                  {selectedService.category}
                </span>

                <h2 style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-title)',
                  marginBottom: '1rem'
                }}>
                  {selectedService.title}
                </h2>

                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  marginBottom: '1.5rem'
                }}>
                  {selectedService.longDescription}
                </p>

                {/* Benefits checklist */}
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>Core Deliverables:</h3>
                <ul style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.6rem',
                  marginBottom: '2rem',
                  paddingLeft: 0
                }}>
                  {selectedService.benefits && selectedService.benefits.map((benefit, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      <Sparkles size={14} color="var(--primary)" style={{ flexShrink: 0 }} />
                      {benefit}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button 
                    className="btn btn-primary"
                    onClick={() => handleInquire(selectedService.title)}
                    style={{ flexGrow: 1 }}
                  >
                    Inquire About This Service <ArrowRight size={16} />
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => setSelectedService(null)}
                  >
                    Close
                  </button>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      <style>{`
        .spinner {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </PageTransition>
  );
}
