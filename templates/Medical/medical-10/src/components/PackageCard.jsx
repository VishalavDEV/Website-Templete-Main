import React from "react";
import { motion } from "framer-motion";
import { Check, ShieldCheck, ArrowRight } from "lucide-react";

export default function PackageCard({ pkg, onSelect }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className={`glass-card p-6 md:p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between relative ${
        pkg.highlighted
          ? "border-cyan-400 bg-slate-900/90 shadow-2xl glow-cyan"
          : "border-white/10 hover:border-cyan-500/40"
      }`}
    >
      {pkg.highlighted && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg">
          {pkg.badge || "Best Value"}
        </div>
      )}

      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
          {!pkg.highlighted && pkg.badge && (
            <span className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-cyan-300 border border-white/10 font-semibold">
              {pkg.badge}
            </span>
          )}
        </div>
        <p className="text-xs text-slate-400 mt-1">{pkg.idealFor}</p>

        {/* Pricing */}
        <div className="my-6 flex items-baseline space-x-2">
          <span className="text-4xl font-extrabold text-white font-mono">{pkg.price}</span>
          {pkg.originalPrice && (
            <span className="text-base text-slate-500 line-through font-mono">{pkg.originalPrice}</span>
          )}
          <span className="text-xs text-slate-400">/ checkup</span>
        </div>

        <div className="py-2 px-3 rounded-xl bg-white/5 border border-white/5 text-xs text-cyan-300 font-medium mb-6">
          Includes <span className="font-bold text-white font-mono">{pkg.testCount}+</span> Diagnostic Biomarkers & Tests
        </div>

        {/* Feature Checkmarks */}
        <ul className="space-y-3 mb-8">
          {pkg.features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-xs text-slate-300 gap-2.5">
              <div className="p-0.5 rounded-full bg-cyan-500/20 text-cyan-400 mt-0.5 flex-shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={() => onSelect && onSelect(pkg)}
        className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-2 ${
          pkg.highlighted
            ? "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg hover:shadow-cyan-500/25"
            : "bg-white/10 hover:bg-cyan-500 text-white hover:text-white border border-white/10"
        }`}
      >
        <span>View Package & Book</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </motion.div>
  );
}
