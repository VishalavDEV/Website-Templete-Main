import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, ArrowLeft } from 'lucide-react';

export default function ArticleModal({ isOpen, article, onClose }) {
  if (!isOpen || !article) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-[#2b2b2b]/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 select-none"
      >
        <div className="absolute inset-0" onClick={onClose} />

        <motion.div
          initial={{ y: 50, scale: 0.95 }}
          animate={{ y: 0, scale: 1 }}
          exit={{ y: 50, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="relative bg-white border border-zinc-200 w-full max-w-3xl max-h-[90vh] overflow-y-auto z-10 shadow-2xl p-6 md:p-10 text-[#2b2b2b] border-offset-dark"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-[#e74c3c] hover:bg-[#c0392b] text-white transition-colors z-20"
          >
            <X size={16} />
          </button>

          <div className="flex items-center gap-2 text-[10px] font-sans tracking-widest text-[#e74c3c] uppercase font-black mb-3">
            <Calendar size={12} />
            <span>{article.date}</span>
          </div>

          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-[#2b2b2b] leading-tight mb-6">
            {article.title}
          </h2>

          <div className="w-full h-48 sm:h-64 md:h-80 overflow-hidden bg-zinc-100 mb-6 border border-zinc-200">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover object-center"
            />
          </div>

          <p className="text-sm md:text-base text-[#2b2b2b]/80 font-sans leading-relaxed text-justify mb-8">
            {article.content || article.excerpt}
          </p>

          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#2b2b2b] hover:bg-[#e74c3c] text-white text-xs font-sans font-black uppercase tracking-widest transition-colors flex items-center gap-2"
          >
            <ArrowLeft size={14} /> Back to Articles
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
