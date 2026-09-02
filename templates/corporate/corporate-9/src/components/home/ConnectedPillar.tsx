import React from 'react';
import { ArrowRight, Database, Cable, RefreshCw, Check, Layers, Cpu, Server } from 'lucide-react';

export const ConnectedPillar: React.FC = () => {
  const integrations = [
    { name: 'ICE Encompass', type: 'Loan Origination System', status: 'Bi-directional Real-time Sync' },
    { name: 'Blend POS', type: 'Digital Application Platform', status: 'Instant Milestone & Doc Sync' },
    { name: 'Salesforce FSC', type: 'CRM & Customer Pipeline', status: 'Automated Activity Logging' },
    { name: 'MeridianLink', type: 'Consumer & Auto LOS', status: 'Underwriting Queue Trigger' },
    { name: 'Jack Henry / Symitar', type: 'Core Banking Engine', status: 'Account & Balance Ingestion' },
    { name: 'Fiserv / FIS', type: 'Core Banking & Servicing', status: 'Payment Schedule Sync' },
  ];

  return (
    <section id="connected" className="py-20 sm:py-28 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-gray-100 bg-[#FAFAFA]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* LEFT COLUMN: 6 INTEGRATION TILES */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {integrations.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs hover:border-gray-300 transition-all space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm text-[#191919]">{item.name}</span>
                  <span className="flex items-center gap-1 text-[11px] text-emerald-600 font-medium font-mono">
                    <Check className="w-3.5 h-3.5" /> Active
                  </span>
                </div>
                <div className="text-xs text-gray-500">{item.type}</div>
                <div className="text-[11px] font-mono text-gray-400 border-t border-gray-100 pt-1.5">
                  {item.status}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-4 bg-white rounded-xl border border-gray-200/80 flex items-center justify-between text-xs text-gray-600">
            <span className="flex items-center gap-2">
              <Server className="w-4 h-4 text-[#191919]" />
              Enterprise REST, GraphQL & Webhook Endpoints Available
            </span>
            <span className="font-mono text-emerald-700 font-medium">99.99% Uptime SLA</span>
          </div>
        </div>

        {/* RIGHT COLUMN: PILLAR EXPLANATION */}
        <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
          <div className="flex items-center gap-2 text-[#191919]/50 text-xs font-mono">
            <span>02</span>
            <span>/</span>
            <span className="uppercase tracking-widest font-semibold">CONNECTED</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#191919] leading-tight">
            Plugs directly into the systems your team already runs
          </h2>

          <p className="text-base text-[#191919]/75 font-normal leading-relaxed">
            Boomerang doesn’t live in an isolated silo. Our agents directly read from and write to your Loan Origination Systems, CRMs, document repositories, and core banking platforms.
          </p>

          <ul className="space-y-3 pt-2 text-sm text-[#191919]/80 font-normal">
            <li className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Zero Double-Entry:</strong> Borrower income updates, address verifications, and notes write instantly to the 1003 loan file.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Event-Driven Triggers:</strong> Automatically trigger borrower outreach when appraisals clear, rates drop, or conditions change.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Custom Enterprise Connectors:</strong> Proprietary in-house core systems integrated within days via secure SDKs.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
