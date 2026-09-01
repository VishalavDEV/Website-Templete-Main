import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import { siteSettings } from '../../data/siteData';
import { ScrollReveal } from './ScrollReveal';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-12 sm:mt-16 mb-8 sm:mb-12">
      <ScrollReveal animation="pop" duration={800} className="floating-window-dark p-8 sm:p-12 lg:p-14 text-slate-300 relative overflow-hidden">
        {/* Background glow and subtle dot grid */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-12">
          {/* Column 1 */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-xl shadow-md shadow-blue-600/30">
                V
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight">{siteSettings.name}</span>
                <span className="block text-[10px] font-bold text-blue-400 uppercase tracking-widest -mt-1">Hospital</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Providing trusted medical care through experienced professionals, modern facilities, and patient-focused services.
            </p>
            <div className="flex gap-3">
              <a href="#facebook" aria-label="Facebook" className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all hover:scale-105">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#instagram" aria-label="Instagram" className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all hover:scale-105">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#linkedin" aria-label="LinkedIn" className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all hover:scale-105">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#youtube" aria-label="YouTube" className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all hover:scale-105">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800/60">
            <h4 className="text-white font-bold text-base mb-4 pb-2 border-b border-slate-800">Quick Links</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-blue-400 hover:translate-x-1 inline-block transition-all font-medium">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-blue-400 hover:translate-x-1 inline-block transition-all font-medium">About</Link>
              </li>
              <li>
                <Link to="/departments" className="text-slate-400 hover:text-blue-400 hover:translate-x-1 inline-block transition-all font-medium">Departments</Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-blue-400 hover:translate-x-1 inline-block transition-all font-medium">Services</Link>
              </li>
              <li>
                <Link to="/doctors" className="text-slate-400 hover:text-blue-400 hover:translate-x-1 inline-block transition-all font-medium">Doctors</Link>
              </li>
              <li>
                <Link to="/appointment" className="text-slate-400 hover:text-blue-400 hover:translate-x-1 inline-block transition-all font-medium">Appointment</Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-blue-400 hover:translate-x-1 inline-block transition-all font-medium">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Departments */}
          <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800/60">
            <h4 className="text-white font-bold text-base mb-4 pb-2 border-b border-slate-800">Departments</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link to="/departments/cardiology" className="text-slate-400 hover:text-blue-400 hover:translate-x-1 inline-block transition-all font-medium">Cardiology</Link>
              </li>
              <li>
                <Link to="/departments/neurology" className="text-slate-400 hover:text-blue-400 hover:translate-x-1 inline-block transition-all font-medium">Neurology</Link>
              </li>
              <li>
                <Link to="/departments/orthopedics" className="text-slate-400 hover:text-blue-400 hover:translate-x-1 inline-block transition-all font-medium">Orthopedics</Link>
              </li>
              <li>
                <Link to="/departments/pediatrics" className="text-slate-400 hover:text-blue-400 hover:translate-x-1 inline-block transition-all font-medium">Pediatrics</Link>
              </li>
              <li>
                <Link to="/departments/dermatology" className="text-slate-400 hover:text-blue-400 hover:translate-x-1 inline-block transition-all font-medium">Dermatology</Link>
              </li>
              <li>
                <Link to="/departments/general-medicine" className="text-slate-400 hover:text-blue-400 hover:translate-x-1 inline-block transition-all font-medium">General Medicine</Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800/60">
            <h4 className="text-white font-bold text-base mb-4 pb-2 border-b border-slate-800">Contact Us</h4>
            <div className="flex flex-col gap-4 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span>{siteSettings.organization}, {siteSettings.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 shrink-0" />
                <a href={`tel:${siteSettings.phone}`} className="hover:text-white transition-colors">{siteSettings.phone}</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                <a href={`mailto:${siteSettings.email}`} className="hover:text-white transition-colors">{siteSettings.email}</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© 2026 {siteSettings.organization}. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors font-medium">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors font-medium">Terms of Service</Link>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
};

