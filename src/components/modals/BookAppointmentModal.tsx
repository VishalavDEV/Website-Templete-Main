import React, { useState } from 'react';
import { 
  X, 
  Calendar as CalendarIcon, 
  Clock, 
  Video, 
  Building, 
  Home, 
  CheckCircle2, 
  ShieldCheck, 
  User, 
  Sparkles 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { HealthcareProfessional, Appointment, FamilyMember } from '../../types';

interface BookAppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  doctor: HealthcareProfessional | null;
  familyMembers: FamilyMember[];
  selectedFamilyId: string;
  onConfirmBooking: (newAppointment: Appointment) => void;
}

export const BookAppointmentModal: React.FC<BookAppointmentModalProps> = ({
  isOpen,
  onClose,
  doctor,
  familyMembers,
  selectedFamilyId,
  onConfirmBooking,
}) => {
  const [selectedType, setSelectedType] = useState<'video' | 'in-person' | 'home'>('video');
  const [selectedDay, setSelectedDay] = useState('Today, Sep 1');
  const [selectedSlot, setSelectedSlot] = useState(doctor?.slots[0] || '10:00 AM');
  const [reason, setReason] = useState('');
  const [patientId, setPatientId] = useState(selectedFamilyId);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen || !doctor) return null;

  const daysOptions = [
    { label: 'Today', date: 'Today, Sep 1' },
    { label: 'Tomorrow', date: 'Tomorrow, Sep 2' },
    { label: 'Wednesday', date: 'Wed, Sep 3' },
    { label: 'Thursday', date: 'Thu, Sep 4' },
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedPatient = familyMembers.find(m => m.id === patientId) || familyMembers[0];

    const newApt: Appointment = {
      id: `apt-${Date.now()}`,
      doctorId: doctor.id,
      doctorName: doctor.name,
      doctorSpecialty: doctor.specialty,
      doctorAvatar: doctor.avatar,
      date: selectedDay,
      time: selectedSlot,
      type: selectedType,
      status: 'upcoming',
      reason: reason || 'Routine wellness review and biomarker checkup',
      meetingLink: selectedType === 'video' ? `https://vitalis.health/room/live-consult-${Math.floor(100 + Math.random() * 900)}` : undefined,
      location: selectedType === 'in-person' ? doctor.hospitalAffiliation : undefined,
      doctorNotes: `Consultation booked for ${selectedPatient.name}. Please join 5 minutes early.`,
    };

    setIsSuccess(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      onConfirmBooking(newApt);
      setIsSuccess(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="p-6 bg-[#2D2A26] text-white relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-[#E5E2D9]/80 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center space-x-4">
            <img 
              src={doctor.avatar} 
              alt={doctor.name} 
              className="w-16 h-16 rounded-2xl object-cover border-2 border-white/30 shadow-md"
            />
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-xl font-bold font-['Outfit',sans-serif] text-white">{doctor.name}</h2>
                <ShieldCheck className="w-5 h-5 text-[#A3B18A]" />
              </div>
              <p className="text-xs text-[#E5E2D9] font-medium mt-0.5">{doctor.title}</p>
              <div className="flex items-center space-x-3 mt-1.5 text-xs text-[#E5E2D9]/80">
                <span>⭐ {doctor.rating} ({doctor.reviewsCount} reviews)</span>
                <span>•</span>
                <span>{doctor.experience} exp</span>
                <span>•</span>
                <span className="font-bold text-white">{doctor.fee} / consult</span>
              </div>
            </div>
          </div>
        </div>

        {isSuccess ? (
          <div className="p-12 text-center space-y-4">
            <div className="w-16 h-16 bg-[#F1F3EE] text-[#5E7153] border border-[#E5E2D9] rounded-full flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-10 h-10 text-[#5E7153]" />
            </div>
            <h3 className="text-xl font-bold text-[#2D2A26] font-['Outfit',sans-serif]">Appointment Confirmed!</h3>
            <p className="text-sm text-[#7A766F] max-w-sm mx-auto">
              Your consultation with <strong>{doctor.name}</strong> has been scheduled for <strong>{selectedDay} at {selectedSlot}</strong>.
            </p>
            <p className="text-xs text-[#5E7153] font-semibold">Calendar invite sent & care team notified.</p>
          </div>
        ) : (
          <form onSubmit={handleBooking} className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
            
            {/* Consultation Type Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#7A766F] mb-2">
                Select Consultation Format
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                <button
                  type="button"
                  onClick={() => setSelectedType('video')}
                  className={`p-3 rounded-2xl border text-left transition-all flex flex-col items-center justify-center text-center cursor-pointer ${
                    selectedType === 'video'
                      ? 'border-[#5E7153] bg-[#F1F3EE] text-[#2D2A26] font-bold shadow-xs'
                      : 'border-[#E5E2D9] hover:border-[#5E7153]/50 text-[#2D2A26] bg-[#F9F8F6]'
                  }`}
                >
                  <Video className="w-5 h-5 text-[#5E7153] mb-1" />
                  <span className="text-xs font-semibold">HD Video Call</span>
                  <span className="text-[10px] text-[#7A766F]">Fastest (from home)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedType('in-person')}
                  className={`p-3 rounded-2xl border text-left transition-all flex flex-col items-center justify-center text-center cursor-pointer ${
                    selectedType === 'in-person'
                      ? 'border-[#5E7153] bg-[#F1F3EE] text-[#2D2A26] font-bold shadow-xs'
                      : 'border-[#E5E2D9] hover:border-[#5E7153]/50 text-[#2D2A26] bg-[#F9F8F6]'
                  }`}
                >
                  <Building className="w-5 h-5 text-[#5E7153] mb-1" />
                  <span className="text-xs font-semibold">Clinic Visit</span>
                  <span className="text-[10px] text-[#7A766F]">Full physical exam</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedType('home')}
                  className={`p-3 rounded-2xl border text-left transition-all flex flex-col items-center justify-center text-center cursor-pointer ${
                    selectedType === 'home'
                      ? 'border-[#5E7153] bg-[#F1F3EE] text-[#2D2A26] font-bold shadow-xs'
                      : 'border-[#E5E2D9] hover:border-[#5E7153]/50 text-[#2D2A26] bg-[#F9F8F6]'
                  }`}
                >
                  <Home className="w-5 h-5 text-[#D4A373] mb-1" />
                  <span className="text-xs font-semibold">Home Visit</span>
                  <span className="text-[10px] text-[#7A766F]">Doctor comes to you</span>
                </button>
              </div>
            </div>

            {/* Patient Profile */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#7A766F] mb-2">
                Booking For Family Member
              </label>
              <div className="flex flex-wrap gap-2">
                {familyMembers.map((member) => (
                  <button
                    key={member.id}
                    type="button"
                    onClick={() => setPatientId(member.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border flex items-center space-x-1.5 transition-all cursor-pointer ${
                      patientId === member.id
                        ? 'border-[#5E7153] bg-[#5E7153] text-white font-bold'
                        : 'border-[#E5E2D9] bg-[#F9F8F6] text-[#2D2A26] hover:bg-[#F1F3EE]'
                    }`}
                  >
                    <User className="w-3.5 h-3.5" />
                    <span>{member.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Date Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#7A766F] mb-2">
                Available Date
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {daysOptions.map((opt) => (
                  <button
                    key={opt.date}
                    type="button"
                    onClick={() => setSelectedDay(opt.date)}
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                      selectedDay === opt.date
                        ? 'border-[#5E7153] bg-[#F1F3EE] text-[#2D2A26]'
                        : 'border-[#E5E2D9] bg-[#F9F8F6] hover:bg-[#F1F3EE] text-[#2D2A26]'
                    }`}
                  >
                    <div className="text-[10px] text-[#7A766F] font-normal">{opt.label}</div>
                    <div>{opt.date.split(',')[1] || opt.date}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Slot Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#7A766F] mb-2 flex items-center justify-between">
                <span>Select Time Slot</span>
                <span className="text-[10px] text-[#5E7153] font-semibold">Pacific Time (PT)</span>
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {doctor.slots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedSlot(slot)}
                    className={`py-2 px-2.5 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                      selectedSlot === slot
                        ? 'border-[#5E7153] bg-[#5E7153] text-white shadow-xs'
                        : 'border-[#E5E2D9] bg-[#F9F8F6] hover:border-[#5E7153]/50 text-[#2D2A26]'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Reason for visit */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#7A766F] mb-1.5">
                Primary Reason / Health Symptoms (Optional)
              </label>
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="e.g., Review recent blood test results, heart palpitations during morning workout, skin rash..."
                rows={2}
                className="w-full p-3 text-xs bg-[#F9F8F6] rounded-xl border border-[#E5E2D9] focus:bg-white focus:border-[#5E7153] outline-none text-[#2D2A26]"
              />
            </div>

            {/* Summary & Guarantee */}
            <div className="p-3.5 bg-[#F9F8F6] rounded-2xl border border-[#E5E2D9] flex items-center justify-between">
              <div className="flex items-center space-x-2 text-xs text-[#7A766F]">
                <Sparkles className="w-4 h-4 text-[#5E7153] shrink-0" />
                <span>Zero cancellation fee up to 2 hours prior.</span>
              </div>
              <div className="text-right">
                <div className="text-[10px] text-[#7A766F]">Total Consultation Fee</div>
                <div className="text-base font-bold text-[#2D2A26]">{doctor.fee}</div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end space-x-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 text-xs font-semibold text-[#7A766F] hover:text-[#2D2A26] rounded-xl hover:bg-[#F1F3EE] cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#5E7153] hover:bg-[#4D5E44] text-white rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                Confirm & Book Consultation
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
