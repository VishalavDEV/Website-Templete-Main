import React, { useEffect } from 'react';
import { Sparkles, Globe, Cpu, Leaf } from 'lucide-react';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import { ScrollReveal } from '../components/ui/ScrollReveal';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'About Mission & Philosophy — AGROTECH AI';
  }, []);

  return (
    <main className="min-h-screen pt-28 pb-20 bg-theme-primary">
      <div className="max-w-5xl mx-auto px-6 space-y-16">
        {/* Editorial Header */}
        <ScrollReveal direction="down">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-700 font-mono-tech text-xs uppercase tracking-widest font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>EDITORIAL MANIFESTO</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-serif-editorial font-bold text-theme-primary tracking-tight leading-tight">
              Where Agriculture Meets Technology &amp; Artificial Intelligence
            </h1>

            <p className="text-lg text-theme-secondary font-serif-editorial italic max-w-2xl mx-auto">
              "We exist to illuminate the quiet digital transformation sweeping across Earth's agricultural landscapes."
            </p>
          </div>
        </ScrollReveal>

        {/* Hero Visual */}
        <ScrollReveal delay={100}>
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-neutral-800 block">
            <ImageWithFallback
              src="/images/ai_futuristic_farm.jpg"
              alt="Agrotech AI Editorial Philosophy"
              caption="Sunrise over connected research farmland operating on closed-loop telemetry."
              className="w-full aspect-[16/9] object-cover block"
            />
          </div>
        </ScrollReveal>

        {/* Mission & Philosophy */}
        <div className="prose prose-lg dark:prose-invert max-w-none font-sans leading-relaxed text-theme-primary space-y-8">
          <ScrollReveal delay={150}>
            <h2 className="text-3xl font-serif-editorial font-bold text-theme-primary">
              Our Core Mission
            </h2>
            <p className="text-theme-primary">
              By 2050, global food production must increase by 70% to nourish 10 billion human beings—all while facing climate volatility, reduced arable land, and freshwater constraints.
            </p>
            <p className="text-theme-primary">
              AGROTECH AI was founded as an independent digital magazine to document how precision agronomy, robotics, molecular generative AI, and satellite intelligence are solving this challenge without sacrificing environmental sustainability.
            </p>
          </ScrollReveal>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose my-12">
            <ScrollReveal delay={200}>
              <div className="p-6 rounded-2xl bg-theme-surface border border-neutral-800 space-y-3 shadow-sm h-full">
                <Leaf className="w-8 h-8 text-emerald-400" />
                <h3 className="text-xl font-serif-editorial font-bold text-theme-primary">Ecological Integrity</h3>
                <p className="text-xs text-theme-secondary">
                  Technology must protect soil microbiology, watersheds, and natural pollinator networks.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="p-6 rounded-2xl bg-theme-surface border border-neutral-800 space-y-3 shadow-sm h-full">
                <Cpu className="w-8 h-8 text-sky-400" />
                <h3 className="text-xl font-serif-editorial font-bold text-theme-primary">Rigorous Science</h3>
                <p className="text-xs text-theme-secondary">
                  Every story is grounded in peer-reviewed agronomy research and real field trials.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="p-6 rounded-2xl bg-theme-surface border border-neutral-800 space-y-3 shadow-sm h-full">
                <Globe className="w-8 h-8 text-purple-400" />
                <h3 className="text-xl font-serif-editorial font-bold text-theme-primary">Global Perspective</h3>
                <p className="text-xs text-theme-secondary">
                  Reporting across Midwest wheat belts, Asian rice paddies, and desert hydroponic greenhouses.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </main>
  );
};
