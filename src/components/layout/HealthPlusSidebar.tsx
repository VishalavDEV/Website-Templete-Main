import React from 'react';
import { 
  Home, 
  LayoutGrid, 
  Calendar, 
  Activity, 
  Smile, 
  Bot, 
  BookOpen, 
  Pill, 
  Users, 
  ShieldAlert, 
  PhoneCall,
  Heart,
  Plus
} from 'lucide-react';
import { NavigationTab } from '../../types';

interface HealthPlusSidebarProps {
  activeTab: NavigationTab;
  onNavigate: (tab: NavigationTab) => void;
  onOpenEmergency: () => void;
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export const HealthPlusSidebar: React.FC<HealthPlusSidebarProps> = ({
  activeTab,
  onNavigate,
  onOpenEmergency,
  isMobileOpen = false,
  onCloseMobile,
}) => {
  const navItems = [
    { id: 'home' as NavigationTab, label: 'Home', icon: Home },
    { id: 'services' as NavigationTab, label: 'Services', icon: LayoutGrid },
    { id: 'appointments' as NavigationTab, label: 'Appointments', icon: Calendar },
    { id: 'dashboard' as NavigationTab, label: 'My Health', icon: Activity },
    { id: 'mental' as NavigationTab, label: 'Wellness', icon: Smile },
    { id: 'ai' as NavigationTab, label: 'AI Assistant', icon: Bot },
    { id: 'hub' as NavigationTab, label: 'Health Hub', icon: BookOpen },
    { id: 'pharmacy' as NavigationTab, label: 'Pharmacy', icon: Pill },
    { id: 'family' as NavigationTab, label: 'Family Health', icon: Users },
    { id: 'emergency' as NavigationTab, label: 'Emergency', icon: ShieldAlert, isEmergency: true },
  ];

  const handleItemClick = (item: typeof navItems[0]) => {
    if (item.isEmergency) {
      onOpenEmergency();
    } else {
      onNavigate(item.id);
    }
    if (onCloseMobile) onCloseMobile();
  };

  const content = (
    <div className="flex flex-col h-full bg-white border-r border-[#E2E8F0] select-none">
      {/* Brand Header */}
      <div className="p-5 flex items-center space-x-3 border-b border-[#F1F5F9]">
        <div className="w-10 h-10 rounded-full bg-[#00A884] flex items-center justify-center text-white shadow-sm flex-shrink-0">
          <div className="relative flex items-center justify-center">
            <Heart className="w-5 h-5 fill-white/30 text-white" />
            <Plus className="w-3 h-3 text-white absolute font-extrabold stroke-[3]" />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold font-['Outfit',sans-serif] tracking-tight text-[#0F172A]">
            HealthPlus
          </span>
          <span className="text-[11px] font-medium text-[#64748B] -mt-0.5">
            Your Health. Our Priority.
          </span>
        </div>
      </div>

      {/* Navigation List */}
      <div className="flex-1 py-4 px-3 space-y-1 overflow-y-auto custom-scrollbar">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id || (item.id === 'mental' && (activeTab === 'mental' || activeTab === 'wellness'));

          return (
            <button
              key={item.label}
              id={`sidebar-nav-${item.id}`}
              onClick={() => handleItemClick(item)}
              className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer text-left ${
                isActive
                  ? 'bg-[#E6F7F3] text-[#00A884] font-semibold'
                  : 'text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#0F172A]'
              }`}
            >
              <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-[#00A884]' : 'text-[#94A3B8]'}`} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Bottom Promo Cards */}
      <div className="p-3 space-y-3 border-t border-[#F1F5F9] bg-[#FAFAFA]">
        {/* Mental Wellness Card */}
        <div className="bg-[#EFF6FF] border border-[#DBEAFE] rounded-2xl p-3.5 relative overflow-hidden">
          <div className="relative z-10">
            <h4 className="text-xs font-bold text-[#1E293B] mb-0.5">
              Take care of your mind
            </h4>
            <p className="text-[11px] text-[#64748B] mb-3 leading-snug">
              Explore our mental wellness programs
            </p>
            <button
              id="sidebar-mental-explore-btn"
              onClick={() => {
                onNavigate('mental');
                if (onCloseMobile) onCloseMobile();
              }}
              className="bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs font-medium px-3.5 py-1.5 rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              Explore Now
            </button>
          </div>
          {/* Subtle Yoga/Meditation Vector */}
          <div className="absolute right-1 bottom-1 opacity-80 pointer-events-none">
            <svg className="w-16 h-16 text-[#3B82F6]/30" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="25" r="12" fill="#3B82F6" fillOpacity="0.25" />
              <path d="M50 40 C35 45 25 60 20 85 C35 78 65 78 80 85 C75 60 65 45 50 40 Z" fill="#3B82F6" fillOpacity="0.2" />
              <path d="M30 65 C40 55 60 55 70 65" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* 24/7 Support Hotline Card */}
        <div className="bg-[#ECFDF5] border border-[#A7F3D0] rounded-2xl p-3 flex items-center space-x-3">
          <div className="w-9 h-9 rounded-full bg-[#10B981]/15 text-[#059669] flex items-center justify-center flex-shrink-0">
            <PhoneCall className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-semibold tracking-wider text-[#64748B]">
              Need Help? 24/7 Support
            </span>
            <a 
              href="tel:18001234567" 
              className="text-xs font-bold text-[#059669] hover:underline"
            >
              1800-123-4567
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <aside className="hidden lg:block w-60 h-screen sticky top-0 flex-shrink-0 z-30 shadow-sm">
        {content}
      </aside>

      {/* Mobile Drawer Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div 
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
            onClick={onCloseMobile}
          />
          <div className="relative w-68 max-w-full h-full shadow-2xl z-10 flex flex-col">
            {content}
          </div>
        </div>
      )}
    </>
  );
};
