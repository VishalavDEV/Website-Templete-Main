import React, { useState } from "react";
import { Stethoscope, UserCheck, ShieldCheck, TestTube, Activity, Ambulance, Heart, Video, ArrowRight } from "lucide-react";
import PageTransition from "../components/PageTransition";
import ServiceCard from "../components/ServiceCard";
import AppointmentModal from "../components/AppointmentModal";
import { servicesData } from "../data/servicesData";

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [appointmentData, setAppointmentData] = useState(null);

  const categories = ["All", ...new Set(servicesData.map(s => s.category))];

  const filteredServices = activeCategory === "All"
    ? servicesData
    : servicesData.filter(s => s.category === activeCategory);

  const handleBookService = (service) => {
    setAppointmentData({
      department: service.title,
      doctor: "Assigned Specialist",
      bookingRef: Math.floor(100000 + Math.random() * 900000),
      date: "Tomorrow",
      time: "10:00 AM"
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
            Healthcare Services
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Medical Services & Clinical Facilities
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto font-light">
            Explore outpatient care, high-precision diagnostics, surgical suites, and 24/7 trauma emergency services.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat
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

      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onBookClick={handleBookService}
              />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
