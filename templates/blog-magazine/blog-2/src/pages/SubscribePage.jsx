import React from 'react';
import { Mail, Check, Shield, BookOpen, Clock, Sparkles } from 'lucide-react';
import NewsletterBox from '../components/common/NewsletterBox';

export function SubscribePage() {
  return (
    <div className="subscribe-page-view" style={{ padding: '3.5rem 0 6rem' }}>
      <div className="container" style={{ maxWidth: '880px' }}>
        {/* Intro */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            <span>WEEKLY EDITORIAL DISPATCH</span>
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.6rem, 5.5vw, 3.8rem)',
              color: 'var(--text-ink)',
              margin: '0.75rem 0 1.25rem'
            }}
          >
            The Weekly Element
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: '1.3rem',
              lineHeight: 1.55,
              color: 'var(--text-ink-secondary)',
              maxWidth: '680px',
              margin: '0 auto'
            }}
          >
            A small selection of unusual stories, overlooked discoveries, and the people behind them. Delivered to your inbox every Thursday morning.
          </p>
        </div>

        {/* Master Interactive Newsletter Box */}
        <div style={{ marginBottom: '4rem' }}>
          <NewsletterBox variant="standard" />
        </div>

        {/* Benefits Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          <div style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-light)', borderRadius: '4px', padding: '1.75rem' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(217, 108, 74, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <BookOpen size={18} color="var(--accent-terracotta)" />
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--text-ink)', marginBottom: '0.5rem' }}>
              Curated Long-Reads
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-ink-secondary)', lineHeight: 1.5 }}>
              One deep-dive investigative feature per edition, complete with verified museum provenance and marginalia notes.
            </p>
          </div>

          <div style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-light)', borderRadius: '4px', padding: '1.75rem' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(255, 176, 90, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <Clock size={18} color="var(--accent-amber)" />
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--text-ink)', marginBottom: '0.5rem' }}>
              Thursday Morning Delivery
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-ink-secondary)', lineHeight: 1.5 }}>
              Published weekly at 7:00 AM UTC. Formatted for calm, uncluttered reading over morning coffee.
            </p>
          </div>

          <div style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-light)', borderRadius: '4px', padding: '1.75rem' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(125, 138, 114, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <Shield size={18} color="var(--accent-sage)" />
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--text-ink)', marginBottom: '0.5rem' }}>
              Zero Advertising Or Tracking
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-ink-secondary)', lineHeight: 1.5 }}>
              We respect your attention. No sponsored advertorials, no tracking pixels, and instant one-click unsubscription.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscribePage;
