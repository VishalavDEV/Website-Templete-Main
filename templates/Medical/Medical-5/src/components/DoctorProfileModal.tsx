import React from 'react';
import { useApp } from '../context/AppContext';
import {
  X,
  Star,
  Calendar,
  Award,
  GraduationCap,
  Languages,
  MapPin,
  Clock,
  Video,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';

export const DoctorProfileModal: React.FC = () => {
  const { selectedDoctorProfile, closeDoctorProfile, openBooking } = useApp();

  if (!selectedDoctorProfile) return null;

  const doc = selectedDoctorProfile;

  const handleBookNow = () => {
    closeDoctorProfile();
    openBooking(doc);
  };

  return (
    <div
      id="doctor-profile-modal-overlay"
      className="fixed inset-0 z-50 bg-[#3E3445]/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={closeDoctorProfile}
    >
      <div
        className="w-full max-w-3xl bg-[#FFFDFC] rounded-3xl shadow-[0_30px_70px_rgba(90,70,110,0.22)] border border-[#3E3445]/10 overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar with Close */}
        <div className="flex items-center justify-between p-5 border-b border-[#3E3445]/8 bg-[#F9F7FB]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8B6FAE]">
              Specialist Profile
            </span>
          </div>
          <button
            id="close-doctor-profile-btn"
            onClick={closeDoctorProfile}
            className="p-2 text-[#756B7C] hover:text-[#3E3445] hover:bg-[#E8DDF2]/50 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          {/* Top Physician Hero Row */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-[#3E3445]/8">
            <div className="relative shrink-0">
              <img
                src={doc.image}
                alt={doc.name}
                className="w-32 h-32 sm:w-36 sm:h-36 rounded-3xl object-cover border-2 border-[#8B6FAE]/30 shadow-md"
              />
              <div className="absolute -bottom-2 -right-2 p-1.5 bg-white rounded-xl shadow-xs border border-[#3E3445]/10">
                <ShieldCheck className="w-5 h-5 text-[#739B82]" />
              </div>
            </div>

            <div className="flex-1 text-center sm:text-left space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8DDF2] text-[#665080] text-xs font-bold">
                <span>{doc.specialtyName}</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#3E3445]">
                {doc.name}
              </h2>
              <p className="text-sm font-medium text-[#756B7C]">{doc.title}</p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-1 text-xs text-[#756B7C]">
                <div className="flex items-center gap-1 font-semibold text-[#3E3445]">
                  <Star className="w-4 h-4 fill-[#C99A62] text-[#C99A62]" />
                  <span>{doc.rating}</span>
                  <span className="text-[#756B7C] font-normal">({doc.reviewCount} reviews)</span>
                </div>
                <div>•</div>
                <div>{doc.experienceYears} Years Experience</div>
                <div>•</div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#8B6FAE]" />
                  <span>{doc.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Biography & Approach */}
          <div>
            <h4 className="font-serif text-lg font-bold text-[#3E3445] mb-2">
              Clinical Philosophy & Focus
            </h4>
            <p className="text-sm text-[#756B7C] leading-relaxed">{doc.bio}</p>
          </div>

          {/* Credentials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Education */}
            <div className="p-5 rounded-2xl bg-[#F9F7FB] border border-[#3E3445]/6">
              <div className="flex items-center gap-2 text-xs font-bold text-[#8B6FAE] uppercase tracking-wider mb-3">
                <GraduationCap className="w-4 h-4" />
                <span>Education & Fellowships</span>
              </div>
              <ul className="space-y-2 text-xs text-[#3E3445]">
                {doc.education.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B6FAE] mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Awards & Distinctions */}
            <div className="p-5 rounded-2xl bg-[#F9F7FB] border border-[#3E3445]/6">
              <div className="flex items-center gap-2 text-xs font-bold text-[#8B6FAE] uppercase tracking-wider mb-3">
                <Award className="w-4 h-4" />
                <span>Honors & Clinical Awards</span>
              </div>
              <ul className="space-y-2 text-xs text-[#3E3445]">
                {doc.awards.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D98B9C] mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Languages & Formats */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-[#E8DDF2]/40 border border-[#8B6FAE]/15 text-xs text-[#665080]">
            <div className="flex items-center gap-2">
              <Languages className="w-4 h-4 text-[#8B6FAE]" />
              <span className="font-semibold">Languages spoken:</span>
              <span>{doc.languages.join(', ')}</span>
            </div>

            <div className="flex items-center gap-2">
              <Video className="w-4 h-4 text-[#8B6FAE]" />
              <span className="font-semibold">Consultation Formats:</span>
              <span>
                {doc.consultationTypes.includes('video')
                  ? 'In-Person & Secure Telehealth'
                  : 'In-Person Only'}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Bottom CTA Bar */}
        <div className="p-5 border-t border-[#3E3445]/8 bg-[#F9F7FB] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="text-xs text-[#756B7C]">Consultation Rate</div>
            <div className="text-lg font-bold text-[#3E3445]">
              ${doc.fee}{' '}
              <span className="text-xs text-[#756B7C] font-normal">/ 45-min session</span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              id="close-profile-btn"
              onClick={closeDoctorProfile}
              className="px-5 py-2.5 text-xs font-semibold text-[#756B7C] hover:text-[#3E3445] rounded-xl hover:bg-white border border-transparent hover:border-[#3E3445]/10 transition-all flex-1 sm:flex-initial text-center"
            >
              Close
            </button>

            <button
              id="book-from-profile-btn"
              onClick={handleBookNow}
              className="px-7 py-2.5 bg-[#8B6FAE] hover:bg-[#665080] text-white text-xs font-semibold rounded-full shadow-[0_4px_16px_rgba(139,111,174,0.3)] transition-all flex items-center justify-center gap-2 flex-1 sm:flex-initial"
            >
              <Calendar className="w-4 h-4" />
              <span>Book with {doc.name.split(' ')[1]}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
