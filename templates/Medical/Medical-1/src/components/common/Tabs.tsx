import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface TabItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  badge?: string | number;
}

interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (tabId: string) => void;
  className?: string;
  variant?: 'pills' | 'underline';
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onChange,
  className = '',
  variant = 'pills'
}) => {
  if (variant === 'underline') {
    return (
      <div className={`border-b border-slate-200 flex space-x-6 overflow-x-auto no-scrollbar ${className}`}>
        {tabs.map(tab => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={`pb-3 text-sm font-medium transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer relative ${
                isActive
                  ? 'text-teal-700 font-semibold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {tab.icon && <span>{tab.icon}</span>}
              <span>{tab.label}</span>
              {tab.badge !== undefined && (
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                    isActive ? 'bg-teal-100 text-teal-800' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {tab.badge}
                </span>
              )}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600 rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap gap-1.5 p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200/60 ${className}`}>
      {tabs.map(tab => {
        const isActive = tab.id === activeTab;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer select-none whitespace-nowrap ${
              isActive
                ? 'bg-white text-teal-800 shadow-2xs border border-slate-200/50'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
            }`}
          >
            {tab.icon && <span className="shrink-0">{tab.icon}</span>}
            <span>{tab.label}</span>
            {tab.badge !== undefined && (
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                  isActive ? 'bg-teal-50 text-teal-700' : 'bg-slate-200 text-slate-700'
                }`}
              >
                {tab.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
  category?: string;
}

export const Accordion: React.FC<{ items: AccordionItem[]; allowMultiple?: boolean }> = ({
  items,
  allowMultiple = false
}) => {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id]);

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds(prev => (prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]));
    } else {
      setOpenIds(prev => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className="space-y-3">
      {items.map(item => {
        const isOpen = openIds.includes(item.id);
        return (
          <div
            key={item.id}
            className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
              isOpen ? 'border-teal-200 bg-teal-50/20 shadow-2xs' : 'border-slate-200 bg-white hover:border-slate-300'
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between p-5 text-left font-semibold text-slate-800 hover:text-teal-700 transition-colors gap-4 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                {item.category && (
                  <span className="text-[11px] font-bold text-teal-700 bg-teal-100/60 px-2 py-0.5 rounded-md uppercase tracking-wider">
                    {item.category}
                  </span>
                )}
                <span className="text-sm sm:text-base leading-snug">{item.title}</span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                  isOpen ? 'transform rotate-180 text-teal-600' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in-50 duration-150">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export const Skeleton: React.FC<{ className?: string }> = ({ className = 'h-4 w-full' }) => (
  <div className={`animate-pulse bg-slate-200 rounded-lg ${className}`} />
);
