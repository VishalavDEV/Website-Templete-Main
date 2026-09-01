import React from 'react';
import { X, Heart, Coffee, Globe, Compass, Code, Award, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface MoreAboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const MoreAboutModal: React.FC<MoreAboutModalProps> = ({
  isOpen,
  onClose,
  onOpenContact,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-gray-900 rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-gray-100 dark:border-gray-800 relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-400 hover:text-black dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div>
            <span className="inline-block py-0.5 px-2.5 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 text-xs font-bold uppercase tracking-widest border border-blue-100 dark:border-blue-900/40 mb-2">
              MY JOURNEY & PHILOSOPHY
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
              About Arjun Dev
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-4 rounded-3xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
                alt="Arjun Dev"
                className="w-full h-56 object-cover"
              />
            </div>
            <div className="md:col-span-8 space-y-3 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              <p>
                I am a full stack software engineer based in Chennai, India, dedicated to engineering seamless web applications where aesthetics meet robust, scalable architectures.
              </p>
              <p>
                Over the past 2+ years, I have architected web products ranging from real-time collaborative project boards to luxury horology storefronts, always focusing on sub-second load times, intuitive typography, and accessible interaction design.
              </p>
            </div>
          </div>

          {/* Quick Values / Philosophy Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="bg-white dark:bg-gray-900 p-5 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-2xs">
              <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
                <Code className="w-4 h-4" />
              </div>
              <h5 className="font-bold text-xs text-gray-900 dark:text-white">Clean Architecture</h5>
              <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-1 leading-relaxed">Component modularity and maintainable typed domain patterns.</p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-5 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-2xs">
              <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
                <Heart className="w-4 h-4" />
              </div>
              <h5 className="font-bold text-xs text-gray-900 dark:text-white">User-Centric UX</h5>
              <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-1 leading-relaxed">Crafting memorable tactile interactions and micro-animations.</p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-5 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-2xs">
              <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
                <Award className="w-4 h-4" />
              </div>
              <h5 className="font-bold text-xs text-gray-900 dark:text-white">Continuous Growth</h5>
              <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-1 leading-relaxed">Rapid adoption of emerging frameworks, tools, and best practices.</p>
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100 text-white font-medium text-xs px-5 py-2.5 rounded-full shadow-xs transition-all cursor-pointer"
            >
              Get in Touch
            </button>
            <button
              onClick={onClose}
              className="text-xs font-medium text-gray-400 hover:text-black dark:hover:text-white cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
