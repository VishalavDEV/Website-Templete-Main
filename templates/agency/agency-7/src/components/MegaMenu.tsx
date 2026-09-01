import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { ArrowRight, Zap } from 'lucide-react';

interface MegaMenuProps {
  activeMenu: 'work' | 'studio' | 'services' | 'journal' | null;
  closeMenu: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ activeMenu, closeMenu }) => {
  if (!activeMenu) return null;

  return (
    <div
      className="absolute top-full left-0 right-0 z-50 border-b border-neutral-200 dark:border-neutral-800 bg-[#FBF9F5]/95 dark:bg-[#0D0E12]/95 backdrop-blur-xl shadow-2xl transition-all duration-300 animate-slide-down"
      onMouseLeave={closeMenu}
    >
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-12">
        {activeMenu === 'work' && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4 md:border-r border-neutral-200 dark:border-neutral-800 pr-6">
              <div className="font-mono text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
                PORTFOLIO CATEGORIES
              </div>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'All Work', path: '/work' },
                  { label: 'UI/UX Design', path: '/work?cat=UI%2FUX' },
                  { label: 'Product Architecture', path: '/work?cat=Product' },
                  { label: 'Brand Systems', path: '/work?cat=Branding' },
                  { label: 'Digital Experiences', path: '/work?cat=Digital' },
                  { label: 'Experimental Labs', path: '/work?cat=Experimental' },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.path}
                      onClick={closeMenu}
                      className="group flex items-center justify-between text-neutral-800 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-1"
                    >
                      <span>{item.label}</span>
                      <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Featured Projects Preview */}
            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {projectsData.slice(0, 3).map((project) => (
                <Link
                  key={project.id}
                  to={`/work/${project.id}`}
                  onClick={closeMenu}
                  className="group block relative overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-3 shadow-xs hover:border-blue-500 transition-all"
                >
                  <div className="aspect-[16/10] overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-800">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="mt-3">
                    <div className="flex items-center justify-between font-mono text-[10px] text-neutral-500">
                      <span>{project.category}</span>
                      <span>{project.year}</span>
                    </div>
                    <div className="font-serif text-base font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {activeMenu === 'studio' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="font-mono text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
                STUDIO OVERVIEW
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                STRATA Agency is an independent creative design agency bridging architectural rigor, digital interfaces, and spatial technology.
              </p>
              <Link
                to="/studio"
                onClick={closeMenu}
                className="inline-flex items-center text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 hover:underline pt-2"
              >
                Explore Studio Manifesto →
              </Link>
            </div>

            <div className="space-y-3">
              <div className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-semibold">
                QUICK NAVIGATION
              </div>
              <ul className="space-y-2 text-sm font-medium">
                <li>
                  <Link to="/studio" onClick={closeMenu} className="hover:text-blue-600 dark:hover:text-blue-400">
                    About Studio & Philosophy
                  </Link>
                </li>
                <li>
                  <Link to="/studio" onClick={closeMenu} className="hover:text-blue-600 dark:hover:text-blue-400">
                    6-Step Design Process
                  </Link>
                </li>
                <li>
                  <Link to="/studio" onClick={closeMenu} className="hover:text-blue-600 dark:hover:text-blue-400">
                    Leadership & Team
                  </Link>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-blue-500/20 bg-blue-50 dark:bg-blue-950/40 p-5">
              <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-mono text-xs font-bold uppercase">
                <Zap className="h-4 w-4" />
                <span>STUDIO STATS</span>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-4 text-neutral-900 dark:text-neutral-100 font-serif">
                <div>
                  <div className="text-2xl font-bold">12+</div>
                  <div className="font-sans text-xs text-neutral-500">Years Practice</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">18</div>
                  <div className="font-sans text-xs text-neutral-500">Global Awards</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeMenu === 'services' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: 'UX Research', desc: 'Contextual interviews & usability benchmarking', path: '/services#ux-research' },
              { title: 'Product Strategy', desc: 'IA architecture & product roadmaps', path: '/services#product-strategy' },
              { title: 'UI/UX Design', desc: 'High-density interfaces & editorial craft', path: '/services#ui-ux-design' },
              { title: 'Design Systems', desc: 'Figma to React modular design tokens', path: '/services#design-systems' },
              { title: 'Prototyping', desc: 'Interactive motion & gesture choreography', path: '/services#prototyping' },
              { title: 'Creative Development', desc: '3D WebGL, Three.js & Vite React frontend', path: '/services#creative-development' },
            ].map((serv) => (
              <Link
                key={serv.title}
                to={serv.path}
                onClick={closeMenu}
                className="group p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 hover:border-blue-500 transition-all"
              >
                <div className="font-serif text-base font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {serv.title}
                </div>
                <div className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
                  {serv.desc}
                </div>
              </Link>
            ))}
          </div>
        )}

        {activeMenu === 'journal' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="font-mono text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
                DESIGN INSIGHTS
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Articles on ergonomics, kinetic typography, 3D spatial viewports, and design tokens.
              </p>
              <Link
                to="/journal"
                onClick={closeMenu}
                className="inline-flex items-center text-xs font-mono text-blue-600 dark:text-blue-400 font-bold hover:underline"
              >
                View All Articles →
              </Link>
            </div>

            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Designing for Attention', path: '/journal/designing-for-attention', tag: 'Design Philosophy' },
                { title: 'Why Interfaces Need Rhythm', path: '/journal/why-interfaces-need-rhythm', tag: 'UI Ergonomics' },
              ].map((art) => (
                <Link
                  key={art.title}
                  to={art.path}
                  onClick={closeMenu}
                  className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-blue-500 transition-all"
                >
                  <span className="font-mono text-[10px] uppercase text-blue-600 dark:text-blue-400 font-semibold">
                    {art.tag}
                  </span>
                  <div className="font-serif text-sm font-semibold text-neutral-900 dark:text-neutral-100 mt-1">
                    {art.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
