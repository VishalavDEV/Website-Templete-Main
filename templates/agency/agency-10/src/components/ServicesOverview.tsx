import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/services';
import { ServiceCard } from './ServiceCard';
import { ArrowRight, Sparkles } from 'lucide-react';

interface ServicesOverviewProps {
  onViewService: (slug: string) => void;
  onOpenInquiry: () => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({ onViewService, onOpenInquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Artificial Intelligence', 'Generative AI', 'Software Development', 'Web & Mobile', 'Automation', 'Cloud & DevOps'];

  const filteredServices = selectedCategory === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === selectedCategory);

  return (
    <section id="services-section" className="py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-700 font-bold">
              Engineering Disciplines
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mt-2 font-display">
              End-to-End Intelligence, Architecture &amp; Execution.
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              We specialize in deep mathematical AI, high-concurrency distributed software, and enterprise automation pipelines. We build systems engineered for long-term scalability and measurable ROI.
            </p>
          </div>

          <button
            onClick={onOpenInquiry}
            className="self-start md:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
          >
            <span>Discuss Technical Scope</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onViewService={onViewService}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
