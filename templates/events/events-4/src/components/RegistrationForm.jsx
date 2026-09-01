import React, { useState } from 'react';
import Button from './Button';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    gender: 'Male',
    fitnessLevel: 'Intermediate',
    eventCategory: 'POWER LIFT',
    trainingProgram: 'POWER FORGE',
    emergencyContact: '',
    membershipType: 'EVENT ENTRY ONLY',
    termsAccepted: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert("Please accept the terms and conditions to proceed.");
      return;
    }
    setSubmitted(true);
  };

  const inputStyle = {
    width: '100%',
    padding: '0.85rem 1rem',
    background: 'var(--color-bg-black)',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    borderRadius: '4px',
    color: '#FFF',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border-color 0.3s'
  };

  const labelStyle = {
    display: 'block',
    color: 'var(--color-yellow)',
    fontFamily: 'Outfit, sans-serif',
    fontWeight: '700',
    fontSize: '0.85rem',
    marginBottom: '0.4rem',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div>
          <label style={labelStyle}>Full Name *</label>
          <input
            type="text"
            name="fullName"
            required
            placeholder="e.g. Alex Mercer"
            value={formData.fullName}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div>
          <label style={labelStyle}>Email Address *</label>
          <input
            type="email"
            name="email"
            required
            placeholder="alex@example.com"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div>
          <label style={labelStyle}>Phone Number *</label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div>
          <label style={labelStyle}>Date of Birth *</label>
          <input
            type="date"
            name="dob"
            required
            value={formData.dob}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div>
          <label style={labelStyle}>Gender *</label>
          <select name="gender" value={formData.gender} onChange={handleChange} style={inputStyle}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other / Prefer not to say</option>
          </select>
        </div>

        <div>
          <label style={labelStyle}>Fitness Level *</label>
          <select name="fitnessLevel" value={formData.fitnessLevel} onChange={handleChange} style={inputStyle}>
            <option value="Beginner">Beginner (0-1 yrs)</option>
            <option value="Intermediate">Intermediate (1-3 yrs)</option>
            <option value="Advanced">Advanced (3-5 yrs)</option>
            <option value="Pro Athlete">Pro Athlete (5+ yrs)</option>
          </select>
        </div>

        <div>
          <label style={labelStyle}>Iron Ascent Event Category *</label>
          <select name="eventCategory" value={formData.eventCategory} onChange={handleChange} style={inputStyle}>
            <option value="POWER LIFT">POWER LIFT (Max Strength)</option>
            <option value="ENDURANCE RUSH">ENDURANCE RUSH (Timed Conditioning)</option>
            <option value="BEAST CIRCUIT">BEAST CIRCUIT (Full Body)</option>
            <option value="ATHLETE ASCENT">ATHLETE ASCENT (Pro Performance)</option>
            <option value="ROOKIE RISE">ROOKIE RISE (Beginner Friendly)</option>
          </select>
        </div>

        <div>
          <label style={labelStyle}>Preferred Gym Program</label>
          <select name="trainingProgram" value={formData.trainingProgram} onChange={handleChange} style={inputStyle}>
            <option value="POWER FORGE">POWER FORGE (Strength)</option>
            <option value="ASCENT SHRED">ASCENT SHRED (Fat Loss)</option>
            <option value="MUSCLE ARCHITECT">MUSCLE ARCHITECT (Bodybuilding)</option>
            <option value="ATHLETE CORE">ATHLETE CORE (Sports Performance)</option>
            <option value="BEAST MODE">BEAST MODE (Advanced)</option>
          </select>
        </div>

        <div>
          <label style={labelStyle}>Emergency Contact Person & Phone *</label>
          <input
            type="text"
            name="emergencyContact"
            required
            placeholder="Name - +91 XXXXX XXXXX"
            value={formData.emergencyContact}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div>
          <label style={labelStyle}>Membership / Ticket Tier *</label>
          <select name="membershipType" value={formData.membershipType} onChange={handleChange} style={inputStyle}>
            <option value="EVENT ENTRY ONLY">EVENT ENTRY ONLY - ₹799</option>
            <option value="PRO ATHLETE KIT">PRO ATHLETE KIT - ₹1,499</option>
            <option value="ELITE VIP ACCESS">ELITE VIP ACCESS - ₹2,499</option>
            <option value="FORGE MONTHLY MEMBERSHIP">FORGE GYM MONTHLY - ₹1,799/mo</option>
          </select>
        </div>

        <div style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.5rem' }}>
          <input
            type="checkbox"
            name="termsAccepted"
            id="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            style={{ width: '18px', height: '18px', accentColor: 'var(--color-yellow)' }}
          />
          <label htmlFor="termsAccepted" style={{ color: '#E0E0EC', fontSize: '0.9rem', cursor: 'pointer' }}>
            I agree to the event terms and conditions, health disclaimer, and waiver policy.
          </label>
        </div>

        <div style={{ gridColumn: '1 / -1', marginTop: '1rem' }}>
          <Button type="submit" variant="primary" style={{ width: '100%', padding: '1rem' }}>
            COMPLETE REGISTRATION
          </Button>
        </div>
      </form>

      {submitted && (
        <div className="modal-backdrop">
          <div className="modal-content-box">
            <div style={{
              width: '70px',
              height: '70px',
              background: 'var(--gradient-yellow)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
              color: '#000',
              fontSize: '2rem',
              fontWeight: '900',
              boxShadow: '0 0 30px var(--color-yellow)'
            }}>
              ✓
            </div>
            <h2 style={{ color: 'var(--color-yellow)', fontSize: '2rem', marginBottom: '0.75rem' }}>
              REGISTRATION SUCCESSFUL!
            </h2>
            <p style={{ color: '#FFF', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              "You are officially on the road to the <strong>IRON ASCENT 2026</strong>."
            </p>
            <div style={{
              background: 'var(--color-bg-black)',
              padding: '1.25rem',
              textAlign: 'left',
              marginBottom: '1.5rem',
              borderLeft: '3px solid var(--color-purple)',
              fontSize: '0.9rem',
              color: 'var(--color-text-muted)'
            }}>
              <div><strong>ATHLETE:</strong> {formData.fullName}</div>
              <div><strong>CATEGORY:</strong> {formData.eventCategory}</div>
              <div><strong>TIER:</strong> {formData.membershipType}</div>
              <div><strong>EVENT DATE:</strong> OCT 18, 2026 @ ARENA</div>
            </div>
            <Button variant="primary" onClick={() => setSubmitted(false)} style={{ width: '100%' }}>
              CLOSE & VIEW EVENT DETAILS
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
