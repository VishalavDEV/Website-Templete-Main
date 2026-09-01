import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Star, 
  MapPin, 
  Award, 
  GraduationCap, 
  ShieldCheck, 
  Clock, 
  Calendar, 
  Video, 
  Heart, 
  CheckCircle2, 
  Building2, 
  Languages, 
  DollarSign, 
  ArrowRight 
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const DoctorProfileModal: React.FC = () => {
  const { 
    selectedDoctorProfile, 
    closeDoctorProfile, 
    openBooking, 
    favoriteDoctorIds, 
    toggleFavoriteDoctor 
  } = useApp();

  if (!selectedDoctorProfile) return null;

  const doc = selectedDoctorProfile;
  const isFav = favoriteDoctorIds.includes(doc.id);

  const handleBookFromProfile = (mode: 'in_person' | 'telehealth' = 'in_person') => {
    closeDoctorProfile();
    openBooking(doc, mode);
  };

  return (
    <AnimatePresence>
      <div 
        id="doctor-profile-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-[#0A1128]/80 backdrop-blur-md overflow-y-auto"
        onClick={closeDoctorProfile}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          id="doctor-profile-modal"
          className="bg-white w-full max-w-4xl min-h-screen sm:min-h-0 sm:max-h-[90vh] sm:rounded-[36px] shadow-2xl overflow-hidden flex flex-col my-auto border border-gray-200 text-[#0A1128]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Bar */}
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-[#FAF9F6] shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1A535C] animate-pulse" />
              <span className="text-[10px] font-bold text-[#4A5568] uppercase tracking-[0.2em]">
                Physician Credentials & Clinical Profile
              </span>
            </div>
            <button
              onClick={closeDoctorProfile}
              className="p-2 rounded-full text-slate-400 hover:text-[#0A1128] hover:bg-gray-200/60 transition-colors cursor-pointer"
              aria-label="Close profile"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content Container */}
          <div className="overflow-y-auto p-6 sm:p-8 flex-1">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* LEFT: Main Profile Information (7 cols) */}
              <div className="lg:col-span-7 space-y-8">
                
                {/* Physician Hero Banner */}
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl overflow-hidden shadow-lg border-2 border-white shrink-0 bg-slate-100">
                    <img 
                      src={doc.photoUrl} 
                      alt={doc.name} 
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h2 className="text-2xl font-bold text-[#0A1128] font-['Manrope']">
                        {doc.name}
                      </h2>
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#1A535C]/10 text-[#1A535C] border border-[#1A535C]/20">
                        {doc.title}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-[#1A535C]">
                      {doc.specialty} • {doc.subSpecialty}
                    </p>
                    <p className="text-xs text-[#4A5568] mt-1 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-[#1A535C]" />
                      {doc.hospitalAffiliation}
                    </p>

                    {/* Quick Stats */}
                    <div className="flex items-center gap-4 mt-3 pt-3 border-t border-gray-100 text-xs">
                      <div className="flex items-center gap-1 text-amber-600 font-bold">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span>{doc.rating.toFixed(2)}</span>
                        <span className="text-slate-400 font-normal">({doc.reviewsCount} reviews)</span>
                      </div>
                      <div className="h-3 w-px bg-gray-200" />
                      <span className="text-[#4A5568] font-semibold">{doc.experienceYears} Years Experience</span>
                    </div>
                  </div>
                </div>

                {/* Biography */}
                <div>
                  <h4 className="text-xs font-bold text-[#0A1128] uppercase tracking-[0.2em] mb-2">
                    About & Clinical Philosophy
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                    {doc.bio}
                  </p>
                </div>

                {/* Clinical Specialties & Featured Treatments */}
                <div>
                  <h4 className="text-xs font-bold text-[#0A1128] uppercase tracking-[0.2em] mb-3">
                    Core Procedures & Clinical Focus
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {doc.featuredTreatments.map((treatment, i) => (
                      <div key={i} className="flex items-center gap-2 p-3 rounded-2xl bg-[#FAF9F6] border border-gray-200/80 text-xs font-semibold text-[#0A1128]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1A535C] shrink-0" />
                        <span className="truncate">{treatment}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education & Board Certifications */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-gray-200/80">
                    <div className="flex items-center gap-2 mb-2 text-[#1A535C] font-bold text-xs">
                      <GraduationCap className="w-4 h-4" />
                      <span>Education & Residency</span>
                    </div>
                    <ul className="space-y-1 text-xs text-[#4A5568]">
                      {doc.education.map((edu, idx) => (
                        <li key={idx} className="leading-snug">{edu}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-gray-200/80">
                    <div className="flex items-center gap-2 mb-2 text-[#1A535C] font-bold text-xs">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Board Certifications</span>
                    </div>
                    <ul className="space-y-1 text-xs text-[#4A5568]">
                      {doc.certifications.map((cert, idx) => (
                        <li key={idx} className="leading-snug">{cert}</li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>

              {/* RIGHT: Booking Action Box & Schedule (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Consultation Booking Bento Card */}
                <div className="p-6 rounded-[32px] bg-[#FAF9F6] border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Consultation Fee</span>
                      <span className="text-2xl font-extrabold text-[#0A1128] font-mono">₹{doc.fee.toLocaleString('en-IN')}</span>
                      <span className="text-xs text-[#4A5568]"> / session</span>
                    </div>
                    <button
                      onClick={() => toggleFavoriteDoctor(doc.id)}
                      className={`p-2.5 rounded-full border transition-colors cursor-pointer ${
                        isFav 
                          ? 'bg-rose-50 border-rose-200 text-rose-500' 
                          : 'bg-white border-gray-200 text-slate-400 hover:text-rose-500'
                      }`}
                      title={isFav ? 'Remove from favorites' : 'Add to favorites'}
                    >
                      <Heart className={`w-5 h-5 ${isFav ? 'fill-rose-500' : ''}`} />
                    </button>
                  </div>

                  {/* Available Slots Preview */}
                  <div className="mb-6">
                    <span className="text-xs font-bold text-[#0A1128] block mb-2">Next Available Timetable:</span>
                    <div className="grid grid-cols-2 gap-2">
                      {doc.availableSlots.slice(0, 4).map((slot, i) => (
                        <div key={i} className="p-2 rounded-xl bg-white border border-gray-200 text-xs font-mono font-semibold text-center text-[#0A1128]">
                          {slot}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Booking CTA Buttons */}
                  <div className="space-y-2.5">
                    {doc.consultationModes.includes('in_person') && (
                      <button
                        onClick={() => handleBookFromProfile('in_person')}
                        className="w-full py-3.5 rounded-full bg-[#0A1128] hover:bg-[#1A535C] text-white text-xs font-bold shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Book In-Person Visit</span>
                      </button>
                    )}

                    {doc.consultationModes.includes('telehealth') && (
                      <button
                        onClick={() => handleBookFromProfile('telehealth')}
                        className="w-full py-3.5 rounded-full bg-[#1A535C] hover:bg-[#154249] text-white text-xs font-bold shadow-sm flex items-center justify-center gap-2 transition-all border border-[#4ECDC4]/30 cursor-pointer"
                      >
                        <Video className="w-4 h-4 text-[#4ECDC4]" />
                        <span>Book Telehealth 4K Video</span>
                      </button>
                    )}
                  </div>

                  <p className="text-[11px] text-[#4A5568] text-center mt-3">
                    Instant confirmation & calendar invite included.
                  </p>
                </div>

                {/* Hospital Campus Location */}
                <div className="p-5 rounded-2xl bg-white border border-gray-200/80 text-xs">
                  <div className="flex items-center gap-2 text-[#0A1128] font-bold mb-1">
                    <MapPin className="w-4 h-4 text-[#1A535C]" />
                    <span>Practice Location</span>
                  </div>
                  <p className="text-[#4A5568]">
                    {doc.location}
                  </p>
                </div>

              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
