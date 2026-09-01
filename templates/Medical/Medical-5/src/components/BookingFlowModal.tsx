import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Doctor, Specialty, ConsultationType, Appointment } from '../types';
import { mockApi } from '../services/mockApi';
import specialtiesData from '../data/specialties.json';
import doctorsData from '../data/doctors.json';
import confetti from 'canvas-confetti';
import {
  X,
  Calendar,
  Clock,
  User,
  Video,
  Building,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Download,
  Share2,
  FileText,
  Sparkles,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';

export const BookingFlowModal: React.FC = () => {
  const {
    isBookingOpen,
    closeBooking,
    bookingDoctor,
    bookingSpecialtyId,
    refreshAppointments,
    showToast,
    setActivePage,
    downloadIcsFile,
  } = useApp();

  // Booking Flow Steps: 1..7
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form State
  const [selectedSpecialtyId, setSelectedSpecialtyId] = useState<string>('');
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [consultationType, setConsultationType] = useState<ConsultationType>('in-person');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');

  // Patient Info
  const [patientName, setPatientName] = useState('Alexander Claire');
  const [patientEmail, setPatientEmail] = useState('alexander.claire@example.com');
  const [patientPhone, setPatientPhone] = useState('+1 (555) 234-8901');
  const [visitReason, setVisitReason] = useState('General checkup & consultation');
  const [clinicalNotes, setClinicalNotes] = useState('');

  // Confirmed Result
  const [confirmedAppointment, setConfirmedAppointment] = useState<Appointment | null>(null);

  // Initialize or reset when modal opens
  useEffect(() => {
    if (isBookingOpen) {
      if (bookingDoctor) {
        setSelectedDoctor(bookingDoctor);
        setSelectedSpecialtyId(bookingDoctor.specialtyId);
        setCurrentStep(3); // jump directly to consultation type if doctor provided
      } else if (bookingSpecialtyId) {
        setSelectedSpecialtyId(bookingSpecialtyId);
        setSelectedDoctor(null);
        setCurrentStep(2);
      } else {
        setSelectedSpecialtyId(specialtiesData[0].id);
        setSelectedDoctor(null);
        setCurrentStep(1);
      }

      // Default date: tomorrow
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const isoDate = tomorrow.toISOString().split('T')[0];
      setSelectedDate(isoDate);
      setSelectedTime('10:30 AM');
      setConfirmedAppointment(null);
      setIsSubmitting(false);
    }
  }, [isBookingOpen, bookingDoctor, bookingSpecialtyId]);

  if (!isBookingOpen) return null;

  const availableDoctors = (doctorsData as Doctor[]).filter(
    (d) => !selectedSpecialtyId || d.specialtyId === selectedSpecialtyId
  );

  const specialties = specialtiesData as Specialty[];

  // Available Time Slots for chosen doctor or default
  const timeSlots = [
    { period: 'Morning', slots: ['09:00 AM', '09:45 AM', '10:30 AM', '11:15 AM'] },
    { period: 'Afternoon', slots: ['01:30 PM', '02:15 PM', '03:00 PM', '03:45 PM'] },
    { period: 'Late Afternoon', slots: ['04:30 PM', '05:15 PM'] },
  ];

  const handleNext = () => {
    if (currentStep === 1 && !selectedSpecialtyId) {
      showToast('Please choose a specialty to continue', 'error');
      return;
    }
    if (currentStep === 2 && !selectedDoctor) {
      showToast('Please select a physician to proceed', 'error');
      return;
    }
    if (currentStep === 4 && !selectedDate) {
      showToast('Please choose an appointment date', 'error');
      return;
    }
    if (currentStep === 5 && !selectedTime) {
      showToast('Please choose an available consultation time', 'error');
      return;
    }
    if (currentStep === 6) {
      if (!patientName.trim() || !patientEmail.trim() || !patientPhone.trim()) {
        showToast('Please complete all required patient contact fields', 'error');
        return;
      }
      submitBooking();
      return;
    }

    setCurrentStep((prev) => Math.min(prev + 1, 7));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const submitBooking = async () => {
    if (!selectedDoctor) return;
    setIsSubmitting(true);

    try {
      const created = await mockApi.createAppointment({
        doctorId: selectedDoctor.id,
        doctorName: selectedDoctor.name,
        doctorSpecialty: selectedDoctor.specialtyName,
        doctorImage: selectedDoctor.image,
        doctorLocation: selectedDoctor.location,
        specialtyId: selectedDoctor.specialtyId,
        consultationType,
        date: selectedDate,
        time: selectedTime,
        patientName,
        patientEmail,
        patientPhone,
        reason: visitReason,
        notes: clinicalNotes,
      });

      await refreshAppointments();
      setConfirmedAppointment(created);
      setCurrentStep(7);

      // Trigger Confetti Effect
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#8B6FAE', '#B9A1D0', '#D98B9C', '#E8DDF2', '#739B82'],
        });
      } catch {
        // fallback
      }

      showToast('Appointment successfully scheduled!', 'success');
    } catch {
      showToast('Could not schedule appointment. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentSpecialtyObj = specialties.find((s) => s.id === selectedSpecialtyId);

  return (
    <div
      id="booking-modal-overlay"
      className="fixed inset-0 z-50 bg-[#3E3445]/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={closeBooking}
    >
      <div
        className="w-full max-w-2xl bg-[#FFFDFC] rounded-3xl shadow-[0_30px_70px_rgba(90,70,110,0.22)] border border-[#3E3445]/10 overflow-hidden flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar with Step Progress */}
        <div className="p-6 border-b border-[#3E3445]/8 bg-[#F9F7FB] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8B6FAE] mb-1">
              <span>Appointment Scheduling</span>
              <span>•</span>
              <span>Step {currentStep} of 7</span>
            </div>
            <h3 className="font-serif text-xl font-bold text-[#3E3445]">
              {currentStep === 1 && 'Select Clinical Specialty'}
              {currentStep === 2 && 'Select Physician'}
              {currentStep === 3 && 'Consultation Format'}
              {currentStep === 4 && 'Choose Preferred Date'}
              {currentStep === 5 && 'Select Time Slot'}
              {currentStep === 6 && 'Patient Details & Reason'}
              {currentStep === 7 && 'Appointment Confirmed'}
            </h3>
          </div>

          <button
            id="close-booking-modal-btn"
            onClick={closeBooking}
            className="p-2 text-[#756B7C] hover:text-[#3E3445] hover:bg-[#E8DDF2]/50 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Indicator Bar */}
        <div className="w-full bg-[#E8DDF2]/40 h-1.5 flex">
          {[1, 2, 3, 4, 5, 6, 7].map((s) => (
            <div
              key={s}
              className={`h-full flex-1 transition-all duration-300 ${
                s <= currentStep ? 'bg-[#8B6FAE]' : 'bg-transparent'
              }`}
            />
          ))}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {/* STEP 1: Choose Specialty */}
          {currentStep === 1 && (
            <div className="space-y-3">
              <p className="text-xs text-[#756B7C] mb-2">
                Choose the department best matched to your symptoms or preventive needs:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-96 overflow-y-auto pr-1">
                {specialties.map((spec) => {
                  const isSelected = selectedSpecialtyId === spec.id;
                  return (
                    <button
                      key={spec.id}
                      id={`booking-spec-opt-${spec.id}`}
                      onClick={() => {
                        setSelectedSpecialtyId(spec.id);
                        // Auto clear selected doctor if doctor didn't belong to this specialty
                        if (selectedDoctor && selectedDoctor.specialtyId !== spec.id) {
                          setSelectedDoctor(null);
                        }
                      }}
                      className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#E8DDF2]/60 border-[#8B6FAE] shadow-xs'
                          : 'bg-white hover:bg-[#F9F7FB] border-[#3E3445]/10'
                      }`}
                    >
                      <div>
                        <div className="text-sm font-bold text-[#3E3445]">{spec.name}</div>
                        <div className="text-xs text-[#756B7C]">
                          {spec.doctorCount} Doctors Available
                        </div>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          isSelected ? 'text-[#665080] translate-x-1' : 'text-[#756B7C]'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: Choose Doctor */}
          {currentStep === 2 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-[#756B7C]">
                  Showing specialists in{' '}
                  <strong>{currentSpecialtyObj?.name || 'All Specialties'}</strong>:
                </span>
                <button
                  id="booking-change-specialty-btn"
                  onClick={() => setCurrentStep(1)}
                  className="text-xs text-[#8B6FAE] font-medium hover:underline"
                >
                  Change Specialty
                </button>
              </div>

              <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
                {availableDoctors.length === 0 ? (
                  <div className="text-center py-10 text-xs text-[#756B7C]">
                    No doctors found for this specialty. Please select another.
                  </div>
                ) : (
                  availableDoctors.map((doc) => {
                    const isSelected = selectedDoctor?.id === doc.id;
                    return (
                      <div
                        key={doc.id}
                        id={`booking-doc-opt-${doc.id}`}
                        onClick={() => setSelectedDoctor(doc)}
                        className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-[#E8DDF2]/60 border-[#8B6FAE] shadow-xs'
                            : 'bg-white hover:bg-[#F9F7FB] border-[#3E3445]/10'
                        }`}
                      >
                        <div className="flex items-center gap-3.5">
                          <img
                            src={doc.image}
                            alt={doc.name}
                            className="w-14 h-14 rounded-2xl object-cover border border-[#8B6FAE]/20"
                          />
                          <div>
                            <div className="text-sm font-bold text-[#3E3445]">{doc.name}</div>
                            <div className="text-xs text-[#756B7C]">{doc.title}</div>
                            <div className="text-[11px] text-[#8B6FAE] font-semibold mt-1">
                              ★ {doc.rating} • {doc.experienceYears} yrs exp • ${doc.fee}
                            </div>
                          </div>
                        </div>

                        <div className="text-right">
                          <span
                            className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                              doc.isAvailableToday
                                ? 'bg-[#739B82]/20 text-[#739B82]'
                                : 'bg-[#E8DDF2] text-[#665080]'
                            }`}
                          >
                            {doc.availability}
                          </span>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          )}

          {/* STEP 3: Consultation Format */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-[#F9F7FB] border border-[#3E3445]/6 flex items-center gap-3">
                {selectedDoctor && (
                  <img
                    src={selectedDoctor.image}
                    alt={selectedDoctor.name}
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                )}
                <div>
                  <div className="text-xs text-[#756B7C]">Consulting Physician</div>
                  <div className="text-sm font-bold text-[#3E3445]">
                    {selectedDoctor?.name || 'Selected Doctor'}
                  </div>
                  <div className="text-xs text-[#8B6FAE]">{selectedDoctor?.specialtyName}</div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#3E3445] uppercase tracking-wider mb-3">
                  Choose Consultation Format
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* In-Person Option */}
                  <button
                    id="consult-opt-inperson"
                    onClick={() => setConsultationType('in-person')}
                    className={`p-5 rounded-2xl border text-left transition-all ${
                      consultationType === 'in-person'
                        ? 'bg-[#E8DDF2]/60 border-[#8B6FAE] shadow-md ring-2 ring-[#8B6FAE]/30'
                        : 'bg-white hover:bg-[#F9F7FB] border-[#3E3445]/10'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#E8DDF2] text-[#665080] flex items-center justify-center mb-3">
                      <Building className="w-5 h-5" />
                    </div>
                    <div className="text-sm font-bold text-[#3E3445]">In-Person Consultation</div>
                    <div className="text-xs text-[#756B7C] mt-1 leading-relaxed">
                      Visit the clinic suite in person for physical exam and onsite telemetry.
                    </div>
                    <div className="text-[11px] font-semibold text-[#8B6FAE] mt-3">
                      {selectedDoctor?.location || 'Central Medical Pavilion'}
                    </div>
                  </button>

                  {/* Video Option */}
                  <button
                    id="consult-opt-video"
                    onClick={() => setConsultationType('video')}
                    className={`p-5 rounded-2xl border text-left transition-all ${
                      consultationType === 'video'
                        ? 'bg-[#E8DDF2]/60 border-[#8B6FAE] shadow-md ring-2 ring-[#8B6FAE]/30'
                        : 'bg-white hover:bg-[#F9F7FB] border-[#3E3445]/10'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#F2D9DF] text-[#D98B9C] flex items-center justify-center mb-3">
                      <Video className="w-5 h-5" />
                    </div>
                    <div className="text-sm font-bold text-[#3E3445]">Encrypted Video Clinic</div>
                    <div className="text-xs text-[#756B7C] mt-1 leading-relaxed">
                      Consult securely from your browser. Zero downloads required.
                    </div>
                    <div className="text-[11px] font-semibold text-[#8B6FAE] mt-3">
                      Instant Video Room Link
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Choose Date */}
          {currentStep === 4 && (
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-[#3E3445] uppercase tracking-wider mb-2">
                  Select Consultation Date
                </label>
                <p className="text-xs text-[#756B7C] mb-4">
                  Select a convenient day for your 45-minute appointment:
                </p>

                {/* Quick Date Pills for next 7 days */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
                  {[1, 2, 3, 4, 5, 6, 7].map((offset) => {
                    const dateObj = new Date();
                    dateObj.setDate(dateObj.getDate() + offset);
                    const iso = dateObj.toISOString().split('T')[0];
                    const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'short' });
                    const dayNum = dateObj.getDate();
                    const monthName = dateObj.toLocaleDateString('en-US', { month: 'short' });
                    const isSelected = selectedDate === iso;

                    return (
                      <button
                        key={iso}
                        id={`date-pill-${iso}`}
                        onClick={() => setSelectedDate(iso)}
                        className={`p-3 rounded-2xl border text-center transition-all ${
                          isSelected
                            ? 'bg-[#8B6FAE] text-white border-[#8B6FAE] shadow-sm'
                            : 'bg-white hover:bg-[#F9F7FB] border-[#3E3445]/10 text-[#3E3445]'
                        }`}
                      >
                        <div className="text-[10px] uppercase font-bold opacity-80">{dayName}</div>
                        <div className="text-base font-bold my-0.5">{dayNum}</div>
                        <div className="text-[10px] opacity-90">{monthName}</div>
                      </button>
                    );
                  })}
                </div>

                {/* Or Custom Date Picker */}
                <div className="pt-2">
                  <label className="block text-xs text-[#756B7C] mb-1">
                    Or select another upcoming date:
                  </label>
                  <input
                    id="booking-custom-date"
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-2.5 bg-[#F9F7FB] border border-[#3E3445]/10 rounded-2xl text-xs font-semibold text-[#3E3445] focus:outline-none focus:border-[#8B6FAE]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 5: Choose Time Slot */}
          {currentStep === 5 && (
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-[#3E3445] uppercase tracking-wider mb-1">
                  Available Slots for {selectedDate}
                </label>
                <p className="text-xs text-[#756B7C] mb-4">
                  Select a slot for your 45-minute clinical appointment with {selectedDoctor?.name}:
                </p>

                <div className="space-y-4">
                  {timeSlots.map((group) => (
                    <div key={group.period}>
                      <div className="text-xs font-bold text-[#665080] mb-2">{group.period}</div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {group.slots.map((slot) => {
                          const isSelected = selectedTime === slot;
                          return (
                            <button
                              key={slot}
                              id={`time-slot-${slot.replace(/\s+/g, '-').toLowerCase()}`}
                              onClick={() => setSelectedTime(slot)}
                              className={`py-2.5 px-3 rounded-xl border text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                                isSelected
                                  ? 'bg-[#8B6FAE] text-white border-[#8B6FAE] shadow-xs'
                                  : 'bg-white hover:bg-[#F9F7FB] border-[#3E3445]/10 text-[#3E3445]'
                              }`}
                            >
                              <Clock className="w-3.5 h-3.5" />
                              <span>{slot}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 6: Patient Details & Reason */}
          {currentStep === 6 && (
            <div className="space-y-4">
              <p className="text-xs text-[#756B7C] mb-2">
                Please verify your contact information and describe the main reason for your visit:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#3E3445] mb-1">
                    Patient Full Name *
                  </label>
                  <input
                    id="booking-patient-name"
                    type="text"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#F9F7FB] border border-[#3E3445]/10 rounded-xl text-xs text-[#3E3445] focus:outline-none focus:border-[#8B6FAE]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3E3445] mb-1">
                    Email Address *
                  </label>
                  <input
                    id="booking-patient-email"
                    type="email"
                    value={patientEmail}
                    onChange={(e) => setPatientEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#F9F7FB] border border-[#3E3445]/10 rounded-xl text-xs text-[#3E3445] focus:outline-none focus:border-[#8B6FAE]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#3E3445] mb-1">
                  Mobile Phone (for SMS Reminders) *
                </label>
                <input
                  id="booking-patient-phone"
                  type="tel"
                  value={patientPhone}
                  onChange={(e) => setPatientPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#F9F7FB] border border-[#3E3445]/10 rounded-xl text-xs text-[#3E3445] focus:outline-none focus:border-[#8B6FAE]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#3E3445] mb-1">
                  Reason for Visit / Main Symptom *
                </label>
                <input
                  id="booking-visit-reason"
                  type="text"
                  value={visitReason}
                  onChange={(e) => setVisitReason(e.target.value)}
                  placeholder="e.g. Annual cardiovascular check, recurring headaches, joint stiffness..."
                  className="w-full px-3.5 py-2.5 bg-[#F9F7FB] border border-[#3E3445]/10 rounded-xl text-xs text-[#3E3445] focus:outline-none focus:border-[#8B6FAE]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#3E3445] mb-1">
                  Clinical Notes or Existing Medications (Optional)
                </label>
                <textarea
                  id="booking-patient-notes"
                  rows={2}
                  value={clinicalNotes}
                  onChange={(e) => setClinicalNotes(e.target.value)}
                  placeholder="Note any known allergies, previous surgeries, or recent test dates..."
                  className="w-full px-3.5 py-2.5 bg-[#F9F7FB] border border-[#3E3445]/10 rounded-xl text-xs text-[#3E3445] focus:outline-none focus:border-[#8B6FAE]"
                />
              </div>
            </div>
          )}

          {/* STEP 7: Final Confirmed State */}
          {currentStep === 7 && confirmedAppointment && (
            <div className="text-center space-y-6 py-4">
              <div className="w-16 h-16 rounded-full bg-[#739B82]/20 text-[#739B82] flex items-center justify-center mx-auto shadow-xs animate-in zoom-in-75 duration-300">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#739B82]/15 text-[#739B82] text-xs font-bold uppercase tracking-wider mb-2">
                  <span>APPOINTMENT CONFIRMED</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#3E3445]">
                  We look forward to seeing you.
                </h3>
                <p className="text-xs text-[#756B7C] mt-1">
                  Confirmation #{confirmedAppointment.id} has been recorded to your patient portal.
                </p>
              </div>

              {/* Receipt Summary Card */}
              <div className="lilac-card p-6 text-left space-y-3 bg-white/90 max-w-lg mx-auto">
                <div className="flex items-center justify-between pb-3 border-b border-[#3E3445]/8">
                  <div className="flex items-center gap-3">
                    <img
                      src={confirmedAppointment.doctorImage}
                      alt={confirmedAppointment.doctorName}
                      className="w-12 h-12 rounded-xl object-cover"
                    />
                    <div>
                      <div className="text-sm font-bold text-[#3E3445]">
                        {confirmedAppointment.doctorName}
                      </div>
                      <div className="text-xs text-[#8B6FAE]">
                        {confirmedAppointment.doctorSpecialty}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#665080] bg-[#E8DDF2] px-2.5 py-1 rounded-lg">
                    {confirmedAppointment.id}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-[#756B7C] block">Date & Time</span>
                    <span className="font-semibold text-[#3E3445]">
                      {confirmedAppointment.date} at {confirmedAppointment.time}
                    </span>
                  </div>

                  <div>
                    <span className="text-[#756B7C] block">Format</span>
                    <span className="font-semibold text-[#3E3445] capitalize">
                      {confirmedAppointment.consultationType === 'video'
                        ? 'Video Telehealth'
                        : 'In-Person'}
                    </span>
                  </div>

                  <div>
                    <span className="text-[#756B7C] block">Patient</span>
                    <span className="font-semibold text-[#3E3445]">
                      {confirmedAppointment.patientName}
                    </span>
                  </div>

                  <div>
                    <span className="text-[#756B7C] block">Location</span>
                    <span className="font-semibold text-[#3E3445] truncate block">
                      {confirmedAppointment.consultationType === 'video'
                        ? 'Encrypted Virtual Room'
                        : confirmedAppointment.doctorLocation}
                    </span>
                  </div>
                </div>
              </div>

              {/* Confirmed Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  id="booking-download-ics-btn"
                  onClick={() => downloadIcsFile(confirmedAppointment)}
                  className="px-5 py-2.5 text-xs font-semibold bg-[#E8DDF2] text-[#665080] hover:bg-[#B9A1D0]/40 rounded-full transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>ADD TO CALENDAR (.ICS)</span>
                </button>

                <button
                  id="booking-go-portal-btn"
                  onClick={() => {
                    closeBooking();
                    setActivePage('portal');
                  }}
                  className="px-6 py-2.5 text-xs font-semibold bg-[#8B6FAE] text-white hover:bg-[#665080] rounded-full transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <User className="w-3.5 h-3.5" />
                  <span>VIEW IN PATIENT PORTAL</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Navigation Buttons (Step 1-6) */}
        {currentStep < 7 && (
          <div className="p-5 border-t border-[#3E3445]/8 bg-[#F9F7FB] flex items-center justify-between">
            {currentStep > 1 ? (
              <button
                id="booking-back-btn"
                onClick={handleBack}
                className="px-4 py-2 text-xs font-semibold text-[#756B7C] hover:text-[#3E3445] rounded-xl hover:bg-white transition-colors flex items-center gap-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}

            <button
              id="booking-next-step-btn"
              onClick={handleNext}
              disabled={isSubmitting}
              className="px-7 py-2.5 bg-[#8B6FAE] hover:bg-[#665080] text-white text-xs font-semibold rounded-full shadow-[0_4px_16px_rgba(139,111,174,0.3)] transition-all flex items-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Confirming Booking...</span>
              ) : currentStep === 6 ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Confirm & Book Appointment</span>
                </>
              ) : (
                <>
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
