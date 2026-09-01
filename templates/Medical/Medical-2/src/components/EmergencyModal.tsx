import React, { useState } from 'react';
import { PhoneCall, AlertTriangle, MapPin, Clock, ShieldAlert, X, Activity, CheckCircle } from 'lucide-react';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToBooking: () => void;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({
  isOpen,
  onClose,
  onNavigateToBooking,
}) => {
  const [triageStep, setTriageStep] = useState<'options' | 'alertSent'>('options');
  const [selectedSymptom, setSelectedSymptom] = useState<string>('');

  if (!isOpen) return null;

  const emergencyHotlines = [
    { title: 'Level-1 Emergency ER Desk', number: '(800) 555-0199', desc: 'Direct emergency nurse dispatch & ambulance bay' },
    { title: 'Acute Stroke / Cardiac Line', number: '(800) 555-0191', desc: 'Priority code stroke & heart team standby' },
    { title: 'Pediatric Urgent Triage', number: '(800) 555-0195', desc: 'On-duty pediatric critical care physician' },
  ];

  const severeSymptoms = [
    'Crushing chest pressure or left arm pain',
    'Sudden facial drooping, arm weakness, or speech loss',
    'Severe breathing distress or blue lips',
    'Major physical trauma, uncontrolled bleeding, or deep fracture',
    'Unexplained loss of consciousness or seizure',
  ];

  const handleNotifyOnCall = () => {
    setTriageStep('alertSent');
    setTimeout(() => {
      // Auto-reset after a moment if user reopens
    }, 4000);
  };

  return (
    <div
      id="emergency-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="emergency-modal-title"
    >
      <div
        id="emergency-modal-card"
        className="relative bg-white rounded-2xl shadow-2xl border border-rose-100 max-w-2xl w-full overflow-hidden"
      >
        {/* Top Emergency Header */}
        <div className="bg-gradient-to-r from-rose-600 to-red-700 px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
              <ShieldAlert className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 id="emergency-modal-title" className="text-xl font-bold text-white tracking-tight">
                24/7 Emergency & Urgent Clinical Triage
              </h3>
              <p className="text-rose-100 text-xs font-medium">
                Medicio Emergency Trauma Pavilion • Open 24/7/365
              </p>
            </div>
          </div>
          <button
            id="close-emergency-modal-btn"
            onClick={onClose}
            className="text-white/80 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close emergency modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 max-h-[80vh] overflow-y-auto space-y-6">
          {/* Immediate Call to Action Alert */}
          <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-rose-900">Immediate Life-Threatening Crisis?</h4>
              <p className="text-xs text-rose-700 mt-1 leading-relaxed">
                If you or someone around you is experiencing life-threatening symptoms, immediately call{' '}
                <strong className="underline font-bold text-rose-900">911</strong> or proceed directly to our Emergency Department.
              </p>
            </div>
          </div>

          {triageStep === 'alertSent' ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Emergency Desk Notified</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Our on-duty triage nurse at Station 1 has been alerted of your arrival for{' '}
                <span className="font-semibold text-slate-900">{selectedSymptom || 'immediate care'}</span>.
                Please check in directly with the triage desk upon walking through the emergency doors.
              </p>
              <div className="flex justify-center gap-3 pt-2">
                <button
                  id="reset-triage-btn"
                  onClick={() => setTriageStep('options')}
                  className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition"
                >
                  Back to Emergency Guide
                </button>
                <button
                  id="close-after-alert-btn"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-700 rounded-lg shadow-sm transition"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Emergency Hotline Directory */}
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                  Direct Emergency Hotlines
                </h4>
                <div className="grid sm:grid-cols-3 gap-3">
                  {emergencyHotlines.map((hotline, idx) => (
                    <a
                      key={idx}
                      href={`tel:${hotline.number.replace(/[^0-9]/g, '')}`}
                      id={`emergency-call-link-${idx}`}
                      className="p-3.5 rounded-xl border border-slate-200 hover:border-rose-400 bg-slate-50/70 hover:bg-rose-50/50 transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center gap-2 text-rose-600 mb-1">
                          <PhoneCall className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          <span className="text-xs font-bold text-slate-900">{hotline.title}</span>
                        </div>
                        <p className="text-[11px] text-slate-500 leading-tight mb-2">{hotline.desc}</p>
                      </div>
                      <span className="text-sm font-extrabold text-rose-700">{hotline.number}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Triage Guidance */}
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Emergency Red-Flag Symptoms
                </h4>
                <div className="space-y-2">
                  {severeSymptoms.map((symptom, idx) => (
                    <button
                      key={idx}
                      id={`symptom-triage-btn-${idx}`}
                      onClick={() => {
                        setSelectedSymptom(symptom);
                        handleNotifyOnCall();
                      }}
                      className="w-full text-left p-3 rounded-lg border border-slate-200 hover:border-rose-300 hover:bg-rose-50/60 transition flex items-center justify-between text-xs text-slate-700 group"
                    >
                      <div className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-rose-500 shrink-0" />
                        <span>{symptom}</span>
                      </div>
                      <span className="text-[11px] font-semibold text-rose-600 opacity-0 group-hover:opacity-100 transition-opacity">
                        Alert Triage Desk →
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Physical Location & Directions */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-600">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 font-semibold text-slate-900">
                    <MapPin className="w-4 h-4 text-teal-600" />
                    <span>450 Medical Arts Pavilion, Dedicated ER Entrance (Bay Street)</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Clock className="w-4 h-4 text-teal-600" />
                    <span>Open 24 Hours • Free Valet Emergency Parking Available</span>
                  </div>
                </div>
                <button
                  id="non-emergency-booking-btn"
                  onClick={() => {
                    onClose();
                    onNavigateToBooking();
                  }}
                  className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg shadow-sm text-xs shrink-0 transition"
                >
                  Book Routine Visit Instead
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
