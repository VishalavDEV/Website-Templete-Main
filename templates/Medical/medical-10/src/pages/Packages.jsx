import React, { useState } from "react";
import { ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import PageTransition from "../components/PageTransition";
import PackageCard from "../components/PackageCard";
import AppointmentModal from "../components/AppointmentModal";
import { packagesData } from "../data/packagesData";

export default function Packages() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState(null);

  const handleSelectPackage = (pkg) => {
    setSelectedPkg(pkg);
    setIsModalOpen(true);
  };

  return (
    <PageTransition>
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        appointmentData={{
          department: `Health Checkup: ${selectedPkg?.name || "Executive Package"}`,
          doctor: "Preventive Care Lead",
          bookingRef: Math.floor(100000 + Math.random() * 900000),
          date: "Tomorrow",
          time: "08:30 AM"
        }}
      />

      <section className="relative pt-32 pb-16 border-b border-white/10 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            Preventive & Longevity Screening
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Comprehensive Health Packages
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto font-light">
            All-inclusive diagnostic screening packages tailored for individual wellness, family health, executive profiling, and senior longevity.
          </p>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packagesData.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                onSelect={handleSelectPackage}
              />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
