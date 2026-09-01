import React, { useState } from 'react';
import { services } from '../data/servicesData';
import { pricingPackages } from '../data/pricingData';
import { carBrands } from '../data/carBrandsData';
import { Calendar, Clock, Car, User, Phone, Mail, CheckCircle, Sparkles, Shield, ArrowRight } from 'lucide-react';

export const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    brand: 'BMW',
    model: 'M3 Sedan',
    year: '2024',
    color: 'Obsidian Black',
    service: 'FOAM WASH',
    package: 'AQUA PRO',
    date: '',
    time: '10:00 AM',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomRef = 'AVX-2026-' + Math.floor(1000 + Math.random() * 9000);
    setRefCode(randomRef);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{
        background: 'linear-gradient(145deg, #111417 0%, #1b2024 100%)',
        border: '2px solid #7cff4f',
        borderRadius: '24px',
        padding: '50px 36px',
        textAlign: 'center',
        maxWidth: '650px',
        margin: '0 auto',
        boxShadow: '0 25px 60px rgba(124, 255, 79, 0.2)',
        animation: 'fadeIn 0.5s ease'
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'rgba(124, 255, 79, 0.15)',
          border: '2px solid #7cff4f',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 24px auto',
          boxShadow: '0 0 30px rgba(124, 255, 79, 0.4)'
        }}>
          <CheckCircle size={44} color="#7cff4f" />
        </div>

        <div className="badge-pill badge-green" style={{ marginBottom: '16px' }}>
          CONFIRMED APPOINTMENT
        </div>

        <h2 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '2rem',
          color: '#f5f7f8',
          marginBottom: '12px'
        }}>
          YOUR SERVICE REQUEST HAS BEEN RECEIVED.
        </h2>

        <p style={{ color: '#b9c0c5', fontSize: '1.05rem', marginBottom: '28px' }}>
          Our auto spa concierge team has reserved your bay. A confirmation call will follow shortly.
        </p>

        <div style={{
          background: '#07090b',
          border: '1px dashed rgba(124, 255, 79, 0.5)',
          borderRadius: '16px',
          padding: '20px',
          marginBottom: '32px'
        }}>
          <span style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
            Service Reference ID
          </span>
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '2.2rem',
            fontWeight: '900',
            color: '#7cff4f',
            letterSpacing: '0.08em',
            marginTop: '4px'
          }}>
            {refCode}
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '16px',
          textAlign: 'left',
          fontSize: '0.9rem',
          color: '#b9c0c5',
          marginBottom: '32px',
          background: 'rgba(255,255,255,0.03)',
          padding: '20px',
          borderRadius: '12px'
        }}>
          <div><strong>Vehicle:</strong> {formData.brand} {formData.model} ({formData.year})</div>
          <div><strong>Package:</strong> {formData.package}</div>
          <div><strong>Customer:</strong> {formData.name}</div>
          <div><strong>Phone:</strong> {formData.phone}</div>
          <div><strong>Date:</strong> {formData.date || 'Tomorrow'}</div>
          <div><strong>Time:</strong> {formData.time}</div>
        </div>

        <button 
          onClick={() => setSubmitted(false)}
          className="btn-primary" 
          style={{ padding: '14px 32px' }}
        >
          BOOK ANOTHER VEHICLE
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card" style={{
      padding: '40px 32px',
      maxWidth: '880px',
      margin: '0 auto',
      background: 'linear-gradient(180deg, #111417 0%, #07090b 100%)'
    }}>
      <h3 style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: '1.6rem',
        color: '#f5f7f8',
        marginBottom: '24px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        <User size={22} color="#7cff4f" /> 1. CUSTOMER DETAILS
      </h3>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '36px' }}>
        <div>
          <label className="form-label">Full Name *</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Arjun Mehta"
            className="form-input"
          />
        </div>

        <div>
          <label className="form-label">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="form-input"
          />
        </div>

        <div>
          <label className="form-label">Email Address *</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="arjun@example.com"
            className="form-input"
          />
        </div>
      </div>

      <h3 style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: '1.6rem',
        color: '#f5f7f8',
        marginBottom: '24px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        <Car size={22} color="#25bfff" /> 2. VEHICLE SPECIFICATIONS
      </h3>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px', marginBottom: '36px' }}>
        <div>
          <label className="form-label">Vehicle Brand</label>
          <select name="brand" value={formData.brand} onChange={handleChange} className="form-input">
            {carBrands.map((b) => (
              <option key={b.id} value={b.name}>{b.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="form-label">Model Name</label>
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
            placeholder="e.g. M3 / E-Class"
            className="form-input"
          />
        </div>

        <div>
          <label className="form-label">Model Year</label>
          <input
            type="text"
            name="year"
            value={formData.year}
            onChange={handleChange}
            placeholder="2024"
            className="form-input"
          />
        </div>

        <div>
          <label className="form-label">Current Color</label>
          <input
            type="text"
            name="color"
            value={formData.color}
            onChange={handleChange}
            placeholder="Obsidian Black"
            className="form-input"
          />
        </div>
      </div>

      <h3 style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: '1.6rem',
        color: '#f5f7f8',
        marginBottom: '24px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        <Calendar size={22} color="#7cff4f" /> 3. SERVICE & APPOINTMENT SLOT
      </h3>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '36px' }}>
        <div>
          <label className="form-label">Primary Service</label>
          <select name="service" value={formData.service} onChange={handleChange} className="form-input">
            {services.map((s) => (
              <option key={s.id} value={s.name}>{s.name} ({s.startingPrice})</option>
            ))}
          </select>
        </div>

        <div>
          <label className="form-label">Care Package</label>
          <select name="package" value={formData.package} onChange={handleChange} className="form-input">
            {pricingPackages.map((p) => (
              <option key={p.id} value={p.name}>{p.name} - {p.price}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="form-label">Preferred Date</label>
          <input
            type="date"
            name="date"
            required
            value={formData.date}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div>
          <label className="form-label">Preferred Time Slot</label>
          <select name="time" value={formData.time} onChange={handleChange} className="form-input">
            <option>09:00 AM</option>
            <option>10:30 AM</option>
            <option>12:00 PM</option>
            <option>02:30 PM</option>
            <option>04:00 PM</option>
            <option>06:00 PM</option>
          </select>
        </div>
      </div>

      <div style={{ marginBottom: '32px' }}>
        <label className="form-label">Additional Instructions / Requirements</label>
        <textarea
          name="notes"
          rows={3}
          value={formData.notes}
          onChange={handleChange}
          placeholder="Mention scratch locations, custom paint requests, or valet pickup address..."
          className="form-input"
        />
      </div>

      <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '16px 32px', fontSize: '1.05rem' }}>
        CONFIRM BOOKING <ArrowRight size={18} />
      </button>

      <style>{`
        .form-label {
          display: block;
          fontSize: 0.82rem;
          fontWeight: 700;
          color: #b9c0c5;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 8px;
        }

        .form-input {
          width: 100%;
          background: rgba(7, 9, 11, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 12px 16px;
          color: #f5f7f8;
          font-family: inherit;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.2s ease;
        }

        .form-input:focus {
          border-color: #7cff4f;
          box-shadow: 0 0 15px rgba(124, 255, 79, 0.2);
        }

        select.form-input option {
          background: #111417;
          color: #f5f7f8;
        }
      `}</style>
    </form>
  );
};

export default BookingForm;
