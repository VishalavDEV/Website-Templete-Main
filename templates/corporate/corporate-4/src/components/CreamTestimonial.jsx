import React from "react";

export const CreamTestimonial = () => {
  return (
    <section className="editorial-section bg-cream">
      <div className="editorial-wrap" style={{ maxWidth: "1150px" }}>
        <div className="editorial-tag" style={{ color: "var(--bg-terracotta)", marginBottom: "2rem" }}>
          CLIENT VOICES
        </div>

        <blockquote className="statement-serif-quote" style={{ color: "var(--text-espresso)", marginBottom: "3.5rem" }}>
          “They gave us the clarity to move faster and the technology to move further.”
        </blockquote>

        <div style={{ display: "flex", alignItems: "center", gap: "1.75rem", borderTop: "2px solid var(--bg-espresso)", paddingTop: "2rem" }}>
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
            alt="Arjun Mehta"
            style={{ width: "60px", height: "60px", borderRadius: "50%", objectFit: "cover", border: "2px solid var(--bg-espresso)" }}
          />

          <div>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.35rem", fontWeight: "700", color: "var(--text-espresso)" }}>
              Arjun Mehta
            </div>
            <div className="editorial-tag" style={{ color: "var(--text-espresso-dim)", marginTop: "2px" }}>
              CHIEF TECHNOLOGY OFFICER // NOVA GROUP
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
