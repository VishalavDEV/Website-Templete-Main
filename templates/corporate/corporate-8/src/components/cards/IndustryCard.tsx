import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Building2, Truck, Activity, Cpu, GraduationCap, ShoppingBag } from 'lucide-react';
import { Industry } from '../../types';

interface IndustryCardProps {
  industry: Industry;
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Truck,
  Activity,
  Cpu,
  GraduationCap,
  ShoppingBag,
  Building2
};

export const IndustryCard: React.FC<IndustryCardProps> = ({ industry }) => {
  const Icon = iconMap[industry.iconName] || Building2;

  return (
    <div className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:border-amber-500/50 transition-all flex flex-col justify-between">
      <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
        <img
          src={industry.heroImage}
          alt={industry.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
              <Icon className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white leading-tight">
              {industry.name}
            </h3>
          </div>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed">
            {industry.tagline}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {industry.complianceStandards.slice(0, 2).map((std, idx) => (
              <span key={idx} className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                {std}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
          <Link
            to={`/industries/${industry.slug}`}
            className="text-xs font-bold text-slate-900 group-hover:text-amber-600 flex items-center gap-1.5 transition-colors"
          >
            <span>Sector Protocol</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-500 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};
