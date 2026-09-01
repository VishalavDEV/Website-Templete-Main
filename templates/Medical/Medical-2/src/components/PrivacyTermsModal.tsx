import React, { useState } from 'react';
import { ShieldCheck, FileText, Lock, X } from 'lucide-react';

interface PrivacyTermsModalProps {
  isOpen: boolean;
  initialTab?: 'privacy' | 'terms' | 'rights';
  onClose: () => void;
}

export const PrivacyTermsModal: React.FC<PrivacyTermsModalProps> = ({
  isOpen,
  initialTab = 'privacy',
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'rights'>(initialTab);

  if (!isOpen) return null;

  return (
    <div
      id="privacy-terms-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-3xl w-full max-h-[85vh] flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-6 h-6 text-teal-400" />
            <div>
              <h3 className="text-lg font-bold">Clinical Governance & Patient Privacy</h3>
              <p className="text-xs text-slate-400">HIPAA Compliant Healthcare Information Architecture</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 pt-3 gap-3">
          <button
            id="tab-btn-privacy"
            onClick={() => setActiveTab('privacy')}
            className={`pb-3 px-3 text-xs font-bold border-b-2 transition flex items-center gap-2 ${
              activeTab === 'privacy'
                ? 'border-teal-600 text-teal-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            HIPAA & Privacy Policy
          </button>
          <button
            id="tab-btn-terms"
            onClick={() => setActiveTab('terms')}
            className={`pb-3 px-3 text-xs font-bold border-b-2 transition flex items-center gap-2 ${
              activeTab === 'terms'
                ? 'border-teal-600 text-teal-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            Terms of Clinical Service
          </button>
          <button
            id="tab-btn-rights"
            onClick={() => setActiveTab('rights')}
            className={`pb-3 px-3 text-xs font-bold border-b-2 transition flex items-center gap-2 ${
              activeTab === 'rights'
                ? 'border-teal-600 text-teal-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            Patient Rights & Dignity
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-slate-600 leading-relaxed">
          {activeTab === 'privacy' && (
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 text-base">Health Information Privacy Notice</h4>
              <p>
                At Medicio Health, your personal health records, diagnostic tests, and consultation details are protected under the Health Insurance Portability and Accountability Act (HIPAA) and state privacy statutes.
              </p>
              <h5 className="font-semibold text-slate-800 text-xs uppercase tracking-wider mt-3">How We Protect Your Records</h5>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600">
                <li>All telemetric communications and digital records are encrypted with AES-256 protocols at rest and in transit.</li>
                <li>Access to your medical records is restricted strictly to clinicians directly involved in your treatment and clinical care pathway.</li>
                <li>We never sell, distribute, or monetize personal health data for commercial or third-party marketing purposes.</li>
              </ul>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 text-base">Terms of Clinical Engagement</h4>
              <p>
                By scheduling an appointment, utilizing telehealth interfaces, or interacting with Medicio Health digital tools, you acknowledge the standard conditions of professional medical consultation.
              </p>
              <h5 className="font-semibold text-slate-800 text-xs uppercase tracking-wider mt-3">Appointment Guidelines & Cancellations</h5>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600">
                <li>Appointments can be rescheduled or cancelled up to 2 hours in advance through the online portal without penalties.</li>
                <li>Telehealth consults require a stable internet connection and active camera/audio capability.</li>
                <li>Prescription renewals and laboratory diagnostic test requests are subject to medical evaluation by licensed physicians.</li>
              </ul>
            </div>
          )}

          {activeTab === 'rights' && (
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 text-base">Patient Bill of Rights & Dignity Charter</h4>
              <p>
                Every patient receiving clinical care at Medicio Health is entitled to compassionate, respectful, and nondiscriminatory treatment.
              </p>
              <h5 className="font-semibold text-slate-800 text-xs uppercase tracking-wider mt-3">Your Core Rights</h5>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600">
                <li>The right to receive complete, clear explanations of all proposed diagnoses, treatment options, and financial costs.</li>
                <li>The right to informed consent and the right to refuse or seek a second opinion for any medical procedure.</li>
                <li>The right to receive prompt, high-standard emergency care without regard to race, nationality, religion, gender identity, or ability to pay.</li>
              </ul>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold rounded-lg shadow-sm transition"
          >
            I Understand & Agree
          </button>
        </div>
      </div>
    </div>
  );
};
