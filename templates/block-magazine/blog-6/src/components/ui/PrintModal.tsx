import React, { memo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Check, Truck, ArrowRight, ShieldCheck } from 'lucide-react';
import { DynamicImage } from './DynamicImage';
import { FALLBACK_PATTERNS } from '../../data/assets';

export interface PrintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrintModal: React.FC<PrintModalProps> = memo(({ isOpen, onClose }) => {
  const [ordered, setOrdered] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      setOrdered(true);
      setTimeout(() => {
        setOrdered(false);
        onClose();
      }, 3500);
    }
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
            className="absolute inset-0 bg-slate-950/75 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[90vh] overflow-y-auto"
          >
            {/* Ambient Top Glow */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-500" />

            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer z-20"
            >
              <X className="w-4 h-4" />
            </button>

            {ordered ? (
              <div className="py-10 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 border border-emerald-200 shadow-lg animate-bounce">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-2xl text-slate-900 mb-2">
                  Order Dispatched to Press!
                </h3>
                <p className="text-sm text-slate-600 max-w-sm mb-4">
                  Thank you, <strong>{name}</strong>. A tracking reservation for <strong>Issue 08: The Spatial Horizons</strong> has been sent to <strong>{email}</strong>.
                </p>
                <div className="px-4 py-2 rounded-full bg-slate-100 text-xs font-mono text-slate-600 flex items-center gap-2">
                  <Truck className="w-4 h-4 text-blue-600" />
                  <span>Ships in Fedrigoni archival sleeve within 48 hours.</span>
                </div>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row gap-6 items-center">
                {/* 3D Print Edition Visual Preview (Eliminates Empty Space) */}
                <div className="w-full md:w-5/12 aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 bg-slate-950 flex-shrink-0">
                  <DynamicImage
                    src={FALLBACK_PATTERNS.printEditionMockup}
                    alt="Design Mag Issue 08 Print Edition Mockup"
                    fallbackKey="printEditionMockup"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Form & Specs Column */}
                <div className="w-full md:w-7/12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-600 mb-1.5">
                      <Sparkles className="w-4 h-4 text-amber-500" />
                      <span>Collectible Print Edition</span>
                    </div>

                    <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 mb-2 tracking-tight">
                      Design Mag Issue 08
                    </h3>
                    <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                      A 280-page, Smyth-sewn archival quarterly publication printed on 140gsm Fedrigoni paper with dual-foil holographic embossing. Includes spatial AR companion.
                    </p>

                    {/* Specs Box */}
                    <div className="grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 mb-4 text-center">
                      <div className="flex flex-col">
                        <span className="text-[9px] font-mono uppercase text-slate-400">Binding</span>
                        <span className="text-xs font-bold text-slate-800">Smyth Sewn</span>
                      </div>
                      <div className="flex flex-col border-x border-slate-200">
                        <span className="text-[9px] font-mono uppercase text-slate-400">Paper</span>
                        <span className="text-xs font-bold text-slate-800">140gsm</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[9px] font-mono uppercase text-slate-400">Price</span>
                        <span className="text-xs font-bold text-blue-600">$38 USD</span>
                      </div>
                    </div>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleOrder} className="flex flex-col gap-2.5">
                    <div>
                      <label className="text-[11px] font-mono font-semibold text-slate-700 block mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Elena Vance"
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-mono font-semibold text-slate-700 block mb-1">
                        Delivery Email
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="elena@designmag.com"
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-1.5 py-3 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-display font-bold text-xs tracking-tight transition-all duration-300 shadow-md hover:shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                    >
                      <span>Reserve Collectible Print Copy</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center justify-center gap-1.5 text-[10px] font-mono text-slate-400 mt-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      <span>Free global express shipping included.</span>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
});

PrintModal.displayName = 'PrintModal';
