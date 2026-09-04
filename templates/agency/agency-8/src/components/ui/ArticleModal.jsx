import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Calendar, User, ArrowRight, Share2, Check } from 'lucide-react';

export default function ArticleModal({ article, isOpen, onClose }) {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!article) return null;

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#090d1a] border border-cyan-500/30 rounded-3xl shadow-2xl z-10 text-white scrollbar-thin scrollbar-thumb-cyan-500/30"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white hover:text-cyan-300 hover:border-cyan-400 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Hero Image */}
            <div className="relative h-64 sm:h-80 w-full overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090d1a] via-[#090d1a]/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block text-xs font-mono tracking-widest text-cyan-300 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-cyan-500/30 mb-3">
                  {article.category}
                </span>
                <h2 className="text-2xl sm:text-4xl font-syne font-black text-white leading-tight">
                  {article.title}
                </h2>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Metadata Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    {article.readTime || '5 MIN READ'}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User className="w-4 h-4 text-cyan-400" />
                    {article.author || 'Studio Collective Editorial'}
                  </span>
                </div>

                <button
                  onClick={handleShare}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 transition-colors cursor-pointer text-xs"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-cyan-400" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Share'}</span>
                </button>
              </div>

              {/* Paragraphs */}
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                {article.content ? (
                  article.content.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))
                ) : (
                  <>
                    <p className="text-lg text-cyan-200 font-medium italic border-l-2 border-cyan-400 pl-4 py-1">
                      "In an era dominated by algorithmic homogenization, true brand authority is established through uncompromising aesthetic rigor and tactile interactions."
                    </p>
                    <p>
                      Digital experiences today are often designed for metrics over memory. Websites assemble identical modular components, resulting in digital landscapes devoid of distinct identity. At Studio Collective, we believe that emotional resonance is the highest-converting metric a brand can produce.
                    </p>
                    <p>
                      By pairing 60fps WebGL shaders, purposeful micro-animations, and typographic scale, digital platforms can elevate from passive information directories into immersive flagship destinations. Real-time rendering and responsive spatial layout allow users to feel the weight and intention of every brand touchpoint.
                    </p>
                    <p>
                      As we look forward, the intersection of autonomous AI agents and handcrafted frontend engineering creates limitless possibilities for hyper-personalized, context-aware web environments that adapt to user intent without losing structural elegance.
                    </p>
                  </>
                )}
              </div>

              {/* Takeaways Box */}
              <div className="p-5 rounded-2xl bg-white/5 border border-cyan-500/20 space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-bold">Key Architectural Takeaways</h4>
                <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                  <li>Prioritize bespoke art direction over off-the-shelf template assemblies.</li>
                  <li>Incorporate fluid framer-motion micro-interactions to reward user exploration.</li>
                  <li>Balance visual density with high-contrast negative space for effortless scannability.</li>
                </ul>
              </div>

              {/* Bottom Close Action */}
              <div className="pt-4 flex justify-end">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-cyan-400 text-black font-mono text-xs uppercase tracking-wider font-bold hover:bg-white transition-colors cursor-pointer"
                >
                  Back to Articles
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
