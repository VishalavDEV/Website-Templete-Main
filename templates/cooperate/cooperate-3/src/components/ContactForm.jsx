import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    details: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      style={{
        padding: '90px 0',
        backgroundColor: '#161616',
        borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
      }}
    >
      <div className="container">
        {/* FULL-SCREEN 35 / 65 CONTACT COMMAND INTERFACE */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '35% 65%',
            gap: '60px',
            alignItems: 'flex-start',
          }}
          className="contact-fullscreen-grid"
        >
          {/* LEFT 35%: Heading, Direct Inquiries & Global Office Telemetry */}
          <div>
            <div className="section-label">CONFIDENTIAL ADVISORY</div>

            <h2
              className="hero-title"
              style={{
                fontSize: 'clamp(32px, 3.8vw, 48px)',
                lineHeight: 1.05,
                color: '#FFFFFF',
                marginBottom: '20px',
              }}
            >
              LET'S BUILD<br />
              <span className="accent-text">WHAT'S NEXT.</span>
            </h2>

            <p style={{ fontSize: '15px', color: '#F4F4F4', lineHeight: 1.6, marginBottom: '28px' }}>
              Talk directly with our senior partners regarding enterprise transformation, private AI deployments, or high-stakes corporate strategy.
            </p>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                paddingTop: '20px',
                borderTop: '1px solid rgba(255, 255, 255, 0.14)',
              }}
            >
              <div>
                <div style={{ fontSize: '10px', fontWeight: 800, color: '#9B9B9B', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  DIRECT ADVISORY DESK
                </div>
                <a
                  href="mailto:hello@vantage.example"
                  style={{ fontSize: '17px', fontWeight: 800, color: '#C8F169', marginTop: '2px', display: 'inline-block' }}
                >
                  hello@vantage.example
                </a>
              </div>

              <div>
                <div style={{ fontSize: '10px', fontWeight: 800, color: '#9B9B9B', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  GLOBAL HEADQUARTERS
                </div>
                <div style={{ fontSize: '14px', color: '#FFFFFF', marginTop: '2px' }}>
                  575 5th Avenue, 38th Floor, New York, NY 10017
                </div>
              </div>

              <div>
                <div style={{ fontSize: '10px', fontWeight: 800, color: '#9B9B9B', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  CONFIDENTIALITY ASSURANCE
                </div>
                <div style={{ fontSize: '12px', color: '#9B9B9B', marginTop: '2px', lineHeight: 1.5 }}>
                  All strategic discussions and technical diagnostics are conducted under mutual NDA.
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT 65%: Form with Integrated Final Row Action */}
          <div
            style={{
              backgroundColor: '#111111',
              border: '1px solid rgba(255, 255, 255, 0.14)',
              borderRadius: '4px',
              padding: '40px 36px',
            }}
          >
            {submitted ? (
              <div style={{ padding: '40px 20px', textAlign: 'center' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: '#C8F169',
                    color: '#111111',
                    borderRadius: '2px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    fontWeight: 800,
                    margin: '0 auto 20px auto',
                  }}
                >
                  ✓
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px' }}>
                  TRANSMISSION RECEIVED
                </h3>
                <p style={{ fontSize: '14px', color: '#9B9B9B', maxWidth: '420px', margin: '0 auto 24px auto', lineHeight: 1.6 }}>
                  Thank you for contacting VANTAGE. A Senior Partner aligned with your industry domain will reach out within 24 business hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', company: '', details: '' });
                  }}
                  className="btn btn-secondary"
                  style={{ padding: '12px 24px', fontSize: '12px' }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.12em', color: '#FFFFFF', textTransform: 'uppercase', marginBottom: '28px' }}>
                  INITIATE CONFIDENTIAL ENGAGEMENT
                </div>

                <div className="underline-field">
                  <input
                    type="text"
                    required
                    className="underline-input"
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="underline-field">
                  <input
                    type="email"
                    required
                    className="underline-input"
                    placeholder="Work Email *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="underline-field">
                  <input
                    type="text"
                    required
                    className="underline-input"
                    placeholder="Organization / Enterprise *"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>

                <div className="underline-field">
                  <textarea
                    required
                    rows="3"
                    className="underline-input underline-textarea"
                    placeholder="Strategic challenge, scope, or project details *"
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  />
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    paddingTop: '16px',
                  }}
                >
                  <div style={{ fontSize: '11px', color: '#9B9B9B' }}>
                    Secured by 256-bit encrypted transmission.
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ padding: '14px 28px', fontSize: '13px' }}
                  >
                    <span>START A CONVERSATION</span>
                    <span className="arrow-glyph">→</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .contact-fullscreen-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
