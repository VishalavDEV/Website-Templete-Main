import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  ShoppingBag, 
  Sparkles, 
  Camera, 
  CreditCard,
  Plus
} from 'lucide-react';

const PACKAGES = [
  { id: 'portrait', name: 'Portrait & Editorial', price: 350 },
  { id: 'wedding', name: 'Weddings & Celebrations', price: 1800 },
  { id: 'commercial', name: 'Commercial & Brand Campaign', price: 3200 },
  { id: 'custom', name: 'Custom Expedition Shoot', price: 950 },
];

const ADDONS = [
  { id: 'drone', name: 'Drone Aerial 5.1K Footage', price: 250 },
  { id: 'rush', name: '24-Hour Expedited Delivery', price: 180 },
  { id: 'album', name: 'Hardcover Linen Fine-Art Album', price: 300 },
];

export default function BookingModal({ initialPackage, isOpen, onClose, onShowToast }) {
  const [selectedPkg, setSelectedPkg] = useState(
    initialPackage || 'Portrait & Editorial'
  );
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    location: '',
    notes: ''
  });
  const [confirmed, setConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const currentPkgObj = PACKAGES.find((p) => p.name === selectedPkg) || PACKAGES[0];
  const addonsTotal = selectedAddons.reduce((acc, addonId) => {
    const addon = ADDONS.find((a) => a.id === addonId);
    return acc + (addon ? addon.price : 0);
  }, 0);
  const totalPrice = currentPkgObj.price + addonsTotal;

  const toggleAddon = (id) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((a) => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const handleBooking = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      onShowToast({ message: 'Please enter your name and email.', type: 'info' });
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setConfirmed(true);
      onShowToast({
        message: `Booking confirmed for ${selectedPkg}! Check your email for details.`,
        type: 'success'
      });
    }, 1200);
  };

  const handleResetAndClose = () => {
    setConfirmed(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 overflow-y-auto"
        onClick={handleResetAndClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative max-w-2xl w-full bg-[#181818] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl my-8 text-white max-h-[90vh] overflow-y-auto scrollbar-thin"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleResetAndClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-[#e74c3c] text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {confirmed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center space-y-4"
            >
              <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                Booking Requested Successfully!
              </h3>
              <p className="text-gray-300 text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-white">{formData.name}</span>. We have reserved your requested package for <span className="text-[#e74c3c] font-semibold">${totalPrice}</span>.
              </p>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 max-w-sm mx-auto text-left text-xs space-y-1 text-gray-300">
                <div><strong className="text-white">Package:</strong> {selectedPkg}</div>
                <div><strong className="text-white">Preferred Date:</strong> {formData.date || 'To be scheduled'}</div>
                <div><strong className="text-white">Location:</strong> {formData.location || 'Studio / Location'}</div>
                <div><strong className="text-white">Estimated Total:</strong> ${totalPrice} USD</div>
              </div>
              <div className="pt-4">
                <button
                  onClick={handleResetAndClose}
                  className="px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#e74c3c] text-white hover:bg-[#d63031] transition-all shadow-lg"
                >
                  Done
                </button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleBooking} className="space-y-6">
              
              {/* Header */}
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#e74c3c] mb-1">
                  <ShoppingBag className="w-4 h-4" />
                  <span>Reserve & Checkout</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                  Book Photo Shoot Session
                </h2>
                <p className="text-gray-400 text-xs sm:text-sm mt-1">
                  Choose your options and lock in your session slot.
                </p>
              </div>

              {/* Package Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                  Select Package
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {PACKAGES.map((pkg) => (
                    <button
                      type="button"
                      key={pkg.id}
                      onClick={() => setSelectedPkg(pkg.name)}
                      className={`p-3.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                        selectedPkg === pkg.name
                          ? 'bg-[#e74c3c]/15 border-[#e74c3c] text-white'
                          : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      <div className="text-xs font-semibold">{pkg.name}</div>
                      <div className="text-xs font-bold text-[#e74c3c]">${pkg.price}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Add-ons */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                  Optional Creative Add-Ons
                </label>
                <div className="space-y-2">
                  {ADDONS.map((addon) => {
                    const isSelected = selectedAddons.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-colors ${
                          isSelected
                            ? 'bg-white/10 border-white/30 text-white'
                            : 'bg-white/5 border-white/5 text-gray-400 hover:bg-white/[0.08]'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 text-xs font-medium">
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => {}}
                            className="rounded accent-[#e74c3c]"
                          />
                          <span>{addon.name}</span>
                        </div>
                        <span className="text-xs font-semibold text-gray-300">+${addon.price}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Client Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full name"
                    className="w-full px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#e74c3c]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@domain.com"
                    className="w-full px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#e74c3c]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1">
                    Target Shoot Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#222] border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#e74c3c]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1">
                    Location / City
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Zurich Studio or Outdoor"
                    className="w-full px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#e74c3c]"
                  />
                </div>
              </div>

              {/* Total Summary & Submit */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-gray-400">Total Investment:</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#e74c3c]" style={{ fontFamily: 'var(--font-heading)' }}>
                    ${totalPrice} USD
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#e74c3c] hover:bg-[#d63031] text-white shadow-xl shadow-[#e74c3c]/30 transition-all hover:scale-105 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <CreditCard className="w-4 h-4" />
                  <span>{loading ? 'Processing...' : 'Confirm & Reserve Session'}</span>
                </button>
              </div>

            </form>
          )}

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
