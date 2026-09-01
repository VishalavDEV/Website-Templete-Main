import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Ticket, Check, Sparkles, Send, Download, X, QrCode } from 'lucide-react';

export default function Register() {
  const [selectedTier, setSelectedTier] = useState('Professional');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organization: '',
    role: 'Engineer / Researcher',
    trackInterest: 'Autonomous Robotics',
    dietary: 'None'
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const tiers = [
    {
      name: 'Student Pass',
      price: '$149',
      badge: 'Academic ID Required',
      description: 'Full access for undergraduate & PhD researchers.',
      features: [
        'Access to all 4 Keynote Tracks',
        'Expo Floor & Live Robotics Demos',
        'VERTEX Hackathon Participation',
        'Digital Certificate of Attendance',
        'Daily Networking Coffee Lunches'
      ],
      popular: false
    },
    {
      name: 'Professional Pass',
      price: '$499',
      badge: 'Best Value',
      description: 'Designed for senior hardware engineers & software leads.',
      features: [
        'Everything in Student Pass',
        'Hands-on Hardware Lab Reservation',
        'Dilution Fridge & Locomotion Rigs Access',
        'Speaker Q&A VIP Lounge Access',
        'Full Session Video On-Demand Archives',
        'Exclusive Summit Gift Box'
      ],
      popular: true
    },
    {
      name: 'VIP & Founder Pass',
      price: '$899',
      badge: 'Executive Level',
      description: 'Tailored for deep-tech founders, VCs & C-suite executives.',
      features: [
        'Everything in Professional Pass',
        'VIP Opening Cocktail Gala Entry',
        'Private VC & Founder Matchmaking Mixer',
        'Reserved Front-Row Auditorium Seating',
        'Direct 1-on-1 Keynote Speaker Breakfast',
        'Complimentary 5-Star Hotel Shuttle'
      ],
      popular: false
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger Confetti Burst
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#00f0ff', '#8a2be2', '#7000ff', '#ffffff']
      });
    }, 1000);
  };

  return (
    <section id="register" className="section-padding">
      <div className="section-header">
        <div className="section-tag">
          <Ticket size={14} /> Reserve Your Place
        </div>
        <h2 className="section-title">
          Registration & <span className="text-gradient">Pass Tiers</span>
        </h2>
        <p className="section-subtitle">
          Select your pass tier to secure seating in San Francisco. Seats for hands-on cryogenic control and bipedal motor tuning labs are strictly limited.
        </p>
      </div>

      {/* Ticket Tier Cards */}
      <div className="grid-3" style={{ marginBottom: '80px', gap: '30px' }}>
        {tiers.map((tier) => {
          const isSelected = selectedTier === tier.name;
          return (
            <div
              key={tier.name}
              className="glass-card"
              onClick={() => setSelectedTier(tier.name)}
              style={{
                padding: '36px',
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                border: tier.popular ? '2px solid var(--accent-cyan)' : isSelected ? '2px solid var(--accent-violet)' : '1px solid var(--glass-border)',
                boxShadow: tier.popular ? '0 0 35px rgba(0, 240, 255, 0.25)' : 'var(--shadow-glass)',
                position: 'relative'
              }}
            >
              {tier.popular && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-14px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--gradient-main)',
                    color: '#000',
                    fontWeight: 800,
                    fontSize: '0.75rem',
                    padding: '4px 16px',
                    borderRadius: '9999px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}
                >
                  Most Popular Pass
                </div>
              )}

              <div>
                <div className="badge badge-cyan" style={{ marginBottom: '16px', alignSelf: 'flex-start' }}>
                  {tier.badge}
                </div>

                <h3 style={{ fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '8px' }}>{tier.name}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                  {tier.description}
                </p>

                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '3rem',
                    fontWeight: 800,
                    color: tier.popular ? 'var(--accent-cyan)' : 'var(--text-primary)',
                    lineHeight: 1,
                    marginBottom: '28px'
                  }}
                >
                  {tier.price} <span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-muted)' }}>/ attendee</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                  {tier.features.map((feat, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                      <Check size={16} color={tier.popular ? '#00f0ff' : '#8a2be2'} style={{ marginTop: '3px', flexShrink: 0 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className={tier.popular ? 'btn-primary' : 'btn-secondary'}
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={(e) => { e.stopPropagation(); setSelectedTier(tier.name); }}
              >
                {isSelected ? 'Selected Tier' : `Select ${tier.name}`}
              </button>
            </div>
          );
        })}
      </div>

      {/* Registration Form Block */}
      <div
        className="glass-card"
        style={{
          maxWidth: '840px',
          margin: '0 auto',
          padding: '44px',
          borderRadius: '28px',
          border: '1px solid rgba(0, 240, 255, 0.3)'
        }}
      >
        <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '8px', textAlign: 'center' }}>
          Complete Summit Registration
        </h3>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '32px', textAlign: 'center' }}>
          Selected Tier: <strong style={{ color: 'var(--accent-cyan)' }}>{selectedTier}</strong>
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              required
              placeholder="Dr. Alexander Wright"
              value={formData.fullName}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '12px',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--glass-border)',
                color: 'var(--text-primary)',
                fontSize: '0.95rem',
                outline: 'none'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>
              Work Email Address *
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="alexander@quantum-lab.io"
              value={formData.email}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '12px',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--glass-border)',
                color: 'var(--text-primary)',
                fontSize: '0.95rem',
                outline: 'none'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>
              Organization / University *
            </label>
            <input
              type="text"
              name="organization"
              required
              placeholder="MIT Robotics & AI Lab"
              value={formData.organization}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '12px',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--glass-border)',
                color: 'var(--text-primary)',
                fontSize: '0.95rem',
                outline: 'none'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>
              Primary Specialization
            </label>
            <select
              name="trackInterest"
              value={formData.trackInterest}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '12px',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--glass-border)',
                color: 'var(--text-primary)',
                fontSize: '0.95rem',
                outline: 'none'
              }}
            >
              <option value="Autonomous Robotics">Autonomous Robotics</option>
              <option value="Quantum Computing">Quantum Computing</option>
              <option value="Edge AI & IoT">Edge AI & IoT</option>
              <option value="Extended Reality (XR)">Extended Reality (XR)</option>
            </select>
          </div>

          <div style={{ gridColumn: '1 / -1' }}>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '16px', fontSize: '1.05rem', marginTop: '10px' }}
            >
              {isSubmitting ? 'Generating Digital Badge...' : `Confirm Registration for ${selectedTier}`} <Send size={18} />
            </button>
          </div>
        </form>
      </div>

      {/* Confirmation Digital Pass Modal Popup */}
      {submitted && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(8, 11, 18, 0.92)',
            backdropFilter: 'blur(20px)',
            zIndex: 3500,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          <div
            className="glass-card"
            style={{
              maxWidth: '520px',
              width: '100%',
              padding: '36px',
              borderRadius: '24px',
              textAlign: 'center',
              border: '2px solid var(--accent-cyan)',
              boxShadow: '0 0 50px rgba(0, 240, 255, 0.4)',
              position: 'relative'
            }}
          >
            <button
              onClick={() => setSubmitted(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff'
              }}
            >
              <X size={20} />
            </button>

            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'rgba(0, 240, 255, 0.2)',
                border: '2px solid var(--accent-cyan)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto'
              }}
            >
              <Sparkles size={30} color="#00f0ff" />
            </div>

            <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '4px' }}>Registration Confirmed!</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '24px' }}>
              Your official digital summit pass has been generated. Confirmation sent to <strong>{formData.email || 'your email'}</strong>.
            </p>

            {/* Simulated Digital Ticket Badge */}
            <div
              style={{
                padding: '20px',
                background: 'linear-gradient(135deg, #0e1320 0%, #161b26 100%)',
                borderRadius: '16px',
                border: '1px solid rgba(0, 240, 255, 0.3)',
                marginBottom: '24px',
                textAlign: 'left'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontWeight: 800, color: 'var(--accent-cyan)', fontFamily: 'var(--font-heading)' }}>VERTEX 2026</span>
                <span className="badge badge-cyan">{selectedTier}</span>
              </div>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '2px' }}>
                {formData.fullName || 'Registered Attendee'}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '14px' }}>
                {formData.organization || 'DeepTech Partner'} • {formData.trackInterest}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '12px' }}>
                <QrCode size={40} color="#00f0ff" />
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textAlign: 'right' }}>
                  ID: VTX-2026-99482<br />
                  Nov 12-14 • SF
                </div>
              </div>
            </div>

            <button
              onClick={() => setSubmitted(false)}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Download Pass Wallet File <Download size={16} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
