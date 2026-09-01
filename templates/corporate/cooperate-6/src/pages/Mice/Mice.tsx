import React from 'react';
import { motion } from 'motion/react';
import { Layers, Calendar, Users, Globe, Building2, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../../components/ui/SectionHeading';

interface MiceProps {
  onOpenConsultation: () => void;
}

export default function Mice({ onOpenConsultation }: MiceProps) {
  const categories = [
    {
      title: 'Meetings & Boardroom Summits',
      scale: '10 to 100 Delegates',
      desc: 'High-security confidential board assemblies, strategic quarterly offsites, and investor day forums in private estate buyouts.',
      features: ['Encrypted AV technology', 'Private chef dining', 'Discreet security vetting']
    },
    {
      title: 'Incentive Travel Programs',
      scale: '20 to 500 Delegates',
      desc: 'Transformational, once-in-a-lifetime journeys in extraordinary destinations designed to reward top performers and inspire team loyalty.',
      features: ['Private island takeovers', 'Curated cultural galas', 'Custom VIP giftings']
    },
    {
      title: 'Conferences & Large Conventions',
      scale: '500 to 10,000+ Delegates',
      desc: 'End-to-end event production, international charter flights, unified attendee housing blocks, and mobile app registration.',
      features: ['Keynote stage engineering', 'Group airline contracts', 'Multi-hotel room block control']
    },
    {
      title: 'Exhibitions & Industry Pavilions',
      scale: 'Global Trade Fairs',
      desc: 'Full logistics coordination for global corporate delegations attending MWC Barcelona, WEF Davos, Arab Health Dubai, and CES Las Vegas.',
      features: ['Trade booth logistics', 'Executive hospitality suites', 'Private client dining suites']
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-[#FBF9F5]">
      {/* Hero */}
      <section className="py-20 sm:py-28 bg-[#0A261F] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#165042] text-[#DFBA58] text-xs font-semibold uppercase tracking-widest border border-[#C29B38]/30">
              <Layers className="w-3.5 h-3.5" />
              MICE & Global Gatherings
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-medium tracking-tight text-white leading-[1.1]">
              Extraordinary events, engineered with institutional scale.
            </h1>
            <p className="text-base sm:text-xl text-[#D8C3A8]/90 leading-relaxed font-light">
              From Davos private board summits to 5,000-person tech conferences across Singapore, London, and Dubai. Complete venue sourcing, group aviation, and on-site production.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C29B38] text-[#0E1412] text-xs font-bold uppercase tracking-wider hover:bg-[#DFBA58] transition-colors cursor-pointer shadow-lg"
              >
                <span>Plan an Event Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Categories */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Event Disciplines"
          title="Comprehensive MICE Capabilities"
          subtitle="Every touchpoint managed by dedicated event directors and group flight coordinators."
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white border border-[#D8C3A8]/70 shadow-sm space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="font-serif text-2xl font-semibold text-[#0E1412]">{cat.title}</h3>
                <span className="px-3 py-1 rounded-full bg-[#0F382E]/10 text-[#0F382E] text-xs font-bold font-mono">
                  {cat.scale}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#62756D] leading-relaxed">{cat.desc}</p>
              <div className="pt-3 border-t border-[#D8C3A8]/40 space-y-2">
                {cat.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 text-xs text-[#3E5049]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0F382E]" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
