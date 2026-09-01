import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { mockApi } from '../services/mockApi';
import { CareTimeline } from './CareTimeline';
import {
  Appointment,
  MedicalReport,
  Prescription,
  TimelineItem,
  PatientMessage,
  PatientProfile,
} from '../types';
import {
  Calendar,
  FileText,
  Pill,
  Clock,
  User,
  MessageSquare,
  Activity,
  Download,
  Share2,
  Eye,
  RotateCcw,
  Trash2,
  Video,
  Building,
  Plus,
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  HeartPulse,
  Sparkles,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';

export const PatientPortal: React.FC = () => {
  const {
    appointments,
    refreshAppointments,
    openReschedule,
    cancelAppointment,
    openReport,
    openBooking,
    downloadIcsFile,
    patientProfile,
    updateProfile,
    showToast,
  } = useApp();

  const [activeTab, setActiveTab] = useState<
    'overview' | 'appointments' | 'prescriptions' | 'reports' | 'timeline' | 'messages' | 'profile'
  >('overview');

  const [reports, setReports] = useState<MedicalReport[]>([]);
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([]);
  const [timeline, setTimeline] = useState<TimelineItem[]>([]);
  const [messages, setMessages] = useState<PatientMessage[]>([]);
  const [newMessageText, setNewMessageText] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Profile form local state
  const [profileForm, setProfileForm] = useState<PatientProfile | null>(null);

  useEffect(() => {
    let isMounted = true;
    const loadPortalData = async () => {
      setIsLoading(true);
      const [reps, rxs, tl, msgs] = await Promise.all([
        mockApi.getReports(),
        mockApi.getPrescriptions(),
        mockApi.getTimeline(),
        mockApi.getMessages(),
      ]);
      if (isMounted) {
        setReports(reps);
        setPrescriptions(rxs);
        setTimeline(tl);
        setMessages(msgs);
        setIsLoading(false);
      }
    };
    loadPortalData();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (patientProfile) {
      setProfileForm(patientProfile);
    }
  }, [patientProfile]);

  const handleRefill = async (rxId: string) => {
    const updated = await mockApi.refillPrescription(rxId);
    if (updated) {
      const allRxs = await mockApi.getPrescriptions();
      setPrescriptions(allRxs);
      showToast('Refill request sent to Aura Central Pharmacy', 'success');
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessageText.trim()) return;
    const updated = await mockApi.sendMessage(newMessageText.trim());
    setMessages(updated);
    setNewMessageText('');
    showToast('Message sent to clinical care coordinator', 'success');
  };

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (profileForm) {
      await updateProfile(profileForm);
    }
  };

  const handleAddTimelineItem = (newItem: TimelineItem) => {
    setTimeline((prev) => {
      const updated = [newItem, ...prev];
      try {
        localStorage.setItem('aura_medical_timeline', JSON.stringify(updated));
      } catch (e) {
        console.warn('localStorage error', e);
      }
      return updated;
    });
  };

  const nextAppointment = appointments.find(
    (a) => a.status === 'confirmed' || a.status === 'rescheduled'
  );

  return (
    <div id="patient-portal-page" className="pt-28 pb-20 min-h-screen bg-[#F9F7FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Banner */}
        <div className="mb-8 p-6 sm:p-8 rounded-3xl bg-white/90 border border-[#3E3445]/8 shadow-[0_10px_35px_rgba(90,70,110,0.06)] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8B6FAE] to-[#665080] text-white flex items-center justify-center text-xl font-bold shadow-md">
              AC
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E8DDF2] text-[#665080] text-[11px] font-bold uppercase tracking-wider mb-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Patient Account</span>
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#3E3445]">
                Welcome back, {patientProfile?.name || 'Alexander'}
              </h1>
              <p className="text-xs sm:text-sm text-[#756B7C]">
                Member ID: BCBS-9948201-ALX • Primary Clinic: Aura Central Medical Pavilion
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              id="portal-new-booking-btn"
              onClick={() => openBooking()}
              className="px-5 py-2.5 bg-[#8B6FAE] hover:bg-[#665080] text-white text-xs font-semibold rounded-full shadow-[0_4px_14px_rgba(139,111,174,0.3)] transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule New Visit</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation Pill Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {[
            { id: 'overview', label: 'Care Overview', icon: Activity },
            { id: 'appointments', label: 'Appointments', icon: Calendar },
            { id: 'prescriptions', label: 'Prescriptions', icon: Pill },
            { id: 'reports', label: 'Medical Reports', icon: FileText },
            { id: 'timeline', label: 'Care Timeline', icon: Clock },
            { id: 'messages', label: 'Care Team Messages', icon: MessageSquare },
            { id: 'profile', label: 'Patient Profile', icon: User },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`portal-tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id as any)}
                className={`whitespace-nowrap flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-[#665080] text-white shadow-sm'
                    : 'bg-white/80 hover:bg-white text-[#756B7C] hover:text-[#3E3445] border border-[#3E3445]/8'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB CONTENTS */}

        {/* 1. OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Next Appointment Card */}
            {nextAppointment ? (
              <div className="lilac-card p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-white via-white to-[#E8DDF2]/30 border border-[#8B6FAE]/20 shadow-md">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8DDF2] text-[#665080] text-xs font-bold uppercase tracking-wider">
                    <Calendar className="w-3.5 h-3.5 text-[#8B6FAE]" />
                    <span>Next Upcoming Consultation</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#665080] bg-white px-2.5 py-1 rounded-lg border border-[#3E3445]/8">
                    #{nextAppointment.id}
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-8 flex flex-col sm:flex-row sm:items-center gap-5">
                    <img
                      src={nextAppointment.doctorImage}
                      alt={nextAppointment.doctorName}
                      className="w-16 h-16 rounded-2xl object-cover border border-[#8B6FAE]/30"
                    />
                    <div className="space-y-1">
                      <h3 className="font-serif text-xl font-bold text-[#3E3445]">
                        {nextAppointment.doctorName}
                      </h3>
                      <p className="text-xs font-medium text-[#8B6FAE]">
                        {nextAppointment.doctorSpecialty} • {nextAppointment.doctorLocation}
                      </p>
                      <div className="text-xs text-[#756B7C] pt-1 flex flex-wrap items-center gap-4">
                        <span className="font-semibold text-[#3E3445]">
                          📅 {nextAppointment.date} at {nextAppointment.time}
                        </span>
                        <span>
                          {nextAppointment.consultationType === 'video' ? '📹 Video Telehealth' : '🏥 In-Person'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex flex-wrap sm:flex-nowrap items-center justify-start lg:justify-end gap-2.5">
                    <button
                      id="overview-reschedule-btn"
                      onClick={() => openReschedule(nextAppointment)}
                      className="px-4 py-2 text-xs font-semibold text-[#665080] bg-[#E8DDF2]/60 hover:bg-[#E8DDF2] rounded-xl transition-colors"
                    >
                      Reschedule
                    </button>
                    <button
                      id="overview-cancel-btn"
                      onClick={() => cancelAppointment(nextAppointment.id)}
                      className="px-4 py-2 text-xs font-semibold text-[#C77C83] hover:bg-[#F2D9DF]/40 rounded-xl transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      id="overview-add-cal-btn"
                      onClick={() => downloadIcsFile(nextAppointment)}
                      className="px-4 py-2 text-xs font-semibold bg-[#8B6FAE] hover:bg-[#665080] text-white rounded-xl shadow-xs transition-colors flex items-center gap-1"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>.ICS</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="lilac-card p-8 rounded-3xl text-center bg-white">
                <Calendar className="w-10 h-10 text-[#8B6FAE] mx-auto mb-2 opacity-60" />
                <h3 className="font-serif text-lg font-bold text-[#3E3445]">No upcoming appointments</h3>
                <p className="text-xs text-[#756B7C] mb-4">You have no active visits scheduled.</p>
                <button
                  id="overview-empty-book-btn"
                  onClick={() => openBooking()}
                  className="px-5 py-2 bg-[#8B6FAE] text-white text-xs font-semibold rounded-full"
                >
                  Book an Appointment
                </button>
              </div>
            )}

            {/* Health Vitals & Telemetry Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="lilac-card p-5 rounded-2xl bg-white space-y-1">
                <div className="text-xs text-[#756B7C]">Resting Heart Rate</div>
                <div className="font-serif text-2xl font-bold text-[#3E3445]">
                  62 <span className="text-xs font-normal text-[#756B7C]">bpm</span>
                </div>
                <div className="text-[11px] font-semibold text-[#739B82] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Optimal Sinus Rhythm</span>
                </div>
              </div>

              <div className="lilac-card p-5 rounded-2xl bg-white space-y-1">
                <div className="text-xs text-[#756B7C]">ApoB Atherogenic Level</div>
                <div className="font-serif text-2xl font-bold text-[#3E3445]">
                  72 <span className="text-xs font-normal text-[#756B7C]">mg/dL</span>
                </div>
                <div className="text-[11px] font-semibold text-[#739B82] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Optimal (&lt; 80 mg/dL)</span>
                </div>
              </div>

              <div className="lilac-card p-5 rounded-2xl bg-white space-y-1">
                <div className="text-xs text-[#756B7C]">Systemic hs-CRP</div>
                <div className="font-serif text-2xl font-bold text-[#3E3445]">
                  0.62 <span className="text-xs font-normal text-[#756B7C]">mg/L</span>
                </div>
                <div className="text-[11px] font-semibold text-[#739B82] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Low Inflammation</span>
                </div>
              </div>

              <div className="lilac-card p-5 rounded-2xl bg-white space-y-1">
                <div className="text-xs text-[#756B7C]">Active Prescriptions</div>
                <div className="font-serif text-2xl font-bold text-[#665080]">
                  {prescriptions.filter((p) => p.status === 'Active').length}{' '}
                  <span className="text-xs font-normal text-[#756B7C]">Medications</span>
                </div>
                <div className="text-[11px] font-semibold text-[#8B6FAE]">
                  Vitamin D3 + Magnesium
                </div>
              </div>
            </div>

            {/* Two Column Grid: Recent Reports & Active Prescriptions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Reports */}
              <div className="lilac-card p-6 rounded-3xl bg-white space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg font-bold text-[#3E3445]">
                    Recent Diagnostic Reports
                  </h3>
                  <button
                    id="overview-all-reports-btn"
                    onClick={() => setActiveTab('reports')}
                    className="text-xs font-semibold text-[#8B6FAE] hover:underline"
                  >
                    View All ({reports.length}) →
                  </button>
                </div>

                <div className="space-y-2.5">
                  {reports.slice(0, 3).map((rep) => (
                    <div
                      key={rep.id}
                      id={`overview-rep-${rep.id}`}
                      onClick={() => openReport(rep)}
                      className="p-3.5 rounded-2xl bg-[#F9F7FB] hover:bg-[#E8DDF2]/30 border border-[#3E3445]/6 cursor-pointer transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-white text-[#8B6FAE] border border-[#3E3445]/5">
                          <FileText className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#3E3445] group-hover:text-[#665080]">
                            {rep.reportType}
                          </div>
                          <div className="text-[11px] text-[#756B7C]">
                            {rep.date} • {rep.doctorName}
                          </div>
                        </div>
                      </div>
                      <Eye className="w-4 h-4 text-[#8B6FAE] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Prescription Reminders */}
              <div className="lilac-card p-6 rounded-3xl bg-white space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg font-bold text-[#3E3445]">
                    Active Prescriptions & Protocols
                  </h3>
                  <button
                    id="overview-all-rxs-btn"
                    onClick={() => setActiveTab('prescriptions')}
                    className="text-xs font-semibold text-[#8B6FAE] hover:underline"
                  >
                    Manage Prescriptions →
                  </button>
                </div>

                <div className="space-y-2.5">
                  {prescriptions.slice(0, 2).map((rx) => (
                    <div
                      key={rx.id}
                      className="p-3.5 rounded-2xl bg-[#F9F7FB] border border-[#3E3445]/6 flex items-center justify-between"
                    >
                      <div>
                        <div className="text-xs font-bold text-[#3E3445]">{rx.medicationName}</div>
                        <div className="text-[11px] text-[#756B7C]">
                          {rx.dosage} • {rx.frequency}
                        </div>
                        <div className="text-[10px] text-[#8B6FAE] mt-0.5">
                          Refills remaining: {rx.refillsRemaining}
                        </div>
                      </div>

                      <button
                        id={`refill-rx-btn-${rx.id}`}
                        onClick={() => handleRefill(rx.id)}
                        disabled={rx.refillsRemaining === 0 || rx.status === 'Refill Requested'}
                        className="px-3 py-1.5 text-[11px] font-semibold bg-[#E8DDF2] hover:bg-[#8B6FAE] hover:text-white text-[#665080] rounded-lg transition-all disabled:opacity-50"
                      >
                        {rx.status === 'Refill Requested' ? 'Requested' : 'Refill'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Care Timeline Highlight */}
            <div className="lilac-card p-6 sm:p-8 rounded-3xl bg-white space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E8DDF2] text-[#665080] text-[10px] font-bold uppercase tracking-wider mb-1">
                    <Clock className="w-3 h-3 text-[#8B6FAE]" />
                    <span>Chronological Health Ledger</span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#3E3445]">
                    Recent Care Timeline & Milestones
                  </h3>
                </div>
                <button
                  id="overview-full-timeline-btn"
                  onClick={() => setActiveTab('timeline')}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#8B6FAE] hover:text-[#665080] hover:underline"
                >
                  <span>Explore Full Care Timeline ({timeline.length})</span>
                  <span>→</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {timeline.slice(0, 3).map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveTab('timeline')}
                    className="p-4 rounded-2xl bg-[#F9F7FB] hover:bg-[#E8DDF2]/30 border border-[#3E3445]/6 cursor-pointer transition-all space-y-2 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-[#8B6FAE] uppercase">
                        {item.date}
                      </span>
                      {item.statusBadge && (
                        <span className="text-[9px] font-semibold px-2 py-0.5 rounded-md bg-[#739B82]/15 text-[#739B82]">
                          {item.statusBadge}
                        </span>
                      )}
                    </div>
                    <h4 className="text-xs font-bold text-[#3E3445] group-hover:text-[#665080] line-clamp-1">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-[#756B7C] line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                    {item.keyMetrics && item.keyMetrics.length > 0 && (
                      <div className="text-[10px] font-semibold text-[#665080] pt-1">
                        {item.keyMetrics[0].label}: {item.keyMetrics[0].value}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 2. APPOINTMENTS TAB */}
        {activeTab === 'appointments' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#3E3445]">
                  My Appointments
                </h2>
                <p className="text-xs text-[#756B7C]">
                  Manage scheduled visits, reschedule dates, and download calendar invitations.
                </p>
              </div>
              <button
                id="appointments-tab-book-btn"
                onClick={() => openBooking()}
                className="px-5 py-2.5 bg-[#8B6FAE] hover:bg-[#665080] text-white text-xs font-semibold rounded-full shadow-xs flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>Book New</span>
              </button>
            </div>

            <div className="space-y-4">
              {appointments.length === 0 ? (
                <div className="lilac-card p-12 text-center bg-white">
                  <Calendar className="w-12 h-12 text-[#B9A1D0] mx-auto mb-3" />
                  <h3 className="font-serif text-lg font-bold text-[#3E3445]">
                    No appointments booked
                  </h3>
                  <p className="text-xs text-[#756B7C] mb-4">
                    Schedule a consultation with our medical specialists.
                  </p>
                  <button
                    id="no-apts-book-btn"
                    onClick={() => openBooking()}
                    className="px-6 py-2.5 bg-[#8B6FAE] text-white text-xs font-semibold rounded-full"
                  >
                    Schedule Appointment
                  </button>
                </div>
              ) : (
                appointments.map((apt) => {
                  const isConfirmed = apt.status === 'confirmed' || apt.status === 'rescheduled';
                  const isCancelled = apt.status === 'cancelled';

                  return (
                    <div
                      key={apt.id}
                      id={`appointment-card-${apt.id}`}
                      className={`lilac-card p-6 rounded-3xl border transition-all ${
                        isCancelled ? 'bg-white/60 opacity-70' : 'bg-white shadow-xs'
                      }`}
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                        <div className="flex items-start gap-4">
                          <img
                            src={apt.doctorImage}
                            alt={apt.doctorName}
                            className="w-16 h-16 rounded-2xl object-cover border border-[#8B6FAE]/30 shrink-0"
                          />
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-mono font-bold text-[#665080] bg-[#E8DDF2] px-2 py-0.5 rounded-md">
                                {apt.id}
                              </span>
                              <span
                                className={`text-[10px] font-bold px-2 py-0.5 rounded-md capitalize ${
                                  isCancelled
                                    ? 'bg-[#F2D9DF] text-[#C77C83]'
                                    : 'bg-[#739B82]/20 text-[#739B82]'
                                }`}
                              >
                                {apt.status}
                              </span>
                            </div>

                            <h3 className="font-serif text-lg font-bold text-[#3E3445]">
                              {apt.doctorName}
                            </h3>
                            <p className="text-xs text-[#8B6FAE] font-medium">
                              {apt.doctorSpecialty}
                            </p>

                            <div className="text-xs text-[#756B7C] pt-1 flex flex-wrap items-center gap-3">
                              <span>📅 {apt.date} at {apt.time}</span>
                              <span>•</span>
                              <span>
                                {apt.consultationType === 'video'
                                  ? '📹 Video Telehealth'
                                  : `🏥 ${apt.doctorLocation}`}
                              </span>
                            </div>

                            <p className="text-xs text-[#756B7C] italic pt-1">
                              Reason: {apt.reason}
                            </p>
                          </div>
                        </div>

                        {/* Appointment Actions */}
                        <div className="flex flex-wrap items-center gap-2 pt-2 lg:pt-0 border-t lg:border-t-0 border-[#3E3445]/8">
                          {isConfirmed && (
                            <>
                              <button
                                id={`reschedule-btn-${apt.id}`}
                                onClick={() => openReschedule(apt)}
                                className="px-4 py-2 text-xs font-semibold text-[#665080] bg-[#E8DDF2]/60 hover:bg-[#E8DDF2] rounded-xl transition-colors"
                              >
                                Reschedule
                              </button>

                              <button
                                id={`cancel-btn-${apt.id}`}
                                onClick={() => cancelAppointment(apt.id)}
                                className="px-4 py-2 text-xs font-semibold text-[#C77C83] hover:bg-[#F2D9DF]/40 rounded-xl transition-colors"
                              >
                                Cancel
                              </button>

                              <button
                                id={`download-ics-btn-${apt.id}`}
                                onClick={() => downloadIcsFile(apt)}
                                className="px-4 py-2 text-xs font-semibold bg-[#8B6FAE] hover:bg-[#665080] text-white rounded-xl shadow-xs transition-colors flex items-center gap-1.5"
                                title="Add to Apple/Google/Outlook Calendar"
                              >
                                <Download className="w-3.5 h-3.5" />
                                <span>Calendar (.ICS)</span>
                              </button>

                              {apt.consultationType === 'video' && apt.meetingLink && (
                                <button
                                  id={`join-video-btn-${apt.id}`}
                                  onClick={() =>
                                    showToast(
                                      'Connecting to encrypted HD Video consultation room...',
                                      'info'
                                    )
                                  }
                                  className="px-4 py-2 text-xs font-semibold bg-[#739B82] text-white rounded-xl shadow-xs transition-colors flex items-center gap-1"
                                >
                                  <Video className="w-3.5 h-3.5" />
                                  <span>Join Room</span>
                                </button>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}

        {/* 3. PRESCRIPTIONS TAB */}
        {activeTab === 'prescriptions' && (
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#3E3445]">
                Prescriptions & Supplement Protocols
              </h2>
              <p className="text-xs text-[#756B7C]">
                Active medications issued by your Aura physicians with online pharmacy refill requests.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {prescriptions.map((rx) => (
                <div
                  key={rx.id}
                  id={`prescription-card-${rx.id}`}
                  className="lilac-card p-6 rounded-3xl bg-white flex flex-col justify-between space-y-4"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-[#8B6FAE]">{rx.id}</span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          rx.status === 'Active'
                            ? 'bg-[#739B82]/15 text-[#739B82]'
                            : rx.status === 'Refill Requested'
                            ? 'bg-[#C99A62]/20 text-[#C99A62]'
                            : 'bg-[#E8DDF2] text-[#665080]'
                        }`}
                      >
                        {rx.status}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-[#3E3445]">
                      {rx.medicationName}
                    </h3>
                    <p className="text-xs font-semibold text-[#8B6FAE]">
                      {rx.dosage} • {rx.frequency}
                    </p>

                    <div className="text-xs text-[#756B7C] mt-3 space-y-1">
                      <div>Prescribed by: {rx.prescribedBy}</div>
                      <div>Date: {rx.prescribedDate}</div>
                      <div className="text-[11px] italic bg-[#F9F7FB] p-2.5 rounded-xl border border-[#3E3445]/5 mt-2">
                        "{rx.instructions}"
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#3E3445]/8 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#3E3445]">
                      {rx.refillsRemaining} Refills Left
                    </span>

                    <button
                      id={`rx-action-refill-${rx.id}`}
                      onClick={() => handleRefill(rx.id)}
                      disabled={rx.refillsRemaining === 0 || rx.status === 'Refill Requested'}
                      className="px-4 py-1.5 text-xs font-semibold bg-[#8B6FAE] hover:bg-[#665080] text-white rounded-xl transition-colors disabled:opacity-50"
                    >
                      {rx.status === 'Refill Requested' ? 'Refill Pending' : 'Request Refill'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. MEDICAL REPORTS TAB */}
        {activeTab === 'reports' && (
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#3E3445]">
                Medical Records & Diagnostic Reports
              </h2>
              <p className="text-xs text-[#756B7C]">
                High-resolution 3T imaging, laboratory biomarker panels, and specialist consultation notes.
              </p>
            </div>

            <div className="space-y-4">
              {reports.map((rep) => (
                <div
                  key={rep.id}
                  id={`report-row-${rep.id}`}
                  className="lilac-card p-6 rounded-3xl bg-white flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#E8DDF2] text-[#665080] flex items-center justify-center shrink-0">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-[#8B6FAE]">{rep.id}</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#E8DDF2] text-[#665080]">
                          {rep.category}
                        </span>
                      </div>
                      <h3 className="font-serif text-lg font-bold text-[#3E3445]">
                        {rep.reportType}
                      </h3>
                      <div className="text-xs text-[#756B7C] flex flex-wrap items-center gap-3 mt-1">
                        <span>{rep.date}</span>
                        <span>•</span>
                        <span>{rep.doctorName}</span>
                        <span>•</span>
                        <span className="text-[#739B82] font-semibold">{rep.status}</span>
                      </div>
                      <p className="text-xs text-[#756B7C] mt-2 line-clamp-1">{rep.summary}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2 md:pt-0">
                    <button
                      id={`view-rep-btn-${rep.id}`}
                      onClick={() => openReport(rep)}
                      className="px-4 py-2 text-xs font-semibold bg-[#8B6FAE] text-white hover:bg-[#665080] rounded-xl transition-colors flex items-center gap-1.5 shadow-xs"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>VIEW REPORT</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. CARE TIMELINE TAB */}
        {activeTab === 'timeline' && (
          <CareTimeline
            timeline={timeline}
            reports={reports}
            onAddTimelineItem={handleAddTimelineItem}
            onNavigateTab={setActiveTab}
          />
        )}

        {/* 6. MESSAGES TAB */}
        {activeTab === 'messages' && (
          <div className="space-y-6 max-w-3xl">
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#3E3445]">
                Care Team Direct Messaging
              </h2>
              <p className="text-xs text-[#756B7C]">
                Encrypted communication with your physicians and clinical coordinators.
              </p>
            </div>

            {/* Message Thread */}
            <div className="lilac-card p-6 rounded-3xl bg-white space-y-4 max-h-[500px] overflow-y-auto">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${
                    msg.isDoctor ? 'items-start' : 'items-start flex-row-reverse'
                  }`}
                >
                  <img
                    src={msg.senderAvatar}
                    alt={msg.senderName}
                    className="w-10 h-10 rounded-full object-cover border border-[#8B6FAE]/30 shrink-0"
                  />
                  <div
                    className={`max-w-md p-4 rounded-2xl text-xs leading-relaxed ${
                      msg.isDoctor
                        ? 'bg-[#F9F7FB] text-[#3E3445] border border-[#3E3445]/8'
                        : 'bg-[#8B6FAE] text-white'
                    }`}
                  >
                    <div
                      className={`font-bold mb-1 flex items-center justify-between gap-3 text-[11px] ${
                        msg.isDoctor ? 'text-[#665080]' : 'text-white/90'
                      }`}
                    >
                      <span>{msg.senderName}</span>
                      <span className="text-[9px] font-normal opacity-80">{msg.timestamp}</span>
                    </div>
                    <p>{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input Form */}
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <input
                id="portal-message-input"
                type="text"
                value={newMessageText}
                onChange={(e) => setNewMessageText(e.target.value)}
                placeholder="Type your message to the care coordinator..."
                className="flex-1 px-4 py-3 bg-white border border-[#3E3445]/15 focus:border-[#8B6FAE] rounded-2xl text-xs text-[#3E3445] focus:outline-none"
              />
              <button
                id="portal-message-send-btn"
                type="submit"
                className="px-5 py-3 bg-[#8B6FAE] hover:bg-[#665080] text-white text-xs font-semibold rounded-2xl transition-colors flex items-center gap-1.5 shadow-xs"
              >
                <Send className="w-4 h-4" />
                <span>Send</span>
              </button>
            </form>
          </div>
        )}

        {/* 7. PROFILE TAB */}
        {activeTab === 'profile' && profileForm && (
          <div className="space-y-6 max-w-3xl">
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#3E3445]">
                Patient Health Profile & Emergency Contact
              </h2>
              <p className="text-xs text-[#756B7C]">
                Manage your personal information, emergency contacts, and insurance details.
              </p>
            </div>

            <form
              onSubmit={handleSaveProfile}
              className="lilac-card p-8 rounded-3xl bg-white space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#3E3445] mb-1">Full Name</label>
                  <input
                    id="profile-name-input"
                    type="text"
                    value={profileForm.name}
                    onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F9F7FB] border border-[#3E3445]/10 rounded-xl text-xs text-[#3E3445] focus:outline-none focus:border-[#8B6FAE]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3E3445] mb-1">Email</label>
                  <input
                    id="profile-email-input"
                    type="email"
                    value={profileForm.email}
                    onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F9F7FB] border border-[#3E3445]/10 rounded-xl text-xs text-[#3E3445] focus:outline-none focus:border-[#8B6FAE]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3E3445] mb-1">Phone</label>
                  <input
                    id="profile-phone-input"
                    type="tel"
                    value={profileForm.phone}
                    onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F9F7FB] border border-[#3E3445]/10 rounded-xl text-xs text-[#3E3445] focus:outline-none focus:border-[#8B6FAE]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3E3445] mb-1">Blood Group</label>
                  <input
                    id="profile-blood-input"
                    type="text"
                    value={profileForm.bloodGroup}
                    onChange={(e) => setProfileForm({ ...profileForm, bloodGroup: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F9F7FB] border border-[#3E3445]/10 rounded-xl text-xs text-[#3E3445] focus:outline-none focus:border-[#8B6FAE]"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-[#3E3445]/8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#8B6FAE] mb-3">
                  Emergency Contact
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs text-[#756B7C] mb-1">Contact Name</label>
                    <input
                      id="profile-emerg-name"
                      type="text"
                      value={profileForm.emergencyContact.name}
                      onChange={(e) =>
                        setProfileForm({
                          ...profileForm,
                          emergencyContact: {
                            ...profileForm.emergencyContact,
                            name: e.target.value,
                          },
                        })
                      }
                      className="w-full px-3 py-2 bg-[#F9F7FB] border border-[#3E3445]/10 rounded-xl text-xs text-[#3E3445] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-[#756B7C] mb-1">Relationship</label>
                    <input
                      id="profile-emerg-rel"
                      type="text"
                      value={profileForm.emergencyContact.relation}
                      onChange={(e) =>
                        setProfileForm({
                          ...profileForm,
                          emergencyContact: {
                            ...profileForm.emergencyContact,
                            relation: e.target.value,
                          },
                        })
                      }
                      className="w-full px-3 py-2 bg-[#F9F7FB] border border-[#3E3445]/10 rounded-xl text-xs text-[#3E3445] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-[#756B7C] mb-1">Contact Phone</label>
                    <input
                      id="profile-emerg-phone"
                      type="tel"
                      value={profileForm.emergencyContact.phone}
                      onChange={(e) =>
                        setProfileForm({
                          ...profileForm,
                          emergencyContact: {
                            ...profileForm.emergencyContact,
                            phone: e.target.value,
                          },
                        })
                      }
                      className="w-full px-3 py-2 bg-[#F9F7FB] border border-[#3E3445]/10 rounded-xl text-xs text-[#3E3445] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#3E3445]/8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#8B6FAE] mb-3">
                  Insurance Provider Details
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-[#756B7C] mb-1">Carrier Provider</label>
                    <input
                      id="profile-ins-provider"
                      type="text"
                      value={profileForm.insuranceProvider}
                      onChange={(e) =>
                        setProfileForm({ ...profileForm, insuranceProvider: e.target.value })
                      }
                      className="w-full px-3 py-2 bg-[#F9F7FB] border border-[#3E3445]/10 rounded-xl text-xs text-[#3E3445] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-[#756B7C] mb-1">Policy / Member ID</label>
                    <input
                      id="profile-ins-policy"
                      type="text"
                      value={profileForm.policyNumber}
                      onChange={(e) =>
                        setProfileForm({ ...profileForm, policyNumber: e.target.value })
                      }
                      className="w-full px-3 py-2 bg-[#F9F7FB] border border-[#3E3445]/10 rounded-xl text-xs text-[#3E3445] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  id="save-profile-changes-btn"
                  type="submit"
                  className="px-7 py-2.5 bg-[#8B6FAE] hover:bg-[#665080] text-white text-xs font-semibold rounded-full shadow-xs transition-colors"
                >
                  Save Profile Changes
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
