import React from 'react';
import { 
  Home, 
  LayoutGrid, 
  Calendar, 
  Activity, 
  Smile, 
  Bot 
} from 'lucide-react';
import { NavigationTab } from '../../types';

interface BottomNavProps {
  activeTab: NavigationTab;
  onNavigate: (tab: NavigationTab) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onNavigate }) => {
  const items: { tab: NavigationTab; label: string; icon: React.ReactNode }[] = [
    { tab: 'home', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { tab: 'services', label: 'Services', icon: <LayoutGrid className="w-5 h-5" /> },
    { tab: 'appointments', label: 'Visits', icon: <Calendar className="w-5 h-5" /> },
    { tab: 'dashboard', label: 'My Health', icon: <Activity className="w-5 h-5" /> },
    { tab: 'mental', label: 'Wellness', icon: <Smile className="w-5 h-5" /> },
    { tab: 'ai', label: 'AI Bot', icon: <Bot className="w-5 h-5" /> },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-2 py-1.5 shadow-lg">
      <div className="flex items-center justify-around">
        {items.map((item) => {
          const isActive = activeTab === item.tab || (item.tab === 'mental' && ['mental', 'wellness', 'nutrition', 'fitness'].includes(activeTab));
          return (
            <button
              key={item.tab}
              id={`bottom-nav-tab-${item.tab}`}
              onClick={() => onNavigate(item.tab)}
              className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all cursor-pointer ${
                isActive
                  ? 'text-[#00A884] font-bold'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <div className={`p-1 rounded-xl transition-transform ${isActive ? 'scale-110 bg-[#E6F7F3] text-[#00A884]' : ''}`}>
                {item.icon}
              </div>
              <span className="text-[10px] mt-0.5 tracking-tight">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
