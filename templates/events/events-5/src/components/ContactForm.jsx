import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    brand: '',
    model: '',
    service: 'Foam Wash',
    date: '',
    time: 'Morning',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
      gap: '40px',
      alignItems: 'start'
    }}>
      {/* Left Contact Info & Map Card */}
      <div>
        <div className="glass-card" style={{ padding: '36px', marginBottom: '30px' }}>
          <h3 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '1.8rem',
            color: '#f5f7f8',
            marginBottom: '20px',
            fontWeight: '900'
          }}>
            STUDIO LOCATION & HOURS
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(124, 255, 79, 0.1)', border: '1px solid #7cff4f', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <MapPin size={20} color="#7cff4f" />
              </div>
              <div>
                <div style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: '800', textTransform: 'uppercase' }}>Address</div>
                <div style={{ fontSize: '1rem', color: '#f5f7f8', fontWeight: '700', marginTop: '2px' }}>
                  AQUAVEXA AUTO SPA<br />
                  45 Velocity Avenue, Aurora Industrial District
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(37, 191, 255, 0.1)', border: '1px solid #25bfff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Phone size={20} color="#25bfff" />
              </div>
              <div>
                <div style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: '800', textTransform: 'uppercase' }}>Phone</div>
                <div style={{ fontSize: '1rem', color: '#f5f7f8', fontWeight: '700', marginTop: '2px' }}>
                  +91 90000 45678
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(124, 255, 79, 0.1)', border: '1px solid #7cff4f', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Mail size={20} color="#7cff4f" />
              </div>
              <div>
                <div style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: '800', textTransform: 'uppercase' }}>Email</div>
                <div style={{ fontSize: '1rem', color: '#f5f7f8', fontWeight: '700', marginTop: '2px' }}>
                  hello@aquavexa.example
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(37, 191, 255, 0.1)', border: '1px solid #25bfff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Clock size={20} color="#25bfff" />
              </div>
              <div>
                <div style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: '800', textTransform: 'uppercase' }}>Opening Hours</div>
                <div style={{ fontSize: '0.92rem', color: '#b9c0c5', marginTop: '2px' }}>
                  <strong style={{ color: '#f5f7f8' }}>Monday – Saturday:</strong> 8:00 AM – 8:00 PM<br />
                  <strong style={{ color: '#f5f7f8' }}>Sunday:</strong> 9:00 AM – 6:00 PM
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Map Visual Mockup */}
        <div style={{
          height: '240px',
          borderRadius: '16px',
          overflow: 'hidden',
          position: 'relative',
          border: '1px solid rgba(124, 255, 79, 0.3)'
        }}>
          <iframe
            title="Aquavexa Location Map"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.2)' }}
            loading="lazy"
            allowFullScreen
            src="https://maps.google.com/maps?q=Aurora%20Industrial%20District&t=&z=13&ie=UTF8&iwloc=&output=embed"
          />
          <div style={{
            position: 'absolute',
            bottom: '12px',
            left: '12px',
            background: 'rgba(7, 9, 11, 0.9)',
            border: '1px solid #7cff4f',
            color: '#7cff4f',
            fontSize: '0.75rem',
            fontWeight: '800',
            padding: '6px 12px',
            borderRadius: '6px'
          }}>
            📍 AQUAVEXA MAIN STUDIO
          </div>
        </div>
      </div>

      {/* Right Form Card */}
      <div className="glass-card" style={{ padding: '36px' }}>
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <CheckCircle size={54} color="#7cff4f" style={{ margin: '0 auto 16px auto' }} />
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.8rem', color: '#f5f7f8' }}>
              MESSAGE TRANSMITTED
            </h3>
            <p style={{ color: '#b9c0c5', marginTop: '8px' }}>
              Thank you {formData.name}. Our studio manager will call you at {formData.phone} shortly!
            </p>
            <button onClick={() => setSubmitted(false)} className="btn-secondary" style={{ marginTop: '24px' }}>
              Send Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h3 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '1.8rem',
              color: '#f5f7f8',
              marginBottom: '8px',
              fontWeight: '900'
            }}>
              LET'S MAKE YOUR CAR LOOK NEW AGAIN.
            </h3>
            <p style={{ color: '#b9c0c5', fontSize: '0.92rem', marginBottom: '24px' }}>
              Fill out the form below to request custom detailing, ceramic paint quotes, or workshop appointments.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <div>
                <label className="form-label">Name *</label>
                <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Your Name" className="form-input" />
              </div>
              <div>
                <label className="form-label">Phone *</label>
                <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="form-input" />
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label className="form-label">Email *</label>
              <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="hello@example.com" className="form-input" />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <div>
                <label className="form-label">Vehicle Brand</label>
                <input type="text" name="brand" value={formData.brand} onChange={handleChange} placeholder="e.g. Porsche" className="form-input" />
              </div>
              <div>
                <label className="form-label">Vehicle Model</label>
                <input type="text" name="model" value={formData.model} onChange={handleChange} placeholder="e.g. 911 GT3" className="form-input" />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '16px' }}>
              <div>
                <label className="form-label">Service</label>
                <select name="service" value={formData.service} onChange={handleChange} className="form-input">
                  <option>Foam Wash</option>
                  <option>Detailing</option>
                  <option>Ceramic Coating</option>
                  <option>Paint Correction</option>
                  <option>Full Painting</option>
                </select>
              </div>
              <div>
                <label className="form-label">Date</label>
                <input type="date" name="date" value={formData.date} onChange={handleChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Time</label>
                <select name="time" value={formData.time} onChange={handleChange} className="form-input">
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Evening</option>
                </select>
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label className="form-label">Message / Details</label>
              <textarea name="message" rows={3} value={formData.message} onChange={handleChange} placeholder="Tell us about your vehicle..." className="form-input" />
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '14px' }}>
              REQUEST A SERVICE <Send size={16} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
