import React, { useState } from 'react';
import { 
  Star, 
  Video, 
  MessageSquare, 
  Calendar, 
  Stethoscope, 
  Award, 
  Clock, 
  Globe, 
  GraduationCap, 
  ChevronRight,
  ShieldCheck,
  X
} from 'lucide-react';
import { Doctor } from '../types';

interface DoctorProfilesProps {
  doctors: Doctor[];
  onBookDoctor: (doctor: Doctor) => void;
  onInstantCall: (doctor: Doctor) => void;
}

export const DoctorProfiles: React.FC<DoctorProfilesProps> = ({
  doctors,
  onBookDoctor,
  onInstantCall,
}) => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const specialties = ['all', 'Cardiovascular Care', 'Neurology & Sleep', 'Endocrinology & Diabetes', 'Family Medicine'];

  const filteredDoctors = doctors.filter(doc => {
    if (activeCategory === 'all') return true;
    return doc.specialty === activeCategory;
  });

  const getAvailabilityPill = (availability: Doctor['availability'], text: string) => {
    switch (availability) {
      case 'available_now':
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-100 text-teal-800">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
            {text}
          </span>
        );
      case 'next_available_today':
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-100 text-sky-800">
            <Clock className="w-2.5 h-2.5" />
            {text}
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
            <Calendar className="w-2.5 h-2.5" />
            {text}
          </span>
        );
    }
  };

  return (
    <div 
      id="care-team-doctor-profiles-section"
      className="space-y-4"
    >
      {/* Header & Specialty Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 font-['Outfit']">Care Team & Specialists</h3>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200">
              Verified Doctors
            </span>
          </div>
          <p className="text-xs text-slate-500">Board-certified clinicians available for instant video & scheduled visits</p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
          {specialties.map(spec => (
            <button
              key={spec}
              onClick={() => setActiveCategory(spec)}
              className={`px-3 py-1 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === spec
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {spec === 'all' ? 'All Specialties' : spec.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {filteredDoctors.map(doctor => (
          <div
            key={doctor.id}
            className="bg-white rounded-3xl border border-slate-200/80 p-5 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group hover:border-teal-300"
          >
            <div>
              {/* Doctor Avatar + Rating Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="relative">
                  <img
                    src={doctor.avatarUrl}
                    alt={doctor.name}
                    className="w-14 h-14 rounded-2xl object-cover ring-2 ring-slate-100 group-hover:ring-teal-200 transition-all shadow-xs"
                  />
                  <span className="absolute -bottom-1 -right-1 bg-teal-500 text-white p-0.5 rounded-full ring-2 ring-white" title="Verified Specialist">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Rating Badge */}
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-1 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded-lg text-xs font-extrabold text-amber-900">
                    <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-500" />
                    <span>{doctor.rating.toFixed(2)}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 mt-0.5 font-medium">
                    ({doctor.reviewCount} reviews)
                  </span>
                </div>
              </div>

              {/* Doctor Info */}
              <div className="mt-3.5 space-y-1">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-teal-700 transition-colors">
                  {doctor.name}
                </h4>
                <p className="text-xs font-semibold text-teal-700 flex items-center gap-1">
                  <Stethoscope className="w-3.5 h-3.5 text-teal-600" />
                  {doctor.specialty}
                </p>
                <p className="text-[11px] text-slate-500 line-clamp-1">{doctor.department}</p>
              </div>

              {/* Availability & Experience pills */}
              <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2">
                {getAvailabilityPill(doctor.availability, doctor.availabilityText)}
                <span className="text-[10px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                  {doctor.experienceYears} yrs exp
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-slate-400 font-medium">Virtual Visit</span>
                <span className="text-slate-800 font-bold">{doctor.consultationFee}</span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => onBookDoctor(doctor)}
                  id={`book-doctor-${doctor.id}-btn`}
                  className="py-2 bg-teal-50 hover:bg-teal-100 text-teal-800 font-bold rounded-xl text-xs flex items-center justify-center gap-1 transition-colors cursor-pointer border border-teal-200/60"
                >
                  <Calendar className="w-3.5 h-3.5 text-teal-600" />
                  Book Visit
                </button>

                <button
                  onClick={() => setSelectedDoctor(doctor)}
                  id={`view-doctor-${doctor.id}-btn`}
                  className="py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs flex items-center justify-center gap-1 transition-colors cursor-pointer"
                >
                  Profile
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Doctor Detail Modal */}
      {selectedDoctor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-xs p-4">
          <div className="bg-white max-w-lg w-full rounded-3xl p-6 shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-150 relative">
            <button
              onClick={() => setSelectedDoctor(null)}
              className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Doctor Header */}
            <div className="flex items-start gap-4">
              <img
                src={selectedDoctor.avatarUrl}
                alt={selectedDoctor.name}
                className="w-16 h-16 rounded-2xl object-cover ring-2 ring-teal-200"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-slate-900">{selectedDoctor.name}</h3>
                  <span className="flex items-center gap-1 bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold px-2 py-0.5 rounded-lg">
                    <Star className="w-3 h-3 fill-amber-400 stroke-amber-500" />
                    {selectedDoctor.rating.toFixed(2)}
                  </span>
                </div>
                <p className="text-xs font-semibold text-teal-700">{selectedDoctor.title}</p>
                <p className="text-[11px] text-slate-500">{selectedDoctor.hospital}</p>
              </div>
            </div>

            {/* Credentials & Details */}
            <div className="mt-5 space-y-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                <h5 className="font-bold text-slate-900 mb-1">Clinical Biography</h5>
                <p className="text-slate-600 leading-relaxed">{selectedDoctor.about}</p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="p-2.5 bg-teal-50/50 rounded-xl border border-teal-100/60">
                  <span className="text-slate-500 block mb-0.5 font-medium">Education</span>
                  <span className="font-bold text-slate-800">{selectedDoctor.education}</span>
                </div>
                <div className="p-2.5 bg-sky-50/50 rounded-xl border border-sky-100/60">
                  <span className="text-slate-500 block mb-0.5 font-medium">Languages</span>
                  <span className="font-bold text-slate-800">{selectedDoctor.languages.join(', ')}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => {
                  const doc = selectedDoctor;
                  setSelectedDoctor(null);
                  onBookDoctor(doc);
                }}
                className="flex-1 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-bold rounded-2xl text-xs flex items-center justify-center gap-1.5 shadow-md shadow-teal-500/20 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                Schedule Consultation ({selectedDoctor.consultationFee})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
