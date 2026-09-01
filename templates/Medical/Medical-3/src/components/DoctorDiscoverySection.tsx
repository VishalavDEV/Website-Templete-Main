import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Calendar, 
  Heart, 
  MapPin, 
  Video, 
  CheckCircle2, 
  Award, 
  Sparkles, 
  UserCheck, 
  ArrowRight,
  SlidersHorizontal,
  X,
  Stethoscope
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Doctor } from '../types';

export const DoctorDiscoverySection: React.FC = () => {
  const { 
    doctors, 
    openBooking, 
    openDoctorProfile, 
    favoriteDoctorIds, 
    toggleFavoriteDoctor,
    selectedSpecialtyFilter,
    setSelectedSpecialtyFilter,
    globalSearchQuery,
    setGlobalSearchQuery 
  } = useApp();

  // Local filter states
  const [availabilityFilter, setAvailabilityFilter] = useState<'all' | 'today' | 'tomorrow'>('all');
  const [modeFilter, setModeFilter] = useState<'all' | 'telehealth' | 'in_person'>('all');
  const [languageFilter, setLanguageFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'rating' | 'experience' | 'fee_asc' | 'fee_desc'>('rating');

  const specialties = ['All', 'Cardiology', 'Neurology', 'Oncology', 'Orthopedics', 'Pediatrics', 'Dermatology'];
  const languagesList = ['all', 'English', 'Mandarin', 'Spanish', 'French', 'German', 'Hindi', 'Russian'];

  // Filtered & sorted doctor list
  const filteredDoctors = useMemo(() => {
    return doctors.filter((doc) => {
      // Search query
      const q = globalSearchQuery.toLowerCase().trim();
      const matchesSearch = !q || (
        doc.name.toLowerCase().includes(q) ||
        doc.specialty.toLowerCase().includes(q) ||
        doc.departmentName.toLowerCase().includes(q) ||
        doc.featuredTreatments.some(t => t.toLowerCase().includes(q))
      );

      // Specialty
      const matchesSpecialty = selectedSpecialtyFilter === 'All' || (
        doc.departmentName.toLowerCase().includes(selectedSpecialtyFilter.toLowerCase()) ||
        doc.specialty.toLowerCase().includes(selectedSpecialtyFilter.toLowerCase())
      );

      // Availability
      const matchesAvailability = 
        availabilityFilter === 'all' ? true :
        availabilityFilter === 'today' ? doc.isAvailableToday :
        availabilityFilter === 'tomorrow' ? doc.isAvailableTomorrow : true;

      // Mode
      const matchesMode = 
        modeFilter === 'all' ? true :
        modeFilter === 'telehealth' ? doc.telemedicineAvailable :
        modeFilter === 'in_person' ? doc.inPersonAvailable : true;

      // Language
      const matchesLanguage = 
        languageFilter === 'all' ? true : doc.languages.includes(languageFilter);

      return matchesSearch && matchesSpecialty && matchesAvailability && matchesMode && matchesLanguage;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'experience') return b.experienceYears - a.experienceYears;
      if (sortBy === 'fee_asc') return a.fee - b.fee;
      if (sortBy === 'fee_desc') return b.fee - a.fee;
      return 0;
    });
  }, [doctors, globalSearchQuery, selectedSpecialtyFilter, availabilityFilter, modeFilter, languageFilter, sortBy]);

  const clearAllFilters = () => {
    setSelectedSpecialtyFilter('All');
    setGlobalSearchQuery('');
    setAvailabilityFilter('all');
    setModeFilter('all');
    setLanguageFilter('all');
    setSortBy('rating');
  };

  const hasActiveFilters = 
    selectedSpecialtyFilter !== 'All' || 
    globalSearchQuery !== '' || 
    availabilityFilter !== 'all' || 
    modeFilter !== 'all' || 
    languageFilter !== 'all' || 
    sortBy !== 'rating';

  return (
    <section id="doctors-section" className="py-16 sm:py-24 bg-[#FAF9F6] min-h-screen text-[#0A1128]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A535C]/10 text-[#1A535C] text-[10px] font-bold uppercase tracking-[0.3em] mb-3">
            <Stethoscope className="w-3.5 h-3.5" />
            <span>Physician Directory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1128] tracking-tight font-['Manrope']">
            Find the right specialist for you.
          </h2>
          <p className="text-sm sm:text-base text-[#4A5568] mt-2.5 leading-relaxed">
            Every Aurevia Health physician is board-certified, actively conducts clinical research, and holds privileges at our flagship institutes.
          </p>
        </div>

        {/* Filter & Search Bento Control Panel */}
        <div className="p-5 sm:p-7 bg-white rounded-[32px] border border-gray-200/90 shadow-sm mb-10 space-y-4">
          
          {/* Top Search Input & Sort row */}
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            <div className="relative w-full sm:flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={globalSearchQuery}
                onChange={(e) => setGlobalSearchQuery(e.target.value)}
                placeholder="Search by physician name, symptom, sub-specialty, or treatment..."
                className="w-full pl-11 pr-10 py-3 rounded-2xl bg-[#FAF9F6] border border-gray-200 text-xs sm:text-sm font-medium text-[#0A1128] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1A535C]"
              />
              {globalSearchQuery && (
                <button
                  onClick={() => setGlobalSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
              <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#4A5568] whitespace-nowrap hidden md:inline">
                Sort By:
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full sm:w-auto px-4 py-3 rounded-2xl bg-[#FAF9F6] border border-gray-200 text-xs font-bold text-[#0A1128] focus:outline-none focus:ring-2 focus:ring-[#1A535C] cursor-pointer"
              >
                <option value="rating">Highest Rated (★)</option>
                <option value="experience">Most Experienced (Years)</option>
                <option value="fee_asc">Consultation Fee (Low to High)</option>
                <option value="fee_desc">Consultation Fee (High to Low)</option>
              </select>
            </div>
          </div>

          {/* Specialty Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-[10px] font-bold text-slate-400 mr-1 shrink-0 uppercase tracking-[0.2em]">
              Specialty:
            </span>
            {specialties.map((spec) => {
              const isSelected = selectedSpecialtyFilter === spec;
              return (
                <button
                  key={spec}
                  onClick={() => setSelectedSpecialtyFilter(spec)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#0A1128] text-white shadow-md'
                      : 'bg-[#FAF9F6] text-[#4A5568] hover:bg-gray-200'
                  }`}
                >
                  {spec}
                </button>
              );
            })}
          </div>

          {/* Additional Filter Row: Availability + Mode + Language */}
          <div className="pt-3 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex flex-wrap items-center gap-3">
              {/* Availability Filter */}
              <div className="flex items-center gap-1 bg-[#FAF9F6] p-1 rounded-xl border border-gray-200/80">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 px-2">Availability:</span>
                <button
                  onClick={() => setAvailabilityFilter('all')}
                  className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition-colors cursor-pointer ${
                    availabilityFilter === 'all' ? 'bg-white text-[#0A1128] shadow-xs' : 'text-[#4A5568]'
                  }`}
                >
                  Anytime
                </button>
                <button
                  onClick={() => setAvailabilityFilter('today')}
                  className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition-colors cursor-pointer ${
                    availabilityFilter === 'today' ? 'bg-[#1A535C] text-white shadow-xs' : 'text-[#4A5568]'
                  }`}
                >
                  Today
                </button>
                <button
                  onClick={() => setAvailabilityFilter('tomorrow')}
                  className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition-colors cursor-pointer ${
                    availabilityFilter === 'tomorrow' ? 'bg-[#1A535C] text-white shadow-xs' : 'text-[#4A5568]'
                  }`}
                >
                  Tomorrow
                </button>
              </div>

              {/* Mode Filter */}
              <div className="flex items-center gap-1 bg-[#FAF9F6] p-1 rounded-xl border border-gray-200/80">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 px-2">Mode:</span>
                <button
                  onClick={() => setModeFilter('all')}
                  className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition-colors cursor-pointer ${
                    modeFilter === 'all' ? 'bg-white text-[#0A1128] shadow-xs' : 'text-[#4A5568]'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setModeFilter('telehealth')}
                  className={`px-2.5 py-1 rounded-lg font-bold text-[11px] flex items-center gap-1 transition-colors cursor-pointer ${
                    modeFilter === 'telehealth' ? 'bg-[#1A535C] text-[#4ECDC4] shadow-xs' : 'text-[#4A5568]'
                  }`}
                >
                  <Video className="w-3 h-3" /> Telehealth HD
                </button>
                <button
                  onClick={() => setModeFilter('in_person')}
                  className={`px-2.5 py-1 rounded-lg font-bold text-[11px] flex items-center gap-1 transition-colors cursor-pointer ${
                    modeFilter === 'in_person' ? 'bg-[#0A1128] text-white shadow-xs' : 'text-[#4A5568]'
                  }`}
                >
                  <MapPin className="w-3 h-3" /> In-Clinic
                </button>
              </div>

              {/* Language Selector */}
              <select
                value={languageFilter}
                onChange={(e) => setLanguageFilter(e.target.value)}
                className="px-3 py-1.5 rounded-xl bg-[#FAF9F6] border border-gray-200/80 text-xs font-bold text-[#4A5568] focus:ring-1 focus:ring-[#1A535C] cursor-pointer"
              >
                <option value="all">Language (All)</option>
                {languagesList.filter(l => l !== 'all').map(l => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
            </div>

            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="text-xs font-bold text-rose-600 hover:text-rose-800 flex items-center gap-1 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" /> Clear All Filters
              </button>
            )}
          </div>

        </div>

        {/* Doctor Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs font-bold text-[#4A5568] uppercase tracking-wider">
            Showing <span className="text-[#0A1128] font-extrabold">{filteredDoctors.length}</span> Verified Specialists
          </p>
          <span className="text-xs text-slate-400">All physicians accept primary PPO / Medicare insurance</span>
        </div>

        {/* Bento Doctor Cards Grid */}
        {filteredDoctors.length === 0 ? (
          <div className="py-20 px-4 text-center rounded-[32px] bg-white border border-gray-200 shadow-xs max-w-lg mx-auto">
            <div className="w-12 h-12 rounded-2xl bg-[#1A535C]/10 text-[#1A535C] flex items-center justify-center mx-auto mb-4">
              <Stethoscope className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0A1128] mb-1">
              No specialists match your search
            </h3>
            <p className="text-xs text-[#4A5568] mb-6 leading-relaxed">
              We couldn’t find physicians matching those specific filter criteria. Try clearing specialty filters or searching for general terms.
            </p>
            <button
              onClick={clearAllFilters}
              className="px-6 py-2.5 rounded-full bg-[#0A1128] text-white text-xs font-bold hover:bg-[#1A535C] transition-colors cursor-pointer"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.map((doc) => {
              const isFav = favoriteDoctorIds.includes(doc.id);
              return (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35 }}
                  id={`doctor-card-${doc.id}`}
                  className="group rounded-[32px] bg-white border border-gray-200/90 hover:border-[#4ECDC4] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <div>
                    {/* Top Doctor Image & Badges */}
                    <div className="relative h-64 w-full bg-slate-900 overflow-hidden">
                      <img
                        src={doc.photoUrl}
                        alt={doc.name}
                        className="w-full h-full object-cover object-top group-hover:scale-104 transition-transform duration-500 filter brightness-[0.97]"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/85 via-transparent to-transparent" />

                      {/* Favorite Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavoriteDoctor(doc.id);
                        }}
                        className={`absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-md transition-all cursor-pointer ${
                          isFav
                            ? 'bg-rose-500 text-white shadow-md'
                            : 'bg-white/80 text-slate-600 hover:text-rose-500 hover:bg-white'
                        }`}
                        title={isFav ? 'Remove from saved' : 'Save doctor to favorites'}
                        aria-label="Favorite physician"
                      >
                        <Heart className={`w-4 h-4 ${isFav ? 'fill-white' : ''}`} />
                      </button>

                      {/* Availability Indicator Badge */}
                      <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold text-[#0A1128] border border-white/40 shadow-xs">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            doc.isAvailableToday ? 'bg-emerald-500 animate-pulse' : 'bg-[#4ECDC4]'
                          }`}
                        />
                        <span>{doc.isAvailableToday ? 'Available Today' : 'Available Tomorrow'}</span>
                      </div>

                      {/* Bottom Image Info: Department & Rating */}
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#4ECDC4]">
                          {doc.departmentName.split('&')[0]}
                        </span>
                        <div className="flex items-center gap-1 bg-[#0A1128]/80 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold border border-white/10">
                          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                          <span>{doc.rating.toFixed(2)}</span>
                          <span className="text-slate-400 font-normal">({doc.reviewsCount})</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Content Details */}
                    <div className="p-5 sm:p-6">
                      <div className="mb-3">
                        <div className="flex items-center gap-1.5">
                          <h3 className="text-lg font-extrabold text-[#0A1128] font-['Manrope']">
                            {doc.name}
                          </h3>
                          <span className="text-xs font-bold text-slate-400">{doc.title}</span>
                        </div>
                        <p className="text-xs font-bold text-[#1A535C] mt-0.5">
                          {doc.specialty}
                        </p>
                        <p className="text-[11px] text-[#4A5568]">
                          {doc.subSpecialty}
                        </p>
                      </div>

                      {/* Meta chips */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        <span className="px-2.5 py-1 rounded-full bg-[#FAF9F6] border border-gray-200 text-[11px] font-semibold text-[#4A5568]">
                          {doc.experienceYears} yrs exp
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-[#FAF9F6] border border-gray-200 text-[11px] font-semibold text-[#4A5568]">
                          {doc.languages.join(', ')}
                        </span>
                        {doc.telemedicineAvailable && (
                          <span className="px-2.5 py-1 rounded-full bg-[#1A535C]/10 text-[#1A535C] text-[11px] font-bold flex items-center gap-1">
                            <Video className="w-3 h-3" /> Telehealth
                          </span>
                        )}
                      </div>

                      {/* Next Opening & Fee info */}
                      <div className="py-2.5 px-3.5 rounded-2xl bg-[#FAF9F6] border border-gray-200/80 flex items-center justify-between text-xs mb-4">
                        <div>
                          <span className="text-[10px] text-slate-400 uppercase font-bold block">
                            Next Opening
                          </span>
                          <span className="font-bold text-[#0A1128] flex items-center gap-1">
                            <Clock className="w-3 h-3 text-[#1A535C]" />
                            {doc.nextAvailableSlot}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] text-slate-400 uppercase font-bold block">
                            Consultation
                          </span>
                          <span className="font-extrabold text-[#0A1128]">
                            ₹{doc.fee.toLocaleString('en-IN')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA Actions */}
                  <div className="p-5 sm:p-6 pt-0 border-t border-gray-100 flex items-center gap-2.5">
                    <button
                      onClick={() => openDoctorProfile(doc)}
                      className="flex-1 py-2.5 px-3 rounded-full bg-[#FAF9F6] hover:bg-gray-200 text-[#0A1128] text-xs font-bold transition-colors text-center border border-gray-200 cursor-pointer"
                    >
                      Profile
                    </button>
                    <button
                      onClick={() => openBooking(doc)}
                      className="flex-1 py-2.5 px-3 rounded-full bg-[#0A1128] hover:bg-[#1A535C] text-white text-xs font-bold shadow-md transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#4ECDC4]" />
                      <span>Book Visit</span>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
