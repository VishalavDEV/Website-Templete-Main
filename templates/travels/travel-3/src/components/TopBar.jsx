import React from 'react';
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin, User } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-primary text-white text-xs py-2 px-4 md:px-8 flex justify-between items-center border-b border-white/10 z-50 relative">
      <div className="flex items-center gap-6">
        <a href="tel:+18005550199" className="flex items-center gap-1.5 hover:text-accent transition-colors">
          <Phone className="w-3.5 h-3.5" />
          <span>+1 (800) 555-0199</span>
        </a>
        <a href="mailto:info@roamify.com" className="hidden sm:flex items-center gap-1.5 hover:text-accent transition-colors">
          <Mail className="w-3.5 h-3.5" />
          <span>info@roamify.com</span>
        </a>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3.5 border-r border-white/20 pr-6">
          <a href="#" aria-label="Facebook" className="hover:text-accent transition-colors">
            <Facebook className="w-3.5 h-3.5" />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-accent transition-colors">
            <Twitter className="w-3.5 h-3.5" />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-accent transition-colors">
            <Instagram className="w-3.5 h-3.5" />
          </a>
          <a href="#" aria-label="LinkedIn" className="hidden xs:block hover:text-accent transition-colors">
            <Linkedin className="w-3.5 h-3.5" />
          </a>
        </div>
        <a href="#" className="flex items-center gap-1.5 hover:text-accent transition-colors font-medium">
          <User className="w-3.5 h-3.5" />
          <span>Login / Register</span>
        </a>
      </div>
    </div>
  );
}
