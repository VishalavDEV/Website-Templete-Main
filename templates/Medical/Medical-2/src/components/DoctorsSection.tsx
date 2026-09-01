import React, { useState } from 'react';
import { Doctor } from '../types';
import { doctorsData } from '../data/doctorsData';
import { departmentsData } from '../data/departmentsData';
import { 
  Search, Filter, Star, Award, Calendar, 
  MapPin, Clock, ArrowRight, UserCheck, LayoutGrid, 
  List, X, DollarSign, CheckCircle2, Stethoscope 
} from 'lucide-react';

interface DoctorsSectionProps {
  onSelectDoctorProfile: (doctor: Doctor) => void;
  onBookDoctor: (doctor: Doctor) => void;
  selectedDepartmentFilter?: string;
  onDepartmentFilterChange?: (deptId: string) => void;
  searchQuery?: string;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({
  onSelectDoctorProfile,
  onBookDoctor,
  selectedDepartmentFilter = 'All',
  onDepartmentFilterChange,
  searchQuery = '',
}) => {
  const [search, setSearch] = useState<string>(searchQuery);
  const [deptFilter, setDeptFilter] = useState<string>(selectedDepartmentFilter);
  const [expFilter, setExpFilter] = useState<string>('All');
  const [availFilter, setAvailFilter] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Sync external props if changed
  React.useEffect(() => {
    if (selectedDepartmentFilter) {
      setDeptFilter(selectedDepartmentFilter);
    }
  }, [selectedDepartmentFilter]);

  React.useEffect(() => {
    if (searchQuery) {
      setSearch(searchQuery);
    }
  }, [searchQuery]);

  // Filtering logic
  const filteredDoctors = doctorsData.filter((doc) => {
    // Search query
    if (search.trim()) {
      const q = search.toLowerCase();
      const matchName = doc.name.toLowerCase().includes(q);
      const matchSpec = doc.specialty.toLowerCase().includes(q);
      const matchDept = doc.departmentName.toLowerCase().includes(q);
      const matchBio = doc.bio.toLowerCase().includes(q);
      if (!matchName && !matchSpec && !matchDept && !matchBio) return false;
    }

    // Department filter
    if (deptFilter !== 'All' && doc.departmentId !== deptFilter) {
      return false;
    }

    // Experience filter
    if (expFilter === '15+' && doc.experienceYears < 15) return false;
    if (expFilter === '10+' && doc.experienceYears < 10) return false;

    // Availability filter
    if (availFilter === 'today' && !doc.isAvailableToday) return false;

    return true;
  });

  // Sorting logic
  const sortedDoctors = [...filteredDoctors].sort((a, b) => {
    if (sortBy === 'rating') {
      return b.rating - a.rating;
    } else if (sortBy === 'experience') {
      return b.experienceYears - a.experienceYears;
    } else if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'fee') {
      return a.consultationFee - b.consultationFee;
    }
    return 0;
  });

  const handleResetFilters = () => {
    setSearch('');
    setDeptFilter('All');
    setExpFilter('All');
    setAvailFilter('All');
    setSortBy('rating');
    if (onDepartmentFilterChange) {
      onDepartmentFilterChange('All');
    }
  };

