import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useSpring, useMotionValue, useReducedMotion } from 'framer-motion';
import { useZMag } from '../../context/ZMagContext';
import { mockArticles } from '../../data/mockArticles';
import { Search, X, ArrowUpRight, Sparkles, Clock, Flame, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

export function SearchOverlay() {
  const { isSearchOpen, setIsSearchOpen } = useZMag();
  const [query, setQuery] = useState('');
  const [activeHoverImg, setActiveHoverImg] = useState(null);
  const inputRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Floating Image Cursor Tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 220, mass: 0.1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX + 20);
    mouseY.set(e.clientY - 120);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    } else {
      setQuery('');
      setActiveHoverImg(null);
    }
  }, [isSearchOpen]);

  const filteredResults = query.trim() === ''
    ? []
    : mockArticles.filter(
        (art) =>
          art.title.toLowerCase().includes(query.toLowerCase()) ||
          art.category.toLowerCase().includes(query.toLowerCase()) ||
          art.author.toLowerCase().includes(query.toLowerCase())
      );

  const trendingItems = [
    {
      title: 'Computing with Coherent Photonic Circuits',
      category: 'FUTURE TECH',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
      slug: '/article/photonic-computing',
    },
    {
      title: 'The Biomorphic Cellular Envelopes of Kyoto',
      category: 'BIO-SPACES',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop',
      slug: '/article/spatial-neuro-architecture',
    },
    {
      title: 'Gentian Root Anglage in the Jura Valley',
      category: 'HYPER-STYLE',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop',
      slug: '/article/mechanical-horology-valley',
    },
    {
      title: 'Reclaiming Temporal Depth in Slow Cinema',
      category: 'Z-CULTURE',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop',
      slug: '/article/slow-cinema-duration',
    },
  ];

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <motion.div
          initial={{ y: '-100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 28, stiffness: 260 }}
          onMouseMove={handleMouseMove}
          className="fixed inset-0 z-50 bg-white/98 text-[#111827] flex flex-col justify-between p-6 sm:p-12 overflow-y-auto"
        >
          {/* Top Bar */}
          <div className="max-w-6xl w-full mx-auto flex items-center justify-between pb-6 border-b border-[#E5E7EB]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0055FF] animate-pulse" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0055FF]">
                Z MAG &bull; SPATIAL DISCOVERY ENGINE
              </span>
            </div>

            <button
              onClick={() => setIsSearchOpen(false)}
              className="p-3 rounded-full bg-[#F3F4F6] hover:bg-[#0055FF] hover:text-white transition-all cursor-pointer group"
              aria-label="Close Search"
            >
              <X className="w-5 h-5 transition-transform group-hover:rotate-90" />
            </button>
          </div>

          {/* Massive Search Input Box */}
          <div className="max-w-6xl w-full mx-auto my-8">
            <div className="relative group">
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type to search essays, categories, critics..."
                className="w-full text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight text-[#111827] bg-transparent border-b-2 border-[#E5E7EB] focus:border-[#0055FF] focus:outline-none pb-6 transition-all duration-300 placeholder:text-[#9CA3AF]"
              />
              <Search className="absolute right-0 bottom-6 w-8 h-8 text-[#9CA3AF] group-focus-within:text-[#0055FF] transition-colors" />
            </div>

            {/* Sub-Tags Suggestion Ticker */}
            <div className="flex flex-wrap items-center gap-2 mt-4 text-xs font-mono text-[#6B7280]">
              <span className="font-bold uppercase text-[#111827] mr-1">Hot Topics:</span>
              {['#PHOTONICS', '#MYCELIUM', '#ANGLAGE', '#SLOW-CINEMA', '#CIRCADIAN'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setQuery(tag.replace('#', ''))}
                  className="px-3 py-1 rounded-full bg-[#F3F4F6] hover:bg-[#0055FF] hover:text-white transition-colors cursor-pointer"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Main Results / Trending 2-Col Layout */}
          <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 my-4 flex-1">
            {/* Left: Dynamic Search Results (3D Flip-up entrance) */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-[#6B7280] pb-2 border-b border-[#F3F4F6]">
                {query ? `Search Results (${filteredResults.length})` : 'Search Suggestions'}
              </h3>

              {query && filteredResults.length === 0 && (
                <div className="py-12 text-center text-[#6B7280] font-mono text-sm">
                  No monographs matched "{query}". Try searching for "Tech", "Spaces", or "Style".
                </div>
              )}

              <div className="space-y-3">
                {(filteredResults.length > 0 ? filteredResults : mockArticles.slice(0, 3)).map((art, idx) => (
                  <motion.div
                    key={art.id}
                    initial={{ opacity: 0, rotateX: 20, y: 15 }}
                    animate={{ opacity: 1, rotateX: 0, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: idx * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="perspective-[800px]"
                  >
                    <Link
                      to={`/article/${art.id}`}
                      onClick={() => setIsSearchOpen(false)}
                      className="p-4 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#0055FF] hover:shadow-[0_10px_25px_rgba(0,85,255,0.08)] flex items-center justify-between group transition-all"
                    >
                      <div className="space-y-1">
                        <span className="font-mono text-[0.65rem] font-bold text-[#0055FF] uppercase tracking-wider block">
                          {art.category} &bull; {art.readTime}
                        </span>
                        <h4 className="font-heading font-bold text-lg text-[#111827] group-hover:text-[#0055FF] transition-colors leading-snug">
                          {art.title}
                        </h4>
                        <span className="text-xs text-[#6B7280] font-mono block">
                          By {art.author}
                        </span>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-[#9CA3AF] group-hover:text-[#0055FF] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Trending List with Cursor-Following Image Preview */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-[#F3F4F6]">
                <Flame className="w-4 h-4 text-[#FF5E3A]" />
                <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-[#6B7280]">
                  Most Read Monographs
                </h3>
              </div>

              <div className="space-y-2">
                {trendingItems.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.slug}
                    onClick={() => setIsSearchOpen(false)}
                    onMouseEnter={() => setActiveHoverImg(item.image)}
                    onMouseLeave={() => setActiveHoverImg(null)}
                    className="flex items-center justify-between p-3.5 rounded-xl hover:bg-[#F8F9FA] transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#9CA3AF] group-hover:text-[#0055FF]">
                        0{idx + 1}
                      </span>
                      <div>
                        <h5 className="font-heading font-bold text-sm text-[#111827] group-hover:text-[#0055FF] transition-colors">
                          {item.title}
                        </h5>
                        <span className="text-[0.65rem] font-mono text-[#6B7280] uppercase">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#0055FF]" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Floating Image Preview Following Cursor */}
          {activeHoverImg && !shouldReduceMotion && (
            <motion.div
              style={{
                x: smoothX,
                y: smoothY,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="fixed top-0 left-0 pointer-events-none z-50 w-52 h-36 rounded-2xl overflow-hidden shadow-2xl border-2 border-white bg-white hidden lg:block"
            >
              <img
                src={activeHoverImg}
                alt="Hover Preview"
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}

          {/* Bottom Footer Stats */}
          <div className="max-w-6xl w-full mx-auto pt-6 border-t border-[#E5E7EB] flex items-center justify-between text-xs font-mono text-[#6B7280]">
            <span>Press ESC or ⌘K to close</span>
            <span>Index Updated Hourly</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
