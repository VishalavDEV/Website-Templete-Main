import React, { useState } from 'react';
import { 
  Calendar, Search, ShieldCheck, Stethoscope, Video, 
  Activity, ArrowRight, PhoneCall, CheckCircle2, Award, 
  Clock, Sparkles, Building2, User 
} from 'lucide-react';

interface HeroProps {
  onBookAppointment: () => void;
  onFindDoctor: () => void;
  onExploreDepartments: () => void;
  onOpenEmergency: () => void;
  onOpenMyAppointments: () => void;
  onSelectDepartmentForBooking: (deptId: string) => void;
  onSearchQuery: (query: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onBookAppointment,
  onFindDoctor,
  onExploreDepartments,
  onOpenEmergency,
  onOpenMyAppointments,
  onSelectDepartmentForBooking,
  onSearchQuery,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const quickSearchSuggestions = [
    { label: 'Cardiology', deptId: 'dept-cardio' },
    { label: 'Dr. Elena Vance', query: 'Elena' },
    { label: 'MRI Scans', deptId: 'dept-diag' },
    { label: 'Pediatric Care', deptId: 'dept-peds' },
    { label: 'Robotic Orthopedics', deptId: 'dept-ortho' },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearchQuery(searchTerm.trim());
      onFindDoctor();
    }
  };

