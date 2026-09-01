import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Counter } from '../ui/Counter';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';

export const AboutPreview: React.FC = () => {
  return (
    <section className="py-24 bg-[var(--bg-color)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <SectionHeading
          number="01"
          badge="STUDIO PHILOSOPHY"
          title="WE CRAFT DIGITAL ARCHITECTURE THAT COMMANDS LEADERSHIP."
          align="split"
          description="We are not a traditional marketing agency. Byteora is an elite product engineering and brand architecture studio. We design high-contrast spatial web tools that transform complex enterprise logic into intuitive art."
        />

        {/* Asymmetric Image + Statement Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <Reveal direction="left" className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border border-[var(--border-color)] group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
                alt="Byteora Creative Studio"
                className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-color)] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-[var(--text-color)]">
                <span>[ STUDIO SPACE · ZURICH ]</span>
                <span className="text-[var(--accent-color)]">EST. 2018</span>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" className="lg:col-span-5 space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-[var(--text-color)] leading-snug font-display">
              "WE ELIMINATE TEMPLATE NOISE TO REVEAL PURE GRAPHIC TENSION."
            </h3>

            <p className="text-base text-[var(--secondary-color)] leading-relaxed font-light">
              By combining tight typographic hierarchy with sub-second React frontend architectures, we help technology pioneers and luxury institutions build digital products that endure.
            </p>

            <Button href="/about" variant="outline" size="md">
              Learn More About Our Studio
            </Button>
          </Reveal>
        </div>

        {/* Stat Counters Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
          <Counter to={48} suffix="+" label="Projects Delivered" description="Enterprise web apps & global brand systems" />
          <Counter to={12} suffix=" Nations" label="Global Footprint" description="Clients in US, Europe & Asia Pacific" />
          <Counter to={96} suffix="%" label="Client Satisfaction" description="Long-term multi-year agency retainers" />
          <Counter to={8} suffix=" Years" label="Studio Excellence" description="Pushing web design standards since 2018" />
        </div>
      </div>
    </section>
  );
};
