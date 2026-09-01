import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-[#F5F3EF] dark:bg-[#08090C] text-neutral-900 dark:text-neutral-100 pt-16 pb-12 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 md:px-12 space-y-16">
        {/* Top Section: Editorial Statement & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-4">
            <Link to="/" className="font-serif text-3xl md:text-5xl font-bold tracking-tight inline-block">
              STRATA<span className="text-blue-600 dark:text-blue-400 font-mono">//</span>AGENCY
            </Link>
            <p className="font-serif italic text-xl md:text-2xl text-neutral-600 dark:text-neutral-300">
              "We design what comes next."
            </p>
            <p className="text-sm text-neutral-500 font-light max-w-md leading-relaxed">
              An independent spatial design laboratory and digital product studio crafting interfaces, brand identities, and 3D web experiences.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-4 bg-white dark:bg-neutral-900 p-6 md:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xl">
            <div className="font-mono text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
              STUDIO DISPATCH // NEWSLETTER
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              Subscribe to receive curated design essays, spatial UI breakdowns, and experimental prototypes.
            </p>

            {subscribed ? (
              <div className="flex items-center space-x-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 p-3 text-xs text-emerald-600 dark:text-emerald-400 font-mono font-bold">
                <CheckCircle2 className="h-4 w-4" />
                <span>Subscribed! Welcome to the STRATA Agency dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex items-center rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950 p-1 focus-within:border-blue-600">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="enter@email.com"
                    className="w-full bg-transparent px-3 py-2 text-xs font-mono outline-none text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400"
                  />
                  <button
                    type="submit"
                    className="flex h-9 px-4 items-center justify-center rounded bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs uppercase font-bold transition-colors"
                  >
                    <span>JOIN</span>
                    <ArrowRight className="h-3.5 w-3.5 ml-1" />
                  </button>
                </div>
                {error && <p className="text-[11px] text-red-500 font-mono">{error}</p>}
              </form>
            )}
          </div>
        </div>

        {/* Studio Locations */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-y border-neutral-200 dark:border-neutral-800/80 py-8 font-mono text-xs text-neutral-600 dark:text-neutral-400">
          <div>
            <div className="font-bold text-neutral-900 dark:text-neutral-100">TOKYO STUDIO</div>
            <div>35.6762° N, 139.6503° E</div>
            <div className="text-[10px] text-blue-600 dark:text-blue-400 mt-1">SHIBUYA SPATIAL LAB</div>
          </div>
          <div>
            <div className="font-bold text-neutral-900 dark:text-neutral-100">NEW YORK STUDIO</div>
            <div>40.7128° N, 74.0060° W</div>
            <div className="text-[10px] text-blue-600 dark:text-blue-400 mt-1">SOHO DESIGN OFFICE</div>
          </div>
          <div>
            <div className="font-bold text-neutral-900 dark:text-neutral-100">ZURICH STUDIO</div>
            <div>47.3769° N, 8.5417° E</div>
            <div className="text-[10px] text-blue-600 dark:text-blue-400 mt-1">KREIS 4 TYPOGRAPHY LAB</div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 font-sans text-sm">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-bold mb-4">
              PORTFOLIO
            </div>
            <ul className="space-y-2 font-medium">
              <li><Link to="/work" className="hover:text-blue-600 dark:hover:text-blue-400">All Work</Link></li>
              <li><Link to="/work/aether" className="hover:text-blue-600 dark:hover:text-blue-400">Aether Spatial OS</Link></li>
              <li><Link to="/work/mono-house" className="hover:text-blue-600 dark:hover:text-blue-400">Mono House</Link></li>
              <li><Link to="/work/orbit-finance" className="hover:text-blue-600 dark:hover:text-blue-400">Orbit Finance</Link></li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-bold mb-4">
              STUDIO
            </div>
            <ul className="space-y-2 font-medium">
              <li><Link to="/studio" className="hover:text-blue-600 dark:hover:text-blue-400">Manifesto</Link></li>
              <li><Link to="/services" className="hover:text-blue-600 dark:hover:text-blue-400">Services</Link></li>
              <li><Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-bold mb-4">
              JOURNAL
            </div>
            <ul className="space-y-2 font-medium">
              <li><Link to="/journal/designing-for-attention" className="hover:text-blue-600 dark:hover:text-blue-400">Designing for Attention</Link></li>
              <li><Link to="/journal/why-interfaces-need-rhythm" className="hover:text-blue-600 dark:hover:text-blue-400">Interface Rhythm</Link></li>
              <li><Link to="/journal/future-of-digital-craft" className="hover:text-blue-600 dark:hover:text-blue-400">3D Spatial Canvas</Link></li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-bold mb-4">
              SOCIAL
            </div>
            <ul className="space-y-2 font-medium">
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">Instagram</a></li>
              <li><a href="https://dribbble.com" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">Dribbble</a></li>
              <li><a href="https://behance.net" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">Behance</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-neutral-200 dark:border-neutral-800 pt-8 text-xs font-mono text-neutral-500">
          <div>STRATA AGENCY © 2026. ALL RIGHTS RESERVED.</div>
          <div className="flex items-center space-x-6 mt-4 sm:mt-0">
            <span className="hover:text-neutral-900 dark:hover:text-neutral-200 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-neutral-900 dark:hover:text-neutral-200 cursor-pointer">Terms of Service</span>
            <span className="hover:text-neutral-900 dark:hover:text-neutral-200 cursor-pointer">Cookie Settings</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
