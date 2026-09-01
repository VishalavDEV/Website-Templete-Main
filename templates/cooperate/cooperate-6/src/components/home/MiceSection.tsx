import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Layers, Users, Calendar, Sparkles, Building, Globe, ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

interface MiceSectionProps {
  onOpenConsultation: () => void;
}

export default function MiceSection({ onOpenConsultation }: MiceSectionProps) {
  const eventTypes = [
    { title: 'Corporate Conferences', desc: 'Mega-events for 500 to 10,000 global delegates with custom badge tech and plenary stagecraft.' },
    { title: 'Leadership Retreats', desc: 'Secluded private estate buyouts and mountain summits tailored for high-stakes executive alignment.' },
    { title: 'Incentive Trips', desc: 'Transformational bucket-list itineraries that reward, inspire, and retain elite performers.' },
    { title: 'Executive Meetings & Board GMs', desc: 'High-security confidential board assemblies with Michelin-starred private catering.' },
    { title: 'International Symposiums', desc: 'Cross-border multi-day academic, biotech, and financial forums across key world capitals.' },
    { title: 'Team Immersion Experiences', desc: 'Curated cultural, culinary, and adrenaline team bonding challenges in unforgettable destinations.' },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FBF9F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Event Types & Content */}
          <div className="lg:col-span-6 space-y-8">
            <SectionHeading
              badge="MICE & Events"
              title="Architecting Global Gatherings at Scale"
              subtitle="From Davos board retreats to 5,000-delegate tech symposiums in Singapore and Dubai, Aurelia delivers flawless venue sourcing, group aviation, and on-site event production."
              align="left"
              className="mb-6"
            />

            {/* Event categories grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {eventTypes.map((event, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-[#F8F5EE] border border-[#D8C3A8]/50 hover:border-[#0F382E]/40 transition-colors"
                >
                  <div className="font-serif text-lg font-semibold text-[#0E1412] mb-1">
                    {event.title}
                  </div>
                  <p className="text-xs text-[#62756D] leading-relaxed">
                    {event.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                id="mice-plan-event-btn"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#0F382E] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#165042] active:scale-95 transition-all shadow-md cursor-pointer"
              >
                <span>Plan a Corporate Event</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to="/mice"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0F382E] hover:text-[#165042] py-3 px-2 group"
              >
                <span>Explore Full MICE Portfolio</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Large Event Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#D8C3A8] aspect-[4/4.8]">
              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop"
                alt="Corporate global summit in architectural auditorium"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A261F]/90 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 text-white text-xs space-y-2">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold text-[#DFBA58]">
                  <Globe className="w-3.5 h-3.5" />
                  <span>Dubai Innovation Pavilion Summit</span>
                </div>
                <h4 className="font-serif text-xl sm:text-2xl text-white font-medium">
                  2,800 Global Attendees Managed Seamlessly
                </h4>
                <p className="text-[#D8C3A8]/90 text-[11px] max-w-md">
                  Complete delegate travel orchestration, 14 chartered flights, 8 luxury hotel room blocks, and zero logistical delays.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
