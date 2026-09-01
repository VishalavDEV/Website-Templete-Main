import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, MapPin, Users, Clock, ArrowRight } from 'lucide-react';
import { experiencesData } from '../../data/experiences';
import SectionHeading from '../../components/ui/SectionHeading';

interface ExperiencesProps {
  onOpenConsultation: () => void;
}

export default function Experiences({ onOpenConsultation }: ExperiencesProps) {
  return (
    <div className="pt-24 pb-20 bg-[#FBF9F5]">
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-[#0E1412] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#165042] text-[#DFBA58] text-xs font-semibold uppercase tracking-widest border border-[#C29B38]/30">
              <Sparkles className="w-3.5 h-3.5" />
              Bespoke Incentive Journeys
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-medium tracking-tight text-white leading-[1.1]">
              Extraordinary moments for extraordinary teams.
            </h1>
            <p className="text-base sm:text-xl text-[#D8C3A8]/90 leading-relaxed font-light">
              Transformational incentive trips, private estate buyouts, and unbuyable cultural access designed to reward world-class performers and cement lifelong leadership bonds.
            </p>
          </div>
        </div>
      </section>

      {/* Grid of Experiences */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Curated Itineraries"
          title="Signature Incentive & Leadership Experiences"
          subtitle="Each experience is fully private, secure, and tailored around your corporate goals."
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiencesData.map((exp) => (
            <div
              key={exp.id}
              className="rounded-3xl overflow-hidden bg-white border border-[#D8C3A8]/70 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0E1412]">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1412]/80 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0F382E]/90 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                    {exp.category}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-1.5 text-xs text-[#DFBA58] font-semibold uppercase tracking-wider">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold">{exp.title}</h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <p className="text-xs sm:text-sm text-[#3E5049] leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 py-2 border-y border-[#D8C3A8]/40 text-xs">
                    <div>
                      <span className="text-[#8FA29A] block">Duration:</span>
                      <span className="font-semibold text-[#0E1412]">{exp.duration}</span>
                    </div>
                    <div>
                      <span className="text-[#8FA29A] block">Ideal Group:</span>
                      <span className="font-semibold text-[#0E1412]">{exp.idealGroupSize}</span>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#0F382E]">
                      Key Highlights:
                    </div>
                    <ul className="space-y-1 text-xs text-[#62756D]">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C29B38]" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3.5 rounded-xl bg-[#0F382E] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#165042] transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Request Custom Itinerary</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
