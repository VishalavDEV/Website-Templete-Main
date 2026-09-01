import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Building2, Hammer, Search, AlertTriangle, Sun } from 'lucide-react';
import { Service } from '../../types';
import { useQuoteModal } from '../../context/QuoteModalContext';

interface ServiceCardProps {
  service: Service;
  variant?: 'grid' | 'featured' | 'compact';
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Building2,
  ShieldCheck,
  Hammer,
  Search,
  AlertTriangle,
  Sun
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, variant = 'grid' }) => {
  const { openQuoteModal } = useQuoteModal();
  const Icon = iconMap[service.iconName] || Building2;

  return (
    <div className="group bg-white rounded-md border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between">
      {/* Image with Category Badge */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-sm text-xs font-mono font-bold bg-white/95 text-slate-900 shadow-xs border border-slate-200">
            {service.category}
          </span>
          {service.popular && (
            <span className="px-2 py-0.5 rounded-sm text-[10px] font-mono font-bold uppercase tracking-wider bg-indigo-600 text-white shadow-xs">
              Top Spec
            </span>
          )}
        </div>

        {/* Icon in corner */}
        <div className="absolute bottom-3 right-3 w-9 h-9 rounded-sm bg-indigo-600 text-white flex items-center justify-center shadow-md font-bold">
          <Icon className="w-4 h-4" />
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
            <Link to={`/services/${service.slug}`}>
              {service.title}
            </Link>
          </h3>

          <p className="text-slate-600 text-sm mt-2 line-clamp-3 leading-relaxed">
            {service.shortDescription}
          </p>

          {/* Key bullets */}
          <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-700">
            {service.features.slice(0, 2).map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Bottom */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
          <Link
            to={`/services/${service.slug}`}
            className="text-xs font-bold font-mono text-slate-900 group-hover:text-indigo-600 flex items-center gap-1.5 transition-colors uppercase"
          >
            <span>Specs & Details</span>
            <ArrowRight className="w-3.5 h-3.5 text-indigo-600 group-hover:translate-x-1 transition-transform" />
          </Link>

          <button
            onClick={() => openQuoteModal(service.title)}
            className="px-3 py-1.5 text-xs font-mono font-semibold rounded-sm bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 transition-colors cursor-pointer"
          >
            Get Estimate
          </button>
        </div>
      </div>
    </div>
  );
};
