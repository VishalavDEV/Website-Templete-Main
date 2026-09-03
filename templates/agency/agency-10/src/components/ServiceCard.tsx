import React from 'react';
import { ServiceItem } from '../types';
import { DynamicIcon } from './DynamicIcon';
import { ArrowRight, Check } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  onViewService: (slug: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onViewService }) => {
  return (
    <div
      id={`service-card-${service.id}`}
      className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-slate-300 transition-all duration-300"
    >
      <div>
        {/* Top Header & Icon */}
        <div className="flex items-center justify-between gap-4 mb-5">
          <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
            <DynamicIcon name={service.iconName} className="w-6 h-6" />
          </div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full font-bold">
            {service.category}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-blue-700 transition-colors">
          {service.title}
        </h3>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
          {service.shortDescription}
        </p>

        {/* Capabilities Pills / Checklist */}
        <div className="mt-6 pt-5 border-t border-slate-100 space-y-2">
          <p className="text-xs font-mono uppercase tracking-wider text-slate-600 font-bold">
            Core Capabilities:
          </p>
          <ul className="space-y-1.5">
            {service.capabilities.slice(0, 4).map((cap, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                <Check className="w-3.5 h-3.5 text-blue-700 shrink-0 mt-0.5" />
                <span>{cap}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Card Action */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-600 font-medium">
          <span>{service.metrics[0]?.label}: </span>
          <span className="text-slate-900 font-bold">{service.metrics[0]?.value}</span>
        </div>

        <button
          id={`btn-view-${service.slug}`}
          onClick={() => onViewService(service.slug)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-800 transition-colors cursor-pointer group-hover:translate-x-0.5"
        >
          <span>View Service</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
