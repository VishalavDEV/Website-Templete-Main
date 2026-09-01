import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMulti?: boolean;
}

export function Accordion({ items, allowMulti = false }: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggle = (id: string) => {
    if (allowMulti) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((o) => o !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className="divide-y divide-border border border-border rounded-xl bg-card overflow-hidden shadow-sm">
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div key={item.id} className="w-full">
            <button
              onClick={() => toggle(item.id)}
              className="flex w-full items-center justify-between p-4.5 text-left text-sm font-semibold text-foreground hover:bg-accent/40 transition-colors cursor-pointer"
            >
              <span>{item.title}</span>
              <ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`transition-all overflow-hidden duration-200 ${isOpen ? 'max-h-screen border-t border-border/30 bg-muted/10' : 'max-h-0'}`}>
              <div className="p-4.5 text-xs leading-relaxed text-muted-foreground">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
