import React from 'react';
import { Breadcrumbs } from '../components/utility/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck, BookOpen, Award, ArrowRight } from 'lucide-react';
import { Reveal, ImageReveal } from '../components/motion/MotionPrimitives';
import { NewsletterCTA } from '../components/editorial/NewsletterCTA';

export function About() {
  const mastheadStaff = [
    { role: 'Editor-in-Chief', name: 'Julian Vance, Ph.D.', desk: 'Editorial Board' },
    { role: 'Creative Director & Typographer', name: 'Clara Lindqvist', desk: 'Visual Design' },
    { role: 'Senior Architecture Critic', name: 'Elena Rostova-Vance', desk: 'Architecture & Urbanism' },
    { role: 'Chief Technology Essayist', name: 'Marcus Thorne', desk: 'Technology & AI' },
    { role: 'Editor-at-Large', name: 'Sophia L. Chen', desk: 'Culture & Cinema' },
    { role: 'Investigations Editor', name: 'Julian Mercier', desk: 'Geopolitics & Climate' },
  ];

  const milestones = [
    { year: '2018', title: 'Founding in London', desc: 'Launched as an independent print quarterly exploring post-war architecture and design ethics.' },
    { year: '2021', title: 'Global Digital Archive', desc: 'Expanded to digital monographs with international bureaus established in Soho, New York and Minami-Aoyama, Tokyo.' },
    { year: '2024', title: 'National Magazine Award', desc: 'Recognized for cultural criticism and investigative environmental reporting in the Clarion-Clipperton Zone.' },
    { year: '2026', title: 'Vol. VIII & Audio Narrations', desc: 'Serving 85,000+ print and digital members across 64 countries with fully narrated audio editions.' },
  ];

  const breadcrumbItems = [{ label: 'About & Masthead' }];

  return (
    <div className="about-page max-w-7xl mx-auto px-4 md:px-8">
      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbItems} />

      {/* 1. Editorial Hero */}
      <header className="py-14 text-center max-w-4xl mx-auto border-b-2 border-[#141413] mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F4F1EA] border border-[#D1CDC4] text-[#D43825] text-xs font-bold uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Editorial Manifest & Philosophy</span>
        </div>
        <h1 className="font-serif-headline text-3xl sm:text-5xl lg:text-6xl font-black text-[#141413] leading-tight mb-6">
          A Sanctuary for Slow, Unhurried Intellectual Rigor.
        </h1>
        <p className="font-serif-reading text-xl md:text-2xl text-[#4A4A45] leading-relaxed italic max-w-3xl mx-auto">
          "The Blog Observer exists to resist the frictionless, algorithmic acceleration of modern discourse. We champion depth over brevity, craftsmanship over speed, and nuanced philosophical inquiry over viral outrage."
        </p>
      </header>

      {/* 2. Magazine Introduction & Image/Content Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
        <div className="lg:col-span-6 space-y-5">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D43825] block">
            The Publication
          </span>
          <h2 className="font-serif-headline text-2xl sm:text-4xl font-bold text-[#141413] leading-tight">
            Devoted to Monographic Depth & Physical Tactility
          </h2>
          <p className="text-sm sm:text-base text-[#4A4A45] leading-relaxed font-serif-reading text-[1.125rem]">
            Founded in 2018 as an independent quarterly print journal in Clerkenwell, London, The Blog Observer has remained wholly reader-supported. We do not accept programmatic advertisements, native sponsored content, or venture capital mandates that compromise editorial autonomy.
          </p>
          <p className="text-xs sm:text-sm text-[#52524E] leading-relaxed">
            Every essay undergoes rigorous peer review, meticulous fact verification, and bespoke typographic layout before reaching print or screen.
          </p>
        </div>

        <div className="lg:col-span-6">
          <ImageReveal
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
            alt="Editorial printing press archive"
            aspectRatio="aspect-[4/3]"
            className="border-2 border-[#141413] shadow-md"
          />
          <p className="text-[0.6875rem] text-[#73736C] italic mt-2 text-center">
            Print Vol. 48 softcover inspection at the Ghent atelier.
          </p>
        </div>
      </section>

      {/* 3. Mission & Editorial Philosophy 2-Column Spread */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div className="bg-white p-8 sm:p-10 border border-[#E8E5DC] shadow-xs">
          <h3 className="font-serif-headline text-2xl font-bold text-[#141413] mb-4">
            Our Independent Charter
          </h3>
          <p className="text-xs sm:text-sm text-[#52524E] leading-relaxed mb-4">
            We believe that democracy and cultural discernment wither when intellectual inquiry is reduced to soundbites and engagement algorithms.
          </p>
          <p className="text-xs sm:text-sm text-[#52524E] leading-relaxed">
            Our writers are given months—not hours—to research, report, and compose monographs that stand the test of decades.
          </p>
        </div>

        <div className="bg-[#FAF9F5] p-8 sm:p-10 border border-[#141413] shadow-xs">
          <h3 className="font-serif-headline text-2xl font-bold text-[#141413] mb-4">
            Print & Typographic Craft
          </h3>
          <p className="text-xs sm:text-sm text-[#52524E] leading-relaxed mb-4">
            Our biannual print editions are printed on FSC-certified unbleached Swedish cotton paper using vegetable inks in Bruges, Belgium. Designed to be collected, bound, and revisited across decades.
          </p>
          <div className="pt-4 border-t border-[#E8E5DC] flex items-center justify-between text-xs font-mono text-[#73736C]">
            <span>FSC Certified &bull; Carbon Neutral Print</span>
            <span className="text-[#D43825] font-bold">240 Pages</span>
          </div>
        </div>
      </section>

      {/* 4. Masthead Staff Directory */}
      <section className="my-20">
        <div className="flex items-center justify-between pb-3 mb-8 border-b-2 border-[#141413]">
          <h2 className="font-serif-headline text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#141413]">
            The Editorial Masthead
          </h2>
          <span className="text-xs font-mono text-[#73736C]">Vol. VIII Editorial Board</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mastheadStaff.map((staff, idx) => (
            <div key={idx} className="bg-white p-6 border border-[#E8E5DC] shadow-xs hover:border-[#141413] transition-colors">
              <span className="text-[0.6875rem] font-mono font-bold uppercase tracking-wider text-[#D43825] block mb-1">
                {staff.role}
              </span>
              <h4 className="font-serif-headline text-lg font-bold text-[#141413] mb-1">
                {staff.name}
              </h4>
              <span className="text-xs text-[#73736C] block">{staff.desk}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Historical Milestones */}
      <section className="my-20 bg-[#FAF9F5] p-8 sm:p-12 border border-[#E8E5DC]">
        <h2 className="font-serif-headline text-2xl sm:text-3xl font-bold text-[#141413] mb-8 text-center uppercase tracking-tight">
          Publication Milestones
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {milestones.map((m, idx) => (
            <div key={idx} className="border-t-2 border-[#141413] pt-4">
              <span className="font-mono text-2xl font-black text-[#D43825] block mb-1">
                {m.year}
              </span>
              <h4 className="font-serif-headline text-base font-bold text-[#141413] mb-2">
                {m.title}
              </h4>
              <p className="text-xs text-[#52524E] leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Editorial CTA */}
      <NewsletterCTA />
    </div>
  );
}

// Export AboutPage alias
export const AboutPage = About;
