import React from 'react';
import { 
  Video, 
  PhoneOff, 
  Mic, 
  Sparkles, 
  Clock, 
  Radio, 
  Stethoscope
} from 'lucide-react';
import { IncomingCall } from '../types';

interface IncomingCallCardProps {
  call: IncomingCall;
  onJoinCall: () => void;
  onDismiss: () => void;
}

export const IncomingCallCard: React.FC<IncomingCallCardProps> = ({
  call,
  onJoinCall,
  onDismiss,
}) => {
  return (
    <div 
      id="incoming-consultation-banner"
      className="bg-gradient-to-r from-[#319795] to-[#4FD1C5] rounded-3xl p-5 sm:p-6 text-white shadow-lg relative overflow-hidden shrink-0 transition-all"
    >
      {/* High Density Theme Decorative Circle */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-white/5 rounded-full -mb-10 pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
        {/* Left doctor info & live status */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-5 flex-1">
          {/* Doctor Avatar with High-Density Red Pulsing Status Ring */}
          <div className="relative shrink-0">
            <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden border-2 border-white/30 shadow-md">
              <img
                src={call.doctorAvatar}
                alt={call.doctorName}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Red Pulse Badge matching Design HTML */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-white rounded-full animate-pulse shadow-xs" />
          </div>

          {/* Consultation Details */}
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-xs sm:text-sm opacity-90 font-medium uppercase tracking-wider">
                Live Consultation
              </p>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-white/20 px-2 py-0.5 rounded-md backdrop-blur-xs">
                <Radio className="w-3 h-3 text-white" />
                Room {call.roomCode}
              </span>
              <span className="text-[11px] opacity-85 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {call.durationEstimate}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
              {call.doctorName} is waiting
            </h2>

            <p className="text-xs sm:text-sm opacity-85 flex items-center gap-1.5">
              <Stethoscope className="w-3.5 h-3.5" />
              {call.specialty} • {call.scheduledTime} ({call.clinic})
            </p>

            <div className="flex items-center gap-2 text-xs bg-black/10 backdrop-blur-xs rounded-xl px-3 py-1 mt-1.5 w-fit border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-white/80 shrink-0" />
              <span className="font-semibold opacity-90">Topic:</span>
              <span className="truncate max-w-xs sm:max-w-md opacity-90">{call.topic}</span>
            </div>
          </div>
        </div>

        {/* Right CTA action buttons */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full lg:w-auto shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-white/20">
          {/* Join Call Main Button matching Design HTML */}
          <button
            onClick={onJoinCall}
            id="join-video-call-main-btn"
            className="bg-white text-[#319795] font-bold py-3 px-6 sm:px-8 rounded-2xl hover:bg-opacity-95 transition-all flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl hover:scale-101 active:scale-98 cursor-pointer flex-1 sm:flex-initial"
          >
            <Video className="w-5 h-5 text-[#319795]" />
            <span>Join Video Call</span>
          </button>

          {/* Quick Pre-Check Audio/Cam test */}
          <button
            onClick={onJoinCall}
            id="precheck-audio-video-btn"
            title="Pre-check Camera & Audio"
            className="p-3 sm:px-4 sm:py-3 rounded-2xl bg-white/20 hover:bg-white/30 text-white transition-colors flex items-center justify-center text-xs font-semibold gap-1.5 cursor-pointer backdrop-blur-xs"
          >
            <Mic className="w-4 h-4 text-white" />
            <span className="hidden sm:inline">Pre-Check</span>
          </button>

          {/* Dismiss/Reschedule */}
          <button
            onClick={onDismiss}
            id="dismiss-consultation-btn"
            title="Decline or Reschedule"
            className="p-3 rounded-2xl bg-white/10 hover:bg-white/25 text-white/80 hover:text-white transition-colors flex items-center justify-center cursor-pointer"
          >
            <PhoneOff className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
