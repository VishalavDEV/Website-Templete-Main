import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/ui/SEO';
import { TEAM_MEMBERS, PHILOSOPHIES, AWARDS } from '../data/team';
import { CLIENTS } from '../data/clients';

export const About: React.FC = () => {
  return (
    <>
      <SEO
        title="About Agency — OFFGRID®"
        description="OFFGRID is a small by design, radical independent creative agency operating across New York, London, Chennai, and Berlin."
      />
      <main className="pt-32 pb-32 min-h-screen">
        {/* Hero Section */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-12 mb-24 pb-16 border-b border-[#CFC7BE]">
          <span className="font-mono text-xs text-[#D65F3F] tracking-widest uppercase block mb-4">
            // ABOUT OFFGRID®
          </span>
          <h1 className="font-display font-bold text-5xl sm:text-7xl md:text-8xl lg:text-[8vw] leading-[0.88] tracking-tighter uppercase text-[#2B2727] max-w-5xl">
            WE ARE SMALL <br />
            BY DESIGN. <br />
            <span className="text-[#D65F3F]">BIG ON IDEAS.</span>
          </h1>
        </section>

        {/* Agency Philosophy Narrative */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-12 mb-32 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-xs text-[#D65F3F] uppercase tracking-widest block">
              // OUR ORIGIN & MISSION
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl uppercase tracking-tight text-[#2B2727]">
              INDEPENDENT, REBELLIOUS, UNCOMPROMISING.
            </h2>
            <p className="font-serif-editorial italic text-2xl text-[#332832] leading-snug">
              "We founded OFFGRID to give founders and visionaries a direct line to master practitioners—without the bloat of traditional agency hierarchies."
            </p>
          </div>

          <div className="lg:col-span-7 space-y-8 text-base text-[#2B2727] leading-relaxed font-sans">
            <p>
              Traditional advertising agencies are built to maximize billable hours and protect legacy accounts. They sell consensus. We sell conviction.
            </p>
            <p>
              OFFGRID is an agile squad of creative directors, strategists, typographers, and creative developers working across New York, London, Chennai, and Berlin. We deliberately cap our concurrent client list to 4 active projects per quarter, ensuring total immersion into every brand world we build.
            </p>
            <p className="border-l-2 border-[#D65F3F] pl-6 font-bold">
              When you hire OFFGRID, you work directly with the leaders who shape culture—not junior hand-offs or account managers.
            </p>
          </div>
        </section>

        {/* Philosophy Scroll Section */}
        <section className="bg-[#332832] text-[#FAF7F1] py-24 px-6 md:px-12 mb-32 border-y border-[#CFC7BE]">
          <div className="max-w-[1600px] mx-auto space-y-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#FAF7F1]/20 pb-6">
              <div>
                <span className="font-mono text-xs text-[#B8A8BD] uppercase tracking-widest block mb-2">
                  // THE OFFGRID CANON
                </span>
                <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tight text-[#FAF7F1]">
                  OUR CORE PHILOSOPHIES
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PHILOSOPHIES.map((p, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 border border-[#FAF7F1]/10 bg-[#2B2727] space-y-4"
                >
                  <span className="font-mono text-xs text-[#D65F3F]">0{idx + 1}</span>
                  <h3 className="font-display font-bold text-2xl uppercase tracking-tight text-[#FAF7F1]">
                    {p.statement}
                  </h3>
                  <p className="text-xs text-[#B8A8BD] leading-relaxed font-sans">
                    {p.subtext}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-12 mb-32">
          <div className="mb-16 border-b border-[#CFC7BE] pb-6">
            <span className="font-mono text-xs text-[#D65F3F] uppercase tracking-widest block mb-2">
              // LEADERSHIP & CRAFTSMEN
            </span>
            <h2 className="font-display font-bold text-4xl md:text-6xl uppercase tracking-tight text-[#2B2727]">
              MEET THE DIRECTORS.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.name}
                className="group border border-[#CFC7BE] bg-[#FAF7F1] overflow-hidden"
              >
                <div className="aspect-[3/4] overflow-hidden relative border-b border-[#CFC7BE]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute top-3 left-3 bg-[#2B2727] text-[#FAF7F1] font-mono text-[9px] px-2 py-1 uppercase">
                    {member.location}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-display font-bold text-2xl uppercase text-[#2B2727]">
                    {member.name}
                  </h3>
                  <p className="font-mono text-xs text-[#D65F3F] uppercase">{member.role}</p>
                  <p className="text-xs text-[#77716D] leading-relaxed font-sans line-clamp-3">
                    {member.bio}
                  </p>
                  <div className="pt-2 border-t border-[#CFC7BE] flex flex-wrap gap-1">
                    {member.specialty.map((s, i) => (
                      <span key={i} className="font-mono text-[9px] bg-[#EFE9DF] text-[#2B2727] px-2 py-0.5 uppercase">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Awards & Industry Recognition */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-12 mb-32">
          <div className="mb-12 border-b border-[#CFC7BE] pb-6">
            <span className="font-mono text-xs text-[#D65F3F] uppercase tracking-widest block mb-2">
              // LAURELS & HONORS
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl uppercase tracking-tight text-[#2B2727]">
              AWARDS & RECOGNITION.
            </h2>
          </div>

          <div className="space-y-0 divide-y divide-[#CFC7BE] border-y border-[#CFC7BE]">
            {AWARDS.map((award, i) => (
              <div key={i} className="py-6 px-4 grid grid-cols-12 items-center text-sm font-mono text-[#2B2727]">
                <div className="col-span-2 text-[#77716D]">{award.year}</div>
                <div className="col-span-6 font-display font-bold uppercase text-base">{award.title}</div>
                <div className="col-span-4 text-right text-[#D65F3F]">{award.organization}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Clients Wordmark Section */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-12 border-t border-[#CFC7BE] pt-16">
          <h3 className="font-mono text-xs text-[#77716D] uppercase tracking-widest mb-8">
            // GLOBAL CLIENT ROSTER
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 font-display font-bold text-2xl md:text-3xl uppercase text-[#77716D] opacity-80">
            {CLIENTS.map((c) => (
              <span key={c.name} className="hover:text-[#D65F3F] transition-colors cursor-default">
                {c.name}
              </span>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};
