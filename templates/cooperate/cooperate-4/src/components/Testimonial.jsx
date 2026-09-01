import React from "react";
import { companyData } from "../data/companyData";
import { Quote } from "lucide-react";

export const Testimonial = () => {
  const { testimonial } = companyData;

  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="quote-icon-mark">“</div>

        <blockquote className="testimonial-quote">
          {testimonial.quote}
        </blockquote>

        <div className="testimonial-author-box">
          <img
            src={testimonial.avatar}
            alt={testimonial.author}
            className="author-avatar"
          />
          <div className="author-info">
            <div className="author-name">{testimonial.author}</div>
            <div className="author-role">
              {testimonial.title} — {testimonial.company}
            </div>
            <div style={{ fontSize: "0.75rem", color: "var(--text-dim)", marginTop: "2px" }}>
              {testimonial.metric}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
