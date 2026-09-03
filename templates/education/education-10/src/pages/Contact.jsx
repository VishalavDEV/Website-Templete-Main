import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { submitContact } from '../services/api';

const initialForm = { name: '', email: '', phone: '', subject: '', message: '' };
const initialErrors = { name: '', email: '', phone: '', subject: '', message: '' };

function validate(values) {
  const errors = { ...initialErrors };
  if (!values.name.trim() || values.name.trim().length < 2) errors.name = 'Name must be at least 2 characters.';
  if (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Please enter a valid email address.';
  if (!values.phone.trim() || !/^[+]?[0-9]{7,15}$/.test(values.phone.replace(/\s/g, ''))) errors.phone = 'Please enter a valid phone number.';
  if (!values.subject.trim() || values.subject.trim().length < 3) errors.subject = 'Subject must be at least 3 characters.';
  if (!values.message.trim() || values.message.trim().length < 10) errors.message = 'Message must be at least 10 characters.';
  return errors;
}

const contactDetails = [
  { icon: Mail, label: 'Email', value: 'hello@edulearn.com', sub: 'We reply within 24 hours' },
  { icon: Phone, label: 'Phone', value: '+1 (800) EDU-LEARN', sub: 'Mon-Fri, 9am-6pm EST' },
  { icon: MapPin, label: 'Office', value: '100 Innovation Drive, San Francisco, CA', sub: 'United States' },
  { icon: Clock, label: 'Support Hours', value: 'Monday - Friday', sub: '9:00 AM - 6:00 PM EST' },
];

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [apiError, setApiError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate(form);
    const hasErrors = Object.values(newErrors).some(Boolean);
    if (hasErrors) { setErrors(newErrors); return; }

    setStatus('loading');
    setApiError('');

    try {
      await submitContact(form);
      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
      setApiError(err?.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <main className="contact-page">
      <header className="page-header">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="section-badge"><Mail size={12} /> Get in Touch</span>
            <h1>We'd Love to <span className="text-gradient">Hear from You</span></h1>
            <p>Have a question about a course or just want to say hello? Drop us a message and we'll get back to you.</p>
          </motion.div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Info Panel */}
            <AnimatedSection>
              <div className="contact-info-card">
                <h2 style={{ color: 'white', fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, marginBottom: 'var(--space-sm)' }}>
                  Contact Information
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', marginBottom: 'var(--space-2xl)', lineHeight: 1.7 }}>
                  Reach out through any channel below, or fill in the form and we'll get back to you shortly.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
                  {contactDetails.map(({ icon: Icon, label, value, sub }) => (
                    <div key={label} className="contact-detail">
                      <div className="contact-detail-icon" aria-hidden="true">
                        <Icon size={18} color="white" />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 2 }}>{label}</div>
                        <div style={{ color: 'white', fontWeight: 600, fontSize: '0.9rem' }}>{value}</div>
                        <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem' }}>{sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection delay={0.15}>
              <div className="contact-form-card">
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, marginBottom: 'var(--space-xl)' }}>
                  Send a Message
                </h2>

                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div
                      className="alert alert-success"
                      initial={{ opacity: 0, y: -10, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      style={{ marginBottom: 'var(--space-xl)' }}
                    >
                      <CheckCircle size={18} />
                      <span><strong>Message sent!</strong> We'll get back to you within 24 hours.</span>
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div
                      className="alert alert-error"
                      initial={{ opacity: 0, y: -10, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      style={{ marginBottom: 'var(--space-xl)' }}
                    >
                      <AlertCircle size={18} />
                      <span>{apiError || 'Failed to send. Backend may be offline.'}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                  <div className="grid grid-2" style={{ marginBottom: 'var(--space-lg)' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-name">Full Name *</label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        className={`form-input ${errors.name ? 'error' : ''}`}
                        placeholder="Your full name"
                        value={form.name}
                        onChange={handleChange}
                        autoComplete="name"
                        required
                      />
                      {errors.name && <span className="form-error" role="alert">{errors.name}</span>}
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-email">Email Address *</label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        className={`form-input ${errors.email ? 'error' : ''}`}
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={handleChange}
                        autoComplete="email"
                        required
                      />
                      {errors.email && <span className="form-error" role="alert">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="grid grid-2" style={{ marginBottom: 'var(--space-lg)' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-phone">Phone Number *</label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        className={`form-input ${errors.phone ? 'error' : ''}`}
                        placeholder="+1 234 567 8900"
                        value={form.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                        required
                      />
                      {errors.phone && <span className="form-error" role="alert">{errors.phone}</span>}
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-subject">Subject *</label>
                      <input
                        id="contact-subject"
                        type="text"
                        name="subject"
                        className={`form-input ${errors.subject ? 'error' : ''}`}
                        placeholder="Course enquiry, Support..."
                        value={form.subject}
                        onChange={handleChange}
                        required
                      />
                      {errors.subject && <span className="form-error" role="alert">{errors.subject}</span>}
                    </div>
                  </div>

                  <div className="form-group" style={{ marginBottom: 'var(--space-xl)' }}>
                    <label className="form-label" htmlFor="contact-message">Message *</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      className={`form-textarea ${errors.message ? 'error' : ''}`}
                      placeholder="Tell us how we can help you..."
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                    {errors.message && <span className="form-error" role="alert">{errors.message}</span>}
                  </div>

                  <motion.button
                    type="submit"
                    className="btn btn-primary w-full"
                    style={{ justifyContent: 'center' }}
                    disabled={status === 'loading'}
                    whileHover={status !== 'loading' ? { scale: 1.02 } : {}}
                    whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
                    aria-label="Send message"
                  >
                    {status === 'loading' ? (
                      <><span className="spinner" aria-hidden="true" /> Sending...</>
                    ) : (
                      <><Send size={18} /> Send Message</>
                    )}
                  </motion.button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
}
