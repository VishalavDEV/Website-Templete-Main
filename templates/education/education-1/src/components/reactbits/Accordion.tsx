import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionItemData {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

interface AccordionProps {
  items: AccordionItemData[];
  allowMultiple?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  className = '',
}) => {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || '']);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={`space-y-3.5 ${className}`}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);

        return (
          <div
            key={item.id}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden text-left ${
              isOpen
                ? 'bg-indigo-50/40 border-indigo-200 shadow-md shadow-indigo-500/5'
                : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
            }`}
          >
            <button
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
            >
              <span
                className={`text-base sm:text-lg font-bold font-display transition-colors ${
                  isOpen ? 'text-indigo-900' : 'text-slate-900'
                }`}
              >
                {item.question}
              </span>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  isOpen
                    ? 'bg-indigo-600 text-white rotate-180 shadow-xs'
                    : 'bg-slate-100 text-slate-500'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in slide-in-from-top-1 duration-200">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
