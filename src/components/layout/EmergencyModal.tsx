import React, { useState } from 'react';
import { 
  PhoneCall, 
  AlertTriangle, 
  MapPin, 
  ShieldAlert, 
  X, 
  Heart, 
  Clock, 
  Activity,
  CheckCircle2
} from 'lucide-react';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({ isOpen, onClose }) => {
  const [dispatched, setDispatched] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-rose-100 overflow-hidden">
        {/* Header */}
        <div className="bg-rose-500 text-white p-6 relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <ShieldAlert className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-['Outfit',sans-serif]">Emergency & Urgent Care</h2>
              <p className="text-sm text-rose-100 mt-0.5">Immediate 24/7 medical response & triage</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="p-4 bg-rose-50/80 rounded-2xl border border-rose-200 flex items-start space-x-3">
            <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <p className="text-xs text-rose-900 leading-relaxed font-medium">
              If you or someone nearby is experiencing chest pain, severe shortness of breath, sudden numbness or speech difficulty, heavy bleeding, or loss of consciousness, please call emergency services immediately.
            </p>
          </div>

          {/* Emergency Hotline Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a 
              href="tel:911" 
              className="flex items-center justify-between p-4 bg-rose-600 hover:bg-rose-700 text-white rounded-2xl font-semibold shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-center space-x-3">
                <PhoneCall className="w-5 h-5 animate-pulse" />
                <div className="text-left">
                  <div className="text-base font-bold">Call 911</div>
                  <div className="text-xs text-rose-100">National Emergency Dispatch</div>
                </div>
              </div>
            </a>

            <a 
              href="tel:18002221222" 
              className="flex items-center justify-between p-4 bg-[#2D2A26] hover:bg-[#1A1816] text-white rounded-2xl font-semibold shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-center space-x-3">
                <Activity className="w-5 h-5 text-[#A3B18A]" />
                <div className="text-left">
                  <div className="text-base font-bold">1-800-222-1222</div>
                  <div className="text-xs text-[#E5E2D9]">Poison Control Center</div>
                </div>
              </div>
            </a>
          </div>

          {/* 24/7 Vitalis Urgent Tele-Triage */}
          <div className="p-4 bg-[#F9F8F6] rounded-2xl border border-[#E5E2D9] space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#5E7153] animate-ping" />
                <h3 className="text-sm font-bold text-[#2D2A26]">Vitalis 24/7 Tele-Triage Nurse</h3>
              </div>
              <span className="text-xs font-semibold px-2.5 py-0.5 bg-[#F1F3EE] text-[#5E7153] border border-[#E5E2D9] rounded-full">
                &lt; 2 min wait
              </span>
            </div>
            <p className="text-xs text-[#7A766F]">
              Speak with a licensed emergency triage nurse who can evaluate symptoms, guide first aid, and direct you to the nearest accredited emergency center.
            </p>
            
            {dispatched ? (
              <div className="flex items-center space-x-2 p-3 bg-[#F1F3EE] border border-[#E5E2D9] rounded-xl text-[#5E7153] text-xs font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#5E7153] shrink-0" />
                <span>Connecting to Nurse Dispatcher Emily (ID #4102)... Audio stream initialized.</span>
              </div>
            ) : (
              <button 
                onClick={() => setDispatched(true)}
                className="w-full py-2.5 px-4 bg-[#5E7153] hover:bg-[#4D5E44] text-white rounded-xl text-xs font-semibold shadow-xs transition-colors flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Heart className="w-4 h-4" />
                <span>Connect with On-Call Nurse Now</span>
              </button>
            )}
          </div>

          {/* Nearest ER Locator */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-[#7A766F]">
              <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-rose-500" /> Nearest Verified ER Center</span>
              <span className="text-[#7A766F]">1.4 miles away</span>
            </div>
            <div className="p-3 bg-[#F9F8F6] rounded-2xl border border-[#E5E2D9] text-xs flex justify-between items-center">
              <div>
                <p className="font-bold text-[#2D2A26]">Stanford Health Valley Care Emergency Center</p>
                <p className="text-[#7A766F] mt-0.5 flex items-center gap-1"><Clock className="w-3 h-3" /> Open 24 Hours • Trauma Level 1</p>
              </div>
              <button 
                onClick={() => window.open('https://maps.google.com/?q=emergency+hospital', '_blank')}
                className="px-3 py-1.5 bg-white border border-[#E5E2D9] hover:border-[#5E7153] text-[#2D2A26] rounded-xl font-medium text-xs shadow-xs hover:bg-[#F9F8F6] transition-colors cursor-pointer"
              >
                Directions
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F9F8F6] border-t border-[#E5E2D9] flex justify-end">
          <button 
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-[#7A766F] hover:text-[#2D2A26] rounded-xl hover:bg-[#F1F3EE] transition-colors cursor-pointer"
          >
            Close Emergency Panel
          </button>
        </div>
      </div>
    </div>
  );
};
