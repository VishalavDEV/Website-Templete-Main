import React from 'react';
import { Phone, Mail, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/content';

export default function TopBar() {
  return (
    <div className="bg-forest-950 text-forest-200 text-xs border-b border-forest-800/60 hidden md:block py-2.5 px-4 transition-all">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
        {/* Left Side: Contact Info & Hours */}
        <div className="flex items-center space-x-6">
          <a 
            href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} 
            className="flex items-center gap-1.5 hover:text-wheat-400 transition-colors group"
          >
            <Phone className="w-3.5 h-3.5 text-wheat-500 group-hover:scale-110 transition-transform" />
            <span>{siteConfig.contact.phone}</span>
          </a>
          
          <a 
            href={`mailto:${siteConfig.contact.email}`} 
            className="flex items-center gap-1.5 hover:text-wheat-400 transition-colors group"
          >
            <Mail className="w-3.5 h-3.5 text-wheat-500 group-hover:scale-110 transition-transform" />
            <span>{siteConfig.contact.email}</span>
          </a>

          <div className="flex items-center gap-1.5 text-forest-300">
            <Clock className="w-3.5 h-3.5 text-forest-400" />
            <span>{siteConfig.contact.hours}</span>
          </div>
        </div>

        {/* Right Side: Trust badge & Grant Announcement */}
        <div className="flex items-center space-x-5">
          <div className="flex items-center gap-1.5 text-emerald-300 bg-forest-900/90 px-2.5 py-0.5 rounded-full border border-forest-700/80">
            <Sparkles className="w-3 h-3 text-wheat-400 animate-pulse" />
            <span className="font-medium text-[11px] tracking-wide">2026 Sustainable Ag Grants Open</span>
          </div>

          <div className="flex items-center gap-1.5 text-forest-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-medium">USDA Organic & Global G.A.P.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
