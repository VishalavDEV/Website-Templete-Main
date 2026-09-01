import React from 'react';
import { motion } from 'motion/react';
import {
  Terminal,
  Sparkles,
  Layout,
  Boxes,
  Compass,
  Crown,
  ArrowRight,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import { SERVICES } from '../data/portfolioData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Terminal: Terminal,
  Sparkles: Sparkles,
  Layout: Layout,
  Boxes: Boxes,
  Compass: Compass,
  Crown: Crown,
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section
      id="services"
      className="relative py-28 bg-neutral-950 text-white border-t border-neutral-900 overflow-hidden"
    >
      {/* Ambient background blur */}
      <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-amber-400 mb-3">
            <Layout size={14} />
            <span>04 / SPECIALIZED SERVICES</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-white max-w-3xl">
            Tailored Engineering & Creative <span className="text-amber-400">Offerings</span>.
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 mt-3 max-w-xl">
            From zero-to-one flagship product engineering to high-consequence design system governance and AI multimodal interfaces.
          </p>
        </div>

        {/* Services Grid (2 Columns on Medium, 3 on Large) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.icon] || Layout;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-3xl bg-neutral-900/70 border border-neutral-800 hover:border-amber-400/40 transition-all flex flex-col justify-between p-7 shadow-xl backdrop-blur-md overflow-hidden relative"
              >
                {/* Top Details */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon size={22} />
                    </div>
                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-neutral-950 text-amber-400 border border-neutral-800">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white group-hover:text-amber-300 transition-colors mb-1">
                    {service.title}
                  </h3>
                  <div className="text-xs font-mono text-neutral-400 mb-3">
                    {service.subtitle}
                  </div>

                  <p className="text-xs text-neutral-300 leading-relaxed mb-6 font-sans">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-neutral-800/80">
                    <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider font-semibold mb-2">
                      Core Deliverables:
                    </div>
                    {service.deliverables.map((del, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                        <CheckCircle2 size={13} className="text-amber-400 mt-0.5 shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom Meta & CTA */}
                <div className="pt-4 border-t border-neutral-800/80 flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                    <span className="flex items-center gap-1">
                      <Clock size={13} className="text-neutral-500" />
                      {service.estimatedTimeline}
                    </span>
                    <div className="flex gap-1">
                      {service.technologies.slice(0, 2).map((t) => (
                        <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-neutral-950 border border-neutral-800">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    id={`service-inquire-btn-${service.id}`}
                    onClick={() => onSelectService(service)}
                    className="w-full py-2.5 rounded-xl bg-neutral-950 group-hover:bg-amber-400 text-neutral-300 group-hover:text-neutral-950 font-semibold text-xs transition-all flex items-center justify-center gap-2 border border-neutral-800 group-hover:border-amber-400 shadow-md"
                  >
                    <span>Commission This Service</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
