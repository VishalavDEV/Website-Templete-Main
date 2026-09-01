import React from 'react';
import { ServiceItem } from '../types';
import { Sparkles, Briefcase, Code, Cloud, BarChart3, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  onSelectService: (service: ServiceItem) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-6 h-6 text-blue-600" />,
  Briefcase: <Briefcase className="w-6 h-6 text-blue-600" />,
  Code: <Code className="w-6 h-6 text-blue-600" />,
  Cloud: <Cloud className="w-6 h-6 text-blue-600" />,
  BarChart3: <BarChart3 className="w-6 h-6 text-blue-600" />,
  Cpu: <Cpu className="w-6 h-6 text-blue-600" />,
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelectService }) => {
  return (
    <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
      <div className="space-y-4">
        {/* Icon & Title */}
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 shadow-xs">
            {React.cloneElement(
              (iconMap[service.iconName] || <Code className="w-6 h-6" />) as React.ReactElement<any>,
              { className: "w-6 h-6 text-blue-600 group-hover:text-white transition-colors" }
            )}
          </div>
          <span className="text-xs font-mono font-medium text-slate-400 group-hover:text-blue-600 transition-colors">
            SERVICE
          </span>
        </div>

        <div>
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
            {service.title}
          </h3>
          <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
            {service.shortDesc}
          </p>
        </div>

        {/* Feature bullets snippet */}
        <ul className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
          {service.features.slice(0, 2).map((feat, idx) => (
            <li key={idx} className="flex items-center space-x-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
              <span className="truncate">{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Learn More Action Button */}
      <div className="pt-6 mt-6 border-t border-slate-100">
        <button
          onClick={() => onSelectService(service)}
          className="w-full flex items-center justify-between py-2.5 px-4 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 group-hover:bg-blue-50 group-hover:text-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <span>Learn More & Capabilities</span>
          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200" />
        </button>
      </div>
    </div>
  );
};
