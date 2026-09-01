import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { ScrollReveal } from '../common/ScrollReveal';

export const JournalNewsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { showToast } = useShop();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      showToast('Welcome to The AUREL Journal');
      setEmail('');
    }
  };

  return (
    <div>
      {/* 30 — EDITORIAL CAMPAIGN */}
      <section
        style={{
          position: 'relative',
          padding: '140px 0',
          backgroundImage: 'url("https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#FFFFFF',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(23, 22, 20, 0.45)',
          }}
        />

        <div className="container-custom" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <ScrollReveal variant="fade-up">
            <span
              style={{
                fontSize: '11px',
                letterSpacing: '0.22em',
                fontWeight: '600',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '16px',
              }}
            >
              CAMPAIGN EDITION
            </span>

            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(36px, 6vw, 72px)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                marginBottom: '20px',
                color: '#FFFFFF',
              }}
            >
              MADE FOR THE EVERYDAY.
            </h2>

            <p
              style={{
                fontSize: '16px',
                maxWidth: '440px',
                margin: '0 auto 36px auto',
                lineHeight: '1.6',
                opacity: 0.9,
              }}
            >
              Thoughtful clothing for modern routines. Tailored to adapt from morning light to evening repose.
            </p>

            <Link to="/shop" className="btn-aurel-primary" data-cursor="→" style={{ backgroundColor: '#FFFFFF', color: '#171614', borderColor: '#FFFFFF' }}>
              DISCOVER MORE <ArrowRight size={15} className="btn-arrow" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* 31 — NEWSLETTER / THE AUREL JOURNAL */}
      <section style={{ padding: '100px 0', backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container-custom" style={{ maxWidth: '680px', textAlign: 'center' }}>
          <span
            style={{
              fontSize: '11px',
              letterSpacing: '0.22em',
              fontWeight: '600',
              color: 'var(--accent-bronze)',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '12px',
            }}
          >
            THE AUREL JOURNAL
          </span>

          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(28px, 4vw, 42px)',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            STAY INFORMED
          </h2>

          <p
            style={{
              fontSize: '14px',
              color: 'var(--text-secondary)',
              marginBottom: '40px',
              lineHeight: '1.6',
            }}
          >
            New collections. Style notes. Private releases. Delivered quietly to your inbox once a fortnight.
          </p>

          {subscribed ? (
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '16px 28px',
                backgroundColor: 'var(--bg-primary)',
                border: '1px solid var(--border-medium)',
                color: 'var(--accent-olive)',
                fontSize: '13px',
                letterSpacing: '0.08em',
              }}
            >
              <Check size={18} /> THANK YOU FOR SUBSCRIBING TO THE JOURNAL
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  flex: '1 1 280px',
                  padding: '14px 20px',
                  fontSize: '13px',
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-medium)',
                  color: 'var(--text-primary)',
                  outline: 'none',
                  fontFamily: 'inherit',
                }}
              />
              <button type="submit" className="btn-aurel-primary">
                JOIN THE JOURNAL <ArrowRight size={15} />
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
