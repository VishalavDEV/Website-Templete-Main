import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Mail, MapPin, Clock, ChevronDown, MessageSquare, ShieldCheck, History } from 'lucide-react';
import { ContactWizard } from '../components/ContactWizard';
import { audioService } from '../utils/audio';

interface ContactPageProps {
  onViewHistory: () => void;
  onNavigateHome: () => void;
}

const faqs = [
  {
    q: 'How quickly can Horizon begin our sprint?',
    a: 'We evaluate briefs within 24 hours. Because we deliberately cap active client engagements to 4 per quarter, typical sprint onboarding begins within 2 to 3 weeks of scope confirmation.'
  },
  {
    q: 'Do you collaborate with internal engineering teams?',
    a: 'Yes. We frequently embed directly with client engineering teams, delivering clean, fully typed React/TypeScript component systems, Tailwind tokens, and GLSL shaders with comprehensive documentation.'
  },
  {
    q: 'What is your typical project investment?',
    a: 'Our comprehensive branding and creative engineering sprints typically start at $35,000, with enterprise product transformations ranging between $75,000 and $250,000+ depending on velocity and deliverables.'
  },
  {
    q: 'Can you work across different global time zones?',
    a: 'With active partners across San Francisco (PST), London (GMT), and Tokyo (JST), our team maintains continuous 24-hour asynchronous development cycles and seamless overlap for client reviews.'
  }
];

export function ContactPage({ onViewHistory, onNavigateHome }: ContactPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    audioService.playClick();
    setOpenFaqIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <div className="pt-32 pb-24 w-full">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-violet-400 uppercase tracking-widest px-3 py-1 rounded-full bg-violet-950/50 border border-violet-800/40">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Initiate Partnership</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Let's build something extraordinary.
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-serif">
            Fill out our interactive project wizard below or email our partner desk directly. We evaluate all briefs within 24 hours.
          </p>

          <div className="pt-2">
            <button
              onClick={() => {
                audioService.playClick();
                onViewHistory();
              }}
              className="inline-flex items-center gap-2 text-xs font-mono text-violet-400 hover:text-violet-300 underline underline-offset-4 transition-colors"
            >
              <History className="w-3.5 h-3.5" />
              <span>View Previously Submitted Local Inquiries</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <ContactWizard onViewHistory={onViewHistory} onNavigateHome={onNavigateHome} />
      </section>

      {/* Direct Inboxes & SLA Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#11131E] border border-white/8 space-y-3 font-mono">
            <div className="flex items-center gap-2 text-violet-400">
              <Mail className="w-4 h-4" />
              <span className="text-xs uppercase font-bold">New Business</span>
            </div>
            <a
              href="mailto:partners@horizonstudio.design"
              className="text-sm font-bold text-white hover:text-violet-300 transition-colors block"
            >
              partners@horizonstudio.design
            </a>
            <p className="text-xs text-gray-400">For RFPs, sprint inquiries, and studio partnerships.</p>
          </div>

          <div className="p-6 rounded-2xl bg-[#11131E] border border-white/8 space-y-3 font-mono">
            <div className="flex items-center gap-2 text-cyan-400">
              <Clock className="w-4 h-4" />
              <span className="text-xs uppercase font-bold">Response SLA</span>
            </div>
            <span className="text-sm font-bold text-white block">Within 24 Hours</span>
            <p className="text-xs text-gray-400">Every submission is directly reviewed by senior partners.</p>
          </div>

          <div className="p-6 rounded-2xl bg-[#11131E] border border-white/8 space-y-3 font-mono">
            <div className="flex items-center gap-2 text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs uppercase font-bold">Confidentiality</span>
            </div>
            <span className="text-sm font-bold text-white block">Standard Mutual NDA</span>
            <p className="text-xs text-gray-400">We sign standard NDAs prior to deep proprietary disclosures.</p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <span className="font-mono text-xs text-violet-400 uppercase tracking-widest block mb-2">
            Common Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Everything you need to know about working with Horizon.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#11131E] border border-white/8 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
                >
                  <span className="text-base font-semibold text-white">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-violet-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5 font-mono">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
