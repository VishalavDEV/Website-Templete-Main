import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowLeft, BookOpen, Layers, Globe, CheckCircle2, ShieldCheck, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AboutView() {
  const principles = [
    {
      number: '01',
      title: 'Monographic Depth Over Algorithmic Brevity',
      desc: 'We publish long-form treatises averaging 3,500 words, allowing theorists to thoroughly interrogate complex spatial ideas without superficial soundbites.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    },
    {
      number: '02',
      title: '100% Light-Engine Readability',
      desc: 'Our digital interface reflects the tactility of architectural vellum paper. Pure white luminous surfaces engineered for high ocular comfort.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop',
    },
    {
      number: '03',
      title: 'Independent Reader-Supported Autonomy',
      desc: 'Zero native advertising, no programmatic affiliate trackers, and complete freedom from algorithmic engagement optimization.',
      image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=800&auto=format&fit=crop',
    },
    {
      number: '04',
      title: 'Tactile Physical Print Archive',
      desc: 'Every digital volume is permanently typeset into a quarterly 320-page hardcover print volume bound in Zurich with unbleached cotton bookcloth.',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop',
    },
  ];

  const bureaus = [
    {
      city: 'ZURICH',
      address: 'Limmatquai 44, 8001 Zürich',
      desk: 'Central Managing Bureau & Typesetting Desk',
      image: 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=600&auto=format&fit=crop',
      timeZone: 'CET (UTC+1)',
    },
    {
      city: 'KYOTO',
      address: 'Gion Shinbashi 12, Higashiyama',
      desk: 'Bio-Architecture & Japanese Joinery Lab',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=600&auto=format&fit=crop',
      timeZone: 'JST (UTC+9)',
    },
    {
      city: 'NEW YORK',
      address: 'Crosby Street 88, SoHo',
      desk: 'Photonic & Computational Wire Desk',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop',
      timeZone: 'EST (UTC-5)',
    },
    {
      city: 'PARIS',
      address: 'Rue de Turenne 21, Le Marais',
      desk: 'Material Culture & Avant-Garde Horology',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=600&auto=format&fit=crop',
      timeZone: 'CET (UTC+1)',
    },
  ];

  return (
    <div className="space-y-16 max-w-6xl mx-auto pb-24">
      {/* Top Back Link */}
      <div className="pt-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#6B7280] hover:text-[#0055FF] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Index</span>
        </Link>
      </div>

      {/* Hero Manifesto Box */}
      <header className="rounded-3xl glass-card bg-white/95 p-8 sm:p-12 md:p-16 border border-white/90 shadow-[0_20px_50px_-10px_rgba(0,85,255,0.06)] text-center space-y-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0055FF]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF4FF] border border-[#BFDBFE] text-[#0055FF] text-xs font-mono font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The 2026 Manifesto // Zurich Editorial Desk</span>
        </div>

        <h1 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-[#111827] uppercase tracking-tight leading-[1.04] max-w-4xl mx-auto">
          A Sanctuary for Spatial Intellect & Unhurried Inquiries.
        </h1>

        <p className="text-base sm:text-xl text-[#4B5563] max-w-3xl mx-auto leading-relaxed font-normal">
          "Z MAG was founded in 2026 to dismantle the frictionless acceleration of modern media. We champion deep physical craftsmanship, spatial neuro-architecture, and contemplative culture."
        </p>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#6B7280] border-t border-[#F3F4F6]">
          <span className="flex items-center gap-1.5 text-[#111827] font-bold">
            <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
            Peer-Reviewed Spatial Research
          </span>
          <span>&bull;</span>
          <span className="flex items-center gap-1.5 text-[#111827] font-bold">
            <ShieldCheck className="w-4 h-4 text-[#0055FF]" />
            Zero Programmatic Ads
          </span>
          <span>&bull;</span>
          <span className="flex items-center gap-1.5 text-[#111827] font-bold">
            <BookOpen className="w-4 h-4 text-[#FF5E3A]" />
            Quarterly Hardcover Editions
          </span>
        </div>
      </header>

      {/* Visual Editorial Studio Showcase Banner */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        <div className="md:col-span-8 rounded-3xl overflow-hidden shadow-xl border border-white/80 aspect-[16/9] md:aspect-auto relative group bg-[#F3F4F6]">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
            alt="Zurich Editorial Atelier"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-8 text-white space-y-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#00E5FF]">
              Zurich Atelier &bull; Limmatquai
            </span>
            <h3 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-tight">
              Where Physical Print Meets Digital Space
            </h3>
            <p className="text-xs sm:text-sm text-white/80 max-w-lg leading-relaxed">
              Our main editorial atelier in Zurich houses our archive of over 4,000 architectural monographs, photogrammetry datasets, and typographical specimen books.
            </p>
          </div>
        </div>

        <div className="md:col-span-4 rounded-3xl glass-card bg-gradient-to-br from-white to-[#EBF4FF] p-8 border border-white flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <span className="font-mono text-xs font-bold text-[#0055FF] uppercase tracking-wider block">
              ✦ Production Standards
            </span>
            <h3 className="font-heading font-black text-2xl text-[#111827] uppercase tracking-tight">
              The Architecture of Every Volume
            </h3>
            <p className="text-xs text-[#4B5563] leading-relaxed">
              Every monograph undergoes a rigorous four-stage peer-review protocol conducted by leading architects and theoretical physicists.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-[#E5E7EB] text-xs font-mono text-[#374151]">
            <div className="flex justify-between">
              <span className="text-[#6B7280]">Print Weight:</span>
              <span className="font-bold text-[#111827]">1,450 grams</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#6B7280]">Paper Stock:</span>
              <span className="font-bold text-[#111827]">Munken Lynx 120gsm</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#6B7280]">Binding:</span>
              <span className="font-bold text-[#111827]">Smyth-Sewn Hardcover</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#6B7280]">Typography:</span>
              <span className="font-bold text-[#111827]">Syne & Space Grotesk</span>
            </div>
          </div>
        </div>
      </div>

      {/* Editorial Pillars with Rich Cards & Visual Imagery */}
      <section className="space-y-8">
        <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB]">
          <div className="flex items-center gap-2.5">
            <Layers className="w-5 h-5 text-[#0055FF]" />
            <h2 className="font-heading font-black text-2xl uppercase tracking-tight text-[#111827]">
              Core Editorial Pillars
            </h2>
          </div>
          <span className="text-xs font-mono text-[#6B7280]">Guiding Principles</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((p) => (
            <div
              key={p.number}
              className="glass-card rounded-3xl p-6 sm:p-8 bg-white/95 border border-white/80 space-y-4 hover:shadow-lg transition-shadow group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#0055FF] uppercase tracking-widest block">
                    Pillar {p.number}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#0055FF]" />
                </div>
                <h3 className="font-heading font-black text-xl text-[#111827] group-hover:text-[#0055FF] transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="rounded-2xl overflow-hidden aspect-[16/9] bg-[#F3F4F6] mt-4">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global Bureaus with Visual Cards */}
      <section className="space-y-8">
        <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB]">
          <div className="flex items-center gap-2.5">
            <Globe className="w-5 h-5 text-[#0055FF]" />
            <h2 className="font-heading font-black text-2xl uppercase tracking-tight text-[#111827]">
              Global Editorial Bureaus
            </h2>
          </div>
          <span className="text-xs font-mono text-[#6B7280]">Zurich &bull; Kyoto &bull; NY &bull; Paris</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bureaus.map((bureau) => (
            <div
              key={bureau.city}
              className="glass-card rounded-3xl overflow-hidden bg-white/95 border border-white/90 shadow-md group flex flex-col justify-between"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#F3F4F6] relative">
                <img
                  src={bureau.image}
                  alt={bureau.city}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[0.625rem] font-mono font-bold text-[#111827]">
                  {bureau.timeZone}
                </div>
              </div>

              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-heading font-black text-lg text-[#111827] block tracking-tight">
                    {bureau.city}
                  </span>
                  <span className="text-[0.6875rem] font-mono text-[#0055FF] font-bold block">
                    {bureau.desk}
                  </span>
                </div>

                <div className="pt-3 border-t border-[#F3F4F6] text-[0.6875rem] font-mono text-[#6B7280]">
                  {bureau.address}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <div className="rounded-3xl glass-card bg-[#0055FF] p-8 sm:p-12 text-white text-center space-y-4 shadow-xl">
        <h3 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-tight">
          Pitch a Monograph to Our Editorial Desk
        </h3>
        <p className="text-sm text-white/90 max-w-xl mx-auto leading-relaxed">
          We welcome proposals from architects, researchers, and cultural essayists. Review our dispatch wire guidelines or transmit your proposal directly.
        </p>
        <div className="pt-2">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#0055FF] font-heading font-extrabold text-xs uppercase tracking-wider hover:bg-[#F3F4F6] transition-all shadow-md"
          >
            <span>Transmit Inquiry</span>
            <Sparkles className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
