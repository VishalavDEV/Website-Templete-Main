import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeartPulse, Mail, Phone, MapPin, Send, CheckCircle2, Shield, Heart, Award, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-8 text-slate-400 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-2 flex items-center justify-center text-white shadow-lg glow-cyan">
                <HeartPulse className="w-6 h-6 animate-pulse" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                AICARE<span className="text-cyan-400">PLUS</span> AI
              </span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Pioneering patient-centered healthcare through advanced AI diagnostics, board-certified specialists, and compassionate 24/7 emergency response.
            </p>

            {/* Accreditations */}
            <div className="flex items-center space-x-4 pt-2">
              <div className="flex items-center space-x-1.5 text-xs text-slate-300 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <Award className="w-4 h-4 text-cyan-400" />
                <span>JCI Accredited</span>
              </div>
              <div className="flex items-center space-x-1.5 text-xs text-slate-300 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>ISO 27001 Medical</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 font-mono">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { name: "About AICarePlus", path: "/about" },
                { name: "Specialist Doctors", path: "/doctors" },
                { name: "Medical Departments", path: "/departments" },
                { name: "Diagnostics Catalog", path: "/diagnostics" },
                { name: "Health Check Packages", path: "/packages" },
                { name: "Patient Resources", path: "/resources" },
                { name: "Medical FAQ", path: "/faq" }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-cyan-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 font-mono">
              Specialties
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                "Cardiology & Heart",
                "Neurology & Spine",
                "Orthopedics & Sports",
                "Pediatrics & Neonatal",
                "Dermatology & Laser",
                "Dental Surgery",
                "24/7 Emergency Care"
              ].map((dept) => (
                <li key={dept}>
                  <Link to="/departments" className="hover:text-cyan-400 transition-colors">
                    {dept}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Helpline */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase font-mono">
              Stay Informed
            </h4>
            <p className="text-xs text-slate-400">
              Subscribe to receiving health insights and hospital breakthroughs.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors pr-10"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 p-1.5 rounded-lg bg-cyan-500 text-white hover:bg-cyan-400 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 animate-fadeIn">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Subscribed successfully!
                </div>
              )}
            </form>

            <div className="pt-2">
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-xs">
                <div className="text-red-400 font-bold flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 animate-bounce" /> Emergency Helpline 24/7
                </div>
                <div className="text-white font-mono font-bold text-sm mt-0.5">+1 (800) 785-7322</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} AICarePlus AI Medical Center. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/resources" className="hover:text-slate-300">Privacy Policy</Link>
            <Link to="/resources" className="hover:text-slate-300">Terms of Service</Link>
            <Link to="/resources" className="hover:text-slate-300">Patient Rights</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