  return (
    <section id="home" className="relative bg-[#F8FAFC] text-slate-800 overflow-hidden py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        
        {/* Main Geometric Hero Banner */}
        <div className="bg-teal-700 rounded-3xl p-6 sm:p-10 text-white flex flex-col lg:flex-row items-center justify-between relative overflow-hidden shadow-xl gap-8">
          {/* Subtle Ambient Circular Blurs */}
          <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-teal-600 rounded-full blur-3xl opacity-50 pointer-events-none" />
          <div className="absolute -left-16 -top-16 w-72 h-72 bg-teal-500 rounded-full blur-3xl opacity-30 pointer-events-none" />

          {/* Left Column: Headline, Pill, Search, Action Buttons */}
          <div className="relative z-10 max-w-2xl space-y-5 text-center lg:text-left">
            {/* Geometric Pill Tag */}
            <span className="bg-teal-500/30 border border-white/20 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest inline-flex items-center gap-1.5 backdrop-blur-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-200" />
              <span>Advanced Medical Care • Nova Health</span>
            </span>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold leading-tight text-white tracking-tight">
              Advanced Medical Care <br className="hidden sm:inline" />
              Simplified for You.
            </h1>

            {/* Subtitle */}
            <p className="text-teal-100 text-sm sm:text-base leading-relaxed opacity-95 max-w-xl mx-auto lg:mx-0">
              Experience world-class healthcare with our network of 250+ specialists. Comprehensive robotic diagnostics, 24/7 trauma triage, and seamless appointment booking.
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearchSubmit} className="relative max-w-lg mx-auto lg:mx-0 pt-1">
              <div className="relative flex items-center bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl p-1.5 focus-within:ring-2 focus-within:ring-white transition-all shadow-md">
                <Search className="w-4 h-4 text-teal-200 ml-3 shrink-0" />
                <input
                  type="text"
                  id="hero-symptom-search-input"
                  placeholder="Search symptoms, doctors, or treatments..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-transparent px-3 py-2 text-xs sm:text-sm text-white placeholder-teal-100/70 focus:outline-none"
                />
                <button
                  type="submit"
                  id="hero-search-submit-btn"
                  className="px-4 py-2.5 bg-white text-teal-900 hover:bg-teal-50 font-bold text-xs rounded-xl shadow transition flex items-center gap-1.5 shrink-0 cursor-pointer"
                >
                  <span>Search</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Quick Tags Suggestions */}
              <div className="flex items-center gap-1.5 flex-wrap justify-center lg:justify-start pt-2.5 text-[11px] text-teal-100">
                <span className="opacity-75 font-semibold">Popular:</span>
                {quickSearchSuggestions.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    id={`quick-search-pill-${idx}`}
                    onClick={() => {
                      if (item.deptId) {
                        onSelectDepartmentForBooking(item.deptId);
                        onBookAppointment();
                      } else if (item.query) {
                        onSearchQuery(item.query);
                        onFindDoctor();
                      }
                    }}
                    className="px-2.5 py-0.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition cursor-pointer"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </form>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                id="hero-book-appointment-btn"
                onClick={onBookAppointment}
                className="bg-white text-teal-900 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md hover:bg-teal-50 transition-all flex items-center gap-2 cursor-pointer active:scale-98"
              >
                <Calendar className="w-4 h-4 text-teal-700" />
                <span>Book Appointment</span>
              </button>

              <button
                id="hero-find-doctor-btn"
                onClick={onFindDoctor}
                className="border border-white/30 bg-white/10 text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm backdrop-blur-sm hover:bg-white/20 transition-all flex items-center gap-2 cursor-pointer active:scale-98"
              >
                <Stethoscope className="w-4 h-4 text-teal-200" />
                <span>Find Doctors</span>
              </button>

              <button
                id="hero-departments-btn"
                onClick={onExploreDepartments}
                className="px-4 py-3 text-teal-100 hover:text-white text-xs sm:text-sm font-semibold transition cursor-pointer"
              >
                Departments →
              </button>
            </div>
          </div>

          {/* Right Column: Geometric Circular Trust Badge & Live Status */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 shrink-0">
            {/* Geometric Trust Badge */}
            <div className="w-44 h-44 sm:w-48 sm:h-48 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border border-white/30 text-center shadow-lg shrink-0">
              <div>
                <div className="text-4xl sm:text-5xl font-black tracking-tight text-white">98%</div>
                <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-teal-100 mt-1 opacity-90">
                  Patient Trust
                </div>
              </div>
            </div>

            {/* Quick Doctor Preview Card */}
            <div className="bg-white/95 backdrop-blur-md text-slate-900 p-4 rounded-2xl shadow-xl flex items-center gap-3.5 border border-white/40 max-w-xs">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80"
                alt="Dr. Elena Vance"
                referrerPolicy="no-referrer"
                className="w-12 h-12 rounded-xl object-cover border border-slate-200 shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <h4 className="font-bold text-xs text-slate-900 truncate">Dr. Elena Vance</h4>
                  <span className="bg-teal-50 text-teal-700 text-[9px] font-bold px-1.5 py-0.2 rounded-full border border-teal-200">
                    Cardiology
                  </span>
                </div>
                <p className="text-[10px] text-slate-500 truncate mt-0.5">Available Today • 12 yrs Exp.</p>
              </div>
              <button
                id="hero-quick-doctor-book-btn"
                onClick={() => {
                  onSelectDepartmentForBooking('dept-cardio');
                  onBookAppointment();
                }}
                className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-lg shadow-sm transition shrink-0 cursor-pointer"
              >
                Book
              </button>
            </div>
          </div>
        </div>

        {/* 4 Geometric Feature Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: Diagnostics */}
          <div 
            onClick={onExploreDepartments}
            className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all cursor-pointer group"
          >
            <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Diagnostics</h3>
            <p className="text-xs text-slate-500 mt-1 leading-normal">
              Full laboratory & 3.0T imaging suite available 24/7.
            </p>
          </div>

          {/* Card 2: Cardiology */}
          <div 
            onClick={() => {
              onSelectDepartmentForBooking('dept-cardio');
              onBookAppointment();
            }}
            className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-300 transition-all cursor-pointer group"
          >
            <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Stethoscope className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Cardiology</h3>
            <p className="text-xs text-slate-500 mt-1 leading-normal">
              Comprehensive heart health and advanced vascular care.
            </p>
          </div>

          {/* Card 3: Pediatrics */}
          <div 
            onClick={() => {
              onSelectDepartmentForBooking('dept-peds');
              onBookAppointment();
            }}
            className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all cursor-pointer group"
          >
            <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Pediatrics</h3>
            <p className="text-xs text-slate-500 mt-1 leading-normal">
              Specialized sensory care for the well-being of your kids.
            </p>
          </div>

          {/* Card 4: Emergency Triage */}
          <div 
            onClick={onOpenEmergency}
            className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-rose-300 transition-all cursor-pointer group"
          >
            <div className="w-10 h-10 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <PhoneCall className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Emergency 24/7</h3>
            <p className="text-xs text-slate-500 mt-1 leading-normal">
              Zero-wait trauma hotline and on-call specialist team.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
