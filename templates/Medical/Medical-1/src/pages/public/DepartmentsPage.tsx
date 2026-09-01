import React, { useState, useEffect } from 'react';
import {
  Building2,
  Calendar,
  User,
  Activity,
  Phone,
  Bed,
  ArrowRight,
  Stethoscope,
  ChevronRight,
  Search
} from 'lucide-react';
import { Department, Doctor, Service } from '../../types';
import { ApiService } from '../../services/api';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { Card } from '../../components/common/Card';
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { ThreeDCard } from '../../components/common/ThreeDCard';
import { ImageWithFallback } from '../../components/common/ImageWithFallback';

interface DepartmentsPageProps {
  selectedDeptId?: string;
  onNavigate: (view: string, params?: Record<string, string>) => void;
  onOpenBooking: (prefill?: { doctorId?: string; departmentId?: string }) => void;
}

export const DepartmentsPage: React.FC<DepartmentsPageProps> = ({
  selectedDeptId,
  onNavigate,
  onOpenBooking
}) => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [activeDept, setActiveDept] = useState<Department | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [depts, docs, srvs] = await Promise.all([
          ApiService.getDepartments(),
          ApiService.getDoctors(),
          ApiService.getServices()
        ]);
        setDepartments(depts);
        setDoctors(docs);
        setServices(srvs);

        if (selectedDeptId) {
          const match = depts.find(d => d.department_id === selectedDeptId);
          if (match) setActiveDept(match);
          else setActiveDept(depts[0]);
        } else {
          setActiveDept(depts[0]);
        }
      } catch (err) {
        console.error('Error fetching department data', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [selectedDeptId]);

  const activeDoctors = activeDept ? doctors.filter(d => d.department_id === activeDept.department_id) : [];
  const activeServices = activeDept ? services.filter(s => s.department_id === activeDept.department_id) : [];

  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-teal-800 via-teal-900 to-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8 shadow-md">
        <ScrollReveal direction="3d">
          <div className="max-w-5xl mx-auto text-center space-y-3 relative z-10">
            <span className="text-xs font-bold text-teal-300 uppercase tracking-widest bg-teal-500/20 px-3.5 py-1.5 rounded-full border border-teal-400/30">
              Hospital Divisions
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Centers of Clinical Excellence
            </h1>
            <p className="text-teal-100/90 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Multidisciplinary medical facilities featuring specialized surgical suites, diagnostic laboratories, and dedicated intensive care units.
            </p>
          </div>
        </ScrollReveal>
        <div className="absolute right-[-60px] top-[-60px] w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute left-[30%] bottom-[-60px] w-64 h-64 bg-teal-400/10 rounded-full blur-2xl pointer-events-none"></div>
      </section>

      {/* Main Interactive Department Explorer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="h-96 bg-slate-100 rounded-3xl animate-pulse" />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Department Sidebar Selector */}
            <div className="lg:col-span-4 space-y-3">
              <ScrollReveal direction="left">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2">
                  All Hospital Departments ({departments.length})
                </h3>
              </ScrollReveal>
              <div className="space-y-2">
                {departments.map((dept, idx) => {
                  const isActive = activeDept?.department_id === dept.department_id;
                  return (
                    <ScrollReveal key={dept.department_id} direction="left" delay={idx * 50}>
                      <button
                        onClick={() => setActiveDept(dept)}
                        className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 cursor-pointer ${
                          isActive
                            ? 'border-teal-600 bg-teal-50/70 shadow-sm text-teal-950 font-bold scale-[1.02]'
                            : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                              isActive ? 'bg-teal-600 text-white shadow-xs' : 'bg-slate-100 text-slate-600'
                            }`}
                          >
                            <Building2 className="w-5 h-5" />
                          </div>
                          <div className="truncate">
                            <p className="text-sm font-bold truncate leading-tight">{dept.name}</p>
                            <span className="text-[11px] text-slate-500 font-normal">{dept.contact_extension}</span>
                          </div>
                        </div>
                        <ChevronRight
                          className={`w-4 h-4 shrink-0 transition-transform ${
                            isActive ? 'text-teal-600 transform translate-x-1' : 'text-slate-400'
                          }`}
                        />
                      </button>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>

            {/* Right Detailed Department Showcase */}
            {activeDept && (
              <div className="lg:col-span-8">
                <ScrollReveal direction="3d">
                  <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-md space-y-8">
                    {/* Department Hero Image */}
                    {activeDept.image_url && (
                      <div className="relative h-56 sm:h-64 w-full rounded-2xl overflow-hidden shadow-md -mt-2 mb-6">
                        <ImageWithFallback
                          src={activeDept.image_url}
                          alt={activeDept.name}
                          fallbackType="hospital"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent flex flex-col justify-end p-6 text-white">
                          <span className="text-xs font-bold text-teal-300 uppercase tracking-widest bg-teal-500/30 px-3 py-1 rounded-full border border-teal-400/30 w-fit backdrop-blur-md mb-1.5">
                            Clinical Center of Excellence
                          </span>
                          <h3 className="text-2xl sm:text-3xl font-extrabold drop-shadow-md">{activeDept.name}</h3>
                        </div>
                      </div>
                    )}

                    {/* Department Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                      <div>
                        <span className="text-xs font-bold text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200 uppercase tracking-wide">
                          Clinical Division
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-2">
                          {activeDept.name}
                        </h2>
                        <p className="text-xs text-slate-500 mt-1">
                          Department Lead: <strong className="text-slate-800">{activeDept.head_doctor_name}</strong>
                        </p>
                      </div>
                      <Button
                        variant="primary"
                        size="md"
                        leftIcon={<Calendar className="w-4 h-4" />}
                        onClick={() => onOpenBooking({ departmentId: activeDept.department_id })}
                      >
                        Book in this Dept
                      </Button>
                    </div>

                    {/* About & Stats */}
                    <div className="space-y-4">
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {activeDept.description}
                      </p>
                      <div className="grid grid-cols-3 gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs">
                        <div>
                          <span className="text-slate-400 block font-medium">Inpatient Beds</span>
                          <span className="font-bold text-slate-900 text-sm flex items-center gap-1 mt-0.5">
                            <Bed className="w-4 h-4 text-teal-600" />
                            {activeDept.bed_capacity || 40} Beds
                          </span>
                        </div>
                        <div>
                          <span className="text-slate-400 block font-medium">Specialist Faculty</span>
                          <span className="font-bold text-slate-900 text-sm flex items-center gap-1 mt-0.5">
                            <Stethoscope className="w-4 h-4 text-teal-600" />
                            {activeDoctors.length || 2} Doctors
                          </span>
                        </div>
                        <div>
                          <span className="text-slate-400 block font-medium">Contact Extension</span>
                          <span className="font-bold text-slate-900 text-sm flex items-center gap-1 mt-0.5">
                            <Phone className="w-4 h-4 text-teal-600" />
                            {activeDept.contact_extension}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Doctors in this Department */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-base font-bold text-slate-900">
                          Practicing Clinicians ({activeDoctors.length})
                        </h4>
                        <button
                          onClick={() => onNavigate('doctors', { deptId: activeDept.department_id })}
                          className="text-xs font-semibold text-teal-700 hover:underline cursor-pointer"
                        >
                          View in Directory →
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {activeDoctors.map((doc, idx) => (
                          <ThreeDCard key={doc.doctor_id} intensity={10} onClick={() => onNavigate('doctor-detail', { docId: doc.doctor_id })}>
                            <div className="p-4 rounded-2xl border border-slate-200 hover:border-teal-300 hover:bg-teal-50/30 transition-all flex gap-3 cursor-pointer group h-full">
                              <ImageWithFallback
                                src={doc.photo_url}
                                alt={doc.name}
                                fallbackType="doctor"
                                className="w-14 h-14 rounded-xl object-cover ring-1 ring-slate-200 shrink-0"
                              />
                              <div className="min-w-0 flex-1">
                                <h5 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-teal-700 truncate">
                                  {doc.name}
                                </h5>
                                <p className="text-[11px] text-teal-700 font-semibold truncate">{doc.specialization}</p>
                                <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100 text-[11px]">
                                  <span className="font-bold text-slate-800">₹{doc.consultation_fee} fee</span>
                                  <Badge variant={doc.available_today ? 'emerald' : 'slate'} size="sm">
                                    {doc.available_today ? 'Available Today' : 'Scheduled'}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                          </ThreeDCard>
                        ))}
                      </div>
                    </div>

                    {/* Services in this Department */}
                    {activeServices.length > 0 && (
                      <div className="space-y-4 pt-4 border-t border-slate-100">
                        <h4 className="text-base font-bold text-slate-900">
                          Departmental Services ({activeServices.length})
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {activeServices.map(srv => (
                            <ThreeDCard key={srv.service_id} intensity={8}>
                              <div className="rounded-2xl border border-slate-200 flex flex-col justify-between h-full overflow-hidden bg-white hover:border-teal-300 transition-all">
                                {srv.image_url && (
                                  <div className="h-32 w-full relative overflow-hidden bg-slate-100">
                                    <ImageWithFallback
                                      src={srv.image_url}
                                      alt={srv.name}
                                      fallbackType="treatment"
                                      className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                                    <span className="absolute bottom-2 left-3 text-white text-xs font-bold truncate">
                                      {srv.name}
                                    </span>
                                  </div>
                                )}
                                <div className="p-4 flex flex-col justify-between flex-1">
                                  <div>
                                    {!srv.image_url && <h5 className="text-xs font-bold text-slate-900">{srv.name}</h5>}
                                    <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">{srv.description}</p>
                                  </div>
                                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-100 text-[11px]">
                                    <span className="font-bold text-slate-800">{srv.price_range}</span>
                                    <span className="text-teal-700 font-semibold">{srv.duration}</span>
                                  </div>
                                </div>
                              </div>
                            </ThreeDCard>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
