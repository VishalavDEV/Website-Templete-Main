import { useState } from "react";
import { useInView } from "../hooks/useInView";
import "./Contact.css";

const INITIAL = { name: "", email: "", organisation: "", subject: "", message: "" };

export default function Contact() {
  const [ref, visible] = useInView();
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Full name is required.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "A valid email address is required.";
    if (!form.subject.trim()) e.subject = "Subject is required.";
    if (!form.message.trim() || form.message.length < 20) e.message = "Please enter a message (minimum 20 characters).";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length > 0) { setErrors(v); return; }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section contact" ref={ref}>
      <div className="container">
        <div className="section-header">
          <div className="section-label">Professional Contact</div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            For professional collaborations, academic discussions, and general enquiries.
          </p>
        </div>

        <div className={`contact__inner${visible ? " contact__inner--visible" : ""}`}>
          {/* Left — Details */}
          <div className="contact__details">
            <div className="contact__detail-item">
              <div className="contact__detail-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div>
                <div className="contact__detail-label">Email</div>
                <a href="mailto:maya.ellison@example.com" className="contact__detail-value contact__link">
                  maya.ellison@example.com
                </a>
              </div>
            </div>

            <div className="contact__detail-item">
              <div className="contact__detail-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <div className="contact__detail-label">Location</div>
                <div className="contact__detail-value">Melbourne, Australia</div>
              </div>
            </div>

            <div className="contact__detail-item">
              <div className="contact__detail-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </div>
              <div>
                <div className="contact__detail-label">Professional Network</div>
                <a href="#" className="contact__detail-value contact__link">LinkedIn Profile</a>
              </div>
            </div>

            <div className="contact__detail-item">
              <div className="contact__detail-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              </div>
              <div>
                <div className="contact__detail-label">Research Profile</div>
                <a href="#" className="contact__detail-value contact__link">Academic Profile</a>
              </div>
            </div>

            <div className="contact__notice">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              <span>This contact form is for professional and academic enquiries only. For medical emergencies, please contact emergency services.</span>
            </div>
          </div>

          {/* Right — Form */}
          <div className="contact__form-wrap">
            {submitted ? (
              <div className="contact__success">
                <div className="contact__success-icon" aria-hidden="true">✓</div>
                <h3 className="contact__success-title">Enquiry Received</h3>
                <p className="contact__success-text">
                  Thank you for your message. This is a demonstration template — no message was actually sent.
                </p>
                <button className="btn btn--outline" onClick={() => { setSubmitted(false); setForm(INITIAL); }}>
                  Send Another
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label htmlFor="contact-name" className="contact__label">Full Name <span aria-hidden="true">*</span></label>
                    <input
                      id="contact-name" type="text" name="name" value={form.name}
                      onChange={handleChange} placeholder="Your full name"
                      className={`contact__input${errors.name ? " contact__input--error" : ""}`}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && <span id="name-error" className="contact__error" role="alert">{errors.name}</span>}
                  </div>
                  <div className="contact__field">
                    <label htmlFor="contact-email" className="contact__label">Professional Email <span aria-hidden="true">*</span></label>
                    <input
                      id="contact-email" type="email" name="email" value={form.email}
                      onChange={handleChange} placeholder="you@organisation.com"
                      className={`contact__input${errors.email ? " contact__input--error" : ""}`}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && <span id="email-error" className="contact__error" role="alert">{errors.email}</span>}
                  </div>
                </div>
                <div className="contact__field">
                  <label htmlFor="contact-org" className="contact__label">Organisation</label>
                  <input
                    id="contact-org" type="text" name="organisation" value={form.organisation}
                    onChange={handleChange} placeholder="Your organisation or institution"
                    className="contact__input"
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="contact-subject" className="contact__label">Subject <span aria-hidden="true">*</span></label>
                  <input
                    id="contact-subject" type="text" name="subject" value={form.subject}
                    onChange={handleChange} placeholder="Enquiry subject"
                    className={`contact__input${errors.subject ? " contact__input--error" : ""}`}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                  />
                  {errors.subject && <span id="subject-error" className="contact__error" role="alert">{errors.subject}</span>}
                </div>
                <div className="contact__field">
                  <label htmlFor="contact-message" className="contact__label">Message <span aria-hidden="true">*</span></label>
                  <textarea
                    id="contact-message" name="message" value={form.message}
                    onChange={handleChange} placeholder="Please describe your enquiry..."
                    rows={5}
                    className={`contact__input contact__textarea${errors.message ? " contact__input--error" : ""}`}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && <span id="message-error" className="contact__error" role="alert">{errors.message}</span>}
                </div>
                <button type="submit" id="contact-submit-btn" className="btn btn--primary contact__submit">
                  Send Enquiry
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
