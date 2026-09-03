import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, FileText, CheckCircle2, Copy, Sparkles, ShieldCheck } from 'lucide-react';
import { AppointmentFormData, FormErrors } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedDoctor?: string;
  preselectedCategory?: string;
  preselectedProgram?: string;
  onShowToast: (title: string, message: string, type?: 'success' | 'info' | 'warning') => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedDoctor = '',
  preselectedCategory = '',
  preselectedProgram = '',
  onShowToast
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    email: '',
    phone: '',
    consultationType: preselectedCategory || preselectedProgram || 'Comprehensive Diabetes Evaluation',
    preferredDoctor: preselectedDoctor || 'First Available Specialist',
    preferredDate: '',
    preferredTime: 'Morning (9:00 AM - 12:00 PM)',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  // Sync props when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        consultationType: preselectedCategory || preselectedProgram || prev.consultationType,
        preferredDoctor: preselectedDoctor || prev.preferredDoctor
      }));
      setSubmittedRef(null);
      setErrors({});
    }
  }, [isOpen, preselectedDoctor, preselectedCategory, preselectedProgram]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.replace(/\D/g, '').length < 8) {
      newErrors.phone = 'Please enter a valid phone number (min 8 digits)';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date';
    } else {
      const selectedDate = new Date(formData.preferredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.preferredDate = 'Preferred date cannot be in the past';
      }
    }

    if (!formData.consultationType) {
      newErrors.consultationType = 'Please select a consultation type';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const randomCode = `GLV-${Math.floor(1000 + Math.random() * 9000)}-${String.fromCharCode(65 + Math.floor(Math.random() * 26))}`;
      setSubmittedRef(randomCode);
      onShowToast('Consultation Request Generated', `Demo booking reference: ${randomCode}`);
    } else {
      onShowToast('Validation Notice', 'Please review the highlighted fields in the form', 'warning');
    }
  };

  const copyRefCode = () => {
    if (submittedRef) {
      navigator.clipboard.writeText(submittedRef);
      onShowToast('Copied to Clipboard', `Reference code ${submittedRef} copied`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#252326]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div
        className="relative bg-[#FAF8F5] rounded-2xl max-w-xl w-full shadow-2xl border border-[#E5DDD8] overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200 my-8"
        role="dialog"
        aria-labelledby="appointment-modal-title"
        aria-modal="true"
      >
        {/* Header Ribbon */}
        <div className="bg-[#542F3B] text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors focus-visible:ring-2 focus-visible:ring-[#C97873]"
            aria-label="Close appointment modal"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="inline-block text-xs uppercase tracking-widest font-bold text-[#E8B6A5] mb-1">
            Gluvia Clinical Consultations
          </span>
          <h2 id="appointment-modal-title" className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF8F5]">
            {submittedRef ? 'Consultation Request Confirmed' : 'Book a Specialist Consultation'}
          </h2>
          <p className="text-xs text-[#FAF8F5]/80 font-sans mt-1">
            {submittedRef ? 'Demo appointment submission preview' : 'Schedule your baseline evaluation or program intake'}
          </p>
        </div>

        {/* Confirmation Screen View */}
        {submittedRef ? (
          <div className="p-6 sm:p-8 space-y-6 text-center font-sans">
            <div className="w-16 h-16 rounded-2xl bg-[#FAF0EE] text-[#C97873] mx-auto flex items-center justify-center border border-[#E5DDD8]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-[#542F3B]">
                Request Received
              </h3>
              <p className="text-xs text-[#70696C] font-normal mt-1">
                Demo appointment request submitted successfully.
              </p>
            </div>

            {/* Reference Badge */}
            <div className="p-4 rounded-xl bg-white border border-[#E5DDD8] space-y-2">
              <span className="text-[11px] font-bold text-[#70696C] uppercase">Booking Reference Code</span>
              <div className="flex items-center justify-center gap-2">
                <span className="font-mono text-xl font-bold text-[#C97873]">{submittedRef}</span>
                <button
                  onClick={copyRefCode}
                  className="p-1.5 rounded-lg bg-[#FAF0EE] text-[#C97873] hover:bg-[#C97873] hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#C97873]"
                  title="Copy reference code"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Selected Details Summary */}
            <div className="bg-[#FAF0EE] p-5 rounded-xl text-left space-y-2.5 text-xs text-[#252326] border border-[#C97873]/20">
              <div className="flex justify-between">
                <span className="text-[#70696C]">Patient Name:</span>
                <span className="font-bold">{formData.fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#70696C]">Consultation:</span>
                <span className="font-bold">{formData.consultationType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#70696C]">Physician:</span>
                <span className="font-bold">{formData.preferredDoctor}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#70696C]">Requested Slot:</span>
                <span className="font-bold">{formData.preferredDate} ({formData.preferredTime})</span>
              </div>
            </div>

            {/* Important Demo Notice */}
            <div className="p-3 bg-[#F2ECE9] rounded-xl text-[11px] text-[#70696C] border border-[#E5DDD8]">
              <strong>Template Notice:</strong> This is a frontend demonstration template. No actual clinical appointment has been scheduled on a live medical server.
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onClose}
                className="btn-primary w-full min-h-[44px] text-xs font-semibold"
              >
                Close Confirmation
              </button>
            </div>
          </div>
        ) : (
          /* Appointment Form View */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4 font-sans text-xs max-h-[70vh] overflow-y-auto">
            
            {/* Full Name */}
            <div>
              <label className="block font-bold text-[#542F3B] mb-1">
                Full Name <span className="text-[#C97873]">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-[#70696C] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="e.g. Priya Sharma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={`w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border text-xs text-[#252326] focus:outline-none focus:ring-2 focus:ring-[#C97873] ${
                    errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-[#E5DDD8]'
                  }`}
                />
              </div>
              {errors.fullName && <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.fullName}</p>}
            </div>

            {/* Email & Phone Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-[#542F3B] mb-1">
                  Email Address <span className="text-[#C97873]">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#70696C] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    placeholder="priya@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border text-xs text-[#252326] focus:outline-none focus:ring-2 focus:ring-[#C97873] ${
                      errors.email ? 'border-red-400 bg-red-50/20' : 'border-[#E5DDD8]'
                    }`}
                  />
                </div>
                {errors.email && <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.email}</p>}
              </div>

              <div>
                <label className="block font-bold text-[#542F3B] mb-1">
                  Phone Number <span className="text-[#C97873]">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#70696C] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border text-xs text-[#252326] focus:outline-none focus:ring-2 focus:ring-[#C97873] ${
                      errors.phone ? 'border-red-400 bg-red-50/20' : 'border-[#E5DDD8]'
                    }`}
                  />
                </div>
                {errors.phone && <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.phone}</p>}
              </div>
            </div>

            {/* Consultation Type */}
            <div>
              <label className="block font-bold text-[#542F3B] mb-1">
                Consultation Type <span className="text-[#C97873]">*</span>
              </label>
              <select
                value={formData.consultationType}
                onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#E5DDD8] text-xs text-[#252326] focus:outline-none focus:ring-2 focus:ring-[#C97873]"
              >
                <option value="Comprehensive Diabetes Evaluation">Comprehensive Diabetes Evaluation</option>
                <option value="Type 1 Diabetes & Insulin Pump Care">Type 1 Diabetes & Insulin Pump Care</option>
                <option value="Type 2 Diabetes Remission Protocol">Type 2 Diabetes Remission Protocol</option>
                <option value="Prediabetes Reversal Consultation">Prediabetes Reversal Consultation</option>
                <option value="Gestational Diabetes Care">Gestational Diabetes Care</option>
                <option value="Pediatric Endocrinology Visit">Pediatric Endocrinology Visit</option>
                <option value="Diabetic Foot & Neuropathy Exam">Diabetic Foot & Neuropathy Exam</option>
                <option value="Retinal Scanning & Eye Evaluation">Retinal Scanning & Eye Evaluation</option>
                <option value="START Program Intake">START Program Intake</option>
                <option value="BALANCE Program Enrollment">BALANCE Program Enrollment</option>
                <option value="PREVENT Program Enrollment">PREVENT Program Enrollment</option>
                <option value="COMPLETE Program Enrollment">COMPLETE Program Enrollment</option>
              </select>
            </div>

            {/* Preferred Doctor */}
            <div>
              <label className="block font-bold text-[#542F3B] mb-1">
                Preferred Doctor
              </label>
              <select
                value={formData.preferredDoctor}
                onChange={(e) => setFormData({ ...formData, preferredDoctor: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#E5DDD8] text-xs text-[#252326] focus:outline-none focus:ring-2 focus:ring-[#C97873]"
              >
                <option value="First Available Specialist">First Available Specialist</option>
                <option value="Dr. Anika Rao (Endocrinologist)">Dr. Anika Rao — Lead Endocrinologist</option>
                <option value="Dr. Arjun Mehta (Diabetologist)">Dr. Arjun Mehta — Diabetologist</option>
                <option value="Dr. Maya Iyer (Nutrition Specialist)">Dr. Maya Iyer — Metabolic Nutritionist</option>
                <option value="Dr. Rohan Shah (Podiatrist)">Dr. Rohan Shah — Foot Specialist</option>
              </select>
            </div>

            {/* Date & Time Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-[#542F3B] mb-1">
                  Preferred Date <span className="text-[#C97873]">*</span>
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className={`w-full px-3 py-2.5 rounded-xl bg-white border text-xs text-[#252326] focus:outline-none focus:ring-2 focus:ring-[#C97873] ${
                    errors.preferredDate ? 'border-red-400 bg-red-50/20' : 'border-[#E5DDD8]'
                  }`}
                />
                {errors.preferredDate && <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.preferredDate}</p>}
              </div>

              <div>
                <label className="block font-bold text-[#542F3B] mb-1">
                  Preferred Time Window
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#E5DDD8] text-xs text-[#252326] focus:outline-none focus:ring-2 focus:ring-[#C97873]"
                >
                  <option value="Morning (9:00 AM - 12:00 PM)">Morning (9:00 AM - 12:00 PM)</option>
                  <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                  <option value="Evening (4:00 PM - 6:00 PM)">Evening (4:00 PM - 6:00 PM)</option>
                </select>
              </div>
            </div>

            {/* Additional Message */}
            <div>
              <label className="block font-bold text-[#542F3B] mb-1">
                Medical Notes / Recent HbA1c (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Share any current HbA1c readings, CGM usage, or specific concerns..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-3 rounded-xl bg-white border border-[#E5DDD8] text-xs text-[#252326] focus:outline-none focus:ring-2 focus:ring-[#C97873]"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="btn-primary w-full min-h-[44px] py-3.5 text-xs font-semibold"
              >
                Submit Consultation Request (Demo)
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
