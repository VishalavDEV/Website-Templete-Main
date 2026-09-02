import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeartPulse, CheckCircle2, UserCheck, ArrowRight, Activity, Calendar } from "lucide-react";
import PageTransition from "../components/PageTransition";
import AppointmentModal from "../components/AppointmentModal";
import { departmentsData } from "../data/departmentsData";

export default function Departments() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [appointmentData, setAppointmentData] = useState(null);

  const handleBookDept = (dept) => {
    setAppointmentData({
      department: dept.name,
      doctor: dept.leadDoctor,
      bookingRef: Math.floor(100000 + Math.random() * 900000),
      date: "Tomorrow",
      time: "10:00 AM"
    });
    setIsModalOpen(true);
  };

  return (
    <PageTransition>
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        appointmentData={appointmentData}
      />

      {/* Banner */}
      <section className="relative pt-32 pb-16 border-b border-white/10 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            Clinical Centers of Excellence
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Medical Departments
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto font-light">
            Providing comprehensive diagnostic, surgical, and therapeutic patient care across 8 specialized clinical divisions.
          </p>
        </div>
      </section>

      {/* Department Detail Cards */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {departmentsData.map((dept, index) => (
            <div
              key={dept.id}
              id={dept.id}
              className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      {dept.bedCount} Dedicated Beds
                    </span>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                      {dept.surgeonsCount} Specialist Surgeons
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{dept.name}</h2>
                  <p className="text-slate-300 text-sm leading-relaxed">{dept.longDesc}</p>

                  <div className="pt-2">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 font-mono">
                      Specialized Procedures & Treatments
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {dept.treatments.map((t, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-xs text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span>{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Doctor & Action Panel */}
                <div className="lg:col-span-4 glass-card p-6 rounded-2xl border border-white/10 bg-slate-900/60 space-y-4">
                  <div className="text-xs text-slate-400 uppercase font-mono">Department Leadership</div>
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                      <UserCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{dept.leadDoctor}</div>
                      <div className="text-xs text-slate-400">Head of Department</div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleBookDept(dept)}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs transition-all shadow-md flex items-center justify-center space-x-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Department Visit</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
