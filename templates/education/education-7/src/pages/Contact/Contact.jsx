/**
 * Contact — Contact form with validation + address/map placeholder.
 */
import { useState } from 'react';
import { siteInfo } from '../../data/content';
import Button from '../../components/common/Button/Button';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import styles from './Contact.module.css';

const initialForm = { name: '', email: '', subject: '', message: '' };
const initialErrors = { name: '', email: '', subject: '', message: '' };

const validate = (values) => {
  const errors = { ...initialErrors };
  if (!values.name.trim()) errors.name = 'Full name is required.';
  if (!values.email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!values.subject.trim()) errors.subject = 'Subject is required.';
  if (!values.message.trim()) errors.message = 'Message is required.';
  else if (values.message.trim().length < 20) errors.message = 'Message must be at least 20 characters.';
  return errors;
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validate({ ...form, [name]: value })[name] }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(t => ({ ...t, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validate(form)[name] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allErrors = validate(form);
    setErrors(allErrors);
    setTouched({ name: true, email: true, subject: true, message: true });
    if (Object.values(allErrors).every(v => !v)) {
      setSubmitted(true);
    }
  };

  const fieldClass = (field) =>
    [styles.input, errors[field] && touched[field] ? styles.inputError : ''].join(' ');

  return (
    <main id="main-content" className={styles.page}>
      {/* Banner */}
      <div className={styles.banner}>
        <div className="container">
          <h1 className={styles.bannerTitle}>Get in Touch</h1>
          <p className={styles.bannerSub}>We're happy to answer your questions. Reach out via the form or the details below.</p>
        </div>
      </div>

      <div className="container">
        <div className={styles.grid}>
          {/* Form */}
          <section className={styles.formSection} aria-label="Contact form">
            {submitted ? (
              <div className={styles.successBox} role="alert">
                <CheckCircle size={48} className={styles.successIcon} aria-hidden="true" />
                <h2>Message Sent!</h2>
                <p>Thank you, {form.name.split(' ')[0]}. We'll be in touch within 2 working days.</p>
                <Button variant="outline" onClick={() => { setForm(initialForm); setTouched({}); setSubmitted(false); }}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form} noValidate>
                <h2 className={styles.formTitle}>Send Us a Message</h2>

                {[
                  { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Jane Smith' },
                  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'jane@example.com' },
                  { id: 'subject', label: 'Subject', type: 'text', placeholder: 'Admissions enquiry' },
                ].map(field => (
                  <div key={field.id} className={styles.field}>
                    <label htmlFor={`contact-${field.id}`} className={styles.label}>{field.label}</label>
                    <input
                      id={`contact-${field.id}`}
                      name={field.id}
                      type={field.type}
                      value={form[field.id]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder={field.placeholder}
                      className={fieldClass(field.id)}
                      aria-describedby={errors[field.id] && touched[field.id] ? `${field.id}-error` : undefined}
                      aria-invalid={!!(errors[field.id] && touched[field.id])}
                    />
                    {errors[field.id] && touched[field.id] && (
                      <span id={`${field.id}-error`} className={styles.error} role="alert">{errors[field.id]}</span>
                    )}
                  </div>
                ))}

                <div className={styles.field}>
                  <label htmlFor="contact-message" className={styles.label}>Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Tell us how we can help…"
                    rows={5}
                    className={[styles.input, styles.textarea, errors.message && touched.message ? styles.inputError : ''].join(' ')}
                    aria-describedby={errors.message && touched.message ? 'message-error' : undefined}
                    aria-invalid={!!(errors.message && touched.message)}
                  />
                  {errors.message && touched.message && (
                    <span id="message-error" className={styles.error} role="alert">{errors.message}</span>
                  )}
                </div>

                <Button type="submit" variant="primary" size="lg">Send Message</Button>
              </form>
            )}
          </section>

          {/* Info + Map */}
          <aside className={styles.infoSection} aria-label="Contact details">
            <h2 className={styles.infoTitle}>Contact Information</h2>
            <ul className={styles.infoList}>
              <li><MapPin size={18} aria-hidden="true" className={styles.infoIcon} /><span>{siteInfo.address}</span></li>
              <li><Phone size={18} aria-hidden="true" className={styles.infoIcon} /><a href={`tel:${siteInfo.phone}`}>{siteInfo.phone}</a></li>
              <li><Mail size={18} aria-hidden="true" className={styles.infoIcon} /><a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a></li>
              <li><Clock size={18} aria-hidden="true" className={styles.infoIcon} /><span>{siteInfo.hours}</span></li>
            </ul>

            {/* Map placeholder */}
            <div className={styles.mapPlaceholder} aria-label="Campus location map (placeholder)">
              <div className={styles.mapInner}>
                <MapPin size={36} className={styles.mapPin} aria-hidden="true" />
                <p>Interactive map available on campus visit</p>
                <p className={styles.mapCoords}>14 University Ave, Academic City</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Contact;
