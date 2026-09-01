import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';
import { siteSettings } from '../../data/siteData';

export const Header: React.FC = () => {
  return (
    <div className="pt-2 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-40">
      <div className="bg-slate-900/95 backdrop-blur-md text-slate-300 text-xs py-2 px-4 sm:px-6 rounded-2xl border border-slate-800/80 shadow-md shadow-slate-950/10 flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-6">
          <a href={`tel:${siteSettings.phone}`} className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone className="w-3.5 h-3.5 text-blue-400" />
            <span>{siteSettings.phone}</span>
          </a>
          <a href={`mailto:${siteSettings.email}`} className="hidden md:flex items-center gap-2 hover:text-white transition-colors">
            <Mail className="w-3.5 h-3.5 text-blue-400" />
            <span>{siteSettings.email}</span>
          </a>
        </div>
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden lg:flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-blue-400" />
            <span>Mon - Sat: 8:00 AM - 8:00 PM</span>
          </div>
          <div className="flex items-center gap-2 bg-blue-600/25 text-blue-300 px-3 py-1 rounded-full border border-blue-400/30">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span className="font-semibold tracking-wide">Emergency: {siteSettings.emergencyPhone}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

