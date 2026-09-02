import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import './Newsletter.css';

export default function Newsletter({
  tag = "STAY AHEAD",
  title = "Get the latest enterprise technology insights",
  description = "Join 40,000+ engineering leaders and CTOs who read our bi-weekly architecture breakdowns and strategic briefs."
}) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="luxury-newsletter-section section-tight">
      <div className="container">
        <div className="luxury-newsletter-card">
          <div className="news-ambient-glow" />
          <div className="news-content-box">
            <span className="section-tag">{tag}</span>
            <h3 className="news-card-title">{title}</h3>
            <p className="news-card-desc">{description}</p>

            {subscribed ? (
              <div className="news-success-pill">
                <CheckCircle2 size={20} />
                <span>Thank you! You have successfully subscribed to NEXORA Insights.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="news-single-line-form">
                <input
                  type="email"
                  required
                  placeholder="Enter your enterprise work email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="news-line-input"
                />
                <button type="submit" className="news-line-btn">
                  <span>Subscribe</span>
                  <ArrowUpRight size={16} />
                </button>
              </form>
            )}
            <p className="news-privacy-sub">Strict confidentiality. Zero spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
