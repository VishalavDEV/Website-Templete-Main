import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Compass,
  ShieldCheck
} from 'lucide-react';
import { audioEngine } from './AudioEngine';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    preferredDate: '',
    interest: 'Test Ride',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    audioEngine.playClick();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="section-contact">
      <div className="section-header-block">
        <div className="section-badge">GET IN TOUCH // DEALERSHIP & CONCIERGE</div>
        <h2 className="section-heading">CONTACT & TEST RIDE</h2>
        <p className="section-desc">
          Ready to experience the aggressive agility and next-generation power of the HTM 350 DUDE? Book a private test ride or connect with our authorized experience centers.
        </p>
      </div>

      <div className="contact-grid-container">
        {/* Left Column: Direct Contact Info & Flagship Centers */}
        <div className="contact-info-cards">
          {/* Main Contacts */}
          <div className="contact-card primary-contact">
            <h3 className="card-subheading">DIRECT CONCIERGE</h3>
            <div className="contact-item-list">
              <div className="contact-item">
                <div className="contact-icon-box">
                  <Phone size={18} />
                </div>
                <div className="contact-meta">
                  <span className="meta-label">TOLL FREE / 24/7 HOTLINE</span>
                  <a href="tel:+18004863833" className="meta-link">+1 (800) HTM-DUDE / +1 (800) 486-3833</a>
                  <a href="tel:+919876543210" className="meta-link">+91 98765 43210 (Direct Line)</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-box">
                  <Mail size={18} />
                </div>
                <div className="contact-meta">
                  <span className="meta-label">OFFICIAL INQUIRIES & SALES</span>
                  <a href="mailto:sales@htm-dude.com" className="meta-link">sales@htm-dude.com</a>
                  <a href="mailto:support@htm-dude.com" className="meta-link">support@htm-dude.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-box">
                  <Clock size={18} />
                </div>
                <div className="contact-meta">
                  <span className="meta-label">OPERATING HOURS</span>
                  <span className="meta-text">Monday – Saturday: 08:00 AM – 08:00 PM</span>
                  <span className="meta-text">Sunday: VIP Track Bookings Only</span>
                </div>
              </div>
            </div>
          </div>

          {/* Flagship Locations */}
          <div className="contact-card locations-card">
            <h3 className="card-subheading">FLAGSHIP EXPERIENCE CENTERS</h3>
            <div className="location-item">
              <MapPin size={16} className="loc-pin-icon" />
              <div>
                <strong>HTM Motorcycles Global Studio</strong>
                <p>High-Performance Tech Corridor / 5230 Mattighofen, Austria</p>
              </div>
            </div>
            <div className="location-item">
              <MapPin size={16} className="loc-pin-icon" />
              <div>
                <strong>North America Flagship Hub</strong>
                <p>Speedway Tech District, Austin, TX 78701, United States</p>
              </div>
            </div>
            <div className="location-item">
              <MapPin size={16} className="loc-pin-icon" />
              <div>
                <strong>Asia-Pacific Experience Hub</strong>
                <p>High-Speed Circuit Boulevard, Bangalore, Karnataka 560001, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Test Ride & Inquiry Form */}
        <div className="contact-form-card">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="test-ride-form">
              <div className="form-title-row">
                <Compass size={20} className="form-icon" />
                <h3 className="form-heading">BOOK A TEST RIDE / INQUIRY</h3>
              </div>

              <div className="form-row-dual">
                <div className="form-field">
                  <label htmlFor="input-name">Full Name *</label>
                  <input
                    id="input-name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="input-email">Email Address *</label>
                  <input
                    id="input-email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row-dual">
                <div className="form-field">
                  <label htmlFor="input-phone">Phone Number *</label>
                  <input
                    id="input-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+1 (555) 019-2834"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="input-city">City / Nearest Showroom</label>
                  <input
                    id="input-city"
                    name="city"
                    type="text"
                    placeholder="e.g. Austin / London / Bangalore"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row-dual">
                <div className="form-field">
                  <label htmlFor="input-date">Preferred Test Ride Date</label>
                  <input
                    id="input-date"
                    name="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="input-interest">Inquiry Type</label>
                  <select
                    id="input-interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                  >
                    <option value="Test Ride">Private Track Test Ride</option>
                    <option value="Pre-Order Allocation">Pre-Order / Booking</option>
                    <option value="Dealership Partnership">Dealership Partnership</option>
                    <option value="Technical Specifications">Technical Inquiry</option>
                  </select>
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="input-message">Additional Notes / Questions</label>
                <textarea
                  id="input-message"
                  name="message"
                  rows="3"
                  placeholder="Tell us your riding experience or specific requests..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" id="btn-submit-contact" className="btn-hero-primary submit-contact-btn">
                <Send size={16} />
                <span>CONFIRM TEST RIDE RESERVATION</span>
              </button>

              <div className="form-security-note">
                <ShieldCheck size={14} />
                <span>Your information is protected with end-to-end encryption. Our concierge team will reach out within 2 hours.</span>
              </div>
            </form>
          ) : (
            <div className="form-success-state">
              <div className="success-badge-icon">
                <CheckCircle2 size={54} />
              </div>
              <h3 className="success-title">TEST RIDE INQUIRY CONFIRMED</h3>
              <p className="success-desc">
                Thank you, <strong>{formData.name || 'Rider'}</strong>! Your booking inquiry for the <strong>HTM 350 DUDE</strong> has been received. Our concierge representative will call you at <strong>{formData.phone || formData.email}</strong> shortly.
              </p>
              <button 
                className="btn-hero-secondary"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: '', email: '', phone: '', city: '', preferredDate: '', interest: 'Test Ride', message: '' });
                }}
              >
                SUBMIT ANOTHER INQUIRY
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
