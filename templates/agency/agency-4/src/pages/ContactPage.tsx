import React, { useEffect } from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ContactSection } from '../components/sections/ContactSection';
import { MapPin, Calendar } from 'lucide-react';
import { STUDIO_INFO } from '../data/studio';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Direct Engagement"
          title="Start a project with AURELIA."
          subtitle="Whether launching a new digital product flagship, orchestrating a global brand rebrand, or seeking strategic creative direction."
        />

        {/* Core Contact Form Component */}
        <ContactSection />

        {/* Studio Spaces & Location Photography Cards */}
        <div className="my-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl overflow-hidden border border-[#EAE6DF] shadow-sm flex flex-col justify-between group">
            <div className="aspect-[16/9] overflow-hidden bg-[#EAE6DF] relative">
              <img
                src="images/pexels-ann-h-45017-32417522.jpg"
                alt="Copenhagen Studio Headquarters"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#D96B43] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Primary Studio HQ
              </div>
            </div>
            <div className="p-8 space-y-3">
              <div className="flex items-center space-x-2 text-[#D96B43]">
                <MapPin className="w-5 h-5" />
                <h3 className="text-xl font-bold font-display text-[#1A1918]">Copenhagen Design District</h3>
              </div>
              <p className="text-xs text-[#6B6863] leading-relaxed">
                Holmen Design District, Strandgade 48, 1401 Copenhagen, Denmark
              </p>
              <div className="pt-2 border-t border-[#EAE6DF] flex items-center justify-between text-xs font-semibold text-[#1A1918]">
                <span>Mon — Fri: 09:00 — 18:00 CET</span>
                <span className="text-[#D96B43]">Walk-ins By Appointment</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl overflow-hidden border border-[#EAE6DF] shadow-sm flex flex-col justify-between group">
            <div className="aspect-[16/9] overflow-hidden bg-[#EAE6DF] relative">
              <img
                src="images/pexels-karola-g2-6224.jpg"
                alt="Executive Discovery Consultation"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-[#1A1918] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Partner Strategy Sync
              </div>
            </div>
            <div className="p-8 space-y-3">
              <div className="flex items-center space-x-2 text-[#D96B43]">
                <Calendar className="w-5 h-5" />
                <h3 className="text-xl font-bold font-display text-[#1A1918]">Executive Discovery Sessions</h3>
              </div>
              <p className="text-xs text-[#6B6863] leading-relaxed">
                Schedule a 30-minute discovery call directly with our Managing Partners to discuss scope, timeline, and commercial strategy.
              </p>
              <div className="pt-2 border-t border-[#EAE6DF] flex items-center justify-between">
                <span className="text-xs font-semibold text-[#6B6863]">Response guaranteed within 24 hours</span>
                <a
                  href={`mailto:${STUDIO_INFO.email}?subject=Executive%20Discovery%20Call%20Request`}
                  className="text-xs font-bold text-[#D96B43] hover:underline"
                >
                  Book Discovery Call →
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
