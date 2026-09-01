import React, { useState } from 'react';

export interface TabItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  defaultTab?: string;
  variant?: 'underline' | 'pill' | 'segmented' | 'vertical';
  isScrollable?: boolean;
}

export function Tabs({ items, defaultTab, variant = 'underline', isScrollable }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || items[0]?.id);

  const containerClasses = {
    underline: 'flex border-b border-border gap-6',
    pill: 'flex gap-2.5',
    segmented: 'flex bg-muted p-1 rounded-lg gap-0.5',
    vertical: 'flex flex-col border-r border-border pr-4 gap-1.5 w-48 shrink-0',
  };

  const buttonClasses = (isActive: boolean) => {
    const base = 'px-3 py-2 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer flex items-center gap-2';
    
    if (variant === 'underline') {
      return `${base} border-b-2 rounded-none px-1 -mb-px ${
        isActive 
          ? 'border-primary text-primary' 
          : 'border-transparent text-muted-foreground hover:text-foreground'
      }`;
    }
    
    if (variant === 'pill') {
      return `${base} ${
        isActive
          ? 'bg-primary text-primary-foreground shadow'
          : 'bg-transparent text-muted-foreground hover:bg-accent'
      }`;
    }

    if (variant === 'segmented') {
      return `${base} flex-1 justify-center rounded ${
        isActive
          ? 'bg-card text-foreground shadow-sm'
          : 'text-muted-foreground hover:text-foreground'
      }`;
    }

    if (variant === 'vertical') {
      return `${base} w-full justify-start ${
        isActive
          ? 'bg-primary/10 text-primary'
          : 'text-muted-foreground hover:bg-accent'
      }`;
    }

    return base;
  };

  return (
    <div className={`w-full flex ${variant === 'vertical' ? 'flex-row gap-6' : 'flex-col gap-4'}`}>
      <div className={`${containerClasses[variant]} ${isScrollable ? 'overflow-x-auto scrollbar-none' : ''}`}>
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={buttonClasses(activeTab === item.id)}
          >
            {item.icon && <span className="shrink-0">{item.icon}</span>}
            <span>{item.label}</span>
          </button>
        ))}
      </div>
      <div className="flex-1">
        {items.map((item) => (
          <div key={item.id} className={activeTab === item.id ? 'block' : 'hidden'}>
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
}
