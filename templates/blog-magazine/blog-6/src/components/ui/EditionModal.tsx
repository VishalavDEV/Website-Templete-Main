import React, { memo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Globe, Check, Sparkles, MapPin } from 'lucide-react';

export interface EditionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EDITIONS = [
  { id: 'global-en', name: 'Global Edition', lang: 'English (US/UK)', active: true, region: 'Worldwide' },
  { id: 'eu-fr', name: 'European Edition', lang: 'Français & English', active: false, region: 'Paris / Berlin' },
  { id: 'asia-jp', name: 'Tokyo Studio Edition', lang: '日本語 & English', active: false, region: 'Tokyo' },
  { id: 'nordic', name: 'Nordic Architecture Bureau', lang: 'Svenska & English', active: false, region: 'Stockholm' },
];

export const EditionModal: React.FC<EditionModalProps> = memo(({ isOpen, onClose }) => {
  const [selectedEdition, setSelectedEdition] = useState('global-en');

  const handleSelect = (id: string) => {
    setSelectedEdition(id);
    setTimeout(() => {
      onClose();
    }, 400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 overflow-hidden z-10"
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600" />

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
                <Globe className="w-4 h-4" />
                <span>Regional Edition & Language</span>
              </div>
              <button
                onClick={onClose}
                aria-label="Close edition modal"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 mb-2">
              Select Bureau Edition
            </h3>
            <p className="text-xs text-slate-600 mb-6">
              Switching regional editions adjusts curated essays, currency, and local architectural showcases.
            </p>

            <div className="flex flex-col gap-2.5">
              {EDITIONS.map((ed) => (
                <button
                  key={ed.id}
                  onClick={() => handleSelect(ed.id)}
                  className={`p-3.5 sm:p-4 rounded-2xl border text-left flex items-center justify-between transition-all duration-200 cursor-pointer ${
                    selectedEdition === ed.id
                      ? 'bg-blue-50/80 border-blue-500 shadow-xs'
                      : 'bg-slate-50/70 hover:bg-slate-100 border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold ${
                      selectedEdition === ed.id ? 'bg-blue-600 text-white shadow-xs' : 'bg-slate-200 text-slate-700'
                    }`}>
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-display font-bold text-sm text-slate-900 block">
                        {ed.name}
                      </span>
                      <span className="text-[11px] font-mono text-slate-500">
                        {ed.lang} • {ed.region}
                      </span>
                    </div>
                  </div>

                  {selectedEdition === ed.id && (
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
});

EditionModal.displayName = 'EditionModal';
