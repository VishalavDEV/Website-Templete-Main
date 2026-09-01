import React from 'react';
import { motion } from 'motion/react';
import { Search, PenTool, Plane, Headset, TrendingUp, ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

export default function ProcessTimeline() {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      tagline: 'Understand Travel Requirements',
      desc: 'We conduct a comprehensive forensic audit of your historical flight routes, hotel spend, traveler patterns, and corporate travel policies.',
      icon: Search
    },
    {
      number: '02',
      title: 'Design',
      tagline: 'Build a Customized Program',
      desc: 'We construct tailored policy tiers, configure ERP expense sync, and negotiate preferred corporate route corridors with global airline alliances.',
      icon: PenTool
    },
    {
      number: '03',
      title: 'Book',
      tagline: 'Coordinate Flights, Hotels & Transport',
      desc: 'Self-service intuitive booking app for employees alongside white-glove executive concierge support for VIP and board-level delegations.',
      icon: Plane
    },
    {
      number: '04',
      title: 'Support',
      tagline: 'Provide 24/7 Traveler Assistance',
      desc: 'Proactive real-time flight tracking, instant rebooking during delays, and round-the-clock duty of care protection in 120+ countries.',
      icon: Headset
    },
    {
      number: '05',
      title: 'Optimize',
      tagline: 'Analyze Data and Improve Costs',
      desc: 'Quarterly executive business reviews (QBRs), dynamic supplier benchmarking, and continuous CO2 footprint offsetting reporting.',
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FBF9F5] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Methodology"
          title="The Travel Management Lifecycle"
          subtitle="How Aurelia transforms chaotic booking fragments into an orchestrated, cost-optimized enterprise mobility engine."
          align="left"
        />

        {/* Timeline Grid with Connecting Route Line */}
        <div className="relative mt-12">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-[#0F382E] via-[#C29B38] to-[#165042] -translate-y-8 z-0 opacity-40" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => {
              const IconComp = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-white border border-[#D8C3A8]/60 shadow-sm hover:shadow-md hover:border-[#0F382E]/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Step Number & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-serif text-3xl font-bold text-[#C29B38]">
                        {step.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#0F382E]/10 text-[#0F382E] flex items-center justify-center group-hover:bg-[#0F382E] group-hover:text-[#EADBCA] transition-colors">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    <h4 className="font-serif text-2xl font-semibold text-[#0E1412] mb-1">
                      {step.title}
                    </h4>
                    <div className="text-xs font-semibold text-[#0F382E] uppercase tracking-wider mb-3">
                      {step.tagline}
                    </div>
                    <p className="text-xs text-[#3E5049] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#D8C3A8]/30 flex items-center gap-1.5 text-[11px] font-semibold text-[#8FA29A] group-hover:text-[#0F382E] transition-colors">
                    <span>Phase {step.number}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
