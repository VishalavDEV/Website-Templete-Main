import React from 'react';
import { Doctor } from '../types';
import { 
  X, Star, Award, GraduationCap, MapPin, Globe2, 
  Calendar, Clock, DollarSign, ShieldCheck, CheckCircle2, HeartPulse 
} from 'lucide-react';

interface DoctorProfileModalProps {
  doctor: Doctor | null;
  isOpen: boolean;
  onClose: () => void;
  onBookDoctor: (doctor: Doctor) => void;
}

export const DoctorProfileModal: React.FC<DoctorProfileModalProps> = ({
  doctor,
  isOpen,
  onClose,
  onBookDoctor,
}) => {
  if (!isOpen || !doctor) return null;

  return (
    <div
      id="doctor-profile-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="doctor-profile-title"
    >
      <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden">
        {/* Modal Header Bar */}
        <div className="relative bg-gradient-to-r from-teal-800 to-cyan-900 text-white p-6 sm:p-8">
          <button
            id="close-doc-profile-modal-btn"
            onClick={onClose}
            className="absolute top-5 right-5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition"
            aria-label="Close doctor profile"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="relative shrink-0">
              <img
                src={doctor.avatar}
                alt={doctor.name}
                referrerPolicy="no-referrer"
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover border-4 border-white/30 shadow-xl"
              />
              {doctor.isAvailableToday && (
                <span className="absolute -bottom-2 -right-2 bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full border-2 border-teal-900 shadow flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Available Today
                </span>
              )}
            </div>

            <div className="text-center sm:text-left space-y-2 flex-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="bg-teal-500/30 text-teal-200 border border-teal-400/40 text-xs font-semibold px-3 py-0.5 rounded-full">
                  {doctor.departmentName}
                </span>
                <span className="bg-amber-400/20 text-amber-200 border border-amber-300/30 text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  {doctor.rating.toFixed(1)} ({doctor.reviewsCount} verified reviews)
                </span>
              </div>

              <h3 id="doctor-profile-title" className="text-2xl sm:text-3xl font-extrabold text-white">
                {doctor.name}
              </h3>
              <p className="text-teal-100 text-sm font-medium">{doctor.title}</p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2 text-xs text-teal-200">
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-teal-300" />
                  <span>{doctor.experienceYears}+ Years Clinical Exp</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <DollarSign className="w-4 h-4 text-teal-300" />
                  <span>Consultation Fee: ${doctor.consultationFee}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700">
          {/* Biography */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <HeartPulse className="w-4 h-4 text-teal-600" />
              Clinical Background & Specialization
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
              {doctor.bio}
            </p>
          </div>

          {/* Qualifications & Certifications Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50/80 rounded-xl border border-slate-200/80">
              <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-teal-600" />
                Education & Fellowships
              </h5>
              <ul className="space-y-2 text-xs text-slate-600">
                {doctor.education.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-slate-50/80 rounded-xl border border-slate-200/80">
              <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                Board Certifications
              </h5>
              <ul className="space-y-2 text-xs text-slate-600">
                {doctor.certifications.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Availability & Office Location */}
          <div className="bg-teal-50/60 rounded-xl p-4 border border-teal-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <Calendar className="w-4 h-4 text-teal-700 shrink-0" />
                <span className="font-semibold text-slate-900">Clinic Days:</span>
                <span>{doctor.availableDays.join(', ')}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <Clock className="w-4 h-4 text-teal-700 shrink-0" />
                <span className="font-semibold text-slate-900">Daily Slots:</span>
                <span>{doctor.availableTimeSlots.slice(0, 4).join(', ')} (+ more)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <MapPin className="w-4 h-4 text-teal-700 shrink-0" />
                <span className="font-semibold text-slate-900">Location:</span>
                <span>{doctor.officeLocation}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <Globe2 className="w-4 h-4 text-teal-700 shrink-0" />
                <span className="font-semibold text-slate-900">Languages:</span>
                <span>{doctor.languages.join(', ')}</span>
              </div>
            </div>

            <button
              id={`book-doctor-now-btn-${doctor.id}`}
              onClick={() => {
                onClose();
                onBookDoctor(doctor);
              }}
              className="w-full sm:w-auto px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 shrink-0 group"
            >
              <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Book Appointment with Dr. {doctor.name.split(' ').pop()}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
