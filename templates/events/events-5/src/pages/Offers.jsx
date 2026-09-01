import React from 'react';
import { promotionalOffers } from '../data/offersData';
import { Link } from 'react-router-dom';
import { Sparkles, Tag, ArrowRight, Clock, ShieldCheck } from 'lucide-react';

export const Offers = () => {
  return (
    <div style={{ background: '#07090b', paddingBottom: '90px' }}>
      {/* Banner */}
      <section style={{
        padding: '90px 0 50px 0',
        background: 'radial-gradient(ellipse at top, #161c22 0%, #07090b 80%)',
        textAlign: 'center',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        <div className="container">
          <div className="badge-pill badge-green" style={{ marginBottom: '16px' }}>
            <Tag size={14} /> EXCLUSIVE SAVINGS
          </div>
          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            color: '#f5f7f8',
            marginBottom: '16px'
          }}>
            SPECIAL PROMOTIONS & VOUCHERS.
          </h1>
          <p style={{ color: '#b9c0c5', fontSize: '1.1rem', maxWidth: '720px', margin: '0 auto' }}>
            Unlock exclusive discounts for new customers, weekend detail specials, paint packages, and multi-vehicle garage bookings.
          </p>
        </div>
      </section>

      {/* Offers Cards Grid */}
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}>
            {promotionalOffers.map((offer) => (
              <div
                key={offer.id}
                className="glass-card"
                style={{
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: 'linear-gradient(145deg, #111417 0%, #0d1013 100%)',
                  border: '1px solid rgba(124, 255, 79, 0.3)',
                  position: 'relative'
                }}
              >
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '16px'
                  }}>
                    <span className="badge-pill badge-green">
                      {offer.badge}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#25bfff', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={12} /> {offer.validTill}
                    </span>
                  </div>

                  <h3 style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1.6rem',
                    color: '#f5f7f8',
                    marginBottom: '6px'
                  }}>
                    {offer.title}
                  </h3>

                  <div style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '2.5rem',
                    fontWeight: '900',
                    color: '#7cff4f',
                    marginBottom: '12px'
                  }}>
                    {offer.discount}
                  </div>

                  <p style={{ color: '#b9c0c5', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '24px' }}>
                    {offer.description}
                  </p>
                </div>

                <div>
                  <div style={{
                    background: '#07090b',
                    border: '1px dashed rgba(124, 255, 79, 0.4)',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '20px'
                  }}>
                    <span style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase' }}>Promo Code:</span>
                    <strong style={{ color: '#7cff4f', letterSpacing: '0.1em', fontFamily: "'Space Grotesk', sans-serif" }}>
                      {offer.code}
                    </strong>
                  </div>

                  <Link to="/booking" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    CLAIM THIS OFFER <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offers;
