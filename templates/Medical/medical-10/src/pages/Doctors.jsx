import React, { useState } from "react";
import { Search, Filter, Stethoscope } from "lucide-react";
import PageTransition from "../components/PageTransition";
import DoctorCard from "../components/DoctorCard";
import AppointmentModal from "../components/AppointmentModal";
import { doctorsData } from "../data/doctorsData";

export default function Doctors() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");
  const [selectedDay, setSelectedDay] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [appointmentData, setAppointmentData] = useState(null);

  const departments = ["All", ...new Set(doctorsData.map(d => d.department))];
  const days = ["All", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const filteredDoctors = doctorsData.filter(doc => {
    const matchesSearch =
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesDept = selectedDept === "All" || doc.department === selectedDept;
    const matchesDay = selectedDay === "All" || doc.availableDays.includes(selectedDay);

    return matchesSearch && matchesDept && matchesDay;
  });

  const handleBookDoctor = (doc) => {
    setAppointmentData({
      doctor: doc.name,
      department: doc.department,
      bookingRef: Math.floor(100000 + Math.random() * 900000),
      date: "Tomorrow",
      time: doc.availableTime.split("-")[0] || "10:00 AM"
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

      {/* Banner */}
      <section className="relative pt-32 pb-16 border-b border-white/10 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            Medical Faculty Directory
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Meet Our Specialist Doctors
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto font-light">
            Search through board-certified physicians, surgeons, and department leads.
          </p>
        </div>
      </section>

      {/* Filter Controls Bar */}
      <section className="py-8 bg-slate-900/60 border-b border-white/10 sticky top-20 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by doctor name, specialty, or condition..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            {/* Department Filter */}
            <div className="md:col-span-3">
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400 transition-colors"
              >
                <option value="All">Filter by Department (All)</option>
                {departments.filter(d => d !== "All").map(d => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            {/* Day Filter */}
            <div className="md:col-span-3">
              <select
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400 transition-colors"
              >
                <option value="All">Filter by Available Day (All)</option>
                {days.filter(d => d !== "All").map(d => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredDoctors.length === 0 ? (
            <div className="text-center py-20 glass-card rounded-3xl text-slate-400 space-y-3">
              <Stethoscope className="w-12 h-12 text-cyan-400 mx-auto opacity-50" />
              <div className="text-lg font-bold text-white">No doctors match your criteria</div>
              <p className="text-xs">Try searching with a different keyword or resetting filters.</p>
              <button
                onClick={() => { setSearchQuery(""); setSelectedDept("All"); setSelectedDay("All"); }}
                className="px-4 py-2 rounded-xl bg-cyan-500 text-white text-xs font-semibold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredDoctors.map((doctor) => (
                <DoctorCard
                  key={doctor.id}
                  doctor={doctor}
                  onBookClick={handleBookDoctor}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  );
}
