import React, { useState, useEffect } from 'react';
import type { Doctor, Department, Appointment } from '../types';
import { dataStore } from '../services/dataStore';
import { X, Calendar, CheckCircle2, ChevronRight, ChevronLeft, Building2 } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  preselectedDoctor?: Doctor | null;
  onClose: () => void;
  onSuccess: (appointment: Appointment) => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  preselectedDoctor,
  onClose,
  onSuccess
}) => {
  const [step, setStep] = useState<number>(1);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);

  // Form states
  const [selectedDeptId, setSelectedDeptId] = useState<string>('');
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('');
  
  const [patientName, setPatientName] = useState<string>('Madhu Kumar');
  const [patientEmail, setPatientEmail] = useState<string>('madhu@example.com');
  const [patientPhone, setPatientPhone] = useState<string>('+1 (555) 234-5678');
  const [reason, setReason] = useState<string>('');
  const [confirmedApt, setConfirmedApt] = useState<Appointment | null>(null);

  useEffect(() => {
    if (isOpen) {
      const allDocs = dataStore.getDoctors();
      const allDepts = dataStore.getDepartments();
      setDoctors(allDocs);
      setDepartments(allDepts);

      // Default date to tomorrow
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      setSelectedDate(tomorrow.toISOString().split('T')[0]);

      if (preselectedDoctor) {
        setSelectedDoctorId(preselectedDoctor.id);
        setSelectedDeptId(preselectedDoctor.departmentId);
        setStep(3); // jump straight to Date & Slot picker!
      } else {
        setStep(1);
      }
    }
  }, [isOpen, preselectedDoctor]);

  if (!isOpen) return null;

  const currentDoctor = doctors.find(d => d.id === selectedDoctorId);

  // Filter doctors by selected department
  const filteredDoctors = selectedDeptId
    ? doctors.filter(d => d.departmentId === selectedDeptId)
    : doctors;

  const handleNextStep = () => {
    if (step === 1 && !selectedDeptId) return;
    if (step === 2 && !selectedDoctorId) return;
    if (step === 3 && (!selectedDate || !selectedTimeSlot)) return;
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentDoctor || !selectedDate || !selectedTimeSlot || !patientName || !patientEmail) return;

    const newApt = dataStore.createAppointment({
      patientId: 'pat-1',
      patientName,
      patientEmail,
      patientPhone,
      doctorId: currentDoctor.id,
      doctorName: currentDoctor.name,
      doctorSpecialty: currentDoctor.specialty,
      departmentName: currentDoctor.departmentName,
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      reason: reason || 'General Consultation'
    });

    setConfirmedApt(newApt);
    setStep(5);
    onSuccess(newApt);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '680px' }}>
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #0f766e 0%, #0d9488 100%)',
          color: '#ffffff',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTopLeftRadius: 'var(--radius-xl)',
          borderTopRightRadius: 'var(--radius-xl)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Calendar size={22} />
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: 0 }}>Book Medical Appointment</h3>
              <p style={{ fontSize: '0.78rem', opacity: 0.9 }}>Step {step} of 4 — Real-Time Availability Engine</p>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Step Indicator Bar */}
        {step < 5 && (
          <div style={{ display: 'flex', borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
            {[
              { num: 1, label: 'Department' },
              { num: 2, label: 'Doctor' },
              { num: 3, label: 'Date & Slot' },
              { num: 4, label: 'Patient Info' }
            ].map(s => (
              <div
                key={s.num}
                style={{
                  flex: 1,
                  padding: '0.65rem 0.5rem',
                  textAlign: 'center',
                  fontSize: '0.78rem',
                  fontWeight: step === s.num ? 700 : 500,
                  color: step === s.num ? '#0d9488' : step > s.num ? '#047857' : '#94a3b8',
                  borderBottom: step === s.num ? '3px solid #0d9488' : '3px solid transparent',
                  background: step === s.num ? '#ffffff' : 'transparent'
                }}
              >
                {step > s.num ? '✓ ' : `${s.num}. `}{s.label}
              </div>
            ))}
          </div>
        )}

        {/* Body Content */}
        <div style={{ padding: '1.5rem' }}>
          {/* STEP 1: Department Selection */}
          {step === 1 && (
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>Select Clinical Department</h4>
              <div className="grid-2" style={{ gap: '0.75rem' }}>
                {departments.map(dept => {
                  const isSelected = selectedDeptId === dept.id;
                  return (
                    <div
                      key={dept.id}
                      onClick={() => {
                        setSelectedDeptId(dept.id);
                        setStep(2);
                      }}
                      style={{
                        padding: '1rem',
                        borderRadius: '12px',
                        border: isSelected ? '2px solid #0d9488' : '1px solid #e2e8f0',
                        background: isSelected ? '#f0fdfa' : '#ffffff',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.3rem' }}>
                        <Building2 size={18} color="#0d9488" />
                        <span style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.92rem' }}>{dept.name}</span>
                      </div>
                      <p style={{ fontSize: '0.78rem', color: '#64748b' }}>{dept.doctorCount} Doctors available</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: Doctor Selection */}
          {step === 2 && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>Choose Specialist</h4>
                <button onClick={() => setStep(1)} style={{ fontSize: '0.8rem', color: '#0d9488', fontWeight: 600 }}>
                  Change Department
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxHeight: '340px', overflowY: 'auto' }}>
                {filteredDoctors.map(doc => {
                  const isSelected = selectedDoctorId === doc.id;
                  return (
                    <div
                      key={doc.id}
                      onClick={() => {
                        setSelectedDoctorId(doc.id);
                        setStep(3);
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '0.85rem 1rem',
                        borderRadius: '12px',
                        border: isSelected ? '2px solid #0d9488' : '1px solid #e2e8f0',
                        background: isSelected ? '#f0fdfa' : '#ffffff',
                        cursor: 'pointer'
                      }}
                    >
                      <img src={doc.avatar} alt={doc.name} style={{ width: '54px', height: '54px', borderRadius: '12px', objectFit: 'cover' }} />
                      <div style={{ flex: 1 }}>
                        <h5 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>{doc.name}</h5>
                        <p style={{ fontSize: '0.78rem', color: '#64748b' }}>{doc.title} • {doc.experienceYears} Yrs Exp</p>
                        <div style={{ fontSize: '0.75rem', color: '#0d9488', fontWeight: 600, marginTop: '0.1rem' }}>
                          ★ {doc.rating.toFixed(1)} ({doc.reviewCount}) • ${doc.fee} fee
                        </div>
                      </div>
                      <ChevronRight size={18} color="#94a3b8" />
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: Date & Slot Picker */}
          {step === 3 && currentDoctor && (
            <div>
              <div style={{ background: '#f0fdfa', padding: '0.85rem 1rem', borderRadius: '12px', border: '1px solid #ccfbf1', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <img src={currentDoctor.avatar} alt={currentDoctor.name} style={{ width: '44px', height: '44px', borderRadius: '10px', objectFit: 'cover' }} />
                <div>
                  <h5 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>{currentDoctor.name}</h5>
                  <p style={{ fontSize: '0.78rem', color: '#0d9488', fontWeight: 600 }}>{currentDoctor.specialty} • ${currentDoctor.fee}</p>
                </div>
              </div>

              {/* Date Input */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.4rem' }}>
                  Select Consultation Date
                </label>
                <input
                  type="date"
                  className="input-field"
                  value={selectedDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={e => {
                    setSelectedDate(e.target.value);
                    setSelectedTimeSlot('');
                  }}
                />
              </div>

              {/* Time Slots Grid */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                  Available Time Slots
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '0.5rem' }}>
                  {currentDoctor.timeSlots.map((slot, i) => {
                    const isSelected = selectedTimeSlot === slot;
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setSelectedTimeSlot(slot)}
                        style={{
                          padding: '0.5rem',
                          borderRadius: '8px',
                          border: isSelected ? '2px solid #0d9488' : '1px solid #cbd5e1',
                          background: isSelected ? '#0d9488' : '#ffffff',
                          color: isSelected ? '#ffffff' : '#334155',
                          fontWeight: 700,
                          fontSize: '0.82rem',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Patient Info Form */}
          {step === 4 && (
            <form onSubmit={handleSubmitBooking}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>Patient Details & Reason for Visit</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div className="grid-2" style={{ gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '0.3rem' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      required
                      value={patientName}
                      onChange={e => setPatientName(e.target.value)}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '0.3rem' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="input-field"
                      required
                      value={patientEmail}
                      onChange={e => setPatientEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid-2" style={{ gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '0.3rem' }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      className="input-field"
                      required
                      value={patientPhone}
                      onChange={e => setPatientPhone(e.target.value)}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '0.3rem' }}>
                      Selected Appointment Time
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      disabled
                      value={`${selectedDate} @ ${selectedTimeSlot}`}
                      style={{ background: '#f1f5f9', fontWeight: 600, color: '#0f766e' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '0.3rem' }}>
                    Reason for Visit / Symptoms Description
                  </label>
                  <textarea
                    rows={3}
                    className="input-field"
                    placeholder="Briefly describe your symptoms or medical concern..."
                    value={reason}
                    onChange={e => setReason(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.85rem' }}>
                  Confirm & Create Appointment
                </button>
              </div>
            </form>
          )}

          {/* STEP 5: Instant Booking Receipt */}
          {step === 5 && confirmedApt && (
            <div style={{ textAlign: 'center', padding: '1rem 0' }}>
              <div style={{
                width: '64px',
                height: '64px',
                background: '#ecfdf5',
                color: '#047857',
                borderRadius: '50%',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <CheckCircle2 size={36} />
              </div>

              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.2rem' }}>
                Appointment Confirmed!
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
                Your reference code: <strong style={{ color: '#0d9488' }}>{confirmedApt.id}</strong>
              </p>

              {/* Receipt Summary Card */}
              <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '14px', border: '1px solid #e2e8f0', textAlign: 'left', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', paddingBottom: '0.75rem', borderBottom: '1px solid #e2e8f0' }}>
                  <span style={{ fontSize: '0.82rem', color: '#64748b' }}>Doctor:</span>
                  <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0f172a' }}>{confirmedApt.doctorName}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', paddingBottom: '0.75rem', borderBottom: '1px solid #e2e8f0' }}>
                  <span style={{ fontSize: '0.82rem', color: '#64748b' }}>Department:</span>
                  <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#334155' }}>{confirmedApt.departmentName}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', paddingBottom: '0.75rem', borderBottom: '1px solid #e2e8f0' }}>
                  <span style={{ fontSize: '0.82rem', color: '#64748b' }}>Date & Time:</span>
                  <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0d9488' }}>{confirmedApt.date} @ {confirmedApt.timeSlot}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.82rem', color: '#64748b' }}>Patient Name:</span>
                  <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#0f172a' }}>{confirmedApt.patientName}</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Done & Close
              </button>
            </div>
          )}
        </div>

        {/* Footer Navigation Buttons */}
        {step < 4 && (
          <div style={{ padding: '1rem 1.5rem', background: '#f8fafc', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between' }}>
            <button
              onClick={handlePrevStep}
              className="btn-outline"
              disabled={step === 1}
              style={{ opacity: step === 1 ? 0.5 : 1 }}
            >
              <ChevronLeft size={16} /> Back
            </button>

            <button
              onClick={handleNextStep}
              className="btn-primary"
              disabled={(step === 1 && !selectedDeptId) || (step === 2 && !selectedDoctorId) || (step === 3 && (!selectedDate || !selectedTimeSlot))}
            >
              Next Step <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
