import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { 
  X, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Video, 
  MapPin, 
  ArrowRight, 
  ArrowLeft, 
  Download, 
  Printer, 
  Sparkles,
  Stethoscope,
  ChevronRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Doctor, ConsultationMode, Appointment } from '../types';

export const BookingModal: React.FC = () => {
  const { 
    isBookingOpen, 
    closeBooking, 
    bookingDoctor, 
    bookingPreselectedMode, 
    doctors, 
    addAppointment,
    setActiveTab 
  } = useApp();

  // Step state (1 to 6)
  const [currentStep, setCurrentStep] = useState(1);

  // Form states
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [selectedMode, setSelectedMode] = useState<ConsultationMode>('in_person');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  
  // Patient details
  const [patientName, setPatientName] = useState('Alex Morgan');
  const [patientPhone, setPatientPhone] = useState('+1 (555) 234-8901');
  const [patientEmail, setPatientEmail] = useState('alex.morgan@healthmail.com');
  const [reason, setReason] = useState('Routine clinical consultation and health optimization review');
  const [symptoms, setSymptoms] = useState('');
  const [insuranceProvider, setInsuranceProvider] = useState('Blue Cross Blue Shield PPO');
  const [insurancePolicyNumber, setInsurancePolicyNumber] = useState('BC-994821034');
  const [confirmedAppointment, setConfirmedAppointment] = useState<Appointment | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize booking state
  useEffect(() => {
    if (isBookingOpen) {
      setCurrentStep(1);
      const initialDoc = bookingDoctor || doctors[0];
      setSelectedDoctor(initialDoc);
      setSelectedMode(bookingPreselectedMode || 'in_person');

      // Pick default date (tomorrow)
      const d = new Date();
      d.setDate(d.getDate() + 1);
      const dateStr = d.toISOString().split('T')[0];
      setSelectedDate(dateStr);
      setSelectedTimeSlot(initialDoc?.availableSlots[0] || '10:30 AM');
      setConfirmedAppointment(null);
    }
  }, [isBookingOpen, bookingDoctor, bookingPreselectedMode, doctors]);

  if (!isBookingOpen) return null;

  // Generate 7-day selector array
  const availableDatesList = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    const dateStr = d.toISOString().split('T')[0];
    const dayName = d.toLocaleDateString('en-US', { weekday: 'short' });
    const dayNum = d.getDate();
    const monthName = d.toLocaleDateString('en-US', { month: 'short' });
    return { dateStr, dayName, dayNum, monthName };
  });

  const handleNextStep = () => {
    if (currentStep < 5) {
      setCurrentStep((prev) => prev + 1);
    } else if (currentStep === 5) {
      // Confirm Booking
      setIsSubmitting(true);
      setTimeout(() => {
        if (!selectedDoctor) return;
        const newAppt = addAppointment({
          doctorId: selectedDoctor.id,
          doctorName: selectedDoctor.name,
          doctorSpecialty: selectedDoctor.specialty,
          doctorPhoto: selectedDoctor.photoUrl,
          doctorLocation: selectedDoctor.location,
          date: selectedDate,
          timeSlot: selectedTimeSlot,
          mode: selectedMode,
          patientName,
          patientPhone,
          patientEmail,
          reason,
          symptoms,
          insuranceProvider,
          insurancePolicyNumber,
          status: 'confirmed',
          fee: selectedDoctor.fee
        });

        setConfirmedAppointment(newAppt);
        setIsSubmitting(false);
        setCurrentStep(6);

        // Confetti celebration
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch (e) {
          console.error(e);
        }
      }, 500);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleDownloadCalendar = () => {
    if (!confirmedAppointment) return;
    const title = `Aurevia Clinical Consultation with ${confirmedAppointment.doctorName}`;
    const desc = `Consultation with ${confirmedAppointment.doctorName} (${confirmedAppointment.doctorSpecialty}). Reason: ${confirmedAppointment.reason}`;
    const loc = confirmedAppointment.mode === 'telehealth' ? 'Aurevia Telehealth HD Video Room' : confirmedAppointment.doctorLocation;
    
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Aurevia Health//Consultation//EN
BEGIN:VEVENT
SUMMARY:${title}
DESCRIPTION:${desc}
LOCATION:${loc}
DTSTART:${confirmedAppointment.date.replace(/-/g, '')}T100000Z
DTEND:${confirmedAppointment.date.replace(/-/g, '')}T110000Z
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Aurevia-${confirmedAppointment.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  const stepsList = [
    { num: 1, title: 'Specialist & Mode' },
    { num: 2, title: 'Date' },
    { num: 3, title: 'Time Slot' },
    { num: 4, title: 'Patient Info' },
    { num: 5, title: 'Review' },
    { num: 6, title: 'Confirmed' }
  ];

  return (
    <AnimatePresence>
      <div 
        id="booking-modal-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-[#0A1128]/80 backdrop-blur-md overflow-y-auto"
        onClick={closeBooking}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          id="booking-modal"
          className="bg-white w-full max-w-3xl min-h-screen sm:min-h-0 sm:max-h-[92vh] sm:rounded-[36px] shadow-2xl overflow-hidden flex flex-col my-auto border border-gray-200 text-[#0A1128]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Bar */}
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-[#FAF9F6] shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1A535C] animate-pulse" />
              <span className="text-[10px] font-bold text-[#0A1128] uppercase tracking-[0.2em]">
                Clinical Appointment Scheduler
              </span>
            </div>
            <button
              onClick={closeBooking}
              className="p-2 rounded-full text-slate-400 hover:text-[#0A1128] hover:bg-gray-200/60 transition-colors cursor-pointer"
              aria-label="Close scheduler"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Stepper Progress Bar */}
          <div className="px-6 py-3.5 bg-white border-b border-gray-100 shrink-0">
            <div className="flex items-center justify-between">
              {stepsList.map((st) => {
                const isActive = currentStep === st.num;
                const isPassed = currentStep > st.num;
                return (
                  <div key={st.num} className="flex items-center gap-2">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-all ${
                        isPassed
                          ? 'bg-[#1A535C] text-white'
                          : isActive
                          ? 'bg-[#0A1128] text-white shadow-xs'
                          : 'bg-gray-100 text-[#4A5568]'
                      }`}
                    >
                      {isPassed ? <CheckCircle2 className="w-3.5 h-3.5" /> : st.num}
                    </div>
                    <span
                      className={`text-xs font-semibold hidden md:inline ${
                        isActive ? 'text-[#0A1128] font-bold' : isPassed ? 'text-[#1A535C]' : 'text-slate-400'
                      }`}
                    >
                      {st.title}
                    </span>
                    {st.num < 6 && <ChevronRight className="w-3.5 h-3.5 text-slate-300 hidden md:inline ml-1" />}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dynamic Step Content Area */}
          <div className="p-6 sm:p-8 overflow-y-auto flex-1">
            
            {/* STEP 1: Choose Specialist & Mode */}
            {currentStep === 1 && (
              <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#0A1128] font-['Manrope'] mb-1">
                    Select Your Physician & Consultation Mode
                  </h3>
                  <p className="text-xs text-[#4A5568]">
                    Choose from our board-certified clinical faculty and preferred visit format.
                  </p>
                </div>

                {/* Consultation Mode Options */}
                <div>
                  <label className="text-[10px] font-bold text-[#4A5568] uppercase tracking-[0.2em] block mb-2">
                    Visit Format
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div
                      onClick={() => setSelectedMode('in_person')}
                      className={`p-4 rounded-2xl cursor-pointer border-2 transition-all flex items-start gap-3.5 ${
                        selectedMode === 'in_person'
                          ? 'border-[#0A1128] bg-[#FAF9F6] shadow-sm'
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                      }`}
                    >
                      <div className="p-2.5 rounded-xl bg-gray-100 text-[#0A1128]">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#0A1128]">In-Person Hospital Visit</h4>
                        <p className="text-xs text-[#4A5568] mt-0.5">Aurevia Medical District Campus</p>
                        <span className="inline-block mt-2 text-[10px] font-bold text-[#1A535C] bg-[#1A535C]/10 px-2 py-0.5 rounded-full">
                          Diagnostic suites & lab on-site
                        </span>
                      </div>
                    </div>

                    <div
                      onClick={() => setSelectedMode('telehealth')}
                      className={`p-4 rounded-2xl cursor-pointer border-2 transition-all flex items-start gap-3.5 ${
                        selectedMode === 'telehealth'
                          ? 'border-[#1A535C] bg-[#1A535C]/10 shadow-sm'
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                      }`}
                    >
                      <div className="p-2.5 rounded-xl bg-[#1A535C]/20 text-[#1A535C]">
                        <Video className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#0A1128]">Telehealth HD Video</h4>
                        <p className="text-xs text-[#4A5568] mt-0.5">Encrypted 4K Virtual Room</p>
                        <span className="inline-block mt-2 text-[10px] font-bold text-[#1A535C] bg-[#1A535C]/10 px-2 py-0.5 rounded-full">
                          E-prescriptions & instant join
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Doctor Selection Grid */}
                <div>
                  <label className="text-[10px] font-bold text-[#4A5568] uppercase tracking-[0.2em] block mb-2">
                    Select Specialist ({doctors.length} Available)
                  </label>
                  <div className="space-y-2.5 max-h-64 overflow-y-auto pr-1">
                    {doctors.map((doc) => {
                      const isSelected = selectedDoctor?.id === doc.id;
                      return (
                        <div
                          key={doc.id}
                          onClick={() => setSelectedDoctor(doc)}
                          className={`p-3.5 rounded-2xl cursor-pointer border transition-all flex items-center justify-between ${
                            isSelected
                              ? 'border-[#1A535C] bg-[#1A535C]/10 shadow-xs'
                              : 'border-gray-200 hover:bg-[#FAF9F6] bg-white'
                          }`}
                        >
                          <div className="flex items-center gap-3.5 min-w-0">
                            <img
                              src={doc.photoUrl}
                              alt={doc.name}
                              className="w-12 h-12 rounded-xl object-cover shrink-0"
                              referrerPolicy="no-referrer"
                            />
                            <div className="min-w-0">
                              <div className="flex items-center gap-2">
                                <h4 className="text-sm font-bold text-[#0A1128] truncate">{doc.name}</h4>
                                <span className="text-[10px] font-bold text-slate-400">{doc.title}</span>
                              </div>
                              <p className="text-xs text-[#1A535C] font-medium truncate">{doc.specialty}</p>
                              <p className="text-[11px] text-[#4A5568]">{doc.departmentName.split('&')[0]}</p>
                            </div>
                          </div>
                          <div className="text-right shrink-0">
                            <span className="text-xs font-extrabold text-[#0A1128] block font-mono">₹{doc.fee.toLocaleString('en-IN')}</span>
                            <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">
                              {doc.isAvailableToday ? 'Today' : 'Tomorrow'}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 2: Choose Date */}
            {currentStep === 2 && (
              <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#0A1128] font-['Manrope'] mb-1">
                    Select Appointment Date
                  </h3>
                  <p className="text-xs text-[#4A5568]">
                    Showing available clinic days for <span className="font-bold text-[#0A1128]">{selectedDoctor?.name}</span>.
                  </p>
                </div>

                {/* Day selector pill tiles */}
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
                  {availableDatesList.map((dItem) => {
                    const isSelected = selectedDate === dItem.dateStr;
                    return (
                      <button
                        key={dItem.dateStr}
                        onClick={() => setSelectedDate(dItem.dateStr)}
                        className={`p-3.5 rounded-2xl text-center border-2 transition-all flex flex-col items-center justify-center cursor-pointer ${
                          isSelected
                            ? 'border-[#0A1128] bg-[#0A1128] text-white shadow-md'
                            : 'border-gray-200 hover:border-[#1A535C]/50 bg-white text-[#0A1128]'
                        }`}
                      >
                        <span className={`text-[10px] uppercase font-bold tracking-wider ${isSelected ? 'text-[#4ECDC4]' : 'text-slate-400'}`}>
                          {dItem.dayName}
                        </span>
                        <span className="text-lg font-extrabold my-0.5">
                          {dItem.dayNum}
                        </span>
                        <span className={`text-[10px] font-medium ${isSelected ? 'text-slate-300' : 'text-[#4A5568]'}`}>
                          {dItem.monthName}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Manual calendar date picker */}
                <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs font-semibold text-[#4A5568]">
                    Or select a specific future date:
                  </span>
                  <input
                    type="date"
                    value={selectedDate}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="px-4 py-2 rounded-full bg-[#FAF9F6] border border-gray-200 text-xs font-semibold text-[#0A1128] focus:ring-2 focus:ring-[#1A535C] outline-hidden cursor-pointer"
                  />
                </div>
              </motion.div>
            )}

            {/* STEP 3: Choose Time Slot */}
            {currentStep === 3 && (
              <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#0A1128] font-['Manrope'] mb-1">
                    Select Consultation Time
                  </h3>
                  <p className="text-xs text-[#4A5568]">
                    Available openings on <span className="font-bold text-[#0A1128]">{selectedDate}</span>.
                  </p>
                </div>

                {/* Morning Slots */}
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A5568] mb-2 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#1A535C]" /> Morning Slots
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {['08:30 AM', '09:15 AM', '10:30 AM', '11:15 AM'].map((slot) => {
                      const isSelected = selectedTimeSlot === slot;
                      return (
                        <button
                          key={slot}
                          onClick={() => setSelectedTimeSlot(slot)}
                          className={`py-3 px-4 rounded-xl text-xs font-bold border transition-all cursor-pointer font-mono ${
                            isSelected
                              ? 'bg-[#1A535C] text-white border-[#1A535C] shadow-xs'
                              : 'bg-[#FAF9F6] hover:bg-gray-100 text-[#0A1128] border-gray-200'
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Afternoon Slots */}
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A5568] mb-2 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#1A535C]" /> Afternoon & Evening Slots
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {['01:30 PM', '02:45 PM', '03:30 PM', '04:15 PM', '05:00 PM'].map((slot) => {
                      const isSelected = selectedTimeSlot === slot;
                      return (
                        <button
                          key={slot}
                          onClick={() => setSelectedTimeSlot(slot)}
                          className={`py-3 px-4 rounded-xl text-xs font-bold border transition-all cursor-pointer font-mono ${
                            isSelected
                              ? 'bg-[#1A535C] text-white border-[#1A535C] shadow-xs'
                              : 'bg-[#FAF9F6] hover:bg-gray-100 text-[#0A1128] border-gray-200'
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 4: Patient Details & Triage */}
            {currentStep === 4 && (
              <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-[#0A1128] font-['Manrope'] mb-1">
                    Patient & Insurance Information
                  </h3>
                  <p className="text-xs text-[#4A5568]">
                    Clinical intake details for your Electronic Health Record (EHR).
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="text-[10px] font-bold text-[#4A5568] uppercase tracking-[0.2em] block mb-1">
                      Full Legal Name
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-full bg-[#FAF9F6] border border-gray-200 text-xs font-semibold text-[#0A1128] focus:ring-2 focus:ring-[#1A535C] outline-hidden"
                        placeholder="e.g. Alex Morgan"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-[#4A5568] uppercase tracking-[0.2em] block mb-1">
                      Contact Phone
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        value={patientPhone}
                        onChange={(e) => setPatientPhone(e.target.value)}
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-full bg-[#FAF9F6] border border-gray-200 text-xs font-semibold text-[#0A1128] focus:ring-2 focus:ring-[#1A535C] outline-hidden font-mono"
                        placeholder="+1 (555) 000-0000"
                        required
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-[10px] font-bold text-[#4A5568] uppercase tracking-[0.2em] block mb-1">
                      Email for Confirmation & Video Link
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        value={patientEmail}
                        onChange={(e) => setPatientEmail(e.target.value)}
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-full bg-[#FAF9F6] border border-gray-200 text-xs font-semibold text-[#0A1128] focus:ring-2 focus:ring-[#1A535C] outline-hidden"
                        placeholder="alex.morgan@healthmail.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-[#4A5568] uppercase tracking-[0.2em] block mb-1">
                      Insurance Provider
                    </label>
                    <div className="relative">
                      <ShieldCheck className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={insuranceProvider}
                        onChange={(e) => setInsuranceProvider(e.target.value)}
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-full bg-[#FAF9F6] border border-gray-200 text-xs font-semibold text-[#0A1128] focus:ring-2 focus:ring-[#1A535C] outline-hidden"
                        placeholder="e.g. Blue Cross Blue Shield"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-[#4A5568] uppercase tracking-[0.2em] block mb-1">
                      Member / Policy ID
                    </label>
                    <input
                      type="text"
                      value={insurancePolicyNumber}
                      onChange={(e) => setInsurancePolicyNumber(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-full bg-[#FAF9F6] border border-gray-200 text-xs font-semibold text-[#0A1128] focus:ring-2 focus:ring-[#1A535C] outline-hidden font-mono"
                      placeholder="e.g. BC-994821"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-[10px] font-bold text-[#4A5568] uppercase tracking-[0.2em] block mb-1">
                      Chief Complaint / Reason for Visit
                    </label>
                    <textarea
                      rows={2}
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      className="w-full p-3.5 rounded-2xl bg-[#FAF9F6] border border-gray-200 text-xs font-medium text-[#0A1128] focus:ring-2 focus:ring-[#1A535C] outline-hidden"
                      placeholder="Describe primary symptoms or health goals..."
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 5: Review & Confirmation Summary */}
            {currentStep === 5 && (
              <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#0A1128] font-['Manrope'] mb-1">
                    Review Appointment Summary
                  </h3>
                  <p className="text-xs text-[#4A5568]">
                    Please verify your consultation details before final confirmation.
                  </p>
                </div>

                {/* Summary Bento Card */}
                <div className="p-6 rounded-[32px] bg-[#FAF9F6] border border-gray-200 space-y-4">
                  {/* Doctor row */}
                  <div className="flex items-center gap-4 pb-4 border-b border-gray-200">
                    <img
                      src={selectedDoctor?.photoUrl}
                      alt={selectedDoctor?.name}
                      className="w-14 h-14 rounded-2xl object-cover shadow-sm shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-base font-bold text-[#0A1128]">{selectedDoctor?.name}</h4>
                        <span className="text-xs text-[#4A5568] font-bold">{selectedDoctor?.title}</span>
                      </div>
                      <p className="text-xs text-[#1A535C] font-semibold">{selectedDoctor?.specialty}</p>
                      <p className="text-xs text-[#4A5568]">{selectedDoctor?.departmentName}</p>
                    </div>
                  </div>

                  {/* Logistics Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3.5 rounded-2xl bg-white border border-gray-200">
                      <span className="text-[10px] text-slate-400 uppercase font-bold block">Date</span>
                      <span className="font-bold text-[#0A1128]">{selectedDate}</span>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white border border-gray-200">
                      <span className="text-[10px] text-slate-400 uppercase font-bold block">Time Slot</span>
                      <span className="font-bold text-[#0A1128] font-mono">{selectedTimeSlot}</span>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white border border-gray-200">
                      <span className="text-[10px] text-slate-400 uppercase font-bold block">Visit Type</span>
                      <span className="font-bold text-[#1A535C] capitalize">
                        {selectedMode === 'telehealth' ? 'Telehealth HD' : 'In-Person Clinic'}
                      </span>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white border border-gray-200">
                      <span className="text-[10px] text-slate-400 uppercase font-bold block">Patient</span>
                      <span className="font-bold text-[#0A1128]">{patientName}</span>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white border border-gray-200">
                      <span className="text-[10px] text-slate-400 uppercase font-bold block">Insurance</span>
                      <span className="font-bold text-[#0A1128]">{insuranceProvider || 'Self-Pay'}</span>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white border border-gray-200">
                      <span className="text-[10px] text-slate-400 uppercase font-bold block">Est. Fee</span>
                      <span className="font-extrabold text-[#0A1128] font-mono">₹{selectedDoctor?.fee ? selectedDoctor.fee.toLocaleString('en-IN') : '0'}</span>
                    </div>
                  </div>

                  {/* Complaint */}
                  <div className="p-3.5 rounded-2xl bg-white border border-gray-200 text-xs">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block mb-0.5">
                      Chief Complaint / Reason
                    </span>
                    <p className="text-[#4A5568]">{reason}</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 6: Confirmation Screen */}
            {currentStep === 6 && confirmedAppointment && (
              <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="space-y-6 text-center py-4">
                {/* Success Checkmark Ring */}
                <div className="w-16 h-16 rounded-full bg-[#1A535C]/10 border-4 border-[#1A535C]/20 flex items-center justify-center mx-auto text-[#1A535C] shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <h3 className="text-2xl font-extrabold text-[#0A1128] font-['Manrope'] mb-1">
                    Your appointment is confirmed!
                  </h3>
                  <p className="text-xs text-[#4A5568] max-w-md mx-auto">
                    Appointment ID: <span className="font-mono font-bold text-[#0A1128] bg-gray-100 px-2 py-0.5 rounded-full">{confirmedAppointment.id}</span>
                  </p>
                  <p className="text-xs text-[#1A535C] font-bold mt-1">
                    A confirmation email and SMS reminder have been dispatched.
                  </p>
                </div>

                {/* Appointment Card Recap */}
                <div className="p-6 rounded-[32px] bg-[#FAF9F6] border border-gray-200 max-w-lg mx-auto text-left space-y-3">
                  <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
                    <img
                      src={confirmedAppointment.doctorPhoto}
                      alt={confirmedAppointment.doctorName}
                      className="w-12 h-12 rounded-2xl object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-[#0A1128]">{confirmedAppointment.doctorName}</h4>
                      <p className="text-xs text-[#1A535C] font-semibold">{confirmedAppointment.doctorSpecialty}</p>
                      <p className="text-[11px] text-[#4A5568]">{confirmedAppointment.doctorLocation}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-bold block">Date & Time</span>
                      <span className="font-bold text-[#0A1128]">{confirmedAppointment.date} at {confirmedAppointment.timeSlot}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-bold block">Visit Type</span>
                      <span className="font-bold text-[#1A535C] capitalize">
                        {confirmedAppointment.mode === 'telehealth' ? 'Telehealth HD' : 'In-Person Clinic'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    onClick={handleDownloadCalendar}
                    className="px-5 py-2.5 rounded-full bg-white border border-gray-200 text-[#0A1128] hover:bg-gray-50 text-xs font-bold flex items-center gap-2 shadow-xs cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-[#1A535C]" />
                    <span>Add to Calendar (.ics)</span>
                  </button>

                  <button
                    onClick={handlePrint}
                    className="px-5 py-2.5 rounded-full bg-white border border-gray-200 text-[#0A1128] hover:bg-gray-50 text-xs font-bold flex items-center gap-2 shadow-xs cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5 text-[#4A5568]" />
                    <span>Print Voucher</span>
                  </button>

                  <button
                    onClick={() => {
                      closeBooking();
                      setActiveTab('patient_dashboard');
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#0A1128] hover:bg-[#1A535C] text-white text-xs font-bold flex items-center gap-2 shadow-md cursor-pointer transition-colors"
                  >
                    <span>View in Patient Portal</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#4ECDC4]" />
                  </button>
                </div>
              </motion.div>
            )}

          </div>

          {/* Stepper Footer Controls */}
          {currentStep < 6 && (
            <div className="px-6 py-4 border-t border-gray-100 bg-[#FAF9F6] flex items-center justify-between shrink-0">
              {currentStep > 1 ? (
                <button
                  onClick={handlePrevStep}
                  className="px-5 py-2 rounded-full bg-white border border-gray-200 text-[#0A1128] hover:bg-gray-100 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back
                </button>
              ) : (
                <div />
              )}

              <button
                onClick={handleNextStep}
                disabled={isSubmitting || !selectedDoctor || !selectedDate || !selectedTimeSlot}
                id="booking-step-next-btn"
                className="px-7 py-2.5 rounded-full bg-[#0A1128] hover:bg-[#1A535C] text-white text-xs font-bold shadow-md transition-all flex items-center gap-2 disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? (
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : currentStep === 5 ? (
                  <>
                    <span>Confirm & Book Consultation</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4ECDC4]" />
                  </>
                ) : (
                  <>
                    <span>Continue to Step {currentStep + 1}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#4ECDC4]" />
                  </>
                )}
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
