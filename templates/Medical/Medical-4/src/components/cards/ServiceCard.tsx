import React from 'react';
import { Link } from 'react-router-dom';
import { Service } from '../../types';
import { Tilt3DCard } from '../common/Tilt3DCard';
import { ArrowRight, ShieldAlert, Scan, HeartPulse, FlaskConical, Activity, Pill, CheckSquare, Syringe, Apple, Heart, Stethoscope } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />;
      case 'Scan': return <Scan className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />;
      case 'FlaskConical': return <FlaskConical className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />;
      case 'Activity': return <Activity className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />;
      case 'Pill': return <Pill className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />;
      case 'CheckSquare': return <CheckSquare className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />;
      case 'Syringe': return <Syringe className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />;
      case 'Apple': return <Apple className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />;
      case 'Heart': return <Heart className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />;
      case 'Stethoscope': return <Stethoscope className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />;
      default: return <Stethoscope className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />;
    }
  };

  return (
    <Tilt3DCard maxTilt={8} perspective={1000} className="h-full">
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-7 flex flex-col justify-between h-full group relative overflow-hidden" style={{ transformStyle: 'preserve-3d' }}>
        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/80 rounded-bl-full -z-0 group-hover:bg-blue-600/10 transition-colors"></div>
        <div className="relative z-10" style={{ transform: 'translateZ(18px)' }}>
          <div 
            className="w-14 h-14 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:border-blue-600 shadow-sm transition-all duration-300"
            style={{ transform: 'translateZ(26px)' }}
          >
            {getIcon(service.icon)}
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
            {service.name}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            {service.shortDescription}
          </p>
        </div>
        <Link 
          to={`/services/${service.slug}`}
          className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm hover:text-blue-700 transition-colors pt-3 border-t border-slate-100 group/link relative z-10"
          style={{ transform: 'translateZ(14px)' }}
        >
          <span>Explore Service</span>
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform" />
        </Link>
      </div>
    </Tilt3DCard>
  );
};
