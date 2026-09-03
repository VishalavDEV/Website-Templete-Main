import React from 'react';
import {
  Home,
  Heart,
  Dumbbell,
  Utensils,
  Moon,
  Sparkles,
  Trophy,
  BarChart2,
  Users,
  BookOpen,
  Settings,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import { NavItemKey, UserProfile } from '../types';

interface SidebarProps {
  currentTab: NavItemKey;
  onSelectTab: (tab: NavItemKey) => void;
  onUpgradeClick: () => void;
  onProfileClick: () => void;
  user: UserProfile;
}

const NAV_ITEMS: { key: NavItemKey; label: string; icon: React.ElementType }[] = [
  { key: 'home', label: 'Home', icon: Home },
  { key: 'wellness', label: 'Wellness', icon: Heart },
  { key: 'fitness', label: 'Fitness', icon: Dumbbell },
  { key: 'nutrition', label: 'Nutrition', icon: Utensils },
  { key: 'sleep', label: 'Sleep', icon: Moon },
  { key: 'mindfulness', label: 'Mindfulness', icon: Sparkles },
  { key: 'challenges', label: 'Challenges', icon: Trophy },
  { key: 'insights', label: 'Insights', icon: BarChart2 },
  { key: 'community', label: 'Community', icon: Users },
  { key: 'resources', label: 'Resources', icon: BookOpen },
  { key: 'settings', label: 'Settings', icon: Settings },
];

export const Sidebar: React.FC<SidebarProps> = ({
  currentTab,
  onSelectTab,
  onUpgradeClick,
  onProfileClick,
  user,
}) => {
  return (
    <aside
      id="main-sidebar"
      className="w-64 bg-white border-r border-[#EAEFE9] flex flex-col justify-between shrink-0 h-screen sticky top-0 overflow-y-auto select-none"
    >
      <div className="p-6 pb-2">
        {/* Logo */}
        <div
          id="logo-brand"
          className="flex items-center gap-3 mb-8 cursor-pointer"
          onClick={() => onSelectTab('home')}
        >
          <div className="w-10 h-10 rounded-xl bg-[#E8F8EE] flex items-center justify-center text-[#10B981] shadow-xs">
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
          <div>
            <div className="text-[20px] font-extrabold text-[#111827] tracking-tight flex items-center gap-1">
              Wellify
            </div>
            <div className="text-[11px] text-[#9CA3AF] font-medium tracking-wide">
              Live well, every day.
            </div>
          </div>
        </div>

        {/* Navigation List */}
        <nav id="nav-list" className="space-y-1">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.key;
            return (
              <button
                key={item.key}
                id={`nav-item-${item.key}`}
                type="button"
                onClick={() => onSelectTab(item.key)}
                className={`w-full flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl font-medium text-[14px] transition-all text-left ${
                  isActive
                    ? 'bg-[#EBF7EE] text-[#10B981] font-semibold'
                    : 'text-[#4B5563] hover:text-[#111827] hover:bg-[#F3F4F6]'
                }`}
              >
                <Icon
                  className={`w-[19px] h-[19px] transition-colors ${
                    isActive ? 'text-[#10B981]' : 'text-[#6B7280]'
                  }`}
                  strokeWidth={isActive ? 2.3 : 1.9}
                />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      <div className="p-5 space-y-4 pt-2">
        {/* Upgrade Card */}
        <div
          id="upgrade-promo-card"
          className="bg-[#F8FAF8] rounded-2xl p-4 border border-[#E9EFE8] relative overflow-hidden"
        >
          <div className="w-7 h-7 rounded-lg bg-[#FEF3C7] flex items-center justify-center text-[#D97706] mb-2.5">
            <Sparkles className="w-4 h-4" />
          </div>
          <h4 className="text-[13px] font-bold text-[#111827] mb-1">
            Upgrade to Premium
          </h4>
          <p className="text-[11px] text-[#6B7280] leading-relaxed mb-3">
            Unlock personalized insights, advanced analytics & more.
          </p>
          <button
            id="upgrade-now-btn"
            type="button"
            onClick={onUpgradeClick}
            className="w-full py-2 px-3 bg-[#10B981] hover:bg-[#059669] text-white text-[12px] font-semibold rounded-lg transition-colors shadow-xs"
          >
            Upgrade Now
          </button>
        </div>

        {/* User profile item */}
        <div
          id="user-profile-widget"
          onClick={onProfileClick}
          className="flex items-center gap-3 p-2 rounded-xl hover:bg-[#F3F4F6] cursor-pointer transition-colors"
        >
          <img
            src={user.avatar}
            alt={user.name}
            className="w-9 h-9 rounded-full object-cover ring-1 ring-gray-200"
          />
          <div className="flex-1 min-w-0">
            <div className="text-[13px] font-semibold text-[#111827] truncate">
              {user.name}
            </div>
            <div className="text-[11px] text-[#9CA3AF] font-medium">
              View Profile
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-[#9CA3AF]" />
        </div>
      </div>
    </aside>
  );
};
