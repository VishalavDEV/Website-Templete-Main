import React, { useState } from 'react';
import { RACE_CATEGORIES, INCLUSIONS_COMPARISON } from '../data/races';
import { CheckCircle2, Award, User, Mail, Phone, MapPin, Shirt, AlertCircle, Sparkles, Download, Check, ShieldCheck } from 'lucide-react';

export default function RegistrationForm({ initialRaceId = 'half-marathon' }) {
  const [selectedRaceId, setSelectedRaceId] = useState(initialRaceId);
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    gender: 'male',
    email: '',
    phone: '',
    city: 'Chennai',
    tshirtSize: 'M',
    emergencyContact: '',
    runningExperience: 'Intermediate',
    medicalInfo: '',
    preferredPace: '',
    teamName: ''
  });

  const [errors, setErrors] = useState({});
  const [confirmedRunner, setConfirmedRunner] = useState(null);

  const selectedRace = RACE_CATEGORIES.find(r => r.id === selectedRaceId) || RACE_CATEGORIES[0];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.dob) newErrors.dob = "Date of birth is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid email is required";
    if (!formData.phone.trim() || formData.phone.length < 10) newErrors.phone = "Valid 10-digit phone number is required";
    if (!formData.emergencyContact.trim()) newErrors.emergencyContact = "Emergency contact is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Generate fictional runner ID VYR-2026-XXXX
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      const runnerId = `VYR-2026-${randomNum}`;

      setConfirmedRunner({
        id: runnerId,
        name: formData.fullName,
        race: selectedRace.title,
        bibNumber: `BIB-${randomNum.toString().slice(0, 3)}`,
        category: selectedRace.shortTitle,
        email: formData.email,
        price: selectedRace.price
      });
    }
  };

  return (
    <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 24px' }}>
      
      {/* Category Price Cards Selector */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '20px',
        marginBottom: '48px'
      }}>
        {RACE_CATEGORIES.map(race => (
          <div
            key={race.id}
            onClick={() => setSelectedRaceId(race.id)}
            className="glass-panel"
            style={{
              padding: '24px',
              cursor: 'pointer',
              border: selectedRaceId === race.id ? '2px solid var(--bright-orange)' : '1px solid rgba(255,255,255,0.08)',
              background: selectedRaceId === race.id ? 'linear-gradient(180deg, rgba(233,43,43,0.15) 0%, rgba(21,23,27,0.9) 100%)' : 'rgba(21,23,27,0.7)',
              position: 'relative',
              transition: 'all 0.3s ease'
            }}
          >
            {race.badge && (
              <span style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                fontSize: '0.65rem',
                fontWeight: 800,
                color: 'var(--bright-orange)',
                background: 'rgba(255,107,44,0.15)',
                padding: '2px 8px',
                borderRadius: '10px'
              }}>
                {race.badge}
              </span>
            )}
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--soft-grey)', letterSpacing: '1px', textTransform: 'uppercase' }}>
              {race.distance}
            </div>
            <h4 className="font-display" style={{ fontSize: '1.8rem', color: '#FFFFFF', margin: '4px 0' }}>
              {race.shortTitle}
            </h4>
            <div style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--bright-orange)' }}>
              {race.price}
            </div>
          </div>
        ))}
      </div>

      {/* Main Registration Form */}
      <form onSubmit={handleSubmit} className="glass-panel" style={{ padding: '40px 32px', marginBottom: '60px' }}>
        
        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '16px', marginBottom: '28px' }}>
          <h3 className="font-display" style={{ fontSize: '2.2rem', color: '#FFFFFF' }}>
            STEP 1: PERSONAL DETAILS
          </h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '32px' }}>
          <div>
            <label style={{ display: 'block', color: 'var(--warm-white)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>
              Full Name *
            </label>
            <input 
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Aarav Mehta"
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'rgba(9,10,13,0.8)',
                border: errors.fullName ? '1px solid var(--marathon-red)' : '1px solid rgba(255,255,255,0.15)',
                borderRadius: '6px',
                color: '#FFFFFF',
                outline: 'none'
              }}
            />
            {errors.fullName && <span style={{ color: 'var(--marathon-red)', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>{errors.fullName}</span>}
          </div>

          <div>
            <label style={{ display: 'block', color: 'var(--warm-white)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>
              Date of Birth *
            </label>
            <input 
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'rgba(9,10,13,0.8)',
                border: errors.dob ? '1px solid var(--marathon-red)' : '1px solid rgba(255,255,255,0.15)',
                borderRadius: '6px',
                color: '#FFFFFF',
                outline: 'none'
              }}
            />
            {errors.dob && <span style={{ color: 'var(--marathon-red)', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>{errors.dob}</span>}
          </div>

          <div>
            <label style={{ display: 'block', color: 'var(--warm-white)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>
              Gender *
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'rgba(9,10,13,0.8)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '6px',
                color: '#FFFFFF',
                outline: 'none'
              }}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other / Prefer not to say</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', color: 'var(--warm-white)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>
              Email Address *
            </label>
            <input 
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'rgba(9,10,13,0.8)',
                border: errors.email ? '1px solid var(--marathon-red)' : '1px solid rgba(255,255,255,0.15)',
                borderRadius: '6px',
                color: '#FFFFFF',
                outline: 'none'
              }}
            />
            {errors.email && <span style={{ color: 'var(--marathon-red)', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>{errors.email}</span>}
          </div>

          <div>
            <label style={{ display: 'block', color: 'var(--warm-white)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>
              Phone Number *
            </label>
            <input 
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'rgba(9,10,13,0.8)',
                border: errors.phone ? '1px solid var(--marathon-red)' : '1px solid rgba(255,255,255,0.15)',
                borderRadius: '6px',
                color: '#FFFFFF',
                outline: 'none'
              }}
            />
            {errors.phone && <span style={{ color: 'var(--marathon-red)', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>{errors.phone}</span>}
          </div>

          <div>
            <label style={{ display: 'block', color: 'var(--warm-white)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>
              City
            </label>
            <input 
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Chennai"
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'rgba(9,10,13,0.8)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '6px',
                color: '#FFFFFF',
                outline: 'none'
              }}
            />
          </div>
        </div>

        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '16px', marginBottom: '28px', paddingTop: '16px' }}>
          <h3 className="font-display" style={{ fontSize: '2.2rem', color: '#FFFFFF' }}>
            STEP 2: RACE & APPAREL PREFERENCES
          </h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '32px' }}>
          <div>
            <label style={{ display: 'block', color: 'var(--warm-white)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>
              T-Shirt Size
            </label>
            <select
              name="tshirtSize"
              value={formData.tshirtSize}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'rgba(9,10,13,0.8)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '6px',
                color: '#FFFFFF',
                outline: 'none'
              }}
            >
              <option value="S">S (36")</option>
              <option value="M">M (38")</option>
              <option value="L">L (40")</option>
              <option value="XL">XL (42")</option>
              <option value="XXL">XXL (44")</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', color: 'var(--warm-white)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>
              Emergency Contact (Name & Phone) *
            </label>
            <input 
              type="text"
              name="emergencyContact"
              value={formData.emergencyContact}
              onChange={handleChange}
              placeholder="e.g. Priya Mehta - 9876543211"
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'rgba(9,10,13,0.8)',
                border: errors.emergencyContact ? '1px solid var(--marathon-red)' : '1px solid rgba(255,255,255,0.15)',
                borderRadius: '6px',
                color: '#FFFFFF',
                outline: 'none'
              }}
            />
            {errors.emergencyContact && <span style={{ color: 'var(--marathon-red)', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>{errors.emergencyContact}</span>}
          </div>

          <div>
            <label style={{ display: 'block', color: 'var(--warm-white)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>
              Running Experience
            </label>
            <select
              name="runningExperience"
              value={formData.runningExperience}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'rgba(9,10,13,0.8)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '6px',
                color: '#FFFFFF',
                outline: 'none'
              }}
            >
              <option value="Beginner">First Marathon / Beginner</option>
              <option value="Intermediate">Intermediate Runner</option>
              <option value="Veteran">Seasoned Marathoner</option>
            </select>
          </div>
        </div>

        {/* Submit Action */}
        <div style={{ textAlign: 'center', paddingTop: '20px' }}>
          <button type="submit" className="btn-primary" style={{ padding: '16px 48px', fontSize: '1.05rem' }}>
            <ShieldCheck size={20} /> COMPLETE REGISTRATION ({selectedRace.price})
          </button>
        </div>

      </form>

      {/* Confirmation Modal overlay with Digital Runner Bib */}
      {confirmedRunner && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(9,10,13,0.92)',
          backdropFilter: 'blur(16px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000,
          padding: '24px'
        }}>
          <div className="glass-panel" style={{
            maxWidth: '540px',
            width: '100%',
            padding: '36px',
            textAlign: 'center',
            border: '2px solid var(--bright-orange)',
            boxShadow: '0 20px 60px rgba(255,107,44,0.3)',
            position: 'relative'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--marathon-red), var(--bright-orange))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px auto',
              color: '#FFFFFF'
            }}>
              <CheckCircle2 size={36} />
            </div>

            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--bright-orange)', letterSpacing: '2px' }}>
              REGISTRATION CONFIRMED
            </div>

            <h3 className="font-display" style={{ fontSize: '2.5rem', color: '#FFFFFF', marginBottom: '8px' }}>
              SEE YOU AT THE START LINE!
            </h3>

            <p style={{ color: 'var(--soft-grey)', fontSize: '0.9rem', marginBottom: '24px' }}>
              Confirmation details have been dispatched to <strong>{confirmedRunner.email}</strong>.
            </p>

            {/* Generated Fictional Runner Bib Pass */}
            <div style={{
              background: '#FFFFFF',
              color: '#090A0D',
              borderRadius: '12px',
              padding: '20px',
              margin: '0 auto 24px auto',
              border: '4px solid #090A0D',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ background: '#E92B2B', color: '#FFF', padding: '6px', fontWeight: 900, fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', borderRadius: '4px', marginBottom: '12px' }}>
                VAYORA RUNFEST 2026 • CHENNAI
              </div>

              <div style={{ fontSize: '2.8rem', fontWeight: 900, fontFamily: 'Bebas Neue', color: '#E92B2B', lineHeight: 1 }}>
                {confirmedRunner.id}
              </div>

              <div style={{ fontSize: '1.4rem', fontWeight: 800, marginTop: '4px' }}>
                {confirmedRunner.name.toUpperCase()}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '2px dashed #CCC', paddingTop: '10px', marginTop: '10px', fontSize: '0.8rem', fontWeight: 700 }}>
                <span>RACE: {confirmedRunner.category}</span>
                <span>DATE: 15 NOV 2026</span>
              </div>
            </div>

            <button 
              onClick={() => setConfirmedRunner(null)}
              className="btn-primary"
              style={{ width: '100%', padding: '14px', fontSize: '0.95rem' }}
            >
              CLOSE & VIEW EVENT DETAILS
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
