import React from 'react';
import { Check, X, Ticket } from 'lucide-react';

export default function PricingCard({ plan, onSelectPlan }) {
  return (
    <div className={`ticket-card ${plan.popular ? 'popular' : ''}`}>
      {plan.popular && <div className="ticket-pop-badge">{plan.badge}</div>}

      <div className="ticket-header">
        <div className="ticket-name">{plan.name}</div>
        <div className="ticket-price-wrap">
          <span className="ticket-price">{plan.price}</span>
          <span className="ticket-original-price">{plan.originalPrice}</span>
        </div>
        <div className="ticket-tagline">{plan.tagline}</div>
      </div>

      <ul className="ticket-features">
        {plan.features.map((feat, idx) => (
          <li
            key={idx}
            className={`feature-item ${feat.included ? 'included' : 'excluded'}`}
          >
            {feat.included ? <Check size={18} /> : <X size={18} />}
            <span>{feat.text}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => onSelectPlan(plan)}
        className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'}`}
        style={{ width: '100%' }}
      >
        <Ticket size={18} /> Select {plan.name}
      </button>
    </div>
  );
}
