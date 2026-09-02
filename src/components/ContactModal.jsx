import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck,
  Sprout
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteConfig, calculatorCropData } from '../data/content';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    farmName: '',
    email: '',
    phone: '',
    acreage: '500-1500',
    cropType: 'corn-grain',
    interest: 'full-ecosystem',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#2D6A4F', '#E9C46A', '#52B788', '#DDA15E']
        });
      } catch (err) {}
    }, 1000);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

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
            className="fixed inset-0 bg-forest-950/85 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-forest-100 z-10 my-8 max-h-[90vh] flex flex-col"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-forest-100 bg-forest-900 text-white shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-forest-800 text-wheat-400 flex items-center justify-center">
                  <Sprout className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-white">Book Free Acreage & Soil Audit</h3>
                  <p className="text-forest-300 text-xs">A licensed regional agronomist will analyze your field boundaries.</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-forest-800 text-forest-300 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto">
              {isSuccess ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-forest-950">
                    Audit Request Received!
                  </h4>
                  <p className="text-earth-700 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-forest-950">{formData.name}</strong>. Our senior agronomist for your region has been dispatched your acreage profile and will contact you at <strong className="text-forest-950">{formData.phone || formData.email}</strong> within 1 business day.
                  </p>
                  <div className="p-4 bg-forest-50 rounded-2xl border border-forest-200 text-xs text-forest-800 max-w-md mx-auto text-left">
                    <div className="font-bold mb-1">What to expect next:</div>
                    <ul className="list-disc list-inside space-y-1 text-earth-700">
                      <li>Satellite NDVI baseline scan for your coordinates</li>
                      <li>Soil microbiome & N-P-K bioavailability blueprint</li>
                      <li>Estimated 12-month biological ROI projection</li>
                    </ul>
                  </div>
                  <button
                    onClick={handleReset}
                    className="px-8 py-3 rounded-full bg-forest-800 text-white font-bold text-sm hover:bg-forest-900 transition-colors shadow-md"
                  >
                    Done & Return to Site
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-forest-800 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Marcus Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-forest-200 focus:outline-none focus:ring-2 focus:ring-forest-600 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-forest-800 mb-1.5">
                        Farm / Business Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vance Heritage Ag"
                        value={formData.farmName}
                        onChange={(e) => setFormData({ ...formData, farmName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-forest-200 focus:outline-none focus:ring-2 focus:ring-forest-600 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-forest-800 mb-1.5">
                        Work / Farm Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@farm.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-forest-200 focus:outline-none focus:ring-2 focus:ring-forest-600 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-forest-800 mb-1.5">
                        Mobile Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-forest-200 focus:outline-none focus:ring-2 focus:ring-forest-600 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-forest-800 mb-1.5">
                        Total Cultivated Acreage
                      </label>
                      <select
                        value={formData.acreage}
                        onChange={(e) => setFormData({ ...formData, acreage: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-forest-200 focus:outline-none focus:ring-2 focus:ring-forest-600 text-sm bg-white"
                      >
                        <option value="under-250">Under 250 Acres (Family Plot)</option>
                        <option value="250-1000">250 - 1,000 Acres</option>
                        <option value="1000-5000">1,000 - 5,000 Acres</option>
                        <option value="5000+">5,000+ Acres (Commercial / Co-Op)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-forest-800 mb-1.5">
                        Primary Crop Focus
                      </label>
                      <select
                        value={formData.cropType}
                        onChange={(e) => setFormData({ ...formData, cropType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-forest-200 focus:outline-none focus:ring-2 focus:ring-forest-600 text-sm bg-white"
                      >
                        {calculatorCropData.map(c => (
                          <option key={c.id} value={c.id}>{c.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-forest-800 mb-1.5">
                      Specific Soil Challenges or Goals
                    </label>
                    <textarea
                      rows="3"
                      placeholder="e.g. Looking to transition 800 acres to organic wheat, reduce synthetic fertilizer costs, and verify soil carbon credits."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-forest-200 focus:outline-none focus:ring-2 focus:ring-forest-600 text-sm"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-wheat-500 to-wheat-600 hover:from-wheat-400 hover:to-wheat-500 text-forest-950 font-bold py-3.5 px-6 rounded-2xl shadow-lg hover:shadow-glow-amber transition-all text-sm"
                    >
                      {isSubmitting ? (
                        <span>Processing Field Telemetry...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-forest-950" />
                          <span>Submit Free Field Audit Request</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-earth-600 text-center">
                    🔒 Your farm boundaries and soil data are 100% confidential and never shared with commodity traders.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
