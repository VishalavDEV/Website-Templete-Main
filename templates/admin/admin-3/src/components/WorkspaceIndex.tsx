import React, { useState } from 'react';
import { Compass, FileText, LayoutDashboard, Users, Archive, Settings, Calendar, Download, ChevronDown, ChevronRight, BookOpen, Layers, BarChart2 } from 'lucide-react';

interface WorkspaceIndexProps {
  activeView: string;
  setActiveView: (view: string) => void;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
  storyCounts: {
    today: number;
    content: number;
    review: number;
    audience: number;
    archive: number;
  };
}

export const WorkspaceIndex: React.FC<WorkspaceIndexProps> = ({
  activeView,
  setActiveView,
  mobileOpen,
  setMobileOpen,
  storyCounts
}) => {
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({
    TODAY: true,
    CONTENT: true,
    EDITORIAL: true,
    AUDIENCE: true,
    ARCHIVE: true,
    SYSTEM: true
  });

  const toggleGroup = (group: string) => {
    setExpandedGroups(prev => ({ ...prev, [group]: !prev[group] }));
  };

  const navItems = [
    {
      group: 'TODAY',
      items: [
        { id: 'today', label: 'Editorial Observatory', icon: LayoutDashboard, count: storyCounts.today }
      ]
    },
    {
      group: 'CONTENT',
      items: [
        { id: 'explorer', label: 'Story Explorer', icon: FileText, count: storyCounts.content },
        { id: 'calendar', label: 'Publication Calendar', icon: Calendar }
      ]
    },
    {
      group: 'EDITORIAL',
      items: [
        { id: 'constellation', label: 'Editorial Constellation', icon: Compass },
        { id: 'reviews', label: 'Review Queue', icon: BookOpen, count: storyCounts.review }
      ]
    },
    {
      group: 'AUDIENCE',
      items: [
        { id: 'readers', label: 'Reader Momentum', icon: Users, count: storyCounts.audience },
        { id: 'velocity', label: 'Story Velocity', icon: BarChart2 }
      ]
    },
    {
      group: 'ARCHIVE',
      items: [
        { id: 'collections', label: 'Collections & Archive', icon: Layers, count: storyCounts.archive }
      ]
    },
    {
      group: 'SYSTEM',
      items: [
        { id: 'export', label: 'Export Center', icon: Download },
        { id: 'settings', label: 'Command Settings', icon: Settings }
      ]
    }
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-[#203040]/30 backdrop-blur-xs z-40 lg:hidden"
        />
      )}

      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50 w-72 bg-white border-r border-[#DCE7EC]
        transform transition-transform duration-200 ease-in-out flex flex-col
        ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-4 border-b border-[#DCE7EC] flex items-center justify-between">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#718096] font-bold">Workspace Index</span>
          <span className="text-[10px] font-mono bg-[#F5F9FB] px-2 py-0.5 rounded text-[#183B56] border border-[#DCE7EC]">v3.4.2</span>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-5">
          {navItems.map(section => {
            const isExpanded = expandedGroups[section.group];
            return (
              <div key={section.group} className="space-y-1">
                <button
                  onClick={() => toggleGroup(section.group)}
                  className="w-full flex items-center justify-between px-2 py-1 text-[11px] font-mono font-bold text-[#718096] uppercase tracking-wider hover:text-[#183B56] transition-colors"
                >
                  <span>{section.group}</span>
                  {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                </button>

                {isExpanded && (
                  <div className="space-y-0.5 pt-1">
                    {section.items.map(item => {
                      const Icon = item.icon;
                      const isActive = activeView === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => {
                            setActiveView(item.id);
                            setMobileOpen(false);
                          }}
                          className={`
                            w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all group
                            ${isActive
                              ? 'bg-[#CDEFF4]/50 text-[#183B56] font-semibold border-l-3 border-[#6FAFD4] shadow-2xs'
                              : 'text-[#203040] hover:bg-[#F5F9FB] hover:text-[#183B56]'
                            }
                          `}
                        >
                          <div className="flex items-center gap-2.5">
                            <Icon size={16} className={isActive ? 'text-[#183B56]' : 'text-[#64748B] group-hover:text-[#183B56]'} />
                            <span>{item.label}</span>
                          </div>
                          {item.count !== undefined && item.count > 0 && (
                            <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md ${isActive ? 'bg-[#183B56] text-white' : 'bg-[#F5F9FB] text-[#718096] border border-[#DCE7EC]'}`}>
                              {item.count}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="p-4 border-t border-[#DCE7EC] bg-[#F5F9FB]/50">
          <div className="flex items-center justify-between text-[11px] text-[#718096]">
            <span>Newsroom Secure Mode</span>
            <span className="w-2 h-2 rounded-full bg-[#5FAF8A]" />
          </div>
        </div>
      </aside>
    </>
  );
};
