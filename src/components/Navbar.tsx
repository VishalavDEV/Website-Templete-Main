import React, { useState } from 'react';
import { 
  Heart, 
  Bell, 
  Search, 
  Calendar, 
  ShieldCheck, 
  PhoneCall, 
  User, 
  ChevronDown, 
  AlertCircle, 
  Video, 
  Settings, 
  X 
} from 'lucide-react';
import { Patient, MedicalNotification } from '../types';

interface NavbarProps {
  patient: Patient;
  notifications: MedicalNotification[];
  onOpenBookAppointment: () => void;
  onOpenJoinCall: () => void;
  onSearchChange: (query: string) => void;
  searchQuery: string;
  onClearNotification: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  patient,
  notifications,
  onOpenBookAppointment,
  onOpenJoinCall,
  onSearchChange,
  searchQuery,
  onClearNotification,
}) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-blue-50 shadow-xs">
      {/* Top micro-bar for urgent hotline & HIPAA status */}
      <div className="bg-[#F7FAFC] border-b border-blue-50 px-4 sm:px-8 py-1.5 flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 font-medium text-[#2C5282]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4FD1C5] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4FD1C5]"></span>
            </span>
            CarePulse High-Density Telehealth
          </span>
          <span className="hidden md:inline-block text-gray-300">|</span>
          <span className="hidden md:inline-flex items-center gap-1 text-gray-500">
            <ShieldCheck className="w-3.5 h-3.5 text-[#319795]" />
            256-bit Encrypted & HIPAA Compliant
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setShowEmergencyModal(true)}
            id="emergency-support-btn"
            className="text-rose-600 hover:text-rose-700 font-semibold flex items-center gap-1 transition-colors hover:underline cursor-pointer"
          >
            <PhoneCall className="w-3 h-3" />
            24/7 Nurse Triage: 1-800-555-CARE
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center space-x-3 shrink-0">
          <div className="w-8 h-8 bg-[#4FD1C5] rounded-lg flex items-center justify-center shadow-xs text-white font-bold">
            <Heart className="w-5 h-5 fill-white stroke-[#319795]" />
          </div>
          <span className="text-xl font-bold tracking-tight text-[#2C5282]">CarePulse</span>
        </div>

        {/* Global Search with rounded-full pill */}
        <div className="hidden md:flex flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              id="global-telehealth-search"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search records, doctors, medications..."
              className="bg-[#EDF2F7] rounded-full py-2 pl-9 pr-8 text-sm w-full focus:outline-none border border-transparent focus:border-[#4FD1C5] text-[#2D3748] placeholder-gray-400 transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Header Actions */}
        <div className="flex items-center space-x-4">
          {/* Quick Book Appointment */}
          <button
            onClick={onOpenBookAppointment}
            id="nav-book-appointment-btn"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-[#2C5282] bg-[#EBF8FF] hover:bg-blue-100/80 border border-blue-100 transition-all cursor-pointer shadow-xs active:scale-98"
          >
            <Calendar className="w-3.5 h-3.5 text-[#3182CE]" />
            Book Visit
          </button>

          {/* Quick Join Active Call Pill */}
          <button
            onClick={onOpenJoinCall}
            id="nav-join-call-quick-btn"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#319795] to-[#4FD1C5] hover:opacity-95 transition-all shadow-sm active:scale-98 cursor-pointer"
          >
            <Video className="w-3.5 h-3.5" />
            <span>Join Call</span>
          </button>

          {/* Notifications Trigger */}
          <div className="relative">
            <button
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowProfileMenu(false);
              }}
              id="notifications-toggle-btn"
              className="p-2 rounded-xl border border-gray-200 text-gray-600 hover:text-[#2C5282] hover:bg-blue-50/50 transition-colors relative cursor-pointer"
              title="Medical Alerts & Notifications"
            >
              <Bell className="w-4 h-4" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4.5 h-4.5 bg-red-500 text-white rounded-full text-[9px] font-bold flex items-center justify-center shadow-xs">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <div 
                id="notifications-dropdown-menu"
                className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-xl border border-blue-50 p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
              >
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-[#2D3748] text-sm">Medical Alerts</h4>
                    <span className="text-xs bg-[#EBF8FF] text-[#2C5282] font-semibold px-2 py-0.5 rounded-full">
                      {notifications.length} Total
                    </span>
                  </div>
                  <button 
                    onClick={() => setShowNotifications(false)}
                    className="text-gray-400 hover:text-gray-600 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="mt-3 space-y-2 max-h-80 overflow-y-auto pr-1">
                  {notifications.map((notif) => (
                    <div 
                      key={notif.id}
                      className={`p-3 rounded-xl border transition-all ${
                        notif.isRead 
                          ? 'bg-[#F7FAFC] border-gray-100 text-gray-600' 
                          : 'bg-[#EBF8FF]/50 border-blue-100 text-[#2D3748] font-medium'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-start gap-2.5">
                          <span className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${notif.isRead ? 'bg-gray-300' : 'bg-[#4FD1C5]'}`} />
                          <div>
                            <p className="text-xs font-bold text-[#2D3748]">{notif.title}</p>
                            <p className="text-[11px] text-gray-600 mt-0.5 leading-relaxed">{notif.description}</p>
                            <p className="text-[10px] text-gray-400 mt-1">{notif.time}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => onClearNotification(notif.id)}
                          className="text-gray-400 hover:text-gray-600 text-[11px] cursor-pointer"
                          title="Dismiss"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Patient Profile Section matching Theme */}
          <div className="relative">
            <button
              onClick={() => {
                setShowProfileMenu(!showProfileMenu);
                setShowNotifications(false);
              }}
              id="patient-profile-toggle-btn"
              className="flex items-center space-x-3 border-l pl-4 border-gray-200 hover:opacity-90 transition-all cursor-pointer text-left"
            >
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-[#2D3748] leading-tight">{patient.name}</p>
                <p className="text-xs text-gray-500">Patient ID: #{patient.id.replace(/\D/g, '') || '88219'}</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-[#2C5282] font-bold text-sm shadow-xs">
                {patient.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400 hidden sm:inline-block" />
            </button>

            {/* Profile Menu Dropdown */}
            {showProfileMenu && (
              <div 
                id="patient-profile-dropdown"
                className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-blue-50 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
              >
                <div className="p-2 border-b border-gray-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-[#2C5282] font-bold text-sm">
                    {patient.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-[#2D3748]">{patient.name}</h5>
                    <p className="text-xs text-[#319795] font-medium">{patient.bloodType} • {patient.age} yrs</p>
                  </div>
                </div>
                <div className="py-2 space-y-1 text-xs text-gray-700">
                  <div className="px-2 py-1.5 flex items-center justify-between text-gray-500">
                    <span>Insurance</span>
                    <span className="font-semibold text-[#2D3748]">{patient.insuranceId}</span>
                  </div>
                  <div className="px-2 py-1.5 flex items-center justify-between text-gray-500">
                    <span>Primary Doctor</span>
                    <span className="font-semibold text-[#2D3748]">{patient.primaryDoctor}</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-gray-100 space-y-1">
                  <button 
                    onClick={() => setShowProfileMenu(false)}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#F7FAFC] text-xs font-medium text-[#2D3748] flex items-center gap-2 cursor-pointer"
                  >
                    <User className="w-3.5 h-3.5 text-gray-400" /> Patient Medical File
                  </button>
                  <button 
                    onClick={() => setShowProfileMenu(false)}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#F7FAFC] text-xs font-medium text-[#2D3748] flex items-center gap-2 cursor-pointer"
                  >
                    <Settings className="w-3.5 h-3.5 text-gray-400" /> Telehealth Preferences
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Emergency Modal */}
      {showEmergencyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
          <div className="bg-white max-w-md w-full rounded-2xl p-6 shadow-2xl border border-rose-100 animate-in zoom-in-95 duration-150">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-4">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#2D3748]">Emergency & Urgent Care Protocols</h3>
            <p className="text-xs text-gray-600 mt-2 leading-relaxed">
              If you or a loved one is experiencing life-threatening symptoms such as severe chest pain, shortness of breath, sudden numbness, or heavy bleeding, please dial <strong className="text-rose-700">911</strong> immediately.
            </p>
            <div className="mt-4 p-3.5 bg-rose-50 rounded-xl border border-rose-200/70 space-y-2 text-xs">
              <div className="flex items-center justify-between font-semibold text-rose-900">
                <span>Emergency Services</span>
                <span className="text-sm font-extrabold">911</span>
              </div>
              <div className="flex items-center justify-between font-medium text-gray-700">
                <span>24/7 CarePulse Nurse Triage</span>
                <span className="font-bold text-[#319795]">1-800-555-CARE</span>
              </div>
              <div className="flex items-center justify-between font-medium text-gray-700">
                <span>Your Emergency Contact ({patient.emergencyContact.relationship})</span>
                <span className="font-bold text-[#2D3748]">{patient.emergencyContact.phone}</span>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setShowEmergencyModal(false)}
                className="flex-1 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl text-xs transition-colors cursor-pointer"
              >
                Close Notice
              </button>
              <a
                href="tel:911"
                className="flex-1 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                Call Emergency (911)
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
