import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2B2727] text-[#FAF7F1] pt-24 pb-12 border-t border-[#CFC7BE]/20 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Top Callout CTA Banner */}
        <div className="border-b border-[#FAF7F1]/10 pb-16 mb-16">
          <p className="font-mono text-xs text-[#D65F3F] tracking-widest uppercase mb-4">
            // READY TO TRANSCEND THE BEIGE?
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h2 className="font-display font-bold text-5xl md:text-7xl xl:text-8xl tracking-tighter uppercase max-w-4xl leading-[0.9]">
              LET'S MAKE SOMETHING IMPOSSIBLE TO IGNORE.
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-[#D65F3F] text-[#FAF7F1] hover:bg-[#B94732] px-8 py-5 font-display font-bold text-sm tracking-widest uppercase transition-all duration-300 self-start lg:self-auto shrink-0 shadow-lg group"
              data-cursor="link"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Multi-column editorial footer info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-[#FAF7F1]/10">
          {/* Brand Col */}
          <div>
            <Link to="/" className="inline-block font-display font-bold text-3xl tracking-tight mb-4">
              OFFGRID<span className="text-[#D65F3F]">®</span>
            </Link>
            <p className="text-sm text-[#77716D] max-w-xs leading-relaxed">
              An independent creative agency building brands, digital experiences, and ideas that move culture forward.
            </p>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-mono text-xs text-[#B8A8BD] tracking-widest uppercase mb-6">
              // CONNECT
            </h3>
            <ul className="space-y-3 font-display text-sm">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#D65F3F] transition-colors flex items-center gap-2"
                >
                  INSTAGRAM <ArrowUpRight className="w-3 h-3 text-[#77716D]" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#D65F3F] transition-colors flex items-center gap-2"
                >
                  LINKEDIN <ArrowUpRight className="w-3 h-3 text-[#77716D]" />
                </a>
              </li>
              <li>
                <a
                  href="https://behance.net"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#D65F3F] transition-colors flex items-center gap-2"
                >
                  BEHANCE <ArrowUpRight className="w-3 h-3 text-[#77716D]" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@offgrid.studio"
                  className="hover:text-[#D65F3F] transition-colors flex items-center gap-2 text-[#D65F3F]"
                >
                  HELLO@OFFGRID.STUDIO
                </a>
              </li>
            </ul>
          </div>

          {/* Hub Locations */}
          <div>
            <h3 className="font-mono text-xs text-[#B8A8BD] tracking-widest uppercase mb-6">
              // GLOBAL HUBS
            </h3>
            <ul className="space-y-3 text-sm text-[#FAF7F1]">
              <li className="flex justify-between border-b border-[#FAF7F1]/5 pb-2">
                <span>NEW YORK</span>
                <span className="font-mono text-xs text-[#77716D]">40.7128° N</span>
              </li>
              <li className="flex justify-between border-b border-[#FAF7F1]/5 pb-2">
                <span>LONDON</span>
                <span className="font-mono text-xs text-[#77716D]">51.5074° N</span>
              </li>
              <li className="flex justify-between border-b border-[#FAF7F1]/5 pb-2">
                <span>CHENNAI</span>
                <span className="font-mono text-xs text-[#77716D]">13.0827° N</span>
              </li>
              <li className="flex justify-between border-b border-[#FAF7F1]/5 pb-2">
                <span>BERLIN / REMOTE</span>
                <span className="font-mono text-xs text-[#77716D]">52.5200° N</span>
              </li>
            </ul>
          </div>

          {/* Quick Sitemap Links */}
          <div>
            <h3 className="font-mono text-xs text-[#B8A8BD] tracking-widest uppercase mb-6">
              // SITEMAP
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link to="/work" className="hover:text-[#D65F3F] transition-colors">
                SELECTED WORK
              </Link>
              <Link to="/services" className="hover:text-[#D65F3F] transition-colors">
                CAPABILITIES
              </Link>
              <Link to="/about" className="hover:text-[#D65F3F] transition-colors">
                AGENCY ABOUT
              </Link>
              <Link to="/insights" className="hover:text-[#D65F3F] transition-colors">
                EDITORIAL INSIGHTS
              </Link>
              <Link to="/contact" className="hover:text-[#D65F3F] transition-colors">
                CONTACT US
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#77716D]">
          <p>© 2026 OFFGRID® INDEPENDENT CREATIVE AGENCY. ALL RIGHTS RESERVED.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-[#FAF7F1] transition-colors group"
            data-cursor="link"
          >
            <span>BACK TO TOP</span>
            <div className="w-6 h-6 rounded-full border border-[#77716D] flex items-center justify-center group-hover:border-[#D65F3F] group-hover:bg-[#D65F3F] group-hover:text-[#FAF7F1] transition-all">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
