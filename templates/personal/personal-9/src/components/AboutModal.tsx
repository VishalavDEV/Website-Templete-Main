import React from 'react';
import { X, Sparkles, Code2, Rocket, Heart, MapPin, Mail } from 'lucide-react';
import { PERSONAL_INFO, ABOUT_PILLARS } from '../data/portfolioData';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose, darkMode }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div
        className={`relative w-full max-w-2xl rounded-3xl border shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col ${
          darkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
          <div className="flex items-center gap-2">
            <span className="font-bold text-base">About Arjun Mehta</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto text-left space-y-6">
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop"
              alt="Arjun Mehta"
              className="w-16 h-16 rounded-2xl object-cover border-2 border-blue-500 shadow-md"
              referrerPolicy="no-referrer"
            />
            <div>
              <h2 className="text-xl font-bold font-heading">Arjun Mehta</h2>
              <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold">AI Engineer & Full-Stack Developer</p>
              <p className="text-xs text-slate-500">{PERSONAL_INFO.location}</p>
            </div>
          </div>

          <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            <p>
              I am an AI Engineer based in Bengaluru, India, pursuing my B.Tech in Artificial Intelligence & Data Science at Eastbridge Institute of Technology (CGPA: 8.7/10).
            </p>
            <p>
              My focus lies at the intersection of production Machine Learning systems, multimodal intelligence, and full-stack web applications. I love taking cutting-edge research and building delightful, lightning-fast tools that solve real-world problems.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Core Engineering Philosophy</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ABOUT_PILLARS.map((pillar, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                  <h4 className="font-bold text-xs text-slate-900 dark:text-white mb-1">{pillar.title}</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
