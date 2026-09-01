import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, Check, Settings, ArrowRight } from 'lucide-react';
import { aurelisImages } from '../../data/aurelisImages';
import { nexoraImages } from '../../data/nexoraImages';
import { vantaImages } from '../../data/vantaImages';
import { strativaImages } from '../../data/strativaImages';
import { lumoraImages } from '../../data/lumoraImages';

const options = [
  { id: 'aurelis', name: 'Aurelis', label: 'Enterprise & Business', desc: 'Strategic solutions for ambitious organizations.', route: '/aurelis', image: aurelisImages.hero, color: 'border-amber-500' },
  { id: 'nexora', name: 'Nexora', label: 'Technology & Digital', desc: 'Futuristic systems for digital operations.', route: '/nexora', image: nexoraImages.hero, color: 'border-cyan-500' },
  { id: 'vanta-studio', name: 'Vanta Studio', label: 'Creative Agency', desc: 'Expressive brand identities that command culture.', route: '/vanta-studio', image: vantaImages.gallery[0], color: 'border-pink-500' },
  { id: 'strativa', name: 'Strativa', label: 'Consulting & Strategy', desc: 'Clarity for complex corporate decisions.', route: '/strativa', image: strativaImages.hero, color: 'border-emerald-500' },
  { id: 'lumora-labs', name: 'Lumora Labs', label: 'Startup & Innovation', desc: 'Building products for what comes next.', route: '/lumora-labs', image: lumoraImages.hero, color: 'border-violet-500' },
];

export default function TemplateSelector() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  // Derive active template from location path
  const currentPath = location.pathname;
  const activeId = options.find((opt) => opt.route === currentPath)?.id || 'marketplace';

  // Keyboard accessibility: Escape key to close the widget
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Selector Expanded Options */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="mb-3 bg-slate-950/95 backdrop-blur-md text-white border border-white/10 p-4 rounded-2xl shadow-2xl flex flex-col space-y-3.5 w-[310px]"
            role="menu"
            aria-label="Select Template Menu"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                SELECT TEMPLATE
              </span>
              {activeId !== 'marketplace' && (
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="text-[9px] font-mono font-bold text-blue-400 hover:text-blue-300 transition-colors uppercase"
                >
                  ← Marketplace
                </Link>
              )}
            </div>

            {options.map((opt) => {
              const isActive = opt.id === activeId;
              const isHovered = opt.id === hoveredId;
              return (
                <Link
                  key={opt.id}
                  to={opt.route}
                  onMouseEnter={() => setHoveredId(opt.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => {
                    // Smooth scroll top on navigation to start fresh
                    window.scrollTo({ top: 0, behavior: 'instant' });
                    setIsOpen(false);
                  }}
                  className={`flex items-start space-x-3.5 p-2.5 rounded-xl text-left border border-transparent transition-all duration-300 ${
                    isActive 
                      ? 'bg-white/10 border-white/10 text-blue-400' 
                      : 'hover:bg-white/5 hover:border-white/5 text-white/70 hover:text-white'
                  }`}
                  role="menuitem"
                >
                  {/* Thumbnail Image (Zooms slightly on hover) */}
                  <div className="w-14 h-10 rounded overflow-hidden bg-slate-800 border border-white/10 shrink-0">
                    <motion.img 
                      src={opt.image} 
                      alt="" 
                      animate={{ scale: isHovered ? 1.08 : 1 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full object-cover" 
                    />
                  </div>

                  {/* Text copy */}
                  <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">
                      {opt.label}
                    </span>
                    <h4 className={`text-xs font-bold transition-colors duration-200 flex items-center justify-between ${isActive ? 'text-blue-400 font-extrabold' : ''}`}>
                      <span>{opt.name}</span>
                      <div className="flex items-center space-x-1 shrink-0">
                        {isActive && <Check size={12} className="text-blue-400 font-bold" />}
                        {!isActive && (
                          <motion.div
                            animate={{ x: isHovered ? 3 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ArrowRight size={10} className="text-slate-400" />
                          </motion.div>
                        )}
                      </div>
                    </h4>
                    <p className="text-[9px] text-slate-400 mt-1 leading-normal line-clamp-1">
                      {opt.desc}
                    </p>
                  </div>
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Selector Floating Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`flex items-center space-x-2 bg-slate-950 border border-white/10 text-white px-5 py-3.5 rounded-full shadow-2xl hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-slate-950 ${
          isOpen ? 'ring-2 ring-blue-600' : ''
        }`}
        aria-label="Toggle template switcher menu"
        aria-expanded={isOpen}
      >
        <Settings size={15} className={`animate-spin-slow ${isOpen ? 'rotate-90 text-white' : 'text-slate-300'}`} />
        <span className="text-[10px] font-bold tracking-wider uppercase font-mono">
          {isOpen ? 'CLOSE SWITCHER' : 'SWITCH TEMPLATE'}
        </span>
      </motion.button>
    </div>
  );
}
