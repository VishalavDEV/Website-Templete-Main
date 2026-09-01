import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, ArrowRight, Layers, CheckCircle2, ShieldCheck } from 'lucide-react';
import { solutionsData } from '../../data/solutions';
import { IconHelper } from '../../components/common/IconHelper';
import { Button } from '../../components/common/Button';
import { CtaBanner } from '../../components/sections/CtaBanner';
import { staggerContainer, fadeUp } from '../../utils/animations';

export const SolutionsPage: React.FC = () => {
  return (
    <div className="pt-28 pb-16 bg-white text-slate-900">
      
      {/* Header Banner */}
      <section className="pb-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
            <Link to="/" className="hover:text-slate-800">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-900 font-semibold">Solutions</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Enterprise Technology Platforms
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Engineered blueprints and turn-key modernization architectures ready for rapid enterprise deployment.
            </p>
          </div>

        </div>
      </section>

      {/* Solutions Cards Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {solutionsData.map((sol) => (
              <motion.div
                key={sol.id}
                variants={fadeUp}
                className="bg-slate-50 border border-slate-200 hover:border-slate-400 rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between shadow-sm group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-800 border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition">
                      <IconHelper name={sol.iconName} className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {sol.roiStats[0]?.metric} {sol.roiStats[0]?.label}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-zinc-800 transition mb-3">
                    {sol.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {sol.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {sol.keyOutcomes.slice(0, 3).map((cap, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-slate-800 shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500">
                    {sol.architectureComponents.length} Architecture Modules
                  </span>
                  <Link
                    to={`/solutions/${sol.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-zinc-700 transition"
                  >
                    <span>Architecture Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      <CtaBanner />

    </div>
  );
};
