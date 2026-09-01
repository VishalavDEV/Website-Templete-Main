import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface AccordionItemProps {
  id: string;
  question: string;
  answer: string;
  category?: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  id,
  question,
  answer,
  category,
  isOpen = false,
  onToggle,
}) => {
  return (
    <div className="border-b border-[var(--border-color)] py-5 transition-colors duration-200">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${id}`}
        className="w-full flex items-center justify-between gap-4 text-left group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] rounded-lg p-1"
      >
        <div className="space-y-1">
          {category && (
            <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent-color)]">
              {category}
            </span>
          )}
          <h3 className="text-lg md:text-xl font-bold text-[var(--text-color)] group-hover:text-[var(--accent-color)] transition-colors duration-200">
            {question}
          </h3>
        </div>
        <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[var(--border-color)] group-hover:border-[var(--accent-color)] flex items-center justify-center text-[var(--text-color)] group-hover:text-[var(--accent-color)] transition-all duration-200">
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`accordion-content-${id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <p className="pt-4 pb-2 text-sm md:text-base text-[var(--secondary-color)] leading-relaxed font-light">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface AccordionProps {
  items: { id: string; question: string; answer: string; category?: string }[];
  allowMultiple?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({ items, allowMultiple = false }) => {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || '']);

  const handleToggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds(prev => (prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]));
    } else {
      setOpenIds(prev => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className="divide-y divide-[var(--border-color)] border-t border-[var(--border-color)]">
      {items.map(item => (
        <AccordionItem
          key={item.id}
          id={item.id}
          question={item.question}
          answer={item.answer}
          category={item.category}
          isOpen={openIds.includes(item.id)}
          onToggle={() => handleToggle(item.id)}
        />
      ))}
    </div>
  );
};
