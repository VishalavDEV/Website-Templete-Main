import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="pt-28 pb-16 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
          <Link to="/" className="hover:text-slate-300">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-blue-400">Privacy Policy</span>
        </nav>

        <div className="mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase mb-3">
            <ShieldCheck className="w-3.5 h-3.5" /> Compliance &amp; Governance
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            Straventa Privacy Policy
          </h1>
          <p className="text-xs text-slate-400 font-mono">Last Updated: October 24, 2025 · Effective Date: January 1, 2025</p>
        </div>

        <div className="prose prose-invert max-w-none text-slate-300 space-y-8 text-sm sm:text-base leading-relaxed bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-xl">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Executive Summary &amp; Scope</h2>
            <p>
              Straventa Inc. ("Straventa", "we", "our", or "us") is dedicated to protecting the confidentiality, integrity, and availability of personal and proprietary data processed across our enterprise digital transformation services, consulting practices, cloud systems, and website interfaces.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Information Collection &amp; Categories</h2>
            <p>We collect information in the following circumstances:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
              <li><strong>Direct Interactions:</strong> Contact inquiries, job applications, RFP submissions, and newsletter signups.</li>
              <li><strong>Client Engagements:</strong> Metadata, authorization credentials, and technical telemetry under contractual Master Service Agreements (MSAs).</li>
              <li><strong>Automated Telemetry:</strong> Log files, browser user-agents, IP addresses, and cookie identifiers for site security and load balancing.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Data Processing &amp; Purpose</h2>
            <p>
              Data is processed strictly for enterprise service execution, technical troubleshooting, legal compliance (e.g. GDPR, CCPA/CPRA, HIPAA-ready workflows), and candidate evaluation. We do not sell or monetize personal or customer telemetry to third-party ad networks.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Security Safeguards</h2>
            <p>
              We maintain SOC2 Type II compliance, TLS 1.3 in-transit encryption, AES-256 at-rest storage encryption, least-privilege role-based access control (RBAC), and continuous vulnerability monitoring.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Contact Our Data Protection Officer (DPO)</h2>
            <p>
              For privacy inquiries or rights enforcement under GDPR / CCPA, contact our privacy team at <a href="mailto:privacy@straventa.com" className="text-blue-400 underline">privacy@straventa.com</a>.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
};
