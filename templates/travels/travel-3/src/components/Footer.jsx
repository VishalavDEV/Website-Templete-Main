import React from 'react';
import { Compass, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const companyLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Team', href: '#' },
    { name: 'Latest Blog', href: '#blog' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Careers', href: '#' }
  ];

  const destinationLinks = [
    { name: 'Kyoto, Japan', href: '#destinations' },
    { name: 'Swiss Alps, Switzerland', href: '#destinations' },
    { name: 'Amalfi Coast, Italy', href: '#destinations' },
    { name: 'Bali, Indonesia', href: '#destinations' },
    { name: 'Serengeti Safari, Tanzania', href: '#destinations' }
  ];

  const supportLinks = [
    { name: 'Help Center', href: '#' },
    { name: 'Safety Tips', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'FAQs', href: '#' }
  ];

  return (
    <footer id="contact" className="bg-slate-900 text-slate-400 text-sm font-sans pt-24 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Col 1: About Logo */}
        <div className="lg:col-span-4 space-y-6">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-primary group-hover:bg-primary transition-colors duration-300">
              <Compass className="w-6 h-6 text-accent group-hover:text-white" />
            </div>
            <div>
              <span className="font-sans font-extrabold text-2xl tracking-tight text-white flex items-center gap-1">
                ROAM<span className="text-primary">IFY</span>
              </span>
              <span className="block text-[9px] font-semibold text-slate-500 tracking-widest uppercase -mt-1">
                YOUR JOURNEY BEGINS
              </span>
            </div>
          </a>
          <p className="text-slate-500 leading-relaxed max-w-sm text-xs md:text-sm">
            We design bespoke tour packages and luxury adventures tailored to your unique travel desires. Explore the world with confidence and comfort.
          </p>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-slate-800 hover:bg-primary hover:text-white flex items-center justify-center transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full bg-slate-800 hover:bg-primary hover:text-white flex items-center justify-center transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-slate-800 hover:bg-primary hover:text-white flex items-center justify-center transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-slate-800 hover:bg-primary hover:text-white flex items-center justify-center transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Col 2: Company */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="font-sans font-extrabold text-white text-base">Company</h4>
          <ul className="space-y-2.5">
            {companyLinks.map(link => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-primary transition-colors block py-0.5 text-xs md:text-sm">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Destinations */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="font-sans font-extrabold text-white text-base">Destinations</h4>
          <ul className="space-y-2.5">
            {destinationLinks.map(link => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-primary transition-colors block py-0.5 text-xs md:text-sm">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Contact/Newsletter Info */}
        <div className="lg:col-span-4 space-y-6">
          <div className="space-y-4">
            <h4 className="font-sans font-extrabold text-white text-base">Get in Touch</h4>
            <div className="space-y-3.5 text-xs md:text-sm text-slate-500">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-accent shrink-0" />
                <span>121 King Street, Melbourne VIC 3000, Australia</span>
              </div>
              <a href="tel:+18005550199" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>+1 (800) 555-0199</span>
              </a>
              <a href="mailto:info@roamify.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>info@roamify.com</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="bg-slate-950/60 py-6 px-4 md:px-8 border-t border-slate-800/40 text-center text-xs text-slate-600 font-bold uppercase tracking-wider">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <span>&copy; {new Date().getFullYear()} Roamify. All Rights Reserved.</span>
          <span>Designed with ❤️ by Google Deepmind Team.</span>
        </div>
      </div>
    </footer>
  );
}
