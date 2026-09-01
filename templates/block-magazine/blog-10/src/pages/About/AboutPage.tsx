import React, { useEffect } from 'react';
import { Compass, ShieldCheck, Camera, Sparkles, MapPin, Mail, Award, CheckCircle2 } from 'lucide-react';
import { Newsletter } from '../../components/Newsletter/Newsletter';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-20 select-none space-y-20">
      
      {/* Hero Manifesto */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c98a3e]/15 border border-[#c98a3e]/30 text-[#e0a358] text-[10px] font-mono tracking-widest uppercase">
          <Compass className="w-3.5 h-3.5" />
          <span>OUR MISSION & EDITORIAL MANIFESTO</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight">
          TO LOOK CLOSELY. TO DOCUMENT TRUTHFULLY.
        </h1>

        <p className="font-serif italic text-lg sm:text-2xl text-[#d1c7b7] font-light leading-relaxed">
          "The world does not require our embellishment. It demands our reverence, our precision, and our unrelenting curiosity."
        </p>
      </section>

      {/* Narrative Section with Image */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 text-left font-sans text-sm sm:text-base text-[#d1c7b7] leading-relaxed font-light">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
              A Global Expeditionary Publication
            </h2>
            <p>
              Founded in 2026, <strong className="text-white font-medium">TERRA Magazine</strong> is an independent digital and print journal chronicling the natural sciences, deep wildlife preservation, archaeological discoveries, and frontier exploration.
            </p>
            <p>
              We commission long-form dispatches from researchers in the field—from benthic submersibles exploring hadal trenches to astronomers mapping cosmic structures at the high Atacama desert.
            </p>
            <p>
              Every photograph published in TERRA is verified for natural fidelity. We do not use generative imagery or computational manipulation in our natural science reporting.
            </p>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80"
              alt="Expedition researcher looking across mountain range"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 font-mono text-[10px] text-[#a8a49c]">
              EXPEDITION 48 · SVALBARD CRYOSPHERE SURVEY
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Principles */}
      <section id="editorial" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2">
          <span className="font-mono text-xs tracking-[0.25em] text-[#e0a358] uppercase">
            ETHICAL FOUNDATION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Our Four Editorial Pillars
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-[#141619] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#c98a3e]/20 text-[#e0a358] flex items-center justify-center font-mono font-bold">
              01
            </div>
            <h3 className="font-serif text-xl font-bold text-white">Scientific Truth</h3>
            <p className="text-xs text-[#a8a49c] leading-relaxed">
              Every factual assertion is corroborated with peer-reviewed research and verified by domain scientists.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#141619] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#c98a3e]/20 text-[#e0a358] flex items-center justify-center font-mono font-bold">
              02
            </div>
            <h3 className="font-serif text-xl font-bold text-white">Ethical Wildlife</h3>
            <p className="text-xs text-[#a8a49c] leading-relaxed">
              We never bait, harass, or disturb wildlife to produce images. Natural behavior is paramount.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#141619] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#c98a3e]/20 text-[#e0a358] flex items-center justify-center font-mono font-bold">
              03
            </div>
            <h3 className="font-serif text-xl font-bold text-white">Indigenous Respect</h3>
            <p className="text-xs text-[#a8a49c] leading-relaxed">
              Cultural reporting is conducted in collaboration with local knowledge-keepers and traditional custodians.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#141619] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#c98a3e]/20 text-[#e0a358] flex items-center justify-center font-mono font-bold">
              04
            </div>
            <h3 className="font-serif text-xl font-bold text-white">Visual Authenticity</h3>
            <p className="text-xs text-[#a8a49c] leading-relaxed">
              Pure optical photojournalism with complete technical transparency and full EXIF telemetry disclosures.
            </p>
          </div>
        </div>
      </section>

      {/* Expedition Council / Masthead */}
      <section id="expeditions" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-white/10 pb-4">
          <span className="font-mono text-xs tracking-[0.25em] text-[#e0a358] uppercase block mb-1">
            MASTHEAD
          </span>
          <h2 className="font-serif text-3xl font-bold text-white">
            Editorial Board & Bureau Chiefs
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: 'Dr. Elena Rostova',
              role: 'Editor in Chief',
              bio: 'Former polar glaciologist and science author.',
              image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
            },
            {
              name: 'Marcus Vance',
              role: 'Bureau Chief, Photography',
              bio: '20 years documenting deep-sea biology and marine sanctuaries.',
              image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
            },
            {
              name: 'Dr. Aarav Patel',
              role: 'Director, Archaeological Surveys',
              bio: 'Specialist in LiDAR remote sensing and Mesoamerican cities.',
              image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
            },
            {
              name: 'Sarah Chen',
              role: 'Senior Science Editor',
              bio: 'Astrophysicist and science communicator.',
              image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
            }
          ].map((member, i) => (
            <div key={i} className="p-6 rounded-2xl bg-[#141619] border border-white/10 space-y-4 text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-20 rounded-full object-cover mx-auto border-2 border-[#c98a3e]"
              />
              <div>
                <h3 className="font-serif text-lg font-bold text-white">{member.name}</h3>
                <div className="text-xs font-mono text-[#e0a358]">{member.role}</div>
                <p className="text-xs font-sans text-[#a8a49c] mt-2 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Bureau */}
      <section id="contact" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#141619] border border-white/15 text-center space-y-6">
          <Mail className="w-10 h-10 text-[#c98a3e] mx-auto" />
          <h2 className="font-serif text-3xl font-bold text-white">Contact the Bureau</h2>
          <p className="font-sans text-sm text-[#d1c7b7] max-w-xl mx-auto leading-relaxed">
            Have an expedition dispatch, scientific discovery, or photographic portfolio you wish to submit to TERRA?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="mailto:dispatches@terra-journal.org"
              className="px-6 py-3 rounded-full bg-[#c98a3e] text-black font-bold text-xs font-mono tracking-wider"
            >
              DISPATCHES@TERRA-JOURNAL.ORG
            </a>
            <span className="font-mono text-xs text-[#a8a49c]">
              OPEN ACCESS INQUIRIES: INQUIRIES@TERRA-JOURNAL.ORG
            </span>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Newsletter />
      </section>
    </div>
  );
};
