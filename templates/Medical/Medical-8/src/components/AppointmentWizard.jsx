import React, { useState, useEffect } from 'react';
import { SPECIALTIES, DOCTORS } from '../data/medicalData';
import confetti from 'canvas-confetti';
import { X, Calendar, Clock, User, Phone, Mail, FileText, CheckCircle2, QrCode, Printer, Shield, Video, MapPin, ArrowRight, ArrowLeft } from 'lucide-react';

export default function AppointmentWizard({ initialSpecialtyId, initialDoctorId, onClose }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [careType, setCareType] = useState('In-Person'); // 'In-Person' or 'Virtual Telehealth'
  const [selectedSpecialty, setSelectedSpecialty] = useState(initialSpecialtyId || 'cardiology');
  const [selectedDoctorId, setSelectedDoctorId] = useState(initialDoctorId || 'dr-vance');
  const [selectedDate, setSelectedDate] = useState('2026-09-04');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('10:30 AM');

  // Patient Info Form State
  const [patientData, setPatientData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    insuranceProvider: 'BlueCross BlueShield',
    reasonForVisit: '',
    isFirstVisit: 'Yes'
  });

  const [appointmentPass, setAppointmentPass] = useState(null);

  // Sync default doctor if specialty changes
  useEffect(() => {
    const defaultDoc = DOCTORS.find((d) => d.specialtyId === selectedSpecialty);
    if (defaultDoc && !DOCTORS.find((d) => d.id === selectedDoctorId && d.specialtyId === selectedSpecialty)) {
      setSelectedDoctorId(defaultDoc.id);
    }
  }, [selectedSpecialty]);

  const selectedDoctor = DOCTORS.find((d) => d.id === selectedDoctorId) || DOCTORS[0];
  const specialtyInfo = SPECIALTIES.find((s) => s.id === selectedSpecialty) || SPECIALTIES[0];

  const availableDoctors = DOCTORS.filter((d) => d.specialtyId === selectedSpecialty);

  const timeSlots = [
    { time: '09:00 AM', category: 'Morning' },
    { time: '10:30 AM', category: 'Morning' },
    { time: '11:15 AM', category: 'Morning' },
    { time: '01:30 PM', category: 'Afternoon' },
    { time: '03:00 PM', category: 'Afternoon' },
    { time: '04:15 PM', category: 'Afternoon' }
  ];

  const handleNextStep = () => {
    if (currentStep === 4) {
      // Complete booking
      const passId = `AURA-${Math.floor(1000 + Math.random() * 9000)}-2026`;
      const pass = {
        passId,
        patientName: patientData.fullName || 'Valued Patient',
        email: patientData.email || 'patient@example.com',
        phone: patientData.phone || '+1 (555) 019-2831',
        doctorName: selectedDoctor.name,
        doctorTitle: selectedDoctor.title,
        specialty: specialtyInfo.title,
        careType,
        date: selectedDate,
        time: selectedTimeSlot,
        location: selectedDoctor.hospitalAffiliation,
        qrCodeUrl: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${passId}`
      };
      setAppointmentPass(pass);
      setCurrentStep(5);

      // Trigger Celebration Confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Fallback gracefully
      }
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPatientData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div
        className="glass-panel"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '740px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2.5rem',
          position: 'relative',
          boxShadow: 'var(--shadow-lg), 0 0 50px rgba(2, 132, 199, 0.25)',
          background: 'rgba(255, 255, 255, 0.96)'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text-muted)'
          }}
        >
          <X size={24} />
        </button>

        {/* Wizard Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div className="badge-pill" style={{ marginBottom: '0.5rem' }}>
            <Calendar size={14} />
            <span>Interactive Appointment Wizard</span>
          </div>
          <h2 className="heading-editorial" style={{ fontSize: '2rem', color: 'var(--text-main)' }}>
            Schedule Your <span className="gradient-text">Medical Visit</span>
          </h2>
        </div>

        {/* Steps Progress Indicator Track */}
        {currentStep < 5 && (
          <div className="wizard-steps-track">
            <div
              className="wizard-progress-bar"
              style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
            />
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`wizard-step-item ${currentStep === step ? 'active' : currentStep > step ? 'completed' : ''}`}
              >
                {currentStep > step ? '✓' : step}
              </div>
            ))}
          </div>
        )}

        {/* STEP 1: CARE TYPE & SPECIALTY */}
        {currentStep === 1 && (
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--text-main)' }}>
              Step 1: Select Consultation Mode & Specialty
            </h3>

            {/* Care Mode Selector (In-Person vs Telehealth) */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.75rem' }}>
              <div
                onClick={() => setCareType('In-Person')}
                style={{
                  border: '2px solid',
                  borderColor: careType === 'In-Person' ? 'var(--primary-cyan)' : 'var(--border-light)',
                  background: careType === 'In-Person' ? 'rgba(2, 132, 199, 0.05)' : 'white',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: careType === 'In-Person' ? 'var(--primary-cyan)' : 'var(--bg-subtle)',
                  color: careType === 'In-Person' ? 'white' : 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '0.95rem' }}>In-Person Hospital Visit</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Main Medical Campus Suite</div>
                </div>
              </div>

              <div
                onClick={() => setCareType('Virtual Telehealth')}
                style={{
                  border: '2px solid',
                  borderColor: careType === 'Virtual Telehealth' ? 'var(--accent-teal)' : 'var(--border-light)',
                  background: careType === 'Virtual Telehealth' ? 'rgba(13, 148, 136, 0.05)' : 'white',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: careType === 'Virtual Telehealth' ? 'var(--accent-teal)' : 'var(--bg-subtle)',
                  color: careType === 'Virtual Telehealth' ? 'white' : 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Video size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '0.95rem' }}>Virtual Telehealth Video</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Secure HD Encrypted Video Call</div>
                </div>
              </div>
            </div>

            {/* Specialty Selection Grid */}
            <div style={{ marginBottom: '1.75rem' }}>
              <label style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--text-main)', display: 'block', marginBottom: '0.75rem' }}>
                Medical Department / Specialty
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.75rem' }}>
                {SPECIALTIES.map((spec) => (
                  <button
                    key={spec.id}
                    onClick={() => setSelectedSpecialty(spec.id)}
                    style={{
                      padding: '0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1.5px solid',
                      borderColor: selectedSpecialty === spec.id ? 'var(--primary-cyan)' : 'var(--border-light)',
                      background: selectedSpecialty === spec.id ? 'var(--primary-cyan-light)' : 'white',
                      color: selectedSpecialty === spec.id ? 'var(--primary-cyan)' : 'var(--text-main)',
                      fontWeight: selectedSpecialty === spec.id ? '700' : '500',
                      textAlign: 'left',
                      fontSize: '0.875rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <span>{spec.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: DOCTOR SELECTION */}
        {currentStep === 2 && (
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--text-main)' }}>
              Step 2: Choose Specialist Faculty ({specialtyInfo.title})
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.75rem' }}>
              {availableDoctors.map((doc) => {
                const isSelected = doc.id === selectedDoctorId;
                return (
                  <div
                    key={doc.id}
                    onClick={() => setSelectedDoctorId(doc.id)}
                    style={{
                      padding: '1.25rem',
                      borderRadius: 'var(--radius-md)',
                      border: '2px solid',
                      borderColor: isSelected ? 'var(--primary-cyan)' : 'var(--border-light)',
                      background: isSelected ? 'rgba(2, 132, 199, 0.04)' : 'white',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.2s'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <img
                        src={doc.avatar}
                        alt={doc.name}
                        style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }}
                      />
                      <div>
                        <div style={{ fontWeight: '700', fontSize: '1rem', color: 'var(--text-main)' }}>
                          {doc.name}
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                          {doc.title} • {doc.experienceYears} Yrs Exp.
                        </div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--accent-emerald)', fontWeight: '600', marginTop: '2px' }}>
                          Next Slot: {doc.nextAvailableSlot}
                        </div>
                      </div>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--primary-cyan)' }}>
                        {doc.consultationFee}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        ★ {doc.rating} Score
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 3: DATE & TIME SLOT */}
        {currentStep === 3 && (
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--text-main)' }}>
              Step 3: Pick Date & Time Slot
            </h3>

            {/* Date Selector */}
            <div style={{ marginBottom: '1.75rem' }}>
              <label style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--text-main)', display: 'block', marginBottom: '0.5rem' }}>
                Select Appointment Date
              </label>
              <input
                type="date"
                value={selectedDate}
                min="2026-09-03"
                max="2026-09-30"
                onChange={(e) => setSelectedDate(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-light)',
                  fontSize: '0.95rem',
                  fontFamily: 'inherit'
                }}
              />
            </div>

            {/* Available Time Slots */}
            <div style={{ marginBottom: '1.75rem' }}>
              <label style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--text-main)', display: 'block', marginBottom: '0.75rem' }}>
                Available Time Slots for Dr. {selectedDoctor.name.split(',')[0]} ({selectedDate})
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
                {timeSlots.map((slot, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedTimeSlot(slot.time)}
                    style={{
                      padding: '0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1.5px solid',
                      borderColor: selectedTimeSlot === slot.time ? 'var(--primary-cyan)' : 'var(--border-light)',
                      background: selectedTimeSlot === slot.time ? 'var(--primary-cyan)' : 'white',
                      color: selectedTimeSlot === slot.time ? 'white' : 'var(--text-main)',
                      fontWeight: '700',
                      cursor: 'pointer',
                      textAlign: 'center'
                    }}
                  >
                    <Clock size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    {slot.time}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: PATIENT DETAILS */}
        {currentStep === 4 && (
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--text-main)' }}>
              Step 4: Patient Information & Symptoms
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: '700', display: 'block', marginBottom: '0.3rem' }}>
                  Full Legal Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="e.g. Sarah Jenkins"
                  value={patientData.fullName}
                  onChange={handleInputChange}
                  style={{ width: '100%', padding: '0.65rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}
                  required
                />
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: '700', display: 'block', marginBottom: '0.3rem' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="sarah@example.com"
                  value={patientData.email}
                  onChange={handleInputChange}
                  style={{ width: '100%', padding: '0.65rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}
                  required
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: '700', display: 'block', marginBottom: '0.3rem' }}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+1 (555) 234-5678"
                  value={patientData.phone}
                  onChange={handleInputChange}
                  style={{ width: '100%', padding: '0.65rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: '700', display: 'block', marginBottom: '0.3rem' }}>
                  Insurance Carrier
                </label>
                <select
                  name="insuranceProvider"
                  value={patientData.insuranceProvider}
                  onChange={handleInputChange}
                  style={{ width: '100%', padding: '0.65rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}
                >
                  <option value="BlueCross BlueShield">BlueCross BlueShield</option>
                  <option value="Aetna Health">Aetna Health</option>
                  <option value="Cigna Healthcare">Cigna Healthcare</option>
                  <option value="UnitedHealthcare">UnitedHealthcare</option>
                  <option value="Medicare / Self-Pay">Medicare / Self-Pay</option>
                </select>
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ fontSize: '0.8rem', fontWeight: '700', display: 'block', marginBottom: '0.3rem' }}>
                Primary Symptoms / Reason for Visit
              </label>
              <textarea
                name="reasonForVisit"
                rows="3"
                placeholder="Briefly describe any current symptoms, pain levels, or relevant medical history..."
                value={patientData.reasonForVisit}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '0.65rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', fontFamily: 'inherit' }}
              />
            </div>
          </div>
        )}

        {/* STEP 5: INSTANT CONFIRMATION & DIGITAL APPOINTMENT PASS */}
        {currentStep === 5 && appointmentPass && (
          <div className="printable-pass" style={{ textAlign: 'center' }}>
            <div style={{
              background: 'linear-gradient(135deg, #0284c7 0%, #0d9488 100%)',
              color: 'white',
              padding: '1.25rem',
              borderRadius: 'var(--radius-md) var(--radius-md) 0 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '700' }}>
                <CheckCircle2 size={24} />
                <span>CONFIRMED APPOINTMENT PASS</span>
              </div>
              <span style={{ fontSize: '0.85rem', background: 'rgba(255,255,255,0.2)', padding: '2px 10px', borderRadius: '12px' }}>
                ID: {appointmentPass.passId}
              </span>
            </div>

            <div style={{
              border: '2px dashed var(--primary-cyan)',
              borderTop: 'none',
              borderRadius: '0 0 var(--radius-md) var(--radius-md)',
              padding: '2rem',
              background: '#ffffff',
              textAlign: 'left'
            }}>
              <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', marginBottom: '1.5rem' }}>
                {/* QR Code Graphic */}
                <img
                  src={appointmentPass.qrCodeUrl}
                  alt="Appointment QR Code"
                  style={{ width: '110px', height: '110px', borderRadius: '8px', border: '1px solid #e2e8f0' }}
                />
                <div>
                  <div style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-main)' }}>
                    {appointmentPass.patientName}
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--primary-cyan)', fontWeight: '700' }}>
                    {appointmentPass.doctorName} ({appointmentPass.specialty})
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                    📅 {appointmentPass.date} at {appointmentPass.time} ({appointmentPass.careType})
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginTop: '2px' }}>
                    📍 Location: {appointmentPass.location}
                  </div>
                </div>
              </div>

              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', background: 'var(--bg-subtle)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem' }}>
                💡 Please arrive 15 minutes before your slot time. Scan this QR code at our Express Reception Kiosk for priority check-in.
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <button
                  onClick={() => window.print()}
                  className="btn-secondary"
                  style={{ flex: 1, padding: '0.7rem' }}
                >
                  <Printer size={16} /> Print Appointment Pass
                </button>
                <button
                  onClick={onClose}
                  className="btn-primary"
                  style={{ flex: 1, padding: '0.7rem' }}
                >
                  Done & Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Wizard Controls Footer */}
        {currentStep < 5 && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--border-light)',
            marginTop: '1.5rem'
          }}>
            {currentStep > 1 ? (
              <button onClick={handlePrevStep} className="btn-secondary" style={{ padding: '0.6rem 1.25rem' }}>
                <ArrowLeft size={16} /> Back
              </button>
            ) : <div />}

            <button onClick={handleNextStep} className="btn-primary" style={{ padding: '0.65rem 1.75rem' }}>
              <span>{currentStep === 4 ? 'Confirm Booking' : 'Continue Step'}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
