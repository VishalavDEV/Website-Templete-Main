import React from 'react';
import { Check, Sparkles, Ticket } from 'lucide-react';

export default function TicketCard({ pass, onSelect }) {
  return (
    <div className={`ticket-card ${pass.isPopular ? 'popular' : ''}`}>
      {pass.isPopular && (
        <div className="ticket-badge">
          <Sparkles size={12} style={{ display: 'inline', marginRight: '4px' }} />
          {pass.badge || 'MOST EXCLUSIVE'}
        </div>
      )}

      <h3 className="ticket-name">{pass.name}</h3>

      <div className="ticket-price">
        ₹{pass.price.toLocaleString('en-IN')}
        <span> / PERSON</span>
      </div>

      <ul className="ticket-features">
        {pass.features.map((feature, idx) => (
          <li key={idx} className="ticket-feature-item">
            <Check size={18} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={pass.isPopular ? 'btn-primary' : 'btn-secondary'}
        style={{ width: '100%', marginTop: 'auto' }}
        onClick={() => onSelect(pass)}
      >
        <Ticket size={16} /> BUY {pass.name}
      </button>
    </div>
  );
}
