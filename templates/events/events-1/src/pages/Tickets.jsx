import React from 'react';
import TicketCard from '../components/TicketCard';
import FAQAccordion from '../components/FAQAccordion';
import { ticketsData } from '../data/tickets';

export default function Tickets({ onOpenRegisterModal }) {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <span className="section-tag">LIMITED QUANTITIES</span>
          <h1 className="page-title">
            Pass Options & <span className="gradient-text">Pricing</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto' }}>
            Choose the conference pass that best aligns with your learning goals. All passes grant 3-day access.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="tickets-grid">
            {ticketsData.map((plan) => (
              <TicketCard
                key={plan.id}
                plan={plan}
                onSelectPlan={() => onOpenRegisterModal(plan)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'transparent' }}>
        <div className="container">
          <FAQAccordion />
        </div>
      </section>
    </div>
  );
}
