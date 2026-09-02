import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Clock, Calendar, Award, ArrowRight } from "lucide-react";

export default function DoctorCard({ doctor, onBookClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col h-full group"
    >
      {/* Image header with gradient overlay */}
      <div className="relative h-64 overflow-hidden bg-slate-900">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        
        {/* Rating Badge */}
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 flex items-center space-x-1.5 text-xs text-amber-300 font-semibold shadow-lg">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span>{doctor.rating}</span>
          <span className="text-slate-400 font-normal">({doctor.reviewsCount})</span>
        </div>

        {/* Experience Tag */}
        <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
          {doctor.experience} Exp.
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-1">
          {doctor.department}
        </div>
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
          {doctor.name}
        </h3>
        <p className="text-slate-400 text-xs mt-1 line-clamp-2">
          {doctor.title}
        </p>

        {/* Schedule & Fee */}
        <div className="mt-4 py-3 px-3 rounded-xl bg-slate-900/60 border border-white/5 space-y-2 text-xs text-slate-300">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-slate-400">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" /> Available:
            </span>
            <span className="font-semibold text-white">
              {doctor.availableDays.join(", ")}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-cyan-400" /> Hours:
            </span>
            <span className="font-semibold text-white">{doctor.availableTime}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2">
          <Link
            to={`/doctors/${doctor.id}`}
            className="flex-1 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1 group/btn"
          >
            <span>View Profile</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
          <button
            onClick={() => onBookClick && onBookClick(doctor)}
            className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-semibold transition-all shadow-md hover:shadow-cyan-500/20"
          >
            Book Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}
