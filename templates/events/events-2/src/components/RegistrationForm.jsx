import React, { useState, useEffect } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import { SpecularButton } from './SpecularButton';
import '../styles/forms.css';

export const RegistrationForm = ({ selectedTicket }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    country: 'India',
    ticketType: selectedTicket ? selectedTicket.name : 'STANDARD PASS',
    dietary: 'None',
    interest: 'AI/ML'
  });

  useEffect(() => {
    if (selectedTicket && selectedTicket.name) {
      setFormData((prev) => ({ ...prev, ticketType: selectedTicket.name }));
    }
  }, [selectedTicket]);

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Valid email is required';
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!formData.company.trim()) errs.company = 'Company / Institution is required';
    return errs;
  };

  const handleSubmit = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    const randomId = 'CN-2026-' + Math.floor(1000 + Math.random() * 9000);
    setTicketId(randomId);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="registration-form-card glass-card">
        <div className="success-modal-card">
          <div className="success-icon-badge">
            <CheckCircle2 size={40} />
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff' }}>
            Registration Successful!
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '550px' }}>
            Thank you for registering for <strong>CYBERNEXUS 2026</strong>. Your official digital pass and QR barcode have been generated.
          </p>

          <div className="success-ticket-id">
            Digital Ticket Pass ID: {ticketId}
          </div>

          <div
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px',
              width: '100%',
              textAlign: 'left',
              margin: '20px 0'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ color: 'var(--text-muted)' }}>Delegate Name:</span>
              <strong style={{ color: '#ffffff' }}>{formData.fullName}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ color: 'var(--text-muted)' }}>Email Address:</span>
              <strong style={{ color: '#ffffff' }}>{formData.email}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ color: 'var(--text-muted)' }}>Ticket Tier:</span>
              <span className="badge badge-purple">{formData.ticketType}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-muted)' }}>Venue & Date:</span>
              <strong style={{ color: 'var(--accent-cyan)' }}>Chennai Convention Centre (Aug 28-30)</strong>
            </div>
          </div>

          <SpecularButton
            size="md"
            radius={14}
            lineColor="#ffffff"
            baseColor="#334155"
            textColor="#ffffff"
            tint="#1e293b"
            tintOpacity={0.4}
            onClick={() => {
              setSubmitted(false);
              setFormData({
                fullName: '',
                email: '',
                phone: '',
                company: '',
                country: 'India',
                ticketType: 'STANDARD PASS',
                dietary: 'None',
                interest: 'AI/ML'
              });
            }}
          >
            Register Another Delegate
          </SpecularButton>
        </div>
      </div>
    );
  }

  return (
    <div className="registration-form-card glass-card">
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <span className="badge badge-cyan" style={{ marginBottom: '12px' }}>
          OFFICIAL REGISTRATION PORTAL
        </span>
        <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>Reserve Your Summit Seat</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          Complete the form below to receive your digital QR pass and badge credential.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          {/* Full Name */}
          <div className="form-group">
            <label className="form-label">Full Name *</label>
            <input
              type="text"
              className="form-input"
              placeholder="Dr. Arjun Mehta"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
            {errors.fullName && <span className="form-error-msg">{errors.fullName}</span>}
          </div>

          {/* Email */}
          <div className="form-group">
            <label className="form-label">Email Address *</label>
            <input
              type="email"
              className="form-input"
              placeholder="arjun@technova.ai"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <span className="form-error-msg">{errors.email}</span>}
          </div>

          {/* Phone */}
          <div className="form-group">
            <label className="form-label">Phone Number *</label>
            <input
              type="tel"
              className="form-input"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            {errors.phone && <span className="form-error-msg">{errors.phone}</span>}
          </div>

          {/* Company / College */}
          <div className="form-group">
            <label className="form-label">Company / University *</label>
            <input
              type="text"
              className="form-input"
              placeholder="TechNova Systems / IIT Madras"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            />
            {errors.company && <span className="form-error-msg">{errors.company}</span>}
          </div>

          {/* Country */}
          <div className="form-group">
            <label className="form-label">Country</label>
            <select
              className="form-select"
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            >
              <option value="India">India</option>
              <option value="Singapore">Singapore</option>
              <option value="United States">United States</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Germany">Germany</option>
              <option value="Japan">Japan</option>
              <option value="Other">Other International</option>
            </select>
          </div>

          {/* Ticket Type Selection Cards */}
          <div className="form-group full-width">
            <label className="form-label">Select Pass Tier</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', marginTop: '6px' }}>
              {[
                { name: 'EARLY BIRD', price: '₹1,499' },
                { name: 'STANDARD PASS', price: '₹2,499' },
                { name: 'VIP EXECUTIVE', price: '₹4,999' }
              ].map((tier) => {
                const isSelected = formData.ticketType === tier.name;
                return (
                  <button
                    key={tier.name}
                    type="button"
                    onClick={() => setFormData({ ...formData, ticketType: tier.name })}
                    style={{
                      padding: '14px 12px',
                      borderRadius: '12px',
                      border: isSelected ? '2px solid #2563eb' : '1px solid var(--border-light)',
                      background: isSelected ? 'rgba(37, 99, 235, 0.06)' : '#f8fafc',
                      boxShadow: isSelected ? '0 0 16px rgba(37, 99, 235, 0.3)' : 'none',
                      cursor: 'pointer',
                      textAlign: 'center',
                      transition: 'all 0.25s ease',
                      outline: 'none'
                    }}
                  >
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: isSelected ? '#2563eb' : 'var(--text-primary)' }}>
                      {tier.name}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: isSelected ? '#2563eb' : 'var(--text-muted)', marginTop: '4px', fontWeight: 600 }}>
                      {tier.price}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dietary Preference */}
          <div className="form-group">
            <label className="form-label">Dietary Preference</label>
            <select
              className="form-select"
              value={formData.dietary}
              onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
            >
              <option value="None">Standard / Non-Vegetarian</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Vegan">Vegan</option>
              <option value="Jain">Jain Option</option>
              <option value="Halal">Halal</option>
              <option value="Gluten-Free">Gluten-Free</option>
            </select>
          </div>

          {/* Event Primary Interest */}
          <div className="form-group">
            <label className="form-label">Primary Interest Track</label>
            <select
              className="form-select"
              value={formData.interest}
              onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
            >
              <option value="AI/ML">AI & Generative Neural Systems</option>
              <option value="Cloud & DevOps">Cloud Infrastructure & Kubernetes</option>
              <option value="Spatial UI">Spatial Interfaces & Product Design</option>
              <option value="DeepTech">Quantum Computing & Cyber Defense</option>
              <option value="Startup & VC">Startup Pitch & Venture Funding</option>
            </select>
          </div>
        </div>

        <SpecularButton
          type="submit"
          size="lg"
          radius={16}
          lineColor="#00f2fe"
          baseColor="#7c3aed"
          textColor="#ffffff"
          tint="#7c3aed"
          tintOpacity={0.3}
          autoAnimate
          style={{ width: '100%' }}
          onClick={handleSubmit}
        >
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            Complete Summit Registration <Send size={16} />
          </span>
        </SpecularButton>
      </form>
    </div>
  );
};
