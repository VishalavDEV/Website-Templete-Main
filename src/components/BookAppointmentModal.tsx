import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Video, 
  MapPin, 
  X, 
  Check, 
  Star, 
  Stethoscope, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { Doctor, Appointment } from '../types';

interface BookAppointmentModalProps {
  doctors: Doctor[];
  selectedDoctor?: Doctor | null;
  onClose: () => void;
  onConfirmBooking: (appointmentData: Partial<Appointment>) => void;
}

export const BookAppointmentModal: React.FC<BookAppointmentModalProps> = ({
  doctors,
  selectedDoctor: initialDoctor,
  onClose,
  onConfirmBooking,
}) => {
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>(
    initialDoctor ? initialDoctor.id : doctors[0]?.id || ''
  );
  const [date, setDate] = useState('2026-09-03');
  const [timeSlot, setTimeSlot] = useState('11:00 AM EST');
  const [visitType, setVisitType] = useState<'video' | 'in_person'>('video');
  const [reason, setReason] = useState('');

  const currentDoctor = doctors.find(d => d.id === selectedDoctorId) || doctors[0];

  const availableSlots = [
    '09:00 AM EST',
    '10:30 AM EST',
    '11:00 AM EST',
    '02:15 PM EST',
    '03:45 PM EST',
    '05:00 PM EST',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentDoctor) return;

    onConfirmBooking({
      doctorId: currentDoctor.id,
      doctorName: currentDoctor.name,
      doctorSpecialty: currentDoctor.specialty,
      doctorAvatar: currentDoctor.avatarUrl,
      date: `Sep ${new Date(date).getDate() + 1}`,
      time: timeSlot,
      type: visitType,
      status: 'upcoming',
      reason: reason.trim() || 'General follow-up and prescription review',
      roomLink: `TELE-ROOM-${Math.floor(1000 + Math.random() * 9000)}`,
    });
    onClose();
  };

  return (
    <div 
      id="book-appointment-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-xs p-4"
    >
      <div className="bg-white max-w-lg w-full rounded-3xl p-6 shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-150 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center">
            <CalendarIcon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 font-['Outfit']">Book Telehealth Consultation</h3>
            <p className="text-xs text-slate-500">Select doctor, date, and appointment format</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Doctor Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-2">Select Specialist</label>
            <div className="space-y-2 max-h-44 overflow-y-auto pr-1">
              {doctors.map(doc => (
                <div
                  key={doc.id}
                  onClick={() => setSelectedDoctorId(doc.id)}
                  className={`p-3 rounded-2xl border flex items-center justify-between gap-3 cursor-pointer transition-all ${
                    selectedDoctorId === doc.id
                      ? 'bg-teal-50/70 border-teal-400 ring-2 ring-teal-400/20'
                      : 'bg-white hover:bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={doc.avatarUrl}
                      alt={doc.name}
                      className="w-10 h-10 rounded-xl object-cover"
                    />
                    <div>
                      <h5 className="text-xs font-bold text-slate-900">{doc.name}</h5>
                      <p className="text-[11px] text-teal-700 font-medium">{doc.specialty}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-bold text-slate-800">{doc.consultationFee}</span>
                    <div className="flex items-center gap-1 text-[10px] text-amber-800 font-semibold justify-end">
                      <Star className="w-3 h-3 fill-amber-400 stroke-amber-500" />
                      <span>{doc.rating.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Consultation Type */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-2">Consultation Format</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setVisitType('video')}
                className={`p-3 rounded-2xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  visitType === 'video'
                    ? 'bg-teal-500 text-white border-teal-500 shadow-md shadow-teal-500/20'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                }`}
              >
                <Video className="w-4 h-4" />
                <span>HD Video Telehealth</span>
              </button>

              <button
                type="button"
                onClick={() => setVisitType('in_person')}
                className={`p-3 rounded-2xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  visitType === 'in_person'
                    ? 'bg-teal-500 text-white border-teal-500 shadow-md shadow-teal-500/20'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                }`}
              >
                <MapPin className="w-4 h-4" />
                <span>In-Clinic Visit</span>
              </button>
            </div>
          </div>

          {/* Date & Time Slot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-teal-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Available Slot</label>
              <select
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-teal-500"
              >
                {availableSlots.map(slot => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Reason for Visit */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Reason for Visit / Symptoms</label>
            <textarea
              rows={2}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="e.g. Hypertension telemetry review, medication renewal, chest fluttering..."
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500"
            />
          </div>

          <div className="pt-3 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-2xl text-xs transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-bold rounded-2xl text-xs transition-all shadow-md shadow-teal-500/20 cursor-pointer"
            >
              Confirm Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
