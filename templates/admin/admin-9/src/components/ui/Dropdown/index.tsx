import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export interface DropdownItem {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
  divider?: boolean;
}

export function Dropdown({ trigger, items }: { trigger?: React.ReactNode; items: DropdownItem[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left select-none">
      <div onClick={() => setIsOpen(!isOpen)}>
        {trigger || (
          <button className="flex items-center gap-1 text-xs font-semibold px-3 py-2 border border-border bg-card rounded-lg hover:bg-accent text-foreground cursor-pointer">
            <span>Actions</span>
            <ChevronDown className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-44 bg-card border border-border rounded-lg shadow-xl p-1 z-50 animate-in fade-in duration-200">
          {items.map((item, i) => (
            <React.Fragment key={i}>
              {item.divider && <hr className="border-t border-border/60 my-1" />}
              <button
                onClick={() => { item.onClick(); setIsOpen(false); }}
                className="w-full flex items-center gap-2.5 px-3 py-2 text-left text-xs font-medium rounded hover:bg-accent text-foreground cursor-pointer transition-colors"
              >
                {item.icon && <span className="shrink-0">{item.icon}</span>}
                <span>{item.label}</span>
              </button>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}
