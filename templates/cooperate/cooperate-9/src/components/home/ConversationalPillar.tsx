import React, { useState } from 'react';
import { ArrowRight, MessageSquare, Mic, Mail, Sparkles, UserCheck, Clock, Layers } from 'lucide-react';

export const ConversationalPillar: React.FC = () => {
  const [activeChannel, setActiveChannel] = useState<'all' | 'sms' | 'voice' | 'email'>('all');

  const capabilities = [
    {
      title: 'Context Retention Across Weeks & Months',
      description: 'Unlike simple rule-based chatbots, Boomerang agents remember previous conversations, uploaded documents, borrower life events, and specific rate conditions over extended loan cycles.',
      tag: 'Multi-Turn Memory',
      metric: '60+ Touchpoints Retained',
    },
    {
      title: 'Real-Time Voice, SMS, and Email Continuity',
      description: 'A borrower can start an inquiry over voice, receive automated document upload links via SMS, and review their formal disclosures via email with zero context loss.',
      tag: 'Omnichannel Sync',
      metric: '< 400ms Voice Latency',
    },
    {
      title: 'Adaptive Tone & Empathy Guardrails',
      description: 'Trained specifically for financial services, agents maintain a warm, professional, and reassuring tone during high-stakes moments like appraisal delays or closing verifications.',
      tag: 'Domain-Specific Tuning',
      metric: '98.7% CSAT Score',
    },
    {
      title: 'Autonomous Loan Officer Handoff',
      description: 'When a situation requires human judgment or licensed advisory, Boomerang summarizes the entire interaction history and routes seamlessly to the assigned loan officer.',
      tag: 'Smart Escalation',
      metric: '100% Audit Readiness',
    },
  ];

  return (
    <section id="conversational" className="py-20 sm:py-28 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* LEFT COLUMN: PILLAR INTRO */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-2 text-[#191919]/50 text-xs font-mono">
            <span>01</span>
            <span>/</span>
            <span className="uppercase tracking-widest font-semibold">CONVERSATIONAL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#191919] leading-tight">
            Conversations that feel human, fast, and remarkably capable
          </h2>

          <p className="text-base text-[#191919]/75 font-normal leading-relaxed">
            Borrowers don’t want rigid phone trees or robotic scripts. Boomerang AI agents conduct natural, intelligent dialogues that advance loans forward 24/7.
          </p>

          <div className="pt-4 flex flex-wrap gap-2">
            <span className="px-3.5 py-1.5 bg-[#F4F4F4] text-xs font-medium text-[#191919] rounded-lg">
              SMS Messaging
            </span>
            <span className="px-3.5 py-1.5 bg-[#F4F4F4] text-xs font-medium text-[#191919] rounded-lg">
              Inbound & Outbound Voice
            </span>
            <span className="px-3.5 py-1.5 bg-[#F4F4F4] text-xs font-medium text-[#191919] rounded-lg">
              Automated Email Workflows
            </span>
            <span className="px-3.5 py-1.5 bg-[#F4F4F4] text-xs font-medium text-[#191919] rounded-lg">
              Document OCR & Intake
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN: 4 CAPABILITY CARDS */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="bg-[#FAFAFA] hover:bg-[#F2F2F2] transition-all duration-200 p-6 rounded-2xl border border-gray-200/70 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 bg-white border border-gray-200 rounded text-gray-600">
                    {cap.tag}
                  </span>
                  <span className="text-xs font-mono font-medium text-emerald-700">
                    {cap.metric}
                  </span>
                </div>
                <h3 className="font-medium text-base text-[#191919] leading-snug">
                  {cap.title}
                </h3>
                <p className="text-xs text-[#191919]/70 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
