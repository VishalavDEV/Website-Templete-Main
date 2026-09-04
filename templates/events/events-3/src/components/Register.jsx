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

      {/* Ticket Tier Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
        {tiers.map((tier) => {
          const isSelected = selectedTier === tier.name;
          return (
            <div
              key={tier.name}
              className="glass-card glass-card-overflow flex flex-col justify-between cursor-pointer rounded-2xl sm:rounded-3xl transition-all duration-300 relative"
              onClick={() => setSelectedTier(tier.name)}
              style={{
                padding: '36px 28px',
                paddingTop: tier.popular ? '42px' : '36px',
                border: tier.popular ? '2px solid var(--accent-cyan)' : isSelected ? '2px solid var(--accent-violet)' : '1px solid var(--glass-border)',
                boxShadow: tier.popular ? '0 0 35px rgba(0, 240, 255, 0.28)' : 'var(--shadow-glass)',
                overflow: 'visible'
              }}
            >
              {/* Best Value / Most Popular Floating Badge */}
              {tier.popular && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-black shadow-lg"
                  style={{
                    background: 'var(--gradient-main)',
                    boxShadow: '0 0 16px rgba(0, 240, 255, 0.5)',
                    whiteSpace: 'nowrap'
                  }}
                >
                  <Sparkles size={13} className="text-black" />
                  Most Popular • Best Value
                </div>
              )}

              <div>
                <div className="badge badge-cyan inline-flex mb-4" style={{ alignSelf: 'flex-start' }}>
                  {tier.badge}
                </div>

                <h3 style={{ fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '8px' }}>{tier.name}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                  {tier.description}
                </p>

                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(2.4rem, 5vw, 3rem)',
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
                style={{ width: '100%', justifyContent: 'center', minHeight: '44px' }}
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
        className="glass-card max-w-4xl mx-auto rounded-2xl sm:rounded-3xl"
        style={{
          padding: 'clamp(20px, 4vw, 44px)',
          border: '1px solid rgba(0, 240, 255, 0.3)'
        }}
      >
        <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', color: 'var(--text-primary)', marginBottom: '8px', textAlign: 'center' }}>
          Complete Summit Registration
        </h3>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '32px', textAlign: 'center' }}>
          Selected Tier: <strong style={{ color: 'var(--accent-cyan)' }}>{selectedTier}</strong>
        </p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
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
              className="w-full min-h-[44px] px-4 py-3 rounded-xl outline-none transition-colors"
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--glass-border)',
                color: 'var(--text-primary)',
                fontSize: '0.95rem'
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
              className="w-full min-h-[44px] px-4 py-3 rounded-xl outline-none transition-colors"
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--glass-border)',
                color: 'var(--text-primary)',
                fontSize: '0.95rem'
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
              className="w-full min-h-[44px] px-4 py-3 rounded-xl outline-none transition-colors"
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--glass-border)',
                color: 'var(--text-primary)',
                fontSize: '0.95rem'
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
              className="w-full min-h-[44px] px-4 py-3 rounded-xl outline-none transition-colors"
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--glass-border)',
                color: 'var(--text-primary)',
                fontSize: '0.95rem'
              }}
            >
              <option value="Autonomous Robotics">Autonomous Robotics</option>
              <option value="Quantum Computing">Quantum Computing</option>
              <option value="Edge AI & IoT">Edge AI & IoT</option>
              <option value="Extended Reality (XR)">Extended Reality (XR)</option>
            </select>
          </div>

          <div className="sm:col-span-2 pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full min-h-[48px] justify-center text-sm sm:text-base font-bold"
            >
              {isSubmitting ? 'Generating Digital Badge...' : `Confirm Registration for ${selectedTier}`} <Send size={18} />
            </button>
          </div>
        </form>
      </div>

      {/* Confirmation Digital Pass Modal Popup */}
      {submitted && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          style={{
            background: 'rgba(3, 7, 18, 0.9)',
            backdropFilter: 'blur(20px)'
          }}
        >
          <div
            className="glass-card max-w-lg w-full rounded-2xl sm:rounded-3xl relative text-center"
            style={{
              padding: 'clamp(20px, 4vw, 36px)',
              border: '2px solid var(--accent-cyan)',
              boxShadow: '0 0 50px rgba(0, 240, 255, 0.4)'
            }}
          >
            <button
              onClick={() => setSubmitted(false)}
              aria-label="Close modal"
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
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
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'rgba(0, 240, 255, 0.2)',
                border: '2px solid var(--accent-cyan)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto'
              }}
            >
              <Sparkles size={28} color="#00f0ff" />
            </div>

            <h3 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '4px' }}>Registration Confirmed!</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '20px' }}>
              Your official digital summit pass has been generated. Confirmation sent to <strong>{formData.email || 'your email'}</strong>.
            </p>

            {/* Simulated Digital Ticket Badge */}
            <div
              style={{
                padding: '18px',
                background: 'linear-gradient(135deg, #0e1320 0%, #161b26 100%)',
                borderRadius: '16px',
                border: '1px solid rgba(0, 240, 255, 0.3)',
                marginBottom: '20px',
                textAlign: 'left'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontWeight: 800, color: 'var(--accent-cyan)', fontFamily: 'var(--font-heading)' }}>VERTEX 2026</span>
                <span className="badge badge-cyan">{selectedTier}</span>
              </div>
              <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff', marginBottom: '2px' }}>
                {formData.fullName || 'Registered Attendee'}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
                {formData.organization || 'DeepTech Partner'} • {formData.trackInterest}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '12px' }}>
                <QrCode size={36} color="#00f0ff" />
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textAlign: 'right' }}>
                  ID: VTX-2026-99482<br />
                  Nov 12-14 • SF
                </div>
              </div>
            </div>

            <button
              onClick={() => setSubmitted(false)}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', minHeight: '44px' }}
            >
              Download Pass Wallet File <Download size={16} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
