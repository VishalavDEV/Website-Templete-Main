import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send, CheckCircle, AlertCircle, Mail, Phone, MapPin,
  Clock, MessageSquare
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import Button from '../components/Button/Button';
import { submitContactForm } from '../services/api';
import './Contact.css';

const initialForm = {
  name: '', email: '', phone: '', company: '', subject: '', message: '',
};

const validateForm = (data) => {
  const errors = {};
  if (!data.name.trim()) errors.name = 'Full name is required';
  else if (data.name.trim().length < 2) errors.name = 'Name must be at least 2 characters';

  if (!data.email.trim()) errors.email = 'Email address is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Please enter a valid email address';

  if (!data.subject.trim()) errors.subject = 'Subject is required';
  else if (data.subject.trim().length < 3) errors.subject = 'Subject must be at least 3 characters';

  if (!data.message.trim()) errors.message = 'Message is required';
  else if (data.message.trim().length < 10) errors.message = 'Message must be at least 10 characters';

  return errors;
};

const contactInfo = [
  { icon: <Mail size={18} />, label: 'Email Us', value: 'hello@nexusdigital.io', href: 'mailto:hello@nexusdigital.io' },
  { icon: <Phone size={18} />, label: 'Call Us', value: '+91 80000 00000', href: 'tel:+918000000000' },
  { icon: <MapPin size={18} />, label: 'Visit Us', value: 'Prestige Tech Tower, Bangalore 560103', href: '#' },
  { icon: <Clock size={18} />, label: 'Office Hours', value: 'Mon–Fri, 9:00 AM – 6:30 PM IST', href: null },
];

