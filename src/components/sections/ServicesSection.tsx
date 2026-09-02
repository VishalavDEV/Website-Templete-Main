import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Layout,
  Sparkles,
  Layers,
  Zap,
  Compass,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { SERVICES } from '../../data/portfolioData';
import { SectionHeading } from '../common/SectionHeading';
import { cn } from '../../utils/cn';

const serviceIcons: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-6 h-6" />,
  Layout: <Layout className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  Layers: <Layers className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Compass: <Compass className="w-6 h-6" />,
};

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Services & Capabilities"
          title="Engineered for high-impact digital ventures."
          highlightedWord="high-impact"
          description="From visionary prototype to enterprise-scale production: comprehensive design and technical development capabilities."
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                'group relative rounded-3xl p-8 glass-card border border-slate-200/90 bg-white flex flex-col justify-between',
                'hover:border-blue-500/40 transition-all duration-300',
                'hover:-translate-y-1.5 shadow-sm hover:shadow-xl'
              )}
            >
              {/* Top Accent Gradient Line */}
              <div className={cn(
                'absolute top-0 left-8 right-8 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r',
                service.gradient
              )} />

              <div>
                {/* Icon Wrapper */}
                <div className="mb-6 flex items-center justify-between">
                  <div className={cn(
                    'w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 bg-gradient-to-br',
                    service.gradient
                  )}>
                    {serviceIcons[service.icon] || <Code2 className="w-6 h-6" />}
                  </div>
                  <span className="font-mono text-xs text-slate-400 font-bold">
                    0{idx + 1}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-display font-extrabold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-mono text-blue-700 font-bold mb-4">
                  {service.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-sans">
                  {service.description}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-2 mb-6">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                    What You Get
                  </div>
                  {service.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tags & Action */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-100 text-slate-700 font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
