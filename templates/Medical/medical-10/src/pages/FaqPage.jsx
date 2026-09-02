import React from "react";
import PageTransition from "../components/PageTransition";
import FaqAccordion from "../components/FaqAccordion";
import { faqsData } from "../data/faqsData";

export default function FaqPage() {
  return (
    <PageTransition>
      <section className="relative pt-32 pb-16 border-b border-white/10 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            Help Center & Knowledge Base
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto font-light">
            Find instant answers regarding appointments, insurance coverage, lab diagnostics, and emergency procedures.
          </p>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion items={faqsData} allowSearch={true} />
        </div>
      </section>
    </PageTransition>
  );
}
