import React, { useState } from 'react';
import { Compass, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const companyLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Team', href: '#' },
    { name: 'Latest Blog', href: '#blog' },
    { name: 'Careers', href: '#' }
  ];

  const destinationLinks = [
    { name: 'Kyoto, Japan', href: '#destinations' },
    { name: 'Swiss Alps, Switzerland', href: '#destinations' },
    { name: 'Amalfi Coast, Italy', href: '#destinations' },
    { name: 'Bali, Indonesia', href: '#destinations' }
  ];

  const supportLinks = [
    { name: 'Help Center', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'FAQs', href: '#' }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 4000);
    }
  };

  return (
    <footer id="contact" className="bg-[#070E17] text-slate-400 text-sm font-sans pt-24 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Col 1: About Logo */}
        <div className="lg:col-span-4 space-y-6">
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-white shadow-md shadow-accent/20 group-hover:scale-105 transition-transform duration-300">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="font-display font-extrabold text-2xl tracking-tight text-white flex items-center gap-1">
                WAY<span className="text-accent">FARER</span>
              </span>
              <span className="block text-[8px] font-bold text-slate-500 tracking-widest uppercase -mt-1">
                TRAVEL & TOURS AGENCY
              </span>
            </div>
          </a>
          <p className="text-slate-500 leading-relaxed max-w-sm text-xs md:text-sm">
            We design bespoke tour packages and luxury adventures tailored to your unique travel desires. Explore the world with confidence and comfort.
          </p>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 hover:bg-accent hover:border-accent hover:text-white flex items-center justify-center transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 hover:bg-accent hover:border-accent hover:text-white flex items-center justify-center transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 hover:bg-accent hover:border-accent hover:text-white flex items-center justify-center transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 hover:bg-accent hover:border-accent hover:text-white flex items-center justify-center transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Col 2: Company */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="font-display font-extrabold text-white text-sm uppercase tracking-wider">Company</h4>
          <ul className="space-y-2.5">
            {companyLinks.map(link => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-accent transition-colors block py-0.5 text-xs md:text-sm">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Destinations */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="font-display font-extrabold text-white text-sm uppercase tracking-wider">Destinations</h4>
          <ul className="space-y-2.5">
            {destinationLinks.map(link => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-accent transition-colors block py-0.5 text-xs md:text-sm">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Contact/Newsletter Info */}
        <div className="lg:col-span-4 space-y-6">
          <div className="space-y-4">
            <h4 className="font-display font-extrabold text-white text-sm uppercase tracking-wider">Get in Touch</h4>
            <div className="space-y-3.5 text-xs md:text-sm text-slate-500">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-accent shrink-0" />
                <span>100 Adventure Way, New York, NY 10001, USA</span>
              </div>
              <a href="tel:+18005550244" className="flex items-center gap-3 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>+1 (800) 555-0244</span>
              </a>
              <a href="mailto:info@wayfarer.com" className="flex items-center gap-3 hover:text-accent transition-colors">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>info@wayfarer.com</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="bg-slate-950 py-6 px-4 md:px-8 border-t border-slate-900/60 text-center text-xs text-slate-600 font-bold uppercase tracking-wider">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <span>&copy; {new Date().getFullYear()} Wayfarer. All Rights Reserved.</span>
          <span>Designed with ❤️ by Google Deepmind Team.</span>
        </div>
      </div>
    </footer>
  );
}
