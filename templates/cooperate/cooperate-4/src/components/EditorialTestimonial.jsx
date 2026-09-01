import React from "react";

export const EditorialTestimonial = () => {
  return (
    <section className="screen-section" style={{ minHeight: "80vh" }}>
      <div className="editorial-container">
        <div className="mono-tag" style={{ marginBottom: "2rem" }}>
          <span className="mono-tag-accent">10 //</span> TESTIMONIAL
        </div>

        <blockquote className="editorial-testimonial-quote">
          “They helped us turn an ambitious idea into something the business could actually scale.”
        </blockquote>

        <div style={{ display: "flex", alignItems: "center", gap: "1.75rem", borderTop: "1px solid var(--grid-line)", paddingTop: "2rem" }}>
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
            alt="Arjun Mehta"
            style={{ width: "54px", height: "54px", borderRadius: "50%", objectFit: "cover", border: "1px solid var(--grid-line-strong)" }}
          />

          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: "700", color: "#ffffff" }}>
              Arjun Mehta
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--accent-electric)", letterSpacing: "0.1em", marginTop: "2px" }}>
              CHIEF DIGITAL OFFICER // NOVA GROUP
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
