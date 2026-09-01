import React from 'react';
import {
  HeartPulse,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Award,
  Calendar,
  ChevronRight
} from 'lucide-react';
import { Button } from './Button';

interface FooterProps {
  onNavigate: (view: string, params?: Record<string, string>) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Emergency Callout Banner */}
      <div className="bg-gradient-to-r from-teal-900/80 via-slate-900 to-teal-950/80 border-b border-slate-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-600/20 border border-rose-500/40 flex items-center justify-center text-rose-400 shrink-0">
              <Phone className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg">In Need of Emergency Medical Assistance?</h4>
              <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
                Our Level 1 Trauma Center, Cath Lab, and Resuscitation ICU are open 24/7/365.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <a
              href="tel:+911800555091"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm shadow-lg shadow-rose-600/20 transition-all cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              Call Emergency: +91 1800 555 091
            </a>
            <Button
              variant="outline"
              size="md"
              leftIcon={<Calendar className="w-4 h-4" />}
              onClick={onOpenBooking}
              className="bg-slate-800 hover:bg-slate-700 text-white border-slate-700 hover:border-slate-600"
            >
              Book an Appointment
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-500 flex items-center justify-center text-slate-900 shadow-md">
                <HeartPulse className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                Qure<span className="text-teal-400">Nexa</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Qure Nexa Medical Center is an internationally accredited university teaching hospital delivering
              comprehensive healthcare through surgical precision, patient-first empathy, and advanced robotic research.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs text-teal-400 font-medium bg-teal-950/60 px-3 py-1.5 rounded-xl border border-teal-800/60">
                <ShieldCheck className="w-4 h-4 text-teal-400" />
                <span>JCI & CAP Accredited</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-amber-400 font-medium bg-amber-950/60 px-3 py-1.5 rounded-xl border border-amber-800/60">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Top 100 Hospital 2026</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h5 className="text-white font-bold text-sm tracking-wider uppercase">Explore</h5>
            <ul className="space-y-2 text-xs sm:text-sm">
              {['Home', 'About', 'Services', 'Departments', 'Doctors', 'Gallery', 'Testimonials', 'FAQ'].map(item => (
                <li key={item}>
                  <button
                    type="button"
                    onClick={() => onNavigate(item.toLowerCase())}
                    className="text-slate-400 hover:text-teal-300 transition-colors flex items-center gap-1.5 group cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-teal-400 transition-colors" />
                    <span>{item}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Clinical Services */}
          <div className="space-y-3">
            <h5 className="text-white font-bold text-sm tracking-wider uppercase">Clinical Centers</h5>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li className="hover:text-teal-300 cursor-pointer" onClick={() => onNavigate('services')}>
                Cardiology & Cath Lab
              </li>
              <li className="hover:text-teal-300 cursor-pointer" onClick={() => onNavigate('services')}>
                Neurology & Neurosurgery
              </li>
              <li className="hover:text-teal-300 cursor-pointer" onClick={() => onNavigate('services')}>
                Robotic Orthopedics
              </li>
              <li className="hover:text-teal-300 cursor-pointer" onClick={() => onNavigate('services')}>
                Pediatrics & Level IV NICU
              </li>
              <li className="hover:text-teal-300 cursor-pointer" onClick={() => onNavigate('services')}>
                Dermatology & Skin Center
              </li>
              <li className="hover:text-teal-300 cursor-pointer" onClick={() => onNavigate('services')}>
                Emergency & Level 1 Trauma
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="space-y-3">
            <h5 className="text-white font-bold text-sm tracking-wider uppercase">Hospital Contact</h5>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>100 Medical Center Pkwy, Suite 500, Seattle, WA 98104</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span>General: +91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span>care@qurenexa.org</span>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-300">OPD Consultation Hours:</p>
                  <p>Mon - Sat: 8:00 AM - 8:00 PM</p>
                  <p className="text-rose-400 font-semibold mt-0.5">Emergency: 24/7 Open</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Qure Nexa Hospital & Healthcare System. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer" onClick={() => onNavigate('faq')}>
              Privacy Policy
            </span>
            <span className="hover:text-slate-400 cursor-pointer" onClick={() => onNavigate('faq')}>
              Terms of Medical Service
            </span>
            <span className="hover:text-slate-400 cursor-pointer" onClick={() => onNavigate('contact')}>
              Patient Rights & HIPAA
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
