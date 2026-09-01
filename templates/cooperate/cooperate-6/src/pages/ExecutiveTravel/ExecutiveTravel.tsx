import React from 'react';
import { motion } from 'motion/react';
import { Crown, Sparkles, Shield, Plane, Key, Award, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../../components/ui/SectionHeading';

interface ExecutiveTravelProps {
  onOpenConsultation: () => void;
}

export default function ExecutiveTravel({ onOpenConsultation }: ExecutiveTravelProps) {
  const tiers = [
    {
      title: 'Aurelia Black Protocol',
      target: 'Chief Executive Officers & Chairpersons',
      features: [
        'Dedicated Private Mobility Partner (24/7 direct encrypted cell)',
        'Guaranteed tarmac tarmac vehicle transfers on arrival/departure',
        'Private aircraft charter priority dispatch (wheels-up < 4 hrs)',
        'Pre-registered discrete presidential suites at Mandarin Oriental, Aman, Four Seasons',
        'Confidential travel profile with strict non-disclosure agreement',
        'Armored vehicle and trained security detail on demand'
      ],
      tag: 'C-Suite Standard'
    },
    {
      title: 'Aurelia Gold Protocol',
      target: 'Managing Directors & Executive Committee',
      features: [
        'First and Business class preferred cabin selection',
        'Guaranteed early 9:00 AM check-in and 4:00 PM late check-out',
        'Sub-90-second flight disruption rebooking desk',
        'VIP airport fast-track immigration clearance',
        'Chauffeured Mercedes-Maybach / S-Class ground transit',
        'Exclusive access to private city clubs and partner boardrooms'
      ],
      tag: 'Executive Committee'
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-[#FBF9F5]">
      {/* Dark Luxury Hero */}
      <section className="py-20 sm:py-28 bg-[#0E1412] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#165042] text-[#DFBA58] text-xs font-semibold uppercase tracking-widest border border-[#C29B38]/30">
              <Crown className="w-3.5 h-3.5" />
              Executive Travel Advisory
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-medium tracking-tight text-white leading-[1.1]">
              Uncompromising precision for leaders of global industry.
            </h1>
            <p className="text-base sm:text-xl text-[#D8C3A8]/90 leading-relaxed font-light">
              Where privacy, time efficiency, and white-glove anticipatory service converge. Tailored for founders, board members, and senior executives whose agendas cannot endure friction.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C29B38] text-[#0E1412] text-xs font-bold uppercase tracking-wider hover:bg-[#DFBA58] transition-colors cursor-pointer shadow-xl"
              >
                <span>Request Executive Concierge</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Protocols Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Protocols"
          title="Executive Service Tiers"
          subtitle="Engineered to meet the exact governance, security, and comfort parameters of senior corporate leadership."
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.title}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-[#D8C3A8]/70 shadow-md flex flex-col justify-between space-y-8"
            >
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F382E]/10 text-[#0F382E] text-xs font-bold uppercase tracking-wider mb-4">
                  <Sparkles className="w-3 h-3 text-[#C29B38]" />
                  {tier.tag}
                </div>
                <h3 className="font-serif text-3xl font-semibold text-[#0E1412]">{tier.title}</h3>
                <div className="text-xs text-[#62756D] font-medium uppercase tracking-wider mt-1">{tier.target}</div>

                <div className="mt-8 space-y-3.5">
                  {tier.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#3E5049]">
                      <CheckCircle2 className="w-4 h-4 text-[#0F382E] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#D8C3A8]/40">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3.5 rounded-xl bg-[#0F382E] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#165042] transition-colors cursor-pointer"
                >
                  Configure {tier.title}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
