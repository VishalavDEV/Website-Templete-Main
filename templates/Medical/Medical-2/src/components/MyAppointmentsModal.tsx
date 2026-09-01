import React, { useState, useEffect } from 'react';
import { Appointment } from '../types';
import { storageService } from '../services/storageService';
import { 
  X, Calendar, Clock, MapPin, Video, User, AlertCircle, 
  CheckCircle2, RefreshCw, XCircle, FileText, Download, Filter 
} from 'lucide-react';

interface MyAppointmentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookNew: () => void;
}

export const MyAppointmentsModal: React.FC<MyAppointmentsModalProps> = ({
  isOpen,
  onClose,
  onBookNew,
}) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [filter, setFilter] = useState<'All' | 'Upcoming' | 'Completed' | 'Cancelled'>('All');
  
  // Reschedule state
  const [reschedulingAppt, setReschedulingAppt] = useState<Appointment | null>(null);
  const [newDate, setNewDate] = useState<string>('');
  const [newTime, setNewTime] = useState<string>('');

  // Cancel state
  const [cancellingAppt, setCancellingAppt] = useState<Appointment | null>(null);
  const [cancelReason, setCancelReason] = useState<string>('Schedule conflict');

  // Load appointments
  const refreshAppointments = () => {
    setAppointments(storageService.getAppointments());
  };

  useEffect(() => {
    if (isOpen) {
      refreshAppointments();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredAppointments = appointments.filter((a) => {
    if (filter === 'All') return true;
    return a.status === filter;
  });

  const handleConfirmReschedule = () => {
    if (!reschedulingAppt || !newDate || !newTime) return;
    storageService.rescheduleAppointment(reschedulingAppt.id, newDate, newTime);
    setReschedulingAppt(null);
    setNewDate('');
    setNewTime('');
    refreshAppointments();
  };

  const handleConfirmCancel = () => {
    if (!cancellingAppt) return;
    storageService.cancelAppointment(cancellingAppt.id, cancelReason);
    setCancellingAppt(null);
    refreshAppointments();
  };

  return (
    <div
      id="my-appointments-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-900 to-slate-900 text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-teal-300">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Patient Appointment Portal</h3>
              <p className="text-xs text-teal-200">Manage, reschedule, or cancel your booked clinical visits</p>
            </div>
          </div>

          <button
            id="close-my-appointments-btn"
            onClick={onClose}
            className="text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            {(['All', 'Upcoming', 'Completed', 'Cancelled'] as const).map((tab) => (
              <button
                key={tab}
                id={`filter-tab-${tab.toLowerCase()}`}
                onClick={() => setFilter(tab)}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition ${
                  filter === tab
                    ? 'bg-teal-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {tab} ({appointments.filter((a) => tab === 'All' || a.status === tab).length})
              </button>
            ))}
          </div>

          <button
            id="book-new-from-portal-btn"
            onClick={() => {
              onClose();
              onBookNew();
            }}
            className="text-xs font-bold text-teal-700 hover:text-teal-900 hover:underline flex items-center gap-1"
          >
            + Book New Appointment
          </button>
        </div>

        {/* Body List */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {filteredAppointments.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                <Calendar className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-slate-700">No {filter !== 'All' ? filter.toLowerCase() : ''} appointments found</h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                You haven't scheduled any consultations in this category yet.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onBookNew();
                }}
                className="px-4 py-2 bg-teal-600 text-white font-bold text-xs rounded-xl shadow-sm hover:bg-teal-700 transition inline-block mt-2"
              >
                Book Your First Visit
              </button>
            </div>
          ) : (
            filteredAppointments.map((appt) => (
              <div
                key={appt.id}
                id={`appointment-card-${appt.id}`}
                className="p-5 rounded-2xl border border-slate-200 hover:border-teal-300 bg-white transition shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-4 flex-1">
                  <img
                    src={appt.doctorAvatar || 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80'}
                    alt={appt.doctorName}
                    referrerPolicy="no-referrer"
                    className="w-14 h-14 rounded-xl object-cover border border-slate-200 shrink-0"
                  />
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-mono font-bold text-slate-400">{appt.appointmentCode}</span>
                      <span
                        className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                          appt.status === 'Upcoming'
                            ? 'bg-teal-100 text-teal-800'
                            : appt.status === 'Completed'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-rose-100 text-rose-800'
                        }`}
                      >
                        {appt.status}
                      </span>
                    </div>

                    <h4 className="font-bold text-slate-900 text-base">{appt.doctorName}</h4>
                    <p className="text-xs text-teal-700 font-medium">
                      {appt.departmentName} • {appt.doctorSpecialty}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-slate-600">
                      <div className="flex items-center gap-1 font-semibold text-slate-900">
                        <Calendar className="w-3.5 h-3.5 text-teal-600" />
                        <span>{appt.date}</span>
                      </div>
                      <div className="flex items-center gap-1 font-semibold text-slate-900">
                        <Clock className="w-3.5 h-3.5 text-teal-600" />
                        <span>{appt.timeSlot}</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-500">
                        {appt.visitType === 'Telehealth Video Call' ? <Video className="w-3.5 h-3.5 text-teal-600" /> : <MapPin className="w-3.5 h-3.5 text-teal-600" />}
                        <span>{appt.visitType}</span>
                      </div>
                    </div>

                    {appt.cancellationReason && (
                      <p className="text-[11px] text-rose-600 bg-rose-50 p-1.5 rounded-md mt-1">
                        Cancelled: {appt.cancellationReason}
                      </p>
                    )}
                  </div>
                </div>

                {/* Actions */}
                {appt.status === 'Upcoming' && (
                  <div className="flex items-center gap-2 self-end md:self-center shrink-0">
                    <button
                      id={`reschedule-btn-${appt.id}`}
                      onClick={() => {
                        setReschedulingAppt(appt);
                        setNewDate(appt.date);
                        setNewTime(appt.timeSlot);
                      }}
                      className="px-3 py-1.5 bg-teal-50 hover:bg-teal-100 text-teal-700 border border-teal-200 text-xs font-semibold rounded-lg transition flex items-center gap-1"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      Reschedule
                    </button>
                    <button
                      id={`cancel-btn-${appt.id}`}
                      onClick={() => setCancellingAppt(appt)}
                      className="px-3 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs font-semibold rounded-lg transition flex items-center gap-1"
                    >
                      <XCircle className="w-3.5 h-3.5" />
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Reschedule Interactive Modal Overlay */}
        {reschedulingAppt && (
          <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm z-30 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border border-slate-200 space-y-4">
              <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-teal-600" />
                Reschedule Appointment
              </h4>
              <p className="text-xs text-slate-500">
                Updating appointment with <strong className="text-slate-800">{reschedulingAppt.doctorName}</strong>.
              </p>

              <div className="space-y-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">New Date</label>
                  <input
                    type="date"
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">New Time Slot</label>
                  <select
                    value={newTime}
                    onChange={(e) => setNewTime(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-none bg-white"
                  >
                    <option value="08:30 AM">08:30 AM</option>
                    <option value="09:30 AM">09:30 AM</option>
                    <option value="10:30 AM">10:30 AM</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="02:00 PM">02:00 PM</option>
                    <option value="03:30 PM">03:30 PM</option>
                    <option value="04:30 PM">04:30 PM</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  onClick={() => setReschedulingAppt(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition"
                >
                  Dismiss
                </button>
                <button
                  id="confirm-reschedule-btn"
                  onClick={handleConfirmReschedule}
                  className="px-4 py-2 text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 rounded-lg shadow-sm transition"
                >
                  Save New Time
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Cancel Interactive Modal Overlay */}
        {cancellingAppt && (
          <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm z-30 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border border-slate-200 space-y-4">
              <h4 className="font-bold text-rose-900 text-base flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600" />
                Cancel Appointment Confirmation
              </h4>
              <p className="text-xs text-slate-600">
                Are you sure you want to cancel your consultation with <strong className="text-slate-800">{cancellingAppt.doctorName}</strong> on {cancellingAppt.date}?
              </p>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Reason for cancellation</label>
                <select
                  value={cancelReason}
                  onChange={(e) => setCancelReason(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:outline-none bg-white"
                >
                  <option value="Schedule conflict">Schedule conflict</option>
                  <option value="Feeling better / Symptoms resolved">Feeling better / Symptoms resolved</option>
                  <option value="Need different specialist">Need different specialist</option>
                  <option value="Transportation difficulty">Transportation difficulty</option>
                  <option value="Other personal reason">Other personal reason</option>
                </select>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  onClick={() => setCancellingAppt(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition"
                >
                  Keep Appointment
                </button>
                <button
                  id="confirm-cancel-btn"
                  onClick={handleConfirmCancel}
                  className="px-4 py-2 text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 rounded-lg shadow-sm transition"
                >
                  Confirm Cancellation
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
