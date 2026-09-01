import React, { useState, useEffect } from 'react';
import {
  Building2,
  User,
  Calendar as CalendarIcon,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Download,
  FileText,
  Stethoscope
} from 'lucide-react';
import { Department, Doctor, Appointment } from '../../types';
import { ApiService } from '../../services/api';
import { Button } from '../common/Button';
import { Input, Select, Textarea } from '../common/Input';
import { Badge } from '../common/Badge';
import { useToast } from '../../context/ToastContext';
import { ImageWithFallback } from '../common/ImageWithFallback';
import confetti from 'canvas-confetti';

interface AppointmentBookingFlowProps {
  initialDepartmentId?: string;
  initialDoctorId?: string;
  onBookingComplete?: (appointment: Appointment) => void;
  onClose?: () => void;
}

export const AppointmentBookingFlow: React.FC<AppointmentBookingFlowProps> = ({
  initialDepartmentId,
  initialDoctorId,
  onBookingComplete,
  onClose
}) => {
  const { success, error: toastError } = useToast();

  // Step state (1: Dept, 2: Doctor, 3: Date & Slot, 4: Patient Info, 5: Confirmation)
  const [step, setStep] = useState<number>(1);

  // Data states
  const [departments, setDepartments] = useState<Department[]>([]);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Selection states
  const [selectedDeptId, setSelectedDeptId] = useState<string>(initialDepartmentId || '');
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>(initialDoctorId || '');
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date(Date.now() + 86400000).toISOString().split('T')[0]
  ); // default tomorrow
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('');
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [loadingSlots, setLoadingSlots] = useState<boolean>(false);

  // Patient details form state
  const [formData, setFormData] = useState({
    patientName: '',
    patientEmail: '',
    patientPhone: '',
    dob: '1995-06-15',
    gender: 'Female' as 'Male' | 'Female' | 'Other',
    reason: ''
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [confirmedAppointment, setConfirmedAppointment] = useState<Appointment | null>(null);

  // Fetch initial departments and doctors
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [deptList, docList] = await Promise.all([
          ApiService.getDepartments(),
          ApiService.getDoctors()
        ]);
        setDepartments(deptList);
        setDoctors(docList);

        // Pre-selection handling
        if (initialDoctorId) {
          const doc = docList.find(d => d.doctor_id === initialDoctorId);
          if (doc) {
            setSelectedDeptId(doc.department_id);
            setStep(3); // Jump straight to slot selection if doctor pre-selected
          }
        } else if (initialDepartmentId) {
          setStep(2);
        }
      } catch (err) {
        console.error('Failed to load booking data:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [initialDepartmentId, initialDoctorId]);

  // Update available slots when doctor or date changes
  useEffect(() => {
    if (!selectedDoctorId || !selectedDate) return;

    const fetchSlots = async () => {
      setLoadingSlots(true);
      setSelectedTimeSlot('');
      try {
        const slots = await ApiService.getAvailableSlots(selectedDoctorId, selectedDate);
        setAvailableSlots(slots);
      } catch (err) {
        console.error('Failed to fetch time slots:', err);
        setAvailableSlots([]);
      } finally {
        setLoadingSlots(false);
      }
    };

    fetchSlots();
  }, [selectedDoctorId, selectedDate]);

  // Derived active selections
  const currentDept = departments.find(d => d.department_id === selectedDeptId);
  const currentDoctor = doctors.find(d => d.doctor_id === selectedDoctorId);
  const filteredDoctors = doctors.filter(
    d => !selectedDeptId || d.department_id === selectedDeptId
  );

  // Step transitions
  const handleNextStep = () => {
    if (step === 1 && !selectedDeptId) {
      toastError('Selection Required', 'Please select a clinical department to continue.');
      return;
    }
    if (step === 2 && !selectedDoctorId) {
      toastError('Selection Required', 'Please choose a specialist doctor to continue.');
      return;
    }
    if (step === 3 && (!selectedDate || !selectedTimeSlot)) {
      toastError('Selection Required', 'Please pick both a date and an available time slot.');
      return;
    }
    setStep(prev => prev + 1);
  };

  // Submit appointment creation
  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDoctorId || !selectedDeptId || !selectedDate || !selectedTimeSlot) {
      toastError('Missing Fields', 'Please ensure all booking criteria are selected.');
      return;
    }

    setIsSubmitting(true);
    try {
      const newApt = await ApiService.bookAppointment({
        patient_name: formData.patientName,
        patient_email: formData.patientEmail,
        patient_phone: formData.patientPhone,
        doctor_id: selectedDoctorId,
        department_id: selectedDeptId,
        date: selectedDate,
        time: selectedTimeSlot,
        reason: formData.reason,
        dob: formData.dob,
        gender: formData.gender
      });

      setConfirmedAppointment(newApt);
      setStep(5);

      // Trigger celebratory confetti effect
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Fallback silently if confetti script fails
      }

      success('Booking Success!', `Appointment #${newApt.appointment_id.toUpperCase()} confirmed.`);
      if (onBookingComplete) onBookingComplete(newApt);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Booking failed';
      toastError('Booking Error', msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Min date helper (cannot book in past)
  const todayDateStr = new Date().toISOString().split('T')[0];

  const stepsList = [
    { num: 1, label: 'Department' },
    { num: 2, label: 'Specialist' },
    { num: 3, label: 'Date & Slot' },
    { num: 4, label: 'Patient Info' },
    { num: 5, label: 'Confirmation' }
  ];

  const handleDownloadPass = () => {
    if (!confirmedAppointment) return;

    const aptId = confirmedAppointment.appointment_id.toUpperCase();
    const filename = `QureNexa_Appointment_Pass_${aptId}.html`;
    const passHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Qure Nexa Appointment Pass - #${aptId}</title>
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; background: #f8fafc; margin: 0; padding: 40px; color: #0f172a; }
    .pass-card { max-width: 550px; margin: 0 auto; background: #ffffff; border-radius: 24px; border: 2px solid #0d9488; padding: 36px; box-shadow: 0 20px 40px rgba(13, 148, 136, 0.15); position: relative; }
    .header { text-align: center; border-bottom: 2px dashed #e2e8f0; padding-bottom: 24px; margin-bottom: 24px; }
    .hospital-title { font-size: 26px; font-weight: 900; color: #0f172a; letter-spacing: -0.5px; }
    .hospital-title span { color: #0d9488; }
    .pass-type { display: inline-block; background: #ccfbf1; color: #0f766e; font-weight: 700; font-size: 11px; padding: 6px 16px; border-radius: 50px; text-transform: uppercase; margin-top: 10px; border: 1px solid #99f6e4; }
    .code-box { background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 16px; padding: 12px; margin-top: 16px; text-align: center; }
    .code-label { font-size: 10px; text-transform: uppercase; color: #166534; font-weight: 700; }
    .code-val { font-family: monospace; font-size: 24px; font-weight: 900; color: #0d9488; letter-spacing: 1px; margin-top: 2px; }
    .grid { display: grid; grid-template-cols: 1fr 1fr; gap: 16px; margin: 24px 0; }
    .field { background: #f8fafc; padding: 14px; border-radius: 14px; border: 1px solid #e2e8f0; }
    .field-label { font-size: 10px; color: #64748b; font-weight: 700; text-transform: uppercase; }
    .field-val { font-size: 14px; font-weight: 700; color: #0f172a; margin-top: 4px; }
    .reason-box { background: #fafafa; border: 1px solid #e2e8f0; padding: 16px; border-radius: 14px; margin-bottom: 24px; }
    .footer { text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 20px; line-height: 1.6; }
  </style>
</head>
<body>
  <div class="pass-card">
    <div class="header">
      <div class="hospital-title">Qure<span>Nexa</span> Medical Center</div>
      <div class="pass-type">Official Consultation Digital Pass</div>
      <div class="code-box">
        <div class="code-label">Appointment Confirmation Code</div>
        <div class="code-val">#${aptId}</div>
      </div>
    </div>
    
    <div class="grid">
      <div class="field">
        <div class="field-label">Patient Name</div>
        <div class="field-val">${confirmedAppointment.patient_name}</div>
      </div>
      <div class="field">
        <div class="field-label">Consulting Doctor</div>
        <div class="field-val">${confirmedAppointment.doctor_name}</div>
      </div>
      <div class="field">
        <div class="field-label">Date & Time</div>
        <div class="field-val">${confirmedAppointment.date} @ ${confirmedAppointment.time}</div>
      </div>
      <div class="field">
        <div class="field-label">Clinical Department</div>
        <div class="field-val">${confirmedAppointment.department_name}</div>
      </div>
    </div>

    <div class="reason-box">
      <div class="field-label">Primary Reason for Visit</div>
      <div style="font-weight: 600; color: #334155; margin-top: 4px;">${confirmedAppointment.reason}</div>
    </div>

    <div class="footer">
      Please present this pass code upon arrival at Qure Nexa Hospital OPD Reception Desk.<br>
      Emergency Helpline: +1 (800) 555-0199 | Website: qurenexa-healthcare.org
    </div>
  </div>
</body>
</html>`;

    const blob = new Blob([passHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `QureNexa_Appointment_Pass_${aptId}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    success('Pass Downloaded!', `Saved QureNexa_Appointment_Pass_${aptId}.html to your device.`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-2 sm:px-4">
      {/* Responsive Stepper Progress Bar */}
      <div className="mb-6 sm:mb-8">
        {/* Mobile Step Badge Counter */}
        <div className="flex sm:hidden items-center justify-between mb-3 text-xs font-bold text-slate-700 bg-slate-100/80 px-3 py-1.5 rounded-xl border border-slate-200">
          <span>Step {step} of 5</span>
          <span className="text-teal-700 font-extrabold">{stepsList[step - 1]?.label}</span>
        </div>

        <div className="flex items-center justify-between relative px-1 sm:px-4">
          <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 h-1 bg-slate-100 -z-0" />
          <div
            className="absolute left-4 top-1/2 -translate-y-1/2 h-1 bg-teal-600 transition-all duration-300 -z-0"
            style={{ width: `calc(${((step - 1) / (stepsList.length - 1)) * 100}% - 2rem)` }}
          />

          {stepsList.map(s => {
            const isCompleted = step > s.num;
            const isCurrent = step === s.num;
            return (
              <div key={s.num} className="flex flex-col items-center relative z-10">
                <div
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition-all shadow-xs ${
                    isCompleted
                      ? 'bg-teal-600 text-white'
                      : isCurrent
                      ? 'bg-white text-teal-700 border-2 border-teal-600 ring-4 ring-teal-100'
                      : 'bg-white text-slate-400 border border-slate-200'
                  }`}
                >
                  {isCompleted ? <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" /> : s.num}
                </div>
                <span
                  className={`text-[10px] sm:text-xs font-semibold mt-1.5 hidden sm:block ${
                    isCurrent ? 'text-teal-900 font-bold' : isCompleted ? 'text-slate-700' : 'text-slate-400'
                  }`}
                >
                  {s.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Step Cards */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm p-4 sm:p-8">
        {/* ================= STEP 1: CHOOSE DEPARTMENT ================= */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">Step 1: Select Clinical Department</h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Choose the hospital division that best matches your symptoms or care requirements.
              </p>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="h-28 bg-slate-100 rounded-xl animate-pulse" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {departments.map(dept => {
                  const isSelected = selectedDeptId === dept.department_id;
                  return (
                    <div
                      key={dept.department_id}
                      id={`dept-card-${dept.department_id}`}
                      onClick={() => setSelectedDeptId(dept.department_id)}
                      className={`p-4 sm:p-5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'border-teal-600 bg-teal-50/50 shadow-xs'
                          : 'border-slate-200 hover:border-teal-300 hover:bg-slate-50/50'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                              isSelected ? 'bg-teal-600 text-white' : 'bg-teal-100 text-teal-700'
                            }`}
                          >
                            <Building2 className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-slate-900 leading-snug">{dept.name}</h4>
                            <span className="text-[11px] text-slate-500">{dept.contact_extension}</span>
                          </div>
                        </div>
                        {isSelected && <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />}
                      </div>
                      <p className="text-xs text-slate-600 mt-3 line-clamp-2 leading-relaxed">
                        {dept.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}

            <div className="flex items-center justify-end pt-4 border-t border-slate-100">
              <Button
                variant="primary"
                size="md"
                className="w-full sm:w-auto"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                onClick={handleNextStep}
                disabled={!selectedDeptId}
              >
                Continue to Select Doctor
              </Button>
            </div>
          </div>
        )}

        {/* ================= STEP 2: CHOOSE DOCTOR ================= */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">Step 2: Choose Specialist Doctor</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Doctors in <strong className="text-teal-700">{currentDept?.name || 'Selected Department'}</strong>
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="self-start sm:self-auto text-xs"
                leftIcon={<ArrowLeft className="w-3.5 h-3.5" />}
                onClick={() => setStep(1)}
              >
                Change Department
              </Button>
            </div>

            {filteredDoctors.length === 0 ? (
              <div className="text-center py-10 bg-slate-50 rounded-2xl border border-slate-200 p-4">
                <AlertCircle className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                <p className="text-sm font-semibold text-slate-800">No doctors currently listed in this department.</p>
                <p className="text-xs text-slate-500 mt-1">Please select another department or call our helpline.</p>
                <Button variant="outline" size="sm" className="mt-4" onClick={() => setStep(1)}>
                  Back to Departments
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {filteredDoctors.map(doctor => {
                  const isSelected = selectedDoctorId === doctor.doctor_id;
                  return (
                    <div
                      key={doctor.doctor_id}
                      id={`doc-card-${doctor.doctor_id}`}
                      onClick={() => setSelectedDoctorId(doctor.doctor_id)}
                      className={`p-3.5 sm:p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-row items-center gap-3.5 sm:gap-4 ${
                        isSelected
                          ? 'border-teal-600 bg-teal-50/50 shadow-xs'
                          : 'border-slate-200 hover:border-teal-300 hover:bg-slate-50/50'
                      }`}
                    >
                      <ImageWithFallback
                        src={doctor.photo_url}
                        alt={doctor.name}
                        fallbackType="doctor"
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover ring-1 ring-slate-200 shrink-0"
                      />
                      <div className="flex-1 min-w-0 flex flex-col justify-between h-full">
                        <div>
                          <div className="flex items-start justify-between gap-1">
                            <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug truncate">{doctor.name}</h4>
                            {isSelected && <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 shrink-0" />}
                          </div>
                          <p className="text-[11px] sm:text-xs text-teal-700 font-semibold mt-0.5 truncate">{doctor.specialization}</p>
                          <p className="text-[10px] sm:text-[11px] text-slate-500 truncate mt-0.5">{doctor.qualification}</p>
                        </div>
                        <div className="flex flex-wrap items-center justify-between gap-1 mt-2 pt-2 border-t border-slate-100 text-[11px] sm:text-xs">
                          <span className="font-bold text-slate-900">₹{doctor.consultation_fee} fee</span>
                          <Badge variant={doctor.available_today ? 'emerald' : 'slate'} size="sm" dot>
                            {doctor.available_today ? 'Available Today' : 'Scheduled Slots'}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-slate-100">
              <Button
                variant="outline"
                size="md"
                className="w-full sm:w-auto"
                leftIcon={<ArrowLeft className="w-4 h-4" />}
                onClick={() => setStep(1)}
              >
                Back
              </Button>
              <Button
                variant="primary"
                size="md"
                className="w-full sm:w-auto"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                onClick={handleNextStep}
                disabled={!selectedDoctorId}
              >
                Continue to Pick Time Slot
              </Button>
            </div>
          </div>
        )}

        {/* ================= STEP 3: DATE & TIME SLOTS ================= */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">Step 3: Select Consultation Date & Time</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Consultation with <strong className="text-teal-700">{currentDoctor?.name}</strong> (₹{currentDoctor?.consultation_fee})
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="self-start sm:self-auto text-xs"
                leftIcon={<ArrowLeft className="w-3.5 h-3.5" />}
                onClick={() => setStep(2)}
              >
                Change Doctor
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Date Picker Input */}
              <div className="md:col-span-1 space-y-3">
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Select Preferred Date
                </label>
                <div className="relative">
                  <Input
                    type="date"
                    min={todayDateStr}
                    value={selectedDate}
                    onChange={e => setSelectedDate(e.target.value)}
                    className="cursor-pointer"
                  />
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1.5">
                  <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                    <Clock className="w-3.5 h-3.5 text-teal-600" />
                    Doctor OPD Timing:
                  </div>
                  <p>Mon – Fri: 09:00 AM – 05:00 PM</p>
                  <p className="text-[11px] text-slate-500">
                    *Slots update in real-time based on clinician schedule.
                  </p>
                </div>
              </div>

              {/* Time Slots Grid */}
              <div className="md:col-span-2 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Available Slots for {new Date(selectedDate + 'T00:00:00').toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}
                  </label>
                  {availableSlots.length > 0 && (
                    <Badge variant="teal" size="sm">
                      {availableSlots.length} Slots Open
                    </Badge>
                  )}
                </div>

                {loadingSlots ? (
                  <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 gap-2.5 py-6">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                      <div key={i} className="h-10 bg-slate-100 rounded-xl animate-pulse" />
                    ))}
                  </div>
                ) : availableSlots.length === 0 ? (
                  <div className="p-5 sm:p-6 text-center bg-amber-50/60 rounded-xl border border-amber-200 space-y-3">
                    <AlertCircle className="w-6 h-6 text-amber-600 mx-auto" />
                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        No available consultation slots on this date.
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        Doctor may not be scheduled on weekends or all slots are booked. Try selecting a business day.
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        const dateObj = new Date(selectedDate + 'T00:00:00');
                        do {
                          dateObj.setDate(dateObj.getDate() + 1);
                        } while (dateObj.getDay() === 0 || dateObj.getDay() === 6);
                        setSelectedDate(dateObj.toISOString().split('T')[0]);
                      }}
                      className="mt-2"
                    >
                      Select Next Business Day
                    </Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 gap-2.5 max-h-64 overflow-y-auto pr-1">
                    {availableSlots.map(slot => {
                      const isSelected = selectedTimeSlot === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedTimeSlot(slot)}
                          className={`p-3 rounded-xl text-xs font-bold border transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer ${
                            isSelected
                              ? 'bg-teal-600 text-white border-teal-600 shadow-xs scale-[1.02]'
                              : 'bg-white text-slate-700 border-slate-200 hover:border-teal-400 hover:bg-teal-50/50'
                          }`}
                        >
                          <Clock className="w-3.5 h-3.5 shrink-0 opacity-80" />
                          <span>{slot}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-slate-100">
              <Button
                variant="outline"
                size="md"
                className="w-full sm:w-auto"
                leftIcon={<ArrowLeft className="w-4 h-4" />}
                onClick={() => setStep(2)}
              >
                Back
              </Button>
              <Button
                variant="primary"
                size="md"
                className="w-full sm:w-auto"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                onClick={handleNextStep}
                disabled={!selectedDate || !selectedTimeSlot}
              >
                Continue to Patient Details
              </Button>
            </div>
          </div>
        )}

        {/* ================= STEP 4: PATIENT DETAILS ================= */}
        {step === 4 && (
          <form onSubmit={handleFinalSubmit} className="space-y-6">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">Step 4: Patient Details & Reason for Visit</h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Provide accurate contact information so we can dispatch booking confirmations and clinical reminders.
              </p>
            </div>

            {/* Selected Booking Overview Summary */}
            <div className="p-3.5 sm:p-4 bg-teal-50/60 rounded-2xl border border-teal-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-3">
                <img
                  src={currentDoctor?.photo_url}
                  alt={currentDoctor?.name}
                  className="w-12 h-12 rounded-xl object-cover ring-1 ring-teal-300 shrink-0"
                />
                <div>
                  <p className="font-bold text-slate-900 text-sm">{currentDoctor?.name}</p>
                  <p className="text-teal-800 font-semibold">{currentDoctor?.specialization}</p>
                  <p className="text-slate-600">{currentDept?.name}</p>
                </div>
              </div>
              <div className="text-left sm:text-right border-t sm:border-t-0 pt-2 sm:pt-0 w-full sm:w-auto">
                <p className="font-bold text-slate-900">
                  {selectedDate} at {selectedTimeSlot}
                </p>
                <p className="text-teal-700 font-semibold">Consultation Fee: ₹{currentDoctor?.consultation_fee}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Full Patient Name"
                required
                placeholder="e.g. Sarah Mitchell"
                value={formData.patientName}
                onChange={e => setFormData({ ...formData, patientName: e.target.value })}
              />

              <Input
                label="Email Address"
                type="email"
                required
                placeholder="e.g. patient@example.com"
                value={formData.patientEmail}
                onChange={e => setFormData({ ...formData, patientEmail: e.target.value })}
              />

              <Input
                label="Phone Number"
                type="tel"
                required
                placeholder="e.g. +91 98765 43210"
                value={formData.patientPhone}
                onChange={e => setFormData({ ...formData, patientPhone: e.target.value })}
              />

              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3">
                <Input
                  label="Date of Birth"
                  type="date"
                  required
                  value={formData.dob}
                  onChange={e => setFormData({ ...formData, dob: e.target.value })}
                />
                <Select
                  label="Gender"
                  value={formData.gender}
                  onChange={e => setFormData({ ...formData, gender: e.target.value as 'Male' | 'Female' | 'Other' })}
                  options={[
                    { value: 'Male', label: 'Male' },
                    { value: 'Female', label: 'Female' },
                    { value: 'Other', label: 'Other' }
                  ]}
                />
              </div>
            </div>

            <Textarea
              label="Primary Reason for Visit / Symptoms"
              required
              rows={3}
              placeholder="Please describe symptoms, duration, current medications, or follow-up reason..."
              value={formData.reason}
              onChange={e => setFormData({ ...formData, reason: e.target.value })}
            />

            <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-slate-100">
              <Button
                type="button"
                variant="outline"
                size="md"
                className="w-full sm:w-auto"
                leftIcon={<ArrowLeft className="w-4 h-4" />}
                onClick={() => setStep(3)}
              >
                Back
              </Button>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
                isLoading={isSubmitting}
                leftIcon={<Sparkles className="w-4 h-4" />}
              >
                Confirm & Book Appointment
              </Button>
            </div>
          </form>
        )}

        {/* ================= STEP 5: CONFIRMATION RECEIPT ================= */}
        {step === 5 && confirmedAppointment && (
          <div className="space-y-6 text-center py-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold text-teal-700 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                Booking Confirmed
              </span>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight mt-2">
                Your Appointment is Scheduled!
              </h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto mt-1 px-2">
                A digital confirmation has been registered with Qure Nexa hospital management.
              </p>
            </div>

            {/* Official Appointment Pass Card */}
            <div className="max-w-md mx-auto bg-slate-50 rounded-2xl border border-slate-200 p-4 sm:p-6 text-left space-y-4 shadow-xs relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/10 rounded-full blur-xl -mr-8 -mt-8 pointer-events-none" />

              <div className="flex items-center justify-between border-b border-slate-200 pb-3 gap-2">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400">Appointment Code</span>
                  <p className="text-base font-mono font-bold text-teal-700">
                    #{confirmedAppointment.appointment_id.toUpperCase()}
                  </p>
                </div>
                <Badge variant="amber" size="sm">
                  Status: Pending Doctor Confirmation
                </Badge>
              </div>

              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-slate-400 block">Patient Name:</span>
                  <span className="font-semibold text-slate-900">{confirmedAppointment.patient_name}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Consulting Doctor:</span>
                  <span className="font-semibold text-slate-900">{confirmedAppointment.doctor_name}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Date & Time:</span>
                  <span className="font-semibold text-slate-900">
                    {confirmedAppointment.date} @ {confirmedAppointment.time}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block">Department:</span>
                  <span className="font-semibold text-slate-900">{confirmedAppointment.department_name}</span>
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs">
                <span className="text-slate-400 block font-medium">Reason for Visit:</span>
                <p className="text-slate-700 mt-0.5">{confirmedAppointment.reason}</p>
              </div>
            </div>

            <div className="flex flex-col xs:flex-row flex-wrap items-center justify-center gap-3 pt-2">
              <Button
                variant="primary"
                size="md"
                className="w-full xs:w-auto"
                leftIcon={<Download className="w-4 h-4" />}
                onClick={handleDownloadPass}
              >
                Download Official Slip
              </Button>
              <Button
                variant="outline"
                size="md"
                className="w-full xs:w-auto"
                leftIcon={<FileText className="w-4 h-4" />}
                onClick={() => {
                  window.print();
                }}
              >
                Print / Save PDF
              </Button>
              {onClose && (
                <Button variant="secondary" size="md" onClick={onClose} className="w-full xs:w-auto bg-slate-100 text-slate-800 hover:bg-slate-200">
                  Done & Return to Portal
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
