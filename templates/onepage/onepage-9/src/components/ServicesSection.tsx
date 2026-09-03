import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/mockData';
import { ServiceItem, PageView } from '../types';
import { Cpu, Layers, Globe, Sparkles, Check, ArrowRight, Clock, DollarSign, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServicesSectionProps {
  onOpenContact: (preselectedService?: string) => void;
  onNavigateToEngine: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenContact,
  onNavigateToEngine
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>('ai-engineering');

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'ai', label: 'Autonomous AI' },
    { id: 'design', label: 'Product Design' },
    { id: 'engineering', label: 'Cloud Systems' },
    { id: 'strategy', label: 'Executive Advisory' }
  ];

  const filteredServices = selectedCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === selectedCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-purple-400" />;
      case 'Globe': return <Globe className="w-5 h-5 text-cyan-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-emerald-400" />;
      default: return <Sparkles className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="services-section" className="py-24 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300 uppercase tracking-wider mb-4">
              Architectural Capabilities
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Disciplined craftsmanship across every layer of the modern stack.
            </h2>
          </div>

          <button
            onClick={onNavigateToEngine}
            className="self-start md:self-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-xs font-semibold text-slate-200 transition-all flex items-center gap-2 shrink-0 group"
          >
            <span>Launch Scope &amp; Pricing Configurator</span>
            <ArrowRight className="w-4 h-4 text-indigo-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-indigo-600 text-white font-bold shadow-lg shadow-indigo-500/25'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredServices.map((service) => {
            const isExpanded = expandedServiceId === service.id;

            return (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-black/40 relative overflow-hidden"
              >
                {/* Subtle Card Accent Light */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-colors pointer-events-none" />

                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center shadow-inner">
                      {getIcon(service.iconName)}
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      <span>{service.timeline}</span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-display text-2xl font-bold text-white group-hover:text-indigo-200 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm font-medium text-indigo-300/80 mt-1 mb-3">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-slate-800/60">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Core Deliverables
                    </div>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-slate-950 text-slate-400 border border-slate-800 text-[11px] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-6">
                    {service.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="font-mono text-xs font-bold text-slate-200">{metric.value}</div>
                        <div className="text-[10px] text-slate-500 uppercase">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase">Investment Basis</span>
                    <div className="text-sm font-bold text-white font-mono">{service.startingPrice}</div>
                  </div>

                  <button
                    onClick={() => onOpenContact(service.title)}
                    className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-indigo-600 hover:text-white text-xs font-bold text-slate-200 transition-all flex items-center gap-1.5 group/btn"
                  >
                    <span>Request Discovery</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
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
