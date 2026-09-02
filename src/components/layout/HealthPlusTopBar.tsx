import React, { useState } from 'react';
import { 
  Search, 
  Bell, 
  ChevronDown, 
  Menu, 
  User, 
  ShieldAlert,
  Settings,
  Heart,
  Users,
  LogOut,
  LogIn,
  Check,
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { FamilyMember } from '../../types';

interface HealthPlusTopBarProps {
  currentMember: FamilyMember;
  familyMembers: FamilyMember[];
  selectedFamilyId: string;
  onSelectFamilyMember: (id: string) => void;
  onOpenNotifications: () => void;
  onOpenEmergency: () => void;
  onGlobalSearch: (term: string) => void;
  onOpenMobileMenu?: () => void;
  isLoggedIn?: boolean;
  onOpenLogin?: () => void;
  onLogout?: () => void;
  onReplayAppLoading?: () => void;
}

export const HealthPlusTopBar: React.FC<HealthPlusTopBarProps> = ({
  currentMember,
  familyMembers,
  selectedFamilyId,
  onSelectFamilyMember,
  onOpenNotifications,
  onOpenEmergency,
  onGlobalSearch,
  onOpenMobileMenu,
  isLoggedIn = true,
  onOpenLogin,
  onLogout,
  onReplayAppLoading,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onGlobalSearch(searchTerm);
    }
  };

  return (
    <header className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-[#E2E8F0] px-4 sm:px-6 py-3">
      <div className="flex items-center justify-between gap-4">
        {/* Left: Mobile hamburger & Global Search */}
        <div className="flex items-center space-x-3 flex-1 max-w-2xl">
          {onOpenMobileMenu && (
            <button
              id="mobile-sidebar-toggle-btn"
              onClick={onOpenMobileMenu}
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 cursor-pointer"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          )}

          {/* Search Input Bar */}
          <form onSubmit={handleSearchSubmit} className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              id="global-header-search-input"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for services, doctors, tests and more..."
              className="w-full pl-10 pr-4 py-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00A884]/30 focus:border-[#00A884] transition-all"
            />
          </form>
        </div>

        {/* Right: Urgent SOS, Notification Bell & Profile Dropdown */}
        <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
          {/* Quick SOS on mobile */}
          <button
            id="topbar-sos-btn"
            onClick={onOpenEmergency}
            className="sm:hidden p-2 rounded-xl text-rose-600 hover:bg-rose-50 cursor-pointer"
            title="Emergency SOS"
          >
            <ShieldAlert className="w-5 h-5" />
          </button>

          {/* Notification Bell with Badge 3 */}
          <button
            id="topbar-notification-bell-btn"
            onClick={onOpenNotifications}
            className="relative p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="View notifications"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-4 h-4 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-xs">
              3
            </span>
          </button>

          {/* User Profile Selector Dropdown or Log In Button */}
          {!isLoggedIn ? (
            <button
              id="topbar-login-button"
              onClick={onOpenLogin}
              className="flex items-center space-x-2 bg-[#00A884] hover:bg-[#009272] text-white px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold shadow-xs cursor-pointer transition-all active:scale-95"
            >
              <LogIn className="w-4 h-4" />
              <span>Log In</span>
            </button>
          ) : (
            <div className="relative">
              <button
                id="topbar-user-profile-btn"
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="flex items-center space-x-2.5 p-1 sm:px-2 sm:py-1.5 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer border border-transparent hover:border-slate-200"
              >
                <img
                  src={currentMember?.avatar || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80'}
                  alt={currentMember?.name || 'Ananya'}
                  className="w-8 h-8 rounded-full object-cover border border-[#00A884]/30"
                />
                <span className="hidden sm:inline-block text-sm font-semibold text-slate-800">
                  {currentMember?.name ? currentMember.name.split(' ')[0] : 'Ananya'}
                </span>
                <ChevronDown className="w-4 h-4 text-slate-500 hidden sm:inline-block" />
              </button>

              {/* Profile Dropdown Menu */}
              {profileDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-2"
                  onClick={() => setProfileDropdownOpen(false)}
                >
                  <div className="px-4 py-2.5 border-b border-slate-100">
                    <p className="text-xs text-slate-400 font-medium">Logged in as</p>
                    <p className="text-sm font-bold text-slate-800">{currentMember?.name || 'Ananya Sharma'}</p>
                    <span className="inline-block mt-0.5 text-[11px] font-semibold text-[#00A884] bg-[#E6F7F3] px-2 py-0.5 rounded-full">
                      Active Profile • {currentMember?.relation || 'Self'}
                    </span>
                  </div>

                  {/* Family Profiles Switcher */}
                  <div className="py-1 border-b border-slate-100">
                    <p className="px-4 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Switch Family Member
                    </p>
                    {familyMembers.map((fam) => (
                      <button
                        key={fam.id}
                        onClick={() => onSelectFamilyMember(fam.id)}
                        className={`w-full px-4 py-2 text-left flex items-center justify-between text-xs hover:bg-slate-50 cursor-pointer ${
                          fam.id === selectedFamilyId ? 'text-[#00A884] font-bold bg-[#F0FDF9]' : 'text-slate-700'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <img src={fam.avatar} alt={fam.name} className="w-6 h-6 rounded-full object-cover" />
                          <span>{fam.name} ({fam.relation})</span>
                        </div>
                        {fam.id === selectedFamilyId && <Check className="w-3.5 h-3.5 text-[#00A884]" />}
                      </button>
                    ))}
                  </div>

                  {/* Account Actions & Loading Screen Controls */}
                  <div className="py-1 border-b border-slate-100">
                    {onOpenLogin && (
                      <button
                        id="dropdown-switch-login-btn"
                        onClick={onOpenLogin}
                        className="w-full px-4 py-2 text-left flex items-center space-x-2.5 text-xs text-slate-700 hover:bg-slate-50 cursor-pointer font-medium"
                      >
                        <LogIn className="w-4 h-4 text-[#00A884]" />
                        <span>Log in as another user</span>
                      </button>
                    )}

                    {onReplayAppLoading && (
                      <button
                        id="dropdown-replay-loading-btn"
                        onClick={onReplayAppLoading}
                        className="w-full px-4 py-2 text-left flex items-center space-x-2.5 text-xs text-slate-700 hover:bg-slate-50 cursor-pointer font-medium"
                      >
                        <RotateCcw className="w-4 h-4 text-indigo-500" />
                        <span>Replay App Loading Screen</span>
                      </button>
                    )}

                    <button 
                      onClick={onOpenEmergency}
                      className="w-full px-4 py-2 text-left flex items-center space-x-2.5 text-xs text-rose-600 hover:bg-rose-50 cursor-pointer font-medium"
                    >
                      <ShieldAlert className="w-4 h-4" />
                      <span>Emergency SOS Contacts</span>
                    </button>
                  </div>

                  {/* Sign Out Option */}
                  {onLogout && (
                    <div className="pt-1">
                      <button
                        id="dropdown-logout-btn"
                        onClick={onLogout}
                        className="w-full px-4 py-2 text-left flex items-center space-x-2.5 text-xs text-slate-600 hover:text-rose-600 hover:bg-rose-50/50 cursor-pointer font-medium transition-colors"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Sign out of site</span>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
