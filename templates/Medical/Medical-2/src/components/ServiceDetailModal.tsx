import React from 'react';
import { Service } from '../types';
import { 
  X, CheckCircle2, ShieldAlert, Cpu, HeartHandshake, 
  Calendar, Clock, AlertCircle, ArrowRight 
} from 'lucide-react';

interface ServiceDetailModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
  onBookService: (service: Service) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  isOpen,
  onClose,
  onBookService,
}) => {
  if (!isOpen || !service) return null;

  return (
    <div
      id="service-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden">
        {/* Modal Header Bar */}
        <div className="relative bg-gradient-to-r from-teal-900 via-slate-900 to-cyan-950 text-white p-6 sm:p-8">
          <button
            id="close-service-modal-btn"
            onClick={onClose}
            className="absolute top-5 right-5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition"
            aria-label="Close service details"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs font-semibold px-3 py-0.5 rounded-full">
                {service.category}
              </span>
              <span className="bg-slate-700/50 text-slate-300 text-xs px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <Clock className="w-3 h-3 text-teal-400" />
                Est. Duration: {service.durationMinutes} mins
              </span>
            </div>

            <h3 id="service-modal-title" className="text-2xl sm:text-3xl font-extrabold text-white">
              {service.title}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
              {service.shortDesc}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700">
          {/* Full Description */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-teal-600" />
              Clinical Scope & Overview
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
              {service.fullDesc}
            </p>
          </div>

          {/* Benefits & Conditions Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 bg-teal-50/50 rounded-xl border border-teal-100">
              <h5 className="text-xs font-bold text-teal-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                Key Patient Benefits
              </h5>
              <ul className="space-y-2 text-xs text-slate-700">
                {service.keyBenefits.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-teal-600" />
                Common Indications & Conditions
              </h5>
              <ul className="space-y-2 text-xs text-slate-700">
                {service.conditionsTreated.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technology & Diagnostics */}
          <div className="p-4 bg-slate-50/80 rounded-xl border border-slate-200">
            <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-teal-600" />
              Advanced Technology & Equipment Utilized
            </h5>
            <div className="flex flex-wrap gap-2">
              {service.technologyUsed.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-700 shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Patient Preparation Notice */}
          <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-4 flex items-start gap-3 text-xs text-amber-900">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Patient Preparation Guidelines: </span>
              <span>{service.patientPrep}</span>
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-slate-100">
            <div className="text-xs text-slate-500 text-center sm:text-left">
              Direct consultation scheduling with specialists on duty.
            </div>
            <button
              id={`book-service-cta-${service.id}`}
              onClick={() => {
                onClose();
                onBookService(service);
              }}
              className="w-full sm:w-auto px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
            >
              <Calendar className="w-4 h-4" />
              Schedule Appointment for this Service
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
