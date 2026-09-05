import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';

export default function Expertise() {
  const [radius, setRadius] = React.useState(170);

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

  React.useEffect(() => {
    const updateRadius = () => {
      const w = window.innerWidth;
      if (w < 400) {
        setRadius(105);
      } else if (w < 640) {
        setRadius(125);
      } else if (w < 768) {
        setRadius(150);
      } else {
        setRadius(185);
      }
    };
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-12 bg-[#070a16] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <SectionTitle
          badge="TECHNICAL MASTERY"
          title="INTERACTIVE TECH ECOSYSTEM"
          description="We harness modern technology & strategic capabilities to build digital products."
          center={true}
        />

        {/* Orbit Canvas / Ring Container */}
        <div className="relative w-[280px] xs:w-[320px] sm:w-[440px] md:w-[560px] h-[280px] xs:h-[320px] sm:h-[440px] md:h-[560px] flex items-center justify-center my-6 sm:my-8">
          {/* Outer Concentric Orbit Rings */}
          <div className="absolute inset-0 rounded-full border border-white/10 animate-spin" style={{ animationDuration: '40s' }} />
          <div className="absolute inset-8 sm:inset-12 rounded-full border border-cyan-500/20 border-dashed animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
          <div className="absolute inset-16 sm:inset-24 rounded-full border border-purple-500/20" />

          {/* Central Orbit Node */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="w-28 h-28 sm:w-40 md:w-52 sm:h-40 md:h-52 rounded-full bg-gradient-to-tr from-blue-600 via-cyan-500 to-purple-600 p-[2px] shadow-[0_0_40px_rgba(6,182,212,0.4)] z-20"
          >
            <div className="w-full h-full bg-[#05070f] rounded-full flex flex-col items-center justify-center text-center p-3 sm:p-4">
              <span className="text-[8px] sm:text-[10px] font-mono tracking-widest text-cyan-400 uppercase mb-0.5 sm:mb-1">CORE MATRIX</span>
              <h3 className="text-xs sm:text-lg md:text-2xl font-syne font-extrabold text-white leading-tight">
                OUR EXPERTISE
              </h3>
            </div>
          </motion.div>

          {/* Orbiting Satellite Badges */}
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '35s' }}>
            {techStack.map((item) => {
              const rad = (item.angle * Math.PI) / 180;
              const x = Math.cos(rad) * radius;
              const y = Math.sin(rad) * radius;

              return (
                <div
                  key={item.name}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                >
                  <div className="animate-spin" style={{ animationDuration: '35s', animationDirection: 'reverse' }}>
                    <div className="glass-panel px-2.5 py-1 sm:px-4 sm:py-2 rounded-full border border-white/15 shadow-xl flex items-center gap-1.5 sm:gap-2 group hover:scale-110 transition-transform cursor-pointer">
                      <div className={`w-1.5 sm:w-2.5 h-1.5 sm:h-2.5 rounded-full bg-gradient-to-r ${item.color} shadow-[0_0_10px_#22d3ee] shrink-0`} />
                      <span className="text-[10px] sm:text-xs md:text-sm font-syne font-bold text-slate-200 group-hover:text-white whitespace-nowrap">
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
