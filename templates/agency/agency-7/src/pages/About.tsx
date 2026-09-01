import React, { useEffect, useState } from 'react';
import { ClientMarquee } from '../components/ClientMarquee';
import { Award, Globe, Users, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  const [stats, setStats] = useState({ years: 0, projects: 0, clients: 0, awards: 0 });

  useEffect(() => {
    let frame = 0;
    const interval = setInterval(() => {
      frame++;
      setStats({
        years: Math.min(12, frame * 1),
        projects: Math.min(84, Math.floor(frame * 5.6)),
        clients: Math.min(27, Math.floor(frame * 1.8)),
        awards: Math.min(18, Math.floor(frame * 1.2)),
      });
      if (frame >= 15) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-6 md:px-12 py-12 md:py-20 space-y-24">
      {/* Hero Header */}
      <section className="space-y-6 border-b border-neutral-200 dark:border-neutral-800 pb-12">
        <div className="inline-flex items-center space-x-2 rounded-full border border-blue-500/30 bg-blue-50/80 dark:bg-blue-950/40 px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <Globe className="h-3.5 w-3.5" />
          <span>ABOUT STRATA AGENCY</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 leading-tight">
          ARCHITECTS OF DIGITAL INTERACTION.
        </h1>

        <p className="max-w-3xl text-lg md:text-2xl text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
          Founded in 2026, STRATA Agency is an independent design laboratory with studios in Tokyo, New York, and Zurich. We partner with ambitious leaders to shape spatial digital products and timeless brand ecosystems.
        </p>
      </section>

      {/* Animated Statistics Counters */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-lg text-center space-y-2">
          <div className="font-serif text-5xl md:text-6xl font-black text-blue-600 dark:text-blue-400">
            {stats.years}+
          </div>
          <div className="font-mono text-xs uppercase font-bold text-neutral-900 dark:text-neutral-100">
            Years of Practice
          </div>
          <p className="text-[11px] text-neutral-500 font-light">Pioneering UX ergonomics</p>
        </div>

        <div className="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-lg text-center space-y-2">
          <div className="font-serif text-5xl md:text-6xl font-black text-blue-600 dark:text-blue-400">
            {stats.projects}
          </div>
          <div className="font-mono text-xs uppercase font-bold text-neutral-900 dark:text-neutral-100">
            Completed Projects
          </div>
          <p className="text-[11px] text-neutral-500 font-light">Across 14 countries</p>
        </div>

        <div className="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-lg text-center space-y-2">
          <div className="font-serif text-5xl md:text-6xl font-black text-blue-600 dark:text-blue-400">
            {stats.clients}
          </div>
          <div className="font-mono text-xs uppercase font-bold text-neutral-900 dark:text-neutral-100">
            Global Clients
          </div>
          <p className="text-[11px] text-neutral-500 font-light">Founders to enterprise</p>
        </div>

        <div className="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-lg text-center space-y-2">
          <div className="font-serif text-5xl md:text-6xl font-black text-blue-600 dark:text-blue-400">
            {stats.awards}
          </div>
          <div className="font-mono text-xs uppercase font-bold text-neutral-900 dark:text-neutral-100">
            Design Awards
          </div>
          <p className="text-[11px] text-neutral-500 font-light">Awwwards, Webby, Red Dot</p>
        </div>
      </section>

      {/* Global Client Marquee */}
      <section className="space-y-6">
        <div className="font-mono text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
          GLOBAL PARTNERSHIPS
        </div>
        <ClientMarquee />
      </section>

      {/* Recognition Table */}
      <section id="awards" className="space-y-6">
        <div className="border-b border-neutral-200 dark:border-neutral-800 pb-4">
          <div className="font-mono text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
            HONORS & RECOGNITION
          </div>
          <h2 className="font-serif text-3xl font-bold text-neutral-900 dark:text-neutral-100 mt-1">
            SELECTED AWARDS TABLE
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-xs border-collapse">
            <thead>
              <tr className="border-b border-neutral-300 dark:border-neutral-700 text-neutral-400">
                <th className="py-3 px-4 font-bold">YEAR</th>
                <th className="py-3 px-4 font-bold">AWARD / ORGANIZER</th>
                <th className="py-3 px-4 font-bold">PROJECT</th>
                <th className="py-3 px-4 font-bold">CATEGORY</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800 text-neutral-800 dark:text-neutral-200">
              <tr>
                <td className="py-4 px-4 font-bold text-blue-600">2026</td>
                <td className="py-4 px-4 font-semibold">Webby Award Winner</td>
                <td className="py-4 px-4">Archive 01 Spatial Museum</td>
                <td className="py-4 px-4 text-neutral-500">Best Visual Design</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold text-blue-600">2026</td>
                <td className="py-4 px-4 font-semibold">Awwwards Site of the Day</td>
                <td className="py-4 px-4">Aether Geospatial OS</td>
                <td className="py-4 px-4 text-neutral-500">UI/UX Innovation</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold text-blue-600">2025</td>
                <td className="py-4 px-4 font-semibold">Red Dot Design Award</td>
                <td className="py-4 px-4">Flux Mobility EV Cockpit</td>
                <td className="py-4 px-4 text-neutral-500">Automotive HMI Interface</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold text-blue-600">2025</td>
                <td className="py-4 px-4 font-semibold">FWA of the Month</td>
                <td className="py-4 px-4">Noma 3D Furniture Showroom</td>
                <td className="py-4 px-4 text-neutral-500">3D WebGL Craft</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-bold text-blue-600">2024</td>
                <td className="py-4 px-4 font-semibold">Awwwards Site of the Month</td>
                <td className="py-4 px-4">Mono House Architecture</td>
                <td className="py-4 px-4 text-neutral-500">Editorial Brand Identity</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Start Project CTA */}
      <section className="text-center space-y-6 pt-12 border-t border-neutral-200 dark:border-neutral-800">
        <h2 className="font-serif text-3xl md:text-5xl font-bold">READY TO BUILD WHAT COMES NEXT?</h2>
        <Link
          to="/contact"
          className="inline-flex items-center space-x-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 font-mono text-xs uppercase font-bold tracking-widest transition-colors shadow-lg"
        >
          <span>Initiate Project Inquiry</span>
        </Link>
      </section>
    </div>
  );
};
