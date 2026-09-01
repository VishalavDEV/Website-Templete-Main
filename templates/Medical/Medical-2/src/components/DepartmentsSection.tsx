import React, { useState } from 'react';
import { Department, Doctor } from '../types';
import { departmentsData } from '../data/departmentsData';
import { doctorsData } from '../data/doctorsData';
import { 
  HeartPulse, Brain, Bone, Baby, Sparkles, 
  Stethoscope, ScanLine, Clock, Users, Building2, 
  CheckCircle2, ArrowRight, Calendar, UserCheck, ShieldCheck 
} from 'lucide-react';

interface DepartmentsSectionProps {
  onSelectDepartmentForBooking: (deptId: string) => void;
  onFilterDoctorsByDepartment: (deptId: string) => void;
  onSelectDoctorProfile: (doctor: Doctor) => void;
}

export const DepartmentsSection: React.FC<DepartmentsSectionProps> = ({
  onSelectDepartmentForBooking,
  onFilterDoctorsByDepartment,
  onSelectDoctorProfile,
}) => {
  const [activeDeptId, setActiveDeptId] = useState<string>(departmentsData[0].id);

  const activeDept = departmentsData.find(d => d.id === activeDeptId) || departmentsData[0];
  const associatedDoctors = doctorsData.filter(doc => doc.departmentId === activeDept.id);

  const getDeptIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartPulse': return HeartPulse;
      case 'Brain': return Brain;
      case 'Bone': return Bone;
      case 'Baby': return Baby;
      case 'Sparkles': return Sparkles;
      case 'Stethoscope': return Stethoscope;
      case 'ScanLine': return ScanLine;
      default: return Building2;
    }
  };

  return (
    <section id="departments" className="py-20 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-teal-700 font-black text-[10px] tracking-widest uppercase bg-teal-100/60 border border-teal-200/60 px-3.5 py-1 rounded-full">
            Clinical Departments
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Specialized Centers of Medical Excellence
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Our medical center is organized into dedicated clinical departments, each led by board-certified directors and equipped with advanced diagnostic and surgical technologies.
          </p>
        </div>

        {/* Department Tabs Bar */}
        <div className="flex items-center justify-start lg:justify-center overflow-x-auto gap-2 pb-2 no-scrollbar">
          {departmentsData.map((dept) => {
            const Icon = getDeptIcon(dept.iconName);
            const isActive = activeDeptId === dept.id;
            return (
              <button
                key={dept.id}
                id={`dept-tab-btn-${dept.slug}`}
                onClick={() => setActiveDeptId(dept.id)}
                className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-teal-600 text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-teal-600'}`} />
                <span>{dept.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Department In-Depth Showcase Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-6 sm:p-10 space-y-8 animate-fade-in">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left: Department Image & Quick Stats */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200">
                <img
                  src={activeDept.image}
                  alt={activeDept.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-black uppercase tracking-widest text-teal-300 block">
                    Chief of Department
                  </span>
                  <span className="text-sm font-extrabold">{activeDept.headDoctorName}</span>
                </div>
              </div>

              {/* Department Vital Metrics */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 bg-[#F8FAFC] rounded-xl border border-slate-200 space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-500 font-semibold text-[11px]">
                    <Clock className="w-3.5 h-3.5 text-teal-600" />
                    <span>Operating Hours</span>
                  </div>
                  <p className="font-bold text-slate-900 leading-tight">{activeDept.operatingHours}</p>
                </div>

                <div className="p-3.5 bg-[#F8FAFC] rounded-xl border border-slate-200 space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-500 font-semibold text-[11px]">
                    <Building2 className="w-3.5 h-3.5 text-teal-600" />
                    <span>Inpatient Capacity</span>
                  </div>
                  <p className="font-bold text-slate-900 leading-tight">{activeDept.bedCapacity} Dedicated Beds</p>
                </div>
              </div>
            </div>

            {/* Right: Full Description, Equipment, Services & Associated Doctors */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="bg-teal-50 text-teal-800 border border-teal-200 text-xs font-bold px-3 py-0.5 rounded-full">
                    {associatedDoctors.length} On-Duty Specialists
                  </span>
                  {activeDept.emergencyReady && (
                    <span className="bg-rose-50 text-rose-800 border border-rose-200 text-xs font-bold px-3 py-0.5 rounded-full flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-rose-600" />
                      24/7 Acute Ready
                    </span>
                  )}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {activeDept.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {activeDept.fullDesc}
                </p>
              </div>

              {/* Key Equipment & Core Services Grid */}
              <div className="grid sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-teal-50/50 rounded-xl border border-teal-100 space-y-2">
                  <h4 className="font-black text-teal-950 uppercase tracking-widest text-[10px] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                    Key Specialized Equipment
                  </h4>
                  <ul className="space-y-1.5 text-slate-700">
                    {activeDept.keyEquipment.map((eq, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0 mt-1.5" />
                        <span>{eq}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-[#F8FAFC] rounded-xl border border-slate-200 space-y-2">
                  <h4 className="font-black text-slate-900 uppercase tracking-widest text-[10px] flex items-center gap-1.5">
                    <Stethoscope className="w-3.5 h-3.5 text-teal-600" />
                    Specialized Procedures
                  </h4>
                  <ul className="space-y-1.5 text-slate-700">
                    {activeDept.servicesList.map((srv, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-1.5" />
                        <span>{srv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Department On-Duty Doctors List preview */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-widest flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-teal-600" />
                    Associated Specialists in {activeDept.name}
                  </h4>
                  <button
                    id={`view-all-docs-in-${activeDept.slug}`}
                    onClick={() => onFilterDoctorsByDepartment(activeDept.id)}
                    className="text-xs font-bold text-teal-700 hover:text-teal-900 underline cursor-pointer"
                  >
                    View All in Directory →
                  </button>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {associatedDoctors.map((doc) => (
                    <div
                      key={doc.id}
                      className="p-3 bg-[#F8FAFC] rounded-xl border border-slate-200 flex items-center justify-between gap-3 hover:border-teal-300 transition"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <img
                          src={doc.avatar}
                          alt={doc.name}
                          referrerPolicy="no-referrer"
                          className="w-10 h-10 rounded-lg object-cover border border-slate-200 shrink-0"
                        />
                        <div className="min-w-0">
                          <h5 className="font-bold text-xs text-slate-900 truncate">{doc.name}</h5>
                          <p className="text-[11px] text-teal-700 truncate">{doc.specialty}</p>
                        </div>
                      </div>
                      <button
                        id={`dept-view-doc-profile-${doc.id}`}
                        onClick={() => onSelectDoctorProfile(doc)}
                        className="px-2.5 py-1 bg-white hover:bg-teal-50 text-teal-700 border border-slate-200 hover:border-teal-300 text-[11px] font-bold rounded-lg shadow-xs transition shrink-0 cursor-pointer"
                      >
                        Profile
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Booking Action */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-slate-500">
                  Ready to consult with our {activeDept.name} clinical team?
                </span>
                <button
                  id={`book-in-dept-${activeDept.slug}-btn`}
                  onClick={() => onSelectDepartmentForBooking(activeDept.id)}
                  className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer group active:scale-98"
                >
                  <Calendar className="w-4 h-4 text-teal-400" />
                  <span>Book in {activeDept.name}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
