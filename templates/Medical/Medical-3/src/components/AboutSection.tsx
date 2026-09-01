import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Microscope, HeartPulse, Building2, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const AboutSection: React.FC = () => {
  const { setActiveTab, openBooking } = useApp();

  return (
    <div id="about-section" className="py-20 sm:py-28 bg-[#FAF9F6] min-h-screen text-[#0A1128]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Hero Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A535C]/10 text-[#1A535C] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
              <Microscope className="w-3.5 h-3.5" />
              <span>Our Clinical Heritage</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1128] tracking-tight font-['Manrope'] mb-5">
              Advancing human health through precision, empathy & technology.
            </h1>
            <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed mb-6">
              Founded by physician-scientists, Aurevia Health was built on a single premise: clinical excellence should never be encumbered by bureaucratic friction. By unifying sub-millimeter robotic surgery, whole-exome genomic sequencing, and encrypted telehealth under one cohesive umbrella, we provide healthcare that moves at the speed of modern life.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200/80">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#0A1128] font-['Manrope']">99.4%</p>
                <p className="text-xs text-[#4A5568] font-bold uppercase tracking-wider">Procedural Efficacy Rate</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#0A1128] font-['Manrope']">140+</p>
                <p className="text-xs text-[#4A5568] font-bold uppercase tracking-wider">Clinical Trials Enrolled</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-[36px] overflow-hidden shadow-2xl border border-white aspect-[4/3] bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80"
                alt="Aurevia Surgical Robotics Suite"
                className="w-full h-full object-cover filter brightness-[0.96]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Clinical Leadership Quote Bento Tile */}
        <div className="p-8 sm:p-12 rounded-[36px] bg-[#0A1128] text-white mb-16 relative overflow-hidden border border-[#1A535C] shadow-2xl">
          <div className="max-w-3xl">
            <p className="text-lg sm:text-2xl font-medium leading-relaxed font-['Manrope'] mb-6 text-slate-100">
              &ldquo;Aurevia Health is not just a hospital network—it is an integrated clinical ecosystem where world-renowned specialists and state-of-the-art diagnostic instruments work in total synchrony for each individual patient.&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80"
                alt="Dr. Marcus Vance"
                className="w-12 h-12 rounded-full object-cover border-2 border-[#4ECDC4]"
                referrerPolicy="no-referrer"
              />
              <div>
                <h4 className="text-sm font-bold text-white">Dr. Marcus Vance, MD, PhD, FAANS</h4>
                <p className="text-xs text-[#4ECDC4]">Chief Medical Officer & Chair of Neurosurgery</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars of Excellence Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-7 rounded-[32px] bg-white border border-gray-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-[#1A535C]/10 text-[#1A535C] flex items-center justify-center mb-4">
                <Microscope className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0A1128] mb-2 font-['Manrope']">
                Genomic Precision Medicine
              </h3>
              <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                Every cancer and metabolic therapy is guided by on-site whole-exome sequencing, eliminating trial-and-error drug regimens.
              </p>
            </div>
          </div>

          <div className="p-7 rounded-[32px] bg-white border border-gray-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-[#1A535C]/10 text-[#1A535C] flex items-center justify-center mb-4">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0A1128] mb-2 font-['Manrope']">
                Multi-Disciplinary Heart Boards
              </h3>
              <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                Complex patient cases are evaluated jointly by surgical chairs, oncologists, pathologists, and genetic counselors for consensus care plans.
              </p>
            </div>
          </div>

          <div className="p-7 rounded-[32px] bg-white border border-gray-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-[#1A535C]/10 text-[#1A535C] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0A1128] mb-2 font-['Manrope']">
                JCI Gold Seal & Magnet Award
              </h3>
              <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                Ranked among top tier international healthcare institutions, maintaining the strictest standards for patient safety and infection prevention.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Bento Banner */}
        <div className="p-8 sm:p-10 rounded-[36px] bg-white border border-gray-200 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A535C] block mb-1">
              Personalized Consultation
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A1128] font-['Manrope']">
              Experience the Aurevia Difference
            </h3>
            <p className="text-xs text-[#4A5568] mt-1">
              Book a consultation with our department chairs or sub-specialists today.
            </p>
          </div>
          <button
            onClick={() => openBooking()}
            className="px-8 py-3.5 rounded-full bg-[#0A1128] text-white text-xs font-bold shadow-md hover:bg-[#1A535C] transition-all shrink-0 cursor-pointer"
          >
            Schedule Consultation →
          </button>
        </div>

      </div>
    </div>
  );
};