const Contact = () => {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [serverMessage, setServerMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change if field was touched
    if (touched[name]) {
      const newErrors = validateForm({ ...formData, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: newErrors[name] }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const newErrors = validateForm(formData);
    setErrors((prev) => ({ ...prev, [name]: newErrors[name] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched = Object.keys(initialForm).reduce((acc, k) => ({ ...acc, [k]: true }), {});
    setTouched(allTouched);

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('loading');
    setErrors({});

    try {
      const response = await submitContactForm(formData);
      setServerMessage(response.message || 'Your enquiry has been submitted successfully!');
      setStatus('success');
      setFormData(initialForm);
      setTouched({});
    } catch (err) {
      const msg = err?.message || 'Something went wrong. Please try again.';
      setServerMessage(msg);

      // Handle field-level errors from backend
      if (err?.errors) {
        setErrors(err.errors);
      }
      setStatus('error');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setServerMessage('');
    setErrors({});
    setTouched({});
    setFormData(initialForm);
  };

  return (
    <main id="main-content">
      {/* ─── Page Hero ─── */}
      <section className="page-hero" aria-label="Contact us">
        <div className="page-hero__bg" aria-hidden="true">
          <div className="page-hero__blob page-hero__blob--1" />
          <div className="page-hero__blob page-hero__blob--2" />
        </div>
        <div className="container">
          <motion.div
            className="page-hero__content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-tag">Get In Touch</span>
            <h1 className="page-hero__title font-display">
              Let's Build Something <span className="text-gradient">Together</span>
            </h1>
            <p className="page-hero__subtitle">
              Ready to start your project? Tell us about it and we'll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Main Content ─── */}
      <section className="section contact__main" aria-label="Contact form and information">
        <div className="container">
          <div className="contact__grid">
            {/* ─── Contact Info ─── */}
            <div className="contact__info">
              <ScrollReveal direction="left">
                <div className="contact__info-header">
                  <MessageSquare size={24} className="contact__info-icon" />
                  <div>
                    <h2 className="contact__info-title font-display">Contact Information</h2>
                    <p className="contact__info-sub">We usually respond within a few hours during business days.</p>
                  </div>
                </div>
              </ScrollReveal>

              <div className="contact__info-items">
                {contactInfo.map((item, i) => (
                  <ScrollReveal key={item.label} delay={i * 0.1} direction="left">
                    <div className="contact__info-item">
                      <div className="contact__info-item-icon" aria-hidden="true">{item.icon}</div>
                      <div>
                        <p className="contact__info-item-label">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="contact__info-item-value">
                            {item.value}
                          </a>
                        ) : (
                          <p className="contact__info-item-value">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={0.4} direction="left">
                <div className="contact__availability">
                  <div className="contact__availability-dot" aria-hidden="true" />
                  <p>Our team is currently <strong>available for new projects</strong></p>
                </div>
              </ScrollReveal>
            </div>

            {/* ─── Contact Form ─── */}
            <ScrollReveal direction="right">
              <div className="contact__form-wrap">
                <AnimatePresence mode="wait">
                  {/* SUCCESS STATE */}
                  {status === 'success' && (
                    <motion.div
                      key="success"
                      className="contact__state contact__state--success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                      >
                        <CheckCircle size={60} className="contact__state-icon contact__state-icon--success" />
                      </motion.div>
                      <h3 className="contact__state-title font-display">Message Sent!</h3>
                      <p className="contact__state-msg">{serverMessage}</p>
                      <Button variant="outline" size="md" onClick={handleReset}>
                        Send Another Message
                      </Button>
                    </motion.div>
                  )}

                  {/* FORM STATE */}
                  {status !== 'success' && (
                    <motion.form
                      key="form"
                      className="contact__form"
                      onSubmit={handleSubmit}
                      noValidate
                      aria-label="Contact form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <h2 className="contact__form-title font-display">Send Us a Message</h2>

                      {/* Server error banner */}
                      <AnimatePresence>
                        {status === 'error' && (
                          <motion.div
                            className="contact__error-banner"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            role="alert"
                          >
                            <AlertCircle size={16} />
                            {serverMessage}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Row: Name + Email */}
                      <div className="contact__form-row">
                        <div className="contact__field">
                          <label htmlFor="name" className="contact__label">
                            Full Name <span aria-hidden="true" className="contact__required">*</span>
                          </label>
                          <input
                            id="name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="John Doe"
                            className={`contact__input ${touched.name && errors.name ? 'contact__input--error' : ''} ${touched.name && !errors.name && formData.name ? 'contact__input--valid' : ''}`}
                            aria-required="true"
                            aria-describedby={errors.name ? 'name-error' : undefined}
                            aria-invalid={!!(touched.name && errors.name)}
                            autoComplete="name"
                          />
                          {touched.name && errors.name && (
                            <motion.span
                              id="name-error"
                              className="contact__field-error"
                              initial={{ opacity: 0, y: -4 }}
                              animate={{ opacity: 1, y: 0 }}
                              role="alert"
                            >
                              {errors.name}
                            </motion.span>
                          )}
                        </div>

                        <div className="contact__field">
                          <label htmlFor="email" className="contact__label">
                            Email Address <span aria-hidden="true" className="contact__required">*</span>
                          </label>
                          <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="john@company.com"
                            className={`contact__input ${touched.email && errors.email ? 'contact__input--error' : ''} ${touched.email && !errors.email && formData.email ? 'contact__input--valid' : ''}`}
                            aria-required="true"
                            aria-describedby={errors.email ? 'email-error' : undefined}
                            aria-invalid={!!(touched.email && errors.email)}
                            autoComplete="email"
                          />
                          {touched.email && errors.email && (
                            <motion.span
                              id="email-error"
                              className="contact__field-error"
                              initial={{ opacity: 0, y: -4 }}
                              animate={{ opacity: 1, y: 0 }}
                              role="alert"
                            >
                              {errors.email}
                            </motion.span>
                          )}
                        </div>
                      </div>

                      {/* Row: Phone + Company */}
                      <div className="contact__form-row">
                        <div className="contact__field">
                          <label htmlFor="phone" className="contact__label">Phone Number</label>
                          <input
                            id="phone"
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 98765 43210"
                            className="contact__input"
                            autoComplete="tel"
                          />
                        </div>

                        <div className="contact__field">
                          <label htmlFor="company" className="contact__label">Company</label>
                          <input
                            id="company"
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your Company"
                            className="contact__input"
                            autoComplete="organization"
                          />
                        </div>
                      </div>

                      {/* Subject */}
                      <div className="contact__field">
                        <label htmlFor="subject" className="contact__label">
                          Subject <span aria-hidden="true" className="contact__required">*</span>
                        </label>
                        <input
                          id="subject"
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="e.g. Mobile App Development Enquiry"
                          className={`contact__input ${touched.subject && errors.subject ? 'contact__input--error' : ''} ${touched.subject && !errors.subject && formData.subject ? 'contact__input--valid' : ''}`}
                          aria-required="true"
                          aria-describedby={errors.subject ? 'subject-error' : undefined}
                          aria-invalid={!!(touched.subject && errors.subject)}
                        />
                        {touched.subject && errors.subject && (
                          <motion.span
                            id="subject-error"
                            className="contact__field-error"
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            role="alert"
                          >
                            {errors.subject}
                          </motion.span>
                        )}
                      </div>

                      {/* Message */}
                      <div className="contact__field">
                        <label htmlFor="message" className="contact__label">
                          Message <span aria-hidden="true" className="contact__required">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Tell us about your project, goals, and timeline..."
                          rows={5}
                          className={`contact__input contact__textarea ${touched.message && errors.message ? 'contact__input--error' : ''} ${touched.message && !errors.message && formData.message ? 'contact__input--valid' : ''}`}
                          aria-required="true"
                          aria-describedby={errors.message ? 'message-error' : undefined}
                          aria-invalid={!!(touched.message && errors.message)}
                        />
                        <div className="contact__char-count" aria-live="polite">
                          {formData.message.length} / 2000
                        </div>
                        {touched.message && errors.message && (
                          <motion.span
                            id="message-error"
                            className="contact__field-error"
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            role="alert"
                          >
                            {errors.message}
                          </motion.span>
                        )}
                      </div>

                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        fullWidth
                        loading={status === 'loading'}
                        icon={<Send size={16} />}
                      >
                        {status === 'loading' ? 'Sending...' : 'Send Message'}
                      </Button>

                      <p className="contact__privacy">
                        By submitting this form, you agree to our{' '}
                        <a href="#" className="contact__privacy-link">Privacy Policy</a>.
                        We never share your data.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
