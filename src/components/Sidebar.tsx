import React from 'react';
import { 
  TrendingUp, 
  Users, 
  Stethoscope, 
  Video, 
  FileText, 
  Settings,
  X,
  HeartPulse
} from 'lucide-react';
import { HealthLogo } from './HealthLogo';
import { currentDoctor } from '../data/mockData';

interface SidebarProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

export function Sidebar({
  activeTab,
  onSelectTab,
  isOpenMobile,
  onCloseMobile,
}: SidebarProps) {
  const mainNavItems = [
    { id: 'reports', label: 'Reports', icon: TrendingUp },
    { id: 'patients', label: 'Patients', icon: Stethoscope },
    { id: 'care_team', label: 'Care Team', icon: Users },
    { id: 'consultations', label: 'Consultations', icon: Video },
  ];

  const supportNavItems = [
    { id: 'protocols', label: 'Clinical Protocols', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpenMobile && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 lg:hidden backdrop-blur-xs transition-opacity"
          onClick={onCloseMobile}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 bg-white border-r border-gray-100 flex flex-col justify-between transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpenMobile ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Top Section */}
        <div className="p-6">
          {/* Header with Logo */}
          <div className="flex items-center justify-between mb-8 pl-1">
            <div className="cursor-pointer" onClick={() => onSelectTab('reports')}>
              <HealthLogo />
            </div>
            <button
              onClick={onCloseMobile}
              className="lg:hidden p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Navigation Links */}
          <nav className="space-y-1.5">
            {mainNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelectTab(item.id);
                    onCloseMobile();
                  }}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all text-left ${
                    isActive
                      ? 'bg-[#EEF4FF] text-[#2563EB] shadow-xs font-semibold'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 transition-colors ${
                      isActive ? 'text-[#2563EB]' : 'text-gray-500'
                    }`}
                    strokeWidth={isActive ? 2.2 : 1.8}
                  />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Support Section */}
          <div className="mt-8 pt-4">
            <h4 className="px-3.5 text-xs font-semibold text-gray-400 tracking-wider mb-2">
              Support
            </h4>
            <nav className="space-y-1.5">
              {supportNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onSelectTab(item.id);
                      onCloseMobile();
                    }}
                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all text-left ${
                      isActive
                        ? 'bg-[#EEF4FF] text-[#2563EB]'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <Icon
                      className={`w-4 h-4 transition-colors ${
                        isActive ? 'text-[#2563EB]' : 'text-gray-500'
                      }`}
                      strokeWidth={isActive ? 2.2 : 1.8}
                    />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Bottom Clinician Profile Section */}
        <div className="p-5 border-t border-gray-100 bg-white">
          <div className="flex items-center gap-3 px-1 py-1">
            <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-100 flex-shrink-0 border border-gray-200 shadow-xs">
              <img
                src={currentDoctor.avatar}
                alt={currentDoctor.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-gray-900 truncate">
                {currentDoctor.name}
              </p>
              <p className="text-[11px] text-gray-400 truncate">
                {currentDoctor.email}
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
