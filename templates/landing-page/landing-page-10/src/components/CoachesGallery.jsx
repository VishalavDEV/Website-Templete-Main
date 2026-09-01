import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { COACHES } from '../data/coaches';
import { ArrowRight, Quote, Sparkles } from 'lucide-react';

export default function CoachesGallery() {
  const [hoveredCoachId, setHoveredCoachId] = useState(null);

  return (
    <section id="coaches" className="py-24 md:py-36 bg-[#F3F0E8] text-[#171816] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#B56F4D] font-mono font-bold block mb-3">
              EXPERT LEADERSHIP
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight">
              Guidance from people who <br />
              <span className="editorial-italic font-normal text-[#3E5142]">understand the journey.</span>
            </h2>
          </div>
          <p className="text-base text-[#171816]/75 max-w-md font-light leading-relaxed">
            Our coaches are movement specialists, bioscientists, and recovery practitioners dedicated to your long-term autonomy.
          </p>
        </div>

        {/* Horizontal Drag/Scroll Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COACHES.map((coach) => {
            const isHovered = hoveredCoachId === coach.id;
            return (
              <motion.div
                key={coach.id}
                onMouseEnter={() => setHoveredCoachId(coach.id)}
                onMouseLeave={() => setHoveredCoachId(null)}
                className="group relative bg-[#ECE8DE] rounded-3xl overflow-hidden border border-[#171816]/15 flex flex-col justify-between h-[520px] transition-all duration-500 shadow-md hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
              >
                {/* Coach Portrait Background Image */}
                <div className="relative h-[340px] overflow-hidden">
                  <img
                    src={coach.image}
                    alt={coach.name}
                    className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                      isHovered ? 'scale-110 grayscale-0' : 'scale-100 grayscale-[20%]'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171816] via-transparent to-transparent opacity-80" />

                  {/* Title Overlay */}
                  <div className="absolute bottom-4 left-6 right-6 text-white">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#B56F4D]">
                      {coach.title}
                    </span>
                    <h3 className="text-2xl font-heading font-bold text-[#F3F0E8]">
                      {coach.name}
                    </h3>
                  </div>
                </div>

                {/* Bottom Philosophy & Bio Panel */}
                <div className="p-6 flex flex-col justify-between flex-grow bg-[#171816] text-[#F3F0E8] transition-colors duration-300">
                  <p className="editorial-italic text-sm text-[#D8D4C8] leading-relaxed line-clamp-3">
                    "{coach.philosophy}"
                  </p>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 font-mono text-white/70">
                      <Sparkles className="w-3.5 h-3.5 text-[#B56F4D]" />
                      <span>{coach.specialties[0]}</span>
                    </div>
                    <span className="text-[#B56F4D] group-hover:translate-x-1 transition-transform">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
