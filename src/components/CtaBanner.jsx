import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sprout, 
  ArrowRight, 
  ShieldCheck, 
  Download, 
  FileText, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export default function CtaBanner({ onOpenContact }) {
  const handleDownloadWhitepaper = () => {
    alert("TerraNova 2026 Agronomy Whitepaper ('Autonomous Biological Crop Production & Carbon MRV') will be delivered to your email upon request.");
  };

  return (
    <section className="py-20 bg-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-forest-950 via-forest-900 to-forest-850 text-white shadow-2xl border border-forest-700/80 p-8 sm:p-14 lg:p-16">
          
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1600&q=80"
              alt="Golden organic agriculture field at sunset"
              className="w-full h-full object-cover object-center opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-950/90 to-forest-900/80" />
            <div className="absolute inset-0 bg-radial-gradient opacity-70" />
          </div>

          <div className="relative z-10 max-w-3xl">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-800/90 border border-forest-600/70 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5 text-wheat-400" />
              <span>Spring & Fall 2026 Acreage Enrollment Open</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-6">
              Ready to Maximize Yield While <br />
              <span className="text-gradient-gold italic">Restoring Your Living Soil?</span>
            </h2>

            {/* Description */}
            <p className="text-forest-200 text-base sm:text-lg leading-relaxed mb-8">
              Join over 580 partner farms worldwide who have replaced toxic synthetic fertilizers with our autonomous biological systems. Book your complimentary 5-acre test plot diagnostic.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-wheat-500 to-wheat-600 hover:from-wheat-400 hover:to-wheat-500 text-forest-950 font-bold px-8 py-4 rounded-full text-sm sm:text-base shadow-xl hover:shadow-glow-amber transition-all transform hover:-translate-y-0.5"
              >
                <span>Request Free Soil & Acreage Audit</span>
                <ArrowRight className="w-5 h-5 text-forest-950" />
              </button>

              <button
                onClick={handleDownloadWhitepaper}
                className="inline-flex items-center justify-center gap-2 bg-forest-900/80 hover:bg-forest-800 text-white font-semibold px-6 py-4 rounded-full text-sm sm:text-base border border-forest-600/80 hover:border-forest-400 backdrop-blur-md transition-all"
              >
                <Download className="w-4 h-4 text-wheat-400" />
                <span>Download Tech Whitepaper</span>
              </button>
            </div>

            {/* Trust highlights */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-forest-800/80 text-xs text-forest-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>No long-term lock-in</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero hardware maintenance fees</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Guaranteed yield neutrality or refund in Year 1</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
