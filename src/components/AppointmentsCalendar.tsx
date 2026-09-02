import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  Video, 
  MapPin, 
  Plus, 
  ChevronLeft, 
  ChevronRight, 
  CalendarCheck 
} from 'lucide-react';
import { Appointment } from '../types';

interface AppointmentsCalendarProps {
  appointments: Appointment[];
  onOpenBookModal: () => void;
  onJoinAppointment: (appointment: Appointment) => void;
  onCancelAppointment: (id: string) => void;
}

export const AppointmentsCalendar: React.FC<AppointmentsCalendarProps> = ({
  appointments,
  onOpenBookModal,
  onJoinAppointment,
  onCancelAppointment,
}) => {
  const [selectedDay, setSelectedDay] = useState<number>(1);

  const calendarDays = [
    { day: 31, isCurrentMonth: false },
    { day: 1, isCurrentMonth: true, hasAppt: true, isToday: true },
    { day: 2, isCurrentMonth: true },
    { day: 3, isCurrentMonth: true },
    { day: 4, isCurrentMonth: true, hasAppt: true },
    { day: 5, isCurrentMonth: true },
    { day: 6, isCurrentMonth: true },
    { day: 7, isCurrentMonth: true },
    { day: 8, isCurrentMonth: true, hasAppt: true },
    { day: 9, isCurrentMonth: true },
    { day: 10, isCurrentMonth: true },
    { day: 11, isCurrentMonth: true },
    { day: 12, isCurrentMonth: true },
    { day: 13, isCurrentMonth: true },
    { day: 14, isCurrentMonth: true },
    { day: 15, isCurrentMonth: true },
    { day: 16, isCurrentMonth: true },
    { day: 17, isCurrentMonth: true },
    { day: 18, isCurrentMonth: true },
    { day: 19, isCurrentMonth: true, hasAppt: true },
    { day: 20, isCurrentMonth: true },
  ];

  return (
    <div 
      id="upcoming-appointments-calendar-card"
      className="bg-white rounded-3xl border border-slate-100 p-5 sm:p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col h-full"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center">
            <CalendarIcon className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-slate-900 text-base font-['Outfit']">Upcoming Consultations</h3>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-sky-100 text-sky-800">
                {appointments.length} Scheduled
              </span>
            </div>
            <p className="text-xs text-slate-500">Virtual video telehealth & in-clinic visits</p>
          </div>
        </div>

        <button
          onClick={onOpenBookModal}
          id="book-new-appointment-btn"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-teal-800 bg-teal-50 hover:bg-teal-100 border border-teal-200/80 transition-all cursor-pointer shadow-xs active:scale-98 self-start sm:self-auto"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>New Visit</span>
        </button>
      </div>

      {/* Mini Month Strip Calendar */}
      <div className="my-4 p-3 rounded-2xl bg-slate-50 border border-slate-100">
        <div className="flex items-center justify-between mb-2 px-1 text-xs">
          <span className="font-bold text-slate-800">September 2026</span>
          <div className="flex items-center gap-1 text-slate-400">
            <button className="p-1 hover:text-slate-700 cursor-pointer"><ChevronLeft className="w-3.5 h-3.5" /></button>
            <button className="p-1 hover:text-slate-700 cursor-pointer"><ChevronRight className="w-3.5 h-3.5" /></button>
          </div>
        </div>

        {/* Days Grid */}
        <div className="grid grid-cols-7 gap-1 text-center text-xs">
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
            <span key={i} className="text-[10px] font-bold text-slate-400 py-0.5">{d}</span>
          ))}
          {calendarDays.slice(0, 14).map((d, i) => (
            <button
              key={i}
              onClick={() => setSelectedDay(d.day)}
              className={`py-1.5 rounded-xl flex flex-col items-center justify-center relative transition-all cursor-pointer ${
                d.day === selectedDay
                  ? 'bg-teal-600 text-white font-bold shadow-xs'
                  : d.isToday
                  ? 'bg-teal-100 text-teal-900 font-bold'
                  : d.isCurrentMonth
                  ? 'text-slate-700 hover:bg-slate-200/60 font-medium'
                  : 'text-slate-300'
              }`}
            >
              <span>{d.day}</span>
              {d.hasAppt && (
                <span className={`w-1.5 h-1.5 rounded-full mt-0.5 ${d.day === selectedDay ? 'bg-white' : 'bg-teal-500'}`} />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Appointments List */}
      <div className="space-y-3 flex-1 overflow-y-auto pr-0.5 max-h-[340px]">
        {appointments.map((apt) => (
          <div
            key={apt.id}
            className={`p-3.5 rounded-2xl border transition-all ${
              apt.status === 'in_progress'
                ? 'bg-gradient-to-r from-teal-50/60 to-cyan-50/60 border-teal-200 shadow-xs'
                : 'bg-white hover:bg-slate-50/80 border-slate-200/80'
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              {/* Doctor Avatar */}
              <div className="relative shrink-0">
                <img
                  src={apt.doctorAvatar}
                  alt={apt.doctorName}
                  className="w-11 h-11 rounded-xl object-cover ring-2 ring-slate-100"
                />
                <span className={`absolute -bottom-1 -right-1 p-0.5 rounded-md text-white ${
                  apt.type === 'video' ? 'bg-teal-500' : 'bg-sky-500'
                }`}>
                  {apt.type === 'video' ? <Video className="w-2.5 h-2.5" /> : <MapPin className="w-2.5 h-2.5" />}
                </span>
              </div>

              {/* Consultation Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-xs font-bold text-slate-900 truncate">{apt.doctorName}</h4>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    apt.status === 'in_progress'
                      ? 'bg-teal-500 text-white animate-pulse'
                      : 'bg-sky-100 text-sky-800'
                  }`}>
                    {apt.status === 'in_progress' ? 'LIVE NOW' : 'Confirmed'}
                  </span>
                </div>

                <p className="text-[11px] font-semibold text-teal-700">{apt.doctorSpecialty}</p>

                <div className="mt-1.5 flex items-center gap-3 text-[10px] text-slate-500 flex-wrap">
                  <span className="flex items-center gap-1 font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md">
                    <CalendarCheck className="w-3 h-3 text-teal-600" />
                    {apt.date} • {apt.time}
                  </span>
                </div>

                <p className="text-[11px] text-slate-500 mt-1.5 italic line-clamp-1">
                  "{apt.reason}"
                </p>
              </div>
            </div>

            {/* Actions for this appointment */}
            <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between gap-2">
              <span className="text-[10px] text-slate-400">
                {apt.type === 'video' ? 'Virtual WebRTC Telehealth' : 'In-Person Clinic Visit'}
              </span>

              <div className="flex items-center gap-2">
                {apt.type === 'video' && (
                  <button
                    onClick={() => onJoinAppointment(apt)}
                    id={`join-apt-${apt.id}-btn`}
                    className="px-3 py-1 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-lg text-xs flex items-center gap-1 transition-colors cursor-pointer shadow-xs"
                  >
                    <Video className="w-3 h-3" />
                    Join
                  </button>
                )}
                <button
                  onClick={() => onCancelAppointment(apt.id)}
                  className="text-slate-400 hover:text-rose-600 text-xs px-2 py-1 transition-colors cursor-pointer"
                  title="Cancel appointment"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ))}

        {appointments.length === 0 && (
          <div className="p-8 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            <CalendarIcon className="w-8 h-8 text-slate-400 mx-auto mb-2 opacity-50" />
            <p className="text-xs font-semibold text-slate-600">No scheduled consultations.</p>
          </div>
        )}
      </div>
    </div>
  );
};
