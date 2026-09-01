import React from 'react';
import FAQ from '../components/FAQ';
import { Link } from 'react-router-dom';

export default function FAQPage() {
  return (
    <div style={{ paddingTop: '120px', position: 'relative', zIndex: 10 }}>
      <section className="section-padding" style={{ textAlign: 'center', background: 'radial-gradient(circle at top, #1E1705 0%, #050505 80%)' }}>
        <div className="container">
          <span className="section-subtitle">HELP & INFORMATION</span>
          <h1 className="section-title">FREQUENTLY ASKED QUESTIONS</h1>
          <p className="section-desc">Everything you need to know about tickets, gate entry, age restrictions, and venue facilities.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <FAQ />

          <div style={{ textAlign: 'center', marginTop: '60px', padding: '40px', background: 'var(--bg-card)', border: 'var(--border-gold)', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', color: '#FFF', fontSize: '1.6rem', marginBottom: '10px' }}>
              STILL HAVE QUESTIONS?
            </h3>
            <p style={{ color: 'var(--text-gray)', marginBottom: '24px' }}>
              Our support team is available to assist you with special requests, group bookings, or venue accessibility.
            </p>
            <Link to="/contact" className="btn-primary">
              REACH OUT TO SUPPORT
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
