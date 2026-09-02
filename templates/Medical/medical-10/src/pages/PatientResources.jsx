import React from "react";
import { Download, FileText, Shield, Users, Lock, CheckCircle2, ArrowRight } from "lucide-react";
import PageTransition from "../components/PageTransition";

export default function PatientResources() {
  return (
    <PageTransition>
      <section className="relative pt-32 pb-16 border-b border-white/10 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            Patient Portal & Guidance
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Patient Resources & Information
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto font-light">
            Access downloadable admission forms, insurance claim guides, visitor policies, and digital health records portal information.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Digital Patient Portal Card */}
          <div className="glass-card p-8 sm:p-12 rounded-3xl border border-cyan-500/30 glow-cyan">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center space-x-2 text-xs text-cyan-400 font-mono">
                  <Lock className="w-4 h-4" />
                  <span>256-BIT ENCRYPTED HEALTH RECORDS</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  AICarePlus Digital Patient Portal
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  View lab results within 4 hours, access past radiology DICOM scans, download prescription history, and message your care team directly 24/7.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    "Instant Diagnostic Report Downloads",
                    "E-Prescriptions & Refill Requests",
                    "Telehealth HD Video Room Integration",
                    "Direct Physician Messaging"
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 glass-card p-6 rounded-2xl border border-white/10 bg-slate-900/60 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto border border-cyan-500/30">
                  <Lock className="w-8 h-8" />
                </div>
                <h4 className="text-base font-bold text-white">Patient Portal Sign In</h4>
                <button className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs shadow-lg">
                  Launch Secure Portal
                </button>
              </div>
            </div>
          </div>

          {/* Downloadable Forms Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Downloadable Patient Forms</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "New Patient Admission Form", desc: "PDF Form • 250 KB", category: "Admission" },
                { title: "Medical Release & Privacy Consent", desc: "PDF Form • 180 KB", category: "Privacy" },
                { title: "Pre-Surgical Instruction Guide", desc: "PDF Form • 420 KB", category: "Surgery" },
                { title: "Insurance Claim Pre-Auth Form", desc: "PDF Form • 310 KB", category: "Billing" },
                { title: "Pediatric Immunization Record Sheet", desc: "PDF Form • 210 KB", category: "Pediatrics" },
                { title: "Home Sample Collection Request Form", desc: "PDF Form • 190 KB", category: "Lab" }
              ].map((form, idx) => (
                <div key={idx} className="glass-card p-5 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all flex items-center justify-between group">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">{form.title}</h4>
                      <p className="text-[11px] text-slate-400 font-mono mt-0.5">{form.desc}</p>
                    </div>
                  </div>

                  <button className="p-2 rounded-xl bg-white/5 hover:bg-cyan-500 text-white transition-colors border border-white/10">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </PageTransition>
  );
}
