import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { SEO } from '../components/ui/SEO';

export const NotFound: React.FC = () => {
  return (
    <>
      <SEO title="404 — Page Went OFFGRID®" />
      <main className="min-h-screen pt-40 pb-32 px-6 flex flex-col items-center justify-center text-center max-w-4xl mx-auto space-y-8">
        <span className="font-mono text-xs text-[#D65F3F] tracking-widest uppercase border border-[#D65F3F] px-4 py-1">
          // ERROR 404 LOCATION LOST
        </span>

        <h1 className="font-display font-bold text-7xl sm:text-9xl tracking-tighter uppercase text-[#2B2727] leading-none">
          THIS PAGE <br />
          <span className="text-[#D65F3F]">WENT OFFGRID.</span>
        </h1>

        <p className="font-serif-editorial italic text-2xl text-[#332832] max-w-lg">
          The requested coordinate does not exist on this server network.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#2B2727] text-[#FAF7F1] hover:bg-[#D65F3F] px-8 py-4 font-display font-bold text-xs tracking-widest uppercase transition-colors"
            data-cursor="link"
          >
            <ArrowLeft className="w-4 h-4" /> BACK HOME
          </Link>

          <Link
            to="/work"
            className="inline-flex items-center gap-2 border border-[#2B2727] text-[#2B2727] hover:bg-[#2B2727] hover:text-[#FAF7F1] px-8 py-4 font-display font-bold text-xs tracking-widest uppercase transition-colors"
            data-cursor="link"
          >
            <span>EXPLORE WORK</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
    </>
  );
};
