import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Calendar, Clock, Award, CheckCircle2, ArrowLeft, User, Phone, Mail, ShieldCheck } from "lucide-react";
import PageTransition from "../components/PageTransition";
import AppointmentModal from "../components/AppointmentModal";
import { doctorsData } from "../data/doctorsData";

export default function DoctorDetails() {
  const { id } = useParams();
  const doctor = doctorsData.find(d => d.id === id) || doctorsData[0];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "10:00 AM",
    reason: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <PageTransition>
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        appointmentData={{
          ...formData,
          doctor: doctor.name,
          department: doctor.department,
          bookingRef: Math.floor(100000 + Math.random() * 900000)
        }}
      />

      <section className="pt-28 pb-12 bg-slate-950/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/doctors" className="inline-flex items-center space-x-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-semibold mb-6">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Doctors Directory</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <div className="relative rounded-3xl overflow-hidden glass-card border border-cyan-500/30 p-2 glow-cyan">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-80 lg:h-96 object-cover rounded-2xl object-top"
                />
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                  {doctor.department}
                </span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  Accepting Patients
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-white">{doctor.name}</h1>
              <p className="text-cyan-300 text-sm font-medium">{doctor.title}</p>

              <div className="flex items-center space-x-6 py-2">
                <div className="flex items-center space-x-1.5 text-amber-400 font-bold text-sm">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span>{doctor.rating}</span>
                  <span className="text-slate-400 text-xs font-normal">({doctor.reviewsCount} Patient Reviews)</span>
                </div>
                <div className="text-slate-300 text-xs font-semibold">
                  Experience: <span className="text-white font-mono">{doctor.experience}</span>
                </div>
                <div className="text-slate-300 text-xs font-semibold">
                  Fee: <span className="text-cyan-400 font-mono">{doctor.consultationFee}</span>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed max-w-3xl font-light">
                {doctor.bio}
              </p>

              <div className="pt-2">
                <div className="text-xs font-bold text-slate-300 mb-2 uppercase tracking-wider font-mono">
                  Education & Qualifications
                </div>
                <div className="text-xs text-cyan-400 bg-white/5 px-4 py-2 rounded-xl border border-white/10 inline-block font-mono">
                  {doctor.education}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details & Booking Form Grid */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Doctor Info Column */}
            <div className="lg:col-span-7 space-y-8">
              {/* Clinical Specialties */}
              <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Award className="w-5 h-5 text-cyan-400" /> Clinical Specialties
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {doctor.specialties.map((spec, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-slate-200 p-2.5 rounded-xl bg-white/5 border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-cyan-400" /> Honours & Key Achievements
                </h3>
                <ul className="space-y-2.5">
                  {doctor.achievements.map((ach, idx) => (
                    <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Embedded Quick Booking Form */}
            <div className="lg:col-span-5">
              <div className="glass-card p-6 rounded-3xl border border-cyan-500/30 shadow-2xl glow-cyan sticky top-28">
                <h3 className="text-xl font-bold text-white mb-1">Book Consultation</h3>
                <p className="text-xs text-slate-400 mb-6">Schedule directly with {doctor.name}</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 234-5678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Preferred Date *</label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs transition-all shadow-lg glow-cyan"
                  >
                    Confirm Booking ({doctor.consultationFee})
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </PageTransition>
  );
}
