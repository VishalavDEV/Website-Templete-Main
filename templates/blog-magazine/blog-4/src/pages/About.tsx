import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Shield, Compass, BookOpen, Users, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-200">
      <Breadcrumbs items={[{ label: 'About STORIVA' }]} />

      {/* Hero Section */}
      <section className="py-12 sm:py-16 border-b border-[#E8E2D5] dark:border-[#3A342E]">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#C85A32]/10 text-[#C85A32] dark:bg-[#C85A32]/25 dark:text-[#E27453]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Independent Journal of Record</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl text-[#1C1917] dark:text-[#F7F4EE] tracking-tight leading-tight">
            Ideas. Stories. What’s Next.
          </h1>

          <p className="text-lg sm:text-xl text-[#44403C] dark:text-[#D7D1C6] leading-relaxed font-normal">
            STORIVA was founded on a simple conviction: the technological and scientific breakthroughs reshaping our species require journalism with deep domain expertise, unapologetic intellectual rigor, and tactile aesthetic beauty.
          </p>
        </div>
      </section>

      {/* Section 1: Our Mission */}
      <section className="py-16 border-b border-[#E8E2D5] dark:border-[#3A342E]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C85A32] dark:text-[#E27453]">
              01 / Our Mission
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#1C1917] dark:text-[#F7F4EE]">
              Illuminating the Frontier with Clarity and Conviction
            </h2>
            <p className="text-base text-[#44403C] dark:text-[#D7D1C6] leading-relaxed font-normal">
              We live in an era of infinite synthetic noise. Algorithmic churn optimizes for outrage and fleeting sensationalism. STORIVA exists to provide the antidote: slow, deliberate, deeply researched essays that illuminate the technical mechanisms, economic incentives, and ethical dilemmas shaping the next hundred years.
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-[#E8E2D5] dark:border-[#3A342E] aspect-16/10">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
                alt="Editorial team collaboration"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop';
                }}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What We Cover */}
      <section className="py-16 border-b border-[#E8E2D5] dark:border-[#3A342E]">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C85A32] dark:text-[#E27453] block mb-2">
            02 / Core Desks
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#1C1917] dark:text-[#F7F4EE]">
            Editorial Coverage
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#1E1B18] border border-[#E8E2D5] dark:border-[#3A342E]">
            <Cpu className="w-8 h-8 text-[#C85A32] dark:text-[#E27453] mb-4" />
            <h3 className="font-display font-black text-lg text-[#1C1917] dark:text-[#F7F4EE] mb-2">
              Artificial Intelligence
            </h3>
            <p className="text-xs text-[#44403C] dark:text-[#D7D1C6] leading-relaxed font-normal">
              Neural models, autonomous agent protocols, synthetic reasoning, and machine perception.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#1E1B18] border border-[#E8E2D5] dark:border-[#3A342E]">
            <Compass className="w-8 h-8 text-[#C85A32] dark:text-[#E27453] mb-4" />
            <h3 className="font-display font-black text-lg text-[#1C1917] dark:text-[#F7F4EE] mb-2">
              Physical Computing
            </h3>
            <p className="text-xs text-[#44403C] dark:text-[#D7D1C6] leading-relaxed font-normal">
              Custom ASIC fabrication, optical lithography, photonics, and autonomous robotics.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#1E1B18] border border-[#E8E2D5] dark:border-[#3A342E]">
            <BookOpen className="w-8 h-8 text-[#C85A32] dark:text-[#E27453] mb-4" />
            <h3 className="font-display font-black text-lg text-[#1C1917] dark:text-[#F7F4EE] mb-2">
              Frontier Economics
            </h3>
            <p className="text-xs text-[#44403C] dark:text-[#D7D1C6] leading-relaxed font-normal">
              Capital reallocation, hard asset industrialization, and global energy matrices.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#1E1B18] border border-[#E8E2D5] dark:border-[#3A342E]">
            <Sparkles className="w-8 h-8 text-[#C85A32] dark:text-[#E27453] mb-4" />
            <h3 className="font-display font-black text-lg text-[#1C1917] dark:text-[#F7F4EE] mb-2">
              Spatial Design & Mind
            </h3>
            <p className="text-xs text-[#44403C] dark:text-[#D7D1C6] leading-relaxed font-normal">
              Tactile interface philosophy, deep focus rituals, and cognitive sovereignty.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Editorial Standards */}
      <section className="py-16 border-b border-[#E8E2D5] dark:border-[#3A342E]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C85A32] dark:text-[#E27453]">
              03 / Editorial Standards
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#1C1917] dark:text-[#F7F4EE]">
              Independence & Rigor
            </h2>
            <p className="text-sm text-[#44403C] dark:text-[#D7D1C6] leading-relaxed font-normal">
              Every sentence published in STORIVA adheres to strict principles of independence, factual verification, and intellectual honesty.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-start space-x-4 p-5 rounded-2xl bg-white dark:bg-[#1E1B18] border border-[#E8E2D5] dark:border-[#3A342E]">
              <Shield className="w-6 h-6 text-[#C85A32] dark:text-[#E27453] shrink-0 mt-1" />
              <div>
                <h4 className="font-display font-black text-base text-[#1C1917] dark:text-[#F7F4EE] mb-1">
                  Total Editorial Independence
                </h4>
                <p className="text-xs text-[#44403C] dark:text-[#D7D1C6] leading-relaxed font-normal">
                  We accept zero sponsored editorial puff pieces or undisclosed venture promotions. Our critics hold equity in zero private companies they profile.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-5 rounded-2xl bg-white dark:bg-[#1E1B18] border border-[#E8E2D5] dark:border-[#3A342E]">
              <Users className="w-6 h-6 text-[#C85A32] dark:text-[#E27453] shrink-0 mt-1" />
              <div>
                <h4 className="font-display font-black text-base text-[#1C1917] dark:text-[#F7F4EE] mb-1">
                  Practitioners Over Commentators
                </h4>
                <p className="text-xs text-[#44403C] dark:text-[#D7D1C6] leading-relaxed font-normal">
                  Our bylines are written by people who have written kernel code, designed physical silicon, managed venture funds, and sequenced genetic arrays.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Publishing Standards */}
      <section className="py-16 border-b border-[#E8E2D5] dark:border-[#3A342E]">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C85A32] dark:text-[#E27453] block mb-2">
            04 / Methodology
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#1C1917] dark:text-[#F7F4EE]">
            Our Research & Verification Process
          </h2>
          <p className="text-base text-[#44403C] dark:text-[#D7D1C6] mt-2 leading-relaxed font-normal">
            We employ double-source technical validation, open reproducibility checks for benchmarks, and rigorous peer review before any long-form essay is published.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#1E1B18] border border-[#E8E2D5] dark:border-[#3A342E] space-y-3">
            <div className="flex items-center space-x-2 text-[#C85A32] dark:text-[#E27453]">
              <CheckCircle2 className="w-5 h-5" />
              <h3 className="font-display font-bold text-base text-[#1C1917] dark:text-[#F7F4EE]">
                Empirical Verification
              </h3>
            </div>
            <p className="text-xs text-[#44403C] dark:text-[#D7D1C6] leading-relaxed font-normal">
              Claims regarding compute speeds, memory throughput, and algorithmic efficiency are audited against reproducible benchmarks.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#1E1B18] border border-[#E8E2D5] dark:border-[#3A342E] space-y-3">
            <div className="flex items-center space-x-2 text-[#C85A32] dark:text-[#E27453]">
              <CheckCircle2 className="w-5 h-5" />
              <h3 className="font-display font-bold text-base text-[#1C1917] dark:text-[#F7F4EE]">
                Domain Peer Review
              </h3>
            </div>
            <p className="text-xs text-[#44403C] dark:text-[#D7D1C6] leading-relaxed font-normal">
              Specialized scientific essays undergo blind review by academic and industry researchers prior to final publication.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#1E1B18] border border-[#E8E2D5] dark:border-[#3A342E] space-y-3">
            <div className="flex items-center space-x-2 text-[#C85A32] dark:text-[#E27453]">
              <CheckCircle2 className="w-5 h-5" />
              <h3 className="font-display font-bold text-base text-[#1C1917] dark:text-[#F7F4EE]">
                Open Correction Record
              </h3>
            </div>
            <p className="text-xs text-[#44403C] dark:text-[#D7D1C6] leading-relaxed font-normal">
              We maintain a transparent log of any factual revisions or amendments at the bottom of every archived dispatch.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Call to Action */}
      <section className="py-16 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#1C1917] dark:text-[#F7F4EE]">
            Explore the Journal
          </h2>
          <p className="text-sm sm:text-base text-[#44403C] dark:text-[#D7D1C6] leading-relaxed font-normal">
            Read our latest dispatches or pitch your research to our editorial desk.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/stories"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-[#1C1917] dark:bg-[#C85A32] hover:bg-[#C85A32] dark:hover:bg-[#B34722] text-white text-sm font-bold transition-colors shadow-xs cursor-pointer"
            >
              <span>Explore All Stories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl border border-[#E8E2D5] dark:border-[#3A342E] bg-white dark:bg-[#1E1B18] text-[#1C1917] dark:text-[#F7F4EE] text-sm font-bold hover:bg-[#E8E2D5]/40 dark:hover:bg-[#282420] transition-colors cursor-pointer"
            >
              <span>Editorial Inquiries</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
