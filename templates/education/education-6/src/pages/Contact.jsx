import { useState } from 'react';
import * as Icons from 'lucide-react';
import { contentData } from '../data/content';

/**
 * Contact Page Component
 * Renders contact info cards, a customized contact form with validation,
 * and a styled map placeholder.
 */
export default function Contact() {
  const { contact } = contentData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message content is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className="contact-page fade-in">
      {/* Banner */}
      <section className="page-banner">
        <div className="container">
          <span className="badge badge-gold">Connect</span>
          <h1>Contact Us</h1>
          <p className="banner-sub">Have questions? Reach out to our admissions or administration office directly.</p>
        </div>
      </section>

      {/* Main Grid content */}
      <section className="contact-content-section section-padding">
        <div className="container">
          <div className="home-layout">
            
            {/* Contact Details Column */}
            <div className="contact-info-column">
              <h2>Get In Touch</h2>
              <p className="contact-intro">
                Whether you have questions about programs, tuition fees, application files, or campus visits, our team is ready to support you.
              </p>

              {/* Cards Grid */}
              <div className="grid-2 contact-cards-grid" style={{ gap: 'var(--space-md)', margin: 'var(--space-lg) 0' }}>
                <div className="card contact-detail-card">
                  <Icons.MapPin size={24} className="text-secondary" />
                  <h4>Address</h4>
                  <p>{contact.address}</p>
                </div>
                <div className="card contact-detail-card">
                  <Icons.Phone size={24} className="text-secondary" />
                  <h4>Phone</h4>
                  <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                </div>
                <div className="card contact-detail-card">
                  <Icons.Mail size={24} className="text-secondary" />
                  <h4>Email</h4>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </div>
                <div className="card contact-detail-card">
                  <Icons.Clock size={24} className="text-secondary" />
                  <h4>Hours</h4>
                  <p>{contact.hours}</p>
                </div>
              </div>

              {/* Styled Map Placeholder */}
              <div className="card map-placeholder-card text-center" style={{ backgroundColor: 'var(--primary)', color: 'var(--bg-light)', padding: 'var(--space-xl)' }}>
                <Icons.Map size={48} className="text-gold" style={{ marginBottom: 'var(--space-md)' }} />
                <h3>Campus Location Map</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: 'var(--space-md)' }}>
                  100 Academic Parkway, Metro City, MC 90210
                </p>
                <div className="map-frame flex-center" style={{ border: '2px dashed var(--border-dark)', height: '180px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--primary-light)' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    [ Interactive Leaflet / Google Map API Placeholder ]
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="contact-form-column">
              <div className="card contact-form-card">
                <h3>Send Us a Message</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-lg)' }}>
                  Complete the inquiry form below, and we will route it to the correct department.
                </p>

                {isSuccess ? (
                  <div className="contact-success-box text-center fade-in" style={{ padding: 'var(--space-lg) 0' }}>
                    <Icons.CheckCircle size={52} className="text-success" style={{ color: '#10b981', marginBottom: 'var(--space-md)' }} />
                    <h4>Message Received!</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 'var(--space-sm) 0' }}>
                      Thank you for contacting Apex Business College. An administrative assistant will follow up via email.
                    </p>
                    <button onClick={() => setIsSuccess(false)} className="btn btn-secondary btn-block">
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className={`form-input ${errors.name ? 'input-error' : ''}`}
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && <span className="form-error"><Icons.AlertCircle size={12} /> {errors.name}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className={`form-input ${errors.email ? 'input-error' : ''}`}
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <span className="form-error"><Icons.AlertCircle size={12} /> {errors.email}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="subject">Subject *</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className={`form-input ${errors.subject ? 'input-error' : ''}`}
                        placeholder="Admissions inquiry, credit transfers, etc."
                        value={formData.subject}
                        onChange={handleChange}
                      />
                      {errors.subject && <span className="form-error"><Icons.AlertCircle size={12} /> {errors.subject}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="message">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        className={`form-input ${errors.message ? 'input-error' : ''}`}
                        style={{ resize: 'vertical' }}
                        value={formData.message}
                        onChange={handleChange}
                      />
                      {errors.message && <span className="form-error"><Icons.AlertCircle size={12} /> {errors.message}</span>}
                    </div>

                    <button 
                      type="submit" 
                      className="btn btn-primary btn-block" 
                      disabled={isSubmitting}
                      style={{ marginTop: 'var(--space-md)' }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
