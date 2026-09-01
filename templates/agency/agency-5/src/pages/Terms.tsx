import React from 'react';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Badge } from '../components/ui/Badge';

export const Terms: React.FC = () => {
  return (
    <div className="py-12 max-w-4xl mx-auto px-6 md:px-12 space-y-12">
      <Breadcrumb items={[{ label: 'Terms of Service' }]} />

      <div className="space-y-4">
        <Badge variant="accent">LEGAL AGREEMENT</Badge>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[var(--text-color)] font-display">
          TERMS OF SERVICE & SPRINT GOVERNANCE.
        </h1>
        <p className="text-xs font-mono text-[var(--secondary-color)]">
          LAST UPDATED: AUGUST 2026 · APPLICABLE GLOBALLY
        </p>
      </div>

      <div className="space-y-8 text-base text-[var(--secondary-color)] leading-relaxed font-light">
        <section className="space-y-3">
          <h2 className="text-xl font-bold uppercase text-[var(--text-color)] font-display">1. Engagement Terms & Deliverables</h2>
          <p>
            All agency engagements are governed by signed Statements of Work (SOW). Project deliverables, milestones, and timelines are executed under bi-weekly agile sprint frameworks with continuous staging reviews.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold uppercase text-[var(--text-color)] font-display">2. Intellectual Property Transfer</h2>
          <p>
            Upon full settlement of project sprint invoices, 100% of custom design assets, Figma token systems, code repositories, and WebGL shader logic become the exclusive intellectual property of the client organization without ongoing royalty obligations.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold uppercase text-[var(--text-color)] font-display">3. Payment & SLA Policy</h2>
          <p>
            Invoices are payable within 14 calendar days. Post-launch SLA support is provided according to the selected plan tier (Starter: 14 days, Growth: 30 days, Signature: Annual SLA).
          </p>
        </section>
      </div>
    </div>
  );
};
