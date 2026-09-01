import React, { useState } from 'react';
import { useEditorial } from '../services/editorialStore';
import { ActiveView } from '../types';
import { 
  Sparkles, Calendar, CheckSquare, Users, TrendingUp, BookOpen, 
  Layers, FileEdit, Archive, FolderHeart, Image, Settings, 
  ChevronDown, ChevronRight, X, ShieldAlert, SlidersHorizontal 
} from 'lucide-react';

interface WorkspaceNavProps {
  isMobileOpen: boolean;
  onCloseMobile: () => void;
}

interface NavItem {
  id: string;
  label: string;
  view: ActiveView;
  icon: React.ElementType;
  badge?: number | string;
  badgeColor?: string;
  actionFilter?: () => void;
}

interface NavGroup {
  id: string;
  title: string;
  defaultExpanded?: boolean;
  items: NavItem[];
}

export const WorkspaceNav: React.FC<WorkspaceNavProps> = ({ isMobileOpen, onCloseMobile }) => {
  const { 
    activeView, 
    setActiveView, 
    stories, 
    attentionItems, 
    authors,
    setPipelineFilter 
  } = useEditorial();

  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({
    today: true,
    content: true,
    editorial: true,
    archive: true,
    system: true
  });

  const toggleGroup = (groupId: string) => {
    setExpandedGroups((prev) => ({ ...prev, [groupId]: !prev[groupId] }));
  };

  const pendingAttentionCount = attentionItems.filter((i) => !i.completed && !i.snoozed).length;
  const reviewCount = stories.filter((s) => s.status === 'review').length;
  const scheduledCount = stories.filter((s) => s.status === 'scheduled').length;
  const draftCount = stories.filter((s) => s.status === 'draft').length;

  const navGroups: NavGroup[] = [
    {
      id: 'today',
      title: 'TODAY',
      defaultExpanded: true,
      items: [
        {
          id: 'nav_overview',
          label: 'Overview',
          view: 'today_overview',
          icon: Sparkles
        },
        {
          id: 'nav_scheduled',
          label: 'Scheduled Releases',
          view: 'editorial_calendar',
          icon: Calendar,
          badge: scheduledCount,
          badgeColor: 'bg-sky-100 text-sky-800'
        },
        {
          id: 'nav_reviews',
          label: 'Review Queue',
          view: 'editorial_reviews',
          icon: CheckSquare,
          badge: pendingAttentionCount,
          badgeColor: 'bg-amber-100 text-amber-800'
        },
        {
          id: 'nav_team',
          label: 'Team Workload',
          view: 'team_workload',
          icon: Users,
          badge: `${authors.length} active`,
          badgeColor: 'bg-slate-100 text-slate-700'
        },
        {
          id: 'nav_readers',
          label: 'Reader Analytics',
          view: 'audience_analytics',
          icon: TrendingUp,
          badge: '+9.4%',
          badgeColor: 'bg-emerald-100 text-emerald-800'
        }
      ]
    },
    {
      id: 'content',
      title: 'CONTENT',
      defaultExpanded: true,
      items: [
        {
          id: 'nav_all_stories',
          label: 'All Stories',
          view: 'content_all',
          icon: BookOpen,
          badge: stories.length,
          actionFilter: () => setPipelineFilter(null)
        },
        {
          id: 'nav_pipeline',
          label: 'Editorial Pipeline',
          view: 'content_pipeline',
          icon: Layers
        },
        {
          id: 'nav_drafts',
          label: 'Drafts in Progress',
          view: 'content_all',
          icon: FileEdit,
          badge: draftCount,
          actionFilter: () => setPipelineFilter('draft')
        }
      ]
    },
    {
      id: 'editorial',
      title: 'EDITORIAL',
      defaultExpanded: true,
      items: [
        {
          id: 'nav_editorial_calendar',
          label: 'Publishing Calendar',
          view: 'editorial_calendar',
          icon: Calendar
        },
        {
          id: 'nav_attention',
          label: 'Needs Attention',
          view: 'editorial_reviews',
          icon: ShieldAlert,
          badge: pendingAttentionCount,
          badgeColor: 'bg-rose-100 text-rose-800'
        },
        {
          id: 'nav_assignments',
          label: 'Staff Assignments',
          view: 'editorial_assignments',
          icon: SlidersHorizontal
        }
      ]
    },
    {
      id: 'archive',
      title: 'ARCHIVE',
      defaultExpanded: true,
      items: [
        {
          id: 'nav_collections',
          label: 'Curated Collections',
          view: 'archive_collections',
          icon: FolderHeart
        },
        {
          id: 'nav_media',
          label: 'Science Media Library',
          view: 'archive_media',
          icon: Image
        }
      ]
    },
    {
      id: 'system',
      title: 'SYSTEM',
      defaultExpanded: true,
      items: [
        {
          id: 'nav_settings',
          label: 'Editorial Standards',
          view: 'system_settings',
          icon: Settings
        }
      ]
    }
  ];

  const handleItemClick = (item: NavItem) => {
    setActiveView(item.view);
    if (item.actionFilter) {
      item.actionFilter();
    }
    if (isMobileOpen) {
      onCloseMobile();
    }
  };

  const navContent = (
    <div className="flex flex-col h-full select-none">
      
      {/* Nav Groups */}
      <div className="flex-1 overflow-y-auto space-y-6 px-6">
        {navGroups.map((group) => {
          return (
            <div key={group.id} id={`nav-group-${group.id}`} className="space-y-1">
              <div className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-400 mb-2">
                {group.title}
              </div>

              <div className="space-y-1">
                {group.items.map((item) => {
                  const isActive = activeView === item.view;

                  return (
                    <button
                      key={item.id}
                      id={item.id}
                      onClick={() => handleItemClick(item)}
                      className={`w-full flex items-center justify-between px-3 py-2 text-left rounded-l-md transition-all cursor-pointer group ${
                        isActive
                          ? 'bg-sky-50 text-sky-900 border-r-2 border-sky-500'
                          : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      <span className={`text-sm ${isActive ? 'font-bold' : 'font-medium'}`}>
                        {item.label}
                      </span>

                      {isActive ? (
                        <div className="w-1.5 h-1.5 bg-sky-500 rounded-full shrink-0"></div>
                      ) : item.badge !== undefined ? (
                        <span
                          className={`text-[10px] font-semibold px-1.5 py-0.2 rounded shrink-0 ${
                            item.badgeColor || 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          {item.badge}
                        </span>
                      ) : null}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Server Status Panel matching Artistic Flair */}
      <div className="mt-auto p-6">
        <div className="bg-sky-50 p-4 rounded-xl border border-sky-100">
          <div className="text-[10px] font-bold text-sky-800 uppercase tracking-wider mb-1">
            Server Status
          </div>
          <div className="text-xs text-sky-600 mb-2 font-medium">
            Arctic Region Node 04
          </div>
          <div className="w-full bg-sky-200 h-1 rounded-full overflow-hidden">
            <div className="bg-sky-500 w-3/4 h-full rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar (Permanent) */}
      <aside 
        id="desktop-workspace-nav" 
        className="hidden md:block w-60 shrink-0 border-r border-sky-50 bg-white flex flex-col pt-6 z-20 self-stretch min-h-[calc(100vh-64px)] sticky top-16"
      >
        {navContent}
      </aside>

      {/* Mobile Drawer (Overlay) */}
      {isMobileOpen && (
        <div 
          id="mobile-nav-backdrop" 
          className="fixed inset-0 z-50 bg-slate-900/30 backdrop-blur-xs md:hidden"
          onClick={onCloseMobile}
        >
          <div
            id="mobile-nav-drawer"
            className="fixed inset-y-0 left-0 w-64 bg-white shadow-2xl z-50 flex flex-col pt-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 pb-4 border-b border-sky-100 flex items-center justify-between">
              <div className="text-xl font-bold tracking-tighter text-sky-900">
                ELEMENTAL<span className="text-sky-400">.</span>
              </div>
              <button
                id="close-mobile-nav-btn"
                onClick={onCloseMobile}
                className="p-1 rounded-md text-slate-400 hover:text-slate-700 cursor-pointer"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto pt-2">
              {navContent}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
