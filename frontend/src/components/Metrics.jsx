import React from 'react';
import { motion } from 'framer-motion';
import { metricsData } from '../data/landingData';
import { Activity, ShieldCheck, Zap, Globe } from 'lucide-react';

export default function Metrics() {
  const iconList = [ShieldCheck, Zap, Globe, Activity];

  return (
    <section id="metrics" className="py-20 sm:py-28 scroll-mt-28 relative overflow-hidden">
      {/* Background ambient glow line */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-24 blur-[100px] pointer-events-none"
        style={{ backgroundColor: 'var(--orb-1)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metricsData.map((stat, index) => {
            const Icon = iconList[index] || Zap;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-card rounded-2xl p-6 sm:p-7 relative overflow-hidden group transition-all duration-300"
                style={{ borderColor: 'var(--border-color)' }}
              >
                {/* Subtle top indicator bar */}
                <div
                  className="w-10 h-1 rounded-full mb-4 group-hover:w-16 transition-all duration-300"
                  style={{ background: 'linear-gradient(to right, var(--accent-start), var(--accent-mid))' }}
                />
                
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="text-3xl sm:text-4xl font-extrabold tracking-tight"
                    style={{ color: index === 0 ? 'var(--accent-start)' : index === 1 ? 'var(--accent-mid)' : index === 2 ? 'var(--accent-end)' : 'var(--accent-start)' }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="w-9 h-9 rounded-xl border flex items-center justify-center transition-colors"
                    style={{ backgroundColor: 'var(--bg-pill)', borderColor: 'var(--border-color)', color: 'var(--text-sub)' }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-base font-bold mb-1" style={{ color: 'var(--text-main)' }}>
                  {stat.label}
                </div>
                
                <div className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {stat.subtext}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
