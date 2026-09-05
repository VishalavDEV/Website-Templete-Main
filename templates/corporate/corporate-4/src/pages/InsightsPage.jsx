import React, { useState } from "react";
import { insightsData } from "../data/insightsData";
import { ArrowUpRight, Search, X } from "lucide-react";

export const InsightsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeArticle, setActiveArticle] = useState(null);

  const filteredInsights = insightsData.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ paddingTop: "calc(var(--nav-height) + 2rem)" }} className="bg-sand">
      {/* Page Hero Header */}
      <section className="editorial-section-sm">
        <div className="editorial-wrap">
          <div className="editorial-tag" style={{ color: "var(--bg-terracotta)", marginBottom: "1rem" }}>
            EXECUTIVE PERSPECTIVES & ESSAYS
          </div>
          <h1 className="hero-serif-title" style={{ maxWidth: "980px", marginBottom: "1.5rem" }}>
            Thought leadership at the intersection of AI, economics, and systems architecture.
          </h1>
          <p style={{ fontSize: "1.15rem", color: "var(--text-espresso-muted)", maxWidth: "720px", lineHeight: "1.75" }}>
            Authored directly by our Chief AI Officer, CTO, and Senior Enterprise Partners.
            Rigorous analysis without corporate marketing fluff.
          </p>

          {/* Search Input Bar */}
          <div style={{ marginTop: "2.5rem", maxWidth: "520px", position: "relative" }}>
            <input
              type="text"
              placeholder="Search essays by topic (e.g. AI, automation, cloud)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "0.9rem 1.25rem 0.9rem 3rem",
                borderRadius: "999px",
                border: "1px solid var(--border-espresso-medium)",
                backgroundColor: "#fff",
                fontFamily: "var(--font-sans)",
                fontSize: "0.95rem",
                color: "var(--text-espresso)"
              }}
            />
            <Search
              size={18}
              color="var(--text-espresso-dim)"
              style={{ position: "absolute", left: "1.25rem", top: "50%", transform: "translateY(-50%)" }}
            />
          </div>
        </div>
      </section>

      {/* Essays Gallery Grid */}
      <section className="editorial-section-sm" style={{ borderTop: "1px solid var(--border-espresso-thin)" }}>
        <div className="editorial-wrap">
          <div className="insights-cards-grid">
            {filteredInsights.map((article) => (
              <div
                key={article.id}
                className="insights-card-item"
                onClick={() => setActiveArticle(article)}
              >
                <div className="insights-image-wrapper">
                  <img
                    src={article.image}
                    alt={article.title}
                  />
                </div>

                <div style={{ padding: "1.75rem 1.5rem", display: "flex", flexDirection: "column", flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                    <span className="editorial-tag" style={{ color: "var(--bg-terracotta)" }}>
                      {article.category}
                    </span>
                    <span className="editorial-tag" style={{ color: "var(--text-espresso-dim)", fontSize: "0.7rem" }}>
                      {article.readTime}
                    </span>
                  </div>

                  <h2 style={{ fontSize: "1.45rem", lineHeight: "1.25", color: "var(--text-espresso)", marginBottom: "1rem" }}>
                    {article.title}
                  </h2>

                  <p style={{ fontSize: "0.95rem", color: "var(--text-espresso-muted)", lineHeight: "1.65", marginBottom: "1.5rem" }}>
                    {article.summary}
                  </p>

                  <div style={{ marginTop: "auto", paddingTop: "1.25rem", borderTop: "1px solid var(--border-espresso-thin)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span className="editorial-tag" style={{ color: "var(--text-espresso-dim)", fontSize: "0.7rem" }}>
                      {article.author} ({article.date})
                    </span>
                    <ArrowUpRight size={18} color="var(--bg-espresso)" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Article Detail Modal */}
      {activeArticle && (
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
            padding: "1.5rem"
          }}
          onClick={() => setActiveArticle(null)}
        >
          <div
            style={{
              backgroundColor: "var(--bg-sand-light)",
              color: "var(--text-espresso)",
              width: "100%",
              maxWidth: "760px",
              borderRadius: "24px",
              border: "2px solid var(--bg-espresso)",
              boxShadow: "16px 16px 0 var(--bg-terracotta)",
              padding: "3rem",
              position: "relative",
              maxHeight: "90vh",
              overflowY: "auto"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveArticle(null)}
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: "var(--text-espresso)"
              }}
              aria-label="Close article"
            >
              <X size={24} />
            </button>

            <div className="editorial-tag" style={{ color: "var(--bg-terracotta)", marginBottom: "1rem" }}>
              {activeArticle.category} // {activeArticle.readTime}
            </div>

            <h2 style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.5rem)", lineHeight: "1.15", marginBottom: "1rem", color: "var(--text-espresso)" }}>
              {activeArticle.title}
            </h2>

            <div style={{ display: "flex", gap: "1rem", color: "var(--text-espresso-dim)", fontSize: "0.85rem", marginBottom: "2rem", borderBottom: "1px solid var(--border-espresso-thin)", paddingBottom: "1rem" }}>
              <span>By {activeArticle.author} ({activeArticle.authorRole})</span>
              <span>•</span>
              <span>Published {activeArticle.date}</span>
            </div>

            <div style={{ borderRadius: "16px", overflow: "hidden", height: "260px", marginBottom: "2rem", border: "1px solid var(--border-espresso-thin)" }}>
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <h3 style={{ fontSize: "1.25rem", marginBottom: "0.75rem", color: "var(--bg-terracotta)" }}>
              Executive Briefing Synthesis
            </h3>

            <p style={{ color: "var(--text-espresso-muted)", fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "2rem" }}>
              {activeArticle.content}
            </p>

            <div style={{ background: "rgba(30, 22, 17, 0.04)", padding: "1.5rem", borderRadius: "14px", border: "1px solid var(--border-espresso-thin)", marginBottom: "2rem" }}>
              <div className="editorial-tag" style={{ color: "var(--text-espresso)", marginBottom: "0.75rem" }}>
                STRATEGIC ACTION ITEMS FOR BOARDS
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {activeArticle.keyTakeaways.map((item, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.92rem", color: "var(--text-espresso)" }}>
                    <span style={{ color: "var(--bg-terracotta)", fontWeight: "bold" }}>✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="pill-btn pill-btn-dark" onClick={() => setActiveArticle(null)} style={{ width: "100%", justifyContent: "center" }}>
              <span>CLOSE ESSAY</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
