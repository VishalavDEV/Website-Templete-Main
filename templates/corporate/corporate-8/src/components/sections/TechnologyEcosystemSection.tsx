import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Layers, ChevronDown, CheckCircle, Cpu, Shield, Database, Cloud, Terminal, Monitor } from "lucide-react";
import { technologyEcosystemLayers } from "../../data/technology";
import { SectionHeader } from "../common/SectionHeader";

export const TechnologyEcosystemSection: React.FC = () => {
  const [activeLayerId, setActiveLayerId] = useState<string>("experience");

  const currentLayer = technologyEcosystemLayers.find((l) => l.id === activeLayerId) || technologyEcosystemLayers[0];

  const getLayerIcon = (id: string) => {
    switch (id) {
      case "experience": return <Monitor className="w-4 h-4" />;
      case "applications": return <Terminal className="w-4 h-4" />;
      case "intelligence": return <Cpu className="w-4 h-4" />;
      case "data": return <Database className="w-4 h-4" />;
      case "cloud": return <Cloud className="w-4 h-4" />;
      case "security": return <Shield className="w-4 h-4" />;
      default: return <Layers className="w-4 h-4" />;
    }
  };

  return (
    <section className="py-20 md:py-32 border-b border-[#E6E2D8] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="08"
          tag="Technology Ecosystem"
          title="The 6-layer enterprise architecture stack."
          description="An interactive schematic of our composable systems stack, from front-end presentation down to zero-trust cryptographic substrates."
        />

        {/* Interactive Architecture Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: 6-Layer Interactive Vertical Hierarchy (5 cols) */}
          <div className="lg:col-span-5 space-y-2">
            <div className="font-mono-tech text-[11px] uppercase tracking-widest text-[#7C828D] mb-3 px-1 flex items-center justify-between">
              <span>Architectural Stratum</span>
              <span>Flow (Ingress ↓ Egress)</span>
            </div>

            {technologyEcosystemLayers.map((layer, index) => {
              const isActive = layer.id === activeLayerId;
              return (
                <div key={layer.id} className="space-y-1">
                  <button
                    type="button"
                    onClick={() => setActiveLayerId(layer.id)}
                    className={`w-full text-left p-4 rounded-xs border transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                      isActive
                        ? "bg-[#0A2E23] text-[#FAF8F5] border-[#0A2E23] shadow-md"
                        : "bg-white text-[#121316] border-[#E6E2D8] hover:border-[#0A2E23]/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xs ${isActive ? "bg-[#CCF34A] text-[#0A2E23]" : "bg-[#F5F2EB] text-[#0A2E23]"}`}>
                        {getLayerIcon(layer.id)}
                      </div>
                      <div>
                        <div className="font-mono-tech text-[10px] uppercase text-[#7C828D] group-hover:text-current">
                          Layer 0{layer.level}
                        </div>
                        <div className="font-serif-editorial text-lg font-normal">
                          {layer.name}
                        </div>
                      </div>
                    </div>

                    <span className={`font-mono-tech text-xs ${isActive ? "text-[#CCF34A]" : "text-[#7C828D]"}`}>
                      {layer.technologies.length} Techs
                    </span>
                  </button>

                  {/* Flow Arrow Indicator between layers */}
                  {index < technologyEcosystemLayers.length - 1 && (
                    <div className="flex justify-center py-0.5 text-[#C4BFB2]">
                      <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Selected Layer Blueprint Inspector (7 cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentLayer.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="bg-white border border-[#E6E2D8] p-6 sm:p-8 rounded-xs space-y-6"
              >
                {/* Header of the Layer */}
                <div className="pb-4 border-b border-[#E6E2D8] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="font-mono-tech text-xs text-[#0A2E23] uppercase font-bold flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#CCF34A] border border-[#0A2E23]" />
                      <span>Active Layer Inspection // 0{currentLayer.level}</span>
                    </div>
                    <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#121316] mt-1">
                      {currentLayer.name}
                    </h3>
                  </div>

                  {/* Protocols Badge */}
                  <div className="flex flex-wrap gap-1">
                    {currentLayer.protocols.map((p) => (
                      <span key={p} className="px-2 py-0.5 bg-[#FAF8F5] border border-[#E6E2D8] font-mono-tech text-[10px] text-[#5E636E] rounded-xs">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-[#5E636E] leading-relaxed">
                  {currentLayer.description}
                </p>

                {/* Technologies Grid */}
                <div className="space-y-3">
                  <div className="font-mono-tech text-xs uppercase text-[#0A2E23] font-bold">
                    Component Technologies & Core Role:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentLayer.technologies.map((tech) => (
                      <div key={tech.name} className="p-3 bg-[#FAF8F5] border border-[#E6E2D8] rounded-xs space-y-1">
                        <div className="flex items-center justify-between font-mono-tech text-xs">
                          <span className="font-bold text-[#121316]">{tech.name}</span>
                          <span className="text-[10px] text-[#7C828D] uppercase px-1.5 py-0.2 bg-white border border-[#E6E2D8] rounded-xs">
                            {tech.category}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#5E636E]">
                          {tech.role}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Architectural Principles */}
                <div className="pt-4 border-t border-[#E6E2D8] space-y-2">
                  <div className="font-mono-tech text-[10px] uppercase text-[#7C828D]">
                    Enforced Architectural Principles:
                  </div>
                  <ul className="space-y-1.5 font-mono-tech text-xs text-[#121316]">
                    {currentLayer.architecturalPrinciples.map((principle) => (
                      <li key={principle} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#0A2E23] shrink-0" />
                        <span>{principle}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
