import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, BookOpen } from "lucide-react";
import { insightsData } from "../data/insightsData";

export const InsightsSection = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1.5rem" }}>
          <div>
            <div className="eyebrow">
              <span className="eyebrow-indicator"></span>
              THOUGHT LEADERSHIP & RESEARCH
            </div>
            <h2>Executive perspectives.</h2>
          </div>

          <Link to="/insights" className="btn-link-arrow">
            <span>Explore All Research Briefings</span>
            <span className="arrow">→</span>
          </Link>
        </div>

        <div className="insights-grid">
          {insightsData.map((article) => (
            <Link
              to="/insights"
              key={article.id}
              className="insight-card"
            >
              <div className="insight-img-wrap">
                <img src={article.image} alt={article.title} />
              </div>

              <div className="insight-body">
                <div className="insight-meta">
                  <span className="insight-category-tag">{article.category}</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="insight-title">{article.title}</h3>

                <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: "1.5", marginBottom: "1rem" }}>
                  {article.summary}
                </p>

                <div className="insight-footer">
                  <span style={{ fontSize: "0.78rem", color: "var(--text-dim)" }}>
                    {article.date}
                  </span>
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
