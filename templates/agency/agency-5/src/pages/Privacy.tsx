import React from 'react';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Badge } from '../components/ui/Badge';

export const Privacy: React.FC = () => {
  return (
    <div className="py-12 max-w-4xl mx-auto px-6 md:px-12 space-y-12">
      <Breadcrumb items={[{ label: 'Privacy Policy' }]} />

      <div className="space-y-4">
        <Badge variant="accent">LEGAL & DATA COMPLIANCE</Badge>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[var(--text-color)] font-display">
          PRIVACY POLICY & DATA GOVERNANCE.
        </h1>
        <p className="text-xs font-mono text-[var(--secondary-color)]">
          LAST UPDATED: AUGUST 2026 · APPLICABLE GLOBALLY
        </p>
      </div>

      <div className="space-y-8 text-base text-[var(--secondary-color)] leading-relaxed font-light">
        <section className="space-y-3">
          <h2 className="text-xl font-bold uppercase text-[var(--text-color)] font-display">1. Information Collection</h2>
          <p>
            Byteora Agency Inc. ("Byteora", "we", "our") respects your privacy. When you submit project inquiries or subscribe to our journal, we collect only necessary business details (name, work email, company name, project brief). We never sell, trade, or share your contact data with third-party advertising brokers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold uppercase text-[var(--text-color)] font-display">2. Client Data Security & IP Protection</h2>
          <p>
            All client briefs, proprietary codebases, and brand strategy documents shared during active engagements are stored under strict NDA protocols with zero external access. We maintain SOC2 Type II and GDPR data compliance.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold uppercase text-[var(--text-color)] font-display">3. Cookies & Local Storage</h2>
          <p>
            We use zero invasive tracking cookies. Local Storage is utilized solely to persist your visual theme preference (Light / Dark mode) across browser sessions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold uppercase text-[var(--text-color)] font-display">4. Contact Compliance Officer</h2>
          <p>
            For data access or deletion requests under GDPR / CCPA, email our privacy compliance office at <a href="mailto:privacy@byteora.agency" className="text-[var(--accent-color)] underline">privacy@byteora.agency</a>.
          </p>
        </section>
      </div>
    </div>
  );
};
