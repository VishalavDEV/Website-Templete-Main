import React from 'react';
import { AuthorProfileCard } from '../components/engagement/AuthorCards';
import { Sparkles, ArrowLeft, Users, BookOpen, Award, Globe, Send, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ContributorsView() {
  const allAuthors = [
    {
      id: 'elena-vance',
      name: 'Dr. Elena Rostova-Vance',
      role: 'Lead Spatial Critic',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
      bio: 'Investigating bio-fabricated architecture, acoustic mycelium envelopes, and post-digital urban ecology in Kyoto and Zurich.',
      location: 'Zurich & Kyoto',
      articlesCount: 38,
    },
    {
      id: 'marcus-thorne',
      name: 'Marcus Thorne',
      role: 'Computational Fellow',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
      bio: 'Theoretical physicist focusing on photonic quantum light circuits, silicon geopolitics, and synthetic cognitive architectures.',
      location: 'Grenoble & Oxford',
      articlesCount: 29,
    },
    {
      id: 'clara-lindqvist',
      name: 'Clara Lindqvist',
      role: 'Material Culture Columnist',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop',
      bio: 'Writing on the tactile revival of Flemish cold-water flax looms, manual horological anglage, and sustainable luxury craftsmanship.',
      location: 'Stockholm & Milan',
      articlesCount: 34,
    },
    {
      id: 'sophia-chen',
      name: 'Sophia L. Chen',
      role: 'Cultural Theorist & Film Critic',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
      bio: 'Investigating slow duration cinema, non-algorithmic exhibition curatorships, and contemporary gallery architectures across Berlin and Taipei.',
      location: 'Berlin & Taipei',
      articlesCount: 41,
    },
    {
      id: 'julian-mercier',
      name: 'Julian Mercier',
      role: 'Sound Architect & Acoustic Lead',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
      bio: 'Composing spatial acoustic reverb installations in decommissioned industrial silos and researching analog thermodynamic voltage drift.',
      location: 'Paris & Montreal',
      articlesCount: 22,
    },
    {
      id: 'kenji-takahashi',
      name: 'Kenji Takahashi',
      role: 'Senior Kyoto Joinery Fellow',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop',
      bio: 'Master joiner and structural timber specialist researching seismic dissipation through mortarless Japanese mortise-and-tenon craftsmanship.',
      location: 'Kyoto & Tokyo',
      articlesCount: 19,
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

      {/* Header Deck */}
      <header className="rounded-3xl glass-card bg-white/95 p-8 sm:p-12 border border-white/90 shadow-[0_20px_50px_-10px_rgba(0,85,255,0.06)] space-y-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#0055FF]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF4FF] text-[#0055FF] text-xs font-mono font-bold uppercase tracking-wider">
          <Users className="w-3.5 h-3.5" />
          <span>The Masthead Roster // Vol. 2026</span>
        </div>

        <h1 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-[#111827] uppercase tracking-tight">
          Critics, Theorists & Fellows
        </h1>

        <p className="text-sm sm:text-base text-[#4B5563] max-w-2xl leading-relaxed">
          The multidisciplinary editorial board driving exhaustive inquiry across architecture, quantum compute, tactile style, and spatial soundscapes.
        </p>

        <div className="pt-6 flex flex-wrap items-center gap-6 text-xs font-mono text-[#6B7280] border-t border-[#F3F4F6]">
          <span className="flex items-center gap-1.5 text-[#111827] font-bold">
            <Award className="w-4 h-4 text-[#0055FF]" />
            6 Senior Academic Fellows
          </span>
          <span>&bull;</span>
          <span className="flex items-center gap-1.5 text-[#111827] font-bold">
            <Globe className="w-4 h-4 text-[#10B981]" />
            4 Global Bureaus
          </span>
          <span>&bull;</span>
          <span className="flex items-center gap-1.5 text-[#111827] font-bold">
            <BookOpen className="w-4 h-4 text-[#FF5E3A]" />
            183 Monographic Treatises Published
          </span>
        </div>
      </header>

      {/* Grid of All Author Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allAuthors.map((author) => (
          <AuthorProfileCard key={author.id} author={author} />
        ))}
      </div>

      {/* Fellowship Application Callout Banner */}
      <section className="rounded-3xl glass-card bg-gradient-to-br from-white via-[#F8F9FA] to-[#EBF4FF] p-8 sm:p-12 border border-white shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0055FF]/10 text-[#0055FF] text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Call for 2026/2027 Visiting Fellows</span>
            </div>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#111827] uppercase tracking-tight">
              Join the Z MAG Editorial Fellowship
            </h2>
            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
              We provide non-residential research stipends, open access publishing support, and print typesetting for scholars interrogating physical craft, bio-materials, and post-digital philosophy.
            </p>
          </div>

          <Link
            to="/contact"
            className="px-7 py-3.5 rounded-full bg-[#0055FF] hover:bg-[#0040C7] text-white text-xs font-heading font-extrabold uppercase tracking-wider transition-all shadow-[0_10px_25px_-5px_rgba(0,85,255,0.4)] flex items-center justify-center gap-2 shrink-0 cursor-pointer"
          >
            <span>Submit Proposal</span>
            <Send className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
