import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Activity, PhoneCall, Radio, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { mockTravelAlerts } from '../../data/offices';
import SectionHeading from '../ui/SectionHeading';

export default function TravelSafetySection() {
  const safetyFeatures = [
    { title: 'Real-Time Travel Alerts', desc: 'Predictive notifications regarding airspace congestion, civil weather, or transport strikes.' },
    { title: 'Destination Intelligence', desc: 'Pre-trip risk advisories, health protocol updates, and emergency contact dossiers for 120+ countries.' },
    { title: 'Emergency Assistance', desc: 'Global medical extraction partnerships with International SOS and 24/7 priority emergency dispatch.' },
    { title: 'Live Traveler GPS Tracking', desc: 'Interactive global Duty of Care dashboard displaying the exact security status of traveling staff.' },
    { title: 'Risk Monitoring', desc: 'Continuous surveillance of regional geopolitical indicators, weather anomalies, and health alerts.' },
    { title: '24/7 Concierge Hotline', desc: 'Direct access to multilingual crisis response directors with sub-90-second answer times.' }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F8F5EE] border-t border-[#D8C3A8]/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Duty of Care"
          title="Your people, protected wherever they travel."
          subtitle="Enterprise travel risk management compliant with ISO 31030 standards. We provide uninterrupted intelligence and instant ground support across every timezone."
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 6 Features Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {safetyFeatures.map((feat, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white border border-[#D8C3A8]/60 shadow-sm hover:border-[#0F382E]/40 transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#0F382E]" />
                  <h4 className="font-serif text-lg font-semibold text-[#0E1412]">
                    {feat.title}
                  </h4>
                </div>
                <p className="text-xs text-[#62756D] leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Live Global Security Telemetry Stream */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-7 rounded-3xl bg-[#0E1412] text-white border border-[#165042] shadow-xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#165042]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DFBA58] animate-ping" />
                  <span className="font-mono text-xs text-[#EADBCA] uppercase tracking-wider font-semibold">
                    Global Security Operations Center
                  </span>
                </div>
                <span className="text-[10px] text-[#8FA29A] font-mono">LIVE FEED</span>
              </div>

              {/* Active Alerts List */}
              <div className="space-y-3">
                {mockTravelAlerts.map((alert) => (
                  <div
                    key={alert.id}
                    className="p-3.5 rounded-xl bg-[#061814] border border-[#165042] text-xs space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5 text-[#DFBA58]" />
                        {alert.city}, {alert.country}
                      </span>
                      <span className="text-[10px] text-[#8FA29A]">{alert.timeAgo}</span>
                    </div>
                    <div className="text-[#EADBCA] font-medium">{alert.title}</div>
                    <div className="text-[#8FA29A] text-[11px] leading-relaxed">{alert.impact}</div>
                    <div className="pt-1 text-[11px] text-[#2A8C74] flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 flex-shrink-0" />
                      <span>{alert.actionTaken}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-[#8FA29A] border-t border-[#165042]">
                <span>Status: All Travelers Accounted For</span>
                <span className="text-[#DFBA58] font-semibold">Zero Incidents Pending</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
