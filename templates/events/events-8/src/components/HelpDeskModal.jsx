import React, { useState } from 'react';
import { HelpCircle, X, MessageSquare, CheckCircle, LifeBuoy, Send } from 'lucide-react';

const HelpDeskModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Registration Help');
  const [userQuery, setUserQuery] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    { title: 'Registration Help', desc: 'Queries regarding team size, confirmation emails, or solo registration.' },
    { title: 'Team Formation', desc: 'Need help finding a team or matching skills? Use the Teammate Finder.' },
    { title: 'Technical Problem', desc: 'Issues with Discord server access, GitHub submissions, or API keys.' },
    { title: 'Venue Help', desc: 'Parking, overnight resting zones, food passes, and Wi-Fi access.' },
    { title: 'Schedule Help', desc: 'Timings for problem statement release, mentoring rounds, and judging.' },
    { title: 'General Question', desc: 'Any other question regarding rules, certificates, or prizes.' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userQuery.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setUserQuery('');
      setIsOpen(false);
    }, 2500);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open Help Desk"
        style={{
          position: 'fixed',
          bottom: '5.5rem',
          right: '2rem',
          backgroundColor: '#00ff66',
          color: '#000000',
          border: 'none',
          padding: '0.75rem 1.2rem',
          borderRadius: '30px',
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          fontFamily: 'var(--font-heading)',
          fontSize: '0.85rem',
          fontWeight: '700',
          cursor: 'pointer',
          boxShadow: '0 0 20px rgba(0, 255, 102, 0.5)',
          zIndex: 998
        }}
        className="interactive"
      >
        <LifeBuoy size={18} />
        <span>HELP DESK</span>
      </button>

      {/* Modal Popup */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10001,
            padding: '1rem',
            backdropFilter: 'blur(8px)'
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '650px',
              backgroundColor: '#0a0e0a',
              border: '1px solid #00ff66',
              borderRadius: '12px',
              padding: '2rem',
              position: 'relative',
              boxShadow: '0 0 40px rgba(0, 255, 102, 0.3)'
            }}
          >
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: 'none',
                border: 'none',
                color: '#94a3b8',
                cursor: 'pointer'
              }}
            >
              <X size={24} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <HelpCircle size={28} color="#00ff66" />
              <div>
                <h3 style={{ fontSize: '1.4rem', color: '#fff' }}>HACKER HELP DESK</h3>
                <p style={{ color: '#94a3b8', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
                  Instant Support 24/7 during NEXORA AFTERDARK
                </p>
              </div>
            </div>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <CheckCircle size={54} color="#00ff66" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ color: '#ffffff', fontSize: '1.3rem', marginBottom: '0.5rem' }}>TICKET DISPATCHED</h4>
                <p style={{ color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                  Our tech support desk has received your ticket. Expect a reply within 5 minutes.
                </p>
              </div>
            ) : (
              <>
                <p style={{ fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '1rem' }}>
                  Select support topic:
                </p>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                    gap: '0.6rem',
                    marginBottom: '1.5rem'
                  }}
                >
                  {categories.map((cat, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveCategory(cat.title)}
                      style={{
                        padding: '0.6rem 0.8rem',
                        borderRadius: '6px',
                        backgroundColor: activeCategory === cat.title ? 'rgba(0, 255, 102, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                        border: `1px solid ${activeCategory === cat.title ? '#00ff66' : 'rgba(255, 255, 255, 0.1)'}`,
                        color: activeCategory === cat.title ? '#00ff66' : '#94a3b8',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8rem',
                        textAlign: 'left',
                        cursor: 'pointer'
                      }}
                    >
                      {cat.title}
                    </button>
                  ))}
                </div>

                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem' }}>
                      Describe your problem or question:
                    </label>
                    <textarea
                      rows={4}
                      value={userQuery}
                      onChange={(e) => setUserQuery(e.target.value)}
                      placeholder="e.g. Need assistance setting up GPU instances for model training..."
                      className="cyber-input"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    <Send size={16} /> SUBMIT TICKET
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default HelpDeskModal;
