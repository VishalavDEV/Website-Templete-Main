import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Shield, Sparkles, Clock, Crown, Key, Plane, ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

interface ExecutiveExperienceProps {
  onOpenConsultation: () => void;
}

export default function ExecutiveExperienceSection({ onOpenConsultation }: ExecutiveExperienceProps) {
  const pillars = [
    {
      icon: Plane,
      title: 'Private Airport Transfers & VIP Tarmac',
      desc: 'Direct tarmac vehicle escorts, bypass public security queues, and discreet access to private FBO VIP lounges in 200+ airports.'
    },
    {
      icon: Crown,
      title: 'Executive Lounges & Boardroom Suites',
      desc: 'Complimentary room category upgrades, private meeting salons, guaranteed 10:00 AM early check-in, and 24/7 dedicated butler service.'
    },
    {
      icon: Key,
      title: 'Personal C-Suite Concierge Desk',
      desc: 'Single dedicated travel partner who knows your exact seat preferences, dietary needs, hotel floor requirements, and security protocol.'
    },
    {
      icon: Sparkles,
      title: 'Private Aviation & Charter Backup',
      desc: 'On-demand midsize and heavy jet dispatch with guaranteed 4-hour wheels-up readiness for emergency executive mobility.'
    },
    {
      icon: Shield,
      title: 'Discreet Security & Armored Fleet',
      desc: 'Trained executive protection chauffeurs, armored vehicle options in high-risk zones, and strict non-disclosure compliance.'
    },
    {
      icon: Clock,
      title: 'Real-Time Dynamic Itinerary Support',
      desc: 'Instant flight re-routing, proactive gate monitoring, and zero-cancellation penalty flexibility on corporate routes.'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#0E1412] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#0F382E]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#165042] border border-[#C29B38]/30 text-[#DFBA58] text-xs font-semibold uppercase tracking-[0.2em]">
              <Crown className="w-3.5 h-3.5" />
              C-Suite & Boardroom Standard
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-white leading-[1.1] tracking-tight">
              Because time is the most valuable thing you carry.
            </h2>

            <p className="text-base sm:text-lg text-[#D8C3A8]/80 leading-relaxed max-w-xl">
              For chairpersons, founders, and managing partners, business travel cannot afford friction. Our dedicated Executive Concierge desk operates with absolute discretion, flawless anticipation, and private aviation backup across the globe.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#C29B38] text-[#0E1412] text-xs font-bold uppercase tracking-wider hover:bg-[#DFBA58] active:scale-95 transition-all shadow-lg cursor-pointer"
              >
                <span>Request Executive Concierge</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to="/executive-travel"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wider hover:bg-white/20 transition-colors border border-white/20"
              >
                <span>View Executive Protocols</span>
              </Link>
            </div>
          </div>

          {/* Right Editorial Image Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C29B38]/30 aspect-[4/5] w-full">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop"
                alt="Executive board private mobility"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061814] via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 text-xs text-[#D8C3A8]/90">
                <div className="font-serif text-xl text-white italic">Gulfstream G700 Global Transatlantic Charter</div>
                <div className="text-[11px] uppercase tracking-wider text-[#DFBA58] mt-0.5">Direct non-stop London to Tokyo with private suite</div>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Executive Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => {
            const IconComp = pillar.icon;
            return (
              <div
                key={index}
                className="p-6 sm:p-8 rounded-2xl bg-[#061814]/80 border border-[#165042] hover:border-[#C29B38]/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0F382E] text-[#DFBA58] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform border border-[#C29B38]/20">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#D8C3A8]/70 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
