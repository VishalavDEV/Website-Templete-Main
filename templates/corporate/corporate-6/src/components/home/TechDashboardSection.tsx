import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  TrendingDown,
  Clock,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Plane,
  CreditCard,
  Users,
  Search,
  ChevronRight,
  Filter,
  DollarSign,
  ArrowUpRight
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import AnimatedCounter from '../ui/AnimatedCounter';

export default function TechDashboardSection() {
  const [activeTab, setActiveTab] = useState<'overview' | 'trips' | 'spend' | 'approvals' | 'duty'>('overview');

  const upcomingTrips = [
    { traveler: 'Marcus Thorne', role: 'Managing Partner', route: 'LHR → HND', flight: 'BA 007 First Class', hotel: 'Aman Tokyo', status: 'Confirmed', policy: '100% Compliant' },
    { traveler: 'Dr. Elena Rostova', role: 'VP Research', route: 'JFK → ZRH', flight: 'LX 015 Business', hotel: 'Baur au Lac', status: 'In Transit', policy: '100% Compliant' },
    { traveler: 'David Chen', role: 'Head of M&A', route: 'SIN → DXB', flight: 'EK 355 First Class', hotel: 'Bulgari Resort', status: 'Approval Pending', policy: 'Special Cabin Tier' },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FBF9F6] border-t border-[#1A1A1A]/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Enterprise Intelligence"
          title="One connected platform. Every journey under control."
          subtitle="Unified visibility for CFOs, travel managers, and executives. Automate travel policies, capture volume supplier rebates, and protect employees with proactive real-time tracking."
          align="left"
        />

        {/* 3 Key Metrics Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-black/5 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#0D4433]/10 text-[#0D4433] flex items-center justify-center flex-shrink-0">
              <TrendingDown className="w-6 h-6 text-[#0D4433]" />
            </div>
            <div>
              <div className="font-serif text-3xl font-bold text-[#1A1A1A]">32%</div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A]">Lower Travel Spend</div>
              <div className="text-[11px] text-[#65726D]">Through dynamic supplier rate capture</div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-black/5 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#0D4433]/10 text-[#0D4433] flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-[#0D4433]" />
            </div>
            <div>
              <div className="font-serif text-3xl font-bold text-[#1A1A1A]">41%</div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A]">Faster Approvals</div>
              <div className="text-[11px] text-[#65726D]">Automated in-policy multi-tiered chains</div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-black/5 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#0D4433]/10 text-[#0D4433] flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#0D4433]" />
            </div>
            <div>
              <div className="font-serif text-3xl font-bold text-[#1A1A1A]">89%</div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A]">Policy Compliance</div>
              <div className="text-[11px] text-[#65726D]">Up from 54% legacy agency average</div>
            </div>
          </div>
        </div>

        {/* Realistic Corporate Travel Dashboard UI */}
        <div className="rounded-3xl bg-[#082920]/95 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden text-white">
          {/* Dashboard Header Bar */}
          <div className="px-6 py-4 bg-[#051A14] border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#DFBA58] animate-pulse" />
              <span className="font-mono text-xs text-white/90 uppercase tracking-wider font-semibold">
                Aurelia Command • Global Enterprise Travel Portal
              </span>
              <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-white border border-white/15">
                LIVE FEED
              </span>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  activeTab === 'overview' ? 'bg-[#0D4433] text-white border border-white/20' : 'text-white/60 hover:text-white'
                }`}
              >
                Trip Overview
              </button>
              <button
                onClick={() => setActiveTab('trips')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  activeTab === 'trips' ? 'bg-[#0D4433] text-white border border-white/20' : 'text-white/60 hover:text-white'
                }`}
              >
                Upcoming Trips
              </button>
              <button
                onClick={() => setActiveTab('spend')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  activeTab === 'spend' ? 'bg-[#0D4433] text-white border border-white/20' : 'text-white/60 hover:text-white'
                }`}
              >
                Travel Spend & ERP
              </button>
              <button
                onClick={() => setActiveTab('duty')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  activeTab === 'duty' ? 'bg-[#0D4433] text-white border border-white/20' : 'text-white/60 hover:text-white'
                }`}
              >
                Duty of Care Tracking
              </button>
            </div>
          </div>

          {/* Dashboard Body Content */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Top Quick Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-[10px] text-white/60 uppercase tracking-widest font-semibold">Active Travelers</div>
                <div className="font-serif text-2xl sm:text-3xl font-normal text-white mt-1">142 In Motion</div>
                <div className="text-[10px] text-white/70 mt-0.5">Across 18 Countries</div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-[10px] text-white/60 uppercase tracking-widest font-semibold">Q3 YTD Budget Spent</div>
                <div className="font-serif text-2xl sm:text-3xl font-normal text-white mt-1">$1.84M</div>
                <div className="text-[10px] text-[#259473] mt-0.5">-$420K vs Projected Target</div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-[10px] text-white/60 uppercase tracking-widest font-semibold">Pending Approvals</div>
                <div className="font-serif text-2xl sm:text-3xl font-normal text-[#DFBA58] mt-1">4 Itineraries</div>
                <div className="text-[10px] text-white/60 mt-0.5">Average turn: 8 mins</div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-[10px] text-white/60 uppercase tracking-widest font-semibold">Carbon Offset Index</div>
                <div className="font-serif text-2xl sm:text-3xl font-normal text-[#259473] mt-1">100% Net Zero</div>
                <div className="text-[10px] text-white/60 mt-0.5">Verified Gold Standard SAF</div>
              </div>
            </div>

            {/* Main Interactive Table / Feed */}
            <div className="rounded-2xl bg-black/20 border border-white/10 p-4 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-xs uppercase font-bold tracking-wider text-white flex items-center gap-2">
                  <Plane className="w-4 h-4 text-[#DFBA58]" />
                  <span>Real-Time Executive Itinerary Feed</span>
                </div>
                <span className="text-[11px] text-white/60">Synced with SAP Concur & Amadeus GDS</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-white/10 text-white/60 uppercase tracking-wider text-[10px]">
                      <th className="pb-3 font-semibold">Traveler & Title</th>
                      <th className="pb-3 font-semibold">Route & Cabin</th>
                      <th className="pb-3 font-semibold">Accommodation</th>
                      <th className="pb-3 font-semibold">Status</th>
                      <th className="pb-3 font-semibold text-right">Policy Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {upcomingTrips.map((trip, i) => (
                      <tr key={i} className="hover:bg-white/5 transition-colors">
                        <td className="py-3.5">
                          <div className="font-semibold text-white">{trip.traveler}</div>
                          <div className="text-[11px] text-white/60">{trip.role}</div>
                        </td>
                        <td className="py-3.5">
                          <div className="font-mono text-[#DFBA58] font-bold">{trip.route}</div>
                          <div className="text-[11px] text-white/60">{trip.flight}</div>
                        </td>
                        <td className="py-3.5">
                          <div className="text-white">{trip.hotel}</div>
                          <div className="text-[11px] text-white/60">Executive Suite (Guaranteed Upgrade)</div>
                        </td>
                        <td className="py-3.5">
                          <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold ${
                            trip.status === 'Confirmed' ? 'bg-[#0D4433] text-white border border-white/20' :
                            trip.status === 'In Transit' ? 'bg-[#135A45] text-white border border-white/20' :
                            'bg-[#4A3B18] text-[#DFBA58]'
                          }`}>
                            {trip.status}
                          </span>
                        </td>
                        <td className="py-3.5 text-right">
                          <span className="inline-flex items-center gap-1 text-[#259473] font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            {trip.policy}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
