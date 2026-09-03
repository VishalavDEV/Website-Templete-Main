import React, { useEffect } from 'react';
import { X, Calendar, Award, GraduationCap, Languages, Clock, ArrowRight } from 'lucide-react';
import { Doctor } from '../types';

interface DoctorModalProps {
  doctor: Doctor | null;
  onClose: () => void;
  onBookWithDoctor: (doctorName: string) => void;
}

export const DoctorModal: React.FC<DoctorModalProps> = ({ doctor, onClose, onBookWithDoctor }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (doctor) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [doctor, onClose]);

  if (!doctor) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#252326]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div
        className="relative bg-[#FAF8F5] rounded-2xl max-w-2xl w-full shadow-2xl border border-[#E5DDD8] overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200 my-8"
        role="dialog"
        aria-labelledby="doctor-modal-title"
        aria-modal="true"
      >
        {/* Header Ribbon */}
        <div className="bg-[#542F3B] text-white p-6 sm:p-8 relative flex flex-col sm:flex-row gap-6 items-center">
          
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors focus-visible:ring-2 focus-visible:ring-[#C97873]"
            aria-label="Close doctor modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Doctor Photo */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border-2 border-[#E8B6A5] shrink-0 shadow-md">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div>
            <span className="inline-block text-xs uppercase tracking-wider font-bold text-[#E8B6A5] mb-1">
              Medical Specialist Profile
            </span>
            <h2 id="doctor-modal-title" className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF8F5]">
              {doctor.name}
            </h2>
            <p className="text-sm font-sans text-[#E8B6A5] font-bold mt-0.5">
              {doctor.specialty}
            </p>
            <p className="text-xs text-[#FAF8F5]/80 font-sans mt-1">
              {doctor.title} • {doctor.experience}
            </p>
          </div>

        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto font-sans">
          
          {/* Biography */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#C97873] mb-2 flex items-center gap-1.5">
              <Award className="w-4 h-4" /> Clinical Biography & Care Philosophy
            </h3>
            <p className="text-sm text-[#252326] leading-relaxed">
              {doctor.bio}
            </p>
          </div>

          {/* Education & Credentials */}
          <div className="bg-white p-4 rounded-xl border border-[#E5DDD8]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#542F3B] mb-2 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-[#C97873]" /> Education & Fellowships
            </h4>
            <p className="text-xs text-[#70696C]">{doctor.education}</p>
          </div>

          {/* Specialization Tags */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#542F3B] mb-2.5">
              Primary Clinical Expertise
            </h4>
            <div className="flex flex-wrap gap-2">
              {doctor.specializations.map((spec, idx) => (
                <span key={idx} className="px-3 py-1 bg-[#FAF0EE] text-[#C97873] border border-[#C97873]/20 rounded-md text-xs font-semibold">
                  {spec}
                </span>
              ))}
            </div>
          </div>

          {/* Languages & Availability */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-[#F2ECE9] rounded-xl border border-[#E5DDD8] flex items-center gap-3">
              <Languages className="w-5 h-5 text-[#C97873] shrink-0" />
              <div>
                <span className="text-[10px] font-bold text-[#70696C] uppercase block">Languages Spoken</span>
                <span className="text-xs font-bold text-[#542F3B]">{doctor.languages.join(', ')}</span>
              </div>
            </div>

            <div className="p-4 bg-[#F2ECE9] rounded-xl border border-[#E5DDD8] flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#C97873] shrink-0" />
              <div>
                <span className="text-[10px] font-bold text-[#70696C] uppercase block">Clinic Hours</span>
                <span className="text-xs font-bold text-[#542F3B]">{doctor.availability}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-[#F2ECE9]/60 border-t border-[#E5DDD8] flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="btn-secondary w-full sm:w-auto px-5 py-2.5 text-xs font-semibold"
          >
            Close Profile
          </button>

          <button
            onClick={() => {
              onClose();
              onBookWithDoctor(doctor.name);
            }}
            className="btn-primary w-full sm:w-auto px-6 py-3 text-xs font-semibold flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Consultation with {doctor.name.split(' ')[1]}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
