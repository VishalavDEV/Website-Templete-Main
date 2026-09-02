import React from 'react';
import { 
  X, 
  Heart, 
  Activity, 
  Stethoscope, 
  ShieldCheck, 
  UserCheck, 
  Pill, 
  CheckCircle2, 
  AlertTriangle, 
  Calendar, 
  Clock, 
  FileText,
  HeartPulse
} from 'lucide-react';
import { HealthTopicItem, PatientLeaderboardItem, ClinicLeaderboardItem, PatientRecord } from '../types';
import { allPatientsList } from '../data/mockData';

interface DetailModalProps {
  item: HealthTopicItem | PatientLeaderboardItem | ClinicLeaderboardItem | PatientRecord | null;
  type: 'topic' | 'user' | 'group' | 'patient' | null;
  onClose: () => void;
}

export function DetailModal({ item, type, onClose }: DetailModalProps) {
  if (!item || !type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-gray-100 relative animate-in zoom-in-95 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Health Topic / Domain Insights */}
        {type === 'topic' && (() => {
          const topic = item as HealthTopicItem;
          const isWeak = topic.percentage < 80;
          return (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-xs border border-gray-100 flex-shrink-0">
                  <img src={topic.image} alt={topic.title} className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                    {topic.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mt-1">{topic.title}</h3>
                </div>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed">
                {topic.description || 'Clinical adherence protocol and continuous telemetry monitoring standards.'}
              </p>

              <div className="grid grid-cols-3 gap-2.5">
                <div className="bg-gray-50 rounded-2xl p-3 border border-gray-100 text-center">
                  <span className="text-[10px] text-gray-400 font-semibold block mb-0.5">Control Score</span>
                  <span className={`text-base font-extrabold ${isWeak ? 'text-red-500' : 'text-emerald-500'}`}>
                    {topic.percentage}%
                  </span>
                </div>
                <div className="bg-gray-50 rounded-2xl p-3 border border-gray-100 text-center">
                  <span className="text-[10px] text-gray-400 font-semibold block mb-0.5">Assessments</span>
                  <span className="text-base font-bold text-gray-900">{topic.totalAssessments || 500}</span>
                </div>
                <div className="bg-gray-50 rounded-2xl p-3 border border-gray-100 text-center">
                  <span className="text-[10px] text-gray-400 font-semibold block mb-0.5">Response Time</span>
                  <span className="text-base font-bold text-gray-900">{topic.avgResponse || '45s'}</span>
                </div>
              </div>

              {topic.clinicalGuidelines && (
                <div className="p-3.5 bg-blue-50/50 rounded-2xl border border-blue-100 space-y-1.5 text-xs">
                  <span className="text-[10px] font-bold text-blue-800 uppercase tracking-wider block">Clinical Directives</span>
                  {topic.clinicalGuidelines.map((g, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-gray-700 text-[11px]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{g}</span>
                    </div>
                  ))}
                </div>
              )}

              {topic.alertThreshold && (
                <div className="p-3 bg-red-50 rounded-xl border border-red-100 text-xs text-red-900 flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Escalation Trigger Limit:</span>
                    <p className="text-[11px] text-red-700">{topic.alertThreshold}</p>
                  </div>
                </div>
              )}

              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-xl bg-gray-900 hover:bg-black text-white text-xs font-bold transition-colors cursor-pointer"
              >
                Close Insights
              </button>
            </div>
          );
        })()}

        {/* Patient Detail / Leaderboard Profile */}
        {(type === 'user' || type === 'patient') && (() => {
          const patient = (allPatientsList.find(p => p.id === (item as any).id) || item) as PatientRecord;
          return (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-xs border-2 border-blue-500/20 flex-shrink-0">
                  <img src={patient.avatar} alt={patient.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-gray-900">{patient.name}</h3>
                    <span className="px-2 py-0.5 bg-blue-50 text-blue-600 font-bold text-[10px] rounded-full">
                      Rank #{patient.rank || 1}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">{patient.condition} · {patient.cohort}</p>
                  <p className="text-[11px] text-blue-600 font-semibold">{patient.primaryCareDoctor}</p>
                </div>
              </div>

              {/* Vitals Telemetry Row */}
              {patient.vitals && (
                <div className="grid grid-cols-4 gap-2 p-3 bg-gray-50 rounded-2xl border border-gray-100 text-center text-xs">
                  <div>
                    <span className="text-[10px] text-gray-400 block font-medium">BP</span>
                    <span className="font-bold text-gray-900">{patient.vitals.bp}</span>
                  </div>
                  <div className="border-l border-gray-200">
                    <span className="text-[10px] text-gray-400 block font-medium">HR</span>
                    <span className="font-bold text-gray-900">{patient.vitals.heartRate} bpm</span>
                  </div>
                  <div className="border-l border-gray-200">
                    <span className="text-[10px] text-gray-400 block font-medium">SpO2</span>
                    <span className="font-bold text-blue-600">{patient.vitals.spo2}%</span>
                  </div>
                  <div className="border-l border-gray-200">
                    <span className="text-[10px] text-gray-400 block font-medium">Glucose</span>
                    <span className="font-bold text-amber-600">{patient.vitals.glucose} mg</span>
                  </div>
                </div>
              )}

              {/* Medications List */}
              {patient.medications && (
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Prescriptions & Intake Compliance</span>
                  <div className="space-y-1">
                    {patient.medications.map((m, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2 bg-gray-50/80 rounded-xl text-xs border border-gray-100">
                        <div className="flex items-center gap-2">
                          <Pill className="w-3.5 h-3.5 text-blue-600" />
                          <span className="font-bold text-gray-800">{m.name}</span>
                          <span className="text-gray-500">({m.dosage})</span>
                        </div>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                          m.takenToday ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                        }`}>
                          {m.takenToday ? '✓ Taken Today' : 'Pending'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {patient.clinicalNotes && (
                <div className="p-3 bg-blue-50/40 rounded-xl border border-blue-100 text-xs text-gray-700">
                  <span className="font-bold text-blue-900 block mb-0.5">Clinical Telehealth Notes:</span>
                  <p className="text-[11px] leading-relaxed">{patient.clinicalNotes}</p>
                </div>
              )}

              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-xl bg-gray-900 hover:bg-black text-white text-xs font-bold transition-colors cursor-pointer"
              >
                Close Patient Chart
              </button>
            </div>
          );
        })()}

        {/* Clinic Facility Profile */}
        {type === 'group' && (() => {
          const group = item as ClinicLeaderboardItem;
          return (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg shadow-xs">
                  #{group.rank}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{group.name}</h3>
                  <p className="text-xs text-gray-500">{group.location || 'Clinical Center'} · {group.patientCount || 30} Monitored Patients</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-50 rounded-2xl p-3.5 border border-gray-100">
                  <span className="text-[10px] text-gray-400 font-semibold block mb-1">Points / Patient</span>
                  <span className="text-xl font-bold text-gray-900">{group.pointsPerUser} pts</span>
                </div>
                <div className="bg-gray-50 rounded-2xl p-3.5 border border-gray-100">
                  <span className="text-[10px] text-gray-400 font-semibold block mb-1">Cohort Recovery Rate</span>
                  <span className="text-xl font-bold text-emerald-600">{group.percentage}% Average</span>
                </div>
              </div>

              <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 text-xs text-gray-600 flex items-center justify-between">
                <span className="font-semibold text-gray-500">Telehealth On-Time Efficiency:</span>
                <span className="font-bold text-blue-700">{group.telehealthEfficiency || '98.5%'}</span>
              </div>

              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-xl bg-gray-900 hover:bg-black text-white text-xs font-bold transition-colors cursor-pointer"
              >
                Close Facility Overview
              </button>
            </div>
          );
        })()}
      </div>
    </div>
  );
}
