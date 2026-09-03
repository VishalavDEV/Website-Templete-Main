import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';

export default function Expertise() {
  const techStack = [
    { name: 'React', color: 'from-cyan-400 to-blue-500', angle: 0 },
    { name: 'JavaScript', color: 'from-amber-400 to-yellow-500', angle: 45 },
    { name: 'UI/UX', color: 'from-purple-400 to-pink-500', angle: 90 },
    { name: 'Branding', color: 'from-blue-400 to-indigo-500', angle: 135 },
    { name: 'SEO', color: 'from-emerald-400 to-teal-500', angle: 180 },
    { name: 'Marketing', color: 'from-rose-400 to-red-500', angle: 225 },
    { name: 'Motion', color: 'from-indigo-400 to-purple-500', angle: 270 },
    { name: 'Strategy', color: 'from-cyan-400 to-teal-400', angle: 315 },
  ];

  return (
    <section className="relative py-28 px-6 md:px-12 bg-[#070a16] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <SectionTitle
          badge="TECHNICAL MASTERY"
          title="INTERACTIVE TECH ECOSYSTEM"
          description="We harness modern technology & strategic capabilities to build digital products."
          center={true}
        />

        {/* Orbit Canvas / Ring Container */}
        <div className="relative w-[340px] sm:w-[480px] md:w-[600px] h-[340px] sm:h-[480px] md:h-[600px] flex items-center justify-center my-8">
          {/* Outer Concentric Orbit Rings */}
          <div className="absolute inset-0 rounded-full border border-white/10 animate-spin" style={{ animationDuration: '40s' }} />
          <div className="absolute inset-12 rounded-full border border-cyan-500/20 border-dashed animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
          <div className="absolute inset-28 rounded-full border border-purple-500/20" />

          {/* Central Orbit Node */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="w-36 sm:w-44 md:w-52 h-36 sm:h-44 md:h-52 rounded-full bg-gradient-to-tr from-blue-600 via-cyan-500 to-purple-600 p-[2px] shadow-[0_0_50px_rgba(6,182,212,0.4)] z-20"
          >
            <div className="w-full h-full bg-[#05070f] rounded-full flex flex-col items-center justify-center text-center p-4">
              <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase mb-1">CORE MATRIX</span>
              <h3 className="text-lg sm:text-2xl font-syne font-extrabold text-white leading-tight">
                OUR EXPERTISE
              </h3>
            </div>
          </motion.div>

          {/* Orbiting Satellite Badges */}
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '35s' }}>
            {techStack.map((item, idx) => {
              const radius = 170; // Orbit radius
              const rad = (item.angle * Math.PI) / 180;
              const x = Math.cos(rad) * radius;
              const y = Math.sin(rad) * radius;

              return (
                <div
                  key={item.name}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                >
                  <div className="animate-spin" style={{ animationDuration: '35s', animationDirection: 'reverse' }}>
                    <div className="glass-panel px-4 py-2 rounded-full border border-white/15 shadow-xl flex items-center gap-2 group hover:scale-110 transition-transform cursor-pointer">
                      <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${item.color} shadow-[0_0_10px_#22d3ee]`} />
                      <span className="text-xs md:text-sm font-syne font-bold text-slate-200 group-hover:text-white">
                        {item.name}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
