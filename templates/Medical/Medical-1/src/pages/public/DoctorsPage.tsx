import React, { useState, useEffect } from 'react';
import {
  Search,
  Filter,
  Star,
  Calendar,
  Clock,
  MapPin,
  Stethoscope,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Users
} from 'lucide-react';
import { Doctor, Department } from '../../types';
import { ApiService } from '../../services/api';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { Card } from '../../components/common/Card';
import { Select } from '../../components/common/Input';
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { ThreeDCard } from '../../components/common/ThreeDCard';
import { ImageWithFallback } from '../../components/common/ImageWithFallback';

interface DoctorsPageProps {
  initialSearch?: string;
  initialDeptId?: string;
  onNavigate: (view: string, params?: Record<string, string>) => void;
  onOpenBooking: (prefill?: { doctorId?: string; departmentId?: string }) => void;
}

export const DoctorsPage: React.FC<DoctorsPageProps> = ({
  initialSearch = '',
  initialDeptId = '',
  onNavigate,
  onOpenBooking
}) => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(true);

  // Filters
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedDeptId, setSelectedDeptId] = useState(initialDeptId);
  const [availableTodayOnly, setAvailableTodayOnly] = useState(false);
  const [selectedSpecialization, setSelectedSpecialization] = useState('All');

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [docList, deptList] = await Promise.all([
          ApiService.getDoctors(),
          ApiService.getDepartments()
        ]);
        setDoctors(docList);
        setDepartments(deptList);
      } catch (err) {
        console.error('Failed to load doctors list', err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const specializations = [
    'All',
    'Orthopedic & Joint Surgeon',
    'Interventional Cardiologist',
    'Neurologist & Neuro-Oncologist',
    'Senior Pediatrician',
    'Emergency Medicine & Critical Care',
    'Dermatologist & Laser Surgeon'
  ];

  const filteredDoctors = doctors.filter(doc => {
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchName = doc.name.toLowerCase().includes(q);
      const matchSpec = doc.specialization.toLowerCase().includes(q);
      const matchDept = doc.department_name?.toLowerCase().includes(q);
      if (!matchName && !matchSpec && !matchDept) return false;
    }
    if (selectedDeptId && doc.department_id !== selectedDeptId) {
      return false;
    }
    if (selectedSpecialization !== 'All' && !doc.specialization.toLowerCase().includes(selectedSpecialization.toLowerCase())) {
      return false;
    }
    if (availableTodayOnly && !doc.available_today) {
      return false;
    }
    return true;
  });

  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-teal-800 via-teal-900 to-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8 shadow-md">
        <ScrollReveal direction="3d">
          <div className="max-w-5xl mx-auto text-center space-y-3 relative z-10">
            <span className="text-xs font-bold text-teal-300 uppercase tracking-widest bg-teal-500/20 px-3.5 py-1.5 rounded-full border border-teal-400/30">
              Clinical Specialists
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Consult Our World-Class Physicians
            </h1>
            <p className="text-teal-100/90 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Board-certified specialists committed to evidence-based medicine and patient safety across 20+ clinical disciplines.
            </p>
          </div>
        </ScrollReveal>
        <div className="absolute right-[-60px] top-[-60px] w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute left-[30%] bottom-[-60px] w-64 h-64 bg-teal-400/10 rounded-full blur-2xl pointer-events-none"></div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Search & Filter Bar */}
        <ScrollReveal direction="down">
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Search Bar */}
              <div className="md:col-span-5 relative">
                <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search doctor by name, specialty, or condition..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              {/* Department Dropdown */}
              <div className="md:col-span-4">
                <Select
                  value={selectedDeptId}
                  onChange={e => setSelectedDeptId(e.target.value)}
                >
                  <option value="">All Departments</option>
                  {departments.map(d => (
                    <option key={d.department_id} value={d.department_id}>
                      {d.name}
                    </option>
                  ))}
                </Select>
              </div>

              {/* Available Today Toggle */}
              <div className="md:col-span-3 flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => setAvailableTodayOnly(!availableTodayOnly)}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    availableTodayOnly
                      ? 'bg-teal-600 text-white border-teal-600 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <Sparkles className="w-4 h-4" />
                  Available Today Only
                </button>
              </div>
            </div>

            {/* Specialization Filter Badges */}
            <div className="flex items-center gap-2 overflow-x-auto pt-2 no-scrollbar">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1">
                Filter Specialty:
              </span>
              {specializations.map(spec => {
                const isSelected = selectedSpecialization === spec;
                return (
                  <button
                    key={spec}
                    onClick={() => setSelectedSpecialization(spec)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-teal-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {spec}
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Doctors Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="h-80 bg-slate-100 rounded-3xl animate-pulse" />
            ))}
          </div>
        ) : filteredDoctors.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200">
            <Stethoscope className="w-10 h-10 text-slate-400 mx-auto mb-2" />
            <h3 className="text-base font-bold text-slate-800">No Doctors Match Your Filter Criteria</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1">
              Try searching with different keywords, removing the department filter, or clearing the availability toggle.
            </p>
            <Button
              variant="outline"
              size="sm"
              className="mt-4"
              onClick={() => {
                setSearchQuery('');
                setSelectedDeptId('');
                setAvailableTodayOnly(false);
                setSelectedSpecialization('All');
              }}
            >
              Clear Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.map((doctor, idx) => (
              <ScrollReveal key={doctor.doctor_id} direction="3d" delay={idx * 60}>
                <ThreeDCard intensity={12}>
                  <div className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-2xs hover:border-teal-300 transition-all flex flex-col justify-between group h-full">
                    {/* Doctor Headshot & Status */}
                    <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                      <ImageWithFallback
                        src={doctor.photo_url}
                        alt={doctor.name}
                        fallbackType="doctor"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge variant={doctor.available_today ? 'emerald' : 'slate'} size="sm" dot>
                          {doctor.available_today ? 'Available Today' : 'Scheduled Slots'}
                        </Badge>
                      </div>
                      <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-lg">
                        {doctor.experience_years} Years Experience
                      </div>
                    </div>

                    {/* Doctor Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3
                              onClick={() => onNavigate('doctor-detail', { docId: doctor.doctor_id })}
                              className="text-lg font-bold text-slate-900 hover:text-teal-700 cursor-pointer transition-colors leading-tight"
                            >
                              {doctor.name}
                            </h3>
                            <p className="text-xs font-semibold text-teal-700 mt-1">{doctor.specialization}</p>
                          </div>
                          <div className="flex items-center text-amber-500 text-xs font-bold bg-amber-50 px-2 py-1 rounded-md shrink-0">
                            <Star className="w-3.5 h-3.5 fill-current mr-1" />
                            <span>{doctor.rating}</span>
                          </div>
                        </div>

                        <p className="text-xs text-slate-500 mt-1 truncate">{doctor.qualification}</p>
                        <p className="text-xs text-slate-600 mt-3 line-clamp-2 leading-relaxed">
                          {doctor.bio}
                        </p>

                        <div className="mt-3 text-[11px] text-slate-500">
                          <span>Languages: <strong>{doctor.languages.join(', ')}</strong></span>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                        <div>
                          <span className="text-[10px] text-slate-400 block font-medium uppercase">Consultation Fee</span>
                          <span className="text-sm font-black text-slate-900">₹{doctor.consultation_fee}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => onNavigate('doctor-detail', { docId: doctor.doctor_id })}
                          >
                            Profile
                          </Button>
                          <Button
                            variant="primary"
                            size="sm"
                            leftIcon={<Calendar className="w-3.5 h-3.5" />}
                            onClick={() => onOpenBooking({ doctorId: doctor.doctor_id, departmentId: doctor.department_id })}
                          >
                            Book
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </ThreeDCard>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
