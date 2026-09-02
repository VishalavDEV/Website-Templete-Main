import React, { useState } from 'react';
import { 
  Users, 
  Stethoscope, 
  Video, 
  FileText, 
  Search, 
  Plus, 
  ChevronRight, 
  ShieldCheck, 
  Heart, 
  Activity, 
  Calendar, 
  PhoneCall,
  Pill,
  Clock,
  CheckCircle2,
  AlertTriangle,
  ArrowUpRight,
  Filter,
  Sparkles,
  Award
} from 'lucide-react';
import { allPatientsList, allDoctorsList, allConsultationsList, allProtocolsList } from '../data/mockData';
import { PatientRecord, DoctorProfile, ConsultationSession, ClinicalProtocol } from '../types';

interface ViewProps {
  onBackToReports: () => void;
  onOpenConsultation?: (session: ConsultationSession) => void;
  onOpenPatientDetail?: (patient: PatientRecord) => void;
}

export function PatientsView({ onBackToReports, onOpenPatientDetail }: ViewProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCohort, setSelectedCohort] = useState('All');

  const cohorts = ['All', 'Cardiology Cohort', 'Endocrine & Diabetes', 'Post-Op Recovery', 'Geriatrics Care'];

  const filteredPatients = allPatientsList.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.condition.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.mrn.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCohort = selectedCohort === 'All' || p.cohort === selectedCohort;
    return matchesSearch && matchesCohort;
  });

  return (
    <div className="space-y-5 animate-in fade-in pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-gray-200/60">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-gray-900">Patient Roster & Telemetry Chart</h2>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
              {allPatientsList.length} Active Patients
            </span>
          </div>
          <p className="text-xs text-gray-400">Continuous remote physiological monitoring, prescription compliance, and vitals history</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onBackToReports}
            className="px-3.5 py-2 bg-white border border-gray-200 text-xs font-semibold text-gray-700 rounded-xl hover:bg-gray-50 transition-colors shadow-2xs cursor-pointer"
          >
            Back to Reports
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
        <div className="sm:col-span-7 relative">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by patient name, MRN, condition..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-100 rounded-xl text-xs text-gray-900 placeholder:text-gray-400 focus:outline-hidden focus:border-blue-500 shadow-xs"
          />
        </div>
        <div className="sm:col-span-5 flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {cohorts.map(c => (
            <button
              key={c}
              onClick={() => setSelectedCohort(c)}
              className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCohort === c
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-100'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Patient Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filteredPatients.map((patient) => (
          <div
            key={patient.id}
            onClick={() => onOpenPatientDetail?.(patient)}
            className="bg-white rounded-3xl p-5 border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-lg hover:border-blue-100 transition-all cursor-pointer group"
          >
            {/* Top Patient Details */}
            <div className="flex items-start justify-between gap-3 mb-3.5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-100 border border-gray-200 shadow-2xs">
                  <img src={patient.avatar} alt={patient.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {patient.name}
                    </h3>
                    <span className="text-[10px] font-semibold text-gray-400 bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100">
                      {patient.mrn}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {patient.age}y {patient.gender} · <span className="font-semibold text-gray-700">{patient.condition}</span>
                  </p>
                  <p className="text-[11px] text-blue-600 font-medium">{patient.primaryCareDoctor}</p>
                </div>
              </div>

              <div className="text-right shrink-0">
                <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg border border-emerald-100 block mb-1">
                  {patient.adherenceRate}% Adherent
                </span>
                <span className="text-[10px] text-gray-400">Rank #{patient.rank}</span>
              </div>
            </div>

            {/* Live Vitals Badges Grid */}
            <div className="grid grid-cols-4 gap-2 p-3 bg-gray-50/70 rounded-2xl border border-gray-100/80 mb-3.5">
              <div className="text-center">
                <span className="text-[10px] text-gray-400 block font-medium">BP</span>
                <span className="text-xs font-bold text-gray-900">{patient.vitals.bp.split(' ')[0]}</span>
              </div>
              <div className="text-center border-l border-gray-200/60">
                <span className="text-[10px] text-gray-400 block font-medium">Heart Rate</span>
                <span className="text-xs font-bold text-gray-900">{patient.vitals.heartRate} bpm</span>
              </div>
              <div className="text-center border-l border-gray-200/60">
                <span className="text-[10px] text-gray-400 block font-medium">SpO2</span>
                <span className="text-xs font-bold text-blue-600">{patient.vitals.spo2}%</span>
              </div>
              <div className="text-center border-l border-gray-200/60">
                <span className="text-[10px] text-gray-400 block font-medium">Glucose</span>
                <span className="text-xs font-bold text-amber-600">{patient.vitals.glucose} mg/dL</span>
              </div>
            </div>

            {/* Medications Preview */}
            <div className="mb-3 space-y-1">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Active Medications</span>
              <div className="flex flex-wrap gap-1.5">
                {patient.medications.map((m, idx) => (
                  <span
                    key={idx}
                    className={`inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md border ${
                      m.takenToday 
                        ? 'bg-emerald-50/70 text-emerald-800 border-emerald-100'
                        : 'bg-amber-50/70 text-amber-800 border-amber-100'
                    }`}
                  >
                    <Pill className="w-3 h-3" />
                    <span>{m.name} ({m.dosage})</span>
                    {m.takenToday && <CheckCircle2 className="w-3 h-3 text-emerald-600" />}
                  </span>
                ))}
              </div>
            </div>

            {/* Clinical Notes snippet */}
            <div className="text-[11px] text-gray-600 bg-[#F9FAFB] p-2.5 rounded-xl border border-gray-100 mb-3 line-clamp-2">
              <span className="font-bold text-gray-800">Latest Doctor Note: </span>
              {patient.clinicalNotes}
            </div>

            {/* Footer Appointment & Action */}
            {patient.nextAppointment && (
              <div className="flex items-center justify-between pt-2.5 border-t border-gray-100 text-xs">
                <div className="flex items-center gap-1.5 text-gray-500 text-[11px]">
                  <Calendar className="w-3.5 h-3.5 text-blue-600" />
                  <span>Next Video Visit: <strong>{patient.nextAppointment.date} at {patient.nextAppointment.time}</strong></span>
                </div>
                <span className="text-blue-600 font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                  View EHR Chart <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function CareTeamView({ onBackToReports }: ViewProps) {
  const [filterSpecialty, setFilterSpecialty] = useState('All');

  const specialties = ['All', 'Cardiovascular Care', 'Endocrinology & Diabetes', 'Orthopedics & Post-Op Rehab', 'Geriatrics & Internal Medicine'];

  const filteredDoctors = allDoctorsList.filter(d => 
    filterSpecialty === 'All' || d.specialty === filterSpecialty
  );

  return (
    <div className="space-y-5 animate-in fade-in pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-gray-200/60">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-gray-900">Clinical Care Team & Specialists</h2>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
              {allDoctorsList.length} Attending Physicians
            </span>
          </div>
          <p className="text-xs text-gray-400">Board-certified clinicians providing continuous remote patient monitoring & telehealth consults</p>
        </div>
        <button
          onClick={onBackToReports}
          className="px-3.5 py-2 bg-white border border-gray-200 text-xs font-semibold text-gray-700 rounded-xl hover:bg-gray-50 transition-colors shadow-2xs cursor-pointer"
        >
          Back to Reports
        </button>
      </div>

      {/* Specialty Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {specialties.map(s => (
          <button
            key={s}
            onClick={() => setFilterSpecialty(s)}
            className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              filterSpecialty === s
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-100'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Doctor Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredDoctors.map((doc) => (
          <div key={doc.id} className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-2xs shrink-0">
                    <img src={doc.avatarUrl} alt={doc.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-gray-900">{doc.name}</h3>
                    <p className="text-xs text-blue-600 font-semibold">{doc.specialty}</p>
                    <p className="text-[11px] text-gray-400">{doc.hospital} · {doc.npiNumber}</p>
                  </div>
                </div>

                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  doc.availability === 'available_now'
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                    : doc.availability === 'in_consultation'
                    ? 'bg-amber-50 text-amber-700 border border-amber-100'
                    : 'bg-gray-100 text-gray-700'
                }`}>
                  {doc.availability === 'available_now' ? '● Available' : doc.availability === 'in_consultation' ? '● In Session' : 'Scheduled'}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 p-2.5 bg-gray-50 rounded-2xl border border-gray-100 text-center text-xs mb-4">
                <div>
                  <span className="text-[10px] text-gray-400 block font-medium">Rating</span>
                  <span className="font-bold text-amber-600">{doc.rating} ★ ({doc.reviewsCount})</span>
                </div>
                <div className="border-l border-gray-200/60">
                  <span className="text-[10px] text-gray-400 block font-medium">Patients</span>
                  <span className="font-bold text-gray-900">{doc.activePatients} Monitored</span>
                </div>
                <div className="border-l border-gray-200/60">
                  <span className="text-[10px] text-gray-400 block font-medium">Next Slot</span>
                  <span className="font-bold text-blue-600">{doc.nextSlot}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
              <button
                onClick={() => alert(`Initiating direct telehealth link with ${doc.name}`)}
                className="flex-1 py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer"
              >
                <Video className="w-3.5 h-3.5" />
                <span>Instant Consultation</span>
              </button>
              <button
                onClick={() => alert(`Direct clinical line: ${doc.phone}`)}
                className="py-2 px-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-xs rounded-xl flex items-center justify-center gap-1 transition-colors cursor-pointer"
              >
                <PhoneCall className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ConsultationsView({ onBackToReports }: ViewProps) {
  return (
    <div className="space-y-5 animate-in fade-in pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-gray-200/60">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-gray-900">Telehealth Video Consultations</h2>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
              Encrypted WebRTC Session Portal
            </span>
          </div>
          <p className="text-xs text-gray-400">Scheduled remote clinical check-ins, multi-party cardiology consultations, and diagnostic encounters</p>
        </div>
        <button
          onClick={onBackToReports}
          className="px-3.5 py-2 bg-white border border-gray-200 text-xs font-semibold text-gray-700 rounded-xl hover:bg-gray-50 transition-colors shadow-2xs cursor-pointer"
        >
          Back to Reports
        </button>
      </div>

      {/* Consultations List */}
      <div className="space-y-3.5">
        {allConsultationsList.map((session) => (
          <div
            key={session.id}
            className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            {/* Left: Patient & Session Details */}
            <div className="flex items-start gap-3.5 min-w-0">
              <div className="w-12 h-12 rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shrink-0">
                <img src={session.patientAvatar} alt={session.patientName} className="w-full h-full object-cover" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-0.5">
                  <h3 className="font-bold text-sm text-gray-900">{session.patientName}</h3>
                  <span className="text-[10px] font-bold text-gray-400 bg-gray-50 px-2 py-0.5 rounded-md border border-gray-100">
                    Room: {session.roomCode}
                  </span>
                  {session.status === 'upcoming' ? (
                    <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                      Upcoming ({session.time})
                    </span>
                  ) : (
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                      Completed Encounter
                    </span>
                  )}
                </div>

                <p className="text-xs font-semibold text-gray-700 mb-1">{session.diagnosisTopic}</p>
                <p className="text-[11px] text-gray-500">
                  Assigned Clinician: <span className="font-semibold text-blue-600">{session.doctorName}</span> ({session.specialty})
                </p>
                {session.clinicalNotes && (
                  <p className="text-[11px] text-gray-400 mt-1 italic">Note: {session.clinicalNotes}</p>
                )}
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2 shrink-0">
              {session.status === 'upcoming' ? (
                <button
                  onClick={() => alert(`Connecting to Encrypted Video Room: ${session.roomCode} with ${session.patientName}`)}
                  className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl flex items-center gap-2 shadow-xs transition-all cursor-pointer active:scale-95"
                >
                  <Video className="w-4 h-4" />
                  <span>Launch Video Room</span>
                </button>
              ) : (
                <button
                  onClick={() => alert(`Downloading signed medical summary report for encounter ${session.id}`)}
                  className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-gray-500" />
                  <span>View Encounter Notes</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProtocolsView({ onBackToReports }: ViewProps) {
  return (
    <div className="space-y-5 animate-in fade-in pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-gray-200/60">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-gray-900">Clinical Protocols & Care Pathways</h2>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
              Standard Clinical Guidelines
            </span>
          </div>
          <p className="text-xs text-gray-400">Evidence-based clinical guidelines, escalation thresholds, and telemetry monitoring checklists</p>
        </div>
        <button
          onClick={onBackToReports}
          className="px-3.5 py-2 bg-white border border-gray-200 text-xs font-semibold text-gray-700 rounded-xl hover:bg-gray-50 transition-colors shadow-2xs cursor-pointer"
        >
          Back to Reports
        </button>
      </div>

      {/* Protocols Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {allProtocolsList.map((protocol) => (
          <div key={protocol.id} className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="h-36 rounded-2xl overflow-hidden mb-3 border border-gray-100 shadow-2xs">
                <img src={protocol.image} alt={protocol.title} className="w-full h-full object-cover" />
              </div>

              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                  {protocol.category}
                </span>
                <span className="text-[10px] font-bold text-gray-400">
                  {protocol.icd10Code}
                </span>
              </div>

              <h3 className="font-bold text-sm text-gray-900 mb-1.5">{protocol.title}</h3>
              <p className="text-xs text-gray-500 mb-3">{protocol.summary}</p>

              {/* Target KPI */}
              <div className="p-3 bg-emerald-50/60 rounded-2xl border border-emerald-100 mb-3 text-xs">
                <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block mb-0.5">Target Clinical KPI</span>
                <p className="font-bold text-emerald-900">{protocol.targetKpi}</p>
              </div>

              {/* Step Checklist */}
              <div className="space-y-1.5 mb-3">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Key Care Steps</span>
                {protocol.steps.slice(0, 3).map((step, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 text-[11px] text-gray-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
              <span className="text-[11px] text-gray-400">{protocol.version}</span>
              <button
                onClick={() => alert(`Opening comprehensive care pathway document for ${protocol.title}`)}
                className="text-blue-600 font-bold hover:underline flex items-center gap-0.5 cursor-pointer"
              >
                Full Protocol <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
