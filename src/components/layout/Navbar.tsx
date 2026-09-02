import React, { useState } from 'react';
import { 
  Heart, 
  Search, 
  Bell, 
  ShieldAlert, 
  Users, 
  Sparkles, 
  Calendar, 
  Activity, 
  Pill, 
  FlaskConical, 
  BookOpen, 
  ChevronDown, 
  Menu, 
  X,
  Stethoscope,
  Smile,
  Apple,
  Dumbbell
} from 'lucide-react';
import { NavigationTab, FamilyMember } from '../../types';

interface NavbarProps {
  activeTab: NavigationTab;
  onNavigate: (tab: NavigationTab) => void;
  onOpenEmergency: () => void;
  onOpenNotifications: () => void;
  familyMembers: FamilyMember[];
  selectedFamilyId: string;
  onSelectFamilyMember: (id: string) => void;
  onGlobalSearch: (term: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onNavigate,
  onOpenEmergency,
  onOpenNotifications,
  familyMembers,
  selectedFamilyId,
  onSelectFamilyMember,
  onGlobalSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [wellnessDropdownOpen, setWellnessDropdownOpen] = useState(false);
  const [familyDropdownOpen, setFamilyDropdownOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const currentMember = familyMembers.find(m => m.id === selectedFamilyId) || familyMembers[0];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onGlobalSearch(searchInput);
    }
  };

