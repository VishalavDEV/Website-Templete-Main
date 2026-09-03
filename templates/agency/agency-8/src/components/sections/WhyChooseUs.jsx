import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { Lightbulb, Cpu, Target, Zap, MessageSquare, ShieldCheck } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';

export default function WhyChooseUs() {
  const { setCursorState } = useCursor();

  const reasons = [
    {
      title: 'Creative Thinking',
      desc: 'We craft unique, non-generic visual experiences designed to differentiate your brand from the noise.',
      icon: Lightbulb,
      glow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:border-blue-500/50',
    },
    {
      title: 'Modern Technology',
      desc: 'Built using React, Vite, Framer Motion, and WebGL — ensuring unmatched speed and futureproof security.',
      icon: Cpu,
      glow: 'hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:border-cyan-500/50',
    },
    {
      title: 'Results Driven',
      desc: 'Every pixel and micro-interaction is engineered to increase engagement and drive measurable conversions.',
      icon: Target,
      glow: 'hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:border-purple-500/50',
    },
    {
      title: 'Fast Delivery',
      desc: 'Agile sprint workflows designed for rapid execution without compromising code quality or visual precision.',
      icon: Zap,
      glow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:border-blue-500/50',
    },
    {
      title: 'Transparent Communication',
      desc: 'Direct access to your dedicated lead design & engineering team with regular milestone walkthroughs.',
      icon: MessageSquare,
      glow: 'hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:border-cyan-500/50',
    },
    {
      title: 'Long-Term Support',
      desc: 'We build enduring partnerships — offering post-launch maintenance, optimization, and digital evolution.',
      icon: ShieldCheck,
      glow: 'hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:border-purple-500/50',
    },
  ];

  return (
    <section className="relative py-28 px-6 md:px-12 bg-[#05070f] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="WHY CHOOSE US"
          title="WHY VISIONARY BRANDS TRUST LOOP AGENCY"
          description="We do not build average websites. We create digital category leaders."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => {
            const IconComponent = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onMouseEnter={() => setCursorState('button')}
                onMouseLeave={() => setCursorState('default')}
                className={`glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-pointer ${reason.glow}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-syne font-bold text-white mb-3">
                  {reason.title}
                </h3>
                <p className="text-slate-400 font-light text-base leading-relaxed">
                  {reason.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
