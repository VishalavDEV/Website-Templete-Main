import React from 'react';
import { 
  X, 
  Bell, 
  Calendar, 
  FileText, 
  Pill, 
  Check, 
  ChevronRight, 
  Sparkles 
} from 'lucide-react';
import { NavigationTab } from '../../types';

interface NotificationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (tab: NavigationTab) => void;
  onJoinAppointment: () => void;
}

export const NotificationDrawer: React.FC<NotificationDrawerProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onJoinAppointment,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl border-l border-[#E5E2D9] flex flex-col">
          {/* Header */}
          <div className="p-5 border-b border-[#E5E2D9] flex items-center justify-between bg-[#F9F8F6]">
            <div className="flex items-center space-x-2.5">
              <div className="p-2 bg-[#F1F3EE] text-[#5E7153] border border-[#E5E2D9] rounded-xl">
                <Bell className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-[#2D2A26] text-sm font-['Outfit',sans-serif]">Notifications & Care Alerts</h3>
                <p className="text-xs text-[#7A766F]">3 unread active reminders</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-1.5 text-[#7A766F] hover:text-[#2D2A26] rounded-lg hover:bg-[#F1F3EE] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#F9F8F6]/30">
            {/* Upcoming Appointment */}
            <div className="p-4 bg-[#F1F3EE] rounded-2xl border border-[#E5E2D9] hover:border-[#5E7153]/50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-2 text-[#5E7153] font-semibold text-xs">
                  <Calendar className="w-3.5 h-3.5 text-[#5E7153]" />
                  <span>Video Consultation in 45 min</span>
                </div>
                <span className="w-2 h-2 rounded-full bg-[#5E7153]" />
              </div>
              <p className="text-xs font-bold text-[#2D2A26] mt-2">Dr. Maya Lin, MD (Cardiology)</p>
              <p className="text-xs text-[#7A766F] mt-0.5">Review recent lipid profile and resting heart rate trends.</p>
              <div className="mt-3 flex items-center gap-2">
                <button 
                  onClick={() => {
                    onClose();
                    onJoinAppointment();
                  }}
                  className="px-3 py-1.5 bg-[#5E7153] hover:bg-[#4D5E44] text-white rounded-xl text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                >
                  Join Video Room
                </button>
                <button 
                  onClick={() => {
                    onClose();
                    onNavigate('appointments');
                  }}
                  className="px-3 py-1.5 bg-white border border-[#E5E2D9] hover:bg-[#F9F8F6] text-[#2D2A26] rounded-xl text-xs font-medium cursor-pointer"
                >
                  Details
                </button>
              </div>
            </div>

            {/* Pill Reminder */}
            <div className="p-4 bg-white rounded-2xl border border-[#E5E2D9] hover:border-[#5E7153]/50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-2 text-[#D4A373] font-semibold text-xs">
                  <Pill className="w-3.5 h-3.5 text-[#D4A373]" />
                  <span>Evening Medication Due (8:00 PM)</span>
                </div>
                <span className="w-2 h-2 rounded-full bg-[#D4A373]" />
              </div>
              <p className="text-xs font-bold text-[#2D2A26] mt-2">Magnesium Glycinate 300mg (2 caps)</p>
              <p className="text-xs text-[#7A766F] mt-0.5">Take 45 minutes before sleep for GABA activation and restorative rest.</p>
              <button 
                onClick={() => {
                  onClose();
                  onNavigate('pharmacy');
                }}
                className="mt-3 flex items-center text-xs font-semibold text-[#5E7153] hover:text-[#4D5E44] cursor-pointer"
              >
                <span>View Pill Adherence Tracker</span>
                <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
              </button>
            </div>

            {/* Report Ready */}
            <div className="p-4 bg-white rounded-2xl border border-[#E5E2D9] hover:border-[#5E7153]/50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-2 text-[#5E7153] font-semibold text-xs">
                  <FileText className="w-3.5 h-3.5 text-[#5E7153]" />
                  <span>Certified Lab Report Available</span>
                </div>
                <span className="w-2 h-2 rounded-full bg-[#5E7153]" />
              </div>
              <p className="text-xs font-bold text-[#2D2A26] mt-2">Comprehensive Metabolic & Lipid Panel</p>
              <p className="text-xs text-[#7A766F] mt-0.5">AI Interpretation: Fasting glucose & triglycerides at optimal baseline levels.</p>
              <button 
                onClick={() => {
                  onClose();
                  onNavigate('reports');
                }}
                className="mt-3 flex items-center text-xs font-semibold text-[#5E7153] hover:text-[#4D5E44] cursor-pointer"
              >
                <span>Open Biomarker Report</span>
                <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
              </button>
            </div>

            {/* AI Assistant Tip */}
            <div className="p-4 bg-[#F1F3EE] rounded-2xl border border-[#E5E2D9]">
              <div className="flex items-center space-x-2 text-[#5E7153] font-semibold text-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#5E7153]" />
                <span>Aura Health Insight</span>
              </div>
              <p className="text-xs text-[#2D2A26] mt-1.5 leading-relaxed">
                You've logged 1,850ml of hydration today! Drink one more glass (250ml) before 7 PM to reach your daily 2.5L target.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-[#E5E2D9] bg-[#F9F8F6] flex items-center justify-between text-xs text-[#7A766F]">
            <button 
              onClick={onClose}
              className="font-medium text-[#2D2A26] hover:text-[#5E7153] cursor-pointer"
            >
              Mark all as read
            </button>
            <span>All systems synchronized</span>
          </div>
        </div>
      </div>
    </div>
  );
};
