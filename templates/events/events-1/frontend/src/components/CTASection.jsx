import React from 'react';
import { Ticket, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTASection({ onOpenRegisterModal }) {
  return (
    <section className="section" style={{ background: 'transparent' }}>
      <div className="container">
        <div className="cta-banner">
          <span className="badge badge-cyan" style={{ marginBottom: '1rem' }}>
            Limited Seats Available
          </span>
          <h2 className="cta-title">
            Ready to shape the future of <span className="gradient-text">technology?</span>
          </h2>
          <p className="cta-desc">
            Join 5,000+ tech leaders, software developers, and visionaries in Chennai, India for 3 unforgettable days.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => onOpenRegisterModal()}
              className="btn btn-primary btn-lg"
            >
              <Ticket size={20} /> Register Pass Now
            </button>
            <Link to="/schedule" className="btn btn-outline btn-lg">
              <Calendar size={20} /> View Full Schedule
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
