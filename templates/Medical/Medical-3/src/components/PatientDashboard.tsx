import React from 'react';
import { motion } from 'motion/react';
import { 
  Calendar, 
  Clock, 
  Video, 
  MapPin, 
  Activity, 
  HeartPulse, 
  Pill, 
  FileText, 
  Download, 
  Star, 
  Plus, 
  ArrowRight, 
  RefreshCw, 
  CheckCircle2, 
  AlertCircle,
  Stethoscope,
  ChevronRight,
  ShieldCheck,
  Heart
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Appointment } from '../types';

export const PatientDashboard: React.FC = () => {
  const { 
    appointments, 
    vitals, 
    prescriptions, 
    labResults, 
    doctors, 
    favoriteDoctorIds, 
    openBooking, 
    openDoctorProfile, 
    openTelehealthRoom, 
    cancelAppointment, 
    requestPrescriptionRefill,
    setActiveTab 
  } = useApp();

  // Find next upcoming active appointment
  const upcomingAppointments = appointments.filter((a) => a.status === 'confirmed');
  const nextAppointment: Appointment | undefined = upcomingAppointments[0];
  const pastAppointments = appointments.filter((a) => a.status === 'completed' || a.status === 'cancelled');

  const favoriteDoctorsList = doctors.filter((d) => favoriteDoctorIds.includes(d.id));

  return (
    <div id="patient-dashboard" className="py-20 sm:py-28 bg-[#FAF9F6] min-h-screen text-[#0A1128]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Greeting & Bento Summary Banner */}
        <div className="mb-8">
          <div className="p-6 sm:p-9 rounded-[36px] bg-[#0A1128] text-white shadow-2xl border border-[#1A535C] relative overflow-hidden">
            {/* Background glowing sphere */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#1A535C]/30 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-xl">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#4ECDC4] block mb-1">
                  Patient Health Records & Portal
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold font-['Manrope'] mb-2">
                  Good morning, Alex.
                </h1>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {nextAppointment ? (
                    <>
                      Your next clinical consultation with <span className="text-white font-bold">{nextAppointment.doctorName}</span> is scheduled for{' '}
                      <span className="text-[#4ECDC4] font-bold">{nextAppointment.date} at {nextAppointment.timeSlot}</span>.
                    </>
                  ) : (
                    'You have no urgent clinical visits pending today. Your biometrics and telemetry are optimal.'
                  )}
                </p>
              </div>

              {/* Action Button inside Hero */}
              <div className="flex flex-wrap items-center gap-3">
                {nextAppointment && nextAppointment.mode === 'telehealth' ? (
                  <button
                    onClick={() => openTelehealthRoom(nextAppointment)}
                    id="join-telehealth-btn"
                    className="px-6 py-3 rounded-full bg-[#4ECDC4] hover:bg-[#3DB8AF] text-[#0A1128] text-xs font-extrabold shadow-lg flex items-center gap-2 transition-all active:scale-95 cursor-pointer"
                  >
                    <Video className="w-4 h-4" />
                    <span>Launch Telehealth HD Room</span>
                  </button>
                ) : (
                  <button
                    onClick={() => openBooking()}
                    className="px-6 py-3 rounded-full bg-[#1A535C] hover:bg-[#154249] text-white text-xs font-bold shadow-md flex items-center gap-2 transition-all cursor-pointer border border-[#4ECDC4]/30"
                  >
                    <Plus className="w-4 h-4 text-[#4ECDC4]" />
                    <span>Schedule New Appointment</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bento Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT: Main Activity & Appointments (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Upcoming Appointments Bento Card */}
            <div className="p-6 sm:p-7 rounded-[32px] bg-white border border-gray-200/90 shadow-sm">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#1A535C]" />
                  <h3 className="text-xs font-bold text-[#0A1128] uppercase tracking-[0.2em]">
                    Upcoming Consultations ({upcomingAppointments.length})
                  </h3>
                </div>
                <button
                  onClick={() => openBooking()}
                  className="text-xs font-bold text-[#1A535C] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5 text-[#4ECDC4]" /> Book Another
                </button>
              </div>

              {upcomingAppointments.length === 0 ? (
                <div className="py-8 text-center text-[#4A5568]">
                  <p className="text-xs">No upcoming appointments scheduled.</p>
                  <button
                    onClick={() => openBooking()}
                    className="mt-3 px-5 py-2.5 rounded-full bg-[#0A1128] text-white text-xs font-bold cursor-pointer"
                  >
                    Book a Specialist
                  </button>
                </div>
              ) : (
                <div className="space-y-3.5">
                  {upcomingAppointments.map((appt) => (
                    <div
                      key={appt.id}
                      className="p-4 sm:p-5 rounded-2xl bg-[#FAF9F6] border border-gray-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div className="flex items-start gap-4">
                        <img
                          src={appt.doctorPhoto}
                          alt={appt.doctorName}
                          className="w-12 h-12 rounded-xl object-cover shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm font-bold text-[#0A1128]">{appt.doctorName}</h4>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#1A535C]/10 text-[#1A535C]">
                              {appt.id}
                            </span>
                          </div>
                          <p className="text-xs font-semibold text-[#1A535C]">{appt.doctorSpecialty}</p>
                          <p className="text-xs text-[#4A5568] mt-1 flex items-center gap-3">
                            <span className="font-semibold text-[#0A1128] flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5 text-[#1A535C]" /> {appt.date}
                            </span>
                            <span className="font-semibold text-[#0A1128] flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5 text-[#4ECDC4]" /> {appt.timeSlot}
                            </span>
                          </p>
                        </div>
                      </div>

                      {/* Right Action buttons */}
                      <div className="flex items-center gap-2 self-end sm:self-center">
                        {appt.mode === 'telehealth' ? (
                          <button
                            onClick={() => openTelehealthRoom(appt)}
                            className="px-4 py-2 rounded-full bg-[#1A535C] hover:bg-[#154249] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm cursor-pointer"
                          >
                            <Video className="w-3.5 h-3.5 text-[#4ECDC4]" /> Join Room
                          </button>
                        ) : (
                          <span className="text-xs font-medium text-[#4A5568] flex items-center gap-1 bg-white px-3 py-1.5 rounded-full border border-gray-200">
                            <MapPin className="w-3.5 h-3.5 text-[#1A535C]" /> {appt.doctorLocation}
                          </span>
                        )}

                        <button
                          onClick={() => cancelAppointment(appt.id)}
                          className="px-3.5 py-1.5 rounded-full bg-white hover:bg-rose-50 border border-gray-200 hover:border-rose-200 text-[#4A5568] hover:text-rose-600 text-xs font-semibold transition-colors cursor-pointer"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Prescriptions & Medications Management */}
            <div className="p-6 sm:p-7 rounded-[32px] bg-white border border-gray-200/90 shadow-sm">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <Pill className="w-4 h-4 text-[#1A535C]" />
                  <h3 className="text-xs font-bold text-[#0A1128] uppercase tracking-[0.2em]">
                    Active Prescriptions & Refills
                  </h3>
                </div>
                <span className="text-xs text-[#4A5568]">Electronic pharmacy sync</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {prescriptions.map((rx) => (
                  <div key={rx.id} className="p-4 rounded-2xl bg-[#FAF9F6] border border-gray-200/80 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-xs font-bold text-[#0A1128]">{rx.medicationName}</h4>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gray-200 text-slate-700">
                          {rx.dosage}
                        </span>
                      </div>
                      <p className="text-xs text-[#4A5568] mb-1">{rx.frequency}</p>
                      <p className="text-[11px] text-slate-400">Prescribed by {rx.prescribingDoctor}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-200/60 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-[#4A5568]">
                        {rx.refillsRemaining} refills left
                      </span>
                      <button
                        onClick={() => requestPrescriptionRefill(rx.id)}
                        disabled={rx.refillsRemaining === 0}
                        className="px-3 py-1.5 rounded-full bg-[#1A535C]/10 hover:bg-[#1A535C]/20 text-[#1A535C] text-xs font-bold flex items-center gap-1 transition-colors disabled:opacity-40 cursor-pointer"
                      >
                        <RefreshCw className="w-3 h-3" /> Refill
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Diagnostic Lab Reports */}
            <div className="p-6 sm:p-7 rounded-[32px] bg-white border border-gray-200/90 shadow-sm">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#1A535C]" />
                  <h3 className="text-xs font-bold text-[#0A1128] uppercase tracking-[0.2em]">
                    Recent Pathology & Diagnostic Reports
                  </h3>
                </div>
                <span className="text-xs text-[#4A5568]">HIPAA Secure Vault</span>
              </div>

              <div className="space-y-2.5">
                {labResults.map((lab) => (
                  <div key={lab.id} className="p-3.5 rounded-2xl bg-[#FAF9F6] border border-gray-200/80 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-white border border-gray-200 text-[#1A535C]">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[#0A1128]">{lab.testName}</h4>
                        <p className="text-[11px] text-[#4A5568]">{lab.category} • {lab.date} • Ordered by {lab.orderingDoctor}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          lab.status === 'Normal'
                            ? 'bg-emerald-50 text-emerald-800'
                            : 'bg-amber-50 text-amber-800'
                        }`}
                      >
                        {lab.status}
                      </span>
                      <button
                        onClick={() => alert(`Downloading verified clinical PDF for ${lab.testName}`)}
                        className="p-2 rounded-full bg-white hover:bg-gray-100 text-[#4A5568] border border-gray-200 cursor-pointer"
                        title="Download PDF"
                      >
                        <Download className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT: Vitals Monitor & Favorite Care Team (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Live Health Vitals Bento Card */}
            <div className="p-6 sm:p-7 rounded-[32px] bg-white border border-gray-200/90 shadow-sm">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#1A535C]" />
                  <h3 className="text-xs font-bold text-[#0A1128] uppercase tracking-[0.2em]">
                    Biometric Telemetry
                  </h3>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-gray-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <HeartPulse className="w-5 h-5 text-rose-500" />
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Resting Heart Rate</span>
                      <span className="text-base font-extrabold text-[#0A1128]">{vitals.heartRate} bpm</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100/60 px-2.5 py-0.5 rounded-full">
                    Optimal
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-gray-200/80 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Blood Pressure</span>
                    <span className="text-base font-extrabold text-[#0A1128]">{vitals.bloodPressure}</span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                    Normal
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-3.5 rounded-2xl bg-[#FAF9F6] border border-gray-200/80">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Oxygen (SpO2)</span>
                    <span className="text-sm font-bold text-[#0A1128]">{vitals.oxygenLevel}%</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#FAF9F6] border border-gray-200/80">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Fasting Glucose</span>
                    <span className="text-sm font-bold text-[#0A1128]">{vitals.bloodGlucose} mg/dL</span>
                  </div>
                </div>

                <p className="text-[10px] text-slate-400 text-center pt-2">
                  {vitals.lastUpdated}
                </p>
              </div>
            </div>

            {/* Favorite Doctors / Care Team Bento Card */}
            <div className="p-6 sm:p-7 rounded-[32px] bg-white border border-gray-200/90 shadow-sm">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <h3 className="text-xs font-bold text-[#0A1128] uppercase tracking-[0.2em]">
                    My Care Team
                  </h3>
                </div>
                <button
                  onClick={() => {
                    setActiveTab('doctors');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs text-[#1A535C] font-bold hover:underline cursor-pointer"
                >
                  Browse All
                </button>
              </div>

              {favoriteDoctorsList.length === 0 ? (
                <p className="text-xs text-[#4A5568] py-4 text-center">
                  No specialists saved yet. Click the heart on any doctor card to add them.
                </p>
              ) : (
                <div className="space-y-3">
                  {favoriteDoctorsList.map((doc) => (
                    <div
                      key={doc.id}
                      className="p-3 rounded-2xl bg-[#FAF9F6] border border-gray-200/80 flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <img
                          src={doc.photoUrl}
                          alt={doc.name}
                          className="w-10 h-10 rounded-xl object-cover shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <div className="min-w-0">
                          <h4 className="text-xs font-bold text-[#0A1128] truncate">{doc.name}</h4>
                          <p className="text-[11px] text-[#1A535C] truncate">{doc.specialty}</p>
                        </div>
                      </div>

                      <button
                        onClick={() => openBooking(doc)}
                        className="px-3 py-1.5 rounded-full bg-[#0A1128] hover:bg-[#1A535C] text-white text-[11px] font-bold shrink-0 cursor-pointer"
                      >
                        Book
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Concierge Support Bento Card */}
            <div className="p-6 rounded-[32px] bg-[#1A535C] text-white shadow-lg text-xs border border-[#4ECDC4]/30">
              <div className="flex items-center gap-2 text-white font-bold mb-1">
                <ShieldCheck className="w-4 h-4 text-[#4ECDC4]" />
                <span className="uppercase tracking-[0.2em] text-[10px]">24/7 Patient Concierge</span>
              </div>
              <p className="text-slate-200 mb-4 mt-1">
                Need urgent triage or insurance verification assistance?
              </p>
              <a
                href="tel:+18002273911"
                className="block text-center py-2.5 rounded-full bg-white text-[#0A1128] font-bold hover:bg-gray-100 transition-colors cursor-pointer"
              >
                Call: +1 (800) 227-3911
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
