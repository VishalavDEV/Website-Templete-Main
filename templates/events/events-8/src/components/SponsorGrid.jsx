import React, { useState } from 'react';
import { Building2, Sparkles, CheckCircle, X, Send, Briefcase, Eye, Rocket, Users } from 'lucide-react';

const SponsorModal = ({ onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
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
        zIndex: 10002,
        padding: '1rem',
        backdropFilter: 'blur(10px)'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '600px',
          backgroundColor: '#0a0e0a',
          border: '1px solid #00ff66',
          borderRadius: '12px',
          padding: '2.5rem',
          position: 'relative',
          boxShadow: '0 0 50px rgba(0, 255, 102, 0.3)'
        }}
      >
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
        >
          <X size={24} />
        </button>

        <h3 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '0.5rem' }}>BECOME A SPONSOR</h3>
        <p style={{ color: '#94a3b8', fontSize: '0.85rem', fontFamily: 'var(--font-mono)', marginBottom: '1.5rem' }}>
          Partner with NEXORA AFTERDARK to engage 500+ top student developers.
        </p>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <CheckCircle size={48} color="#00ff66" style={{ margin: '0 auto 1rem auto' }} />
            <h4 style={{ color: '#fff', fontSize: '1.2rem' }}>PARTNERSHIP DECK SENT</h4>
            <p style={{ color: '#94a3b8', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
              Our sponsorship team will contact you within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', marginBottom: '0.35rem' }}>
                  Company Name:
                </label>
                <input type="text" placeholder="e.g. CyberTech Corp" className="cyber-input" required />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', marginBottom: '0.35rem' }}>
                  Contact Person:
                </label>
                <input type="text" placeholder="e.g. Sarah Jenkins" className="cyber-input" required />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', marginBottom: '0.35rem' }}>
                  Work Email:
                </label>
                <input type="email" placeholder="sarah@cybertech.io" className="cyber-input" required />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', marginBottom: '0.35rem' }}>
                  Sponsorship Tier:
                </label>
                <select className="cyber-input">
                  <option value="Title">Title Sponsor (₹5L)</option>
                  <option value="Platinum">Platinum (₹2.5L)</option>
                  <option value="Gold">Gold (₹1L)</option>
                  <option value="Silver">Silver (₹50K)</option>
                </select>
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', marginBottom: '0.35rem' }}>
                Message / Goals:
              </label>
              <textarea rows={3} placeholder="Tell us your recruitment or tech API goals..." className="cyber-input" />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              <Send size={16} /> REQUEST SPONSORSHIP DECK
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

const SponsorGrid = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const sponsorTiers = [
    {
      tier: 'TITLE SPONSOR',
      sponsors: [{ name: 'NEXORA SYSTEMS', logoText: 'NEXORA LABS', desc: 'Leading Autonomous AI Infrastructure' }]
    },
    {
      tier: 'PLATINUM SPONSORS',
      sponsors: [
        { name: 'CYBERGRID CLOUD', logoText: 'CYBERGRID', desc: 'High Performance GPU Cloud' },
        { name: 'SYNTHETIC AI', logoText: 'SYNTHETIC.AI', desc: 'LLM Fine-Tuning Suite' }
      ]
    },
    {
      tier: 'GOLD SPONSORS',
      sponsors: [
        { name: 'DEVFLOW', logoText: 'DEVFLOW', desc: 'DevOps & Pipeline Automation' },
        { name: 'SECURENET', logoText: 'SECURENET', desc: 'Zero-Trust Cyber Protection' },
        { name: 'DATASTREAM', logoText: 'DATASTREAM', desc: 'Real-time Vector DB' }
      ]
    },
    {
      tier: 'SILVER & COMMUNITY PARTNERS',
      sponsors: [
        { name: 'GITHUB STUDENT', logoText: 'OCTOCAT COMMUNITY' },
        { name: 'DEVPOST', logoText: 'DEVPOST HUB' },
        { name: 'OPEN SOURCE INDIA', logoText: 'OSI COMMUNITY' },
        { name: 'STUDENT CODE CLUB', logoText: 'SCC NETWORKS' }
      ]
    }
  ];

  const sponsorBenefits = [
    { title: 'Brand Visibility', desc: 'Prominent logo placement across website, banners, livestream, and swag bags.', icon: Eye },
    { title: 'Hiring Opportunities', desc: 'Direct resume access to 500+ top student developers, hackers, and engineers.', icon: Briefcase },
    { title: 'Developer Engagement', desc: 'Host dedicated challenge tracks with your APIs and developer tools.', icon: Users },
    { title: 'Workshop Opportunities', desc: 'Run keynote workshops and technical demos during the 24-hour hackathon.', icon: Rocket }
  ];

  return (
    <div>
      {/* Tiers Grid */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem', marginBottom: '5rem' }}>
        {sponsorTiers.map((tierGroup, tIdx) => (
          <div key={tIdx} style={{ textAlign: 'center' }}>
            <div className="badge-tag" style={{ marginBottom: '1.5rem', fontSize: '0.85rem', letterSpacing: '2px' }}>
              ● {tierGroup.tier}
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(auto-fit, minmax(${tIdx === 0 ? '300px' : '220px'}, 1fr))`,
                gap: '1.5rem',
                justifyContent: 'center'
              }}
            >
              {tierGroup.sponsors.map((sp, sIdx) => (
                <div
                  key={sIdx}
                  className="cyber-card"
                  style={{
                    padding: tIdx === 0 ? '2.5rem 1.5rem' : '1.5rem 1rem',
                    textAlign: 'center',
                    backgroundColor: 'rgba(10, 16, 12, 0.85)',
                    border: tIdx === 0 ? '1px solid #00ff66' : '1px solid rgba(0, 255, 102, 0.2)',
                    boxShadow: tIdx === 0 ? '0 0 25px rgba(0, 255, 102, 0.2)' : 'none'
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: tIdx === 0 ? '1.8rem' : '1.3rem',
                      fontWeight: '800',
                      color: '#ffffff',
                      letterSpacing: '1px',
                      marginBottom: '0.35rem'
                    }}
                  >
                    {sp.logoText}
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#00ff66' }}>{sp.name}</div>
                  {sp.desc && <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.5rem' }}>{sp.desc}</div>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Sponsor Benefits Section */}
      <h3 style={{ textAlign: 'center', fontSize: '1.8rem', color: '#fff', marginBottom: '2.5rem' }}>
        WHY SPONSOR NEXORA AFTERDARK?
      </h3>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
        {sponsorBenefits.map((ben, idx) => {
          const IconComp = ben.icon;
          return (
            <div key={idx} className="cyber-card" style={{ padding: '1.5rem', backgroundColor: 'rgba(10, 16, 12, 0.8)' }}>
              <div
                style={{
                  width: '45px',
                  height: '45px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(0, 255, 102, 0.1)',
                  border: '1px solid #00ff66',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#00ff66',
                  marginBottom: '1rem'
                }}
              >
                <IconComp size={22} />
              </div>
              <h4 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '0.5rem' }}>{ben.title}</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: '1.6' }}>{ben.desc}</p>
            </div>
          );
        })}
      </div>

      {/* CTA Button */}
      <div style={{ textAlign: 'center' }}>
        <button onClick={() => setModalOpen(true)} className="btn btn-primary interactive pulse-glow" style={{ padding: '1rem 2.5rem' }}>
          <Building2 size={20} /> BECOME A SPONSOR
        </button>
      </div>

      {modalOpen && <SponsorModal onClose={() => setModalOpen(false)} />}
    </div>
  );
};

export default SponsorGrid;