  return (
    <section id="doctors" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-teal-700 font-black text-[10px] tracking-widest uppercase bg-teal-100/60 border border-teal-200/60 px-3.5 py-1 rounded-full">
            Medical Faculty & Specialists
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Consult With Board-Certified Medical Leaders
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Our physicians are renowned specialists, educators, and researchers committed to precision diagnoses and personalized recovery plans.
          </p>
        </div>

        {/* Search, Filters & Controls Bar */}
        <div className="bg-[#F8FAFC] p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-center">
            {/* Search Input */}
            <div className="lg:col-span-4 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                id="doctor-directory-search-input"
                placeholder="Search physician, specialty, or condition..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-none bg-white"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Department Filter Dropdown */}
            <div className="lg:col-span-3">
              <select
                id="doctor-dept-filter-select"
                value={deptFilter}
                onChange={(e) => {
                  setDeptFilter(e.target.value);
                  if (onDepartmentFilterChange) onDepartmentFilterChange(e.target.value);
                }}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-none bg-white font-medium"
              >
                <option value="All">All Departments ({doctorsData.length})</option>
                {departmentsData.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Experience Filter */}
            <div className="lg:col-span-2">
              <select
                id="doctor-exp-filter-select"
                value={expFilter}
                onChange={(e) => setExpFilter(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-none bg-white font-medium"
              >
                <option value="All">All Experience</option>
                <option value="10+">10+ Years</option>
                <option value="15+">15+ Years</option>
              </select>
            </div>

            {/* Sort Dropdown */}
            <div className="lg:col-span-2">
              <select
                id="doctor-sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-none bg-white font-medium"
              >
                <option value="rating">Sort: Highest Rating</option>
                <option value="experience">Sort: Experience</option>
                <option value="name">Sort: Name (A-Z)</option>
                <option value="fee">Sort: Consultation Fee</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="lg:col-span-1 flex items-center justify-end gap-1">
              <button
                id="doctor-view-grid-btn"
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-xl border transition cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-teal-600 text-white border-teal-600'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                id="doctor-view-list-btn"
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-xl border transition cursor-pointer ${
                  viewMode === 'list'
                    ? 'bg-teal-600 text-white border-teal-600'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                }`}
                title="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Filter Badges Row */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-200 text-xs text-slate-600">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-semibold text-slate-500 text-[11px]">Availability:</span>
              <button
                id="filter-avail-all-btn"
                onClick={() => setAvailFilter('All')}
                className={`px-3 py-1 rounded-full text-[11px] font-semibold transition cursor-pointer ${
                  availFilter === 'All'
                    ? 'bg-teal-600 text-white'
                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                }`}
              >
                All Schedules
              </button>
              <button
                id="filter-avail-today-btn"
                onClick={() => setAvailFilter('today')}
                className={`px-3 py-1 rounded-full text-[11px] font-semibold transition flex items-center gap-1 cursor-pointer ${
                  availFilter === 'today'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Available Today
              </button>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[11px] text-slate-500 font-medium">
                Showing <strong className="text-slate-900">{sortedDoctors.length}</strong> of {doctorsData.length} Specialists
              </span>
              {(search || deptFilter !== 'All' || expFilter !== 'All' || availFilter !== 'All') && (
                <button
                  id="reset-doctor-filters-btn"
                  onClick={handleResetFilters}
                  className="text-[11px] font-bold text-teal-700 hover:underline cursor-pointer"
                >
                  Reset Filters
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Empty State */}
        {sortedDoctors.length === 0 && (
          <div className="text-center py-16 bg-[#F8FAFC] rounded-2xl border border-slate-200 space-y-4">
            <div className="w-14 h-14 bg-slate-200 text-slate-400 rounded-full flex items-center justify-center mx-auto">
              <Stethoscope className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">No doctors match your criteria</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              We couldn't find any specialist matching "{search || 'selected filters'}". Try clearing your search query or department filter.
            </p>
            <button
              id="empty-state-reset-btn"
              onClick={handleResetFilters}
              className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow-sm transition cursor-pointer"
            >
              Show All Specialists
            </button>
          </div>
        )}

        {/* Doctors Grid / List Layout */}
        {viewMode === 'grid' ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedDoctors.map((doctor) => (
              <div
                key={doctor.id}
                id={`doctor-card-${doctor.id}`}
                className="bg-white rounded-2xl border border-slate-200 hover:border-teal-300 p-6 flex flex-col justify-between transition-all hover:shadow-md group"
              >
                <div className="space-y-4">
                  {/* Doctor Top Avatar & Badges */}
                  <div className="flex items-start gap-4">
                    <div className="relative shrink-0">
                      <img
                        src={doctor.avatar}
                        alt={doctor.name}
                        referrerPolicy="no-referrer"
                        className="w-16 h-16 rounded-xl object-cover border border-slate-200 shadow-sm"
                      />
                      {doctor.isAvailableToday && (
                        <span
                          className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white"
                          title="Available Today"
                        />
                      )}
                    </div>

                    <div className="flex-1 min-w-0 space-y-1">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-100 px-2 py-0.5 rounded-full inline-block truncate">
                        {doctor.departmentName}
                      </span>
                      <h3 className="font-extrabold text-base text-slate-900 group-hover:text-teal-700 transition-colors truncate">
                        {doctor.name}
                      </h3>
                      <p className="text-xs text-teal-700 font-medium line-clamp-1">{doctor.specialty}</p>

                      <div className="flex items-center gap-1.5 text-xs pt-0.5">
                        <span className="text-amber-500 font-bold flex items-center gap-0.5">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          {doctor.rating.toFixed(1)}
                        </span>
                        <span className="text-[11px] text-slate-400">({doctor.reviewsCount})</span>
                      </div>
                    </div>
                  </div>

                  {/* Bio Excerpt */}
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed bg-[#F8FAFC] p-3 rounded-xl border border-slate-100">
                    {doctor.bio}
                  </p>

                  {/* Quick Specs */}
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 pt-1">
                    <div className="flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>{doctor.experienceYears}+ Yrs Exp</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <DollarSign className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>Fee: ${doctor.consultationFee}</span>
                    </div>
                  </div>

                  {/* Days Available Tag */}
                  <div className="text-[11px] text-slate-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">Days: {doctor.availableDays.slice(0, 3).join(', ')}</span>
                  </div>
                </div>

                {/* Actions Footer */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    id={`view-profile-btn-${doctor.id}`}
                    onClick={() => onSelectDoctorProfile(doctor)}
                    className="px-3.5 py-1.5 text-xs font-bold text-slate-700 hover:text-teal-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition cursor-pointer"
                  >
                    Profile
                  </button>

                  <button
                    id={`book-doctor-btn-${doctor.id}`}
                    onClick={() => onBookDoctor(doctor)}
                    className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl shadow-sm transition flex items-center gap-1.5 cursor-pointer active:scale-95"
                  >
                    <Calendar className="w-3.5 h-3.5 text-teal-400" />
                    <span>Book Visit</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* List View */
          <div className="space-y-4">
            {sortedDoctors.map((doctor) => (
              <div
                key={doctor.id}
                id={`doctor-list-card-${doctor.id}`}
                className="bg-white rounded-2xl border border-slate-200 hover:border-teal-300 p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition hover:shadow-md"
              >
                <div className="flex items-start gap-4 flex-1">
                  <img
                    src={doctor.avatar}
                    alt={doctor.name}
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 rounded-xl object-cover border border-slate-200 shrink-0"
                  />
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-100 px-2 py-0.5 rounded-full">
                        {doctor.departmentName}
                      </span>
                      <span className="text-xs font-bold text-amber-600 flex items-center gap-1">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        {doctor.rating.toFixed(1)} ({doctor.reviewsCount} reviews)
                      </span>
                    </div>

                    <h3 className="font-extrabold text-base text-slate-900">{doctor.name}</h3>
                    <p className="text-xs text-teal-700 font-medium">{doctor.specialty} • {doctor.qualification}</p>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 pt-1">
                      <span>{doctor.experienceYears}+ Years Clinical Exp</span>
                      <span>•</span>
                      <span>Consultation Fee: ${doctor.consultationFee}</span>
                      <span>•</span>
                      <span>Location: {doctor.officeLocation}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end md:self-center shrink-0">
                  <button
                    onClick={() => onSelectDoctorProfile(doctor)}
                    className="px-3.5 py-2 text-xs font-bold text-slate-700 hover:text-teal-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition cursor-pointer"
                  >
                    Profile
                  </button>
                  <button
                    onClick={() => onBookDoctor(doctor)}
                    className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl shadow-sm transition flex items-center gap-1.5 cursor-pointer active:scale-95"
                  >
                    <Calendar className="w-3.5 h-3.5 text-teal-400" />
                    <span>Book Now</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
