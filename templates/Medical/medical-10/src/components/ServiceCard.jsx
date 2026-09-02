import React from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";

export default function ServiceCard({ service, onBookClick }) {
  const IconComponent = Icons[service.iconName] || Icons.CheckCircle;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="glass-card p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
            <IconComponent className="w-6 h-6" />
          </div>
          {service.badge && (
            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
              {service.badge}
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
          {service.title}
        </h3>
        <p className="text-slate-400 text-sm mt-2 leading-relaxed">
          {service.description}
        </p>

        {/* Feature List */}
        <ul className="mt-4 space-y-2">
          {service.features.map((feat, idx) => (
            <li key={idx} className="flex items-center text-xs text-slate-300 gap-2">
              <Icons.Check className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
        <span className="text-xs text-slate-400 font-medium">{service.category}</span>
        <button
          onClick={() => onBookClick && onBookClick(service)}
          className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/5 hover:bg-cyan-500 hover:text-white text-cyan-300 transition-all border border-white/10"
        >
          Book Service
        </button>
      </div>
    </motion.div>
  );
}
