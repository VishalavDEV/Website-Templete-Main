import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { Search, Map, Layout, Code, Rocket, TrendingUp } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      desc: 'Understand the brand, target audience, competitive landscape, and overall project goals.',
      icon: Search,
    },
    {
      num: '02',
      title: 'Strategy',
      desc: 'Formulate the creative direction, architectural blueprint, and technical digital strategy.',
      icon: Map,
    },
    {
      num: '03',
      title: 'Design',
      desc: 'Develop interactive UI/UX prototypes, motion design concepts, and visual design systems.',
      icon: Layout,
    },
    {
      num: '04',
      title: 'Develop',
      desc: 'Transform designs into performant, responsive, fully accessible digital products.',
      icon: Code,
    },
    {
      num: '05',
      title: 'Launch',
      desc: 'Perform rigorous QA testing, performance optimizations, and orchestrate seamless deployment.',
      icon: Rocket,
    },
    {
      num: '06',
      title: 'Grow',
      desc: 'Continuous iteration, user feedback analytics, conversion tuning, and digital expansion.',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="process" className="relative py-28 px-6 md:px-12 bg-[#070915] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="HOW WE WORK"
          title="OUR STRATEGIC ROADMAP"
          description="A structured, agile methodology to turn complex challenges into flawless digital solutions."
        />

        <div className="relative">
          {/* Central Connecting Timeline Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-600 via-cyan-400 to-purple-600 -translate-x-1/2 shadow-[0_0_15px_#22d3ee]" />

          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const IconComponent = step.icon;

              return (
                <div
                  key={step.num}
                  className={`flex flex-col lg:flex-row items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  } gap-8 relative`}
                >
                  {/* Content Card Side */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="w-full lg:w-1/2"
                  >
                    <div className="glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-4xl font-syne font-extrabold text-cyan-400">
                          {step.num}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-300">
                          <IconComponent className="w-5 h-5" />
                        </div>
                      </div>

                      <h3 className="text-2xl font-syne font-bold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-slate-400 font-light text-base leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>

                  {/* Central Node Badge (Desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#070915] border-2 border-cyan-400 items-center justify-center text-cyan-400 shadow-[0_0_20px_#22d3ee] z-10">
                    <span className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
                  </div>

                  {/* Empty Spacer Side */}
                  <div className="hidden lg:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
