import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Twitter, Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAF7F2] dark:bg-[#110F0E] border-t border-[#E8E2D5] dark:border-[#3A342E] text-[#44403C] dark:text-[#D7D1C6] transition-colors mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-[#E8E2D5] dark:border-[#3A342E]">
          {/* Brand & Manifesto */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#1C1917] dark:bg-[#C85A32] flex items-center justify-center text-white shadow-xs">
                <span className="font-display font-black text-xl">S</span>
              </div>
              <span className="font-display font-black text-2xl tracking-tight text-[#1C1917] dark:text-[#F7F4EE]">
                STORIVA
              </span>
            </Link>
            <p className="text-sm text-[#44403C] dark:text-[#D7D1C6] leading-relaxed max-w-sm font-normal">
              An independent journal of record exploring the frontiers of artificial cognition, physical computing, frontier economics, and tactile human interfaces.
            </p>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#E8E2D5]/60 dark:bg-[#282420] text-xs font-semibold text-[#1C1917] dark:text-[#F7F4EE]">
              <span className="w-2 h-2 rounded-full bg-[#C85A32] animate-pulse"></span>
              <span>Daily Editorial Dispatches Active</span>
            </div>
          </div>

          {/* Editorial Desks */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1917] dark:text-[#F7F4EE]">
              Editorial Desks
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/category/artificial-intelligence" className="hover:text-[#C85A32] dark:hover:text-[#E27453] transition-colors">
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link to="/category/technology" className="hover:text-[#C85A32] dark:hover:text-[#E27453] transition-colors">
                  Technology & Silicon
                </Link>
              </li>
              <li>
                <Link to="/category/business" className="hover:text-[#C85A32] dark:hover:text-[#E27453] transition-colors">
                  Frontier Economics
                </Link>
              </li>
              <li>
                <Link to="/category/innovation" className="hover:text-[#C85A32] dark:hover:text-[#E27453] transition-colors">
                  Science & Materials
                </Link>
              </li>
              <li>
                <Link to="/category/design" className="hover:text-[#C85A32] dark:hover:text-[#E27453] transition-colors">
                  Spatial Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Collective & Legal */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1917] dark:text-[#F7F4EE]">
              The Publication
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/stories" className="hover:text-[#C85A32] dark:hover:text-[#E27453] transition-colors">
                  All Published Stories
                </Link>
              </li>
              <li>
                <Link to="/authors" className="hover:text-[#C85A32] dark:hover:text-[#E27453] transition-colors">
                  Editorial Collective
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#C85A32] dark:hover:text-[#E27453] transition-colors">
                  About & Standards
                </Link>
              </li>
              <li>
                <Link to="/copyright" className="hover:text-[#C85A32] dark:hover:text-[#E27453] transition-colors">
                  Copyright & Licensing
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-[#C85A32] dark:hover:text-[#E27453] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-[#C85A32] dark:hover:text-[#E27453] transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Dispatches Newsletter Callout */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1917] dark:text-[#F7F4EE]">
              Morning Dispatch
            </h4>
            <p className="text-xs text-[#44403C] dark:text-[#D7D1C6] leading-relaxed font-normal">
              Join 125,000+ engineers, researchers, and venture partners who receive our curated weekly analytical brief.
            </p>
            <div className="p-4 rounded-2xl bg-white dark:bg-[#1E1B18] border border-[#E8E2D5] dark:border-[#3A342E] space-y-3">
              <div className="flex items-center space-x-2 text-xs text-[#C85A32] dark:text-[#E27453] font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>Zero spam. Open creative media licenses.</span>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-1 text-xs font-semibold text-[#1C1917] dark:text-[#F7F4EE] hover:text-[#C85A32] transition-colors"
              >
                <span>Submit an editorial pitch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#78716C] dark:text-[#A39C90]">
          <div className="space-y-1 text-center md:text-left">
            <p>© {new Date().getFullYear()} STORIVA Journal. All rights reserved.</p>
            <p className="text-[11px] text-[#78716C] dark:text-[#A39C90]">
              All editorial photography is provided under open creative licenses (Unsplash). STORIVA is an independent editorial publication template.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/copyright" className="hover:text-[#1C1917] dark:hover:text-[#F7F4EE] transition-colors">
              Copyright
            </Link>
            <Link to="/licensing" className="hover:text-[#1C1917] dark:hover:text-[#F7F4EE] transition-colors">
              Licensing
            </Link>
            <Link to="/privacy" className="hover:text-[#1C1917] dark:hover:text-[#F7F4EE] transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-[#1C1917] dark:hover:text-[#F7F4EE] transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
