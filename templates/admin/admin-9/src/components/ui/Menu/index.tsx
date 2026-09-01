import React from 'react';

export interface MenuItem {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export function Menu({ items }: { items: MenuItem[] }) {
  return (
    <div className="border border-border bg-card rounded-xl p-1.5 max-w-xs w-full shadow-sm select-none">
      <nav className="flex flex-col gap-0.5">
        {items.map((item, i) => (
          <button
            key={i}
            onClick={item.onClick}
            disabled={item.disabled}
            className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold rounded-lg hover:bg-accent text-foreground disabled:opacity-50 disabled:pointer-events-none transition-colors cursor-pointer w-full text-left"
          >
            {item.icon && <span className="text-muted-foreground shrink-0">{item.icon}</span>}
            <span className="flex-1">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
