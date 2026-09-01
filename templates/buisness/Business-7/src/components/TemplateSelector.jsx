import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, Check } from 'lucide-react';

const options = [
  { id: 'corporate', name: 'Corporate', color: 'bg-amber-500' },
  { id: 'technology', name: 'Technology', color: 'bg-cyan-500' },
  { id: 'creative', name: 'Creative Agency', color: 'bg-pink-500' },
  { id: 'consulting', name: 'Consulting', color: 'bg-emerald-500' },
  { id: 'startup', name: 'Startup Studio', color: 'bg-violet-500' },
];

export default function TemplateSelector({ activeId, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="mb-3 bg-brand-dark text-white border border-white/10 p-4 rounded-lg shadow-2xl flex flex-col space-y-2 w-52"
          >
            <span className="text-[10px] font-bold tracking-widest text-brand-accent mb-1 uppercase block border-b border-white/5 pb-1">
              Select Template
            </span>
            {options.map((opt) => {
              const isActive = opt.id === activeId;
              return (
                <button
                  key={opt.id}
                  onClick={() => {
                    onChange(opt.id);
                    // Keep open or close? Close after click is nice on mobile
                    if (window.innerWidth < 768) setIsOpen(false);
                  }}
                  className={`flex items-center justify-between px-3 py-2 rounded text-left transition-colors duration-200 text-xs ${
                    isActive ? 'bg-white/10 font-bold text-brand-accent' : 'hover:bg-white/5 text-white/70 hover:text-white'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    {/* Small colored indicator dot */}
                    <span className={`w-2.5 h-2.5 rounded-full ${opt.color}`} />
                    <span>{opt.name}</span>
                  </div>
                  {isActive && <Check size={12} className="text-brand-accent" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center space-x-2 bg-brand-dark border border-white/10 text-white px-4 py-3 rounded-full shadow-xl hover:bg-brand-accent hover:text-brand-dark hover:border-brand-accent transition-colors duration-300 focus:outline-none"
        aria-label="Toggle Template Selector"
      >
        <LayoutGrid size={16} />
        <span className="text-[10px] font-bold tracking-wider uppercase font-mono">
          {isOpen ? 'CLOSE SWITCHER' : 'SWITCH TEMPLATE'}
        </span>
      </motion.button>
    </div>
  );
}
