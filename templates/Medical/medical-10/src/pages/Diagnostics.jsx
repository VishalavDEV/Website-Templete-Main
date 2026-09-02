import React, { useState } from "react";
import { Activity, TestTube, Clock, CheckCircle2, ShieldCheck, Home, FileText, Calendar } from "lucide-react";
import PageTransition from "../components/PageTransition";
import AppointmentModal from "../components/AppointmentModal";
import { diagnosticsData } from "../data/diagnosticsData";

export default function Diagnostics() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [appointmentData, setAppointmentData] = useState(null);

  const categories = ["All", ...new Set(diagnosticsData.map(d => d.category))];

  const filteredData = selectedCategory === "All"
    ? diagnosticsData
    : diagnosticsData.filter(d => d.category === selectedCategory);

  const handleBookTest = (test) => {
    setAppointmentData({
      department: `Diagnostic: ${test.title}`,
      doctor: "Pathology Specialist",
      bookingRef: Math.floor(100000 + Math.random() * 900000),
      date: "Tomorrow",
      time: "08:00 AM"
    });
    setIsModalOpen(true);
  };

  return (
    <PageTransition>
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        appointmentData={appointmentData}
      />

      <section className="relative pt-32 pb-16 border-b border-white/10 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            NABL & CAP Accredited Laboratory
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Diagnostics & Laboratory Center
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto font-light">
            High-throughput automated pathology, 3T MRI, low-dose CT angiography, and genomic biomarker analysis.
          </p>

          <div className="flex flex-wrap justify-center gap-2 pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-cyan-500 text-white shadow-lg glow-cyan"
                    : "bg-white/5 text-slate-400 hover:text-white border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnostics Catalog */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredData.map((test) => (
              <div
                key={test.id}
                className="glass-card p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      {test.category}
                    </span>
                    <span className="text-lg font-bold text-white font-mono">{test.price}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {test.title}
                  </h3>
                  <p className="text-slate-400 text-xs mt-2 leading-relaxed">{test.description}</p>

                  <div className="mt-4 p-3 rounded-xl bg-slate-900/60 border border-white/5 space-y-2 text-xs text-slate-300">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-cyan-400" /> Turnaround:
                      </span>
                      <span className="font-semibold text-white font-mono">{test.turnaround}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Preparation:</span>
                      <span className="font-semibold text-cyan-300">{test.fastingRequired}</span>
                    </div>
                  </div>

                  <div className="mt-3 text-[11px] text-slate-400 italic">
                    <span className="font-semibold text-slate-300">Prep Note:</span> {test.prepNotes}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Home className="w-3.5 h-3.5 text-emerald-400" /> Home Sample Available
                  </span>
                  <button
                    onClick={() => handleBookTest(test)}
                    className="py-2 px-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white font-semibold text-xs transition-colors"
                  >
                    Schedule Test
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
