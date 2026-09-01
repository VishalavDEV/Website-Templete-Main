import React, { useState } from "react";
import { companyData } from "../data/companyData";
import { Send, CheckCircle2, ShieldCheck, Mail, Phone, Globe } from "lucide-react";

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    service: "AI & Intelligence",
    timeline: "Immediate (< 1 month)",
    budget: "$100k - $250k",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ paddingTop: "calc(var(--nav-height) + 2rem)" }} className="bg-sand">
      {/* Page Hero */}
      <section className="editorial-section-sm">
        <div className="editorial-wrap">
          <div className="editorial-tag" style={{ color: "var(--bg-terracotta)", marginBottom: "1rem" }}>
            GLOBAL CONSULTATION & RFPS
          </div>
          <h1 className="hero-serif-title" style={{ maxWidth: "980px", marginBottom: "1.5rem" }}>
            Let's discuss your enterprise transformation.
          </h1>
          <p style={{ fontSize: "1.15rem", color: "var(--text-espresso-muted)", maxWidth: "750px", lineHeight: "1.75" }}>
            Connect directly with KINESIS GLOBAL's Senior Partners and Principal Systems Architects.
            All communications are protected under mutual enterprise non-disclosure agreements.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Office Directory */}
      <section className="editorial-section-sm" style={{ borderTop: "1px solid var(--border-espresso-thin)" }}>
        <div className="editorial-wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 0.7fr", gap: "4rem" }}>
            {/* Left Form */}
            <div
              style={{
                backgroundColor: "var(--bg-sand-light)",
                border: "2px solid var(--bg-espresso)",
                borderRadius: "24px",
                padding: "3rem",
                boxShadow: "12px 12px 0 var(--bg-terracotta)"
              }}
            >
              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="editorial-tag" style={{ color: "var(--bg-terracotta)", marginBottom: "0.5rem" }}>
                    TRANSMISSION FORM
                  </div>
                  <h2 style={{ fontSize: "2rem", marginBottom: "0.5rem", color: "var(--text-espresso)" }}>
                    Submit Project Brief / RFP
                  </h2>
                  <p style={{ color: "var(--text-espresso-muted)", fontSize: "0.95rem", marginBottom: "2rem" }}>
                    Complete the fields below and our technical advisory board will review strategic alignment.
                  </p>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "1.25rem" }}>
                    <div>
                      <label className="editorial-tag" style={{ display: "block", marginBottom: "0.4rem", fontSize: "0.72rem" }}>
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        placeholder="Katherine Hayes"
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
                        CORPORATE EMAIL *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="k.hayes@enterprise.com"
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

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "1.25rem" }}>
                    <div>
                      <label className="editorial-tag" style={{ display: "block", marginBottom: "0.4rem", fontSize: "0.72rem" }}>
                        ORGANIZATION NAME *
                      </label>
                      <input
                        type="text"
                        name="company"
                        required
                        placeholder="Global Financial Corp"
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
                        DIRECT PHONE
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+1 (555) 019-2834"
                        value={formData.phone}
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

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "1.25rem" }}>
                    <div>
                      <label className="editorial-tag" style={{ display: "block", marginBottom: "0.4rem", fontSize: "0.72rem" }}>
                        CAPABILITY OF INTEREST
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
                        <option value="AI & Intelligence">Autonomous AI & Intelligence</option>
                        <option value="Product Engineering">High-Throughput Product Engineering</option>
                        <option value="Cloud Infrastructure">Sovereign Multi-Cloud Infrastructure</option>
                        <option value="Data Systems">Real-Time Data Lakehouse Fabric</option>
                        <option value="Digital Strategy">Enterprise Digital Strategy</option>
                        <option value="Security">Zero-Trust & Kernel Security</option>
                      </select>
                    </div>

                    <div>
                      <label className="editorial-tag" style={{ display: "block", marginBottom: "0.4rem", fontSize: "0.72rem" }}>
                        ESTIMATED BUDGET
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
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
                        <option value="$100k - $250k">$100,000 - $250,000</option>
                        <option value="$250k - $500k">$250,000 - $500,000</option>
                        <option value="$500k - $1M+">$500,000 - $1,000,000+</option>
                        <option value="Enterprise Master Contract">Multi-Year Enterprise Master Agreement</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ marginBottom: "1.75rem" }}>
                    <label className="editorial-tag" style={{ display: "block", marginBottom: "0.4rem", fontSize: "0.72rem" }}>
                      BRIEF PROJECT SUMMARY & STRATEGIC PRIORITIES *
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      required
                      placeholder="Describe target system throughput, operational bottlenecks, legacy migrations, or AI goals..."
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

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem", color: "var(--text-espresso-dim)" }}>
                      <ShieldCheck size={18} color="var(--bg-terracotta)" />
                      <span>Enterprise Strict NDA & ISO27001 Protected</span>
                    </div>
                    <button type="submit" className="pill-btn pill-btn-dark">
                      <span>SUBMIT STRATEGIC BRIEF</span>
                      <Send size={16} />
                    </button>
                  </div>
                </form>
              ) : (
                <div style={{ textAlign: "center", padding: "3.5rem 1rem" }}>
                  <div style={{ width: "72px", height: "72px", borderRadius: "50%", backgroundColor: "var(--accent-chartreuse)", border: "2px solid var(--bg-espresso)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem auto" }}>
                    <CheckCircle2 size={42} color="var(--bg-espresso)" />
                  </div>
                  <h3 style={{ fontSize: "2rem", marginBottom: "0.75rem", color: "var(--text-espresso)" }}>
                    Engagement Request Received
                  </h3>
                  <p style={{ color: "var(--text-espresso-muted)", maxWidth: "480px", margin: "0 auto 2rem auto", fontSize: "1.05rem", lineHeight: "1.7" }}>
                    Thank you, {formData.fullName || "Partner"}. Your brief for {formData.company || "your organization"} has been routed to our Senior Practice Leads. We will respond within 4 business hours.
                  </p>
                  <button
                    className="pill-btn pill-btn-dark"
                    onClick={() => setSubmitted(false)}
                  >
                    <span>SUBMIT ANOTHER INQUIRY</span>
                  </button>
                </div>
              )}
            </div>

            {/* Right: Direct Contact & Global Offices */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <div
                style={{
                  backgroundColor: "var(--bg-sand-light)",
                  border: "2px solid var(--bg-espresso)",
                  borderRadius: "20px",
                  padding: "2.25rem",
                  boxShadow: "6px 6px 0 var(--bg-terracotta)"
                }}
              >
                <div className="editorial-tag" style={{ color: "var(--bg-terracotta)", marginBottom: "0.5rem" }}>
                  DIRECT ADVISORY
                </div>
                <h3 style={{ fontSize: "1.45rem", marginBottom: "1.25rem", color: "var(--text-espresso)" }}>
                  Executive Inquiries
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.95rem", color: "var(--text-espresso)" }}>
                    <Mail size={18} color="var(--bg-terracotta)" />
                    <a href="mailto:advisory@kinesisglobal.com" style={{ color: "inherit", textDecoration: "none", fontWeight: "600" }}>
                      advisory@kinesisglobal.com
                    </a>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.95rem", color: "var(--text-espresso)" }}>
                    <Phone size={18} color="var(--bg-terracotta)" />
                    <span>+1 (415) 890-2100 (HQ)</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.85rem", color: "var(--text-espresso-dim)", fontFamily: "var(--font-mono)" }}>
                    <Globe size={18} color="var(--bg-terracotta)" />
                    <span>PGP: 4E92 A01F 78BC 9901</span>
                  </div>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "var(--bg-sand-light)",
                  border: "2px solid var(--bg-espresso)",
                  borderRadius: "20px",
                  padding: "2.25rem"
                }}
              >
                <div className="editorial-tag" style={{ color: "var(--bg-terracotta)", marginBottom: "0.5rem" }}>
                  REGIONAL HUBS
                </div>
                <h3 style={{ fontSize: "1.45rem", marginBottom: "1.25rem", color: "var(--text-espresso)" }}>
                  Global Operating Centers
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {companyData.offices.map((off, idx) => (
                    <div key={idx} style={{ borderBottom: idx < companyData.offices.length - 1 ? "1px solid var(--border-espresso-thin)" : "none", paddingBottom: "1rem" }}>
                      <div style={{ fontFamily: "var(--font-serif)", fontWeight: "700", color: "var(--text-espresso)", fontSize: "1.1rem" }}>
                        {off.city}
                      </div>
                      <div style={{ fontSize: "0.88rem", color: "var(--text-espresso-muted)", marginTop: "2px" }}>
                        {off.address}
                      </div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--bg-terracotta)", marginTop: "4px" }}>
                        {off.region} • {off.timezone}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

