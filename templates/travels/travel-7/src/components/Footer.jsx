import React from 'react';
import { Compass, ArrowUp, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const repeatLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'Start Here', href: '#start-here' },
    { name: 'Destinations', href: '#map' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Blog', href: '#blog' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Store', href: '#' },
    { name: 'Contacts', href: '#contact' }
  ];

  const popularPosts = [
    { name: ' Lauterbrunnen Waterfalls Guide', href: '#blog' },
    { name: ' Backpacking Banff Checklist', href: '#blog' },
    { name: ' Secret Kyoto Bamboo Trails', href: '#blog' },
    { name: ' 10 Essential Camping Gear Items', href: '#faq' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    if (href === '#') {
      scrollToTop();
    } else {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <footer id="contact" className="bg-[#0D1B2A] text-slate-400 text-sm font-sans pt-24 border-t border-slate-900 relative">
      
      {/* Back to top floating button */}
      <div className="absolute top-[-22px] left-1/2 -translate-x-1/2 z-20">
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: '#E06F45' }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="w-11 h-11 rounded-full bg-accent text-white flex items-center justify-center shadow-lg shadow-accent/20 cursor-pointer"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Col 1: About Logo */}
        <div className="lg:col-span-5 space-y-6">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
              <Compass className="w-5.5 h-5.5" />
            </div>
            <div>
              <span className="font-display font-extrabold text-xl tracking-tight text-white flex items-center gap-1">
                TALES<span className="text-accent">.</span>
              </span>
              <span className="block text-[8px] font-bold text-slate-500 tracking-widest uppercase -mt-1.5">
                WANDERLUST JOURNAL
              </span>
            </div>
          </a>
          <p className="text-slate-500 leading-relaxed max-w-sm text-xs md:text-sm font-light">
            We are Alex and Emma, two wild spirits exploring the corners of the world. We document mountain treks, remote campsites, and cultural cities with complete honesty and photography.
          </p>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-slate-900 hover:bg-accent hover:text-white flex items-center justify-center transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full bg-slate-900 hover:bg-accent hover:text-white flex items-center justify-center transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-slate-900 hover:bg-accent hover:text-white flex items-center justify-center transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-slate-900 hover:bg-accent hover:text-white flex items-center justify-center transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Col 2: Repeated nav links */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="font-display font-extrabold text-white text-xs uppercase tracking-widest">Directory</h4>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-wider">
            {repeatLinks.map(link => (
              <a key={link.name} href={link.href} onClick={(e) => handleScrollTo(e, link.href)} className="hover:text-accent transition-colors py-0.5">{link.name}</a>
            ))}
          </div>
        </div>

        {/* Col 3: Popular posts */}
        <div className="lg:col-span-4 space-y-4">
          <h4 className="font-display font-extrabold text-white text-xs uppercase tracking-widest">Popular Posts</h4>
          <ul className="space-y-2.5">
            {popularPosts.map(link => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-accent transition-colors block text-xs md:text-sm py-0.5 font-light">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="bg-slate-950/60 py-6 px-4 md:px-8 border-t border-slate-900/40 text-center text-xs text-slate-600 font-bold uppercase tracking-wider">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <span>&copy; {new Date().getFullYear()} Wanderlust Tales. All Rights Reserved.</span>
          <span>Designed with ❤️ by Google Deepmind Team.</span>
        </div>
      </div>
    </footer>
  );
}
