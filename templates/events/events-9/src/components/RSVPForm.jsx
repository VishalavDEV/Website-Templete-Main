import React, { useState } from 'react';
import { CheckCircle2, Heart } from 'lucide-react';

export default function RSVPForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guestCount: '1',
    attendance: 'ATTENDING',
    mealPreference: 'VEGETARIAN',
    specialRequests: '',
    message: '',
    confirmed: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.confirmed) {
      alert("Please fill in your name, email and confirm your RSVP details.");
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="form-container text-center" style={{ animation: 'fadeIn 0.5s ease' }}>
        <CheckCircle2 size={54} color="var(--accent)" style={{ margin: '0 auto 1.2rem' }} />
        <h2 className="serif-title" style={{ marginBottom: '0.8rem' }}>
          THANK YOU FOR CELEBRATING WITH US!
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>
          Your RSVP details have been received. We cannot wait to share our special day with you in Chennai.
        </p>
        <button 
          onClick={() => setSubmitted(false)} 
          className="btn-secondary"
        >
          SUBMIT ANOTHER RESPONSE
        </button>
      </div>
    );
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {/* GUEST NAME */}
        <div className="form-group">
          <label className="form-label" htmlFor="rsvp-name">FULL NAME *</label>
          <input
            id="rsvp-name"
            type="text"
            name="name"
            className="form-input"
            placeholder="e.g. Eleanor Vance"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* EMAIL & PHONE */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
          <div className="form-group">
            <label className="form-label" htmlFor="rsvp-email">EMAIL ADDRESS *</label>
            <input
              id="rsvp-email"
              type="email"
              name="email"
              className="form-input"
              placeholder="eleanor@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="rsvp-phone">PHONE NUMBER</label>
            <input
              id="rsvp-phone"
              type="tel"
              name="phone"
              className="form-input"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* NUMBER OF GUESTS & ATTENDANCE */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
          <div className="form-group">
            <label className="form-label" htmlFor="rsvp-guestCount">NUMBER OF GUESTS</label>
            <select
              id="rsvp-guestCount"
              name="guestCount"
              className="form-select"
              value={formData.guestCount}
              onChange={handleChange}
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5+">5+ Family Members</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">ATTENDANCE STATUS</label>
            <div className="radio-group" style={{ paddingTop: '0.6rem' }}>
              <label className="radio-label">
                <input
                  type="radio"
                  name="attendance"
                  value="ATTENDING"
                  checked={formData.attendance === 'ATTENDING'}
                  onChange={handleChange}
                />
                Joyfully Attend
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="attendance"
                  value="NOT ATTENDING"
                  checked={formData.attendance === 'NOT ATTENDING'}
                  onChange={handleChange}
                />
                Regretfully Decline
              </label>
            </div>
          </div>
        </div>

        {/* MEAL PREFERENCE */}
        <div className="form-group">
          <label className="form-label" htmlFor="rsvp-meal">MEAL PREFERENCE</label>
          <select
            id="rsvp-meal"
            name="mealPreference"
            className="form-select"
            value={formData.mealPreference}
            onChange={handleChange}
          >
            <option value="VEGETARIAN">VEGETARIAN</option>
            <option value="NON-VEGETARIAN">NON-VEGETARIAN</option>
            <option value="VEGAN">VEGAN</option>
            <option value="JAIN">JAIN DIET</option>
          </select>
        </div>

        {/* SPECIAL REQUESTS */}
        <div className="form-group">
          <label className="form-label" htmlFor="rsvp-special">SPECIAL REQUESTS / DIETARY RESTRICTIONS</label>
          <input
            id="rsvp-special"
            type="text"
            name="specialRequests"
            className="form-input"
            placeholder="e.g. Nut allergies, wheelchair access..."
            value={formData.specialRequests}
            onChange={handleChange}
          />
        </div>

        {/* MESSAGE TO COUPLE */}
        <div className="form-group">
          <label className="form-label" htmlFor="rsvp-msg">WARM MESSAGE TO THE COUPLE</label>
          <textarea
            id="rsvp-msg"
            name="message"
            rows={4}
            className="form-textarea"
            placeholder="Share a wish or sweet note..."
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        {/* CONFIRM CHECKBOX */}
        <div className="form-group" style={{ marginTop: '1rem' }}>
          <label className="radio-label">
            <input
              type="checkbox"
              name="confirmed"
              checked={formData.confirmed}
              onChange={handleChange}
              required
            />
            I confirm my RSVP details.
          </label>
        </div>

        {/* SUBMIT BUTTON */}
        <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1.5rem' }}>
          SEND RSVP
        </button>
      </form>
    </div>
  );
}
