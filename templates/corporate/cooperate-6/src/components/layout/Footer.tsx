import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  ArrowRight,
  ShieldCheck,
  PhoneCall,
  Mail,
  MapPin,
  CheckCircle2,
  Globe2,
  Linkedin,
  Twitter,
  Instagram
} from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#082920] text-white/90 border-t border-white/10 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0D4433]/30 rounded-full blur-3xl pointer-events-none -mr-40 -mt-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 relative z-10">
        {/* Top Section: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-105 border border-white/15">
                <Compass className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-3xl font-normal tracking-tight text-white leading-none">
                  AURELIA
                </span>
                <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#DFBA58] mt-0.5">
                  Journeys
                </span>
              </div>
            </Link>

            <p className="text-sm sm:text-base text-white/70 max-w-md leading-relaxed">
              Global corporate travel management, executive mobility, luxury team journeys, and MICE architecture designed around your people and your strategic priorities.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/90 backdrop-blur-sm">
                <ShieldCheck className="w-4 h-4 text-[#DFBA58]" />
                <span>ISO 31030 Duty of Care Certified</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/90 backdrop-blur-sm">
                <Globe2 className="w-4 h-4 text-[#DFBA58]" />
                <span>120+ Countries Active</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="max-w-xl">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#DFBA58]">
                  Executive Intelligence Briefing
                </span>
                <h4 className="font-serif text-2xl text-white mt-1 mb-2 font-normal">
                  Subscribe to Global Mobility Quarterly
                </h4>
                <p className="text-xs sm:text-sm text-white/70 mb-5">
                  Curated analyses on corporate travel procurement, geopolitical duty-of-care alerts, and executive aviation trends.
                </p>

                {!subscribed ? (
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                    <input
                      id="newsletter-email-input"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your corporate email..."
                      className="flex-1 px-4 py-3 rounded-xl bg-black/20 border border-white/15 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all"
                    />
                    <button
                      id="newsletter-subscribe-btn"
                      type="submit"
                      className="px-6 py-3 rounded-xl bg-[#0D4433] text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#051A14] active:scale-95 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer flex-shrink-0 border border-white/20"
                    >
                      <span>Subscribe</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                ) : (
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/10 border border-white/20 text-white text-sm">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-[#DFBA58]" />
                    <span>Thank you. You have been added to our executive research distribution list.</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Middle Navigation Grid (7 Columns) */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 py-12 text-sm border-b border-white/10">
          {/* Col 1: Company */}
          <div className="space-y-3">
            <h5 className="font-serif text-base text-white font-normal tracking-wide">Company</h5>
            <ul className="space-y-2 text-xs text-white/70">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Executive Leadership</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Global Presence</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers & Culture</Link></li>
              <li><Link to="/case-studies" className="hover:text-white transition-colors">Client Case Studies</Link></li>
            </ul>
          </div>

          {/* Col 2: Solutions */}
          <div className="space-y-3">
            <h5 className="font-serif text-base text-white font-normal tracking-wide">Solutions</h5>
            <ul className="space-y-2 text-xs text-white/70">
              <li><Link to="/corporate-travel" className="hover:text-white transition-colors">Corporate Travel</Link></li>
              <li><Link to="/executive-travel" className="hover:text-white transition-colors">Executive Mobility</Link></li>
              <li><Link to="/mice" className="hover:text-white transition-colors">MICE & Events</Link></li>
              <li><Link to="/experiences" className="hover:text-white transition-colors">Incentive Journeys</Link></li>
              <li><Link to="/corporate-travel" className="hover:text-white transition-colors">Duty of Care Risk</Link></li>
            </ul>
          </div>

          {/* Col 3: Destinations */}
          <div className="space-y-3">
            <h5 className="font-serif text-base text-white font-normal tracking-wide">Destinations</h5>
            <ul className="space-y-2 text-xs text-white/70">
              <li><Link to="/destinations/tokyo" className="hover:text-white transition-colors">Tokyo, Japan</Link></li>
              <li><Link to="/destinations/singapore" className="hover:text-white transition-colors">Singapore</Link></li>
              <li><Link to="/destinations/dubai" className="hover:text-white transition-colors">Dubai, UAE</Link></li>
              <li><Link to="/destinations/london" className="hover:text-white transition-colors">London, UK</Link></li>
              <li><Link to="/destinations/new-york" className="hover:text-white transition-colors">New York City</Link></li>
              <li><Link to="/destinations" className="text-[#DFBA58] hover:underline">View All Hubs →</Link></li>
            </ul>
          </div>

          {/* Col 4: Experiences */}
          <div className="space-y-3">
            <h5 className="font-serif text-base text-white font-normal tracking-wide">Experiences</h5>
            <ul className="space-y-2 text-xs text-white/70">
              <li><Link to="/experiences" className="hover:text-white transition-colors">Executive Retreats</Link></li>
              <li><Link to="/experiences" className="hover:text-white transition-colors">Alpine Leadership</Link></li>
              <li><Link to="/experiences" className="hover:text-white transition-colors">Desert Innovation Galas</Link></li>
              <li><Link to="/experiences" className="hover:text-white transition-colors">Tuscan Team Rallies</Link></li>
              <li><Link to="/experiences" className="hover:text-white transition-colors">Nordic Rejuvenation</Link></li>
            </ul>
          </div>

          {/* Col 5: Insights */}
          <div className="space-y-3">
            <h5 className="font-serif text-base text-white font-normal tracking-wide">Insights</h5>
            <ul className="space-y-2 text-xs text-white/70">
              <li><Link to="/insights" className="hover:text-white transition-colors">Travel Trends 2027</Link></li>
              <li><Link to="/insights" className="hover:text-white transition-colors">AI in Business Travel</Link></li>
              <li><Link to="/insights" className="hover:text-white transition-colors">Smart Travel Policies</Link></li>
              <li><Link to="/insights" className="hover:text-white transition-colors">Sustainable Aviation (SAF)</Link></li>
              <li><Link to="/insights" className="hover:text-white transition-colors">Procurement ROI</Link></li>
            </ul>
          </div>

          {/* Col 6: Support */}
          <div className="space-y-3">
            <h5 className="font-serif text-base text-white font-normal tracking-wide">Support</h5>
            <ul className="space-y-2 text-xs text-white/70">
              <li><Link to="/contact" className="hover:text-white transition-colors">Talk to an Expert</Link></li>
              <li><Link to="/login" className="hover:text-white transition-colors">Executive Portal</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Global Offices</Link></li>
              <li><Link to="/corporate-travel" className="hover:text-white transition-colors">Flight Status Ops</Link></li>
              <li><a href="tel:+442079460912" className="text-[#DFBA58] font-medium hover:underline flex items-center gap-1"><PhoneCall className="w-3 h-3" /> 24/7 Hotline</a></li>
            </ul>
          </div>

          {/* Col 7: Legal */}
          <div className="space-y-3">
            <h5 className="font-serif text-base text-white font-normal tracking-wide">Governance</h5>
            <ul className="space-y-2 text-xs text-white/70">
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Business</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Data Security (GDPR)</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Modern Slavery Statement</Link></li>
            </ul>
          </div>
        </div>

        {/* Global Hubs & 24/7 Hotline Bar */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-white/70 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/10 text-[#DFBA58] flex items-center justify-center flex-shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="font-semibold text-white">Global Headquarters</div>
              <div>32 Berkeley Square, Mayfair, London W1J 5AW</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/10 text-[#DFBA58] flex items-center justify-center flex-shrink-0">
              <PhoneCall className="w-4 h-4" />
            </div>
            <div>
              <div className="font-semibold text-white">24/7 Global Traveler Operations</div>
              <div>+44 20 7946 0912 / +1 212 555 0198</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/10 text-[#DFBA58] flex items-center justify-center flex-shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <div className="font-semibold text-white">Enterprise Inquiries</div>
              <div>enterprise@aureliajourneys.com</div>
            </div>
          </div>
        </div>

        {/* Bottom copyright and social */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} Aurelia Journeys Ltd. All rights reserved. Registered in England & Wales.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-white cursor-pointer transition-colors flex items-center gap-1">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </span>
            <span className="hover:text-white cursor-pointer transition-colors flex items-center gap-1">
              <Twitter className="w-4 h-4" /> X (Twitter)
            </span>
            <span className="hover:text-white cursor-pointer transition-colors flex items-center gap-1">
              <Instagram className="w-4 h-4" /> Instagram
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
