import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Counter } from '../components/ui/Counter';
import { TeamGrid } from '../components/sections/TeamGrid';
import { FinalCTA } from '../components/sections/FinalCTA';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Badge } from '../components/ui/Badge';
import { Reveal } from '../components/ui/Reveal';

const studioValues = [
  {
    num: '01',
    title: 'PRECISION OVER VOLUME',
    desc: 'We purposefully take on a maximum of 12 major client projects per year to maintain uncompromising craftsmanship and direct access to senior partners.'
  },
  {
    num: '02',
    title: 'GRAPHIC TENSION & RESTRAINT',
    desc: 'We eliminate unnecessary decorative bloat. Every line of typography, grid line, and micro-animation serves a functional brand purpose.'
  },
  {
    num: '03',
    title: 'HARDWARE ACCELERATION',
    desc: 'Websites must respond instantly. We treat performance as a fundamental design constraint, guaranteeing 95+ Core Web Vitals.'
  },
  {
    num: '04',
    title: 'TOTAL IP AUTONOMY',
    desc: 'Zero lock-ins. You receive 100% of Figma token libraries, React source code, and deployment scripts upon project sign-off.'
  }
];

export const About: React.FC = () => {
  return (
    <div className="space-y-24 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <Breadcrumb items={[{ label: 'Studio & Story' }]} />

        {/* Hero Header */}
        <Reveal direction="up">
          <div className="space-y-6">
            <Badge variant="accent">ESTABLISHED 2018</Badge>
            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-[var(--text-color)] font-display max-w-5xl leading-none">
              WE ARE BYTEORA. AN INDEPENDENT DIGITAL ARCHITECTURE STUDIO.
            </h1>
            <p className="text-lg md:text-2xl text-[var(--secondary-color)] leading-relaxed font-light max-w-3xl">
              Headquartered across Zurich, Tokyo, New York, and London. We partner with technology leaders, luxury houses, and financial institutions to build digital experiences that define categories.
            </p>
          </div>
        </Reveal>

        {/* Full-bleed Studio Image */}
        <Reveal direction="up" delay={0.1}>
          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden border border-[var(--border-color)]">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
              alt="Byteora Global Studio"
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>

        {/* Values Grid */}
        <div className="space-y-12 pt-6">
          <Reveal direction="up">
            <SectionHeading
              number="01"
              badge="OUR CORE PRINCIPLES"
              title="THE VALUES THAT GUIDE OUR CRAFT."
              align="split"
              description="Four unyielding standards that govern how we design interfaces, write code, and collaborate with founders."
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {studioValues.map((v, idx) => (
              <Reveal key={v.num} direction="up" delay={idx * 0.1}>
                <div className="p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] space-y-4 h-full">
                  <span className="font-mono text-xl font-bold text-[var(--accent-color)]">{v.num} —</span>
                  <h3 className="text-2xl font-bold uppercase text-[var(--text-color)] font-display">{v.title}</h3>
                  <p className="text-sm text-[var(--secondary-color)] leading-relaxed font-light">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Stats */}
        <Reveal direction="up">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
            <Counter to={48} suffix="+" label="Projects Delivered" description="Enterprise web apps & global brand systems" />
            <Counter to={12} suffix=" Nations" label="Global Footprint" description="Clients in US, Europe & Asia Pacific" />
            <Counter to={96} suffix="%" label="Client Retention" description="Long-term multi-year agency retainers" />
            <Counter to={8} suffix=" Years" label="Studio Excellence" description="Pushing web design standards since 2018" />
          </div>
        </Reveal>
      </div>

      <TeamGrid />
      <FinalCTA />
    </div>
  );
};
