import React, { useState, useEffect } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { BRAND, GLOBAL_NODES } from '../data/corporateData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    workEmail: '',
    domain: 'Systems Architecture & Modernization',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ paddingTop: '90px' }}>
      {/* 14. Header */}
      <section style={{ padding: '80px 0 70px', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container-asym">
          <div className="meta-tag-copper" style={{ marginBottom: '14px' }}>
            DIRECT ARCHITECTURAL INTAKE
          </div>
          <h1 className="edit-heading-display" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(38px, 4.8vw, 68px)', fontWeight: 700, color: 'var(--c-charcoal)' }}>
            Let's build something significant.
          </h1>
          <p style={{ fontSize: '19px', color: 'var(--c-eucalyptus)', maxWidth: '780px', marginTop: '20px', lineHeight: '1.6' }}>
            Connect directly with our principal systems engineers to discuss architecture audits, hyperscale migrations, sovereign AI enclaves, or enterprise modernization.
          </p>
        </div>
      </section>

      {/* 14. Split Layout (Left: Direct Info, Right: Form) */}
      <section style={{ padding: '90px 0 130px' }}>
        <div className="container-asym">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '70px', alignItems: 'flex-start' }}>
            {/* Left Column: Channels */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', fontWeight: 700, color: 'var(--c-charcoal)', marginBottom: '20px' }}>
                Direct Channels
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--c-eucalyptus)', lineHeight: '1.7', marginBottom: '40px' }}>
                Our systems engineering practices operate worldwide across multi-region pods. For critical infrastructure inquiries or emergency architectural triage, reach our encrypted telemetry desk.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', borderTop: '1px solid var(--border-light)', paddingTop: '32px' }}>
                <div>
                  <div className="meta-tag-eucalyptus" style={{ marginBottom: '4px' }}>
                    HEADQUARTERS
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--c-charcoal)' }}>
                    Axiom Systems Tower, 55 Wall Street, New York, NY 10005
                  </div>
                </div>

                <div>
                  <div className="meta-tag-eucalyptus" style={{ marginBottom: '4px' }}>
                    ENCRYPTED DISPATCH
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '16px', fontWeight: 700, color: 'var(--c-copper)' }}>
                    architecture@axiomsystems.io
                  </div>
                </div>

                <div>
                  <div className="meta-tag-eucalyptus" style={{ marginBottom: '4px' }}>
                    TELEMETRY DESK
                  </div>
                  <div style={{ fontSize: '16px', color: 'var(--c-charcoal)' }}>
                    +1 (800) 849-AXSYS // EXT 01
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div style={{ background: 'var(--c-ivory-pure)', border: '1px solid var(--border-light)', borderRadius: '2px', padding: '48px', boxShadow: '0 15px 40px rgba(23, 34, 27, 0.04)' }}>
              {submitted ? (
                <div style={{ padding: '30px 0', textAlign: 'center' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--c-copper)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <Check size={30} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', fontWeight: 700, color: 'var(--c-charcoal)', marginBottom: '10px' }}>
                    TRANSMISSION RECEIVED // ACK_200
                  </h3>
                  <p style={{ fontSize: '15px', color: 'var(--c-eucalyptus)', lineHeight: '1.6' }}>
                    Thank you, {formData.name}. A Principal Systems Architect has been assigned to review your inquiry and will respond within 4 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="meta-tag-copper" style={{ marginBottom: '24px' }}>
                    INTAKE SPECIFICATION
                  </div>

                  <div style={{ marginBottom: '22px' }}>
                    <label className="meta-tag-eucalyptus" style={{ display: 'block', marginBottom: '6px' }}>
                      01 // YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      style={{ width: '100%', padding: '13px 16px', border: '1px solid var(--border-light)', borderRadius: '2px', fontSize: '15px', background: '#FFFFFF', color: 'var(--c-charcoal)' }}
                      placeholder="Dr. Jordan Reed"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div style={{ marginBottom: '22px' }}>
                    <label className="meta-tag-eucalyptus" style={{ display: 'block', marginBottom: '6px' }}>
                      02 // ENTERPRISE / ORGANIZATION *
                    </label>
                    <input
                      type="text"
                      required
                      style={{ width: '100%', padding: '13px 16px', border: '1px solid var(--border-light)', borderRadius: '2px', fontSize: '15px', background: '#FFFFFF', color: 'var(--c-charcoal)' }}
                      placeholder="Global Financial Corp"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    />
                  </div>

                  <div style={{ marginBottom: '22px' }}>
                    <label className="meta-tag-eucalyptus" style={{ display: 'block', marginBottom: '6px' }}>
                      03 // WORK EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      style={{ width: '100%', padding: '13px 16px', border: '1px solid var(--border-light)', borderRadius: '2px', fontSize: '15px', background: '#FFFFFF', color: 'var(--c-charcoal)' }}
                      placeholder="j.reed@enterprise.com"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    />
                  </div>

                  <div style={{ marginBottom: '22px' }}>
                    <label className="meta-tag-eucalyptus" style={{ display: 'block', marginBottom: '6px' }}>
                      04 // ARCHITECTURE DOMAIN
                    </label>
                    <select
                      style={{ width: '100%', padding: '13px 16px', border: '1px solid var(--border-light)', borderRadius: '2px', fontSize: '15px', background: '#FFFFFF', color: 'var(--c-charcoal)', cursor: 'pointer' }}
                      value={formData.domain}
                      onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                    >
                      <option>Systems Architecture & Modernization</option>
                      <option>Artificial Intelligence & Sovereign Models</option>
                      <option>Hyperscale Cloud & GitOps</option>
                      <option>Data Mesh & Real-time Lakehouse</option>
                      <option>Zero-Trust Cybersecurity Audit</option>
                      <option>Enterprise Autonomic Automation</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: '30px' }}>
                    <label className="meta-tag-eucalyptus" style={{ display: 'block', marginBottom: '6px' }}>
                      05 // PROBLEM STATEMENT / TARGET LATENCY *
                    </label>
                    <textarea
                      required
                      rows={3}
                      style={{ width: '100%', padding: '13px 16px', border: '1px solid var(--border-light)', borderRadius: '2px', fontSize: '15px', resize: 'vertical', background: '#FFFFFF', color: 'var(--c-charcoal)' }}
                      placeholder="Describe current latency bottlenecks, scale targets, and migration schedules..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn-copper-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    <span>Send Intake Transmission</span>
                    <ArrowRight size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
