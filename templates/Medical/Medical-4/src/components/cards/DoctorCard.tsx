import React from 'react';
import { Link } from 'react-router-dom';
import { Doctor } from '../../types';
import { Tilt3DCard } from '../common/Tilt3DCard';
import { Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react';

interface DoctorCardProps {
  doctor: Doctor;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  return (
    <Tilt3DCard maxTilt={8} perspective={1000} className="h-full">
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col h-full group" style={{ transformStyle: 'preserve-3d' }}>
        <div className="relative h-72 overflow-hidden bg-slate-100">
          <img 
            src={doctor.image} 
            alt={`Dr. ${doctor.firstName} ${doctor.lastName}`}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800";
            }}
            className="w-full h-full object-cover object-top"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <div className="flex gap-2 text-white" style={{ transform: 'translateZ(24px)' }}>
              <span className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-blue-600 transition-colors shadow-xs">
                <Facebook className="w-4 h-4" />
              </span>
              <span className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-blue-600 transition-colors shadow-xs">
                <Instagram className="w-4 h-4" />
              </span>
              <span className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-blue-600 transition-colors shadow-xs">
                <Linkedin className="w-4 h-4" />
              </span>
            </div>
          </div>
          
          <div 
            className="absolute top-4 right-4 bg-blue-600/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full shadow-md border border-white/20"
            style={{ transform: 'translateZ(22px)' }}
          >
            {doctor.departmentName}
          </div>
        </div>

        <div className="p-6 flex-1 flex flex-col justify-between" style={{ transform: 'translateZ(16px)' }}>
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
              Dr. {doctor.firstName} {doctor.lastName}
            </h3>
            <p className="text-blue-600 font-semibold text-sm mb-2">
              {doctor.specialization}
            </p>
            <p className="text-slate-500 text-xs mb-4">
              {doctor.qualification} • {doctor.experience}
            </p>
          </div>
          <Link 
            to={`/doctors/${doctor.slug}`}
            className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm hover:text-blue-700 transition-colors pt-3 border-t border-slate-100 group/link"
          >
            <span>View Profile</span>
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform" />
          </Link>
        </div>
      </div>
    </Tilt3DCard>
  );
};
