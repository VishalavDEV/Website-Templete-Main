import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { capabilitiesData } from "../../data/capabilities";
import { SectionHeader } from "../common/SectionHeader";

export const CapabilitiesStackedSection: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-32 border-b border-[#E6E2D8] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="04"
          tag="Engineering Practices"
          title="Intelligent systems across six core disciplines."
          description="We combine deep mathematical research with enterprise cloud engineering to build software that scales effortlessly under extreme demand."
          actionText="View All Practices"
          actionTo="/capabilities"
        />

        {/* Vertically Stacked Large Horizontal Capability Rows */}
        <div className="border-t border-[#E6E2D8] divide-y divide-[#E6E2D8]">
          {capabilitiesData.map((cap, idx) => {
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={cap.id}
                onMouseEnter={() => setHoveredIdx(idx)}
                className={`relative group transition-colors duration-300 ${
                  isHovered ? "bg-[#F4F1EA]" : "bg-transparent"
                }`}
              >
                <Link
                  to={`/capabilities/${cap.slug}`}
                  className="block p-6 sm:p-8 lg:p-10"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    {/* Left: Number & Title */}
                    <div className="lg:col-span-6 flex items-baseline gap-6 sm:gap-8">
                      <span className="font-mono-tech text-base sm:text-lg text-[#0A2E23] font-bold shrink-0">
                        {cap.number}
                      </span>
                      <h3 className="font-serif-editorial text-2xl sm:text-3xl md:text-4xl text-[#121316] group-hover:text-[#0A2E23] transition-colors">
                        {cap.title}
                      </h3>
                    </div>

                    {/* Middle: Short Description & Tags (expanded when hovered or default visible on mobile) */}
                    <div className="lg:col-span-5">
                      <p className="text-sm sm:text-base text-[#5E636E] leading-relaxed">
                        {cap.shortDescription}
                      </p>

                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {cap.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="font-mono-tech text-[10px] uppercase px-2 py-0.5 bg-white/80 border border-[#E6E2D8] text-[#5E636E] rounded-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: Dynamic Interactive Arrow */}
                    <div className="lg:col-span-1 flex justify-end">
                      <div className="w-10 h-10 rounded-full border border-[#E6E2D8] group-hover:border-[#0A2E23] group-hover:bg-[#0A2E23] group-hover:text-[#CCF34A] text-[#121316] flex items-center justify-center transition-all duration-200 shrink-0">
                        <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Expanded Hover Visual & Offerings Drawer (Desktop Smooth Reveal) */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="hidden lg:grid grid-cols-12 gap-8 pt-8 mt-6 border-t border-[#E6E2D8]/60 overflow-hidden"
                      >
                        {/* 4 Offering items */}
                        <div className="col-span-8 grid grid-cols-2 gap-4">
                          {cap.offerings.map((offering) => (
                            <div key={offering.title} className="p-3.5 bg-white border border-[#E6E2D8] rounded-xs space-y-1">
                              <div className="font-mono-tech text-xs font-bold text-[#121316]">
                                {offering.title}
                              </div>
                              <div className="text-xs text-[#7C828D] line-clamp-2">
                                {offering.description}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Image Preview */}
                        <div className="col-span-4 h-32 rounded-xs overflow-hidden border border-[#E6E2D8] relative">
                          <img
                            src={cap.image}
                            alt={cap.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-[#0A2E23]/20" />
                          <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-[#121316]/90 text-[#FAF8F5] text-[10px] font-mono-tech rounded-xs">
                            PRACTICE // 0{idx + 1}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
