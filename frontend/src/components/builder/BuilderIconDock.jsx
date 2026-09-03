import React from 'react';
import {
  FileText,
  PanelTop,
  PanelBottom,
  Palette,
  Type,
  Image as ImageIcon,
  Sliders,
  Sun,
  Moon,
  HelpCircle,
  Terminal,
  MessageSquareHeart
} from 'lucide-react';

export const DOCK_ITEMS = [
  { id: 'page', label: 'Page', icon: FileText },
  { id: 'header', label: 'Header', icon: PanelTop },
  { id: 'footer', label: 'Footer', icon: PanelBottom },
  { id: 'colors', label: 'Colors', icon: Palette },
  { id: 'fonts', label: 'Fonts', icon: Type },
  { id: 'media', label: 'Media', icon: ImageIcon },
  { id: 'misc', label: 'Misc', icon: Sliders },
];

export default function BuilderIconDock({
  activeDrawer,
  onToggleDrawer,
  themeMode,
  onToggleThemeMode,
  onOpenMediaModal
}) {
  return (
    <aside className="w-16 bg-white text-slate-600 flex flex-col justify-between items-center py-3 border-r border-slate-200/90 shrink-0 z-20 select-none shadow-2xs">
      {/* Top Main Navigation Tool Icons */}
      <div className="flex flex-col items-center gap-1.5 w-full px-1.5">
        {DOCK_ITEMS.map((item) => {
          const IconComp = item.icon;
          const isActive = activeDrawer === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                if (item.id === 'media') {
                  onOpenMediaModal();
                }
                onToggleDrawer(item.id);
              }}
              title={`${item.label} Settings`}
              className={`relative w-12 h-12 rounded-xl flex flex-col items-center justify-center gap-1 text-[10px] font-semibold transition-all duration-200 cursor-pointer group ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30 font-bold'
                  : 'text-slate-500 hover:text-blue-600 hover:bg-blue-50/70'
              }`}
              style={isActive ? { background: 'linear-gradient(135deg, #0088ff 0%, #0044cc 100%)' } : {}}
            >
              {/* Active Indicator Pip */}
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-white rounded-r-full shadow-xs" />
              )}
              <IconComp size={18} className="transition-transform group-hover:scale-110" />
              <span className="leading-none text-[9px] tracking-tight">{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Bottom Utility Items */}
      <div className="flex flex-col items-center gap-1.5 w-full px-1.5 pt-3 border-t border-slate-100">
        <button
          onClick={onToggleThemeMode}
          className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-amber-500 hover:bg-slate-100 transition-colors cursor-pointer"
          title={`Switch Editor Mode`}
        >
          {themeMode === 'light' ? <Moon size={16} /> : <Sun size={16} />}
        </button>

        <button
          onClick={() => alert('TechnoSprint Visual Builder Help:\nUse the left rail to customize page metadata, header layout, dynamic colors, Google typography, and asset media.')}
          className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-50/70 transition-colors cursor-pointer"
          title="Help & Documentation"
        >
          <HelpCircle size={16} />
        </button>

        <button
          onClick={() => alert('Thank you for using TechnoSprint Builder! Feedback recorded.')}
          className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-rose-500 hover:bg-rose-50/70 transition-colors cursor-pointer"
          title="Send Feedback"
        >
          <MessageSquareHeart size={16} />
        </button>
      </div>
    </aside>
  );
}
