import React from 'react';
import { clsx } from 'clsx';

export interface TabItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  badge?: number | string;
}

export interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (id: string) => void;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onChange,
  className
}) => {
  return (
    <div className={clsx('border-b border-app flex items-center gap-1 overflow-x-auto no-scrollbar', className)}>
      {tabs.map(tab => {
        const isActive = tab.id === activeTab;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={clsx(
              'flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-all whitespace-nowrap cursor-pointer',
              isActive
                ? 'border-blue-500 text-blue-500 font-semibold'
                : 'border-transparent text-app-secondary hover:text-app-primary hover:border-app'
            )}
          >
            {tab.icon && <span className="w-4 h-4">{tab.icon}</span>}
            <span>{tab.label}</span>
            {tab.badge !== undefined && (
              <span
                className={clsx(
                  'px-2 py-0.5 text-xs rounded-full font-medium',
                  isActive
                    ? 'bg-blue-500/20 text-blue-400'
                    : 'bg-app-secondary text-app-secondary'
                )}
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
