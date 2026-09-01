import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  id: string;
  title: string;
  content: string;
  category?: string;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({ items, allowMultiple = false }) => {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || '']);

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
            className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden transition-all duration-200"
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
            >
              <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                {item.title}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-teal-600' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-4 pb-5 sm:px-5 sm:pb-6 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-1">
                <p className="pt-3">{item.content}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
