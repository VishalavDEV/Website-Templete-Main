import React, { useState, useEffect, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { Doctor, Specialty, LocationClinic } from '../types';
import { mockApi } from '../services/mockApi';
import specialtiesData from '../data/specialties.json';
import locationsData from '../data/locations.json';
import {
  Search,
  Filter,
  Star,
  Clock,
  MapPin,
  Calendar,
  User,
  Video,
  Building,
  RotateCcw,
  CheckCircle2,
  SlidersHorizontal,
  ChevronDown,
  Sparkles,
} from 'lucide-react';

export const DoctorDiscovery: React.FC<{ isFullPage?: boolean }> = ({ isFullPage = false }) => {
  const {
    openBooking,
    openDoctorProfile,
    filterSpecialtyId,
    setFilterSpecialtyId,
  } = useApp();

  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Filters State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>(filterSpecialtyId || 'all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [availabilityOnly, setAvailabilityOnly] = useState<boolean>(false);
  const [selectedGender, setSelectedGender] = useState<'all' | 'female' | 'male'>('all');
  const [selectedConsultType, setSelectedConsultType] = useState<'all' | 'in-person' | 'video'>('all');
  const [minExperience, setMinExperience] = useState<number>(0);

  // Sync if filterSpecialtyId changed from elsewhere
  useEffect(() => {
    if (filterSpecialtyId) {
      setSelectedSpecialty(filterSpecialtyId);
    }
  }, [filterSpecialtyId]);

  // Fetch doctors dynamically
  useEffect(() => {
    let isMounted = true;
    const fetchFiltered = async () => {
      setIsLoading(true);
      const res = await mockApi.searchDoctors({
        query: searchQuery,
        specialtyId: selectedSpecialty,
        locationId: selectedLocation,
        experienceMin: minExperience,
        availabilityOnly: availabilityOnly,
        gender: selectedGender,
        consultationType: selectedConsultType,
      });
      if (isMounted) {
        setDoctors(res);
        setIsLoading(false);
      }
    };
    fetchFiltered();
    return () => {
      isMounted = false;
    };
  }, [
    searchQuery,
    selectedSpecialty,
    selectedLocation,
    availabilityOnly,
    selectedGender,
    selectedConsultType,
    minExperience,
  ]);

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedSpecialty('all');
    setSelectedLocation('all');
    setAvailabilityOnly(false);
    setSelectedGender('all');
    setSelectedConsultType('all');
    setMinExperience(0);
    setFilterSpecialtyId(null);
  };

  const hasActiveFilters =
    searchQuery.trim() !== '' ||
    selectedSpecialty !== 'all' ||
    selectedLocation !== 'all' ||
    availabilityOnly ||
    selectedGender !== 'all' ||
    selectedConsultType !== 'all' ||
    minExperience > 0;

  return (
    <section
      id="doctor-discovery-section"
      className={`py-16 md:py-24 ${isFullPage ? 'pt-32' : 'bg-[#F9F7FB]'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8DDF2] text-[#665080] text-xs font-bold uppercase tracking-wider mb-3">
            <span>MEET YOUR CARE TEAM</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3E3445] tracking-tight">
            Specialists dedicated to your longevity.
          </h2>
          <p className="text-sm sm:text-base text-[#756B7C] mt-3 leading-relaxed">
            Consult with leaders across non-invasive cardiology, neurology, preventative internal
            medicine, and holistic recovery in our serene clinical suites.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-[#3E3445]/10 shadow-[0_10px_35px_rgba(90,70,110,0.06)] mb-10 space-y-4">
          {/* Main Search Input & Fast Toggles */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-[#8B6FAE] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                id="doctor-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search doctors by name, specialty, or condition..."
                className="w-full pl-11 pr-4 py-3 bg-[#F9F7FB] border border-[#3E3445]/10 focus:border-[#8B6FAE] rounded-2xl text-sm text-[#3E3445] placeholder-[#756B7C] focus:outline-none transition-all"
              />
            </div>

            {/* Specialty Dropdown */}
            <div className="md:col-span-3">
              <select
                id="doctor-filter-specialty"
                value={selectedSpecialty}
                onChange={(e) => {
                  setSelectedSpecialty(e.target.value);
                  setFilterSpecialtyId(e.target.value === 'all' ? null : e.target.value);
                }}
                className="w-full px-4 py-3 bg-[#F9F7FB] border border-[#3E3445]/10 focus:border-[#8B6FAE] rounded-2xl text-xs font-semibold text-[#3E3445] focus:outline-none cursor-pointer"
              >
                <option value="all">All Specialties ({specialtiesData.length})</option>
                {specialtiesData.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Location Dropdown */}
            <div className="md:col-span-3">
              <select
                id="doctor-filter-location"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-3 bg-[#F9F7FB] border border-[#3E3445]/10 focus:border-[#8B6FAE] rounded-2xl text-xs font-semibold text-[#3E3445] focus:outline-none cursor-pointer"
              >
                <option value="all">All Clinic Locations</option>
                {locationsData.map((loc) => (
                  <option key={loc.id} value={loc.id}>
                    {loc.name.replace('Aura ', '')}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Secondary Filter Chips */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#3E3445]/6">
            <div className="flex flex-wrap items-center gap-2">
              {/* Available Today Toggle */}
              <button
                id="filter-toggle-available-today"
                onClick={() => setAvailabilityOnly(!availabilityOnly)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all flex items-center gap-1.5 ${
                  availabilityOnly
                    ? 'bg-[#739B82] text-white border-[#739B82] shadow-xs'
                    : 'bg-[#F9F7FB] text-[#756B7C] border-[#3E3445]/10 hover:border-[#8B6FAE]/40'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                <span>Available Today</span>
              </button>

              {/* Consultation Type Selector */}
              <div className="flex items-center bg-[#F9F7FB] rounded-full p-0.5 border border-[#3E3445]/10">
                {(['all', 'in-person', 'video'] as const).map((type) => (
                  <button
                    key={type}
                    id={`filter-consult-${type}`}
                    onClick={() => setSelectedConsultType(type)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold capitalize transition-all ${
                      selectedConsultType === type
                        ? 'bg-white text-[#665080] shadow-xs font-bold'
                        : 'text-[#756B7C] hover:text-[#3E3445]'
                    }`}
                  >
                    {type === 'all' ? 'All Formats' : type === 'in-person' ? 'In-Person' : 'Video'}
                  </button>
                ))}
              </div>

              {/* Experience Threshold */}
              <select
                id="doctor-filter-experience"
                value={minExperience}
                onChange={(e) => setMinExperience(Number(e.target.value))}
                className="px-3 py-1.5 bg-[#F9F7FB] border border-[#3E3445]/10 rounded-full text-xs font-semibold text-[#756B7C] focus:outline-none cursor-pointer"
              >
                <option value={0}>Any Experience</option>
                <option value={10}>10+ Years Experience</option>
                <option value={15}>15+ Years Experience</option>
              </select>

              {/* Gender Filter */}
              <select
                id="doctor-filter-gender"
                value={selectedGender}
                onChange={(e) => setSelectedGender(e.target.value as any)}
                className="px-3 py-1.5 bg-[#F9F7FB] border border-[#3E3445]/10 rounded-full text-xs font-semibold text-[#756B7C] focus:outline-none cursor-pointer"
              >
                <option value="all">Doctor Gender: Any</option>
                <option value="female">Female Physicians</option>
                <option value="male">Male Physicians</option>
              </select>
            </div>

            {/* Clear All Filters Button */}
            {hasActiveFilters && (
              <button
                id="doctor-clear-filters-btn"
                onClick={handleClearFilters}
                className="text-xs font-semibold text-[#C77C83] hover:text-[#964E55] flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-[#F2D9DF]/30 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Doctors Grid */}
        {isLoading ? (
          <div className="py-20 text-center">
            <div className="w-10 h-10 border-3 border-[#E8DDF2] border-t-[#8B6FAE] rounded-full animate-spin mx-auto mb-3" />
            <p className="text-sm font-medium text-[#756B7C]">Loading care specialists...</p>
          </div>
        ) : doctors.length === 0 ? (
          <div className="lilac-card p-12 text-center max-w-lg mx-auto">
            <SlidersHorizontal className="w-10 h-10 text-[#B9A1D0] mx-auto mb-3" />
            <h3 className="font-serif text-xl font-bold text-[#3E3445] mb-2">
              No specialists match these filters
            </h3>
            <p className="text-sm text-[#756B7C] mb-6">
              Try adjusting your specialty, format, or search keywords to view available physicians.
            </p>
            <button
              id="no-results-clear-btn"
              onClick={handleClearFilters}
              className="px-6 py-2.5 bg-[#8B6FAE] text-white text-xs font-semibold rounded-full hover:bg-[#665080] transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {doctors.map((doc) => (
              <div
                key={doc.id}
                id={`doctor-card-${doc.id}`}
                className="lilac-card lilac-card-hover rounded-3xl overflow-hidden flex flex-col justify-between bg-white group"
              >
                {/* Doctor Photo & Badges */}
                <div className="relative">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-56 object-cover object-top group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20" />

                  {/* Availability Badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-md shadow-xs flex items-center gap-1.5 ${
                        doc.isAvailableToday
                          ? 'bg-[#739B82]/90 text-white'
                          : 'bg-white/90 text-[#665080]'
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${
                          doc.isAvailableToday ? 'bg-white' : 'bg-[#8B6FAE]'
                        }`}
                      />
                      <span>{doc.availability}</span>
                    </span>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/95 text-[#3E3445] shadow-xs flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-[#C99A62] text-[#C99A62]" />
                      <span>{doc.rating}</span>
                      <span className="text-[#756B7C] font-normal">({doc.reviewCount})</span>
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Specialty Pill */}
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#8B6FAE] mb-1">
                      {doc.specialtyName}
                    </div>

                    <h3 className="font-serif text-lg font-bold text-[#3E3445] group-hover:text-[#665080] transition-colors">
                      {doc.name}
                    </h3>
                    <p className="text-xs text-[#756B7C] line-clamp-1 mb-3">{doc.title}</p>

                    {/* Stats & Meta */}
                    <div className="space-y-1.5 text-xs text-[#756B7C] mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-3.5 h-3.5 text-[#8B6FAE]" />
                        <span>{doc.experienceYears} years clinical experience</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#8B6FAE]" />
                        <span className="truncate">{doc.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Video className="w-3.5 h-3.5 text-[#8B6FAE]" />
                        <span>
                          {doc.consultationTypes.includes('video')
                            ? 'In-Person & Video Telehealth'
                            : 'In-Person Consultation'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Consultation Fee & Working Action Buttons */}
                  <div>
                    <div className="flex items-center justify-between pt-3 pb-3 border-t border-[#3E3445]/6 text-xs">
                      <span className="text-[#756B7C]">Consultation</span>
                      <span className="font-bold text-[#3E3445]">${doc.fee}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        id={`view-profile-btn-${doc.id}`}
                        onClick={() => openDoctorProfile(doc)}
                        className="w-full py-2.5 text-xs font-semibold text-[#665080] bg-[#E8DDF2]/50 hover:bg-[#E8DDF2] rounded-xl transition-colors text-center"
                      >
                        VIEW PROFILE
                      </button>

                      <button
                        id={`book-doctor-btn-${doc.id}`}
                        onClick={() => openBooking(doc)}
                        className="w-full py-2.5 text-xs font-semibold text-white bg-[#8B6FAE] hover:bg-[#665080] rounded-xl transition-colors shadow-xs text-center flex items-center justify-center gap-1.5"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>BOOK</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
