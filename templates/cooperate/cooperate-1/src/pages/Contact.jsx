import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, CheckCircle2, ShieldCheck, Clock, MessageSquare } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { companyInfo } from '../data/company';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    service: 'Artificial Intelligence & Automation',
    budget: '$100k - $250k',
    timeline: '3 - 6 Months',
    message: '',
    ndaRequired: true
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const servicesList = [
    'Artificial Intelligence & Automation',
    'Custom Software Engineering',
    'Cloud Architecture & Migration',
    'Cybersecurity & Zero Trust',
    'Enterprise Data & Analytics',
    'Digital Transformation Advisory'
  ];

  const budgetOptions = [
    '< $50,000',
    '$50,000 - $100,000',
    '$100,000 - $250,000',
    '$250,000 - $500,000',
    '$500,000+'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <div className="contact-page">
      {/* 1. Page Header */}
      <PageHeader
        tag="START A CONVERSATION"
        title="Let's build something enduring."
        subtitle="Connect directly with our senior technology partners and architects to explore challenges, evaluate architectures, and accelerate your commercial vision."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      {/* 2. Main Contact Grid */}
      <section className="contact-form-section section">
        <div className="container">
          <div className="contact-layout-grid">
            {/* Left Column: Huge Statement & Global Direct Channels */}
            <div className="contact-info-col">
              <span className="section-tag">01 / ENGAGEMENT INQUIRY</span>
              <h2 className="contact-huge-statement">
                Let's create <br />
                <span className="text-gradient">something</span> <br />
                meaningful.
              </h2>
              <p className="contact-info-desc">
                Whether you're scoping an enterprise AI initiative, modernizing a legacy core, or auditing multi-cloud security posture, our principal architects are ready to assist.
              </p>

              {/* Direct channels */}
              <div className="contact-direct-items">
                <div className="contact-direct-card">
                  <div className="direct-icon-box">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="direct-lbl">General Inquiries</span>
                    <a href={`mailto:${companyInfo?.contact?.email || 'advisory@nexoratech.com'}`} className="direct-val">
                      {companyInfo?.contact?.email || 'advisory@nexoratech.com'}
                    </a>
                  </div>
                </div>

                <div className="contact-direct-card">
                  <div className="direct-icon-box">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="direct-lbl">Direct Telephone</span>
                    <a href={`tel:${companyInfo?.contact?.phone || '+1 (800) 490-3400'}`} className="direct-val">
                      {companyInfo?.contact?.phone || '+1 (800) 490-3400'}
                    </a>
                  </div>
                </div>
              </div>

              {/* Global Innovation Hubs */}
              <div className="offices-preview-section">
                <h4 className="offices-head">Global Innovation Hubs</h4>
                <div className="offices-mini-grid">
                  {companyInfo.offices.map((office, idx) => (
                    <div key={idx} className="office-mini-item">
                      <div className="office-city-name">
                        <MapPin size={14} className="pin-icon" />
                        <span>{office.city}</span>
                        {office.isHQ && <span className="hq-tag">HQ</span>}
                      </div>
                      <p className="office-address-text">{office.address}</p>
                      <p className="office-phone-text">{office.phone}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Luxury Form */}
            <div className="contact-form-col">
              <div className="contact-form-card">
                {submitted ? (
                  <div className="form-submitted-state">
                    <CheckCircle2 size={64} className="submit-success-icon" />
                    <h3 className="submit-title">Inquiry Received</h3>
                    <p className="submit-p">
                      Thank you, <strong>{formData.fullName}</strong>. A Practice Partner specializing in <em>{formData.service}</em> will review your brief under our standard mutual NDA and respond within 1 business day.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn btn-secondary"
                    >
                      Submit Another Brief
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="luxury-contact-form">
                    <h3 className="form-head-title">Project Exploration Brief</h3>
                    <p className="form-head-sub">All inquiries are held in strict commercial confidence.</p>

                    <div className="form-row-2">
                      <div className="form-group">
                        <label className="form-label" htmlFor="fullName">Full Name *</label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Eleanor Vance"
                          className="form-input"
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="email">Work Email *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="eleanor@enterprise.com"
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div className="form-row-2">
                      <div className="form-group">
                        <label className="form-label" htmlFor="company">Company / Organization *</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="e.g. Apex Global"
                          className="form-input"
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="service">Primary Capability</label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="form-select"
                        >
                          {servicesList.map((svc, i) => (
                            <option key={i} value={svc}>{svc}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="form-row-2">
                      <div className="form-group">
                        <label className="form-label" htmlFor="budget">Estimated Budget Range</label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="form-select"
                        >
                          {budgetOptions.map((opt, i) => (
                            <option key={i} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="timeline">Target Deployment Window</label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="form-select"
                        >
                          <option value="Immediate (< 1 month)">Immediate (&lt; 1 month)</option>
                          <option value="1 - 3 Months">1 - 3 Months</option>
                          <option value="3 - 6 Months">3 - 6 Months</option>
                          <option value="Strategic Planning (6+ months)">Strategic Planning (6+ months)</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="message">Project Context & Objectives *</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please describe current architecture bottlenecks, desired deliverables, and business metrics..."
                        className="form-textarea"
                      />
                    </div>

                    <div className="form-nda-note">
                      <ShieldCheck size={18} className="nda-shield" />
                      <span>Protected by NEXORA Standard Mutual NDA & SOC2 Type II compliance.</span>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn btn-primary btn-lg submit-inquiry-btn"
                    >
                      <span>{loading ? 'Transmitting Brief...' : 'Send Inquiry'}</span>
                      <ArrowUpRight size={18} />
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
