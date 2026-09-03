import React from 'react';
import { Check, X, Ticket } from 'lucide-react';

export default function TicketCard({ plan, onSelectPlan }) {
  return (
    <div className={`ticket-card ${plan.popular ? 'popular' : ''}`}>
      {plan.popular && <div className="ticket-pop-badge">{plan.badge}</div>}

      <div style={{ textAlign: 'center', marginBottom: '1.5rem', paddingBottom: '1.25rem', borderBottom: '1px solid var(--border)' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '0.05em', color: 'var(--text-main)', marginBottom: '0.75rem' }}>
          {plan.name}
        </h3>
        <div className="ticket-price-wrap">
          <span className="ticket-price">{plan.formattedPrice}</span>
          <span style={{ fontSize: '1rem', color: 'var(--text-dim)', textDecoration: 'line-through' }}>
            {plan.originalPrice}
          </span>
        </div>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
          {plan.tagline}
        </p>
      </div>

      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem', flexGrow: 1 }}>
        {plan.features.map((feat, idx) => (
          <li
            key={idx}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              fontSize: '0.9rem',
              color: feat.included ? 'var(--text-main)' : 'var(--text-dim)',
              opacity: feat.included ? 1 : 0.6
            }}
          >
            {feat.included ? (
              <Check size={18} style={{ color: 'var(--secondary)' }} />
            ) : (
              <X size={18} style={{ color: '#ef4444' }} />
            )}
            <span>{feat.text}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => onSelectPlan(plan)}
        className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'}`}
        style={{ width: '100%' }}
      >
        <Ticket size={18} /> GET TICKET ({plan.formattedPrice})
      </button>
    </div>
  );
}
