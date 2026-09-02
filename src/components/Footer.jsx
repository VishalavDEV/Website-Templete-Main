import React, { useState } from 'react';
import { 
  Sprout, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { siteConfig, navLinks } from '../data/content';

// Clean SVG social brand icons
function XTwitterIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function LinkedInIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function YouTubeIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

export default function Footer({ onOpenContact }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setIsSubscribed(true);
  };

  return (
    <footer className="bg-forest-950 text-forest-200 border-t border-forest-800/80 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-forest-800/80">
          
          {/* Brand Column (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-forest-800 border border-forest-700 flex items-center justify-center text-wheat-400">
                <Sprout className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-2xl font-bold font-display tracking-tight text-white">
                Terra<span className="text-wheat-400">Nova</span>
              </span>
            </a>

            <p className="text-forest-300 text-sm leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-forest-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>USDA Organic • Global G.A.P. Certified Standard</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a href={siteConfig.socials.twitter} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-forest-900 hover:bg-forest-800 text-forest-300 hover:text-wheat-400 border border-forest-800 flex items-center justify-center transition-colors" aria-label="Twitter">
                <XTwitterIcon className="w-4 h-4" />
              </a>
              <a href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-forest-900 hover:bg-forest-800 text-forest-300 hover:text-wheat-400 border border-forest-800 flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a href={siteConfig.socials.instagram} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-forest-900 hover:bg-forest-800 text-forest-300 hover:text-wheat-400 border border-forest-800 flex items-center justify-center transition-colors" aria-label="Instagram">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href={siteConfig.socials.youtube} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-forest-900 hover:bg-forest-800 text-forest-300 hover:text-wheat-400 border border-forest-800 flex items-center justify-center transition-colors" aria-label="YouTube">
                <YouTubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (Col 5-6) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white font-display uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-forest-300 hover:text-wheat-300 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions & Tools (Col 7-8) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white font-display uppercase tracking-wider mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#services" className="text-forest-300 hover:text-wheat-300 transition-colors">Biological Crop Protection</a></li>
              <li><a href="#services" className="text-forest-300 hover:text-wheat-300 transition-colors">Drone Scouting Fleet</a></li>
              <li><a href="#services" className="text-forest-300 hover:text-wheat-300 transition-colors">Smart Moisture Control</a></li>
              <li><a href="#services" className="text-forest-300 hover:text-wheat-300 transition-colors">Greenhouse Automation</a></li>
              <li><a href="#calculator" className="text-forest-300 hover:text-wheat-300 transition-colors">Farm ROI Estimator</a></li>
            </ul>
          </div>

          {/* Newsletter Column (Col 9-12) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white font-display uppercase tracking-wider">
              Agronomy Field Intel Dispatch
            </h4>
            <p className="text-xs text-forest-300 leading-relaxed">
              Bi-weekly digest of peer-reviewed biological trial data, satellite soil moisture anomalies, and organic market commodity prices.
            </p>

            {isSubscribed ? (
              <div className="p-3.5 bg-forest-900 border border-emerald-500/40 rounded-2xl flex items-center gap-2.5 text-emerald-300 text-xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Subscribed! You'll receive the next field report this Tuesday.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full pl-4 pr-12 py-3 rounded-full bg-forest-900 border border-forest-700/80 text-white placeholder-forest-400 text-xs focus:outline-none focus:ring-2 focus:ring-wheat-400"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3.5 rounded-full bg-wheat-500 hover:bg-wheat-400 text-forest-950 font-bold text-xs flex items-center justify-center transition-colors"
                    aria-label="Subscribe to newsletter"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <span className="block text-[10px] text-forest-400">
                  Zero spam. Unsubscribe in 1 click at any time.
                </span>
              </form>
            )}

            {/* Direct Contact Info */}
            <div className="pt-2 text-xs space-y-1.5 text-forest-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-wheat-400 shrink-0" />
                <span>{siteConfig.contact.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-wheat-400 shrink-0" />
                <span>{siteConfig.contact.phone}</span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar (Copyright & Legal) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-forest-400">
          <p>© {new Date().getFullYear()} TerraNova AgTech Inc. All rights reserved. Cultivating planetary resilience.</p>
          <div className="flex items-center space-x-6">
            <a href="#hero" className="hover:text-forest-200 transition-colors">Privacy Policy</a>
            <a href="#hero" className="hover:text-forest-200 transition-colors">Terms of Ag Service</a>
            <a href="#hero" className="hover:text-forest-200 transition-colors">Carbon MRV Protocol</a>
            <a href="#hero" className="hover:text-forest-200 transition-colors">Security & IoT Telemetry</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
