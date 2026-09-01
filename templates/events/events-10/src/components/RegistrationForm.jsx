import React, { useState } from 'react';
import { CheckCircle2, Shield, User, Mail, Phone, MapPin, Upload } from 'lucide-react';

export const RegistrationForm = () => {
  const [regType, setRegType] = useState('team'); // 'team' | 'player'
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    teamName: '',
    captainName: '',
    email: '',
    phone: '',
    city: '',
    coachName: '',
    teamSize: '12 Players',
    playerName: '',
    dob: '',
    position: 'Guard',
    jerseyNumber: '',
    height: '',
    emergencyContact: '',
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="sports-card flame-glow-effect" style={{ padding: '50px 30px', textAlign: 'center', maxWidth: '650px', margin: '0 auto' }}>
        <CheckCircle2 size={70} color="#00c853" style={{ marginBottom: '20px' }} />
        <h2 className="font-display" style={{ fontSize: '3rem', color: '#ff4d00', marginBottom: '10px' }}>
          REGISTRATION CONFIRMED!
        </h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--white)', marginBottom: '20px' }}>
          Thank you for registering for <strong>THUNDERCOURT CLASH 2026</strong>. Our official technical director will review your details and send confirmation to <strong>{formData.email}</strong> within 24 hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              teamName: '',
              captainName: '',
              email: '',
              phone: '',
              city: '',
              coachName: '',
              teamSize: '12 Players',
              playerName: '',
              dob: '',
              position: 'Guard',
              jerseyNumber: '',
              height: '',
              emergencyContact: '',
              agreed: false,
            });
          }}
          className="btn-primary"
        >
          SUBMIT ANOTHER REGISTRATION
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Registration Type Selector */}
      <div className="tab-group-container" style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '30px' }}>
        <button
          onClick={() => setRegType('team')}
          className={`btn-secondary ${regType === 'team' ? 'active' : ''}`}
          style={{
            borderColor: regType === 'team' ? '#ff4d00' : 'var(--border)',
            color: regType === 'team' ? '#ff7518' : 'var(--white)',
            flex: 1,
            maxWidth: '300px',
            fontSize: '1.1rem',
          }}
        >
          <Shield size={18} /> TEAM REGISTRATION
        </button>

        <button
          onClick={() => setRegType('player')}
          className={`btn-secondary ${regType === 'player' ? 'active' : ''}`}
          style={{
            borderColor: regType === 'player' ? '#ff4d00' : 'var(--border)',
            color: regType === 'player' ? '#ff7518' : 'var(--white)',
            flex: 1,
            maxWidth: '300px',
            fontSize: '1.1rem',
          }}
        >
          <User size={18} /> PLAYER REGISTRATION
        </button>
      </div>

      <form onSubmit={handleSubmit} className="sports-card" style={{ padding: '40px 30px' }}>
        <h3 className="font-display" style={{ fontSize: '2.2rem', color: '#ff4d00', marginBottom: '20px' }}>
          {regType === 'team' ? 'OFFICIAL TEAM ENTRY FORM' : 'INDIVIDUAL PLAYER REGISTRATION'}
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '20px' }}>
          {regType === 'team' ? (
            <>
              <div>
                <label className="font-sports" style={{ display: 'block', marginBottom: '6px', color: 'var(--gray)' }}>TEAM NAME *</label>
                <input
                  type="text"
                  name="teamName"
                  required
                  value={formData.teamName}
                  onChange={handleChange}
                  placeholder="e.g. Vortexa Warriors"
                  style={{ width: '100%', padding: '12px', background: '#050505', border: '1px solid var(--border)', color: '#fff', borderRadius: '4px' }}
                />
              </div>
              <div>
                <label className="font-sports" style={{ display: 'block', marginBottom: '6px', color: 'var(--gray)' }}>CAPTAIN NAME *</label>
                <input
                  type="text"
                  name="captainName"
                  required
                  value={formData.captainName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  style={{ width: '100%', padding: '12px', background: '#050505', border: '1px solid var(--border)', color: '#fff', borderRadius: '4px' }}
                />
              </div>
              <div>
                <label className="font-sports" style={{ display: 'block', marginBottom: '6px', color: 'var(--gray)' }}>COACH NAME</label>
                <input
                  type="text"
                  name="coachName"
                  value={formData.coachName}
                  onChange={handleChange}
                  placeholder="Head Coach Name"
                  style={{ width: '100%', padding: '12px', background: '#050505', border: '1px solid var(--border)', color: '#fff', borderRadius: '4px' }}
                />
              </div>
              <div>
                <label className="font-sports" style={{ display: 'block', marginBottom: '6px', color: 'var(--gray)' }}>CITY / REGION *</label>
                <input
                  type="text"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="e.g. Chennai"
                  style={{ width: '100%', padding: '12px', background: '#050505', border: '1px solid var(--border)', color: '#fff', borderRadius: '4px' }}
                />
              </div>
            </>
          ) : (
            <>
              <div>
                <label className="font-sports" style={{ display: 'block', marginBottom: '6px', color: 'var(--gray)' }}>FULL NAME *</label>
                <input
                  type="text"
                  name="playerName"
                  required
                  value={formData.playerName}
                  onChange={handleChange}
                  placeholder="Player Full Name"
                  style={{ width: '100%', padding: '12px', background: '#050505', border: '1px solid var(--border)', color: '#fff', borderRadius: '4px' }}
                />
              </div>
              <div>
                <label className="font-sports" style={{ display: 'block', marginBottom: '6px', color: 'var(--gray)' }}>DATE OF BIRTH *</label>
                <input
                  type="date"
                  name="dob"
                  required
                  value={formData.dob}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '12px', background: '#050505', border: '1px solid var(--border)', color: '#fff', borderRadius: '4px' }}
                />
              </div>
              <div>
                <label className="font-sports" style={{ display: 'block', marginBottom: '6px', color: 'var(--gray)' }}>PREFERRED POSITION *</label>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '12px', background: '#050505', border: '1px solid var(--border)', color: '#fff', borderRadius: '4px' }}
                >
                  <option value="Point Guard">Point Guard</option>
                  <option value="Shooting Guard">Shooting Guard</option>
                  <option value="Small Forward">Small Forward</option>
                  <option value="Power Forward">Power Forward</option>
                  <option value="Center">Center</option>
                </select>
              </div>
              <div>
                <label className="font-sports" style={{ display: 'block', marginBottom: '6px', color: 'var(--gray)' }}>JERSEY NUMBER & HEIGHT</label>
                <input
                  type="text"
                  name="jerseyNumber"
                  value={formData.jerseyNumber}
                  onChange={handleChange}
                  placeholder="#23 | 6'4&quot;"
                  style={{ width: '100%', padding: '12px', background: '#050505', border: '1px solid var(--border)', color: '#fff', borderRadius: '4px' }}
                />
              </div>
            </>
          )}

          <div>
            <label className="font-sports" style={{ display: 'block', marginBottom: '6px', color: 'var(--gray)' }}>OFFICIAL EMAIL *</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="contact@email.com"
              style={{ width: '100%', padding: '12px', background: '#050505', border: '1px solid var(--border)', color: '#fff', borderRadius: '4px' }}
            />
          </div>

          <div>
            <label className="font-sports" style={{ display: 'block', marginBottom: '6px', color: 'var(--gray)' }}>PHONE NUMBER *</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              style={{ width: '100%', padding: '12px', background: '#050505', border: '1px solid var(--border)', color: '#fff', borderRadius: '4px' }}
            />
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--gray)', cursor: 'pointer' }}>
            <input
              type="checkbox"
              name="agreed"
              required
              checked={formData.agreed}
              onChange={handleChange}
            />
            I agree to the FIBA official rules, tournament guidelines, and disciplinary code.
          </label>
        </div>

        <button type="submit" className="btn-primary" style={{ width: '100%', fontSize: '1.2rem', padding: '16px' }}>
          SUBMIT {regType.toUpperCase()} REGISTRATION
        </button>
      </form>
    </div>
  );
};
