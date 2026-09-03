import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import Counter from '../ui/Counter';
import { Sparkles, Target, Zap, ShieldCheck } from 'lucide-react';

export default function About() {
  const statementWords = "We are a creative digital agency helping ambitious brands create powerful digital experiences.".split(" ");

  const stats = [
    { label: 'Projects Completed', value: 150, suffix: '+', icon: Zap },
    { label: 'Global Clients', value: 80, suffix: '+', icon: Target },
    { label: 'Years Experience', value: 12, suffix: '+', icon: Sparkles },
    { label: 'Creative Experts', value: 25, suffix: '+', icon: ShieldCheck },
  ];

  return (
    <section id="about" className="relative py-28 px-6 md:px-12 bg-[#070a16] overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionTitle badge="WHO WE ARE" title="ENGINEERING DIGITAL EXCELLENCE" />

        {/* Word-by-word reveal statement */}
        <div className="mb-16">
          <p className="text-3xl md:text-5xl font-syne font-semibold leading-tight text-slate-200 flex flex-wrap gap-x-3 gap-y-2">
            {statementWords.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0.15, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                className={word.toLowerCase() === 'powerful' || word.toLowerCase() === 'digital' ? 'text-gradient-cyan font-bold' : ''}
              >
                {word}
              </motion.span>
            ))}
          </p>
        </div>

        {/* Explanation & Capabilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6 text-slate-400 text-base md:text-lg leading-relaxed font-light"
          >
            <p>
              At LOOP AGENCY, we combine strategic insight with cutting-edge design and engineering to build digital products that captivate audiences and accelerate business growth.
            </p>
            <p>
              From custom design systems and WebGL micro-interactions to scalable full-stack web applications and growth marketing strategies, our team pushes the boundaries of modern digital design.
            </p>
          </motion.div>

          {/* Visual Highlight Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-full blur-3xl -z-10 group-hover:scale-125 transition-transform duration-700" />
            
            <h3 className="text-2xl font-syne font-bold text-white mb-4">Core Agency Pillars</h3>
            <div className="grid grid-cols-2 gap-4">
              {['Digital Strategy', 'UI/UX Excellence', 'Full-Stack Web', 'Motion & Graphics', 'Brand Identity', 'Growth & SEO'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 text-sm text-slate-300 font-medium">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Counter Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-panel p-6 md:p-8 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-syne font-extrabold text-white mb-2 tracking-tight">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-xs md:text-sm text-slate-400 uppercase tracking-widest font-mono">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
