import React, { useState, useEffect } from 'react';
import { HelpCircle, Award, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TIPS = [
  {
    type: 'did-you-know',
    icon: HelpCircle,
    title: 'Did You Know?',
    text: 'Active recall and spaced repetition can double your learning retention rate.',
    color: 'border-sky-200 text-sky-800 bg-sky-50/90 shadow-sky-100/50'
  },
  {
    type: 'quick-tip',
    icon: Sparkles,
    title: 'Quick Tip',
    text: 'Try explaining a complex topic in simple terms to find gaps in your understanding.',
    color: 'border-cyan-200 text-cyan-800 bg-cyan-50/90 shadow-cyan-100/50'
  },
  {
    type: 'challenge',
    icon: Award,
    title: 'Learning Challenge',
    text: 'Solve today\'s math riddle or coding quiz to keep your 12-day streak alive!',
    color: 'border-blue-200 text-blue-800 bg-blue-50/90 shadow-blue-100/50'
  }
];

export default function FloatingElements() {
  const [activeTip, setActiveTip] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show a tip after 5 seconds
    const startTimer = setTimeout(() => {
      setActiveTip(TIPS[Math.floor(Math.random() * TIPS.length)]);
      setVisible(true);
    }, 5000);

    // Rotate tips every 25 seconds
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setActiveTip(TIPS[Math.floor(Math.random() * TIPS.length)]);
        setVisible(true);
      }, 1000);
    }, 25000);

    return () => {
      clearTimeout(startTimer);
      clearInterval(interval);
    };
  }, []);

  if (!activeTip) return null;

  const Icon = activeTip.icon;

  return (
    <div className="fixed bottom-6 left-6 z-40 max-w-xs pointer-events-auto">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              y: [0, -6, 0], 
              scale: 1,
              transition: {
                y: {
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut"
                },
                default: { duration: 0.4 }
              }
            }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className={`flex items-start gap-3 p-4 rounded-2xl border backdrop-blur-md shadow-lg ${activeTip.color}`}
          >
            <div className="p-2 rounded-xl bg-white/90 shadow-sm mt-0.5 flex-shrink-0">
              <Icon size={16} className="text-education-primary animate-pulse" />
            </div>
            <div className="flex-1 pr-3">
              <h4 className="font-semibold text-xs text-education-navy tracking-wide uppercase mb-0.5">{activeTip.title}</h4>
              <p className="text-xs opacity-90 leading-relaxed font-outfit font-medium">{activeTip.text}</p>
            </div>
            <button 
              onClick={() => setVisible(false)}
              className="absolute top-2.5 right-2.5 text-gray-400 hover:text-gray-600 p-0.5 rounded-full hover:bg-white/50 transition-colors"
            >
              <X size={12} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
