import React, { useState, useEffect } from 'react';
import { Department, Doctor, Appointment, VisitType } from '../types';
import { departmentsData } from '../data/departmentsData';
import { doctorsData } from '../data/doctorsData';
import { storageService } from '../services/storageService';
import confetti from 'canvas-confetti';
import { 
  Calendar as CalendarIcon, Clock, User, ShieldCheck, ChevronRight, 
  ChevronLeft, CheckCircle2, AlertCircle, Sparkles, Building2, Stethoscope, 
  Video, MapPin, Download, ArrowRight, RefreshCw, X 
} from 'lucide-react';

interface AppointmentWizardProps {
  initialDepartmentId?: string;
  initialDoctorId?: string;
  initialVisitType?: VisitType;
  onAppointmentBooked?: (appointment: Appointment) => void;
  onOpenMyAppointments?: () => void;
  onClose?: () => void;
  isModalMode?: boolean;
}

export const AppointmentWizard: React.FC<AppointmentWizardProps> = ({
  initialDepartmentId,
  initialDoctorId,
  initialVisitType,
  onAppointmentBooked,
  onOpenMyAppointments,
  onClose,
  isModalMode = false,
}) => {
  // Steps: 1: Dept, 2: Doctor, 3: Date, 4: Time, 5: Patient Details, 6: Review, 7: Confirmed
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form State
  const [selectedDeptId, setSelectedDeptId] = useState<string>(initialDepartmentId || '');
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>(initialDoctorId || '');
  const [selectedDate, setSelectedDate] = useState<string>(''); // YYYY-MM-DD
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('');
  const [visitType, setVisitType] = useState<VisitType>(initialVisitType || 'In-Person Consultation');

  // Patient Info
  const [patientName, setPatientName] = useState<string>('');
  const [patientEmail, setPatientEmail] = useState<string>('');
  const [patientPhone, setPatientPhone] = useState<string>('');
  const [patientDob, setPatientDob] = useState<string>('');
  const [patientGender, setPatientGender] = useState<string>('Female');
  const [reason, setReason] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [acceptedTerms, setAcceptedTerms] = useState<boolean>(false);

  // Validation Errors
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Confirmed Appointment Result
  const [confirmedAppt, setConfirmedAppt] = useState<Appointment | null>(null);

  // Filter Search in Dept / Doctor steps
  const [deptSearch, setDeptSearch] = useState<string>('');

  // Handle external pre-selections
  useEffect(() => {
    if (initialDepartmentId) {
      setSelectedDeptId(initialDepartmentId);
    }
    if (initialDoctorId) {
      setSelectedDoctorId(initialDoctorId);
      const doc = doctorsData.find(d => d.id === initialDoctorId);
      if (doc) {
        setSelectedDeptId(doc.departmentId);
      }
    }
    if (initialVisitType) {
      setVisitType(initialVisitType);
    }
  }, [initialDepartmentId, initialDoctorId, initialVisitType]);

  // Trigger confetti on step 7
  useEffect(() => {
    if (currentStep === 7) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Safe fallback
      }
    }
  }, [currentStep]);

  // Derived selections
  const currentDepartment = departmentsData.find(d => d.id === selectedDeptId);
  const currentDoctor = doctorsData.find(d => d.id === selectedDoctorId);

  // Doctors filtered by selected department
  const availableDoctors = selectedDeptId
    ? doctorsData.filter(doc => doc.departmentId === selectedDeptId)
    : doctorsData;

  // Generate calendar dates for the current demo month (e.g. Next 14 days)
  const generateAvailableDays = () => {
    const days = [];
    const today = new Date();
    // Normalize to midnight
    today.setHours(0, 0, 0, 0);

    for (let i = 1; i <= 14; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      const isSunday = d.getDay() === 0;
      const dateStr = d.toISOString().split('T')[0];
      const dayName = d.toLocaleDateString('en-US', { weekday: 'short' });
      const monthName = d.toLocaleDateString('en-US', { month: 'short' });
      const dayNumber = d.getDate();

      days.push({
        dateStr,
        dayName,
        monthName,
        dayNumber,
        isAvailable: !isSunday, // Clinics closed Sundays for routine
        fullDateFormatted: d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
      });
    }
    return days;
  };

  const calendarDays = generateAvailableDays();

  // Time slots for selected doctor
  const timeSlots = currentDoctor?.availableTimeSlots || [
    '08:30 AM', '09:30 AM', '10:30 AM', '11:30 AM', 
    '01:30 PM', '02:30 PM', '03:30 PM', '04:30 PM'
  ];

  // Validation function for Step 5
  const validatePatientDetails = (): boolean => {
    const errs: { [key: string]: string } = {};

    if (!patientName.trim() || patientName.trim().length < 2) {
      errs.patientName = 'Please enter patient full name.';
    }

    if (!patientEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(patientEmail)) {
      errs.patientEmail = 'Please provide a valid email address.';
    }

    if (!patientPhone.trim() || patientPhone.replace(/[^0-9]/g, '').length < 7) {
      errs.patientPhone = 'Please provide a valid phone number.';
    }

    if (!patientDob) {
      errs.patientDob = 'Date of birth is required.';
    }

    if (!reason.trim() || reason.trim().length < 5) {
      errs.reason = 'Please provide a brief reason for your consultation.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Step advancement checks
  const handleNext = () => {
    if (currentStep === 1) {
      if (!selectedDeptId) {
        setErrors({ dept: 'Please select a medical department to proceed.' });
        return;
      }
      setErrors({});
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (!selectedDoctorId) {
        setErrors({ doctor: 'Please select a specialist physician to proceed.' });
        return;
      }
      setErrors({});
      setCurrentStep(3);
    } else if (currentStep === 3) {
      if (!selectedDate) {
        setErrors({ date: 'Please choose an appointment date.' });
        return;
      }
      setErrors({});
      setCurrentStep(4);
    } else if (currentStep === 4) {
      if (!selectedTimeSlot) {
        setErrors({ time: 'Please select a convenient time slot.' });
        return;
      }
      setErrors({});
      setCurrentStep(5);
    } else if (currentStep === 5) {
      if (!validatePatientDetails()) {
        return;
      }
      setCurrentStep(6);
    } else if (currentStep === 6) {
      if (!acceptedTerms) {
        setErrors({ terms: 'Please confirm that the appointment details are accurate.' });
        return;
      }
      // Finalize and save!
      const randomSuffix = Math.floor(1000 + Math.random() * 9000);
      const apptCode = `MC-2026-${selectedDate.replace(/-/g, '').slice(4)}-${randomSuffix}`;
      
      const newAppt: Appointment = {
        id: `appt-${Date.now()}`,
        appointmentCode: apptCode,
        patientName,
        patientEmail,
        patientPhone,
        patientDob,
        patientGender,
        departmentId: selectedDeptId,
        departmentName: currentDepartment?.name || 'General Medicine',
        doctorId: selectedDoctorId,
        doctorName: currentDoctor?.name || 'Primary Care Specialist',
        doctorSpecialty: currentDoctor?.specialty || 'General Consultation',
        doctorAvatar: currentDoctor?.avatar || '',
        date: selectedDate,
        timeSlot: selectedTimeSlot,
        visitType,
        reason,
        notes,
        status: 'Upcoming',
        createdAt: new Date().toISOString()
      };

      storageService.saveAppointment(newAppt);
      setConfirmedAppt(newAppt);
      if (onAppointmentBooked) {
        onAppointmentBooked(newAppt);
      }
      setCurrentStep(7);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      setErrors({});
    }
  };

  const handleResetWizard = () => {
    setCurrentStep(1);
    setSelectedDeptId('');
    setSelectedDoctorId('');
    setSelectedDate('');
    setSelectedTimeSlot('');
    setPatientName('');
    setPatientEmail('');
    setPatientPhone('');
    setPatientDob('');
    setReason('');
    setNotes('');
    setAcceptedTerms(false);
    setConfirmedAppt(null);
    setErrors({});
  };

  const handleDownloadSummary = () => {
    if (!confirmedAppt) return;
    const summaryText = `
MEDICIO HEALTH - APPOINTMENT CONFIRMATION
========================================
Confirmation Code: ${confirmedAppt.appointmentCode}
Status: Confirmed (Upcoming)

PATIENT INFORMATION:
Name: ${confirmedAppt.patientName}
Email: ${confirmedAppt.patientEmail}
Phone: ${confirmedAppt.patientPhone}
Gender: ${confirmedAppt.patientGender}
DOB: ${confirmedAppt.patientDob}

CLINICAL DETAILS:
Department: ${confirmedAppt.departmentName}
Physician: ${confirmedAppt.doctorName} (${confirmedAppt.doctorSpecialty})
Date: ${confirmedAppt.date}
Time Slot: ${confirmedAppt.timeSlot}
Consultation Mode: ${confirmedAppt.visitType}
Reason: ${confirmedAppt.reason}
${confirmedAppt.notes ? `Notes: ${confirmedAppt.notes}` : ''}

LOCATION & CHECK-IN:
450 Medical Arts Pavilion, Boston, MA
Please arrive 15 minutes prior with photo ID and insurance credentials.
Emergency Desk: (800) 555-0199
========================================
Thank you for choosing Medicio Health.
    `.trim();

    const blob = new Blob([summaryText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Medicio-Appointment-${confirmedAppt.appointmentCode}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const stepsLabels = [
    { num: 1, label: 'Department' },
    { num: 2, label: 'Specialist' },
    { num: 3, label: 'Date' },
    { num: 4, label: 'Time' },
    { num: 5, label: 'Patient' },
    { num: 6, label: 'Review' },
    { num: 7, label: 'Confirmed' },
  ];

  return (
    <div
      id="appointment-booking-workflow"
      className={`w-full bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden transition-all ${
        isModalMode ? 'max-h-[90vh] flex flex-col' : ''
      }`}
    >
      {/* Wizard Header Bar */}
      <div className="bg-gradient-to-r from-teal-900 via-slate-900 to-teal-950 text-white p-6 sm:p-8">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300">
              <CalendarIcon className="w-5 h-5" />
            </div>
            <div>
              <span className="text-teal-400 text-xs font-bold uppercase tracking-wider">
                Direct Patient Booking
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                Book a Clinical Consultation
              </h2>
            </div>
          </div>

          {isModalMode && onClose && (
            <button
              id="close-appointment-wizard-modal"
              onClick={onClose}
              className="text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Step Progress Tracker */}
        <div className="relative">
          <div className="hidden sm:flex items-center justify-between relative z-10">
            {stepsLabels.map((s) => {
              const isPassed = currentStep > s.num;
              const isCurrent = currentStep === s.num;
              return (
                <div key={s.num} className="flex flex-col items-center gap-1.5 flex-1">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all shadow-sm ${
                      isPassed
                        ? 'bg-teal-500 text-white'
                        : isCurrent
                        ? 'bg-white text-teal-950 ring-4 ring-teal-400/40 font-extrabold'
                        : 'bg-slate-800 text-slate-400 border border-slate-700'
                    }`}
                  >
                    {isPassed ? <CheckCircle2 className="w-4 h-4" /> : s.num}
                  </div>
                  <span
                    className={`text-[11px] font-medium transition-colors ${
                      isCurrent ? 'text-white font-bold' : isPassed ? 'text-teal-200' : 'text-slate-400'
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Mobile Step Badge */}
          <div className="sm:hidden flex items-center justify-between bg-white/10 px-4 py-2 rounded-xl text-xs">
            <span className="font-semibold text-teal-200">
              Step {currentStep} of 7: {stepsLabels[currentStep - 1]?.label}
            </span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i === currentStep ? 'bg-white' : i < currentStep ? 'bg-teal-400' : 'bg-slate-700'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Wizard Content Body */}
      <div className="p-6 sm:p-8 flex-1 overflow-y-auto">
        {/* ================= STEP 1: DEPARTMENT SELECTION ================= */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">1. Select Medical Department</h3>
                <p className="text-xs text-slate-500">Choose the clinical area appropriate for your symptoms or care needs.</p>
              </div>
              <input
                type="text"
                id="search-dept-booking-input"
                placeholder="Search departments..."
                value={deptSearch}
                onChange={(e) => setDeptSearch(e.target.value)}
                className="px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-none w-full sm:w-64"
              />
            </div>

            {errors.dept && (
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>{errors.dept}</span>
              </div>
            )}

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {departmentsData
                .filter(d => d.name.toLowerCase().includes(deptSearch.toLowerCase()) || d.shortDesc.toLowerCase().includes(deptSearch.toLowerCase()))
                .map((dept) => {
                  const isSelected = selectedDeptId === dept.id;
                  const docCount = doctorsData.filter(doc => doc.departmentId === dept.id).length;
                  return (
                    <button
                      key={dept.id}
                      id={`select-dept-card-${dept.slug}`}
                      onClick={() => {
                        setSelectedDeptId(dept.id);
                        // reset doctor if department changes
                        if (selectedDoctorId && currentDoctor?.departmentId !== dept.id) {
                          setSelectedDoctorId('');
                        }
                        setErrors({});
                      }}
                      className={`p-4 rounded-2xl border text-left transition-all relative flex flex-col justify-between group ${
                        isSelected
                          ? 'border-teal-600 bg-teal-50/60 ring-2 ring-teal-600/30 shadow-md'
                          : 'border-slate-200 hover:border-teal-400 bg-white hover:bg-slate-50'
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                            isSelected ? 'bg-teal-600 text-white' : 'bg-slate-100 text-slate-700 group-hover:bg-teal-100 group-hover:text-teal-700'
                          } transition-colors`}>
                            <Building2 className="w-4 h-4" />
                          </div>
                          <span className="text-[11px] font-semibold text-slate-500">
                            {docCount} {docCount === 1 ? 'Specialist' : 'Specialists'}
                          </span>
                        </div>
                        <h4 className="font-bold text-slate-900 text-sm">{dept.name}</h4>
                        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{dept.shortDesc}</p>
                      </div>

                      <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                        <span className="text-teal-700 font-medium">{dept.operatingHours.split('|')[0]}</span>
                        {isSelected && (
                          <span className="flex items-center gap-1 font-bold text-teal-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                            Selected
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
            </div>
          </div>
        )}

        {/* ================= STEP 2: DOCTOR SELECTION ================= */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-lg font-bold text-slate-900">2. Choose Your Specialist Physician</h3>
                <p className="text-xs text-slate-500">
                  Showing available practitioners for <strong className="text-teal-700">{currentDepartment?.name}</strong>.
                </p>
              </div>
              <button
                onClick={() => setCurrentStep(1)}
                className="text-xs text-teal-600 hover:text-teal-800 font-semibold underline self-start sm:self-auto"
              >
                Change Department
              </button>
            </div>

            {errors.doctor && (
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>{errors.doctor}</span>
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-4">
              {availableDoctors.map((doc) => {
                const isSelected = selectedDoctorId === doc.id;
                return (
                  <button
                    key={doc.id}
                    id={`select-doc-card-${doc.id}`}
                    onClick={() => {
                      setSelectedDoctorId(doc.id);
                      setErrors({});
                    }}
                    className={`p-4 rounded-2xl border text-left transition-all relative flex items-start gap-4 ${
                      isSelected
                        ? 'border-teal-600 bg-teal-50/70 ring-2 ring-teal-600/30 shadow-md'
                        : 'border-slate-200 hover:border-teal-300 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <div className="relative shrink-0">
                      <img
                        src={doc.avatar}
                        alt={doc.name}
                        referrerPolicy="no-referrer"
                        className="w-16 h-16 rounded-xl object-cover border border-slate-200 shadow-sm"
                      />
                      {doc.isAvailableToday && (
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white" title="Available Today" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-bold text-slate-900 text-sm truncate">{doc.name}</h4>
                        <span className="text-[11px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full shrink-0">
                          ★ {doc.rating.toFixed(1)}
                        </span>
                      </div>
                      <p className="text-xs text-teal-700 font-medium truncate">{doc.specialty}</p>
                      <p className="text-[11px] text-slate-500">{doc.qualification}</p>
                      
                      <div className="flex items-center gap-3 pt-1 text-[11px] text-slate-600">
                        <span>{doc.experienceYears}+ Yrs Exp</span>
                        <span>•</span>
                        <span>Fee: ${doc.consultationFee}</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ================= STEP 3: DATE SELECTION ================= */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900">3. Select Preferred Date</h3>
                <p className="text-xs text-slate-500">
                  Consulting with <strong className="text-teal-700">{currentDoctor?.name}</strong>. Dates highlighted in green are available.
                </p>
              </div>
            </div>

            {errors.date && (
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>{errors.date}</span>
              </div>
            )}

            {/* Interactive Calendar Days Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
              {calendarDays.map((day) => {
                const isSelected = selectedDate === day.dateStr;
                const isAvailable = day.isAvailable;

                return (
                  <button
                    key={day.dateStr}
                    id={`calendar-day-btn-${day.dateStr}`}
                    disabled={!isAvailable}
                    onClick={() => {
                      if (isAvailable) {
                        setSelectedDate(day.dateStr);
                        setErrors({});
                      }
                    }}
                    className={`p-3.5 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-1 ${
                      !isAvailable
                        ? 'bg-slate-100/60 border-slate-200 text-slate-400 cursor-not-allowed opacity-60'
                        : isSelected
                        ? 'bg-teal-600 border-teal-700 text-white shadow-lg scale-105 ring-2 ring-teal-400/40'
                        : 'bg-white border-slate-200 hover:border-teal-400 hover:bg-teal-50/50 text-slate-800'
                    }`}
                  >
                    <span className={`text-[10px] uppercase font-bold tracking-wider ${isSelected ? 'text-teal-100' : 'text-slate-500'}`}>
                      {day.dayName}
                    </span>
                    <span className="text-xl font-extrabold">{day.dayNumber}</span>
                    <span className={`text-[10px] ${isSelected ? 'text-teal-100' : 'text-slate-400'}`}>
                      {day.monthName}
                    </span>
                    <span className={`text-[9px] mt-1 px-1.5 py-0.5 rounded-full font-semibold ${
                      !isAvailable
                        ? 'bg-slate-200 text-slate-500'
                        : isSelected
                        ? 'bg-white/20 text-white'
                        : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      {isAvailable ? 'Available' : 'Closed'}
                    </span>
                  </button>
                );
              })}
            </div>

            {selectedDate && (
              <div className="p-3 bg-teal-50 border border-teal-200 rounded-xl text-xs text-teal-900 flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-teal-700 shrink-0" />
                <span>
                  Selected Date: <strong className="font-bold">{calendarDays.find(d => d.dateStr === selectedDate)?.fullDateFormatted}</strong>
                </span>
              </div>
            )}
          </div>
        )}

        {/* ================= STEP 4: TIME SLOT SELECTION ================= */}
        {currentStep === 4 && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900">4. Select Time Slot & Visit Format</h3>
                <p className="text-xs text-slate-500">
                  Select a convenient consultation window for {selectedDate}.
                </p>
              </div>
            </div>

            {/* Visit Format Toggle */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                Consultation Type
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  id="visit-type-in-person-btn"
                  onClick={() => setVisitType('In-Person Consultation')}
                  className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all ${
                    visitType === 'In-Person Consultation'
                      ? 'bg-white border-teal-600 ring-2 ring-teal-500/30 text-slate-900 shadow-sm'
                      : 'bg-slate-100/70 border-slate-200 text-slate-600 hover:bg-white'
                  }`}
                >
                  <MapPin className={`w-5 h-5 ${visitType === 'In-Person Consultation' ? 'text-teal-600' : 'text-slate-400'}`} />
                  <div>
                    <h5 className="font-bold text-xs">In-Person Consultation</h5>
                    <p className="text-[11px] text-slate-500">Main Medical Arts Pavilion, Suite 410</p>
                  </div>
                </button>

                <button
                  type="button"
                  id="visit-type-telehealth-btn"
                  onClick={() => setVisitType('Telehealth Video Call')}
                  className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all ${
                    visitType === 'Telehealth Video Call'
                      ? 'bg-white border-teal-600 ring-2 ring-teal-500/30 text-slate-900 shadow-sm'
                      : 'bg-slate-100/70 border-slate-200 text-slate-600 hover:bg-white'
                  }`}
                >
                  <Video className={`w-5 h-5 ${visitType === 'Telehealth Video Call' ? 'text-teal-600' : 'text-slate-400'}`} />
                  <div>
                    <h5 className="font-bold text-xs">Virtual Telehealth Video</h5>
                    <p className="text-[11px] text-slate-500">Encrypted HIPAA browser link sent to email</p>
                  </div>
                </button>
              </div>
            </div>

            {errors.time && (
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>{errors.time}</span>
              </div>
            )}

            {/* Time Slot Buttons */}
            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Available Slots</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {timeSlots.map((slot) => {
                  const isSelected = selectedTimeSlot === slot;
                  return (
                    <button
                      key={slot}
                      id={`time-slot-btn-${slot.replace(/[^0-9a-zA-Z]/g, '')}`}
                      onClick={() => {
                        setSelectedTimeSlot(slot);
                        setErrors({});
                      }}
                      className={`p-3 rounded-xl border text-center font-bold text-xs transition-all flex items-center justify-center gap-2 ${
                        isSelected
                          ? 'bg-teal-600 border-teal-700 text-white shadow-md scale-105'
                          : 'bg-white border-slate-200 hover:border-teal-400 hover:bg-teal-50/50 text-slate-700'
                      }`}
                    >
                      <Clock className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-teal-600'}`} />
                      <span>{slot}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ================= STEP 5: PATIENT DETAILS ================= */}
        {currentStep === 5 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h3 className="text-lg font-bold text-slate-900">5. Patient Information & Medical History</h3>
              <p className="text-xs text-slate-500">Please provide accurate contact details for clinical intake and reminders.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700" htmlFor="patient-name-input">
                  Full Legal Name *
                </label>
                <input
                  type="text"
                  id="patient-name-input"
                  placeholder="e.g. Jordan Miller"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className={`w-full px-3.5 py-2 text-xs border rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-none ${
                    errors.patientName ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
                  }`}
                />
                {errors.patientName && <p className="text-[11px] text-rose-600">{errors.patientName}</p>}
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700" htmlFor="patient-email-input">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="patient-email-input"
                  placeholder="e.g. jordan.miller@example.com"
                  value={patientEmail}
                  onChange={(e) => setPatientEmail(e.target.value)}
                  className={`w-full px-3.5 py-2 text-xs border rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-none ${
                    errors.patientEmail ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
                  }`}
                />
                {errors.patientEmail && <p className="text-[11px] text-rose-600">{errors.patientEmail}</p>}
              </div>

              {/* Phone */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700" htmlFor="patient-phone-input">
                  Phone Number (for SMS confirmation) *
                </label>
                <input
                  type="tel"
                  id="patient-phone-input"
                  placeholder="e.g. (617) 555-0144"
                  value={patientPhone}
                  onChange={(e) => setPatientPhone(e.target.value)}
                  className={`w-full px-3.5 py-2 text-xs border rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-none ${
                    errors.patientPhone ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
                  }`}
                />
                {errors.patientPhone && <p className="text-[11px] text-rose-600">{errors.patientPhone}</p>}
              </div>

              {/* Date of Birth & Gender */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700" htmlFor="patient-dob-input">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    id="patient-dob-input"
                    value={patientDob}
                    onChange={(e) => setPatientDob(e.target.value)}
                    className={`w-full px-3.5 py-2 text-xs border rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-none ${
                      errors.patientDob ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
                    }`}
                  />
                  {errors.patientDob && <p className="text-[11px] text-rose-600">{errors.patientDob}</p>}
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700" htmlFor="patient-gender-select">
                    Gender Identity
                  </label>
                  <select
                    id="patient-gender-select"
                    value={patientGender}
                    onChange={(e) => setPatientGender(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-none bg-white"
                  >
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Non-Binary">Non-Binary</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Reason for Visit */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700" htmlFor="patient-reason-input">
                Chief Symptoms or Reason for Visit *
              </label>
              <textarea
                id="patient-reason-input"
                rows={2}
                placeholder="e.g., Follow up for joint stiffness and morning discomfort..."
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className={`w-full px-3.5 py-2 text-xs border rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-none ${
                  errors.reason ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
                }`}
              />
              {errors.reason && <p className="text-[11px] text-rose-600">{errors.reason}</p>}
            </div>

            {/* Extra Notes */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700" htmlFor="patient-notes-input">
                Additional Notes or Accessibility Accommodations (Optional)
              </label>
              <input
                type="text"
                id="patient-notes-input"
                placeholder="e.g. Wheelchair assistance needed upon arrival..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>
          </div>
        )}

        {/* ================= STEP 6: REVIEW SUMMARY ================= */}
        {currentStep === 6 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h3 className="text-lg font-bold text-slate-900">6. Review & Confirm Appointment</h3>
              <p className="text-xs text-slate-500">Please verify all clinical details prior to generating your confirmation code.</p>
            </div>

            {errors.terms && (
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>{errors.terms}</span>
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-4">
              {/* Doctor & Dept Card */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Clinical Specialist</h5>
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="text-[11px] font-semibold text-teal-700 hover:underline"
                  >
                    Edit
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src={currentDoctor?.avatar}
                    alt={currentDoctor?.name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-xl object-cover border border-slate-300"
                  />
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">{currentDoctor?.name}</h4>
                    <p className="text-xs text-teal-700 font-medium">{currentDoctor?.specialty}</p>
                    <p className="text-[11px] text-slate-500">{currentDepartment?.name}</p>
                  </div>
                </div>
              </div>

              {/* Schedule Card */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Date & Time</h5>
                  <button
                    onClick={() => setCurrentStep(3)}
                    className="text-[11px] font-semibold text-teal-700 hover:underline"
                  >
                    Edit
                  </button>
                </div>
                <div className="space-y-1 text-xs text-slate-700">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <CalendarIcon className="w-4 h-4 text-teal-600" />
                    <span>{selectedDate}</span>
                    <span>•</span>
                    <span>{selectedTimeSlot}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    {visitType === 'Telehealth Video Call' ? <Video className="w-4 h-4 text-teal-600" /> : <MapPin className="w-4 h-4 text-teal-600" />}
                    <span>{visitType}</span>
                  </div>
                </div>
              </div>

              {/* Patient Details Card */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 sm:col-span-2">
                <div className="flex items-center justify-between">
                  <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Patient Summary</h5>
                  <button
                    onClick={() => setCurrentStep(5)}
                    className="text-[11px] font-semibold text-teal-700 hover:underline"
                  >
                    Edit
                  </button>
                </div>
                <div className="grid sm:grid-cols-3 gap-3 text-xs text-slate-700">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Name & DOB</span>
                    <span className="font-bold text-slate-900">{patientName}</span>
                    <span className="text-slate-500 block text-[11px]">DOB: {patientDob} ({patientGender})</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Contact Details</span>
                    <span className="font-semibold text-slate-900 block">{patientEmail}</span>
                    <span className="text-slate-600 block">{patientPhone}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Reason for Consultation</span>
                    <span className="font-medium text-slate-900 block truncate">{reason}</span>
                    {notes && <span className="text-[11px] text-slate-500 block truncate">Note: {notes}</span>}
                  </div>
                </div>
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="p-4 bg-teal-50/60 rounded-xl border border-teal-100 flex items-start gap-3">
              <input
                type="checkbox"
                id="accept-appointment-terms-check"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
              />
              <label htmlFor="accept-appointment-terms-check" className="text-xs text-slate-700 leading-relaxed cursor-pointer">
                I verify that the above information is accurate and agree to receive appointment reminders via email & SMS under standard Medicio clinical privacy guidelines.
              </label>
            </div>
          </div>
        )}

        {/* ================= STEP 7: CONFIRMATION SUCCESS ================= */}
        {currentStep === 7 && confirmedAppt && (
          <div className="text-center py-6 space-y-6 animate-fade-in">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <span className="bg-emerald-100 text-emerald-800 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                Appointment Confirmed
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 pt-2">
                You’re All Set, {confirmedAppt.patientName}!
              </h3>
              <p className="text-xs text-slate-500">
                Your consultation has been registered in the Medicio clinical scheduling system.
              </p>
            </div>

            {/* Highlighted Pass Box */}
            <div className="max-w-md mx-auto bg-gradient-to-br from-slate-900 to-teal-950 text-white p-6 rounded-2xl shadow-xl text-left space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <span className="text-[10px] text-teal-300 uppercase tracking-widest block font-bold">
                    Appointment ID
                  </span>
                  <span className="text-lg font-mono font-bold text-white">
                    {confirmedAppt.appointmentCode}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-teal-300 uppercase tracking-widest block font-bold">
                    Status
                  </span>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                    Confirmed
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-slate-400 text-[10px] block">Specialist</span>
                  <span className="font-bold text-white block">{confirmedAppt.doctorName}</span>
                  <span className="text-teal-300 text-[11px] block">{confirmedAppt.departmentName}</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] block">Date & Time</span>
                  <span className="font-bold text-white block">{confirmedAppt.date}</span>
                  <span className="text-teal-300 text-[11px] block">{confirmedAppt.timeSlot}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 text-[11px] text-slate-300 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>{confirmedAppt.visitType} • 450 Medical Arts Pavilion</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                id="download-appointment-summary-btn"
                onClick={handleDownloadSummary}
                className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl shadow-sm transition flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Appointment Pass
              </button>

              {onOpenMyAppointments && (
                <button
                  id="view-my-appointments-btn"
                  onClick={onOpenMyAppointments}
                  className="px-4 py-2.5 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold rounded-xl shadow-sm transition flex items-center gap-2"
                >
                  <User className="w-4 h-4" />
                  View in My Appointments
                </button>
              )}

              <button
                id="book-another-appointment-btn"
                onClick={handleResetWizard}
                className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Book Another Appointment
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Wizard Footer Navigation Controls (Steps 1-6) */}
      {currentStep < 7 && (
        <div className="bg-slate-50 border-t border-slate-200 p-4 sm:p-6 flex items-center justify-between gap-4">
          <button
            type="button"
            id="wizard-back-btn"
            disabled={currentStep === 1}
            onClick={handleBack}
            className={`px-4 py-2.5 text-xs font-bold rounded-xl transition flex items-center gap-1.5 ${
              currentStep === 1
                ? 'opacity-40 cursor-not-allowed text-slate-400'
                : 'text-slate-700 hover:bg-slate-200 bg-slate-100'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </button>

          <button
            type="button"
            id="wizard-continue-btn"
            onClick={handleNext}
            className="px-6 py-2.5 bg-teal-600 hover:bg-teal-700 text-white text-xs font-extrabold rounded-xl shadow-md hover:shadow-lg transition flex items-center gap-2 group"
          >
            <span>{currentStep === 6 ? 'Confirm & Book Appointment' : 'Continue'}</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      )}
    </div>
  );
};
