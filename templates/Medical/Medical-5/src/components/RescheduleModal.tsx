import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { mockApi } from '../services/mockApi';
import { X, Calendar, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

export const RescheduleModal: React.FC = () => {
  const {
    rescheduleAppointmentData,
    closeReschedule,
    refreshAppointments,
    showToast,
  } = useApp();

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('10:30 AM');
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    if (rescheduleAppointmentData) {
      // Default to 2 days ahead
      const nextDate = new Date();
      nextDate.setDate(nextDate.getDate() + 2);
      setSelectedDate(nextDate.toISOString().split('T')[0]);
      setSelectedTime(rescheduleAppointmentData.time || '10:30 AM');
    }
  }, [rescheduleAppointmentData]);

  if (!rescheduleAppointmentData) return null;

  const apt = rescheduleAppointmentData;

  const handleConfirmReschedule = async () => {
    if (!selectedDate || !selectedTime) {
      showToast('Please pick a date and time slot', 'error');
      return;
    }

    setIsUpdating(true);
    try {
      const res = await mockApi.rescheduleAppointment(apt.id, selectedDate, selectedTime);
      if (res) {
        await refreshAppointments();
        showToast(`Appointment rescheduled to ${selectedDate} at ${selectedTime}`, 'success');
        closeReschedule();
      }
    } catch {
      showToast('Failed to reschedule appointment.', 'error');
    } finally {
      setIsUpdating(false);
    }
  };

  const timeSlots = [
    '09:00 AM',
    '10:00 AM',
    '10:30 AM',
    '11:30 AM',
    '01:30 PM',
    '02:30 PM',
    '03:45 PM',
    '04:30 PM',
  ];

  return (
    <div
      id="reschedule-modal-overlay"
      className="fixed inset-0 z-50 bg-[#3E3445]/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={closeReschedule}
    >
      <div
        className="w-full max-w-lg bg-[#FFFDFC] rounded-3xl shadow-[0_30px_70px_rgba(90,70,110,0.22)] border border-[#3E3445]/10 overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#3E3445]/8 bg-[#F9F7FB] flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#8B6FAE]">
              Manage Booking #{apt.id}
            </span>
            <h3 className="font-serif text-xl font-bold text-[#3E3445]">
              Reschedule Consultation
            </h3>
          </div>
          <button
            id="close-reschedule-modal-btn"
            onClick={closeReschedule}
            className="p-2 text-[#756B7C] hover:text-[#3E3445] hover:bg-[#E8DDF2]/50 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          <div className="p-4 rounded-2xl bg-[#F9F7FB] border border-[#3E3445]/6 flex items-center gap-3">
            <img
              src={apt.doctorImage}
              alt={apt.doctorName}
              className="w-12 h-12 rounded-xl object-cover"
            />
            <div>
              <div className="text-sm font-bold text-[#3E3445]">{apt.doctorName}</div>
              <div className="text-xs text-[#8B6FAE]">{apt.doctorSpecialty}</div>
              <div className="text-xs text-[#756B7C]">
                Current: {apt.date} at {apt.time}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#3E3445] uppercase tracking-wider mb-2">
              Select New Date
            </label>
            <input
              id="reschedule-date-input"
              type="date"
              value={selectedDate}
              min={new Date().toISOString().split('T')[0]}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full px-4 py-2.5 bg-[#F9F7FB] border border-[#3E3445]/10 rounded-2xl text-xs font-semibold text-[#3E3445] focus:outline-none focus:border-[#8B6FAE]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#3E3445] uppercase tracking-wider mb-2">
              Select New Time Slot
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {timeSlots.map((slot) => {
                const isSelected = selectedTime === slot;
                return (
                  <button
                    key={slot}
                    id={`reschedule-time-${slot.replace(/\s+/g, '-').toLowerCase()}`}
                    onClick={() => setSelectedTime(slot)}
                    className={`py-2 px-2.5 rounded-xl border text-xs font-semibold transition-all ${
                      isSelected
                        ? 'bg-[#8B6FAE] text-white border-[#8B6FAE] shadow-xs'
                        : 'bg-white hover:bg-[#F9F7FB] border-[#3E3445]/10 text-[#3E3445]'
                    }`}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-[#3E3445]/8 bg-[#F9F7FB] flex items-center justify-end gap-3">
          <button
            id="cancel-reschedule-action-btn"
            onClick={closeReschedule}
            className="px-5 py-2.5 text-xs font-semibold text-[#756B7C] hover:text-[#3E3445] rounded-xl hover:bg-white transition-colors"
          >
            Cancel
          </button>

          <button
            id="confirm-reschedule-btn"
            onClick={handleConfirmReschedule}
            disabled={isUpdating}
            className="px-6 py-2.5 bg-[#8B6FAE] hover:bg-[#665080] text-white text-xs font-semibold rounded-full shadow-xs transition-all flex items-center gap-2 disabled:opacity-50"
          >
            {isUpdating ? 'Saving...' : 'Confirm New Schedule'}
          </button>
        </div>
      </div>
    </div>
  );
};
