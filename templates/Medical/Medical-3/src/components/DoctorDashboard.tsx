import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Calendar, 
  Clock, 
  Users, 
  IndianRupee, 
  CheckCircle2, 
  XCircle, 
  Video, 
  FileText, 
  Activity, 
  ToggleLeft, 
  ToggleRight, 
  ChevronRight,
  Stethoscope,
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const DoctorDashboard: React.FC = () => {
  const { appointments, updateAppointmentStatus, openTelehealthRoom } = useApp();

  const [activeTab, setActiveTab] = useState<'today' | 'requests' | 'analytics'>('today');
  const [acceptingNewPatients, setAcceptingNewPatients] = useState(true);
  const [clinicalNotes, setClinicalNotes] = useState('Patient presents with mild resting palpitations. Baseline 4D Echocardiogram normal. Recommend 7-day continuous ECG telemetry patch and maintain low sodium hydration.');

  const todayAppointments = appointments.filter((a) => a.status === 'confirmed');
  const totalRevenue = appointments.reduce((acc, curr) => acc + (curr.status !== 'cancelled' ? curr.fee : 0), 0);

  return (
    <div id="doctor-dashboard" className="py-20 sm:py-28 bg-[#FAF9F6] min-h-screen text-[#0A1128]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Doctor Profile Bento Header */}
        <div className="p-6 sm:p-9 rounded-[36px] bg-[#0A1128] text-white shadow-2xl border border-[#1A535C] mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#1A535C]/30 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80"
                alt="Dr. Sarah Lin"
                className="w-16 h-16 rounded-2xl object-cover border-2 border-[#4ECDC4]"
                referrerPolicy="no-referrer"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl sm:text-2xl font-bold font-['Manrope']">
                    Dr. Sarah Lin, MD, FACC
                  </h1>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#1A535C] text-[#4ECDC4] text-[10px] font-bold uppercase tracking-[0.2em] border border-[#4ECDC4]/30">
                    Clinical Lead
                  </span>
                </div>
                <p className="text-xs text-slate-300">
                  Chief of Interventional Cardiology • Metro Central Pavilion Ste 502
                </p>
              </div>
            </div>

            {/* Quick Availability Switch */}
            <div className="flex items-center gap-3 bg-white/5 p-3 px-4 rounded-full border border-white/10 backdrop-blur-md">
              <div className="text-right">
                <span className="text-[9px] text-slate-400 uppercase font-bold tracking-[0.2em] block">Intake Status</span>
                <span className={`text-xs font-bold ${acceptingNewPatients ? 'text-[#4ECDC4]' : 'text-slate-400'}`}>
                  {acceptingNewPatients ? 'Accepting Patients' : 'Schedule Capped'}
                </span>
              </div>
              <button
                onClick={() => setAcceptingNewPatients((p) => !p)}
                className="text-[#4ECDC4] hover:text-white transition-colors cursor-pointer"
                title="Toggle availability"
              >
                {acceptingNewPatients ? (
                  <ToggleRight className="w-8 h-8 text-[#4ECDC4]" />
                ) : (
                  <ToggleLeft className="w-8 h-8 text-slate-500" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Doctor Key Metric Bento Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          <div className="p-6 rounded-[32px] bg-white border border-gray-200/90 shadow-sm">
            <div className="w-10 h-10 rounded-2xl bg-[#1A535C]/10 text-[#1A535C] flex items-center justify-center mb-3">
              <Calendar className="w-5 h-5" />
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-[#0A1128] font-['Manrope']">{todayAppointments.length}</p>
            <p className="text-xs font-bold text-[#0A1128] uppercase tracking-wider">Today&apos;s Schedule</p>
            <p className="text-[11px] text-[#4A5568]">All slots confirmed</p>
          </div>

          <div className="p-6 rounded-[32px] bg-white border border-gray-200/90 shadow-sm">
            <div className="w-10 h-10 rounded-2xl bg-[#1A535C]/10 text-[#1A535C] flex items-center justify-center mb-3">
              <Users className="w-5 h-5" />
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-[#0A1128] font-['Manrope']">342</p>
            <p className="text-xs font-bold text-[#0A1128] uppercase tracking-wider">Active Patient Panel</p>
            <p className="text-[11px] text-[#4A5568]">Cardiology & TAVR</p>
          </div>

          <div className="p-6 rounded-[32px] bg-white border border-gray-200/90 shadow-sm">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
              <IndianRupee className="w-5 h-5" />
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-[#0A1128] font-['Manrope']">₹{totalRevenue.toLocaleString('en-IN')}</p>
            <p className="text-xs font-bold text-[#0A1128] uppercase tracking-wider">Consultation Revenue</p>
            <p className="text-[11px] text-emerald-600 font-semibold">+18% this month</p>
          </div>

          <div className="p-6 rounded-[32px] bg-white border border-gray-200/90 shadow-sm">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
              <Activity className="w-5 h-5" />
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-[#0A1128] font-['Manrope']">99.4%</p>
            <p className="text-xs font-bold text-[#0A1128] uppercase tracking-wider">Satisfaction Index</p>
            <p className="text-[11px] text-[#4A5568]">4.98 / 5.0 Rating</p>
          </div>
        </div>

        {/* Schedule & Queue Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT: Today's Clinical Queue (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="p-6 sm:p-7 rounded-[32px] bg-white border border-gray-200/90 shadow-sm">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-[#1A535C]" />
                  <h3 className="text-xs font-bold text-[#0A1128] uppercase tracking-[0.2em]">
                    Today&apos;s Patient Queue & Consultations
                  </h3>
                </div>
                <span className="text-xs text-[#4A5568]">Auto-synced with EHR</span>
              </div>

              {appointments.length === 0 ? (
                <p className="text-xs text-[#4A5568] py-8 text-center">No patients scheduled in the queue.</p>
              ) : (
                <div className="space-y-3.5">
                  {appointments.map((appt) => (
                    <div
                      key={appt.id}
                      className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                        appt.status === 'confirmed'
                          ? 'bg-[#FAF9F6] border-gray-200'
                          : appt.status === 'in_consultation'
                          ? 'bg-[#1A535C]/10 border-[#1A535C]'
                          : 'bg-white border-gray-100 opacity-70'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold font-mono text-slate-400">{appt.timeSlot}</span>
                            <h4 className="text-sm font-bold text-[#0A1128]">{appt.patientName}</h4>
                            <span
                              className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full capitalize ${
                                appt.status === 'confirmed'
                                  ? 'bg-emerald-50 text-emerald-800'
                                  : appt.status === 'in_consultation'
                                  ? 'bg-[#1A535C] text-[#4ECDC4] animate-pulse'
                                  : appt.status === 'completed'
                                  ? 'bg-gray-100 text-gray-600'
                                  : 'bg-rose-50 text-rose-700'
                              }`}
                            >
                              {appt.status.replace('_', ' ')}
                            </span>
                          </div>
                          <p className="text-xs text-[#4A5568] mt-1">
                            <span className="font-semibold text-[#0A1128]">Complaint:</span> {appt.reason}
                          </p>
                          <p className="text-[11px] text-slate-400 mt-0.5">
                            Insurance: {appt.insuranceProvider || 'Self-Pay'} • ID: {appt.id}
                          </p>
                        </div>

                        {/* Status Change Buttons */}
                        <div className="flex items-center gap-2 self-end sm:self-center">
                          {appt.mode === 'telehealth' && appt.status !== 'completed' && (
                            <button
                              onClick={() => openTelehealthRoom(appt)}
                              className="px-4 py-2 rounded-full bg-[#1A535C] hover:bg-[#154249] text-white text-xs font-bold flex items-center gap-1.5 shadow-xs cursor-pointer"
                            >
                              <Video className="w-3.5 h-3.5 text-[#4ECDC4]" /> Start Telehealth
                            </button>
                          )}

                          {appt.status === 'confirmed' && (
                            <button
                              onClick={() => updateAppointmentStatus(appt.id, 'completed')}
                              className="px-4 py-2 rounded-full bg-white hover:bg-emerald-50 border border-gray-200 text-emerald-700 text-xs font-bold flex items-center gap-1 cursor-pointer"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5" /> Mark Completed
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: Clinical Notes & Prescription Pad (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 sm:p-7 rounded-[32px] bg-white border border-gray-200/90 shadow-sm">
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-gray-100">
                <FileText className="w-4 h-4 text-[#1A535C]" />
                <h3 className="text-xs font-bold text-[#0A1128] uppercase tracking-[0.2em]">
                  Clinical Intake Notes
                </h3>
              </div>

              <textarea
                rows={6}
                value={clinicalNotes}
                onChange={(e) => setClinicalNotes(e.target.value)}
                className="w-full p-3.5 rounded-2xl bg-[#FAF9F6] border border-gray-200 text-xs text-[#0A1128] focus:ring-2 focus:ring-[#1A535C] leading-relaxed font-sans mb-3 outline-hidden"
                placeholder="Record clinical observations, vitals assessment, and plan..."
              />

              <button
                onClick={() => alert('Encounter note signed & securely appended to patient EHR.')}
                className="w-full py-3 rounded-full bg-[#0A1128] hover:bg-[#1A535C] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs cursor-pointer transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#4ECDC4]" />
                <span>Sign & Save to EHR</span>
              </button>
            </div>

            {/* Department On-Call Schedule */}
            <div className="p-6 rounded-[32px] bg-[#FAF9F6] border border-gray-200 text-xs">
              <h4 className="text-xs font-bold text-[#0A1128] uppercase tracking-[0.2em] mb-2">
                Cardiology Department On-Call
              </h4>
              <p className="text-[#4A5568] mb-3">
                Cath Lab Team B: Dr. Sarah Lin (Primary), Dr. Robert Vance (Secondary).
              </p>
              <span className="inline-block text-[10px] font-bold text-[#1A535C] bg-[#1A535C]/10 px-3 py-1 rounded-full border border-[#1A535C]/20">
                Code STEMI Ready (Door-to-Balloon &lt; 38 min)
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
