import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-[#09111C] text-slate-400 text-xs py-2.5 px-4 md:px-8 flex justify-between items-center border-b border-slate-800 z-50 relative">
      <div className="flex items-center gap-6">
        <a href="tel:+18005550244" className="flex items-center gap-1.5 hover:text-accent transition-colors font-medium">
          <Phone className="w-3.5 h-3.5 text-accent" />
          <span>+1 (800) 555-0244</span>
        </a>
        <a href="mailto:info@wayfarer.com" className="hidden sm:flex items-center gap-1.5 hover:text-accent transition-colors font-medium">
          <Mail className="w-3.5 h-3.5 text-accent" />
          <span>info@wayfarer.com</span>
        </a>
        <span className="hidden lg:flex items-center gap-1.5 font-medium">
          <MapPin className="w-3.5 h-3.5 text-accent" />
          <span>100 Adventure Way, NY 10001</span>
        </span>
      </div>
      <div className="flex items-center gap-4">
        <a href="#" aria-label="Facebook" className="hover:text-white transition-colors">
          <Facebook className="w-3.5 h-3.5" />
        </a>
        <a href="#" aria-label="Twitter" className="hover:text-white transition-colors">
          <Twitter className="w-3.5 h-3.5" />
        </a>
        <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
          <Instagram className="w-3.5 h-3.5" />
        </a>
        <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors">
          <Linkedin className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
