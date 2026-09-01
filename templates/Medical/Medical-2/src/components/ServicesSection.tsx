import React, { useState } from 'react';
import { Service } from '../types';
import { servicesData } from '../data/servicesData';
import { 
  Activity, HeartPulse, Brain, Bone, ScanLine, 
  Baby, Sparkles, ShieldPlus, ArrowRight, CheckCircle2, 
  Clock, Filter, Stethoscope 
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceDetails: (service: Service) => void;
  onBookService: (service: Service) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceDetails,
  onBookService,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Critical Care', 'Surgery', 'Diagnostics', 'Wellness', 'Therapy'];

  const filteredServices = selectedCategory === 'All'
    ? servicesData
    : servicesData.filter(s => s.category === selectedCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity': return Activity;
      case 'HeartPulse': return HeartPulse;
      case 'Brain': return Brain;
      case 'Bone': return Bone;
      case 'ScanLine': return ScanLine;
      case 'Baby': return Baby;
      case 'Sparkles': return Sparkles;
      case 'ShieldPlus': return ShieldPlus;
      default: return Stethoscope;
    }
  };

  return (
    <section id="services" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-teal-700 font-extrabold text-xs tracking-wider uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
            Comprehensive Clinical Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Integrated Medical Specialties & Advanced Interventions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            From life-saving 24/7 trauma care to precision robotic surgery and molecular diagnostics, our clinical teams deliver seamless multidisciplinary medical care.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`service-cat-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-teal-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service, idx) => {
            const Icon = getServiceIcon(service.iconName);
            const pastelStyles = [
              'bg-indigo-50 text-indigo-600',
              'bg-amber-50 text-amber-600',
              'bg-emerald-50 text-emerald-600',
              'bg-teal-50 text-teal-600',
            ][idx % 4];

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="bg-white rounded-2xl border border-slate-200 hover:border-teal-300 p-6 flex flex-col justify-between transition-all hover:shadow-md group"
              >
                <div className="space-y-4">
                  {/* Top Bar: Icon + Category Badge */}
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${pastelStyles} transition-colors`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-100 px-2.5 py-0.5 rounded-full">
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <div className="space-y-1.5">
                    <h3 className="font-bold text-base text-slate-900 group-hover:text-teal-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Bullet Benefits preview */}
                  <ul className="space-y-1.5 pt-2 border-t border-slate-100 text-[11px] text-slate-600">
                    {service.keyBenefits.slice(0, 2).map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    id={`view-service-details-btn-${service.id}`}
                    onClick={() => onSelectServiceDetails(service)}
                    className="text-xs font-bold text-teal-600 hover:text-teal-800 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    id={`book-service-btn-${service.id}`}
                    onClick={() => onBookService(service)}
                    className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-bold rounded-lg shadow-sm transition cursor-pointer active:scale-95"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
