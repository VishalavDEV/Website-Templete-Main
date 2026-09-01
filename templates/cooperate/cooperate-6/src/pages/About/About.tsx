import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Shield, Sparkles, Globe, Users, Award, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { leadershipTeam, companyTimeline, awardsList } from '../../data/team';
import SectionHeading from '../../components/ui/SectionHeading';
import AnimatedCounter from '../../components/ui/AnimatedCounter';

interface AboutProps {
  onOpenConsultation: () => void;
}

export default function About({ onOpenConsultation }: AboutProps) {
  return (
    <div className="pt-24 pb-20 bg-[#FBF9F5]">
      {/* Hero Header */}
      <section className="py-16 sm:py-24 bg-[#0A261F] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#165042] text-[#DFBA58] text-xs font-semibold uppercase tracking-widest border border-[#C29B38]/30">
              Our Heritage & Philosophy
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-medium tracking-tight text-white leading-[1.1]">
              Crafting seamless global movement since 2001.
            </h1>
            <p className="text-base sm:text-xl text-[#D8C3A8]/90 leading-relaxed font-light">
              We bridge the nuance of high-touch luxury hospitality with the rigorous engineering of enterprise mobility systems.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Statement Section */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              badge="The Aurelia Standard"
              title="Travel should empower your business, not exhaust it."
              subtitle="Modern enterprises operate across continents at unprecedented speed. When travel is fragmented, executive focus erodes. We design corporate mobility that preserves energy, guarantees safety, and respects budget governance."
              align="left"
              className="mb-4"
            />
            
            <div className="space-y-4 text-sm text-[#3E5049]">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0F382E] flex-shrink-0 mt-0.5" />
                <p><strong className="text-[#0E1412]">Human Concierge in Every Timezone:</strong> No robot chatbots when flights are cancelled at 2:00 AM. A dedicated human mobility specialist answers your call in seconds.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0F382E] flex-shrink-0 mt-0.5" />
                <p><strong className="text-[#0E1412]">Institutional Cost Discipline:</strong> Leveraging tens of millions in annual consolidated buying power to secure guaranteed room blocks and flexible airline ticketing tiers.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0F382E] flex-shrink-0 mt-0.5" />
                <p><strong className="text-[#0E1412]">Proactive Duty of Care:</strong> Continuous geopolitical intelligence tracking and immediate evacuation protocols compliant with ISO 31030 standards.</p>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0F382E] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#165042] transition-colors cursor-pointer"
              >
                <span>Partner with Aurelia</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#D8C3A8] aspect-[4/4.5]">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
                alt="Aurelia Global Headquarters"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A261F]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="font-serif text-xl font-medium">Aurelia Global Headquarters</div>
                <div className="text-xs text-[#D8C3A8] uppercase tracking-wider mt-0.5">32 Berkeley Square • Mayfair, London</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones / History Timeline */}
      <section className="py-20 bg-[#F8F5EE] border-y border-[#D8C3A8]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Chronology"
            title="Two Decades of Distinction"
            subtitle="The key milestones that have shaped Aurelia into the premier global corporate mobility consultancy."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
            {companyTimeline.map((m) => (
              <div key={m.year} className="p-6 rounded-2xl bg-white border border-[#D8C3A8]/60 shadow-sm space-y-2">
                <div className="font-serif text-3xl font-bold text-[#C29B38]">{m.year}</div>
                <h4 className="font-serif text-lg font-semibold text-[#0E1412]">{m.title}</h4>
                <p className="text-xs text-[#62756D] leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Grid */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Executive Leadership"
          title="Guided by Global Travel Strategists"
          subtitle="Meet the partners and directors steering our worldwide advisory, airline partnerships, and security intelligence desks."
          align="left"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leadershipTeam.map((member) => (
            <div key={member.name} className="p-6 rounded-3xl bg-white border border-[#D8C3A8]/60 shadow-sm hover:shadow-md transition-all group">
              <div className="aspect-[4/4.5] rounded-2xl overflow-hidden mb-5 bg-[#0E1412]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="font-serif text-xl font-semibold text-[#0E1412]">{member.name}</h4>
              <div className="text-xs font-semibold text-[#0F382E] uppercase tracking-wider mt-0.5">{member.role}</div>
              <div className="text-[11px] text-[#8FA29A] mt-0.5">{member.credentials}</div>
              <p className="text-xs text-[#62756D] mt-3 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
