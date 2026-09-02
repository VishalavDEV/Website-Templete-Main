import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  FileText,
  PhoneCall
} from 'lucide-react';

export default function ServiceModal({ service, isOpen, onClose, onOpenContact }) {
  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-forest-950/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-forest-100 z-10 my-8 max-h-[90vh] flex flex-col"
          >
            {/* Modal Header with Image */}
            <div className="relative h-56 sm:h-64 w-full overflow-hidden shrink-0">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent" />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-forest-900/80 hover:bg-forest-900 text-white backdrop-blur-md transition-colors"
                aria-label="Close service modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header Title inside banner */}
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-wheat-500 text-forest-950 text-xs font-bold uppercase tracking-wider">
                    {service.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-forest-800/80 text-emerald-300 text-xs font-semibold backdrop-blur-md border border-forest-700">
                    {service.tag}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold leading-tight">
                  {service.title}
                </h3>
              </div>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              {/* Detailed Description */}
              <div>
                <h4 className="text-xs font-bold text-forest-700 uppercase tracking-wider mb-2">
                  System Architecture & Overview
                </h4>
                <p className="text-earth-800 text-sm sm:text-base leading-relaxed">
                  {service.detailedDesc}
                </p>
              </div>

              {/* Performance Metric Box */}
              <div className="bg-forest-50 p-4 rounded-2xl border border-forest-200/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-forest-800 text-wheat-400 flex items-center justify-center font-bold">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-forest-600 font-bold uppercase">Proven Field Efficacy</div>
                    <div className="text-lg font-bold text-forest-950">{service.stats}</div>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 text-xs text-forest-700 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>3rd-Party Audited</span>
                </div>
              </div>

              {/* Feature Highlights Checklist */}
              <div>
                <h4 className="text-xs font-bold text-forest-700 uppercase tracking-wider mb-3">
                  Key Technical Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 bg-cream-50 p-3 rounded-xl border border-forest-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-forest-900 font-medium leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 bg-forest-50/70 border-t border-forest-100 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <span className="text-xs text-earth-600 text-center sm:text-left">
                Compatible with all ISO 11783 tractor controllers & central irrigation pivots.
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={onClose}
                  className="w-1/2 sm:w-auto px-5 py-2.5 rounded-full border border-forest-200 text-forest-800 hover:bg-forest-100 text-xs font-bold transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onOpenContact();
                  }}
                  className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 bg-forest-800 hover:bg-forest-900 text-white px-6 py-2.5 rounded-full text-xs font-bold shadow-md hover:shadow-glow-green transition-all"
                >
                  <span>Inquire for Acreage</span>
                  <ArrowRight className="w-3.5 h-3.5 text-wheat-400" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
