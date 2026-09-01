import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/categories';
import { useMagazine } from '../../context/MagazineContext';
import { ArrowRight, Check, Sparkles, Globe, ShieldCheck } from 'lucide-react';

export function Footer() {
  const { showToast } = useMagazine();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitted(true);
    showToast('Subscribed to The Observer Weekly Dispatch');
    setTimeout(() => {
      setEmail('');
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <footer className="border-t-2 border-[#141413] bg-[#FAF9F5] pt-14 pb-10 px-4 md:px-8 mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Top Tier: Logo, Description & Newsletter Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-[#E8E5DC]">
          <div className="lg:col-span-6 space-y-4">
            <Link to="/" className="inline-block">
              <h2 className="font-serif-headline text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#141413]">
                THE BLOG OBSERVER
              </h2>
            </Link>
            <p className="text-sm text-[#52524E] leading-relaxed max-w-xl font-serif-reading text-[1.0625rem]">
              An independent international journal devoted to critical architectural discourse, emerging technologies, philosophical inquiry, slow craft, and investigative global reporting. Published continuously in print and digital editions since 2018.
            </p>
            <div className="flex items-center gap-4 text-xs font-mono text-[#73736C]">
              <span>ISSN 2984-1182</span>
              <span>&bull;</span>
              <span>London &bull; New York &bull; Zurich &bull; Tokyo</span>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center bg-white p-6 sm:p-8 border border-[#E8E5DC] shadow-xs">
            <div className="flex items-center gap-2 text-[#D43825] text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>The Saturday Dispatch</span>
            </div>
            <h3 className="font-serif-headline text-xl font-bold text-[#141413] mb-2">
              Curated intellect delivered to your morning reading ritual.
            </h3>
            <p className="text-xs text-[#73736C] mb-4">
              Receive our lead essays, architectural monographs, and editor’s notes every Saturday morning. No sponsored noise.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                required
                className="flex-1 px-3.5 py-2.5 bg-[#FAF9F5] border border-[#D1CDC4] text-xs focus:outline-none focus:border-[#141413] text-[#141413]"
              />
              <button
                type="submit"
                disabled={isSubmitted}
                className="px-5 py-2.5 bg-[#141413] text-[#FAF9F5] text-xs font-bold uppercase tracking-wider hover:bg-[#D43825] transition-colors flex items-center justify-center gap-2 cursor-pointer shrink-0"
              >
                {isSubmitted ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-400" />
                    <span>Joined</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Middle Tier: Responsive Column Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 py-10 border-b border-[#E8E5DC] text-xs">
          {/* Categories Desk */}
          <div>
            <h4 className="font-sans font-bold uppercase tracking-wider text-[#141413] mb-3 text-[0.6875rem]">
              Categories & Desks
            </h4>
            <ul className="space-y-2 text-[#52524E]">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link to={`/category/${cat.slug}`} className="hover:text-[#D43825] transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="font-sans font-bold uppercase tracking-wider text-[#141413] mb-3 text-[0.6875rem]">
              Explore
            </h4>
            <ul className="space-y-2 text-[#52524E]">
              <li>
                <Link to="/" className="hover:text-[#141413] transition-colors">
                  Front Page Stories
                </Link>
              </li>
              <li>
                <Link to="/search" className="hover:text-[#141413] transition-colors">
                  Monograph Search Catalog
                </Link>
              </li>
              <li>
                <Link to="/category/long-reads" className="hover:text-[#141413] transition-colors">
                  Long-form Investigative
                </Link>
              </li>
              <li>
                <Link to="/category/architecture-design" className="hover:text-[#141413] transition-colors">
                  Visual Photo Monographs
                </Link>
              </li>
            </ul>
          </div>

          {/* Publication Links */}
          <div>
            <h4 className="font-sans font-bold uppercase tracking-wider text-[#141413] mb-3 text-[0.6875rem]">
              The Publication
            </h4>
            <ul className="space-y-2 text-[#52524E]">
              <li>
                <Link to="/about" className="hover:text-[#141413] transition-colors">
                  About & Masthead
                </Link>
              </li>
              <li>
                <Link to="/author/elena-vance" className="hover:text-[#141413] transition-colors">
                  Authors & Critics
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#141413] transition-colors">
                  Contact Bureau
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#141413] transition-colors">
                  Editorial Ethics Charter
                </Link>
              </li>
            </ul>
          </div>

          {/* Global Bureaus & Social */}
          <div>
            <h4 className="font-sans font-bold uppercase tracking-wider text-[#141413] mb-3 text-[0.6875rem]">
              Bureaus & Social
            </h4>
            <div className="space-y-2 text-[#52524E] mb-4">
              <p><strong className="text-[#141413]">London:</strong> 42 Clerkenwell Close</p>
              <p><strong className="text-[#141413]">New York:</strong> 180 Varick St, Soho</p>
              <p><strong className="text-[#141413]">Tokyo:</strong> Minami-Aoyama</p>
            </div>
            <div className="flex items-center gap-2 pt-2 border-t border-[#E8E5DC]">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-1.5 bg-white border border-[#D1CDC4] hover:border-[#141413] text-[#141413] transition-colors"
                aria-label="Twitter / X"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://observer.press"
                target="_blank"
                rel="noreferrer"
                className="p-1.5 bg-white border border-[#D1CDC4] hover:border-[#141413] text-[#141413] transition-colors"
                aria-label="World Edition"
              >
                <Globe className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Legal Links & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[0.7rem] text-[#73736C]">
          <p>© {new Date().getFullYear()} The Blog Observer Publishing Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#141413] cursor-pointer">Privacy Policy</span>
            <span>&bull;</span>
            <span className="hover:text-[#141413] cursor-pointer">Terms of Publication</span>
            <span>&bull;</span>
            <span className="hover:text-[#141413] cursor-pointer">Editorial Transparency</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
