import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, CheckCircle2, ShieldCheck, Sparkles, Key } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BookingModal({ isOpen, onClose, selectedVehicle }) {
  const [days, setDays] = useState(3);
  const [pickupCity, setPickupCity] = useState('Monaco / Nice Airport');
  const [conciergeDelivery, setConciergeDelivery] = useState(true);
  const [trackTelemetry, setTrackTelemetry] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');

  if (!isOpen) return null;

  const vehicle = selectedVehicle || {
    name: 'BMW M2 CS Shadowline',
    category: 'Track Coupe',
    dailyRate: 480,
    imageUrl: '/images/hero_car.jpg'
  };

  const dailyTotal = vehicle.dailyRate;
  const conciergeFee = conciergeDelivery ? 150 : 0;
  const telemetryFee = trackTelemetry ? 95 : 0;
  const subtotal = dailyTotal * days + conciergeFee + telemetryFee;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F2994A', '#FFFFFF', '#FFAF68', '#D47020']
    });
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-2xl bg-[#0e0e13] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden text-white"
      >
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-6 right-6 text-white/50 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F2994A] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Priority Reservation Protocol</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-6">
              Reserve Your {vehicle.name}
            </h2>

            {/* Vehicle Summary Box */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] mb-6">
              <img
                src={vehicle.imageUrl}
                alt={vehicle.name}
                className="w-24 h-16 object-cover rounded-xl border border-white/10"
              />
              <div>
                <span className="text-[10px] uppercase font-mono text-[#F2994A] block">
                  {vehicle.category}
                </span>
                <h4 className="text-base font-bold font-display text-white">
                  {vehicle.name}
                </h4>
                <p className="text-xs text-[#8E8E99] font-mono">
                  ${vehicle.dailyRate} USD / day &bull; Unlimited European Cross-Border
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8E8E99] mb-1.5 font-medium">
                    Pickup Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-4 h-4 text-[#F2994A]" />
                    <select
                      value={pickupCity}
                      onChange={(e) => setPickupCity(e.target.value)}
                      className="w-full bg-[#181820] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white focus:border-[#F2994A] focus:outline-none"
                    >
                      <option>Monaco / Nice Côte d'Azur (NCE)</option>
                      <option>Zurich Kloten (ZRH) VIP Terminal</option>
                      <option>London Farnborough / Heathrow VIP</option>
                      <option>Dubai International (DXB) Private Wing</option>
                      <option>Los Angeles (LAX) Private Suite</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8E8E99] mb-1.5 font-medium">
                    Rental Duration
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 w-4 h-4 text-[#F2994A]" />
                    <select
                      value={days}
                      onChange={(e) => setDays(Number(e.target.value))}
                      className="w-full bg-[#181820] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white focus:border-[#F2994A] focus:outline-none"
                    >
                      <option value={1}>1 Day (24 Hours)</option>
                      <option value={3}>3 Days (Weekend Pass)</option>
                      <option value={7}>7 Days (Weekly Concierge - 10% Off)</option>
                      <option value={14}>14 Days (Grand Tour Excursion)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8E8E99] mb-1.5 font-medium">
                    Primary Driver Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lord Alexander Wright"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-[#181820] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:border-[#F2994A] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8E8E99] mb-1.5 font-medium">
                    Concierge Direct Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alexander@lux-holding.com"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    className="w-full bg-[#181820] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:border-[#F2994A] focus:outline-none"
                  />
                </div>
              </div>

              {/* Bespoke Add-ons */}
              <div className="pt-2 space-y-2">
                <label className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 cursor-pointer hover:border-white/20 transition-colors">
                  <input
                    type="checkbox"
                    checked={conciergeDelivery}
                    onChange={(e) => setConciergeDelivery(e.target.checked)}
                    className="accent-[#F2994A] w-4 h-4"
                  />
                  <div className="flex-1 text-xs">
                    <span className="font-semibold text-white">Direct Jet Tarmac Handover</span>
                    <span className="text-[#8E8E99] block text-[11px]">Chauffeured delivery directly to your aircraft steps (+ $150)</span>
                  </div>
                </label>
              </div>

              {/* Total Calculation & CTA */}
              <div className="pt-4 flex items-center justify-between border-t border-white/10">
                <div>
                  <span className="text-[11px] uppercase font-mono text-[#8E8E99] block">Estimated All-Inclusive</span>
                  <span className="text-2xl font-display font-bold text-[#F2994A]">${subtotal} USD</span>
                </div>

                <button
                  type="submit"
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-[#F2994A] to-[#FF7A00] text-black font-bold text-xs uppercase tracking-widest hover:shadow-[0_0_30px_rgba(242,153,74,0.5)] transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  <Key className="w-4 h-4" />
                  <span>Lock In Reservation</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="py-10 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#F2994A]/20 border border-[#F2994A] flex items-center justify-center mb-6 text-[#F2994A]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-2">
              Bespoke Booking Registered
            </h3>
            <p className="text-sm text-[#8E8E99] max-w-md mb-6 leading-relaxed">
              Thank you, <span className="text-white font-semibold">{customerName || 'Honored Guest'}</span>. Your ExquDrive private liaison will dispatch booking clearance to <span className="text-[#F2994A]">{customerEmail || 'your email'}</span> within 15 minutes.
            </p>
            <button
              onClick={resetAndClose}
              className="px-8 py-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-black font-semibold text-xs uppercase tracking-wider transition-all"
            >
              Return to Experience
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
