import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Shield, Sparkles, Building2, TrendingDown, Clock, CheckCircle2, ChevronRight, ArrowRight, Layers, FileSpreadsheet, RefreshCw } from 'lucide-react';
import SectionHeading from '../../components/ui/SectionHeading';
import InteractiveSavingsCalculator from '../../components/travel/InteractiveSavingsCalculator';

interface CorporateTravelProps {
  onOpenConsultation: () => void;
}

export default function CorporateTravel({ onOpenConsultation }: CorporateTravelProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "How does Aurelia integrate with our existing ERP and expense systems?",
      a: "Aurelia features bi-directional direct API connectors for SAP Concur, Expensify, Workday, Coupa, and NetSuite. Flight, hotel, and ground travel receipts are automatically parsed, categorized, and reconciled directly against your corporate cost centers in real time."
    },
    {
      q: "What average cost reduction can an organization with $3M annual travel expect?",
      a: "Based on 1,500+ client benchmarks, enterprises typically achieve between 24% to 32% net savings within the first 180 days. This is achieved through preferential GDS rate tiers, automated in-policy booking enforcement, route consolidation, and unused ticket credit recovery."
    },
    {
      q: "How quickly can our corporate travel program transition to Aurelia?",
      a: "Our standard enterprise onboarding is completed within 14 business days. This includes policy configuration, SSO employee provisioning, VIP profile synchronization, and full ERP expense mapping."
    },
    {
      q: "What level of human support is provided to our employees during travel disruptions?",
      a: "Every corporate client is assigned a dedicated mobility desk with 24/7 coverage. Average hold times are under 90 seconds, and our travel directors proactively re-book disrupted travelers before public airport customer service lines even form."
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-[#FBF9F5]">
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-[#0A261F] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#165042] text-[#DFBA58] text-xs font-semibold uppercase tracking-widest border border-[#C29B38]/30">
              Enterprise Mobility Program
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-medium tracking-tight text-white leading-[1.1]">
              Corporate Travel Management Engineered for Scale.
            </h1>
            <p className="text-base sm:text-xl text-[#D8C3A8]/90 leading-relaxed font-light">
              Transform decentralized booking chaos into a unified, cost-disciplined corporate travel machine that safeguards your people and cuts bottom-line spend.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C29B38] text-[#0E1412] text-xs font-bold uppercase tracking-wider hover:bg-[#DFBA58] transition-colors cursor-pointer"
              >
                <span>Request Enterprise Program Review</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Pillars */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Architecture"
          title="The Four Pillars of Aurelia Corporate Travel"
          subtitle="A comprehensive methodology designed to balance executive flexibility with CFO budget control."
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-[#D8C3A8]/60 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#0F382E]/10 text-[#0F382E] flex items-center justify-center font-serif text-2xl font-bold">
              01
            </div>
            <h3 className="font-serif text-xl font-semibold text-[#0E1412]">Dynamic Rate Capture</h3>
            <p className="text-xs text-[#62756D] leading-relaxed">
              Consolidated corporate volume rate negotiation across global carrier alliances (Star Alliance, Oneworld, SkyTeam) and 12,000+ luxury hotels.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#D8C3A8]/60 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#0F382E]/10 text-[#0F382E] flex items-center justify-center font-serif text-2xl font-bold">
              02
            </div>
            <h3 className="font-serif text-xl font-semibold text-[#0E1412]">Automated Policy Guardrails</h3>
            <p className="text-xs text-[#62756D] leading-relaxed">
              Real-time in-policy enforcement during booking. Eliminate out-of-policy cabin upgrades and rogue unapproved bookings automatically.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#D8C3A8]/60 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#0F382E]/10 text-[#0F382E] flex items-center justify-center font-serif text-2xl font-bold">
              03
            </div>
            <h3 className="font-serif text-xl font-semibold text-[#0E1412]">24/7 Duty of Care Tracking</h3>
            <p className="text-xs text-[#62756D] leading-relaxed">
              Live GPS flight and hotel tracking. In the event of civil emergencies or severe weather, your travelers are contacted and protected immediately.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#D8C3A8]/60 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#0F382E]/10 text-[#0F382E] flex items-center justify-center font-serif text-2xl font-bold">
              04
            </div>
            <h3 className="font-serif text-xl font-semibold text-[#0E1412]">ERP Expense Synchronization</h3>
            <p className="text-xs text-[#62756D] leading-relaxed">
              Automated invoice matching, virtual corporate card issuance, and zero-touch expense reconciliation with SAP, NetSuite, and Workday.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Savings Calculator Embed */}
      <section className="py-16 bg-[#F8F5EE] border-y border-[#D8C3A8]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InteractiveSavingsCalculator onOpenConsultation={onOpenConsultation} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Advisory FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything procurement officers and corporate travel managers need to know about partnering with Aurelia."
          align="center"
        />

        <div className="space-y-4 mt-8">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-[#D8C3A8]/60 overflow-hidden"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FBF9F5]"
              >
                <span className="font-serif text-lg font-semibold text-[#0E1412]">
                  {faq.q}
                </span>
                <span className="text-sm font-bold text-[#0F382E] flex-shrink-0">
                  {activeFaq === idx ? '−' : '+'}
                </span>
              </button>
              {activeFaq === idx && (
                <div className="px-6 pb-6 text-xs sm:text-sm text-[#62756D] leading-relaxed border-t border-[#D8C3A8]/30 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
