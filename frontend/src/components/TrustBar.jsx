import React from 'react';
import { motion } from 'framer-motion';
import { heroData } from '../data/landingData';
import { Layers, Cpu, Radio, Network, Database, Boxes } from 'lucide-react';

export default function TrustBar() {
  const partnerIcons = [
    { name: "HyperScale", icon: Layers, metric: "500M req/mo" },
    { name: "Synthetix", icon: Cpu, metric: "AI Inference" },
    { name: "PulseCloud", icon: Radio, metric: "Sub-5ms Edge" },
    { name: "Nebula Core", icon: Network, metric: "FinTech Mesh" },
    { name: "Vortex Data", icon: Database, metric: "40TB Stream" },
    { name: "AetherOps", icon: Boxes, metric: "Auto CI/CD" },
  ];

  return (
    <section className="py-12 border-y relative" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-pill)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs sm:text-sm font-medium uppercase tracking-widest mb-8"
          style={{ color: 'var(--text-muted)' }}
        >
          {heroData.trustHeading}
        </motion.p>

        {/* Partner Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {partnerIcons.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass-card rounded-xl p-4 flex flex-col items-center justify-center gap-2 group transition-all cursor-default"
                style={{ borderColor: 'var(--border-color)' }}
              >
                <div className="flex items-center gap-2 transition-colors">
                  <Icon className="w-5 h-5 transition-colors" style={{ color: 'var(--accent-start)' }} />
                  <span className="font-semibold text-sm tracking-tight" style={{ color: 'var(--text-main)' }}>{partner.name}</span>
                </div>
                <span className="text-[10px] font-mono" style={{ color: 'var(--text-muted)' }}>
                  {partner.metric}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
