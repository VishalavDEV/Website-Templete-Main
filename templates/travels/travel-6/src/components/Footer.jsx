import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Globe, ArrowUpRight } from 'lucide-react';

const Facebook = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Twitter = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);

const Youtube = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);


export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'About',
      links: [
        { name: 'Our Story', href: '#about' },
        { name: 'Careers', href: '#careers' },
        { name: 'Press & Media', href: '#press' },
        { name: 'Travel Blogs', href: '#blogs' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'Destinations', href: '#destinations' },
        { name: 'Tours & Packages', href: '#tours' },
        { name: 'Travel Guides', href: '#guides' },
        { name: 'Sitemap', href: '#sitemap' }
      ]
    },
    {
      title: 'Contact Us',
      links: [
        { name: 'Help Center', href: '#help' },
        { name: 'Booking Terms', href: '#terms' },
        { name: 'Partner Program', href: '#partner' },
        { name: 'Privacy Policy', href: '#privacy' }
      ]
    }
  ];

  const socialIcons = [
    { Icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { Icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { Icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { Icon: Youtube, href: 'https://youtube.com', label: 'Youtube' }
  ];

  return (
    <footer className="bg-near-black text-white/70 pt-20 pb-8 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
        
        {/* Brand Column (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-6 text-left">
          <a href="#home" className="inline-block">
            <span className="font-script text-4xl font-bold bg-gradient-to-r from-brand-coral to-brand-orange bg-clip-text text-transparent">
              Explorer
            </span>
          </a>
          <p className="text-white/60 font-light text-sm leading-relaxed max-w-sm">
            Crafting curated travel itineraries and unforgettable adventures since 2018. We believe in travel that enriches the soul and respects the environment.
          </p>
          <div className="flex flex-col gap-3 text-sm font-medium text-white/80">
            <a href="tel:+15550199" className="flex items-center gap-3 hover:text-brand-orange transition-colors duration-200">
              <Phone className="w-4 h-4 text-brand-coral" />
              <span>+1 (555) 019-9000</span>
            </a>
            <a href="mailto:info@explorer.com" className="flex items-center gap-3 hover:text-brand-orange transition-colors duration-200">
              <Mail className="w-4 h-4 text-brand-coral" />
              <span>info@explorer.com</span>
            </a>
            <a href="https://explorer.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-brand-orange transition-colors duration-200">
              <Globe className="w-4 h-4 text-brand-coral" />
              <span>www.explorer.com</span>
            </a>
          </div>
        </div>

        {/* Link Columns (6 cols total: 3 columns x 2 cols each) */}
        <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8 text-left">
          {footerLinks.map((group) => (
            <div key={group.title} className="flex flex-col gap-4">
              <h4 className="text-white text-sm font-bold uppercase tracking-wider">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 hover:text-brand-orange flex items-center gap-1 transition-colors duration-200 group"
                    >
                      <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Extra CTA Column (2 cols) */}
        <div className="lg:col-span-2 flex flex-col gap-4 text-left">
          <h4 className="text-white text-sm font-bold uppercase tracking-wider">
            Ready to fly?
          </h4>
          <p className="text-xs text-white/50 font-light">
            Plan your next journey with our AI itinerary builder or expert advisors.
          </p>
          <motion.a
            href="#signup"
            className="w-full mt-2 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-bold flex items-center justify-center gap-2 border border-white/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Planning
            <ArrowUpRight className="w-4 h-4 text-brand-orange" />
          </motion.a>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-xs text-white/40 font-light order-2 sm:order-1">
          &copy; {currentYear} Explorer Travel & Tours Ltd. All rights reserved. Made with ❤️ for world travellers.
        </p>

        {/* Social media icons */}
        <div className="flex items-center gap-4 order-1 sm:order-2">
          {socialIcons.map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-gradient-to-r hover:from-brand-coral hover:to-brand-orange hover:text-white flex items-center justify-center text-white/60 border border-white/10 transition-all duration-300"
              whileHover={{ 
                scale: 1.15,
                rotate: 5
              }}
              whileTap={{ scale: 0.9 }}
              aria-label={label}
            >
              <Icon className="w-4 h-4" />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
