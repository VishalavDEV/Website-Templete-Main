import React from 'react';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Badge } from '../components/ui/Badge';
import { ContactForm } from '../components/forms/ContactForm';
import { Mail, Phone, Clock } from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';
import { FAQSection } from '../components/sections/FAQSection';

const globalHubs = [
  { city: 'Tokyo Studio', address: 'Minato City, Roppongi 6-10-1', tz: 'JST (UTC+9)', email: 'tokyo@byteora.agency' },
  { city: 'Zurich Office', address: 'Paradeplatz 8, 8001 Zurich', tz: 'CET (UTC+1)', email: 'zurich@byteora.agency' },
  { city: 'New York Hub', address: '520 Broadway, Soho NY 10012', tz: 'EST (UTC-5)', email: 'ny@byteora.agency' },
  { city: 'London Studio', address: 'Redchurch St, Shoreditch E2 7DD', tz: 'GMT (UTC+0)', email: 'london@byteora.agency' },
];

export const Contact: React.FC = () => {
  return (
    <div className="space-y-24 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <Breadcrumb items={[{ label: 'Contact Us' }]} />

        {/* Hero Title */}
        <Reveal direction="up">
          <div className="space-y-6">
            <Badge variant="accent">INITIATE PARTNERSHIP</Badge>
            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-[var(--text-color)] font-display max-w-5xl leading-none">
              LET'S MAKE <span className="text-[var(--accent-color)]">SOMETHING GREAT.</span>
            </h1>
            <p className="text-lg md:text-2xl text-[var(--secondary-color)] leading-relaxed font-light max-w-3xl">
              Have a project in mind or want to audit your digital brand? Fill out the brief form below or reach out directly to our global studios.
            </p>
          </div>
        </Reveal>

        {/* Form + Direct Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7">
            <Reveal direction="up" delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <Reveal direction="up" delay={0.2}>
              <div className="p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] space-y-6">
                <h3 className="text-xl font-bold uppercase text-[var(--text-color)] font-display">
                  DIRECT STUDIO CONTACT
                </h3>

                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-3 text-[var(--text-color)] font-mono">
                    <Mail className="w-4 h-4 text-[var(--accent-color)]" />
                    <a href="mailto:hello@byteora.agency" className="hover:text-[var(--accent-color)] transition-colors">
                      hello@byteora.agency
                    </a>
                  </div>

                  <div className="flex items-center gap-3 text-[var(--text-color)] font-mono">
                    <Phone className="w-4 h-4 text-[var(--accent-color)]" />
                    <a href="tel:+18004829381" className="hover:text-[var(--accent-color)] transition-colors">
                      +1 (800) 482-9381
                    </a>
                  </div>

                  <div className="flex items-center gap-3 text-[var(--secondary-color)] text-xs font-mono">
                    <Clock className="w-4 h-4 text-[var(--accent-color)]" />
                    <span>24-Hour Response SLA Guarantee</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Map Visual Card */}
            <Reveal direction="up" delay={0.3}>
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-[var(--border-color)] bg-[var(--card-bg)] p-6 flex flex-col justify-between group">
                <img
                  src="assets/world_hubs_map_1787737657103.png"
                  alt="Global Studio Hubs Map"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-color)] via-[var(--bg-color)]/50 to-transparent" />
                
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest bg-[var(--accent-color)] text-[#0A0A0A]">
                    // GLOBAL TIMEZONES
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--accent-color)] animate-ping" />
                    <span className="text-[10px] font-mono text-[var(--accent-color)] uppercase">LIVE SPATIAL RADAR</span>
                  </div>
                </div>

                <div className="relative z-10 space-y-2 pt-12">
                  <span className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[var(--text-color)] font-display block">
                    4 GLOBAL HUBS OPERATIONAL
                  </span>
                  <p className="text-xs text-[var(--secondary-color)] font-mono leading-relaxed">
                    Continuous 24/7 client sprint coverage across APAC (Tokyo), EMEA (Zurich, London), and Americas (New York).
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Global Studio Locations Grid */}
        <Reveal direction="up">
          <div className="space-y-8 pt-12">
            <h2 className="text-2xl font-bold uppercase tracking-tight text-[var(--text-color)] font-display">
              OUR GLOBAL HUBS & ADDRESSES
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {globalHubs.map((hub, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] space-y-3">
                  <span className="text-xs font-mono uppercase text-[var(--accent-color)] font-bold">{hub.tz}</span>
                  <h4 className="text-lg font-bold uppercase text-[var(--text-color)] font-display">{hub.city}</h4>
                  <p className="text-xs text-[var(--secondary-color)] font-mono leading-relaxed">{hub.address}</p>
                  <a href={`mailto:${hub.email}`} className="text-xs font-mono text-[var(--accent-color)] hover:underline block pt-2">
                    {hub.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <FAQSection />
    </div>
  );
};
