import React from 'react';
import { Link } from 'react-router-dom';

export const Privacy: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-[#f8f7f4] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-[#121316]">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-lime-700 font-bold block">
          LEGAL // PRIVACY
        </span>
        <h1 className="text-4xl sm:text-6xl font-serif font-black uppercase tracking-tight">
          PRIVACY POLICY
        </h1>
        <p className="font-mono text-xs text-gray-500 uppercase">EFFECTIVE DATE: AUGUST 2026</p>

        <div className="space-y-6 text-sm font-sans text-gray-700 leading-relaxed border-t border-black/10 pt-8">
          <p>
            At VANTA FORM, we hold client data confidentiality to the highest executive standard. This Privacy Policy outlines our operational parameters regarding data collection, encryption, and client telemetry.
          </p>

          <h2 className="text-xl font-serif font-bold text-[#121316] uppercase pt-4">1. DATA COLLECTION</h2>
          <p>
            We collect information submitted directly through our project inquiry forms, careers portal, and newsletter subscriptions. This includes business names, executive contact emails, project budgets, and technical parameters.
          </p>

          <h2 className="text-xl font-serif font-bold text-[#121316] uppercase pt-4">2. USE OF DATA</h2>
          <p>
            Information collected is utilized strictly to evaluate prospective client engagements, deliver custom technical proposals, execute NDA agreements, and optimize website telemetry.
          </p>

          <h2 className="text-xl font-serif font-bold text-[#121316] uppercase pt-4">3. CONFIDENTIALITY & NON-DISCLOSURE</h2>
          <p>
            All submitted project details are treated under strict professional secrecy. We never sell, lease, or distribute prospective client data to third-party advertisers.
          </p>

          <div className="pt-8">
            <Link to="/" className="font-mono text-xs uppercase font-bold text-lime-700 underline">
              ← RETURN TO HOME
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
