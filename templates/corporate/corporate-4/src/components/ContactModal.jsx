import React, { useState } from "react";
import { X, Send, CheckCircle2, ShieldCheck } from "lucide-react";

export const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    role: "",
    service: "AI & Automation",
    timeline: "Immediate (< 1 month)",
    budget: "$100k - $250k",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // simulated success
    }, 500);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>

        {!submitted ? (
          <div>
            <div className="eyebrow">
              <span className="eyebrow-indicator"></span>
              EXECUTIVE ENGAGEMENT INITIATION
            </div>
            <h3 style={{ marginBottom: "0.5rem" }}>Initiate a Transformation Brief</h3>
            <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", marginBottom: "1.75rem" }}>
              Direct access to our Senior Partners and Systems Architects. NDA protected by default.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="e.g. Marcus Sterling"
                    className="form-input"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Corporate Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="m.sterling@enterprise.com"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label">Organization Name *</label>
                  <input
                    type="text"
                    name="company"
                    required
                    placeholder="e.g. Global Holdings Corp"
                    className="form-input"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Executive Role</label>
                  <input
                    type="text"
                    name="role"
                    placeholder="e.g. CTO / VP Technology"
                    className="form-input"
                    value={formData.role}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label">Core Capability Required</label>
                  <select
                    name="service"
                    className="form-select"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="Digital Transformation">Digital Transformation</option>
                    <option value="AI & Automation">AI & Automation</option>
                    <option value="Software Engineering">Software Engineering</option>
                    <option value="Cloud & Infrastructure">Cloud & Infrastructure</option>
                    <option value="Data & Analytics">Data & Analytics</option>
                    <option value="Cybersecurity">Cybersecurity & Resilience</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Target Timeline</label>
                  <select
                    name="timeline"
                    className="form-select"
                    value={formData.timeline}
                    onChange={handleChange}
                  >
                    <option value="Immediate (< 1 month)">Immediate (&lt; 1 month)</option>
                    <option value="Q1/Q2 Roadmap">Upcoming Quarter (1-3 months)</option>
                    <option value="Strategic Planning">Long-term Strategic Evaluation</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Project Scope & Strategic Challenges</label>
                <textarea
                  name="message"
                  rows="3"
                  className="form-textarea"
                  placeholder="Outline key system bottlenecks, objectives, or required platform throughput..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.75rem", color: "var(--text-dim)" }}>
                  <ShieldCheck size={16} color="var(--accent-cyan)" />
                  Enterprise 256-bit Encrypted
                </div>
                <button type="submit" className="btn btn-primary">
                  <span>Submit RFP Brief</span>
                  <Send size={16} />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "2.5rem 1rem" }}>
            <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "rgba(0,242,195,0.15)", border: "1px solid var(--accent-cyan)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem auto" }}>
              <CheckCircle2 size={36} color="var(--accent-cyan)" />
            </div>
            <h3 style={{ marginBottom: "0.75rem" }}>Brief Received Successfully</h3>
            <p style={{ color: "var(--text-secondary)", maxWidth: "440px", margin: "0 auto 2rem auto", fontSize: "0.95rem" }}>
              Thank you, {formData.fullName || "Partner"}. A Senior Systems Architect from our Global Advisory Team will review your brief and contact you within 4 business hours.
            </p>
            <button className="btn btn-secondary" onClick={handleReset}>
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
