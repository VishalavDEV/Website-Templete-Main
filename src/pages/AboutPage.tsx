import React from 'react';
import { motion } from 'motion/react';
import { Shield, Award, Users, Globe, ArrowUpRight, Sparkles, CheckCircle2, MapPin } from 'lucide-react';
import { audioService } from '../utils/audio';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

const teamMembers = [
  {
    name: 'Cassian Vance',
    role: 'Co-Founder & Brand Architect',
    bio: 'Former global design lead for autonomous hardware platforms. 14+ years pioneering kinetic typography and living brand tokens.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Kairos Thorne',
    role: 'Co-Founder & Lead Creative Technologist',
    bio: 'WebGL shader engineer and distributed systems architect. Obsessed with 60fps rendering, sub-100ms FCP, and generative physics.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Aria Thorne',
    role: 'Head of Product & Ergonomics',
    bio: 'Cognitive psychologist turned digital product architect. Led interface transformations across fintech, spatial computing, and luxury.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Milo Takahashi',
    role: 'Director of 3D & CGI Motion',
    bio: 'VFX director and sound designer. Crafting cinematic launch films and real-time Web Audio visualizers for global keynotes.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop'
  }
];

const awardsList = [
  { name: 'Site of the Year', org: 'Awwwards Global', year: '2026', project: 'Aether Spatial Studio' },
  { name: 'Gold Lion for Craft', org: 'Cannes International', year: '2026', project: 'Pulse Acoustic Labs' },
  { name: 'Best of the Best', org: 'Red Dot Awards', year: '2025', project: 'Vertex Quantum Computing' },
  { name: 'FWA of the Month', org: 'FWA Digital Showcase', year: '2025', project: 'Nova Robotics Identity' },
  { name: 'Design System of the Year', org: 'Design Awards Berlin', year: '2024', project: 'Meridian Private Bank' },
];

const locations = [
  { city: 'San Francisco', area: 'Mission Bay Technology Center', timezone: 'UTC-8 (PST)', coordinates: '37.7749° N, 122.4194° W' },
  { city: 'London', area: 'Shoreditch Design Quarter', timezone: 'UTC+0 (GMT)', coordinates: '51.5074° N, 0.1278° W' },
  { city: 'Tokyo', area: 'Minato Creative District', timezone: 'UTC+9 (JST)', coordinates: '35.6762° N, 139.6503° E' }
];

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="pt-32 pb-24 w-full">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-violet-400 uppercase tracking-widest px-3 py-1 rounded-full bg-violet-950/50 border border-violet-800/40">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Horizon Studio</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Small team. Big thinking. Measurable impact.
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-serif">
            We are an independent creative technology atelier. We exist to help visionary founders and category leaders build brands and software experiences that leave indelible marks on culture.
          </p>
        </div>
      </section>

      {/* Narrative & Philosophy Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Why we rejected the traditional agency model.
            </h2>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Traditional advertising agencies are built on volume: armies of junior account handlers, endless meetings, and bloated retainers that burn budgets before a single line of code is written.
            </p>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Horizon is structured differently. Every client works directly with senior partners who write code, sculpt typography, and architect strategy. We limit our active roster to 4 concurrent client sprints per quarter to guarantee obsessive devotion to craft.
            </p>

            <div className="pt-4 space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-semibold text-white">Direct Partner Access</span>
                  <p className="text-xs text-gray-400">Zero junior delegates or layers of middle management.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-semibold text-white">Sub-100ms Performance SLA</span>
                  <p className="text-xs text-gray-400">Every digital experience is engineered for maximum speed and Lighthouse 95+.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                alt="Horizon Creative Studio Team"
                className="w-full h-96 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090A0E] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 font-mono text-xs text-gray-300">
                HORIZON ATELIER // SAN FRANCISCO HEADQUARTERS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs text-violet-400 uppercase tracking-widest block mb-2">
            The Senior Collective
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Led by creators, not managers.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#11131E] border border-white/8 hover:border-violet-500/40 transition-all space-y-4 group"
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-black/40 border border-white/10">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors">
                  {member.name}
                </h3>
                <span className="text-xs font-mono text-violet-400 block mt-0.5">{member.role}</span>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Awards & Recognition Trophy Cabinet */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#131624] to-[#0D0F18] border border-white/10 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 pb-6 border-b border-white/8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-violet-600/20 text-violet-400 flex items-center justify-center border border-violet-500/30">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Award Cabinet & Honors</h3>
                <p className="text-xs font-mono text-gray-400">Recognized globally for craft & creative engineering</p>
              </div>
            </div>
            <span className="font-mono text-xs text-violet-400 bg-violet-950/80 px-3 py-1 rounded-full border border-violet-800/40">
              18 INTERNATIONAL HONORS
            </span>
          </div>

          <div className="divide-y divide-white/6 font-mono text-xs">
            {awardsList.map((item, idx) => (
              <div key={idx} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-4">
                  <span className="text-violet-400 font-bold">{item.year}</span>
                  <span className="text-white font-bold text-sm">{item.name}</span>
                  <span className="text-gray-500 hidden sm:inline">({item.org})</span>
                </div>
                <span className="text-gray-400 text-right">{item.project}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Studios Locations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="font-mono text-xs text-violet-400 uppercase tracking-widest block mb-2">
            Studio Presences
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Distributed globally. Synchronized locally.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {locations.map((loc, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#11131E] border border-white/8 space-y-3 font-mono"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-white font-bold text-base">
                  <MapPin className="w-4 h-4 text-violet-400" />
                  <span>{loc.city}</span>
                </div>
                <span className="text-[10px] text-gray-500">{loc.timezone}</span>
              </div>
              <p className="text-xs text-gray-400">{loc.area}</p>
              <span className="text-[10px] text-gray-600 block">{loc.coordinates}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