  const navLinks: { tab: NavigationTab; label: string; icon: React.ReactNode }[] = [
    { tab: 'home', label: 'Home', icon: <Heart className="w-4 h-4" /> },
    { tab: 'services', label: 'Services', icon: <Stethoscope className="w-4 h-4" /> },
    { tab: 'dashboard', label: 'My Health', icon: <Activity className="w-4 h-4" /> },
    { tab: 'appointments', label: 'Appointments', icon: <Calendar className="w-4 h-4" /> },
    { tab: 'reports', label: 'Lab Reports', icon: <FlaskConical className="w-4 h-4" /> },
    { tab: 'pharmacy', label: 'Pharmacy', icon: <Pill className="w-4 h-4" /> },
    { tab: 'ai', label: 'AI Assistant', icon: <Sparkles className="w-4 h-4" /> },
    { tab: 'family', label: 'Family', icon: <Users className="w-4 h-4" /> },
    { tab: 'hub', label: 'Health Hub', icon: <BookOpen className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#F9F8F6]/95 backdrop-blur-md border-b border-[#E5E2D9] transition-all">
      {/* Top Banner Alert / Emergency Quick Bar */}
      <div className="bg-[#2D2A26] text-[#E5E2D9] text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#A3B18A] animate-pulse" />
            <span className="font-medium text-[#E5E2D9]">
              Personalized Health Ecosystem • Board-Certified Doctors On Demand
            </span>
          </div>
          <button 
            onClick={onOpenEmergency}
            className="flex items-center space-x-1.5 text-[#D4A373] hover:text-[#e4be96] font-semibold transition-colors group cursor-pointer"
          >
            <ShieldAlert className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
            <span>24/7 Urgent Triage Hotline</span>
          </button>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Logo & Brand */}
          <div className="flex items-center space-x-8">
            <button 
              onClick={() => onNavigate('home')}
              className="flex items-center space-x-2.5 text-left group focus:outline-none cursor-pointer"
            >
              <div className="w-10 h-10 rounded-2xl bg-[#5E7153] flex items-center justify-center text-white shadow-md shadow-[#5E7153]/20 group-hover:shadow-[#5E7153]/30 transition-all">
                <Heart className="w-5 h-5 fill-white/20" />
              </div>
              <div>
                <span className="text-xl font-bold font-['Outfit',sans-serif] tracking-tight text-[#2D2A26] flex items-center">
                  Vitalis<span className="text-[#5E7153] font-extrabold ml-0.5">.</span>
                </span>
                <span className="text-[10px] tracking-wider uppercase font-semibold text-[#7A766F] block -mt-1">
                  Health & Wellness
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.slice(0, 4).map((link) => (
                <button
                  key={link.tab}
                  onClick={() => onNavigate(link.tab)}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all flex items-center space-x-1.5 cursor-pointer ${
                    activeTab === link.tab
                      ? 'bg-[#F1F3EE] text-[#5E7153] border border-[#E5E2D9] shadow-xs'
                      : 'text-[#7A766F] hover:text-[#2D2A26] hover:bg-[#F1F3EE]'
                  }`}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </button>
              ))}

              {/* Wellness Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setWellnessDropdownOpen(!wellnessDropdownOpen)}
                  onBlur={() => setTimeout(() => setWellnessDropdownOpen(false), 200)}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all flex items-center space-x-1 cursor-pointer ${
                    ['mental', 'nutrition', 'fitness'].includes(activeTab)
                      ? 'bg-[#F1F3EE] text-[#5E7153] border border-[#E5E2D9]'
                      : 'text-[#7A766F] hover:text-[#2D2A26] hover:bg-[#F1F3EE]'
                  }`}
                >
                  <Smile className="w-4 h-4" />
                  <span>Wellness</span>
                  <ChevronDown className="w-3 h-3 ml-0.5 opacity-70" />
                </button>

                {wellnessDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1.5 w-56 bg-white rounded-2xl shadow-xl border border-[#E5E2D9] p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <button
                      onClick={() => {
                        onNavigate('mental');
                        setWellnessDropdownOpen(false);
                      }}
                      className="w-full flex items-center space-x-3 p-2 rounded-xl hover:bg-[#F1F3EE] text-left transition-colors text-xs font-semibold text-[#2D2A26]"
                    >
                      <div className="p-1.5 bg-[#F9F1F0] text-[#BC8A7E] rounded-lg">
                        <Smile className="w-4 h-4" />
                      </div>
                      <div>
                        <div>Mental Wellness</div>
                        <div className="text-[10px] text-[#7A766F] font-normal">Mood logs, CBT & breathing</div>
                      </div>
                    </button>

                    <button
                      onClick={() => {
                        onNavigate('nutrition');
                        setWellnessDropdownOpen(false);
                      }}
                      className="w-full flex items-center space-x-3 p-2 rounded-xl hover:bg-[#FEF6ED] text-left transition-colors text-xs font-semibold text-[#2D2A26]"
                    >
                      <div className="p-1.5 bg-[#FEF6ED] text-[#D4A373] rounded-lg">
                        <Apple className="w-4 h-4" />
                      </div>
                      <div>
                        <div>Nutrition & Diet</div>
                        <div className="text-[10px] text-[#7A766F] font-normal">Macros, hydration & recipes</div>
                      </div>
                    </button>

                    <button
                      onClick={() => {
                        onNavigate('fitness');
                        setWellnessDropdownOpen(false);
                      }}
                      className="w-full flex items-center space-x-3 p-2 rounded-xl hover:bg-[#F1F3EE] text-left transition-colors text-xs font-semibold text-[#2D2A26]"
                    >
                      <div className="p-1.5 bg-[#F1F3EE] text-[#5E7153] rounded-lg">
                        <Dumbbell className="w-4 h-4" />
                      </div>
                      <div>
                        <div>Fitness & Lifestyle</div>
                        <div className="text-[10px] text-[#7A766F] font-normal">Activity rings & routines</div>
                      </div>
                    </button>
                  </div>
                )}
              </div>

              {/* Other Primary Tabs */}
              {navLinks.slice(4).map((link) => (
                <button
                  key={link.tab}
                  onClick={() => onNavigate(link.tab)}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all flex items-center space-x-1.5 cursor-pointer ${
                    activeTab === link.tab
                      ? 'bg-[#F1F3EE] text-[#5E7153] border border-[#E5E2D9] shadow-xs'
                      : 'text-[#7A766F] hover:text-[#2D2A26] hover:bg-[#F1F3EE]'
                  }`}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Right Action Tools */}
          <div className="flex items-center space-x-3">
            
            {/* Quick Search Box */}
            <form onSubmit={handleSearchSubmit} className="relative hidden md:block w-48 lg:w-60">
              <Search className="w-3.5 h-3.5 text-[#7A766F] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search services, labs, doctors..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 bg-[#F1F3EE] hover:bg-[#EAECE6] focus:bg-white text-xs rounded-full border border-[#E5E2D9] focus:border-[#5E7153] focus:ring-1 focus:ring-[#5E7153] transition-all outline-none text-[#2D2A26] placeholder-[#7A766F]"
              />
            </form>

            {/* Family Member Switcher Pill */}
            <div className="relative hidden sm:block">
              <button
                onClick={() => setFamilyDropdownOpen(!familyDropdownOpen)}
                onBlur={() => setTimeout(() => setFamilyDropdownOpen(false), 200)}
                className="flex items-center space-x-2 px-2.5 py-1.5 bg-[#F1F3EE] hover:bg-[#EAECE6] rounded-full border border-[#E5E2D9] transition-colors text-xs cursor-pointer"
                title="Switch Active Family Profile"
              >
                <img 
                  src={currentMember.avatar} 
                  alt={currentMember.name} 
                  className="w-5 h-5 rounded-full object-cover border border-white"
                />
                <span className="font-semibold text-[#2D2A26] max-w-[80px] truncate">{currentMember?.name ? currentMember.name.split(' ')[0] : 'Member'}</span>
                <ChevronDown className="w-3 h-3 text-[#7A766F]" />
              </button>

              {familyDropdownOpen && (
                <div className="absolute right-0 top-full mt-1.5 w-64 bg-white rounded-2xl shadow-xl border border-[#E5E2D9] p-2 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="px-3 py-1 text-[11px] font-bold text-[#7A766F] uppercase tracking-wider">
                    Managing Health For:
                  </div>
                  {familyMembers.map((member) => (
                    <button
                      key={member.id}
                      onClick={() => {
                        onSelectFamilyMember(member.id);
                        setFamilyDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between p-2 rounded-xl text-left transition-colors text-xs ${
                        member.id === selectedFamilyId ? 'bg-[#F1F3EE] font-bold text-[#5E7153]' : 'hover:bg-[#F9F8F6] text-[#2D2A26]'
                      }`}
                    >
                      <div className="flex items-center space-x-2.5">
                        <img src={member.avatar} alt={member.name} className="w-6 h-6 rounded-full object-cover" />
                        <div>
                          <div className="font-medium text-[#2D2A26]">{member.name}</div>
                          <div className="text-[10px] text-[#7A766F]">{member.relation} • {member.age} yrs</div>
                        </div>
                      </div>
                      {member.upcomingAppointmentsCount > 0 && (
                        <span className="px-1.5 py-0.5 bg-[#F1F3EE] text-[#5E7153] border border-[#E5E2D9] text-[10px] rounded-full font-semibold">
                          1 visit
                        </span>
                      )}
                    </button>
                  ))}
                  <div className="border-t border-[#E5E2D9] mt-1 pt-1">
                    <button
                      onClick={() => {
                        onNavigate('family');
                        setFamilyDropdownOpen(false);
                      }}
                      className="w-full text-center py-1.5 text-xs text-[#5E7153] font-semibold hover:text-[#4D5E44]"
                    >
                      + Manage Family Profiles
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Notification Bell */}
            <button
              onClick={onOpenNotifications}
              className="relative p-2 text-[#7A766F] hover:text-[#2D2A26] rounded-full hover:bg-[#F1F3EE] transition-colors cursor-pointer"
              title="View Care Notifications"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-[#D4A373] rounded-full ring-2 ring-white animate-pulse" />
            </button>

            {/* Emergency SOS Quick Button */}
            <button
              onClick={onOpenEmergency}
              className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 bg-[#F9F1F0] hover:bg-[#F3E2DF] text-[#BC8A7E] border border-[#BC8A7E]/30 rounded-full text-xs font-bold transition-all shadow-xs cursor-pointer"
            >
              <ShieldAlert className="w-3.5 h-3.5 text-[#BC8A7E]" />
              <span>SOS Urgent</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#2D2A26] hover:bg-[#F1F3EE] rounded-xl"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Collapsible Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E5E2D9] px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          <form onSubmit={handleSearchSubmit} className="mb-3">
            <div className="relative">
              <Search className="w-4 h-4 text-[#7A766F] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search services, labs, doctors..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-[#F1F3EE] rounded-xl text-xs text-[#2D2A26] outline-none border border-[#E5E2D9]"
              />
            </div>
          </form>

          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map((link) => (
              <button
                key={link.tab}
                onClick={() => {
                  onNavigate(link.tab);
                  setMobileMenuOpen(false);
                }}
                className={`p-2.5 rounded-xl text-xs font-semibold flex items-center space-x-2 text-left ${
                  activeTab === link.tab ? 'bg-[#F1F3EE] text-[#5E7153] border border-[#E5E2D9] font-bold' : 'bg-[#F9F8F6] text-[#2D2A26]'
                }`}
              >
                {link.icon}
                <span>{link.label}</span>
              </button>
            ))}
            <button
              onClick={() => {
                onNavigate('mental');
                setMobileMenuOpen(false);
              }}
              className="p-2.5 rounded-xl text-xs font-semibold flex items-center space-x-2 bg-[#F9F8F6] text-[#2D2A26]"
            >
              <Smile className="w-4 h-4 text-[#BC8A7E]" />
              <span>Mental</span>
            </button>
            <button
              onClick={() => {
                onNavigate('nutrition');
                setMobileMenuOpen(false);
              }}
              className="p-2.5 rounded-xl text-xs font-semibold flex items-center space-x-2 bg-[#F9F8F6] text-[#2D2A26]"
            >
              <Apple className="w-4 h-4 text-[#D4A373]" />
              <span>Nutrition</span>
            </button>
            <button
              onClick={() => {
                onNavigate('fitness');
                setMobileMenuOpen(false);
              }}
              className="p-2.5 rounded-xl text-xs font-semibold flex items-center space-x-2 bg-[#F9F8F6] text-[#2D2A26]"
            >
              <Dumbbell className="w-4 h-4 text-[#5E7153]" />
              <span>Fitness</span>
            </button>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                onOpenEmergency();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 bg-[#BC8A7E] text-white rounded-xl text-xs font-bold flex items-center justify-center space-x-2 shadow-xs"
            >
              <ShieldAlert className="w-4 h-4" />
              <span>24/7 Emergency Assistance Hotline</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
