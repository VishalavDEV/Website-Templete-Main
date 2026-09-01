import React from 'react';
import { Compass, MapPin, Phone, Mail } from 'lucide-react';

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
  </svg>
);

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const linksCompany = [
    { name: 'About Us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Adventure Guides', href: '#' },
    { name: 'Press & Media', href: '#' }
  ];

  const linksSupport = [
    { name: 'Contact & FAQs', href: '#' },
    { name: 'Safety Logs', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Privacy Policy', href: '#' }
  ];

  const linksDestinations = [
    { name: 'Patagonia Peak', href: '#' },
    { name: 'Maui Beaches', href: '#' },
    { name: 'Stargazer Camps', href: '#' },
    { name: 'Lagoon Reefs', href: '#' }
  ];

  return (
    <footer className="bg-charcoal border-t border-white/5 text-white pt-20 pb-10 px-6 md:px-12 relative overflow-hidden">
      
      {/* Decorative dot grid or coordinates overlay */}
      <div className="absolute right-10 bottom-10 opacity-[0.03] text-white pointer-events-none select-none font-mono text-[100px] leading-none font-bold">
        N 45°
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
        
        {/* Brand Information */}
        <div className="lg:col-span-4 space-y-6">
          <a href="#" className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-full text-white shadow-md">
              <Compass className="w-5 h-5" />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-white uppercase">
              Roam<span className="text-accent-yellow font-light italic">&</span>Wild
            </span>
          </a>
          <p className="text-white/60 font-light text-sm leading-relaxed max-w-sm">
            Roam & Wild is a premium travel operator offering custom, sustainable adventure packages. Explore remote peaks, clear lagoons, and starry skies with safety and design.
          </p>
          {/* Social Row */}
          <div className="flex gap-4">
            {[
              { Icon: InstagramIcon, href: '#' },
              { Icon: TwitterIcon, href: '#' },
              { Icon: FacebookIcon, href: '#' },
              { Icon: YoutubeIcon, href: '#' }
            ].map(({ Icon, href }, idx) => (
              <a
                key={idx}
                href={href}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-accent-yellow hover:text-accent-yellow flex items-center justify-center text-white/70 transition-colors shadow-sm"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Links Column 1: Expeditions */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="font-extrabold text-sm uppercase tracking-wider text-accent-yellow">
            Expeditions
          </h4>
          <ul className="space-y-2.5 text-sm font-light text-white/70">
            {linksDestinations.map((l) => (
              <li key={l.name}>
                <a href={l.href} className="hover:text-white transition-colors hover:underline">
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Links Column 2: Crew */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="font-extrabold text-sm uppercase tracking-wider text-accent-yellow">
            The Crew
          </h4>
          <ul className="space-y-2.5 text-sm font-light text-white/70">
            {linksCompany.map((l) => (
              <li key={l.name}>
                <a href={l.href} className="hover:text-white transition-colors hover:underline">
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Links Column 3: Logistics */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="font-extrabold text-sm uppercase tracking-wider text-accent-yellow">
            Logistics
          </h4>
          <ul className="space-y-2.5 text-sm font-light text-white/70">
            {linksSupport.map((l) => (
              <li key={l.name}>
                <a href={l.href} className="hover:text-white transition-colors hover:underline">
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact details */}
        <div className="lg:col-span-2 space-y-4 text-sm font-light text-white/70">
          <h4 className="font-extrabold text-sm uppercase tracking-wider text-accent-yellow">
            Coordinates
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span>120 Wilder Way, Suite 400, Portland, OR</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-primary flex-shrink-0" />
              <span>+1 (800) 555-ROAM</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-primary flex-shrink-0" />
              <a href="mailto:expeditions@roamwild.com" className="hover:underline text-white">
                expeditions@roamwild.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto pt-10 flex flex-col sm:flex-row justify-between items-center text-xs text-white/40 font-light gap-4">
        <span>
          &copy; {currentYear} Roam & Wild Inc. All rights reserved. Created for adventurous spirits.
        </span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Coordinates Sitemap</a>
          <a href="#" className="hover:text-white transition-colors">Agent Admin</a>
        </div>
      </div>

    </footer>
  );
}
