import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";

export default function DepartmentCard({ department }) {
  const IconComponent = Icons[department.iconName] || Icons.Activity;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className={`glass-card p-6 rounded-2xl border ${department.borderColor} hover:border-cyan-400 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden`}
    >
      {/* Dynamic background gradient bloom */}
      <div
        className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${department.color} blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none`}
      />

      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/10 text-cyan-400 group-hover:scale-110 group-hover:text-white group-hover:bg-cyan-500 transition-all duration-300 shadow-md">
            <IconComponent className="w-7 h-7" />
          </div>
          <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-900/60 border border-white/10 text-slate-300">
            {department.bedCount} Beds
          </span>
        </div>

        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
          {department.name}
        </h3>
        <p className="text-slate-400 text-sm mt-2 line-clamp-3 leading-relaxed">
          {department.shortDesc}
        </p>

        {/* Lead doctor & specialty pills */}
        <div className="mt-4 pt-4 border-t border-white/5 space-y-2">
          <div className="text-xs text-slate-400">
            Lead: <span className="text-slate-200 font-semibold">{department.leadDoctor}</span>
          </div>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {department.treatments.slice(0, 3).map((treatment, idx) => (
              <span
                key={idx}
                className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/5"
              >
                {treatment}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4">
        <Link
          to={`/departments#${department.id}`}
          className="inline-flex items-center space-x-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-all"
        >
          <span>Explore Department</span>
          <Icons.ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}
