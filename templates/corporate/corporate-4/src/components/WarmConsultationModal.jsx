import React, { useState, useEffect } from "react";
import { X, ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";

export const WarmConsultationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    service: "AI & Intelligence",
    budget: "$100k - $250k",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(30, 22, 17, 0.85)",
        backdropFilter: "blur(12px)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem"
      }}
      onClick={onClose}
    >
      <div
        className="consultation-modal-box"
        style={{
          backgroundColor: "var(--bg-sand-light)",
          color: "var(--text-espresso)",
          width: "100%",
          maxWidth: "640px",
          borderRadius: "28px",
          border: "2px solid var(--bg-espresso)",
          boxShadow: "16px 16px 0 var(--bg-terracotta)",
          padding: "clamp(1.5rem, 5vw, 3rem)",
          position: "relative",
          maxHeight: "90vh",
          overflowY: "auto"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1.25rem",
            right: "1.25rem",
            background: "rgba(30,22,17,0.06)",
            border: "none",
            borderRadius: "50%",
            width: "36px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "var(--text-espresso)"
          }}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div className="editorial-tag" style={{ color: "var(--bg-terracotta)", marginBottom: "1rem" }}>
              INITIATE PROJECT BRIEF
            </div>

            <h3 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", marginBottom: "0.5rem" }}>
              Let's make something matter.
            </h3>

            <p style={{ color: "var(--text-espresso-muted)", fontSize: "0.95rem", marginBottom: "1.75rem" }}>
              Direct access to our senior engineering partners. NDA protected by default.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="editorial-form-row" style={{ marginBottom: "1rem" }}>
                <div>
                  <label className="editorial-tag" style={{ display: "block", marginBottom: "0.4rem", fontSize: "0.72rem" }}>
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    name="fullName"
                    placeholder="Marcus Vance"
                    value={formData.fullName}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      borderRadius: "10px",
                      border: "1px solid var(--border-espresso-medium)",
                      backgroundColor: "#fff",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.95rem",
                      color: "var(--text-espresso)"
                    }}
                  />
                </div>

                <div>
                  <label className="editorial-tag" style={{ display: "block", marginBottom: "0.4rem", fontSize: "0.72rem" }}>
                    WORK EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    placeholder="m.vance@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      borderRadius: "10px",
                      border: "1px solid var(--border-espresso-medium)",
                      backgroundColor: "#fff",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.95rem",
                      color: "var(--text-espresso)"
                    }}
                  />
                </div>
              </div>

              <div className="editorial-form-row" style={{ marginBottom: "1rem" }}>
                <div>
                  <label className="editorial-tag" style={{ display: "block", marginBottom: "0.4rem", fontSize: "0.72rem" }}>
                    ORGANIZATION
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Acme Global Inc"
                    value={formData.company}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      borderRadius: "10px",
                      border: "1px solid var(--border-espresso-medium)",
                      backgroundColor: "#fff",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.95rem",
                      color: "var(--text-espresso)"
                    }}
                  />
                </div>

                <div>
                  <label className="editorial-tag" style={{ display: "block", marginBottom: "0.4rem", fontSize: "0.72rem" }}>
                    PRIMARY INTEREST
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      borderRadius: "10px",
                      border: "1px solid var(--border-espresso-medium)",
                      backgroundColor: "#fff",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.95rem",
                      color: "var(--text-espresso)"
                    }}
                  >
                    <option value="AI & Intelligence">AI & Intelligence</option>
                    <option value="Product Engineering">Product Engineering</option>
                    <option value="Data Systems">Data Systems</option>
                    <option value="Cloud Infrastructure">Cloud Infrastructure</option>
                    <option value="Digital Strategy">Digital Strategy</option>
                    <option value="Security">Security</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: "1.75rem" }}>
                <label className="editorial-tag" style={{ display: "block", marginBottom: "0.4rem", fontSize: "0.72rem" }}>
                  PROJECT SUMMARY & GOALS
                </label>
                <textarea
                  rows="3"
                  name="message"
                  placeholder="Outline key system bottlenecks, scale goals, or required intelligence capabilities..."
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "0.85rem 1rem",
                    borderRadius: "10px",
                    border: "1px solid var(--border-espresso-medium)",
                    backgroundColor: "#fff",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.95rem",
                    color: "var(--text-espresso)"
                  }}
                ></textarea>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.78rem", color: "var(--text-espresso-dim)" }}>
                  <ShieldCheck size={16} color="var(--bg-terracotta)" />
                  Mutual NDA Protected
                </div>

                <button type="submit" className="pill-btn pill-btn-dark" style={{ width: "auto" }}>
                  <span>SUBMIT PROJECT BRIEF</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "2.5rem 1rem" }}>
            <div style={{ width: "64px", height: "64px", borderRadius: "50%", backgroundColor: "var(--accent-chartreuse)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem auto", border: "2px solid var(--bg-espresso)" }}>
              <CheckCircle2 size={32} color="var(--bg-espresso)" />
            </div>

            <h3 style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>
              Brief Received
            </h3>

            <p style={{ color: "var(--text-espresso-muted)", fontSize: "1.05rem", lineHeight: "1.7", maxWidth: "420px", margin: "0 auto 2rem auto" }}>
              Thank you, {formData.fullName || "Partner"}. A Senior Systems Partner will review your brief and contact you within 4 business hours.
            </p>

            <button className="pill-btn pill-btn-dark" onClick={() => { setSubmitted(false); onClose(); }}>
              <span>CLOSE WINDOW</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
