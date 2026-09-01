import React from 'react';
import { Link } from 'react-router-dom';

export const Terms: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-[#f8f7f4] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-[#121316]">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-lime-700 font-bold block">
          LEGAL // TERMS
        </span>
        <h1 className="text-4xl sm:text-6xl font-serif font-black uppercase tracking-tight">
          TERMS OF SERVICE
        </h1>
        <p className="font-mono text-xs text-gray-500 uppercase">EFFECTIVE DATE: AUGUST 2026</p>

        <div className="space-y-6 text-sm font-sans text-gray-700 leading-relaxed border-t border-black/10 pt-8">
          <p>
            By accessing or interacting with the VANTA FORM digital agency platform, you agree to comply with the terms and conditions set forth herein.
          </p>

          <h2 className="text-xl font-serif font-bold text-[#121316] uppercase pt-4">1. INTELLECTUAL PROPERTY</h2>
          <p>
            All visual designs, WebGL shaders, 3D assets, custom typography, brand identities, and code samples displayed on this portal remain the exclusive intellectual property of VANTA FORM or its respective client owners.
          </p>

          <h2 className="text-xl font-serif font-bold text-[#121316] uppercase pt-4">2. PROPOSAL SIMULATION</h2>
          <p>
            Forms and interactive tools on this website serve to collect project parameters for formal client proposals. All formal contracts require executed master service agreements (MSAs).
          </p>

          <div className="pt-8">
            <Link to="/" className="font-mono text-xs uppercase font-bold text-lime-700 underline">
              ← RETURN TO HOME
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
