import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Award, Train, Building, BarChart3, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import AnimatedCounter from '../ui/AnimatedCounter';

export default function SustainabilitySection() {
  const pillars = [
    { icon: BarChart3, title: 'Granular Carbon Reporting', desc: 'Detailed Scope 3 emissions analytics per route, cabin tier, and business division exportable to standard ESG frameworks (GHG Protocol).' },
    { icon: Building, title: 'Verified Green Hotel Partners', desc: 'Preferential booking algorithms prioritize LEED and ISO 14001 certified hotels that utilize 100% renewable energy.' },
    { icon: Train, title: 'High-Speed Rail Alternatives', desc: 'Automatic prompt suggesting European high-speed TGV / Eurostar / SBB routes when journey times are under 3.5 hours.' },
    { icon: Leaf, title: 'Sustainable Aviation Fuel (SAF)', desc: 'Direct partnerships with leading carriers allowing enterprise clients to procure verified SAF credits matching flight routes.' },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FBF9F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6 space-y-8">
            <SectionHeading
              badge="ESG & Sustainability"
              title="Travel better. Travel responsibly."
              subtitle="Modern corporate responsibility demands transparency. Aurelia integrates automated carbon accounting, high-speed rail routing, and sustainable aviation fuel (SAF) procurement into your daily travel workflow."
              align="left"
              className="mb-6"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, i) => {
                const IconComp = pillar.icon;
                return (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-[#F8F5EE] border border-[#D8C3A8]/50 hover:border-[#0F382E]/40 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#0F382E]/10 text-[#0F382E] flex items-center justify-center mb-3">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h4 className="font-serif text-lg font-semibold text-[#0E1412] mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-[#62756D] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 border-t border-[#D8C3A8]/40 grid grid-cols-3 gap-4">
              <AnimatedCounter value="100%" label="SAF Verification" sublabel="Gold Standard" />
              <AnimatedCounter value="42%" label="Emissions Cut" sublabel="On rail corridors" />
              <AnimatedCounter value="Scope 3" label="Audit Ready" sublabel="GHG protocol" />
            </div>
          </div>

          {/* Right Editorial Photography & ESG Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#D8C3A8] aspect-[4/4.8]">
              <img
                src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop"
                alt="European sustainable high-speed corporate transit"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A261F]/90 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 text-white text-xs space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F382E] text-[#DFBA58] text-[11px] font-semibold border border-[#C29B38]/30">
                  <Award className="w-3.5 h-3.5" />
                  <span>GBTA Sustainability Excellence Award</span>
                </div>
                <h4 className="font-serif text-xl sm:text-2xl text-white font-medium">
                  Empowering Decarbonized Enterprise Mobility
                </h4>
                <p className="text-[#D8C3A8]/90 text-[11px] max-w-md">
                  Delivering transparent carbon metrics directly into corporate sustainability reports without administrative overhead.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
