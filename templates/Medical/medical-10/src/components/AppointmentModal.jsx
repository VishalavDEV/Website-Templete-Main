import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Calendar, Clock, User, Phone, MapPin, X, FileText } from "lucide-react";

export default function AppointmentModal({ isOpen, onClose, appointmentData }) {
  if (!isOpen || !appointmentData) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-lg glass-card p-6 md:p-8 rounded-3xl border border-cyan-500/30 shadow-2xl glow-cyan text-white overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Success Checkmark Animation */}
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.6, ease: "backOut" }}
              className="w-20 h-20 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 mb-4 glow-cyan"
            >
              <CheckCircle2 className="w-12 h-12" />
            </motion.div>

            <h3 className="text-2xl font-bold text-white tracking-tight">Appointment Confirmed!</h3>
            <p className="text-slate-300 text-sm mt-1">
              Your booking has been scheduled. A confirmation code has been dispatched.
            </p>

            <div className="mt-3 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider uppercase font-semibold">
              Booking Ref: #{appointmentData.bookingRef || Math.floor(100000 + Math.random() * 900000)}
            </div>
          </div>

          {/* Details Summary Card */}
          <div className="mt-6 p-4 rounded-2xl bg-slate-900/60 border border-white/10 space-y-3 text-sm">
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <span className="text-slate-400 flex items-center gap-2">
                <User className="w-4 h-4 text-cyan-400" /> Patient Name
              </span>
              <span className="font-semibold text-white">{appointmentData.name || "John Doe"}</span>
            </div>

            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <span className="text-slate-400 flex items-center gap-2">
                <FileText className="w-4 h-4 text-cyan-400" /> Department / Doctor
              </span>
              <span className="font-semibold text-white text-right">
                {appointmentData.doctor || appointmentData.department || "General Consultation"}
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <span className="text-slate-400 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-cyan-400" /> Date
              </span>
              <span className="font-semibold text-white">{appointmentData.date || "Tomorrow"}</span>
            </div>

            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <span className="text-slate-400 flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400" /> Preferred Time
              </span>
              <span className="font-semibold text-white">{appointmentData.time || "10:00 AM"}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-400 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" /> Location
              </span>
              <span className="font-semibold text-white">Main Hospital Campus, Pavilion B</span>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm transition-all shadow-lg hover:shadow-cyan-500/25"
            >
              Done & Save Booking
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
