// src/components/Contact.jsx
import { useState } from 'react';
import { personalInfo } from '../data/resumeData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Icons from './Icons';

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateForm(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your full name.';
  if (!values.email.trim()) errors.email = 'Please enter your email address.';
  else if (!validateEmail(values.email)) errors.email = 'Please enter a valid email address.';
  if (!values.subject.trim()) errors.subject = 'Please enter a subject.';
  if (!values.message.trim()) errors.message = 'Please enter your message.';
  else if (values.message.trim().length < 20) errors.message = 'Message must be at least 20 characters.';
  return errors;
}

const contactItems = [
  { id: 't1-contact-email',    label: 'Email',    value: personalInfo.email,                   href: `mailto:${personalInfo.email}`, icon: 'email' },
  { id: 't1-contact-phone',    label: 'Phone',    value: personalInfo.phone,                   href: `tel:${personalInfo.phone}`,    icon: 'phone' },
  { id: 't1-contact-location', label: 'Location', value: personalInfo.location,                href: null,                           icon: 'location' },
  { id: 't1-contact-linkedin', label: 'LinkedIn', value: 'linkedin.com/in/jordan-davis-example', href: personalInfo.linkedin,          icon: 'linkedin' },
  { id: 't1-contact-github',   label: 'GitHub',   value: 'github.com/jordan-davis-example',   href: personalInfo.github,            icon: 'github' },
];

const iconMap = {
  email: Icons.email,
  phone: Icons.phone,
  location: Icons.location,
  linkedin: Icons.linkedin,
  github: Icons.github,
};

export default function Contact() {
  const headerRef = useScrollAnimation();
  const leftRef   = useScrollAnimation();
  const rightRef  = useScrollAnimation();

  const [values,    setValues]    = useState({ name: '', email: '', subject: '', message: '' });
  const [errors,    setErrors]    = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(values);
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setValues({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }, 1200);
  };

  return (
    <section id="contact" className="t1-section t1-section--alt" aria-label="Contact">
      <div className="t1-container">
        <div ref={headerRef} className="t1-section-header t1-fade-in">
          <div className="t1-section-label">Get in touch</div>
          <h2 className="t1-section-title">Let's Work Together</h2>
          <p className="t1-section-subtitle">
            Have an opportunity, project, or idea in mind? I'd love to hear from you.
          </p>
        </div>

        <div className="t1-contact-grid">
          {/* Left: Contact Info */}
          <div ref={leftRef} className="t1-fade-in">
            <h3 className="t1-contact-info-title">Contact Information</h3>
            <p className="t1-contact-info-subtitle">
              Feel free to reach out through any of the channels below. I typically respond within 24 hours.
            </p>

            <div className="t1-contact-items" role="list">
              {contactItems.map((item) => {
                const Tag = item.href ? 'a' : 'div';
                const props = item.href
                  ? { href: item.href, target: item.href.startsWith('http') ? '_blank' : undefined, rel: 'noopener noreferrer' }
                  : {};
                return (
                  <Tag
                    key={item.id}
                    id={item.id}
                    className="t1-contact-item"
                    role="listitem"
                    aria-label={`${item.label}: ${item.value}`}
                    {...props}
                  >
                    <div className="t1-contact-item-icon" aria-hidden="true">
                      {iconMap[item.icon]}
                    </div>
                    <div>
                      <div className="t1-contact-item-label">{item.label}</div>
                      <div className="t1-contact-item-value">{item.value}</div>
                    </div>
                  </Tag>
                );
              })}
            </div>
          </div>

          {/* Right: Form */}
          <div ref={rightRef} className="t1-fade-in t1-fade-in-delay-2">
            <div className="t1-contact-form-card">
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24, color: 'var(--t1-text-primary)' }}>
                Send a Message
              </h3>

              {submitted ? (
                <div className="t1-form-success" role="status" aria-live="polite">
                  <span style={{ display: 'inline-flex', width: 18, height: 18, color: '#16a34a' }}>{Icons.check}</span>
                  <div>
                    <strong>Message sent!</strong> Thank you for reaching out. I'll get back to you within 24 hours.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                  <div className="t1-form-row">
                    <div className="t1-form-group">
                      <label htmlFor="t1-contact-name" className="t1-form-label">Full Name *</label>
                      <input
                        id="t1-contact-name"
                        name="name"
                        type="text"
                        className={`t1-form-input${errors.name ? ' error' : ''}`}
                        placeholder="Your Full Name"
                        value={values.name}
                        onChange={handleChange}
                        aria-required="true"
                        aria-describedby={errors.name ? 't1-name-error' : undefined}
                        autoComplete="name"
                      />
                      {errors.name && (
                        <div id="t1-name-error" className="t1-form-error" role="alert">
                          <span style={{ display: 'inline-flex', width: 13, height: 13 }}>{Icons.alertCircle}</span>
                          {errors.name}
                        </div>
                      )}
                    </div>
                    <div className="t1-form-group">
                      <label htmlFor="t1-contact-email-input" className="t1-form-label">Email Address *</label>
                      <input
                        id="t1-contact-email-input"
                        name="email"
                        type="email"
                        className={`t1-form-input${errors.email ? ' error' : ''}`}
                        placeholder="you@example.com"
                        value={values.email}
                        onChange={handleChange}
                        aria-required="true"
                        aria-describedby={errors.email ? 't1-email-error' : undefined}
                        autoComplete="email"
                      />
                      {errors.email && (
                        <div id="t1-email-error" className="t1-form-error" role="alert">
                          <span style={{ display: 'inline-flex', width: 13, height: 13 }}>{Icons.alertCircle}</span>
                          {errors.email}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="t1-form-group">
                    <label htmlFor="t1-contact-subject" className="t1-form-label">Subject *</label>
                    <input
                      id="t1-contact-subject"
                      name="subject"
                      type="text"
                      className={`t1-form-input${errors.subject ? ' error' : ''}`}
                      placeholder="e.g. Job opportunity, Project collaboration..."
                      value={values.subject}
                      onChange={handleChange}
                      aria-required="true"
                      aria-describedby={errors.subject ? 't1-subject-error' : undefined}
                    />
                    {errors.subject && (
                      <div id="t1-subject-error" className="t1-form-error" role="alert">
                        <span style={{ display: 'inline-flex', width: 13, height: 13 }}>{Icons.alertCircle}</span>
                        {errors.subject}
                      </div>
                    )}
                  </div>

                  <div className="t1-form-group">
                    <label htmlFor="t1-contact-message" className="t1-form-label">Message *</label>
                    <textarea
                      id="t1-contact-message"
                      name="message"
                      className={`t1-form-textarea${errors.message ? ' error' : ''}`}
                      placeholder="Tell me about your opportunity or project..."
                      value={values.message}
                      onChange={handleChange}
                      aria-required="true"
                      aria-describedby={errors.message ? 't1-message-error' : undefined}
                      rows={5}
                    />
                    {errors.message && (
                      <div id="t1-message-error" className="t1-form-error" role="alert">
                        <span style={{ display: 'inline-flex', width: 13, height: 13 }}>{Icons.alertCircle}</span>
                        {errors.message}
                      </div>
                    )}
                  </div>

                  <button
                    id="t1-contact-submit"
                    type="submit"
                    className="t1-btn t1-btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                    disabled={loading}
                    aria-busy={loading}
                  >
                    {loading ? (
                      <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                          style={{ animation: 't1-spin 1s linear infinite' }}>
                          <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <span style={{ display: 'inline-flex', width: 16, height: 16 }}>{Icons.send}</span>
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
