import React from 'react';
import { Link } from 'react-router-dom';
import { Department } from '../../types';
import { Tilt3DCard } from '../common/Tilt3DCard';
import { ArrowRight, HeartPulse, Brain, Bone, Baby, Sparkles, Stethoscope, Activity, Wind, Ear, Eye, UserCheck, ShieldAlert } from 'lucide-react';

interface DepartmentCardProps {
  department: Department;
}

export const DepartmentCard: React.FC<DepartmentCardProps> = ({ department }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />;
      case 'Brain': return <Brain className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />;
      case 'Bone': return <Bone className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />;
      case 'Baby': return <Baby className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />;
      case 'Stethoscope': return <Stethoscope className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />;
      case 'Activity': return <Activity className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />;
      case 'Wind': return <Wind className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />;
      case 'Ear': return <Ear className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />;
      case 'Eye': return <Eye className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />;
      default: return <Stethoscope className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />;
    }
  };

  return (
    <Tilt3DCard maxTilt={8} perspective={1000} className="h-full">
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col h-full group" style={{ transformStyle: 'preserve-3d' }}>
        <div className="relative h-52 overflow-hidden bg-slate-100">
          <img 
            src={department.image} 
            alt={department.name}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800";
            }}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent opacity-60 group-hover:opacity-85 transition-opacity"></div>
          
          {/* Floating 3D Icon Element */}
          <div 
            className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-md border border-white/70 group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors duration-300"
            style={{ transform: 'translateZ(25px)' }}
          >
            {getIcon(department.icon)}
          </div>

          <div 
            className="absolute bottom-3 right-3 bg-slate-900/85 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20 shadow-xs"
            style={{ transform: 'translateZ(18px)' }}
          >
            Specialized Wing
          </div>
        </div>

        <div className="p-6 flex-1 flex flex-col justify-between" style={{ transform: 'translateZ(15px)' }}>
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
              {department.name}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {department.shortDescription}
            </p>
          </div>
          <Link 
            to={`/departments/${department.slug}`}
            className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm hover:text-blue-700 transition-colors pt-3 border-t border-slate-100 group/link"
          >
            <span>Explore Department</span>
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform" />
          </Link>
        </div>
      </div>
    </Tilt3DCard>
  );
};
